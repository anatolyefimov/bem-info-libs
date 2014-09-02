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
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g4(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
            } else if (__$t === "link") {
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32768) === 0) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b73(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b74(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b75(__$ctx, __$ref);
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
        ctx["_button"] = undefined;
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
    var attrs__$12 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$12.tabindex = 0);
    return attrs__$12;
}

function __$b7(__$ctx, __$ref) {
    var ctx__$24 = __$ctx.ctx, attrs__$25 = {
        type: $$mods.type || "button",
        name: ctx__$24.name,
        value: ctx__$24.val
    };
    $$mods.disabled && (attrs__$25.disabled = "disabled");
    return __$ctx.extend(function __$lb__$26() {
        var __$r__$27;
        var __$l0__$28 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$27 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$28;
        return __$r__$27;
    }(), attrs__$25);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$29 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$29.tabIndex,
        id: ctx__$29.id,
        title: ctx__$29.title
    };
}

function __$b9(__$ctx, __$ref) {
    var ctx__$43 = __$ctx.ctx, attrs__$44 = {}, tabIndex__$45;
    if (!$$mods.disabled) {
        if (ctx__$43.url) {
            attrs__$44.href = ctx__$43.url;
            tabIndex__$45 = ctx__$43.tabIndex;
        } else {
            tabIndex__$45 = ctx__$43.tabIndex || 0;
        }
    }
    typeof tabIndex__$45 === "undefined" || (attrs__$44.tabindex = tabIndex__$45);
    ctx__$43.title && (attrs__$44.title = ctx__$43.title);
    ctx__$43.target && (attrs__$44.target = ctx__$43.target);
    return attrs__$44;
}

function __$b16(__$ctx, __$ref) {
    var ctx__$22 = __$ctx.ctx, content__$23 = [ ctx__$22.icon ];
    "text" in ctx__$22 && content__$23.push({
        elem: "text",
        content: ctx__$22.text
    });
    return content__$23;
}

function __$b17(__$ctx, __$ref) {
    var content__$36 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$36)) return content__$36;
    var res__$37 = __$ctx.isSimple(content__$36) ? {
        block: "button",
        text: content__$36
    } : content__$36;
    if (res__$37.block === "button") {
        var resMods__$38 = res__$37.mods || (res__$37.mods = {}), dropdownMods__$39 = $$mods;
        resMods__$38.size || (resMods__$38.size = dropdownMods__$39.size);
        resMods__$38.theme || (resMods__$38.theme = dropdownMods__$39.theme);
        resMods__$38.disabled = dropdownMods__$39.disabled;
    }
    return res__$37;
}

function __$b18(__$ctx, __$ref) {
    var content__$50 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$50)) return content__$50;
    var res__$51 = __$ctx.isSimple(content__$50) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$50
    } : content__$50;
    if (res__$51.block === "link") {
        var resMods__$52 = res__$51.mods || (res__$51.mods = {}), dropdownMods__$53 = $$mods;
        resMods__$52.theme || (resMods__$52.theme = dropdownMods__$53.theme);
        resMods__$52.disabled = dropdownMods__$53.disabled;
    }
    return res__$51;
}

function __$b19(__$ctx, __$ref) {
    var popup__$55 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$55) || popup__$55.block !== "popup") {
        popup__$55 = {
            block: "popup",
            content: popup__$55
        };
    }
    var popupMods__$56 = popup__$55.mods || (popup__$55.mods = {});
    popupMods__$56.theme || (popupMods__$56.theme = $$mods.theme);
    popupMods__$56.hasOwnProperty("autoclosable") || (popupMods__$56.autoclosable = true);
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$55 ];
}

function __$b33(__$ctx, __$ref) {
    var ctx__$54 = __$ctx.ctx;
    return {
        mainOffset: ctx__$54.mainOffset,
        secondaryOffset: ctx__$54.secondaryOffset,
        viewportOffset: ctx__$54.viewportOffset,
        directions: ctx__$54.directions,
        zIndexGroupLevel: ctx__$54.zIndexGroupLevel
    };
}

function __$b35(__$ctx, __$ref) {
    var __$r__$14;
    var __$l0__$15 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._menuMods = __$l0__$15;
    delete __$ctx._menuTheme;
    return;
}

function __$b36(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$10;
    var __$l0__$11 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$10 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$11;
    return;
}

