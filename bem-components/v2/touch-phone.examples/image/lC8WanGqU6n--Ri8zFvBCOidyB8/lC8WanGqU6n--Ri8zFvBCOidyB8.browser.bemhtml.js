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
        if (__$t === "image") {
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
        if (__$t === "image") {
            if (!$$elem) {
                return "img";
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
                return [ function __$lb__$6() {
                    var __$r__$7;
                    var __$l0__$8 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$7 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$8;
                    return __$r__$7;
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
                return [ function __$lb__$9() {
                    var __$r__$10;
                    var __$l0__$11 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$10 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$11;
                    return __$r__$10;
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

function __$b1(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx;
    return {
        src: ctx__$0.url,
        width: ctx__$0.width,
        height: ctx__$0.height,
        alt: ctx__$0.alt,
        title: ctx__$0.title
    };
}

function __$b31(__$ctx, __$ref) {
    var mix__$1 = function __$lb__$2() {
        var __$r__$3;
        var __$l0__$4 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$3 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$4;
        return __$r__$3;
    }(), uaMix__$5 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$1 ? uaMix__$5.concat(mix__$1) : uaMix__$5;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$12 = __$ctx.ctx;
    var __$r__$14;
    var __$l0__$15 = $$mode;
    $$mode = "";
    var __$l1__$16 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$12.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$12.title
            }, {
                block: "ua"
            }, ctx__$12.head, ctx__$12.styles, ctx__$12.favicon ? {
                elem: "favicon",
                url: ctx__$12.favicon
            } : "" ]
        }, ctx__$12 ]
    } ];
    var __$r__$18;
    var __$l2__$19 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$18 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$19;
    __$r__$14 = __$r__$18;
    $$mode = __$l0__$15;
    __$ctx.ctx = __$l1__$16;
    __$ctx._defPageApplied = false;
    return;
}

function __$b34(__$ctx, __$ref) {
    var BEM_INTERNAL__$20 = __$ctx.BEM.INTERNAL, ctx__$21 = __$ctx.ctx, isBEM__$22, tag__$23, res__$24;
    var __$r__$26;
    var __$l0__$27 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$28 = $$block;
    var __$r__$30;
    var __$l1__$31 = $$mode;
    $$mode = "tag";
    __$r__$30 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$31;
    tag__$23 = __$r__$30;
    typeof tag__$23 !== "undefined" || (tag__$23 = ctx__$21.tag);
    typeof tag__$23 !== "undefined" || (tag__$23 = "div");
    if (tag__$23) {
        var jsParams__$32, js__$33;
        if (vBlock__$28 && ctx__$21.js !== false) {
            var __$r__$34;
            var __$l2__$35 = $$mode;
            $$mode = "js";
            __$r__$34 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$35;
            js__$33 = __$r__$34;
            js__$33 = js__$33 ? __$ctx.extend(ctx__$21.js, js__$33 === true ? {} : js__$33) : ctx__$21.js === true ? {} : ctx__$21.js;
            js__$33 && ((jsParams__$32 = {})[BEM_INTERNAL__$20.buildClass(vBlock__$28, ctx__$21.elem)] = js__$33);
        }
        __$ctx._str += "<" + tag__$23;
        var __$r__$36;
        var __$l3__$37 = $$mode;
        $$mode = "bem";
        __$r__$36 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$37;
        isBEM__$22 = __$r__$36;
        typeof isBEM__$22 !== "undefined" || (isBEM__$22 = typeof ctx__$21.bem !== "undefined" ? ctx__$21.bem : ctx__$21.block || ctx__$21.elem);
        var __$r__$39;
        var __$l4__$40 = $$mode;
        $$mode = "cls";
        __$r__$39 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$40;
        var cls__$38 = __$r__$39;
        cls__$38 || (cls__$38 = ctx__$21.cls);
        var addJSInitClass__$41 = ctx__$21.block && jsParams__$32;
        if (isBEM__$22 || cls__$38) {
            __$ctx._str += ' class="';
            if (isBEM__$22) {
                __$ctx._str += BEM_INTERNAL__$20.buildClasses(vBlock__$28, ctx__$21.elem, ctx__$21.elemMods || ctx__$21.mods);
                var __$r__$43;
                var __$l5__$44 = $$mode;
                $$mode = "mix";
                __$r__$43 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$44;
                var mix__$42 = __$r__$43;
                ctx__$21.mix && (mix__$42 = mix__$42 ? [].concat(mix__$42, ctx__$21.mix) : ctx__$21.mix);
                if (mix__$42) {
                    var visited__$45 = {}, visitedKey__$46 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$45[visitedKey__$46(vBlock__$28, $$elem)] = true;
                    __$ctx.isArray(mix__$42) || (mix__$42 = [ mix__$42 ]);
                    for (var i__$47 = 0; i__$47 < mix__$42.length; i__$47++) {
                        var mixItem__$48 = mix__$42[i__$47], hasItem__$49 = mixItem__$48.block || mixItem__$48.elem, mixBlock__$50 = mixItem__$48.block || mixItem__$48._block || $$block, mixElem__$51 = mixItem__$48.elem || mixItem__$48._elem || $$elem;
                        hasItem__$49 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$20[hasItem__$49 ? "buildClasses" : "buildModsClasses"](mixBlock__$50, mixItem__$48.elem || mixItem__$48._elem || (mixItem__$48.block ? undefined : $$elem), mixItem__$48.elemMods || mixItem__$48.mods);
                        if (mixItem__$48.js) {
                            (jsParams__$32 || (jsParams__$32 = {}))[BEM_INTERNAL__$20.buildClass(mixBlock__$50, mixItem__$48.elem)] = mixItem__$48.js === true ? {} : mixItem__$48.js;
                            addJSInitClass__$41 || (addJSInitClass__$41 = mixBlock__$50 && !mixItem__$48.elem);
                        }
                        if (hasItem__$49 && !visited__$45[visitedKey__$46(mixBlock__$50, mixElem__$51)]) {
                            visited__$45[visitedKey__$46(mixBlock__$50, mixElem__$51)] = true;
                            var __$r__$53;
                            var __$l6__$54 = $$mode;
                            $$mode = "mix";
                            var __$l7__$55 = $$block;
                            $$block = mixBlock__$50;
                            var __$l8__$56 = $$elem;
                            $$elem = mixElem__$51;
                            __$r__$53 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$54;
                            $$block = __$l7__$55;
                            $$elem = __$l8__$56;
                            var nestedMix__$52 = __$r__$53;
                            if (nestedMix__$52) {
                                for (var j__$57 = 0; j__$57 < nestedMix__$52.length; j__$57++) {
                                    var nestedItem__$58 = nestedMix__$52[j__$57];
                                    if (!nestedItem__$58.block && !nestedItem__$58.elem || !visited__$45[visitedKey__$46(nestedItem__$58.block, nestedItem__$58.elem)]) {
                                        nestedItem__$58._block = mixBlock__$50;
                                        nestedItem__$58._elem = mixElem__$51;
                                        mix__$42.splice(i__$47 + 1, 0, nestedItem__$58);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$38 && (__$ctx._str += isBEM__$22 ? " " + cls__$38 : cls__$38);
            __$ctx._str += addJSInitClass__$41 ? ' i-bem"' : '"';
        }
        if (isBEM__$22 && jsParams__$32) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$32)) + '"';
        }
        var __$r__$60;
        var __$l9__$61 = $$mode;
        $$mode = "attrs";
        __$r__$60 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$61;
        var attrs__$59 = __$r__$60;
        attrs__$59 = __$ctx.extend(attrs__$59, ctx__$21.attrs);
        if (attrs__$59) {
            var name__$62, attr__$63;
            for (name__$62 in attrs__$59) {
                attr__$63 = attrs__$59[name__$62];
                if (typeof attr__$63 === "undefined") continue;
                __$ctx._str += " " + name__$62 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$63) ? attr__$63 : __$ctx.reapply(attr__$63)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$23)) {
        __$ctx._str += "/>";
    } else {
        tag__$23 && (__$ctx._str += ">");
        var __$r__$65;
        var __$l10__$66 = $$mode;
        $$mode = "content";
        __$r__$65 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$66;
        var content__$64 = __$r__$65;
        if (content__$64 || content__$64 === 0) {
            isBEM__$22 = vBlock__$28 || $$elem;
            var __$r__$67;
            var __$l11__$68 = $$mode;
            $$mode = "";
            var __$l12__$69 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$70 = __$ctx.position;
            __$ctx.position = isBEM__$22 ? 1 : __$ctx.position;
            var __$l14__$71 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$22 ? 1 : __$ctx._listLength;
            var __$l15__$72 = __$ctx.ctx;
            __$ctx.ctx = content__$64;
            __$r__$67 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$68;
            __$ctx._notNewList = __$l12__$69;
            __$ctx.position = __$l13__$70;
            __$ctx._listLength = __$l14__$71;
            __$ctx.ctx = __$l15__$72;
        }
        tag__$23 && (__$ctx._str += "</" + tag__$23 + ">");
    }
    res__$24 = __$ctx._str;
    __$r__$26 = undefined;
    __$ctx._str = __$l0__$27;
    __$ctx._buf.push(res__$24);
    return;
}

function __$b36(__$ctx, __$ref) {
    var __$r__$74;
    var __$l0__$75 = $$mode;
    $$mode = "";
    var __$l1__$76 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$78;
    var __$l2__$79 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$78 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$79;
    __$r__$74 = __$r__$78;
    $$mode = __$l0__$75;
    __$ctx.ctx = __$l1__$76;
    return;
}

function __$b37(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$80 = __$ctx.ctx;
    if (ctx__$80 && ctx__$80 !== true || ctx__$80 === 0) {
        __$ctx._str += ctx__$80 + "";
    }
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b39(__$ctx, __$ref) {
    var ctx__$81 = __$ctx.ctx, len__$82 = ctx__$81.length, i__$83 = 0, prevPos__$84 = __$ctx.position, prevNotNewList__$85 = __$ctx._notNewList;
    if (prevNotNewList__$85) {
        __$ctx._listLength += len__$82 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$82;
    }
    __$ctx._notNewList = true;
    while (i__$83 < len__$82) (function __$lb__$86() {
        var __$r__$87;
        var __$l0__$88 = __$ctx.ctx;
        __$ctx.ctx = ctx__$81[i__$83++];
        __$r__$87 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$88;
        return __$r__$87;
    })();
    prevNotNewList__$85 || (__$ctx.position = prevPos__$84);
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$89 = __$ctx.ctx.block, vElem__$90 = __$ctx.ctx.elem, block__$91 = __$ctx._currBlock || $$block;
    var __$r__$93;
    var __$l0__$94 = $$mode;
    $$mode = "default";
    var __$l1__$95 = $$block;
    $$block = vBlock__$89 || (vElem__$90 ? block__$91 : undefined);
    var __$l2__$96 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$89 || vElem__$90 ? undefined : block__$91;
    var __$l3__$97 = $$elem;
    $$elem = vElem__$90;
    var __$l4__$98 = $$mods;
    $$mods = vBlock__$89 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$99 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$93 = undefined;
    $$mode = __$l0__$94;
    $$block = __$l1__$95;
    __$ctx._currBlock = __$l2__$96;
    $$elem = __$l3__$97;
    $$mods = __$l4__$98;
    $$elemMods = __$l5__$99;
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