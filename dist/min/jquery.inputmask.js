/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.37
*/
(function(e){if(void 0===e.fn.inputmask){var O=function(a){var e=document.createElement("input");a="on"+a;var c=a in e;c||(e.setAttribute(a,"return;"),c="function"==typeof e[a]);return c},C=function(a,d,c){return(a=c.aliases[a])?(a.alias&&C(a.alias,void 0,c),e.extend(!0,c,a),e.extend(!0,c,d),!0):!1},G=function(a){function d(c){function e(c,a,d,m){this.matches=[];this.isGroup=c||!1;this.isOptional=a||!1;this.isQuantifier=d||!1;this.isAlternator=m||!1;this.quantifier={min:1,max:1}}function d(c,e,m){var h=
a.definitions[e],S=0==c.matches.length;m=void 0!=m?m:c.matches.length;if(h&&!u){for(var g=h.prevalidator,s=g?g.length:0,w=1;w<h.cardinality;w++){var r=s>=w?g[w-1]:[],x=r.validator,r=r.cardinality;c.matches.splice(m++,0,{fn:x?"string"==typeof x?RegExp(x):new function(){this.test=x}:/./,cardinality:r?r:1,optionality:c.isOptional,newBlockMarker:S,casing:h.casing,def:h.definitionSymbol||e})}c.matches.splice(m++,0,{fn:h.validator?"string"==typeof h.validator?RegExp(h.validator):new function(){this.test=
h.validator}:/./,cardinality:h.cardinality,optionality:c.isOptional,newBlockMarker:S,casing:h.casing,def:h.definitionSymbol||e})}else c.matches.splice(m++,0,{fn:null,cardinality:0,optionality:c.isOptional,newBlockMarker:S,casing:null,def:e}),u=!1}for(var r=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,x=new e,g,s=[],m=[];g=r.exec(c);)switch(g=g[0],g.charAt(0)){case a.optionalmarker.end:case a.groupmarker.end:var v=s.pop();0<s.length?s[s.length-1].matches.push(v):x.matches.push(v);
break;case a.optionalmarker.start:s.push(new e(!1,!0));break;case a.groupmarker.start:s.push(new e(!0));break;case a.quantifiermarker.start:v=new e(!1,!1,!0);g=g.replace(/[{}]/g,"");var z=g.split(",");g=isNaN(z[0])?z[0]:parseInt(z[0]);z=1==z.length?g:isNaN(z[1])?z[1]:parseInt(z[1]);if("*"==z||"+"==z)g="*"==z?0:1;v.quantifier={min:g,max:z};if(0<s.length){z=s[s.length-1].matches;g=z.pop();if(!g.isGroup){var t=new e(!0);t.matches.push(g);g=t}z.push(g);z.push(v)}else g=x.matches.pop(),g.isGroup||(t=new e(!0),
t.matches.push(g),g=t),x.matches.push(g),x.matches.push(v);break;case a.escapeChar:u=!0;break;case a.alternatormarker:break;default:0<s.length?d(s[s.length-1],g):(0<x.matches.length&&(v=x.matches[x.matches.length-1],v.isGroup&&(v.isGroup=!1,d(v,a.groupmarker.start,0),d(v,a.groupmarker.end))),d(x,g))}0<x.matches.length&&(v=x.matches[x.matches.length-1],v.isGroup&&(v.isGroup=!1,d(v,a.groupmarker.start,0),d(v,a.groupmarker.end)),m.push(x));return m}function c(c,w){if(a.numericInput&&!0!==a.multi){c=
c.split("").reverse();for(var h=0;h<c.length;h++)c[h]==a.optionalmarker.start?c[h]=a.optionalmarker.end:c[h]==a.optionalmarker.end?c[h]=a.optionalmarker.start:c[h]==a.groupmarker.start?c[h]=a.groupmarker.end:c[h]==a.groupmarker.end&&(c[h]=a.groupmarker.start);c=c.join("")}if(void 0!=c&&""!=c){if(0<a.repeat||"*"==a.repeat||"+"==a.repeat)c=a.groupmarker.start+c+a.groupmarker.end+a.quantifiermarker.start+("*"==a.repeat?0:"+"==a.repeat?1:a.repeat)+","+a.repeat+a.quantifiermarker.end;void 0==e.inputmask.masksCache[c]&&
(e.inputmask.masksCache[c]={mask:c,maskToken:d(c),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:w});return e.extend(!0,{},e.inputmask.masksCache[c])}}var u=[];e.isFunction(a.mask)&&(a.mask=a.mask.call(this,a));e.isArray(a.mask)?e.each(a.mask,function(e,a){void 0!=a.mask?u.push(c(a.mask.toString(),a)):u.push(c(a.toString()))}):(1==a.mask.length&&!1==a.greedy&&0!=a.repeat&&(a.placeholder=""),u=void 0!=a.mask.mask?c(a.mask.mask.toString(),a.mask):c(a.mask.toString()));return u},ea=
"function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),t=navigator.userAgent,fa=null!==t.match(/iphone/i),ga=null!==t.match(/android.*safari.*/i),ha=null!==t.match(/android.*chrome.*/i),ia=null!==t.match(/android.*firefox.*/i),ja=/Kindle/i.test(t)||/Silk/i.test(t)||/KFTT/i.test(t)||/KFOT/i.test(t)||/KFJWA/i.test(t)||/KFJWI/i.test(t)||/KFSOWI/i.test(t)||/KFTHWA/i.test(t)||/KFTHWI/i.test(t)||/KFAPWA/i.test(t)||/KFAPWI/i.test(t),
T=O("paste")?"paste":O("input")?"input":"propertychange",D=function(a,d,c){function u(b,f,p){f=f||0;var e=[],a,k=0,q;do{if(!0===b&&d.validPositions[k]){var m=d.validPositions[k];q=m.match;a=m.locator.slice();e.push(null==q.fn?q.def:!0===p?m.input:c.placeholder.charAt(k%c.placeholder.length))}else a=f>k?g(k,a,k-1)[0]:r(k,a,k-1),q=a.match,a=a.locator.slice(),e.push(null==q.fn?q.def:c.placeholder.charAt(k%c.placeholder.length));k++}while((void 0==I||k-1<I)&&null!=q.fn||null==q.fn&&""!=q.def||f>=k);e.pop();
return e}function t(b){var f=d;f.buffer=void 0;f.tests={};!0!==b&&(f._buffer=void 0,f.validPositions={},f.p=-1)}function w(b){var f=d,p=-1,a=f.validPositions;if(e.isFunction(c.getLastValidPosition))p=c.getLastValidPosition.call(n,f,b,c);else{void 0==b&&(b=-1);var f=p,l;for(l in a){var k=parseInt(l);if(-1==b||null!=a[k].match.fn)k<b&&(f=k),k>=b&&(p=k)}p=1<b-f||p<b?f:p}return p}function h(b,f,p){if(c.insertMode&&void 0!=d.validPositions[b]&&void 0==p){p=e.extend(!0,{},d.validPositions);var a=w(),l;
for(l=b;l<=a;l++)delete d.validPositions[l];d.validPositions[b]=f;f=!0;for(l=b;l<=a;l++){b=p[l];if(void 0!=b){var k=null==b.match.fn?l+1:E(l);f=x(k,b.match.def)?f&&!1!==C(k,b.input,!0,!0):!1}if(!f)break}if(!f)return d.validPositions=e.extend(!0,{},p),!1}else d.validPositions[b]=f;return!0}function r(b,f,p){b=g(b,f,p);var a;for(f=0;f<b.length&&(a=b[f],!c.greedy&&(!a.match||!1!==a.match.optionality&&!1!==a.match.newBlockMarker||!0===a.match.optionalQuantifier));f++);return a}function X(b){return d.validPositions[b]?
d.validPositions[b].match:g(b)[0].match}function x(b,f){for(var c=!1,a=g(b),e=0;e<a.length;e++)if(a[e].match&&a[e].match.def==f){c=!0;break}return c}function g(b,f,p){function a(f,p,d,l){function h(d,l,g){if(k==b&&void 0==d.matches)return q.push({match:d,locator:l.reverse()}),!0;if(void 0!=d.matches)if(d.isGroup&&!0!==g){if(d=h(f.matches[n+1],l))return!0}else if(d.isOptional){var J=d;if(d=a(d,p,l,g))d=q[q.length-1].match,(d=0==e.inArray(d,J.matches))&&(m=!0),k=b}else{if(!d.isAlternator)if(d.isQuantifier&&
!0!==g)for(J=d,c.greedy=c.greedy&&isFinite(J.quantifier.max),g=0<p.length&&!0!==g?p.shift():0;g<(isNaN(J.quantifier.max)?g+1:J.quantifier.max)&&k<=b;g++){var s=f.matches[e.inArray(J,f.matches)-1];if(d=h(s,[g].concat(l),!0))if(d=q[q.length-1].match,d.optionalQuantifier=g>J.quantifier.min-1,d=0==e.inArray(d,s.matches))if(g>J.quantifier.min-1){m=!0;k=b;break}else return!0;else return!0}else if(d=a(d,p,l,g))return!0}else k++}for(var n=0<p.length?p.shift():0;n<f.matches.length;n++)if(!0!==f.matches[n].isQuantifier){var g=
h(f.matches[n],[n].concat(d),l);if(g&&k==b)return g;if(k>b)break}}var l=d.maskToken,k=f?p:0;p=f||[0];var q=[],m=!1;if(void 0==f){f=b-1;for(var h;void 0==(h=d.validPositions[f])&&-1<f;)f--;if(void 0!=h&&-1<f)k=f,p=h.locator.slice();else{for(f=b-1;void 0==(h=d.tests[f])&&-1<f;)f--;void 0!=h&&-1<f&&(k=f,p=h[0].locator.slice())}}for(f=p.shift();f<l.length&&!(a(l[f],p,[f])&&k==b||k>b);f++);(0==q.length||m)&&q.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return d.tests[b]=
q}function s(){void 0==d._buffer&&(d._buffer=u(!1,1));return d._buffer}function m(){void 0==d.buffer&&(d.buffer=u(!0,w(),!0));return d.buffer}function v(b,f){for(var p=m().slice(),a=b;a<f;a++)p[a]!=c.skipOptionalPartCharacter&&C(a,p[a],!0,!0)}function z(b,f){switch(f.casing){case "upper":b=b.toUpperCase();break;case "lower":b=b.toLowerCase()}return b}function C(b,f,p,a){function l(b,f,p,a){var k=!1;e.each(g(b),function(l,B){for(var q=B.match,n=f?1:0,g="",s=m(),r=q.cardinality;r>n;r--)g+=void 0==d.validPositions[b-
(r-1)]?R(b-(r-1)):d.validPositions[b-(r-1)].input;f&&(g+=f);k=null!=q.fn?q.fn.test(g,s,b,p,c):f!=q.def&&f!=c.skipOptionalPartCharacter||""==q.def?!1:{c:q.def,pos:b};if(!1!==k){n=void 0!=k.c?k.c:f;n=n==c.skipOptionalPartCharacter&&null===q.fn?q.def:n;g=b;if(k.refreshFromBuffer){g=k.refreshFromBuffer;p=!0;!0===g?(d.validPositions={},d.tests={},v(0,m().length)):v(g.start,g.end);if(void 0==k.pos&&void 0==k.c)return k.pos=w(),!1;g=void 0!=k.pos?k.pos:b;if(g!=b)return k=C(g,n,!0),!1}else if(!0!==k&&k.pos!=
b&&(g=k.pos,v(b,g),g!=b))return k=C(g,n,!0),!1;0<l&&t(!0);h(g,e.extend({},B,{input:z(n,q)}),a)||(k=!1);return!1}});return k}p=!0===p;if(b>=M())return!1;var k=l(b,f,p,a);if(!p&&!1===k){var q=d.validPositions[b];if(q&&null==q.match.fn&&(q.match.def==f||f==c.skipOptionalPartCharacter))k={caret:E(b)};else if((c.insertMode||void 0==d.validPositions[E(b)])&&!D(b))for(var q=b+1,n=E(b);q<=n;q++)if(k=l(q,f,p,a),!1!==k){b=q;break}}!0===k&&(k={pos:b});return k}function D(b){b=X(b);return null!=b.fn?b.fn:!1}
function M(){var b;I=n.prop("maxLength");-1==I&&(I=void 0);if(!1==c.greedy){var f;f=w();b=d.validPositions[f];var p=void 0!=b?b.locator.slice():void 0;for(f+=1;void 0==b||null!=b.match.fn||null==b.match.fn&&""!=b.match.def;f++)b=r(f,p,f-1),p=b.locator.slice();b=f}else b=m().length;return void 0==I||b<I?b:I}function E(b){var f=M();if(b>=f)return f;for(;++b<f&&!D(b)&&(!0!==c.nojumps||c.nojumpsThreshold>b););return b}function G(b){if(0>=b)return 0;for(;0<--b&&!D(b););return b}function F(b,f,c){b._valueSet(f.join(""));
void 0!=c&&y(b,c)}function R(b,f){f=f||X(b);return null==f.fn?f.def:c.placeholder.charAt(b%c.placeholder.length)}function N(b,f,c,a,l){a=void 0!=a?a.slice():da(b._valueGet()).split("");t();f&&b._valueSet("");e.each(a,function(f,a){if(!0===l){var B=d.p,B=-1==B?B:G(B),g=-1==B?f:E(B);-1==e.inArray(a,s().slice(B+1,g))&&U.call(b,void 0,!0,a.charCodeAt(0),!1,c,f)}else U.call(b,void 0,!0,a.charCodeAt(0),!1,c,f),c=c||0<f&&f>d.p});f&&F(b,m(),e(b).is(":focus")?E(w(0)):void 0)}function O(b){return e.inputmask.escapeRegex.call(this,
b)}function da(b){return b.replace(RegExp("("+O(s().join(""))+")*$"),"")}function Y(b,f){if(!b.data("_inputmask")||!0!==f&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var a=[],B=d.validPositions,l;for(l in B)B[l].match&&null!=B[l].match.fn&&a.push(B[l].input);a=(A?a.reverse():a).join("");B=(A?m().reverse():m()).join("");return e.isFunction(c.onUnMask)?c.onUnMask.call(b,B,a,c):a}function L(b){!A||"number"!=typeof b||c.greedy&&""==c.placeholder||(b=m().length-b);return b}function y(b,f,a){b=
b.jquery&&0<b.length?b[0]:b;if("number"==typeof f){f=L(f);a=L(a);a="number"==typeof a?a:f;var d=e(b).data("_inputmask")||{};d.caret={begin:f,end:a};e(b).data("_inputmask",d);e(b).is(":visible")&&(b.scrollLeft=b.scrollWidth,!1==c.insertMode&&f==a&&a++,b.setSelectionRange?(b.selectionStart=f,b.selectionEnd=a):b.createTextRange&&(b=b.createTextRange(),b.collapse(!0),b.moveEnd("character",a),b.moveStart("character",f),b.select()))}else return d=e(b).data("_inputmask"),!e(b).is(":visible")&&d&&void 0!=
d.caret?(f=d.caret.begin,a=d.caret.end):b.setSelectionRange?(f=b.selectionStart,a=b.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),f=0-b.duplicate().moveStart("character",-1E5),a=f+b.text.length),f=L(f),a=L(a),{begin:f,end:a}}function Z(b){var f=m(),c=f.length,a,l=w(),k={},g=void 0!=d.validPositions[l]?d.validPositions[l].locator.slice():void 0,h;for(a=l+1;a<f.length;a++)h=r(a,g,a-1),g=h.locator.slice(),k[a]=e.extend(!0,{},h);for(a=c-1;a>l;a--)if(h=
k[a].match,(h.optionality||h.optionalQuantifier)&&f[a]==R(a,h))c--;else break;return b?{l:c,def:k[c]?k[c].match:void 0}:c}function V(b){var f=m().slice(),a=Z();f.length=a;F(b,f)}function P(b){if(e.isFunction(c.isComplete))return c.isComplete.call(n,b,c);if("*"!=c.repeat){var f=!1,a=Z(!0),d=G(a.l);if(w()==d&&(void 0==a.def||a.def.newBlockMarker||a.def.optionalQuantifier))for(f=!0,a=0;a<=d;a++){var l=D(a);if(l&&(void 0==b[a]||b[a]==R(a))||!l&&b[a]!=R(a)){f=!1;break}}return f}}function ka(b){b=e._data(b).events;
e.each(b,function(b,a){e.each(a,function(b,a){if("inputmask"==a.namespace&&"setvalue"!=a.type){var f=a.handler;a.handler=function(b){if(this.readOnly||this.disabled)b.preventDefault;else return f.apply(this,arguments)}}})})}function la(b){function a(b){if(void 0==e.valHooks[b]||!0!=e.valHooks[b].inputmaskpatch){var c=e.valHooks[b]&&e.valHooks[b].get?e.valHooks[b].get:function(b){return b.value},f=e.valHooks[b]&&e.valHooks[b].set?e.valHooks[b].set:function(b,a){b.value=a;return b};e.valHooks[b]={get:function(b){var a=
e(b);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");b=c(b);a=(a=a.data("_inputmask").maskset._buffer)?a.join(""):"";return b!=a?b:""}return c(b)},set:function(b,a){var c=e(b),d=f(b,a);c.data("_inputmask")&&c.triggerHandler("setvalue.inputmask");return d},inputmaskpatch:!0}}}var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value"));if(c&&c.get){if(!b._valueGet){var d=c.get,l=c.set;b._valueGet=function(){return A?d.call(this).split("").reverse().join(""):
d.call(this)};b._valueSet=function(b){l.call(this,A?b.split("").reverse().join(""):b)};Object.defineProperty(b,"value",{get:function(){var b=e(this),a=e(this).data("_inputmask");return a?a.opts.autoUnmask?b.inputmask("unmaskedvalue"):d.call(this)!=s().join("")?d.call(this):"":d.call(this)},set:function(b){l.call(this,b);e(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&b.__lookupGetter__("value")?b._valueGet||(d=b.__lookupGetter__("value"),l=b.__lookupSetter__("value"),
b._valueGet=function(){return A?d.call(this).split("").reverse().join(""):d.call(this)},b._valueSet=function(b){l.call(this,A?b.split("").reverse().join(""):b)},b.__defineGetter__("value",function(){var b=e(this),a=e(this).data("_inputmask");return a?a.opts.autoUnmask?b.inputmask("unmaskedvalue"):d.call(this)!=s().join("")?d.call(this):"":d.call(this)}),b.__defineSetter__("value",function(b){l.call(this,b);e(this).triggerHandler("setvalue.inputmask")})):(b._valueGet||(b._valueGet=function(){return A?
this.value.split("").reverse().join(""):this.value},b._valueSet=function(b){this.value=A?b.split("").reverse().join(""):b}),a(b.type))}function $(b,a,e){if(c.numericInput||A){switch(a){case c.keyCode.BACKSPACE:a=c.keyCode.DELETE;break;case c.keyCode.DELETE:a=c.keyCode.BACKSPACE}A&&(b=e.end,e.end=e.begin,e.begin=b)}e.begin==e.end?a==c.keyCode.BACKSPACE?e.begin=G(e.begin):a==c.keyCode.DELETE&&e.end++:1!=e.end-e.begin||c.insertMode||a==c.keyCode.BACKSPACE&&e.begin--;b=e.begin;var g=e.end;for(a=b;b<g;b++)delete d.validPositions[b];
for(b=g;b<=w();){var g=d.validPositions[b],l=d.validPositions[a];void 0!=g&&void 0==l?(x(a,g.match.def)&&!1!==C(a,g.input,!0)&&(delete d.validPositions[b],b++),a++):b++}for(a=w();0<a&&(void 0==d.validPositions[a]||null==d.validPositions[a].match.fn);)delete d.validPositions[a],a--;t(!0);a=E(-1);w()<a?d.p=a:d.p=e.begin}function aa(b){W=!1;var a=this,g=e(a),h=b.keyCode,l=y(a);h==c.keyCode.BACKSPACE||h==c.keyCode.DELETE||fa&&127==h||b.ctrlKey&&88==h?(b.preventDefault(),88==h&&(H=m().join("")),$(a,h,
l),F(a,m(),d.p),a._valueGet()==s().join("")&&g.trigger("cleared"),c.showTooltip&&g.prop("title",d.mask)):h==c.keyCode.END||h==c.keyCode.PAGE_DOWN?setTimeout(function(){var d=E(w());c.insertMode||d!=M()||b.shiftKey||d--;y(a,b.shiftKey?l.begin:d,d)},0):h==c.keyCode.HOME&&!b.shiftKey||h==c.keyCode.PAGE_UP?y(a,0,b.shiftKey?l.begin:0):h==c.keyCode.ESCAPE||90==h&&b.ctrlKey?(N(a,!0,!1,H.split("")),g.click()):h!=c.keyCode.INSERT||b.shiftKey||b.ctrlKey?!1!=c.insertMode||b.shiftKey||(h==c.keyCode.RIGHT?setTimeout(function(){var b=
y(a);y(a,b.begin)},0):h==c.keyCode.LEFT&&setTimeout(function(){var b=y(a);y(a,b.begin-1)},0)):(c.insertMode=!c.insertMode,y(a,c.insertMode||l.begin!=M()?l.begin:l.begin-1));var g=y(a),k=c.onKeyDown.call(this,b,m(),c);k&&!0===k.refreshFromBuffer&&(d.validPositions={},d.tests={},v(0,m().length),t(!0),F(a,m()),y(a,g.begin,g.end));ba=-1!=e.inArray(h,c.ignorables)}function U(b,a,g,n,l,k){if(void 0==g&&W)return!1;W=!0;var q=e(this);b=b||window.event;g=a?g:b.which||b.charCode||b.keyCode;if(!(!0===a||b.ctrlKey&&
b.altKey)&&(b.ctrlKey||b.metaKey||ba))return!0;if(g){!0!==a&&46==g&&!1==b.shiftKey&&","==c.radixPoint&&(g=44);var s;g=String.fromCharCode(g);a?(k=l?k:w()+1,k={begin:k,end:k}):k=y(this);var x=A?1<k.begin-k.end||1==k.begin-k.end&&c.insertMode:1<k.end-k.begin||1==k.end-k.begin&&c.insertMode;x&&(d.undoPositions=e.extend(!0,{},d.validPositions),$(this,c.keyCode.DELETE,k),c.insertMode||(c.insertMode=!c.insertMode,h(k.begin,l),c.insertMode=!c.insertMode),x=!c.multi);d.writeOutBuffer=!0;var v=k.begin,u=C(v,
g,l);!1!==u&&(!0!==u&&(v=void 0!=u.pos?u.pos:v,g=void 0!=u.c?u.c:g),t(!0),void 0!=u.caret?s=u.caret:(l=d.validPositions,s=void 0!=l[v+1]&&r(k+1,l[v].locator.slice(),v).match.def!=l[v+1].match.def?v+1:E(v)),d.p=s);if(!1!==n){var z=this;setTimeout(function(){c.onKeyValidation.call(z,u,c)},0);if(d.writeOutBuffer&&!1!==u){var D=m();F(this,D,a?void 0:c.numericInput?G(s):s);!0!==a&&setTimeout(function(){!0===P(D)&&q.trigger("complete");Q=!0;q.trigger("input")},0)}else x&&(d.buffer=void 0,d.validPositions=
d.undoPositions)}else x&&(d.buffer=void 0,d.validPositions=d.undoPositions);c.showTooltip&&q.prop("title",d.mask);b&&!0!=a&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}}function ma(b){var a=e(this),g=b.keyCode,h=m();(b=c.onKeyUp.call(this,b,h,c))&&!0===b.refreshFromBuffer&&(d.validPositions={},d.tests={},v(0,m().length),t(!0),F(this,m()));g==c.keyCode.TAB&&c.showMaskOnFocus&&(a.hasClass("focus.inputmask")&&0==this._valueGet().length?(t(),h=m(),F(this,h),y(this,0),H=m().join("")):(F(this,
h),y(this,L(0),L(M()))))}function ca(b){if(!0===Q&&"input"==b.type)return Q=!1,!0;var a=this,d=e(a);if("propertychange"==b.type&&a._valueGet().length<=M())return!0;setTimeout(function(){var b=e.isFunction(c.onBeforePaste)?c.onBeforePaste.call(a,a._valueGet(),c):a._valueGet();N(a,!0,!1,b.split(""),!0);!0===P(m())&&d.trigger("complete");d.click()},0)}function na(b){if(!0===Q&&"input"==b.type)return Q=!1,!0;var a=y(this),d=this._valueGet(),d=d.replace(RegExp("("+O(s().join(""))+")*"),"");a.begin>d.length&&
(y(this,d.length),a=y(this));1!=m().length-d.length||d.charAt(a.begin)==m()[a.begin]||d.charAt(a.begin+1)==m()[a.begin]||D(a.begin)||(b.keyCode=c.keyCode.BACKSPACE,aa.call(this,b));b.preventDefault()}function oa(b){n=e(b);if(n.is(":input")&&"number"!=n.attr("type")){n.data("_inputmask",{maskset:d,opts:c,isRTL:!1});c.showTooltip&&n.prop("title",d.mask);la(b);("rtl"==b.dir||c.rightAlign)&&n.css("text-align","right");if("rtl"==b.dir||c.numericInput){b.dir="ltr";n.removeAttr("dir");var a=n.data("_inputmask");
a.isRTL=!0;n.data("_inputmask",a);A=!0}n.unbind(".inputmask");n.removeClass("focus.inputmask");n.closest("form").bind("submit",function(){H!=m().join("")&&n.change()}).bind("reset",function(){setTimeout(function(){n.trigger("setvalue")},0)});n.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&c.showMaskOnHover&&this._valueGet()!=m().join("")&&F(this,m())}).bind("blur.inputmask",function(){var b=e(this);if(b.data("_inputmask")){var a=this._valueGet(),d=m();b.removeClass("focus.inputmask");
H!=m().join("")&&b.change();c.clearMaskOnLostFocus&&""!=a&&(a==s().join("")?this._valueSet(""):V(this));!1===P(d)&&(b.trigger("incomplete"),c.clearIncomplete&&(t(),c.clearMaskOnLostFocus?this._valueSet(""):(d=s().slice(),F(this,d))))}}).bind("focus.inputmask",function(){var b=e(this),a=this._valueGet();c.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!c.showMaskOnHover||c.showMaskOnHover&&""==a)&&this._valueGet()!=m().join("")&&F(this,m(),E(w()));b.addClass("focus.inputmask");H=m().join("")}).bind("mouseleave.inputmask",
function(){var b=e(this);c.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||(this._valueGet()==s().join("")||""==this._valueGet()?this._valueSet(""):V(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var a=y(b);m();if(a.begin==a.end){var a=A?L(a.begin):a.begin,c=w(a),c=E(c);a<c?D(a)?y(b,a):y(b,E(a)):y(b,c)}},0)}).bind("dblclick.inputmask",function(){var b=this;setTimeout(function(){y(b,0,E(w()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",
ca).bind("setvalue.inputmask",function(){N(this,!0);H=m().join("");this._valueGet()==s().join("")&&this._valueSet("")}).bind("complete.inputmask",c.oncomplete).bind("incomplete.inputmask",c.onincomplete).bind("cleared.inputmask",c.oncleared);n.bind("keydown.inputmask",aa).bind("keypress.inputmask",U).bind("keyup.inputmask",ma);if(ga||ia||ha||ja)"input"==T&&n.unbind(T+".inputmask"),n.bind("input.inputmask",na);ea&&n.bind("input.inputmask",ca);a=e.isFunction(c.onBeforeMask)?c.onBeforeMask.call(b,b._valueGet(),
c):b._valueGet();N(b,!0,!1,a.split(""),!0);H=m().join("");var g;try{g=document.activeElement}catch(h){}g===b?(n.addClass("focus.inputmask"),y(b,E(w()))):c.clearMaskOnLostFocus?m().join("")==s().join("")?b._valueSet(""):V(b):F(b,m());ka(b)}}var A=!1,H,n,W=!1,Q=!1,ba=!1,I;if(void 0!=a)switch(a.action){case "isComplete":return n=e(a.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,P(a.buffer);case "unmaskedvalue":return n=a.$input,d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,
A=a.$input.data("_inputmask").isRTL,Y(a.$input,a.skipDatepickerCheck);case "mask":H=m().join("");oa(a.el);break;case "format":n=e({});n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput});c.numericInput&&(A=!0);var K=a.value.split("");N(n,!1,!1,A?K.reverse():K,!0);return A?m().reverse().join(""):m().join("");case "isValid":return n=e({}),n.data("_inputmask",{maskset:d,opts:c,isRTL:c.numericInput}),c.numericInput&&(A=!0),K=a.value.split(""),N(n,!1,!0,A?K.reverse():K),P(m());case "getemptymask":return n=
e(a.el),d=n.data("_inputmask").maskset,c=n.data("_inputmask").opts,s();case "remove":a=a.el;n=e(a);d=n.data("_inputmask").maskset;c=n.data("_inputmask").opts;a._valueSet(Y(n));n.unbind(".inputmask");n.removeClass("focus.inputmask");n.removeData("_inputmask");Object.getOwnPropertyDescriptor&&(K=Object.getOwnPropertyDescriptor(a,"value"));K&&K.get?a._valueGet&&Object.defineProperty(a,"value",{get:a._valueGet,set:a._valueSet}):document.__lookupGetter__&&a.__lookupGetter__("value")&&a._valueGet&&(a.__defineGetter__("value",
a._valueGet),a.__defineSetter__("value",a._valueSet));try{delete a._valueGet,delete a._valueSet}catch(pa){a._valueGet=void 0,a._valueSet=void 0}}};e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,
onKeyUp:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,
BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},
escapeRegex:function(a){return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(a,d){var c=e.extend(!0,{},e.inputmask.defaults,d);C(c.alias,d,c);return D({action:"format",value:a},G(c),c)},isValid:function(a,d){var c=e.extend(!0,{},e.inputmask.defaults,d);C(c.alias,d,c);return D({action:"isValid",value:a},G(c),c)}};e.fn.inputmask=function(a,d,c,u,t){function w(a,c){var d=e(a),h;for(h in c){var m=d.data("inputmask-"+h.toLowerCase());void 0!=
m&&(c[h]=m)}return c}c=c||D;u=u||"_inputmask";var h=e.extend(!0,{},e.inputmask.defaults,d),r;if("string"===typeof a)switch(a){case "mask":return C(h.alias,d,h),r=G(h),0==r.length?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,h))});case "unmaskedvalue":return a=e(this),a.data(u)?c({action:"unmaskedvalue",$input:a}):a.val();case "remove":return this.each(function(){e(this).data(u)&&c({action:"remove",el:this})});case "getemptymask":return this.data(u)?
c({action:"getemptymask",el:this}):"";case "hasMaskedValue":return this.data(u)?!this.data(u).opts.autoUnmask:!1;case "isComplete":return this.data(u)?c({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this}):!0;case "getmetadata":if(this.data(u))return r=this.data(u).maskset,r.metadata;break;case "_detectScope":return C(h.alias,d,h),void 0==t||C(t,d,h)||-1!=e.inArray(t,"mask unmaskedvalue remove getemptymask hasMaskedValue isComplete getmetadata _detectScope".split(" "))||(h.mask=t),
e.isFunction(h.mask)&&(h.mask=h.mask.call(this,h)),e.isArray(h.mask);default:return C(a,d,h)||(h.mask=a),r=G(h),void 0==r?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,h))})}else{if("object"==typeof a)return h=e.extend(!0,{},e.inputmask.defaults,a),C(h.alias,a,h),r=G(h),void 0==r?this:this.each(function(){c({action:"mask",el:this},e.extend(!0,{},e.isArray(r)&&c===D?r[0]:r),w(this,h))});if(void 0==a)return this.each(function(){var a=e(this).attr("data-inputmask");
if(a&&""!=a)try{var a=a.replace(RegExp("'","g"),'"'),r=e.parseJSON("{"+a+"}");e.extend(!0,r,d);h=e.extend(!0,{},e.inputmask.defaults,r);C(h.alias,r,h);h.alias=void 0;e(this).inputmask("mask",h,c)}catch(g){}})}}}})(jQuery);
