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
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
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
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$21() {
                        var __$r__$22;
                        var __$l0__$23 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$22 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$23;
                        return __$r__$22;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "popup") {
            if (!$$elem) {
                var __$r = __$b6(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b10(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b11(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b12(__$ctx, __$ref);
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
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
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
            if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b43(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b46(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b47(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b48(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
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
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b62(__$ctx, __$ref);
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

function __$b6(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    return {
        mainOffset: ctx__$35.mainOffset,
        secondaryOffset: ctx__$35.secondaryOffset,
        viewportOffset: ctx__$35.viewportOffset,
        directions: ctx__$35.directions,
        zIndexGroupLevel: ctx__$35.zIndexGroupLevel
    };
}

function __$b10(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, attrs__$6 = {
        type: $$mods.type || "button",
        name: ctx__$5.name,
        value: ctx__$5.val
    };
    $$mods.disabled && (attrs__$6.disabled = "disabled");
    return __$ctx.extend(function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), attrs__$6);
}

function __$b11(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b12(__$ctx, __$ref) {
    var ctx__$24 = __$ctx.ctx, attrs__$25 = {}, tabIndex__$26;
    if (!$$mods.disabled) {
        if (ctx__$24.url) {
            attrs__$25.href = ctx__$24.url;
            tabIndex__$26 = ctx__$24.tabIndex;
        } else {
            tabIndex__$26 = ctx__$24.tabIndex || 0;
        }
    }
    typeof tabIndex__$26 === "undefined" || (attrs__$25.tabindex = tabIndex__$26);
    ctx__$24.title && (attrs__$25.title = ctx__$24.title);
    ctx__$24.target && (attrs__$25.target = ctx__$24.target);
    return attrs__$25;
}

function __$b33(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b34(__$ctx, __$ref) {
    var content__$17 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$17)) return content__$17;
    var res__$18 = __$ctx.isSimple(content__$17) ? {
        block: "button",
        text: content__$17
    } : content__$17;
    if (res__$18.block === "button") {
        var resMods__$19 = res__$18.mods || (res__$18.mods = {}), dropdownMods__$20 = $$mods;
        resMods__$19.size || (resMods__$19.size = dropdownMods__$20.size);
        resMods__$19.theme || (resMods__$19.theme = dropdownMods__$20.theme);
        resMods__$19.disabled = dropdownMods__$20.disabled;
    }
    return res__$18;
}

function __$b35(__$ctx, __$ref) {
    var content__$31 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$31)) return content__$31;
    var res__$32 = __$ctx.isSimple(content__$31) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$31
    } : content__$31;
    if (res__$32.block === "link") {
        var resMods__$33 = res__$32.mods || (res__$32.mods = {}), dropdownMods__$34 = $$mods;
        resMods__$33.theme || (resMods__$33.theme = dropdownMods__$34.theme);
        resMods__$33.disabled = dropdownMods__$34.disabled;
    }
    return res__$32;
}

function __$b36(__$ctx, __$ref) {
    var popup__$36 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$36) || popup__$36.block !== "popup") {
        popup__$36 = {
            block: "popup",
            content: popup__$36
        };
    }
    var popupMods__$37 = popup__$36.mods || (popup__$36.mods = {});
    popupMods__$37.theme || (popupMods__$37.theme = $$mods.theme);
    popupMods__$37.hasOwnProperty("autoclosable") || (popupMods__$37.autoclosable = true);
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$36 ];
}

function __$b43(__$ctx, __$ref) {
    var mix__$38 = function __$lb__$39() {
        var __$r__$40;
        var __$l0__$41 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32;
        __$r__$40 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$41;
        return __$r__$40;
    }(), uaMix__$42 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$38 ? uaMix__$42.concat(mix__$38) : uaMix__$42;
}

function __$b45(__$ctx, __$ref) {
    var __$r__$12;
    var __$l0__$13 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$15;
    var __$l1__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$16;
    __$r__$12 = __$r__$15;
    __$ctx._button = __$l0__$13;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ctx__$27 = __$ctx.ctx;
    typeof ctx__$27.url === "object" && (ctx__$27.url = __$ctx.reapply(ctx__$27.url));
    var __$r__$29;
    var __$l0__$30 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$29 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$30;
    return;
}

function __$b47(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$49 = __$ctx.ctx;
    var __$r__$51;
    var __$l0__$52 = $$mode;
    $$mode = "";
    var __$l1__$53 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$49.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$49.title
            }, {
                block: "ua"
            }, ctx__$49.head, ctx__$49.styles, ctx__$49.favicon ? {
                elem: "favicon",
                url: ctx__$49.favicon
            } : "" ]
        }, ctx__$49 ]
    } ];
    var __$r__$55;
    var __$l2__$56 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$55 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$56;
    __$r__$51 = __$r__$55;
    $$mode = __$l0__$52;
    __$ctx.ctx = __$l1__$53;
    __$ctx._defPageApplied = false;
    return;
}

