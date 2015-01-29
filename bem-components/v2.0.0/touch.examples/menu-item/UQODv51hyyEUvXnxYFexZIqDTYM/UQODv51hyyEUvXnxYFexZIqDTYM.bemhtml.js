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
        } else if (__$t === "menu-item") {
            if (!$$elem) {
                return {
                    val: __$ctx.ctx.val
                };
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b6(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem) {
                return {
                    role: "menuitem"
                };
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
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b13(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return "a";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
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
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b26(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if (__$ctx._menuItemDisabled) {
                    var __$r = __$b27(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        } else if (__$t === "menu-item") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && $$mods["type"] === "link") {
                    var __$r = __$b28(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                if (__$ctx._menuMods && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$b29(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b31(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 8) === 0) {
                    return [ function __$lb__$17() {
                        var __$r__$18;
                        var __$l0__$19 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$18 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$19;
                        return __$r__$18;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
                return [ function __$lb__$25() {
                    var __$r__$26;
                    var __$l0__$27 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$26 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$27;
                    return __$r__$26;
                }(), {
                    elem: "meta",
                    attrs: {
                        name: "viewport",
                        content: "width=device-width," + (__$ctx.ctx.zoom ? "initial-scale=1" : "maximum-scale=1,initial-scale=1,user-scalable=0")
                    }
                }, {
                    elem: "meta",
                    attrs: {
                        name: "format-detection",
                        content: "telephone=no"
                    }
                }, {
                    elem: "link",
                    attrs: {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }
                } ];
            }
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$28() {
                    var __$r__$29;
                    var __$l0__$30 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$29 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$30;
                    return __$r__$29;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
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
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b48(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b50(__$ctx, __$ref);
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
        ctx["_menuItemDisabled"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
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

function __$b6(__$ctx, __$ref) {
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

function __$b13(__$ctx, __$ref) {
    var mix__$20 = function __$lb__$21() {
        var __$r__$22;
        var __$l0__$23 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$22 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$23;
        return __$r__$22;
    }(), uaMix__$24 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$20 ? uaMix__$24.concat(mix__$20) : uaMix__$24;
}

function __$b26(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b27(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    applyc(__$ctx, __$ref);
    return;
}

function __$b28(__$ctx, __$ref) {
    var __$r__$11;
    var __$l0__$12 = __$ctx._menuItemDisabled;
    __$ctx._menuItemDisabled = true;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx._menuItemDisabled = __$l0__$12;
    return;
}

function __$b29(__$ctx, __$ref) {
    var mods__$13 = $$mods;
    mods__$13.theme = mods__$13.theme || __$ctx._menuMods.theme;
    mods__$13.disabled = mods__$13.disabled || __$ctx._menuMods.disabled;
    var __$r__$15;
    var __$l0__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$16;
    return;
}

function __$b30(__$ctx, __$ref) {
    var ctx__$31 = __$ctx.ctx;
    var __$r__$33;
    var __$l0__$34 = $$mode;
    $$mode = "";
    var __$l1__$35 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$31.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$31.title
            }, {
                block: "ua"
            }, ctx__$31.head, ctx__$31.styles, ctx__$31.favicon ? {
                elem: "favicon",
                url: ctx__$31.favicon
            } : "" ]
        }, ctx__$31 ]
    } ];
    var __$r__$37;
    var __$l2__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$38;
    __$r__$33 = __$r__$37;
    $$mode = __$l0__$34;
    __$ctx.ctx = __$l1__$35;
    return;
}

function __$b31(__$ctx, __$ref) {
    var BEM_INTERNAL__$39 = __$ctx.BEM.INTERNAL, ctx__$40 = __$ctx.ctx, isBEM__$41, tag__$42, res__$43;
    var __$r__$45;
    var __$l0__$46 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$47 = $$block;
    var __$r__$49;
    var __$l1__$50 = $$mode;
    $$mode = "tag";
    __$r__$49 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$50;
    tag__$42 = __$r__$49;
    typeof tag__$42 !== "undefined" || (tag__$42 = ctx__$40.tag);
    typeof tag__$42 !== "undefined" || (tag__$42 = "div");
    if (tag__$42) {
        var jsParams__$51, js__$52;
        if (vBlock__$47 && ctx__$40.js !== false) {
            var __$r__$53;
            var __$l2__$54 = $$mode;
            $$mode = "js";
            __$r__$53 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$54;
            js__$52 = __$r__$53;
            js__$52 = js__$52 ? __$ctx.extend(ctx__$40.js, js__$52 === true ? {} : js__$52) : ctx__$40.js === true ? {} : ctx__$40.js;
            js__$52 && ((jsParams__$51 = {})[BEM_INTERNAL__$39.buildClass(vBlock__$47, ctx__$40.elem)] = js__$52);
        }
        __$ctx._str += "<" + tag__$42;
        var __$r__$55;
        var __$l3__$56 = $$mode;
        $$mode = "bem";
        __$r__$55 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$56;
        isBEM__$41 = __$r__$55;
        typeof isBEM__$41 !== "undefined" || (isBEM__$41 = typeof ctx__$40.bem !== "undefined" ? ctx__$40.bem : ctx__$40.block || ctx__$40.elem);
        var __$r__$58;
        var __$l4__$59 = $$mode;
        $$mode = "cls";
        __$r__$58 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$59;
        var cls__$57 = __$r__$58;
        cls__$57 || (cls__$57 = ctx__$40.cls);
        var addJSInitClass__$60 = ctx__$40.block && jsParams__$51 && !ctx__$40.elem;
        if (isBEM__$41 || cls__$57) {
            __$ctx._str += ' class="';
            if (isBEM__$41) {
                __$ctx._str += BEM_INTERNAL__$39.buildClasses(vBlock__$47, ctx__$40.elem, ctx__$40.elemMods || ctx__$40.mods);
                var __$r__$62;
                var __$l5__$63 = $$mode;
                $$mode = "mix";
                __$r__$62 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$63;
                var mix__$61 = __$r__$62;
                ctx__$40.mix && (mix__$61 = mix__$61 ? [].concat(mix__$61, ctx__$40.mix) : ctx__$40.mix);
                if (mix__$61) {
                    var visited__$64 = {}, visitedKey__$65 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$64[visitedKey__$65(vBlock__$47, $$elem)] = true;
                    __$ctx.isArray(mix__$61) || (mix__$61 = [ mix__$61 ]);
                    for (var i__$66 = 0; i__$66 < mix__$61.length; i__$66++) {
                        var mixItem__$67 = mix__$61[i__$66], hasItem__$68 = mixItem__$67.block || mixItem__$67.elem, mixBlock__$69 = mixItem__$67.block || mixItem__$67._block || $$block, mixElem__$70 = mixItem__$67.elem || mixItem__$67._elem || $$elem;
                        hasItem__$68 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$39[hasItem__$68 ? "buildClasses" : "buildModsClasses"](mixBlock__$69, mixItem__$67.elem || mixItem__$67._elem || (mixItem__$67.block ? undefined : $$elem), mixItem__$67.elemMods || mixItem__$67.mods);
                        if (mixItem__$67.js) {
                            (jsParams__$51 || (jsParams__$51 = {}))[BEM_INTERNAL__$39.buildClass(mixBlock__$69, mixItem__$67.elem)] = mixItem__$67.js === true ? {} : mixItem__$67.js;
                            addJSInitClass__$60 || (addJSInitClass__$60 = mixBlock__$69 && !mixItem__$67.elem);
                        }
                        if (hasItem__$68 && !visited__$64[visitedKey__$65(mixBlock__$69, mixElem__$70)]) {
                            visited__$64[visitedKey__$65(mixBlock__$69, mixElem__$70)] = true;
                            var __$r__$72;
                            var __$l6__$73 = $$mode;
                            $$mode = "mix";
                            var __$l7__$74 = $$block;
                            $$block = mixBlock__$69;
                            var __$l8__$75 = $$elem;
                            $$elem = mixElem__$70;
                            __$r__$72 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$73;
                            $$block = __$l7__$74;
                            $$elem = __$l8__$75;
                            var nestedMix__$71 = __$r__$72;
                            if (nestedMix__$71) {
                                for (var j__$76 = 0; j__$76 < nestedMix__$71.length; j__$76++) {
                                    var nestedItem__$77 = nestedMix__$71[j__$76];
                                    if (!nestedItem__$77.block && !nestedItem__$77.elem || !visited__$64[visitedKey__$65(nestedItem__$77.block, nestedItem__$77.elem)]) {
                                        nestedItem__$77._block = mixBlock__$69;
                                        nestedItem__$77._elem = mixElem__$70;
                                        mix__$61.splice(i__$66 + 1, 0, nestedItem__$77);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$57 && (__$ctx._str += isBEM__$41 ? " " + cls__$57 : cls__$57);
            __$ctx._str += addJSInitClass__$60 ? ' i-bem"' : '"';
        }
        if (isBEM__$41 && jsParams__$51) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$51)) + '"';
        }
        var __$r__$79;
        var __$l9__$80 = $$mode;
        $$mode = "attrs";
        __$r__$79 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$80;
        var attrs__$78 = __$r__$79;
        attrs__$78 = __$ctx.extend(attrs__$78, ctx__$40.attrs);
        if (attrs__$78) {
            var name__$81, attr__$82;
            for (name__$81 in attrs__$78) {
                attr__$82 = attrs__$78[name__$81];
                if (typeof attr__$82 === "undefined") continue;
                __$ctx._str += " " + name__$81 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$82) ? attr__$82 : __$ctx.reapply(attr__$82)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$42)) {
        __$ctx._str += "/>";
    } else {
        tag__$42 && (__$ctx._str += ">");
        var __$r__$84;
        var __$l10__$85 = $$mode;
        $$mode = "content";
        __$r__$84 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$85;
        var content__$83 = __$r__$84;
        if (content__$83 || content__$83 === 0) {
            isBEM__$41 = vBlock__$47 || $$elem;
            var __$r__$86;
            var __$l11__$87 = $$mode;
            $$mode = "";
            var __$l12__$88 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$89 = __$ctx.position;
            __$ctx.position = isBEM__$41 ? 1 : __$ctx.position;
            var __$l14__$90 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$41 ? 1 : __$ctx._listLength;
            var __$l15__$91 = __$ctx.ctx;
            __$ctx.ctx = content__$83;
            __$r__$86 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$87;
            __$ctx._notNewList = __$l12__$88;
            __$ctx.position = __$l13__$89;
            __$ctx._listLength = __$l14__$90;
            __$ctx.ctx = __$l15__$91;
        }
        tag__$42 && (__$ctx._str += "</" + tag__$42 + ">");
    }
    res__$43 = __$ctx._str;
    __$r__$45 = undefined;
    __$ctx._str = __$l0__$46;
    __$ctx._buf.push(res__$43);
    return;
}

function __$b46(__$ctx, __$ref) {
    var __$r__$93;
    var __$l0__$94 = $$mode;
    $$mode = "";
    var __$l1__$95 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$97;
    var __$l2__$98 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$97 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$98;
    __$r__$93 = __$r__$97;
    $$mode = __$l0__$94;
    __$ctx.ctx = __$l1__$95;
    return;
}

function __$b47(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$99 = __$ctx.ctx;
    if (ctx__$99 && ctx__$99 !== true || ctx__$99 === 0) {
        __$ctx._str += ctx__$99 + "";
    }
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b49(__$ctx, __$ref) {
    var ctx__$100 = __$ctx.ctx, len__$101 = ctx__$100.length, i__$102 = 0, prevPos__$103 = __$ctx.position, prevNotNewList__$104 = __$ctx._notNewList;
    if (prevNotNewList__$104) {
        __$ctx._listLength += len__$101 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$101;
    }
    __$ctx._notNewList = true;
    while (i__$102 < len__$101) (function __$lb__$105() {
        var __$r__$106;
        var __$l0__$107 = __$ctx.ctx;
        __$ctx.ctx = ctx__$100[i__$102++];
        __$r__$106 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$107;
        return __$r__$106;
    })();
    prevNotNewList__$104 || (__$ctx.position = prevPos__$103);
    return;
}

function __$b50(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$108 = __$ctx.ctx.block, vElem__$109 = __$ctx.ctx.elem, block__$110 = __$ctx._currBlock || $$block;
    var __$r__$112;
    var __$l0__$113 = $$mode;
    $$mode = "default";
    var __$l1__$114 = $$block;
    $$block = vBlock__$108 || (vElem__$109 ? block__$110 : undefined);
    var __$l2__$115 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$108 || vElem__$109 ? undefined : block__$110;
    var __$l3__$116 = $$elem;
    $$elem = vElem__$109;
    var __$l4__$117 = $$mods;
    $$mods = vBlock__$108 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$118 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$112 = undefined;
    $$mode = __$l0__$113;
    $$block = __$l1__$114;
    __$ctx._currBlock = __$l2__$115;
    $$elem = __$l3__$116;
    $$mods = __$l4__$117;
    $$elemMods = __$l5__$118;
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