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
    } else if (__$t === "default") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g3(__$ctx, __$ref);
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
        } else if (__$t === "radio-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g4(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 2097152) === 0) {
            var __$r = __$b103(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b104(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b105(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b106(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b107(__$ctx, __$ref);
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
        ctx["_button"] = undefined;
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
    var ctx__$83 = __$ctx.ctx, mods__$84 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$84.mode === "radio-check" ? "check" : "radio",
            checked: mods__$84.checked,
            disabled: mods__$84.disabled,
            theme: mods__$84.theme,
            size: mods__$84.size
        },
        title: ctx__$83.title,
        content: [ ctx__$83.icon, typeof ctx__$83.text !== "undefined" ? {
            elem: "text",
            content: ctx__$83.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$84.checked,
        disabled: mods__$84.disabled,
        name: ctx__$83.name,
        val: ctx__$83.val
    } ];
}

function __$b2(__$ctx, __$ref) {
    var ctx__$87 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$87.name,
            val: ctx__$87.val
        }
    }, ctx__$87.text ];
}

function __$b7(__$ctx, __$ref) {
    var ctx__$95 = __$ctx.ctx, content__$96 = [ ctx__$95.icon ];
    "text" in ctx__$95 && content__$96.push({
        elem: "text",
        content: ctx__$95.text
    });
    return content__$96;
}

function __$b11(__$ctx, __$ref) {
    var mods__$88 = $$mods, ctx__$89 = __$ctx.ctx;
    return (ctx__$89.options || []).map(function(option, i) {
        return [ !!i && !mods__$88.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$88.type,
                mode: mods__$88.mode,
                theme: mods__$88.theme,
                size: mods__$88.size,
                checked: option.checked,
                disabled: option.disabled || mods__$88.disabled
            },
            name: ctx__$89.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b12(__$ctx, __$ref) {
    var ctx__$90 = __$ctx.ctx, mods__$91 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$91.checked,
            disabled: mods__$91.disabled,
            theme: mods__$91.theme,
            size: mods__$91.size
        },
        title: ctx__$90.title,
        content: [ ctx__$90.icon, typeof ctx__$90.text !== "undefined" ? {
            elem: "text",
            content: ctx__$90.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$91.checked,
        disabled: mods__$91.disabled,
        name: ctx__$90.name,
        val: ctx__$90.val
    } ];
}

function __$b13(__$ctx, __$ref) {
    var ctx__$111 = __$ctx.ctx, mods__$112 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$112.checked,
            disabled: mods__$112.disabled,
            name: ctx__$111.name,
            val: ctx__$111.val
        }
    }, ctx__$111.text ];
}

function __$b14(__$ctx, __$ref) {
    var mods__$113 = $$mods, ctx__$114 = __$ctx.ctx;
    return (ctx__$114.options || []).map(function(option, i) {
        return [ !!i && !mods__$113.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$113.type,
                theme: mods__$113.theme,
                size: mods__$113.size,
                checked: option.checked,
                disabled: option.disabled || mods__$113.disabled
            },
            name: ctx__$114.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b20(__$ctx, __$ref) {
    var checkedOptions__$3 = __$ctx._checkedOptions, firstOption__$4 = __$ctx._firstOption;
    if (!checkedOptions__$3.length) {
        firstOption__$4.checked = true;
        checkedOptions__$3.push(firstOption__$4);
    }
    var __$r__$6;
    var __$l0__$7 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$3[0];
    var __$r__$9;
    var __$l1__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$10;
    __$r__$6 = __$r__$9;
    __$ctx._checkedOption = __$l0__$7;
    return;
}

function __$b21(__$ctx, __$ref) {
    var mods__$42 = $$mods;
    var __$r__$44;
    var __$l0__$45 = $$mode;
    $$mode = "";
    var __$l1__$46 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$42.size,
            theme: mods__$42.theme,
            focused: mods__$42.focused,
            disabled: mods__$42.disabled,
            checked: mods__$42.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$47() {
            var __$r__$48;
            var __$l3__$49 = $$mode;
            $$mode = "content";
            __$r__$48 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$49;
            return __$r__$48;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$50;
    var __$l2__$51 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$50 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$51;
    __$r__$44 = __$r__$50;
    $$mode = __$l0__$45;
    __$ctx.ctx = __$l1__$46;
    return;
}

function __$b22(__$ctx, __$ref) {
    var mods__$32 = $$mods, optionToMenuItem__$33 = function(option) {
        var res__$34 = {
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
            res__$34.js.text = option.text;
            res__$34.content = [ option.icon, res__$34.content ];
        }
        return res__$34;
    };
    var __$r__$36;
    var __$l0__$37 = $$mode;
    $$mode = "";
    var __$l1__$38 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$32.size,
            theme: mods__$32.theme,
            disabled: mods__$32.disabled,
            mode: mods__$32.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$33)
            } : optionToMenuItem__$33(optionOrGroup);
        })
    };
    var __$r__$40;
    var __$l2__$41 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$40 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$41;
    __$r__$36 = __$r__$40;
    $$mode = __$l0__$37;
    __$ctx.ctx = __$l1__$38;
    return;
}

