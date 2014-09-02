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
    var ctx__$82 = __$ctx.ctx, mods__$83 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$83.mode === "radio-check" ? "check" : "radio",
            checked: mods__$83.checked,
            disabled: mods__$83.disabled,
            theme: mods__$83.theme,
            size: mods__$83.size
        },
        title: ctx__$82.title,
        content: [ ctx__$82.icon, typeof ctx__$82.text !== "undefined" ? {
            elem: "text",
            content: ctx__$82.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$83.checked,
        disabled: mods__$83.disabled,
        name: ctx__$82.name,
        val: ctx__$82.val
    } ];
}

function __$b2(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$86.name,
            val: ctx__$86.val
        }
    }, ctx__$86.text ];
}

function __$b7(__$ctx, __$ref) {
    var ctx__$94 = __$ctx.ctx, content__$95 = [ ctx__$94.icon ];
    "text" in ctx__$94 && content__$95.push({
        elem: "text",
        content: ctx__$94.text
    });
    return content__$95;
}

function __$b11(__$ctx, __$ref) {
    var mods__$87 = $$mods, ctx__$88 = __$ctx.ctx;
    return (ctx__$88.options || []).map(function(option, i) {
        return [ !!i && !mods__$87.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$87.type,
                mode: mods__$87.mode,
                theme: mods__$87.theme,
                size: mods__$87.size,
                checked: option.checked,
                disabled: option.disabled || mods__$87.disabled
            },
            name: ctx__$88.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b12(__$ctx, __$ref) {
    var ctx__$89 = __$ctx.ctx, mods__$90 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$90.checked,
            disabled: mods__$90.disabled,
            theme: mods__$90.theme,
            size: mods__$90.size
        },
        title: ctx__$89.title,
        content: [ ctx__$89.icon, typeof ctx__$89.text !== "undefined" ? {
            elem: "text",
            content: ctx__$89.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$90.checked,
        disabled: mods__$90.disabled,
        name: ctx__$89.name,
        val: ctx__$89.val
    } ];
}

function __$b13(__$ctx, __$ref) {
    var ctx__$110 = __$ctx.ctx, mods__$111 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$111.checked,
            disabled: mods__$111.disabled,
            name: ctx__$110.name,
            val: ctx__$110.val
        }
    }, ctx__$110.text ];
}

function __$b14(__$ctx, __$ref) {
    var mods__$112 = $$mods, ctx__$113 = __$ctx.ctx;
    return (ctx__$113.options || []).map(function(option, i) {
        return [ !!i && !mods__$112.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$112.type,
                theme: mods__$112.theme,
                size: mods__$112.size,
                checked: option.checked,
                disabled: option.disabled || mods__$112.disabled
            },
            name: ctx__$113.name,
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
    var mods__$41 = $$mods;
    var __$r__$43;
    var __$l0__$44 = $$mode;
    $$mode = "";
    var __$l1__$45 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$41.size,
            theme: mods__$41.theme,
            focused: mods__$41.focused,
            disabled: mods__$41.disabled,
            checked: mods__$41.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$46() {
            var __$r__$47;
            var __$l3__$48 = $$mode;
            $$mode = "content";
            __$r__$47 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$48;
            return __$r__$47;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$49;
    var __$l2__$50 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$49 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$50;
    __$r__$43 = __$r__$49;
    $$mode = __$l0__$44;
    __$ctx.ctx = __$l1__$45;
    return;
}

function __$b22(__$ctx, __$ref) {
    var mods__$31 = $$mods, optionToMenuItem__$32 = function(option) {
        var res__$33 = {
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
            res__$33.js.text = option.text;
            res__$33.content = [ option.icon, res__$33.content ];
        }
        return res__$33;
    };
    var __$r__$35;
    var __$l0__$36 = $$mode;
    $$mode = "";
    var __$l1__$37 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$31.size,
            theme: mods__$31.theme,
            disabled: mods__$31.disabled,
            mode: mods__$31.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$32)
            } : optionToMenuItem__$32(optionOrGroup);
        })
    };
    var __$r__$39;
    var __$l2__$40 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$39 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$40;
    __$r__$35 = __$r__$39;
    $$mode = __$l0__$36;
    __$ctx.ctx = __$l1__$37;
    return;
}