function __$b37(__$ctx, __$ref) {
    var __$r__$31;
    var __$l0__$32 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$34;
    var __$l1__$35 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$34 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$35;
    __$r__$31 = __$r__$34;
    __$ctx._button = __$l0__$32;
    return;
}

function __$b38(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx;
    typeof ctx__$46.url === "object" && (ctx__$46.url = __$ctx.reapply(ctx__$46.url));
    var __$r__$48;
    var __$l0__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$49;
    return;
}

function __$b39(__$ctx, __$ref) {
    var url__$60 = __$ctx.ctx.url;
    var __$r__$62;
    var __$l0__$63 = $$mode;
    $$mode = "";
    var __$l1__$64 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$60 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$66;
    var __$l2__$67 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$66 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$67;
    __$r__$62 = __$r__$66;
    $$mode = __$l0__$63;
    __$ctx.ctx = __$l1__$64;
    return;
}

function __$b40(__$ctx, __$ref) {
    var ie__$68 = __$ctx.ctx.ie, hideRule__$69 = !ie__$68 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$68 === "!IE" ? [ ie__$68, "<!-->", "<!--" ] : [ ie__$68, "", "" ];
    var __$r__$71;
    var __$l0__$72 = $$mode;
    $$mode = "";
    var __$l3__$73 = __$ctx.ctx;
    var __$l1__$74 = __$l3__$73._ieCommented;
    __$l3__$73._ieCommented = true;
    var __$l2__$75 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$69[0] + "]>" + hideRule__$69[1], __$ctx.ctx, hideRule__$69[2] + "<![endif]-->" ];
    __$r__$71 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$72;
    __$l3__$73._ieCommented = __$l1__$74;
    __$ctx.ctx = __$l2__$75;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$82 = __$ctx.ctx;
    var __$r__$84;
    var __$l0__$85 = $$mode;
    $$mode = "";
    var __$l1__$86 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$82.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$82.title
            }, {
                block: "ua"
            }, ctx__$82.head, ctx__$82.styles, ctx__$82.favicon ? {
                elem: "favicon",
                url: ctx__$82.favicon
            } : "" ]
        }, ctx__$82 ]
    } ];
    var __$r__$88;
    var __$l2__$89 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$88 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$89;
    __$r__$84 = __$r__$88;
    $$mode = __$l0__$85;
    __$ctx.ctx = __$l1__$86;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$90 = __$ctx.BEM.INTERNAL, ctx__$91 = __$ctx.ctx, isBEM__$92, tag__$93, res__$94;
    var __$r__$96;
    var __$l0__$97 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$98 = $$block;
    var __$r__$100;
    var __$l1__$101 = $$mode;
    $$mode = "tag";
    __$r__$100 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$101;
    tag__$93 = __$r__$100;
    typeof tag__$93 !== "undefined" || (tag__$93 = ctx__$91.tag);
    typeof tag__$93 !== "undefined" || (tag__$93 = "div");
    if (tag__$93) {
        var jsParams__$102, js__$103;
        if (vBlock__$98 && ctx__$91.js !== false) {
            var __$r__$104;
            var __$l2__$105 = $$mode;
            $$mode = "js";
            __$r__$104 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$105;
            js__$103 = __$r__$104;
            js__$103 = js__$103 ? __$ctx.extend(ctx__$91.js, js__$103 === true ? {} : js__$103) : ctx__$91.js === true ? {} : ctx__$91.js;
            js__$103 && ((jsParams__$102 = {})[BEM_INTERNAL__$90.buildClass(vBlock__$98, ctx__$91.elem)] = js__$103);
        }
        __$ctx._str += "<" + tag__$93;
        var __$r__$106;
        var __$l3__$107 = $$mode;
        $$mode = "bem";
        __$r__$106 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$107;
        isBEM__$92 = __$r__$106;
        typeof isBEM__$92 !== "undefined" || (isBEM__$92 = typeof ctx__$91.bem !== "undefined" ? ctx__$91.bem : ctx__$91.block || ctx__$91.elem);
        var __$r__$109;
        var __$l4__$110 = $$mode;
        $$mode = "cls";
        __$r__$109 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$110;
        var cls__$108 = __$r__$109;
        cls__$108 || (cls__$108 = ctx__$91.cls);
        var addJSInitClass__$111 = ctx__$91.block && jsParams__$102;
        if (isBEM__$92 || cls__$108) {
            __$ctx._str += ' class="';
            if (isBEM__$92) {
                __$ctx._str += BEM_INTERNAL__$90.buildClasses(vBlock__$98, ctx__$91.elem, ctx__$91.elemMods || ctx__$91.mods);
                var __$r__$113;
                var __$l5__$114 = $$mode;
                $$mode = "mix";
                __$r__$113 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$114;
                var mix__$112 = __$r__$113;
                ctx__$91.mix && (mix__$112 = mix__$112 ? [].concat(mix__$112, ctx__$91.mix) : ctx__$91.mix);
                if (mix__$112) {
                    var visited__$115 = {}, visitedKey__$116 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$115[visitedKey__$116(vBlock__$98, $$elem)] = true;
                    __$ctx.isArray(mix__$112) || (mix__$112 = [ mix__$112 ]);
                    for (var i__$117 = 0; i__$117 < mix__$112.length; i__$117++) {
                        var mixItem__$118 = mix__$112[i__$117], hasItem__$119 = mixItem__$118.block || mixItem__$118.elem, mixBlock__$120 = mixItem__$118.block || mixItem__$118._block || $$block, mixElem__$121 = mixItem__$118.elem || mixItem__$118._elem || $$elem;
                        hasItem__$119 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$90[hasItem__$119 ? "buildClasses" : "buildModsClasses"](mixBlock__$120, mixItem__$118.elem || mixItem__$118._elem || (mixItem__$118.block ? undefined : $$elem), mixItem__$118.elemMods || mixItem__$118.mods);
                        if (mixItem__$118.js) {
                            (jsParams__$102 || (jsParams__$102 = {}))[BEM_INTERNAL__$90.buildClass(mixBlock__$120, mixItem__$118.elem)] = mixItem__$118.js === true ? {} : mixItem__$118.js;
                            addJSInitClass__$111 || (addJSInitClass__$111 = mixBlock__$120 && !mixItem__$118.elem);
                        }
                        if (hasItem__$119 && !visited__$115[visitedKey__$116(mixBlock__$120, mixElem__$121)]) {
                            visited__$115[visitedKey__$116(mixBlock__$120, mixElem__$121)] = true;
                            var __$r__$123;
                            var __$l6__$124 = $$mode;
                            $$mode = "mix";
                            var __$l7__$125 = $$block;
                            $$block = mixBlock__$120;
                            var __$l8__$126 = $$elem;
                            $$elem = mixElem__$121;
                            __$r__$123 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$124;
                            $$block = __$l7__$125;
                            $$elem = __$l8__$126;
                            var nestedMix__$122 = __$r__$123;
                            if (nestedMix__$122) {
                                for (var j__$127 = 0; j__$127 < nestedMix__$122.length; j__$127++) {
                                    var nestedItem__$128 = nestedMix__$122[j__$127];
                                    if (!nestedItem__$128.block && !nestedItem__$128.elem || !visited__$115[visitedKey__$116(nestedItem__$128.block, nestedItem__$128.elem)]) {
                                        nestedItem__$128._block = mixBlock__$120;
                                        nestedItem__$128._elem = mixElem__$121;
                                        mix__$112.splice(i__$117 + 1, 0, nestedItem__$128);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$108 && (__$ctx._str += isBEM__$92 ? " " + cls__$108 : cls__$108);
            __$ctx._str += addJSInitClass__$111 ? ' i-bem"' : '"';
        }
        if (isBEM__$92 && jsParams__$102) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$102)) + '"';
        }
        var __$r__$130;
        var __$l9__$131 = $$mode;
        $$mode = "attrs";
        __$r__$130 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$131;
        var attrs__$129 = __$r__$130;
        attrs__$129 = __$ctx.extend(attrs__$129, ctx__$91.attrs);
        if (attrs__$129) {
            var name__$132, attr__$133;
            for (name__$132 in attrs__$129) {
                attr__$133 = attrs__$129[name__$132];
                if (typeof attr__$133 === "undefined") continue;
                __$ctx._str += " " + name__$132 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$133) ? attr__$133 : __$ctx.reapply(attr__$133)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$93)) {
        __$ctx._str += "/>";
    } else {
        tag__$93 && (__$ctx._str += ">");
        var __$r__$135;
        var __$l10__$136 = $$mode;
        $$mode = "content";
        __$r__$135 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$136;
        var content__$134 = __$r__$135;
        if (content__$134 || content__$134 === 0) {
            isBEM__$92 = vBlock__$98 || $$elem;
            var __$r__$137;
            var __$l11__$138 = $$mode;
            $$mode = "";
            var __$l12__$139 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$140 = __$ctx.position;
            __$ctx.position = isBEM__$92 ? 1 : __$ctx.position;
            var __$l14__$141 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$92 ? 1 : __$ctx._listLength;
            var __$l15__$142 = __$ctx.ctx;
            __$ctx.ctx = content__$134;
            __$r__$137 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$138;
            __$ctx._notNewList = __$l12__$139;
            __$ctx.position = __$l13__$140;
            __$ctx._listLength = __$l14__$141;
            __$ctx.ctx = __$l15__$142;
        }
        tag__$93 && (__$ctx._str += "</" + tag__$93 + ">");
    }
    res__$94 = __$ctx._str;
    __$r__$96 = undefined;
    __$ctx._str = __$l0__$97;
    __$ctx._buf.push(res__$94);
    return;
}

function __$b71(__$ctx, __$ref) {
    var __$r__$144;
    var __$l0__$145 = $$mode;
    $$mode = "";
    var __$l1__$146 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$148;
    var __$l2__$149 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$148 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$149;
    __$r__$144 = __$r__$148;
    $$mode = __$l0__$145;
    __$ctx.ctx = __$l1__$146;
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$150 = __$ctx.ctx;
    if (ctx__$150 && ctx__$150 !== true || ctx__$150 === 0) {
        __$ctx._str += ctx__$150 + "";
    }
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ctx__$151 = __$ctx.ctx, len__$152 = ctx__$151.length, i__$153 = 0, prevPos__$154 = __$ctx.position, prevNotNewList__$155 = __$ctx._notNewList;
    if (prevNotNewList__$155) {
        __$ctx._listLength += len__$152 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$152;
    }
    __$ctx._notNewList = true;
    while (i__$153 < len__$152) (function __$lb__$156() {
        var __$r__$157;
        var __$l0__$158 = __$ctx.ctx;
        __$ctx.ctx = ctx__$151[i__$153++];
        __$r__$157 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$158;
        return __$r__$157;
    })();
    prevNotNewList__$155 || (__$ctx.position = prevPos__$154);
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$159 = __$ctx.ctx.block, vElem__$160 = __$ctx.ctx.elem, block__$161 = __$ctx._currBlock || $$block;
    var __$r__$163;
    var __$l0__$164 = $$mode;
    $$mode = "default";
    var __$l1__$165 = $$block;
    $$block = vBlock__$159 || (vElem__$160 ? block__$161 : undefined);
    var __$l2__$166 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$159 || vElem__$160 ? undefined : block__$161;
    var __$l3__$167 = $$elem;
    $$elem = vElem__$160;
    var __$l4__$168 = $$mods;
    $$mods = vBlock__$159 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$169 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$163 = undefined;
    $$mode = __$l0__$164;
    $$block = __$l1__$165;
    __$ctx._currBlock = __$l2__$166;
    $$elem = __$l3__$167;
    $$mods = __$l4__$168;
    $$elemMods = __$l5__$169;
    return;
}

function __$g0(__$ctx, __$ref) {
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
    } else if (__$t === "button") {
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b7(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b8(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b9(__$ctx, __$ref);
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
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
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
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b16(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "button") {
                    var __$r = __$b17(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "link") {
                    var __$r = __$b18(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b19(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 1024) === 0) {
                return [ function __$lb__$57() {
                    var __$r__$58;
                    var __$l0__$59 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                    __$r__$58 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$59;
                    return __$r__$58;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 4096) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$76() {
                var __$r__$77;
                var __$l0__$78 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$77 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$78;
                return __$r__$77;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            return [ function __$lb__$79() {
                var __$r__$80;
                var __$l0__$81 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                __$r__$80 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$81;
                return __$r__$80;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
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
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$ctx.extend(function __$lb__$19() {
                    var __$r__$20;
                    var __$l0__$21 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$20 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$21;
                    return __$r__$20;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "dropdown") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$40() {
                    var __$r__$41;
                    var __$l0__$42 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$41 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$42;
                    return __$r__$41;
                }(), {
                    url: __$ctx.ctx.url
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    return undefined;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        if (!$$elem && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 2048) === 0) {
                        var __$r = __$b39(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b40(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b42(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "dropdown") {
        if ($$elem === "switcher") {
            return false;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["pseudo"] === true && !__$ctx.ctx.url) {
                return "span";
            }
            return "a";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "link") {
            return "link";
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
    return __$ref;
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