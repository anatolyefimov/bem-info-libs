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
    if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "menu-item") {
            if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 4) === 0) {
                            var __$r = __$b2(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b3(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b5(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "menu-item") {
            if (!$$elem) {
                return {
                    role: "menuitem"
                };
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
    } else if (__$t === "js") {
        if ($$block === "menu-item" && !$$elem) {
            return {
                val: __$ctx.ctx.val
            };
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 2) === 0) {
                    return [ function __$lb__$4() {
                        var __$r__$5;
                        var __$l0__$6 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$5 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$6;
                        return __$r__$5;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 8) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$23() {
                    var __$r__$24;
                    var __$l0__$25 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$24 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$25;
                    return __$r__$24;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$26() {
                    var __$r__$27;
                    var __$l0__$28 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$27 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$28;
                    return __$r__$27;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
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
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            }
            if (!$$elem) {
                return "body";
            }
        }
        return undefined;
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
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b42(__$ctx, __$ref);
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

function __$b1(__$ctx, __$ref) {
    var mods__$0 = $$mods;
    mods__$0.theme = mods__$0.theme || __$ctx._menuMods.theme;
    mods__$0.disabled = mods__$0.disabled || __$ctx._menuMods.disabled;
    var __$r__$2;
    var __$l0__$3 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$2 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$3;
    return;
}

function __$b2(__$ctx, __$ref) {
    var url__$7 = __$ctx.ctx.url;
    var __$r__$9;
    var __$l0__$10 = $$mode;
    $$mode = "";
    var __$l1__$11 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$7 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$13;
    var __$l2__$14 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$13 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$14;
    __$r__$9 = __$r__$13;
    $$mode = __$l0__$10;
    __$ctx.ctx = __$l1__$11;
    return;
}

function __$b3(__$ctx, __$ref) {
    var ie__$15 = __$ctx.ctx.ie, hideRule__$16 = !ie__$15 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$15 === "!IE" ? [ ie__$15, "<!-->", "<!--" ] : [ ie__$15, "", "" ];
    var __$r__$18;
    var __$l0__$19 = $$mode;
    $$mode = "";
    var __$l3__$20 = __$ctx.ctx;
    var __$l1__$21 = __$l3__$20._ieCommented;
    __$l3__$20._ieCommented = true;
    var __$l2__$22 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$16[0] + "]>" + hideRule__$16[1], __$ctx.ctx, hideRule__$16[2] + "<![endif]-->" ];
    __$r__$18 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$19;
    __$l3__$20._ieCommented = __$l1__$21;
    __$ctx.ctx = __$l2__$22;
    return;
}

function __$b4(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$29 = __$ctx.ctx;
    var __$r__$31;
    var __$l0__$32 = $$mode;
    $$mode = "";
    var __$l1__$33 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$29.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$29.title
            }, {
                block: "ua"
            }, ctx__$29.head, ctx__$29.styles, ctx__$29.favicon ? {
                elem: "favicon",
                url: ctx__$29.favicon
            } : "" ]
        }, ctx__$29 ]
    } ];
    var __$r__$35;
    var __$l2__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$36;
    __$r__$31 = __$r__$35;
    $$mode = __$l0__$32;
    __$ctx.ctx = __$l1__$33;
    __$ctx._defPageApplied = false;
    return;
}

