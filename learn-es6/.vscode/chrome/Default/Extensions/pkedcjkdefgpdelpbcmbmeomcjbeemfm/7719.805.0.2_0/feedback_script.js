'use strict';var gg=function(a,c,b){a.timeOfStartCall=(new Date).getTime();var d=b||Ga,e=d.document,f=Na(d);f&&(a.nonce=f);if("help"==a.flow){var g=Pa("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(c&&JSON&&JSON.stringify){var k=JSON.stringify(c);(g=1200>=k.length)&&(a.psdJson=k)}g||(c={invalidPsd:!0})}c=[a,c,b];d.GOOGLE_FEEDBACK_START_ARGUMENTS=c;b=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,c);else{d=b+"/load.js?";
for(var m in a)c=a[m],null!=c&&!Ya(c)&&(d+=encodeURIComponent(m)+"="+encodeURIComponent(c)+"&");a=(e?new eg(cg(e)):Gb||(Gb=new eg)).b.createElement("SCRIPT");f&&a.setAttribute("nonce",f);f=kd(d);pe(a,f);e.body.appendChild(a)}};w("userfeedback.api.startFeedback",gg);var hg=function(){this.g=this.f=this.o=this.modelName=this.h=this.b=this.ge="";this.l=this.w=this.j=!1};var ig=chrome.i18n.getMessage("4163185390680253103"),jg=chrome.i18n.getMessage("492097680647953484"),kg=chrome.i18n.getMessage("2575016469622936324"),lg=chrome.i18n.getMessage("128276876460319075"),mg=chrome.i18n.getMessage("3326722026796849289"),og=chrome.i18n.getMessage("1018984561488520517"),pg=chrome.i18n.getMessage("8205999658352447129"),qg=chrome.i18n.getMessage("5723583529370342957"),rg=chrome.i18n.getMessage("1550904064710828958"),sg=chrome.i18n.getMessage("5014364904504073524"),tg=chrome.i18n.getMessage("2194670894476780934"),
ug=chrome.i18n.getMessage("6614468912728530636"),vg=chrome.i18n.getMessage("5910595154486533449"),wg=chrome.i18n.getMessage("5363086287710390513"),xg=chrome.i18n.getMessage("244647017322945605"),yg=chrome.i18n.getMessage("5375576275991472719"),zg=chrome.i18n.getMessage("4592127349908255218"),Ag=chrome.i18n.getMessage("843316808366399491"),Bg=chrome.i18n.getMessage("5699813974548050528"),Cg=chrome.i18n.getMessage("8515148417333877999"),Dg=chrome.i18n.getMessage("1636686747687494376"),Eg=chrome.i18n.getMessage("4148300086676792937"),
Fg=chrome.i18n.getMessage("3219866268410307919"),Gg=chrome.i18n.getMessage("9211708838274008657"),Hg=chrome.i18n.getMessage("8706273405040403641"),Ig=chrome.i18n.getMessage("4756056595565370923"),Jg=chrome.i18n.getMessage("7876724262035435114"),Kg=chrome.i18n.getMessage("5485620192329479690"),Lg=chrome.i18n.getMessage("6963873398546068901"),Mg=chrome.i18n.getMessage("3567591856726172993"),Ng=chrome.i18n.getMessage("3239956785410157548");var Og={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,
"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,
"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},Pg={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,"* CLASS":!0,"* ID":!0,"* STYLE":!0};var Qg={};
function Rg(a){if(Ee&&!Ye(9))return[0,0,0,0];var c=Qg.hasOwnProperty(a)?Qg[a]:null;if(c)return c;65536<Object.keys(Qg).length&&(Qg={});var b=[0,0,0,0];c=Sg(a,/\\[0-9A-Fa-f]{6}\s?/g);c=Sg(c,/\\[0-9A-Fa-f]{1,5}\s/g);c=Sg(c,/\\./g);c=c.replace(/:not\(([^\)]*)\)/g,"     $1 ");c=c.replace(/{[^]*/gm,"");c=Tg(c,b,/(\[[^\]]+\])/g,2);c=Tg(c,b,/(#[^\#\s\+>~\.\[:]+)/g,1);c=Tg(c,b,/(\.[^\s\+>~\.\[:]+)/g,2);c=Tg(c,b,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);c=Tg(c,b,/(:[\w-]+\([^\)]*\))/gi,2);
c=Tg(c,b,/(:[^\s\+>~\.\[:]+)/g,2);c=c.replace(/[\*\s\+>~]/g," ");c=c.replace(/[#\.]/g," ");Tg(c,b,/([^\s\+>~\.\[:]+)/g,3);c=b;return Qg[a]=c}function Tg(a,c,b,d){return a.replace(b,function(e){c[d]+=1;return Array(e.length+1).join(" ")})}function Sg(a,c){return a.replace(c,function(b){return Array(b.length+1).join("A")})};var Ug={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},Vg=/[\n\f\r"'()*<>]/g,Wg={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function Xg(a){return Wg[a]}
var Yg=function(a,c,b){c=pd(c);if(""==c)return null;if(0==qd("url(",c.substr(0,4))){if(!c.endsWith(")")||1<(c?c.split("(").length-1:0)||1<(c?c.split(")").length-1:0)||!b)a=null;else{a:{c=c.substring(4,c.length-1);for(var d=0;2>d;d++){var e="\"'".charAt(d);if(c.charAt(0)==e&&c.charAt(c.length-1)==e){c=c.substring(1,c.length-1);break a}}}a=b?(a=b(c,a))&&"about:invalid#zClosurez"!=Cd(a).toString()?'url("'+Cd(a).toString().replace(Vg,Xg)+'")':null:null}return a}if(0<c.indexOf("(")){if(/"|'/.test(c))return null;
for(a=/([\-\w]+)\(/g;b=a.exec(c);)if(!(b[1]in Ug))return null}return c};function Zg(a,c){a=Ga[a];return a&&a.prototype?(c=Object.getOwnPropertyDescriptor(a.prototype,c))&&c.get||null:null}function $g(a,c){return(a=Ga[a])&&a.prototype&&a.prototype[c]||null}
var ah=Zg("Element","attributes")||Zg("Node","attributes"),bh=$g("Element","hasAttribute"),ch=$g("Element","getAttribute"),dh=$g("Element","setAttribute"),eh=$g("Element","removeAttribute"),fh=$g("Element","getElementsByTagName"),gh=$g("Element","matches")||$g("Element","msMatchesSelector"),hh=Zg("Node","nodeName"),ih=Zg("Node","nodeType"),jh=Zg("Node","parentNode"),kh=Zg("HTMLElement","style")||Zg("Element","style"),lh=Zg("HTMLStyleElement","sheet"),mh=$g("CSSStyleDeclaration","getPropertyValue"),
nh=$g("CSSStyleDeclaration","setProperty");function oh(a,c,b,d){if(a)return a.apply(c);a=c[b];if(!d(a))throw Error("Clobbering detected");return a}function ph(a,c,b,d){if(a)return a.apply(c,d);if(Ee&&10>document.documentMode){if(!c[b].call)throw Error("IE Clobbering detected");}else if("function"!=typeof c[b])throw Error("Clobbering detected");return c[b].apply(c,d)}function qh(a){return oh(ah,a,"attributes",function(c){return c instanceof NamedNodeMap})}
function rh(a,c,b){try{ph(dh,a,"setAttribute",[c,b])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}function sh(a){th(a);return oh(kh,a,"style",function(c){return c instanceof CSSStyleDeclaration})}function th(a){if(!(a instanceof HTMLElement))throw Error("Not an HTMLElement");}function uh(a){th(a);return oh(lh,a,"sheet",function(c){return c instanceof CSSStyleSheet})}function vh(a){return oh(hh,a,"nodeName",function(c){return"string"==typeof c})}
function wh(a){return oh(ih,a,"nodeType",function(c){return"number"==typeof c})}function xh(a){return oh(jh,a,"parentNode",function(c){return!(c&&"string"==typeof c.name&&c.name&&"parentnode"==c.name.toLowerCase())})}function yh(a,c){return ph(mh,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[c])||""}function zh(a,c,b){ph(nh,a,a.setProperty?"setProperty":"setAttribute",[c,b])};var Ah=Ee&&10>document.documentMode?null:/\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,Bh={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0},Eh=function(a,c,b){var d=[];a=Ch(y(a.cssRules));Mb(a,function(e){if(c&&!/[a-zA-Z][\w-:\.]*/.test(c))throw Error("Invalid container id");if(!(c&&Ee&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=c?e.selectorText.replace(Ah,"#"+c+" $1"):e.selectorText;d.push(Wd(f,Dh(e.style,b)))}});
return Yd(d)},Ch=function(a){return Ob(a,function(c){return c instanceof CSSStyleRule||c.type==CSSRule.STYLE_RULE})},Gh=function(a,c,b){a=Fh("<style>"+a+"</style>");return null==a||null==a.sheet?Zd:Eh(a.sheet,void 0!=c?c:null,b)},Fh=function(a){if(Ee&&!Ye(10)||"function"!=typeof Ga.DOMParser)return null;a=ie("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(he(a),"text/html").body.children[0]},Dh=function(a,c){if(!a)return Kd;var b=document.createElement("div").style,
d=Hh(a);Mb(d,function(e){var f=He&&e in Bh?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");ld(f,"--")||ld(f,"var")||(e=yh(a,e),e=Yg(f,e,c),null!=e&&zh(b,f,e))});return Jd(b.cssText||"")},Jh=function(a){var c=Array.from(ph(fh,a,"getElementsByTagName",["STYLE"])),b=uc(c,function(e){return y(uh(e).cssRules)});b=Ch(b);b.sort(function(e,f){e=Rg(e.selectorText);a:{f=Rg(f.selectorText);for(var g=lc,k=Math.min(e.length,f.length),m=0;m<k;m++){var p=g(e[m],f[m]);if(0!=p){e=
p;break a}}e=lc(e.length,f.length)}return-e});a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)Mb(b,function(e){ph(gh,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&Ih(d,e.style)});Mb(c,bg)},Ih=function(a,c){var b=Hh(a.style),d=Hh(c);Mb(d,function(e){if(!(0<=b.indexOf(e))){var f=yh(c,e);zh(a.style,e,f)}})},Hh=function(a){Wa(a)?a=y(a):(a=Jc(a),cc(a,"cssText"));return a};var Kh="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),Lh=0,Mh=function(){this.g=[];this.f=[];this.b="data-elementweakmap-index-"+Lh++};Mh.prototype.set=function(a,c){if(ph(bh,a,"hasAttribute",[this.b])){var b=parseInt(ph(ch,a,"getAttribute",[this.b])||null,10);this.f[b]=c}else b=this.f.push(c)-1,rh(a,this.b,b.toString()),this.g.push(a);return this};
Mh.prototype.get=function(a){if(ph(bh,a,"hasAttribute",[this.b]))return a=parseInt(ph(ch,a,"getAttribute",[this.b])||null,10),this.f[a]};Mh.prototype.clear=function(){this.g.forEach(function(a){ph(eh,a,"removeAttribute",[this.b])},this);this.g=[];this.f=[]};var Nh=Of("goog.html.sanitizer.SafeDomTreeProcessor"),Oh=!Ee||10<=Number(Ze),Ph=!Ee||null==document.documentMode,Qh=function(){};var Rh={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var Sh={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var Wh=function(a){a=a||new Th;Uh(a);this.b=Oc(a.b);this.h=Oc(a.D);this.j=Oc(a.C);this.o=a.o;Mb(a.w,function(c){if(!ld(c,"data-"))throw new Hb('Only "data-" attributes allowed, got: %s.',[c]);if(ld(c,"data-sanitizer-"))throw new Hb('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",c]);this.b["* "+c.toUpperCase()]=Vh},this);this.l=a.g;this.g=a.u;this.f=null;this.w=a.l};x(Wh,Qh);
var Xh=function(a){return function(c,b){return(c=a(pd(c),b))&&"about:invalid#zClosurez"!=Cd(c).toString()?Cd(c).toString():null}},Th=function(){this.b={};Mb([Og,Pg],function(a){Mb(Jc(a),function(c){this.b[c]=Vh},this)},this);this.f={};this.w=[];this.D=Oc(Rh);this.C=Oc(Sh);this.o=!1;this.G=Fd;this.K=this.j=this.F=this.g=yc;this.u=null;this.h=this.l=!1},Yh=function(a,c){return function(b,d,e,f){b=a(b,d,e,f);return null==b?null:c(b,d,e,f)}},Zh=function(a,c,b,d){a[b]&&!c[b]&&(a[b]=Yh(a[b],d))};
Th.prototype.aa=function(){return new Wh(this)};
var Uh=function(a){if(a.h)throw Error("HtmlSanitizer.Builder.build() can only be used once.");Zh(a.b,a.f,"* USEMAP",$h);var c=Xh(a.G);Mb(["* ACTION","* CITE","* HREF"],function(d){Zh(this.b,this.f,d,c)},a);var b=Xh(a.g);Mb(["* LONGDESC","* SRC","LINK HREF"],function(d){Zh(this.b,this.f,d,b)},a);Mb(["* FOR","* HEADERS","* NAME"],function(d){Zh(this.b,this.f,d,db(ai,this.F))},a);Zh(a.b,a.f,"A TARGET",db(bi,["_blank","_self"]));Zh(a.b,a.f,"* CLASS",db(ci,a.j));Zh(a.b,a.f,"* ID",db(di,a.j));Zh(a.b,a.f,
"* STYLE",db(a.K,b));a.h=!0},ei=function(a,c){a||(a="*");return(a+" "+c).toUpperCase()},Vh=function(a){return pd(a)},bi=function(a,c){c=pd(c);return Wb(a,c.toLowerCase())?c:null},$h=function(a){return(a=pd(a))&&"#"==a.charAt(0)?a:null},ai=function(a,c,b){return a(pd(c),b)},ci=function(a,c,b){c=c.split(/(?:\s+)/);for(var d=[],e=0;e<c.length;e++){var f=a(c[e],b);f&&d.push(f)}return 0==d.length?null:d.join(" ")},di=function(a,c,b){return a(pd(c),b)},fi=function(a,c){var b=c.data;(c=xh(c))&&"style"==
vh(c).toLowerCase()&&!("STYLE"in a.h)&&"STYLE"in a.j&&(b=Xd(Gh(b,a.f,t(function(d,e){return this.l(d,{dB:e})},a))));return document.createTextNode(b)},gi=function(a){var c=(new Th).aa();var b=!("STYLE"in c.h)&&"STYLE"in c.j;b="*"==c.g&&b?"sanitizer-"+ue():c.g;c.f=b;if(Oh){b=a;if(Oh){a=document.createElement("SPAN");c.f&&"*"==c.g&&(a.id=c.f);c.w&&(b=Fh("<div>"+b+"</div>"),Jh(b),b=b.innerHTML);b=ie(b,null);var d=document.createElement("template");if(Ph&&"content"in d)me(d,b),d=d.content;else{var e=
document.implementation.createHTMLDocument("x");d=e.body;me(e.body,b)}b=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=Kh?new WeakMap:new Mh;e=b.nextNode();){c:{var f=c;var g=e;var k=wh(g);switch(k){case 3:g=fi(f,g);break c;case 1:k=g;1==wh(k)||Ib("Expected Node of type Element but got Node of type %s",wh(k));g=f;f=k;if("TEMPLATE"==vh(f).toUpperCase())g=null;else{k=vh(f).toUpperCase();if(k in g.h)var m=null;else g.j[k]?m=document.createElement(k):(m=document.createElement("SPAN"),
g.o&&rh(m,"data-sanitizer-original-tag",k.toLowerCase()));if(m){var p=m,u=qh(f);if(null!=u)for(var A=0;k=u[A];A++)if(k.specified){var E=g;var F=f,J=k,V=J.name;if(ld(V,"data-sanitizer-"))E=null;else{var Ka=vh(F);J=J.value;var tb={tagName:pd(Ka).toLowerCase(),attributeName:pd(V).toLowerCase()},Gc={qq:void 0};"style"==tb.attributeName&&(Gc.qq=sh(F));F=ei(Ka,V);F in E.b?(E=E.b[F],E=E(J,tb,Gc)):(V=ei(null,V),V in E.b?(E=E.b[V],E=E(J,tb,Gc)):E=null)}null===E||rh(p,k.name,E)}g=m}else g=null}break c;default:z(Nh,
"Dropping unknown node type: "+k),g=null}}if(g){if(1==wh(g)&&d.set(e,g),e=xh(e),f=!1,e)k=wh(e),m=vh(e).toLowerCase(),p=xh(e),11!=k||p?"body"==m&&p&&(k=xh(p))&&!xh(k)&&(f=!0):f=!0,k=null,f||!e?k=a:1==wh(e)&&(k=d.get(e)),k.content&&(k=k.content),k.appendChild(g)}else ag(e)}d.clear&&d.clear();c=a}else c=document.createElement("SPAN");0<qh(c).length&&(a=document.createElement("SPAN"),a.appendChild(c),c=a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"))}else c=
"";return ie(c,null)};if("undefined"!=typeof angular){var hi=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&hi.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var c=this;this.Ai=this.Cg=null;a.dirForText=function(b){c.Cg||(c.Cg=chrome.i18n.getMessage("@@bidi_dir")||"ltr");c.Ai||(c.Ai=new fg("rtl"==c.Cg));var d=c.Ai,e,f=e=0,g=!1;b=(b||"").split(fd);for(var k=0;k<b.length;k++){var m=b[k];cd.test(m)?
(e++,f++):ed.test(m)?g=!0:bd.test(m)?f++:gd.test(m)&&(g=!0)}e=0==f?g?1:0:.4<e/f?-1:1;return-1==(0==e?d.b:e)?"rtl":"ltr"}}],compile:function(a,c){c=c.key;var b=null,d=document.createElement("amr");c&&!c.match(/^\d+$/)&&(c=chrome.i18n.getMessage(c),null==c&&d.setAttribute("id","missing"));if(c){var e=chrome.i18n.getMessage(c+"_ph");b=[];if(null!=e)for(b=e.split("\ue000"),e=0;e<b.length;++e)b[e]=b[e].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');b=chrome.i18n.getMessage(c,b)}else d.setAttribute("r",
"nokey");b?ne(d,gi(b)):(d.setAttribute("tl","false"),ne(d,gi(a.html())));a.replaceWith(d)}}})};var ji=function(a,c){var b=this;this.w=c;this.b=a;this.b.top=a;this.l=[];this.h=!1;this.f=new hg;this.b.videoSmoothnessRatings=this.xk(tg,og,pg,qg,rg,sg);this.b.videoQualityRatings=this.xk(tg,ug,vg,wg,xg,yg);this.b.audioQualityRatings=this.xk(tg,zg,Ag,Bg,Cg,Dg);this.l=[{value:"Bug",desc:ig},{value:"FeatureRequest",desc:jg},{value:"MirroringQuality",desc:kg},{value:"Discovery",desc:lg},{value:"Other",desc:mg}];this.b.feedbackTypes=this.l;this.b.includeFineLogs=!0;this.b.feedbackType="Bug";this.b.sendFeedback=
this.gt.bind(this);this.b.cancel=this.iq.bind(this);this.b.attachLogsClick=this.j.bind(this);this.b.viewLogs=this.D.bind(this);this.b.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.kq.bind(this));this.b.sufficientFeedback=!1;this.b.$watch("attachLogs",this.j.bind(this));this.b.attachLogs=!0;this.o=ue();this.b.userEmail="";chrome.identity.getProfileUserInfo(function(d){b.b.userEmail=d.email;ii(b)});this.b.yourAnswerText=Ng;this.b.language=
chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.b.requestLogsInProgress=!1;this.b.mrVersion=chrome.runtime.getManifest().version};h=ji.prototype;h.xk=function(a){for(var c=[],b=1;b<arguments.length;b++)c.push(new ki(b,arguments[b]));c.push(new ki(0,arguments[0]));return c};h.iq=function(){this.b.feedbackDescription&&!confirm(Eg)||window.close()};
h.kq=function(){var a=this.b.feedbackType;this.b.sufficientFeedback="MirroringQuality"==a?this.b.videoSmoothness||this.b.videoQuality||this.b.audioQuality||this.b.comments:"Discovery"==a?this.b.visibleInSetup||this.b.comments:!!this.b.feedbackDescription};
h.gt=function(){if(this.b.sufficientFeedback){var a=this.b.feedbackType,c="";"MirroringQuality"==a?(this.b.videoSmoothness&&(c+="\nVideo Smoothness: "+this.b.videoSmoothness),this.b.videoQuality&&(c+="\nVideo Quality: "+this.b.videoQuality),this.b.audioQuality&&(c+="\nAudio: "+this.b.audioQuality),this.b.projectedContentUrl&&(c+="\nProjected Content/URL: "+this.b.projectedContentUrl),this.b.comments&&(c+="\nComments: "+this.b.comments)):"Discovery"==a?(this.b.visibleInSetup&&(c+="\nChromecast Visible in Setup: "+
this.b.visibleInSetup),this.b.hasNetworkSoftware&&(c+="\nUsing VPN/proxy/firewall/NAS Software: "+this.b.hasNetworkSoftware),this.b.networkDescription&&(c+="\nNetwork Description: "+this.b.networkDescription),this.b.comments&&(c+="\nComments: "+this.b.comments)):c=this.b.feedbackDescription;a="Type: "+a+"\n\n"+c;this.b.sendDialogText=Fg;this.b.okButton=Mg;this.b.feedbackSent=!1;this.w.show({locals:{gB:this.b.feedbackSent,yB:this.b.sendDialogText,Ir:this.b.okButton},scope:this.b,preserveScope:!0,bindToController:!0,
template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.g});this.yn(a,Date.now())}};h.yn=function(a,c){var b=Date.now();!this.b.requestLogsInProgress||5E3<b-c?li(this,a):setTimeout(this.yn.bind(this),1E3,a,c)};
var li=function(a,c){var b=0,d=function(f,g,k){k?f(!0):(a.b.sendDialogText=Ig,ii(a),g(Error("Failed to send")))},e=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";(new gf(function(){b++;return new Promise(function(f,g){var k=a.b.userEmail,m=a.f;f=d.bind(null,f,g);g=chrome.runtime.getManifest();gg({productId:85561,bucket:e,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:g.default_locale,enableAnonymousFeedback:!k,report:{description:c},callback:f},
{version:g.version,description:g.description,user_email:k||"NA",logs:m.ge||"NA",external_logs:m.b||"NA",device_model:m.modelName||"NA",receiver_version:m.o||"NA",dash_report_url:m.h||"NA",cast_device_counts:m.f,dial_device_counts:m.g,mirroring_service_enabled:m.j,native_cast_mrp_enabled:m.w,native_dial_mrp_enabled:m.l})})},1E4,4)).start().then(function(){Cb("MediaRouter.Ui.Action.Feedback");a.b.sendDialogText=Hg;a.b.feedbackSent=!0;ii(a)},function(){a.b.sendDialogText=Gg;a.b.feedbackSent=!0;ii(a)})};
ji.prototype.j=function(){var a=this;this.f=new hg;this.b.attachLogs&&(this.b.requestLogsInProgress=!0,chrome.runtime.sendMessage(new sf(this.o,"retrieve_log_data"),function(c){a.b.requestLogsInProgress=!1;a.f.ge=c.logs||"no extension";a.f.ge+="\n";a.f.ge+=c.mediaSinkServiceStatus||"no media sink service status from browser";c.castStreamingLogs&&(a.f.h=c.castStreamingLogs);c.castDeviceCounts&&(a.f.f=c.castDeviceCounts);c.dialDeviceCounts&&(a.f.g=c.dialDeviceCounts);a.f.j=!!c.mirroringServiceEnabled;
a.f.w=!!c.nativeCastMrpEnabled;a.f.l=!!c.nativeDialMrpEnabled;if(c=c.device)if(c.model&&(a.f.modelName=c.model),c.version&&(a.f.o=c.version),!a.h){var b=ue();a.h=!0;a.f.b=of(c.ip,b,a.u.bind(a))}}))};
ji.prototype.D=function(){this.b.logs=this.f.ge;this.b.logsHeader=Jg;this.b.sendLogs=Kg;this.b.fineLogsWarning=Lg;this.b.okButton=Mg;this.w.show({locals:{aB:this.b.attachLogs,ge:this.b.logs,kB:this.b.includeFineLogs,uB:this.b.logsHeader,zB:this.b.sendLogs,hB:this.b.fineLogsWarning,Ir:this.b.okButton},scope:this.b,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',
controller:this.g})};ji.prototype.u=function(a,c){this.h=!1;this.f.b="error"==a?"":c;this.b.attachLogs||(this.f.b="");ii(this)};var ii=function(a){a.b.$$phase||a.b.$apply()};ji.prototype.g=function(a,c){a.closeWindow=function(){window.close()};a.closeDialog=function(){c.hide()}};ji.prototype.g.$inject=["$scope","$mdDialog"];var ki=function(a,c){this.id=a;this.desc=c;this.text=0==a?c:a+" ("+c+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",ji]);w("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.Jd?!0:!1});w("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0});w("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof id)return jd(a).toString();if(a instanceof ge)return he(a).toString();if(a instanceof Bd)return Cd(a).toString();if(a instanceof Hd)return Id(a);if(a instanceof $c)return ad(a).toString();throw Error();});
w("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,c){if("html"==a)return he(c).toString();if("resourceUrl"==a||"templateUrl"==a)return jd(c).toString();if("url"==a)return c instanceof id?jd(c).toString():Cd(c).toString();if("css"==a)return Id(c);if("js"==a)return ad(c).toString();throw Error();});