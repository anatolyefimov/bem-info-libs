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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 16777216) === 0) {
            var __$r = __$b80(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b81(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b82(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b83(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b84(__$ctx, __$ref);
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
        ctx["_selectCls"] = undefined;
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
    var ctx__$93 = __$ctx.ctx;
    return {
        name: ctx__$93.name,
        optionsMaxHeight: ctx__$93.optionsMaxHeight
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

function __$b28(__$ctx, __$ref) {
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

function __$b29(__$ctx, __$ref) {
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

function __$b30(__$ctx, __$ref) {
    var __$r__$88;
    var __$l0__$89 = __$ctx._selectCls;
    __$ctx._selectCls = __$ctx.ctx.cls;
    var __$r__$91;
    var __$l1__$92 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$91 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$92;
    __$r__$88 = __$r__$91;
    __$ctx._selectCls = __$l0__$89;
    return;
}

function __$b31(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$94 = __$ctx.ctx.options, i__$95 = 0, j__$96, optionOrGroup__$97, option__$98, firstOption__$99, checkedOptions__$100 = [];
    while (optionOrGroup__$97 = options__$94[i__$95++]) {
        if (optionOrGroup__$97.group) {
            j__$96 = 0;
            while (option__$98 = optionOrGroup__$97.group[j__$96++]) {
                i__$95 === 1 && j__$96 === 1 && (firstOption__$99 = option__$98);
                option__$98.checked && checkedOptions__$100.push(option__$98);
            }
        } else {
            i__$95 === 1 && (firstOption__$99 = optionOrGroup__$97);
            optionOrGroup__$97.checked && checkedOptions__$100.push(optionOrGroup__$97);
        }
    }
    var __$r__$102;
    var __$l0__$103 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$104 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$100;
    var __$l2__$105 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$99;
    var __$r__$107;
    var __$l3__$108 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$107 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$108;
    __$r__$102 = __$r__$107;
    __$ctx._select = __$l0__$103;
    __$ctx._checkedOptions = __$l1__$104;
    __$ctx._firstOption = __$l2__$105;
    return;
}

function __$b32(__$ctx, __$ref) {
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

function __$b33(__$ctx, __$ref) {
    __$ctx.ctx.cls = __$ctx._selectCls + "-popup";
    delete __$ctx._selectCls;
    applyc(__$ctx, __$ref);
    return;
}

function __$b34(__$ctx, __$ref) {
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

function __$b35(__$ctx, __$ref) {
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

function __$b36(__$ctx, __$ref) {
    var url__$112 = __$ctx.ctx.url;
    var __$r__$114;
    var __$l0__$115 = $$mode;
    $$mode = "";
    var __$l1__$116 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$112 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$118;
    var __$l2__$119 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$118 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$119;
    __$r__$114 = __$r__$118;
    $$mode = __$l0__$115;
    __$ctx.ctx = __$l1__$116;
    return;
}

function __$b37(__$ctx, __$ref) {
    var ie__$120 = __$ctx.ctx.ie, hideRule__$121 = !ie__$120 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$120 === "!IE" ? [ ie__$120, "<!-->", "<!--" ] : [ ie__$120, "", "" ];
    var __$r__$123;
    var __$l0__$124 = $$mode;
    $$mode = "";
    var __$l3__$125 = __$ctx.ctx;
    var __$l1__$126 = __$l3__$125._ieCommented;
    __$l3__$125._ieCommented = true;
    var __$l2__$127 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$121[0] + "]>" + hideRule__$121[1], __$ctx.ctx, hideRule__$121[2] + "<![endif]-->" ];
    __$r__$123 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$124;
    __$l3__$125._ieCommented = __$l1__$126;
    __$ctx.ctx = __$l2__$127;
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$134 = __$ctx.ctx;
    var __$r__$136;
    var __$l0__$137 = $$mode;
    $$mode = "";
    var __$l1__$138 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$134.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$134.title
            }, {
                block: "ua"
            }, ctx__$134.head, ctx__$134.styles, ctx__$134.favicon ? {
                elem: "favicon",
                url: ctx__$134.favicon
            } : "" ]
        }, ctx__$134 ]
    } ];
    var __$r__$140;
    var __$l2__$141 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$140 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$141;
    __$r__$136 = __$r__$140;
    $$mode = __$l0__$137;
    __$ctx.ctx = __$l1__$138;
    __$ctx._defPageApplied = false;
    return;
}

function __$b39(__$ctx, __$ref) {
    var BEM_INTERNAL__$142 = __$ctx.BEM.INTERNAL, ctx__$143 = __$ctx.ctx, isBEM__$144, tag__$145, res__$146;
    var __$r__$148;
    var __$l0__$149 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$150 = $$block;
    var __$r__$152;
    var __$l1__$153 = $$mode;
    $$mode = "tag";
    __$r__$152 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$153;
    tag__$145 = __$r__$152;
    typeof tag__$145 !== "undefined" || (tag__$145 = ctx__$143.tag);
    typeof tag__$145 !== "undefined" || (tag__$145 = "div");
    if (tag__$145) {
        var jsParams__$154, js__$155;
        if (vBlock__$150 && ctx__$143.js !== false) {
            var __$r__$156;
            var __$l2__$157 = $$mode;
            $$mode = "js";
            __$r__$156 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$157;
            js__$155 = __$r__$156;
            js__$155 = js__$155 ? __$ctx.extend(ctx__$143.js, js__$155 === true ? {} : js__$155) : ctx__$143.js === true ? {} : ctx__$143.js;
            js__$155 && ((jsParams__$154 = {})[BEM_INTERNAL__$142.buildClass(vBlock__$150, ctx__$143.elem)] = js__$155);
        }
        __$ctx._str += "<" + tag__$145;
        var __$r__$158;
        var __$l3__$159 = $$mode;
        $$mode = "bem";
        __$r__$158 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$159;
        isBEM__$144 = __$r__$158;
        typeof isBEM__$144 !== "undefined" || (isBEM__$144 = typeof ctx__$143.bem !== "undefined" ? ctx__$143.bem : ctx__$143.block || ctx__$143.elem);
        var __$r__$161;
        var __$l4__$162 = $$mode;
        $$mode = "cls";
        __$r__$161 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$162;
        var cls__$160 = __$r__$161;
        cls__$160 || (cls__$160 = ctx__$143.cls);
        var addJSInitClass__$163 = ctx__$143.block && jsParams__$154;
        if (isBEM__$144 || cls__$160) {
            __$ctx._str += ' class="';
            if (isBEM__$144) {
                __$ctx._str += BEM_INTERNAL__$142.buildClasses(vBlock__$150, ctx__$143.elem, ctx__$143.elemMods || ctx__$143.mods);
                var __$r__$165;
                var __$l5__$166 = $$mode;
                $$mode = "mix";
                __$r__$165 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$166;
                var mix__$164 = __$r__$165;
                ctx__$143.mix && (mix__$164 = mix__$164 ? [].concat(mix__$164, ctx__$143.mix) : ctx__$143.mix);
                if (mix__$164) {
                    var visited__$167 = {}, visitedKey__$168 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$167[visitedKey__$168(vBlock__$150, $$elem)] = true;
                    __$ctx.isArray(mix__$164) || (mix__$164 = [ mix__$164 ]);
                    for (var i__$169 = 0; i__$169 < mix__$164.length; i__$169++) {
                        var mixItem__$170 = mix__$164[i__$169], hasItem__$171 = mixItem__$170.block || mixItem__$170.elem, mixBlock__$172 = mixItem__$170.block || mixItem__$170._block || $$block, mixElem__$173 = mixItem__$170.elem || mixItem__$170._elem || $$elem;
                        hasItem__$171 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$142[hasItem__$171 ? "buildClasses" : "buildModsClasses"](mixBlock__$172, mixItem__$170.elem || mixItem__$170._elem || (mixItem__$170.block ? undefined : $$elem), mixItem__$170.elemMods || mixItem__$170.mods);
                        if (mixItem__$170.js) {
                            (jsParams__$154 || (jsParams__$154 = {}))[BEM_INTERNAL__$142.buildClass(mixBlock__$172, mixItem__$170.elem)] = mixItem__$170.js === true ? {} : mixItem__$170.js;
                            addJSInitClass__$163 || (addJSInitClass__$163 = mixBlock__$172 && !mixItem__$170.elem);
                        }
                        if (hasItem__$171 && !visited__$167[visitedKey__$168(mixBlock__$172, mixElem__$173)]) {
                            visited__$167[visitedKey__$168(mixBlock__$172, mixElem__$173)] = true;
                            var __$r__$175;
                            var __$l6__$176 = $$mode;
                            $$mode = "mix";
                            var __$l7__$177 = $$block;
                            $$block = mixBlock__$172;
                            var __$l8__$178 = $$elem;
                            $$elem = mixElem__$173;
                            __$r__$175 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$176;
                            $$block = __$l7__$177;
                            $$elem = __$l8__$178;
                            var nestedMix__$174 = __$r__$175;
                            if (nestedMix__$174) {
                                for (var j__$179 = 0; j__$179 < nestedMix__$174.length; j__$179++) {
                                    var nestedItem__$180 = nestedMix__$174[j__$179];
                                    if (!nestedItem__$180.block && !nestedItem__$180.elem || !visited__$167[visitedKey__$168(nestedItem__$180.block, nestedItem__$180.elem)]) {
                                        nestedItem__$180._block = mixBlock__$172;
                                        nestedItem__$180._elem = mixElem__$173;
                                        mix__$164.splice(i__$169 + 1, 0, nestedItem__$180);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$160 && (__$ctx._str += isBEM__$144 ? " " + cls__$160 : cls__$160);
            __$ctx._str += addJSInitClass__$163 ? ' i-bem"' : '"';
        }
        if (isBEM__$144 && jsParams__$154) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$154)) + '"';
        }
        var __$r__$182;
        var __$l9__$183 = $$mode;
        $$mode = "attrs";
        __$r__$182 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$183;
        var attrs__$181 = __$r__$182;
        attrs__$181 = __$ctx.extend(attrs__$181, ctx__$143.attrs);
        if (attrs__$181) {
            var name__$184, attr__$185;
            for (name__$184 in attrs__$181) {
                attr__$185 = attrs__$181[name__$184];
                if (typeof attr__$185 === "undefined") continue;
                __$ctx._str += " " + name__$184 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$185) ? attr__$185 : __$ctx.reapply(attr__$185)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$145)) {
        __$ctx._str += "/>";
    } else {
        tag__$145 && (__$ctx._str += ">");
        var __$r__$187;
        var __$l10__$188 = $$mode;
        $$mode = "content";
        __$r__$187 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$188;
        var content__$186 = __$r__$187;
        if (content__$186 || content__$186 === 0) {
            isBEM__$144 = vBlock__$150 || $$elem;
            var __$r__$189;
            var __$l11__$190 = $$mode;
            $$mode = "";
            var __$l12__$191 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$192 = __$ctx.position;
            __$ctx.position = isBEM__$144 ? 1 : __$ctx.position;
            var __$l14__$193 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$144 ? 1 : __$ctx._listLength;
            var __$l15__$194 = __$ctx.ctx;
            __$ctx.ctx = content__$186;
            __$r__$189 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$190;
            __$ctx._notNewList = __$l12__$191;
            __$ctx.position = __$l13__$192;
            __$ctx._listLength = __$l14__$193;
            __$ctx.ctx = __$l15__$194;
        }
        tag__$145 && (__$ctx._str += "</" + tag__$145 + ">");
    }
    res__$146 = __$ctx._str;
    __$r__$148 = undefined;
    __$ctx._str = __$l0__$149;
    __$ctx._buf.push(res__$146);
    return;
}

function __$b40(__$ctx, __$ref) {
    var val__$83 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$83) ? val__$83 : JSON.stringify(val__$83),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b42(__$ctx, __$ref) {
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

function __$b43(__$ctx, __$ref) {
    var ctx__$66 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$66.tabIndex,
        id: ctx__$66.id,
        title: ctx__$66.title
    };
}

function __$b48(__$ctx, __$ref) {
    var attrs__$39 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$39.tabindex = 0);
    return attrs__$39;
}

function __$b80(__$ctx, __$ref) {
    var __$r__$196;
    var __$l0__$197 = $$mode;
    $$mode = "";
    var __$l1__$198 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$200;
    var __$l2__$201 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16777216;
    __$r__$200 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$201;
    __$r__$196 = __$r__$200;
    $$mode = __$l0__$197;
    __$ctx.ctx = __$l1__$198;
    return;
}

function __$b81(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$202 = __$ctx.ctx;
    if (ctx__$202 && ctx__$202 !== true || ctx__$202 === 0) {
        __$ctx._str += ctx__$202 + "";
    }
    return;
}

function __$b82(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b83(__$ctx, __$ref) {
    var ctx__$203 = __$ctx.ctx, len__$204 = ctx__$203.length, i__$205 = 0, prevPos__$206 = __$ctx.position, prevNotNewList__$207 = __$ctx._notNewList;
    if (prevNotNewList__$207) {
        __$ctx._listLength += len__$204 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$204;
    }
    __$ctx._notNewList = true;
    while (i__$205 < len__$204) (function __$lb__$208() {
        var __$r__$209;
        var __$l0__$210 = __$ctx.ctx;
        __$ctx.ctx = ctx__$203[i__$205++];
        __$r__$209 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$210;
        return __$r__$209;
    })();
    prevNotNewList__$207 || (__$ctx.position = prevPos__$206);
    return;
}

function __$b84(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$211 = __$ctx.ctx.block, vElem__$212 = __$ctx.ctx.elem, block__$213 = __$ctx._currBlock || $$block;
    var __$r__$215;
    var __$l0__$216 = $$mode;
    $$mode = "default";
    var __$l1__$217 = $$block;
    $$block = vBlock__$211 || (vElem__$212 ? block__$213 : undefined);
    var __$l2__$218 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$211 || vElem__$212 ? undefined : block__$213;
    var __$l3__$219 = $$elem;
    $$elem = vElem__$212;
    var __$l4__$220 = $$mods;
    $$mods = vBlock__$211 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$221 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$215 = undefined;
    $$mode = __$l0__$216;
    $$block = __$l1__$217;
    __$ctx._currBlock = __$l2__$218;
    $$elem = __$l3__$219;
    $$mods = __$l4__$220;
    $$elemMods = __$l5__$221;
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
            if ((__$ctx.__$a0 & 524288) === 0) {
                return [ function __$lb__$109() {
                    var __$r__$110;
                    var __$l0__$111 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
                    __$r__$110 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$111;
                    return __$r__$110;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 2097152) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$128() {
                var __$r__$129;
                var __$l0__$130 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$129 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$130;
                return __$r__$129;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 4194304) === 0) {
            return [ function __$lb__$131() {
                var __$r__$132;
                var __$l0__$133 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
                __$r__$132 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$133;
                return __$r__$132;
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
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b27(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 131072) === 0) {
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (!__$ctx._select && (__$ctx.__$a0 & 262144) === 0) {
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "popup") {
        if (!$$elem && __$ctx._selectCls) {
            var __$r = __$b33(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 1048576) === 0) {
                        var __$r = __$b36(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b37(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 8388608) === 0) {
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b39(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b40(__$ctx, __$ref);
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
                var __$r = __$b42(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b43(__$ctx, __$ref);
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
            var __$r = __$b48(__$ctx, __$ref);
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