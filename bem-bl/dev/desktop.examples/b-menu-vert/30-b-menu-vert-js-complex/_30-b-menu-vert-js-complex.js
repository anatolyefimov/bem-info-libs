var BEMHTML=function(){function t(t){return t._mode=e,t.block=i,t.elem=r,t.elemMods=o,t.mods=u,t}function n(t,n){var a=e;e=n._mode;var c=i;i=n.block;var s=r;r=n.elem;var l=o;o=n.elemMods;var f=u;u=n.mods;var d=t(n);return e=a,i=c,r=s,o=l,u=f,d}var e,i,r,o,u,a,c={},s=function(c){function s(t){var n=e;return"attrs"===n?l(t):"content"===n?p(t):"js"===n?g(t):"mix"===n?x(t):"tag"===n?m(t):"bem"===n?O(t):"cls"===n?w(t):"xUACompatible"===n?"b-page"===i&&!!r==!1?A(t):q(t):"doctype"===n?"b-page"===i&&!!r==!1?D(t):q(t):"jsAttr"===n?T(t):"default"===n?k(t):q(t)}function l(t){var n=i;if("b-icon"===n){if(!!r==!1){var e,o=t.ctx,a={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},c=["alt","width","height"];for(o.url&&(a.src=o.url);e=c.shift();)o[e]&&(a[e]=o[e]);return a}return h(t)}if("b-link"===n)return!(u&&u.pseudo)==!1&&!!r==!1&&!!t.ctx.url==!1?{}:f(t);if("b-page"===n){var n=r;return"js"===n?!t.ctx.url==!1?{src:t.ctx.url}:h(t):"css"===n?!t.ctx.url==!1?{rel:"stylesheet",href:t.ctx.url}:h(t):"favicon"===n?{rel:"shortcut icon",href:t.ctx.url}:"meta"===n?t.ctx.attrs:h(t)}return h(t)}function f(t){return!!r==!1?d(t):h(t)}function d(t){for(var n,i,r,o,u=t.ctx,a=["title","target"],c=typeof u.url,s={href:"undefined"===c||"string"===c?u.url:(c=[],n=t._buf,t._buf=c,i=e,e="",r=t.ctx,t.ctx=u.url,o=q(t),t._buf=n,e=i,t.ctx=r,c.join(""))};c=a.pop();)u[c]&&(s[c]=u[c]);return s}function h(){return void 0}function m(t){var n=i;if("b-icon"===n)return!!r==!1?"img":_(t);if("b-link"===n)return"inner"===r?"span":!(u&&u.pseudo)==!1&&!!r==!1?t.ctx.url?"a":"span":v(t);if("b-menu-vert"===n){var n=r;return"title"===n?"h3":"submenu"===n?"ul":"item-selector"===n?"span":"layout-unit"===n?"li":"layout"===n?"ul":_(t)}if("b-page"===n){var n=r;return"js"===n?"script":"css"===n?!t.ctx.url==!1?"link":"style":"favicon"===n?"link":"meta"===n?"meta":"head"===n?"head":"root"===n?"html":!!r==!1?"body":_(t)}return"i-ua"===n&&!!r==!1?"script":_(t)}function v(t){return!!r==!1?"a":_(t)}function _(){return void 0}function p(t){var n=i;if("b-link"===n){if(!(u&&u.pseudo)==!1){if(!!t.ctx._wrap==!1){if(!!r==!1){if(!!u.inner==!1){var o=e;e="";var a=t.ctx;return t.ctx={elem:"inner",content:t.ctx.content,_wrap:!0},q(t),e=o,void(t.ctx=a)}return b(t)}return b(t)}return b(t)}return b(t)}return"b-menu-vert"===n?!!r==!1?[t.ctx.title,{elem:"layout",content:t.ctx.content}]:b(t):"i-ua"===n&&!!r==!1?[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',"})(document);"].join(""):b(t)}function b(t){return t.ctx.content}function g(t){return"b-link"===i&&!(u&&u.pseudo)==!1&&!!r==!1?!0:y(t)}function y(){return void 0}function x(t){var n=i;if("b-menu-vert"===n){if("layout-unit"===r){var e=[];return t.isFirst()&&e.push({elemMods:{position:"first"}}),t.isLast()&&e.push({elemMods:{position:"last"}}),e}return E(t)}return"b-page"===n&&!!r==!1?[{elem:"body"}]:E(t)}function E(){return void 0}function k(t){var n=i;return"b-menu-vert"===n?"item"===r&&!(t.__$anflg3!==!0)==!1?M(t):q(t):"b-page"===n?"css"===r&&!t.ctx.hasOwnProperty("ie")==!1&&!!t.ctx._ieCommented==!1?N(t):C(t):"i-jquery"===n?"core"===r&&!(t.__$anflg1!==!0)==!1?j(t):q(t):"i-bem"===n&&"i18n"===r?B(t):q(t)}function M(t){var n=t.__$anflg3;t.__$anflg3=!0;var i=e;e="";var r=t.position;t.position=t.position-1;var o=t.ctx;t.ctx={elem:"layout-unit",content:[t.ctx,t.ctx["item-content"]]},q(t),e=i,t.position=r,t.ctx=o,t.__$anflg3=n}function N(n){var i=n.ctx.ie;if(i===!0){var r=e;e="";var o=n.ctx;n.ctx=[6,7,8,9].map(function(t){return{elem:"css",url:this.ctx.url+".ie"+t+".css",ie:"IE "+t}},t(n)),q(n),e=r,n.ctx=o}else{var u=i?"!IE"===i?[i,"<!-->","<!--"]:[i,"",""]:["gt IE 9","<!-->","<!--"],a=e;e="";var c=n.ctx,s=c._ieCommented;c._ieCommented=!0;var l=n.ctx;n.ctx=["<!--[if "+u[0]+"]>",u[1],n.ctx,u[2],"<![endif]-->"],q(n),e=a,c._ieCommented=s,n.ctx=l}}function C(t){return!(t.__$anflg2!==!0)==!1&&!!r==!1?I(t):q(t)}function I(t){var n,i,r,o,u=t.ctx,a=(n=e,e="doctype",i=D(t),e=n,i),c=(r=e,e="xUACompatible",o=A(t),e=r,o),s=[a,{elem:"root",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},c,{tag:"title",content:u.title},u.favicon?{elem:"favicon",url:u.favicon}:"",u.meta,{block:"i-ua"},u.head]},u]}],l=t.__$anflg2;t.__$anflg2=!0;var f=t.ctx;t.ctx=s;var d=e;e="",q(t),t.ctx=f,e=d,t.__$anflg2=l}function j(t){var n,i,r,o,u;return n=t.__$anflg1,t.__$anflg1=!0,r=t.ctx,t.ctx={block:"b-page",elem:"js",url:"//yastatic.net/jquery/1.8.3/jquery.min.js"},o=e,e="",u=q(t),t.ctx=r,e=o,i=u,t.__$anflg1=n,i}function B(t){var n,i,r,o;if(!t.ctx)return"";var u=t.ctx,a=u.keyset,c=u.key,s=u.params||{};if(!a&&!c)return"";if(u.content){var l;s.content=(l=[],n=t._buf,t._buf=l,i=e,e="",r=t.ctx,t.ctx=u.content,o=q(t),t._buf=n,e=i,t.ctx=r,l.join(""))}t._buf.push(BEM.I18N(a,c,s))}function O(t){var n=i;if("b-page"===n){var n=r;return"js"===n||"css"===n||"favicon"===n||"meta"===n||"head"===n||"root"===n?!1:L(t)}return"i-ua"===n&&!!r==!1?!1:L(t)}function L(){return void 0}function w(t){return"b-page"===i&&"root"===r?"i-ua_js_no i-ua_css_standard":S(t)}function S(){return void 0}function A(t){return t.ctx["x-ua-compatible"]===!1?!1:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:t.ctx["x-ua-compatible"]||"IE=edge"}}}function D(t){return t.ctx.doctype||"<!DOCTYPE html>"}function T(){return void 0}function q(t){return!t.ctx==!1&&!t.ctx.link==!1&&!!t._.isSimple(t.ctx)==!1?F(t):P(t)}function F(e){function i(){if("no-follow"===this.ctx.link)return void 0;var t=this._links[this.ctx.link];return __r0=this.ctx,this.ctx=t,__r1=n(z,this),this.ctx=__r0,__r1}if(!a||!e._cacheLog)return i.call(t(e));var r=e._buf.slice(e._cachePos).join("");e._cachePos=e._buf.length,e._cacheLog.push(r,{log:e._localLog.slice(),link:e.ctx.link});var o=i.call(t(e));return e._cachePos=e._buf.length,o}function P(t){return!a==!1&&!t.ctx==!1&&!t.ctx.cache==!1?R(t):U(t)}function R(n){function e(t,n,e){if(0===n.length)return void 0;if(Array.isArray(e)){for(var i=t,r=0;r<e.length-1;r++)i=i[e[r]];e=i[e[r]]}for(var o,u=t,r=0;r<n.length-1;r++)u=u[n[r]];return o=u[n[r]],u[n[r]]=e,o}var i;if(i=a.get(n.ctx.cache)){var r=n._links;n.ctx.links&&(n._links=n.ctx.links);for(var o=0;o<i.log.length;o++)if("string"!=typeof i.log[o]){var u,c=i.log[o];u=c.log.map(function(t){return{key:t[0],value:e(this,t[0],t[1])}},t(n)).reverse();var l=n.ctx,f=l.cache;l.cache=null;var d=n._cacheLog;n._cacheLog=null;var h=n.ctx,m=h.link;h.link=c.link,s(n),l.cache=f,n._cacheLog=d,h.link=m,u.forEach(function(t){e(this,t.key,t.value)},t(n))}else n._buf.push(i.log[o]);return n._links=r,i.res}var v,_=[],p=n.ctx,b=p.cache;p.cache=null;var g=n._cachePos;n._cachePos=n._buf.length;var y=n._cacheLog;n._cacheLog=_;var x=n._localLog;n._localLog=[],v=s(n);var E=n._buf.slice(n._cachePos).join("");return E&&_.push(E),p.cache=b,n._cachePos=g,n._cacheLog=y,n._localLog=x,a.set(n.ctx.cache,{log:_,res:v}),v}function U(t){var n=e;if("default"===n)return $(t);if(""===n){if(!t._.isSimple(t.ctx)==!1){t._listLength--;var i=t.ctx;return void((i&&i!==!0||0===i)&&t._buf.push(i))}return!!t.ctx==!1?void t._listLength--:!t._.isArray(t.ctx)==!1?V(t):Q(t)}return J(t)}function $(t){function n(t,n){return(t||"")+"__"+(n||"")}var a,c,s,f,d,h,v,_,b,y,E,k,M,N,C,I,j,B,L,S,A,D,F,P=t.BEM,R=t.ctx,U=t._buf;if(c=e,e="tag",k=m(t),e=c,F=k,"undefined"!=typeof F||(F=R.tag),"undefined"!=typeof F||(F="div"),F){var $,V;i&&R.js!==!1&&(s=e,e="js",f=g(t),e=s,V=f,V=V?t._.extend(R.js,V===!0?{}:V):R.js===!0?{}:R.js,V&&(($={})[P.INTERNAL.buildClass(i,R.elem)]=V)),U.push("<",F);var Q=(d=e,e="bem",h=O(t),e=d,h);"undefined"!=typeof Q||(Q="undefined"!=typeof R.bem?R.bem:R.block||R.elem);var J=(v=e,e="cls",_=w(t),e=v,_);J||(J=R.cls);var X=R.block&&$&&!R.elem;if(Q||J){if(U.push(' class="'),Q){P.INTERNAL.buildClasses(i,R.elem,R.elemMods||R.mods,U);var z=(b=e,e="mix",y=x(t),e=b,y);if(R.mix&&(z=z?[].concat(z,R.mix):R.mix),z){var Z={};Z[n(i,r)]=!0,t._.isArray(z)||(z=[z]);for(var H=0;H<z.length;H++){var W=z[H];if(W){var G=W.block||W.elem,Y=W.block||W._block||i,K=W.elem||W._elem||r,tn=W.mods||u,nn=W.elemMods||{};if(G&&U.push(" "),P.INTERNAL[G?"buildClasses":"buildModsClasses"](Y,W.elem||W._elem||(W.block?void 0:r),W.elemMods||W.mods,U),W.js&&(($||($={}))[P.INTERNAL.buildClass(Y,W.elem)]=W.js===!0?{}:W.js,X||(X=Y&&!W.elem)),G&&!Z[n(Y,K)]){Z[n(Y,K)]=!0;var en=(E=i,i=Y,a=r,r=K,M=u,u=tn,N=o,o=nn,C=e,e="mix",I=x(t),i=E,r=a,u=M,o=N,e=C,I);if(en)for(var rn=0;rn<en.length;rn++){var on=en[rn];(on.block||on.elem)&&Z[n(on.block,on.elem)]||(on._block=Y,on._elem=K,z.splice(H+1,0,on))}}}}}}J&&U.push(Q?" ":"",J),X&&U.push(" i-bem"),U.push('"')}if($){var un=(j=e,e="jsAttr",B=T(t),e=j,B);U.push(" ",un||"data-bem",'="',t._.attrEscape(JSON.stringify($)),'"')}var an=(L=e,e="attrs",S=l(t),e=L,S);if(an=t._.extend(an,R.attrs)){var cn;for(cn in an)void 0!==an[cn]&&U.push(" ",cn,'="',t._.attrEscape(an[cn]),'"')}}if(t._.isShortTag(F))U.push("/>");else{F&&U.push(">");var sn=(A=e,e="content",D=p(t),e=A,D);if(sn||0===sn){var Q=i||r,ln=t._notNewList;t._notNewList=!1;var fn=t.position;t.position=Q?1:t.position;var dn=t._listLength;t._listLength=Q?1:t._listLength;var hn=t.ctx;t.ctx=sn;var mn=e;e="",q(t),t._notNewList=ln,t.position=fn,t._listLength=dn,t.ctx=hn,e=mn}F&&U.push("</",F,">")}}function V(t){var n=t.ctx,e=n.length,i=0,r=t.position,o=t._notNewList;for(o?t._listLength+=e-1:(t.position=0,t._listLength=e),t._notNewList=!0;e>i;){var u=n[i++],a=t.ctx;t.ctx=null==u?"":u,q(t),t.ctx=a}o||(t.position=r)}function Q(t){var n=t.ctx.block,a=t.ctx.elem,c=t._currBlock||i;t.ctx||(t.ctx={});var s=e;e="default";var l=t._links;t._links=t.ctx.links||t._links;var f=i;i=n||(a?c:void 0);var d=t._currBlock;t._currBlock=n||a?void 0:c;var h=r;r=t.ctx.elem;var m=u;u=n?t.ctx.mods||(t.ctx.mods={}):u;var v=o;o=t.ctx.elemMods||{},i||r?t.position=(t.position||0)+1:t._listLength--,k(t),e=s,t._links=l,i=f,t._currBlock=d,r=h,u=m,o=v}function J(){throw new Error(this)}function X(t){return z(t||this)}function z(t){return s(t)}return!function(){!function(t,n){if(n.I18N)return void 0;t.BEM=n;var e=n.I18N=function(t,n){return n};e.keyset=function(){return e},e.key=function(t){return t},e.lang=function(){return void 0}}(this,"undefined"==typeof BEM?{}:BEM)}(),!function(){function t(t,n){this.ctx=null===typeof t?"":t,this.apply=n,this._buf=[],this._=this,this._start=!0,this._listLength=0,this._notNewList=!1,this.position=0}var n={},e=Object.prototype.toString,i={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(t,n){function e(t,n,e){e.push(o,t,o,n)}function i(t,n,i,r){r.push(t),i&&e(n,i,r)}function r(t,r,o,a,c){i(t,n,n,c),c.push(u,r),a&&e(o,a,c)}var o="_",u="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:o,ELEM_DELIM:u,buildModPostfix:function(t,n,i){var r=i||[];return e(t,n,r),i?r:r.join("")},buildClass:function(t,e,o,u,a){var c=typeof o;if("string"==c?"string"!=typeof u&&(a=u,u=o,o=e,e=n):"undefined"!=c?(a=o,o=n):e&&"string"!=typeof e&&(a=e,e=n),!(e||o||a))return t;var s=a||[];return e?r(t,e,o,u,s):i(t,o,u,s),a?s:s.join("")},buildModsClasses:function(t,n,e,o){var u=o||[];if(e){var a;for(a in e)if(e.hasOwnProperty(a)){var c=e[a];null!=c&&(c=e[a]+"",c&&(u.push(" "),n?r(t,n,a,c,u):i(t,a,c,u)))}}return o?u:u.join("")},buildClasses:function(t,e,o,u){var a=u||[];return e?r(t,e,n,n,a):i(t,n,n,a),this.buildModsClasses(t,e,o,u),u?a:a.join("")}}}(n);var r=function(){var t={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},n=function(n){return t[n]||n};return function(t){return t=new RegExp(t,"g"),function(e){return(""+e).replace(t,n)}}}();t.prototype.isArray=function(t){return"[object Array]"===e.call(t)},t.prototype.isSimple=function(t){var n=typeof t;return"string"===n||"number"===n||"boolean"===n},t.prototype.isShortTag=function(t){return i.hasOwnProperty(t)},t.prototype.extend=function(t,n){if(!t||!n)return t||n;var e,i={};for(e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);for(e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i},t.prototype.identify=function(){var t=0,e=n.__id=+new Date,i="__"+e,r=function(){return"uniq"+e+ ++t};return function(t,n){return t?n||t[i]?t[i]:t[i]=r():r()}}(),t.prototype.xmlEscape=r("[&<>]"),t.prototype.attrEscape=r('["&<>]'),t.prototype.BEM=n,t.prototype.isFirst=function(){return 1===this.position},t.prototype.isLast=function(){return this.position===this._listLength},t.prototype.generateId=function(){return this.identify(this.ctx)},c.apply=t.apply=function(){var n=new t(this,X);return n.apply(),n._buf.join("")}}(),c}("undefined"==typeof c?{}:c);return function(t){var n=this;return t||(t={}),a=t.cache,function(){return n===this?(n=void 0,e="",i="",r="",o="",u=""):(e="",i="",r="",o="",u=""),s.apply.call([n])}.call(null)}}();"undefined"==typeof exports||(exports.BEMHTML=BEMHTML),function(t){function n(n,i,r){var u=!1;if(o){var a=[];t.each(c,function(){r.hasOwnProperty(this)&&(u=!0)&&a.push({name:this,val:r[this]})}),u&&(t.each(r,function(t){a.push({name:t,val:this})}),r=a)}t.each(r,function(r,o){if(u&&(r=o.name,o=o.val),t.isFunction(o)&&(!e||o.toString().indexOf(".__base")>-1)){var a=n[r]||function(){};i[r]=function(){var t=this.__base;this.__base=a;var n=o.apply(this,arguments);return this.__base=t,n}}else i[r]=o})}var e=function(){"_"}.toString().indexOf("_")>-1,i=function(){},r=Object.create||function(t){var n=function(){};return n.prototype=t,new n},o=!0,u={toString:""};for(var a in u)u.hasOwnProperty(a)&&(o=!1);var c=o?["toString","valueOf"]:null;t.inherit=function(){var e=arguments,o=t.isFunction(e[0]),u=o?e[0]:i,a=e[o?1:0]||{},c=e[o?2:1],s=a.__constructor||o&&u.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:function(){};if(!o)return s.prototype=a,s.prototype.__self=s.prototype.constructor=s,t.extend(s,c);t.extend(s,u);var l=u.prototype,f=s.prototype=r(l);return f.__self=f.constructor=s,n(l,f,a),c&&n(u,s,c),s},t.inheritSelf=function(t,e,i){var r=t.prototype;return n(r,r,e),i&&n(t,t,i),t}}(jQuery),function(t){var n=0,e="__"+ +new Date,i=function(){return"uniq"+ ++n};t.identify=function(t,n){if(!t)return i();var r="uniqueID"in t?"uniqueID":e;return n||r in t?t[r]:t[r]=i()}}(jQuery),function(t){t.isEmptyObject||(t.isEmptyObject=function(t){for(var n in t)return!1;return!0})}(jQuery),function(t){t.extend({debounce:function(t,n,e,i){3==arguments.length&&"boolean"!=typeof e&&(i=e,e=!1);var r;return function(){var o=arguments;i=i||this,e&&!r&&t.apply(i,o),clearTimeout(r),r=setTimeout(function(){e||t.apply(i,o),r=null},n)}},throttle:function(t,n,e){var i,r,o;return function(){r=arguments,o=!0,e=e||this,i||function(){o?(t.apply(e,r),o=!1,i=setTimeout(arguments.callee,n)):i=null}()}}})}(jQuery),function(t){var n="__"+ +new Date+"storage",e=function(n,e){return t.identify(n)+(e?t.identify(e):"")},i={buildEventName:function(t){return t},on:function(i,r,o,u,a){if("string"==typeof i){t.isFunction(r)&&(u=o,o=r,r=void 0);for(var c,s=e(o,u),l=this[n]||(this[n]={}),f=i.split(" "),d=0;i=f[d++];)if(i=this.buildEventName(i),c=l[i]||(l[i]={ids:{},list:{}}),!(s in c.ids)){var h=c.list,m={fn:o,data:r,ctx:u,special:a};h.last?(h.last.next=m,m.prev=h.last):h.first=m,c.ids[s]=h.last=m}}else{var v=this;t.each(i,function(t,n){v.on(t,n,r,a)})}return this},onFirst:function(t,n,e,i){return this.on(t,n,e,i,{one:!0})},un:function(i,r,o){if("string"==typeof i||"undefined"==typeof i){var u=this[n];if(u)if(i){for(var a,c=i.split(" "),s=0;i=c[s++];)if(i=this.buildEventName(i),a=u[i])if(r){var l=e(r,o),f=a.ids;if(l in f){var d=a.list,h=f[l],m=h.prev,v=h.next;m?m.next=v:h===d.first&&(d.first=v),v?v.prev=m:h===d.last&&(d.last=m),delete f[l]}}else delete this[n][i]}else delete this[n]}else{var _=this;t.each(i,function(t,n){_.un(t,n,o)})}return this},trigger:function(e,i){var r,o=this,u=o[n];if("string"==typeof e?e=t.Event(o.buildEventName(r=e)):e.type=o.buildEventName(r=e.type),e.target||(e.target=o),u&&(u=u[e.type]))for(var a,c=u.list.first;c;)e.data=c.data,a=c.fn.call(c.ctx||o,e,i),"undefined"!=typeof a&&(e.result=a,a===!1&&(e.preventDefault(),e.stopPropagation())),c.special&&c.special.one&&o.un(r,c.fn,c.ctx),c=c.next;return this}};t.observable=t.inherit(i,i)}(jQuery),function(t,n){function e(t,n,e){return(t?"__elem_"+t:"")+"__mod"+(n?"_"+n:"")+(e?"_"+e:"")}function i(n,i,r){t.isFunction(n)?i[e(r,"*","*")]=n:t.each(n,function(n,o){t.isFunction(o)?i[e(r,n,"*")]=o:t.each(o,function(t,o){i[e(r,n,t)]=o})})}function r(t,n){return n?Array.isArray(n)?function(e){for(var i=0,r=n.length;r>i;)if(e.hasMod(t,n[i++]))return!0;return!1}:function(e){return e.hasMod(t,n)}:function(n){return n.hasMod(t)}}var o=[],u={},a={};this.BEM=t.inherit(t.observable,{__constructor:function(t,n,e){var i=this;i._modCache=t||{},i._processingMods={},i._params=n,i.params=null,e!==!1?i._init():i.afterCurrentEvent(function(){i._init()})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this},changeThis:function(t,n){return t.bind(n||this)},afterCurrentEvent:function(t,n){this.__self.afterCurrentEvent(this.changeThis(t,n))},trigger:function(t,n){return this.__base(t=this.buildEvent(t),n).__self.trigger(t,n),this},buildEvent:function(n){return"string"==typeof n&&(n=t.Event(n)),n.block=this,n},hasMod:function(t,e,i){var r=arguments.length,o=!1;1==r?(i="",e=t,t=n,o=!0):2==r&&("string"==typeof t?(i=e,e=t,t=n):(i="",o=!0));var u=this.getMod(t,e)===i;return o?!u:u},getMod:function(t,n){var e=typeof t;if("string"===e||"undefined"===e){n=t||n;var i=this._modCache;return n in i?i[n]:i[n]=this._extractModVal(n)}return this._getElemMod(n,t)},_getElemMod:function(t,n,e){return this._extractModVal(t,n,e)},getMods:function(t){var e=t&&"string"!=typeof t,i=this,r=[].slice.call(arguments,e?1:0),o=i._extractMods(r,e?t:n);return e||(r.length?r.forEach(function(t){i._modCache[t]=o[t]}):i._modCache=o),o},setMod:function(e,i,r){"undefined"==typeof r&&(r=i,i=e,e=n);var o=this;if(!e||e[0]){var u=(e&&e[0]?t.identify(e[0]):"")+"_"+i;if(this._processingMods[u])return o;var a,c=e?o._getElemMod(i,e,a=o.__self._extractElemNameFrom(e)):o.getMod(i);if(c===r)return o;this._processingMods[u]=!0;var s=!0,l=[i,r,c];e&&l.unshift(e),[["*","*"],[i,"*"],[i,r]].forEach(function(t){s=o._callModFn(a,t[0],t[1],l)!==!1&&s}),!e&&s&&(o._modCache[i]=r),s&&o._afterSetMod(i,r,c,e,a),delete this._processingMods[u]}return o},_afterSetMod:function(){},toggleMod:function(t,e,i,r,o){"string"==typeof t&&(o=r,r=i,i=e,e=t,t=n),"undefined"==typeof r?r="":"boolean"==typeof r&&(o=r,r="");var u=this.getMod(t,e);return(u==i||u==r)&&this.setMod(t,e,"boolean"==typeof o?o?i:r:this.hasMod(t,e,i)?r:i),this},delMod:function(t,e){return e||(e=t,t=n),this.setMod(t,e,"")},_callModFn:function(t,i,r,o){var u=e(t,i,r);return this[u]?this[u].apply(this,o):n},_extractModVal:function(){return""},_extractMods:function(){return{}},channel:function(t,n){return this.__self.channel(t,n)},getDefaultParams:function(){return{}},del:function(t){var n=[].slice.call(arguments);return"string"==typeof t&&n.unshift(this),this.__self.del.apply(this.__self,n),this},destruct:function(){}},{_name:"i-bem",blocks:u,decl:function(e,o,a){if("string"==typeof e?e={block:e}:e.name&&(e.block=e.name),e.baseBlock&&!u[e.baseBlock])throw'baseBlock "'+e.baseBlock+'" for "'+e.block+'" is undefined';o||(o={}),o.onSetMod&&(i(o.onSetMod,o),delete o.onSetMod),o.onElemSetMod&&(t.each(o.onElemSetMod,function(t,n){i(n,o,t)}),delete o.onElemSetMod);var c=u[e.baseBlock||e.block]||this;if(e.modName){var s=r(e.modName,e.modVal);t.each(o,function(e,i){t.isFunction(i)&&(o[e]=function(){var t;if(s(this))t=i;else{var r=c.prototype[e];r&&r!==o[e]&&(t=this.__base)}return t?t.apply(this,arguments):n})})}if(a&&"boolean"==typeof a.live){var l=a.live;a.live=function(){return l}}var f;return e.block==c._name?(f=t.inheritSelf(c,o,a))._processLive(!0):((f=u[e.block]=t.inherit(c,o,a))._name=e.block,delete f._liveInitable),f},_processLive:function(){return!1},create:function(t,n){return"string"==typeof t&&(t={block:t}),new u[t.block](t.mods,n)},getName:function(){return this._name},_extractElemNameFrom:function(){},afterCurrentEvent:function(t,n){1==o.push({fn:t,ctx:n})&&setTimeout(this._runAfterCurrentEventFns,0)},_runAfterCurrentEventFns:function(){var t=o.length;if(t)for(var n,e=o.splice(0,t);n=e.shift();)n.fn.call(n.ctx||this)},changeThis:function(t,n){return t.bind(n||this)},del:function(t){var n="string"==typeof t,e=n?0:1,i=arguments.length;for(n&&(t=this);i>e;)delete t[arguments[e++]];return this},channel:function(e,i){return"boolean"==typeof e&&(i=e,e=n),e||(e="default"),i?void(a[e]&&(a[e].un(),delete a[e])):a[e]||(a[e]=new t.observable)}})}(jQuery),function(){Object.keys||(Object.keys=function(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n})}(),function(){var t=Array.prototype,n=Object.prototype.toString,e={indexOf:function(t,n){n=+(n||0);var e=this,i=e.length;if(i>0&&i>n)for(n=0>n?Math.ceil(n):Math.floor(n),-i>n&&(n=0),0>n&&(n+=i);i>n;){if(n in e&&e[n]===t)return n;++n}return-1},forEach:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i))},map:function(t,n){for(var e=-1,i=this,r=i.length,o=new Array(r);++e<r;)e in i&&(o[e]=n?t.call(n,i[e],e,i):t(i[e],e,i));return o},filter:function(t,n){for(var e=-1,i=this,r=i.length,o=[];++e<r;)e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i))&&o.push(i[e]);return o},reduce:function(t,n){var e,i=-1,r=this,o=r.length;if(arguments.length<2){for(;++i<o;)if(i in r){e=r[i];break}}else e=n;for(;++i<o;)i in r&&(e=t(e,r[i],i,r));return e},some:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)if(e in i&&(n?t.call(n,i[e],e,i):t(i[e],e,i)))return!0;return!1},every:function(t,n){for(var e=-1,i=this,r=i.length;++e<r;)if(e in i&&!(n?t.call(n,i[e],e,i):t(i[e],e,i)))return!1;return!0}};for(var i in e)t[i]||(t[i]=e[i]);Array.isArray||(Array.isArray=function(t){return"[object Array]"===n.call(t)})}(),function(){var t=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(n){var e=this,i=t.call(arguments,1);return function(){return e.apply(n,i.concat(t.call(arguments)))}})}(),function(t,n,e){function i(t,n,e){e.push(u,t,u,n)}function r(t,n,e,r){r.push(t),e&&i(n,e,r)}function o(t,n,o,u,c){r(t,e,e,c),c.push(a,n),u&&i(o,u,c)}var u="_",a="__",c="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:c,MOD_DELIM:u,ELEM_DELIM:a,buildModPostfix:function(t,n,e){var r=e||[];return i(t,n,r),e?r:r.join("")},buildClass:function(t,n,i,u,a){var c=typeof i;if("string"==c?"string"!=typeof u&&"number"!=typeof u&&(a=u,u=i,i=n,n=e):"undefined"!=c?(a=i,i=e):n&&"string"!=typeof n&&(a=n,n=e),!(n||i||a))return t;var s=a||[];return n?o(t,n,i,u,s):r(t,i,u,s),a?s:s.join("")},buildClasses:function(t,i,u,a){i&&"string"!=typeof i&&(a=u,u=i,i=e);var c=a||[];return i?o(t,i,e,e,c):r(t,e,e,c),u&&n.each(u,function(n,e){e&&(c.push(" "),i?o(t,i,n,e,c):r(t,n,e,c))}),a?c:c.join("")}}}(BEM,jQuery),function(t,n,e){function i(t,e){var i=t[0];n.each(a(i),function(u,a){o(a,i,u,e);var c=m[a.uniqId];c?c.domElem.index(i)<0&&(c.domElem=c.domElem.add(t),n.extend(c._params,a)):r(u,t,a)})}function r(t,i,r,u,c){"boolean"==typeof r&&(c=u,u=r,r=e);var s=i[0];r=o(r||a(s)[t],s,t);var l=r.uniqId;if(m[l])return m[l]._init();h[l]=h[l]?h[l].add(i):i;var f=s.parentNode;f&&11!==f.nodeType||n.unique(h[l]);var d=b[t]||I.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||u||r.live===!1){u&&i.addClass("i-bem");var v=new d(h[l],r,!!u);return delete h[l],c&&c.apply(v,N.call(arguments,4)),v}}function o(t,e,i,r){(t||(t={})).uniqId||(t.uniqId=(t.id?i+"-id-"+t.id:n.identify())+(r||n.identify()));var o=n.identify(e),u=v[o]||(v[o]={});return u[i]||(u[i]=t),t}function u(t,n,e){var i=t.find(n);return e?i:i.add(t.filter(n))}function a(t){var e=n.identify(t);return v[e]||(v[e]=c(t))}function c(t){var e,i,r=t.getAttribute("data-bem");return r?JSON.parse(r):(e=t.onclick||t.ondblclick,e||"body"!=t.tagName.toLowerCase()||(i=n(t),r=i.attr("onclick")||i.attr("ondblclick"),r&&(e=Function(r))),e?e():{})}function s(t){delete v[n.identify(t)]}function l(t,n){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(n)}var f=n(window),d=n(document),h={},m={},v={},_={},p={},b=t.blocks,g=t.INTERNAL,y=g.NAME_PATTERN,x=g.MOD_DELIM,E=g.ELEM_DELIM,k=g.buildModPostfix,M=g.buildClass,N=Array.prototype.slice,C=Array.prototype.reverse;n.fn.bem=function(t,n){return r(t,this,n,!0)};var I=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,e,i){var r=this;r.domElem=t,r._eventNameCache={},r._elemCache={},m[r._uniqId=e.uniqId||n.identify(r)]=r,r._needSpecialUnbind=!1,r.__base(null,e,i)},findBlocksInside:function(t,n){return this._findBlocks("find",t,n)},findBlockInside:function(t,n){return this._findBlocks("find",t,n,!0)},findBlocksOutside:function(t,n){return this._findBlocks("parents",t,n)},findBlockOutside:function(t,n){return this._findBlocks("closest",t,n)[0]||null},findBlocksOn:function(t,n){return this._findBlocks("",t,n)},findBlockOn:function(t,n){return this._findBlocks("",t,n,!0)},_findBlocks:function(t,i,o,u){if(!this.domElem)return[];o||(o=i,i=e);var a=i?"string"==typeof i?this.findElem(i):i:this.domElem,c="string"==typeof o,s=c?o:o.block||o.blockName,l="."+(c?M(s):M(s,o.modName,o.modVal))+(u?":first":""),f=a.filter(l);if(t&&(f=f.add(a[t](l))),u)return f[0]?r(s,f.eq(0),!0):null;var d=[],h={};return n.each(f,function(t,e){var i=r(s,n(e),!0);h[i._uniqId]||(h[i._uniqId]=!0,d.push(i))}),d},bindToDomElem:function(t,e,i){var r=this;return i?t.bind(r._buildEventName(e),function(t){return(t.data||(t.data={})).domElem=n(this),i.apply(r,arguments)}):n.each(e,function(n,e){r.bindToDomElem(t,n,e)}),r},bindToDoc:function(t,n){return this._needSpecialUnbind=!0,this.bindToDomElem(d,t,n)},bindToWin:function(t,n){var e,i,r=n;return"resize"===t&&(n=function(){var t=f.height(),n=f.width();(e!==t||i!==n)&&(e=t,i=n,r.apply(this,arguments))}),this._needSpecialUnbind=!0,this.bindToDomElem(f,t,n)},bindTo:function(t,e,i){return!e||n.isFunction(e)?(i=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,e,i)},unbindFromDomElem:function(t,n){return t.unbind(this._buildEventName(n)),this},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)},unbindFromWin:function(t){return this.unbindFromDomElem(f,t)},unbindFrom:function(t,n){return n?"string"==typeof t&&(t=this.elem(t)):(n=t,t=this.domElem),this.unbindFromDomElem(t,n)},_buildEventName:function(t){var n=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return n._buildOneEventName(t)}).join(" "):n._buildOneEventName(t)},_buildOneEventName:function(t){var n=this,e=n._eventNameCache;if(t in e)return e[t];var i="."+n._uniqId;if(t.indexOf(".")<0)return e[t]=t+i;var r=".bem_"+n.__self._name;return e[t]=t.split(".").map(function(t,n){return 0==n?t+r:r+"_"+t}).join("")+i},trigger:function(t,n){return this.__base(t=this.buildEvent(t),n).domElem&&this._ctxTrigger(t,n),this},_ctxTrigger:function(t,e){var i=this,r=_[i.__self._buildCtxEventName(t.type)],o={};r&&i.domElem.each(function(){for(var u=this,a=r.counter;u&&a;){var c=n.identify(u,!0);if(c){if(o[c])break;var s=r.ctxs[c];s&&(n.each(s,function(n,r){r.fn.call(r.ctx||i,t,e)}),a--),o[c]=!0}u=u.parentNode}})},setMod:function(t,e,i){if(t&&"undefined"!=typeof i&&t.length>1){var r=this;return t.each(function(){var o=n(this);o.__bemElemName=t.__bemElemName,r.setMod(o,e,i)}),r}return this.__base(t,e,i)},_extractModVal:function(t,n,e){var i,r=(n||this.domElem)[0];return r&&(i=r.className.match(this.__self._buildModValRE(t,e||n))),i?i[2]:""},_extractMods:function(t,n){var e={},i=!t.length,r=0;return((n||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?y:t.join("|"))+")",n,"g"))||[]).forEach(function(t){var n=(t=t.trim()).lastIndexOf(x),i=t.substr(0,n-1).lastIndexOf(x);e[t.substr(i+1,n-i-1)]=t.substr(n+1),++r}),r<t.length&&t.forEach(function(t){t in e||(e[t]="")}),e},_afterSetMod:function(t,e,i,r,o){var u=this.__self,a=u._buildModClassPrefix(t,o),c=u._buildModValRE(t,o),s=""===e;(r||this.domElem).each(function(){var t=this.className;t.indexOf(a)>-1?this.className=t.replace(c,s?"":"$1"+a+e):s||n(this).addClass(a+e)}),o&&this.dropElemCache(o,t,i).dropElemCache(o,t,e)},findElem:function(t,n,e,i){arguments.length%2?(i=e,e=n,n=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));var r=this.__self,o="."+n.split(" ").map(function(t){return M(r._name,t,e,i)}).join(",.");return u(t,o)},_elem:function(t,n,e){var i,r=t+k(n,e);return(i=this._elemCache[r])||(i=this._elemCache[r]=this.findElem(t,n,e),i.__bemElemName=t),i},elem:function(t,e,i){if(e&&"string"!=typeof e)return e.__bemElemName=t,e;if(t.indexOf(" ")<0)return this._elem(t,e,i);var r=n([]),o=this;return t.split(" ").forEach(function(t){r=r.add(o._elem(t,e,i))}),r},dropElemCache:function(t,n,e){if(t){var i=this,r=k(n,e);t.indexOf(" ")<0?delete i._elemCache[t+r]:t.split(" ").forEach(function(t){delete i._elemCache[t+r]})}else this._elemCache={};return this},elemParams:function(t){var n;return"string"==typeof t?(n=t,t=this.elem(t)):n=this.__self._extractElemNameFrom(t),c(t[0])[M(this.__self.getName(),n)]||{}},elemify:function(t,e){return(t=n(t)).__bemElemName=e,t},containsDomElem:function(t){var n=!1;return this.domElem.each(function(){return!(n=t.parents().andSelf().index(this)>-1)}),n},buildSelector:function(t,n,e){return this.__self.buildSelector(t,n,e)},destruct:function(t){var e=this,i=e.__self;e._isDestructing||(e._isDestructing=!0,e._needSpecialUnbind&&i.doc.add(i.win).unbind("."+e._uniqId),e.dropElemCache().domElem.each(function(t,e){var i=a(e);n.each(i,function(t,n){var i=m[n.uniqId];i?i._isDestructing||l(i,e):delete h[n.uniqId]}),s(e)}),t||e.domElem.remove(),delete m[e.un()._uniqId],delete e.domElem,delete e._elemCache,e.__base())}},{scope:null,doc:d,win:f,_processLive:function(t){var n=this,e=n._liveInitable;if("live"in n){var i="undefined"==typeof e;if(i^t){e=n.live()!==!1;var r=n.getName(),o=n.live;n.live=function(){return this.getName()===r?e:o.apply(this,arguments)}}}return e},init:function(t,e,r){(!t||n.isFunction(t))&&(r=e,e=t,t=d);var o=n.identify();return u(t,".i-bem").each(function(){i(n(this),o)}),e&&this.afterCurrentEvent(function(){e.call(r||this,t)}),this._runAfterCurrentEventFns(),t},destruct:function(t,i,r){"boolean"!=typeof t&&(r=i,i=t,t=e),C.call(u(i,".i-bem",r)).each(function(t,e){var i=a(this);n.each(i,function(t,n){if(n.uniqId){var i=m[n.uniqId];i?l(i,e):delete h[n.uniqId]}}),s(this)}),t||(r?i.empty():i.remove())},update:function(t,n,e,i){return this.destruct(t,!0),this.init(t.html(n),e,i)},replace:function(t,e){return this.destruct(!0,t),this.init(n(e).replaceAll(t))},append:function(t,e){return this.init(n(e).appendTo(t))},prepend:function(t,e){return this.init(n(e).prependTo(t))},before:function(t,e){return this.init(n(e).insertBefore(t))},after:function(t,e){return this.init(n(e).insertAfter(t))},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,e,i,r){var o=this;if(e.indexOf(" ")>-1)e.split(" ").forEach(function(n){o._liveClassBind(t,n,i,r)});else{var u=p[e],a=n.identify(i);u||(u=p[e]={},d.bind(e,o.changeThis(o._liveClassTrigger,o))),u=u[t]||(u[t]={uniqIds:{},fns:[]}),a in u.uniqIds||(u.fns.push({uniqId:a,fn:o._buildLiveEventFn(i,r)}),u.uniqIds[a]=u.fns.length-1)}return this},_liveClassUnbind:function(t,e,i){var r=p[e];if(r)if(i){if(r=r[t]){var o=n.identify(i);if(o in r.uniqIds){var u=r.uniqIds[o],a=r.fns.length-1;for(r.fns.splice(u,1);a>u;)r.uniqIds[r.fns[u++].uniqId]=u-1;delete r.uniqIds[o]}}}else delete r[t];return this},_liveClassTrigger:function(t){var e=p[t.type];if(e){var i=t.target,r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(o);do for(var u=" "+i.className+" ",a=0;o=r[a++];)if(u.indexOf(" "+o+" ")>-1){for(var c,s=0,l=e[o].fns,f=!1;c=l[s++];)c.fn.call(n(i),t)===!1&&(f=!0);if(f&&t.preventDefault(),f||t.isPropagationStopped())return;r.splice(--a,1)}while(r.length&&(i=i.parentNode))
}},_buildLiveEventFn:function(t,e){var i=this;return function(o){var u=[i._name,((o.data||(o.data={})).domElem=n(this)).closest(i.buildSelector()),!0],a=r.apply(null,e?u.concat([t,o]):u);return a&&!e&&t?t.apply(a,arguments):void 0}},liveInitOnEvent:function(t,n,e){return this.liveBindTo(t,n,e,!0)},liveBindTo:function(t,i,r,o){(!i||n.isFunction(i))&&(r=i,i=t,t=e),t&&"string"!=typeof t||(t={elem:t}),t.elemName&&(t.elem=t.elemName);var u=this;return t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(n){u._liveClassBind(M(u._name,n,t.modName,t.modVal),i,r,o)}),u):u._liveClassBind(M(u._name,t.elem,t.modName,t.modVal),i,r,o)},liveUnbindFrom:function(t,i,r){(!i||n.isFunction(i))&&(r=i,i=t,t=e);var o=this;return t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){o._liveClassUnbind(M(o._name,t),i,r)}),o):o._liveClassUnbind(M(o._name,t),i,r)},_liveInitOnBlockEvent:function(t,n,e,i){var r=this._name;return b[n].on(t,function(t){if(t.block.domElem){var n=arguments,o=t.block[i](r);e&&o.forEach(function(t){e.apply(t,n)})}}),this},liveInitOnBlockEvent:function(t,n,e){return this._liveInitOnBlockEvent(t,n,e,"findBlocksOn")},liveInitOnBlockInsideEvent:function(t,n,e){return this._liveInitOnBlockEvent(t,n,e,"findBlocksOutside")},liveInitOnBlockInit:function(t,n){return this.liveInitOnBlockEvent("init",t,n)},liveInitOnBlockInsideInit:function(t,n){return this.liveInitOnBlockInsideEvent("init",t,n)},on:function(t,n,e,i,r){return t.jquery?this._liveCtxBind(t,n,e,i,r):this.__base(t,n,e,i)},un:function(t,n,e,i){return t.jquery?this._liveCtxUnbind(t,n,e,i):this.__base(t,n,e)},liveCtxBind:function(t,n,e,i,r){return this._liveCtxBind(t,n,e,i,r)},_liveCtxBind:function(t,i,r,o,u){var a=this;if("string"==typeof i)if(n.isFunction(r)&&(u=o,o=r,r=e),i.indexOf(" ")>-1)i.split(" ").forEach(function(n){a._liveCtxBind(t,n,r,o,u)});else{var c=a._buildCtxEventName(i),s=_[c]||(_[c]={counter:0,ctxs:{}});t.each(function(){var t=n.identify(this),e=s.ctxs[t];e||(e=s.ctxs[t]={},++s.counter),e[n.identify(o)+(u?n.identify(u):"")]={fn:o,data:r,ctx:u}})}else n.each(i,function(n,e){a._liveCtxBind(t,n,e,r)});return a},liveCtxUnbind:function(t,n,e,i){return this._liveCtxUnbind(t,n,e,i)},_liveCtxUnbind:function(t,e,i,r){var o=this,u=_[e=o._buildCtxEventName(e)];return u&&(t.each(function(){var t,e=n.identify(this,!0);e&&(t=u.ctxs[e])&&(i&&delete t[n.identify(i)+(r?n.identify(r):"")],(!i||n.isEmptyObject(t))&&(u.counter--,delete u.ctxs[e]))}),u.counter||delete _[e]),o},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;var n=t[0].className.match(this._buildElemNameRE());return n?n[1]:e},extractParams:c,_buildModClassPrefix:function(t,n){return M(this._name)+(n?E+("string"==typeof n?n:this._extractElemNameFrom(n)):"")+x+t+x},_buildModValRE:function(t,n,e){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,n)+"("+y+")(?=\\s|$)",e)},_buildElemNameRE:function(){return new RegExp(this._name+E+"("+y+")(?:\\s|$)")},buildSelector:function(t,n,e){return"."+M(this._name,t,n,e)},getBlockByUniqId:function(t){return m[t]},getWindowSize:function(){return{width:f.width(),height:f.height()}}});n(function(){t.DOM.scope=n("body")})}(BEM,jQuery),function(){String.prototype.trim||(String.prototype.trim=function(){for(var t=this.replace(/^\s\s*/,""),n=/\s/,e=t.length;n.test(t.charAt(--e)););return t.slice(0,e+1)})}(),function(t){if(!window.JSON){var n,e=Object.prototype.toString,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};window.JSON={stringify:n=function(o){if(null===o)return"null";if("undefined"==typeof o)return t;switch(e.call(o)){case"[object String]":return i.lastIndex=0,'"'+(i.test(o)?o.replace(i,function(t){var n=r[t];return"string"==typeof n?n:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}):o)+'"';case"[object Number]":case"[object Boolean]":return""+o;case"[object Array]":for(var u,a="[",c=0,s=o.length;s>c;)u=n(o[c]),a+=(c++?",":"")+("undefined"==typeof u?"null":u);return a+"]";case"[object Object]":if("[object Function]"===e.call(o.toJSON))return n(o.toJSON());var u,a="{",c=0;for(var l in o)o.hasOwnProperty(l)&&(u=n(o[l]),"undefined"!=typeof u&&(a+=(c++?",":"")+'"'+l+'":'+u));return a+"}";default:return t}},parse:function(t){return Function("return "+t)()}}}}(),$(function(){BEM.afterCurrentEvent(function(){BEM.DOM.init()})}),function(t){var n=1,e=!1;if("deviceXDPI"in screen&&"logicalXDPI"in screen?n=screen.deviceXDPI/screen.logicalXDPI:"devicePixelRatio"in t&&(n=t.devicePixelRatio),"function"==typeof t.matchMedia){var i="only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 124dpi)";e=t.matchMedia(i).matches}else e=n>=1.3;BEM.DOM.decl("i-ua",{onSetMod:{js:function(){var t=this,n=t.__self;n.hiDpi&&t.setMod("hi-dpi","yes")}}},{dpr:n,hiDpi:e})}(window),function(){BEM.DOM.decl("i-menu",{onElemSetMod:{item:{state:{current:function(t,n,e,i){if("disabled"==i)return!1;var r=this.elem("item","state","current");this.delMod(r,"state").trigger("current",{prev:r,current:t})}}}},onItemSelectorClick:function(t){var n=this._getItemByEvent(t);this.setMod(n,"state","current")},_getItemByEvent:function(t){return t.data.domElem.closest(this.buildSelector("item"))}},{live:function(){this.liveBindTo("item-selector","leftclick",function(t){this.onItemSelectorClick(t)})}})}(),function(t){var n=t.event.special.leftclick={setup:function(){t(this).bind("click",n.handler)},teardown:function(){t(this).unbind("click",n.handler)},handler:function(n){n.button||(n.type="leftclick",t.event.dispatch.apply(this,arguments),n.type="click")}}}(jQuery),BEM.DOM.decl({block:"b-menu-vert",baseBlock:"i-menu"}),BEM.DOM.decl({block:"b-link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")})}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",modVal:"yes"},"leftclick",function(t){this._onClick(t)})}});