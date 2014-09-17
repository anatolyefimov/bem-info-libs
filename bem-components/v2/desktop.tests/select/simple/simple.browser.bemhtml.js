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
    var ctx__$59 = __$ctx.ctx, content__$60 = [ ctx__$59.icon ];
    "text" in ctx__$59 && content__$60.push({
        elem: "text",
        content: ctx__$59.text
    });
    return content__$60;
}

function __$b19(__$ctx, __$ref) {
    var ctx__$87 = __$ctx.ctx;
    return {
        name: ctx__$87.name,
        optionsMaxHeight: ctx__$87.optionsMaxHeight
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

function __$b27(__$ctx, __$ref) {
    var val__$83 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$83) ? val__$83 : JSON.stringify(val__$83),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b29(__$ctx, __$ref) {
    var ctx__$61 = __$ctx.ctx, attrs__$62 = {
        type: $$mods.type || "button",
        name: ctx__$61.name,
        value: ctx__$61.val
    };
    $$mods.disabled && (attrs__$62.disabled = "disabled");
    return __$ctx.extend(function __$lb__$63() {
        var __$r__$64;
        var __$l0__$65 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8192;
        __$r__$64 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$65;
        return __$r__$64;
    }(), attrs__$62);
}

function __$b30(__$ctx, __$ref) {
    var ctx__$66 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$66.tabIndex,
        id: ctx__$66.id,
        title: ctx__$66.title
    };
}

function __$b35(__$ctx, __$ref) {
    var attrs__$39 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$39.tabindex = 0);
    return attrs__$39;
}

function __$b55(__$ctx, __$ref) {
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

function __$b56(__$ctx, __$ref) {
    var mods__$73 = $$mods;
    var __$r__$75;
    var __$l0__$76 = $$mode;
    $$mode = "";
    var __$l1__$77 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$73.size,
            theme: mods__$73.theme,
            focused: mods__$73.focused,
            disabled: mods__$73.disabled,
            checked: mods__$73.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$78() {
            var __$r__$79;
            var __$l3__$80 = $$mode;
            $$mode = "content";
            __$r__$79 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$80;
            return __$r__$79;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$81;
    var __$l2__$82 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$82;
    __$r__$75 = __$r__$81;
    $$mode = __$l0__$76;
    __$ctx.ctx = __$l1__$77;
    return;
}

function __$b57(__$ctx, __$ref) {
    var mods__$46 = $$mods, optionToMenuItem__$47 = function(option) {
        var res__$48 = {
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
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$54 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$55;
    __$r__$50 = __$r__$54;
    $$mode = __$l0__$51;
    __$ctx.ctx = __$l1__$52;
    return;
}

function __$b58(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$88 = __$ctx.ctx.options, i__$89 = 0, j__$90, optionOrGroup__$91, option__$92, firstOption__$93, checkedOptions__$94 = [];
    while (optionOrGroup__$91 = options__$88[i__$89++]) {
        if (optionOrGroup__$91.group) {
            j__$90 = 0;
            while (option__$92 = optionOrGroup__$91.group[j__$90++]) {
                i__$89 === 1 && j__$90 === 1 && (firstOption__$93 = option__$92);
                option__$92.checked && checkedOptions__$94.push(option__$92);
            }
        } else {
            i__$89 === 1 && (firstOption__$93 = optionOrGroup__$91);
            optionOrGroup__$91.checked && checkedOptions__$94.push(optionOrGroup__$91);
        }
    }
    var __$r__$96;
    var __$l0__$97 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$98 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$94;
    var __$l2__$99 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$93;
    var __$r__$101;
    var __$l3__$102 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$101 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$102;
    __$r__$96 = __$r__$101;
    __$ctx._select = __$l0__$97;
    __$ctx._checkedOptions = __$l1__$98;
    __$ctx._firstOption = __$l2__$99;
    return;
}

function __$b59(__$ctx, __$ref) {
    var __$r__$68;
    var __$l0__$69 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$71;
    var __$l1__$72 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$71 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$72;
    __$r__$68 = __$r__$71;
    __$ctx._button = __$l0__$69;
    return;
}

function __$b60(__$ctx, __$ref) {
    var __$r__$41;
    var __$l0__$42 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$44;
    var __$l1__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$45;
    __$r__$41 = __$r__$44;
    __$ctx._menuMods = __$l0__$42;
    delete __$ctx._menuTheme;
    return;
}

function __$b61(__$ctx, __$ref) {
    var mods__$35 = $$mods;
    mods__$35.theme = mods__$35.theme || __$ctx._menuMods.theme;
    mods__$35.disabled = mods__$35.disabled || __$ctx._menuMods.disabled;
    var __$r__$37;
    var __$l0__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$38;
    return;
}

function __$b62(__$ctx, __$ref) {
    var url__$106 = __$ctx.ctx.url;
    var __$r__$108;
    var __$l0__$109 = $$mode;
    $$mode = "";
    var __$l1__$110 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$106 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$112;
    var __$l2__$113 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$112 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$113;
    __$r__$108 = __$r__$112;
    $$mode = __$l0__$109;
    __$ctx.ctx = __$l1__$110;
    return;
}

function __$b63(__$ctx, __$ref) {
    var ie__$114 = __$ctx.ctx.ie, hideRule__$115 = !ie__$114 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$114 === "!IE" ? [ ie__$114, "<!-->", "<!--" ] : [ ie__$114, "", "" ];
    var __$r__$117;
    var __$l0__$118 = $$mode;
    $$mode = "";
    var __$l3__$119 = __$ctx.ctx;
    var __$l1__$120 = __$l3__$119._ieCommented;
    __$l3__$119._ieCommented = true;
    var __$l2__$121 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$115[0] + "]>" + hideRule__$115[1], __$ctx.ctx, hideRule__$115[2] + "<![endif]-->" ];
    __$r__$117 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$118;
    __$l3__$119._ieCommented = __$l1__$120;
    __$ctx.ctx = __$l2__$121;
    return;
}

function __$b64(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$128 = __$ctx.ctx;
    var __$r__$130;
    var __$l0__$131 = $$mode;
    $$mode = "";
    var __$l1__$132 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$128.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$128.title
            }, {
                block: "ua"
            }, ctx__$128.head, ctx__$128.styles, ctx__$128.favicon ? {
                elem: "favicon",
                url: ctx__$128.favicon
            } : "" ]
        }, ctx__$128 ]
    } ];
    var __$r__$134;
    var __$l2__$135 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$134 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$135;
    __$r__$130 = __$r__$134;
    $$mode = __$l0__$131;
    __$ctx.ctx = __$l1__$132;
    __$ctx._defPageApplied = false;
    return;
}

