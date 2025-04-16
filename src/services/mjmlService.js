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
    
    // 2. Convert any remaining simple variable references (without default values)
    // {{varName}} -> {{params.varName}}
    convertedContent = convertedContent.replace(/\{\{\s*([^}|:"]+)(?!\|default|\.)(?:\s*\|\s*([^}]+))?\s*\}\}/g, 
      (match, varName, filter) => {
        // Skip if already processed or contains dots (object notation)
        if (match.includes('params.') || varName.includes('.')) {
          return match;
        }
        
        // Handle variables with filters
        if (filter) {
          return `{{params.${varName.trim()} | ${filter}}}`;
        }
        
        // Simple variable replacement
        return `{{params.${varName.trim()}}}`;
      }
    );

    // 3. Convert if statements with var: prefix
    // Mailjet: {% if var:variable == "value" %} -> Brevo: {% if params.variable == "value" %}
    convertedContent = convertedContent.replace(/{%\s*if\s+var:([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Add params. prefix to variables in condition
        const newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        return `{% if ${newCondition} %}`;
      }
    );
    
    // Also handle regular if statements (no var: prefix)
    convertedContent = convertedContent.replace(/{%\s*if\s+([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Skip if already processed
        if (condition.includes('params.')) {
          return match;
        }
        
        // Add params. prefix to variables in condition
        const newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        return `{% if ${newCondition} %}`;
      }
    );
    
    // 4. Convert for loops
    // Mailjet: {% for item in var:items %} -> Brevo: {% for item in params.items %}
    convertedContent = convertedContent.replace(/{%\s*for\s+([a-zA-Z0-9_]+)\s+in\s+var:([^}%]+)\s*%}/g, 
      (match, itemVar, collection) => {
        return `{% for ${itemVar} in params.${collection.trim()} %}`;
      }
    );
    
    // Also handle regular for loops (no var: prefix)
    convertedContent = convertedContent.replace(/{%\s*for\s+([a-zA-Z0-9_]+)\s+in\s+([^}%]+)\s*%}/g, 
      (match, itemVar, collection) => {
        // Skip if already processed or if it's not a variable name (e.g. a range)
        if (collection.includes('params.') || collection.includes('range')) {
          return match;
        }
        
        return `{% for ${itemVar} in params.${collection.trim()} %}`;
      }
    );
    
    // Special case: Fix variable references inside for loops with range
    // We need this to handle cases like {% for n in range(1, 5) %}{{n}}{% endfor %}
    // where 'n' shouldn't be prefixed with params.
    convertedContent = convertedContent.replace(/{%\s*for\s+([a-zA-Z0-9_]+)\s+in\s+range\([^}%]+\s*%}(.*?){%\s*endfor\s*%}/gs,
      (match, loopVar, loopContent) => {
        // Fix loop variables by removing params. prefix from the loop variable
        const fixedContent = loopContent.replace(
          new RegExp(`{{\\s*params\\.${loopVar}\\b([^}]*)}}`, 'g'),
          `{{${loopVar}$1}}`
        );
        return match.replace(loopContent, fixedContent);
      }
    );
    
    // 5. Convert elseif statements to elif (Brevo uses elif instead of elseif)
    // First convert var: prefixed elseif
    convertedContent = convertedContent.replace(/{%\s*elseif\s+var:([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Add params. prefix to variables in condition
        const newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        return `{% elif ${newCondition} %}`;
      }
    );
    
    // Then convert regular elseif statements (no var: prefix)
    convertedContent = convertedContent.replace(/{%\s*elseif\s+([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Skip if already processed
        if (condition.includes('params.')) {
          return `{% elif ${condition.trim()} %}`;
        }
        
        // Add params. prefix to variables in condition
        const newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        return `{% elif ${newCondition} %}`;
      }
    );
    
    // 6. Standardize "else if" -> "elif" (Brevo uses elif)
    convertedContent = convertedContent.replace(/{%\s*else\s+if\s+([^}%]+)\s*%}/g, 
      (match, condition) => {
        // Add params. prefix to variables in condition if not already present
        let newCondition = condition;
        if (!condition.includes('params.')) {
          newCondition = condition.trim().replace(/\b([a-zA-Z0-9_]+)(\s*[=!<>]+)/g, 'params.$1$2');
        }
        return `{% elif ${newCondition} %}`;
      }
    );

    // 7. Handle object access in loops (don't prefix these with params)
    // For example: {{ offer.link }} in a for loop should remain as is
    // This is handled by skipping variables with dots in step 2

    // 8. Check for unsupported Brevo features according to documentation
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
      keepComments: false,
      minify: false,
      beautify: true,
      validationLevel: options.validationLevel || 'skip',
      filePath: options.filePath,
      ignoreIncludes: true
    };
    
    try {
      // Extract variables for preview before any conversion
      const previewData = this.extractTemplateVariables(mjmlContent);
      
      // First, try to convert any template syntax within the MJML itself
      // This handles variables in the MJML attributes
      const preMjmlConversion = this.convertMailjetToBrevo(mjmlContent);
      
      // Check if there are unconvertible patterns in the MJML
      if (preMjmlConversion.unconvertiblePatterns.length > 0) {
        console.warn('Warning: Unconvertible patterns in MJML:');
        preMjmlConversion.unconvertiblePatterns.forEach(p => {
          console.warn(`  - ${p.message}`);
        });
        
        if (options.strictSyntax) {
          throw new Error('Cannot convert Mailjet syntax to Brevo: ' + 
            preMjmlConversion.unconvertiblePatterns.map(p => p.message).join(', '));
        }
      }
      
      // Render the MJML to HTML
      const result = mjml2html(preMjmlConversion.content, mjmlOptions);
      
      // Now convert any template syntax in the rendered HTML
      const conversionResult = this.convertMailjetToBrevo(result.html);
      
      // Check if there are unconvertible patterns in the HTML
      if (conversionResult.unconvertiblePatterns.length > 0) {
        console.warn('Warning: Unconvertible patterns in rendered HTML:');
        conversionResult.unconvertiblePatterns.forEach(p => {
          console.warn(`  - ${p.message}`);
        });
        
        // If we're in strict mode, fail the conversion
        if (options.strictSyntax) {
          throw new Error('Cannot convert Mailjet syntax to Brevo: ' + 
            conversionResult.unconvertiblePatterns.map(p => p.message).join(', '));
        }
      }
      
      return {
        html: conversionResult.content,
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