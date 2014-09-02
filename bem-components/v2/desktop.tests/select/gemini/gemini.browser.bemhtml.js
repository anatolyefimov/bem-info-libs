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
    } else if (__$t === "default") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
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
            var __$r = __$b79(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b80(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b81(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b82(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b83(__$ctx, __$ref);
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

function __$b10(__$ctx, __$ref) {
    var ctx__$58 = __$ctx.ctx, content__$59 = [ ctx__$58.icon ];
    "text" in ctx__$58 && content__$59.push({
        elem: "text",
        content: ctx__$58.text
    });
    return content__$59;
}

function __$b20(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx;
    return {
        name: ctx__$86.name,
        optionsMaxHeight: ctx__$86.optionsMaxHeight
    };
}

function __$b23(__$ctx, __$ref) {
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
    var checkedOptions__$11 = __$ctx._checkedOptions, firstOption__$12 = __$ctx._firstOption;
    if (!checkedOptions__$11.length) {
        firstOption__$12.checked = true;
        checkedOptions__$11.push(firstOption__$12);
    }
    var __$r__$14;
    var __$l0__$15 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$11[0];
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._checkedOption = __$l0__$15;
    return;
}

function __$b29(__$ctx, __$ref) {
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

function __$b30(__$ctx, __$ref) {
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

function __$b31(__$ctx, __$ref) {
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

function __$b32(__$ctx, __$ref) {
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

function __$b33(__$ctx, __$ref) {
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

function __$b34(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$36;
    var __$l0__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$37;
    return;
}

function __$b35(__$ctx, __$ref) {
    var url__$105 = __$ctx.ctx.url;
    var __$r__$107;
    var __$l0__$108 = $$mode;
    $$mode = "";
    var __$l1__$109 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$105 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$111;
    var __$l2__$112 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$111 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$112;
    __$r__$107 = __$r__$111;
    $$mode = __$l0__$108;
    __$ctx.ctx = __$l1__$109;
    return;
}

function __$b36(__$ctx, __$ref) {
    var ie__$113 = __$ctx.ctx.ie, hideRule__$114 = !ie__$113 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$113 === "!IE" ? [ ie__$113, "<!-->", "<!--" ] : [ ie__$113, "", "" ];
    var __$r__$116;
    var __$l0__$117 = $$mode;
    $$mode = "";
    var __$l3__$118 = __$ctx.ctx;
    var __$l1__$119 = __$l3__$118._ieCommented;
    __$l3__$118._ieCommented = true;
    var __$l2__$120 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$114[0] + "]>" + hideRule__$114[1], __$ctx.ctx, hideRule__$114[2] + "<![endif]-->" ];
    __$r__$116 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$117;
    __$l3__$118._ieCommented = __$l1__$119;
    __$ctx.ctx = __$l2__$120;
    return;
}

function __$b37(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$127 = __$ctx.ctx;
    var __$r__$129;
    var __$l0__$130 = $$mode;
    $$mode = "";
    var __$l1__$131 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$127.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$127.title
            }, {
                block: "ua"
            }, ctx__$127.head, ctx__$127.styles, ctx__$127.favicon ? {
                elem: "favicon",
                url: ctx__$127.favicon
            } : "" ]
        }, ctx__$127 ]
    } ];
    var __$r__$133;
    var __$l2__$134 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$133 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$134;
    __$r__$129 = __$r__$133;
    $$mode = __$l0__$130;
    __$ctx.ctx = __$l1__$131;
    __$ctx._defPageApplied = false;
    return;
}

function __$b38(__$ctx, __$ref) {
    var BEM_INTERNAL__$135 = __$ctx.BEM.INTERNAL, ctx__$136 = __$ctx.ctx, isBEM__$137, tag__$138, res__$139;
    var __$r__$141;
    var __$l0__$142 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$143 = $$block;
    var __$r__$145;
    var __$l1__$146 = $$mode;
    $$mode = "tag";
    __$r__$145 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$146;
    tag__$138 = __$r__$145;
    typeof tag__$138 !== "undefined" || (tag__$138 = ctx__$136.tag);
    typeof tag__$138 !== "undefined" || (tag__$138 = "div");
    if (tag__$138) {
        var jsParams__$147, js__$148;
        if (vBlock__$143 && ctx__$136.js !== false) {
            var __$r__$149;
            var __$l2__$150 = $$mode;
            $$mode = "js";
            __$r__$149 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$150;
            js__$148 = __$r__$149;
            js__$148 = js__$148 ? __$ctx.extend(ctx__$136.js, js__$148 === true ? {} : js__$148) : ctx__$136.js === true ? {} : ctx__$136.js;
            js__$148 && ((jsParams__$147 = {})[BEM_INTERNAL__$135.buildClass(vBlock__$143, ctx__$136.elem)] = js__$148);
        }
        __$ctx._str += "<" + tag__$138;
        var __$r__$151;
        var __$l3__$152 = $$mode;
        $$mode = "bem";
        __$r__$151 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$152;
        isBEM__$137 = __$r__$151;
        typeof isBEM__$137 !== "undefined" || (isBEM__$137 = typeof ctx__$136.bem !== "undefined" ? ctx__$136.bem : ctx__$136.block || ctx__$136.elem);
        var __$r__$154;
        var __$l4__$155 = $$mode;
        $$mode = "cls";
        __$r__$154 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$155;
        var cls__$153 = __$r__$154;
        cls__$153 || (cls__$153 = ctx__$136.cls);
        var addJSInitClass__$156 = ctx__$136.block && jsParams__$147;
        if (isBEM__$137 || cls__$153) {
            __$ctx._str += ' class="';
            if (isBEM__$137) {
                __$ctx._str += BEM_INTERNAL__$135.buildClasses(vBlock__$143, ctx__$136.elem, ctx__$136.elemMods || ctx__$136.mods);
                var __$r__$158;
                var __$l5__$159 = $$mode;
                $$mode = "mix";
                __$r__$158 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$159;
                var mix__$157 = __$r__$158;
                ctx__$136.mix && (mix__$157 = mix__$157 ? [].concat(mix__$157, ctx__$136.mix) : ctx__$136.mix);
                if (mix__$157) {
                    var visited__$160 = {}, visitedKey__$161 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$160[visitedKey__$161(vBlock__$143, $$elem)] = true;
                    __$ctx.isArray(mix__$157) || (mix__$157 = [ mix__$157 ]);
                    for (var i__$162 = 0; i__$162 < mix__$157.length; i__$162++) {
                        var mixItem__$163 = mix__$157[i__$162], hasItem__$164 = mixItem__$163.block || mixItem__$163.elem, mixBlock__$165 = mixItem__$163.block || mixItem__$163._block || $$block, mixElem__$166 = mixItem__$163.elem || mixItem__$163._elem || $$elem;
                        hasItem__$164 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$135[hasItem__$164 ? "buildClasses" : "buildModsClasses"](mixBlock__$165, mixItem__$163.elem || mixItem__$163._elem || (mixItem__$163.block ? undefined : $$elem), mixItem__$163.elemMods || mixItem__$163.mods);
                        if (mixItem__$163.js) {
                            (jsParams__$147 || (jsParams__$147 = {}))[BEM_INTERNAL__$135.buildClass(mixBlock__$165, mixItem__$163.elem)] = mixItem__$163.js === true ? {} : mixItem__$163.js;
                            addJSInitClass__$156 || (addJSInitClass__$156 = mixBlock__$165 && !mixItem__$163.elem);
                        }
                        if (hasItem__$164 && !visited__$160[visitedKey__$161(mixBlock__$165, mixElem__$166)]) {
                            visited__$160[visitedKey__$161(mixBlock__$165, mixElem__$166)] = true;
                            var __$r__$168;
                            var __$l6__$169 = $$mode;
                            $$mode = "mix";
                            var __$l7__$170 = $$block;
                            $$block = mixBlock__$165;
                            var __$l8__$171 = $$elem;
                            $$elem = mixElem__$166;
                            __$r__$168 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$169;
                            $$block = __$l7__$170;
                            $$elem = __$l8__$171;
                            var nestedMix__$167 = __$r__$168;
                            if (nestedMix__$167) {
                                for (var j__$172 = 0; j__$172 < nestedMix__$167.length; j__$172++) {
                                    var nestedItem__$173 = nestedMix__$167[j__$172];
                                    if (!nestedItem__$173.block && !nestedItem__$173.elem || !visited__$160[visitedKey__$161(nestedItem__$173.block, nestedItem__$173.elem)]) {
                                        nestedItem__$173._block = mixBlock__$165;
                                        nestedItem__$173._elem = mixElem__$166;
                                        mix__$157.splice(i__$162 + 1, 0, nestedItem__$173);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$153 && (__$ctx._str += isBEM__$137 ? " " + cls__$153 : cls__$153);
            __$ctx._str += addJSInitClass__$156 ? ' i-bem"' : '"';
        }
        if (isBEM__$137 && jsParams__$147) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$147)) + '"';
        }
        var __$r__$175;
        var __$l9__$176 = $$mode;
        $$mode = "attrs";
        __$r__$175 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$176;
        var attrs__$174 = __$r__$175;
        attrs__$174 = __$ctx.extend(attrs__$174, ctx__$136.attrs);
        if (attrs__$174) {
            var name__$177, attr__$178;
            for (name__$177 in attrs__$174) {
                attr__$178 = attrs__$174[name__$177];
                if (typeof attr__$178 === "undefined") continue;
                __$ctx._str += " " + name__$177 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$178) ? attr__$178 : __$ctx.reapply(attr__$178)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$138)) {
        __$ctx._str += "/>";
    } else {
        tag__$138 && (__$ctx._str += ">");
        var __$r__$180;
        var __$l10__$181 = $$mode;
        $$mode = "content";
        __$r__$180 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$181;
        var content__$179 = __$r__$180;
        if (content__$179 || content__$179 === 0) {
            isBEM__$137 = vBlock__$143 || $$elem;
            var __$r__$182;
            var __$l11__$183 = $$mode;
            $$mode = "";
            var __$l12__$184 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$185 = __$ctx.position;
            __$ctx.position = isBEM__$137 ? 1 : __$ctx.position;
            var __$l14__$186 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$137 ? 1 : __$ctx._listLength;
            var __$l15__$187 = __$ctx.ctx;
            __$ctx.ctx = content__$179;
            __$r__$182 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$183;
            __$ctx._notNewList = __$l12__$184;
            __$ctx.position = __$l13__$185;
            __$ctx._listLength = __$l14__$186;
            __$ctx.ctx = __$l15__$187;
        }
        tag__$138 && (__$ctx._str += "</" + tag__$138 + ">");
    }
    res__$139 = __$ctx._str;
    __$r__$141 = undefined;
    __$ctx._str = __$l0__$142;
    __$ctx._buf.push(res__$139);
    return;
}

function __$b39(__$ctx, __$ref) {
    var val__$82 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$82) ? val__$82 : JSON.stringify(val__$82),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b41(__$ctx, __$ref) {
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

function __$b42(__$ctx, __$ref) {
    var ctx__$65 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$65.tabIndex,
        id: ctx__$65.id,
        title: ctx__$65.title
    };
}

function __$b47(__$ctx, __$ref) {
    var attrs__$38 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$38.tabindex = 0);
    return attrs__$38;
}

function __$b79(__$ctx, __$ref) {
    var __$r__$189;
    var __$l0__$190 = $$mode;
    $$mode = "";
    var __$l1__$191 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$193;
    var __$l2__$194 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$193 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$194;
    __$r__$189 = __$r__$193;
    $$mode = __$l0__$190;
    __$ctx.ctx = __$l1__$191;
    return;
}

function __$b80(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$195 = __$ctx.ctx;
    if (ctx__$195 && ctx__$195 !== true || ctx__$195 === 0) {
        __$ctx._str += ctx__$195 + "";
    }
    return;
}

function __$b81(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b82(__$ctx, __$ref) {
    var ctx__$196 = __$ctx.ctx, len__$197 = ctx__$196.length, i__$198 = 0, prevPos__$199 = __$ctx.position, prevNotNewList__$200 = __$ctx._notNewList;
    if (prevNotNewList__$200) {
        __$ctx._listLength += len__$197 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$197;
    }
    __$ctx._notNewList = true;
    while (i__$198 < len__$197) (function __$lb__$201() {
        var __$r__$202;
        var __$l0__$203 = __$ctx.ctx;
        __$ctx.ctx = ctx__$196[i__$198++];
        __$r__$202 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$203;
        return __$r__$202;
    })();
    prevNotNewList__$200 || (__$ctx.position = prevPos__$199);
    return;
}

function __$b83(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$204 = __$ctx.ctx.block, vElem__$205 = __$ctx.ctx.elem, block__$206 = __$ctx._currBlock || $$block;
    var __$r__$208;
    var __$l0__$209 = $$mode;
    $$mode = "default";
    var __$l1__$210 = $$block;
    $$block = vBlock__$204 || (vElem__$205 ? block__$206 : undefined);
    var __$l2__$211 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$204 || vElem__$205 ? undefined : block__$206;
    var __$l3__$212 = $$elem;
    $$elem = vElem__$205;
    var __$l4__$213 = $$mods;
    $$mods = vBlock__$204 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$214 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$208 = undefined;
    $$mode = __$l0__$209;
    $$block = __$l1__$210;
    __$ctx._currBlock = __$l2__$211;
    $$elem = __$l3__$212;
    $$mods = __$l4__$213;
    $$elemMods = __$l5__$214;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 1) === 0) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "check") {
                    var __$r = __$b2(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
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
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio") {
                    if ((__$ctx.__$a0 & 4) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOption.val
                        }, function __$lb__$8() {
                            var __$r__$9;
                            var __$l0__$10 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4;
                            __$r__$9 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$10;
                            return __$r__$9;
                        }() ];
                    }
                } else if (__$t === "radio-check") {
                    if (__$ctx._checkedOptions[0] && (__$ctx.__$a0 & 16) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOptions[0].val
                        }, function __$lb__$19() {
                            var __$r__$20;
                            var __$l0__$21 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 16;
                            __$r__$20 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$21;
                            return __$r__$20;
                        }() ];
                    }
                }
            }
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio-check") {
            return [ {
                elem: "text",
                content: (__$ctx._checkedOptions[0] || __$ctx._select).text
            } ];
        }
        var __$t = !$$elem;
        if (__$t) {
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    theme: $$mods.theme,
                    autoclosable: true
                },
                cls: __$ctx.ctx.cls + "-popup",
                directions: [ "bottom-left", "bottom-right", "top-left", "top-right" ],
                content: {
                    block: $$block,
                    mods: $$mods,
                    elem: "menu"
                }
            } ];
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
            var __$r = __$b10(__$ctx, __$ref);
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
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$121() {
                var __$r__$122;
                var __$l0__$123 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$122 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$123;
                return __$r__$122;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 2097152) === 0) {
            return [ function __$lb__$124() {
                var __$r__$125;
                var __$l0__$126 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$125 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$126;
                return __$r__$125;
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
                    if ((__$ctx.__$a0 & 32) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$22() {
                            var __$r__$23;
                            var __$l0__$24 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 32;
                            __$r__$23 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$24;
                            return __$r__$23;
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
            var __$r = __$b20(__$ctx, __$ref);
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
            var __$r = __$b23(__$ctx, __$ref);
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
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b28(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b31(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
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
                        var __$r = __$b35(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b36(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b38(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b39(__$ctx, __$ref);
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
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b42(__$ctx, __$ref);
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
            var __$r = __$b47(__$ctx, __$ref);
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

function __$g4(__$ctx, __$ref) {
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