(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        if ($$block === "link" && !$$elem) {
            return [ {
                elem: "control"
            } ];
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return "a";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return "link";
            } else if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            } else if (__$t === "head") {
                return "head";
            } else if (__$t === "favicon") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            }
            if (!$$elem) {
                return "body";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b22(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 4) === 0) {
                            var __$r = __$b23(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b24(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b25(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b26(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 8) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$26() {
                    var __$r__$27;
                    var __$l0__$28 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$27 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$28;
                    return __$r__$27;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$29() {
                    var __$r__$30;
                    var __$l0__$31 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$30 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$31;
                    return __$r__$30;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b43(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b44(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b4(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, attrs__$4 = {}, tabIndex__$5;
    if (!$$mods.disabled) {
        if (ctx__$3.url) {
            attrs__$4.href = ctx__$3.url;
            tabIndex__$5 = ctx__$3.tabIndex;
        } else {
            tabIndex__$5 = ctx__$3.tabIndex || 0;
        }
    }
    typeof tabIndex__$5 === "undefined" || (attrs__$4.tabindex = tabIndex__$5);
    ctx__$3.title && (attrs__$4.title = ctx__$3.title);
    ctx__$3.target && (attrs__$4.target = ctx__$3.target);
    return attrs__$4;
}

function __$b22(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b23(__$ctx, __$ref) {
    var url__$10 = __$ctx.ctx.url;
    var __$r__$12;
    var __$l0__$13 = $$mode;
    $$mode = "";
    var __$l1__$14 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$10 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$16;
    var __$l2__$17 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$16 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$17;
    __$r__$12 = __$r__$16;
    $$mode = __$l0__$13;
    __$ctx.ctx = __$l1__$14;
    return;
}

function __$b24(__$ctx, __$ref) {
    var ie__$18 = __$ctx.ctx.ie, hideRule__$19 = !ie__$18 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$18 === "!IE" ? [ ie__$18, "<!-->", "<!--" ] : [ ie__$18, "", "" ];
    var __$r__$21;
    var __$l0__$22 = $$mode;
    $$mode = "";
    var __$l3__$23 = __$ctx.ctx;
    var __$l1__$24 = __$l3__$23._ieCommented;
    __$l3__$23._ieCommented = true;
    var __$l2__$25 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$19[0] + "]>" + hideRule__$19[1], __$ctx.ctx, hideRule__$19[2] + "<![endif]-->" ];
    __$r__$21 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$22;
    __$l3__$23._ieCommented = __$l1__$24;
    __$ctx.ctx = __$l2__$25;
    return;
}

function __$b25(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$32 = __$ctx.ctx;
    var __$r__$34;
    var __$l0__$35 = $$mode;
    $$mode = "";
    var __$l1__$36 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$32.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$32.title
            }, {
                block: "ua"
            }, ctx__$32.head, ctx__$32.styles, ctx__$32.favicon ? {
                elem: "favicon",
                url: ctx__$32.favicon
            } : "" ]
        }, ctx__$32 ]
    } ];
    var __$r__$38;
    var __$l2__$39 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$38 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$39;
    __$r__$34 = __$r__$38;
    $$mode = __$l0__$35;
    __$ctx.ctx = __$l1__$36;
    __$ctx._defPageApplied = false;
    return;
}

function __$b26(__$ctx, __$ref) {
    var BEM_INTERNAL__$40 = __$ctx.BEM.INTERNAL, ctx__$41 = __$ctx.ctx, isBEM__$42, tag__$43, res__$44;
    var __$r__$46;
    var __$l0__$47 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$48 = $$block;
    var __$r__$50;
    var __$l1__$51 = $$mode;
    $$mode = "tag";
    __$r__$50 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$51;
    tag__$43 = __$r__$50;
    typeof tag__$43 !== "undefined" || (tag__$43 = ctx__$41.tag);
    typeof tag__$43 !== "undefined" || (tag__$43 = "div");
    if (tag__$43) {
        var jsParams__$52, js__$53;
        if (vBlock__$48 && ctx__$41.js !== false) {
            var __$r__$54;
            var __$l2__$55 = $$mode;
            $$mode = "js";
            __$r__$54 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$55;
            js__$53 = __$r__$54;
            js__$53 = js__$53 ? __$ctx.extend(ctx__$41.js, js__$53 === true ? {} : js__$53) : ctx__$41.js === true ? {} : ctx__$41.js;
            js__$53 && ((jsParams__$52 = {})[BEM_INTERNAL__$40.buildClass(vBlock__$48, ctx__$41.elem)] = js__$53);
        }
        __$ctx._str += "<" + tag__$43;
        var __$r__$56;
        var __$l3__$57 = $$mode;
        $$mode = "bem";
        __$r__$56 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$57;
        isBEM__$42 = __$r__$56;
        typeof isBEM__$42 !== "undefined" || (isBEM__$42 = typeof ctx__$41.bem !== "undefined" ? ctx__$41.bem : ctx__$41.block || ctx__$41.elem);
        var __$r__$59;
        var __$l4__$60 = $$mode;
        $$mode = "cls";
        __$r__$59 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$60;
        var cls__$58 = __$r__$59;
        cls__$58 || (cls__$58 = ctx__$41.cls);
        var addJSInitClass__$61 = ctx__$41.block && jsParams__$52;
        if (isBEM__$42 || cls__$58) {
            __$ctx._str += ' class="';
            if (isBEM__$42) {
                __$ctx._str += BEM_INTERNAL__$40.buildClasses(vBlock__$48, ctx__$41.elem, ctx__$41.elemMods || ctx__$41.mods);
                var __$r__$63;
                var __$l5__$64 = $$mode;
                $$mode = "mix";
                __$r__$63 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$64;
                var mix__$62 = __$r__$63;
                ctx__$41.mix && (mix__$62 = mix__$62 ? [].concat(mix__$62, ctx__$41.mix) : ctx__$41.mix);
                if (mix__$62) {
                    var visited__$65 = {}, visitedKey__$66 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$65[visitedKey__$66(vBlock__$48, $$elem)] = true;
                    __$ctx.isArray(mix__$62) || (mix__$62 = [ mix__$62 ]);
                    for (var i__$67 = 0; i__$67 < mix__$62.length; i__$67++) {
                        var mixItem__$68 = mix__$62[i__$67], hasItem__$69 = mixItem__$68.block || mixItem__$68.elem, mixBlock__$70 = mixItem__$68.block || mixItem__$68._block || $$block, mixElem__$71 = mixItem__$68.elem || mixItem__$68._elem || $$elem;
                        hasItem__$69 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$40[hasItem__$69 ? "buildClasses" : "buildModsClasses"](mixBlock__$70, mixItem__$68.elem || mixItem__$68._elem || (mixItem__$68.block ? undefined : $$elem), mixItem__$68.elemMods || mixItem__$68.mods);
                        if (mixItem__$68.js) {
                            (jsParams__$52 || (jsParams__$52 = {}))[BEM_INTERNAL__$40.buildClass(mixBlock__$70, mixItem__$68.elem)] = mixItem__$68.js === true ? {} : mixItem__$68.js;
                            addJSInitClass__$61 || (addJSInitClass__$61 = mixBlock__$70 && !mixItem__$68.elem);
                        }
                        if (hasItem__$69 && !visited__$65[visitedKey__$66(mixBlock__$70, mixElem__$71)]) {
                            visited__$65[visitedKey__$66(mixBlock__$70, mixElem__$71)] = true;
                            var __$r__$73;
                            var __$l6__$74 = $$mode;
                            $$mode = "mix";
                            var __$l7__$75 = $$block;
                            $$block = mixBlock__$70;
                            var __$l8__$76 = $$elem;
                            $$elem = mixElem__$71;
                            __$r__$73 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$74;
                            $$block = __$l7__$75;
                            $$elem = __$l8__$76;
                            var nestedMix__$72 = __$r__$73;
                            if (nestedMix__$72) {
                                for (var j__$77 = 0; j__$77 < nestedMix__$72.length; j__$77++) {
                                    var nestedItem__$78 = nestedMix__$72[j__$77];
                                    if (!nestedItem__$78.block && !nestedItem__$78.elem || !visited__$65[visitedKey__$66(nestedItem__$78.block, nestedItem__$78.elem)]) {
                                        nestedItem__$78._block = mixBlock__$70;
                                        nestedItem__$78._elem = mixElem__$71;
                                        mix__$62.splice(i__$67 + 1, 0, nestedItem__$78);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$58 && (__$ctx._str += isBEM__$42 ? " " + cls__$58 : cls__$58);
            __$ctx._str += addJSInitClass__$61 ? ' i-bem"' : '"';
        }
        if (isBEM__$42 && jsParams__$52) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$52)) + '"';
        }
        var __$r__$80;
        var __$l9__$81 = $$mode;
        $$mode = "attrs";
        __$r__$80 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$81;
        var attrs__$79 = __$r__$80;
        attrs__$79 = __$ctx.extend(attrs__$79, ctx__$41.attrs);
        if (attrs__$79) {
            var name__$82, attr__$83;
            for (name__$82 in attrs__$79) {
                attr__$83 = attrs__$79[name__$82];
                if (typeof attr__$83 === "undefined") continue;
                __$ctx._str += " " + name__$82 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$83) ? attr__$83 : __$ctx.reapply(attr__$83)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$43)) {
        __$ctx._str += "/>";
    } else {
        tag__$43 && (__$ctx._str += ">");
        var __$r__$85;
        var __$l10__$86 = $$mode;
        $$mode = "content";
        __$r__$85 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$86;
        var content__$84 = __$r__$85;
        if (content__$84 || content__$84 === 0) {
            isBEM__$42 = vBlock__$48 || $$elem;
            var __$r__$87;
            var __$l11__$88 = $$mode;
            $$mode = "";
            var __$l12__$89 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$90 = __$ctx.position;
            __$ctx.position = isBEM__$42 ? 1 : __$ctx.position;
            var __$l14__$91 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$42 ? 1 : __$ctx._listLength;
            var __$l15__$92 = __$ctx.ctx;
            __$ctx.ctx = content__$84;
            __$r__$87 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$88;
            __$ctx._notNewList = __$l12__$89;
            __$ctx.position = __$l13__$90;
            __$ctx._listLength = __$l14__$91;
            __$ctx.ctx = __$l15__$92;
        }
        tag__$43 && (__$ctx._str += "</" + tag__$43 + ">");
    }
    res__$44 = __$ctx._str;
    __$r__$46 = undefined;
    __$ctx._str = __$l0__$47;
    __$ctx._buf.push(res__$44);
    return;
}

function __$b40(__$ctx, __$ref) {
    var __$r__$94;
    var __$l0__$95 = $$mode;
    $$mode = "";
    var __$l1__$96 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$98;
    var __$l2__$99 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$98 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$99;
    __$r__$94 = __$r__$98;
    $$mode = __$l0__$95;
    __$ctx.ctx = __$l1__$96;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$100 = __$ctx.ctx;
    if (ctx__$100 && ctx__$100 !== true || ctx__$100 === 0) {
        __$ctx._str += ctx__$100 + "";
    }
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ctx__$101 = __$ctx.ctx, len__$102 = ctx__$101.length, i__$103 = 0, prevPos__$104 = __$ctx.position, prevNotNewList__$105 = __$ctx._notNewList;
    if (prevNotNewList__$105) {
        __$ctx._listLength += len__$102 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$102;
    }
    __$ctx._notNewList = true;
    while (i__$103 < len__$102) (function __$lb__$106() {
        var __$r__$107;
        var __$l0__$108 = __$ctx.ctx;
        __$ctx.ctx = ctx__$101[i__$103++];
        __$r__$107 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$108;
        return __$r__$107;
    })();
    prevNotNewList__$105 || (__$ctx.position = prevPos__$104);
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$109 = __$ctx.ctx.block, vElem__$110 = __$ctx.ctx.elem, block__$111 = __$ctx._currBlock || $$block;
    var __$r__$113;
    var __$l0__$114 = $$mode;
    $$mode = "default";
    var __$l1__$115 = $$block;
    $$block = vBlock__$109 || (vElem__$110 ? block__$111 : undefined);
    var __$l2__$116 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$109 || vElem__$110 ? undefined : block__$111;
    var __$l3__$117 = $$elem;
    $$elem = vElem__$110;
    var __$l4__$118 = $$mods;
    $$mods = vBlock__$109 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$119 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$113 = undefined;
    $$mode = __$l0__$114;
    $$block = __$l1__$115;
    __$ctx._currBlock = __$l2__$116;
    $$elem = __$l3__$117;
    $$mods = __$l4__$118;
    $$elemMods = __$l5__$119;
    return;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);