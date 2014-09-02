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
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$r = __$g4(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 524288) === 0) {
                var __$r = __$b67(__$ctx, __$ref);
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
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 8388608) === 0) {
            var __$r = __$b78(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b79(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b80(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b81(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b82(__$ctx, __$ref);
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
        ctx["_checkedOption"] = undefined;
        ctx["_menuMods"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_button"] = undefined;
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
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
    var res__$0 = __$ctx._checkedOptions.map(function(option) {
        return {
            elem: "control",
            val: option.val
        };
    });
    res__$0.push(function __$lb__$1() {
        var __$r__$2;
        var __$l0__$3 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$2 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$3;
        return __$r__$2;
    }());
    return res__$0;
}

function __$b2(__$ctx, __$ref) {
    var checkedOptions__$4 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$4.length === 1 ? checkedOptions__$4[0].text : checkedOptions__$4.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b9(__$ctx, __$ref) {
    var ctx__$58 = __$ctx.ctx, content__$59 = [ ctx__$58.icon ];
    "text" in ctx__$58 && content__$59.push({
        elem: "text",
        content: ctx__$58.text
    });
    return content__$59;
}

function __$b19(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx;
    return {
        name: ctx__$86.name,
        optionsMaxHeight: ctx__$86.optionsMaxHeight
    };
}

function __$b22(__$ctx, __$ref) {
    var ctx__$25 = __$ctx.ctx;
    return {
        mainOffset: ctx__$25.mainOffset,
        secondaryOffset: ctx__$25.secondaryOffset,
        viewportOffset: ctx__$25.viewportOffset,
        directions: ctx__$25.directions,
        zIndexGroupLevel: ctx__$25.zIndexGroupLevel
    };
}

function __$b28(__$ctx, __$ref) {
    var val__$82 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$82) ? val__$82 : JSON.stringify(val__$82),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b30(__$ctx, __$ref) {
    var ctx__$60 = __$ctx.ctx, attrs__$61 = {
        type: $$mods.type || "button",
        name: ctx__$60.name,
        value: ctx__$60.val
    };
    $$mods.disabled && (attrs__$61.disabled = "disabled");
    return __$ctx.extend(function __$lb__$62() {
        var __$r__$63;
        var __$l0__$64 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8192;
        __$r__$63 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$64;
        return __$r__$63;
    }(), attrs__$61);
}

function __$b31(__$ctx, __$ref) {
    var ctx__$65 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$65.tabIndex,
        id: ctx__$65.id,
        title: ctx__$65.title
    };
}

function __$b36(__$ctx, __$ref) {
    var attrs__$38 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$38.tabindex = 0);
    return attrs__$38;
}

function __$b56(__$ctx, __$ref) {
    var checkedOptions__$17 = __$ctx._checkedOptions, firstOption__$18 = __$ctx._firstOption;
    if (!checkedOptions__$17.length) {
        firstOption__$18.checked = true;
        checkedOptions__$17.push(firstOption__$18);
    }
    var __$r__$20;
    var __$l0__$21 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$17[0];
    var __$r__$23;
    var __$l1__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$24;
    __$r__$20 = __$r__$23;
    __$ctx._checkedOption = __$l0__$21;
    return;
}

function __$b57(__$ctx, __$ref) {
    var mods__$72 = $$mods;
    var __$r__$74;
    var __$l0__$75 = $$mode;
    $$mode = "";
    var __$l1__$76 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$72.size,
            theme: mods__$72.theme,
            focused: mods__$72.focused,
            disabled: mods__$72.disabled,
            checked: mods__$72.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$77() {
            var __$r__$78;
            var __$l3__$79 = $$mode;
            $$mode = "content";
            __$r__$78 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$79;
            return __$r__$78;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$80;
    var __$l2__$81 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$80 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$81;
    __$r__$74 = __$r__$80;
    $$mode = __$l0__$75;
    __$ctx.ctx = __$l1__$76;
    return;
}

function __$b58(__$ctx, __$ref) {
    var mods__$45 = $$mods, optionToMenuItem__$46 = function(option) {
        var res__$47 = {
            block: "menu-item",
            mods: {
                checked: option.checked,
                disabled: option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$47.js.text = option.text;
            res__$47.content = [ option.icon, res__$47.content ];
        }
        return res__$47;
    };
    var __$r__$49;
    var __$l0__$50 = $$mode;
    $$mode = "";
    var __$l1__$51 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$45.size,
            theme: mods__$45.theme,
            disabled: mods__$45.disabled,
            mode: mods__$45.mode
        },
        attrs: {
            tabindex: undefined
        },
        content: __$ctx._select.options.map(function(optionOrGroup) {
            return optionOrGroup.group ? {
                elem: "group",
                mods: {
                    "has-title": !!optionOrGroup.title
                },
                title: optionOrGroup.title,
                content: optionOrGroup.group.map(optionToMenuItem__$46)
            } : optionToMenuItem__$46(optionOrGroup);
        })
    };
    var __$r__$53;
    var __$l2__$54 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$53 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$54;
    __$r__$49 = __$r__$53;
    $$mode = __$l0__$50;
    __$ctx.ctx = __$l1__$51;
    return;
}

function __$b59(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$87 = __$ctx.ctx.options, i__$88 = 0, j__$89, optionOrGroup__$90, option__$91, firstOption__$92, checkedOptions__$93 = [];
    while (optionOrGroup__$90 = options__$87[i__$88++]) {
        if (optionOrGroup__$90.group) {
            j__$89 = 0;
            while (option__$91 = optionOrGroup__$90.group[j__$89++]) {
                i__$88 === 1 && j__$89 === 1 && (firstOption__$92 = option__$91);
                option__$91.checked && checkedOptions__$93.push(option__$91);
            }
        } else {
            i__$88 === 1 && (firstOption__$92 = optionOrGroup__$90);
            optionOrGroup__$90.checked && checkedOptions__$93.push(optionOrGroup__$90);
        }
    }
    var __$r__$95;
    var __$l0__$96 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$97 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$93;
    var __$l2__$98 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$92;
    var __$r__$100;
    var __$l3__$101 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$100 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$101;
    __$r__$95 = __$r__$100;
    __$ctx._select = __$l0__$96;
    __$ctx._checkedOptions = __$l1__$97;
    __$ctx._firstOption = __$l2__$98;
    return;
}

function __$b60(__$ctx, __$ref) {
    var __$r__$67;
    var __$l0__$68 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$70;
    var __$l1__$71 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$70 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$71;
    __$r__$67 = __$r__$70;
    __$ctx._button = __$l0__$68;
    return;
}

function __$b61(__$ctx, __$ref) {
    var __$r__$40;
    var __$l0__$41 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$43;
    var __$l1__$44 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$43 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$44;
    __$r__$40 = __$r__$43;
    __$ctx._menuMods = __$l0__$41;
    delete __$ctx._menuTheme;
    return;
}

function __$b62(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$36;
    var __$l0__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$37;
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$116 = __$ctx.ctx;
    var __$r__$118;
    var __$l0__$119 = $$mode;
    $$mode = "";
    var __$l1__$120 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$116.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$116.title
            }, {
                block: "ua"
            }, ctx__$116.head, ctx__$116.styles, ctx__$116.favicon ? {
                elem: "favicon",
                url: ctx__$116.favicon
            } : "" ]
        }, ctx__$116 ]
    } ];
    var __$r__$122;
    var __$l2__$123 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$122 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$123;
    __$r__$118 = __$r__$122;
    $$mode = __$l0__$119;
    __$ctx.ctx = __$l1__$120;
    __$ctx._defPageApplied = false;
    return;
}

