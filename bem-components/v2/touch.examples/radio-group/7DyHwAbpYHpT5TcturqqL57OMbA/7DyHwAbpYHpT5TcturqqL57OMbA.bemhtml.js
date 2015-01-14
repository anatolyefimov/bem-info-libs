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
        if (__$t === "radio") {
            if ($$elem === "control") {
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
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "radio") {
            if (!$$elem) {
                var __$r = __$b20(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "radio-group") {
            if (!$$elem) {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 2) === 0) {
                return [ function __$lb__$11() {
                    var __$r__$12;
                    var __$l0__$13 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$12 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$13;
                    return __$r__$12;
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
                return [ function __$lb__$14() {
                    var __$r__$15;
                    var __$l0__$16 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$15 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$16;
                    return __$r__$15;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "radio") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "radio-group") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "radio-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
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
    } else if (__$t === "default") {
        if ($$block === "page" && !$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b42(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 16) === 0) {
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
    var ctx__$0 = __$ctx.ctx, attrs__$1 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$0.name,
        value: ctx__$0.val
    };
    ctx__$0.checked && (attrs__$1.checked = "checked");
    ctx__$0.disabled && (attrs__$1.disabled = "disabled");
    return attrs__$1;
}

function __$b20(__$ctx, __$ref) {
    var ctx__$2 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$2.name,
            val: ctx__$2.val
        }
    }, ctx__$2.text ];
}

function __$b21(__$ctx, __$ref) {
    var mods__$3 = $$mods, ctx__$4 = __$ctx.ctx, isValDef__$5 = typeof ctx__$4.val !== "undefined";
    return (ctx__$4.options || []).map(function(option, i) {
        return [ !!i && !mods__$3.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$3.type,
                mode: mods__$3.mode,
                theme: mods__$3.theme,
                size: mods__$3.size,
                checked: isValDef__$5 && ctx__$4.val === option.val,
                disabled: option.disabled || mods__$3.disabled
            },
            name: ctx__$4.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b31(__$ctx, __$ref) {
    var mix__$6 = function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), uaMix__$10 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$6 ? uaMix__$10.concat(mix__$6) : uaMix__$10;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$17 = __$ctx.ctx;
    var __$r__$19;
    var __$l0__$20 = $$mode;
    $$mode = "";
    var __$l1__$21 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$17.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$17.title
            }, {
                block: "ua"
            }, ctx__$17.head, ctx__$17.styles, ctx__$17.favicon ? {
                elem: "favicon",
                url: ctx__$17.favicon
            } : "" ]
        }, ctx__$17 ]
    } ];
    var __$r__$23;
    var __$l2__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$24;
    __$r__$19 = __$r__$23;
    $$mode = __$l0__$20;
    __$ctx.ctx = __$l1__$21;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$25 = __$ctx.BEM.INTERNAL, ctx__$26 = __$ctx.ctx, isBEM__$27, tag__$28, res__$29;
    var __$r__$31;
    var __$l0__$32 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$33 = $$block;
    var __$r__$35;
    var __$l1__$36 = $$mode;
    $$mode = "tag";
    __$r__$35 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$36;
    tag__$28 = __$r__$35;
    typeof tag__$28 !== "undefined" || (tag__$28 = ctx__$26.tag);
    typeof tag__$28 !== "undefined" || (tag__$28 = "div");
    if (tag__$28) {
        var jsParams__$37, js__$38;
        if (vBlock__$33 && ctx__$26.js !== false) {
            var __$r__$39;
            var __$l2__$40 = $$mode;
            $$mode = "js";
            __$r__$39 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$40;
            js__$38 = __$r__$39;
            js__$38 = js__$38 ? __$ctx.extend(ctx__$26.js, js__$38 === true ? {} : js__$38) : ctx__$26.js === true ? {} : ctx__$26.js;
            js__$38 && ((jsParams__$37 = {})[BEM_INTERNAL__$25.buildClass(vBlock__$33, ctx__$26.elem)] = js__$38);
        }
        __$ctx._str += "<" + tag__$28;
        var __$r__$41;
        var __$l3__$42 = $$mode;
        $$mode = "bem";
        __$r__$41 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$42;
        isBEM__$27 = __$r__$41;
        typeof isBEM__$27 !== "undefined" || (isBEM__$27 = typeof ctx__$26.bem !== "undefined" ? ctx__$26.bem : ctx__$26.block || ctx__$26.elem);
        var __$r__$44;
        var __$l4__$45 = $$mode;
        $$mode = "cls";
        __$r__$44 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$45;
        var cls__$43 = __$r__$44;
        cls__$43 || (cls__$43 = ctx__$26.cls);
        var addJSInitClass__$46 = ctx__$26.block && jsParams__$37 && !ctx__$26.elem;
        if (isBEM__$27 || cls__$43) {
            __$ctx._str += ' class="';
            if (isBEM__$27) {
                __$ctx._str += BEM_INTERNAL__$25.buildClasses(vBlock__$33, ctx__$26.elem, ctx__$26.elemMods || ctx__$26.mods);
                var __$r__$48;
                var __$l5__$49 = $$mode;
                $$mode = "mix";
                __$r__$48 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$49;
                var mix__$47 = __$r__$48;
                ctx__$26.mix && (mix__$47 = mix__$47 ? [].concat(mix__$47, ctx__$26.mix) : ctx__$26.mix);
                if (mix__$47) {
                    var visited__$50 = {}, visitedKey__$51 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$50[visitedKey__$51(vBlock__$33, $$elem)] = true;
                    __$ctx.isArray(mix__$47) || (mix__$47 = [ mix__$47 ]);
                    for (var i__$52 = 0; i__$52 < mix__$47.length; i__$52++) {
                        var mixItem__$53 = mix__$47[i__$52], hasItem__$54 = mixItem__$53.block || mixItem__$53.elem, mixBlock__$55 = mixItem__$53.block || mixItem__$53._block || $$block, mixElem__$56 = mixItem__$53.elem || mixItem__$53._elem || $$elem;
                        hasItem__$54 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$25[hasItem__$54 ? "buildClasses" : "buildModsClasses"](mixBlock__$55, mixItem__$53.elem || mixItem__$53._elem || (mixItem__$53.block ? undefined : $$elem), mixItem__$53.elemMods || mixItem__$53.mods);
                        if (mixItem__$53.js) {
                            (jsParams__$37 || (jsParams__$37 = {}))[BEM_INTERNAL__$25.buildClass(mixBlock__$55, mixItem__$53.elem)] = mixItem__$53.js === true ? {} : mixItem__$53.js;
                            addJSInitClass__$46 || (addJSInitClass__$46 = mixBlock__$55 && !mixItem__$53.elem);
                        }
                        if (hasItem__$54 && !visited__$50[visitedKey__$51(mixBlock__$55, mixElem__$56)]) {
                            visited__$50[visitedKey__$51(mixBlock__$55, mixElem__$56)] = true;
                            var __$r__$58;
                            var __$l6__$59 = $$mode;
                            $$mode = "mix";
                            var __$l7__$60 = $$block;
                            $$block = mixBlock__$55;
                            var __$l8__$61 = $$elem;
                            $$elem = mixElem__$56;
                            __$r__$58 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$59;
                            $$block = __$l7__$60;
                            $$elem = __$l8__$61;
                            var nestedMix__$57 = __$r__$58;
                            if (nestedMix__$57) {
                                for (var j__$62 = 0; j__$62 < nestedMix__$57.length; j__$62++) {
                                    var nestedItem__$63 = nestedMix__$57[j__$62];
                                    if (!nestedItem__$63.block && !nestedItem__$63.elem || !visited__$50[visitedKey__$51(nestedItem__$63.block, nestedItem__$63.elem)]) {
                                        nestedItem__$63._block = mixBlock__$55;
                                        nestedItem__$63._elem = mixElem__$56;
                                        mix__$47.splice(i__$52 + 1, 0, nestedItem__$63);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$43 && (__$ctx._str += isBEM__$27 ? " " + cls__$43 : cls__$43);
            __$ctx._str += addJSInitClass__$46 ? ' i-bem"' : '"';
        }
        if (isBEM__$27 && jsParams__$37) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$37)) + '"';
        }
        var __$r__$65;
        var __$l9__$66 = $$mode;
        $$mode = "attrs";
        __$r__$65 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$66;
        var attrs__$64 = __$r__$65;
        attrs__$64 = __$ctx.extend(attrs__$64, ctx__$26.attrs);
        if (attrs__$64) {
            var name__$67, attr__$68;
            for (name__$67 in attrs__$64) {
                attr__$68 = attrs__$64[name__$67];
                if (typeof attr__$68 === "undefined") continue;
                __$ctx._str += " " + name__$67 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$68) ? attr__$68 : __$ctx.reapply(attr__$68)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$28)) {
        __$ctx._str += "/>";
    } else {
        tag__$28 && (__$ctx._str += ">");
        var __$r__$70;
        var __$l10__$71 = $$mode;
        $$mode = "content";
        __$r__$70 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$71;
        var content__$69 = __$r__$70;
        if (content__$69 || content__$69 === 0) {
            isBEM__$27 = vBlock__$33 || $$elem;
            var __$r__$72;
            var __$l11__$73 = $$mode;
            $$mode = "";
            var __$l12__$74 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$75 = __$ctx.position;
            __$ctx.position = isBEM__$27 ? 1 : __$ctx.position;
            var __$l14__$76 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$27 ? 1 : __$ctx._listLength;
            var __$l15__$77 = __$ctx.ctx;
            __$ctx.ctx = content__$69;
            __$r__$72 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$73;
            __$ctx._notNewList = __$l12__$74;
            __$ctx.position = __$l13__$75;
            __$ctx._listLength = __$l14__$76;
            __$ctx.ctx = __$l15__$77;
        }
        tag__$28 && (__$ctx._str += "</" + tag__$28 + ">");
    }
    res__$29 = __$ctx._str;
    __$r__$31 = undefined;
    __$ctx._str = __$l0__$32;
    __$ctx._buf.push(res__$29);
    return;
}

function __$b44(__$ctx, __$ref) {
    var __$r__$79;
    var __$l0__$80 = $$mode;
    $$mode = "";
    var __$l1__$81 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$83;
    var __$l2__$84 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$83 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$84;
    __$r__$79 = __$r__$83;
    $$mode = __$l0__$80;
    __$ctx.ctx = __$l1__$81;
    return;
}

function __$b45(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$85 = __$ctx.ctx;
    if (ctx__$85 && ctx__$85 !== true || ctx__$85 === 0) {
        __$ctx._str += ctx__$85 + "";
    }
    return;
}

function __$b46(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b47(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx, len__$87 = ctx__$86.length, i__$88 = 0, prevPos__$89 = __$ctx.position, prevNotNewList__$90 = __$ctx._notNewList;
    if (prevNotNewList__$90) {
        __$ctx._listLength += len__$87 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$87;
    }
    __$ctx._notNewList = true;
    while (i__$88 < len__$87) (function __$lb__$91() {
        var __$r__$92;
        var __$l0__$93 = __$ctx.ctx;
        __$ctx.ctx = ctx__$86[i__$88++];
        __$r__$92 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$93;
        return __$r__$92;
    })();
    prevNotNewList__$90 || (__$ctx.position = prevPos__$89);
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$94 = __$ctx.ctx.block, vElem__$95 = __$ctx.ctx.elem, block__$96 = __$ctx._currBlock || $$block;
    var __$r__$98;
    var __$l0__$99 = $$mode;
    $$mode = "default";
    var __$l1__$100 = $$block;
    $$block = vBlock__$94 || (vElem__$95 ? block__$96 : undefined);
    var __$l2__$101 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$94 || vElem__$95 ? undefined : block__$96;
    var __$l3__$102 = $$elem;
    $$elem = vElem__$95;
    var __$l4__$103 = $$mods;
    $$mods = vBlock__$94 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$104 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$98 = undefined;
    $$mode = __$l0__$99;
    $$block = __$l1__$100;
    __$ctx._currBlock = __$l2__$101;
    $$elem = __$l3__$102;
    $$mods = __$l4__$103;
    $$elemMods = __$l5__$104;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return "span";
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