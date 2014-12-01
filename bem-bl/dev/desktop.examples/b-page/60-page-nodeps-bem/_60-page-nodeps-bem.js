var BEMHTML=function(){function t(t){return t._mode=e,t.block=i,t.elem=r,t.elemMods=o,t.mods=u,t}function n(t,n){var s=e;e=n._mode;var a=i;i=n.block;var c=r;r=n.elem;var l=o;o=n.elemMods;var f=u;u=n.mods;var d=t(n);return e=s,i=a,r=c,o=l,u=f,d}var e,i,r,o,u,s,a={},c=function(a){function c(t){var n=e;return"attrs"===n?l(t):"bem"===n?m(t):"default"===n?v(t):"cls"===n?x(t):"tag"===n?d(t):"xUACompatible"===n?"b-page"===i&&!!r==!1?C(t):w(t):"doctype"===n?"b-page"===i&&!!r==!1?I(t):w(t):"content"===n?j(t):"jsAttr"===n?O(t):"js"===n?L(t):"mix"===n?k(t):w(t)}function l(t){if("b-page"===i){var n=r;return"js"===n?!t.ctx.url==!1?{src:t.ctx.url}:f(t):"css"===n?!t.ctx.url==!1?{rel:"stylesheet",href:t.ctx.url}:f(t):"favicon"===n?{rel:"shortcut icon",href:t.ctx.url}:"meta"===n?t.ctx.attrs:f(t)}return f(t)}function f(){return void 0}function d(t){var n=i;if("b-page"===n){var n=r;return"js"===n?"script":"css"===n?!t.ctx.url==!1?"link":"style":"favicon"===n?"link":"meta"===n?"meta":"head"===n?"head":"root"===n?"html":!!r==!1?"body":h(t)}return"i-ua"===n&&!!r==!1?"script":h(t)}function h(){return void 0}function m(t){var n=i;if("b-page"===n){var n=r;return"js"===n||"css"===n||"favicon"===n||"meta"===n||"head"===n||"root"===n?!1:_(t)}return"i-ua"===n&&!!r==!1?!1:_(t)}function _(){return void 0}function v(t){var n=i;return"b-page"===n?"css"===r&&!t.ctx.hasOwnProperty("ie")==!1&&!!t.ctx._ieCommented==!1?p(t):b(t):"i-jquery"===n?"core"===r&&!(t.__$anflg1!==!0)==!1?y(t):w(t):"i-bem"===n&&"i18n"===r?E(t):w(t)}function p(n){var i=n.ctx.ie;if(i===!0){var r=e;e="";var o=n.ctx;n.ctx=[6,7,8,9].map(function(t){return{elem:"css",url:this.ctx.url+".ie"+t+".css",ie:"IE "+t}},t(n)),w(n),e=r,n.ctx=o}else{var u=i?"!IE"===i?[i,"<!-->","<!--"]:[i,"",""]:["gt IE 9","<!-->","<!--"],s=e;e="";var a=n.ctx,c=a._ieCommented;a._ieCommented=!0;var l=n.ctx;n.ctx=["<!--[if "+u[0]+"]>",u[1],n.ctx,u[2],"<![endif]-->"],w(n),e=s,a._ieCommented=c,n.ctx=l}}function b(t){return!(t.__$anflg2!==!0)==!1&&!!r==!1?g(t):w(t)}function g(t){var n,i,r,o,u=t.ctx,s=(n=e,e="doctype",i=I(t),e=n,i),a=(r=e,e="xUACompatible",o=C(t),e=r,o),c=[s,{elem:"root",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},a,{tag:"title",content:u.title},u.favicon?{elem:"favicon",url:u.favicon}:"",u.meta,{block:"i-ua"},u.head]},u]}],l=t.__$anflg2;t.__$anflg2=!0;var f=t.ctx;t.ctx=c;var d=e;e="",w(t),t.ctx=f,e=d,t.__$anflg2=l}function y(t){var n,i,r,o,u;return n=t.__$anflg1,t.__$anflg1=!0,r=t.ctx,t.ctx={block:"b-page",elem:"js",url:"//yastatic.net/jquery/1.8.3/jquery.min.js"},o=e,e="",u=w(t),t.ctx=r,e=o,i=u,t.__$anflg1=n,i}function E(t){var n,i,r,o;if(!t.ctx)return"";var u=t.ctx,s=u.keyset,a=u.key,c=u.params||{};if(!s&&!a)return"";if(u.content){var l;c.content=(l=[],n=t._buf,t._buf=l,i=e,e="",r=t.ctx,t.ctx=u.content,o=w(t),t._buf=n,e=i,t.ctx=r,l.join(""))}t._buf.push(BEM.I18N(s,a,c))}function x(t){return"b-page"===i&&"root"===r?"i-ua_js_no i-ua_css_standard":M(t)}function M(){return void 0}function k(t){return"b-page"===i&&!!r==!1?[{elem:"body"}]:N(t)}function N(){return void 0}function C(t){return t.ctx["x-ua-compatible"]===!1?!1:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:t.ctx["x-ua-compatible"]||"IE=edge"}}}function I(t){return t.ctx.doctype||"<!DOCTYPE html>"}function j(t){return"i-ua"===i&&!!r==!1?[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',"})(document);"].join(""):B(t)}function B(t){return t.ctx.content}function O(){return void 0}function L(){return void 0}function w(t){return!t.ctx==!1&&!t.ctx.link==!1&&!!t._.isSimple(t.ctx)==!1?A(t):T(t)}function A(e){function i(){if("no-follow"===this.ctx.link)return void 0;var t=this._links[this.ctx.link];return __r0=this.ctx,this.ctx=t,__r1=n(V,this),this.ctx=__r0,__r1}if(!s||!e._cacheLog)return i.call(t(e));var r=e._buf.slice(e._cachePos).join("");e._cachePos=e._buf.length,e._cacheLog.push(r,{log:e._localLog.slice(),link:e.ctx.link});var o=i.call(t(e));return e._cachePos=e._buf.length,o}function T(t){return!s==!1&&!t.ctx==!1&&!t.ctx.cache==!1?D(t):q(t)}function D(n){function e(t,n,e){if(0===n.length)return void 0;if(Array.isArray(e)){for(var i=t,r=0;r<e.length-1;r++)i=i[e[r]];e=i[e[r]]}for(var o,u=t,r=0;r<n.length-1;r++)u=u[n[r]];return o=u[n[r]],u[n[r]]=e,o}var i;if(i=s.get(n.ctx.cache)){var r=n._links;n.ctx.links&&(n._links=n.ctx.links);for(var o=0;o<i.log.length;o++)if("string"!=typeof i.log[o]){var u,a=i.log[o];u=a.log.map(function(t){return{key:t[0],value:e(this,t[0],t[1])}},t(n)).reverse();var l=n.ctx,f=l.cache;l.cache=null;var d=n._cacheLog;n._cacheLog=null;var h=n.ctx,m=h.link;h.link=a.link,c(n),l.cache=f,n._cacheLog=d,h.link=m,u.forEach(function(t){e(this,t.key,t.value)},t(n))}else n._buf.push(i.log[o]);return n._links=r,i.res}var _,v=[],p=n.ctx,b=p.cache;p.cache=null;var g=n._cachePos;n._cachePos=n._buf.length;var y=n._cacheLog;n._cacheLog=v;var E=n._localLog;n._localLog=[],_=c(n);var x=n._buf.slice(n._cachePos).join("");return x&&v.push(x),p.cache=b,n._cachePos=g,n._cacheLog=y,n._localLog=E,s.set(n.ctx.cache,{log:v,res:_}),_}function q(t){var n=e;if("default"===n)return P(t);if(""===n){if(!t._.isSimple(t.ctx)==!1){t._listLength--;var i=t.ctx;return void((i&&i!==!0||0===i)&&t._buf.push(i))}return!!t.ctx==!1?void t._listLength--:!t._.isArray(t.ctx)==!1?S(t):F(t)}return R(t)}function P(t){function n(t,n){return(t||"")+"__"+(n||"")}var s,a,c,f,h,_,v,p,b,g,y,E,M,N,C,I,B,A,T,D,q,P,S,F=t.BEM,R=t.ctx,U=t._buf;if(a=e,e="tag",E=d(t),e=a,S=E,"undefined"!=typeof S||(S=R.tag),"undefined"!=typeof S||(S="div"),S){var V,$;i&&R.js!==!1&&(c=e,e="js",f=L(t),e=c,$=f,$=$?t._.extend(R.js,$===!0?{}:$):R.js===!0?{}:R.js,$&&((V={})[F.INTERNAL.buildClass(i,R.elem)]=$)),U.push("<",S);var Q=(h=e,e="bem",_=m(t),e=h,_);"undefined"!=typeof Q||(Q="undefined"!=typeof R.bem?R.bem:R.block||R.elem);var X=(v=e,e="cls",p=x(t),e=v,p);X||(X=R.cls);var z=R.block&&V&&!R.elem;if(Q||X){if(U.push(' class="'),Q){F.INTERNAL.buildClasses(i,R.elem,R.elemMods||R.mods,U);var H=(b=e,e="mix",g=k(t),e=b,g);if(R.mix&&(H=H?[].concat(H,R.mix):R.mix),H){var W={};W[n(i,r)]=!0,t._.isArray(H)||(H=[H]);for(var J=0;J<H.length;J++){var Z=H[J];if(Z){var Y=Z.block||Z.elem,G=Z.block||Z._block||i,K=Z.elem||Z._elem||r,tn=Z.mods||u,nn=Z.elemMods||{};if(Y&&U.push(" "),F.INTERNAL[Y?"buildClasses":"buildModsClasses"](G,Z.elem||Z._elem||(Z.block?void 0:r),Z.elemMods||Z.mods,U),Z.js&&((V||(V={}))[F.INTERNAL.buildClass(G,Z.elem)]=Z.js===!0?{}:Z.js,z||(z=G&&!Z.elem)),Y&&!W[n(G,K)]){W[n(G,K)]=!0;var en=(y=i,i=G,s=r,r=K,M=u,u=tn,N=o,o=nn,C=e,e="mix",I=k(t),i=y,r=s,u=M,o=N,e=C,I);if(en)for(var rn=0;rn<en.length;rn++){var on=en[rn];(on.block||on.elem)&&W[n(on.block,on.elem)]||(on._block=G,on._elem=K,H.splice(J+1,0,on))}}}}}}X&&U.push(Q?" ":"",X),z&&U.push(" i-bem"),U.push('"')}if(V){var un=(B=e,e="jsAttr",A=O(t),e=B,A);U.push(" ",un||"data-bem",'="',t._.attrEscape(JSON.stringify(V)),'"')}var sn=(T=e,e="attrs",D=l(t),e=T,D);if(sn=t._.extend(sn,R.attrs)){var an;for(an in sn)void 0!==sn[an]&&U.push(" ",an,'="',t._.attrEscape(sn[an]),'"')}}if(t._.isShortTag(S))U.push("/>");else{S&&U.push(">");var cn=(q=e,e="content",P=j(t),e=q,P);if(cn||0===cn){var Q=i||r,ln=t._notNewList;t._notNewList=!1;var fn=t.position;t.position=Q?1:t.position;var dn=t._listLength;t._listLength=Q?1:t._listLength;var hn=t.ctx;t.ctx=cn;var mn=e;e="",w(t),t._notNewList=ln,t.position=fn,t._listLength=dn,t.ctx=hn,e=mn}S&&U.push("</",S,">")}}function S(t){var n=t.ctx,e=n.length,i=0,r=t.position,o=t._notNewList;for(o?t._listLength+=e-1:(t.position=0,t._listLength=e),t._notNewList=!0;e>i;){var u=n[i++],s=t.ctx;t.ctx=null==u?"":u,w(t),t.ctx=s}o||(t.position=r)}function F(t){var n=t.ctx.block,s=t.ctx.elem,a=t._currBlock||i;t.ctx||(t.ctx={});var c=e;e="default";var l=t._links;t._links=t.ctx.links||t._links;var f=i;i=n||(s?a:void 0);var d=t._currBlock;t._currBlock=n||s?void 0:a;var h=r;r=t.ctx.elem;var m=u;u=n?t.ctx.mods||(t.ctx.mods={}):u;var _=o;o=t.ctx.elemMods||{},i||r?t.position=(t.position||0)+1:t._listLength--,v(t),e=c,t._links=l,i=f,t._currBlock=d,r=h,u=m,o=_}function R(){throw new Error(this)}function U(t){return V(t||this)}function V(t){return c(t)}return!function(){!function(t,n){if(n.I18N)return void 0;t.BEM=n;var e=n.I18N=function(t,n){return n};e.keyset=function(){return e},e.key=function(t){return t},e.lang=function(){return void 0}}(this,"undefined"==typeof BEM?{}:BEM)}(),!function(){function t(t,n){this.ctx=null===typeof t?"":t,this.apply=n,this._buf=[],this._=this,this._start=!0,this._listLength=0,this._notNewList=!1,this.position=0}var n={},e=Object.prototype.toString,i={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(t,n){function e(t,n,e){e.push(o,t,o,n)}function i(t,n,i,r){r.push(t),i&&e(n,i,r)}function r(t,r,o,s,a){i(t,n,n,a),a.push(u,r),s&&e(o,s,a)}var o="_",u="__",s="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:s,MOD_DELIM:o,ELEM_DELIM:u,buildModPostfix:function(t,n,i){var r=i||[];return e(t,n,r),i?r:r.join("")},buildClass:function(t,e,o,u,s){var a=typeof o;if("string"==a?"string"!=typeof u&&(s=u,u=o,o=e,e=n):"undefined"!=a?(s=o,o=n):e&&"string"!=typeof e&&(s=e,e=n),!(e||o||s))return t;var c=s||[];return e?r(t,e,o,u,c):i(t,o,u,c),s?c:c.join("")},buildModsClasses:function(t,n,e,o){var u=o||[];if(e){var s;for(s in e)if(e.hasOwnProperty(s)){var a=e[s];null!=a&&(a=e[s]+"",a&&(u.push(" "),n?r(t,n,s,a,u):i(t,s,a,u)))}}return o?u:u.join("")},buildClasses:function(t,e,o,u){var s=u||[];return e?r(t,e,n,n,s):i(t,n,n,s),this.buildModsClasses(t,e,o,u),u?s:s.join("")}}}(n);var r=function(){var t={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},n=function(n){return t[n]||n};return function(t){return t=new RegExp(t,"g"),function(e){return(""+e).replace(t,n)}}}();t.prototype.isArray=function(t){return"[object Array]"===e.call(t)},t.prototype.isSimple=function(t){var n=typeof t;return"string"===n||"number"===n||"boolean"===n},t.prototype.isShortTag=function(t){return i.hasOwnProperty(t)},t.prototype.extend=function(t,n){if(!t||!n)return t||n;var e,i={};for(e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);for(e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i},t.prototype.identify=function(){var t=0,e=n.__id=+new Date,i="__"+e,r=function(){return"uniq"+e+ ++t};return function(t,n){return t?n||t[i]?t[i]:t[i]=r():r()}}(),t.prototype.xmlEscape=r("[&<>]"),t.prototype.attrEscape=r('["&<>]'),t.prototype.BEM=n,t.prototype.isFirst=function(){return 1===this.position},t.prototype.isLast=function(){return this.position===this._listLength},t.prototype.generateId=function(){return this.identify(this.ctx)},a.apply=t.apply=function(){var n=new t(this,U);return n.apply(),n._buf.join("")}}(),a}("undefined"==typeof a?{}:a);return function(t){var n=this;return t||(t={}),s=t.cache,function(){return n===this?(n=void 0,e="",i="",r="",o="",u=""):(e="",i="",r="",o="",u=""),c.apply.call([n])}.call(null)}}();"undefined"==typeof exports||(exports.BEMHTML=BEMHTML),function(t){function n(n,i,r){var u=!1;if(o){var s=[];t.each(a,function(){r.hasOwnProperty(this)&&(u=!0)&&s.push({name:this,val:r[this]})}),u&&(t.each(r,function(t){s.push({name:t,val:this})}),r=s)}t.each(r,function(r,o){if(u&&(r=o.name,o=o.val),t.isFunction(o)&&(!e||o.toString().indexOf(".__base")>-1)){var s=n[r]||function(){};i[r]=function(){var t=this.__base;this.__base=s;var n=o.apply(this,arguments);return this.__base=t,n}}else i[r]=o})}var e=function(){"_"}.toString().indexOf("_")>-1,i=function(){},r=Object.create||function(t){var n=function(){};return n.prototype=t,new n},o=!0,u={toString:""};for(var s in u)u.hasOwnProperty(s)&&(o=!1);var a=o?["toString","valueOf"]:null;t.inherit=function(){var e=arguments,o=t.isFunction(e[0]),u=o?e[0]:i,s=e[o?1:0]||{},a=e[o?2:1],c=s.__constructor||o&&u.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:function(){};if(!o)return c.prototype=s,c.prototype.__self=c.prototype.constructor=c,t.extend(c,a);t.extend(c,u);var l=u.prototype,f=c.prototype=r(l);return f.__self=f.constructor=c,n(l,f,s),a&&n(u,c,a),c},t.inheritSelf=function(t,e,i){var r=t.prototype;return n(r,r,e),i&&n(t,t,i),t}}(jQuery),function(t){var n=0,e="__"+ +new Date,i=function(){return"uniq"+ ++n};t.identify=function(t,n){if(!t)return i();var r="uniqueID"in t?"uniqueID":e;return n||r in t?t[r]:t[r]=i()}}(jQuery),function(t){t.isEmptyObject||(t.isEmptyObject=function(t){for(var n in t)return!1;return!0})}(jQuery),function(t){t.extend({debounce:function(t,n,e,i){3==arguments.length&&"boolean"!=typeof e&&(i=e,e=!1);var r;return function(){var o=arguments;i=i||this,e&&!r&&t.apply(i,o),clearTimeout(r),r=setTimeout(function(){e||t.apply(i,o),r=null},n)}},throttle:function(t,n,e){var i,r,o;return function(){r=arguments,o=!0,e=e||this,i||function(){o?(t.apply(e,r),o=!1,i=setTimeout(arguments.callee,n)):i=null}()}}})}(jQuery),function(t){var n="__"+ +new Date+"storage",e=function(n,e){return t.identify(n)+(e?t.identify(e):"")},i={buildEventName:function(t){return t},on:function(i,r,o,u,s){if("string"==typeof i){t.isFunction(r)&&(u=o,o=r,r=void 0);for(var a,c=e(o,u),l=this[n]||(this[n]={}),f=i.split(" "),d=0;i=f[d++];)if(i=this.buildEventName(i),a=l[i]||(l[i]={ids:{},list:{}}),!(c in a.ids)){var h=a.list,m={fn:o,data:r,ctx:u,special:s};h.last?(h.last.next=m,m.prev=h.last):h.first=m,a.ids[c]=h.last=m}}else{var _=this;t.each(i,function(t,n){_.on(t,n,r,s)})}return this},onFirst:function(t,n,e,i){return this.on(t,n,e,i,{one:!0})},un:function(i,r,o){if("string"==typeof i||"undefined"==typeof i){var u=this[n];if(u)if(i){for(var s,a=i.split(" "),c=0;i=a[c++];)if(i=this.buildEventName(i),s=u[i])if(r){var l=e(r,o),f=s.ids;if(l in f){var d=s.list,h=f[l],m=h.prev,_=h.next;m?m.next=_:h===d.first&&(d.first=_),_?_.prev=m:h===d.last&&(d.last=m),delete f[l]}}else delete this[n][i]}else delete this[n]}else{var v=this;t.each(i,function(t,n){v.un(t,n,o)})}return this},trigger:function(e,i){var r,o=this,u=o[n];if("string"==typeof e?e=t.Event(o.buildEventName(r=e)):e.type=o.buildEventName(r=e.type),e.target||(e.target=o),u&&(u=u[e.type]))for(var s,a=u.list.first;a;)e.data=a.data,s=a.fn.call(a.ctx||o,e,i),"undefined"!=typeof s&&(e.result=s,s===!1&&(e.preventDefault(),e.stopPropagation())),a.special&&a.special.one&&o.un(r,a.fn,a.ctx),a=a.next;return this}};t.observable=t.inherit(i,i)}(jQuery),function(t,n){function e(t,n,e){return(t?"__elem_"+t:"")+"__mod"+(n?"_"+n:"")+(e?"_"+e:"")}function i(n,i,r){t.isFunction(n)?i[e(r,"*","*")]=n:t.each(n,function(n,o){t.isFunction(o)?i[e(r,n,"*")]=o:t.each(o,function(t,o){i[e(r,n,t)]=o})})}function r(t,n){return n?Array.isArray(n)?function(e){for(var i=0,r=n.length;r>i;)if(e.hasMod(t,n[i++]))return!0;return!1}:function(e){return e.hasMod(t,n)}:function(n){return n.hasMod(t)}}var o=[],u={},s={};this.BEM=t.inherit(t.observable,{__constructor:function(t,n,e){var i=this;i._modCache=t||{},i._processingMods={},i._params=n,i.params=null,e!==!1?i._init():i.afterCurrentEvent(function(){i._init()})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this},changeThis:function(t,n){return t.bind(n||this)},afterCurrentEvent:function(t,n){this.__self.afterCurrentEvent(this.changeThis(t,n))},trigger:function(t,n){return this.__base(t=this.buildEvent(t),n).__self.trigger(t,n),this},buildEvent:function(n){return"string"==typeof n&&(n=t.Event(n)),n.block=this,n},hasMod:function(t,e,i){var r=arguments.length,o=!1;1==r?(i="",e=t,t=n,o=!0):2==r&&("string"==typeof t?(i=e,e=t,t=n):(i="",o=!0));var u=this.getMod(t,e)===i;return o?!u:u},getMod:function(t,n){var e=typeof t;if("string"===e||"undefined"===e){n=t||n;var i=this._modCache;return n in i?i[n]:i[n]=this._extractModVal(n)}return this._getElemMod(n,t)},_getElemMod:function(t,n,e){return this._extractModVal(t,n,e)},getMods:function(t){var e=t&&"string"!=typeof t,i=this,r=[].slice.call(arguments,e?1:0),o=i._extractMods(r,e?t:n);return e||(r.length?r.forEach(function(t){i._modCache[t]=o[t]}):i._modCache=o),o},setMod:function(e,i,r){"undefined"==typeof r&&(r=i,i=e,e=n);var o=this;if(!e||e[0]){var u=(e&&e[0]?t.identify(e[0]):"")+"_"+i;if(this._processingMods[u])return o;var s,a=e?o._getElemMod(i,e,s=o.__self._extractElemNameFrom(e)):o.getMod(i);if(a===r)return o;this._processingMods[u]=!0;var c=!0,l=[i,r,a];e&&l.unshift(e),[["*","*"],[i,"*"],[i,r]].forEach(function(t){c=o._callModFn(s,t[0],t[1],l)!==!1&&c}),!e&&c&&(o._modCache[i]=r),c&&o._afterSetMod(i,r,a,e,s),delete this._processingMods[u]}return o},_afterSetMod:function(){},toggleMod:function(t,e,i,r,o){"string"==typeof t&&(o=r,r=i,i=e,e=t,t=n),"undefined"==typeof r?r="":"boolean"==typeof r&&(o=r,r="");var u=this.getMod(t,e);return(u==i||u==r)&&this.setMod(t,e,"boolean"==typeof o?o?i:r:this.hasMod(t,e,i)?r:i),this},delMod:function(t,e){return e||(e=t,t=n),this.setMod(t,e,"")},_callModFn:function(t,i,r,o){var u=e(t,i,r);return this[u]?this[u].apply(this,o):n},_extractModVal:function(){return""},_extractMods:function(){return{}},channel:function(t,n){return this.__self.channel(t,n)},getDefaultParams:function(){return{}},del:function(t){var n=[].slice.call(arguments);return"string"==typeof t&&n.unshift(this),this.__self.del.apply(this.__self,n),this},destruct:function(){}},{_name:"i-bem",blocks:u,decl:function(e,o,s){if("string"==typeof e?e={block:e}:e.name&&(e.block=e.name),e.baseBlock&&!u[e.baseBlock])throw'baseBlock "'+e.baseBlock+'" for "'+e.block+'" is undefined';o||(o={}),o.onSetMod&&(i(o.onSetMod,o),delete o.onSetMod),o.onElemSetMod&&(t.each(o.onElemSetMod,function(t,n){i(n,o,t)}),delete o.onElemSetMod);var a=u[e.baseBlock||e.block]||this;if(e.modName){var c=r(e.modName,e.modVal);t.each(o,function(e,i){t.isFunction(i)&&(o[e]=function(){var t;if(c(this))t=i;else{var r=a.prototype[e];r&&r!==o[e]&&(t=this.__base)}return t?t.apply(this,arguments):n})})}if(s&&"boolean"==typeof s.live){var l=s.live;s.live=function(){return l}}var f;return e.block==a._name?(f=t.inheritSelf(a,o,s))._processLive(!0):((f=u[e.block]=t.inherit(a,o,s))._name=e.block,delete f._liveInitable),f},_processLive:function(){return!1},create:function(t,n){return"string"==typeof t&&(t={block:t}),new u[t.block](t.mods,n)},getName:function(){return this._name},_extractElemNameFrom:function(){},afterCurrentEvent:function(t,n){1==o.push({fn:t,ctx:n})&&setTimeout(this._runAfterCurrentEventFns,0)},_runAfterCurrentEventFns:function(){var t=o.length;if(t)for(var n,e=o.splice(0,t);n=e.shift();)n.fn.call(n.ctx||this)},changeThis:function(t,n){return t.bind(n||this)},del:function(t){var n="string"==typeof t,e=n?0:1,i=arguments.length;for(n&&(t=this);i>e;)delete t[arguments[e++]];return this},channel:function(e,i){return"boolean"==typeof e&&(i=e,e=n),e||(e="default"),i?void(s[e]&&(s[e].un(),delete s[e])):s[e]||(s[e]=new t.observable)}})}(jQuery),function(){Object.keys||(Object.keys=function(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n})}(),function(){var t=Array.prototype,n=Object.prototype.toString,e={indexOf:function(t,n){n=+(n||0);var e=this,i=e.length;if(i>0&&i>n)for(n=0>n?Math.ceil(n):Math.floor(n),-i>n&&(n=0),0>n&&(n+=i);i>n;){if(n in e&&e[n]===t)return n;++n}return-1},forEach:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i))},map:function(t,n){for(var e=-1,i=this,r=i.length,o=new Array(r);++e<r;)e in i&&(o[e]=n?t.call(n,i[e],e,i):t(i[e],e,i));return o},filter:function(t,n){for(var e=-1,i=this,r=i.length,o=[];++e<r;)e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i))&&o.push(i[e]);return o},reduce:function(t,n){var e,i=-1,r=this,o=r.length;if(arguments.length<2){for(;++i<o;)if(i in r){e=r[i];break}}else e=n;for(;++i<o;)i in r&&(e=t(e,r[i],i,r));return e},some:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)if(e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i)))return!0;return!1},every:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)if(e in i&&!(n?t.call(n,i[e],e,i):t(i[e],e,i)))return!1;return!0}};for(var i in e)t[i]||(t[i]=e[i]);Array.isArray||(Array.isArray=function(t){return"[object Array]"===n.call(t)})}(),function(){var t=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(n){var e=this,i=t.call(arguments,1);return function(){return e.apply(n,i.concat(t.call(arguments)))}})}(),function(t,n,e){function i(t,n,e){e.push(u,t,u,n)}function r(t,n,e,r){r.push(t),e&&i(n,e,r)}function o(t,n,o,u,a){r(t,e,e,a),a.push(s,n),u&&i(o,u,a)}var u="_",s="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:u,ELEM_DELIM:s,buildModPostfix:function(t,n,e){var r=e||[];return i(t,n,r),e?r:r.join("")},buildClass:function(t,n,i,u,s){var a=typeof i;if("string"==a?"string"!=typeof u&&"number"!=typeof u&&(s=u,u=i,i=n,n=e):"undefined"!=a?(s=i,i=e):n&&"string"!=typeof n&&(s=n,n=e),!(n||i||s))return t;var c=s||[];return n?o(t,n,i,u,c):r(t,i,u,c),s?c:c.join("")},buildClasses:function(t,i,u,s){i&&"string"!=typeof i&&(s=u,u=i,i=e);var a=s||[];return i?o(t,i,e,e,a):r(t,e,e,a),u&&n.each(u,function(n,e){e&&(a.push(" "),i?o(t,i,n,e,a):r(t,n,e,a))}),s?a:a.join("")}}}(BEM,jQuery),function(t,n,e){function i(t,e){var i=t[0];n.each(s(i),function(u,s){o(s,i,u,e);var a=m[s.uniqId];a?a.domElem.index(i)<0&&(a.domElem=a.domElem.add(t),n.extend(a._params,s)):r(u,t,s)})}function r(t,i,r,u,a){"boolean"==typeof r&&(a=u,u=r,r=e);var c=i[0];r=o(r||s(c)[t],c,t);var l=r.uniqId;if(m[l])return m[l]._init();h[l]=h[l]?h[l].add(i):i;var f=c.parentNode;f&&11!==f.nodeType||n.unique(h[l]);var d=b[t]||I.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||u||r.live===!1){u&&i.addClass("i-bem");var _=new d(h[l],r,!!u);return delete h[l],a&&a.apply(_,N.call(arguments,4)),_}}function o(t,e,i,r){(t||(t={})).uniqId||(t.uniqId=(t.id?i+"-id-"+t.id:n.identify())+(r||n.identify()));var o=n.identify(e),u=_[o]||(_[o]={});return u[i]||(u[i]=t),t}function u(t,n,e){var i=t.find(n);return e?i:i.add(t.filter(n))}function s(t){var e=n.identify(t);return _[e]||(_[e]=a(t))}function a(t){var e,i,r=t.getAttribute("data-bem");return r?JSON.parse(r):(e=t.onclick||t.ondblclick,e||"body"!=t.tagName.toLowerCase()||(i=n(t),r=i.attr("onclick")||i.attr("ondblclick"),r&&(e=Function(r))),e?e():{})}function c(t){delete _[n.identify(t)]}function l(t,n){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(n)}var f=n(window),d=n(document),h={},m={},_={},v={},p={},b=t.blocks,g=t.INTERNAL,y=g.NAME_PATTERN,E=g.MOD_DELIM,x=g.ELEM_DELIM,M=g.buildModPostfix,k=g.buildClass,N=Array.prototype.slice,C=Array.prototype.reverse;n.fn.bem=function(t,n){return r(t,this,n,!0)};var I=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,e,i){var r=this;r.domElem=t,r._eventNameCache={},r._elemCache={},m[r._uniqId=e.uniqId||n.identify(r)]=r,r._needSpecialUnbind=!1,r.__base(null,e,i)},findBlocksInside:function(t,n){return this._findBlocks("find",t,n)},findBlockInside:function(t,n){return this._findBlocks("find",t,n,!0)},findBlocksOutside:function(t,n){return this._findBlocks("parents",t,n)},findBlockOutside:function(t,n){return this._findBlocks("closest",t,n)[0]||null},findBlocksOn:function(t,n){return this._findBlocks("",t,n)},findBlockOn:function(t,n){return this._findBlocks("",t,n,!0)},_findBlocks:function(t,i,o,u){if(!this.domElem)return[];o||(o=i,i=e);var s=i?"string"==typeof i?this.findElem(i):i:this.domElem,a="string"==typeof o,c=a?o:o.block||o.blockName,l="."+(a?k(c):k(c,o.modName,o.modVal))+(u?":first":""),f=s.filter(l);if(t&&(f=f.add(s[t](l))),u)return f[0]?r(c,f.eq(0),!0):null;var d=[],h={};return n.each(f,function(t,e){var i=r(c,n(e),!0);h[i._uniqId]||(h[i._uniqId]=!0,d.push(i))}),d},bindToDomElem:function(t,e,i){var r=this;return i?t.bind(r._buildEventName(e),function(t){return(t.data||(t.data={})).domElem=n(this),i.apply(r,arguments)}):n.each(e,function(n,e){r.bindToDomElem(t,n,e)}),r},bindToDoc:function(t,n){return this._needSpecialUnbind=!0,this.bindToDomElem(d,t,n)},bindToWin:function(t,n){var e,i,r=n;return"resize"===t&&(n=function(){var t=f.height(),n=f.width();(e!==t||i!==n)&&(e=t,i=n,r.apply(this,arguments))}),this._needSpecialUnbind=!0,this.bindToDomElem(f,t,n)},bindTo:function(t,e,i){return!e||n.isFunction(e)?(i=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,e,i)},unbindFromDomElem:function(t,n){return t.unbind(this._buildEventName(n)),this},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)},unbindFromWin:function(t){return this.unbindFromDomElem(f,t)},unbindFrom:function(t,n){return n?"string"==typeof t&&(t=this.elem(t)):(n=t,t=this.domElem),this.unbindFromDomElem(t,n)},_buildEventName:function(t){var n=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return n._buildOneEventName(t)}).join(" "):n._buildOneEventName(t)},_buildOneEventName:function(t){var n=this,e=n._eventNameCache;if(t in e)return e[t];var i="."+n._uniqId;if(t.indexOf(".")<0)return e[t]=t+i;var r=".bem_"+n.__self._name;return e[t]=t.split(".").map(function(t,n){return 0==n?t+r:r+"_"+t}).join("")+i},trigger:function(t,n){return this.__base(t=this.buildEvent(t),n).domElem&&this._ctxTrigger(t,n),this},_ctxTrigger:function(t,e){var i=this,r=v[i.__self._buildCtxEventName(t.type)],o={};r&&i.domElem.each(function(){for(var u=this,s=r.counter;u&&s;){var a=n.identify(u,!0);if(a){if(o[a])break;var c=r.ctxs[a];c&&(n.each(c,function(n,r){r.fn.call(r.ctx||i,t,e)}),s--),o[a]=!0}u=u.parentNode}})},setMod:function(t,e,i){if(t&&"undefined"!=typeof i&&t.length>1){var r=this;return t.each(function(){var o=n(this);o.__bemElemName=t.__bemElemName,r.setMod(o,e,i)}),r}return this.__base(t,e,i)},_extractModVal:function(t,n,e){var i,r=(n||this.domElem)[0];return r&&(i=r.className.match(this.__self._buildModValRE(t,e||n))),i?i[2]:""},_extractMods:function(t,n){var e={},i=!t.length,r=0;return((n||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?y:t.join("|"))+")",n,"g"))||[]).forEach(function(t){var n=(t=t.trim()).lastIndexOf(E),i=t.substr(0,n-1).lastIndexOf(E);e[t.substr(i+1,n-i-1)]=t.substr(n+1),++r}),r<t.length&&t.forEach(function(t){t in e||(e[t]="")}),e},_afterSetMod:function(t,e,i,r,o){var u=this.__self,s=u._buildModClassPrefix(t,o),a=u._buildModValRE(t,o),c=""===e;(r||this.domElem).each(function(){var t=this.className;t.indexOf(s)>-1?this.className=t.replace(a,c?"":"$1"+s+e):c||n(this).addClass(s+e)}),o&&this.dropElemCache(o,t,i).dropElemCache(o,t,e)},findElem:function(t,n,e,i){arguments.length%2?(i=e,e=n,n=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));var r=this.__self,o="."+n.split(" ").map(function(t){return k(r._name,t,e,i)}).join(",.");return u(t,o)},_elem:function(t,n,e){var i,r=t+M(n,e);return(i=this._elemCache[r])||(i=this._elemCache[r]=this.findElem(t,n,e),i.__bemElemName=t),i},elem:function(t,e,i){if(e&&"string"!=typeof e)return e.__bemElemName=t,e;if(t.indexOf(" ")<0)return this._elem(t,e,i);var r=n([]),o=this;return t.split(" ").forEach(function(t){r=r.add(o._elem(t,e,i))}),r},dropElemCache:function(t,n,e){if(t){var i=this,r=M(n,e);t.indexOf(" ")<0?delete i._elemCache[t+r]:t.split(" ").forEach(function(t){delete i._elemCache[t+r]})}else this._elemCache={};return this},elemParams:function(t){var n;return"string"==typeof t?(n=t,t=this.elem(t)):n=this.__self._extractElemNameFrom(t),a(t[0])[k(this.__self.getName(),n)]||{}},elemify:function(t,e){return(t=n(t)).__bemElemName=e,t},containsDomElem:function(t){var n=!1;return this.domElem.each(function(){return!(n=t.parents().andSelf().index(this)>-1)}),n},buildSelector:function(t,n,e){return this.__self.buildSelector(t,n,e)},destruct:function(t){var e=this,i=e.__self;e._isDestructing||(e._isDestructing=!0,e._needSpecialUnbind&&i.doc.add(i.win).unbind("."+e._uniqId),e.dropElemCache().domElem.each(function(t,e){var i=s(e);n.each(i,function(t,n){var i=m[n.uniqId];i?i._isDestructing||l(i,e):delete h[n.uniqId]}),c(e)}),t||e.domElem.remove(),delete m[e.un()._uniqId],delete e.domElem,delete e._elemCache,e.__base())}},{scope:null,doc:d,win:f,_processLive:function(t){var n=this,e=n._liveInitable;if("live"in n){var i="undefined"==typeof e;if(i^t){e=n.live()!==!1;var r=n.getName(),o=n.live;n.live=function(){return this.getName()===r?e:o.apply(this,arguments)}}}return e},init:function(t,e,r){(!t||n.isFunction(t))&&(r=e,e=t,t=d);var o=n.identify();return u(t,".i-bem").each(function(){i(n(this),o)}),e&&this.afterCurrentEvent(function(){e.call(r||this,t)}),this._runAfterCurrentEventFns(),t},destruct:function(t,i,r){"boolean"!=typeof t&&(r=i,i=t,t=e),C.call(u(i,".i-bem",r)).each(function(t,e){var i=s(this);n.each(i,function(t,n){if(n.uniqId){var i=m[n.uniqId];i?l(i,e):delete h[n.uniqId]}}),c(this)}),t||(r?i.empty():i.remove())},update:function(t,n,e,i){return this.destruct(t,!0),this.init(t.html(n),e,i)},replace:function(t,e){return this.destruct(!0,t),this.init(n(e).replaceAll(t))},append:function(t,e){return this.init(n(e).appendTo(t))},prepend:function(t,e){return this.init(n(e).prependTo(t))},before:function(t,e){return this.init(n(e).insertBefore(t))},after:function(t,e){return this.init(n(e).insertAfter(t))},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,e,i,r){var o=this;if(e.indexOf(" ")>-1)e.split(" ").forEach(function(n){o._liveClassBind(t,n,i,r)});else{var u=p[e],s=n.identify(i);u||(u=p[e]={},d.bind(e,o.changeThis(o._liveClassTrigger,o))),u=u[t]||(u[t]={uniqIds:{},fns:[]}),s in u.uniqIds||(u.fns.push({uniqId:s,fn:o._buildLiveEventFn(i,r)}),u.uniqIds[s]=u.fns.length-1)}return this},_liveClassUnbind:function(t,e,i){var r=p[e];if(r)if(i){if(r=r[t]){var o=n.identify(i);if(o in r.uniqIds){var u=r.uniqIds[o],s=r.fns.length-1;for(r.fns.splice(u,1);s>u;)r.uniqIds[r.fns[u++].uniqId]=u-1;delete r.uniqIds[o]}}}else delete r[t];return this},_liveClassTrigger:function(t){var e=p[t.type];if(e){var i=t.target,r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(o);do for(var u=" "+i.className+" ",s=0;o=r[s++];)if(u.indexOf(" "+o+" ")>-1){for(var a,c=0,l=e[o].fns,f=!1;a=l[c++];)a.fn.call(n(i),t)===!1&&(f=!0);if(f&&t.preventDefault(),f||t.isPropagationStopped())return;r.splice(--s,1)}while(r.length&&(i=i.parentNode))}},_buildLiveEventFn:function(t,e){var i=this;return function(o){var u=[i._name,((o.data||(o.data={})).domElem=n(this)).closest(i.buildSelector()),!0],s=r.apply(null,e?u.concat([t,o]):u);return s&&!e&&t?t.apply(s,arguments):void 0}},liveInitOnEvent:function(t,n,e){return this.liveBindTo(t,n,e,!0)},liveBindTo:function(t,i,r,o){(!i||n.isFunction(i))&&(r=i,i=t,t=e),t&&"string"!=typeof t||(t={elem:t}),t.elemName&&(t.elem=t.elemName);var u=this;return t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(n){u._liveClassBind(k(u._name,n,t.modName,t.modVal),i,r,o)}),u):u._liveClassBind(k(u._name,t.elem,t.modName,t.modVal),i,r,o)},liveUnbindFrom:function(t,i,r){(!i||n.isFunction(i))&&(r=i,i=t,t=e);var o=this;return t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){o._liveClassUnbind(k(o._name,t),i,r)}),o):o._liveClassUnbind(k(o._name,t),i,r)},_liveInitOnBlockEvent:function(t,n,e,i){var r=this._name;return b[n].on(t,function(t){if(t.block.domElem){var n=arguments,o=t.block[i](r);e&&o.forEach(function(t){e.apply(t,n)})}}),this},liveInitOnBlockEvent:function(t,n,e){return this._liveInitOnBlockEvent(t,n,e,"findBlocksOn")},liveInitOnBlockInsideEvent:function(t,n,e){return this._liveInitOnBlockEvent(t,n,e,"findBlocksOutside")},liveInitOnBlockInit:function(t,n){return this.liveInitOnBlockEvent("init",t,n)},liveInitOnBlockInsideInit:function(t,n){return this.liveInitOnBlockInsideEvent("init",t,n)},on:function(t,n,e,i,r){return t.jquery?this._liveCtxBind(t,n,e,i,r):this.__base(t,n,e,i)},un:function(t,n,e,i){return t.jquery?this._liveCtxUnbind(t,n,e,i):this.__base(t,n,e)},liveCtxBind:function(t,n,e,i,r){return this._liveCtxBind(t,n,e,i,r)},_liveCtxBind:function(t,i,r,o,u){var s=this;if("string"==typeof i)if(n.isFunction(r)&&(u=o,o=r,r=e),i.indexOf(" ")>-1)i.split(" ").forEach(function(n){s._liveCtxBind(t,n,r,o,u)
});else{var a=s._buildCtxEventName(i),c=v[a]||(v[a]={counter:0,ctxs:{}});t.each(function(){var t=n.identify(this),e=c.ctxs[t];e||(e=c.ctxs[t]={},++c.counter),e[n.identify(o)+(u?n.identify(u):"")]={fn:o,data:r,ctx:u}})}else n.each(i,function(n,e){s._liveCtxBind(t,n,e,r)});return s},liveCtxUnbind:function(t,n,e,i){return this._liveCtxUnbind(t,n,e,i)},_liveCtxUnbind:function(t,e,i,r){var o=this,u=v[e=o._buildCtxEventName(e)];return u&&(t.each(function(){var t,e=n.identify(this,!0);e&&(t=u.ctxs[e])&&(i&&delete t[n.identify(i)+(r?n.identify(r):"")],(!i||n.isEmptyObject(t))&&(u.counter--,delete u.ctxs[e]))}),u.counter||delete v[e]),o},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;var n=t[0].className.match(this._buildElemNameRE());return n?n[1]:e},extractParams:a,_buildModClassPrefix:function(t,n){return k(this._name)+(n?x+("string"==typeof n?n:this._extractElemNameFrom(n)):"")+E+t+E},_buildModValRE:function(t,n,e){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,n)+"("+y+")(?=\\s|$)",e)},_buildElemNameRE:function(){return new RegExp(this._name+x+"("+y+")(?:\\s|$)")},buildSelector:function(t,n,e){return"."+k(this._name,t,n,e)},getBlockByUniqId:function(t){return m[t]},getWindowSize:function(){return{width:f.width(),height:f.height()}}});n(function(){t.DOM.scope=n("body")})}(BEM,jQuery),function(t){var n=1,e=!1;if("deviceXDPI"in screen&&"logicalXDPI"in screen?n=screen.deviceXDPI/screen.logicalXDPI:"devicePixelRatio"in t&&(n=t.devicePixelRatio),"function"==typeof t.matchMedia){var i="only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 124dpi)";e=t.matchMedia(i).matches}else e=n>=1.3;BEM.DOM.decl("i-ua",{onSetMod:{js:function(){var t=this,n=t.__self;n.hiDpi&&t.setMod("hi-dpi","yes")}}},{dpr:n,hiDpi:e})}(window);