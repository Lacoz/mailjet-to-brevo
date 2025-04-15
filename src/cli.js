import { program } from 'commander';
import { convertCommand } from './commands/convert.js';

program
  .description('A CLI tool for converting Mailjet MJML templates to Brevo-compatible HTML');

program
  .command('convert <mjmlPath> [outputPath]')
  .description('Convert a Mailjet MJML template to a Brevo-compatible HTML file with automatic syntax conversion')
  .option('--strict', 'Enable strict validation mode that fails on unconvertible patterns')
  .option('--save-preview', 'Save a JSON file with template variable preview data for both formats')
  .action((mjmlPath, outputPath, options) => {
    convertCommand(mjmlPath, outputPath, options);
  });


program.parse(process.argv);