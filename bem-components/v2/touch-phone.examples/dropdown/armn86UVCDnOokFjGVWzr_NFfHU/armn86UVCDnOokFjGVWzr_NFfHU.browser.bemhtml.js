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
        } else if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
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

function __$b36(__$ctx, __$ref) {
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

function __$b37(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$10;
    var __$l0__$11 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$10 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$11;
    return;
}

function __$b38(__$ctx, __$ref) {
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

function __$b39(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx;
    typeof ctx__$46.url === "object" && (ctx__$46.url = __$ctx.reapply(ctx__$46.url));
    var __$r__$48;
    var __$l0__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$49;
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$71 = __$ctx.ctx;
    var __$r__$73;
    var __$l0__$74 = $$mode;
    $$mode = "";
    var __$l1__$75 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$71.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$71.title
            }, {
                block: "ua"
            }, ctx__$71.head, ctx__$71.styles, ctx__$71.favicon ? {
                elem: "favicon",
                url: ctx__$71.favicon
            } : "" ]
        }, ctx__$71 ]
    } ];
    var __$r__$77;
    var __$l2__$78 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$77 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$78;
    __$r__$73 = __$r__$77;
    $$mode = __$l0__$74;
    __$ctx.ctx = __$l1__$75;
    __$ctx._defPageApplied = false;
    return;
}

