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
    if (__$t === "content") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$2() {
                        var __$r__$3;
                        var __$l0__$4 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$3 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$4;
                        return __$r__$3;
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
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b18(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b19(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b20(__$ctx, __$ref);
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
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b43(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b46(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b47(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
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

function __$b2(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, content__$6 = [ ctx__$5.icon ];
    "text" in ctx__$5 && content__$6.push({
        elem: "text",
        content: ctx__$5.text
    });
    return content__$6;
}

function __$b3(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx, mods__$1 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$1.checked,
            disabled: mods__$1.disabled,
            theme: mods__$1.theme,
            size: mods__$1.size
        },
        title: ctx__$0.title,
        content: [ ctx__$0.icon, typeof ctx__$0.text !== "undefined" ? {
            elem: "text",
            content: ctx__$0.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$1.checked,
        disabled: mods__$1.disabled,
        name: ctx__$0.name,
        val: ctx__$0.val
    } ];
}

function __$b4(__$ctx, __$ref) {
    var ctx__$21 = __$ctx.ctx, mods__$22 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$22.checked,
            disabled: mods__$22.disabled,
            name: ctx__$21.name,
            val: ctx__$21.val
        }
    }, ctx__$21.text ];
}

function __$b5(__$ctx, __$ref) {
    var mods__$23 = $$mods, ctx__$24 = __$ctx.ctx, val__$25 = ctx__$24.val, isValDef__$26 = typeof val__$25 !== "undefined";
    if (isValDef__$26 && !Array.isArray(val__$25)) throw Error("checkbox-group: val must be an array");
    return (ctx__$24.options || []).map(function(option, i) {
        return [ !!i && !mods__$23.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$23.type,
                theme: mods__$23.theme,
                size: mods__$23.size,
                checked: isValDef__$26 && val__$25.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$23.disabled
            },
            name: ctx__$24.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b18(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, attrs__$8 = {
        type: $$mods.type || "button",
        name: ctx__$7.name,
        value: ctx__$7.val
    };
    $$mods.disabled && (attrs__$8.disabled = "disabled");
    return __$ctx.extend(function __$lb__$9() {
        var __$r__$10;
        var __$l0__$11 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$10 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$11;
        return __$r__$10;
    }(), attrs__$8);
}

function __$b19(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$12.tabIndex,
        id: ctx__$12.id,
        title: ctx__$12.title
    };
}

function __$b20(__$ctx, __$ref) {
    var attrs__$19 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$20 = __$ctx.ctx;
    attrs__$19.name = ctx__$20.name;
    attrs__$19.value = ctx__$20.val;
    ctx__$20.checked && (attrs__$19.checked = "checked");
    ctx__$20.disabled && (attrs__$19.disabled = "disabled");
    return attrs__$19;
}

function __$b43(__$ctx, __$ref) {
    var mix__$30 = function __$lb__$31() {
        var __$r__$32;
        var __$l0__$33 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$32 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$33;
        return __$r__$32;
    }(), uaMix__$34 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$30 ? uaMix__$34.concat(mix__$30) : uaMix__$34;
}

function __$b45(__$ctx, __$ref) {
    var __$r__$14;
    var __$l0__$15 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._button = __$l0__$15;
    return;
}

function __$b46(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$41 = __$ctx.ctx;
    var __$r__$43;
    var __$l0__$44 = $$mode;
    $$mode = "";
    var __$l1__$45 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$41.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$41.title
            }, {
                block: "ua"
            }, ctx__$41.head, ctx__$41.styles, ctx__$41.favicon ? {
                elem: "favicon",
                url: ctx__$41.favicon
            } : "" ]
        }, ctx__$41 ]
    } ];
    var __$r__$47;
    var __$l2__$48 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$47 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$48;
    __$r__$43 = __$r__$47;
    $$mode = __$l0__$44;
    __$ctx.ctx = __$l1__$45;
    __$ctx._defPageApplied = false;
    return;
}

