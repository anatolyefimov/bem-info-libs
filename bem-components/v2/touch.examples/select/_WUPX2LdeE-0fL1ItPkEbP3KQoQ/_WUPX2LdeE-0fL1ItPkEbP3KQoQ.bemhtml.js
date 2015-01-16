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
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32768) === 0) {
                    return [ function __$lb__$104() {
                        var __$r__$105;
                        var __$l0__$106 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                        __$r__$105 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$106;
                        return __$r__$105;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 131072) === 0) {
                return [ function __$lb__$112() {
                    var __$r__$113;
                    var __$l0__$114 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                    __$r__$113 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$114;
                    return __$r__$113;
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
            if (!$$elem && (__$ctx.__$a0 & 262144) === 0) {
                return [ function __$lb__$115() {
                    var __$r__$116;
                    var __$l0__$117 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$116 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$117;
                    return __$r__$116;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$r = __$g3(__$ctx, __$ref);
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
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 65536) === 0) {
                var __$r = __$b62(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1048576) === 0) {
            var __$r = __$b73(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b74(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b75(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b76(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b77(__$ctx, __$ref);
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

function __$b8(__$ctx, __$ref) {
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

function __$b9(__$ctx, __$ref) {
    var ctx__$66 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$66.tabIndex,
        id: ctx__$66.id,
        title: ctx__$66.title
    };
}

function __$b29(__$ctx, __$ref) {
    (__$ctx._firstItem.mods = __$ctx._firstItem.mods || {}).checked = true;
    var __$r__$3;
    var __$l0__$4 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$3 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$4;
    return;
}

function __$b30(__$ctx, __$ref) {
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

function __$b31(__$ctx, __$ref) {
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

function __$b32(__$ctx, __$ref) {
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

function __$b33(__$ctx, __$ref) {
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
            view: mods__$73.view,
            focused: mods__$73.focused,
            disabled: mods__$73.disabled,
            checked: mods__$73.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        tabIndex: __$ctx._select.tabIndex,
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
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$82;
    __$r__$75 = __$r__$81;
    $$mode = __$l0__$76;
    __$ctx.ctx = __$l1__$77;
    return;
}

function __$b34(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$87 = __$ctx.ctx, isValDef__$88 = typeof ctx__$87.val !== "undefined", isModeCheck__$89 = $$mods.mode === "check", firstOption__$90, checkedOptions__$91 = [], containsVal__$92 = function(val) {
        return isValDef__$88 && (isModeCheck__$89 ? ctx__$87.val.indexOf(val) > -1 : ctx__$87.val === val);
    }, iterateOptions__$93 = function(content) {
        var i__$94 = 0, option__$95;
        while (option__$95 = content[i__$94++]) {
            if (option__$95.group) {
                iterateOptions__$93(option__$95.group);
            } else {
                firstOption__$90 || (firstOption__$90 = option__$95);
                if (containsVal__$92(option__$95.val)) {
                    option__$95.checked = true;
                    checkedOptions__$91.push(option__$95);
                }
            }
        }
    };
    iterateOptions__$93(ctx__$87.options);
    var __$r__$97;
    var __$l0__$98 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$99 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$91;
    var __$l2__$100 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$90;
    var __$r__$102;
    var __$l3__$103 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$102 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$103;
    __$r__$97 = __$r__$102;
    __$ctx._select = __$l0__$98;
    __$ctx._checkedOptions = __$l1__$99;
    __$ctx._firstOption = __$l2__$100;
    return;
}

function __$b35(__$ctx, __$ref) {
    var __$r__$68;
    var __$l0__$69 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$71;
    var __$l1__$72 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$71 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$72;
    __$r__$68 = __$r__$71;
    __$ctx._button = __$l0__$69;
    return;
}

function __$b36(__$ctx, __$ref) {
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

function __$b37(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$118 = __$ctx.ctx;
    var __$r__$120;
    var __$l0__$121 = $$mode;
    $$mode = "";
    var __$l1__$122 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$118.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$118.title
            }, {
                block: "ua"
            }, ctx__$118.head, ctx__$118.styles, ctx__$118.favicon ? {
                elem: "favicon",
                url: ctx__$118.favicon
            } : "" ]
        }, ctx__$118 ]
    } ];
    var __$r__$124;
    var __$l2__$125 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$124 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$125;
    __$r__$120 = __$r__$124;
    $$mode = __$l0__$121;
    __$ctx.ctx = __$l1__$122;
    __$ctx._defPageApplied = false;
    return;
}

function __$b38(__$ctx, __$ref) {
    var BEM_INTERNAL__$126 = __$ctx.BEM.INTERNAL, ctx__$127 = __$ctx.ctx, isBEM__$128, tag__$129, res__$130;
    var __$r__$132;
    var __$l0__$133 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$134 = $$block;
    var __$r__$136;
    var __$l1__$137 = $$mode;
    $$mode = "tag";
    __$r__$136 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$137;
    tag__$129 = __$r__$136;
    typeof tag__$129 !== "undefined" || (tag__$129 = ctx__$127.tag);
    typeof tag__$129 !== "undefined" || (tag__$129 = "div");
    if (tag__$129) {
        var jsParams__$138, js__$139;
        if (vBlock__$134 && ctx__$127.js !== false) {
            var __$r__$140;
            var __$l2__$141 = $$mode;
            $$mode = "js";
            __$r__$140 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$141;
            js__$139 = __$r__$140;
            js__$139 = js__$139 ? __$ctx.extend(ctx__$127.js, js__$139 === true ? {} : js__$139) : ctx__$127.js === true ? {} : ctx__$127.js;
            js__$139 && ((jsParams__$138 = {})[BEM_INTERNAL__$126.buildClass(vBlock__$134, ctx__$127.elem)] = js__$139);
        }
        __$ctx._str += "<" + tag__$129;
        var __$r__$142;
        var __$l3__$143 = $$mode;
        $$mode = "bem";
        __$r__$142 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$143;
        isBEM__$128 = __$r__$142;
        typeof isBEM__$128 !== "undefined" || (isBEM__$128 = typeof ctx__$127.bem !== "undefined" ? ctx__$127.bem : ctx__$127.block || ctx__$127.elem);
        var __$r__$145;
        var __$l4__$146 = $$mode;
        $$mode = "cls";
        __$r__$145 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$146;
        var cls__$144 = __$r__$145;
        cls__$144 || (cls__$144 = ctx__$127.cls);
        var addJSInitClass__$147 = ctx__$127.block && jsParams__$138 && !ctx__$127.elem;
        if (isBEM__$128 || cls__$144) {
            __$ctx._str += ' class="';
            if (isBEM__$128) {
                __$ctx._str += BEM_INTERNAL__$126.buildClasses(vBlock__$134, ctx__$127.elem, ctx__$127.elemMods || ctx__$127.mods);
                var __$r__$149;
                var __$l5__$150 = $$mode;
                $$mode = "mix";
                __$r__$149 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$150;
                var mix__$148 = __$r__$149;
                ctx__$127.mix && (mix__$148 = mix__$148 ? [].concat(mix__$148, ctx__$127.mix) : ctx__$127.mix);
                if (mix__$148) {
                    var visited__$151 = {}, visitedKey__$152 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$151[visitedKey__$152(vBlock__$134, $$elem)] = true;
                    __$ctx.isArray(mix__$148) || (mix__$148 = [ mix__$148 ]);
                    for (var i__$153 = 0; i__$153 < mix__$148.length; i__$153++) {
                        var mixItem__$154 = mix__$148[i__$153], hasItem__$155 = mixItem__$154.block || mixItem__$154.elem, mixBlock__$156 = mixItem__$154.block || mixItem__$154._block || $$block, mixElem__$157 = mixItem__$154.elem || mixItem__$154._elem || $$elem;
                        hasItem__$155 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$126[hasItem__$155 ? "buildClasses" : "buildModsClasses"](mixBlock__$156, mixItem__$154.elem || mixItem__$154._elem || (mixItem__$154.block ? undefined : $$elem), mixItem__$154.elemMods || mixItem__$154.mods);
                        if (mixItem__$154.js) {
                            (jsParams__$138 || (jsParams__$138 = {}))[BEM_INTERNAL__$126.buildClass(mixBlock__$156, mixItem__$154.elem)] = mixItem__$154.js === true ? {} : mixItem__$154.js;
                            addJSInitClass__$147 || (addJSInitClass__$147 = mixBlock__$156 && !mixItem__$154.elem);
                        }
                        if (hasItem__$155 && !visited__$151[visitedKey__$152(mixBlock__$156, mixElem__$157)]) {
                            visited__$151[visitedKey__$152(mixBlock__$156, mixElem__$157)] = true;
                            var __$r__$159;
                            var __$l6__$160 = $$mode;
                            $$mode = "mix";
                            var __$l7__$161 = $$block;
                            $$block = mixBlock__$156;
                            var __$l8__$162 = $$elem;
                            $$elem = mixElem__$157;
                            __$r__$159 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$160;
                            $$block = __$l7__$161;
                            $$elem = __$l8__$162;
                            var nestedMix__$158 = __$r__$159;
                            if (nestedMix__$158) {
                                for (var j__$163 = 0; j__$163 < nestedMix__$158.length; j__$163++) {
                                    var nestedItem__$164 = nestedMix__$158[j__$163];
                                    if (!nestedItem__$164.block && !nestedItem__$164.elem || !visited__$151[visitedKey__$152(nestedItem__$164.block, nestedItem__$164.elem)]) {
                                        nestedItem__$164._block = mixBlock__$156;
                                        nestedItem__$164._elem = mixElem__$157;
                                        mix__$148.splice(i__$153 + 1, 0, nestedItem__$164);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$144 && (__$ctx._str += isBEM__$128 ? " " + cls__$144 : cls__$144);
            __$ctx._str += addJSInitClass__$147 ? ' i-bem"' : '"';
        }
        if (isBEM__$128 && jsParams__$138) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$138)) + '"';
        }
        var __$r__$166;
        var __$l9__$167 = $$mode;
        $$mode = "attrs";
        __$r__$166 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$167;
        var attrs__$165 = __$r__$166;
        attrs__$165 = __$ctx.extend(attrs__$165, ctx__$127.attrs);
        if (attrs__$165) {
            var name__$168, attr__$169;
            for (name__$168 in attrs__$165) {
                attr__$169 = attrs__$165[name__$168];
                if (typeof attr__$169 === "undefined") continue;
                __$ctx._str += " " + name__$168 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$169) ? attr__$169 : __$ctx.reapply(attr__$169)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$129)) {
        __$ctx._str += "/>";
    } else {
        tag__$129 && (__$ctx._str += ">");
        var __$r__$171;
        var __$l10__$172 = $$mode;
        $$mode = "content";
        __$r__$171 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$172;
        var content__$170 = __$r__$171;
        if (content__$170 || content__$170 === 0) {
            isBEM__$128 = vBlock__$134 || $$elem;
            var __$r__$173;
            var __$l11__$174 = $$mode;
            $$mode = "";
            var __$l12__$175 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$176 = __$ctx.position;
            __$ctx.position = isBEM__$128 ? 1 : __$ctx.position;
            var __$l14__$177 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$128 ? 1 : __$ctx._listLength;
            var __$l15__$178 = __$ctx.ctx;
            __$ctx.ctx = content__$170;
            __$r__$173 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$174;
            __$ctx._notNewList = __$l12__$175;
            __$ctx.position = __$l13__$176;
            __$ctx._listLength = __$l14__$177;
            __$ctx.ctx = __$l15__$178;
        }
        tag__$129 && (__$ctx._str += "</" + tag__$129 + ">");
    }
    res__$130 = __$ctx._str;
    __$r__$132 = undefined;
    __$ctx._str = __$l0__$133;
    __$ctx._buf.push(res__$130);
    return;
}

function __$b44(__$ctx, __$ref) {
    var ctx__$59 = __$ctx.ctx, content__$60 = [ ctx__$59.icon ];
    "text" in ctx__$59 && content__$60.push({
        elem: "text",
        content: ctx__$59.text
    });
    return content__$60;
}

function __$b53(__$ctx, __$ref) {
    var ctx__$86 = __$ctx.ctx;
    return {
        name: ctx__$86.name,
        optionsMaxHeight: ctx__$86.optionsMaxHeight
    };
}

function __$b56(__$ctx, __$ref) {
    var ctx__$16 = __$ctx.ctx;
    return {
        mainOffset: ctx__$16.mainOffset,
        secondaryOffset: ctx__$16.secondaryOffset,
        viewportOffset: ctx__$16.viewportOffset,
        directions: ctx__$16.directions,
        zIndexGroupLevel: ctx__$16.zIndexGroupLevel
    };
}

function __$b62(__$ctx, __$ref) {
    var mix__$107 = function __$lb__$108() {
        var __$r__$109;
        var __$l0__$110 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 65536;
        __$r__$109 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$110;
        return __$r__$109;
    }(), uaMix__$111 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$107 ? uaMix__$111.concat(mix__$107) : uaMix__$111;
}

function __$b73(__$ctx, __$ref) {
    var __$r__$180;
    var __$l0__$181 = $$mode;
    $$mode = "";
    var __$l1__$182 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$184;
    var __$l2__$185 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$184 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$185;
    __$r__$180 = __$r__$184;
    $$mode = __$l0__$181;
    __$ctx.ctx = __$l1__$182;
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$186 = __$ctx.ctx;
    if (ctx__$186 && ctx__$186 !== true || ctx__$186 === 0) {
        __$ctx._str += ctx__$186 + "";
    }
    return;
}

function __$b75(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b76(__$ctx, __$ref) {
    var ctx__$187 = __$ctx.ctx, len__$188 = ctx__$187.length, i__$189 = 0, prevPos__$190 = __$ctx.position, prevNotNewList__$191 = __$ctx._notNewList;
    if (prevNotNewList__$191) {
        __$ctx._listLength += len__$188 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$188;
    }
    __$ctx._notNewList = true;
    while (i__$189 < len__$188) (function __$lb__$192() {
        var __$r__$193;
        var __$l0__$194 = __$ctx.ctx;
        __$ctx.ctx = ctx__$187[i__$189++];
        __$r__$193 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$194;
        return __$r__$193;
    })();
    prevNotNewList__$191 || (__$ctx.position = prevPos__$190);
    return;
}

function __$b77(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$195 = __$ctx.ctx.block, vElem__$196 = __$ctx.ctx.elem, block__$197 = __$ctx._currBlock || $$block;
    var __$r__$199;
    var __$l0__$200 = $$mode;
    $$mode = "default";
    var __$l1__$201 = $$block;
    $$block = vBlock__$195 || (vElem__$196 ? block__$197 : undefined);
    var __$l2__$202 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$195 || vElem__$196 ? undefined : block__$197;
    var __$l3__$203 = $$elem;
    $$elem = vElem__$196;
    var __$l4__$204 = $$mods;
    $$mods = vBlock__$195 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$205 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$199 = undefined;
    $$mode = __$l0__$200;
    $$block = __$l1__$201;
    __$ctx._currBlock = __$l2__$202;
    $$elem = __$l3__$203;
    $$mods = __$l4__$204;
    $$elemMods = __$l5__$205;
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
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 1024) === 0) {
                var __$r = __$b8(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
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
    if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && __$ctx._firstItem && __$ctx._checkedItems && !__$ctx._checkedItems.length && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b29(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b31(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "menu") {
            if ((__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if ((__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 2048) === 0) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 524288) === 0) {
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
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 8192) === 0) {
                var __$r = __$ctx.extend(function __$lb__$83() {
                    var __$r__$84;
                    var __$l0__$85 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$84 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$85;
                    return __$r__$84;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b53(__$ctx, __$ref);
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
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
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