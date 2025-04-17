// Generated from src/grammars/MailjetTemplate.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MailjetTemplateListener from './MailjetTemplateListener.js';
const serializedATN = [4,1,38,307,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,
1,4,1,4,3,4,60,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,68,8,4,10,4,12,4,71,9,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,80,8,4,10,4,12,4,83,9,4,1,4,1,4,3,4,87,8,4,
1,5,1,5,1,5,1,5,1,5,5,5,94,8,5,10,5,12,5,97,9,5,1,5,1,5,3,5,101,8,5,1,6,
1,6,1,7,1,7,1,7,3,7,108,8,7,1,8,1,8,1,8,1,8,1,8,5,8,115,8,8,10,8,12,8,118,
9,8,1,8,5,8,121,8,8,10,8,12,8,124,9,8,1,8,3,8,127,8,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,5,8,136,8,8,10,8,12,8,139,9,8,1,8,5,8,142,8,8,10,8,12,8,145,9,
8,1,8,3,8,148,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,
1,8,5,8,162,8,8,10,8,12,8,165,9,8,1,8,3,8,168,8,8,1,8,1,8,3,8,172,8,8,1,
9,1,9,1,9,1,9,5,9,178,8,9,10,9,12,9,181,9,9,1,9,1,9,1,9,1,9,5,9,187,8,9,
10,9,12,9,190,9,9,1,9,1,9,1,9,1,9,5,9,196,8,9,10,9,12,9,199,9,9,3,9,201,
8,9,1,10,1,10,1,10,5,10,206,8,10,10,10,12,10,209,9,10,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,5,11,218,8,11,10,11,12,11,221,9,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,5,11,232,8,11,10,11,12,11,235,9,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,5,11,245,8,11,10,11,12,11,248,9,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,261,8,11,10,11,12,11,264,
9,11,1,11,1,11,3,11,268,8,11,1,12,1,12,1,12,1,12,1,12,3,12,275,8,12,3,12,
277,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,292,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,301,8,15,1,16,1,16,
1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,
2,1,0,11,16,1,0,36,37,337,0,39,1,0,0,0,2,48,1,0,0,0,4,50,1,0,0,0,6,52,1,
0,0,0,8,86,1,0,0,0,10,88,1,0,0,0,12,102,1,0,0,0,14,107,1,0,0,0,16,171,1,
0,0,0,18,200,1,0,0,0,20,202,1,0,0,0,22,267,1,0,0,0,24,269,1,0,0,0,26,291,
1,0,0,0,28,293,1,0,0,0,30,300,1,0,0,0,32,302,1,0,0,0,34,304,1,0,0,0,36,38,
3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,1,1,0,
0,0,41,39,1,0,0,0,42,49,3,4,2,0,43,49,3,6,3,0,44,49,3,8,4,0,45,49,3,16,8,
0,46,49,3,22,11,0,47,49,3,32,16,0,48,42,1,0,0,0,48,43,1,0,0,0,48,44,1,0,
0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,3,1,0,0,0,50,51,5,38,0,
0,51,5,1,0,0,0,52,53,5,35,0,0,53,7,1,0,0,0,54,55,5,19,0,0,55,56,5,1,0,0,
56,59,3,34,17,0,57,58,5,2,0,0,58,60,5,31,0,0,59,57,1,0,0,0,59,60,1,0,0,0,
60,61,1,0,0,0,61,62,5,20,0,0,62,87,1,0,0,0,63,64,5,19,0,0,64,69,3,34,17,
0,65,66,5,3,0,0,66,68,3,10,5,0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,
69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,5,20,0,0,73,87,1,0,0,0,74,
75,5,19,0,0,75,76,5,4,0,0,76,81,3,34,17,0,77,78,5,3,0,0,78,80,3,10,5,0,79,
77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,
1,0,0,0,84,85,5,20,0,0,85,87,1,0,0,0,86,54,1,0,0,0,86,63,1,0,0,0,86,74,1,
0,0,0,87,9,1,0,0,0,88,100,3,12,6,0,89,90,5,5,0,0,90,95,3,14,7,0,91,92,5,
6,0,0,92,94,3,14,7,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,
0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,7,0,0,99,101,1,0,0,0,100,89,1,0,
0,0,100,101,1,0,0,0,101,11,1,0,0,0,102,103,3,34,17,0,103,13,1,0,0,0,104,
108,5,31,0,0,105,108,5,32,0,0,106,108,3,34,17,0,107,104,1,0,0,0,107,105,
1,0,0,0,107,106,1,0,0,0,108,15,1,0,0,0,109,110,5,21,0,0,110,111,5,1,0,0,
111,112,3,26,13,0,112,116,5,29,0,0,113,115,3,2,1,0,114,113,1,0,0,0,115,118,
1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,122,1,0,0,0,118,116,1,0,0,0,
119,121,3,18,9,0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,
1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,125,127,3,20,10,0,126,125,1,0,0,
0,126,127,1,0,0,0,127,128,1,0,0,0,128,129,5,26,0,0,129,172,1,0,0,0,130,131,
5,21,0,0,131,132,5,4,0,0,132,133,3,26,13,0,133,137,5,29,0,0,134,136,3,2,
1,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,
143,1,0,0,0,139,137,1,0,0,0,140,142,3,18,9,0,141,140,1,0,0,0,142,145,1,0,
0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,146,
148,3,20,10,0,147,146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,
26,0,0,150,172,1,0,0,0,151,152,5,21,0,0,152,153,3,26,13,0,153,157,5,29,0,
0,154,156,3,2,1,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,
1,0,0,0,158,163,1,0,0,0,159,157,1,0,0,0,160,162,3,18,9,0,161,160,1,0,0,0,
162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,167,1,0,0,0,165,163,
1,0,0,0,166,168,3,20,10,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,
0,169,170,5,26,0,0,170,172,1,0,0,0,171,109,1,0,0,0,171,130,1,0,0,0,171,151,
1,0,0,0,172,17,1,0,0,0,173,174,5,22,0,0,174,175,3,26,13,0,175,179,5,29,0,
0,176,178,3,2,1,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,180,
1,0,0,0,180,201,1,0,0,0,181,179,1,0,0,0,182,183,5,23,0,0,183,184,3,26,13,
0,184,188,5,29,0,0,185,187,3,2,1,0,186,185,1,0,0,0,187,190,1,0,0,0,188,186,
1,0,0,0,188,189,1,0,0,0,189,201,1,0,0,0,190,188,1,0,0,0,191,192,5,24,0,0,
192,193,3,26,13,0,193,197,5,29,0,0,194,196,3,2,1,0,195,194,1,0,0,0,196,199,
1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,
200,173,1,0,0,0,200,182,1,0,0,0,200,191,1,0,0,0,201,19,1,0,0,0,202,203,5,
25,0,0,203,207,5,29,0,0,204,206,3,2,1,0,205,204,1,0,0,0,206,209,1,0,0,0,
207,205,1,0,0,0,207,208,1,0,0,0,208,21,1,0,0,0,209,207,1,0,0,0,210,211,5,
27,0,0,211,212,3,34,17,0,212,213,5,8,0,0,213,214,5,1,0,0,214,215,3,34,17,
0,215,219,5,29,0,0,216,218,3,2,1,0,217,216,1,0,0,0,218,221,1,0,0,0,219,217,
1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,219,1,0,0,0,222,223,5,28,0,0,
223,268,1,0,0,0,224,225,5,27,0,0,225,226,3,34,17,0,226,227,5,8,0,0,227,228,
5,4,0,0,228,229,3,34,17,0,229,233,5,29,0,0,230,232,3,2,1,0,231,230,1,0,0,
0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,233,
1,0,0,0,236,237,5,28,0,0,237,268,1,0,0,0,238,239,5,27,0,0,239,240,3,34,17,
0,240,241,5,8,0,0,241,242,3,34,17,0,242,246,5,29,0,0,243,245,3,2,1,0,244,
243,1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,249,1,0,
0,0,248,246,1,0,0,0,249,250,5,28,0,0,250,268,1,0,0,0,251,252,5,27,0,0,252,
253,3,34,17,0,253,254,5,8,0,0,254,255,5,9,0,0,255,256,5,5,0,0,256,257,3,
24,12,0,257,258,5,7,0,0,258,262,5,29,0,0,259,261,3,2,1,0,260,259,1,0,0,0,
261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,
1,0,0,0,265,266,5,28,0,0,266,268,1,0,0,0,267,210,1,0,0,0,267,224,1,0,0,0,
267,238,1,0,0,0,267,251,1,0,0,0,268,23,1,0,0,0,269,276,5,32,0,0,270,271,
5,6,0,0,271,274,5,32,0,0,272,273,5,6,0,0,273,275,5,32,0,0,274,272,1,0,0,
0,274,275,1,0,0,0,275,277,1,0,0,0,276,270,1,0,0,0,276,277,1,0,0,0,277,25,
1,0,0,0,278,292,3,34,17,0,279,280,5,10,0,0,280,292,3,34,17,0,281,282,3,34,
17,0,282,283,3,28,14,0,283,284,3,30,15,0,284,292,1,0,0,0,285,286,5,10,0,
0,286,287,3,34,17,0,287,288,3,28,14,0,288,289,3,30,15,0,289,292,1,0,0,0,
290,292,3,30,15,0,291,278,1,0,0,0,291,279,1,0,0,0,291,281,1,0,0,0,291,285,
1,0,0,0,291,290,1,0,0,0,292,27,1,0,0,0,293,294,7,0,0,0,294,29,1,0,0,0,295,
301,5,31,0,0,296,301,5,32,0,0,297,301,5,17,0,0,298,301,5,18,0,0,299,301,
3,34,17,0,300,295,1,0,0,0,300,296,1,0,0,0,300,297,1,0,0,0,300,298,1,0,0,
0,300,299,1,0,0,0,301,31,1,0,0,0,302,303,7,1,0,0,303,33,1,0,0,0,304,305,
5,30,0,0,305,35,1,0,0,0,33,39,48,59,69,81,86,95,100,107,116,122,126,137,
143,147,157,163,167,171,179,188,197,200,207,219,233,246,262,267,274,276,
291,300];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MailjetTemplateParser extends antlr4.Parser {

    static grammarFileName = "MailjetTemplate.g4";
    static literalNames = [ null, "'var:'", "':'", "'|'", "'params.'", "'('", 
                            "','", "')'", "'in'", "'range'", "'item.'", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'true'", "'false'", "'{{'", "'}}'", null, null, 
                            null, null, null, null, null, null, "'%}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "VAR_START", "VAR_END", "IF_START", 
                             "ELSEIF_START", "ELSE_IF_START", "ELIF_START", 
                             "ELSE_START", "END_IF", "FOR_START", "END_FOR", 
                             "BLOCK_END", "IDENTIFIER", "STRING", "NUMBER", 
                             "WS", "ESC", "COMMENT", "HTML_TAG", "MJML_TAG", 
                             "TEXT" ];
    static ruleNames = [ "template", "templateElement", "text", "comment", 
                         "variable", "filter", "filterName", "filterArg", 
                         "ifBlock", "elseIfBlock", "elseBlock", "forBlock", 
                         "rangeArgs", "expression", "comparisonOp", "value", 
                         "htmlTag", "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MailjetTemplateParser.ruleNames;
        this.literalNames = MailjetTemplateParser.literalNames;
        this.symbolicNames = MailjetTemplateParser.symbolicNames;
    }



	template() {
	    let localctx = new TemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MailjetTemplateParser.RULE_template);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	            this.state = 36;
	            this.templateElement();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	templateElement() {
	    let localctx = new TemplateElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MailjetTemplateParser.RULE_templateElement);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.text();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.comment();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.variable();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.ifBlock();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.forBlock();
	            break;
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.htmlTag();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MailjetTemplateParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MailjetTemplateParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MailjetTemplateParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(MailjetTemplateParser.COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MailjetTemplateParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MailjetVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(MailjetTemplateParser.VAR_START);
	            this.state = 55;
	            this.match(MailjetTemplateParser.T__0);
	            this.state = 56;
	            this.identifier();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 57;
	                this.match(MailjetTemplateParser.T__1);
	                this.state = 58;
	                this.match(MailjetTemplateParser.STRING);
	            }

	            this.state = 61;
	            this.match(MailjetTemplateParser.VAR_END);
	            break;

	        case 2:
	            localctx = new SimpleVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(MailjetTemplateParser.VAR_START);
	            this.state = 64;
	            this.identifier();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 65;
	                this.match(MailjetTemplateParser.T__2);
	                this.state = 66;
	                this.filter();
	                this.state = 71;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 72;
	            this.match(MailjetTemplateParser.VAR_END);
	            break;

	        case 3:
	            localctx = new BrevoVariableContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.match(MailjetTemplateParser.VAR_START);
	            this.state = 75;
	            this.match(MailjetTemplateParser.T__3);
	            this.state = 76;
	            this.identifier();
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 77;
	                this.match(MailjetTemplateParser.T__2);
	                this.state = 78;
	                this.filter();
	                this.state = 83;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 84;
	            this.match(MailjetTemplateParser.VAR_END);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filter() {
	    let localctx = new FilterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MailjetTemplateParser.RULE_filter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.filterName();
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 89;
	            this.match(MailjetTemplateParser.T__4);
	            this.state = 90;
	            this.filterArg();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 91;
	                this.match(MailjetTemplateParser.T__5);
	                this.state = 92;
	                this.filterArg();
	                this.state = 97;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 98;
	            this.match(MailjetTemplateParser.T__6);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filterName() {
	    let localctx = new FilterNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MailjetTemplateParser.RULE_filterName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filterArg() {
	    let localctx = new FilterArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MailjetTemplateParser.RULE_filterArg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 104;
	            this.match(MailjetTemplateParser.STRING);
	            break;
	        case 32:
	            this.state = 105;
	            this.match(MailjetTemplateParser.NUMBER);
	            break;
	        case 30:
	            this.state = 106;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifBlock() {
	    let localctx = new IfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MailjetTemplateParser.RULE_ifBlock);
	    var _la = 0;
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MailjetIfBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.match(MailjetTemplateParser.IF_START);
	            this.state = 110;
	            this.match(MailjetTemplateParser.T__0);
	            this.state = 111;
	            this.expression();
	            this.state = 112;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 113;
	                this.templateElement();
	                this.state = 118;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0)) {
	                this.state = 119;
	                this.elseIfBlock();
	                this.state = 124;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 125;
	                this.elseBlock();
	            }

	            this.state = 128;
	            this.match(MailjetTemplateParser.END_IF);
	            break;

	        case 2:
	            localctx = new BrevoIfBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.match(MailjetTemplateParser.IF_START);
	            this.state = 131;
	            this.match(MailjetTemplateParser.T__3);
	            this.state = 132;
	            this.expression();
	            this.state = 133;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 134;
	                this.templateElement();
	                this.state = 139;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0)) {
	                this.state = 140;
	                this.elseIfBlock();
	                this.state = 145;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 146;
	                this.elseBlock();
	            }

	            this.state = 149;
	            this.match(MailjetTemplateParser.END_IF);
	            break;

	        case 3:
	            localctx = new NormalIfBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 151;
	            this.match(MailjetTemplateParser.IF_START);
	            this.state = 152;
	            this.expression();
	            this.state = 153;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 154;
	                this.templateElement();
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 29360128) !== 0)) {
	                this.state = 160;
	                this.elseIfBlock();
	                this.state = 165;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 166;
	                this.elseBlock();
	            }

	            this.state = 169;
	            this.match(MailjetTemplateParser.END_IF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfBlock() {
	    let localctx = new ElseIfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MailjetTemplateParser.RULE_elseIfBlock);
	    var _la = 0;
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.match(MailjetTemplateParser.ELSEIF_START);
	            this.state = 174;
	            this.expression();
	            this.state = 175;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 176;
	                this.templateElement();
	                this.state = 181;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.match(MailjetTemplateParser.ELSE_IF_START);
	            this.state = 183;
	            this.expression();
	            this.state = 184;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 185;
	                this.templateElement();
	                this.state = 190;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 191;
	            this.match(MailjetTemplateParser.ELIF_START);
	            this.state = 192;
	            this.expression();
	            this.state = 193;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 194;
	                this.templateElement();
	                this.state = 199;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseBlock() {
	    let localctx = new ElseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MailjetTemplateParser.RULE_elseBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(MailjetTemplateParser.ELSE_START);
	        this.state = 203;
	        this.match(MailjetTemplateParser.BLOCK_END);
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	            this.state = 204;
	            this.templateElement();
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forBlock() {
	    let localctx = new ForBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MailjetTemplateParser.RULE_forBlock);
	    var _la = 0;
	    try {
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MailjetForBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.match(MailjetTemplateParser.FOR_START);
	            this.state = 211;
	            this.identifier();
	            this.state = 212;
	            this.match(MailjetTemplateParser.T__7);
	            this.state = 213;
	            this.match(MailjetTemplateParser.T__0);
	            this.state = 214;
	            this.identifier();
	            this.state = 215;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 216;
	                this.templateElement();
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 222;
	            this.match(MailjetTemplateParser.END_FOR);
	            break;

	        case 2:
	            localctx = new BrevoForBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.match(MailjetTemplateParser.FOR_START);
	            this.state = 225;
	            this.identifier();
	            this.state = 226;
	            this.match(MailjetTemplateParser.T__7);
	            this.state = 227;
	            this.match(MailjetTemplateParser.T__3);
	            this.state = 228;
	            this.identifier();
	            this.state = 229;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 230;
	                this.templateElement();
	                this.state = 235;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 236;
	            this.match(MailjetTemplateParser.END_FOR);
	            break;

	        case 3:
	            localctx = new NormalForBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(MailjetTemplateParser.FOR_START);
	            this.state = 239;
	            this.identifier();
	            this.state = 240;
	            this.match(MailjetTemplateParser.T__7);
	            this.state = 241;
	            this.identifier();
	            this.state = 242;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 243;
	                this.templateElement();
	                this.state = 248;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 249;
	            this.match(MailjetTemplateParser.END_FOR);
	            break;

	        case 4:
	            localctx = new RangeForBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 251;
	            this.match(MailjetTemplateParser.FOR_START);
	            this.state = 252;
	            this.identifier();
	            this.state = 253;
	            this.match(MailjetTemplateParser.T__7);
	            this.state = 254;
	            this.match(MailjetTemplateParser.T__8);
	            this.state = 255;
	            this.match(MailjetTemplateParser.T__4);
	            this.state = 256;
	            this.rangeArgs();
	            this.state = 257;
	            this.match(MailjetTemplateParser.T__6);
	            this.state = 258;
	            this.match(MailjetTemplateParser.BLOCK_END);
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 983301) !== 0)) {
	                this.state = 259;
	                this.templateElement();
	                this.state = 264;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 265;
	            this.match(MailjetTemplateParser.END_FOR);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rangeArgs() {
	    let localctx = new RangeArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MailjetTemplateParser.RULE_rangeArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(MailjetTemplateParser.NUMBER);
	        this.state = 276;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 270;
	            this.match(MailjetTemplateParser.T__5);
	            this.state = 271;
	            this.match(MailjetTemplateParser.NUMBER);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 272;
	                this.match(MailjetTemplateParser.T__5);
	                this.state = 273;
	                this.match(MailjetTemplateParser.NUMBER);
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MailjetTemplateParser.RULE_expression);
	    try {
	        this.state = 291;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new ItemPropertyExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 279;
	            this.match(MailjetTemplateParser.T__9);
	            this.state = 280;
	            this.identifier();
	            break;

	        case 3:
	            localctx = new ComparisonExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 281;
	            this.identifier();
	            this.state = 282;
	            this.comparisonOp();
	            this.state = 283;
	            this.value();
	            break;

	        case 4:
	            localctx = new ItemComparisonExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 285;
	            this.match(MailjetTemplateParser.T__9);
	            this.state = 286;
	            this.identifier();
	            this.state = 287;
	            this.comparisonOp();
	            this.state = 288;
	            this.value();
	            break;

	        case 5:
	            localctx = new ValueExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 290;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonOp() {
	    let localctx = new ComparisonOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MailjetTemplateParser.RULE_comparisonOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 129024) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MailjetTemplateParser.RULE_value);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.match(MailjetTemplateParser.STRING);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.match(MailjetTemplateParser.NUMBER);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 297;
	            this.match(MailjetTemplateParser.T__16);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 298;
	            this.match(MailjetTemplateParser.T__17);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 299;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	htmlTag() {
	    let localctx = new HtmlTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MailjetTemplateParser.RULE_htmlTag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MailjetTemplateParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(MailjetTemplateParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MailjetTemplateParser.EOF = antlr4.Token.EOF;
MailjetTemplateParser.T__0 = 1;
MailjetTemplateParser.T__1 = 2;
MailjetTemplateParser.T__2 = 3;
MailjetTemplateParser.T__3 = 4;
MailjetTemplateParser.T__4 = 5;
MailjetTemplateParser.T__5 = 6;
MailjetTemplateParser.T__6 = 7;
MailjetTemplateParser.T__7 = 8;
MailjetTemplateParser.T__8 = 9;
MailjetTemplateParser.T__9 = 10;
MailjetTemplateParser.T__10 = 11;
MailjetTemplateParser.T__11 = 12;
MailjetTemplateParser.T__12 = 13;
MailjetTemplateParser.T__13 = 14;
MailjetTemplateParser.T__14 = 15;
MailjetTemplateParser.T__15 = 16;
MailjetTemplateParser.T__16 = 17;
MailjetTemplateParser.T__17 = 18;
MailjetTemplateParser.VAR_START = 19;
MailjetTemplateParser.VAR_END = 20;
MailjetTemplateParser.IF_START = 21;
MailjetTemplateParser.ELSEIF_START = 22;
MailjetTemplateParser.ELSE_IF_START = 23;
MailjetTemplateParser.ELIF_START = 24;
MailjetTemplateParser.ELSE_START = 25;
MailjetTemplateParser.END_IF = 26;
MailjetTemplateParser.FOR_START = 27;
MailjetTemplateParser.END_FOR = 28;
MailjetTemplateParser.BLOCK_END = 29;
MailjetTemplateParser.IDENTIFIER = 30;
MailjetTemplateParser.STRING = 31;
MailjetTemplateParser.NUMBER = 32;
MailjetTemplateParser.WS = 33;
MailjetTemplateParser.ESC = 34;
MailjetTemplateParser.COMMENT = 35;
MailjetTemplateParser.HTML_TAG = 36;
MailjetTemplateParser.MJML_TAG = 37;
MailjetTemplateParser.TEXT = 38;

MailjetTemplateParser.RULE_template = 0;
MailjetTemplateParser.RULE_templateElement = 1;
MailjetTemplateParser.RULE_text = 2;
MailjetTemplateParser.RULE_comment = 3;
MailjetTemplateParser.RULE_variable = 4;
MailjetTemplateParser.RULE_filter = 5;
MailjetTemplateParser.RULE_filterName = 6;
MailjetTemplateParser.RULE_filterArg = 7;
MailjetTemplateParser.RULE_ifBlock = 8;
MailjetTemplateParser.RULE_elseIfBlock = 9;
MailjetTemplateParser.RULE_elseBlock = 10;
MailjetTemplateParser.RULE_forBlock = 11;
MailjetTemplateParser.RULE_rangeArgs = 12;
MailjetTemplateParser.RULE_expression = 13;
MailjetTemplateParser.RULE_comparisonOp = 14;
MailjetTemplateParser.RULE_value = 15;
MailjetTemplateParser.RULE_htmlTag = 16;
MailjetTemplateParser.RULE_identifier = 17;

class TemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_template;
    }

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitTemplate(this);
		}
	}


}



class TemplateElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_templateElement;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ifBlock() {
	    return this.getTypedRuleContext(IfBlockContext,0);
	};

	forBlock() {
	    return this.getTypedRuleContext(ForBlockContext,0);
	};

	htmlTag() {
	    return this.getTypedRuleContext(HtmlTagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterTemplateElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitTemplateElement(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(MailjetTemplateParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitText(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(MailjetTemplateParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitComment(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_variable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BrevoVariableContext extends VariableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR_START() {
	    return this.getToken(MailjetTemplateParser.VAR_START, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	VAR_END() {
	    return this.getToken(MailjetTemplateParser.VAR_END, 0);
	};

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterBrevoVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitBrevoVariable(this);
		}
	}


}

MailjetTemplateParser.BrevoVariableContext = BrevoVariableContext;

class MailjetVariableContext extends VariableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR_START() {
	    return this.getToken(MailjetTemplateParser.VAR_START, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	VAR_END() {
	    return this.getToken(MailjetTemplateParser.VAR_END, 0);
	};

	STRING() {
	    return this.getToken(MailjetTemplateParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterMailjetVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitMailjetVariable(this);
		}
	}


}

MailjetTemplateParser.MailjetVariableContext = MailjetVariableContext;

class SimpleVariableContext extends VariableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VAR_START() {
	    return this.getToken(MailjetTemplateParser.VAR_START, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	VAR_END() {
	    return this.getToken(MailjetTemplateParser.VAR_END, 0);
	};

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterSimpleVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitSimpleVariable(this);
		}
	}


}

MailjetTemplateParser.SimpleVariableContext = SimpleVariableContext;

class FilterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_filter;
    }

	filterName() {
	    return this.getTypedRuleContext(FilterNameContext,0);
	};

	filterArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterArgContext);
	    } else {
	        return this.getTypedRuleContext(FilterArgContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterFilter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitFilter(this);
		}
	}


}



class FilterNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_filterName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterFilterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitFilterName(this);
		}
	}


}



class FilterArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_filterArg;
    }

	STRING() {
	    return this.getToken(MailjetTemplateParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(MailjetTemplateParser.NUMBER, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterFilterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitFilterArg(this);
		}
	}


}



class IfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_ifBlock;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MailjetIfBlockContext extends IfBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF_START() {
	    return this.getToken(MailjetTemplateParser.IF_START, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_IF() {
	    return this.getToken(MailjetTemplateParser.END_IF, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	elseIfBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfBlockContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfBlockContext,i);
	    }
	};

	elseBlock() {
	    return this.getTypedRuleContext(ElseBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterMailjetIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitMailjetIfBlock(this);
		}
	}


}

MailjetTemplateParser.MailjetIfBlockContext = MailjetIfBlockContext;

class BrevoIfBlockContext extends IfBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF_START() {
	    return this.getToken(MailjetTemplateParser.IF_START, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_IF() {
	    return this.getToken(MailjetTemplateParser.END_IF, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	elseIfBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfBlockContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfBlockContext,i);
	    }
	};

	elseBlock() {
	    return this.getTypedRuleContext(ElseBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterBrevoIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitBrevoIfBlock(this);
		}
	}


}

MailjetTemplateParser.BrevoIfBlockContext = BrevoIfBlockContext;

class NormalIfBlockContext extends IfBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF_START() {
	    return this.getToken(MailjetTemplateParser.IF_START, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_IF() {
	    return this.getToken(MailjetTemplateParser.END_IF, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	elseIfBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfBlockContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfBlockContext,i);
	    }
	};

