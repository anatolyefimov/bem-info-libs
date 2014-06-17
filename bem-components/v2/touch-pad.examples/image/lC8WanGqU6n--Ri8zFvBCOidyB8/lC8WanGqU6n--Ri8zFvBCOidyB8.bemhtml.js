(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="image"){var __$t=__$ctx._mode;if(__$t==="attrs"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="tag"){if(!__$ctx.elem){__$ctx.__$a=0;return"img"}}}__$ctx.__$a=0}[].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){}});function __$b1(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$0=__$ctx.ctx;return{src:ctx__$0.url,width:ctx__$0.width,height:ctx__$0.height,alt:ctx__$0.alt,title:ctx__$0.title}};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);