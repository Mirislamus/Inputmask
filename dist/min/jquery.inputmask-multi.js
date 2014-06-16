/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.37
*/
(function(c){if(void 0!=c.fn.inputmask){var s=function(b,h,g){function s(a){var c=document.createElement("input");a="on"+a;var k=a in c;k||(c.setAttribute(a,"return;"),k="function"==typeof c[a]);return k}function v(a){if(void 0==c.valHooks[a]||!0!=c.valHooks[a].inputmaskmultipatch){var f=c.valHooks[a]&&c.valHooks[a].get?c.valHooks[a].get:function(c){return c.value},k=c.valHooks[a]&&c.valHooks[a].set?c.valHooks[a].set:function(c,a){c.value=a;return c};c.valHooks[a]={get:function(a){var k=c(a);return k.data("_inputmask-multi")?
(a=k.data("_inputmask-multi"),f(a.elmasks[a.activeMasksetIndex])):f(a)},set:function(a,f){var b=c(a),d=k(a,f);b.data("_inputmask-multi")&&b.triggerHandler("setvalue");return d},inputmaskmultipatch:!0}}}function p(a,f,k){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof f){f=q(f);k=q(k);k="number"==typeof k?k:f;if(a!=e){var b=c(a).data("_inputmask")||{};b.caret={begin:f,end:k};c(a).data("_inputmask",b)}c(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==g.insertMode&&f==k&&k++,a.setSelectionRange?
(a.selectionStart=f,a.selectionEnd=k):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",k),a.moveStart("character",f),a.select()))}else return b=c(a).data("_inputmask"),!c(a).is(":visible")&&b&&void 0!=b.caret?(f=b.caret.begin,k=b.caret.end):a.setSelectionRange?(f=a.selectionStart,k=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),f=0-a.duplicate().moveStart("character",-1E5),k=f+a.text.length),f=q(f),k=q(k),{begin:f,
end:k}}function q(a){!n||"number"!=typeof a||g.greedy&&""==g.placeholder||(a=e.value.length-a);return a}function r(a,f){if("multiMaskScope"!=a){if(c.isFunction(g.determineActiveMasksetIndex))l=g.determineActiveMasksetIndex.call(d,a,f);else{var b=-1,t=-1,m=-1;c.each(f,function(a,f){var d=c(f).data("_inputmask").maskset,e=-1,g=0,h=p(f).begin,n;for(n in d.validPositions)d=parseInt(n),d>e&&(e=d),g++;if(g>b||g==b&&t>h&&m>e||g==b&&t==h&&m<e)b=g,t=h,l=a,m=e})}var h=d.data("_inputmask-multi")||{activeMasksetIndex:0,
elmasks:f};h.activeMasksetIndex=l;d.data("_inputmask-multi",h)}-1==c.inArray(a,["focus"])&&e.value!=f[l]._valueGet()&&(h=""==c(f[l]).val()?f[l]._valueGet():c(f[l]).val(),e.value=h);-1==c.inArray(a,["blur","focus"])&&c(f[l]).hasClass("focus.inputmask")&&(h=p(f[l]),p(e,h.begin,h.end))}function w(a){e=a;d=c(e);n="rtl"==e.dir||g.numericInput;l=0;m=c.map(h,function(a,b){var e='<input type="text" ';d.attr("value")&&(e+='value="'+d.attr("value")+'" ');d.attr("dir")&&(e+='dir="'+d.attr("dir")+'" ');e=c(e+
"/>")[0];c(e).inputmask(c.extend({},g,{mask:a.mask}));return e});d.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:m});("rtl"==e.dir||g.rightAlign)&&d.css("text-align","right");e.dir="ltr";d.removeAttr("dir");""!=d.attr("value")&&r("init",m);d.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",function(a){var b=p(e),d,h=!0;if("keydown"==a.type){d=a.keyCode;if(d==g.keyCode.DOWN&&l<m.length-1)return l++,r("multiMaskScope",m),!1;if(d==g.keyCode.UP&&0<l)return l--,
r("multiMaskScope",m),!1;if(a.ctrlKey||a.shiftKey||a.altKey)return!0}else if("keypress"==a.type&&(a.ctrlKey||a.shiftKey||a.altKey))return!0;c.each(m,function(e,l){if("keydown"==a.type){d=a.keyCode;if(d==g.keyCode.BACKSPACE&&l._valueGet().length<b.begin)return;if(d==g.keyCode.TAB)h=!1;else{if(d==g.keyCode.RIGHT){p(l,b.begin+1,b.end+1);h=!1;return}if(d==g.keyCode.LEFT){p(l,b.begin-1,b.end-1);h=!1;return}}}if(-1!=c.inArray(a.type,["click"])&&(p(l,q(b.begin),q(b.end)),b.begin!=b.end)){h=!1;return}-1!=
c.inArray(a.type,["keydown"])&&b.begin!=b.end&&p(l,b.begin,b.end);c(l).triggerHandler(a)});h&&setTimeout(function(){r(a.type,m)},0)});d.bind(x+" dragdrop drop setvalue",function(a){p(e);setTimeout(function(){c.each(m,function(b,d){d._valueSet(e.value);c(d).triggerHandler(a)});setTimeout(function(){r(a.type,m)},0)},0)});v(e.type)}var x=s("paste")?"paste":s("input")?"input":"propertychange",n,e,d,m,l;g.multi=!0;if(void 0!=b)switch(b.action){case "isComplete":return d=c(b.el),b=d.data("_inputmask-multi"),
b=b.elmasks[b.activeMasksetIndex],c(b).inputmask("isComplete");case "unmaskedvalue":return d=b.$input,b=d.data("_inputmask-multi"),b=b.elmasks[b.activeMasksetIndex],c(b).inputmask("unmaskedvalue");case "mask":w(b.el);break;case "format":return d=c({}),d.data("_inputmask",{maskset:maskset,opts:g,isRTL:g.numericInput}),g.numericInput&&(n=!0),b=b.value.split(""),checkVal(d,!1,!1,n?b.reverse():b,!0),n?getBuffer().reverse().join(""):getBuffer().join("");case "isValid":return d=c({}),d.data("_inputmask",
{maskset:maskset,opts:g,isRTL:g.numericInput}),g.numericInput&&(n=!0),b=b.value.split(""),checkVal(d,!1,!0,n?b.reverse():b),isComplete(getBuffer());case "getemptymask":return d=c(b.el),maskset=d.data("_inputmask").maskset,g=d.data("_inputmask").opts,getBufferTemplate();case "remove":e=b.el;d=c(e);maskset=d.data("_inputmask").maskset;g=d.data("_inputmask").opts;e._valueSet(unmaskedvalue(d));d.unbind(".inputmask");d.removeClass("focus.inputmask");d.removeData("_inputmask");var u;Object.getOwnPropertyDescriptor&&
(u=Object.getOwnPropertyDescriptor(e,"value"));u&&u.get?e._valueGet&&Object.defineProperty(e,"value",{get:e._valueGet,set:e._valueSet}):document.__lookupGetter__&&e.__lookupGetter__("value")&&e._valueGet&&(e.__defineGetter__("value",e._valueGet),e.__defineSetter__("value",e._valueSet));try{delete e._valueGet,delete e._valueSet}catch(y){e._valueGet=void 0,e._valueSet=void 0}}};c.extend(c.inputmask.defaults,{multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0});c.inputmask._fn=
c.fn.inputmask;c.fn.inputmask=function(b,h){if("string"===typeof b)return c.inputmask._fn("_detectScope",h,void 0,void 0,b)?c.inputmask._fn.call(this,b,h,s,"_inputmask-multi"):c.inputmask._fn.call(this,b,h);if("object"==typeof b)return c.inputmask._fn("_detectScope",b)?c.inputmask._fn.call(this,b,h,s,"_inputmask-multi"):c.inputmask._fn.call(this,b,h);if(void 0==b)return c.inputmask._fn.call(this,b,h)}}})(jQuery);
