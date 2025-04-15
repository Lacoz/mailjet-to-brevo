import fs from 'fs';
import path from 'path';
import { MJMLService } from '../services/mjmlService.js';

/**
 * Converts an MJML file with Mailjet syntax to HTML with Brevo syntax
 * 
 * This function reads an MJML template file, processes it through the MJML renderer
 * while transforming Mailjet variable syntax to Brevo syntax, and outputs an HTML file.
 * 
 * @param {string} mjmlFilePath - Path to the source MJML file with Mailjet syntax
 * @param {string} outputPath - Path for the resulting HTML file (optional, defaults to same name/location with .html extension)
 * @param {Object} options - Additional processing options
 * @param {boolean} [options.strict=false] - When true, fails on unconvertible syntax patterns
 * @param {boolean} [options.savePreview=false] - When true, saves variable preview data to a JSON file
 * @returns {Object} - Object containing HTML content, output path, and preview data
 */
const convertMJMLToHTML = async (mjmlFilePath, outputPath, options = {}) => {
    // Read the MJML file
    const mjmlContent = fs.readFileSync(mjmlFilePath, 'utf-8');
    
    // Determine the output path if not provided
    const finalOutputPath = outputPath || path.join(
        path.dirname(mjmlFilePath),
        `${path.basename(mjmlFilePath, '.mjml')}.html`
    );
    
    // Render MJML with permissive validation and automatic syntax conversion
    const renderResult = MJMLService.render(mjmlContent, {
        validationLevel: 'skip',
        strictSyntax: options.strict // Controls whether to fail on unconvertible syntax patterns
    });
    
    // Save the rendered HTML
    MJMLService.saveHTML(renderResult.html, finalOutputPath);
    console.log(`HTML output saved to: ${finalOutputPath}`);
    
    // Save preview data if requested
    if (options.savePreview) {
        const previewDataPath = path.join(
            path.dirname(finalOutputPath),
            `${path.basename(finalOutputPath, '.html')}.preview.json`
        );
        
        MJMLService.savePreviewData(renderResult.previewData, previewDataPath);
        console.log(`Preview data saved to: ${previewDataPath}`);
    }
    
    // Display preview data in console
    console.log('\nTemplate Variables:');
    
    console.log(JSON.stringify(renderResult.previewData, null, 2));

    return {
        html: renderResult.html,
        outputPath: finalOutputPath,
        previewData: renderResult.previewData
    };
};

/**
 * Command handler for the 'convert' command
 * 
 * Processes command arguments and options before calling the conversion function.
 * Handles errors and provides user feedback.
 * 
 * @param {string} mjmlFilePath - Path to input MJML file with Mailjet syntax
 * @param {string} outputPath - Path for output HTML file (optional)
 * @param {Object} options - Additional options from command line
 * @param {boolean} [options.strict=false] - Enable strict syntax validation
 * @param {boolean} [options.savePreview=false] - Save preview data as JSON
 * @returns {Object} - Result containing HTML content, output path, and preview data
 */
export const convertCommand = async (mjmlFilePath, outputPath, options = {}) => {
    if (!mjmlFilePath) {
        console.error('Error: Missing required MJML file path');
        console.error('Usage: mailjet-to-brevo convert <path-to-mjml-file> [output-path] [options]');
        process.exit(1);
    }

    try {
        const result = await convertMJMLToHTML(mjmlFilePath, outputPath, options);
        return result;
    } catch (error) {
        console.error('Error converting MJML to HTML:', error);
        process.exit(1);
    }
};

// Handle direct script execution
if (import.meta.url === import.meta.main) {
    const args = process.argv.slice(2);
    const mjmlFilePath = args[0];
    const outputPath = args[1];
    
    // Parse command-line options
    const options = {
        strict: args.includes('--strict'), // Enable strict validation
        savePreview: args.includes('--save-preview') // Save preview data to JSON file
    };
    
    await convertCommand(mjmlFilePath, outputPath, options);
}

