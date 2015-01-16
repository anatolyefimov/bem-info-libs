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
    var attrs__$13 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$13.tabindex = 0);
    return attrs__$13;
}

function __$b7(__$ctx, __$ref) {
    var ctx__$34 = __$ctx.ctx, attrs__$35 = {
        type: $$mods.type || "button",
        name: ctx__$34.name,
        value: ctx__$34.val
    };
    $$mods.disabled && (attrs__$35.disabled = "disabled");
    return __$ctx.extend(function __$lb__$36() {
        var __$r__$37;
        var __$l0__$38 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$37 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$38;
        return __$r__$37;
    }(), attrs__$35);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$39 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$39.tabIndex,
        id: ctx__$39.id,
        title: ctx__$39.title
    };
}

function __$b9(__$ctx, __$ref) {
    var ctx__$53 = __$ctx.ctx, attrs__$54 = {}, tabIndex__$55;
    if (!$$mods.disabled) {
        if (ctx__$53.url) {
            attrs__$54.href = ctx__$53.url;
            tabIndex__$55 = ctx__$53.tabIndex;
        } else {
            tabIndex__$55 = ctx__$53.tabIndex || 0;
        }
    }
    typeof tabIndex__$55 === "undefined" || (attrs__$54.tabindex = tabIndex__$55);
    ctx__$53.title && (attrs__$54.title = ctx__$53.title);
    ctx__$53.target && (attrs__$54.target = ctx__$53.target);
    return attrs__$54;
}

function __$b16(__$ctx, __$ref) {
    var ctx__$32 = __$ctx.ctx, content__$33 = [ ctx__$32.icon ];
    "text" in ctx__$32 && content__$33.push({
        elem: "text",
        content: ctx__$32.text
    });
    return content__$33;
}

function __$b17(__$ctx, __$ref) {
    var content__$46 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$46)) return content__$46;
    var res__$47 = __$ctx.isSimple(content__$46) ? {
        block: "button",
        text: content__$46
    } : content__$46;
    if (res__$47.block === "button") {
        var resMods__$48 = res__$47.mods || (res__$47.mods = {}), dropdownMods__$49 = $$mods;
        resMods__$48.size || (resMods__$48.size = dropdownMods__$49.size);
        resMods__$48.theme || (resMods__$48.theme = dropdownMods__$49.theme);
        resMods__$48.disabled = dropdownMods__$49.disabled;
    }
    return res__$47;
}

function __$b18(__$ctx, __$ref) {
    var content__$60 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$60)) return content__$60;
    var res__$61 = __$ctx.isSimple(content__$60) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$60
    } : content__$60;
    if (res__$61.block === "link") {
        var resMods__$62 = res__$61.mods || (res__$61.mods = {}), dropdownMods__$63 = $$mods;
        resMods__$62.theme || (resMods__$62.theme = dropdownMods__$63.theme);
        resMods__$62.disabled = dropdownMods__$63.disabled;
    }
    return res__$61;
}

function __$b19(__$ctx, __$ref) {
    var popup__$65 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$65) || popup__$65.block !== "popup") {
        popup__$65 = {
            block: "popup",
            content: popup__$65
        };
    }
    var popupMods__$66 = popup__$65.mods || (popup__$65.mods = {});
    popupMods__$66.theme || (popupMods__$66.theme = $$mods.theme);
    popupMods__$66.hasOwnProperty("autoclosable") || (popupMods__$66.autoclosable = true);
    popupMods__$66.target = "anchor";
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$65 ];
}

function __$b33(__$ctx, __$ref) {
    var ctx__$64 = __$ctx.ctx;
    return {
        mainOffset: ctx__$64.mainOffset,
        secondaryOffset: ctx__$64.secondaryOffset,
        viewportOffset: ctx__$64.viewportOffset,
        directions: ctx__$64.directions,
        zIndexGroupLevel: ctx__$64.zIndexGroupLevel
    };
}

