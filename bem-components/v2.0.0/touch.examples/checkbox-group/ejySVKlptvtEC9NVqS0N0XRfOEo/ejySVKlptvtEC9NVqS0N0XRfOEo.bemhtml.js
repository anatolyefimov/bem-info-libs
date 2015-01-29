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
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b2(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b4(__$ctx, __$ref);
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
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$4() {
                        var __$r__$5;
                        var __$l0__$6 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$5 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$6;
                        return __$r__$5;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "checkbox") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "checkbox-group") {
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
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
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
    } else if (__$t === "default") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b55(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 128) === 0) {
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

function __$b1(__$ctx, __$ref) {
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b2(__$ctx, __$ref) {
    var ctx__$9 = __$ctx.ctx, attrs__$10 = {
        type: $$mods.type || "button",
        name: ctx__$9.name,
        value: ctx__$9.val
    };
    $$mods.disabled && (attrs__$10.disabled = "disabled");
    return __$ctx.extend(function __$lb__$11() {
        var __$r__$12;
        var __$l0__$13 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$12 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$13;
        return __$r__$12;
    }(), attrs__$10);
}

function __$b3(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$14.tabIndex,
        id: ctx__$14.id,
        title: ctx__$14.title
    };
}

function __$b4(__$ctx, __$ref) {
    var attrs__$15 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$16 = __$ctx.ctx;
    attrs__$15.name = ctx__$16.name;
    attrs__$15.value = ctx__$16.val;
    ctx__$16.checked && (attrs__$15.checked = "checked");
    ctx__$16.disabled && (attrs__$15.disabled = "disabled");
    return attrs__$15;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, content__$8 = [ ctx__$7.icon ];
    "text" in ctx__$7 && content__$8.push({
        elem: "text",
        content: ctx__$7.text
    });
    return content__$8;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$2 = __$ctx.ctx, mods__$3 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$3.checked,
            disabled: mods__$3.disabled,
            theme: mods__$3.theme,
            size: mods__$3.size
        },
        title: ctx__$2.title,
        content: [ ctx__$2.icon, typeof ctx__$2.text !== "undefined" ? {
            elem: "text",
            content: ctx__$2.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$3.checked,
        disabled: mods__$3.disabled,
        name: ctx__$2.name,
        val: ctx__$2.val
    } ];
}

function __$b29(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx, mods__$18 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$18.checked,
            disabled: mods__$18.disabled,
            name: ctx__$17.name,
            val: ctx__$17.val
        }
    }, ctx__$17.text ];
}

function __$b30(__$ctx, __$ref) {
    var mods__$19 = $$mods, ctx__$20 = __$ctx.ctx, val__$21 = ctx__$20.val, isValDef__$22 = typeof val__$21 !== "undefined";
    if (isValDef__$22 && !Array.isArray(val__$21)) throw Error("checkbox-group: val must be an array");
    return (ctx__$20.options || []).map(function(option, i) {
        return [ !!i && !mods__$19.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$19.type,
                theme: mods__$19.theme,
                size: mods__$19.size,
                checked: isValDef__$22 && val__$21.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$19.disabled
            },
            name: ctx__$20.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b44(__$ctx, __$ref) {
    var mix__$26 = function __$lb__$27() {
        var __$r__$28;
        var __$l0__$29 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$28 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$29;
        return __$r__$28;
    }(), uaMix__$30 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$26 ? uaMix__$30.concat(mix__$26) : uaMix__$30;
}

function __$b54(__$ctx, __$ref) {
    var ctx__$37 = __$ctx.ctx;
    var __$r__$39;
    var __$l0__$40 = $$mode;
    $$mode = "";
    var __$l1__$41 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$37.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$37.title
            }, {
                block: "ua"
            }, ctx__$37.head, ctx__$37.styles, ctx__$37.favicon ? {
                elem: "favicon",
                url: ctx__$37.favicon
            } : "" ]
        }, ctx__$37 ]
    } ];
    var __$r__$43;
    var __$l2__$44 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$43 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$44;
    __$r__$39 = __$r__$43;
    $$mode = __$l0__$40;
    __$ctx.ctx = __$l1__$41;
    return;
}