function __$b41(__$ctx, __$ref) {
    var BEM_INTERNAL__$79 = __$ctx.BEM.INTERNAL, ctx__$80 = __$ctx.ctx, isBEM__$81, tag__$82, res__$83;
    var __$r__$85;
    var __$l0__$86 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$87 = $$block;
    var __$r__$89;
    var __$l1__$90 = $$mode;
    $$mode = "tag";
    __$r__$89 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$90;
    tag__$82 = __$r__$89;
    typeof tag__$82 !== "undefined" || (tag__$82 = ctx__$80.tag);
    typeof tag__$82 !== "undefined" || (tag__$82 = "div");
    if (tag__$82) {
        var jsParams__$91, js__$92;
        if (vBlock__$87 && ctx__$80.js !== false) {
            var __$r__$93;
            var __$l2__$94 = $$mode;
            $$mode = "js";
            __$r__$93 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$94;
            js__$92 = __$r__$93;
            js__$92 = js__$92 ? __$ctx.extend(ctx__$80.js, js__$92 === true ? {} : js__$92) : ctx__$80.js === true ? {} : ctx__$80.js;
            js__$92 && ((jsParams__$91 = {})[BEM_INTERNAL__$79.buildClass(vBlock__$87, ctx__$80.elem)] = js__$92);
        }
        __$ctx._str += "<" + tag__$82;
        var __$r__$95;
        var __$l3__$96 = $$mode;
        $$mode = "bem";
        __$r__$95 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$96;
        isBEM__$81 = __$r__$95;
        typeof isBEM__$81 !== "undefined" || (isBEM__$81 = typeof ctx__$80.bem !== "undefined" ? ctx__$80.bem : ctx__$80.block || ctx__$80.elem);
        var __$r__$98;
        var __$l4__$99 = $$mode;
        $$mode = "cls";
        __$r__$98 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$99;
        var cls__$97 = __$r__$98;
        cls__$97 || (cls__$97 = ctx__$80.cls);
        var addJSInitClass__$100 = ctx__$80.block && jsParams__$91;
        if (isBEM__$81 || cls__$97) {
            __$ctx._str += ' class="';
            if (isBEM__$81) {
                __$ctx._str += BEM_INTERNAL__$79.buildClasses(vBlock__$87, ctx__$80.elem, ctx__$80.elemMods || ctx__$80.mods);
                var __$r__$102;
                var __$l5__$103 = $$mode;
                $$mode = "mix";
                __$r__$102 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$103;
                var mix__$101 = __$r__$102;
                ctx__$80.mix && (mix__$101 = mix__$101 ? [].concat(mix__$101, ctx__$80.mix) : ctx__$80.mix);
                if (mix__$101) {
                    var visited__$104 = {}, visitedKey__$105 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$104[visitedKey__$105(vBlock__$87, $$elem)] = true;
                    __$ctx.isArray(mix__$101) || (mix__$101 = [ mix__$101 ]);
                    for (var i__$106 = 0; i__$106 < mix__$101.length; i__$106++) {
                        var mixItem__$107 = mix__$101[i__$106], hasItem__$108 = mixItem__$107.block || mixItem__$107.elem, mixBlock__$109 = mixItem__$107.block || mixItem__$107._block || $$block, mixElem__$110 = mixItem__$107.elem || mixItem__$107._elem || $$elem;
                        hasItem__$108 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$79[hasItem__$108 ? "buildClasses" : "buildModsClasses"](mixBlock__$109, mixItem__$107.elem || mixItem__$107._elem || (mixItem__$107.block ? undefined : $$elem), mixItem__$107.elemMods || mixItem__$107.mods);
                        if (mixItem__$107.js) {
                            (jsParams__$91 || (jsParams__$91 = {}))[BEM_INTERNAL__$79.buildClass(mixBlock__$109, mixItem__$107.elem)] = mixItem__$107.js === true ? {} : mixItem__$107.js;
                            addJSInitClass__$100 || (addJSInitClass__$100 = mixBlock__$109 && !mixItem__$107.elem);
                        }
                        if (hasItem__$108 && !visited__$104[visitedKey__$105(mixBlock__$109, mixElem__$110)]) {
                            visited__$104[visitedKey__$105(mixBlock__$109, mixElem__$110)] = true;
                            var __$r__$112;
                            var __$l6__$113 = $$mode;
                            $$mode = "mix";
                            var __$l7__$114 = $$block;
                            $$block = mixBlock__$109;
                            var __$l8__$115 = $$elem;
                            $$elem = mixElem__$110;
                            __$r__$112 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$113;
                            $$block = __$l7__$114;
                            $$elem = __$l8__$115;
                            var nestedMix__$111 = __$r__$112;
                            if (nestedMix__$111) {
                                for (var j__$116 = 0; j__$116 < nestedMix__$111.length; j__$116++) {
                                    var nestedItem__$117 = nestedMix__$111[j__$116];
                                    if (!nestedItem__$117.block && !nestedItem__$117.elem || !visited__$104[visitedKey__$105(nestedItem__$117.block, nestedItem__$117.elem)]) {
                                        nestedItem__$117._block = mixBlock__$109;
                                        nestedItem__$117._elem = mixElem__$110;
                                        mix__$101.splice(i__$106 + 1, 0, nestedItem__$117);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$97 && (__$ctx._str += isBEM__$81 ? " " + cls__$97 : cls__$97);
            __$ctx._str += addJSInitClass__$100 ? ' i-bem"' : '"';
        }
        if (isBEM__$81 && jsParams__$91) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$91)) + '"';
        }
        var __$r__$119;
        var __$l9__$120 = $$mode;
        $$mode = "attrs";
        __$r__$119 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$120;
        var attrs__$118 = __$r__$119;
        attrs__$118 = __$ctx.extend(attrs__$118, ctx__$80.attrs);
        if (attrs__$118) {
            var name__$121, attr__$122;
            for (name__$121 in attrs__$118) {
                attr__$122 = attrs__$118[name__$121];
                if (typeof attr__$122 === "undefined") continue;
                __$ctx._str += " " + name__$121 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$122) ? attr__$122 : __$ctx.reapply(attr__$122)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$82)) {
        __$ctx._str += "/>";
    } else {
        tag__$82 && (__$ctx._str += ">");
        var __$r__$124;
        var __$l10__$125 = $$mode;
        $$mode = "content";
        __$r__$124 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$125;
        var content__$123 = __$r__$124;
        if (content__$123 || content__$123 === 0) {
            isBEM__$81 = vBlock__$87 || $$elem;
            var __$r__$126;
            var __$l11__$127 = $$mode;
            $$mode = "";
            var __$l12__$128 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$129 = __$ctx.position;
            __$ctx.position = isBEM__$81 ? 1 : __$ctx.position;
            var __$l14__$130 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$81 ? 1 : __$ctx._listLength;
            var __$l15__$131 = __$ctx.ctx;
            __$ctx.ctx = content__$123;
            __$r__$126 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$127;
            __$ctx._notNewList = __$l12__$128;
            __$ctx.position = __$l13__$129;
            __$ctx._listLength = __$l14__$130;
            __$ctx.ctx = __$l15__$131;
        }
        tag__$82 && (__$ctx._str += "</" + tag__$82 + ">");
    }
    res__$83 = __$ctx._str;
    __$r__$85 = undefined;
    __$ctx._str = __$l0__$86;
    __$ctx._buf.push(res__$83);
    return;
}

function __$b45(__$ctx, __$ref) {
    var mix__$60 = function __$lb__$61() {
        var __$r__$62;
        var __$l0__$63 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2048;
        __$r__$62 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$63;
        return __$r__$62;
    }(), uaMix__$64 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$60 ? uaMix__$64.concat(mix__$60) : uaMix__$64;
}

function __$b71(__$ctx, __$ref) {
    var __$r__$133;
    var __$l0__$134 = $$mode;
    $$mode = "";
    var __$l1__$135 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$137;
    var __$l2__$138 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$137 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$138;
    __$r__$133 = __$r__$137;
    $$mode = __$l0__$134;
    __$ctx.ctx = __$l1__$135;
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$139 = __$ctx.ctx;
    if (ctx__$139 && ctx__$139 !== true || ctx__$139 === 0) {
        __$ctx._str += ctx__$139 + "";
    }
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b74(__$ctx, __$ref) {
    var ctx__$140 = __$ctx.ctx, len__$141 = ctx__$140.length, i__$142 = 0, prevPos__$143 = __$ctx.position, prevNotNewList__$144 = __$ctx._notNewList;
    if (prevNotNewList__$144) {
        __$ctx._listLength += len__$141 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$141;
    }
    __$ctx._notNewList = true;
    while (i__$142 < len__$141) (function __$lb__$145() {
        var __$r__$146;
        var __$l0__$147 = __$ctx.ctx;
        __$ctx.ctx = ctx__$140[i__$142++];
        __$r__$146 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$147;
        return __$r__$146;
    })();
    prevNotNewList__$144 || (__$ctx.position = prevPos__$143);
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$148 = __$ctx.ctx.block, vElem__$149 = __$ctx.ctx.elem, block__$150 = __$ctx._currBlock || $$block;
    var __$r__$152;
    var __$l0__$153 = $$mode;
    $$mode = "default";
    var __$l1__$154 = $$block;
    $$block = vBlock__$148 || (vElem__$149 ? block__$150 : undefined);
    var __$l2__$155 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$148 || vElem__$149 ? undefined : block__$150;
    var __$l3__$156 = $$elem;
    $$elem = vElem__$149;
    var __$l4__$157 = $$mods;
    $$mods = vBlock__$148 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$158 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$152 = undefined;
    $$mode = __$l0__$153;
    $$block = __$l1__$154;
    __$ctx._currBlock = __$l2__$155;
    $$elem = __$l3__$156;
    $$mods = __$l4__$157;
    $$elemMods = __$l5__$158;
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
            return [ function __$lb__$65() {
                var __$r__$66;
                var __$l0__$67 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                __$r__$66 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$67;
                return __$r__$66;
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
            return [ function __$lb__$68() {
                var __$r__$69;
                var __$l0__$70 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                __$r__$69 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$70;
                return __$r__$69;
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