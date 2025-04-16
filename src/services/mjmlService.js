import mjml2html from 'mjml';
import fs from 'fs';
import path from 'path';

export class MJMLService {
  /**
   * Convert Mailjet syntax to Brevo syntax
   * @param {string} content - HTML content with Mailjet syntax
   * @returns {Object} - Result with converted content and any unconvertible patterns
   */
  static convertMailjetToBrevo(content) {
    // Track any patterns we couldn't convert
    const unconvertiblePatterns = [];
    let convertedContent = content;

    // 1. Convert variable syntax with default values
    // Mailjet: {{var:VARNAME:"default value"}} -> Brevo: {{params.VARNAME|default:"default value"}}
    convertedContent = convertedContent.replace(/\{\{var:([^}|:"]+)(?::\"([^\"]*)\")?\s*\}\}/g, 
      (match, varName, defaultValue) => {
        if (defaultValue) {
          return `{{params.${varName.trim()}|default:"${defaultValue}"}}`;
        }
        return `{{params.${varName.trim()}}}`;
      }
    );
    
    // 2. Convert if statements with var: prefix
    // Mailjet: {% if var:variable == "value" %} -> Brevo: {% if params.variable == "value" %}
    convertedContent = convertedContent.replace(/{%\s*if\s+var:([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Add params. prefix to variables in condition
        const newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        return `{% if ${newCondition} %}`;
      }
    );
    
    // 3. Convert for loops with var: prefix
    // Mailjet: {% for item in var:items %} -> Brevo: {% for item in params.items %}
    convertedContent = convertedContent.replace(/{%\s*for\s+([a-zA-Z0-9_]+)\s+in\s+var:([^}%]+)\s*%}/g, 
      (match, itemVar, collection) => {
        return `{% for ${itemVar} in params.${collection.trim()} %}`;
      }
    );
    
    // 4. Convert elseif statements to elif (Brevo uses elif instead of elseif)
    convertedContent = convertedContent.replace(/{%\s*elseif\s+([^}%]+)\s*%}/g, 
      (match, condition) => {
        return `{% elif ${condition.trim()} %}`;
      }
    );
    
    // 5. Standardize "else if" -> "elif" (Brevo uses elif)
    convertedContent = convertedContent.replace(/{%\s*else\s+if\s+([^}%]+)\s*%}/g, 
      (match, condition) => {
        return `{% elif ${condition.trim()} %}`;
      }
    );

    // 6. Check for unsupported Brevo features according to documentation
    const unsupportedFeatures = [
      { 
        pattern: /{%\s*set\s+/, 
        message: "Tag 'set' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*include\s+/, 
        message: "Tag 'include' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*extends\s+/, 
        message: "Tag 'extends' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*block\s+/, 
        message: "Tag 'block' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*macro\s+/, 
        message: "Tag 'macro' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*import\s+/, 
        message: "Tag 'import' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*from\s+/, 
        message: "Tag 'from' is not supported in Brevo" 
      },
      { 
        pattern: /\|\s*date_modify/, 
        message: "Filter 'date_modify' is not supported in Brevo" 
      },
      { 
        pattern: /\|\s*trans/, 
        message: "Filter 'trans' is not supported in Brevo" 
      },
      { 
        pattern: /\|\s*raw/, 
        message: "Filter 'raw' is not supported in Brevo" 
      },
      { 
        pattern: /\|\s*batch/, 
        message: "Filter 'batch' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*autoescape\s+/, 
        message: "Tag 'autoescape' is not supported in Brevo" 
      },
      { 
        pattern: /{%\s*spaceless\s+/, 
        message: "Tag 'spaceless' is not supported in Brevo" 
      }
    ];
    
    unsupportedFeatures.forEach(({pattern, message}) => {
      if (pattern.test(convertedContent)) {
        const match = convertedContent.match(pattern);
        if (match) {
          unconvertiblePatterns.push({
            pattern: match[0],
            message
          });
        }
      }
    });

    return {
      content: convertedContent,
      unconvertiblePatterns,
      canBeConverted: unconvertiblePatterns.length === 0
    };
  }

  /**
   * Extract variables data from template for preview purposes
   * @param {string} content - HTML/MJML content
   * @returns {Object} - Object with extracted variables and their default values
   */
  static extractTemplateVariables(content) {
    // Extract variables with default values: {{ var:varName:"default value" }}
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