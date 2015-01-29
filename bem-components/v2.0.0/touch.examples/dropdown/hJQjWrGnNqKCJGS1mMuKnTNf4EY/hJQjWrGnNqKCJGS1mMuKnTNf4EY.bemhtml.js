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
        } else if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b37(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b39(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "link") {
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
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
                var __$r = __$b43(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g3(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b69(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b70(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b73(__$ctx, __$ref);
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

function __$b6(__$ctx, __$ref) {
    var ctx__$32 = __$ctx.ctx, attrs__$33 = {}, tabIndex__$34;
    if (!$$mods.disabled) {
        if (ctx__$32.url) {
            attrs__$33.href = ctx__$32.url;
            tabIndex__$34 = ctx__$32.tabIndex;
        } else {
            tabIndex__$34 = ctx__$32.tabIndex || 0;
        }
    }
    typeof tabIndex__$34 === "undefined" || (attrs__$33.tabindex = tabIndex__$34);
    ctx__$32.title && (attrs__$33.title = ctx__$32.title);
    ctx__$32.target && (attrs__$33.target = ctx__$32.target);
    return attrs__$33;
}

function __$b7(__$ctx, __$ref) {
    var ctx__$48 = __$ctx.ctx, attrs__$49 = {
        type: $$mods.type || "button",
        name: ctx__$48.name,
        value: ctx__$48.val
    };
    $$mods.disabled && (attrs__$49.disabled = "disabled");
    return __$ctx.extend(function __$lb__$50() {
        var __$r__$51;
        var __$l0__$52 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 256;
        __$r__$51 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$52;
        return __$r__$51;
    }(), attrs__$49);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$53 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$53.tabIndex,
        id: ctx__$53.id,
        title: ctx__$53.title
    };
}

function __$b14(__$ctx, __$ref) {
    var content__$39 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$39)) return content__$39;
    var res__$40 = __$ctx.isSimple(content__$39) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$39
    } : content__$39;
    if (res__$40.block === "link") {
        var resMods__$41 = res__$40.mods || (res__$40.mods = {}), dropdownMods__$42 = $$mods;
        resMods__$41.theme || (resMods__$41.theme = dropdownMods__$42.theme);
        resMods__$41.disabled = dropdownMods__$42.disabled;
    }
    return res__$40;
}

function __$b15(__$ctx, __$ref) {
    var content__$54 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$54)) return content__$54;
    var res__$55 = __$ctx.isSimple(content__$54) ? {
        block: "button",
        text: content__$54
    } : content__$54;
    if (res__$55.block === "button") {
        var resMods__$56 = res__$55.mods || (res__$55.mods = {}), dropdownMods__$57 = $$mods;
        resMods__$56.size || (resMods__$56.size = dropdownMods__$57.size);
        resMods__$56.theme || (resMods__$56.theme = dropdownMods__$57.theme);
        resMods__$56.disabled = dropdownMods__$57.disabled;
    }
    return res__$55;
}

function __$b16(__$ctx, __$ref) {
    var popup__$59 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$59) || popup__$59.block !== "popup") {
        popup__$59 = {
            block: "popup",
            content: popup__$59
        };
    }
    var popupMods__$60 = popup__$59.mods || (popup__$59.mods = {});
    popupMods__$60.theme || (popupMods__$60.theme = $$mods.theme);
    popupMods__$60.hasOwnProperty("autoclosable") || (popupMods__$60.autoclosable = true);
    popupMods__$60.target = "anchor";
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$59 ];
}

function __$b18(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx, content__$47 = [ ctx__$46.icon ];
    "text" in ctx__$46 && content__$47.push({
        elem: "text",
        content: ctx__$46.text
    });
    return content__$47;
}

