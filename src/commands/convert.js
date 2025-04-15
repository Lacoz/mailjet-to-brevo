import fs from 'fs';
import path from 'path';
import { MJMLService } from '../services/mjmlService.js';

/**
 * Convert MJML file to HTML file locally with Mailjet->Brevo syntax conversion
 * @param {string} mjmlFilePath - Path to MJML file
 * @param {string} outputPath - Path for output HTML file (optional)
 * @param {Object} options - Additional options
 * @returns {Object} - Result with HTML content and path
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
        strictSyntax: options.strict // Only used if we want to fail on unconvertible patterns
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
    console.log('\nTemplate Variables Preview:');
    
    console.log('\nMailjet Format:');
    console.log(JSON.stringify(renderResult.previewData.mailjet, null, 2));
    
    console.log('\nBrevo Format:');
    console.log(JSON.stringify(renderResult.previewData.brevo, null, 2));

    return {
        html: renderResult.html,
        outputPath: finalOutputPath,
        previewData: renderResult.previewData
    };
};

/**
 * Convert MJML file to HTML file
 * @param {string} mjmlFilePath - Path to input MJML file
 * @param {string} outputPath - Path for output HTML file (optional)
 * @param {Object} options - Additional options
 * @returns {Object} - Result with HTML content and path
 */
export const convertCommand = async (mjmlFilePath, outputPath, options = {}) => {
    if (!mjmlFilePath) {
        console.error('Usage: mjml-sender convert <path-to-mjml-file> [output-path]');
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
        strict: args.includes('--strict'), // Optional: fail on unconvertible patterns
        savePreview: args.includes('--save-preview') // Optional: save preview data to JSON file
    };
    
    await convertCommand(mjmlFilePath, outputPath, options);
}

