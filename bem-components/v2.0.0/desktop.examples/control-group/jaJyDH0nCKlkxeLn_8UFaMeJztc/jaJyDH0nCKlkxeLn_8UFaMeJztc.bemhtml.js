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
    } else if (__$t === "default") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g4(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1048576) === 0) {
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
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
        ctx["_input"] = undefined;
        ctx["_ieCommented"] = undefined;
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

function __$b5(__$ctx, __$ref) {
    var attrs__$30 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$30.tabindex = 0);
    return attrs__$30;
}

function __$b7(__$ctx, __$ref) {
    var ctx__$61 = __$ctx.ctx, attrs__$62 = {
        type: $$mods.type || "button",
        name: ctx__$61.name,
        value: ctx__$61.val
    };
    $$mods.disabled && (attrs__$62.disabled = "disabled");
    return __$ctx.extend(function __$lb__$63() {
        var __$r__$64;
        var __$l0__$65 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1024;
        __$r__$64 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$65;
        return __$r__$64;
    }(), attrs__$62);
}

function __$b8(__$ctx, __$ref) {
    var ctx__$66 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$66.tabIndex,
        id: ctx__$66.id,
        title: ctx__$66.title
    };
}

function __$b10(__$ctx, __$ref) {
    var input__$98 = __$ctx._input, attrs__$99 = {
        id: input__$98.id,
        name: input__$98.name,
        value: input__$98.val,
        maxlength: input__$98.maxLength,
        tabindex: input__$98.tabIndex,
        placeholder: input__$98.placeholder
    };
    input__$98.autocomplete === false && (attrs__$99.autocomplete = "off");
    $$mods.disabled && (attrs__$99.disabled = "disabled");
    return attrs__$99;
}

function __$b32(__$ctx, __$ref) {
    (__$ctx._firstItem.mods = __$ctx._firstItem.mods || {}).checked = true;
    var __$r__$3;
    var __$l0__$4 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$3 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$4;
    return;
}

function __$b33(__$ctx, __$ref) {
    var ctx__$31 = __$ctx.ctx, mods__$32 = $$mods, firstItem__$33, checkedItems__$34 = [];
    if (ctx__$31.content) {
        var isValDef__$35 = typeof ctx__$31.val !== "undefined", containsVal__$36 = function(val) {
            return isValDef__$35 && (mods__$32.mode === "check" ? ctx__$31.val.indexOf(val) > -1 : ctx__$31.val === val);
        }, iterateItems__$37 = function(content) {
            var i__$38 = 0, itemOrGroup__$39;
            while (itemOrGroup__$39 = content[i__$38++]) {
                if (itemOrGroup__$39.block === "menu-item") {
                    firstItem__$33 || (firstItem__$33 = itemOrGroup__$39);
                    if (containsVal__$36(itemOrGroup__$39.val)) {
                        (itemOrGroup__$39.mods = itemOrGroup__$39.mods || {}).checked = true;
                        checkedItems__$34.push(itemOrGroup__$39);
                    }
                } else {
                    iterateItems__$37(itemOrGroup__$39.content);
                }
            }
        };
        iterateItems__$37(ctx__$31.content);
    }
    __$ctx._firstItem = firstItem__$33;
    __$ctx._checkedItems = checkedItems__$34;
    var __$r__$41;
    var __$l0__$42 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$32.theme,
        disabled: mods__$32.disabled
    };
    var __$r__$44;
    var __$l1__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$45;
    __$r__$41 = __$r__$44;
    __$ctx._menuMods = __$l0__$42;
    return;
}

function __$b34(__$ctx, __$ref) {
    var checkedOptions__$8 = __$ctx._checkedOptions, firstOption__$9 = __$ctx._firstOption;
    if (firstOption__$9 && !checkedOptions__$8.length) {
        firstOption__$9.checked = true;
        checkedOptions__$8 = [ firstOption__$9 ];
    }
    var __$r__$11;
    var __$l0__$12 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$8[0];
    var __$r__$14;
    var __$l1__$15 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$14 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$15;
    __$r__$11 = __$r__$14;
    __$ctx._checkedOption = __$l0__$12;
    return;
}