function __$b23(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$56 = __$ctx.ctx.options, i__$57 = 0, j__$58, optionOrGroup__$59, option__$60, firstOption__$61, checkedOptions__$62 = [];
    while (optionOrGroup__$59 = options__$56[i__$57++]) {
        if (optionOrGroup__$59.group) {
            j__$58 = 0;
            while (option__$60 = optionOrGroup__$59.group[j__$58++]) {
                i__$57 === 1 && j__$58 === 1 && (firstOption__$61 = option__$60);
                option__$60.checked && checkedOptions__$62.push(option__$60);
            }
        } else {
            i__$57 === 1 && (firstOption__$61 = optionOrGroup__$59);
            optionOrGroup__$59.checked && checkedOptions__$62.push(optionOrGroup__$59);
        }
    }
    var __$r__$64;
    var __$l0__$65 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$66 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$62;
    var __$l2__$67 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$61;
    var __$r__$69;
    var __$l3__$70 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$69 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$70;
    __$r__$64 = __$r__$69;
    __$ctx._select = __$l0__$65;
    __$ctx._checkedOptions = __$l1__$66;
    __$ctx._firstOption = __$l2__$67;
    return;
}

function __$b24(__$ctx, __$ref) {
    var __$r__$103;
    var __$l0__$104 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$106;
    var __$l1__$107 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$106 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$107;
    __$r__$103 = __$r__$106;
    __$ctx._button = __$l0__$104;
    return;
}

function __$b25(__$ctx, __$ref) {
    var __$r__$26;
    var __$l0__$27 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$29;
    var __$l1__$30 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$29 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$30;
    __$r__$26 = __$r__$29;
    __$ctx._menuMods = __$l0__$27;
    delete __$ctx._menuTheme;
    return;
}

function __$b26(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$22;
    var __$l0__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$23;
    return;
}

function __$b27(__$ctx, __$ref) {
    var __$r__$77;
    var __$l0__$78 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$80;
    var __$l1__$81 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$80 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$81;
    __$r__$77 = __$r__$80;
    __$ctx._input = __$l0__$78;
    return;
}

function __$b28(__$ctx, __$ref) {
    var url__$117 = __$ctx.ctx.url;
    var __$r__$119;
    var __$l0__$120 = $$mode;
    $$mode = "";
    var __$l1__$121 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$117 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$123;
    var __$l2__$124 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$123 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$124;
    __$r__$119 = __$r__$123;
    $$mode = __$l0__$120;
    __$ctx.ctx = __$l1__$121;
    return;
}

function __$b29(__$ctx, __$ref) {
    var ie__$125 = __$ctx.ctx.ie, hideRule__$126 = !ie__$125 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$125 === "!IE" ? [ ie__$125, "<!-->", "<!--" ] : [ ie__$125, "", "" ];
    var __$r__$128;
    var __$l0__$129 = $$mode;
    $$mode = "";
    var __$l3__$130 = __$ctx.ctx;
    var __$l1__$131 = __$l3__$130._ieCommented;
    __$l3__$130._ieCommented = true;
    var __$l2__$132 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$126[0] + "]>" + hideRule__$126[1], __$ctx.ctx, hideRule__$126[2] + "<![endif]-->" ];
    __$r__$128 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$129;
    __$l3__$130._ieCommented = __$l1__$131;
    __$ctx.ctx = __$l2__$132;
    return;
}

function __$b30(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$139 = __$ctx.ctx;
    var __$r__$141;
    var __$l0__$142 = $$mode;
    $$mode = "";
    var __$l1__$143 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$139.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$139.title
            }, {
                block: "ua"
            }, ctx__$139.head, ctx__$139.styles, ctx__$139.favicon ? {
                elem: "favicon",
                url: ctx__$139.favicon
            } : "" ]
        }, ctx__$139 ]
    } ];
    var __$r__$145;
    var __$l2__$146 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$145 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$146;
    __$r__$141 = __$r__$145;
    $$mode = __$l0__$142;
    __$ctx.ctx = __$l1__$143;
    __$ctx._defPageApplied = false;
    return;
}

