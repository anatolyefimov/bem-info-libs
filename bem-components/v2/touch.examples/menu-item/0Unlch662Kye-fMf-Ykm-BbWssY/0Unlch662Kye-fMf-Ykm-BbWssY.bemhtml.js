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
    if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "menu-item") {
            if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "menu-item") {
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
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "menu-item") {
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 2) === 0) {
                    return [ function __$lb__$4() {
                        var __$r__$5;
                        var __$l0__$6 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$5 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$6;
                        return __$r__$5;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$12() {
                    var __$r__$13;
                    var __$l0__$14 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$13 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$14;
                    return __$r__$13;
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
                return [ function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
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
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            }
            if (!$$elem) {
                return "body";
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b42(__$ctx, __$ref);
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

function __$b1(__$ctx, __$ref) {
    var mods__$0 = $$mods;
    mods__$0.theme = mods__$0.theme || __$ctx._menuMods.theme;
    mods__$0.disabled = mods__$0.disabled || __$ctx._menuMods.disabled;
    var __$r__$2;
    var __$l0__$3 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$2 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$3;
    return;
}

function __$b2(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$18 = __$ctx.ctx;
    var __$r__$20;
    var __$l0__$21 = $$mode;
    $$mode = "";
    var __$l1__$22 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$18.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$18.title
            }, {
                block: "ua"
            }, ctx__$18.head, ctx__$18.styles, ctx__$18.favicon ? {
                elem: "favicon",
                url: ctx__$18.favicon
            } : "" ]
        }, ctx__$18 ]
    } ];
    var __$r__$24;
    var __$l2__$25 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$24 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$25;
    __$r__$20 = __$r__$24;
    $$mode = __$l0__$21;
    __$ctx.ctx = __$l1__$22;
    __$ctx._defPageApplied = false;
    return;
}

