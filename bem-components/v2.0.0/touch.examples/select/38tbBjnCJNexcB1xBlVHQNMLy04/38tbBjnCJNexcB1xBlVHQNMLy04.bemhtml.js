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
            if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b59(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b70(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b73(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b74(__$ctx, __$ref);
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
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b3(__$ctx, __$ref) {
    var ctx__$55 = __$ctx.ctx, attrs__$56 = {
        type: $$mods.type || "button",
        name: ctx__$55.name,
        value: ctx__$55.val
    };
    $$mods.disabled && (attrs__$56.disabled = "disabled");
    return __$ctx.extend(function __$lb__$57() {
        var __$r__$58;
        var __$l0__$59 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$58 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$59;
        return __$r__$58;
    }(), attrs__$56);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$60 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$60.tabIndex,
        id: ctx__$60.id,
        title: ctx__$60.title
    };
}

function __$b8(__$ctx, __$ref) {
    var attrs__$24 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$24.tabindex = 0);
    return attrs__$24;
}

function __$b28(__$ctx, __$ref) {
    var res__$2 = __$ctx._checkedOptions.map(function(option) {
        return {
            elem: "control",
            val: option.val
        };
    });
    res__$2.push(function __$lb__$3() {
        var __$r__$4;
        var __$l0__$5 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$4 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$5;
        return __$r__$4;
    }());
    return res__$2;
}

function __$b29(__$ctx, __$ref) {
    var checkedOptions__$6 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$6.length === 1 ? checkedOptions__$6[0].text : checkedOptions__$6.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b32(__$ctx, __$ref) {
    var ctx__$53 = __$ctx.ctx, content__$54 = [ ctx__$53.icon ];
    "text" in ctx__$53 && content__$54.push({
        elem: "text",
        content: ctx__$53.text
    });
    return content__$54;
}

function __$b41(__$ctx, __$ref) {
    var ctx__$74 = __$ctx.ctx;
    return {
        name: ctx__$74.name,
        optionsMaxHeight: ctx__$74.optionsMaxHeight
    };
}

function __$b44(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        mainOffset: ctx__$10.mainOffset,
        secondaryOffset: ctx__$10.secondaryOffset,
        viewportOffset: ctx__$10.viewportOffset,
        directions: ctx__$10.directions,
        zIndexGroupLevel: ctx__$10.zIndexGroupLevel
    };
}

function __$b50(__$ctx, __$ref) {
    var mods__$61 = $$mods;
    var __$r__$63;
    var __$l0__$64 = $$mode;
    $$mode = "";
    var __$l1__$65 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$61.size,
            theme: mods__$61.theme,
            view: mods__$61.view,
            focused: mods__$61.focused,
            disabled: mods__$61.disabled,
            checked: mods__$61.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        tabIndex: __$ctx._select.tabIndex,
        content: [ function __$lb__$66() {
            var __$r__$67;
            var __$l3__$68 = $$mode;
            $$mode = "content";
            __$r__$67 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$68;
            return __$r__$67;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$69;
    var __$l2__$70 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$69 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$70;
    __$r__$63 = __$r__$69;
    $$mode = __$l0__$64;
    __$ctx.ctx = __$l1__$65;
    return;
}

function __$b51(__$ctx, __$ref) {
    var mods__$40 = $$mods, optionToMenuItem__$41 = function(option) {
        var res__$42 = {
            block: "menu-item",
            mods: {
                disabled: mods__$40.disabled || option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$42.js.text = option.text;
            res__$42.content = [ option.icon, res__$42.content ];
        }
        return res__$42;
    };
    var __$r__$44;
    var __$l0__$45 = $$mode;
    $$mode = "";
    var __$l1__$46 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$40.size,
            theme: mods__$40.theme,
            disabled: mods__$40.disabled,
            mode: mods__$40.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$41)
            } : optionToMenuItem__$41(optionOrGroup);
        })
    };
    var __$r__$48;
    var __$l2__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$49;
    __$r__$44 = __$r__$48;
    $$mode = __$l0__$45;
    __$ctx.ctx = __$l1__$46;
    return;
}

