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
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "menu") {
            var __$t = $$elem;
            if (__$t === "group-title") {
                return {
                    role: "presentation"
                };
            } else if (__$t === "group") {
                if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$3() {
                        var __$r__$4;
                        var __$l0__$5 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$4 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$5;
                        return __$r__$4;
                    }(), {
                        "aria-label": __$ctx.ctx.title
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return {
                    role: "group"
                };
            }
            if (!$$elem) {
                var __$r = __$b4(__$ctx, __$ref);
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 1) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
                }() ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$34() {
                    var __$r__$35;
                    var __$l0__$36 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$35 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$36;
                    return __$r__$35;
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
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                return [ function __$lb__$37() {
                    var __$r__$38;
                    var __$l0__$39 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$38 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$39;
                    return __$r__$38;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "menu") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$6() {
                        var __$r__$7;
                        var __$l0__$8 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$7 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$8;
                        return __$r__$7;
                    }(), {
                        live: false
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
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b20(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b22(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b23(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b25(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
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
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
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
        ctx["_menuMods"] = undefined;
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

function __$b4(__$ctx, __$ref) {
    var attrs__$13 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$13.tabindex = 0);
    return attrs__$13;
}

function __$b20(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx, mods__$15 = $$mods, firstItem__$16, checkedItems__$17 = [];
    if (ctx__$14.content) {
        var isValDef__$18 = typeof ctx__$14.val !== "undefined", containsVal__$19 = function(val) {
            return isValDef__$18 && (mods__$15.mode === "check" ? ctx__$14.val.indexOf(val) > -1 : ctx__$14.val === val);
        }, iterateItems__$20 = function(content) {
            var i__$21 = 0, itemOrGroup__$22;
            while (itemOrGroup__$22 = content[i__$21++]) {
                if (itemOrGroup__$22.block === "menu-item") {
                    firstItem__$16 || (firstItem__$16 = itemOrGroup__$22);
                    if (containsVal__$19(itemOrGroup__$22.val)) {
                        (itemOrGroup__$22.mods = itemOrGroup__$22.mods || {}).checked = true;
                        checkedItems__$17.push(itemOrGroup__$22);
                    }
                } else {
                    iterateItems__$20(itemOrGroup__$22.content);
                }
            }
        };
        iterateItems__$20(ctx__$14.content);
    }
    __$ctx._firstItem = firstItem__$16;
    __$ctx._checkedItems = checkedItems__$17;
    var __$r__$24;
    var __$l0__$25 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$15.theme,
        disabled: mods__$15.disabled
    };
    var __$r__$27;
    var __$l1__$28 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$27 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$28;
    __$r__$24 = __$r__$27;
    __$ctx._menuMods = __$l0__$25;
    return;
}

function __$b21(__$ctx, __$ref) {
    var mods__$9 = $$mods;
    mods__$9.theme = mods__$9.theme || __$ctx._menuMods.theme;
    mods__$9.disabled = mods__$9.disabled || __$ctx._menuMods.disabled;
    var __$r__$11;
    var __$l0__$12 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$12;
    return;
}

function __$b22(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$40 = __$ctx.ctx;
    var __$r__$42;
    var __$l0__$43 = $$mode;
    $$mode = "";
    var __$l1__$44 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$40.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$40.title
            }, {
                block: "ua"
            }, ctx__$40.head, ctx__$40.styles, ctx__$40.favicon ? {
                elem: "favicon",
                url: ctx__$40.favicon
            } : "" ]
        }, ctx__$40 ]
    } ];
    var __$r__$46;
    var __$l2__$47 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$46 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$47;
    __$r__$42 = __$r__$46;
    $$mode = __$l0__$43;
    __$ctx.ctx = __$l1__$44;
    __$ctx._defPageApplied = false;
    return;
}

