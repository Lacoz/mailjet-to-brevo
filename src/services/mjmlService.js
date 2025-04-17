import mjml2html from 'mjml';
import fs from 'fs';
import path from 'path';
import antlr4 from 'antlr4';
import { MailjetTemplateLexer } from '../parser/MailjetTemplateLexer.js';
import { MailjetTemplateParser } from '../parser/MailjetTemplateParser.js';


export class MJMLService {
  /**
   * Convert Mailjet syntax to Brevo syntax using ANTLR4 parser
   * @param {string} content - HTML content with Mailjet syntax
   * @returns {Object} - Result with converted content and any unconvertible patterns
   */
  static convertMailjetToBrevo(content) {
    try {
      // Create the lexer and parser
      const chars = new antlr4.InputStream(content);
      const lexer = new MailjetTemplateLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new MailjetTemplateParser(tokens);
      
      // Parse the input
      const tree = parser.template();
      
      // Visit the parse tree with our visitor
      const visitor = new MailjetToBrevoVisitor();
      visitor.visit(tree);
      
      // Get results and errors
      const convertedContent = visitor.result;
      const unconvertiblePatterns = visitor.errors.map(error => ({
        pattern: error.pattern,
        message: error.message
      }));
      
      return {
        content: convertedContent,
        unconvertiblePatterns,
        canBeConverted: unconvertiblePatterns.length === 0
      };
    } catch (error) {
      console.error('Error parsing template:', error);
      return {
        content: content, // Return original content
        unconvertiblePatterns: [{
          pattern: 'Unknown',
          message: `Parser error: ${error.message}`
        }],
        canBeConverted: false
      };
    }
  }

  /**
   * Extract variables data from template for preview purposes
   * @param {string} content - HTML/MJML content
   * @returns {Object} - Object with extracted variables and their default values
   */
  static extractTemplateVariables(content) {
    // Existing implementation
    const variablePattern = /\{\{(?:var:)?([a-zA-Z0-9_\-.]+)(?::\"([^\"]*)\"|:[^}]*|)\s*\}\}/g;
    const variables = {};
    let match;
    
    while ((match = variablePattern.exec(content)) !== null) {
      const varName = match[1];
      const defaultValue = match[2] || '';
      
      // Clean up variable names
      const cleanVarName = varName.trim();
      
      // Don't override if we already have this variable
      if (!variables[cleanVarName]) {
        variables[cleanVarName] = defaultValue;
      }
    }
    
    // Extract loop variables: {% for item in items %}
    const loopPattern = /{%\s*for\s+([a-zA-Z0-9_]+)\s+in\s+(?:var:)?([a-zA-Z0-9_]+)\s*%}/g;
    while ((match = loopPattern.exec(content)) !== null) {
      const loopVar = match[2].trim();
      if (!variables[loopVar]) {
        // Add empty array as placeholder for loop variables
        variables[loopVar] = [];
      }
    }
    
    // Extract condition variables: {% if condition == "value" %}
    const conditionPattern = /{%\s*if\s+(?:var:)?([a-zA-Z0-9_]+)\s*([=!<>]+)\s*[\"']?([^\"'\s}%]*)[\"']?\s*%}/g;
    while ((match = conditionPattern.exec(content)) !== null) {
      const condVar = match[1].trim();
      const condValue = match[3] || '';
      if (!variables[condVar]) {
        variables[condVar] = condValue;
      }
    }
    
    return variables;
  }

  /**
   * Render MJML content to HTML with permissive options and automatic syntax conversion
   * @param {string} mjmlContent - The MJML content to render
   * @param {Object} options - Rendering options
   * @returns {Object} - Result with HTML content and variable data
   */
  static render(mjmlContent, options = {}) {
    // Configure MJML with permissive options
    const mjmlOptions = {
      keepComments: true,
      minify: false,
      beautify: true,
      validationLevel: options.validationLevel || 'skip',
      filePath: options.filePath,
      ignoreIncludes: true
    };
    
    try {
      // Extract variables for preview
      const previewData = this.extractTemplateVariables(mjmlContent);
      
      // First, convert any template syntax
      const conversionResult = this.convertMailjetToBrevo(mjmlContent);
      
      // Check if there are unconvertible patterns
      if (conversionResult.unconvertiblePatterns.length > 0) {
        console.warn('Warning: Unconvertible patterns:');
        conversionResult.unconvertiblePatterns.forEach(p => {
          console.warn(`  - ${p.message}`);
        });
        
        if (options.strictSyntax) {
          throw new Error('Cannot convert Mailjet syntax to Brevo: ' + 
            conversionResult.unconvertiblePatterns.map(p => p.message).join(', '));
        }
      }
      
      // Now render the MJML to HTML
      const result = mjml2html(conversionResult.content, mjmlOptions);
      
      return {
        html: result.html,
        previewData
      };
    } catch (error) {
      console.error('MJML rendering or conversion error:', error);
      throw error;
    }
  }
  
  /**
   * Save rendered HTML to a file
   * @param {string} htmlContent - Rendered HTML content
   * @param {string} outputPath - Path to save the HTML
   * @returns {string} - Path to the saved file
   */
  static saveHTML(htmlContent, outputPath) {
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, htmlContent);
    return outputPath;
  }
  
  /**
   * Save template preview data to a file
   * @param {Object} previewData - Preview data for different platforms
   * @param {string} outputPath - Path to save the data
   * @returns {string} - Path to the saved file
   */
  static savePreviewData(previewData, outputPath) {
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(previewData, null, 2));
    return outputPath;
  }
}