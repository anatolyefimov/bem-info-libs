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
        if (__$t === "icon") {
            if (!$$elem) {
                var __$r = __$b1(__$ctx, __$ref);
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
        if (__$t === "icon") {
            if (!$$elem) {
                return "i";
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "js") {
        if ($$block === "ua" && !$$elem) {
            return true;
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 2) === 0) {
                return [ function __$lb__$7() {
                    var __$r__$8;
                    var __$l0__$9 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$8 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$9;
                    return __$r__$8;
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
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$10() {
                    var __$r__$11;
                    var __$l0__$12 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$11 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$12;
                    return __$r__$11;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 1) === 0) {
            var __$r = __$b31(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return undefined;
    } else if (__$t === "default") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b34(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b40(__$ctx, __$ref);
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

function __$b1(__$ctx, __$ref) {
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b31(__$ctx, __$ref) {
    var mix__$2 = function __$lb__$3() {
        var __$r__$4;
        var __$l0__$5 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$4 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$5;
        return __$r__$4;
    }(), uaMix__$6 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$2 ? uaMix__$6.concat(mix__$2) : uaMix__$6;
}

function __$b33(__$ctx, __$ref) {
    var ctx__$13 = __$ctx.ctx;
    var __$r__$15;
    var __$l0__$16 = $$mode;
    $$mode = "";
    var __$l1__$17 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$13.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$13.title
            }, {
                block: "ua"
            }, ctx__$13.head, ctx__$13.styles, ctx__$13.favicon ? {
                elem: "favicon",
                url: ctx__$13.favicon
            } : "" ]
        }, ctx__$13 ]
    } ];
    var __$r__$19;
    var __$l2__$20 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$19 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$20;
    __$r__$15 = __$r__$19;
    $$mode = __$l0__$16;
    __$ctx.ctx = __$l1__$17;
    return;
}

function __$b34(__$ctx, __$ref) {
    var BEM_INTERNAL__$21 = __$ctx.BEM.INTERNAL, ctx__$22 = __$ctx.ctx, isBEM__$23, tag__$24, res__$25;
    var __$r__$27;
    var __$l0__$28 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$29 = $$block;
    var __$r__$31;
    var __$l1__$32 = $$mode;
    $$mode = "tag";
    __$r__$31 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$32;
    tag__$24 = __$r__$31;
    typeof tag__$24 !== "undefined" || (tag__$24 = ctx__$22.tag);
    typeof tag__$24 !== "undefined" || (tag__$24 = "div");
    if (tag__$24) {
        var jsParams__$33, js__$34;
        if (vBlock__$29 && ctx__$22.js !== false) {
            var __$r__$35;
            var __$l2__$36 = $$mode;
            $$mode = "js";
            __$r__$35 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$36;
            js__$34 = __$r__$35;
            js__$34 = js__$34 ? __$ctx.extend(ctx__$22.js, js__$34 === true ? {} : js__$34) : ctx__$22.js === true ? {} : ctx__$22.js;
            js__$34 && ((jsParams__$33 = {})[BEM_INTERNAL__$21.buildClass(vBlock__$29, ctx__$22.elem)] = js__$34);
        }
        __$ctx._str += "<" + tag__$24;
        var __$r__$37;
        var __$l3__$38 = $$mode;
        $$mode = "bem";
        __$r__$37 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$38;
        isBEM__$23 = __$r__$37;
        typeof isBEM__$23 !== "undefined" || (isBEM__$23 = typeof ctx__$22.bem !== "undefined" ? ctx__$22.bem : ctx__$22.block || ctx__$22.elem);
        var __$r__$40;
        var __$l4__$41 = $$mode;
        $$mode = "cls";
        __$r__$40 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$41;
        var cls__$39 = __$r__$40;
        cls__$39 || (cls__$39 = ctx__$22.cls);
        var addJSInitClass__$42 = ctx__$22.block && jsParams__$33 && !ctx__$22.elem;
        if (isBEM__$23 || cls__$39) {
            __$ctx._str += ' class="';
            if (isBEM__$23) {
                __$ctx._str += BEM_INTERNAL__$21.buildClasses(vBlock__$29, ctx__$22.elem, ctx__$22.elemMods || ctx__$22.mods);
                var __$r__$44;
                var __$l5__$45 = $$mode;
                $$mode = "mix";
                __$r__$44 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$45;
                var mix__$43 = __$r__$44;
                ctx__$22.mix && (mix__$43 = mix__$43 ? [].concat(mix__$43, ctx__$22.mix) : ctx__$22.mix);
                if (mix__$43) {
                    var visited__$46 = {}, visitedKey__$47 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$46[visitedKey__$47(vBlock__$29, $$elem)] = true;
                    __$ctx.isArray(mix__$43) || (mix__$43 = [ mix__$43 ]);
                    for (var i__$48 = 0; i__$48 < mix__$43.length; i__$48++) {
                        var mixItem__$49 = mix__$43[i__$48], hasItem__$50 = mixItem__$49.block || mixItem__$49.elem, mixBlock__$51 = mixItem__$49.block || mixItem__$49._block || $$block, mixElem__$52 = mixItem__$49.elem || mixItem__$49._elem || $$elem;
                        hasItem__$50 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$21[hasItem__$50 ? "buildClasses" : "buildModsClasses"](mixBlock__$51, mixItem__$49.elem || mixItem__$49._elem || (mixItem__$49.block ? undefined : $$elem), mixItem__$49.elemMods || mixItem__$49.mods);
                        if (mixItem__$49.js) {
                            (jsParams__$33 || (jsParams__$33 = {}))[BEM_INTERNAL__$21.buildClass(mixBlock__$51, mixItem__$49.elem)] = mixItem__$49.js === true ? {} : mixItem__$49.js;
                            addJSInitClass__$42 || (addJSInitClass__$42 = mixBlock__$51 && !mixItem__$49.elem);
                        }
                        if (hasItem__$50 && !visited__$46[visitedKey__$47(mixBlock__$51, mixElem__$52)]) {
                            visited__$46[visitedKey__$47(mixBlock__$51, mixElem__$52)] = true;
                            var __$r__$54;
                            var __$l6__$55 = $$mode;
                            $$mode = "mix";
                            var __$l7__$56 = $$block;
                            $$block = mixBlock__$51;
                            var __$l8__$57 = $$elem;
                            $$elem = mixElem__$52;
                            __$r__$54 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$55;
                            $$block = __$l7__$56;
                            $$elem = __$l8__$57;
                            var nestedMix__$53 = __$r__$54;
                            if (nestedMix__$53) {
                                for (var j__$58 = 0; j__$58 < nestedMix__$53.length; j__$58++) {
                                    var nestedItem__$59 = nestedMix__$53[j__$58];
                                    if (!nestedItem__$59.block && !nestedItem__$59.elem || !visited__$46[visitedKey__$47(nestedItem__$59.block, nestedItem__$59.elem)]) {
                                        nestedItem__$59._block = mixBlock__$51;
                                        nestedItem__$59._elem = mixElem__$52;
                                        mix__$43.splice(i__$48 + 1, 0, nestedItem__$59);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$39 && (__$ctx._str += isBEM__$23 ? " " + cls__$39 : cls__$39);
            __$ctx._str += addJSInitClass__$42 ? ' i-bem"' : '"';
        }
        if (isBEM__$23 && jsParams__$33) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$33)) + '"';
        }
        var __$r__$61;
        var __$l9__$62 = $$mode;
        $$mode = "attrs";
        __$r__$61 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$62;
        var attrs__$60 = __$r__$61;
        attrs__$60 = __$ctx.extend(attrs__$60, ctx__$22.attrs);
        if (attrs__$60) {
            var name__$63, attr__$64;
            for (name__$63 in attrs__$60) {
                attr__$64 = attrs__$60[name__$63];
                if (typeof attr__$64 === "undefined") continue;
                __$ctx._str += " " + name__$63 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$64) ? attr__$64 : __$ctx.reapply(attr__$64)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$24)) {
        __$ctx._str += "/>";
    } else {
        tag__$24 && (__$ctx._str += ">");
        var __$r__$66;
        var __$l10__$67 = $$mode;
        $$mode = "content";
        __$r__$66 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$67;
        var content__$65 = __$r__$66;
        if (content__$65 || content__$65 === 0) {
            isBEM__$23 = vBlock__$29 || $$elem;
            var __$r__$68;
            var __$l11__$69 = $$mode;
            $$mode = "";
            var __$l12__$70 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$71 = __$ctx.position;
            __$ctx.position = isBEM__$23 ? 1 : __$ctx.position;
            var __$l14__$72 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$23 ? 1 : __$ctx._listLength;
            var __$l15__$73 = __$ctx.ctx;
            __$ctx.ctx = content__$65;
            __$r__$68 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$69;
            __$ctx._notNewList = __$l12__$70;
            __$ctx.position = __$l13__$71;
            __$ctx._listLength = __$l14__$72;
            __$ctx.ctx = __$l15__$73;
        }
        tag__$24 && (__$ctx._str += "</" + tag__$24 + ">");
    }
    res__$25 = __$ctx._str;
    __$r__$27 = undefined;
    __$ctx._str = __$l0__$28;
    __$ctx._buf.push(res__$25);
    return;
}

function __$b36(__$ctx, __$ref) {
    var __$r__$75;
    var __$l0__$76 = $$mode;
    $$mode = "";
    var __$l1__$77 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$79;
    var __$l2__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$80;
    __$r__$75 = __$r__$79;
    $$mode = __$l0__$76;
    __$ctx.ctx = __$l1__$77;
    return;
}

function __$b37(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$81 = __$ctx.ctx;
    if (ctx__$81 && ctx__$81 !== true || ctx__$81 === 0) {
        __$ctx._str += ctx__$81 + "";
    }
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b39(__$ctx, __$ref) {
    var ctx__$82 = __$ctx.ctx, len__$83 = ctx__$82.length, i__$84 = 0, prevPos__$85 = __$ctx.position, prevNotNewList__$86 = __$ctx._notNewList;
    if (prevNotNewList__$86) {
        __$ctx._listLength += len__$83 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$83;
    }
    __$ctx._notNewList = true;
    while (i__$84 < len__$83) (function __$lb__$87() {
        var __$r__$88;
        var __$l0__$89 = __$ctx.ctx;
        __$ctx.ctx = ctx__$82[i__$84++];
        __$r__$88 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$89;
        return __$r__$88;
    })();
    prevNotNewList__$86 || (__$ctx.position = prevPos__$85);
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$90 = __$ctx.ctx.block, vElem__$91 = __$ctx.ctx.elem, block__$92 = __$ctx._currBlock || $$block;
    var __$r__$94;
    var __$l0__$95 = $$mode;
    $$mode = "default";
    var __$l1__$96 = $$block;
    $$block = vBlock__$90 || (vElem__$91 ? block__$92 : undefined);
    var __$l2__$97 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$90 || vElem__$91 ? undefined : block__$92;
    var __$l3__$98 = $$elem;
    $$elem = vElem__$91;
    var __$l4__$99 = $$mods;
    $$mods = vBlock__$90 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$100 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$94 = undefined;
    $$mode = __$l0__$95;
    $$block = __$l1__$96;
    __$ctx._currBlock = __$l2__$97;
    $$elem = __$l3__$98;
    $$mods = __$l4__$99;
    $$elemMods = __$l5__$100;
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