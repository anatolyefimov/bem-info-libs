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
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g2(__$ctx, __$ref);
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
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b47(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b48(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b49(__$ctx, __$ref);
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
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b63(__$ctx, __$ref);
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

function __$b1(__$ctx, __$ref) {
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b3(__$ctx, __$ref) {
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

function __$b4(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$14.tabIndex,
        id: ctx__$14.id,
        title: ctx__$14.title
    };
}

function __$b5(__$ctx, __$ref) {
    var attrs__$21 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$22 = __$ctx.ctx;
    attrs__$21.name = ctx__$22.name;
    attrs__$21.value = ctx__$22.val;
    ctx__$22.checked && (attrs__$21.checked = "checked");
    ctx__$22.disabled && (attrs__$21.disabled = "disabled");
    return attrs__$21;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, content__$8 = [ ctx__$7.icon ];
    "text" in ctx__$7 && content__$8.push({
        elem: "text",
        content: ctx__$7.text
    });
    return content__$8;
}

function __$b29(__$ctx, __$ref) {
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

function __$b30(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx, mods__$24 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$24.checked,
            disabled: mods__$24.disabled,
            name: ctx__$23.name,
            val: ctx__$23.val
        }
    }, ctx__$23.text ];
}

function __$b31(__$ctx, __$ref) {
    var mods__$25 = $$mods, ctx__$26 = __$ctx.ctx, val__$27 = ctx__$26.val, isValDef__$28 = typeof val__$27 !== "undefined";
    if (isValDef__$28 && !Array.isArray(val__$27)) throw Error("checkbox-group: val must be an array");
    return (ctx__$26.options || []).map(function(option, i) {
        return [ !!i && !mods__$25.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$25.type,
                theme: mods__$25.theme,
                size: mods__$25.size,
                checked: isValDef__$28 && val__$27.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$25.disabled
            },
            name: ctx__$26.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b45(__$ctx, __$ref) {
    var mix__$32 = function __$lb__$33() {
        var __$r__$34;
        var __$l0__$35 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16;
        __$r__$34 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$35;
        return __$r__$34;
    }(), uaMix__$36 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$32 ? uaMix__$36.concat(mix__$32) : uaMix__$36;
}

function __$b47(__$ctx, __$ref) {
    var __$r__$16;
    var __$l0__$17 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$19;
    var __$l1__$20 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$19 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$20;
    __$r__$16 = __$r__$19;
    __$ctx._button = __$l0__$17;
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$43 = __$ctx.ctx;
    var __$r__$45;
    var __$l0__$46 = $$mode;
    $$mode = "";
    var __$l1__$47 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$43.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$43.title
            }, {
                block: "ua"
            }, ctx__$43.head, ctx__$43.styles, ctx__$43.favicon ? {
                elem: "favicon",
                url: ctx__$43.favicon
            } : "" ]
        }, ctx__$43 ]
    } ];
    var __$r__$49;
    var __$l2__$50 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$49 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$50;
    __$r__$45 = __$r__$49;
    $$mode = __$l0__$46;
    __$ctx.ctx = __$l1__$47;
    __$ctx._defPageApplied = false;
    return;
}

