import { MailjetTemplateVisitor } from '../parser/MailjetTemplateVisitor.js';

export class MailjetToBrevoVisitor extends MailjetTemplateVisitor {
  constructor() {
    super();
    this.result = '';
    this.errors = [];
  }

  // Override the visit methods to transform from Mailjet to Brevo syntax
  visitMailjetVariable(ctx) {
    const identifier = ctx.identifier().getText();
    let defaultValue = '';
    
    if (ctx.STRING()) {
      defaultValue = `|default:${ctx.STRING().getText()}`;
    }
    
    this.result += `{{params.${identifier}${defaultValue}}}`;
    return null;
  }

  visitMailjetIfBlock(ctx) {
    // Transform var: prefix to params.
    const expression = ctx.expression().getText();
    const transformedExpr = expression.replace(/\bvar:([a-zA-Z0-9_]+)/g, 'params.$1');
    
    this.result += `{% if ${transformedExpr} %}`;
    
    // Visit child elements
    const elements = ctx.templateElement();
    for (const element of elements) {
      this.visit(element);
    }
    
    // Visit elseif blocks
    const elseIfBlocks = ctx.elseIfBlock();
    for (const elseIf of elseIfBlocks) {
      this.visit(elseIf);
    }
    
    // Visit else block if present
    if (ctx.elseBlock()) {
      this.visit(ctx.elseBlock());
    }
    
    this.result += '{% endif %}';
    return null;
  }

  visitMailjetForBlock(ctx) {
    const loopVar = ctx.identifier(0).getText();
    const collection = ctx.identifier(1).getText();
    
    this.result += `{% for ${loopVar} in params.${collection} %}`;
    
    // Visit child elements
    const elements = ctx.templateElement();
    for (const element of elements) {
      this.visit(element);
    }
    
    this.result += '{% endfor %}';
    return null;
  }
  
  // Add more visit methods for other node types...
  
  // Default visit method to handle any nodes not explicitly handled
  defaultResult() {
    return null;
  }
}