function __$b64(__$ctx, __$ref) {
    var BEM_INTERNAL__$124 = __$ctx.BEM.INTERNAL, ctx__$125 = __$ctx.ctx, isBEM__$126, tag__$127, res__$128;
    var __$r__$130;
    var __$l0__$131 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$132 = $$block;
    var __$r__$134;
    var __$l1__$135 = $$mode;
    $$mode = "tag";
    __$r__$134 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$135;
    tag__$127 = __$r__$134;
    typeof tag__$127 !== "undefined" || (tag__$127 = ctx__$125.tag);
    typeof tag__$127 !== "undefined" || (tag__$127 = "div");
    if (tag__$127) {
        var jsParams__$136, js__$137;
        if (vBlock__$132 && ctx__$125.js !== false) {
            var __$r__$138;
            var __$l2__$139 = $$mode;
            $$mode = "js";
            __$r__$138 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$139;
            js__$137 = __$r__$138;
            js__$137 = js__$137 ? __$ctx.extend(ctx__$125.js, js__$137 === true ? {} : js__$137) : ctx__$125.js === true ? {} : ctx__$125.js;
            js__$137 && ((jsParams__$136 = {})[BEM_INTERNAL__$124.buildClass(vBlock__$132, ctx__$125.elem)] = js__$137);
        }
        __$ctx._str += "<" + tag__$127;
        var __$r__$140;
        var __$l3__$141 = $$mode;
        $$mode = "bem";
        __$r__$140 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$141;
        isBEM__$126 = __$r__$140;
        typeof isBEM__$126 !== "undefined" || (isBEM__$126 = typeof ctx__$125.bem !== "undefined" ? ctx__$125.bem : ctx__$125.block || ctx__$125.elem);
        var __$r__$143;
        var __$l4__$144 = $$mode;
        $$mode = "cls";
        __$r__$143 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$144;
        var cls__$142 = __$r__$143;
        cls__$142 || (cls__$142 = ctx__$125.cls);
        var addJSInitClass__$145 = ctx__$125.block && jsParams__$136;
        if (isBEM__$126 || cls__$142) {
            __$ctx._str += ' class="';
            if (isBEM__$126) {
                __$ctx._str += BEM_INTERNAL__$124.buildClasses(vBlock__$132, ctx__$125.elem, ctx__$125.elemMods || ctx__$125.mods);
                var __$r__$147;
                var __$l5__$148 = $$mode;
                $$mode = "mix";
                __$r__$147 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$148;
                var mix__$146 = __$r__$147;
                ctx__$125.mix && (mix__$146 = mix__$146 ? [].concat(mix__$146, ctx__$125.mix) : ctx__$125.mix);
                if (mix__$146) {
                    var visited__$149 = {}, visitedKey__$150 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$149[visitedKey__$150(vBlock__$132, $$elem)] = true;
                    __$ctx.isArray(mix__$146) || (mix__$146 = [ mix__$146 ]);
                    for (var i__$151 = 0; i__$151 < mix__$146.length; i__$151++) {
                        var mixItem__$152 = mix__$146[i__$151], hasItem__$153 = mixItem__$152.block || mixItem__$152.elem, mixBlock__$154 = mixItem__$152.block || mixItem__$152._block || $$block, mixElem__$155 = mixItem__$152.elem || mixItem__$152._elem || $$elem;
                        hasItem__$153 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$124[hasItem__$153 ? "buildClasses" : "buildModsClasses"](mixBlock__$154, mixItem__$152.elem || mixItem__$152._elem || (mixItem__$152.block ? undefined : $$elem), mixItem__$152.elemMods || mixItem__$152.mods);
                        if (mixItem__$152.js) {
                            (jsParams__$136 || (jsParams__$136 = {}))[BEM_INTERNAL__$124.buildClass(mixBlock__$154, mixItem__$152.elem)] = mixItem__$152.js === true ? {} : mixItem__$152.js;
                            addJSInitClass__$145 || (addJSInitClass__$145 = mixBlock__$154 && !mixItem__$152.elem);
                        }
                        if (hasItem__$153 && !visited__$149[visitedKey__$150(mixBlock__$154, mixElem__$155)]) {
                            visited__$149[visitedKey__$150(mixBlock__$154, mixElem__$155)] = true;
                            var __$r__$157;
                            var __$l6__$158 = $$mode;
                            $$mode = "mix";
                            var __$l7__$159 = $$block;
                            $$block = mixBlock__$154;
                            var __$l8__$160 = $$elem;
                            $$elem = mixElem__$155;
                            __$r__$157 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$158;
                            $$block = __$l7__$159;
                            $$elem = __$l8__$160;
                            var nestedMix__$156 = __$r__$157;
                            if (nestedMix__$156) {
                                for (var j__$161 = 0; j__$161 < nestedMix__$156.length; j__$161++) {
                                    var nestedItem__$162 = nestedMix__$156[j__$161];
                                    if (!nestedItem__$162.block && !nestedItem__$162.elem || !visited__$149[visitedKey__$150(nestedItem__$162.block, nestedItem__$162.elem)]) {
                                        nestedItem__$162._block = mixBlock__$154;
                                        nestedItem__$162._elem = mixElem__$155;
                                        mix__$146.splice(i__$151 + 1, 0, nestedItem__$162);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$142 && (__$ctx._str += isBEM__$126 ? " " + cls__$142 : cls__$142);
            __$ctx._str += addJSInitClass__$145 ? ' i-bem"' : '"';
        }
        if (isBEM__$126 && jsParams__$136) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$136)) + '"';
        }
        var __$r__$164;
        var __$l9__$165 = $$mode;
        $$mode = "attrs";
        __$r__$164 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$165;
        var attrs__$163 = __$r__$164;
        attrs__$163 = __$ctx.extend(attrs__$163, ctx__$125.attrs);
        if (attrs__$163) {
            var name__$166, attr__$167;
            for (name__$166 in attrs__$163) {
                attr__$167 = attrs__$163[name__$166];
                if (typeof attr__$167 === "undefined") continue;
                __$ctx._str += " " + name__$166 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$167) ? attr__$167 : __$ctx.reapply(attr__$167)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$127)) {
        __$ctx._str += "/>";
    } else {
        tag__$127 && (__$ctx._str += ">");
        var __$r__$169;
        var __$l10__$170 = $$mode;
        $$mode = "content";
        __$r__$169 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$170;
        var content__$168 = __$r__$169;
        if (content__$168 || content__$168 === 0) {
            isBEM__$126 = vBlock__$132 || $$elem;
            var __$r__$171;
            var __$l11__$172 = $$mode;
            $$mode = "";
            var __$l12__$173 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$174 = __$ctx.position;
            __$ctx.position = isBEM__$126 ? 1 : __$ctx.position;
            var __$l14__$175 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$126 ? 1 : __$ctx._listLength;
            var __$l15__$176 = __$ctx.ctx;
            __$ctx.ctx = content__$168;
            __$r__$171 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$172;
            __$ctx._notNewList = __$l12__$173;
            __$ctx.position = __$l13__$174;
            __$ctx._listLength = __$l14__$175;
            __$ctx.ctx = __$l15__$176;
        }
        tag__$127 && (__$ctx._str += "</" + tag__$127 + ">");
    }
    res__$128 = __$ctx._str;
    __$r__$130 = undefined;
    __$ctx._str = __$l0__$131;
    __$ctx._buf.push(res__$128);
    return;
}

function __$b67(__$ctx, __$ref) {
    var mix__$105 = function __$lb__$106() {
        var __$r__$107;
        var __$l0__$108 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 524288;
        __$r__$107 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$108;
        return __$r__$107;
    }(), uaMix__$109 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$105 ? uaMix__$109.concat(mix__$105) : uaMix__$109;
}

function __$b78(__$ctx, __$ref) {
    var __$r__$178;
    var __$l0__$179 = $$mode;
    $$mode = "";
    var __$l1__$180 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$182;
    var __$l2__$183 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$182 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$183;
    __$r__$178 = __$r__$182;
    $$mode = __$l0__$179;
    __$ctx.ctx = __$l1__$180;
    return;
}

function __$b79(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$184 = __$ctx.ctx;
    if (ctx__$184 && ctx__$184 !== true || ctx__$184 === 0) {
        __$ctx._str += ctx__$184 + "";
    }
    return;
}

function __$b80(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b81(__$ctx, __$ref) {
    var ctx__$185 = __$ctx.ctx, len__$186 = ctx__$185.length, i__$187 = 0, prevPos__$188 = __$ctx.position, prevNotNewList__$189 = __$ctx._notNewList;
    if (prevNotNewList__$189) {
        __$ctx._listLength += len__$186 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$186;
    }
    __$ctx._notNewList = true;
    while (i__$187 < len__$186) (function __$lb__$190() {
        var __$r__$191;
        var __$l0__$192 = __$ctx.ctx;
        __$ctx.ctx = ctx__$185[i__$187++];
        __$r__$191 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$192;
        return __$r__$191;
    })();
    prevNotNewList__$189 || (__$ctx.position = prevPos__$188);
    return;
}

function __$b82(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$193 = __$ctx.ctx.block, vElem__$194 = __$ctx.ctx.elem, block__$195 = __$ctx._currBlock || $$block;
    var __$r__$197;
    var __$l0__$198 = $$mode;
    $$mode = "default";
    var __$l1__$199 = $$block;
    $$block = vBlock__$193 || (vElem__$194 ? block__$195 : undefined);
    var __$l2__$200 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$193 || vElem__$194 ? undefined : block__$195;
    var __$l3__$201 = $$elem;
    $$elem = vElem__$194;
    var __$l4__$202 = $$mods;
    $$mods = vBlock__$193 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$203 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$197 = undefined;
    $$mode = __$l0__$198;
    $$block = __$l1__$199;
    __$ctx._currBlock = __$l2__$200;
    $$elem = __$l3__$201;
    $$mods = __$l4__$202;
    $$elemMods = __$l5__$203;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 1) === 0) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "check") {
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!$$elem && $$mods && $$mods["mode"] === "radio-check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 4) === 0) {
            return [ {
                elem: "control",
                val: __$ctx._checkedOptions[0].val
            }, function __$lb__$8() {
                var __$r__$9;
                var __$l0__$10 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4;
                __$r__$9 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$10;
                return __$r__$9;
            }() ];
        }
        var __$t = $$elem;
        if (__$t === "button") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio-check") {
                    return [ {
                        elem: "text",
                        content: (__$ctx._checkedOptions[0] || __$ctx._select).text
                    } ];
                } else if (__$t === "radio") {
                    return [ {
                        elem: "text",
                        content: __$ctx._checkedOption.text
                    } ];
                }
            }
        }
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && (__$ctx.__$a0 & 16) === 0) {
                return [ {
                    elem: "control",
                    val: __$ctx._checkedOption.val
                }, function __$lb__$14() {
                    var __$r__$15;
                    var __$l0__$16 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$15 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$16;
                    return __$r__$15;
                }() ];
            }
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    theme: $$mods.theme,
                    autoclosable: true
                },
                directions: [ "bottom-left", "bottom-right", "top-left", "top-right" ],
                content: {
                    block: $$block,
                    mods: $$mods,
                    elem: "menu"
                }
            } ];
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b9(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 64) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$26() {
                var __$r__$27;
                var __$l0__$28 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$27 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$28;
                return __$r__$27;
            }() ];
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 262144) === 0) {
                return [ function __$lb__$102() {
                    var __$r__$103;
                    var __$l0__$104 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$103 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$104;
                    return __$r__$103;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 1048576) === 0) {
            return [ function __$lb__$110() {
                var __$r__$111;
                var __$l0__$112 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$111 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$112;
                return __$r__$111;
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
        if (!$$elem && (__$ctx.__$a0 & 2097152) === 0) {
            return [ function __$lb__$113() {
                var __$r__$114;
                var __$l0__$115 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$114 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$115;
                return __$r__$114;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "check") {
                    if ((__$ctx.__$a0 & 2) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$5() {
                            var __$r__$6;
                            var __$l0__$7 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 2;
                            __$r__$6 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$7;
                            return __$r__$6;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "radio-check") {
                    if ((__$ctx.__$a0 & 8) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$11() {
                            var __$r__$12;
                            var __$l0__$13 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 8;
                            __$r__$12 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$13;
                            return __$r__$12;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 65536) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$83() {
                        var __$r__$84;
                        var __$l0__$85 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                        __$r__$84 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$85;
                        return __$r__$84;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b19(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend(function __$lb__$55() {
                    var __$r__$56;
                    var __$l0__$57 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$56 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$57;
                    return __$r__$56;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b22(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$32() {
                    var __$r__$33;
                    var __$l0__$34 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$33 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$34;
                    return __$r__$33;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                val: __$ctx.ctx.val
            };
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return true;
        }
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b28(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8192) === 0) {
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b31(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$ctx.extend(function __$lb__$29() {
                    var __$r__$30;
                    var __$l0__$31 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$30 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$31;
                    return __$r__$30;
                }(), {
                    "aria-label": __$ctx.ctx.title
                });
                if (__$r !== __$ref) return __$r;
            }
            return {
                role: "group"
            };
        }
        if (!$$elem) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
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
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            return "input";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
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

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b57(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b58(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b63(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b64(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
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