function __$b49(__$ctx, __$ref) {
    var BEM_INTERNAL__$51 = __$ctx.BEM.INTERNAL, ctx__$52 = __$ctx.ctx, isBEM__$53, tag__$54, res__$55;
    var __$r__$57;
    var __$l0__$58 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$59 = $$block;
    var __$r__$61;
    var __$l1__$62 = $$mode;
    $$mode = "tag";
    __$r__$61 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$62;
    tag__$54 = __$r__$61;
    typeof tag__$54 !== "undefined" || (tag__$54 = ctx__$52.tag);
    typeof tag__$54 !== "undefined" || (tag__$54 = "div");
    if (tag__$54) {
        var jsParams__$63, js__$64;
        if (vBlock__$59 && ctx__$52.js !== false) {
            var __$r__$65;
            var __$l2__$66 = $$mode;
            $$mode = "js";
            __$r__$65 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$66;
            js__$64 = __$r__$65;
            js__$64 = js__$64 ? __$ctx.extend(ctx__$52.js, js__$64 === true ? {} : js__$64) : ctx__$52.js === true ? {} : ctx__$52.js;
            js__$64 && ((jsParams__$63 = {})[BEM_INTERNAL__$51.buildClass(vBlock__$59, ctx__$52.elem)] = js__$64);
        }
        __$ctx._str += "<" + tag__$54;
        var __$r__$67;
        var __$l3__$68 = $$mode;
        $$mode = "bem";
        __$r__$67 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$68;
        isBEM__$53 = __$r__$67;
        typeof isBEM__$53 !== "undefined" || (isBEM__$53 = typeof ctx__$52.bem !== "undefined" ? ctx__$52.bem : ctx__$52.block || ctx__$52.elem);
        var __$r__$70;
        var __$l4__$71 = $$mode;
        $$mode = "cls";
        __$r__$70 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$71;
        var cls__$69 = __$r__$70;
        cls__$69 || (cls__$69 = ctx__$52.cls);
        var addJSInitClass__$72 = ctx__$52.block && jsParams__$63 && !ctx__$52.elem;
        if (isBEM__$53 || cls__$69) {
            __$ctx._str += ' class="';
            if (isBEM__$53) {
                __$ctx._str += BEM_INTERNAL__$51.buildClasses(vBlock__$59, ctx__$52.elem, ctx__$52.elemMods || ctx__$52.mods);
                var __$r__$74;
                var __$l5__$75 = $$mode;
                $$mode = "mix";
                __$r__$74 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$75;
                var mix__$73 = __$r__$74;
                ctx__$52.mix && (mix__$73 = mix__$73 ? [].concat(mix__$73, ctx__$52.mix) : ctx__$52.mix);
                if (mix__$73) {
                    var visited__$76 = {}, visitedKey__$77 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$76[visitedKey__$77(vBlock__$59, $$elem)] = true;
                    __$ctx.isArray(mix__$73) || (mix__$73 = [ mix__$73 ]);
                    for (var i__$78 = 0; i__$78 < mix__$73.length; i__$78++) {
                        var mixItem__$79 = mix__$73[i__$78], hasItem__$80 = mixItem__$79.block || mixItem__$79.elem, mixBlock__$81 = mixItem__$79.block || mixItem__$79._block || $$block, mixElem__$82 = mixItem__$79.elem || mixItem__$79._elem || $$elem;
                        hasItem__$80 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$51[hasItem__$80 ? "buildClasses" : "buildModsClasses"](mixBlock__$81, mixItem__$79.elem || mixItem__$79._elem || (mixItem__$79.block ? undefined : $$elem), mixItem__$79.elemMods || mixItem__$79.mods);
                        if (mixItem__$79.js) {
                            (jsParams__$63 || (jsParams__$63 = {}))[BEM_INTERNAL__$51.buildClass(mixBlock__$81, mixItem__$79.elem)] = mixItem__$79.js === true ? {} : mixItem__$79.js;
                            addJSInitClass__$72 || (addJSInitClass__$72 = mixBlock__$81 && !mixItem__$79.elem);
                        }
                        if (hasItem__$80 && !visited__$76[visitedKey__$77(mixBlock__$81, mixElem__$82)]) {
                            visited__$76[visitedKey__$77(mixBlock__$81, mixElem__$82)] = true;
                            var __$r__$84;
                            var __$l6__$85 = $$mode;
                            $$mode = "mix";
                            var __$l7__$86 = $$block;
                            $$block = mixBlock__$81;
                            var __$l8__$87 = $$elem;
                            $$elem = mixElem__$82;
                            __$r__$84 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$85;
                            $$block = __$l7__$86;
                            $$elem = __$l8__$87;
                            var nestedMix__$83 = __$r__$84;
                            if (nestedMix__$83) {
                                for (var j__$88 = 0; j__$88 < nestedMix__$83.length; j__$88++) {
                                    var nestedItem__$89 = nestedMix__$83[j__$88];
                                    if (!nestedItem__$89.block && !nestedItem__$89.elem || !visited__$76[visitedKey__$77(nestedItem__$89.block, nestedItem__$89.elem)]) {
                                        nestedItem__$89._block = mixBlock__$81;
                                        nestedItem__$89._elem = mixElem__$82;
                                        mix__$73.splice(i__$78 + 1, 0, nestedItem__$89);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$69 && (__$ctx._str += isBEM__$53 ? " " + cls__$69 : cls__$69);
            __$ctx._str += addJSInitClass__$72 ? ' i-bem"' : '"';
        }
        if (isBEM__$53 && jsParams__$63) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$63)) + '"';
        }
        var __$r__$91;
        var __$l9__$92 = $$mode;
        $$mode = "attrs";
        __$r__$91 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$92;
        var attrs__$90 = __$r__$91;
        attrs__$90 = __$ctx.extend(attrs__$90, ctx__$52.attrs);
        if (attrs__$90) {
            var name__$93, attr__$94;
            for (name__$93 in attrs__$90) {
                attr__$94 = attrs__$90[name__$93];
                if (typeof attr__$94 === "undefined") continue;
                __$ctx._str += " " + name__$93 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$94) ? attr__$94 : __$ctx.reapply(attr__$94)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$54)) {
        __$ctx._str += "/>";
    } else {
        tag__$54 && (__$ctx._str += ">");
        var __$r__$96;
        var __$l10__$97 = $$mode;
        $$mode = "content";
        __$r__$96 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$97;
        var content__$95 = __$r__$96;
        if (content__$95 || content__$95 === 0) {
            isBEM__$53 = vBlock__$59 || $$elem;
            var __$r__$98;
            var __$l11__$99 = $$mode;
            $$mode = "";
            var __$l12__$100 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$101 = __$ctx.position;
            __$ctx.position = isBEM__$53 ? 1 : __$ctx.position;
            var __$l14__$102 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$53 ? 1 : __$ctx._listLength;
            var __$l15__$103 = __$ctx.ctx;
            __$ctx.ctx = content__$95;
            __$r__$98 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$99;
            __$ctx._notNewList = __$l12__$100;
            __$ctx.position = __$l13__$101;
            __$ctx._listLength = __$l14__$102;
            __$ctx.ctx = __$l15__$103;
        }
        tag__$54 && (__$ctx._str += "</" + tag__$54 + ">");
    }
    res__$55 = __$ctx._str;
    __$r__$57 = undefined;
    __$ctx._str = __$l0__$58;
    __$ctx._buf.push(res__$55);
    return;
}

function __$b59(__$ctx, __$ref) {
    var __$r__$105;
    var __$l0__$106 = $$mode;
    $$mode = "";
    var __$l1__$107 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$109;
    var __$l2__$110 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$109 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$110;
    __$r__$105 = __$r__$109;
    $$mode = __$l0__$106;
    __$ctx.ctx = __$l1__$107;
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$111 = __$ctx.ctx;
    if (ctx__$111 && ctx__$111 !== true || ctx__$111 === 0) {
        __$ctx._str += ctx__$111 + "";
    }
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b62(__$ctx, __$ref) {
    var ctx__$112 = __$ctx.ctx, len__$113 = ctx__$112.length, i__$114 = 0, prevPos__$115 = __$ctx.position, prevNotNewList__$116 = __$ctx._notNewList;
    if (prevNotNewList__$116) {
        __$ctx._listLength += len__$113 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$113;
    }
    __$ctx._notNewList = true;
    while (i__$114 < len__$113) (function __$lb__$117() {
        var __$r__$118;
        var __$l0__$119 = __$ctx.ctx;
        __$ctx.ctx = ctx__$112[i__$114++];
        __$r__$118 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$119;
        return __$r__$118;
    })();
    prevNotNewList__$116 || (__$ctx.position = prevPos__$115);
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$120 = __$ctx.ctx.block, vElem__$121 = __$ctx.ctx.elem, block__$122 = __$ctx._currBlock || $$block;
    var __$r__$124;
    var __$l0__$125 = $$mode;
    $$mode = "default";
    var __$l1__$126 = $$block;
    $$block = vBlock__$120 || (vElem__$121 ? block__$122 : undefined);
    var __$l2__$127 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$120 || vElem__$121 ? undefined : block__$122;
    var __$l3__$128 = $$elem;
    $$elem = vElem__$121;
    var __$l4__$129 = $$mods;
    $$mods = vBlock__$120 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$130 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$124 = undefined;
    $$mode = __$l0__$125;
    $$block = __$l1__$126;
    __$ctx._currBlock = __$l2__$127;
    $$elem = __$l3__$128;
    $$mods = __$l4__$129;
    $$elemMods = __$l5__$130;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        if ($$elem === "control") {
            var __$r = __$b5(__$ctx, __$ref);
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
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
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

function __$g2(__$ctx, __$ref) {
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
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b31(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$29() {
                    var __$r__$30;
                    var __$l0__$31 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$30 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$31;
                    return __$r__$30;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
            return [ function __$lb__$37() {
                var __$r__$38;
                var __$l0__$39 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$38 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$39;
                return __$r__$38;
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
            return [ function __$lb__$40() {
                var __$r__$41;
                var __$l0__$42 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$41 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$42;
                return __$r__$41;
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