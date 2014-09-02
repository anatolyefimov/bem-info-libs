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
    if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
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
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$14() {
                        var __$r__$15;
                        var __$l0__$16 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$15 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$16;
                        return __$r__$15;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "popup") {
            if (!$$elem) {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b23(__$ctx, __$ref);
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
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$b25(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b26(__$ctx, __$ref);
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
        if (__$t === "link") {
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
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 64) === 0) {
                            var __$r = __$b36(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b37(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b39(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b63(__$ctx, __$ref);
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

function __$b21(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    return {
        mainOffset: ctx__$35.mainOffset,
        secondaryOffset: ctx__$35.secondaryOffset,
        viewportOffset: ctx__$35.viewportOffset,
        directions: ctx__$35.directions,
        zIndexGroupLevel: ctx__$35.zIndexGroupLevel
    };
}

function __$b23(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, attrs__$4 = {}, tabIndex__$5;
    if (!$$mods.disabled) {
        if (ctx__$3.url) {
            attrs__$4.href = ctx__$3.url;
            tabIndex__$5 = ctx__$3.tabIndex;
        } else {
            tabIndex__$5 = ctx__$3.tabIndex || 0;
        }
    }
    typeof tabIndex__$5 === "undefined" || (attrs__$4.tabindex = tabIndex__$5);
    ctx__$3.title && (attrs__$4.title = ctx__$3.title);
    ctx__$3.target && (attrs__$4.target = ctx__$3.target);
    return attrs__$4;
}

function __$b25(__$ctx, __$ref) {
    var ctx__$19 = __$ctx.ctx, attrs__$20 = {
        type: $$mods.type || "button",
        name: ctx__$19.name,
        value: ctx__$19.val
    };
    $$mods.disabled && (attrs__$20.disabled = "disabled");
    return __$ctx.extend(function __$lb__$21() {
        var __$r__$22;
        var __$l0__$23 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$22 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$23;
        return __$r__$22;
    }(), attrs__$20);
}

function __$b26(__$ctx, __$ref) {
    var ctx__$24 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$24.tabIndex,
        id: ctx__$24.id,
        title: ctx__$24.title
    };
}

function __$b34(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b35(__$ctx, __$ref) {
    var __$r__$26;
    var __$l0__$27 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$29;
    var __$l1__$30 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$29 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$30;
    __$r__$26 = __$r__$29;
    __$ctx._button = __$l0__$27;
    return;
}

function __$b36(__$ctx, __$ref) {
    var url__$41 = __$ctx.ctx.url;
    var __$r__$43;
    var __$l0__$44 = $$mode;
    $$mode = "";
    var __$l1__$45 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$41 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$47;
    var __$l2__$48 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$47 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$48;
    __$r__$43 = __$r__$47;
    $$mode = __$l0__$44;
    __$ctx.ctx = __$l1__$45;
    return;
}

function __$b37(__$ctx, __$ref) {
    var ie__$49 = __$ctx.ctx.ie, hideRule__$50 = !ie__$49 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$49 === "!IE" ? [ ie__$49, "<!-->", "<!--" ] : [ ie__$49, "", "" ];
    var __$r__$52;
    var __$l0__$53 = $$mode;
    $$mode = "";
    var __$l3__$54 = __$ctx.ctx;
    var __$l1__$55 = __$l3__$54._ieCommented;
    __$l3__$54._ieCommented = true;
    var __$l2__$56 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$50[0] + "]>" + hideRule__$50[1], __$ctx.ctx, hideRule__$50[2] + "<![endif]-->" ];
    __$r__$52 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$53;
    __$l3__$54._ieCommented = __$l1__$55;
    __$ctx.ctx = __$l2__$56;
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$63 = __$ctx.ctx;
    var __$r__$65;
    var __$l0__$66 = $$mode;
    $$mode = "";
    var __$l1__$67 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$63.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$63.title
            }, {
                block: "ua"
            }, ctx__$63.head, ctx__$63.styles, ctx__$63.favicon ? {
                elem: "favicon",
                url: ctx__$63.favicon
            } : "" ]
        }, ctx__$63 ]
    } ];
    var __$r__$69;
    var __$l2__$70 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$69 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$70;
    __$r__$65 = __$r__$69;
    $$mode = __$l0__$66;
    __$ctx.ctx = __$l1__$67;
    __$ctx._defPageApplied = false;
    return;
}