function __$b55(__$ctx, __$ref) {
    var BEM_INTERNAL__$45 = __$ctx.BEM.INTERNAL, ctx__$46 = __$ctx.ctx, isBEM__$47, tag__$48, res__$49;
    var __$r__$51;
    var __$l0__$52 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$53 = $$block;
    var __$r__$55;
    var __$l1__$56 = $$mode;
    $$mode = "tag";
    __$r__$55 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$56;
    tag__$48 = __$r__$55;
    typeof tag__$48 !== "undefined" || (tag__$48 = ctx__$46.tag);
    typeof tag__$48 !== "undefined" || (tag__$48 = "div");
    if (tag__$48) {
        var jsParams__$57, js__$58;
        if (vBlock__$53 && ctx__$46.js !== false) {
            var __$r__$59;
            var __$l2__$60 = $$mode;
            $$mode = "js";
            __$r__$59 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$60;
            js__$58 = __$r__$59;
            js__$58 = js__$58 ? __$ctx.extend(ctx__$46.js, js__$58 === true ? {} : js__$58) : ctx__$46.js === true ? {} : ctx__$46.js;
            js__$58 && ((jsParams__$57 = {})[BEM_INTERNAL__$45.buildClass(vBlock__$53, ctx__$46.elem)] = js__$58);
        }
        __$ctx._str += "<" + tag__$48;
        var __$r__$61;
        var __$l3__$62 = $$mode;
        $$mode = "bem";
        __$r__$61 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$62;
        isBEM__$47 = __$r__$61;
        typeof isBEM__$47 !== "undefined" || (isBEM__$47 = typeof ctx__$46.bem !== "undefined" ? ctx__$46.bem : ctx__$46.block || ctx__$46.elem);
        var __$r__$64;
        var __$l4__$65 = $$mode;
        $$mode = "cls";
        __$r__$64 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$65;
        var cls__$63 = __$r__$64;
        cls__$63 || (cls__$63 = ctx__$46.cls);
        var addJSInitClass__$66 = ctx__$46.block && jsParams__$57 && !ctx__$46.elem;
        if (isBEM__$47 || cls__$63) {
            __$ctx._str += ' class="';
            if (isBEM__$47) {
                __$ctx._str += BEM_INTERNAL__$45.buildClasses(vBlock__$53, ctx__$46.elem, ctx__$46.elemMods || ctx__$46.mods);
                var __$r__$68;
                var __$l5__$69 = $$mode;
                $$mode = "mix";
                __$r__$68 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$69;
                var mix__$67 = __$r__$68;
                ctx__$46.mix && (mix__$67 = mix__$67 ? [].concat(mix__$67, ctx__$46.mix) : ctx__$46.mix);
                if (mix__$67) {
                    var visited__$70 = {}, visitedKey__$71 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$70[visitedKey__$71(vBlock__$53, $$elem)] = true;
                    __$ctx.isArray(mix__$67) || (mix__$67 = [ mix__$67 ]);
                    for (var i__$72 = 0; i__$72 < mix__$67.length; i__$72++) {
                        var mixItem__$73 = mix__$67[i__$72], hasItem__$74 = mixItem__$73.block || mixItem__$73.elem, mixBlock__$75 = mixItem__$73.block || mixItem__$73._block || $$block, mixElem__$76 = mixItem__$73.elem || mixItem__$73._elem || $$elem;
                        hasItem__$74 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$45[hasItem__$74 ? "buildClasses" : "buildModsClasses"](mixBlock__$75, mixItem__$73.elem || mixItem__$73._elem || (mixItem__$73.block ? undefined : $$elem), mixItem__$73.elemMods || mixItem__$73.mods);
                        if (mixItem__$73.js) {
                            (jsParams__$57 || (jsParams__$57 = {}))[BEM_INTERNAL__$45.buildClass(mixBlock__$75, mixItem__$73.elem)] = mixItem__$73.js === true ? {} : mixItem__$73.js;
                            addJSInitClass__$66 || (addJSInitClass__$66 = mixBlock__$75 && !mixItem__$73.elem);
                        }
                        if (hasItem__$74 && !visited__$70[visitedKey__$71(mixBlock__$75, mixElem__$76)]) {
                            visited__$70[visitedKey__$71(mixBlock__$75, mixElem__$76)] = true;
                            var __$r__$78;
                            var __$l6__$79 = $$mode;
                            $$mode = "mix";
                            var __$l7__$80 = $$block;
                            $$block = mixBlock__$75;
                            var __$l8__$81 = $$elem;
                            $$elem = mixElem__$76;
                            __$r__$78 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$79;
                            $$block = __$l7__$80;
                            $$elem = __$l8__$81;
                            var nestedMix__$77 = __$r__$78;
                            if (nestedMix__$77) {
                                for (var j__$82 = 0; j__$82 < nestedMix__$77.length; j__$82++) {
                                    var nestedItem__$83 = nestedMix__$77[j__$82];
                                    if (!nestedItem__$83.block && !nestedItem__$83.elem || !visited__$70[visitedKey__$71(nestedItem__$83.block, nestedItem__$83.elem)]) {
                                        nestedItem__$83._block = mixBlock__$75;
                                        nestedItem__$83._elem = mixElem__$76;
                                        mix__$67.splice(i__$72 + 1, 0, nestedItem__$83);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$63 && (__$ctx._str += isBEM__$47 ? " " + cls__$63 : cls__$63);
            __$ctx._str += addJSInitClass__$66 ? ' i-bem"' : '"';
        }
        if (isBEM__$47 && jsParams__$57) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$57)) + '"';
        }
        var __$r__$85;
        var __$l9__$86 = $$mode;
        $$mode = "attrs";
        __$r__$85 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$86;
        var attrs__$84 = __$r__$85;
        attrs__$84 = __$ctx.extend(attrs__$84, ctx__$46.attrs);
        if (attrs__$84) {
            var name__$87, attr__$88;
            for (name__$87 in attrs__$84) {
                attr__$88 = attrs__$84[name__$87];
                if (typeof attr__$88 === "undefined") continue;
                __$ctx._str += " " + name__$87 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$88) ? attr__$88 : __$ctx.reapply(attr__$88)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$48)) {
        __$ctx._str += "/>";
    } else {
        tag__$48 && (__$ctx._str += ">");
        var __$r__$90;
        var __$l10__$91 = $$mode;
        $$mode = "content";
        __$r__$90 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$91;
        var content__$89 = __$r__$90;
        if (content__$89 || content__$89 === 0) {
            isBEM__$47 = vBlock__$53 || $$elem;
            var __$r__$92;
            var __$l11__$93 = $$mode;
            $$mode = "";
            var __$l12__$94 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$95 = __$ctx.position;
            __$ctx.position = isBEM__$47 ? 1 : __$ctx.position;
            var __$l14__$96 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$47 ? 1 : __$ctx._listLength;
            var __$l15__$97 = __$ctx.ctx;
            __$ctx.ctx = content__$89;
            __$r__$92 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$93;
            __$ctx._notNewList = __$l12__$94;
            __$ctx.position = __$l13__$95;
            __$ctx._listLength = __$l14__$96;
            __$ctx.ctx = __$l15__$97;
        }
        tag__$48 && (__$ctx._str += "</" + tag__$48 + ">");
    }
    res__$49 = __$ctx._str;
    __$r__$51 = undefined;
    __$ctx._str = __$l0__$52;
    __$ctx._buf.push(res__$49);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$99;
    var __$l0__$100 = $$mode;
    $$mode = "";
    var __$l1__$101 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$103;
    var __$l2__$104 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$103 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$104;
    __$r__$99 = __$r__$103;
    $$mode = __$l0__$100;
    __$ctx.ctx = __$l1__$101;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$105 = __$ctx.ctx;
    if (ctx__$105 && ctx__$105 !== true || ctx__$105 === 0) {
        __$ctx._str += ctx__$105 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$106 = __$ctx.ctx, len__$107 = ctx__$106.length, i__$108 = 0, prevPos__$109 = __$ctx.position, prevNotNewList__$110 = __$ctx._notNewList;
    if (prevNotNewList__$110) {
        __$ctx._listLength += len__$107 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$107;
    }
    __$ctx._notNewList = true;
    while (i__$108 < len__$107) (function __$lb__$111() {
        var __$r__$112;
        var __$l0__$113 = __$ctx.ctx;
        __$ctx.ctx = ctx__$106[i__$108++];
        __$r__$112 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$113;
        return __$r__$112;
    })();
    prevNotNewList__$110 || (__$ctx.position = prevPos__$109);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$114 = __$ctx.ctx.block, vElem__$115 = __$ctx.ctx.elem, block__$116 = __$ctx._currBlock || $$block;
    var __$r__$118;
    var __$l0__$119 = $$mode;
    $$mode = "default";
    var __$l1__$120 = $$block;
    $$block = vBlock__$114 || (vElem__$115 ? block__$116 : undefined);
    var __$l2__$121 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$114 || vElem__$115 ? undefined : block__$116;
    var __$l3__$122 = $$elem;
    $$elem = vElem__$115;
    var __$l4__$123 = $$mods;
    $$mods = vBlock__$114 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$124 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$118 = undefined;
    $$mode = __$l0__$119;
    $$block = __$l1__$120;
    __$ctx._currBlock = __$l2__$121;
    $$elem = __$l3__$122;
    $$mods = __$l4__$123;
    $$elemMods = __$l5__$124;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "checkbox") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "checkbox-group") {
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
            var __$r = __$b27(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b29(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$23() {
                    var __$r__$24;
                    var __$l0__$25 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$24 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$25;
                    return __$r__$24;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 16) === 0) {
            return [ function __$lb__$31() {
                var __$r__$32;
                var __$l0__$33 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 16;
                __$r__$32 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$33;
                return __$r__$32;
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
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            return [ function __$lb__$34() {
                var __$r__$35;
                var __$l0__$36 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$35 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$36;
                return __$r__$35;
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