function __$b52(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$75 = __$ctx.ctx, isValDef__$76 = typeof ctx__$75.val !== "undefined", isModeCheck__$77 = $$mods.mode === "check", firstOption__$78, checkedOptions__$79 = [], containsVal__$80 = function(val) {
        return isValDef__$76 && (isModeCheck__$77 ? ctx__$75.val.indexOf(val) > -1 : ctx__$75.val === val);
    }, iterateOptions__$81 = function(content) {
        var i__$82 = 0, option__$83;
        while (option__$83 = content[i__$82++]) {
            if (option__$83.group) {
                iterateOptions__$81(option__$83.group);
            } else {
                firstOption__$78 || (firstOption__$78 = option__$83);
                if (containsVal__$80(option__$83.val)) {
                    option__$83.checked = true;
                    checkedOptions__$79.push(option__$83);
                }
            }
        }
    };
    iterateOptions__$81(ctx__$75.options);
    var __$r__$85;
    var __$l0__$86 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$87 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$79;
    var __$l2__$88 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$78;
    var __$r__$90;
    var __$l3__$91 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$90 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$91;
    __$r__$85 = __$r__$90;
    __$ctx._select = __$l0__$86;
    __$ctx._checkedOptions = __$l1__$87;
    __$ctx._firstOption = __$l2__$88;
    return;
}

function __$b53(__$ctx, __$ref) {
    var ctx__$25 = __$ctx.ctx, mods__$26 = $$mods, firstItem__$27, checkedItems__$28 = [];
    if (ctx__$25.content) {
        var isValDef__$29 = typeof ctx__$25.val !== "undefined", containsVal__$30 = function(val) {
            return isValDef__$29 && (mods__$26.mode === "check" ? ctx__$25.val.indexOf(val) > -1 : ctx__$25.val === val);
        }, iterateItems__$31 = function(content) {
            var i__$32 = 0, itemOrGroup__$33;
            while (itemOrGroup__$33 = content[i__$32++]) {
                if (itemOrGroup__$33.block === "menu-item") {
                    firstItem__$27 || (firstItem__$27 = itemOrGroup__$33);
                    if (containsVal__$30(itemOrGroup__$33.val)) {
                        (itemOrGroup__$33.mods = itemOrGroup__$33.mods || {}).checked = true;
                        checkedItems__$28.push(itemOrGroup__$33);
                    }
                } else {
                    iterateItems__$31(itemOrGroup__$33.content);
                }
            }
        };
        iterateItems__$31(ctx__$25.content);
    }
    __$ctx._firstItem = firstItem__$27;
    __$ctx._checkedItems = checkedItems__$28;
    var __$r__$35;
    var __$l0__$36 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$26.theme,
        disabled: mods__$26.disabled
    };
    var __$r__$38;
    var __$l1__$39 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$38 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$39;
    __$r__$35 = __$r__$38;
    __$ctx._menuMods = __$l0__$36;
    return;
}

function __$b54(__$ctx, __$ref) {
    var mods__$20 = $$mods;
    mods__$20.theme = mods__$20.theme || __$ctx._menuMods.theme;
    mods__$20.disabled = mods__$20.disabled || __$ctx._menuMods.disabled;
    var __$r__$22;
    var __$l0__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$23;
    return;
}

function __$b55(__$ctx, __$ref) {
    var ctx__$106 = __$ctx.ctx;
    var __$r__$108;
    var __$l0__$109 = $$mode;
    $$mode = "";
    var __$l1__$110 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$106.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$106.title
            }, {
                block: "ua"
            }, ctx__$106.head, ctx__$106.styles, ctx__$106.favicon ? {
                elem: "favicon",
                url: ctx__$106.favicon
            } : "" ]
        }, ctx__$106 ]
    } ];
    var __$r__$112;
    var __$l2__$113 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$112 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$113;
    __$r__$108 = __$r__$112;
    $$mode = __$l0__$109;
    __$ctx.ctx = __$l1__$110;
    return;
}

