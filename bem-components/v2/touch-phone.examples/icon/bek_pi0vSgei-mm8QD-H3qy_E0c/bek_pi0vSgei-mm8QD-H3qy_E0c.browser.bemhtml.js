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
            if (!$$elem && __$ctx.ctx.url) {
                return {
                    style: "background-image:url(" + __$ctx.ctx.url + ")"
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
                return [ function __$lb__$5() {
                    var __$r__$6;
                    var __$l0__$7 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$6 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$7;
                    return __$r__$6;
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
                return [ function __$lb__$8() {
                    var __$r__$9;
                    var __$l0__$10 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$9 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$10;
                    return __$r__$9;
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
        if ($$block === "page" && !$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 8) === 0) {
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

function __$b31(__$ctx, __$ref) {
    var mix__$0 = function __$lb__$1() {
        var __$r__$2;
        var __$l0__$3 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$2 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$3;
        return __$r__$2;
    }(), uaMix__$4 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$0 ? uaMix__$4.concat(mix__$0) : uaMix__$4;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$11 = __$ctx.ctx;
    var __$r__$13;
    var __$l0__$14 = $$mode;
    $$mode = "";
    var __$l1__$15 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$11.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$11.title
            }, {
                block: "ua"
            }, ctx__$11.head, ctx__$11.styles, ctx__$11.favicon ? {
                elem: "favicon",
                url: ctx__$11.favicon
            } : "" ]
        }, ctx__$11 ]
    } ];
    var __$r__$17;
    var __$l2__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$18;
    __$r__$13 = __$r__$17;
    $$mode = __$l0__$14;
    __$ctx.ctx = __$l1__$15;
    __$ctx._defPageApplied = false;
    return;
}