function __$b23(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$57 = __$ctx.ctx.options, i__$58 = 0, j__$59, optionOrGroup__$60, option__$61, firstOption__$62, checkedOptions__$63 = [];
    while (optionOrGroup__$60 = options__$57[i__$58++]) {
        if (optionOrGroup__$60.group) {
            j__$59 = 0;
            while (option__$61 = optionOrGroup__$60.group[j__$59++]) {
                i__$58 === 1 && j__$59 === 1 && (firstOption__$62 = option__$61);
                option__$61.checked && checkedOptions__$63.push(option__$61);
            }
        } else {
            i__$58 === 1 && (firstOption__$62 = optionOrGroup__$60);
            optionOrGroup__$60.checked && checkedOptions__$63.push(optionOrGroup__$60);
        }
    }
    var __$r__$65;
    var __$l0__$66 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$67 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$63;
    var __$l2__$68 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$62;
    var __$r__$70;
    var __$l3__$71 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$70 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$71;
    __$r__$65 = __$r__$70;
    __$ctx._select = __$l0__$66;
    __$ctx._checkedOptions = __$l1__$67;
    __$ctx._firstOption = __$l2__$68;
    return;
}

function __$b24(__$ctx, __$ref) {
    var __$r__$104;
    var __$l0__$105 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$107;
    var __$l1__$108 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$107 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$108;
    __$r__$104 = __$r__$107;
    __$ctx._button = __$l0__$105;
    return;
}

function __$b25(__$ctx, __$ref) {
    var __$r__$27;
    var __$l0__$28 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$30;
    var __$l1__$31 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$30 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$31;
    __$r__$27 = __$r__$30;
    __$ctx._menuMods = __$l0__$28;
    delete __$ctx._menuTheme;
    return;
}

function __$b26(__$ctx, __$ref) {
    var mods__$21 = $$mods;
    mods__$21.theme = mods__$21.theme || __$ctx._menuMods.theme;
    mods__$21.disabled = mods__$21.disabled || __$ctx._menuMods.disabled;
    var __$r__$23;
    var __$l0__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$24;
    return;
}

function __$b27(__$ctx, __$ref) {
    var __$r__$78;
    var __$l0__$79 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$81;
    var __$l1__$82 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$82;
    __$r__$78 = __$r__$81;
    __$ctx._input = __$l0__$79;
    return;
}

function __$b28(__$ctx, __$ref) {
    var url__$118 = __$ctx.ctx.url;
    var __$r__$120;
    var __$l0__$121 = $$mode;
    $$mode = "";
    var __$l1__$122 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$118 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$124;
    var __$l2__$125 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$124 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$125;
    __$r__$120 = __$r__$124;
    $$mode = __$l0__$121;
    __$ctx.ctx = __$l1__$122;
    return;
}