function __$b3(__$ctx, __$ref) {
    var BEM_INTERNAL__$26 = __$ctx.BEM.INTERNAL, ctx__$27 = __$ctx.ctx, isBEM__$28, tag__$29, res__$30;
    var __$r__$32;
    var __$l0__$33 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$34 = $$block;
    var __$r__$36;
    var __$l1__$37 = $$mode;
    $$mode = "tag";
    __$r__$36 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$37;
    tag__$29 = __$r__$36;
    typeof tag__$29 !== "undefined" || (tag__$29 = ctx__$27.tag);
    typeof tag__$29 !== "undefined" || (tag__$29 = "div");
    if (tag__$29) {
        var jsParams__$38, js__$39;
        if (vBlock__$34 && ctx__$27.js !== false) {
            var __$r__$40;
            var __$l2__$41 = $$mode;
            $$mode = "js";
            __$r__$40 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$41;
            js__$39 = __$r__$40;
            js__$39 = js__$39 ? __$ctx.extend(ctx__$27.js, js__$39 === true ? {} : js__$39) : ctx__$27.js === true ? {} : ctx__$27.js;
            js__$39 && ((jsParams__$38 = {})[BEM_INTERNAL__$26.buildClass(vBlock__$34, ctx__$27.elem)] = js__$39);
        }
        __$ctx._str += "<" + tag__$29;
        var __$r__$42;
        var __$l3__$43 = $$mode;
        $$mode = "bem";
        __$r__$42 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$43;
        isBEM__$28 = __$r__$42;
        typeof isBEM__$28 !== "undefined" || (isBEM__$28 = typeof ctx__$27.bem !== "undefined" ? ctx__$27.bem : ctx__$27.block || ctx__$27.elem);
        var __$r__$45;
        var __$l4__$46 = $$mode;
        $$mode = "cls";
        __$r__$45 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$46;
        var cls__$44 = __$r__$45;
        cls__$44 || (cls__$44 = ctx__$27.cls);
        var addJSInitClass__$47 = ctx__$27.block && jsParams__$38 && !ctx__$27.elem;
        if (isBEM__$28 || cls__$44) {
            __$ctx._str += ' class="';
            if (isBEM__$28) {
                __$ctx._str += BEM_INTERNAL__$26.buildClasses(vBlock__$34, ctx__$27.elem, ctx__$27.elemMods || ctx__$27.mods);
                var __$r__$49;
                var __$l5__$50 = $$mode;
                $$mode = "mix";
                __$r__$49 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$50;
                var mix__$48 = __$r__$49;
                ctx__$27.mix && (mix__$48 = mix__$48 ? [].concat(mix__$48, ctx__$27.mix) : ctx__$27.mix);
                if (mix__$48) {
                    var visited__$51 = {}, visitedKey__$52 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$51[visitedKey__$52(vBlock__$34, $$elem)] = true;
                    __$ctx.isArray(mix__$48) || (mix__$48 = [ mix__$48 ]);
                    for (var i__$53 = 0; i__$53 < mix__$48.length; i__$53++) {
                        var mixItem__$54 = mix__$48[i__$53], hasItem__$55 = mixItem__$54.block || mixItem__$54.elem, mixBlock__$56 = mixItem__$54.block || mixItem__$54._block || $$block, mixElem__$57 = mixItem__$54.elem || mixItem__$54._elem || $$elem;
                        hasItem__$55 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$26[hasItem__$55 ? "buildClasses" : "buildModsClasses"](mixBlock__$56, mixItem__$54.elem || mixItem__$54._elem || (mixItem__$54.block ? undefined : $$elem), mixItem__$54.elemMods || mixItem__$54.mods);
                        if (mixItem__$54.js) {
                            (jsParams__$38 || (jsParams__$38 = {}))[BEM_INTERNAL__$26.buildClass(mixBlock__$56, mixItem__$54.elem)] = mixItem__$54.js === true ? {} : mixItem__$54.js;
                            addJSInitClass__$47 || (addJSInitClass__$47 = mixBlock__$56 && !mixItem__$54.elem);
                        }
                        if (hasItem__$55 && !visited__$51[visitedKey__$52(mixBlock__$56, mixElem__$57)]) {
                            visited__$51[visitedKey__$52(mixBlock__$56, mixElem__$57)] = true;
                            var __$r__$59;
                            var __$l6__$60 = $$mode;
                            $$mode = "mix";
                            var __$l7__$61 = $$block;
                            $$block = mixBlock__$56;
                            var __$l8__$62 = $$elem;
                            $$elem = mixElem__$57;
                            __$r__$59 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$60;
                            $$block = __$l7__$61;
                            $$elem = __$l8__$62;
                            var nestedMix__$58 = __$r__$59;
                            if (nestedMix__$58) {
                                for (var j__$63 = 0; j__$63 < nestedMix__$58.length; j__$63++) {
                                    var nestedItem__$64 = nestedMix__$58[j__$63];
                                    if (!nestedItem__$64.block && !nestedItem__$64.elem || !visited__$51[visitedKey__$52(nestedItem__$64.block, nestedItem__$64.elem)]) {
                                        nestedItem__$64._block = mixBlock__$56;
                                        nestedItem__$64._elem = mixElem__$57;
                                        mix__$48.splice(i__$53 + 1, 0, nestedItem__$64);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$44 && (__$ctx._str += isBEM__$28 ? " " + cls__$44 : cls__$44);
            __$ctx._str += addJSInitClass__$47 ? ' i-bem"' : '"';
        }
        if (isBEM__$28 && jsParams__$38) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$38)) + '"';
        }
        var __$r__$66;
        var __$l9__$67 = $$mode;
        $$mode = "attrs";
        __$r__$66 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$67;
        var attrs__$65 = __$r__$66;
        attrs__$65 = __$ctx.extend(attrs__$65, ctx__$27.attrs);
        if (attrs__$65) {
            var name__$68, attr__$69;
            for (name__$68 in attrs__$65) {
                attr__$69 = attrs__$65[name__$68];
                if (typeof attr__$69 === "undefined") continue;
                __$ctx._str += " " + name__$68 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$69) ? attr__$69 : __$ctx.reapply(attr__$69)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$29)) {
        __$ctx._str += "/>";
    } else {
        tag__$29 && (__$ctx._str += ">");
        var __$r__$71;
        var __$l10__$72 = $$mode;
        $$mode = "content";
        __$r__$71 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$72;
        var content__$70 = __$r__$71;
        if (content__$70 || content__$70 === 0) {
            isBEM__$28 = vBlock__$34 || $$elem;
            var __$r__$73;
            var __$l11__$74 = $$mode;
            $$mode = "";
            var __$l12__$75 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$76 = __$ctx.position;
            __$ctx.position = isBEM__$28 ? 1 : __$ctx.position;
            var __$l14__$77 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$28 ? 1 : __$ctx._listLength;
            var __$l15__$78 = __$ctx.ctx;
            __$ctx.ctx = content__$70;
            __$r__$73 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$74;
            __$ctx._notNewList = __$l12__$75;
            __$ctx.position = __$l13__$76;
            __$ctx._listLength = __$l14__$77;
            __$ctx.ctx = __$l15__$78;
        }
        tag__$29 && (__$ctx._str += "</" + tag__$29 + ">");
    }
    res__$30 = __$ctx._str;
    __$r__$32 = undefined;
    __$ctx._str = __$l0__$33;
    __$ctx._buf.push(res__$30);
    return;
}

function __$b35(__$ctx, __$ref) {
    var mix__$7 = function __$lb__$8() {
        var __$r__$9;
        var __$l0__$10 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$9 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$10;
        return __$r__$9;
    }(), uaMix__$11 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$7 ? uaMix__$11.concat(mix__$7) : uaMix__$11;
}

function __$b38(__$ctx, __$ref) {
    var __$r__$80;
    var __$l0__$81 = $$mode;
    $$mode = "";
    var __$l1__$82 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$84;
    var __$l2__$85 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$84 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$85;
    __$r__$80 = __$r__$84;
    $$mode = __$l0__$81;
    __$ctx.ctx = __$l1__$82;
    return;
}

function __$b39(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$86 = __$ctx.ctx;
    if (ctx__$86 && ctx__$86 !== true || ctx__$86 === 0) {
        __$ctx._str += ctx__$86 + "";
    }
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b41(__$ctx, __$ref) {
    var ctx__$87 = __$ctx.ctx, len__$88 = ctx__$87.length, i__$89 = 0, prevPos__$90 = __$ctx.position, prevNotNewList__$91 = __$ctx._notNewList;
    if (prevNotNewList__$91) {
        __$ctx._listLength += len__$88 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$88;
    }
    __$ctx._notNewList = true;
    while (i__$89 < len__$88) (function __$lb__$92() {
        var __$r__$93;
        var __$l0__$94 = __$ctx.ctx;
        __$ctx.ctx = ctx__$87[i__$89++];
        __$r__$93 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$94;
        return __$r__$93;
    })();
    prevNotNewList__$91 || (__$ctx.position = prevPos__$90);
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$95 = __$ctx.ctx.block, vElem__$96 = __$ctx.ctx.elem, block__$97 = __$ctx._currBlock || $$block;
    var __$r__$99;
    var __$l0__$100 = $$mode;
    $$mode = "default";
    var __$l1__$101 = $$block;
    $$block = vBlock__$95 || (vElem__$96 ? block__$97 : undefined);
    var __$l2__$102 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$95 || vElem__$96 ? undefined : block__$97;
    var __$l3__$103 = $$elem;
    $$elem = vElem__$96;
    var __$l4__$104 = $$mods;
    $$mods = vBlock__$95 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$105 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$99 = undefined;
    $$mode = __$l0__$100;
    $$block = __$l1__$101;
    __$ctx._currBlock = __$l2__$102;
    $$elem = __$l3__$103;
    $$mods = __$l4__$104;
    $$elemMods = __$l5__$105;
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