function __$b39(__$ctx, __$ref) {
    var BEM_INTERNAL__$71 = __$ctx.BEM.INTERNAL, ctx__$72 = __$ctx.ctx, isBEM__$73, tag__$74, res__$75;
    var __$r__$77;
    var __$l0__$78 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$79 = $$block;
    var __$r__$81;
    var __$l1__$82 = $$mode;
    $$mode = "tag";
    __$r__$81 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$82;
    tag__$74 = __$r__$81;
    typeof tag__$74 !== "undefined" || (tag__$74 = ctx__$72.tag);
    typeof tag__$74 !== "undefined" || (tag__$74 = "div");
    if (tag__$74) {
        var jsParams__$83, js__$84;
        if (vBlock__$79 && ctx__$72.js !== false) {
            var __$r__$85;
            var __$l2__$86 = $$mode;
            $$mode = "js";
            __$r__$85 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$86;
            js__$84 = __$r__$85;
            js__$84 = js__$84 ? __$ctx.extend(ctx__$72.js, js__$84 === true ? {} : js__$84) : ctx__$72.js === true ? {} : ctx__$72.js;
            js__$84 && ((jsParams__$83 = {})[BEM_INTERNAL__$71.buildClass(vBlock__$79, ctx__$72.elem)] = js__$84);
        }
        __$ctx._str += "<" + tag__$74;
        var __$r__$87;
        var __$l3__$88 = $$mode;
        $$mode = "bem";
        __$r__$87 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$88;
        isBEM__$73 = __$r__$87;
        typeof isBEM__$73 !== "undefined" || (isBEM__$73 = typeof ctx__$72.bem !== "undefined" ? ctx__$72.bem : ctx__$72.block || ctx__$72.elem);
        var __$r__$90;
        var __$l4__$91 = $$mode;
        $$mode = "cls";
        __$r__$90 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$91;
        var cls__$89 = __$r__$90;
        cls__$89 || (cls__$89 = ctx__$72.cls);
        var addJSInitClass__$92 = ctx__$72.block && jsParams__$83;
        if (isBEM__$73 || cls__$89) {
            __$ctx._str += ' class="';
            if (isBEM__$73) {
                __$ctx._str += BEM_INTERNAL__$71.buildClasses(vBlock__$79, ctx__$72.elem, ctx__$72.elemMods || ctx__$72.mods);
                var __$r__$94;
                var __$l5__$95 = $$mode;
                $$mode = "mix";
                __$r__$94 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$95;
                var mix__$93 = __$r__$94;
                ctx__$72.mix && (mix__$93 = mix__$93 ? [].concat(mix__$93, ctx__$72.mix) : ctx__$72.mix);
                if (mix__$93) {
                    var visited__$96 = {}, visitedKey__$97 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$96[visitedKey__$97(vBlock__$79, $$elem)] = true;
                    __$ctx.isArray(mix__$93) || (mix__$93 = [ mix__$93 ]);
                    for (var i__$98 = 0; i__$98 < mix__$93.length; i__$98++) {
                        var mixItem__$99 = mix__$93[i__$98], hasItem__$100 = mixItem__$99.block || mixItem__$99.elem, mixBlock__$101 = mixItem__$99.block || mixItem__$99._block || $$block, mixElem__$102 = mixItem__$99.elem || mixItem__$99._elem || $$elem;
                        hasItem__$100 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$71[hasItem__$100 ? "buildClasses" : "buildModsClasses"](mixBlock__$101, mixItem__$99.elem || mixItem__$99._elem || (mixItem__$99.block ? undefined : $$elem), mixItem__$99.elemMods || mixItem__$99.mods);
                        if (mixItem__$99.js) {
                            (jsParams__$83 || (jsParams__$83 = {}))[BEM_INTERNAL__$71.buildClass(mixBlock__$101, mixItem__$99.elem)] = mixItem__$99.js === true ? {} : mixItem__$99.js;
                            addJSInitClass__$92 || (addJSInitClass__$92 = mixBlock__$101 && !mixItem__$99.elem);
                        }
                        if (hasItem__$100 && !visited__$96[visitedKey__$97(mixBlock__$101, mixElem__$102)]) {
                            visited__$96[visitedKey__$97(mixBlock__$101, mixElem__$102)] = true;
                            var __$r__$104;
                            var __$l6__$105 = $$mode;
                            $$mode = "mix";
                            var __$l7__$106 = $$block;
                            $$block = mixBlock__$101;
                            var __$l8__$107 = $$elem;
                            $$elem = mixElem__$102;
                            __$r__$104 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$105;
                            $$block = __$l7__$106;
                            $$elem = __$l8__$107;
                            var nestedMix__$103 = __$r__$104;
                            if (nestedMix__$103) {
                                for (var j__$108 = 0; j__$108 < nestedMix__$103.length; j__$108++) {
                                    var nestedItem__$109 = nestedMix__$103[j__$108];
                                    if (!nestedItem__$109.block && !nestedItem__$109.elem || !visited__$96[visitedKey__$97(nestedItem__$109.block, nestedItem__$109.elem)]) {
                                        nestedItem__$109._block = mixBlock__$101;
                                        nestedItem__$109._elem = mixElem__$102;
                                        mix__$93.splice(i__$98 + 1, 0, nestedItem__$109);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$89 && (__$ctx._str += isBEM__$73 ? " " + cls__$89 : cls__$89);
            __$ctx._str += addJSInitClass__$92 ? ' i-bem"' : '"';
        }
        if (isBEM__$73 && jsParams__$83) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$83)) + '"';
        }
        var __$r__$111;
        var __$l9__$112 = $$mode;
        $$mode = "attrs";
        __$r__$111 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$112;
        var attrs__$110 = __$r__$111;
        attrs__$110 = __$ctx.extend(attrs__$110, ctx__$72.attrs);
        if (attrs__$110) {
            var name__$113, attr__$114;
            for (name__$113 in attrs__$110) {
                attr__$114 = attrs__$110[name__$113];
                if (typeof attr__$114 === "undefined") continue;
                __$ctx._str += " " + name__$113 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$114) ? attr__$114 : __$ctx.reapply(attr__$114)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$74)) {
        __$ctx._str += "/>";
    } else {
        tag__$74 && (__$ctx._str += ">");
        var __$r__$116;
        var __$l10__$117 = $$mode;
        $$mode = "content";
        __$r__$116 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$117;
        var content__$115 = __$r__$116;
        if (content__$115 || content__$115 === 0) {
            isBEM__$73 = vBlock__$79 || $$elem;
            var __$r__$118;
            var __$l11__$119 = $$mode;
            $$mode = "";
            var __$l12__$120 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$121 = __$ctx.position;
            __$ctx.position = isBEM__$73 ? 1 : __$ctx.position;
            var __$l14__$122 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$73 ? 1 : __$ctx._listLength;
            var __$l15__$123 = __$ctx.ctx;
            __$ctx.ctx = content__$115;
            __$r__$118 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$119;
            __$ctx._notNewList = __$l12__$120;
            __$ctx.position = __$l13__$121;
            __$ctx._listLength = __$l14__$122;
            __$ctx.ctx = __$l15__$123;
        }
        tag__$74 && (__$ctx._str += "</" + tag__$74 + ">");
    }
    res__$75 = __$ctx._str;
    __$r__$77 = undefined;
    __$ctx._str = __$l0__$78;
    __$ctx._buf.push(res__$75);
    return;
}

function __$b40(__$ctx, __$ref) {
    var content__$10 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$10)) return content__$10;
    var res__$11 = __$ctx.isSimple(content__$10) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$10
    } : content__$10;
    if (res__$11.block === "link") {
        var resMods__$12 = res__$11.mods || (res__$11.mods = {}), dropdownMods__$13 = $$mods;
        resMods__$12.theme || (resMods__$12.theme = dropdownMods__$13.theme);
        resMods__$12.disabled = dropdownMods__$13.disabled;
    }
    return res__$11;
}

function __$b41(__$ctx, __$ref) {
    var content__$31 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$31)) return content__$31;
    var res__$32 = __$ctx.isSimple(content__$31) ? {
        block: "button",
        text: content__$31
    } : content__$31;
    if (res__$32.block === "button") {
        var resMods__$33 = res__$32.mods || (res__$32.mods = {}), dropdownMods__$34 = $$mods;
        resMods__$33.size || (resMods__$33.size = dropdownMods__$34.size);
        resMods__$33.theme || (resMods__$33.theme = dropdownMods__$34.theme);
        resMods__$33.disabled = dropdownMods__$34.disabled;
    }
    return res__$32;
}

