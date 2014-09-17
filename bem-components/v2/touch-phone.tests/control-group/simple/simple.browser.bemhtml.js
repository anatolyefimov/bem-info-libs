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
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 262144) === 0) {
                var __$r = __$b68(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b104(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b105(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b106(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b107(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b108(__$ctx, __$ref);
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
    var ctx__$86 = __$ctx.ctx, mods__$87 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$87.mode === "radio-check" ? "check" : "radio",
            checked: mods__$87.checked,
            disabled: mods__$87.disabled,
            theme: mods__$87.theme,
            size: mods__$87.size
        },
        title: ctx__$86.title,
        content: [ ctx__$86.icon, typeof ctx__$86.text !== "undefined" ? {
            elem: "text",
            content: ctx__$86.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$87.checked,
        disabled: mods__$87.disabled,
        name: ctx__$86.name,
        val: ctx__$86.val
    } ];
}

function __$b2(__$ctx, __$ref) {
    var ctx__$90 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$90.name,
            val: ctx__$90.val
        }
    }, ctx__$90.text ];
}

function __$b7(__$ctx, __$ref) {
    var ctx__$98 = __$ctx.ctx, content__$99 = [ ctx__$98.icon ];
    "text" in ctx__$98 && content__$99.push({
        elem: "text",
        content: ctx__$98.text
    });
    return content__$99;
}

function __$b11(__$ctx, __$ref) {
    var mods__$91 = $$mods, ctx__$92 = __$ctx.ctx;
    return (ctx__$92.options || []).map(function(option, i) {
        return [ !!i && !mods__$91.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$91.type,
                mode: mods__$91.mode,
                theme: mods__$91.theme,
                size: mods__$91.size,
                checked: option.checked,
                disabled: option.disabled || mods__$91.disabled
            },
            name: ctx__$92.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b12(__$ctx, __$ref) {
    var ctx__$93 = __$ctx.ctx, mods__$94 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$94.checked,
            disabled: mods__$94.disabled,
            theme: mods__$94.theme,
            size: mods__$94.size
        },
        title: ctx__$93.title,
        content: [ ctx__$93.icon, typeof ctx__$93.text !== "undefined" ? {
            elem: "text",
            content: ctx__$93.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$94.checked,
        disabled: mods__$94.disabled,
        name: ctx__$93.name,
        val: ctx__$93.val
    } ];
}

function __$b13(__$ctx, __$ref) {
    var ctx__$114 = __$ctx.ctx, mods__$115 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$115.checked,
            disabled: mods__$115.disabled,
            name: ctx__$114.name,
            val: ctx__$114.val
        }
    }, ctx__$114.text ];
}

function __$b14(__$ctx, __$ref) {
    var mods__$116 = $$mods, ctx__$117 = __$ctx.ctx;
    return (ctx__$117.options || []).map(function(option, i) {
        return [ !!i && !mods__$116.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$116.type,
                theme: mods__$116.theme,
                size: mods__$116.size,
                checked: option.checked,
                disabled: option.disabled || mods__$116.disabled
            },
            name: ctx__$117.name,
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
    var __$r__$107;
    var __$l0__$108 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$110;
    var __$l1__$111 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
    __$r__$110 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$111;
    __$r__$107 = __$r__$110;
    __$ctx._button = __$l0__$108;
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
    var __$r__$81;
    var __$l0__$82 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$84;
    var __$l1__$85 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$84 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$85;
    __$r__$81 = __$r__$84;
    __$ctx._input = __$l0__$82;
    return;
}

function __$b28(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$132 = __$ctx.ctx;
    var __$r__$134;
    var __$l0__$135 = $$mode;
    $$mode = "";
    var __$l1__$136 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$132.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$132.title
            }, {
                block: "ua"
            }, ctx__$132.head, ctx__$132.styles, ctx__$132.favicon ? {
                elem: "favicon",
                url: ctx__$132.favicon
            } : "" ]
        }, ctx__$132 ]
    } ];
    var __$r__$138;
    var __$l2__$139 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
    __$r__$138 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$139;
    __$r__$134 = __$r__$138;
    $$mode = __$l0__$135;
    __$ctx.ctx = __$l1__$136;
    __$ctx._defPageApplied = false;
    return;
}

