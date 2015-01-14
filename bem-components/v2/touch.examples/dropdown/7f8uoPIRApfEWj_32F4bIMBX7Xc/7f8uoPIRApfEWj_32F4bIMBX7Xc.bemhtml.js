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
                var __$r = __$b36(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b37(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b39(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b40(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b41(__$ctx, __$ref);
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
            if (!$$elem && (__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
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

function __$b8(__$ctx, __$ref) {
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

function __$b9(__$ctx, __$ref) {
    var ctx__$53 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$53.tabIndex,
        id: ctx__$53.id,
        title: ctx__$53.title
    };
}

function __$b15(__$ctx, __$ref) {
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

function __$b16(__$ctx, __$ref) {
    var content__$60 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$60)) return content__$60;
    var res__$61 = __$ctx.isSimple(content__$60) ? {
        block: "button",
        text: content__$60
    } : content__$60;
    if (res__$61.block === "button") {
        var resMods__$62 = res__$61.mods || (res__$61.mods = {}), dropdownMods__$63 = $$mods;
        resMods__$62.size || (resMods__$62.size = dropdownMods__$63.size);
        resMods__$62.theme || (resMods__$62.theme = dropdownMods__$63.theme);
        resMods__$62.disabled = dropdownMods__$63.disabled;
    }
    return res__$61;
}

function __$b17(__$ctx, __$ref) {
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

function __$b19(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx, content__$47 = [ ctx__$46.icon ];
    "text" in ctx__$46 && content__$47.push({
        elem: "text",
        content: ctx__$46.text
    });
    return content__$47;
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

function __$b36(__$ctx, __$ref) {
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

function __$b37(__$ctx, __$ref) {
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

function __$b38(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    typeof ctx__$35.url === "object" && (ctx__$35.url = __$ctx.reapply(ctx__$35.url));
    var __$r__$37;
    var __$l0__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$38;
    return;
}

function __$b39(__$ctx, __$ref) {
    var __$r__$55;
    var __$l0__$56 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$58;
    var __$l1__$59 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$58 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$59;
    __$r__$55 = __$r__$58;
    __$ctx._button = __$l0__$56;
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$81 = __$ctx.ctx;
    var __$r__$83;
    var __$l0__$84 = $$mode;
    $$mode = "";
    var __$l1__$85 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$81.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$81.title
            }, {
                block: "ua"
            }, ctx__$81.head, ctx__$81.styles, ctx__$81.favicon ? {
                elem: "favicon",
                url: ctx__$81.favicon
            } : "" ]
        }, ctx__$81 ]
    } ];
    var __$r__$87;
    var __$l2__$88 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$87 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$88;
    __$r__$83 = __$r__$87;
    $$mode = __$l0__$84;
    __$ctx.ctx = __$l1__$85;
    __$ctx._defPageApplied = false;
    return;
}

function __$b41(__$ctx, __$ref) {
    var BEM_INTERNAL__$89 = __$ctx.BEM.INTERNAL, ctx__$90 = __$ctx.ctx, isBEM__$91, tag__$92, res__$93;
    var __$r__$95;
    var __$l0__$96 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$97 = $$block;
    var __$r__$99;
    var __$l1__$100 = $$mode;
    $$mode = "tag";
    __$r__$99 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$100;
    tag__$92 = __$r__$99;
    typeof tag__$92 !== "undefined" || (tag__$92 = ctx__$90.tag);
    typeof tag__$92 !== "undefined" || (tag__$92 = "div");
    if (tag__$92) {
        var jsParams__$101, js__$102;
        if (vBlock__$97 && ctx__$90.js !== false) {
            var __$r__$103;
            var __$l2__$104 = $$mode;
            $$mode = "js";
            __$r__$103 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$104;
            js__$102 = __$r__$103;
            js__$102 = js__$102 ? __$ctx.extend(ctx__$90.js, js__$102 === true ? {} : js__$102) : ctx__$90.js === true ? {} : ctx__$90.js;
            js__$102 && ((jsParams__$101 = {})[BEM_INTERNAL__$89.buildClass(vBlock__$97, ctx__$90.elem)] = js__$102);
        }
        __$ctx._str += "<" + tag__$92;
        var __$r__$105;
        var __$l3__$106 = $$mode;
        $$mode = "bem";
        __$r__$105 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$106;
        isBEM__$91 = __$r__$105;
        typeof isBEM__$91 !== "undefined" || (isBEM__$91 = typeof ctx__$90.bem !== "undefined" ? ctx__$90.bem : ctx__$90.block || ctx__$90.elem);
        var __$r__$108;
        var __$l4__$109 = $$mode;
        $$mode = "cls";
        __$r__$108 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$109;
        var cls__$107 = __$r__$108;
        cls__$107 || (cls__$107 = ctx__$90.cls);
        var addJSInitClass__$110 = ctx__$90.block && jsParams__$101 && !ctx__$90.elem;
        if (isBEM__$91 || cls__$107) {
            __$ctx._str += ' class="';
            if (isBEM__$91) {
                __$ctx._str += BEM_INTERNAL__$89.buildClasses(vBlock__$97, ctx__$90.elem, ctx__$90.elemMods || ctx__$90.mods);
                var __$r__$112;
                var __$l5__$113 = $$mode;
                $$mode = "mix";
                __$r__$112 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$113;
                var mix__$111 = __$r__$112;
                ctx__$90.mix && (mix__$111 = mix__$111 ? [].concat(mix__$111, ctx__$90.mix) : ctx__$90.mix);
                if (mix__$111) {
                    var visited__$114 = {}, visitedKey__$115 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$114[visitedKey__$115(vBlock__$97, $$elem)] = true;
                    __$ctx.isArray(mix__$111) || (mix__$111 = [ mix__$111 ]);
                    for (var i__$116 = 0; i__$116 < mix__$111.length; i__$116++) {
                        var mixItem__$117 = mix__$111[i__$116], hasItem__$118 = mixItem__$117.block || mixItem__$117.elem, mixBlock__$119 = mixItem__$117.block || mixItem__$117._block || $$block, mixElem__$120 = mixItem__$117.elem || mixItem__$117._elem || $$elem;
                        hasItem__$118 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$89[hasItem__$118 ? "buildClasses" : "buildModsClasses"](mixBlock__$119, mixItem__$117.elem || mixItem__$117._elem || (mixItem__$117.block ? undefined : $$elem), mixItem__$117.elemMods || mixItem__$117.mods);
                        if (mixItem__$117.js) {
                            (jsParams__$101 || (jsParams__$101 = {}))[BEM_INTERNAL__$89.buildClass(mixBlock__$119, mixItem__$117.elem)] = mixItem__$117.js === true ? {} : mixItem__$117.js;
                            addJSInitClass__$110 || (addJSInitClass__$110 = mixBlock__$119 && !mixItem__$117.elem);
                        }
                        if (hasItem__$118 && !visited__$114[visitedKey__$115(mixBlock__$119, mixElem__$120)]) {
                            visited__$114[visitedKey__$115(mixBlock__$119, mixElem__$120)] = true;
                            var __$r__$122;
                            var __$l6__$123 = $$mode;
                            $$mode = "mix";
                            var __$l7__$124 = $$block;
                            $$block = mixBlock__$119;
                            var __$l8__$125 = $$elem;
                            $$elem = mixElem__$120;
                            __$r__$122 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$123;
                            $$block = __$l7__$124;
                            $$elem = __$l8__$125;
                            var nestedMix__$121 = __$r__$122;
                            if (nestedMix__$121) {
                                for (var j__$126 = 0; j__$126 < nestedMix__$121.length; j__$126++) {
                                    var nestedItem__$127 = nestedMix__$121[j__$126];
                                    if (!nestedItem__$127.block && !nestedItem__$127.elem || !visited__$114[visitedKey__$115(nestedItem__$127.block, nestedItem__$127.elem)]) {
                                        nestedItem__$127._block = mixBlock__$119;
                                        nestedItem__$127._elem = mixElem__$120;
                                        mix__$111.splice(i__$116 + 1, 0, nestedItem__$127);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$107 && (__$ctx._str += isBEM__$91 ? " " + cls__$107 : cls__$107);
            __$ctx._str += addJSInitClass__$110 ? ' i-bem"' : '"';
        }
        if (isBEM__$91 && jsParams__$101) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$101)) + '"';
        }
        var __$r__$129;
        var __$l9__$130 = $$mode;
        $$mode = "attrs";
        __$r__$129 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$130;
        var attrs__$128 = __$r__$129;
        attrs__$128 = __$ctx.extend(attrs__$128, ctx__$90.attrs);
        if (attrs__$128) {
            var name__$131, attr__$132;
            for (name__$131 in attrs__$128) {
                attr__$132 = attrs__$128[name__$131];
                if (typeof attr__$132 === "undefined") continue;
                __$ctx._str += " " + name__$131 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$132) ? attr__$132 : __$ctx.reapply(attr__$132)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$92)) {
        __$ctx._str += "/>";
    } else {
        tag__$92 && (__$ctx._str += ">");
        var __$r__$134;
        var __$l10__$135 = $$mode;
        $$mode = "content";
        __$r__$134 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$135;
        var content__$133 = __$r__$134;
        if (content__$133 || content__$133 === 0) {
            isBEM__$91 = vBlock__$97 || $$elem;
            var __$r__$136;
            var __$l11__$137 = $$mode;
            $$mode = "";
            var __$l12__$138 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$139 = __$ctx.position;
            __$ctx.position = isBEM__$91 ? 1 : __$ctx.position;
            var __$l14__$140 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$91 ? 1 : __$ctx._listLength;
            var __$l15__$141 = __$ctx.ctx;
            __$ctx.ctx = content__$133;
            __$r__$136 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$137;
            __$ctx._notNewList = __$l12__$138;
            __$ctx.position = __$l13__$139;
            __$ctx._listLength = __$l14__$140;
            __$ctx.ctx = __$l15__$141;
        }
        tag__$92 && (__$ctx._str += "</" + tag__$92 + ">");
    }
    res__$93 = __$ctx._str;
    __$r__$95 = undefined;
    __$ctx._str = __$l0__$96;
    __$ctx._buf.push(res__$93);
    return;
}

function __$b45(__$ctx, __$ref) {
    var mix__$70 = function __$lb__$71() {
        var __$r__$72;
        var __$l0__$73 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2048;
        __$r__$72 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$73;
        return __$r__$72;
    }(), uaMix__$74 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$70 ? uaMix__$74.concat(mix__$70) : uaMix__$74;
}

function __$b71(__$ctx, __$ref) {
    var __$r__$143;
    var __$l0__$144 = $$mode;
    $$mode = "";
    var __$l1__$145 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$147;
    var __$l2__$148 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$147 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$148;
    __$r__$143 = __$r__$147;
    $$mode = __$l0__$144;
    __$ctx.ctx = __$l1__$145;
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$149 = __$ctx.ctx;
    if (ctx__$149 && ctx__$149 !== true || ctx__$149 === 0) {
        __$ctx._str += ctx__$149 + "";
    }
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ctx__$150 = __$ctx.ctx, len__$151 = ctx__$150.length, i__$152 = 0, prevPos__$153 = __$ctx.position, prevNotNewList__$154 = __$ctx._notNewList;
    if (prevNotNewList__$154) {
        __$ctx._listLength += len__$151 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$151;
    }
    __$ctx._notNewList = true;
    while (i__$152 < len__$151) (function __$lb__$155() {
        var __$r__$156;
        var __$l0__$157 = __$ctx.ctx;
        __$ctx.ctx = ctx__$150[i__$152++];
        __$r__$156 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$157;
        return __$r__$156;
    })();
    prevNotNewList__$154 || (__$ctx.position = prevPos__$153);
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$158 = __$ctx.ctx.block, vElem__$159 = __$ctx.ctx.elem, block__$160 = __$ctx._currBlock || $$block;
    var __$r__$162;
    var __$l0__$163 = $$mode;
    $$mode = "default";
    var __$l1__$164 = $$block;
    $$block = vBlock__$158 || (vElem__$159 ? block__$160 : undefined);
    var __$l2__$165 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$158 || vElem__$159 ? undefined : block__$160;
    var __$l3__$166 = $$elem;
    $$elem = vElem__$159;
    var __$l4__$167 = $$mods;
    $$mods = vBlock__$158 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$168 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$162 = undefined;
    $$mode = __$l0__$163;
    $$block = __$l1__$164;
    __$ctx._currBlock = __$l2__$165;
    $$elem = __$l3__$166;
    $$mods = __$l4__$167;
    $$elemMods = __$l5__$168;
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
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b8(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
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
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "link") {
                    var __$r = __$b15(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "button") {
                    var __$r = __$b16(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b17(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
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
            return [ function __$lb__$75() {
                var __$r__$76;
                var __$l0__$77 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$76 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$77;
                return __$r__$76;
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
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            return [ function __$lb__$78() {
                var __$r__$79;
                var __$l0__$80 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                __$r__$79 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$80;
                return __$r__$79;
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
            var __$r = __$b33(__$ctx, __$ref);
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