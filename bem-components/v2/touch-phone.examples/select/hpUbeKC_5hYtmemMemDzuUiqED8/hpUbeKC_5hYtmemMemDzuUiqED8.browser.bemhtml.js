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
            if (!$$elem && (__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b61(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 524288) === 0) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b73(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b74(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b75(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b76(__$ctx, __$ref);
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

function __$b2(__$ctx, __$ref) {
    var val__$66 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$66) ? val__$66 : JSON.stringify(val__$66),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b4(__$ctx, __$ref) {
    var ctx__$44 = __$ctx.ctx, attrs__$45 = {
        type: $$mods.type || "button",
        name: ctx__$44.name,
        value: ctx__$44.val
    };
    $$mods.disabled && (attrs__$45.disabled = "disabled");
    return __$ctx.extend(function __$lb__$46() {
        var __$r__$47;
        var __$l0__$48 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$47 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$48;
        return __$r__$47;
    }(), attrs__$45);
}

function __$b5(__$ctx, __$ref) {
    var ctx__$49 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$49.tabIndex,
        id: ctx__$49.id,
        title: ctx__$49.title
    };
}

function __$b9(__$ctx, __$ref) {
    var attrs__$22 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$22.tabindex = 0);
    return attrs__$22;
}

function __$b29(__$ctx, __$ref) {
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

function __$b30(__$ctx, __$ref) {
    var checkedOptions__$4 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$4.length === 1 ? checkedOptions__$4[0].text : checkedOptions__$4.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b33(__$ctx, __$ref) {
    var ctx__$42 = __$ctx.ctx, content__$43 = [ ctx__$42.icon ];
    "text" in ctx__$42 && content__$43.push({
        elem: "text",
        content: ctx__$42.text
    });
    return content__$43;
}

function __$b42(__$ctx, __$ref) {
    var ctx__$70 = __$ctx.ctx;
    return {
        name: ctx__$70.name,
        optionsMaxHeight: ctx__$70.optionsMaxHeight
    };
}

function __$b45(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx;
    return {
        mainOffset: ctx__$8.mainOffset,
        secondaryOffset: ctx__$8.secondaryOffset,
        viewportOffset: ctx__$8.viewportOffset,
        directions: ctx__$8.directions,
        zIndexGroupLevel: ctx__$8.zIndexGroupLevel
    };
}

function __$b51(__$ctx, __$ref) {
    var mods__$56 = $$mods;
    var __$r__$58;
    var __$l0__$59 = $$mode;
    $$mode = "";
    var __$l1__$60 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$56.size,
            theme: mods__$56.theme,
            focused: mods__$56.focused,
            disabled: mods__$56.disabled,
            checked: mods__$56.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$61() {
            var __$r__$62;
            var __$l3__$63 = $$mode;
            $$mode = "content";
            __$r__$62 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$63;
            return __$r__$62;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$64;
    var __$l2__$65 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$64 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$65;
    __$r__$58 = __$r__$64;
    $$mode = __$l0__$59;
    __$ctx.ctx = __$l1__$60;
    return;
}

function __$b52(__$ctx, __$ref) {
    var mods__$29 = $$mods, optionToMenuItem__$30 = function(option) {
        var res__$31 = {
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
            res__$31.js.text = option.text;
            res__$31.content = [ option.icon, res__$31.content ];
        }
        return res__$31;
    };
    var __$r__$33;
    var __$l0__$34 = $$mode;
    $$mode = "";
    var __$l1__$35 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$29.size,
            theme: mods__$29.theme,
            disabled: mods__$29.disabled,
            mode: mods__$29.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$30)
            } : optionToMenuItem__$30(optionOrGroup);
        })
    };
    var __$r__$37;
    var __$l2__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$38;
    __$r__$33 = __$r__$37;
    $$mode = __$l0__$34;
    __$ctx.ctx = __$l1__$35;
    return;
}

function __$b53(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$71 = __$ctx.ctx.options, i__$72 = 0, j__$73, optionOrGroup__$74, option__$75, firstOption__$76, checkedOptions__$77 = [];
    while (optionOrGroup__$74 = options__$71[i__$72++]) {
        if (optionOrGroup__$74.group) {
            j__$73 = 0;
            while (option__$75 = optionOrGroup__$74.group[j__$73++]) {
                i__$72 === 1 && j__$73 === 1 && (firstOption__$76 = option__$75);
                option__$75.checked && checkedOptions__$77.push(option__$75);
            }
        } else {
            i__$72 === 1 && (firstOption__$76 = optionOrGroup__$74);
            optionOrGroup__$74.checked && checkedOptions__$77.push(optionOrGroup__$74);
        }
    }
    var __$r__$79;
    var __$l0__$80 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$81 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$77;
    var __$l2__$82 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$76;
    var __$r__$84;
    var __$l3__$85 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$84 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$85;
    __$r__$79 = __$r__$84;
    __$ctx._select = __$l0__$80;
    __$ctx._checkedOptions = __$l1__$81;
    __$ctx._firstOption = __$l2__$82;
    return;
}

