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
                var __$r = __$b5(__$ctx, __$ref);
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
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b11(__$ctx, __$ref);
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
                var __$r = __$b24(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
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
                return [ function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
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
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$18() {
                    var __$r__$19;
                    var __$l0__$20 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$19 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$20;
                    return __$r__$19;
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

function __$b5(__$ctx, __$ref) {
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

function __$b11(__$ctx, __$ref) {
    var mix__$10 = function __$lb__$11() {
        var __$r__$12;
        var __$l0__$13 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$12 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$13;
        return __$r__$12;
    }(), uaMix__$14 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$10 ? uaMix__$14.concat(mix__$10) : uaMix__$14;
}

function __$b24(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b25(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$21 = __$ctx.ctx;
    var __$r__$23;
    var __$l0__$24 = $$mode;
    $$mode = "";
    var __$l1__$25 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$21.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$21.title
            }, {
                block: "ua"
            }, ctx__$21.head, ctx__$21.styles, ctx__$21.favicon ? {
                elem: "favicon",
                url: ctx__$21.favicon
            } : "" ]
        }, ctx__$21 ]
    } ];
    var __$r__$27;
    var __$l2__$28 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$27 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$28;
    __$r__$23 = __$r__$27;
    $$mode = __$l0__$24;
    __$ctx.ctx = __$l1__$25;
    __$ctx._defPageApplied = false;
    return;
}

