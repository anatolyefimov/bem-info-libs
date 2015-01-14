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
                var __$t = $$mods;
                if (__$t) {
                    if ($$mods && $$mods["type"] === "link" && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
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
                    if ($$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$8() {
                            var __$r__$9;
                            var __$l0__$10 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4;
                            __$r__$9 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$10;
                            return __$r__$9;
                        }(), {
                            live: false
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                return true;
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
            if (!$$elem && $$mods && $$mods["type"] === "link" && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b6(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8) === 0) {
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
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && $$mods && $$mods["type"] === "link") {
                return "a";
            }
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$25() {
                        var __$r__$26;
                        var __$l0__$27 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$26 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$27;
                        return __$r__$26;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ function __$lb__$33() {
                    var __$r__$34;
                    var __$l0__$35 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$34 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$35;
                    return __$r__$34;
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
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$36() {
                    var __$r__$37;
                    var __$l0__$38 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$37 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$38;
                    return __$r__$37;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b37(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b39(__$ctx, __$ref);
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
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b50(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b51(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b53(__$ctx, __$ref);
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
    var ctx__$3 = __$ctx.ctx, attrs__$4 = {};
    ctx__$3.target && (attrs__$4.target = ctx__$3.target);
    $$mods.disabled ? attrs__$4["aria-disabled"] = true : attrs__$4.href = ctx__$3.url;
    return __$ctx.extend(function __$lb__$5() {
        var __$r__$6;
        var __$l0__$7 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$6 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$7;
        return __$r__$6;
    }(), attrs__$4);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$13 = __$ctx.ctx, attrs__$14 = {
        type: $$mods.type || "button",
        name: ctx__$13.name,
        value: ctx__$13.val
    };
    $$mods.disabled && (attrs__$14.disabled = "disabled");
    return __$ctx.extend(function __$lb__$15() {
        var __$r__$16;
        var __$l0__$17 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$16 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$17;
        return __$r__$16;
    }(), attrs__$14);
}

function __$b9(__$ctx, __$ref) {
    var ctx__$18 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$18.tabIndex,
        id: ctx__$18.id,
        title: ctx__$18.title
    };
}

function __$b28(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx, content__$12 = [ ctx__$11.icon ];
    "text" in ctx__$11 && content__$12.push({
        elem: "text",
        content: ctx__$11.text
    });
    return content__$12;
}

function __$b35(__$ctx, __$ref) {
    var mix__$28 = function __$lb__$29() {
        var __$r__$30;
        var __$l0__$31 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$30 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$31;
        return __$r__$30;
    }(), uaMix__$32 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$28 ? uaMix__$32.concat(mix__$28) : uaMix__$32;
}

function __$b37(__$ctx, __$ref) {
    var __$r__$20;
    var __$l0__$21 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$23;
    var __$l1__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$24;
    __$r__$20 = __$r__$23;
    __$ctx._button = __$l0__$21;
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$39 = __$ctx.ctx;
    var __$r__$41;
    var __$l0__$42 = $$mode;
    $$mode = "";
    var __$l1__$43 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$39.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$39.title
            }, {
                block: "ua"
            }, ctx__$39.head, ctx__$39.styles, ctx__$39.favicon ? {
                elem: "favicon",
                url: ctx__$39.favicon
            } : "" ]
        }, ctx__$39 ]
    } ];
    var __$r__$45;
    var __$l2__$46 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$45 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$46;
    __$r__$41 = __$r__$45;
    $$mode = __$l0__$42;
    __$ctx.ctx = __$l1__$43;
    __$ctx._defPageApplied = false;
    return;
}

function __$b39(__$ctx, __$ref) {
    var BEM_INTERNAL__$47 = __$ctx.BEM.INTERNAL, ctx__$48 = __$ctx.ctx, isBEM__$49, tag__$50, res__$51;
    var __$r__$53;
    var __$l0__$54 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$55 = $$block;
    var __$r__$57;
    var __$l1__$58 = $$mode;
    $$mode = "tag";
    __$r__$57 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$58;
    tag__$50 = __$r__$57;
    typeof tag__$50 !== "undefined" || (tag__$50 = ctx__$48.tag);
    typeof tag__$50 !== "undefined" || (tag__$50 = "div");
    if (tag__$50) {
        var jsParams__$59, js__$60;
        if (vBlock__$55 && ctx__$48.js !== false) {
            var __$r__$61;
            var __$l2__$62 = $$mode;
            $$mode = "js";
            __$r__$61 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$62;
            js__$60 = __$r__$61;
            js__$60 = js__$60 ? __$ctx.extend(ctx__$48.js, js__$60 === true ? {} : js__$60) : ctx__$48.js === true ? {} : ctx__$48.js;
            js__$60 && ((jsParams__$59 = {})[BEM_INTERNAL__$47.buildClass(vBlock__$55, ctx__$48.elem)] = js__$60);
        }
        __$ctx._str += "<" + tag__$50;
        var __$r__$63;
        var __$l3__$64 = $$mode;
        $$mode = "bem";
        __$r__$63 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$64;
        isBEM__$49 = __$r__$63;
        typeof isBEM__$49 !== "undefined" || (isBEM__$49 = typeof ctx__$48.bem !== "undefined" ? ctx__$48.bem : ctx__$48.block || ctx__$48.elem);
        var __$r__$66;
        var __$l4__$67 = $$mode;
        $$mode = "cls";
        __$r__$66 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$67;
        var cls__$65 = __$r__$66;
        cls__$65 || (cls__$65 = ctx__$48.cls);
        var addJSInitClass__$68 = ctx__$48.block && jsParams__$59 && !ctx__$48.elem;
        if (isBEM__$49 || cls__$65) {
            __$ctx._str += ' class="';
            if (isBEM__$49) {
                __$ctx._str += BEM_INTERNAL__$47.buildClasses(vBlock__$55, ctx__$48.elem, ctx__$48.elemMods || ctx__$48.mods);
                var __$r__$70;
                var __$l5__$71 = $$mode;
                $$mode = "mix";
                __$r__$70 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$71;
                var mix__$69 = __$r__$70;
                ctx__$48.mix && (mix__$69 = mix__$69 ? [].concat(mix__$69, ctx__$48.mix) : ctx__$48.mix);
                if (mix__$69) {
                    var visited__$72 = {}, visitedKey__$73 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$72[visitedKey__$73(vBlock__$55, $$elem)] = true;
                    __$ctx.isArray(mix__$69) || (mix__$69 = [ mix__$69 ]);
                    for (var i__$74 = 0; i__$74 < mix__$69.length; i__$74++) {
                        var mixItem__$75 = mix__$69[i__$74], hasItem__$76 = mixItem__$75.block || mixItem__$75.elem, mixBlock__$77 = mixItem__$75.block || mixItem__$75._block || $$block, mixElem__$78 = mixItem__$75.elem || mixItem__$75._elem || $$elem;
                        hasItem__$76 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$47[hasItem__$76 ? "buildClasses" : "buildModsClasses"](mixBlock__$77, mixItem__$75.elem || mixItem__$75._elem || (mixItem__$75.block ? undefined : $$elem), mixItem__$75.elemMods || mixItem__$75.mods);
                        if (mixItem__$75.js) {
                            (jsParams__$59 || (jsParams__$59 = {}))[BEM_INTERNAL__$47.buildClass(mixBlock__$77, mixItem__$75.elem)] = mixItem__$75.js === true ? {} : mixItem__$75.js;
                            addJSInitClass__$68 || (addJSInitClass__$68 = mixBlock__$77 && !mixItem__$75.elem);
                        }
                        if (hasItem__$76 && !visited__$72[visitedKey__$73(mixBlock__$77, mixElem__$78)]) {
                            visited__$72[visitedKey__$73(mixBlock__$77, mixElem__$78)] = true;
                            var __$r__$80;
                            var __$l6__$81 = $$mode;
                            $$mode = "mix";
                            var __$l7__$82 = $$block;
                            $$block = mixBlock__$77;
                            var __$l8__$83 = $$elem;
                            $$elem = mixElem__$78;
                            __$r__$80 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$81;
                            $$block = __$l7__$82;
                            $$elem = __$l8__$83;
                            var nestedMix__$79 = __$r__$80;
                            if (nestedMix__$79) {
                                for (var j__$84 = 0; j__$84 < nestedMix__$79.length; j__$84++) {
                                    var nestedItem__$85 = nestedMix__$79[j__$84];
                                    if (!nestedItem__$85.block && !nestedItem__$85.elem || !visited__$72[visitedKey__$73(nestedItem__$85.block, nestedItem__$85.elem)]) {
                                        nestedItem__$85._block = mixBlock__$77;
                                        nestedItem__$85._elem = mixElem__$78;
                                        mix__$69.splice(i__$74 + 1, 0, nestedItem__$85);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$65 && (__$ctx._str += isBEM__$49 ? " " + cls__$65 : cls__$65);
            __$ctx._str += addJSInitClass__$68 ? ' i-bem"' : '"';
        }
        if (isBEM__$49 && jsParams__$59) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$59)) + '"';
        }
        var __$r__$87;
        var __$l9__$88 = $$mode;
        $$mode = "attrs";
        __$r__$87 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$88;
        var attrs__$86 = __$r__$87;
        attrs__$86 = __$ctx.extend(attrs__$86, ctx__$48.attrs);
        if (attrs__$86) {
            var name__$89, attr__$90;
            for (name__$89 in attrs__$86) {
                attr__$90 = attrs__$86[name__$89];
                if (typeof attr__$90 === "undefined") continue;
                __$ctx._str += " " + name__$89 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$90) ? attr__$90 : __$ctx.reapply(attr__$90)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$50)) {
        __$ctx._str += "/>";
    } else {
        tag__$50 && (__$ctx._str += ">");
        var __$r__$92;
        var __$l10__$93 = $$mode;
        $$mode = "content";
        __$r__$92 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$93;
        var content__$91 = __$r__$92;
        if (content__$91 || content__$91 === 0) {
            isBEM__$49 = vBlock__$55 || $$elem;
            var __$r__$94;
            var __$l11__$95 = $$mode;
            $$mode = "";
            var __$l12__$96 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$97 = __$ctx.position;
            __$ctx.position = isBEM__$49 ? 1 : __$ctx.position;
            var __$l14__$98 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$49 ? 1 : __$ctx._listLength;
            var __$l15__$99 = __$ctx.ctx;
            __$ctx.ctx = content__$91;
            __$r__$94 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$95;
            __$ctx._notNewList = __$l12__$96;
            __$ctx.position = __$l13__$97;
            __$ctx._listLength = __$l14__$98;
            __$ctx.ctx = __$l15__$99;
        }
        tag__$50 && (__$ctx._str += "</" + tag__$50 + ">");
    }
    res__$51 = __$ctx._str;
    __$r__$53 = undefined;
    __$ctx._str = __$l0__$54;
    __$ctx._buf.push(res__$51);
    return;
}

function __$b49(__$ctx, __$ref) {
    var __$r__$101;
    var __$l0__$102 = $$mode;
    $$mode = "";
    var __$l1__$103 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$105;
    var __$l2__$106 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$105 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$106;
    __$r__$101 = __$r__$105;
    $$mode = __$l0__$102;
    __$ctx.ctx = __$l1__$103;
    return;
}

function __$b50(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$107 = __$ctx.ctx;
    if (ctx__$107 && ctx__$107 !== true || ctx__$107 === 0) {
        __$ctx._str += ctx__$107 + "";
    }
    return;
}

function __$b51(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b52(__$ctx, __$ref) {
    var ctx__$108 = __$ctx.ctx, len__$109 = ctx__$108.length, i__$110 = 0, prevPos__$111 = __$ctx.position, prevNotNewList__$112 = __$ctx._notNewList;
    if (prevNotNewList__$112) {
        __$ctx._listLength += len__$109 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$109;
    }
    __$ctx._notNewList = true;
    while (i__$110 < len__$109) (function __$lb__$113() {
        var __$r__$114;
        var __$l0__$115 = __$ctx.ctx;
        __$ctx.ctx = ctx__$108[i__$110++];
        __$r__$114 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$115;
        return __$r__$114;
    })();
    prevNotNewList__$112 || (__$ctx.position = prevPos__$111);
    return;
}

function __$b53(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$116 = __$ctx.ctx.block, vElem__$117 = __$ctx.ctx.elem, block__$118 = __$ctx._currBlock || $$block;
    var __$r__$120;
    var __$l0__$121 = $$mode;
    $$mode = "default";
    var __$l1__$122 = $$block;
    $$block = vBlock__$116 || (vElem__$117 ? block__$118 : undefined);
    var __$l2__$123 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$116 || vElem__$117 ? undefined : block__$118;
    var __$l3__$124 = $$elem;
    $$elem = vElem__$117;
    var __$l4__$125 = $$mods;
    $$mods = vBlock__$116 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$126 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$120 = undefined;
    $$mode = __$l0__$121;
    $$block = __$l1__$122;
    __$ctx._currBlock = __$l2__$123;
    $$elem = __$l3__$124;
    $$mods = __$l4__$125;
    $$elemMods = __$l5__$126;
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