function __$b42(__$ctx, __$ref) {
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

function __$b44(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx, content__$18 = [ ctx__$17.icon ];
    "text" in ctx__$17 && content__$18.push({
        elem: "text",
        content: ctx__$17.text
    });
    return content__$18;
}

function __$b59(__$ctx, __$ref) {
    var __$r__$125;
    var __$l0__$126 = $$mode;
    $$mode = "";
    var __$l1__$127 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$129;
    var __$l2__$130 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$129 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$130;
    __$r__$125 = __$r__$129;
    $$mode = __$l0__$126;
    __$ctx.ctx = __$l1__$127;
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$131 = __$ctx.ctx;
    if (ctx__$131 && ctx__$131 !== true || ctx__$131 === 0) {
        __$ctx._str += ctx__$131 + "";
    }
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b62(__$ctx, __$ref) {
    var ctx__$132 = __$ctx.ctx, len__$133 = ctx__$132.length, i__$134 = 0, prevPos__$135 = __$ctx.position, prevNotNewList__$136 = __$ctx._notNewList;
    if (prevNotNewList__$136) {
        __$ctx._listLength += len__$133 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$133;
    }
    __$ctx._notNewList = true;
    while (i__$134 < len__$133) (function __$lb__$137() {
        var __$r__$138;
        var __$l0__$139 = __$ctx.ctx;
        __$ctx.ctx = ctx__$132[i__$134++];
        __$r__$138 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$139;
        return __$r__$138;
    })();
    prevNotNewList__$136 || (__$ctx.position = prevPos__$135);
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$140 = __$ctx.ctx.block, vElem__$141 = __$ctx.ctx.elem, block__$142 = __$ctx._currBlock || $$block;
    var __$r__$144;
    var __$l0__$145 = $$mode;
    $$mode = "default";
    var __$l1__$146 = $$block;
    $$block = vBlock__$140 || (vElem__$141 ? block__$142 : undefined);
    var __$l2__$147 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$140 || vElem__$141 ? undefined : block__$142;
    var __$l3__$148 = $$elem;
    $$elem = vElem__$141;
    var __$l4__$149 = $$mods;
    $$mods = vBlock__$140 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$150 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$144 = undefined;
    $$mode = __$l0__$145;
    $$block = __$l1__$146;
    __$ctx._currBlock = __$l2__$147;
    $$elem = __$l3__$148;
    $$mods = __$l4__$149;
    $$elemMods = __$l5__$150;
    return;
}

function __$g0(__$ctx, __$ref) {
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
        if (__$t === "link") {
            return "link";
        } else if (__$t === "js") {
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
    if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "link") {
                    var __$r = __$b40(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "button") {
                    var __$r = __$b41(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b44(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 32) === 0) {
                return [ function __$lb__$38() {
                    var __$r__$39;
                    var __$l0__$40 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$39 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$40;
                    return __$r__$39;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$57() {
                var __$r__$58;
                var __$l0__$59 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 128;
                __$r__$58 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$59;
                return __$r__$58;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
            return [ function __$lb__$60() {
                var __$r__$61;
                var __$l0__$62 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 256;
                __$r__$61 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$62;
                return __$r__$61;
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