	elseBlock() {
	    return this.getTypedRuleContext(ElseBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterNormalIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitNormalIfBlock(this);
		}
	}


}

MailjetTemplateParser.NormalIfBlockContext = NormalIfBlockContext;

class ElseIfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_elseIfBlock;
    }

	ELSEIF_START() {
	    return this.getToken(MailjetTemplateParser.ELSEIF_START, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	ELSE_IF_START() {
	    return this.getToken(MailjetTemplateParser.ELSE_IF_START, 0);
	};

	ELIF_START() {
	    return this.getToken(MailjetTemplateParser.ELIF_START, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterElseIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitElseIfBlock(this);
		}
	}


}



class ElseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_elseBlock;
    }

	ELSE_START() {
	    return this.getToken(MailjetTemplateParser.ELSE_START, 0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterElseBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitElseBlock(this);
		}
	}


}



class ForBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_forBlock;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BrevoForBlockContext extends ForBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR_START() {
	    return this.getToken(MailjetTemplateParser.FOR_START, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_FOR() {
	    return this.getToken(MailjetTemplateParser.END_FOR, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterBrevoForBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitBrevoForBlock(this);
		}
	}


}

MailjetTemplateParser.BrevoForBlockContext = BrevoForBlockContext;

class RangeForBlockContext extends ForBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR_START() {
	    return this.getToken(MailjetTemplateParser.FOR_START, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	rangeArgs() {
	    return this.getTypedRuleContext(RangeArgsContext,0);
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_FOR() {
	    return this.getToken(MailjetTemplateParser.END_FOR, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterRangeForBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitRangeForBlock(this);
		}
	}


}

MailjetTemplateParser.RangeForBlockContext = RangeForBlockContext;

class MailjetForBlockContext extends ForBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR_START() {
	    return this.getToken(MailjetTemplateParser.FOR_START, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_FOR() {
	    return this.getToken(MailjetTemplateParser.END_FOR, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterMailjetForBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitMailjetForBlock(this);
		}
	}


}

MailjetTemplateParser.MailjetForBlockContext = MailjetForBlockContext;

class NormalForBlockContext extends ForBlockContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR_START() {
	    return this.getToken(MailjetTemplateParser.FOR_START, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	BLOCK_END() {
	    return this.getToken(MailjetTemplateParser.BLOCK_END, 0);
	};

	END_FOR() {
	    return this.getToken(MailjetTemplateParser.END_FOR, 0);
	};

	templateElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateElementContext);
	    } else {
	        return this.getTypedRuleContext(TemplateElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterNormalForBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitNormalForBlock(this);
		}
	}


}

MailjetTemplateParser.NormalForBlockContext = NormalForBlockContext;

class RangeArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_rangeArgs;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MailjetTemplateParser.NUMBER);
	    } else {
	        return this.getToken(MailjetTemplateParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterRangeArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitRangeArgs(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ItemPropertyExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterItemPropertyExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitItemPropertyExpr(this);
		}
	}


}

MailjetTemplateParser.ItemPropertyExprContext = ItemPropertyExprContext;

class ValueExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterValueExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitValueExpr(this);
		}
	}


}

