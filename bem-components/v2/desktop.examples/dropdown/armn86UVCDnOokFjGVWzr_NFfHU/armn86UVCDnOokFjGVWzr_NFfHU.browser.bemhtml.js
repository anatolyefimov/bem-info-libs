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
    var ctx__$25 = __$ctx.ctx, attrs__$26 = {
        type: $$mods.type || "button",
        name: ctx__$25.name,
        value: ctx__$25.val
    };
    $$mods.disabled && (attrs__$26.disabled = "disabled");
    return __$ctx.extend(function __$lb__$27() {
        var __$r__$28;
        var __$l0__$29 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$28 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$29;
        return __$r__$28;
    }(), attrs__$26);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$30 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$30.tabIndex,
        id: ctx__$30.id,
        title: ctx__$30.title
    };
}

function __$b9(__$ctx, __$ref) {
    var ctx__$44 = __$ctx.ctx, attrs__$45 = {}, tabIndex__$46;
    if (!$$mods.disabled) {
        if (ctx__$44.url) {
            attrs__$45.href = ctx__$44.url;
            tabIndex__$46 = ctx__$44.tabIndex;
        } else {
            tabIndex__$46 = ctx__$44.tabIndex || 0;
        }
    }
    typeof tabIndex__$46 === "undefined" || (attrs__$45.tabindex = tabIndex__$46);
    ctx__$44.title && (attrs__$45.title = ctx__$44.title);
    ctx__$44.target && (attrs__$45.target = ctx__$44.target);
    return attrs__$45;
}

function __$b16(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx, content__$24 = [ ctx__$23.icon ];
    "text" in ctx__$23 && content__$24.push({
        elem: "text",
        content: ctx__$23.text
    });
    return content__$24;
}

function __$b17(__$ctx, __$ref) {
    var content__$37 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$37)) return content__$37;
    var res__$38 = __$ctx.isSimple(content__$37) ? {
        block: "button",
        text: content__$37
    } : content__$37;
    if (res__$38.block === "button") {
        var resMods__$39 = res__$38.mods || (res__$38.mods = {}), dropdownMods__$40 = $$mods;
        resMods__$39.size || (resMods__$39.size = dropdownMods__$40.size);
        resMods__$39.theme || (resMods__$39.theme = dropdownMods__$40.theme);
        resMods__$39.disabled = dropdownMods__$40.disabled;
    }
    return res__$38;
}

function __$b18(__$ctx, __$ref) {
    var content__$51 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$51)) return content__$51;
    var res__$52 = __$ctx.isSimple(content__$51) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$51
    } : content__$51;
    if (res__$52.block === "link") {
        var resMods__$53 = res__$52.mods || (res__$52.mods = {}), dropdownMods__$54 = $$mods;
        resMods__$53.theme || (resMods__$53.theme = dropdownMods__$54.theme);
        resMods__$53.disabled = dropdownMods__$54.disabled;
    }
    return res__$52;
}

function __$b19(__$ctx, __$ref) {
    var popup__$56 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$56) || popup__$56.block !== "popup") {
        popup__$56 = {
            block: "popup",
            content: popup__$56
        };
    }
    var popupMods__$57 = popup__$56.mods || (popup__$56.mods = {});
    popupMods__$57.theme || (popupMods__$57.theme = $$mods.theme);
    popupMods__$57.hasOwnProperty("autoclosable") || (popupMods__$57.autoclosable = true);
    popupMods__$57.target = "anchor";
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$56 ];
}

function __$b33(__$ctx, __$ref) {
    var ctx__$55 = __$ctx.ctx;
    return {
        mainOffset: ctx__$55.mainOffset,
        secondaryOffset: ctx__$55.secondaryOffset,
        viewportOffset: ctx__$55.viewportOffset,
        directions: ctx__$55.directions,
        zIndexGroupLevel: ctx__$55.zIndexGroupLevel
    };
}

function __$b35(__$ctx, __$ref) {
    var __$r__$15;
    var __$l0__$16 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$18;
    var __$l1__$19 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$18 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$19;
    __$r__$15 = __$r__$18;
    __$ctx._menuMods = __$l0__$16;
    delete __$ctx._menuTheme;
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
    var __$r__$32;
    var __$l0__$33 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$35;
    var __$l1__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$36;
    __$r__$32 = __$r__$35;
    __$ctx._button = __$l0__$33;
    return;
}

