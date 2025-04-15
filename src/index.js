// Main entry point that imports and re-exports everything needed
import { program } from 'commander';
import { convertCommand } from './commands/convert.js';
import { sendCommand } from './commands/send.js';
import { analyzeCommand } from './commands/analyze.js';
import { previewCommand } from './commands/preview.js';

export {
  convertCommand,
  sendCommand,
  analyzeCommand,
  previewCommand
};

// If this file is called directly, run the CLI
if (import.meta.url === import.meta.main) {
  import('./cli.js');
}

const initCLI = () => {
    program
        .version('1.0.0')
        .description('MJML Email Sender CLI');

    program
        .command('convert <templatePath> <templateName>')
        .description('Convert MJML template to Brevo template')
        .action((templatePath, templateName) => {
            convertCommand(templatePath, templateName);
        });

    // Add other commands here
    // program
    //   .command('send <templatePath> <variablesPath>')
    //   .description('Send rendered MJML as a raw HTML email')
    //   .option('-r, --recipient <email>', 'Email recipient')
    //   .action((templatePath, variablesPath, options) => {
    //     sendCommand(templatePath, variablesPath, options);
    //   });

    program.parse(process.argv);
};

initCLI();