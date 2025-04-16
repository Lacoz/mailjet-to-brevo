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

    it('should not convert simple variable references', () => {
      const input = '<div>{{userName}}</div>';
      const expected = '<div>{{userName}}</div>';
      
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

    it('should not convert regular if statements', () => {
      const input = '{% if isActive == "true" %}Active{% endif %}';
      const expected = '{% if isActive == "true" %}Active{% endif %}';
      
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

    it('should not convert regular for loops', () => {
      const input = '{% for item in items %}{{item.name}}{% endfor %}';
      const expected = '{% for item in items %}{{item.name}}{% endfor %}';
      
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


  describe('nested conditional logic', () => {
    beforeEach(() => {
      sinon.stub(MJMLService, 'extractTemplateVariables').returns({
        items: [
          { name: 'Product 1', discount: 10 },
          { name: 'Product 2', discount: 0 }
        ],
        orderId: '12345'
      });
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should properly handle if conditions inside for loops', () => {
      const template = `
        {% for item in var:items %}
          {{item.name}}
          {% if item.discount > 0 %}Has discount: {{item.discount}}%{% endif %}
        {% endfor %}
      `;
      
      const expected = `
        {% for item in params.items %}
          {{item.name}}
          {% if item.discount > 0 %}Has discount: {{item.discount}}%{% endif %}
        {% endfor %}
      `;
      
      const result = MJMLService.convertMailjetToBrevo(template);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should preserve item properties in nested conditions', () => {
      const template = `
        {% for item in var:items %}
          {{item.name}}
          {% if item.discount == 10 %}
            Special discount applies
          {% elseif item.discount > 0 %}
            Regular discount: {{item.discount}}%
          {% else %}
            No discount
          {% endif %}
        {% endfor %}
      `;
      
      const expected = `
        {% for item in params.items %}
          {{item.name}}
          {% if item.discount == 10 %}
            Special discount applies
          {% elif item.discount > 0 %}
            Regular discount: {{item.discount}}%
          {% else %}
            No discount
          {% endif %}
        {% endfor %}
      `;
      
      const result = MJMLService.convertMailjetToBrevo(template);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

    it('should process real-world template with nested logic correctly', () => {
      // Using the example provided from transactional.mjml
      const template = `
        <mj-text>Your order {{var:orderId}} has been shipped.</mj-text>
        {% if var:trackingNumber %}
          <mj-text>Tracking Number: {{var:trackingNumber}}</mj-text>
        {% else %}
          <mj-text>No tracking information available.</mj-text>
        {% endif %}
        {% for item in var:items %}
          <mj-text>Item: {{item.name}} </mj-text>
          {% if item.discount > 1 %}<mj-text>Discount is {{item.discount}}</mj-text>{% endif %}
        {% endfor %}
      `;
      
      const expected = `
        <mj-text>Your order {{params.orderId}} has been shipped.</mj-text>
        {% if params.trackingNumber %}
          <mj-text>Tracking Number: {{params.trackingNumber}}</mj-text>
        {% else %}
          <mj-text>No tracking information available.</mj-text>
        {% endif %}
        {% for item in params.items %}
          <mj-text>Item: {{item.name}} </mj-text>
          {% if item.discount > 1 %}<mj-text>Discount is {{item.discount}}</mj-text>{% endif %}
        {% endfor %}
      `;
      
      const result = MJMLService.convertMailjetToBrevo(template);
      
      expect(result.content).to.equal(expected);
      expect(result.canBeConverted).to.be.true;
    });

  });
});