function __$b29(__$ctx, __$ref) {
    var ie__$126 = __$ctx.ctx.ie, hideRule__$127 = !ie__$126 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$126 === "!IE" ? [ ie__$126, "<!-->", "<!--" ] : [ ie__$126, "", "" ];
    var __$r__$129;
    var __$l0__$130 = $$mode;
    $$mode = "";
    var __$l3__$131 = __$ctx.ctx;
    var __$l1__$132 = __$l3__$131._ieCommented;
    __$l3__$131._ieCommented = true;
    var __$l2__$133 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$127[0] + "]>" + hideRule__$127[1], __$ctx.ctx, hideRule__$127[2] + "<![endif]-->" ];
    __$r__$129 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$130;
    __$l3__$131._ieCommented = __$l1__$132;
    __$ctx.ctx = __$l2__$133;
    return;
}

function __$b30(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$140 = __$ctx.ctx;
    var __$r__$142;
    var __$l0__$143 = $$mode;
    $$mode = "";
    var __$l1__$144 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$140.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$140.title
            }, {
                block: "ua"
            }, ctx__$140.head, ctx__$140.styles, ctx__$140.favicon ? {
                elem: "favicon",
                url: ctx__$140.favicon
            } : "" ]
        }, ctx__$140 ]
    } ];
    var __$r__$146;
    var __$l2__$147 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$146 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$147;
    __$r__$142 = __$r__$146;
    $$mode = __$l0__$143;
    __$ctx.ctx = __$l1__$144;
    __$ctx._defPageApplied = false;
    return;
}

