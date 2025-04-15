import { program } from 'commander';
import { convertCommand } from './commands/convert.js';

program
  .version('1.0.0')
  .description('Mailjet to Brevo conversion CLI');

program
  .command('convert <mjmlPath> [outputPath]')
  .description('Convert Mailjet MJML template to HTML Brevo template file')
  .option('--strict', 'Use strict validation (fails on unconvertible patterns)')
  .option('--save-preview', 'Save template variable preview data as JSON')
  .action((mjmlPath, outputPath, options) => {
    convertCommand(mjmlPath, outputPath, options);
  });


program.parse(process.argv);