function __$b29(__$ctx, __$ref) {
    var BEM_INTERNAL__$140 = __$ctx.BEM.INTERNAL, ctx__$141 = __$ctx.ctx, isBEM__$142, tag__$143, res__$144;
    var __$r__$146;
    var __$l0__$147 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$148 = $$block;
    var __$r__$150;
    var __$l1__$151 = $$mode;
    $$mode = "tag";
    __$r__$150 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$151;
    tag__$143 = __$r__$150;
    typeof tag__$143 !== "undefined" || (tag__$143 = ctx__$141.tag);
    typeof tag__$143 !== "undefined" || (tag__$143 = "div");
    if (tag__$143) {
        var jsParams__$152, js__$153;
        if (vBlock__$148 && ctx__$141.js !== false) {
            var __$r__$154;
            var __$l2__$155 = $$mode;
            $$mode = "js";
            __$r__$154 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$155;
            js__$153 = __$r__$154;
            js__$153 = js__$153 ? __$ctx.extend(ctx__$141.js, js__$153 === true ? {} : js__$153) : ctx__$141.js === true ? {} : ctx__$141.js;
            js__$153 && ((jsParams__$152 = {})[BEM_INTERNAL__$140.buildClass(vBlock__$148, ctx__$141.elem)] = js__$153);
        }
        __$ctx._str += "<" + tag__$143;
        var __$r__$156;
        var __$l3__$157 = $$mode;
        $$mode = "bem";
        __$r__$156 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$157;
        isBEM__$142 = __$r__$156;
        typeof isBEM__$142 !== "undefined" || (isBEM__$142 = typeof ctx__$141.bem !== "undefined" ? ctx__$141.bem : ctx__$141.block || ctx__$141.elem);
        var __$r__$159;
        var __$l4__$160 = $$mode;
        $$mode = "cls";
        __$r__$159 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$160;
        var cls__$158 = __$r__$159;
        cls__$158 || (cls__$158 = ctx__$141.cls);
        var addJSInitClass__$161 = ctx__$141.block && jsParams__$152;
        if (isBEM__$142 || cls__$158) {
            __$ctx._str += ' class="';
            if (isBEM__$142) {
                __$ctx._str += BEM_INTERNAL__$140.buildClasses(vBlock__$148, ctx__$141.elem, ctx__$141.elemMods || ctx__$141.mods);
                var __$r__$163;
                var __$l5__$164 = $$mode;
                $$mode = "mix";
                __$r__$163 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$164;
                var mix__$162 = __$r__$163;
                ctx__$141.mix && (mix__$162 = mix__$162 ? [].concat(mix__$162, ctx__$141.mix) : ctx__$141.mix);
                if (mix__$162) {
                    var visited__$165 = {}, visitedKey__$166 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$165[visitedKey__$166(vBlock__$148, $$elem)] = true;
                    __$ctx.isArray(mix__$162) || (mix__$162 = [ mix__$162 ]);
                    for (var i__$167 = 0; i__$167 < mix__$162.length; i__$167++) {
                        var mixItem__$168 = mix__$162[i__$167], hasItem__$169 = mixItem__$168.block || mixItem__$168.elem, mixBlock__$170 = mixItem__$168.block || mixItem__$168._block || $$block, mixElem__$171 = mixItem__$168.elem || mixItem__$168._elem || $$elem;
                        hasItem__$169 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$140[hasItem__$169 ? "buildClasses" : "buildModsClasses"](mixBlock__$170, mixItem__$168.elem || mixItem__$168._elem || (mixItem__$168.block ? undefined : $$elem), mixItem__$168.elemMods || mixItem__$168.mods);
                        if (mixItem__$168.js) {
                            (jsParams__$152 || (jsParams__$152 = {}))[BEM_INTERNAL__$140.buildClass(mixBlock__$170, mixItem__$168.elem)] = mixItem__$168.js === true ? {} : mixItem__$168.js;
                            addJSInitClass__$161 || (addJSInitClass__$161 = mixBlock__$170 && !mixItem__$168.elem);
                        }
                        if (hasItem__$169 && !visited__$165[visitedKey__$166(mixBlock__$170, mixElem__$171)]) {
                            visited__$165[visitedKey__$166(mixBlock__$170, mixElem__$171)] = true;
                            var __$r__$173;
                            var __$l6__$174 = $$mode;
                            $$mode = "mix";
                            var __$l7__$175 = $$block;
                            $$block = mixBlock__$170;
                            var __$l8__$176 = $$elem;
                            $$elem = mixElem__$171;
                            __$r__$173 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$174;
                            $$block = __$l7__$175;
                            $$elem = __$l8__$176;
                            var nestedMix__$172 = __$r__$173;
                            if (nestedMix__$172) {
                                for (var j__$177 = 0; j__$177 < nestedMix__$172.length; j__$177++) {
                                    var nestedItem__$178 = nestedMix__$172[j__$177];
                                    if (!nestedItem__$178.block && !nestedItem__$178.elem || !visited__$165[visitedKey__$166(nestedItem__$178.block, nestedItem__$178.elem)]) {
                                        nestedItem__$178._block = mixBlock__$170;
                                        nestedItem__$178._elem = mixElem__$171;
                                        mix__$162.splice(i__$167 + 1, 0, nestedItem__$178);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$158 && (__$ctx._str += isBEM__$142 ? " " + cls__$158 : cls__$158);
            __$ctx._str += addJSInitClass__$161 ? ' i-bem"' : '"';
        }
        if (isBEM__$142 && jsParams__$152) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$152)) + '"';
        }
        var __$r__$180;
        var __$l9__$181 = $$mode;
        $$mode = "attrs";
        __$r__$180 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$181;
        var attrs__$179 = __$r__$180;
        attrs__$179 = __$ctx.extend(attrs__$179, ctx__$141.attrs);
        if (attrs__$179) {
            var name__$182, attr__$183;
            for (name__$182 in attrs__$179) {
                attr__$183 = attrs__$179[name__$182];
                if (typeof attr__$183 === "undefined") continue;
                __$ctx._str += " " + name__$182 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$183) ? attr__$183 : __$ctx.reapply(attr__$183)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$143)) {
        __$ctx._str += "/>";
    } else {
        tag__$143 && (__$ctx._str += ">");
        var __$r__$185;
        var __$l10__$186 = $$mode;
        $$mode = "content";
        __$r__$185 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$186;
        var content__$184 = __$r__$185;
        if (content__$184 || content__$184 === 0) {
            isBEM__$142 = vBlock__$148 || $$elem;
            var __$r__$187;
            var __$l11__$188 = $$mode;
            $$mode = "";
            var __$l12__$189 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$190 = __$ctx.position;
            __$ctx.position = isBEM__$142 ? 1 : __$ctx.position;
            var __$l14__$191 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$142 ? 1 : __$ctx._listLength;
            var __$l15__$192 = __$ctx.ctx;
            __$ctx.ctx = content__$184;
            __$r__$187 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$188;
            __$ctx._notNewList = __$l12__$189;
            __$ctx.position = __$l13__$190;
            __$ctx._listLength = __$l14__$191;
            __$ctx.ctx = __$l15__$192;
        }
        tag__$143 && (__$ctx._str += "</" + tag__$143 + ">");
    }
    res__$144 = __$ctx._str;
    __$r__$146 = undefined;
    __$ctx._str = __$l0__$147;
    __$ctx._buf.push(res__$144);
    return;
}

function __$b32(__$ctx, __$ref) {
    var ctx__$56 = __$ctx.ctx;
    return {
        name: ctx__$56.name,
        optionsMaxHeight: ctx__$56.optionsMaxHeight
    };
}

function __$b35(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx;
    return {
        mainOffset: ctx__$11.mainOffset,
        secondaryOffset: ctx__$11.secondaryOffset,
        viewportOffset: ctx__$11.viewportOffset,
        directions: ctx__$11.directions,
        zIndexGroupLevel: ctx__$11.zIndexGroupLevel
    };
}

function __$b45(__$ctx, __$ref) {
    var ctx__$88 = __$ctx.ctx, attrs__$89 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$88.name,
        value: ctx__$88.val
    };
    ctx__$88.checked && (attrs__$89.checked = "checked");
    ctx__$88.disabled && (attrs__$89.disabled = "disabled");
    return attrs__$89;
}

function __$b46(__$ctx, __$ref) {
    var val__$52 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$52) ? val__$52 : JSON.stringify(val__$52),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b48(__$ctx, __$ref) {
    var ctx__$100 = __$ctx.ctx, attrs__$101 = {
        type: $$mods.type || "button",
        name: ctx__$100.name,
        value: ctx__$100.val
    };
    $$mods.disabled && (attrs__$101.disabled = "disabled");
    return __$ctx.extend(function __$lb__$102() {
        var __$r__$103;
        var __$l0__$104 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32768;
        __$r__$103 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$104;
        return __$r__$103;
    }(), attrs__$101);
}

function __$b49(__$ctx, __$ref) {
    var ctx__$105 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$105.tabIndex,
        id: ctx__$105.id,
        title: ctx__$105.title
    };
}

function __$b53(__$ctx, __$ref) {
    var attrs__$25 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$25.tabindex = 0);
    return attrs__$25;
}

function __$b57(__$ctx, __$ref) {
    var input__$78 = __$ctx._input, attrs__$79 = {
        id: input__$78.id,
        name: input__$78.name,
        value: input__$78.val,
        maxlength: input__$78.maxLength,
        tabindex: input__$78.tabIndex,
        placeholder: input__$78.placeholder
    };
    input__$78.autocomplete === false && (attrs__$79.autocomplete = "off");
    $$mods.disabled && (attrs__$79.disabled = "disabled");
    return attrs__$79;
}

function __$b59(__$ctx, __$ref) {
    var attrs__$112 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$113 = __$ctx.ctx;
    attrs__$112.name = ctx__$113.name;
    attrs__$112.value = ctx__$113.val;
    ctx__$113.checked && (attrs__$112.checked = "checked");
    ctx__$113.disabled && (attrs__$112.disabled = "disabled");
    return attrs__$112;
}

function __$b68(__$ctx, __$ref) {
    var mix__$121 = function __$lb__$122() {
        var __$r__$123;
        var __$l0__$124 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 262144;
        __$r__$123 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$124;
        return __$r__$123;
    }(), uaMix__$125 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$121 ? uaMix__$125.concat(mix__$121) : uaMix__$125;
}

function __$b104(__$ctx, __$ref) {
    var __$r__$194;
    var __$l0__$195 = $$mode;
    $$mode = "";
    var __$l1__$196 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$198;
    var __$l2__$199 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$198 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$199;
    __$r__$194 = __$r__$198;
    $$mode = __$l0__$195;
    __$ctx.ctx = __$l1__$196;
    return;
}

function __$b105(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$200 = __$ctx.ctx;
    if (ctx__$200 && ctx__$200 !== true || ctx__$200 === 0) {
        __$ctx._str += ctx__$200 + "";
    }
    return;
}

function __$b106(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b107(__$ctx, __$ref) {
    var ctx__$201 = __$ctx.ctx, len__$202 = ctx__$201.length, i__$203 = 0, prevPos__$204 = __$ctx.position, prevNotNewList__$205 = __$ctx._notNewList;
    if (prevNotNewList__$205) {
        __$ctx._listLength += len__$202 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$202;
    }
    __$ctx._notNewList = true;
    while (i__$203 < len__$202) (function __$lb__$206() {
        var __$r__$207;
        var __$l0__$208 = __$ctx.ctx;
        __$ctx.ctx = ctx__$201[i__$203++];
        __$r__$207 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$208;
        return __$r__$207;
    })();
    prevNotNewList__$205 || (__$ctx.position = prevPos__$204);
    return;
}

function __$b108(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$209 = __$ctx.ctx.block, vElem__$210 = __$ctx.ctx.elem, block__$211 = __$ctx._currBlock || $$block;
    var __$r__$213;
    var __$l0__$214 = $$mode;
    $$mode = "default";
    var __$l1__$215 = $$block;
    $$block = vBlock__$209 || (vElem__$210 ? block__$211 : undefined);
    var __$l2__$216 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$209 || vElem__$210 ? undefined : block__$211;
    var __$l3__$217 = $$elem;
    $$elem = vElem__$210;
    var __$l4__$218 = $$mods;
    $$mods = vBlock__$209 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$219 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$213 = undefined;
    $$mode = __$l0__$214;
    $$block = __$l1__$215;
    __$ctx._currBlock = __$l2__$216;
    $$elem = __$l3__$217;
    $$mods = __$l4__$218;
    $$elemMods = __$l5__$219;
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
            if ((__$ctx.__$a0 & 131072) === 0) {
                return [ function __$lb__$118() {
                    var __$r__$119;
                    var __$l0__$120 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                    __$r__$119 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$120;
                    return __$r__$119;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 524288) === 0) {
            return [ function __$lb__$126() {
                var __$r__$127;
                var __$l0__$128 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 524288;
                __$r__$127 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$128;
                return __$r__$127;
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
        if (!$$elem && (__$ctx.__$a0 & 1048576) === 0) {
            return [ function __$lb__$129() {
                var __$r__$130;
                var __$l0__$131 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$130 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$131;
                return __$r__$130;
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
        if (!$$elem && (__$ctx.__$a0 & 65536) === 0) {
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
        if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b27(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 2097152) === 0) {
            var __$r = __$b28(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b29(__$ctx, __$ref);
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
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$ctx.extend(function __$lb__$95() {
                    var __$r__$96;
                    var __$l0__$97 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
                    __$r__$96 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$97;
                    return __$r__$96;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b35(__$ctx, __$ref);
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
    } else if (__$t === "ua") {
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
            var __$r = __$b45(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b46(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b48(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b49(__$ctx, __$ref);
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
            var __$r = __$b53(__$ctx, __$ref);
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
            if ((__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend({
                    autocomplete: "off",
                    autocorrect: "off",
                    autocapitalize: "off",
                    spellcheck: "false"
                }, function __$lb__$75() {
                    var __$r__$76;
                    var __$l0__$77 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$76 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$77;
                    return __$r__$76;
                }());
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