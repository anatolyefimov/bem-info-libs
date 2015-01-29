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
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$15() {
                        var __$r__$16;
                        var __$l0__$17 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$16 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$17;
                        return __$r__$16;
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
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b34(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b36(__$ctx, __$ref);
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
        if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b46(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b47(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b61(__$ctx, __$ref);
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

function __$b6(__$ctx, __$ref) {
    var ctx__$29 = __$ctx.ctx;
    return {
        mainOffset: ctx__$29.mainOffset,
        secondaryOffset: ctx__$29.secondaryOffset,
        viewportOffset: ctx__$29.viewportOffset,
        directions: ctx__$29.directions,
        zIndexGroupLevel: ctx__$29.zIndexGroupLevel
    };
}

function __$b25(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b26(__$ctx, __$ref) {
    var content__$11 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$11)) return content__$11;
    var res__$12 = __$ctx.isSimple(content__$11) ? {
        block: "button",
        text: content__$11
    } : content__$11;
    if (res__$12.block === "button") {
        var resMods__$13 = res__$12.mods || (res__$12.mods = {}), dropdownMods__$14 = $$mods;
        resMods__$13.size || (resMods__$13.size = dropdownMods__$14.size);
        resMods__$13.theme || (resMods__$13.theme = dropdownMods__$14.theme);
        resMods__$13.disabled = dropdownMods__$14.disabled;
    }
    return res__$12;
}

function __$b27(__$ctx, __$ref) {
    var content__$25 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$25)) return content__$25;
    var res__$26 = __$ctx.isSimple(content__$25) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$25
    } : content__$25;
    if (res__$26.block === "link") {
        var resMods__$27 = res__$26.mods || (res__$26.mods = {}), dropdownMods__$28 = $$mods;
        resMods__$27.theme || (resMods__$27.theme = dropdownMods__$28.theme);
        resMods__$27.disabled = dropdownMods__$28.disabled;
    }
    return res__$26;
}

function __$b28(__$ctx, __$ref) {
    var popup__$30 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$30) || popup__$30.block !== "popup") {
        popup__$30 = {
            block: "popup",
            content: popup__$30
        };
    }
    var popupMods__$31 = popup__$30.mods || (popup__$30.mods = {});
    popupMods__$31.theme || (popupMods__$31.theme = $$mods.theme);
    popupMods__$31.hasOwnProperty("autoclosable") || (popupMods__$31.autoclosable = true);
    popupMods__$31.target = "anchor";
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$30 ];
}

function __$b34(__$ctx, __$ref) {
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

function __$b35(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b36(__$ctx, __$ref) {
    var ctx__$18 = __$ctx.ctx, attrs__$19 = {}, tabIndex__$20;
    if (!$$mods.disabled) {
        if (ctx__$18.url) {
            attrs__$19.href = ctx__$18.url;
            tabIndex__$20 = ctx__$18.tabIndex;
        } else {
            tabIndex__$20 = ctx__$18.tabIndex || 0;
        }
    }
    typeof tabIndex__$20 === "undefined" || (attrs__$19.tabindex = tabIndex__$20);
    ctx__$18.title && (attrs__$19.title = ctx__$18.title);
    ctx__$18.target && (attrs__$19.target = ctx__$18.target);
    return attrs__$19;
}

function __$b43(__$ctx, __$ref) {
    var mix__$35 = function __$lb__$36() {
        var __$r__$37;
        var __$l0__$38 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32;
        __$r__$37 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$38;
        return __$r__$37;
    }(), uaMix__$39 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$35 ? uaMix__$39.concat(mix__$35) : uaMix__$39;
}

function __$b45(__$ctx, __$ref) {
    var ctx__$21 = __$ctx.ctx;
    typeof ctx__$21.url === "object" && (ctx__$21.url = __$ctx.reapply(ctx__$21.url));
    var __$r__$23;
    var __$l0__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$24;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx;
    var __$r__$48;
    var __$l0__$49 = $$mode;
    $$mode = "";
    var __$l1__$50 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$46.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$46.title
            }, {
                block: "ua"
            }, ctx__$46.head, ctx__$46.styles, ctx__$46.favicon ? {
                elem: "favicon",
                url: ctx__$46.favicon
            } : "" ]
        }, ctx__$46 ]
    } ];
    var __$r__$52;
    var __$l2__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$53;
    __$r__$48 = __$r__$52;
    $$mode = __$l0__$49;
    __$ctx.ctx = __$l1__$50;
    return;
}

