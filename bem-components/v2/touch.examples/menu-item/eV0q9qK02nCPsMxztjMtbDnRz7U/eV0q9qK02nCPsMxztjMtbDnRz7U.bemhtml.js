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
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16) === 0) {
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
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "page") {
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$9() {
                    var __$r__$10;
                    var __$l0__$11 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$10 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$11;
                    return __$r__$10;
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
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$12() {
                    var __$r__$13;
                    var __$l0__$14 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$13 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$14;
                    return __$r__$13;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b41(__$ctx, __$ref);
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
    var ctx__$15 = __$ctx.ctx;
    var __$r__$17;
    var __$l0__$18 = $$mode;
    $$mode = "";
    var __$l1__$19 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$15.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$15.title
            }, {
                block: "ua"
            }, ctx__$15.head, ctx__$15.styles, ctx__$15.favicon ? {
                elem: "favicon",
                url: ctx__$15.favicon
            } : "" ]
        }, ctx__$15 ]
    } ];
    var __$r__$21;
    var __$l2__$22 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$21 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$22;
    __$r__$17 = __$r__$21;
    $$mode = __$l0__$18;
    __$ctx.ctx = __$l1__$19;
    __$ctx._defPageApplied = false;
    return;
}

function __$b3(__$ctx, __$ref) {
    var BEM_INTERNAL__$23 = __$ctx.BEM.INTERNAL, ctx__$24 = __$ctx.ctx, isBEM__$25, tag__$26, res__$27;
    var __$r__$29;
    var __$l0__$30 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$31 = $$block;
    var __$r__$33;
    var __$l1__$34 = $$mode;
    $$mode = "tag";
    __$r__$33 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$34;
    tag__$26 = __$r__$33;
    typeof tag__$26 !== "undefined" || (tag__$26 = ctx__$24.tag);
    typeof tag__$26 !== "undefined" || (tag__$26 = "div");
    if (tag__$26) {
        var jsParams__$35, js__$36;
        if (vBlock__$31 && ctx__$24.js !== false) {
            var __$r__$37;
            var __$l2__$38 = $$mode;
            $$mode = "js";
            __$r__$37 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$38;
            js__$36 = __$r__$37;
            js__$36 = js__$36 ? __$ctx.extend(ctx__$24.js, js__$36 === true ? {} : js__$36) : ctx__$24.js === true ? {} : ctx__$24.js;
            js__$36 && ((jsParams__$35 = {})[BEM_INTERNAL__$23.buildClass(vBlock__$31, ctx__$24.elem)] = js__$36);
        }
        __$ctx._str += "<" + tag__$26;
        var __$r__$39;
        var __$l3__$40 = $$mode;
        $$mode = "bem";
        __$r__$39 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$40;
        isBEM__$25 = __$r__$39;
        typeof isBEM__$25 !== "undefined" || (isBEM__$25 = typeof ctx__$24.bem !== "undefined" ? ctx__$24.bem : ctx__$24.block || ctx__$24.elem);
        var __$r__$42;
        var __$l4__$43 = $$mode;
        $$mode = "cls";
        __$r__$42 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$43;
        var cls__$41 = __$r__$42;
        cls__$41 || (cls__$41 = ctx__$24.cls);
        var addJSInitClass__$44 = ctx__$24.block && jsParams__$35 && !ctx__$24.elem;
        if (isBEM__$25 || cls__$41) {
            __$ctx._str += ' class="';
            if (isBEM__$25) {
                __$ctx._str += BEM_INTERNAL__$23.buildClasses(vBlock__$31, ctx__$24.elem, ctx__$24.elemMods || ctx__$24.mods);
                var __$r__$46;
                var __$l5__$47 = $$mode;
                $$mode = "mix";
                __$r__$46 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$47;
                var mix__$45 = __$r__$46;
                ctx__$24.mix && (mix__$45 = mix__$45 ? [].concat(mix__$45, ctx__$24.mix) : ctx__$24.mix);
                if (mix__$45) {
                    var visited__$48 = {}, visitedKey__$49 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$48[visitedKey__$49(vBlock__$31, $$elem)] = true;
                    __$ctx.isArray(mix__$45) || (mix__$45 = [ mix__$45 ]);
                    for (var i__$50 = 0; i__$50 < mix__$45.length; i__$50++) {
                        var mixItem__$51 = mix__$45[i__$50], hasItem__$52 = mixItem__$51.block || mixItem__$51.elem, mixBlock__$53 = mixItem__$51.block || mixItem__$51._block || $$block, mixElem__$54 = mixItem__$51.elem || mixItem__$51._elem || $$elem;
                        hasItem__$52 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$23[hasItem__$52 ? "buildClasses" : "buildModsClasses"](mixBlock__$53, mixItem__$51.elem || mixItem__$51._elem || (mixItem__$51.block ? undefined : $$elem), mixItem__$51.elemMods || mixItem__$51.mods);
                        if (mixItem__$51.js) {
                            (jsParams__$35 || (jsParams__$35 = {}))[BEM_INTERNAL__$23.buildClass(mixBlock__$53, mixItem__$51.elem)] = mixItem__$51.js === true ? {} : mixItem__$51.js;
                            addJSInitClass__$44 || (addJSInitClass__$44 = mixBlock__$53 && !mixItem__$51.elem);
                        }
                        if (hasItem__$52 && !visited__$48[visitedKey__$49(mixBlock__$53, mixElem__$54)]) {
                            visited__$48[visitedKey__$49(mixBlock__$53, mixElem__$54)] = true;
                            var __$r__$56;
                            var __$l6__$57 = $$mode;
                            $$mode = "mix";
                            var __$l7__$58 = $$block;
                            $$block = mixBlock__$53;
                            var __$l8__$59 = $$elem;
                            $$elem = mixElem__$54;
                            __$r__$56 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$57;
                            $$block = __$l7__$58;
                            $$elem = __$l8__$59;
                            var nestedMix__$55 = __$r__$56;
                            if (nestedMix__$55) {
                                for (var j__$60 = 0; j__$60 < nestedMix__$55.length; j__$60++) {
                                    var nestedItem__$61 = nestedMix__$55[j__$60];
                                    if (!nestedItem__$61.block && !nestedItem__$61.elem || !visited__$48[visitedKey__$49(nestedItem__$61.block, nestedItem__$61.elem)]) {
                                        nestedItem__$61._block = mixBlock__$53;
                                        nestedItem__$61._elem = mixElem__$54;
                                        mix__$45.splice(i__$50 + 1, 0, nestedItem__$61);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$41 && (__$ctx._str += isBEM__$25 ? " " + cls__$41 : cls__$41);
            __$ctx._str += addJSInitClass__$44 ? ' i-bem"' : '"';
        }
        if (isBEM__$25 && jsParams__$35) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$35)) + '"';
        }
        var __$r__$63;
        var __$l9__$64 = $$mode;
        $$mode = "attrs";
        __$r__$63 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$64;
        var attrs__$62 = __$r__$63;
        attrs__$62 = __$ctx.extend(attrs__$62, ctx__$24.attrs);
        if (attrs__$62) {
            var name__$65, attr__$66;
            for (name__$65 in attrs__$62) {
                attr__$66 = attrs__$62[name__$65];
                if (typeof attr__$66 === "undefined") continue;
                __$ctx._str += " " + name__$65 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$66) ? attr__$66 : __$ctx.reapply(attr__$66)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$26)) {
        __$ctx._str += "/>";
    } else {
        tag__$26 && (__$ctx._str += ">");
        var __$r__$68;
        var __$l10__$69 = $$mode;
        $$mode = "content";
        __$r__$68 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$69;
        var content__$67 = __$r__$68;
        if (content__$67 || content__$67 === 0) {
            isBEM__$25 = vBlock__$31 || $$elem;
            var __$r__$70;
            var __$l11__$71 = $$mode;
            $$mode = "";
            var __$l12__$72 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$73 = __$ctx.position;
            __$ctx.position = isBEM__$25 ? 1 : __$ctx.position;
            var __$l14__$74 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$25 ? 1 : __$ctx._listLength;
            var __$l15__$75 = __$ctx.ctx;
            __$ctx.ctx = content__$67;
            __$r__$70 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$71;
            __$ctx._notNewList = __$l12__$72;
            __$ctx.position = __$l13__$73;
            __$ctx._listLength = __$l14__$74;
            __$ctx.ctx = __$l15__$75;
        }
        tag__$26 && (__$ctx._str += "</" + tag__$26 + ">");
    }
    res__$27 = __$ctx._str;
    __$r__$29 = undefined;
    __$ctx._str = __$l0__$30;
    __$ctx._buf.push(res__$27);
    return;
}

function __$b34(__$ctx, __$ref) {
    var mix__$4 = function __$lb__$5() {
        var __$r__$6;
        var __$l0__$7 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$6 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$7;
        return __$r__$6;
    }(), uaMix__$8 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$4 ? uaMix__$8.concat(mix__$4) : uaMix__$8;
}

function __$b37(__$ctx, __$ref) {
    var __$r__$77;
    var __$l0__$78 = $$mode;
    $$mode = "";
    var __$l1__$79 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$81;
    var __$l2__$82 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$82;
    __$r__$77 = __$r__$81;
    $$mode = __$l0__$78;
    __$ctx.ctx = __$l1__$79;
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$83 = __$ctx.ctx;
    if (ctx__$83 && ctx__$83 !== true || ctx__$83 === 0) {
        __$ctx._str += ctx__$83 + "";
    }
    return;
}

function __$b39(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b40(__$ctx, __$ref) {
    var ctx__$84 = __$ctx.ctx, len__$85 = ctx__$84.length, i__$86 = 0, prevPos__$87 = __$ctx.position, prevNotNewList__$88 = __$ctx._notNewList;
    if (prevNotNewList__$88) {
        __$ctx._listLength += len__$85 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$85;
    }
    __$ctx._notNewList = true;
    while (i__$86 < len__$85) (function __$lb__$89() {
        var __$r__$90;
        var __$l0__$91 = __$ctx.ctx;
        __$ctx.ctx = ctx__$84[i__$86++];
        __$r__$90 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$91;
        return __$r__$90;
    })();
    prevNotNewList__$88 || (__$ctx.position = prevPos__$87);
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$92 = __$ctx.ctx.block, vElem__$93 = __$ctx.ctx.elem, block__$94 = __$ctx._currBlock || $$block;
    var __$r__$96;
    var __$l0__$97 = $$mode;
    $$mode = "default";
    var __$l1__$98 = $$block;
    $$block = vBlock__$92 || (vElem__$93 ? block__$94 : undefined);
    var __$l2__$99 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$92 || vElem__$93 ? undefined : block__$94;
    var __$l3__$100 = $$elem;
    $$elem = vElem__$93;
    var __$l4__$101 = $$mods;
    $$mods = vBlock__$92 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$102 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$96 = undefined;
    $$mode = __$l0__$97;
    $$block = __$l1__$98;
    __$ctx._currBlock = __$l2__$99;
    $$elem = __$l3__$100;
    $$mods = __$l4__$101;
    $$elemMods = __$l5__$102;
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