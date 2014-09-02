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
                return [ function __$lb__$10() {
                    var __$r__$11;
                    var __$l0__$12 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$11 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$12;
                    return __$r__$11;
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
                return [ function __$lb__$13() {
                    var __$r__$14;
                    var __$l0__$15 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$14 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$15;
                    return __$r__$14;
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
    var mods__$3 = $$mods, ctx__$4 = __$ctx.ctx;
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
                checked: option.checked,
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
    var mix__$5 = function __$lb__$6() {
        var __$r__$7;
        var __$l0__$8 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$7 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$8;
        return __$r__$7;
    }(), uaMix__$9 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$5 ? uaMix__$9.concat(mix__$5) : uaMix__$9;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$16 = __$ctx.ctx;
    var __$r__$18;
    var __$l0__$19 = $$mode;
    $$mode = "";
    var __$l1__$20 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$16.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$16.title
            }, {
                block: "ua"
            }, ctx__$16.head, ctx__$16.styles, ctx__$16.favicon ? {
                elem: "favicon",
                url: ctx__$16.favicon
            } : "" ]
        }, ctx__$16 ]
    } ];
    var __$r__$22;
    var __$l2__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$23;
    __$r__$18 = __$r__$22;
    $$mode = __$l0__$19;
    __$ctx.ctx = __$l1__$20;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$24 = __$ctx.BEM.INTERNAL, ctx__$25 = __$ctx.ctx, isBEM__$26, tag__$27, res__$28;
    var __$r__$30;
    var __$l0__$31 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$32 = $$block;
    var __$r__$34;
    var __$l1__$35 = $$mode;
    $$mode = "tag";
    __$r__$34 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$35;
    tag__$27 = __$r__$34;
    typeof tag__$27 !== "undefined" || (tag__$27 = ctx__$25.tag);
    typeof tag__$27 !== "undefined" || (tag__$27 = "div");
    if (tag__$27) {
        var jsParams__$36, js__$37;
        if (vBlock__$32 && ctx__$25.js !== false) {
            var __$r__$38;
            var __$l2__$39 = $$mode;
            $$mode = "js";
            __$r__$38 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$39;
            js__$37 = __$r__$38;
            js__$37 = js__$37 ? __$ctx.extend(ctx__$25.js, js__$37 === true ? {} : js__$37) : ctx__$25.js === true ? {} : ctx__$25.js;
            js__$37 && ((jsParams__$36 = {})[BEM_INTERNAL__$24.buildClass(vBlock__$32, ctx__$25.elem)] = js__$37);
        }
        __$ctx._str += "<" + tag__$27;
        var __$r__$40;
        var __$l3__$41 = $$mode;
        $$mode = "bem";
        __$r__$40 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$41;
        isBEM__$26 = __$r__$40;
        typeof isBEM__$26 !== "undefined" || (isBEM__$26 = typeof ctx__$25.bem !== "undefined" ? ctx__$25.bem : ctx__$25.block || ctx__$25.elem);
        var __$r__$43;
        var __$l4__$44 = $$mode;
        $$mode = "cls";
        __$r__$43 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$44;
        var cls__$42 = __$r__$43;
        cls__$42 || (cls__$42 = ctx__$25.cls);
        var addJSInitClass__$45 = ctx__$25.block && jsParams__$36;
        if (isBEM__$26 || cls__$42) {
            __$ctx._str += ' class="';
            if (isBEM__$26) {
                __$ctx._str += BEM_INTERNAL__$24.buildClasses(vBlock__$32, ctx__$25.elem, ctx__$25.elemMods || ctx__$25.mods);
                var __$r__$47;
                var __$l5__$48 = $$mode;
                $$mode = "mix";
                __$r__$47 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$48;
                var mix__$46 = __$r__$47;
                ctx__$25.mix && (mix__$46 = mix__$46 ? [].concat(mix__$46, ctx__$25.mix) : ctx__$25.mix);
                if (mix__$46) {
                    var visited__$49 = {}, visitedKey__$50 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$49[visitedKey__$50(vBlock__$32, $$elem)] = true;
                    __$ctx.isArray(mix__$46) || (mix__$46 = [ mix__$46 ]);
                    for (var i__$51 = 0; i__$51 < mix__$46.length; i__$51++) {
                        var mixItem__$52 = mix__$46[i__$51], hasItem__$53 = mixItem__$52.block || mixItem__$52.elem, mixBlock__$54 = mixItem__$52.block || mixItem__$52._block || $$block, mixElem__$55 = mixItem__$52.elem || mixItem__$52._elem || $$elem;
                        hasItem__$53 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$24[hasItem__$53 ? "buildClasses" : "buildModsClasses"](mixBlock__$54, mixItem__$52.elem || mixItem__$52._elem || (mixItem__$52.block ? undefined : $$elem), mixItem__$52.elemMods || mixItem__$52.mods);
                        if (mixItem__$52.js) {
                            (jsParams__$36 || (jsParams__$36 = {}))[BEM_INTERNAL__$24.buildClass(mixBlock__$54, mixItem__$52.elem)] = mixItem__$52.js === true ? {} : mixItem__$52.js;
                            addJSInitClass__$45 || (addJSInitClass__$45 = mixBlock__$54 && !mixItem__$52.elem);
                        }
                        if (hasItem__$53 && !visited__$49[visitedKey__$50(mixBlock__$54, mixElem__$55)]) {
                            visited__$49[visitedKey__$50(mixBlock__$54, mixElem__$55)] = true;
                            var __$r__$57;
                            var __$l6__$58 = $$mode;
                            $$mode = "mix";
                            var __$l7__$59 = $$block;
                            $$block = mixBlock__$54;
                            var __$l8__$60 = $$elem;
                            $$elem = mixElem__$55;
                            __$r__$57 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$58;
                            $$block = __$l7__$59;
                            $$elem = __$l8__$60;
                            var nestedMix__$56 = __$r__$57;
                            if (nestedMix__$56) {
                                for (var j__$61 = 0; j__$61 < nestedMix__$56.length; j__$61++) {
                                    var nestedItem__$62 = nestedMix__$56[j__$61];
                                    if (!nestedItem__$62.block && !nestedItem__$62.elem || !visited__$49[visitedKey__$50(nestedItem__$62.block, nestedItem__$62.elem)]) {
                                        nestedItem__$62._block = mixBlock__$54;
                                        nestedItem__$62._elem = mixElem__$55;
                                        mix__$46.splice(i__$51 + 1, 0, nestedItem__$62);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$42 && (__$ctx._str += isBEM__$26 ? " " + cls__$42 : cls__$42);
            __$ctx._str += addJSInitClass__$45 ? ' i-bem"' : '"';
        }
        if (isBEM__$26 && jsParams__$36) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$36)) + '"';
        }
        var __$r__$64;
        var __$l9__$65 = $$mode;
        $$mode = "attrs";
        __$r__$64 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$65;
        var attrs__$63 = __$r__$64;
        attrs__$63 = __$ctx.extend(attrs__$63, ctx__$25.attrs);
        if (attrs__$63) {
            var name__$66, attr__$67;
            for (name__$66 in attrs__$63) {
                attr__$67 = attrs__$63[name__$66];
                if (typeof attr__$67 === "undefined") continue;
                __$ctx._str += " " + name__$66 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$67) ? attr__$67 : __$ctx.reapply(attr__$67)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$27)) {
        __$ctx._str += "/>";
    } else {
        tag__$27 && (__$ctx._str += ">");
        var __$r__$69;
        var __$l10__$70 = $$mode;
        $$mode = "content";
        __$r__$69 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$70;
        var content__$68 = __$r__$69;
        if (content__$68 || content__$68 === 0) {
            isBEM__$26 = vBlock__$32 || $$elem;
            var __$r__$71;
            var __$l11__$72 = $$mode;
            $$mode = "";
            var __$l12__$73 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$74 = __$ctx.position;
            __$ctx.position = isBEM__$26 ? 1 : __$ctx.position;
            var __$l14__$75 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$26 ? 1 : __$ctx._listLength;
            var __$l15__$76 = __$ctx.ctx;
            __$ctx.ctx = content__$68;
            __$r__$71 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$72;
            __$ctx._notNewList = __$l12__$73;
            __$ctx.position = __$l13__$74;
            __$ctx._listLength = __$l14__$75;
            __$ctx.ctx = __$l15__$76;
        }
        tag__$27 && (__$ctx._str += "</" + tag__$27 + ">");
    }
    res__$28 = __$ctx._str;
    __$r__$30 = undefined;
    __$ctx._str = __$l0__$31;
    __$ctx._buf.push(res__$28);
    return;
}

function __$b44(__$ctx, __$ref) {
    var __$r__$78;
    var __$l0__$79 = $$mode;
    $$mode = "";
    var __$l1__$80 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$82;
    var __$l2__$83 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$82 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$83;
    __$r__$78 = __$r__$82;
    $$mode = __$l0__$79;
    __$ctx.ctx = __$l1__$80;
    return;
}

function __$b45(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$84 = __$ctx.ctx;
    if (ctx__$84 && ctx__$84 !== true || ctx__$84 === 0) {
        __$ctx._str += ctx__$84 + "";
    }
    return;
}

function __$b46(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b47(__$ctx, __$ref) {
    var ctx__$85 = __$ctx.ctx, len__$86 = ctx__$85.length, i__$87 = 0, prevPos__$88 = __$ctx.position, prevNotNewList__$89 = __$ctx._notNewList;
    if (prevNotNewList__$89) {
        __$ctx._listLength += len__$86 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$86;
    }
    __$ctx._notNewList = true;
    while (i__$87 < len__$86) (function __$lb__$90() {
        var __$r__$91;
        var __$l0__$92 = __$ctx.ctx;
        __$ctx.ctx = ctx__$85[i__$87++];
        __$r__$91 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$92;
        return __$r__$91;
    })();
    prevNotNewList__$89 || (__$ctx.position = prevPos__$88);
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$93 = __$ctx.ctx.block, vElem__$94 = __$ctx.ctx.elem, block__$95 = __$ctx._currBlock || $$block;
    var __$r__$97;
    var __$l0__$98 = $$mode;
    $$mode = "default";
    var __$l1__$99 = $$block;
    $$block = vBlock__$93 || (vElem__$94 ? block__$95 : undefined);
    var __$l2__$100 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$93 || vElem__$94 ? undefined : block__$95;
    var __$l3__$101 = $$elem;
    $$elem = vElem__$94;
    var __$l4__$102 = $$mods;
    $$mods = vBlock__$93 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$103 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$97 = undefined;
    $$mode = __$l0__$98;
    $$block = __$l1__$99;
    __$ctx._currBlock = __$l2__$100;
    $$elem = __$l3__$101;
    $$mods = __$l4__$102;
    $$elemMods = __$l5__$103;
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