function __$b35(__$ctx, __$ref) {
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

function __$b36(__$ctx, __$ref) {
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

function __$b37(__$ctx, __$ref) {
    var __$r__$41;
    var __$l0__$42 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$44;
    var __$l1__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$45;
    __$r__$41 = __$r__$44;
    __$ctx._button = __$l0__$42;
    return;
}

function __$b38(__$ctx, __$ref) {
    var ctx__$56 = __$ctx.ctx;
    typeof ctx__$56.url === "object" && (ctx__$56.url = __$ctx.reapply(ctx__$56.url));
    var __$r__$58;
    var __$l0__$59 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$58 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$59;
    return;
}

function __$b39(__$ctx, __$ref) {
    var url__$70 = __$ctx.ctx.url;
    var __$r__$72;
    var __$l0__$73 = $$mode;
    $$mode = "";
    var __$l1__$74 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$70 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$76;
    var __$l2__$77 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$76 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$77;
    __$r__$72 = __$r__$76;
    $$mode = __$l0__$73;
    __$ctx.ctx = __$l1__$74;
    return;
}

function __$b40(__$ctx, __$ref) {
    var ie__$78 = __$ctx.ctx.ie, hideRule__$79 = !ie__$78 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$78 === "!IE" ? [ ie__$78, "<!-->", "<!--" ] : [ ie__$78, "", "" ];
    var __$r__$81;
    var __$l0__$82 = $$mode;
    $$mode = "";
    var __$l3__$83 = __$ctx.ctx;
    var __$l1__$84 = __$l3__$83._ieCommented;
    __$l3__$83._ieCommented = true;
    var __$l2__$85 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$79[0] + "]>" + hideRule__$79[1], __$ctx.ctx, hideRule__$79[2] + "<![endif]-->" ];
    __$r__$81 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$82;
    __$l3__$83._ieCommented = __$l1__$84;
    __$ctx.ctx = __$l2__$85;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$92 = __$ctx.ctx;
    var __$r__$94;
    var __$l0__$95 = $$mode;
    $$mode = "";
    var __$l1__$96 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$92.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$92.title
            }, {
                block: "ua"
            }, ctx__$92.head, ctx__$92.styles, ctx__$92.favicon ? {
                elem: "favicon",
                url: ctx__$92.favicon
            } : "" ]
        }, ctx__$92 ]
    } ];
    var __$r__$98;
    var __$l2__$99 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$98 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$99;
    __$r__$94 = __$r__$98;
    $$mode = __$l0__$95;
    __$ctx.ctx = __$l1__$96;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$100 = __$ctx.BEM.INTERNAL, ctx__$101 = __$ctx.ctx, isBEM__$102, tag__$103, res__$104;
    var __$r__$106;
    var __$l0__$107 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$108 = $$block;
    var __$r__$110;
    var __$l1__$111 = $$mode;
    $$mode = "tag";
    __$r__$110 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$111;
    tag__$103 = __$r__$110;
    typeof tag__$103 !== "undefined" || (tag__$103 = ctx__$101.tag);
    typeof tag__$103 !== "undefined" || (tag__$103 = "div");
    if (tag__$103) {
        var jsParams__$112, js__$113;
        if (vBlock__$108 && ctx__$101.js !== false) {
            var __$r__$114;
            var __$l2__$115 = $$mode;
            $$mode = "js";
            __$r__$114 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$115;
            js__$113 = __$r__$114;
            js__$113 = js__$113 ? __$ctx.extend(ctx__$101.js, js__$113 === true ? {} : js__$113) : ctx__$101.js === true ? {} : ctx__$101.js;
            js__$113 && ((jsParams__$112 = {})[BEM_INTERNAL__$100.buildClass(vBlock__$108, ctx__$101.elem)] = js__$113);
        }
        __$ctx._str += "<" + tag__$103;
        var __$r__$116;
        var __$l3__$117 = $$mode;
        $$mode = "bem";
        __$r__$116 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$117;
        isBEM__$102 = __$r__$116;
        typeof isBEM__$102 !== "undefined" || (isBEM__$102 = typeof ctx__$101.bem !== "undefined" ? ctx__$101.bem : ctx__$101.block || ctx__$101.elem);
        var __$r__$119;
        var __$l4__$120 = $$mode;
        $$mode = "cls";
        __$r__$119 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$120;
        var cls__$118 = __$r__$119;
        cls__$118 || (cls__$118 = ctx__$101.cls);
        var addJSInitClass__$121 = ctx__$101.block && jsParams__$112 && !ctx__$101.elem;
        if (isBEM__$102 || cls__$118) {
            __$ctx._str += ' class="';
            if (isBEM__$102) {
                __$ctx._str += BEM_INTERNAL__$100.buildClasses(vBlock__$108, ctx__$101.elem, ctx__$101.elemMods || ctx__$101.mods);
                var __$r__$123;
                var __$l5__$124 = $$mode;
                $$mode = "mix";
                __$r__$123 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$124;
                var mix__$122 = __$r__$123;
                ctx__$101.mix && (mix__$122 = mix__$122 ? [].concat(mix__$122, ctx__$101.mix) : ctx__$101.mix);
                if (mix__$122) {
                    var visited__$125 = {}, visitedKey__$126 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$125[visitedKey__$126(vBlock__$108, $$elem)] = true;
                    __$ctx.isArray(mix__$122) || (mix__$122 = [ mix__$122 ]);
                    for (var i__$127 = 0; i__$127 < mix__$122.length; i__$127++) {
                        var mixItem__$128 = mix__$122[i__$127], hasItem__$129 = mixItem__$128.block || mixItem__$128.elem, mixBlock__$130 = mixItem__$128.block || mixItem__$128._block || $$block, mixElem__$131 = mixItem__$128.elem || mixItem__$128._elem || $$elem;
                        hasItem__$129 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$100[hasItem__$129 ? "buildClasses" : "buildModsClasses"](mixBlock__$130, mixItem__$128.elem || mixItem__$128._elem || (mixItem__$128.block ? undefined : $$elem), mixItem__$128.elemMods || mixItem__$128.mods);
                        if (mixItem__$128.js) {
                            (jsParams__$112 || (jsParams__$112 = {}))[BEM_INTERNAL__$100.buildClass(mixBlock__$130, mixItem__$128.elem)] = mixItem__$128.js === true ? {} : mixItem__$128.js;
                            addJSInitClass__$121 || (addJSInitClass__$121 = mixBlock__$130 && !mixItem__$128.elem);
                        }
                        if (hasItem__$129 && !visited__$125[visitedKey__$126(mixBlock__$130, mixElem__$131)]) {
                            visited__$125[visitedKey__$126(mixBlock__$130, mixElem__$131)] = true;
                            var __$r__$133;
                            var __$l6__$134 = $$mode;
                            $$mode = "mix";
                            var __$l7__$135 = $$block;
                            $$block = mixBlock__$130;
                            var __$l8__$136 = $$elem;
                            $$elem = mixElem__$131;
                            __$r__$133 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$134;
                            $$block = __$l7__$135;
                            $$elem = __$l8__$136;
                            var nestedMix__$132 = __$r__$133;
                            if (nestedMix__$132) {
                                for (var j__$137 = 0; j__$137 < nestedMix__$132.length; j__$137++) {
                                    var nestedItem__$138 = nestedMix__$132[j__$137];
                                    if (!nestedItem__$138.block && !nestedItem__$138.elem || !visited__$125[visitedKey__$126(nestedItem__$138.block, nestedItem__$138.elem)]) {
                                        nestedItem__$138._block = mixBlock__$130;
                                        nestedItem__$138._elem = mixElem__$131;
                                        mix__$122.splice(i__$127 + 1, 0, nestedItem__$138);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$118 && (__$ctx._str += isBEM__$102 ? " " + cls__$118 : cls__$118);
            __$ctx._str += addJSInitClass__$121 ? ' i-bem"' : '"';
        }
        if (isBEM__$102 && jsParams__$112) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$112)) + '"';
        }
        var __$r__$140;
        var __$l9__$141 = $$mode;
        $$mode = "attrs";
        __$r__$140 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$141;
        var attrs__$139 = __$r__$140;
        attrs__$139 = __$ctx.extend(attrs__$139, ctx__$101.attrs);
        if (attrs__$139) {
            var name__$142, attr__$143;
            for (name__$142 in attrs__$139) {
                attr__$143 = attrs__$139[name__$142];
                if (typeof attr__$143 === "undefined") continue;
                __$ctx._str += " " + name__$142 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$143) ? attr__$143 : __$ctx.reapply(attr__$143)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$103)) {
        __$ctx._str += "/>";
    } else {
        tag__$103 && (__$ctx._str += ">");
        var __$r__$145;
        var __$l10__$146 = $$mode;
        $$mode = "content";
        __$r__$145 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$146;
        var content__$144 = __$r__$145;
        if (content__$144 || content__$144 === 0) {
            isBEM__$102 = vBlock__$108 || $$elem;
            var __$r__$147;
            var __$l11__$148 = $$mode;
            $$mode = "";
            var __$l12__$149 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$150 = __$ctx.position;
            __$ctx.position = isBEM__$102 ? 1 : __$ctx.position;
            var __$l14__$151 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$102 ? 1 : __$ctx._listLength;
            var __$l15__$152 = __$ctx.ctx;
            __$ctx.ctx = content__$144;
            __$r__$147 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$148;
            __$ctx._notNewList = __$l12__$149;
            __$ctx.position = __$l13__$150;
            __$ctx._listLength = __$l14__$151;
            __$ctx.ctx = __$l15__$152;
        }
        tag__$103 && (__$ctx._str += "</" + tag__$103 + ">");
    }
    res__$104 = __$ctx._str;
    __$r__$106 = undefined;
    __$ctx._str = __$l0__$107;
    __$ctx._buf.push(res__$104);
    return;
}

function __$b71(__$ctx, __$ref) {
    var __$r__$154;
    var __$l0__$155 = $$mode;
    $$mode = "";
    var __$l1__$156 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$158;
    var __$l2__$159 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$158 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$159;
    __$r__$154 = __$r__$158;
    $$mode = __$l0__$155;
    __$ctx.ctx = __$l1__$156;
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$160 = __$ctx.ctx;
    if (ctx__$160 && ctx__$160 !== true || ctx__$160 === 0) {
        __$ctx._str += ctx__$160 + "";
    }
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ctx__$161 = __$ctx.ctx, len__$162 = ctx__$161.length, i__$163 = 0, prevPos__$164 = __$ctx.position, prevNotNewList__$165 = __$ctx._notNewList;
    if (prevNotNewList__$165) {
        __$ctx._listLength += len__$162 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$162;
    }
    __$ctx._notNewList = true;
    while (i__$163 < len__$162) (function __$lb__$166() {
        var __$r__$167;
        var __$l0__$168 = __$ctx.ctx;
        __$ctx.ctx = ctx__$161[i__$163++];
        __$r__$167 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$168;
        return __$r__$167;
    })();
    prevNotNewList__$165 || (__$ctx.position = prevPos__$164);
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$169 = __$ctx.ctx.block, vElem__$170 = __$ctx.ctx.elem, block__$171 = __$ctx._currBlock || $$block;
    var __$r__$173;
    var __$l0__$174 = $$mode;
    $$mode = "default";
    var __$l1__$175 = $$block;
    $$block = vBlock__$169 || (vElem__$170 ? block__$171 : undefined);
    var __$l2__$176 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$169 || vElem__$170 ? undefined : block__$171;
    var __$l3__$177 = $$elem;
    $$elem = vElem__$170;
    var __$l4__$178 = $$mods;
    $$mods = vBlock__$169 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$179 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$173 = undefined;
    $$mode = __$l0__$174;
    $$block = __$l1__$175;
    __$ctx._currBlock = __$l2__$176;
    $$elem = __$l3__$177;
    $$mods = __$l4__$178;
    $$elemMods = __$l5__$179;
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
                return [ function __$lb__$67() {
                    var __$r__$68;
                    var __$l0__$69 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                    __$r__$68 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$69;
                    return __$r__$68;
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
            }, function __$lb__$86() {
                var __$r__$87;
                var __$l0__$88 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$87 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$88;
                return __$r__$87;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            return [ function __$lb__$89() {
                var __$r__$90;
                var __$l0__$91 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                __$r__$90 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$91;
                return __$r__$90;
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
                var __$r = __$ctx.extend(function __$lb__$29() {
                    var __$r__$30;
                    var __$l0__$31 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$30 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$31;
                    return __$r__$30;
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
                var __$r = __$ctx.extend(function __$lb__$50() {
                    var __$r__$51;
                    var __$l0__$52 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$51 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$52;
                    return __$r__$51;
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