function __$b35(__$ctx, __$ref) {
    var mods__$46 = $$mods, optionToMenuItem__$47 = function(option) {
        var res__$48 = {
            block: "menu-item",
            mods: {
                disabled: mods__$46.disabled || option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$48.js.text = option.text;
            res__$48.content = [ option.icon, res__$48.content ];
        }
        return res__$48;
    };
    var __$r__$50;
    var __$l0__$51 = $$mode;
    $$mode = "";
    var __$l1__$52 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$46.size,
            theme: mods__$46.theme,
            disabled: mods__$46.disabled,
            mode: mods__$46.mode
        },
        val: __$ctx._select.val,
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
                content: optionOrGroup.group.map(optionToMenuItem__$47)
            } : optionToMenuItem__$47(optionOrGroup);
        })
    };
    var __$r__$54;
    var __$l2__$55 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$54 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$55;
    __$r__$50 = __$r__$54;
    $$mode = __$l0__$51;
    __$ctx.ctx = __$l1__$52;
    return;
}

function __$b36(__$ctx, __$ref) {
    var mods__$67 = $$mods;
    var __$r__$69;
    var __$l0__$70 = $$mode;
    $$mode = "";
    var __$l1__$71 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$67.size,
            theme: mods__$67.theme,
            view: mods__$67.view,
            focused: mods__$67.focused,
            disabled: mods__$67.disabled,
            checked: mods__$67.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        tabIndex: __$ctx._select.tabIndex,
        content: [ function __$lb__$72() {
            var __$r__$73;
            var __$l3__$74 = $$mode;
            $$mode = "content";
            __$r__$73 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$74;
            return __$r__$73;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$75;
    var __$l2__$76 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$75 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$76;
    __$r__$69 = __$r__$75;
    $$mode = __$l0__$70;
    __$ctx.ctx = __$l1__$71;
    return;
}

function __$b37(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$81 = __$ctx.ctx, isValDef__$82 = typeof ctx__$81.val !== "undefined", isModeCheck__$83 = $$mods.mode === "check", firstOption__$84, checkedOptions__$85 = [], containsVal__$86 = function(val) {
        return isValDef__$82 && (isModeCheck__$83 ? ctx__$81.val.indexOf(val) > -1 : ctx__$81.val === val);
    }, iterateOptions__$87 = function(content) {
        var i__$88 = 0, option__$89;
        while (option__$89 = content[i__$88++]) {
            if (option__$89.group) {
                iterateOptions__$87(option__$89.group);
            } else {
                firstOption__$84 || (firstOption__$84 = option__$89);
                if (containsVal__$86(option__$89.val)) {
                    option__$89.checked = true;
                    checkedOptions__$85.push(option__$89);
                }
            }
        }
    };
    iterateOptions__$87(ctx__$81.options);
    var __$r__$91;
    var __$l0__$92 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$93 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$85;
    var __$l2__$94 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$84;
    var __$r__$96;
    var __$l3__$97 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$96 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$97;
    __$r__$91 = __$r__$96;
    __$ctx._select = __$l0__$92;
    __$ctx._checkedOptions = __$l1__$93;
    __$ctx._firstOption = __$l2__$94;
    return;
}

function __$b38(__$ctx, __$ref) {
    var mods__$26 = $$mods;
    mods__$26.theme = mods__$26.theme || __$ctx._menuMods.theme;
    mods__$26.disabled = mods__$26.disabled || __$ctx._menuMods.disabled;
    var __$r__$28;
    var __$l0__$29 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$28 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$29;
    return;
}

function __$b39(__$ctx, __$ref) {
    var __$r__$101;
    var __$l0__$102 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$104;
    var __$l1__$105 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$104 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$105;
    __$r__$101 = __$r__$104;
    __$ctx._input = __$l0__$102;
    return;
}

function __$b40(__$ctx, __$ref) {
    var url__$109 = __$ctx.ctx.url;
    var __$r__$111;
    var __$l0__$112 = $$mode;
    $$mode = "";
    var __$l1__$113 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$109 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$115;
    var __$l2__$116 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
    __$r__$115 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$116;
    __$r__$111 = __$r__$115;
    $$mode = __$l0__$112;
    __$ctx.ctx = __$l1__$113;
    return;
}

function __$b41(__$ctx, __$ref) {
    var ie__$117 = __$ctx.ctx.ie, hideRule__$118 = !ie__$117 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$117 === "!IE" ? [ ie__$117, "<!-->", "<!--" ] : [ ie__$117, "", "" ];
    var __$r__$120;
    var __$l0__$121 = $$mode;
    $$mode = "";
    var __$l3__$122 = __$ctx.ctx;
    var __$l1__$123 = __$l3__$122._ieCommented;
    __$l3__$122._ieCommented = true;
    var __$l2__$124 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$118[0] + "]>" + hideRule__$118[1], __$ctx.ctx, hideRule__$118[2] + "<![endif]-->" ];
    __$r__$120 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$121;
    __$l3__$122._ieCommented = __$l1__$123;
    __$ctx.ctx = __$l2__$124;
    return;
}

function __$b42(__$ctx, __$ref) {
    var ctx__$131 = __$ctx.ctx;
    var __$r__$133;
    var __$l0__$134 = $$mode;
    $$mode = "";
    var __$l1__$135 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$131.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$131.title
            }, {
                block: "ua"
            }, ctx__$131.head, ctx__$131.styles, ctx__$131.favicon ? {
                elem: "favicon",
                url: ctx__$131.favicon
            } : "" ]
        }, ctx__$131 ]
    } ];
    var __$r__$137;
    var __$l2__$138 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$137 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$138;
    __$r__$133 = __$r__$137;
    $$mode = __$l0__$134;
    __$ctx.ctx = __$l1__$135;
    return;
}