function __$b32(__$ctx, __$ref) {
    var ctx__$58 = __$ctx.ctx;
    return {
        mainOffset: ctx__$58.mainOffset,
        secondaryOffset: ctx__$58.secondaryOffset,
        viewportOffset: ctx__$58.viewportOffset,
        directions: ctx__$58.directions,
        zIndexGroupLevel: ctx__$58.zIndexGroupLevel
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
    var ctx__$35 = __$ctx.ctx;
    typeof ctx__$35.url === "object" && (ctx__$35.url = __$ctx.reapply(ctx__$35.url));
    var __$r__$37;
    var __$l0__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$38;
    return;
}

function __$b38(__$ctx, __$ref) {
    var ctx__$75 = __$ctx.ctx;
    var __$r__$77;
    var __$l0__$78 = $$mode;
    $$mode = "";
    var __$l1__$79 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$75.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$75.title
            }, {
                block: "ua"
            }, ctx__$75.head, ctx__$75.styles, ctx__$75.favicon ? {
                elem: "favicon",
                url: ctx__$75.favicon
            } : "" ]
        }, ctx__$75 ]
    } ];
    var __$r__$81;
    var __$l2__$82 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$82;
    __$r__$77 = __$r__$81;
    $$mode = __$l0__$78;
    __$ctx.ctx = __$l1__$79;
    return;
}