MailjetTemplateParser.ValueExprContext = ValueExprContext;

class ComparisonExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	comparisonOp() {
	    return this.getTypedRuleContext(ComparisonOpContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterComparisonExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitComparisonExpr(this);
		}
	}


}

MailjetTemplateParser.ComparisonExprContext = ComparisonExprContext;

class IdentifierExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterIdentifierExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitIdentifierExpr(this);
		}
	}


}

MailjetTemplateParser.IdentifierExprContext = IdentifierExprContext;

class ItemComparisonExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	comparisonOp() {
	    return this.getTypedRuleContext(ComparisonOpContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterItemComparisonExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitItemComparisonExpr(this);
		}
	}


}

MailjetTemplateParser.ItemComparisonExprContext = ItemComparisonExprContext;

class ComparisonOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_comparisonOp;
    }


	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterComparisonOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitComparisonOp(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_value;
    }

	STRING() {
	    return this.getToken(MailjetTemplateParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(MailjetTemplateParser.NUMBER, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitValue(this);
		}
	}


}



class HtmlTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_htmlTag;
    }

	HTML_TAG() {
	    return this.getToken(MailjetTemplateParser.HTML_TAG, 0);
	};

	MJML_TAG() {
	    return this.getToken(MailjetTemplateParser.MJML_TAG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterHtmlTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitHtmlTag(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MailjetTemplateParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(MailjetTemplateParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MailjetTemplateListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




MailjetTemplateParser.TemplateContext = TemplateContext; 
MailjetTemplateParser.TemplateElementContext = TemplateElementContext; 
MailjetTemplateParser.TextContext = TextContext; 
MailjetTemplateParser.CommentContext = CommentContext; 
MailjetTemplateParser.VariableContext = VariableContext; 
MailjetTemplateParser.FilterContext = FilterContext; 
MailjetTemplateParser.FilterNameContext = FilterNameContext; 
MailjetTemplateParser.FilterArgContext = FilterArgContext; 
MailjetTemplateParser.IfBlockContext = IfBlockContext; 
MailjetTemplateParser.ElseIfBlockContext = ElseIfBlockContext; 
MailjetTemplateParser.ElseBlockContext = ElseBlockContext; 
MailjetTemplateParser.ForBlockContext = ForBlockContext; 
MailjetTemplateParser.RangeArgsContext = RangeArgsContext; 
MailjetTemplateParser.ExpressionContext = ExpressionContext; 
MailjetTemplateParser.ComparisonOpContext = ComparisonOpContext; 
MailjetTemplateParser.ValueContext = ValueContext; 
MailjetTemplateParser.HtmlTagContext = HtmlTagContext; 
MailjetTemplateParser.IdentifierContext = IdentifierContext; 