function __$b47(__$ctx, __$ref) {
    var BEM_INTERNAL__$49 = __$ctx.BEM.INTERNAL, ctx__$50 = __$ctx.ctx, isBEM__$51, tag__$52, res__$53;
    var __$r__$55;
    var __$l0__$56 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$57 = $$block;
    var __$r__$59;
    var __$l1__$60 = $$mode;
    $$mode = "tag";
    __$r__$59 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$60;
    tag__$52 = __$r__$59;
    typeof tag__$52 !== "undefined" || (tag__$52 = ctx__$50.tag);
    typeof tag__$52 !== "undefined" || (tag__$52 = "div");
    if (tag__$52) {
        var jsParams__$61, js__$62;
        if (vBlock__$57 && ctx__$50.js !== false) {
            var __$r__$63;
            var __$l2__$64 = $$mode;
            $$mode = "js";
            __$r__$63 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$64;
            js__$62 = __$r__$63;
            js__$62 = js__$62 ? __$ctx.extend(ctx__$50.js, js__$62 === true ? {} : js__$62) : ctx__$50.js === true ? {} : ctx__$50.js;
            js__$62 && ((jsParams__$61 = {})[BEM_INTERNAL__$49.buildClass(vBlock__$57, ctx__$50.elem)] = js__$62);
        }
        __$ctx._str += "<" + tag__$52;
        var __$r__$65;
        var __$l3__$66 = $$mode;
        $$mode = "bem";
        __$r__$65 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$66;
        isBEM__$51 = __$r__$65;
        typeof isBEM__$51 !== "undefined" || (isBEM__$51 = typeof ctx__$50.bem !== "undefined" ? ctx__$50.bem : ctx__$50.block || ctx__$50.elem);
        var __$r__$68;
        var __$l4__$69 = $$mode;
        $$mode = "cls";
        __$r__$68 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$69;
        var cls__$67 = __$r__$68;
        cls__$67 || (cls__$67 = ctx__$50.cls);
        var addJSInitClass__$70 = ctx__$50.block && jsParams__$61 && !ctx__$50.elem;
        if (isBEM__$51 || cls__$67) {
            __$ctx._str += ' class="';
            if (isBEM__$51) {
                __$ctx._str += BEM_INTERNAL__$49.buildClasses(vBlock__$57, ctx__$50.elem, ctx__$50.elemMods || ctx__$50.mods);
                var __$r__$72;
                var __$l5__$73 = $$mode;
                $$mode = "mix";
                __$r__$72 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$73;
                var mix__$71 = __$r__$72;
                ctx__$50.mix && (mix__$71 = mix__$71 ? [].concat(mix__$71, ctx__$50.mix) : ctx__$50.mix);
                if (mix__$71) {
                    var visited__$74 = {}, visitedKey__$75 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$74[visitedKey__$75(vBlock__$57, $$elem)] = true;
                    __$ctx.isArray(mix__$71) || (mix__$71 = [ mix__$71 ]);
                    for (var i__$76 = 0; i__$76 < mix__$71.length; i__$76++) {
                        var mixItem__$77 = mix__$71[i__$76], hasItem__$78 = mixItem__$77.block || mixItem__$77.elem, mixBlock__$79 = mixItem__$77.block || mixItem__$77._block || $$block, mixElem__$80 = mixItem__$77.elem || mixItem__$77._elem || $$elem;
                        hasItem__$78 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$49[hasItem__$78 ? "buildClasses" : "buildModsClasses"](mixBlock__$79, mixItem__$77.elem || mixItem__$77._elem || (mixItem__$77.block ? undefined : $$elem), mixItem__$77.elemMods || mixItem__$77.mods);
                        if (mixItem__$77.js) {
                            (jsParams__$61 || (jsParams__$61 = {}))[BEM_INTERNAL__$49.buildClass(mixBlock__$79, mixItem__$77.elem)] = mixItem__$77.js === true ? {} : mixItem__$77.js;
                            addJSInitClass__$70 || (addJSInitClass__$70 = mixBlock__$79 && !mixItem__$77.elem);
                        }
                        if (hasItem__$78 && !visited__$74[visitedKey__$75(mixBlock__$79, mixElem__$80)]) {
                            visited__$74[visitedKey__$75(mixBlock__$79, mixElem__$80)] = true;
                            var __$r__$82;
                            var __$l6__$83 = $$mode;
                            $$mode = "mix";
                            var __$l7__$84 = $$block;
                            $$block = mixBlock__$79;
                            var __$l8__$85 = $$elem;
                            $$elem = mixElem__$80;
                            __$r__$82 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$83;
                            $$block = __$l7__$84;
                            $$elem = __$l8__$85;
                            var nestedMix__$81 = __$r__$82;
                            if (nestedMix__$81) {
                                for (var j__$86 = 0; j__$86 < nestedMix__$81.length; j__$86++) {
                                    var nestedItem__$87 = nestedMix__$81[j__$86];
                                    if (!nestedItem__$87.block && !nestedItem__$87.elem || !visited__$74[visitedKey__$75(nestedItem__$87.block, nestedItem__$87.elem)]) {
                                        nestedItem__$87._block = mixBlock__$79;
                                        nestedItem__$87._elem = mixElem__$80;
                                        mix__$71.splice(i__$76 + 1, 0, nestedItem__$87);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$67 && (__$ctx._str += isBEM__$51 ? " " + cls__$67 : cls__$67);
            __$ctx._str += addJSInitClass__$70 ? ' i-bem"' : '"';
        }
        if (isBEM__$51 && jsParams__$61) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$61)) + '"';
        }
        var __$r__$89;
        var __$l9__$90 = $$mode;
        $$mode = "attrs";
        __$r__$89 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$90;
        var attrs__$88 = __$r__$89;
        attrs__$88 = __$ctx.extend(attrs__$88, ctx__$50.attrs);
        if (attrs__$88) {
            var name__$91, attr__$92;
            for (name__$91 in attrs__$88) {
                attr__$92 = attrs__$88[name__$91];
                if (typeof attr__$92 === "undefined") continue;
                __$ctx._str += " " + name__$91 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$92) ? attr__$92 : __$ctx.reapply(attr__$92)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$52)) {
        __$ctx._str += "/>";
    } else {
        tag__$52 && (__$ctx._str += ">");
        var __$r__$94;
        var __$l10__$95 = $$mode;
        $$mode = "content";
        __$r__$94 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$95;
        var content__$93 = __$r__$94;
        if (content__$93 || content__$93 === 0) {
            isBEM__$51 = vBlock__$57 || $$elem;
            var __$r__$96;
            var __$l11__$97 = $$mode;
            $$mode = "";
            var __$l12__$98 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$99 = __$ctx.position;
            __$ctx.position = isBEM__$51 ? 1 : __$ctx.position;
            var __$l14__$100 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$51 ? 1 : __$ctx._listLength;
            var __$l15__$101 = __$ctx.ctx;
            __$ctx.ctx = content__$93;
            __$r__$96 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$97;
            __$ctx._notNewList = __$l12__$98;
            __$ctx.position = __$l13__$99;
            __$ctx._listLength = __$l14__$100;
            __$ctx.ctx = __$l15__$101;
        }
        tag__$52 && (__$ctx._str += "</" + tag__$52 + ">");
    }
    res__$53 = __$ctx._str;
    __$r__$55 = undefined;
    __$ctx._str = __$l0__$56;
    __$ctx._buf.push(res__$53);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$103;
    var __$l0__$104 = $$mode;
    $$mode = "";
    var __$l1__$105 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$107;
    var __$l2__$108 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$107 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$108;
    __$r__$103 = __$r__$107;
    $$mode = __$l0__$104;
    __$ctx.ctx = __$l1__$105;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$109 = __$ctx.ctx;
    if (ctx__$109 && ctx__$109 !== true || ctx__$109 === 0) {
        __$ctx._str += ctx__$109 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$110 = __$ctx.ctx, len__$111 = ctx__$110.length, i__$112 = 0, prevPos__$113 = __$ctx.position, prevNotNewList__$114 = __$ctx._notNewList;
    if (prevNotNewList__$114) {
        __$ctx._listLength += len__$111 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$111;
    }
    __$ctx._notNewList = true;
    while (i__$112 < len__$111) (function __$lb__$115() {
        var __$r__$116;
        var __$l0__$117 = __$ctx.ctx;
        __$ctx.ctx = ctx__$110[i__$112++];
        __$r__$116 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$117;
        return __$r__$116;
    })();
    prevNotNewList__$114 || (__$ctx.position = prevPos__$113);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$118 = __$ctx.ctx.block, vElem__$119 = __$ctx.ctx.elem, block__$120 = __$ctx._currBlock || $$block;
    var __$r__$122;
    var __$l0__$123 = $$mode;
    $$mode = "default";
    var __$l1__$124 = $$block;
    $$block = vBlock__$118 || (vElem__$119 ? block__$120 : undefined);
    var __$l2__$125 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$118 || vElem__$119 ? undefined : block__$120;
    var __$l3__$126 = $$elem;
    $$elem = vElem__$119;
    var __$l4__$127 = $$mods;
    $$mods = vBlock__$118 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$128 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$122 = undefined;
    $$mode = __$l0__$123;
    $$block = __$l1__$124;
    __$ctx._currBlock = __$l2__$125;
    $$elem = __$l3__$126;
    $$mods = __$l4__$127;
    $$elemMods = __$l5__$128;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$27() {
                    var __$r__$28;
                    var __$l0__$29 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$28 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$29;
                    return __$r__$28;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
            return [ function __$lb__$35() {
                var __$r__$36;
                var __$l0__$37 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$36 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$37;
                return __$r__$36;
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
            return [ function __$lb__$38() {
                var __$r__$39;
                var __$l0__$40 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$39 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$40;
                return __$r__$39;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
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