function __$b23(__$ctx, __$ref) {
    var BEM_INTERNAL__$48 = __$ctx.BEM.INTERNAL, ctx__$49 = __$ctx.ctx, isBEM__$50, tag__$51, res__$52;
    var __$r__$54;
    var __$l0__$55 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$56 = $$block;
    var __$r__$58;
    var __$l1__$59 = $$mode;
    $$mode = "tag";
    __$r__$58 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$59;
    tag__$51 = __$r__$58;
    typeof tag__$51 !== "undefined" || (tag__$51 = ctx__$49.tag);
    typeof tag__$51 !== "undefined" || (tag__$51 = "div");
    if (tag__$51) {
        var jsParams__$60, js__$61;
        if (vBlock__$56 && ctx__$49.js !== false) {
            var __$r__$62;
            var __$l2__$63 = $$mode;
            $$mode = "js";
            __$r__$62 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$63;
            js__$61 = __$r__$62;
            js__$61 = js__$61 ? __$ctx.extend(ctx__$49.js, js__$61 === true ? {} : js__$61) : ctx__$49.js === true ? {} : ctx__$49.js;
            js__$61 && ((jsParams__$60 = {})[BEM_INTERNAL__$48.buildClass(vBlock__$56, ctx__$49.elem)] = js__$61);
        }
        __$ctx._str += "<" + tag__$51;
        var __$r__$64;
        var __$l3__$65 = $$mode;
        $$mode = "bem";
        __$r__$64 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$65;
        isBEM__$50 = __$r__$64;
        typeof isBEM__$50 !== "undefined" || (isBEM__$50 = typeof ctx__$49.bem !== "undefined" ? ctx__$49.bem : ctx__$49.block || ctx__$49.elem);
        var __$r__$67;
        var __$l4__$68 = $$mode;
        $$mode = "cls";
        __$r__$67 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$68;
        var cls__$66 = __$r__$67;
        cls__$66 || (cls__$66 = ctx__$49.cls);
        var addJSInitClass__$69 = ctx__$49.block && jsParams__$60 && !ctx__$49.elem;
        if (isBEM__$50 || cls__$66) {
            __$ctx._str += ' class="';
            if (isBEM__$50) {
                __$ctx._str += BEM_INTERNAL__$48.buildClasses(vBlock__$56, ctx__$49.elem, ctx__$49.elemMods || ctx__$49.mods);
                var __$r__$71;
                var __$l5__$72 = $$mode;
                $$mode = "mix";
                __$r__$71 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$72;
                var mix__$70 = __$r__$71;
                ctx__$49.mix && (mix__$70 = mix__$70 ? [].concat(mix__$70, ctx__$49.mix) : ctx__$49.mix);
                if (mix__$70) {
                    var visited__$73 = {}, visitedKey__$74 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$73[visitedKey__$74(vBlock__$56, $$elem)] = true;
                    __$ctx.isArray(mix__$70) || (mix__$70 = [ mix__$70 ]);
                    for (var i__$75 = 0; i__$75 < mix__$70.length; i__$75++) {
                        var mixItem__$76 = mix__$70[i__$75], hasItem__$77 = mixItem__$76.block || mixItem__$76.elem, mixBlock__$78 = mixItem__$76.block || mixItem__$76._block || $$block, mixElem__$79 = mixItem__$76.elem || mixItem__$76._elem || $$elem;
                        hasItem__$77 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$48[hasItem__$77 ? "buildClasses" : "buildModsClasses"](mixBlock__$78, mixItem__$76.elem || mixItem__$76._elem || (mixItem__$76.block ? undefined : $$elem), mixItem__$76.elemMods || mixItem__$76.mods);
                        if (mixItem__$76.js) {
                            (jsParams__$60 || (jsParams__$60 = {}))[BEM_INTERNAL__$48.buildClass(mixBlock__$78, mixItem__$76.elem)] = mixItem__$76.js === true ? {} : mixItem__$76.js;
                            addJSInitClass__$69 || (addJSInitClass__$69 = mixBlock__$78 && !mixItem__$76.elem);
                        }
                        if (hasItem__$77 && !visited__$73[visitedKey__$74(mixBlock__$78, mixElem__$79)]) {
                            visited__$73[visitedKey__$74(mixBlock__$78, mixElem__$79)] = true;
                            var __$r__$81;
                            var __$l6__$82 = $$mode;
                            $$mode = "mix";
                            var __$l7__$83 = $$block;
                            $$block = mixBlock__$78;
                            var __$l8__$84 = $$elem;
                            $$elem = mixElem__$79;
                            __$r__$81 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$82;
                            $$block = __$l7__$83;
                            $$elem = __$l8__$84;
                            var nestedMix__$80 = __$r__$81;
                            if (nestedMix__$80) {
                                for (var j__$85 = 0; j__$85 < nestedMix__$80.length; j__$85++) {
                                    var nestedItem__$86 = nestedMix__$80[j__$85];
                                    if (!nestedItem__$86.block && !nestedItem__$86.elem || !visited__$73[visitedKey__$74(nestedItem__$86.block, nestedItem__$86.elem)]) {
                                        nestedItem__$86._block = mixBlock__$78;
                                        nestedItem__$86._elem = mixElem__$79;
                                        mix__$70.splice(i__$75 + 1, 0, nestedItem__$86);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$66 && (__$ctx._str += isBEM__$50 ? " " + cls__$66 : cls__$66);
            __$ctx._str += addJSInitClass__$69 ? ' i-bem"' : '"';
        }
        if (isBEM__$50 && jsParams__$60) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$60)) + '"';
        }
        var __$r__$88;
        var __$l9__$89 = $$mode;
        $$mode = "attrs";
        __$r__$88 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$89;
        var attrs__$87 = __$r__$88;
        attrs__$87 = __$ctx.extend(attrs__$87, ctx__$49.attrs);
        if (attrs__$87) {
            var name__$90, attr__$91;
            for (name__$90 in attrs__$87) {
                attr__$91 = attrs__$87[name__$90];
                if (typeof attr__$91 === "undefined") continue;
                __$ctx._str += " " + name__$90 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$91) ? attr__$91 : __$ctx.reapply(attr__$91)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$51)) {
        __$ctx._str += "/>";
    } else {
        tag__$51 && (__$ctx._str += ">");
        var __$r__$93;
        var __$l10__$94 = $$mode;
        $$mode = "content";
        __$r__$93 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$94;
        var content__$92 = __$r__$93;
        if (content__$92 || content__$92 === 0) {
            isBEM__$50 = vBlock__$56 || $$elem;
            var __$r__$95;
            var __$l11__$96 = $$mode;
            $$mode = "";
            var __$l12__$97 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$98 = __$ctx.position;
            __$ctx.position = isBEM__$50 ? 1 : __$ctx.position;
            var __$l14__$99 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$50 ? 1 : __$ctx._listLength;
            var __$l15__$100 = __$ctx.ctx;
            __$ctx.ctx = content__$92;
            __$r__$95 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$96;
            __$ctx._notNewList = __$l12__$97;
            __$ctx.position = __$l13__$98;
            __$ctx._listLength = __$l14__$99;
            __$ctx.ctx = __$l15__$100;
        }
        tag__$51 && (__$ctx._str += "</" + tag__$51 + ">");
    }
    res__$52 = __$ctx._str;
    __$r__$54 = undefined;
    __$ctx._str = __$l0__$55;
    __$ctx._buf.push(res__$52);
    return;
}

function __$b25(__$ctx, __$ref) {
    var mix__$29 = function __$lb__$30() {
        var __$r__$31;
        var __$l0__$32 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32;
        __$r__$31 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$32;
        return __$r__$31;
    }(), uaMix__$33 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$29 ? uaMix__$33.concat(mix__$29) : uaMix__$33;
}

function __$b46(__$ctx, __$ref) {
    var __$r__$102;
    var __$l0__$103 = $$mode;
    $$mode = "";
    var __$l1__$104 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$106;
    var __$l2__$107 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$106 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$107;
    __$r__$102 = __$r__$106;
    $$mode = __$l0__$103;
    __$ctx.ctx = __$l1__$104;
    return;
}

function __$b47(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$108 = __$ctx.ctx;
    if (ctx__$108 && ctx__$108 !== true || ctx__$108 === 0) {
        __$ctx._str += ctx__$108 + "";
    }
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b49(__$ctx, __$ref) {
    var ctx__$109 = __$ctx.ctx, len__$110 = ctx__$109.length, i__$111 = 0, prevPos__$112 = __$ctx.position, prevNotNewList__$113 = __$ctx._notNewList;
    if (prevNotNewList__$113) {
        __$ctx._listLength += len__$110 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$110;
    }
    __$ctx._notNewList = true;
    while (i__$111 < len__$110) (function __$lb__$114() {
        var __$r__$115;
        var __$l0__$116 = __$ctx.ctx;
        __$ctx.ctx = ctx__$109[i__$111++];
        __$r__$115 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$116;
        return __$r__$115;
    })();
    prevNotNewList__$113 || (__$ctx.position = prevPos__$112);
    return;
}

function __$b50(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$117 = __$ctx.ctx.block, vElem__$118 = __$ctx.ctx.elem, block__$119 = __$ctx._currBlock || $$block;
    var __$r__$121;
    var __$l0__$122 = $$mode;
    $$mode = "default";
    var __$l1__$123 = $$block;
    $$block = vBlock__$117 || (vElem__$118 ? block__$119 : undefined);
    var __$l2__$124 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$117 || vElem__$118 ? undefined : block__$119;
    var __$l3__$125 = $$elem;
    $$elem = vElem__$118;
    var __$l4__$126 = $$mods;
    $$mods = vBlock__$117 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$127 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$121 = undefined;
    $$mode = __$l0__$122;
    $$block = __$l1__$123;
    __$ctx._currBlock = __$l2__$124;
    $$elem = __$l3__$125;
    $$mods = __$l4__$126;
    $$elemMods = __$l5__$127;
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