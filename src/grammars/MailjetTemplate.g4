grammar MailjetTemplate;

template: templateElement*;

templateElement
    : text
    | comment
    | variable
    | ifBlock
    | forBlock
    | htmlTag
    ;

text: TEXT;

comment: COMMENT;

variable
    : VAR_START 'var:' identifier (':' STRING)? VAR_END        # MailjetVariable
    | VAR_START identifier ('|' filter)* VAR_END               # SimpleVariable
    | VAR_START 'params.' identifier ('|' filter)* VAR_END     # BrevoVariable
    ;

filter: filterName ('(' filterArg (',' filterArg)* ')')?;
filterName: identifier;
filterArg: (STRING | NUMBER | identifier);

ifBlock
    : IF_START 'var:' expression BLOCK_END 
      templateElement* 
      elseIfBlock*
      elseBlock?
      END_IF                                             # MailjetIfBlock
    | IF_START 'params.' expression BLOCK_END
      templateElement* 
      elseIfBlock*
      elseBlock?
      END_IF                                             # BrevoIfBlock
    | IF_START expression BLOCK_END
      templateElement* 
      elseIfBlock*
      elseBlock?
      END_IF                                             # NormalIfBlock
    ;

elseIfBlock
    : ELSEIF_START expression BLOCK_END templateElement*
    | ELSE_IF_START expression BLOCK_END templateElement*
    | ELIF_START expression BLOCK_END templateElement*
    ;

elseBlock
    : ELSE_START BLOCK_END templateElement*
    ;

forBlock
    : FOR_START identifier 'in' 'var:' identifier BLOCK_END 
      templateElement* 
      END_FOR                                           # MailjetForBlock
    | FOR_START identifier 'in' 'params.' identifier BLOCK_END 
      templateElement* 
      END_FOR                                           # BrevoForBlock
    | FOR_START identifier 'in' identifier BLOCK_END 
      templateElement* 
      END_FOR                                           # NormalForBlock
    | FOR_START identifier 'in' 'range' '(' rangeArgs ')' BLOCK_END 
      templateElement* 
      END_FOR                                           # RangeForBlock
    ;

rangeArgs: NUMBER (',' NUMBER (',' NUMBER)?)?;

expression
    : identifier                               # IdentifierExpr
    | 'item.' identifier                       # ItemPropertyExpr
    | identifier comparisonOp value            # ComparisonExpr
    | 'item.' identifier comparisonOp value    # ItemComparisonExpr
    | value                                    # ValueExpr
    ;

comparisonOp
    : '=='
    | '!='
    | '>'
    | '<'
    | '>='
    | '<='
    ;

value
    : STRING
    | NUMBER
    | 'true'
    | 'false'
    | identifier
    ;

htmlTag
    : HTML_TAG
    | MJML_TAG
    ;

identifier: IDENTIFIER;

// Lexer Rules
VAR_START: '{{';
VAR_END: '}}';
IF_START: '{%' WS* 'if' WS+;
ELSEIF_START: '{%' WS* 'elseif' WS+;
ELSE_IF_START: '{%' WS* 'else' WS+ 'if' WS+;
ELIF_START: '{%' WS* 'elif' WS+;
ELSE_START: '{%' WS* 'else' WS*;
END_IF: '{%' WS* 'endif' WS* '%}';
FOR_START: '{%' WS* 'for' WS+;
END_FOR: '{%' WS* 'endfor' WS* '%}';
BLOCK_END: '%}';

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
STRING: '"' ( ESC | ~[\\"] )* '"' | '\'' ( ESC | ~[\\'] )* '\'';
NUMBER: [0-9]+ ('.' [0-9]+)?;
WS: [ \t\r\n]+;
ESC: '\\' [\\"];
COMMENT: '{#' .*? '#}';
HTML_TAG: '<' ~[>]* '>';
MJML_TAG: '<mj-' ~[>]* '>';
TEXT: ~[{<]+;