function __$b26(__$ctx, __$ref) {
    var BEM_INTERNAL__$29 = __$ctx.BEM.INTERNAL, ctx__$30 = __$ctx.ctx, isBEM__$31, tag__$32, res__$33;
    var __$r__$35;
    var __$l0__$36 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$37 = $$block;
    var __$r__$39;
    var __$l1__$40 = $$mode;
    $$mode = "tag";
    __$r__$39 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$40;
    tag__$32 = __$r__$39;
    typeof tag__$32 !== "undefined" || (tag__$32 = ctx__$30.tag);
    typeof tag__$32 !== "undefined" || (tag__$32 = "div");
    if (tag__$32) {
        var jsParams__$41, js__$42;
        if (vBlock__$37 && ctx__$30.js !== false) {
            var __$r__$43;
            var __$l2__$44 = $$mode;
            $$mode = "js";
            __$r__$43 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$44;
            js__$42 = __$r__$43;
            js__$42 = js__$42 ? __$ctx.extend(ctx__$30.js, js__$42 === true ? {} : js__$42) : ctx__$30.js === true ? {} : ctx__$30.js;
            js__$42 && ((jsParams__$41 = {})[BEM_INTERNAL__$29.buildClass(vBlock__$37, ctx__$30.elem)] = js__$42);
        }
        __$ctx._str += "<" + tag__$32;
        var __$r__$45;
        var __$l3__$46 = $$mode;
        $$mode = "bem";
        __$r__$45 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$46;
        isBEM__$31 = __$r__$45;
        typeof isBEM__$31 !== "undefined" || (isBEM__$31 = typeof ctx__$30.bem !== "undefined" ? ctx__$30.bem : ctx__$30.block || ctx__$30.elem);
        var __$r__$48;
        var __$l4__$49 = $$mode;
        $$mode = "cls";
        __$r__$48 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$49;
        var cls__$47 = __$r__$48;
        cls__$47 || (cls__$47 = ctx__$30.cls);
        var addJSInitClass__$50 = ctx__$30.block && jsParams__$41;
        if (isBEM__$31 || cls__$47) {
            __$ctx._str += ' class="';
            if (isBEM__$31) {
                __$ctx._str += BEM_INTERNAL__$29.buildClasses(vBlock__$37, ctx__$30.elem, ctx__$30.elemMods || ctx__$30.mods);
                var __$r__$52;
                var __$l5__$53 = $$mode;
                $$mode = "mix";
                __$r__$52 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$53;
                var mix__$51 = __$r__$52;
                ctx__$30.mix && (mix__$51 = mix__$51 ? [].concat(mix__$51, ctx__$30.mix) : ctx__$30.mix);
                if (mix__$51) {
                    var visited__$54 = {}, visitedKey__$55 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$54[visitedKey__$55(vBlock__$37, $$elem)] = true;
                    __$ctx.isArray(mix__$51) || (mix__$51 = [ mix__$51 ]);
                    for (var i__$56 = 0; i__$56 < mix__$51.length; i__$56++) {
                        var mixItem__$57 = mix__$51[i__$56], hasItem__$58 = mixItem__$57.block || mixItem__$57.elem, mixBlock__$59 = mixItem__$57.block || mixItem__$57._block || $$block, mixElem__$60 = mixItem__$57.elem || mixItem__$57._elem || $$elem;
                        hasItem__$58 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$29[hasItem__$58 ? "buildClasses" : "buildModsClasses"](mixBlock__$59, mixItem__$57.elem || mixItem__$57._elem || (mixItem__$57.block ? undefined : $$elem), mixItem__$57.elemMods || mixItem__$57.mods);
                        if (mixItem__$57.js) {
                            (jsParams__$41 || (jsParams__$41 = {}))[BEM_INTERNAL__$29.buildClass(mixBlock__$59, mixItem__$57.elem)] = mixItem__$57.js === true ? {} : mixItem__$57.js;
                            addJSInitClass__$50 || (addJSInitClass__$50 = mixBlock__$59 && !mixItem__$57.elem);
                        }
                        if (hasItem__$58 && !visited__$54[visitedKey__$55(mixBlock__$59, mixElem__$60)]) {
                            visited__$54[visitedKey__$55(mixBlock__$59, mixElem__$60)] = true;
                            var __$r__$62;
                            var __$l6__$63 = $$mode;
                            $$mode = "mix";
                            var __$l7__$64 = $$block;
                            $$block = mixBlock__$59;
                            var __$l8__$65 = $$elem;
                            $$elem = mixElem__$60;
                            __$r__$62 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$63;
                            $$block = __$l7__$64;
                            $$elem = __$l8__$65;
                            var nestedMix__$61 = __$r__$62;
                            if (nestedMix__$61) {
                                for (var j__$66 = 0; j__$66 < nestedMix__$61.length; j__$66++) {
                                    var nestedItem__$67 = nestedMix__$61[j__$66];
                                    if (!nestedItem__$67.block && !nestedItem__$67.elem || !visited__$54[visitedKey__$55(nestedItem__$67.block, nestedItem__$67.elem)]) {
                                        nestedItem__$67._block = mixBlock__$59;
                                        nestedItem__$67._elem = mixElem__$60;
                                        mix__$51.splice(i__$56 + 1, 0, nestedItem__$67);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$47 && (__$ctx._str += isBEM__$31 ? " " + cls__$47 : cls__$47);
            __$ctx._str += addJSInitClass__$50 ? ' i-bem"' : '"';
        }
        if (isBEM__$31 && jsParams__$41) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$41)) + '"';
        }
        var __$r__$69;
        var __$l9__$70 = $$mode;
        $$mode = "attrs";
        __$r__$69 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$70;
        var attrs__$68 = __$r__$69;
        attrs__$68 = __$ctx.extend(attrs__$68, ctx__$30.attrs);
        if (attrs__$68) {
            var name__$71, attr__$72;
            for (name__$71 in attrs__$68) {
                attr__$72 = attrs__$68[name__$71];
                if (typeof attr__$72 === "undefined") continue;
                __$ctx._str += " " + name__$71 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$72) ? attr__$72 : __$ctx.reapply(attr__$72)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$32)) {
        __$ctx._str += "/>";
    } else {
        tag__$32 && (__$ctx._str += ">");
        var __$r__$74;
        var __$l10__$75 = $$mode;
        $$mode = "content";
        __$r__$74 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$75;
        var content__$73 = __$r__$74;
        if (content__$73 || content__$73 === 0) {
            isBEM__$31 = vBlock__$37 || $$elem;
            var __$r__$76;
            var __$l11__$77 = $$mode;
            $$mode = "";
            var __$l12__$78 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$79 = __$ctx.position;
            __$ctx.position = isBEM__$31 ? 1 : __$ctx.position;
            var __$l14__$80 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$31 ? 1 : __$ctx._listLength;
            var __$l15__$81 = __$ctx.ctx;
            __$ctx.ctx = content__$73;
            __$r__$76 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$77;
            __$ctx._notNewList = __$l12__$78;
            __$ctx.position = __$l13__$79;
            __$ctx._listLength = __$l14__$80;
            __$ctx.ctx = __$l15__$81;
        }
        tag__$32 && (__$ctx._str += "</" + tag__$32 + ">");
    }
    res__$33 = __$ctx._str;
    __$r__$35 = undefined;
    __$ctx._str = __$l0__$36;
    __$ctx._buf.push(res__$33);
    return;
}

function __$b40(__$ctx, __$ref) {
    var __$r__$83;
    var __$l0__$84 = $$mode;
    $$mode = "";
    var __$l1__$85 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$87;
    var __$l2__$88 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$87 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$88;
    __$r__$83 = __$r__$87;
    $$mode = __$l0__$84;
    __$ctx.ctx = __$l1__$85;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$89 = __$ctx.ctx;
    if (ctx__$89 && ctx__$89 !== true || ctx__$89 === 0) {
        __$ctx._str += ctx__$89 + "";
    }
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ctx__$90 = __$ctx.ctx, len__$91 = ctx__$90.length, i__$92 = 0, prevPos__$93 = __$ctx.position, prevNotNewList__$94 = __$ctx._notNewList;
    if (prevNotNewList__$94) {
        __$ctx._listLength += len__$91 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$91;
    }
    __$ctx._notNewList = true;
    while (i__$92 < len__$91) (function __$lb__$95() {
        var __$r__$96;
        var __$l0__$97 = __$ctx.ctx;
        __$ctx.ctx = ctx__$90[i__$92++];
        __$r__$96 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$97;
        return __$r__$96;
    })();
    prevNotNewList__$94 || (__$ctx.position = prevPos__$93);
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$98 = __$ctx.ctx.block, vElem__$99 = __$ctx.ctx.elem, block__$100 = __$ctx._currBlock || $$block;
    var __$r__$102;
    var __$l0__$103 = $$mode;
    $$mode = "default";
    var __$l1__$104 = $$block;
    $$block = vBlock__$98 || (vElem__$99 ? block__$100 : undefined);
    var __$l2__$105 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$98 || vElem__$99 ? undefined : block__$100;
    var __$l3__$106 = $$elem;
    $$elem = vElem__$99;
    var __$l4__$107 = $$mods;
    $$mods = vBlock__$98 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$108 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$102 = undefined;
    $$mode = __$l0__$103;
    $$block = __$l1__$104;
    __$ctx._currBlock = __$l2__$105;
    $$elem = __$l3__$106;
    $$mods = __$l4__$107;
    $$elemMods = __$l5__$108;
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