function __$b34(__$ctx, __$ref) {
    var BEM_INTERNAL__$19 = __$ctx.BEM.INTERNAL, ctx__$20 = __$ctx.ctx, isBEM__$21, tag__$22, res__$23;
    var __$r__$25;
    var __$l0__$26 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$27 = $$block;
    var __$r__$29;
    var __$l1__$30 = $$mode;
    $$mode = "tag";
    __$r__$29 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$30;
    tag__$22 = __$r__$29;
    typeof tag__$22 !== "undefined" || (tag__$22 = ctx__$20.tag);
    typeof tag__$22 !== "undefined" || (tag__$22 = "div");
    if (tag__$22) {
        var jsParams__$31, js__$32;
        if (vBlock__$27 && ctx__$20.js !== false) {
            var __$r__$33;
            var __$l2__$34 = $$mode;
            $$mode = "js";
            __$r__$33 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$34;
            js__$32 = __$r__$33;
            js__$32 = js__$32 ? __$ctx.extend(ctx__$20.js, js__$32 === true ? {} : js__$32) : ctx__$20.js === true ? {} : ctx__$20.js;
            js__$32 && ((jsParams__$31 = {})[BEM_INTERNAL__$19.buildClass(vBlock__$27, ctx__$20.elem)] = js__$32);
        }
        __$ctx._str += "<" + tag__$22;
        var __$r__$35;
        var __$l3__$36 = $$mode;
        $$mode = "bem";
        __$r__$35 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$36;
        isBEM__$21 = __$r__$35;
        typeof isBEM__$21 !== "undefined" || (isBEM__$21 = typeof ctx__$20.bem !== "undefined" ? ctx__$20.bem : ctx__$20.block || ctx__$20.elem);
        var __$r__$38;
        var __$l4__$39 = $$mode;
        $$mode = "cls";
        __$r__$38 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$39;
        var cls__$37 = __$r__$38;
        cls__$37 || (cls__$37 = ctx__$20.cls);
        var addJSInitClass__$40 = ctx__$20.block && jsParams__$31;
        if (isBEM__$21 || cls__$37) {
            __$ctx._str += ' class="';
            if (isBEM__$21) {
                __$ctx._str += BEM_INTERNAL__$19.buildClasses(vBlock__$27, ctx__$20.elem, ctx__$20.elemMods || ctx__$20.mods);
                var __$r__$42;
                var __$l5__$43 = $$mode;
                $$mode = "mix";
                __$r__$42 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$43;
                var mix__$41 = __$r__$42;
                ctx__$20.mix && (mix__$41 = mix__$41 ? [].concat(mix__$41, ctx__$20.mix) : ctx__$20.mix);
                if (mix__$41) {
                    var visited__$44 = {}, visitedKey__$45 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$44[visitedKey__$45(vBlock__$27, $$elem)] = true;
                    __$ctx.isArray(mix__$41) || (mix__$41 = [ mix__$41 ]);
                    for (var i__$46 = 0; i__$46 < mix__$41.length; i__$46++) {
                        var mixItem__$47 = mix__$41[i__$46], hasItem__$48 = mixItem__$47.block || mixItem__$47.elem, mixBlock__$49 = mixItem__$47.block || mixItem__$47._block || $$block, mixElem__$50 = mixItem__$47.elem || mixItem__$47._elem || $$elem;
                        hasItem__$48 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$19[hasItem__$48 ? "buildClasses" : "buildModsClasses"](mixBlock__$49, mixItem__$47.elem || mixItem__$47._elem || (mixItem__$47.block ? undefined : $$elem), mixItem__$47.elemMods || mixItem__$47.mods);
                        if (mixItem__$47.js) {
                            (jsParams__$31 || (jsParams__$31 = {}))[BEM_INTERNAL__$19.buildClass(mixBlock__$49, mixItem__$47.elem)] = mixItem__$47.js === true ? {} : mixItem__$47.js;
                            addJSInitClass__$40 || (addJSInitClass__$40 = mixBlock__$49 && !mixItem__$47.elem);
                        }
                        if (hasItem__$48 && !visited__$44[visitedKey__$45(mixBlock__$49, mixElem__$50)]) {
                            visited__$44[visitedKey__$45(mixBlock__$49, mixElem__$50)] = true;
                            var __$r__$52;
                            var __$l6__$53 = $$mode;
                            $$mode = "mix";
                            var __$l7__$54 = $$block;
                            $$block = mixBlock__$49;
                            var __$l8__$55 = $$elem;
                            $$elem = mixElem__$50;
                            __$r__$52 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$53;
                            $$block = __$l7__$54;
                            $$elem = __$l8__$55;
                            var nestedMix__$51 = __$r__$52;
                            if (nestedMix__$51) {
                                for (var j__$56 = 0; j__$56 < nestedMix__$51.length; j__$56++) {
                                    var nestedItem__$57 = nestedMix__$51[j__$56];
                                    if (!nestedItem__$57.block && !nestedItem__$57.elem || !visited__$44[visitedKey__$45(nestedItem__$57.block, nestedItem__$57.elem)]) {
                                        nestedItem__$57._block = mixBlock__$49;
                                        nestedItem__$57._elem = mixElem__$50;
                                        mix__$41.splice(i__$46 + 1, 0, nestedItem__$57);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$37 && (__$ctx._str += isBEM__$21 ? " " + cls__$37 : cls__$37);
            __$ctx._str += addJSInitClass__$40 ? ' i-bem"' : '"';
        }
        if (isBEM__$21 && jsParams__$31) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$31)) + '"';
        }
        var __$r__$59;
        var __$l9__$60 = $$mode;
        $$mode = "attrs";
        __$r__$59 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$60;
        var attrs__$58 = __$r__$59;
        attrs__$58 = __$ctx.extend(attrs__$58, ctx__$20.attrs);
        if (attrs__$58) {
            var name__$61, attr__$62;
            for (name__$61 in attrs__$58) {
                attr__$62 = attrs__$58[name__$61];
                if (typeof attr__$62 === "undefined") continue;
                __$ctx._str += " " + name__$61 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$62) ? attr__$62 : __$ctx.reapply(attr__$62)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$22)) {
        __$ctx._str += "/>";
    } else {
        tag__$22 && (__$ctx._str += ">");
        var __$r__$64;
        var __$l10__$65 = $$mode;
        $$mode = "content";
        __$r__$64 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$65;
        var content__$63 = __$r__$64;
        if (content__$63 || content__$63 === 0) {
            isBEM__$21 = vBlock__$27 || $$elem;
            var __$r__$66;
            var __$l11__$67 = $$mode;
            $$mode = "";
            var __$l12__$68 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$69 = __$ctx.position;
            __$ctx.position = isBEM__$21 ? 1 : __$ctx.position;
            var __$l14__$70 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$21 ? 1 : __$ctx._listLength;
            var __$l15__$71 = __$ctx.ctx;
            __$ctx.ctx = content__$63;
            __$r__$66 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$67;
            __$ctx._notNewList = __$l12__$68;
            __$ctx.position = __$l13__$69;
            __$ctx._listLength = __$l14__$70;
            __$ctx.ctx = __$l15__$71;
        }
        tag__$22 && (__$ctx._str += "</" + tag__$22 + ">");
    }
    res__$23 = __$ctx._str;
    __$r__$25 = undefined;
    __$ctx._str = __$l0__$26;
    __$ctx._buf.push(res__$23);
    return;
}

function __$b36(__$ctx, __$ref) {
    var __$r__$73;
    var __$l0__$74 = $$mode;
    $$mode = "";
    var __$l1__$75 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$77;
    var __$l2__$78 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$77 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$78;
    __$r__$73 = __$r__$77;
    $$mode = __$l0__$74;
    __$ctx.ctx = __$l1__$75;
    return;
}

function __$b37(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$79 = __$ctx.ctx;
    if (ctx__$79 && ctx__$79 !== true || ctx__$79 === 0) {
        __$ctx._str += ctx__$79 + "";
    }
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b39(__$ctx, __$ref) {
    var ctx__$80 = __$ctx.ctx, len__$81 = ctx__$80.length, i__$82 = 0, prevPos__$83 = __$ctx.position, prevNotNewList__$84 = __$ctx._notNewList;
    if (prevNotNewList__$84) {
        __$ctx._listLength += len__$81 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$81;
    }
    __$ctx._notNewList = true;
    while (i__$82 < len__$81) (function __$lb__$85() {
        var __$r__$86;
        var __$l0__$87 = __$ctx.ctx;
        __$ctx.ctx = ctx__$80[i__$82++];
        __$r__$86 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$87;
        return __$r__$86;
    })();
    prevNotNewList__$84 || (__$ctx.position = prevPos__$83);
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$88 = __$ctx.ctx.block, vElem__$89 = __$ctx.ctx.elem, block__$90 = __$ctx._currBlock || $$block;
    var __$r__$92;
    var __$l0__$93 = $$mode;
    $$mode = "default";
    var __$l1__$94 = $$block;
    $$block = vBlock__$88 || (vElem__$89 ? block__$90 : undefined);
    var __$l2__$95 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$88 || vElem__$89 ? undefined : block__$90;
    var __$l3__$96 = $$elem;
    $$elem = vElem__$89;
    var __$l4__$97 = $$mods;
    $$mods = vBlock__$88 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$98 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$92 = undefined;
    $$mode = __$l0__$93;
    $$block = __$l1__$94;
    __$ctx._currBlock = __$l2__$95;
    $$elem = __$l3__$96;
    $$mods = __$l4__$97;
    $$elemMods = __$l5__$98;
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