function __$b31(__$ctx, __$ref) {
    var BEM_INTERNAL__$147 = __$ctx.BEM.INTERNAL, ctx__$148 = __$ctx.ctx, isBEM__$149, tag__$150, res__$151;
    var __$r__$153;
    var __$l0__$154 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$155 = $$block;
    var __$r__$157;
    var __$l1__$158 = $$mode;
    $$mode = "tag";
    __$r__$157 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$158;
    tag__$150 = __$r__$157;
    typeof tag__$150 !== "undefined" || (tag__$150 = ctx__$148.tag);
    typeof tag__$150 !== "undefined" || (tag__$150 = "div");
    if (tag__$150) {
        var jsParams__$159, js__$160;
        if (vBlock__$155 && ctx__$148.js !== false) {
            var __$r__$161;
            var __$l2__$162 = $$mode;
            $$mode = "js";
            __$r__$161 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$162;
            js__$160 = __$r__$161;
            js__$160 = js__$160 ? __$ctx.extend(ctx__$148.js, js__$160 === true ? {} : js__$160) : ctx__$148.js === true ? {} : ctx__$148.js;
            js__$160 && ((jsParams__$159 = {})[BEM_INTERNAL__$147.buildClass(vBlock__$155, ctx__$148.elem)] = js__$160);
        }
        __$ctx._str += "<" + tag__$150;
        var __$r__$163;
        var __$l3__$164 = $$mode;
        $$mode = "bem";
        __$r__$163 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$164;
        isBEM__$149 = __$r__$163;
        typeof isBEM__$149 !== "undefined" || (isBEM__$149 = typeof ctx__$148.bem !== "undefined" ? ctx__$148.bem : ctx__$148.block || ctx__$148.elem);
        var __$r__$166;
        var __$l4__$167 = $$mode;
        $$mode = "cls";
        __$r__$166 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$167;
        var cls__$165 = __$r__$166;
        cls__$165 || (cls__$165 = ctx__$148.cls);
        var addJSInitClass__$168 = ctx__$148.block && jsParams__$159;
        if (isBEM__$149 || cls__$165) {
            __$ctx._str += ' class="';
            if (isBEM__$149) {
                __$ctx._str += BEM_INTERNAL__$147.buildClasses(vBlock__$155, ctx__$148.elem, ctx__$148.elemMods || ctx__$148.mods);
                var __$r__$170;
                var __$l5__$171 = $$mode;
                $$mode = "mix";
                __$r__$170 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$171;
                var mix__$169 = __$r__$170;
                ctx__$148.mix && (mix__$169 = mix__$169 ? [].concat(mix__$169, ctx__$148.mix) : ctx__$148.mix);
                if (mix__$169) {
                    var visited__$172 = {}, visitedKey__$173 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$172[visitedKey__$173(vBlock__$155, $$elem)] = true;
                    __$ctx.isArray(mix__$169) || (mix__$169 = [ mix__$169 ]);
                    for (var i__$174 = 0; i__$174 < mix__$169.length; i__$174++) {
                        var mixItem__$175 = mix__$169[i__$174], hasItem__$176 = mixItem__$175.block || mixItem__$175.elem, mixBlock__$177 = mixItem__$175.block || mixItem__$175._block || $$block, mixElem__$178 = mixItem__$175.elem || mixItem__$175._elem || $$elem;
                        hasItem__$176 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$147[hasItem__$176 ? "buildClasses" : "buildModsClasses"](mixBlock__$177, mixItem__$175.elem || mixItem__$175._elem || (mixItem__$175.block ? undefined : $$elem), mixItem__$175.elemMods || mixItem__$175.mods);
                        if (mixItem__$175.js) {
                            (jsParams__$159 || (jsParams__$159 = {}))[BEM_INTERNAL__$147.buildClass(mixBlock__$177, mixItem__$175.elem)] = mixItem__$175.js === true ? {} : mixItem__$175.js;
                            addJSInitClass__$168 || (addJSInitClass__$168 = mixBlock__$177 && !mixItem__$175.elem);
                        }
                        if (hasItem__$176 && !visited__$172[visitedKey__$173(mixBlock__$177, mixElem__$178)]) {
                            visited__$172[visitedKey__$173(mixBlock__$177, mixElem__$178)] = true;
                            var __$r__$180;
                            var __$l6__$181 = $$mode;
                            $$mode = "mix";
                            var __$l7__$182 = $$block;
                            $$block = mixBlock__$177;
                            var __$l8__$183 = $$elem;
                            $$elem = mixElem__$178;
                            __$r__$180 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$181;
                            $$block = __$l7__$182;
                            $$elem = __$l8__$183;
                            var nestedMix__$179 = __$r__$180;
                            if (nestedMix__$179) {
                                for (var j__$184 = 0; j__$184 < nestedMix__$179.length; j__$184++) {
                                    var nestedItem__$185 = nestedMix__$179[j__$184];
                                    if (!nestedItem__$185.block && !nestedItem__$185.elem || !visited__$172[visitedKey__$173(nestedItem__$185.block, nestedItem__$185.elem)]) {
                                        nestedItem__$185._block = mixBlock__$177;
                                        nestedItem__$185._elem = mixElem__$178;
                                        mix__$169.splice(i__$174 + 1, 0, nestedItem__$185);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$165 && (__$ctx._str += isBEM__$149 ? " " + cls__$165 : cls__$165);
            __$ctx._str += addJSInitClass__$168 ? ' i-bem"' : '"';
        }
        if (isBEM__$149 && jsParams__$159) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$159)) + '"';
        }
        var __$r__$187;
        var __$l9__$188 = $$mode;
        $$mode = "attrs";
        __$r__$187 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$188;
        var attrs__$186 = __$r__$187;
        attrs__$186 = __$ctx.extend(attrs__$186, ctx__$148.attrs);
        if (attrs__$186) {
            var name__$189, attr__$190;
            for (name__$189 in attrs__$186) {
                attr__$190 = attrs__$186[name__$189];
                if (typeof attr__$190 === "undefined") continue;
                __$ctx._str += " " + name__$189 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$190) ? attr__$190 : __$ctx.reapply(attr__$190)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$150)) {
        __$ctx._str += "/>";
    } else {
        tag__$150 && (__$ctx._str += ">");
        var __$r__$192;
        var __$l10__$193 = $$mode;
        $$mode = "content";
        __$r__$192 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$193;
        var content__$191 = __$r__$192;
        if (content__$191 || content__$191 === 0) {
            isBEM__$149 = vBlock__$155 || $$elem;
            var __$r__$194;
            var __$l11__$195 = $$mode;
            $$mode = "";
            var __$l12__$196 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$197 = __$ctx.position;
            __$ctx.position = isBEM__$149 ? 1 : __$ctx.position;
            var __$l14__$198 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$149 ? 1 : __$ctx._listLength;
            var __$l15__$199 = __$ctx.ctx;
            __$ctx.ctx = content__$191;
            __$r__$194 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$195;
            __$ctx._notNewList = __$l12__$196;
            __$ctx.position = __$l13__$197;
            __$ctx._listLength = __$l14__$198;
            __$ctx.ctx = __$l15__$199;
        }
        tag__$150 && (__$ctx._str += "</" + tag__$150 + ">");
    }
    res__$151 = __$ctx._str;
    __$r__$153 = undefined;
    __$ctx._str = __$l0__$154;
    __$ctx._buf.push(res__$151);
    return;
}

function __$b34(__$ctx, __$ref) {
    var ctx__$55 = __$ctx.ctx;
    return {
        name: ctx__$55.name,
        optionsMaxHeight: ctx__$55.optionsMaxHeight
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
    var ctx__$84 = __$ctx.ctx, attrs__$85 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$84.name,
        value: ctx__$84.val
    };
    ctx__$84.checked && (attrs__$85.checked = "checked");
    ctx__$84.disabled && (attrs__$85.disabled = "disabled");
    return attrs__$85;
}

function __$b47(__$ctx, __$ref) {
    var val__$51 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$51) ? val__$51 : JSON.stringify(val__$51),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b49(__$ctx, __$ref) {
    var ctx__$96 = __$ctx.ctx, attrs__$97 = {
        type: $$mods.type || "button",
        name: ctx__$96.name,
        value: ctx__$96.val
    };
    $$mods.disabled && (attrs__$97.disabled = "disabled");
    return __$ctx.extend(function __$lb__$98() {
        var __$r__$99;
        var __$l0__$100 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
        __$r__$99 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$100;
        return __$r__$99;
    }(), attrs__$97);
}

function __$b50(__$ctx, __$ref) {
    var ctx__$101 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$101.tabIndex,
        id: ctx__$101.id,
        title: ctx__$101.title
    };
}

function __$b54(__$ctx, __$ref) {
    var attrs__$24 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$24.tabindex = 0);
    return attrs__$24;
}

function __$b57(__$ctx, __$ref) {
    var input__$74 = __$ctx._input, attrs__$75 = {
        id: input__$74.id,
        name: input__$74.name,
        value: input__$74.val,
        maxlength: input__$74.maxLength,
        tabindex: input__$74.tabIndex,
        placeholder: input__$74.placeholder
    };
    input__$74.autocomplete === false && (attrs__$75.autocomplete = "off");
    $$mods.disabled && (attrs__$75.disabled = "disabled");
    return attrs__$75;
}

function __$b59(__$ctx, __$ref) {
    var attrs__$108 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$109 = __$ctx.ctx;
    attrs__$108.name = ctx__$109.name;
    attrs__$108.value = ctx__$109.val;
    ctx__$109.checked && (attrs__$108.checked = "checked");
    ctx__$109.disabled && (attrs__$108.disabled = "disabled");
    return attrs__$108;
}

function __$b103(__$ctx, __$ref) {
    var __$r__$201;
    var __$l0__$202 = $$mode;
    $$mode = "";
    var __$l1__$203 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$205;
    var __$l2__$206 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
    __$r__$205 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$206;
    __$r__$201 = __$r__$205;
    $$mode = __$l0__$202;
    __$ctx.ctx = __$l1__$203;
    return;
}

function __$b104(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$207 = __$ctx.ctx;
    if (ctx__$207 && ctx__$207 !== true || ctx__$207 === 0) {
        __$ctx._str += ctx__$207 + "";
    }
    return;
}

function __$b105(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b106(__$ctx, __$ref) {
    var ctx__$208 = __$ctx.ctx, len__$209 = ctx__$208.length, i__$210 = 0, prevPos__$211 = __$ctx.position, prevNotNewList__$212 = __$ctx._notNewList;
    if (prevNotNewList__$212) {
        __$ctx._listLength += len__$209 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$209;
    }
    __$ctx._notNewList = true;
    while (i__$210 < len__$209) (function __$lb__$213() {
        var __$r__$214;
        var __$l0__$215 = __$ctx.ctx;
        __$ctx.ctx = ctx__$208[i__$210++];
        __$r__$214 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$215;
        return __$r__$214;
    })();
    prevNotNewList__$212 || (__$ctx.position = prevPos__$211);
    return;
}

function __$b107(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$216 = __$ctx.ctx.block, vElem__$217 = __$ctx.ctx.elem, block__$218 = __$ctx._currBlock || $$block;
    var __$r__$220;
    var __$l0__$221 = $$mode;
    $$mode = "default";
    var __$l1__$222 = $$block;
    $$block = vBlock__$216 || (vElem__$217 ? block__$218 : undefined);
    var __$l2__$223 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$216 || vElem__$217 ? undefined : block__$218;
    var __$l3__$224 = $$elem;
    $$elem = vElem__$217;
    var __$l4__$225 = $$mods;
    $$mods = vBlock__$216 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$226 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$220 = undefined;
    $$mode = __$l0__$221;
    $$block = __$l1__$222;
    __$ctx._currBlock = __$l2__$223;
    $$elem = __$l3__$224;
    $$mods = __$l4__$225;
    $$elemMods = __$l5__$226;
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
                return [ function __$lb__$114() {
                    var __$r__$115;
                    var __$l0__$116 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$115 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$116;
                    return __$r__$115;
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
            }, function __$lb__$133() {
                var __$r__$134;
                var __$l0__$135 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                __$r__$134 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$135;
                return __$r__$134;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 524288) === 0) {
            return [ function __$lb__$136() {
                var __$r__$137;
                var __$l0__$138 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 524288;
                __$r__$137 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$138;
                return __$r__$137;
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
                var __$r = __$ctx.extend(function __$lb__$52() {
                    var __$r__$53;
                    var __$l0__$54 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$53 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$54;
                    return __$r__$53;
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
                var __$r = __$ctx.extend(function __$lb__$91() {
                    var __$r__$92;
                    var __$l0__$93 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$92 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$93;
                    return __$r__$92;
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
                var __$r = __$ctx.extend(function __$lb__$71() {
                    var __$r__$72;
                    var __$l0__$73 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                    __$r__$72 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$73;
                    return __$r__$72;
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