function __$b48(__$ctx, __$ref) {
    var BEM_INTERNAL__$57 = __$ctx.BEM.INTERNAL, ctx__$58 = __$ctx.ctx, isBEM__$59, tag__$60, res__$61;
    var __$r__$63;
    var __$l0__$64 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$65 = $$block;
    var __$r__$67;
    var __$l1__$68 = $$mode;
    $$mode = "tag";
    __$r__$67 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$68;
    tag__$60 = __$r__$67;
    typeof tag__$60 !== "undefined" || (tag__$60 = ctx__$58.tag);
    typeof tag__$60 !== "undefined" || (tag__$60 = "div");
    if (tag__$60) {
        var jsParams__$69, js__$70;
        if (vBlock__$65 && ctx__$58.js !== false) {
            var __$r__$71;
            var __$l2__$72 = $$mode;
            $$mode = "js";
            __$r__$71 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$72;
            js__$70 = __$r__$71;
            js__$70 = js__$70 ? __$ctx.extend(ctx__$58.js, js__$70 === true ? {} : js__$70) : ctx__$58.js === true ? {} : ctx__$58.js;
            js__$70 && ((jsParams__$69 = {})[BEM_INTERNAL__$57.buildClass(vBlock__$65, ctx__$58.elem)] = js__$70);
        }
        __$ctx._str += "<" + tag__$60;
        var __$r__$73;
        var __$l3__$74 = $$mode;
        $$mode = "bem";
        __$r__$73 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$74;
        isBEM__$59 = __$r__$73;
        typeof isBEM__$59 !== "undefined" || (isBEM__$59 = typeof ctx__$58.bem !== "undefined" ? ctx__$58.bem : ctx__$58.block || ctx__$58.elem);
        var __$r__$76;
        var __$l4__$77 = $$mode;
        $$mode = "cls";
        __$r__$76 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$77;
        var cls__$75 = __$r__$76;
        cls__$75 || (cls__$75 = ctx__$58.cls);
        var addJSInitClass__$78 = ctx__$58.block && jsParams__$69;
        if (isBEM__$59 || cls__$75) {
            __$ctx._str += ' class="';
            if (isBEM__$59) {
                __$ctx._str += BEM_INTERNAL__$57.buildClasses(vBlock__$65, ctx__$58.elem, ctx__$58.elemMods || ctx__$58.mods);
                var __$r__$80;
                var __$l5__$81 = $$mode;
                $$mode = "mix";
                __$r__$80 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$81;
                var mix__$79 = __$r__$80;
                ctx__$58.mix && (mix__$79 = mix__$79 ? [].concat(mix__$79, ctx__$58.mix) : ctx__$58.mix);
                if (mix__$79) {
                    var visited__$82 = {}, visitedKey__$83 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$82[visitedKey__$83(vBlock__$65, $$elem)] = true;
                    __$ctx.isArray(mix__$79) || (mix__$79 = [ mix__$79 ]);
                    for (var i__$84 = 0; i__$84 < mix__$79.length; i__$84++) {
                        var mixItem__$85 = mix__$79[i__$84], hasItem__$86 = mixItem__$85.block || mixItem__$85.elem, mixBlock__$87 = mixItem__$85.block || mixItem__$85._block || $$block, mixElem__$88 = mixItem__$85.elem || mixItem__$85._elem || $$elem;
                        hasItem__$86 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$57[hasItem__$86 ? "buildClasses" : "buildModsClasses"](mixBlock__$87, mixItem__$85.elem || mixItem__$85._elem || (mixItem__$85.block ? undefined : $$elem), mixItem__$85.elemMods || mixItem__$85.mods);
                        if (mixItem__$85.js) {
                            (jsParams__$69 || (jsParams__$69 = {}))[BEM_INTERNAL__$57.buildClass(mixBlock__$87, mixItem__$85.elem)] = mixItem__$85.js === true ? {} : mixItem__$85.js;
                            addJSInitClass__$78 || (addJSInitClass__$78 = mixBlock__$87 && !mixItem__$85.elem);
                        }
                        if (hasItem__$86 && !visited__$82[visitedKey__$83(mixBlock__$87, mixElem__$88)]) {
                            visited__$82[visitedKey__$83(mixBlock__$87, mixElem__$88)] = true;
                            var __$r__$90;
                            var __$l6__$91 = $$mode;
                            $$mode = "mix";
                            var __$l7__$92 = $$block;
                            $$block = mixBlock__$87;
                            var __$l8__$93 = $$elem;
                            $$elem = mixElem__$88;
                            __$r__$90 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$91;
                            $$block = __$l7__$92;
                            $$elem = __$l8__$93;
                            var nestedMix__$89 = __$r__$90;
                            if (nestedMix__$89) {
                                for (var j__$94 = 0; j__$94 < nestedMix__$89.length; j__$94++) {
                                    var nestedItem__$95 = nestedMix__$89[j__$94];
                                    if (!nestedItem__$95.block && !nestedItem__$95.elem || !visited__$82[visitedKey__$83(nestedItem__$95.block, nestedItem__$95.elem)]) {
                                        nestedItem__$95._block = mixBlock__$87;
                                        nestedItem__$95._elem = mixElem__$88;
                                        mix__$79.splice(i__$84 + 1, 0, nestedItem__$95);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$75 && (__$ctx._str += isBEM__$59 ? " " + cls__$75 : cls__$75);
            __$ctx._str += addJSInitClass__$78 ? ' i-bem"' : '"';
        }
        if (isBEM__$59 && jsParams__$69) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$69)) + '"';
        }
        var __$r__$97;
        var __$l9__$98 = $$mode;
        $$mode = "attrs";
        __$r__$97 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$98;
        var attrs__$96 = __$r__$97;
        attrs__$96 = __$ctx.extend(attrs__$96, ctx__$58.attrs);
        if (attrs__$96) {
            var name__$99, attr__$100;
            for (name__$99 in attrs__$96) {
                attr__$100 = attrs__$96[name__$99];
                if (typeof attr__$100 === "undefined") continue;
                __$ctx._str += " " + name__$99 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$100) ? attr__$100 : __$ctx.reapply(attr__$100)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$60)) {
        __$ctx._str += "/>";
    } else {
        tag__$60 && (__$ctx._str += ">");
        var __$r__$102;
        var __$l10__$103 = $$mode;
        $$mode = "content";
        __$r__$102 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$103;
        var content__$101 = __$r__$102;
        if (content__$101 || content__$101 === 0) {
            isBEM__$59 = vBlock__$65 || $$elem;
            var __$r__$104;
            var __$l11__$105 = $$mode;
            $$mode = "";
            var __$l12__$106 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$107 = __$ctx.position;
            __$ctx.position = isBEM__$59 ? 1 : __$ctx.position;
            var __$l14__$108 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$59 ? 1 : __$ctx._listLength;
            var __$l15__$109 = __$ctx.ctx;
            __$ctx.ctx = content__$101;
            __$r__$104 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$105;
            __$ctx._notNewList = __$l12__$106;
            __$ctx.position = __$l13__$107;
            __$ctx._listLength = __$l14__$108;
            __$ctx.ctx = __$l15__$109;
        }
        tag__$60 && (__$ctx._str += "</" + tag__$60 + ">");
    }
    res__$61 = __$ctx._str;
    __$r__$63 = undefined;
    __$ctx._str = __$l0__$64;
    __$ctx._buf.push(res__$61);
    return;
}

function __$b58(__$ctx, __$ref) {
    var __$r__$111;
    var __$l0__$112 = $$mode;
    $$mode = "";
    var __$l1__$113 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$115;
    var __$l2__$116 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$115 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$116;
    __$r__$111 = __$r__$115;
    $$mode = __$l0__$112;
    __$ctx.ctx = __$l1__$113;
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$117 = __$ctx.ctx;
    if (ctx__$117 && ctx__$117 !== true || ctx__$117 === 0) {
        __$ctx._str += ctx__$117 + "";
    }
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b61(__$ctx, __$ref) {
    var ctx__$118 = __$ctx.ctx, len__$119 = ctx__$118.length, i__$120 = 0, prevPos__$121 = __$ctx.position, prevNotNewList__$122 = __$ctx._notNewList;
    if (prevNotNewList__$122) {
        __$ctx._listLength += len__$119 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$119;
    }
    __$ctx._notNewList = true;
    while (i__$120 < len__$119) (function __$lb__$123() {
        var __$r__$124;
        var __$l0__$125 = __$ctx.ctx;
        __$ctx.ctx = ctx__$118[i__$120++];
        __$r__$124 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$125;
        return __$r__$124;
    })();
    prevNotNewList__$122 || (__$ctx.position = prevPos__$121);
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$126 = __$ctx.ctx.block, vElem__$127 = __$ctx.ctx.elem, block__$128 = __$ctx._currBlock || $$block;
    var __$r__$130;
    var __$l0__$131 = $$mode;
    $$mode = "default";
    var __$l1__$132 = $$block;
    $$block = vBlock__$126 || (vElem__$127 ? block__$128 : undefined);
    var __$l2__$133 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$126 || vElem__$127 ? undefined : block__$128;
    var __$l3__$134 = $$elem;
    $$elem = vElem__$127;
    var __$l4__$135 = $$mods;
    $$mods = vBlock__$126 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$136 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$130 = undefined;
    $$mode = __$l0__$131;
    $$block = __$l1__$132;
    __$ctx._currBlock = __$l2__$133;
    $$elem = __$l3__$134;
    $$mods = __$l4__$135;
    $$elemMods = __$l5__$136;
    return;
}

function __$g0(__$ctx, __$ref) {
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
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "button") {
                    var __$r = __$b34(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "link") {
                    var __$r = __$b35(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
            return [ function __$lb__$43() {
                var __$r__$44;
                var __$l0__$45 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$44 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$45;
                return __$r__$44;
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
            return [ function __$lb__$46() {
                var __$r__$47;
                var __$l0__$48 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 128;
                __$r__$47 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$48;
                return __$r__$47;
            }(), __$ctx.ctx.scripts ];
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    }
    return __$ctx.ctx.content;
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