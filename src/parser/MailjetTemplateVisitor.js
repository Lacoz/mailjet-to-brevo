import antlr4 from 'antlr4';

// This is a simplified version of what ANTLR would generate
export class MailjetTemplateVisitor extends antlr4.tree.ParseTreeVisitor {
  constructor() {
    super();
  }

  // Visit a parse tree produced by MailjetTemplateParser#template
  visitTemplate(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#templateElement
  visitTemplateElement(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#text
  visitText(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#comment
  visitComment(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#MailjetVariable
  visitMailjetVariable(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#SimpleVariable
  visitSimpleVariable(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#BrevoVariable
  visitBrevoVariable(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#filter
  visitFilter(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#filterName
  visitFilterName(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#filterArg
  visitFilterArg(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#MailjetIfBlock
  visitMailjetIfBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#BrevoIfBlock
  visitBrevoIfBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#NormalIfBlock
  visitNormalIfBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#elseIfBlock
  visitElseIfBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#elseBlock
  visitElseBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#MailjetForBlock
  visitMailjetForBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#BrevoForBlock
  visitBrevoForBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#NormalForBlock
  visitNormalForBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#RangeForBlock
  visitRangeForBlock(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#rangeArgs
  visitRangeArgs(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#IdentifierExpr
  visitIdentifierExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#ItemPropertyExpr
  visitItemPropertyExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#ComparisonExpr
  visitComparisonExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#ItemComparisonExpr
  visitItemComparisonExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#ValueExpr
  visitValueExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#comparisonOp
  visitComparisonOp(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#value
  visitValue(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#htmlTag
  visitHtmlTag(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by MailjetTemplateParser#identifier
  visitIdentifier(ctx) {
    return this.visitChildren(ctx);
  }
}