function __$b65(__$ctx, __$ref) {
    var BEM_INTERNAL__$136 = __$ctx.BEM.INTERNAL, ctx__$137 = __$ctx.ctx, isBEM__$138, tag__$139, res__$140;
    var __$r__$142;
    var __$l0__$143 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$144 = $$block;
    var __$r__$146;
    var __$l1__$147 = $$mode;
    $$mode = "tag";
    __$r__$146 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$147;
    tag__$139 = __$r__$146;
    typeof tag__$139 !== "undefined" || (tag__$139 = ctx__$137.tag);
    typeof tag__$139 !== "undefined" || (tag__$139 = "div");
    if (tag__$139) {
        var jsParams__$148, js__$149;
        if (vBlock__$144 && ctx__$137.js !== false) {
            var __$r__$150;
            var __$l2__$151 = $$mode;
            $$mode = "js";
            __$r__$150 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$151;
            js__$149 = __$r__$150;
            js__$149 = js__$149 ? __$ctx.extend(ctx__$137.js, js__$149 === true ? {} : js__$149) : ctx__$137.js === true ? {} : ctx__$137.js;
            js__$149 && ((jsParams__$148 = {})[BEM_INTERNAL__$136.buildClass(vBlock__$144, ctx__$137.elem)] = js__$149);
        }
        __$ctx._str += "<" + tag__$139;
        var __$r__$152;
        var __$l3__$153 = $$mode;
        $$mode = "bem";
        __$r__$152 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$153;
        isBEM__$138 = __$r__$152;
        typeof isBEM__$138 !== "undefined" || (isBEM__$138 = typeof ctx__$137.bem !== "undefined" ? ctx__$137.bem : ctx__$137.block || ctx__$137.elem);
        var __$r__$155;
        var __$l4__$156 = $$mode;
        $$mode = "cls";
        __$r__$155 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$156;
        var cls__$154 = __$r__$155;
        cls__$154 || (cls__$154 = ctx__$137.cls);
        var addJSInitClass__$157 = ctx__$137.block && jsParams__$148;
        if (isBEM__$138 || cls__$154) {
            __$ctx._str += ' class="';
            if (isBEM__$138) {
                __$ctx._str += BEM_INTERNAL__$136.buildClasses(vBlock__$144, ctx__$137.elem, ctx__$137.elemMods || ctx__$137.mods);
                var __$r__$159;
                var __$l5__$160 = $$mode;
                $$mode = "mix";
                __$r__$159 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$160;
                var mix__$158 = __$r__$159;
                ctx__$137.mix && (mix__$158 = mix__$158 ? [].concat(mix__$158, ctx__$137.mix) : ctx__$137.mix);
                if (mix__$158) {
                    var visited__$161 = {}, visitedKey__$162 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$161[visitedKey__$162(vBlock__$144, $$elem)] = true;
                    __$ctx.isArray(mix__$158) || (mix__$158 = [ mix__$158 ]);
                    for (var i__$163 = 0; i__$163 < mix__$158.length; i__$163++) {
                        var mixItem__$164 = mix__$158[i__$163], hasItem__$165 = mixItem__$164.block || mixItem__$164.elem, mixBlock__$166 = mixItem__$164.block || mixItem__$164._block || $$block, mixElem__$167 = mixItem__$164.elem || mixItem__$164._elem || $$elem;
                        hasItem__$165 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$136[hasItem__$165 ? "buildClasses" : "buildModsClasses"](mixBlock__$166, mixItem__$164.elem || mixItem__$164._elem || (mixItem__$164.block ? undefined : $$elem), mixItem__$164.elemMods || mixItem__$164.mods);
                        if (mixItem__$164.js) {
                            (jsParams__$148 || (jsParams__$148 = {}))[BEM_INTERNAL__$136.buildClass(mixBlock__$166, mixItem__$164.elem)] = mixItem__$164.js === true ? {} : mixItem__$164.js;
                            addJSInitClass__$157 || (addJSInitClass__$157 = mixBlock__$166 && !mixItem__$164.elem);
                        }
                        if (hasItem__$165 && !visited__$161[visitedKey__$162(mixBlock__$166, mixElem__$167)]) {
                            visited__$161[visitedKey__$162(mixBlock__$166, mixElem__$167)] = true;
                            var __$r__$169;
                            var __$l6__$170 = $$mode;
                            $$mode = "mix";
                            var __$l7__$171 = $$block;
                            $$block = mixBlock__$166;
                            var __$l8__$172 = $$elem;
                            $$elem = mixElem__$167;
                            __$r__$169 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$170;
                            $$block = __$l7__$171;
                            $$elem = __$l8__$172;
                            var nestedMix__$168 = __$r__$169;
                            if (nestedMix__$168) {
                                for (var j__$173 = 0; j__$173 < nestedMix__$168.length; j__$173++) {
                                    var nestedItem__$174 = nestedMix__$168[j__$173];
                                    if (!nestedItem__$174.block && !nestedItem__$174.elem || !visited__$161[visitedKey__$162(nestedItem__$174.block, nestedItem__$174.elem)]) {
                                        nestedItem__$174._block = mixBlock__$166;
                                        nestedItem__$174._elem = mixElem__$167;
                                        mix__$158.splice(i__$163 + 1, 0, nestedItem__$174);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$154 && (__$ctx._str += isBEM__$138 ? " " + cls__$154 : cls__$154);
            __$ctx._str += addJSInitClass__$157 ? ' i-bem"' : '"';
        }
        if (isBEM__$138 && jsParams__$148) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$148)) + '"';
        }
        var __$r__$176;
        var __$l9__$177 = $$mode;
        $$mode = "attrs";
        __$r__$176 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$177;
        var attrs__$175 = __$r__$176;
        attrs__$175 = __$ctx.extend(attrs__$175, ctx__$137.attrs);
        if (attrs__$175) {
            var name__$178, attr__$179;
            for (name__$178 in attrs__$175) {
                attr__$179 = attrs__$175[name__$178];
                if (typeof attr__$179 === "undefined") continue;
                __$ctx._str += " " + name__$178 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$179) ? attr__$179 : __$ctx.reapply(attr__$179)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$139)) {
        __$ctx._str += "/>";
    } else {
        tag__$139 && (__$ctx._str += ">");
        var __$r__$181;
        var __$l10__$182 = $$mode;
        $$mode = "content";
        __$r__$181 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$182;
        var content__$180 = __$r__$181;
        if (content__$180 || content__$180 === 0) {
            isBEM__$138 = vBlock__$144 || $$elem;
            var __$r__$183;
            var __$l11__$184 = $$mode;
            $$mode = "";
            var __$l12__$185 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$186 = __$ctx.position;
            __$ctx.position = isBEM__$138 ? 1 : __$ctx.position;
            var __$l14__$187 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$138 ? 1 : __$ctx._listLength;
            var __$l15__$188 = __$ctx.ctx;
            __$ctx.ctx = content__$180;
            __$r__$183 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$184;
            __$ctx._notNewList = __$l12__$185;
            __$ctx.position = __$l13__$186;
            __$ctx._listLength = __$l14__$187;
            __$ctx.ctx = __$l15__$188;
        }
        tag__$139 && (__$ctx._str += "</" + tag__$139 + ">");
    }
    res__$140 = __$ctx._str;
    __$r__$142 = undefined;
    __$ctx._str = __$l0__$143;
    __$ctx._buf.push(res__$140);
    return;
}

function __$b78(__$ctx, __$ref) {
    var __$r__$190;
    var __$l0__$191 = $$mode;
    $$mode = "";
    var __$l1__$192 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$194;
    var __$l2__$195 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$194 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$195;
    __$r__$190 = __$r__$194;
    $$mode = __$l0__$191;
    __$ctx.ctx = __$l1__$192;
    return;
}

function __$b79(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$196 = __$ctx.ctx;
    if (ctx__$196 && ctx__$196 !== true || ctx__$196 === 0) {
        __$ctx._str += ctx__$196 + "";
    }
    return;
}

function __$b80(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b81(__$ctx, __$ref) {
    var ctx__$197 = __$ctx.ctx, len__$198 = ctx__$197.length, i__$199 = 0, prevPos__$200 = __$ctx.position, prevNotNewList__$201 = __$ctx._notNewList;
    if (prevNotNewList__$201) {
        __$ctx._listLength += len__$198 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$198;
    }
    __$ctx._notNewList = true;
    while (i__$199 < len__$198) (function __$lb__$202() {
        var __$r__$203;
        var __$l0__$204 = __$ctx.ctx;
        __$ctx.ctx = ctx__$197[i__$199++];
        __$r__$203 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$204;
        return __$r__$203;
    })();
    prevNotNewList__$201 || (__$ctx.position = prevPos__$200);
    return;
}

function __$b82(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$205 = __$ctx.ctx.block, vElem__$206 = __$ctx.ctx.elem, block__$207 = __$ctx._currBlock || $$block;
    var __$r__$209;
    var __$l0__$210 = $$mode;
    $$mode = "default";
    var __$l1__$211 = $$block;
    $$block = vBlock__$205 || (vElem__$206 ? block__$207 : undefined);
    var __$l2__$212 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$205 || vElem__$206 ? undefined : block__$207;
    var __$l3__$213 = $$elem;
    $$elem = vElem__$206;
    var __$l4__$214 = $$mods;
    $$mods = vBlock__$205 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$215 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$209 = undefined;
    $$mode = __$l0__$210;
    $$block = __$l1__$211;
    __$ctx._currBlock = __$l2__$212;
    $$elem = __$l3__$213;
    $$mods = __$l4__$214;
    $$elemMods = __$l5__$215;
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
                return [ function __$lb__$103() {
                    var __$r__$104;
                    var __$l0__$105 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$104 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$105;
                    return __$r__$104;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 1048576) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$122() {
                var __$r__$123;
                var __$l0__$124 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$123 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$124;
                return __$r__$123;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 2097152) === 0) {
            return [ function __$lb__$125() {
                var __$r__$126;
                var __$l0__$127 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$126 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$127;
                return __$r__$126;
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
                    var __$r = __$ctx.extend(function __$lb__$84() {
                        var __$r__$85;
                        var __$l0__$86 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                        __$r__$85 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$86;
                        return __$r__$85;
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
                var __$r = __$ctx.extend(function __$lb__$56() {
                    var __$r__$57;
                    var __$l0__$58 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
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
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b27(__$ctx, __$ref);
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
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b30(__$ctx, __$ref);
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
            var __$r = __$b35(__$ctx, __$ref);
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
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b56(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b57(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 524288) === 0) {
                        var __$r = __$b62(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b63(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b64(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b65(__$ctx, __$ref);
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