function __$b56(__$ctx, __$ref) {
    var BEM_INTERNAL__$114 = __$ctx.BEM.INTERNAL, ctx__$115 = __$ctx.ctx, isBEM__$116, tag__$117, res__$118;
    var __$r__$120;
    var __$l0__$121 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$122 = $$block;
    var __$r__$124;
    var __$l1__$125 = $$mode;
    $$mode = "tag";
    __$r__$124 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$125;
    tag__$117 = __$r__$124;
    typeof tag__$117 !== "undefined" || (tag__$117 = ctx__$115.tag);
    typeof tag__$117 !== "undefined" || (tag__$117 = "div");
    if (tag__$117) {
        var jsParams__$126, js__$127;
        if (vBlock__$122 && ctx__$115.js !== false) {
            var __$r__$128;
            var __$l2__$129 = $$mode;
            $$mode = "js";
            __$r__$128 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$129;
            js__$127 = __$r__$128;
            js__$127 = js__$127 ? __$ctx.extend(ctx__$115.js, js__$127 === true ? {} : js__$127) : ctx__$115.js === true ? {} : ctx__$115.js;
            js__$127 && ((jsParams__$126 = {})[BEM_INTERNAL__$114.buildClass(vBlock__$122, ctx__$115.elem)] = js__$127);
        }
        __$ctx._str += "<" + tag__$117;
        var __$r__$130;
        var __$l3__$131 = $$mode;
        $$mode = "bem";
        __$r__$130 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$131;
        isBEM__$116 = __$r__$130;
        typeof isBEM__$116 !== "undefined" || (isBEM__$116 = typeof ctx__$115.bem !== "undefined" ? ctx__$115.bem : ctx__$115.block || ctx__$115.elem);
        var __$r__$133;
        var __$l4__$134 = $$mode;
        $$mode = "cls";
        __$r__$133 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$134;
        var cls__$132 = __$r__$133;
        cls__$132 || (cls__$132 = ctx__$115.cls);
        var addJSInitClass__$135 = ctx__$115.block && jsParams__$126 && !ctx__$115.elem;
        if (isBEM__$116 || cls__$132) {
            __$ctx._str += ' class="';
            if (isBEM__$116) {
                __$ctx._str += BEM_INTERNAL__$114.buildClasses(vBlock__$122, ctx__$115.elem, ctx__$115.elemMods || ctx__$115.mods);
                var __$r__$137;
                var __$l5__$138 = $$mode;
                $$mode = "mix";
                __$r__$137 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$138;
                var mix__$136 = __$r__$137;
                ctx__$115.mix && (mix__$136 = mix__$136 ? [].concat(mix__$136, ctx__$115.mix) : ctx__$115.mix);
                if (mix__$136) {
                    var visited__$139 = {}, visitedKey__$140 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$139[visitedKey__$140(vBlock__$122, $$elem)] = true;
                    __$ctx.isArray(mix__$136) || (mix__$136 = [ mix__$136 ]);
                    for (var i__$141 = 0; i__$141 < mix__$136.length; i__$141++) {
                        var mixItem__$142 = mix__$136[i__$141], hasItem__$143 = mixItem__$142.block || mixItem__$142.elem, mixBlock__$144 = mixItem__$142.block || mixItem__$142._block || $$block, mixElem__$145 = mixItem__$142.elem || mixItem__$142._elem || $$elem;
                        hasItem__$143 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$114[hasItem__$143 ? "buildClasses" : "buildModsClasses"](mixBlock__$144, mixItem__$142.elem || mixItem__$142._elem || (mixItem__$142.block ? undefined : $$elem), mixItem__$142.elemMods || mixItem__$142.mods);
                        if (mixItem__$142.js) {
                            (jsParams__$126 || (jsParams__$126 = {}))[BEM_INTERNAL__$114.buildClass(mixBlock__$144, mixItem__$142.elem)] = mixItem__$142.js === true ? {} : mixItem__$142.js;
                            addJSInitClass__$135 || (addJSInitClass__$135 = mixBlock__$144 && !mixItem__$142.elem);
                        }
                        if (hasItem__$143 && !visited__$139[visitedKey__$140(mixBlock__$144, mixElem__$145)]) {
                            visited__$139[visitedKey__$140(mixBlock__$144, mixElem__$145)] = true;
                            var __$r__$147;
                            var __$l6__$148 = $$mode;
                            $$mode = "mix";
                            var __$l7__$149 = $$block;
                            $$block = mixBlock__$144;
                            var __$l8__$150 = $$elem;
                            $$elem = mixElem__$145;
                            __$r__$147 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$148;
                            $$block = __$l7__$149;
                            $$elem = __$l8__$150;
                            var nestedMix__$146 = __$r__$147;
                            if (nestedMix__$146) {
                                for (var j__$151 = 0; j__$151 < nestedMix__$146.length; j__$151++) {
                                    var nestedItem__$152 = nestedMix__$146[j__$151];
                                    if (!nestedItem__$152.block && !nestedItem__$152.elem || !visited__$139[visitedKey__$140(nestedItem__$152.block, nestedItem__$152.elem)]) {
                                        nestedItem__$152._block = mixBlock__$144;
                                        nestedItem__$152._elem = mixElem__$145;
                                        mix__$136.splice(i__$141 + 1, 0, nestedItem__$152);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$132 && (__$ctx._str += isBEM__$116 ? " " + cls__$132 : cls__$132);
            __$ctx._str += addJSInitClass__$135 ? ' i-bem"' : '"';
        }
        if (isBEM__$116 && jsParams__$126) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$126)) + '"';
        }
        var __$r__$154;
        var __$l9__$155 = $$mode;
        $$mode = "attrs";
        __$r__$154 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$155;
        var attrs__$153 = __$r__$154;
        attrs__$153 = __$ctx.extend(attrs__$153, ctx__$115.attrs);
        if (attrs__$153) {
            var name__$156, attr__$157;
            for (name__$156 in attrs__$153) {
                attr__$157 = attrs__$153[name__$156];
                if (typeof attr__$157 === "undefined") continue;
                __$ctx._str += " " + name__$156 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$157) ? attr__$157 : __$ctx.reapply(attr__$157)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$117)) {
        __$ctx._str += "/>";
    } else {
        tag__$117 && (__$ctx._str += ">");
        var __$r__$159;
        var __$l10__$160 = $$mode;
        $$mode = "content";
        __$r__$159 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$160;
        var content__$158 = __$r__$159;
        if (content__$158 || content__$158 === 0) {
            isBEM__$116 = vBlock__$122 || $$elem;
            var __$r__$161;
            var __$l11__$162 = $$mode;
            $$mode = "";
            var __$l12__$163 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$164 = __$ctx.position;
            __$ctx.position = isBEM__$116 ? 1 : __$ctx.position;
            var __$l14__$165 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$116 ? 1 : __$ctx._listLength;
            var __$l15__$166 = __$ctx.ctx;
            __$ctx.ctx = content__$158;
            __$r__$161 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$162;
            __$ctx._notNewList = __$l12__$163;
            __$ctx.position = __$l13__$164;
            __$ctx._listLength = __$l14__$165;
            __$ctx.ctx = __$l15__$166;
        }
        tag__$117 && (__$ctx._str += "</" + tag__$117 + ">");
    }
    res__$118 = __$ctx._str;
    __$r__$120 = undefined;
    __$ctx._str = __$l0__$121;
    __$ctx._buf.push(res__$118);
    return;
}

function __$b59(__$ctx, __$ref) {
    var mix__$95 = function __$lb__$96() {
        var __$r__$97;
        var __$l0__$98 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
        __$r__$97 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$98;
        return __$r__$97;
    }(), uaMix__$99 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$95 ? uaMix__$99.concat(mix__$95) : uaMix__$99;
}

function __$b70(__$ctx, __$ref) {
    var __$r__$168;
    var __$l0__$169 = $$mode;
    $$mode = "";
    var __$l1__$170 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$172;
    var __$l2__$173 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$172 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$173;
    __$r__$168 = __$r__$172;
    $$mode = __$l0__$169;
    __$ctx.ctx = __$l1__$170;
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$174 = __$ctx.ctx;
    if (ctx__$174 && ctx__$174 !== true || ctx__$174 === 0) {
        __$ctx._str += ctx__$174 + "";
    }
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b73(__$ctx, __$ref) {
    var ctx__$175 = __$ctx.ctx, len__$176 = ctx__$175.length, i__$177 = 0, prevPos__$178 = __$ctx.position, prevNotNewList__$179 = __$ctx._notNewList;
    if (prevNotNewList__$179) {
        __$ctx._listLength += len__$176 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$176;
    }
    __$ctx._notNewList = true;
    while (i__$177 < len__$176) (function __$lb__$180() {
        var __$r__$181;
        var __$l0__$182 = __$ctx.ctx;
        __$ctx.ctx = ctx__$175[i__$177++];
        __$r__$181 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$182;
        return __$r__$181;
    })();
    prevNotNewList__$179 || (__$ctx.position = prevPos__$178);
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$183 = __$ctx.ctx.block, vElem__$184 = __$ctx.ctx.elem, block__$185 = __$ctx._currBlock || $$block;
    var __$r__$187;
    var __$l0__$188 = $$mode;
    $$mode = "default";
    var __$l1__$189 = $$block;
    $$block = vBlock__$183 || (vElem__$184 ? block__$185 : undefined);
    var __$l2__$190 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$183 || vElem__$184 ? undefined : block__$185;
    var __$l3__$191 = $$elem;
    $$elem = vElem__$184;
    var __$l4__$192 = $$mods;
    $$mods = vBlock__$183 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$193 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$187 = undefined;
    $$mode = __$l0__$188;
    $$block = __$l1__$189;
    __$ctx._currBlock = __$l2__$190;
    $$elem = __$l3__$191;
    $$mods = __$l4__$192;
    $$elemMods = __$l5__$193;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
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
                var __$r = __$ctx.extend(function __$lb__$14() {
                    var __$r__$15;
                    var __$l0__$16 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$15 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$16;
                    return __$r__$15;
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
            var __$r = __$b8(__$ctx, __$ref);
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
            var __$r = __$b28(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "check") {
            var __$r = __$b29(__$ctx, __$ref);
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
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$11() {
                var __$r__$12;
                var __$l0__$13 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4;
                __$r__$12 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$13;
                return __$r__$12;
            }() ];
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8192) === 0) {
                return [ function __$lb__$92() {
                    var __$r__$93;
                    var __$l0__$94 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$93 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$94;
                    return __$r__$93;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 32768) === 0) {
            return [ function __$lb__$100() {
                var __$r__$101;
                var __$l0__$102 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                __$r__$101 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$102;
                return __$r__$101;
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
        if (!$$elem && (__$ctx.__$a0 & 65536) === 0) {
            return [ function __$lb__$103() {
                var __$r__$104;
                var __$l0__$105 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                __$r__$104 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$105;
                return __$r__$104;
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
                    var __$r = __$ctx.extend(function __$lb__$7() {
                        var __$r__$8;
                        var __$l0__$9 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$8 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$9;
                        return __$r__$8;
                    }(), {
                        text: __$ctx.ctx.text
                    });
                    if (__$r !== __$ref) return __$r;
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 2048) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$71() {
                        var __$r__$72;
                        var __$l0__$73 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                        __$r__$72 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$73;
                        return __$r__$72;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$50() {
                    var __$r__$51;
                    var __$l0__$52 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$51 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$52;
                    return __$r__$51;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b44(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$17() {
                    var __$r__$18;
                    var __$l0__$19 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$18 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$19;
                    return __$r__$18;
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
            if ((__$ctx.__$a0 & 1024) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b51(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 4096) === 0) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b56(__$ctx, __$ref);
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