function __$b47(__$ctx, __$ref) {
    var BEM_INTERNAL__$54 = __$ctx.BEM.INTERNAL, ctx__$55 = __$ctx.ctx, isBEM__$56, tag__$57, res__$58;
    var __$r__$60;
    var __$l0__$61 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$62 = $$block;
    var __$r__$64;
    var __$l1__$65 = $$mode;
    $$mode = "tag";
    __$r__$64 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$65;
    tag__$57 = __$r__$64;
    typeof tag__$57 !== "undefined" || (tag__$57 = ctx__$55.tag);
    typeof tag__$57 !== "undefined" || (tag__$57 = "div");
    if (tag__$57) {
        var jsParams__$66, js__$67;
        if (vBlock__$62 && ctx__$55.js !== false) {
            var __$r__$68;
            var __$l2__$69 = $$mode;
            $$mode = "js";
            __$r__$68 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$69;
            js__$67 = __$r__$68;
            js__$67 = js__$67 ? __$ctx.extend(ctx__$55.js, js__$67 === true ? {} : js__$67) : ctx__$55.js === true ? {} : ctx__$55.js;
            js__$67 && ((jsParams__$66 = {})[BEM_INTERNAL__$54.buildClass(vBlock__$62, ctx__$55.elem)] = js__$67);
        }
        __$ctx._str += "<" + tag__$57;
        var __$r__$70;
        var __$l3__$71 = $$mode;
        $$mode = "bem";
        __$r__$70 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$71;
        isBEM__$56 = __$r__$70;
        typeof isBEM__$56 !== "undefined" || (isBEM__$56 = typeof ctx__$55.bem !== "undefined" ? ctx__$55.bem : ctx__$55.block || ctx__$55.elem);
        var __$r__$73;
        var __$l4__$74 = $$mode;
        $$mode = "cls";
        __$r__$73 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$74;
        var cls__$72 = __$r__$73;
        cls__$72 || (cls__$72 = ctx__$55.cls);
        var addJSInitClass__$75 = ctx__$55.block && jsParams__$66 && !ctx__$55.elem;
        if (isBEM__$56 || cls__$72) {
            __$ctx._str += ' class="';
            if (isBEM__$56) {
                __$ctx._str += BEM_INTERNAL__$54.buildClasses(vBlock__$62, ctx__$55.elem, ctx__$55.elemMods || ctx__$55.mods);
                var __$r__$77;
                var __$l5__$78 = $$mode;
                $$mode = "mix";
                __$r__$77 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$78;
                var mix__$76 = __$r__$77;
                ctx__$55.mix && (mix__$76 = mix__$76 ? [].concat(mix__$76, ctx__$55.mix) : ctx__$55.mix);
                if (mix__$76) {
                    var visited__$79 = {}, visitedKey__$80 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$79[visitedKey__$80(vBlock__$62, $$elem)] = true;
                    __$ctx.isArray(mix__$76) || (mix__$76 = [ mix__$76 ]);
                    for (var i__$81 = 0; i__$81 < mix__$76.length; i__$81++) {
                        var mixItem__$82 = mix__$76[i__$81], hasItem__$83 = mixItem__$82.block || mixItem__$82.elem, mixBlock__$84 = mixItem__$82.block || mixItem__$82._block || $$block, mixElem__$85 = mixItem__$82.elem || mixItem__$82._elem || $$elem;
                        hasItem__$83 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$54[hasItem__$83 ? "buildClasses" : "buildModsClasses"](mixBlock__$84, mixItem__$82.elem || mixItem__$82._elem || (mixItem__$82.block ? undefined : $$elem), mixItem__$82.elemMods || mixItem__$82.mods);
                        if (mixItem__$82.js) {
                            (jsParams__$66 || (jsParams__$66 = {}))[BEM_INTERNAL__$54.buildClass(mixBlock__$84, mixItem__$82.elem)] = mixItem__$82.js === true ? {} : mixItem__$82.js;
                            addJSInitClass__$75 || (addJSInitClass__$75 = mixBlock__$84 && !mixItem__$82.elem);
                        }
                        if (hasItem__$83 && !visited__$79[visitedKey__$80(mixBlock__$84, mixElem__$85)]) {
                            visited__$79[visitedKey__$80(mixBlock__$84, mixElem__$85)] = true;
                            var __$r__$87;
                            var __$l6__$88 = $$mode;
                            $$mode = "mix";
                            var __$l7__$89 = $$block;
                            $$block = mixBlock__$84;
                            var __$l8__$90 = $$elem;
                            $$elem = mixElem__$85;
                            __$r__$87 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$88;
                            $$block = __$l7__$89;
                            $$elem = __$l8__$90;
                            var nestedMix__$86 = __$r__$87;
                            if (nestedMix__$86) {
                                for (var j__$91 = 0; j__$91 < nestedMix__$86.length; j__$91++) {
                                    var nestedItem__$92 = nestedMix__$86[j__$91];
                                    if (!nestedItem__$92.block && !nestedItem__$92.elem || !visited__$79[visitedKey__$80(nestedItem__$92.block, nestedItem__$92.elem)]) {
                                        nestedItem__$92._block = mixBlock__$84;
                                        nestedItem__$92._elem = mixElem__$85;
                                        mix__$76.splice(i__$81 + 1, 0, nestedItem__$92);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$72 && (__$ctx._str += isBEM__$56 ? " " + cls__$72 : cls__$72);
            __$ctx._str += addJSInitClass__$75 ? ' i-bem"' : '"';
        }
        if (isBEM__$56 && jsParams__$66) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$66)) + '"';
        }
        var __$r__$94;
        var __$l9__$95 = $$mode;
        $$mode = "attrs";
        __$r__$94 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$95;
        var attrs__$93 = __$r__$94;
        attrs__$93 = __$ctx.extend(attrs__$93, ctx__$55.attrs);
        if (attrs__$93) {
            var name__$96, attr__$97;
            for (name__$96 in attrs__$93) {
                attr__$97 = attrs__$93[name__$96];
                if (typeof attr__$97 === "undefined") continue;
                __$ctx._str += " " + name__$96 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$97) ? attr__$97 : __$ctx.reapply(attr__$97)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$57)) {
        __$ctx._str += "/>";
    } else {
        tag__$57 && (__$ctx._str += ">");
        var __$r__$99;
        var __$l10__$100 = $$mode;
        $$mode = "content";
        __$r__$99 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$100;
        var content__$98 = __$r__$99;
        if (content__$98 || content__$98 === 0) {
            isBEM__$56 = vBlock__$62 || $$elem;
            var __$r__$101;
            var __$l11__$102 = $$mode;
            $$mode = "";
            var __$l12__$103 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$104 = __$ctx.position;
            __$ctx.position = isBEM__$56 ? 1 : __$ctx.position;
            var __$l14__$105 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$56 ? 1 : __$ctx._listLength;
            var __$l15__$106 = __$ctx.ctx;
            __$ctx.ctx = content__$98;
            __$r__$101 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$102;
            __$ctx._notNewList = __$l12__$103;
            __$ctx.position = __$l13__$104;
            __$ctx._listLength = __$l14__$105;
            __$ctx.ctx = __$l15__$106;
        }
        tag__$57 && (__$ctx._str += "</" + tag__$57 + ">");
    }
    res__$58 = __$ctx._str;
    __$r__$60 = undefined;
    __$ctx._str = __$l0__$61;
    __$ctx._buf.push(res__$58);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$108;
    var __$l0__$109 = $$mode;
    $$mode = "";
    var __$l1__$110 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$112;
    var __$l2__$113 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$112 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$113;
    __$r__$108 = __$r__$112;
    $$mode = __$l0__$109;
    __$ctx.ctx = __$l1__$110;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$114 = __$ctx.ctx;
    if (ctx__$114 && ctx__$114 !== true || ctx__$114 === 0) {
        __$ctx._str += ctx__$114 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$115 = __$ctx.ctx, len__$116 = ctx__$115.length, i__$117 = 0, prevPos__$118 = __$ctx.position, prevNotNewList__$119 = __$ctx._notNewList;
    if (prevNotNewList__$119) {
        __$ctx._listLength += len__$116 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$116;
    }
    __$ctx._notNewList = true;
    while (i__$117 < len__$116) (function __$lb__$120() {
        var __$r__$121;
        var __$l0__$122 = __$ctx.ctx;
        __$ctx.ctx = ctx__$115[i__$117++];
        __$r__$121 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$122;
        return __$r__$121;
    })();
    prevNotNewList__$119 || (__$ctx.position = prevPos__$118);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$123 = __$ctx.ctx.block, vElem__$124 = __$ctx.ctx.elem, block__$125 = __$ctx._currBlock || $$block;
    var __$r__$127;
    var __$l0__$128 = $$mode;
    $$mode = "default";
    var __$l1__$129 = $$block;
    $$block = vBlock__$123 || (vElem__$124 ? block__$125 : undefined);
    var __$l2__$130 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$123 || vElem__$124 ? undefined : block__$125;
    var __$l3__$131 = $$elem;
    $$elem = vElem__$124;
    var __$l4__$132 = $$mods;
    $$mods = vBlock__$123 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$133 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$127 = undefined;
    $$mode = __$l0__$128;
    $$block = __$l1__$129;
    __$ctx._currBlock = __$l2__$130;
    $$elem = __$l3__$131;
    $$mods = __$l4__$132;
    $$elemMods = __$l5__$133;
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
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b25(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "button") {
                    var __$r = __$b26(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "link") {
                    var __$r = __$b27(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b28(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$32() {
                    var __$r__$33;
                    var __$l0__$34 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$33 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$34;
                    return __$r__$33;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
            return [ function __$lb__$40() {
                var __$r__$41;
                var __$l0__$42 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$41 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$42;
                return __$r__$41;
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
            return [ function __$lb__$43() {
                var __$r__$44;
                var __$l0__$45 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 128;
                __$r__$44 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$45;
                return __$r__$44;
            }(), __$ctx.ctx.scripts ];
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