function __$b54(__$ctx, __$ref) {
    var __$r__$51;
    var __$l0__$52 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$54;
    var __$l1__$55 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$54 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$55;
    __$r__$51 = __$r__$54;
    __$ctx._button = __$l0__$52;
    return;
}

function __$b55(__$ctx, __$ref) {
    var __$r__$24;
    var __$l0__$25 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$27;
    var __$l1__$28 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$27 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$28;
    __$r__$24 = __$r__$27;
    __$ctx._menuMods = __$l0__$25;
    delete __$ctx._menuTheme;
    return;
}

function __$b56(__$ctx, __$ref) {
    var mods__$18 = $$mods;
    mods__$18.theme = mods__$18.theme || __$ctx._menuMods.theme;
    mods__$18.disabled = mods__$18.disabled || __$ctx._menuMods.disabled;
    var __$r__$20;
    var __$l0__$21 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$20 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$21;
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$100 = __$ctx.ctx;
    var __$r__$102;
    var __$l0__$103 = $$mode;
    $$mode = "";
    var __$l1__$104 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$100.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$100.title
            }, {
                block: "ua"
            }, ctx__$100.head, ctx__$100.styles, ctx__$100.favicon ? {
                elem: "favicon",
                url: ctx__$100.favicon
            } : "" ]
        }, ctx__$100 ]
    } ];
    var __$r__$106;
    var __$l2__$107 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$106 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$107;
    __$r__$102 = __$r__$106;
    $$mode = __$l0__$103;
    __$ctx.ctx = __$l1__$104;
    __$ctx._defPageApplied = false;
    return;
}

