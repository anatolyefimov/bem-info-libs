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
        var __$t = $$block;
        if (__$t === "input") {
            var __$t = $$elem;
            if (__$t === "control") {
                if ($$mods && $$mods["type"] === "search" && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        type: "search"
                    });
                    if (__$r !== __$ref) return __$r;
                }
                if ((__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend({
                        autocomplete: "off",
                        autocorrect: "off",
                        autocapitalize: "off",
                        spellcheck: "false"
                    }, function __$lb__$3() {
                        var __$r__$4;
                        var __$l0__$5 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$4 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$5;
                        return __$r__$4;
                    }());
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b3(__$ctx, __$ref);
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
        if (__$t === "input") {
            var __$t = $$elem;
            if (__$t === "control") {
                return "input";
            } else if (__$t === "box") {
                return "span";
            }
            if (!$$elem) {
                return "span";
            }
        } else if (__$t === "ua") {
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "input") {
            if (!$$elem) {
                return {
                    elem: "box",
                    content: {
                        elem: "control"
                    }
                };
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 8) === 0) {
                    return [ function __$lb__$14() {
                        var __$r__$15;
                        var __$l0__$16 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$15 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$16;
                        return __$r__$15;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
                return [ function __$lb__$22() {
                    var __$r__$23;
                    var __$l0__$24 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$23 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$24;
                    return __$r__$23;
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
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$25() {
                    var __$r__$26;
                    var __$l0__$27 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$26 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$27;
                    return __$r__$26;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "input") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b29(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
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
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b44(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b45(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b48(__$ctx, __$ref);
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
        ctx["_input"] = undefined;
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

function __$b3(__$ctx, __$ref) {
    var input__$6 = __$ctx._input, attrs__$7 = {
        id: input__$6.id,
        name: input__$6.name,
        value: input__$6.val,
        maxlength: input__$6.maxLength,
        tabindex: input__$6.tabIndex,
        placeholder: input__$6.placeholder
    };
    input__$6.autocomplete === false && (attrs__$7.autocomplete = "off");
    $$mods.disabled && (attrs__$7.disabled = "disabled");
    return attrs__$7;
}

function __$b27(__$ctx, __$ref) {
    var __$r__$9;
    var __$l0__$10 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$12;
    var __$l1__$13 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$12 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$13;
    __$r__$9 = __$r__$12;
    __$ctx._input = __$l0__$10;
    return;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$28 = __$ctx.ctx;
    var __$r__$30;
    var __$l0__$31 = $$mode;
    $$mode = "";
    var __$l1__$32 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$28.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$28.title
            }, {
                block: "ua"
            }, ctx__$28.head, ctx__$28.styles, ctx__$28.favicon ? {
                elem: "favicon",
                url: ctx__$28.favicon
            } : "" ]
        }, ctx__$28 ]
    } ];
    var __$r__$34;
    var __$l2__$35 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$34 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$35;
    __$r__$30 = __$r__$34;
    $$mode = __$l0__$31;
    __$ctx.ctx = __$l1__$32;
    return;
}

function __$b29(__$ctx, __$ref) {
    var BEM_INTERNAL__$36 = __$ctx.BEM.INTERNAL, ctx__$37 = __$ctx.ctx, isBEM__$38, tag__$39, res__$40;
    var __$r__$42;
    var __$l0__$43 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$44 = $$block;
    var __$r__$46;
    var __$l1__$47 = $$mode;
    $$mode = "tag";
    __$r__$46 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$47;
    tag__$39 = __$r__$46;
    typeof tag__$39 !== "undefined" || (tag__$39 = ctx__$37.tag);
    typeof tag__$39 !== "undefined" || (tag__$39 = "div");
    if (tag__$39) {
        var jsParams__$48, js__$49;
        if (vBlock__$44 && ctx__$37.js !== false) {
            var __$r__$50;
            var __$l2__$51 = $$mode;
            $$mode = "js";
            __$r__$50 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$51;
            js__$49 = __$r__$50;
            js__$49 = js__$49 ? __$ctx.extend(ctx__$37.js, js__$49 === true ? {} : js__$49) : ctx__$37.js === true ? {} : ctx__$37.js;
            js__$49 && ((jsParams__$48 = {})[BEM_INTERNAL__$36.buildClass(vBlock__$44, ctx__$37.elem)] = js__$49);
        }
        __$ctx._str += "<" + tag__$39;
        var __$r__$52;
        var __$l3__$53 = $$mode;
        $$mode = "bem";
        __$r__$52 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$53;
        isBEM__$38 = __$r__$52;
        typeof isBEM__$38 !== "undefined" || (isBEM__$38 = typeof ctx__$37.bem !== "undefined" ? ctx__$37.bem : ctx__$37.block || ctx__$37.elem);
        var __$r__$55;
        var __$l4__$56 = $$mode;
        $$mode = "cls";
        __$r__$55 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$56;
        var cls__$54 = __$r__$55;
        cls__$54 || (cls__$54 = ctx__$37.cls);
        var addJSInitClass__$57 = ctx__$37.block && jsParams__$48 && !ctx__$37.elem;
        if (isBEM__$38 || cls__$54) {
            __$ctx._str += ' class="';
            if (isBEM__$38) {
                __$ctx._str += BEM_INTERNAL__$36.buildClasses(vBlock__$44, ctx__$37.elem, ctx__$37.elemMods || ctx__$37.mods);
                var __$r__$59;
                var __$l5__$60 = $$mode;
                $$mode = "mix";
                __$r__$59 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$60;
                var mix__$58 = __$r__$59;
                ctx__$37.mix && (mix__$58 = mix__$58 ? [].concat(mix__$58, ctx__$37.mix) : ctx__$37.mix);
                if (mix__$58) {
                    var visited__$61 = {}, visitedKey__$62 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$61[visitedKey__$62(vBlock__$44, $$elem)] = true;
                    __$ctx.isArray(mix__$58) || (mix__$58 = [ mix__$58 ]);
                    for (var i__$63 = 0; i__$63 < mix__$58.length; i__$63++) {
                        var mixItem__$64 = mix__$58[i__$63], hasItem__$65 = mixItem__$64.block || mixItem__$64.elem, mixBlock__$66 = mixItem__$64.block || mixItem__$64._block || $$block, mixElem__$67 = mixItem__$64.elem || mixItem__$64._elem || $$elem;
                        hasItem__$65 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$36[hasItem__$65 ? "buildClasses" : "buildModsClasses"](mixBlock__$66, mixItem__$64.elem || mixItem__$64._elem || (mixItem__$64.block ? undefined : $$elem), mixItem__$64.elemMods || mixItem__$64.mods);
                        if (mixItem__$64.js) {
                            (jsParams__$48 || (jsParams__$48 = {}))[BEM_INTERNAL__$36.buildClass(mixBlock__$66, mixItem__$64.elem)] = mixItem__$64.js === true ? {} : mixItem__$64.js;
                            addJSInitClass__$57 || (addJSInitClass__$57 = mixBlock__$66 && !mixItem__$64.elem);
                        }
                        if (hasItem__$65 && !visited__$61[visitedKey__$62(mixBlock__$66, mixElem__$67)]) {
                            visited__$61[visitedKey__$62(mixBlock__$66, mixElem__$67)] = true;
                            var __$r__$69;
                            var __$l6__$70 = $$mode;
                            $$mode = "mix";
                            var __$l7__$71 = $$block;
                            $$block = mixBlock__$66;
                            var __$l8__$72 = $$elem;
                            $$elem = mixElem__$67;
                            __$r__$69 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$70;
                            $$block = __$l7__$71;
                            $$elem = __$l8__$72;
                            var nestedMix__$68 = __$r__$69;
                            if (nestedMix__$68) {
                                for (var j__$73 = 0; j__$73 < nestedMix__$68.length; j__$73++) {
                                    var nestedItem__$74 = nestedMix__$68[j__$73];
                                    if (!nestedItem__$74.block && !nestedItem__$74.elem || !visited__$61[visitedKey__$62(nestedItem__$74.block, nestedItem__$74.elem)]) {
                                        nestedItem__$74._block = mixBlock__$66;
                                        nestedItem__$74._elem = mixElem__$67;
                                        mix__$58.splice(i__$63 + 1, 0, nestedItem__$74);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$54 && (__$ctx._str += isBEM__$38 ? " " + cls__$54 : cls__$54);
            __$ctx._str += addJSInitClass__$57 ? ' i-bem"' : '"';
        }
        if (isBEM__$38 && jsParams__$48) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$48)) + '"';
        }
        var __$r__$76;
        var __$l9__$77 = $$mode;
        $$mode = "attrs";
        __$r__$76 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$77;
        var attrs__$75 = __$r__$76;
        attrs__$75 = __$ctx.extend(attrs__$75, ctx__$37.attrs);
        if (attrs__$75) {
            var name__$78, attr__$79;
            for (name__$78 in attrs__$75) {
                attr__$79 = attrs__$75[name__$78];
                if (typeof attr__$79 === "undefined") continue;
                __$ctx._str += " " + name__$78 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$79) ? attr__$79 : __$ctx.reapply(attr__$79)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$39)) {
        __$ctx._str += "/>";
    } else {
        tag__$39 && (__$ctx._str += ">");
        var __$r__$81;
        var __$l10__$82 = $$mode;
        $$mode = "content";
        __$r__$81 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$82;
        var content__$80 = __$r__$81;
        if (content__$80 || content__$80 === 0) {
            isBEM__$38 = vBlock__$44 || $$elem;
            var __$r__$83;
            var __$l11__$84 = $$mode;
            $$mode = "";
            var __$l12__$85 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$86 = __$ctx.position;
            __$ctx.position = isBEM__$38 ? 1 : __$ctx.position;
            var __$l14__$87 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$38 ? 1 : __$ctx._listLength;
            var __$l15__$88 = __$ctx.ctx;
            __$ctx.ctx = content__$80;
            __$r__$83 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$84;
            __$ctx._notNewList = __$l12__$85;
            __$ctx.position = __$l13__$86;
            __$ctx._listLength = __$l14__$87;
            __$ctx.ctx = __$l15__$88;
        }
        tag__$39 && (__$ctx._str += "</" + tag__$39 + ">");
    }
    res__$40 = __$ctx._str;
    __$r__$42 = undefined;
    __$ctx._str = __$l0__$43;
    __$ctx._buf.push(res__$40);
    return;
}

function __$b41(__$ctx, __$ref) {
    var mix__$17 = function __$lb__$18() {
        var __$r__$19;
        var __$l0__$20 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$19 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$20;
        return __$r__$19;
    }(), uaMix__$21 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$17 ? uaMix__$21.concat(mix__$17) : uaMix__$21;
}

function __$b44(__$ctx, __$ref) {
    var __$r__$90;
    var __$l0__$91 = $$mode;
    $$mode = "";
    var __$l1__$92 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$94;
    var __$l2__$95 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$94 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$95;
    __$r__$90 = __$r__$94;
    $$mode = __$l0__$91;
    __$ctx.ctx = __$l1__$92;
    return;
}

function __$b45(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$96 = __$ctx.ctx;
    if (ctx__$96 && ctx__$96 !== true || ctx__$96 === 0) {
        __$ctx._str += ctx__$96 + "";
    }
    return;
}

function __$b46(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b47(__$ctx, __$ref) {
    var ctx__$97 = __$ctx.ctx, len__$98 = ctx__$97.length, i__$99 = 0, prevPos__$100 = __$ctx.position, prevNotNewList__$101 = __$ctx._notNewList;
    if (prevNotNewList__$101) {
        __$ctx._listLength += len__$98 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$98;
    }
    __$ctx._notNewList = true;
    while (i__$99 < len__$98) (function __$lb__$102() {
        var __$r__$103;
        var __$l0__$104 = __$ctx.ctx;
        __$ctx.ctx = ctx__$97[i__$99++];
        __$r__$103 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$104;
        return __$r__$103;
    })();
    prevNotNewList__$101 || (__$ctx.position = prevPos__$100);
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$105 = __$ctx.ctx.block, vElem__$106 = __$ctx.ctx.elem, block__$107 = __$ctx._currBlock || $$block;
    var __$r__$109;
    var __$l0__$110 = $$mode;
    $$mode = "default";
    var __$l1__$111 = $$block;
    $$block = vBlock__$105 || (vElem__$106 ? block__$107 : undefined);
    var __$l2__$112 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$105 || vElem__$106 ? undefined : block__$107;
    var __$l3__$113 = $$elem;
    $$elem = vElem__$106;
    var __$l4__$114 = $$mods;
    $$mods = vBlock__$105 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$115 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$109 = undefined;
    $$mode = __$l0__$110;
    $$block = __$l1__$111;
    __$ctx._currBlock = __$l2__$112;
    $$elem = __$l3__$113;
    $$mods = __$l4__$114;
    $$elemMods = __$l5__$115;
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