function __$b39(__$ctx, __$ref) {
    var BEM_INTERNAL__$83 = __$ctx.BEM.INTERNAL, ctx__$84 = __$ctx.ctx, isBEM__$85, tag__$86, res__$87;
    var __$r__$89;
    var __$l0__$90 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$91 = $$block;
    var __$r__$93;
    var __$l1__$94 = $$mode;
    $$mode = "tag";
    __$r__$93 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$94;
    tag__$86 = __$r__$93;
    typeof tag__$86 !== "undefined" || (tag__$86 = ctx__$84.tag);
    typeof tag__$86 !== "undefined" || (tag__$86 = "div");
    if (tag__$86) {
        var jsParams__$95, js__$96;
        if (vBlock__$91 && ctx__$84.js !== false) {
            var __$r__$97;
            var __$l2__$98 = $$mode;
            $$mode = "js";
            __$r__$97 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$98;
            js__$96 = __$r__$97;
            js__$96 = js__$96 ? __$ctx.extend(ctx__$84.js, js__$96 === true ? {} : js__$96) : ctx__$84.js === true ? {} : ctx__$84.js;
            js__$96 && ((jsParams__$95 = {})[BEM_INTERNAL__$83.buildClass(vBlock__$91, ctx__$84.elem)] = js__$96);
        }
        __$ctx._str += "<" + tag__$86;
        var __$r__$99;
        var __$l3__$100 = $$mode;
        $$mode = "bem";
        __$r__$99 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$100;
        isBEM__$85 = __$r__$99;
        typeof isBEM__$85 !== "undefined" || (isBEM__$85 = typeof ctx__$84.bem !== "undefined" ? ctx__$84.bem : ctx__$84.block || ctx__$84.elem);
        var __$r__$102;
        var __$l4__$103 = $$mode;
        $$mode = "cls";
        __$r__$102 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$103;
        var cls__$101 = __$r__$102;
        cls__$101 || (cls__$101 = ctx__$84.cls);
        var addJSInitClass__$104 = ctx__$84.block && jsParams__$95 && !ctx__$84.elem;
        if (isBEM__$85 || cls__$101) {
            __$ctx._str += ' class="';
            if (isBEM__$85) {
                __$ctx._str += BEM_INTERNAL__$83.buildClasses(vBlock__$91, ctx__$84.elem, ctx__$84.elemMods || ctx__$84.mods);
                var __$r__$106;
                var __$l5__$107 = $$mode;
                $$mode = "mix";
                __$r__$106 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$107;
                var mix__$105 = __$r__$106;
                ctx__$84.mix && (mix__$105 = mix__$105 ? [].concat(mix__$105, ctx__$84.mix) : ctx__$84.mix);
                if (mix__$105) {
                    var visited__$108 = {}, visitedKey__$109 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$108[visitedKey__$109(vBlock__$91, $$elem)] = true;
                    __$ctx.isArray(mix__$105) || (mix__$105 = [ mix__$105 ]);
                    for (var i__$110 = 0; i__$110 < mix__$105.length; i__$110++) {
                        var mixItem__$111 = mix__$105[i__$110], hasItem__$112 = mixItem__$111.block || mixItem__$111.elem, mixBlock__$113 = mixItem__$111.block || mixItem__$111._block || $$block, mixElem__$114 = mixItem__$111.elem || mixItem__$111._elem || $$elem;
                        hasItem__$112 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$83[hasItem__$112 ? "buildClasses" : "buildModsClasses"](mixBlock__$113, mixItem__$111.elem || mixItem__$111._elem || (mixItem__$111.block ? undefined : $$elem), mixItem__$111.elemMods || mixItem__$111.mods);
                        if (mixItem__$111.js) {
                            (jsParams__$95 || (jsParams__$95 = {}))[BEM_INTERNAL__$83.buildClass(mixBlock__$113, mixItem__$111.elem)] = mixItem__$111.js === true ? {} : mixItem__$111.js;
                            addJSInitClass__$104 || (addJSInitClass__$104 = mixBlock__$113 && !mixItem__$111.elem);
                        }
                        if (hasItem__$112 && !visited__$108[visitedKey__$109(mixBlock__$113, mixElem__$114)]) {
                            visited__$108[visitedKey__$109(mixBlock__$113, mixElem__$114)] = true;
                            var __$r__$116;
                            var __$l6__$117 = $$mode;
                            $$mode = "mix";
                            var __$l7__$118 = $$block;
                            $$block = mixBlock__$113;
                            var __$l8__$119 = $$elem;
                            $$elem = mixElem__$114;
                            __$r__$116 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$117;
                            $$block = __$l7__$118;
                            $$elem = __$l8__$119;
                            var nestedMix__$115 = __$r__$116;
                            if (nestedMix__$115) {
                                for (var j__$120 = 0; j__$120 < nestedMix__$115.length; j__$120++) {
                                    var nestedItem__$121 = nestedMix__$115[j__$120];
                                    if (!nestedItem__$121.block && !nestedItem__$121.elem || !visited__$108[visitedKey__$109(nestedItem__$121.block, nestedItem__$121.elem)]) {
                                        nestedItem__$121._block = mixBlock__$113;
                                        nestedItem__$121._elem = mixElem__$114;
                                        mix__$105.splice(i__$110 + 1, 0, nestedItem__$121);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$101 && (__$ctx._str += isBEM__$85 ? " " + cls__$101 : cls__$101);
            __$ctx._str += addJSInitClass__$104 ? ' i-bem"' : '"';
        }
        if (isBEM__$85 && jsParams__$95) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$95)) + '"';
        }
        var __$r__$123;
        var __$l9__$124 = $$mode;
        $$mode = "attrs";
        __$r__$123 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$124;
        var attrs__$122 = __$r__$123;
        attrs__$122 = __$ctx.extend(attrs__$122, ctx__$84.attrs);
        if (attrs__$122) {
            var name__$125, attr__$126;
            for (name__$125 in attrs__$122) {
                attr__$126 = attrs__$122[name__$125];
                if (typeof attr__$126 === "undefined") continue;
                __$ctx._str += " " + name__$125 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$126) ? attr__$126 : __$ctx.reapply(attr__$126)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$86)) {
        __$ctx._str += "/>";
    } else {
        tag__$86 && (__$ctx._str += ">");
        var __$r__$128;
        var __$l10__$129 = $$mode;
        $$mode = "content";
        __$r__$128 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$129;
        var content__$127 = __$r__$128;
        if (content__$127 || content__$127 === 0) {
            isBEM__$85 = vBlock__$91 || $$elem;
            var __$r__$130;
            var __$l11__$131 = $$mode;
            $$mode = "";
            var __$l12__$132 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$133 = __$ctx.position;
            __$ctx.position = isBEM__$85 ? 1 : __$ctx.position;
            var __$l14__$134 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$85 ? 1 : __$ctx._listLength;
            var __$l15__$135 = __$ctx.ctx;
            __$ctx.ctx = content__$127;
            __$r__$130 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$131;
            __$ctx._notNewList = __$l12__$132;
            __$ctx.position = __$l13__$133;
            __$ctx._listLength = __$l14__$134;
            __$ctx.ctx = __$l15__$135;
        }
        tag__$86 && (__$ctx._str += "</" + tag__$86 + ">");
    }
    res__$87 = __$ctx._str;
    __$r__$89 = undefined;
    __$ctx._str = __$l0__$90;
    __$ctx._buf.push(res__$87);
    return;
}

function __$b43(__$ctx, __$ref) {
    var mix__$64 = function __$lb__$65() {
        var __$r__$66;
        var __$l0__$67 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1024;
        __$r__$66 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$67;
        return __$r__$66;
    }(), uaMix__$68 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$64 ? uaMix__$68.concat(mix__$64) : uaMix__$68;
}

function __$b69(__$ctx, __$ref) {
    var __$r__$137;
    var __$l0__$138 = $$mode;
    $$mode = "";
    var __$l1__$139 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$141;
    var __$l2__$142 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$141 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$142;
    __$r__$137 = __$r__$141;
    $$mode = __$l0__$138;
    __$ctx.ctx = __$l1__$139;
    return;
}

function __$b70(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$143 = __$ctx.ctx;
    if (ctx__$143 && ctx__$143 !== true || ctx__$143 === 0) {
        __$ctx._str += ctx__$143 + "";
    }
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b72(__$ctx, __$ref) {
    var ctx__$144 = __$ctx.ctx, len__$145 = ctx__$144.length, i__$146 = 0, prevPos__$147 = __$ctx.position, prevNotNewList__$148 = __$ctx._notNewList;
    if (prevNotNewList__$148) {
        __$ctx._listLength += len__$145 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$145;
    }
    __$ctx._notNewList = true;
    while (i__$146 < len__$145) (function __$lb__$149() {
        var __$r__$150;
        var __$l0__$151 = __$ctx.ctx;
        __$ctx.ctx = ctx__$144[i__$146++];
        __$r__$150 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$151;
        return __$r__$150;
    })();
    prevNotNewList__$148 || (__$ctx.position = prevPos__$147);
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$152 = __$ctx.ctx.block, vElem__$153 = __$ctx.ctx.elem, block__$154 = __$ctx._currBlock || $$block;
    var __$r__$156;
    var __$l0__$157 = $$mode;
    $$mode = "default";
    var __$l1__$158 = $$block;
    $$block = vBlock__$152 || (vElem__$153 ? block__$154 : undefined);
    var __$l2__$159 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$152 || vElem__$153 ? undefined : block__$154;
    var __$l3__$160 = $$elem;
    $$elem = vElem__$153;
    var __$l4__$161 = $$mods;
    $$mods = vBlock__$152 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$162 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$156 = undefined;
    $$mode = __$l0__$157;
    $$block = __$l1__$158;
    __$ctx._currBlock = __$l2__$159;
    $$elem = __$l3__$160;
    $$mods = __$l4__$161;
    $$elemMods = __$l5__$162;
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
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b6(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b7(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b8(__$ctx, __$ref);
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
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "link") {
                    var __$r = __$b14(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "button") {
                    var __$r = __$b15(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b16(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b18(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 512) === 0) {
                return [ function __$lb__$61() {
                    var __$r__$62;
                    var __$l0__$63 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$62 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$63;
                    return __$r__$62;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 2048) === 0) {
            return [ function __$lb__$69() {
                var __$r__$70;
                var __$l0__$71 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                __$r__$70 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$71;
                return __$r__$70;
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
        if (!$$elem && (__$ctx.__$a0 & 4096) === 0) {
            return [ function __$lb__$72() {
                var __$r__$73;
                var __$l0__$74 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$73 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$74;
                return __$r__$73;
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
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$ctx.extend(function __$lb__$29() {
                    var __$r__$30;
                    var __$l0__$31 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$30 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$31;
                    return __$r__$30;
                }(), {
                    url: __$ctx.ctx.url
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "dropdown") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$ctx.extend(function __$lb__$43() {
                    var __$r__$44;
                    var __$l0__$45 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$44 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$45;
                    return __$r__$44;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return true;
        }
    }
    return undefined;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["pseudo"] === true && !__$ctx.ctx.url) {
                return "span";
            }
            return "a";
        }
    } else if (__$t === "dropdown") {
        if ($$elem === "switcher") {
            return false;
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
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