function __$b38(__$ctx, __$ref) {
    var ctx__$47 = __$ctx.ctx;
    typeof ctx__$47.url === "object" && (ctx__$47.url = __$ctx.reapply(ctx__$47.url));
    var __$r__$49;
    var __$l0__$50 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$49 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$50;
    return;
}

function __$b39(__$ctx, __$ref) {
    var url__$61 = __$ctx.ctx.url;
    var __$r__$63;
    var __$l0__$64 = $$mode;
    $$mode = "";
    var __$l1__$65 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$61 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$67;
    var __$l2__$68 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$67 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$68;
    __$r__$63 = __$r__$67;
    $$mode = __$l0__$64;
    __$ctx.ctx = __$l1__$65;
    return;
}

function __$b40(__$ctx, __$ref) {
    var ie__$69 = __$ctx.ctx.ie, hideRule__$70 = !ie__$69 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$69 === "!IE" ? [ ie__$69, "<!-->", "<!--" ] : [ ie__$69, "", "" ];
    var __$r__$72;
    var __$l0__$73 = $$mode;
    $$mode = "";
    var __$l3__$74 = __$ctx.ctx;
    var __$l1__$75 = __$l3__$74._ieCommented;
    __$l3__$74._ieCommented = true;
    var __$l2__$76 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$70[0] + "]>" + hideRule__$70[1], __$ctx.ctx, hideRule__$70[2] + "<![endif]-->" ];
    __$r__$72 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$73;
    __$l3__$74._ieCommented = __$l1__$75;
    __$ctx.ctx = __$l2__$76;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$83 = __$ctx.ctx;
    var __$r__$85;
    var __$l0__$86 = $$mode;
    $$mode = "";
    var __$l1__$87 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$83.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$83.title
            }, {
                block: "ua"
            }, ctx__$83.head, ctx__$83.styles, ctx__$83.favicon ? {
                elem: "favicon",
                url: ctx__$83.favicon
            } : "" ]
        }, ctx__$83 ]
    } ];
    var __$r__$89;
    var __$l2__$90 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$89 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$90;
    __$r__$85 = __$r__$89;
    $$mode = __$l0__$86;
    __$ctx.ctx = __$l1__$87;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$91 = __$ctx.BEM.INTERNAL, ctx__$92 = __$ctx.ctx, isBEM__$93, tag__$94, res__$95;
    var __$r__$97;
    var __$l0__$98 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$99 = $$block;
    var __$r__$101;
    var __$l1__$102 = $$mode;
    $$mode = "tag";
    __$r__$101 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$102;
    tag__$94 = __$r__$101;
    typeof tag__$94 !== "undefined" || (tag__$94 = ctx__$92.tag);
    typeof tag__$94 !== "undefined" || (tag__$94 = "div");
    if (tag__$94) {
        var jsParams__$103, js__$104;
        if (vBlock__$99 && ctx__$92.js !== false) {
            var __$r__$105;
            var __$l2__$106 = $$mode;
            $$mode = "js";
            __$r__$105 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$106;
            js__$104 = __$r__$105;
            js__$104 = js__$104 ? __$ctx.extend(ctx__$92.js, js__$104 === true ? {} : js__$104) : ctx__$92.js === true ? {} : ctx__$92.js;
            js__$104 && ((jsParams__$103 = {})[BEM_INTERNAL__$91.buildClass(vBlock__$99, ctx__$92.elem)] = js__$104);
        }
        __$ctx._str += "<" + tag__$94;
        var __$r__$107;
        var __$l3__$108 = $$mode;
        $$mode = "bem";
        __$r__$107 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$108;
        isBEM__$93 = __$r__$107;
        typeof isBEM__$93 !== "undefined" || (isBEM__$93 = typeof ctx__$92.bem !== "undefined" ? ctx__$92.bem : ctx__$92.block || ctx__$92.elem);
        var __$r__$110;
        var __$l4__$111 = $$mode;
        $$mode = "cls";
        __$r__$110 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$111;
        var cls__$109 = __$r__$110;
        cls__$109 || (cls__$109 = ctx__$92.cls);
        var addJSInitClass__$112 = ctx__$92.block && jsParams__$103;
        if (isBEM__$93 || cls__$109) {
            __$ctx._str += ' class="';
            if (isBEM__$93) {
                __$ctx._str += BEM_INTERNAL__$91.buildClasses(vBlock__$99, ctx__$92.elem, ctx__$92.elemMods || ctx__$92.mods);
                var __$r__$114;
                var __$l5__$115 = $$mode;
                $$mode = "mix";
                __$r__$114 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$115;
                var mix__$113 = __$r__$114;
                ctx__$92.mix && (mix__$113 = mix__$113 ? [].concat(mix__$113, ctx__$92.mix) : ctx__$92.mix);
                if (mix__$113) {
                    var visited__$116 = {}, visitedKey__$117 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$116[visitedKey__$117(vBlock__$99, $$elem)] = true;
                    __$ctx.isArray(mix__$113) || (mix__$113 = [ mix__$113 ]);
                    for (var i__$118 = 0; i__$118 < mix__$113.length; i__$118++) {
                        var mixItem__$119 = mix__$113[i__$118], hasItem__$120 = mixItem__$119.block || mixItem__$119.elem, mixBlock__$121 = mixItem__$119.block || mixItem__$119._block || $$block, mixElem__$122 = mixItem__$119.elem || mixItem__$119._elem || $$elem;
                        hasItem__$120 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$91[hasItem__$120 ? "buildClasses" : "buildModsClasses"](mixBlock__$121, mixItem__$119.elem || mixItem__$119._elem || (mixItem__$119.block ? undefined : $$elem), mixItem__$119.elemMods || mixItem__$119.mods);
                        if (mixItem__$119.js) {
                            (jsParams__$103 || (jsParams__$103 = {}))[BEM_INTERNAL__$91.buildClass(mixBlock__$121, mixItem__$119.elem)] = mixItem__$119.js === true ? {} : mixItem__$119.js;
                            addJSInitClass__$112 || (addJSInitClass__$112 = mixBlock__$121 && !mixItem__$119.elem);
                        }
                        if (hasItem__$120 && !visited__$116[visitedKey__$117(mixBlock__$121, mixElem__$122)]) {
                            visited__$116[visitedKey__$117(mixBlock__$121, mixElem__$122)] = true;
                            var __$r__$124;
                            var __$l6__$125 = $$mode;
                            $$mode = "mix";
                            var __$l7__$126 = $$block;
                            $$block = mixBlock__$121;
                            var __$l8__$127 = $$elem;
                            $$elem = mixElem__$122;
                            __$r__$124 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$125;
                            $$block = __$l7__$126;
                            $$elem = __$l8__$127;
                            var nestedMix__$123 = __$r__$124;
                            if (nestedMix__$123) {
                                for (var j__$128 = 0; j__$128 < nestedMix__$123.length; j__$128++) {
                                    var nestedItem__$129 = nestedMix__$123[j__$128];
                                    if (!nestedItem__$129.block && !nestedItem__$129.elem || !visited__$116[visitedKey__$117(nestedItem__$129.block, nestedItem__$129.elem)]) {
                                        nestedItem__$129._block = mixBlock__$121;
                                        nestedItem__$129._elem = mixElem__$122;
                                        mix__$113.splice(i__$118 + 1, 0, nestedItem__$129);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$109 && (__$ctx._str += isBEM__$93 ? " " + cls__$109 : cls__$109);
            __$ctx._str += addJSInitClass__$112 ? ' i-bem"' : '"';
        }
        if (isBEM__$93 && jsParams__$103) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$103)) + '"';
        }
        var __$r__$131;
        var __$l9__$132 = $$mode;
        $$mode = "attrs";
        __$r__$131 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$132;
        var attrs__$130 = __$r__$131;
        attrs__$130 = __$ctx.extend(attrs__$130, ctx__$92.attrs);
        if (attrs__$130) {
            var name__$133, attr__$134;
            for (name__$133 in attrs__$130) {
                attr__$134 = attrs__$130[name__$133];
                if (typeof attr__$134 === "undefined") continue;
                __$ctx._str += " " + name__$133 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$134) ? attr__$134 : __$ctx.reapply(attr__$134)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$94)) {
        __$ctx._str += "/>";
    } else {
        tag__$94 && (__$ctx._str += ">");
        var __$r__$136;
        var __$l10__$137 = $$mode;
        $$mode = "content";
        __$r__$136 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$137;
        var content__$135 = __$r__$136;
        if (content__$135 || content__$135 === 0) {
            isBEM__$93 = vBlock__$99 || $$elem;
            var __$r__$138;
            var __$l11__$139 = $$mode;
            $$mode = "";
            var __$l12__$140 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$141 = __$ctx.position;
            __$ctx.position = isBEM__$93 ? 1 : __$ctx.position;
            var __$l14__$142 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$93 ? 1 : __$ctx._listLength;
            var __$l15__$143 = __$ctx.ctx;
            __$ctx.ctx = content__$135;
            __$r__$138 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$139;
            __$ctx._notNewList = __$l12__$140;
            __$ctx.position = __$l13__$141;
            __$ctx._listLength = __$l14__$142;
            __$ctx.ctx = __$l15__$143;
        }
        tag__$94 && (__$ctx._str += "</" + tag__$94 + ">");
    }
    res__$95 = __$ctx._str;
    __$r__$97 = undefined;
    __$ctx._str = __$l0__$98;
    __$ctx._buf.push(res__$95);
    return;
}

function __$b71(__$ctx, __$ref) {
    var __$r__$145;
    var __$l0__$146 = $$mode;
    $$mode = "";
    var __$l1__$147 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$149;
    var __$l2__$150 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$149 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$150;
    __$r__$145 = __$r__$149;
    $$mode = __$l0__$146;
    __$ctx.ctx = __$l1__$147;
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$151 = __$ctx.ctx;
    if (ctx__$151 && ctx__$151 !== true || ctx__$151 === 0) {
        __$ctx._str += ctx__$151 + "";
    }
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ctx__$152 = __$ctx.ctx, len__$153 = ctx__$152.length, i__$154 = 0, prevPos__$155 = __$ctx.position, prevNotNewList__$156 = __$ctx._notNewList;
    if (prevNotNewList__$156) {
        __$ctx._listLength += len__$153 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$153;
    }
    __$ctx._notNewList = true;
    while (i__$154 < len__$153) (function __$lb__$157() {
        var __$r__$158;
        var __$l0__$159 = __$ctx.ctx;
        __$ctx.ctx = ctx__$152[i__$154++];
        __$r__$158 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$159;
        return __$r__$158;
    })();
    prevNotNewList__$156 || (__$ctx.position = prevPos__$155);
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$160 = __$ctx.ctx.block, vElem__$161 = __$ctx.ctx.elem, block__$162 = __$ctx._currBlock || $$block;
    var __$r__$164;
    var __$l0__$165 = $$mode;
    $$mode = "default";
    var __$l1__$166 = $$block;
    $$block = vBlock__$160 || (vElem__$161 ? block__$162 : undefined);
    var __$l2__$167 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$160 || vElem__$161 ? undefined : block__$162;
    var __$l3__$168 = $$elem;
    $$elem = vElem__$161;
    var __$l4__$169 = $$mods;
    $$mods = vBlock__$160 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$170 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$164 = undefined;
    $$mode = __$l0__$165;
    $$block = __$l1__$166;
    __$ctx._currBlock = __$l2__$167;
    $$elem = __$l3__$168;
    $$mods = __$l4__$169;
    $$elemMods = __$l5__$170;
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
                return [ function __$lb__$58() {
                    var __$r__$59;
                    var __$l0__$60 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                    __$r__$59 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$60;
                    return __$r__$59;
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
            }, function __$lb__$77() {
                var __$r__$78;
                var __$l0__$79 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$78 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$79;
                return __$r__$78;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            return [ function __$lb__$80() {
                var __$r__$81;
                var __$l0__$82 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                __$r__$81 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$82;
                return __$r__$81;
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
                var __$r = __$ctx.extend(function __$lb__$20() {
                    var __$r__$21;
                    var __$l0__$22 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$21 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$22;
                    return __$r__$21;
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
                var __$r = __$ctx.extend(function __$lb__$41() {
                    var __$r__$42;
                    var __$l0__$43 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$42 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$43;
                    return __$r__$42;
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