function __$b43(__$ctx, __$ref) {
    var BEM_INTERNAL__$139 = __$ctx.BEM.INTERNAL, ctx__$140 = __$ctx.ctx, isBEM__$141, tag__$142, res__$143;
    var __$r__$145;
    var __$l0__$146 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$147 = $$block;
    var __$r__$149;
    var __$l1__$150 = $$mode;
    $$mode = "tag";
    __$r__$149 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$150;
    tag__$142 = __$r__$149;
    typeof tag__$142 !== "undefined" || (tag__$142 = ctx__$140.tag);
    typeof tag__$142 !== "undefined" || (tag__$142 = "div");
    if (tag__$142) {
        var jsParams__$151, js__$152;
        if (vBlock__$147 && ctx__$140.js !== false) {
            var __$r__$153;
            var __$l2__$154 = $$mode;
            $$mode = "js";
            __$r__$153 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$154;
            js__$152 = __$r__$153;
            js__$152 = js__$152 ? __$ctx.extend(ctx__$140.js, js__$152 === true ? {} : js__$152) : ctx__$140.js === true ? {} : ctx__$140.js;
            js__$152 && ((jsParams__$151 = {})[BEM_INTERNAL__$139.buildClass(vBlock__$147, ctx__$140.elem)] = js__$152);
        }
        __$ctx._str += "<" + tag__$142;
        var __$r__$155;
        var __$l3__$156 = $$mode;
        $$mode = "bem";
        __$r__$155 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$156;
        isBEM__$141 = __$r__$155;
        typeof isBEM__$141 !== "undefined" || (isBEM__$141 = typeof ctx__$140.bem !== "undefined" ? ctx__$140.bem : ctx__$140.block || ctx__$140.elem);
        var __$r__$158;
        var __$l4__$159 = $$mode;
        $$mode = "cls";
        __$r__$158 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$159;
        var cls__$157 = __$r__$158;
        cls__$157 || (cls__$157 = ctx__$140.cls);
        var addJSInitClass__$160 = ctx__$140.block && jsParams__$151 && !ctx__$140.elem;
        if (isBEM__$141 || cls__$157) {
            __$ctx._str += ' class="';
            if (isBEM__$141) {
                __$ctx._str += BEM_INTERNAL__$139.buildClasses(vBlock__$147, ctx__$140.elem, ctx__$140.elemMods || ctx__$140.mods);
                var __$r__$162;
                var __$l5__$163 = $$mode;
                $$mode = "mix";
                __$r__$162 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$163;
                var mix__$161 = __$r__$162;
                ctx__$140.mix && (mix__$161 = mix__$161 ? [].concat(mix__$161, ctx__$140.mix) : ctx__$140.mix);
                if (mix__$161) {
                    var visited__$164 = {}, visitedKey__$165 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$164[visitedKey__$165(vBlock__$147, $$elem)] = true;
                    __$ctx.isArray(mix__$161) || (mix__$161 = [ mix__$161 ]);
                    for (var i__$166 = 0; i__$166 < mix__$161.length; i__$166++) {
                        var mixItem__$167 = mix__$161[i__$166], hasItem__$168 = mixItem__$167.block || mixItem__$167.elem, mixBlock__$169 = mixItem__$167.block || mixItem__$167._block || $$block, mixElem__$170 = mixItem__$167.elem || mixItem__$167._elem || $$elem;
                        hasItem__$168 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$139[hasItem__$168 ? "buildClasses" : "buildModsClasses"](mixBlock__$169, mixItem__$167.elem || mixItem__$167._elem || (mixItem__$167.block ? undefined : $$elem), mixItem__$167.elemMods || mixItem__$167.mods);
                        if (mixItem__$167.js) {
                            (jsParams__$151 || (jsParams__$151 = {}))[BEM_INTERNAL__$139.buildClass(mixBlock__$169, mixItem__$167.elem)] = mixItem__$167.js === true ? {} : mixItem__$167.js;
                            addJSInitClass__$160 || (addJSInitClass__$160 = mixBlock__$169 && !mixItem__$167.elem);
                        }
                        if (hasItem__$168 && !visited__$164[visitedKey__$165(mixBlock__$169, mixElem__$170)]) {
                            visited__$164[visitedKey__$165(mixBlock__$169, mixElem__$170)] = true;
                            var __$r__$172;
                            var __$l6__$173 = $$mode;
                            $$mode = "mix";
                            var __$l7__$174 = $$block;
                            $$block = mixBlock__$169;
                            var __$l8__$175 = $$elem;
                            $$elem = mixElem__$170;
                            __$r__$172 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$173;
                            $$block = __$l7__$174;
                            $$elem = __$l8__$175;
                            var nestedMix__$171 = __$r__$172;
                            if (nestedMix__$171) {
                                for (var j__$176 = 0; j__$176 < nestedMix__$171.length; j__$176++) {
                                    var nestedItem__$177 = nestedMix__$171[j__$176];
                                    if (!nestedItem__$177.block && !nestedItem__$177.elem || !visited__$164[visitedKey__$165(nestedItem__$177.block, nestedItem__$177.elem)]) {
                                        nestedItem__$177._block = mixBlock__$169;
                                        nestedItem__$177._elem = mixElem__$170;
                                        mix__$161.splice(i__$166 + 1, 0, nestedItem__$177);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$157 && (__$ctx._str += isBEM__$141 ? " " + cls__$157 : cls__$157);
            __$ctx._str += addJSInitClass__$160 ? ' i-bem"' : '"';
        }
        if (isBEM__$141 && jsParams__$151) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$151)) + '"';
        }
        var __$r__$179;
        var __$l9__$180 = $$mode;
        $$mode = "attrs";
        __$r__$179 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$180;
        var attrs__$178 = __$r__$179;
        attrs__$178 = __$ctx.extend(attrs__$178, ctx__$140.attrs);
        if (attrs__$178) {
            var name__$181, attr__$182;
            for (name__$181 in attrs__$178) {
                attr__$182 = attrs__$178[name__$181];
                if (typeof attr__$182 === "undefined") continue;
                __$ctx._str += " " + name__$181 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$182) ? attr__$182 : __$ctx.reapply(attr__$182)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$142)) {
        __$ctx._str += "/>";
    } else {
        tag__$142 && (__$ctx._str += ">");
        var __$r__$184;
        var __$l10__$185 = $$mode;
        $$mode = "content";
        __$r__$184 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$185;
        var content__$183 = __$r__$184;
        if (content__$183 || content__$183 === 0) {
            isBEM__$141 = vBlock__$147 || $$elem;
            var __$r__$186;
            var __$l11__$187 = $$mode;
            $$mode = "";
            var __$l12__$188 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$189 = __$ctx.position;
            __$ctx.position = isBEM__$141 ? 1 : __$ctx.position;
            var __$l14__$190 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$141 ? 1 : __$ctx._listLength;
            var __$l15__$191 = __$ctx.ctx;
            __$ctx.ctx = content__$183;
            __$r__$186 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$187;
            __$ctx._notNewList = __$l12__$188;
            __$ctx.position = __$l13__$189;
            __$ctx._listLength = __$l14__$190;
            __$ctx.ctx = __$l15__$191;
        }
        tag__$142 && (__$ctx._str += "</" + tag__$142 + ">");
    }
    res__$143 = __$ctx._str;
    __$r__$145 = undefined;
    __$ctx._str = __$l0__$146;
    __$ctx._buf.push(res__$143);
    return;
}

function __$b49(__$ctx, __$ref) {
    var ctx__$59 = __$ctx.ctx, content__$60 = [ ctx__$59.icon ];
    "text" in ctx__$59 && content__$60.push({
        elem: "text",
        content: ctx__$59.text
    });
    return content__$60;
}

function __$b59(__$ctx, __$ref) {
    var ctx__$80 = __$ctx.ctx;
    return {
        name: ctx__$80.name,
        optionsMaxHeight: ctx__$80.optionsMaxHeight
    };
}

function __$b62(__$ctx, __$ref) {
    var ctx__$16 = __$ctx.ctx;
    return {
        mainOffset: ctx__$16.mainOffset,
        secondaryOffset: ctx__$16.secondaryOffset,
        viewportOffset: ctx__$16.viewportOffset,
        directions: ctx__$16.directions,
        zIndexGroupLevel: ctx__$16.zIndexGroupLevel
    };
}

function __$b78(__$ctx, __$ref) {
    var __$r__$193;
    var __$l0__$194 = $$mode;
    $$mode = "";
    var __$l1__$195 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$197;
    var __$l2__$198 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$197 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$198;
    __$r__$193 = __$r__$197;
    $$mode = __$l0__$194;
    __$ctx.ctx = __$l1__$195;
    return;
}

function __$b79(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$199 = __$ctx.ctx;
    if (ctx__$199 && ctx__$199 !== true || ctx__$199 === 0) {
        __$ctx._str += ctx__$199 + "";
    }
    return;
}

function __$b80(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b81(__$ctx, __$ref) {
    var ctx__$200 = __$ctx.ctx, len__$201 = ctx__$200.length, i__$202 = 0, prevPos__$203 = __$ctx.position, prevNotNewList__$204 = __$ctx._notNewList;
    if (prevNotNewList__$204) {
        __$ctx._listLength += len__$201 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$201;
    }
    __$ctx._notNewList = true;
    while (i__$202 < len__$201) (function __$lb__$205() {
        var __$r__$206;
        var __$l0__$207 = __$ctx.ctx;
        __$ctx.ctx = ctx__$200[i__$202++];
        __$r__$206 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$207;
        return __$r__$206;
    })();
    prevNotNewList__$204 || (__$ctx.position = prevPos__$203);
    return;
}

function __$b82(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$208 = __$ctx.ctx.block, vElem__$209 = __$ctx.ctx.elem, block__$210 = __$ctx._currBlock || $$block;
    var __$r__$212;
    var __$l0__$213 = $$mode;
    $$mode = "default";
    var __$l1__$214 = $$block;
    $$block = vBlock__$208 || (vElem__$209 ? block__$210 : undefined);
    var __$l2__$215 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$208 || vElem__$209 ? undefined : block__$210;
    var __$l3__$216 = $$elem;
    $$elem = vElem__$209;
    var __$l4__$217 = $$mods;
    $$mods = vBlock__$208 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$218 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$212 = undefined;
    $$mode = __$l0__$213;
    $$block = __$l1__$214;
    __$ctx._currBlock = __$l2__$215;
    $$elem = __$l3__$216;
    $$mods = __$l4__$217;
    $$elemMods = __$l5__$218;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$20() {
                    var __$r__$21;
                    var __$l0__$22 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$21 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$22;
                    return __$r__$21;
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
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            return {
                type: "hidden",
                name: __$ctx._select.name,
                value: __$ctx.ctx.val,
                disabled: $$mods.disabled ? "disabled" : undefined
            };
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 1024) === 0) {
                var __$r = __$b7(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b8(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "input") {
        if ($$elem === "control") {
            var __$r = __$b10(__$ctx, __$ref);
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
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
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
    if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && __$ctx._firstItem && __$ctx._checkedItems && !__$ctx._checkedItems.length && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "menu") {
            if ((__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b36(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 65536) === 0) {
                        var __$r = __$b40(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b41(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && (__$ctx.__$a0 & 524288) === 0) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b43(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 8) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$17() {
                var __$r__$18;
                var __$l0__$19 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 8;
                __$r__$18 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$19;
                return __$r__$18;
            }() ];
        }
    } else if (__$t === "select") {
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio") {
            return [ {
                elem: "text",
                content: __$ctx._checkedOption.text
            } ];
        }
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && (__$ctx.__$a0 & 2) === 0) {
                return [ {
                    elem: "control",
                    val: __$ctx._checkedOption.val
                }, function __$lb__$5() {
                    var __$r__$6;
                    var __$l0__$7 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$6 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$7;
                    return __$r__$6;
                }() ];
            }
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
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if (!$$elem) {
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 32768) === 0) {
                return [ function __$lb__$106() {
                    var __$r__$107;
                    var __$l0__$108 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                    __$r__$107 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$108;
                    return __$r__$107;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 131072) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$125() {
                var __$r__$126;
                var __$l0__$127 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                __$r__$126 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$127;
                return __$r__$126;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 262144) === 0) {
            return [ function __$lb__$128() {
                var __$r__$129;
                var __$l0__$130 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                __$r__$129 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$130;
                return __$r__$129;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$ctx.extend(function __$lb__$23() {
                    var __$r__$24;
                    var __$l0__$25 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$24 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$25;
                    return __$r__$24;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend(function __$lb__$77() {
                    var __$r__$78;
                    var __$l0__$79 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$78 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$79;
                    return __$r__$78;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$ctx.extend(function __$lb__$56() {
                    var __$r__$57;
                    var __$l0__$58 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$57 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$58;
                    return __$r__$57;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                val: __$ctx.ctx.val
            };
        }
    } else if (__$t === "input") {
        if (!$$elem) {
            return true;
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