function __$b58(__$ctx, __$ref) {
    var BEM_INTERNAL__$108 = __$ctx.BEM.INTERNAL, ctx__$109 = __$ctx.ctx, isBEM__$110, tag__$111, res__$112;
    var __$r__$114;
    var __$l0__$115 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$116 = $$block;
    var __$r__$118;
    var __$l1__$119 = $$mode;
    $$mode = "tag";
    __$r__$118 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$119;
    tag__$111 = __$r__$118;
    typeof tag__$111 !== "undefined" || (tag__$111 = ctx__$109.tag);
    typeof tag__$111 !== "undefined" || (tag__$111 = "div");
    if (tag__$111) {
        var jsParams__$120, js__$121;
        if (vBlock__$116 && ctx__$109.js !== false) {
            var __$r__$122;
            var __$l2__$123 = $$mode;
            $$mode = "js";
            __$r__$122 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$123;
            js__$121 = __$r__$122;
            js__$121 = js__$121 ? __$ctx.extend(ctx__$109.js, js__$121 === true ? {} : js__$121) : ctx__$109.js === true ? {} : ctx__$109.js;
            js__$121 && ((jsParams__$120 = {})[BEM_INTERNAL__$108.buildClass(vBlock__$116, ctx__$109.elem)] = js__$121);
        }
        __$ctx._str += "<" + tag__$111;
        var __$r__$124;
        var __$l3__$125 = $$mode;
        $$mode = "bem";
        __$r__$124 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$125;
        isBEM__$110 = __$r__$124;
        typeof isBEM__$110 !== "undefined" || (isBEM__$110 = typeof ctx__$109.bem !== "undefined" ? ctx__$109.bem : ctx__$109.block || ctx__$109.elem);
        var __$r__$127;
        var __$l4__$128 = $$mode;
        $$mode = "cls";
        __$r__$127 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$128;
        var cls__$126 = __$r__$127;
        cls__$126 || (cls__$126 = ctx__$109.cls);
        var addJSInitClass__$129 = ctx__$109.block && jsParams__$120;
        if (isBEM__$110 || cls__$126) {
            __$ctx._str += ' class="';
            if (isBEM__$110) {
                __$ctx._str += BEM_INTERNAL__$108.buildClasses(vBlock__$116, ctx__$109.elem, ctx__$109.elemMods || ctx__$109.mods);
                var __$r__$131;
                var __$l5__$132 = $$mode;
                $$mode = "mix";
                __$r__$131 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$132;
                var mix__$130 = __$r__$131;
                ctx__$109.mix && (mix__$130 = mix__$130 ? [].concat(mix__$130, ctx__$109.mix) : ctx__$109.mix);
                if (mix__$130) {
                    var visited__$133 = {}, visitedKey__$134 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$133[visitedKey__$134(vBlock__$116, $$elem)] = true;
                    __$ctx.isArray(mix__$130) || (mix__$130 = [ mix__$130 ]);
                    for (var i__$135 = 0; i__$135 < mix__$130.length; i__$135++) {
                        var mixItem__$136 = mix__$130[i__$135], hasItem__$137 = mixItem__$136.block || mixItem__$136.elem, mixBlock__$138 = mixItem__$136.block || mixItem__$136._block || $$block, mixElem__$139 = mixItem__$136.elem || mixItem__$136._elem || $$elem;
                        hasItem__$137 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$108[hasItem__$137 ? "buildClasses" : "buildModsClasses"](mixBlock__$138, mixItem__$136.elem || mixItem__$136._elem || (mixItem__$136.block ? undefined : $$elem), mixItem__$136.elemMods || mixItem__$136.mods);
                        if (mixItem__$136.js) {
                            (jsParams__$120 || (jsParams__$120 = {}))[BEM_INTERNAL__$108.buildClass(mixBlock__$138, mixItem__$136.elem)] = mixItem__$136.js === true ? {} : mixItem__$136.js;
                            addJSInitClass__$129 || (addJSInitClass__$129 = mixBlock__$138 && !mixItem__$136.elem);
                        }
                        if (hasItem__$137 && !visited__$133[visitedKey__$134(mixBlock__$138, mixElem__$139)]) {
                            visited__$133[visitedKey__$134(mixBlock__$138, mixElem__$139)] = true;
                            var __$r__$141;
                            var __$l6__$142 = $$mode;
                            $$mode = "mix";
                            var __$l7__$143 = $$block;
                            $$block = mixBlock__$138;
                            var __$l8__$144 = $$elem;
                            $$elem = mixElem__$139;
                            __$r__$141 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$142;
                            $$block = __$l7__$143;
                            $$elem = __$l8__$144;
                            var nestedMix__$140 = __$r__$141;
                            if (nestedMix__$140) {
                                for (var j__$145 = 0; j__$145 < nestedMix__$140.length; j__$145++) {
                                    var nestedItem__$146 = nestedMix__$140[j__$145];
                                    if (!nestedItem__$146.block && !nestedItem__$146.elem || !visited__$133[visitedKey__$134(nestedItem__$146.block, nestedItem__$146.elem)]) {
                                        nestedItem__$146._block = mixBlock__$138;
                                        nestedItem__$146._elem = mixElem__$139;
                                        mix__$130.splice(i__$135 + 1, 0, nestedItem__$146);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$126 && (__$ctx._str += isBEM__$110 ? " " + cls__$126 : cls__$126);
            __$ctx._str += addJSInitClass__$129 ? ' i-bem"' : '"';
        }
        if (isBEM__$110 && jsParams__$120) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$120)) + '"';
        }
        var __$r__$148;
        var __$l9__$149 = $$mode;
        $$mode = "attrs";
        __$r__$148 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$149;
        var attrs__$147 = __$r__$148;
        attrs__$147 = __$ctx.extend(attrs__$147, ctx__$109.attrs);
        if (attrs__$147) {
            var name__$150, attr__$151;
            for (name__$150 in attrs__$147) {
                attr__$151 = attrs__$147[name__$150];
                if (typeof attr__$151 === "undefined") continue;
                __$ctx._str += " " + name__$150 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$151) ? attr__$151 : __$ctx.reapply(attr__$151)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$111)) {
        __$ctx._str += "/>";
    } else {
        tag__$111 && (__$ctx._str += ">");
        var __$r__$153;
        var __$l10__$154 = $$mode;
        $$mode = "content";
        __$r__$153 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$154;
        var content__$152 = __$r__$153;
        if (content__$152 || content__$152 === 0) {
            isBEM__$110 = vBlock__$116 || $$elem;
            var __$r__$155;
            var __$l11__$156 = $$mode;
            $$mode = "";
            var __$l12__$157 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$158 = __$ctx.position;
            __$ctx.position = isBEM__$110 ? 1 : __$ctx.position;
            var __$l14__$159 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$110 ? 1 : __$ctx._listLength;
            var __$l15__$160 = __$ctx.ctx;
            __$ctx.ctx = content__$152;
            __$r__$155 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$156;
            __$ctx._notNewList = __$l12__$157;
            __$ctx.position = __$l13__$158;
            __$ctx._listLength = __$l14__$159;
            __$ctx.ctx = __$l15__$160;
        }
        tag__$111 && (__$ctx._str += "</" + tag__$111 + ">");
    }
    res__$112 = __$ctx._str;
    __$r__$114 = undefined;
    __$ctx._str = __$l0__$115;
    __$ctx._buf.push(res__$112);
    return;
}

function __$b61(__$ctx, __$ref) {
    var mix__$89 = function __$lb__$90() {
        var __$r__$91;
        var __$l0__$92 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32768;
        __$r__$91 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$92;
        return __$r__$91;
    }(), uaMix__$93 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$89 ? uaMix__$93.concat(mix__$89) : uaMix__$93;
}

function __$b72(__$ctx, __$ref) {
    var __$r__$162;
    var __$l0__$163 = $$mode;
    $$mode = "";
    var __$l1__$164 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$166;
    var __$l2__$167 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$166 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$167;
    __$r__$162 = __$r__$166;
    $$mode = __$l0__$163;
    __$ctx.ctx = __$l1__$164;
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$168 = __$ctx.ctx;
    if (ctx__$168 && ctx__$168 !== true || ctx__$168 === 0) {
        __$ctx._str += ctx__$168 + "";
    }
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b75(__$ctx, __$ref) {
    var ctx__$169 = __$ctx.ctx, len__$170 = ctx__$169.length, i__$171 = 0, prevPos__$172 = __$ctx.position, prevNotNewList__$173 = __$ctx._notNewList;
    if (prevNotNewList__$173) {
        __$ctx._listLength += len__$170 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$170;
    }
    __$ctx._notNewList = true;
    while (i__$171 < len__$170) (function __$lb__$174() {
        var __$r__$175;
        var __$l0__$176 = __$ctx.ctx;
        __$ctx.ctx = ctx__$169[i__$171++];
        __$r__$175 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$176;
        return __$r__$175;
    })();
    prevNotNewList__$173 || (__$ctx.position = prevPos__$172);
    return;
}

function __$b76(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$177 = __$ctx.ctx.block, vElem__$178 = __$ctx.ctx.elem, block__$179 = __$ctx._currBlock || $$block;
    var __$r__$181;
    var __$l0__$182 = $$mode;
    $$mode = "default";
    var __$l1__$183 = $$block;
    $$block = vBlock__$177 || (vElem__$178 ? block__$179 : undefined);
    var __$l2__$184 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$177 || vElem__$178 ? undefined : block__$179;
    var __$l3__$185 = $$elem;
    $$elem = vElem__$178;
    var __$l4__$186 = $$mods;
    $$mods = vBlock__$177 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$187 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$181 = undefined;
    $$mode = __$l0__$182;
    $$block = __$l1__$183;
    __$ctx._currBlock = __$l2__$184;
    $$elem = __$l3__$185;
    $$mods = __$l4__$186;
    $$elemMods = __$l5__$187;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b2(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$ctx.extend(function __$lb__$12() {
                    var __$r__$13;
                    var __$l0__$14 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$13 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$14;
                    return __$r__$13;
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
            var __$r = __$b9(__$ctx, __$ref);
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

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "select") {
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
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 1) === 0) {
            var __$r = __$b29(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "check") {
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!$$elem) {
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    target: "anchor",
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
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$9() {
                var __$r__$10;
                var __$l0__$11 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4;
                __$r__$10 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$11;
                return __$r__$10;
            }() ];
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 16384) === 0) {
                return [ function __$lb__$86() {
                    var __$r__$87;
                    var __$l0__$88 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
                    __$r__$87 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$88;
                    return __$r__$87;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 65536) === 0) {
            return [ function __$lb__$94() {
                var __$r__$95;
                var __$l0__$96 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                __$r__$95 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$96;
                return __$r__$95;
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
        if (!$$elem && (__$ctx.__$a0 & 131072) === 0) {
            return [ function __$lb__$97() {
                var __$r__$98;
                var __$l0__$99 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                __$r__$98 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$99;
                return __$r__$98;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                if ($$mods["mode"] === "check" && (__$ctx.__$a0 & 2) === 0) {
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
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$67() {
                        var __$r__$68;
                        var __$l0__$69 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                        __$r__$68 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$69;
                        return __$r__$68;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$39() {
                    var __$r__$40;
                    var __$l0__$41 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$40 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$41;
                    return __$r__$40;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b45(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
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

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b51(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b52(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b58(__$ctx, __$ref);
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