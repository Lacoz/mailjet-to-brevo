import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import sinon from 'sinon';
import { MJMLService } from '../../src/services/mjmlService.js';
import mjml from 'mjml';

// Mock file system operations
let mockFs;

describe('MJMLService', () => {
  beforeEach(() => {
    // Set up stubs before each test
    mockFs = {
      existsSync: sinon.stub(fs, 'existsSync'),
      mkdirSync: sinon.stub(fs, 'mkdirSync'),
      writeFileSync: sinon.stub(fs, 'writeFileSync'),
      readFileSync: sinon.stub(fs, 'readFileSync')
    };
    mockFs.existsSync.returns(true);
  });

  afterEach(() => {
    // Clean up all stubs after each test
    sinon.restore();
  });

  describe('convertMailjetToBrevo', () => {
    it('should convert variable syntax with default values', () => {
      const input = '<div>{{var:userName:"John Doe"}}</div>';
      const expected = '<div>{{params.userName|default:"John Doe"}}</div>';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert variable syntax without default values', () => {
      const input = '<div>{{var:userName}}</div>';
      const expected = '<div>{{params.userName}}</div>';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert simple variable references', () => {
      const input = '<div>{{userName}}</div>';
      const expected = '<div>{{params.userName}}</div>';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should handle variables with filters', () => {
      const input = '<div>{{userName | capitalize}}</div>';
      const expected = '<div>{{params.userName | capitalize}}</div>';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should not modify already processed variables', () => {
      const input = '<div>{{params.userName}}</div>';
      const expected = '<div>{{params.userName}}</div>';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert if statements with var: prefix', () => {
      const input = '{% if var:isActive == "true" %}Active{% endif %}';
      const expected = '{% if params.isActive == "true" %}Active{% endif %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert regular if statements', () => {
      const input = '{% if isActive == "true" %}Active{% endif %}';
      const expected = '{% if params.isActive == "true" %}Active{% endif %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert for loops with var: prefix', () => {
      const input = '{% for item in var:items %}{{item.name}}{% endfor %}';
      const expected = '{% for item in params.items %}{{item.name}}{% endfor %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert regular for loops', () => {
      const input = '{% for item in items %}{{item.name}}{% endfor %}';
      const expected = '{% for item in params.items %}{{item.name}}{% endfor %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should not modify for loops that use range', () => {
      const input = '{% for n in range(1, 5) %}{{n}}{% endfor %}';
      const expected = '{% for n in range(1, 5) %}{{n}}{% endfor %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert elseif statements to elif', () => {
      const input = '{% if condition1 %}Yes{% elseif condition2 %}Maybe{% endif %}';
      const expected = '{% if condition1 %}Yes{% elif condition2 %}Maybe{% endif %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should convert else if statements to elif', () => {
      const input = '{% if condition1 %}Yes{% else if condition2 %}Maybe{% endif %}';
      const expected = '{% if condition1 %}Yes{% elif condition2 %}Maybe{% endif %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should not modify dot notation in loops', () => {
      const input = '{% for item in items %}{{item.name}}{% endfor %}';
      const expected = '{% for item in params.items %}{{item.name}}{% endfor %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should detect unsupported Brevo features', () => {
      const input = '{% set variable = "value" %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.canBeConverted).to.be.false;
      expect(result.unconvertiblePatterns).to.have.lengthOf(1);
      expect(result.unconvertiblePatterns[0].message).to.include('set');
    });

    it('should detect multiple unsupported features', () => {
      const input = '{% set var1 = "val1" %}{% include "template.html" %}';
      
      const result = MJMLService.convertMailjetToBrevo(input);
      
      expect(result.canBeConverted).to.be.false;
      expect(result.unconvertiblePatterns).to.have.lengthOf(2);
    });
  });

  describe('saveHTML', () => {
    it('should create directory if it does not exist', () => {
      mockFs.existsSync.returns(false);
      
      MJMLService.saveHTML('<html></html>', '/path/to/output.html');
      
      expect(mockFs.mkdirSync.calledOnce).to.be.true;
      expect(mockFs.writeFileSync.calledOnce).to.be.true;
    });

    it('should not create directory if it exists', () => {
      mockFs.existsSync.returns(true);
      
      MJMLService.saveHTML('<html></html>', '/path/to/output.html');
      
      expect(mockFs.mkdirSync.called).to.be.false;
      expect(mockFs.writeFileSync.calledOnce).to.be.true;
    });

    it('should save file with correct content', () => {
      const content = '<html><body>Test content</body></html>';
      const outputPath = '/path/to/output.html';
      
      MJMLService.saveHTML(content, outputPath);
      
      expect(mockFs.writeFileSync.calledWith(outputPath, content)).to.be.true;
    });
  });

  describe('savePreviewData', () => {
    it('should create directory if it does not exist', () => {
      mockFs.existsSync.returns(false);
      
      MJMLService.savePreviewData({ test: 'data' }, '/path/to/preview.json');
      
      expect(mockFs.mkdirSync.calledOnce).to.be.true;
      expect(mockFs.writeFileSync.calledOnce).to.be.true;
    });

    it('should not create directory if it exists', () => {
      mockFs.existsSync.returns(true);
      
      MJMLService.savePreviewData({ test: 'data' }, '/path/to/preview.json');
      
      expect(mockFs.mkdirSync.called).to.be.false;
      expect(mockFs.writeFileSync.calledOnce).to.be.true;
    });

    it('should save file with stringified JSON', () => {
      const data = { userName: 'John', isActive: true };
      const outputPath = '/path/to/preview.json';
      
      MJMLService.savePreviewData(data, outputPath);
      
      const expectedContent = JSON.stringify(data, null, 2);
      expect(mockFs.writeFileSync.calledWith(outputPath, expectedContent)).to.be.true;
    });
  });
});