function __$b31(__$ctx, __$ref) {
    var BEM_INTERNAL__$148 = __$ctx.BEM.INTERNAL, ctx__$149 = __$ctx.ctx, isBEM__$150, tag__$151, res__$152;
    var __$r__$154;
    var __$l0__$155 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$156 = $$block;
    var __$r__$158;
    var __$l1__$159 = $$mode;
    $$mode = "tag";
    __$r__$158 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$159;
    tag__$151 = __$r__$158;
    typeof tag__$151 !== "undefined" || (tag__$151 = ctx__$149.tag);
    typeof tag__$151 !== "undefined" || (tag__$151 = "div");
    if (tag__$151) {
        var jsParams__$160, js__$161;
        if (vBlock__$156 && ctx__$149.js !== false) {
            var __$r__$162;
            var __$l2__$163 = $$mode;
            $$mode = "js";
            __$r__$162 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$163;
            js__$161 = __$r__$162;
            js__$161 = js__$161 ? __$ctx.extend(ctx__$149.js, js__$161 === true ? {} : js__$161) : ctx__$149.js === true ? {} : ctx__$149.js;
            js__$161 && ((jsParams__$160 = {})[BEM_INTERNAL__$148.buildClass(vBlock__$156, ctx__$149.elem)] = js__$161);
        }
        __$ctx._str += "<" + tag__$151;
        var __$r__$164;
        var __$l3__$165 = $$mode;
        $$mode = "bem";
        __$r__$164 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$165;
        isBEM__$150 = __$r__$164;
        typeof isBEM__$150 !== "undefined" || (isBEM__$150 = typeof ctx__$149.bem !== "undefined" ? ctx__$149.bem : ctx__$149.block || ctx__$149.elem);
        var __$r__$167;
        var __$l4__$168 = $$mode;
        $$mode = "cls";
        __$r__$167 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$168;
        var cls__$166 = __$r__$167;
        cls__$166 || (cls__$166 = ctx__$149.cls);
        var addJSInitClass__$169 = ctx__$149.block && jsParams__$160;
        if (isBEM__$150 || cls__$166) {
            __$ctx._str += ' class="';
            if (isBEM__$150) {
                __$ctx._str += BEM_INTERNAL__$148.buildClasses(vBlock__$156, ctx__$149.elem, ctx__$149.elemMods || ctx__$149.mods);
                var __$r__$171;
                var __$l5__$172 = $$mode;
                $$mode = "mix";
                __$r__$171 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$172;
                var mix__$170 = __$r__$171;
                ctx__$149.mix && (mix__$170 = mix__$170 ? [].concat(mix__$170, ctx__$149.mix) : ctx__$149.mix);
                if (mix__$170) {
                    var visited__$173 = {}, visitedKey__$174 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$173[visitedKey__$174(vBlock__$156, $$elem)] = true;
                    __$ctx.isArray(mix__$170) || (mix__$170 = [ mix__$170 ]);
                    for (var i__$175 = 0; i__$175 < mix__$170.length; i__$175++) {
                        var mixItem__$176 = mix__$170[i__$175], hasItem__$177 = mixItem__$176.block || mixItem__$176.elem, mixBlock__$178 = mixItem__$176.block || mixItem__$176._block || $$block, mixElem__$179 = mixItem__$176.elem || mixItem__$176._elem || $$elem;
                        hasItem__$177 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$148[hasItem__$177 ? "buildClasses" : "buildModsClasses"](mixBlock__$178, mixItem__$176.elem || mixItem__$176._elem || (mixItem__$176.block ? undefined : $$elem), mixItem__$176.elemMods || mixItem__$176.mods);
                        if (mixItem__$176.js) {
                            (jsParams__$160 || (jsParams__$160 = {}))[BEM_INTERNAL__$148.buildClass(mixBlock__$178, mixItem__$176.elem)] = mixItem__$176.js === true ? {} : mixItem__$176.js;
                            addJSInitClass__$169 || (addJSInitClass__$169 = mixBlock__$178 && !mixItem__$176.elem);
                        }
                        if (hasItem__$177 && !visited__$173[visitedKey__$174(mixBlock__$178, mixElem__$179)]) {
                            visited__$173[visitedKey__$174(mixBlock__$178, mixElem__$179)] = true;
                            var __$r__$181;
                            var __$l6__$182 = $$mode;
                            $$mode = "mix";
                            var __$l7__$183 = $$block;
                            $$block = mixBlock__$178;
                            var __$l8__$184 = $$elem;
                            $$elem = mixElem__$179;
                            __$r__$181 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$182;
                            $$block = __$l7__$183;
                            $$elem = __$l8__$184;
                            var nestedMix__$180 = __$r__$181;
                            if (nestedMix__$180) {
                                for (var j__$185 = 0; j__$185 < nestedMix__$180.length; j__$185++) {
                                    var nestedItem__$186 = nestedMix__$180[j__$185];
                                    if (!nestedItem__$186.block && !nestedItem__$186.elem || !visited__$173[visitedKey__$174(nestedItem__$186.block, nestedItem__$186.elem)]) {
                                        nestedItem__$186._block = mixBlock__$178;
                                        nestedItem__$186._elem = mixElem__$179;
                                        mix__$170.splice(i__$175 + 1, 0, nestedItem__$186);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$166 && (__$ctx._str += isBEM__$150 ? " " + cls__$166 : cls__$166);
            __$ctx._str += addJSInitClass__$169 ? ' i-bem"' : '"';
        }
        if (isBEM__$150 && jsParams__$160) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$160)) + '"';
        }
        var __$r__$188;
        var __$l9__$189 = $$mode;
        $$mode = "attrs";
        __$r__$188 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$189;
        var attrs__$187 = __$r__$188;
        attrs__$187 = __$ctx.extend(attrs__$187, ctx__$149.attrs);
        if (attrs__$187) {
            var name__$190, attr__$191;
            for (name__$190 in attrs__$187) {
                attr__$191 = attrs__$187[name__$190];
                if (typeof attr__$191 === "undefined") continue;
                __$ctx._str += " " + name__$190 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$191) ? attr__$191 : __$ctx.reapply(attr__$191)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$151)) {
        __$ctx._str += "/>";
    } else {
        tag__$151 && (__$ctx._str += ">");
        var __$r__$193;
        var __$l10__$194 = $$mode;
        $$mode = "content";
        __$r__$193 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$194;
        var content__$192 = __$r__$193;
        if (content__$192 || content__$192 === 0) {
            isBEM__$150 = vBlock__$156 || $$elem;
            var __$r__$195;
            var __$l11__$196 = $$mode;
            $$mode = "";
            var __$l12__$197 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$198 = __$ctx.position;
            __$ctx.position = isBEM__$150 ? 1 : __$ctx.position;
            var __$l14__$199 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$150 ? 1 : __$ctx._listLength;
            var __$l15__$200 = __$ctx.ctx;
            __$ctx.ctx = content__$192;
            __$r__$195 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$196;
            __$ctx._notNewList = __$l12__$197;
            __$ctx.position = __$l13__$198;
            __$ctx._listLength = __$l14__$199;
            __$ctx.ctx = __$l15__$200;
        }
        tag__$151 && (__$ctx._str += "</" + tag__$151 + ">");
    }
    res__$152 = __$ctx._str;
    __$r__$154 = undefined;
    __$ctx._str = __$l0__$155;
    __$ctx._buf.push(res__$152);
    return;
}

function __$b34(__$ctx, __$ref) {
    var ctx__$56 = __$ctx.ctx;
    return {
        name: ctx__$56.name,
        optionsMaxHeight: ctx__$56.optionsMaxHeight
    };
}

function __$b37(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx;
    return {
        mainOffset: ctx__$11.mainOffset,
        secondaryOffset: ctx__$11.secondaryOffset,
        viewportOffset: ctx__$11.viewportOffset,
        directions: ctx__$11.directions,
        zIndexGroupLevel: ctx__$11.zIndexGroupLevel
    };
}

function __$b46(__$ctx, __$ref) {
    var ctx__$85 = __$ctx.ctx, attrs__$86 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$85.name,
        value: ctx__$85.val
    };
    ctx__$85.checked && (attrs__$86.checked = "checked");
    ctx__$85.disabled && (attrs__$86.disabled = "disabled");
    return attrs__$86;
}

function __$b47(__$ctx, __$ref) {
    var val__$52 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$52) ? val__$52 : JSON.stringify(val__$52),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b49(__$ctx, __$ref) {
    var ctx__$97 = __$ctx.ctx, attrs__$98 = {
        type: $$mods.type || "button",
        name: ctx__$97.name,
        value: ctx__$97.val
    };
    $$mods.disabled && (attrs__$98.disabled = "disabled");
    return __$ctx.extend(function __$lb__$99() {
        var __$r__$100;
        var __$l0__$101 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
        __$r__$100 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$101;
        return __$r__$100;
    }(), attrs__$98);
}

function __$b50(__$ctx, __$ref) {
    var ctx__$102 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$102.tabIndex,
        id: ctx__$102.id,
        title: ctx__$102.title
    };
}

function __$b54(__$ctx, __$ref) {
    var attrs__$25 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$25.tabindex = 0);
    return attrs__$25;
}

function __$b57(__$ctx, __$ref) {
    var input__$75 = __$ctx._input, attrs__$76 = {
        id: input__$75.id,
        name: input__$75.name,
        value: input__$75.val,
        maxlength: input__$75.maxLength,
        tabindex: input__$75.tabIndex,
        placeholder: input__$75.placeholder
    };
    input__$75.autocomplete === false && (attrs__$76.autocomplete = "off");
    $$mods.disabled && (attrs__$76.disabled = "disabled");
    return attrs__$76;
}

function __$b59(__$ctx, __$ref) {
    var attrs__$109 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$110 = __$ctx.ctx;
    attrs__$109.name = ctx__$110.name;
    attrs__$109.value = ctx__$110.val;
    ctx__$110.checked && (attrs__$109.checked = "checked");
    ctx__$110.disabled && (attrs__$109.disabled = "disabled");
    return attrs__$109;
}

function __$b103(__$ctx, __$ref) {
    var __$r__$202;
    var __$l0__$203 = $$mode;
    $$mode = "";
    var __$l1__$204 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$206;
    var __$l2__$207 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
    __$r__$206 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$207;
    __$r__$202 = __$r__$206;
    $$mode = __$l0__$203;
    __$ctx.ctx = __$l1__$204;
    return;
}

function __$b104(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$208 = __$ctx.ctx;
    if (ctx__$208 && ctx__$208 !== true || ctx__$208 === 0) {
        __$ctx._str += ctx__$208 + "";
    }
    return;
}

function __$b105(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b106(__$ctx, __$ref) {
    var ctx__$209 = __$ctx.ctx, len__$210 = ctx__$209.length, i__$211 = 0, prevPos__$212 = __$ctx.position, prevNotNewList__$213 = __$ctx._notNewList;
    if (prevNotNewList__$213) {
        __$ctx._listLength += len__$210 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$210;
    }
    __$ctx._notNewList = true;
    while (i__$211 < len__$210) (function __$lb__$214() {
        var __$r__$215;
        var __$l0__$216 = __$ctx.ctx;
        __$ctx.ctx = ctx__$209[i__$211++];
        __$r__$215 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$216;
        return __$r__$215;
    })();
    prevNotNewList__$213 || (__$ctx.position = prevPos__$212);
    return;
}

function __$b107(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$217 = __$ctx.ctx.block, vElem__$218 = __$ctx.ctx.elem, block__$219 = __$ctx._currBlock || $$block;
    var __$r__$221;
    var __$l0__$222 = $$mode;
    $$mode = "default";
    var __$l1__$223 = $$block;
    $$block = vBlock__$217 || (vElem__$218 ? block__$219 : undefined);
    var __$l2__$224 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$217 || vElem__$218 ? undefined : block__$219;
    var __$l3__$225 = $$elem;
    $$elem = vElem__$218;
    var __$l4__$226 = $$mods;
    $$mods = vBlock__$217 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$227 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$221 = undefined;
    $$mode = __$l0__$222;
    $$block = __$l1__$223;
    __$ctx._currBlock = __$l2__$224;
    $$elem = __$l3__$225;
    $$mods = __$l4__$226;
    $$elemMods = __$l5__$227;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
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
            if ($$mods && $$mods["mode"] === "radio" && (__$ctx.__$a0 & 1) === 0) {
                return [ {
                    elem: "control",
                    val: __$ctx._checkedOption.val
                }, function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
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
            var __$r = __$b7(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$12() {
                var __$r__$13;
                var __$l0__$14 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4;
                __$r__$13 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$14;
                return __$r__$13;
            }() ];
        }
    } else if (__$t === "input") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            var __$r = __$b11(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b12(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b13(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b14(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 65536) === 0) {
                return [ function __$lb__$115() {
                    var __$r__$116;
                    var __$l0__$117 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$116 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$117;
                    return __$r__$116;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 262144) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$134() {
                var __$r__$135;
                var __$l0__$136 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                __$r__$135 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$136;
                return __$r__$135;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 524288) === 0) {
            return [ function __$lb__$137() {
                var __$r__$138;
                var __$l0__$139 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 524288;
                __$r__$138 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$139;
                return __$r__$138;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b20(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b22(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b23(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 32768) === 0) {
            var __$r = __$b24(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b25(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b26(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 4096) === 0) {
            var __$r = __$b27(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 131072) === 0) {
                        var __$r = __$b28(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b29(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 1048576) === 0) {
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b31(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$ctx.extend(function __$lb__$53() {
                    var __$r__$54;
                    var __$l0__$55 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$54 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$55;
                    return __$r__$54;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 8192) === 0) {
                var __$r = __$ctx.extend(function __$lb__$92() {
                    var __$r__$93;
                    var __$l0__$94 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$93 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$94;
                    return __$r__$93;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$18() {
                    var __$r__$19;
                    var __$l0__$20 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$19 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$20;
                    return __$r__$19;
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
    } else if (__$t === "input") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
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
    }
    return undefined;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if ($$elem === "control") {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b47(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b49(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b50(__$ctx, __$ref);
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
                var __$r = __$ctx.extend(function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
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
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            if ($$mods && $$mods["type"] === "search" && (__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$ctx.extend(function __$lb__$72() {
                    var __$r__$73;
                    var __$l0__$74 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                    __$r__$73 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$74;
                    return __$r__$73;
                }(), {
                    type: "search"
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "checkbox") {
        if ($$elem === "control") {
            var __$r = __$b59(__$ctx, __$ref);
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

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
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
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return "span";
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