function __$b5(__$ctx, __$ref) {
    var BEM_INTERNAL__$37 = __$ctx.BEM.INTERNAL, ctx__$38 = __$ctx.ctx, isBEM__$39, tag__$40, res__$41;
    var __$r__$43;
    var __$l0__$44 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$45 = $$block;
    var __$r__$47;
    var __$l1__$48 = $$mode;
    $$mode = "tag";
    __$r__$47 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$48;
    tag__$40 = __$r__$47;
    typeof tag__$40 !== "undefined" || (tag__$40 = ctx__$38.tag);
    typeof tag__$40 !== "undefined" || (tag__$40 = "div");
    if (tag__$40) {
        var jsParams__$49, js__$50;
        if (vBlock__$45 && ctx__$38.js !== false) {
            var __$r__$51;
            var __$l2__$52 = $$mode;
            $$mode = "js";
            __$r__$51 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$52;
            js__$50 = __$r__$51;
            js__$50 = js__$50 ? __$ctx.extend(ctx__$38.js, js__$50 === true ? {} : js__$50) : ctx__$38.js === true ? {} : ctx__$38.js;
            js__$50 && ((jsParams__$49 = {})[BEM_INTERNAL__$37.buildClass(vBlock__$45, ctx__$38.elem)] = js__$50);
        }
        __$ctx._str += "<" + tag__$40;
        var __$r__$53;
        var __$l3__$54 = $$mode;
        $$mode = "bem";
        __$r__$53 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$54;
        isBEM__$39 = __$r__$53;
        typeof isBEM__$39 !== "undefined" || (isBEM__$39 = typeof ctx__$38.bem !== "undefined" ? ctx__$38.bem : ctx__$38.block || ctx__$38.elem);
        var __$r__$56;
        var __$l4__$57 = $$mode;
        $$mode = "cls";
        __$r__$56 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$57;
        var cls__$55 = __$r__$56;
        cls__$55 || (cls__$55 = ctx__$38.cls);
        var addJSInitClass__$58 = ctx__$38.block && jsParams__$49;
        if (isBEM__$39 || cls__$55) {
            __$ctx._str += ' class="';
            if (isBEM__$39) {
                __$ctx._str += BEM_INTERNAL__$37.buildClasses(vBlock__$45, ctx__$38.elem, ctx__$38.elemMods || ctx__$38.mods);
                var __$r__$60;
                var __$l5__$61 = $$mode;
                $$mode = "mix";
                __$r__$60 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$61;
                var mix__$59 = __$r__$60;
                ctx__$38.mix && (mix__$59 = mix__$59 ? [].concat(mix__$59, ctx__$38.mix) : ctx__$38.mix);
                if (mix__$59) {
                    var visited__$62 = {}, visitedKey__$63 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$62[visitedKey__$63(vBlock__$45, $$elem)] = true;
                    __$ctx.isArray(mix__$59) || (mix__$59 = [ mix__$59 ]);
                    for (var i__$64 = 0; i__$64 < mix__$59.length; i__$64++) {
                        var mixItem__$65 = mix__$59[i__$64], hasItem__$66 = mixItem__$65.block || mixItem__$65.elem, mixBlock__$67 = mixItem__$65.block || mixItem__$65._block || $$block, mixElem__$68 = mixItem__$65.elem || mixItem__$65._elem || $$elem;
                        hasItem__$66 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$37[hasItem__$66 ? "buildClasses" : "buildModsClasses"](mixBlock__$67, mixItem__$65.elem || mixItem__$65._elem || (mixItem__$65.block ? undefined : $$elem), mixItem__$65.elemMods || mixItem__$65.mods);
                        if (mixItem__$65.js) {
                            (jsParams__$49 || (jsParams__$49 = {}))[BEM_INTERNAL__$37.buildClass(mixBlock__$67, mixItem__$65.elem)] = mixItem__$65.js === true ? {} : mixItem__$65.js;
                            addJSInitClass__$58 || (addJSInitClass__$58 = mixBlock__$67 && !mixItem__$65.elem);
                        }
                        if (hasItem__$66 && !visited__$62[visitedKey__$63(mixBlock__$67, mixElem__$68)]) {
                            visited__$62[visitedKey__$63(mixBlock__$67, mixElem__$68)] = true;
                            var __$r__$70;
                            var __$l6__$71 = $$mode;
                            $$mode = "mix";
                            var __$l7__$72 = $$block;
                            $$block = mixBlock__$67;
                            var __$l8__$73 = $$elem;
                            $$elem = mixElem__$68;
                            __$r__$70 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$71;
                            $$block = __$l7__$72;
                            $$elem = __$l8__$73;
                            var nestedMix__$69 = __$r__$70;
                            if (nestedMix__$69) {
                                for (var j__$74 = 0; j__$74 < nestedMix__$69.length; j__$74++) {
                                    var nestedItem__$75 = nestedMix__$69[j__$74];
                                    if (!nestedItem__$75.block && !nestedItem__$75.elem || !visited__$62[visitedKey__$63(nestedItem__$75.block, nestedItem__$75.elem)]) {
                                        nestedItem__$75._block = mixBlock__$67;
                                        nestedItem__$75._elem = mixElem__$68;
                                        mix__$59.splice(i__$64 + 1, 0, nestedItem__$75);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$55 && (__$ctx._str += isBEM__$39 ? " " + cls__$55 : cls__$55);
            __$ctx._str += addJSInitClass__$58 ? ' i-bem"' : '"';
        }
        if (isBEM__$39 && jsParams__$49) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$49)) + '"';
        }
        var __$r__$77;
        var __$l9__$78 = $$mode;
        $$mode = "attrs";
        __$r__$77 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$78;
        var attrs__$76 = __$r__$77;
        attrs__$76 = __$ctx.extend(attrs__$76, ctx__$38.attrs);
        if (attrs__$76) {
            var name__$79, attr__$80;
            for (name__$79 in attrs__$76) {
                attr__$80 = attrs__$76[name__$79];
                if (typeof attr__$80 === "undefined") continue;
                __$ctx._str += " " + name__$79 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$80) ? attr__$80 : __$ctx.reapply(attr__$80)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$40)) {
        __$ctx._str += "/>";
    } else {
        tag__$40 && (__$ctx._str += ">");
        var __$r__$82;
        var __$l10__$83 = $$mode;
        $$mode = "content";
        __$r__$82 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$83;
        var content__$81 = __$r__$82;
        if (content__$81 || content__$81 === 0) {
            isBEM__$39 = vBlock__$45 || $$elem;
            var __$r__$84;
            var __$l11__$85 = $$mode;
            $$mode = "";
            var __$l12__$86 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$87 = __$ctx.position;
            __$ctx.position = isBEM__$39 ? 1 : __$ctx.position;
            var __$l14__$88 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$39 ? 1 : __$ctx._listLength;
            var __$l15__$89 = __$ctx.ctx;
            __$ctx.ctx = content__$81;
            __$r__$84 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$85;
            __$ctx._notNewList = __$l12__$86;
            __$ctx.position = __$l13__$87;
            __$ctx._listLength = __$l14__$88;
            __$ctx.ctx = __$l15__$89;
        }
        tag__$40 && (__$ctx._str += "</" + tag__$40 + ">");
    }
    res__$41 = __$ctx._str;
    __$r__$43 = undefined;
    __$ctx._str = __$l0__$44;
    __$ctx._buf.push(res__$41);
    return;
}

function __$b38(__$ctx, __$ref) {
    var __$r__$91;
    var __$l0__$92 = $$mode;
    $$mode = "";
    var __$l1__$93 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$95;
    var __$l2__$96 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$95 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$96;
    __$r__$91 = __$r__$95;
    $$mode = __$l0__$92;
    __$ctx.ctx = __$l1__$93;
    return;
}

function __$b39(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$97 = __$ctx.ctx;
    if (ctx__$97 && ctx__$97 !== true || ctx__$97 === 0) {
        __$ctx._str += ctx__$97 + "";
    }
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b41(__$ctx, __$ref) {
    var ctx__$98 = __$ctx.ctx, len__$99 = ctx__$98.length, i__$100 = 0, prevPos__$101 = __$ctx.position, prevNotNewList__$102 = __$ctx._notNewList;
    if (prevNotNewList__$102) {
        __$ctx._listLength += len__$99 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$99;
    }
    __$ctx._notNewList = true;
    while (i__$100 < len__$99) (function __$lb__$103() {
        var __$r__$104;
        var __$l0__$105 = __$ctx.ctx;
        __$ctx.ctx = ctx__$98[i__$100++];
        __$r__$104 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$105;
        return __$r__$104;
    })();
    prevNotNewList__$102 || (__$ctx.position = prevPos__$101);
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$106 = __$ctx.ctx.block, vElem__$107 = __$ctx.ctx.elem, block__$108 = __$ctx._currBlock || $$block;
    var __$r__$110;
    var __$l0__$111 = $$mode;
    $$mode = "default";
    var __$l1__$112 = $$block;
    $$block = vBlock__$106 || (vElem__$107 ? block__$108 : undefined);
    var __$l2__$113 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$106 || vElem__$107 ? undefined : block__$108;
    var __$l3__$114 = $$elem;
    $$elem = vElem__$107;
    var __$l4__$115 = $$mods;
    $$mods = vBlock__$106 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$116 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$110 = undefined;
    $$mode = __$l0__$111;
    $$block = __$l1__$112;
    __$ctx._currBlock = __$l2__$113;
    $$elem = __$l3__$114;
    $$mods = __$l4__$115;
    $$elemMods = __$l5__$116;
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