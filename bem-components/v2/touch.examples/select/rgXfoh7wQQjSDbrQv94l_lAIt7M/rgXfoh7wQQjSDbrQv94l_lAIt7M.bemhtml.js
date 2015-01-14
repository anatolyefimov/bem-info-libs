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
    if (__$t === "default") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 8) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
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
                    }, function __$lb__$3() {
                        var __$r__$4;
                        var __$l0__$5 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$4 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$5;
                        return __$r__$4;
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
                var __$r = __$b16(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 65536) === 0) {
                return [ function __$lb__$107() {
                    var __$r__$108;
                    var __$l0__$109 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$108 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$109;
                    return __$r__$108;
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
                return [ function __$lb__$110() {
                    var __$r__$111;
                    var __$l0__$112 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                    __$r__$111 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$112;
                    return __$r__$111;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g2(__$ctx, __$ref);
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
            if (!$$elem && (__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b46(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "tag") {
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 524288) === 0) {
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
    (__$ctx._firstItem.mods = __$ctx._firstItem.mods || {}).checked = true;
    var __$r__$1;
    var __$l0__$2 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$1 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$2;
    return;
}

function __$b2(__$ctx, __$ref) {
    var ctx__$29 = __$ctx.ctx, mods__$30 = $$mods, firstItem__$31, checkedItems__$32 = [];
    if (ctx__$29.content) {
        var isValDef__$33 = typeof ctx__$29.val !== "undefined", containsVal__$34 = function(val) {
            return isValDef__$33 && (mods__$30.mode === "check" ? ctx__$29.val.indexOf(val) > -1 : ctx__$29.val === val);
        }, iterateItems__$35 = function(content) {
            var i__$36 = 0, itemOrGroup__$37;
            while (itemOrGroup__$37 = content[i__$36++]) {
                if (itemOrGroup__$37.block === "menu-item") {
                    firstItem__$31 || (firstItem__$31 = itemOrGroup__$37);
                    if (containsVal__$34(itemOrGroup__$37.val)) {
                        (itemOrGroup__$37.mods = itemOrGroup__$37.mods || {}).checked = true;
                        checkedItems__$32.push(itemOrGroup__$37);
                    }
                } else {
                    iterateItems__$35(itemOrGroup__$37.content);
                }
            }
        };
        iterateItems__$35(ctx__$29.content);
    }
    __$ctx._firstItem = firstItem__$31;
    __$ctx._checkedItems = checkedItems__$32;
    var __$r__$39;
    var __$l0__$40 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$30.theme,
        disabled: mods__$30.disabled
    };
    var __$r__$42;
    var __$l1__$43 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$42 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$43;
    __$r__$39 = __$r__$42;
    __$ctx._menuMods = __$l0__$40;
    return;
}

function __$b3(__$ctx, __$ref) {
    var checkedOptions__$6 = __$ctx._checkedOptions, firstOption__$7 = __$ctx._firstOption;
    if (firstOption__$7 && !checkedOptions__$6.length) {
        firstOption__$7.checked = true;
        checkedOptions__$6 = [ firstOption__$7 ];
    }
    var __$r__$9;
    var __$l0__$10 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$6[0];
    var __$r__$12;
    var __$l1__$13 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$12 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$13;
    __$r__$9 = __$r__$12;
    __$ctx._checkedOption = __$l0__$10;
    return;
}

function __$b4(__$ctx, __$ref) {
    var mods__$44 = $$mods, optionToMenuItem__$45 = function(option) {
        var res__$46 = {
            block: "menu-item",
            mods: {
                disabled: mods__$44.disabled || option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$46.js.text = option.text;
            res__$46.content = [ option.icon, res__$46.content ];
        }
        return res__$46;
    };
    var __$r__$48;
    var __$l0__$49 = $$mode;
    $$mode = "";
    var __$l1__$50 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$44.size,
            theme: mods__$44.theme,
            disabled: mods__$44.disabled,
            mode: mods__$44.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$45)
            } : optionToMenuItem__$45(optionOrGroup);
        })
    };
    var __$r__$52;
    var __$l2__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$53;
    __$r__$48 = __$r__$52;
    $$mode = __$l0__$49;
    __$ctx.ctx = __$l1__$50;
    return;
}

function __$b5(__$ctx, __$ref) {
    var mods__$71 = $$mods;
    var __$r__$73;
    var __$l0__$74 = $$mode;
    $$mode = "";
    var __$l1__$75 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$71.size,
            theme: mods__$71.theme,
            view: mods__$71.view,
            focused: mods__$71.focused,
            disabled: mods__$71.disabled,
            checked: mods__$71.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        tabIndex: __$ctx._select.tabIndex,
        content: [ function __$lb__$76() {
            var __$r__$77;
            var __$l3__$78 = $$mode;
            $$mode = "content";
            __$r__$77 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$78;
            return __$r__$77;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$79;
    var __$l2__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$80;
    __$r__$73 = __$r__$79;
    $$mode = __$l0__$74;
    __$ctx.ctx = __$l1__$75;
    return;
}

function __$b6(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$85 = __$ctx.ctx, isValDef__$86 = typeof ctx__$85.val !== "undefined", isModeCheck__$87 = $$mods.mode === "check", firstOption__$88, checkedOptions__$89 = [], containsVal__$90 = function(val) {
        return isValDef__$86 && (isModeCheck__$87 ? ctx__$85.val.indexOf(val) > -1 : ctx__$85.val === val);
    }, iterateOptions__$91 = function(content) {
        var i__$92 = 0, option__$93;
        while (option__$93 = content[i__$92++]) {
            if (option__$93.group) {
                iterateOptions__$91(option__$93.group);
            } else {
                firstOption__$88 || (firstOption__$88 = option__$93);
                if (containsVal__$90(option__$93.val)) {
                    option__$93.checked = true;
                    checkedOptions__$89.push(option__$93);
                }
            }
        }
    };
    iterateOptions__$91(ctx__$85.options);
    var __$r__$95;
    var __$l0__$96 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$97 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$89;
    var __$l2__$98 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$88;
    var __$r__$100;
    var __$l3__$101 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$100 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$101;
    __$r__$95 = __$r__$100;
    __$ctx._select = __$l0__$96;
    __$ctx._checkedOptions = __$l1__$97;
    __$ctx._firstOption = __$l2__$98;
    return;
}

function __$b7(__$ctx, __$ref) {
    var __$r__$66;
    var __$l0__$67 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$69;
    var __$l1__$70 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$69 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$70;
    __$r__$66 = __$r__$69;
    __$ctx._button = __$l0__$67;
    return;
}

function __$b8(__$ctx, __$ref) {
    var mods__$24 = $$mods;
    mods__$24.theme = mods__$24.theme || __$ctx._menuMods.theme;
    mods__$24.disabled = mods__$24.disabled || __$ctx._menuMods.disabled;
    var __$r__$26;
    var __$l0__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$27;
    return;
}

function __$b9(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$113 = __$ctx.ctx;
    var __$r__$115;
    var __$l0__$116 = $$mode;
    $$mode = "";
    var __$l1__$117 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$113.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$113.title
            }, {
                block: "ua"
            }, ctx__$113.head, ctx__$113.styles, ctx__$113.favicon ? {
                elem: "favicon",
                url: ctx__$113.favicon
            } : "" ]
        }, ctx__$113 ]
    } ];
    var __$r__$119;
    var __$l2__$120 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$119 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$120;
    __$r__$115 = __$r__$119;
    $$mode = __$l0__$116;
    __$ctx.ctx = __$l1__$117;
    __$ctx._defPageApplied = false;
    return;
}

function __$b10(__$ctx, __$ref) {
    var BEM_INTERNAL__$121 = __$ctx.BEM.INTERNAL, ctx__$122 = __$ctx.ctx, isBEM__$123, tag__$124, res__$125;
    var __$r__$127;
    var __$l0__$128 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$129 = $$block;
    var __$r__$131;
    var __$l1__$132 = $$mode;
    $$mode = "tag";
    __$r__$131 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$132;
    tag__$124 = __$r__$131;
    typeof tag__$124 !== "undefined" || (tag__$124 = ctx__$122.tag);
    typeof tag__$124 !== "undefined" || (tag__$124 = "div");
    if (tag__$124) {
        var jsParams__$133, js__$134;
        if (vBlock__$129 && ctx__$122.js !== false) {
            var __$r__$135;
            var __$l2__$136 = $$mode;
            $$mode = "js";
            __$r__$135 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$136;
            js__$134 = __$r__$135;
            js__$134 = js__$134 ? __$ctx.extend(ctx__$122.js, js__$134 === true ? {} : js__$134) : ctx__$122.js === true ? {} : ctx__$122.js;
            js__$134 && ((jsParams__$133 = {})[BEM_INTERNAL__$121.buildClass(vBlock__$129, ctx__$122.elem)] = js__$134);
        }
        __$ctx._str += "<" + tag__$124;
        var __$r__$137;
        var __$l3__$138 = $$mode;
        $$mode = "bem";
        __$r__$137 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$138;
        isBEM__$123 = __$r__$137;
        typeof isBEM__$123 !== "undefined" || (isBEM__$123 = typeof ctx__$122.bem !== "undefined" ? ctx__$122.bem : ctx__$122.block || ctx__$122.elem);
        var __$r__$140;
        var __$l4__$141 = $$mode;
        $$mode = "cls";
        __$r__$140 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$141;
        var cls__$139 = __$r__$140;
        cls__$139 || (cls__$139 = ctx__$122.cls);
        var addJSInitClass__$142 = ctx__$122.block && jsParams__$133 && !ctx__$122.elem;
        if (isBEM__$123 || cls__$139) {
            __$ctx._str += ' class="';
            if (isBEM__$123) {
                __$ctx._str += BEM_INTERNAL__$121.buildClasses(vBlock__$129, ctx__$122.elem, ctx__$122.elemMods || ctx__$122.mods);
                var __$r__$144;
                var __$l5__$145 = $$mode;
                $$mode = "mix";
                __$r__$144 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$145;
                var mix__$143 = __$r__$144;
                ctx__$122.mix && (mix__$143 = mix__$143 ? [].concat(mix__$143, ctx__$122.mix) : ctx__$122.mix);
                if (mix__$143) {
                    var visited__$146 = {}, visitedKey__$147 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$146[visitedKey__$147(vBlock__$129, $$elem)] = true;
                    __$ctx.isArray(mix__$143) || (mix__$143 = [ mix__$143 ]);
                    for (var i__$148 = 0; i__$148 < mix__$143.length; i__$148++) {
                        var mixItem__$149 = mix__$143[i__$148], hasItem__$150 = mixItem__$149.block || mixItem__$149.elem, mixBlock__$151 = mixItem__$149.block || mixItem__$149._block || $$block, mixElem__$152 = mixItem__$149.elem || mixItem__$149._elem || $$elem;
                        hasItem__$150 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$121[hasItem__$150 ? "buildClasses" : "buildModsClasses"](mixBlock__$151, mixItem__$149.elem || mixItem__$149._elem || (mixItem__$149.block ? undefined : $$elem), mixItem__$149.elemMods || mixItem__$149.mods);
                        if (mixItem__$149.js) {
                            (jsParams__$133 || (jsParams__$133 = {}))[BEM_INTERNAL__$121.buildClass(mixBlock__$151, mixItem__$149.elem)] = mixItem__$149.js === true ? {} : mixItem__$149.js;
                            addJSInitClass__$142 || (addJSInitClass__$142 = mixBlock__$151 && !mixItem__$149.elem);
                        }
                        if (hasItem__$150 && !visited__$146[visitedKey__$147(mixBlock__$151, mixElem__$152)]) {
                            visited__$146[visitedKey__$147(mixBlock__$151, mixElem__$152)] = true;
                            var __$r__$154;
                            var __$l6__$155 = $$mode;
                            $$mode = "mix";
                            var __$l7__$156 = $$block;
                            $$block = mixBlock__$151;
                            var __$l8__$157 = $$elem;
                            $$elem = mixElem__$152;
                            __$r__$154 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$155;
                            $$block = __$l7__$156;
                            $$elem = __$l8__$157;
                            var nestedMix__$153 = __$r__$154;
                            if (nestedMix__$153) {
                                for (var j__$158 = 0; j__$158 < nestedMix__$153.length; j__$158++) {
                                    var nestedItem__$159 = nestedMix__$153[j__$158];
                                    if (!nestedItem__$159.block && !nestedItem__$159.elem || !visited__$146[visitedKey__$147(nestedItem__$159.block, nestedItem__$159.elem)]) {
                                        nestedItem__$159._block = mixBlock__$151;
                                        nestedItem__$159._elem = mixElem__$152;
                                        mix__$143.splice(i__$148 + 1, 0, nestedItem__$159);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$139 && (__$ctx._str += isBEM__$123 ? " " + cls__$139 : cls__$139);
            __$ctx._str += addJSInitClass__$142 ? ' i-bem"' : '"';
        }
        if (isBEM__$123 && jsParams__$133) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$133)) + '"';
        }
        var __$r__$161;
        var __$l9__$162 = $$mode;
        $$mode = "attrs";
        __$r__$161 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$162;
        var attrs__$160 = __$r__$161;
        attrs__$160 = __$ctx.extend(attrs__$160, ctx__$122.attrs);
        if (attrs__$160) {
            var name__$163, attr__$164;
            for (name__$163 in attrs__$160) {
                attr__$164 = attrs__$160[name__$163];
                if (typeof attr__$164 === "undefined") continue;
                __$ctx._str += " " + name__$163 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$164) ? attr__$164 : __$ctx.reapply(attr__$164)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$124)) {
        __$ctx._str += "/>";
    } else {
        tag__$124 && (__$ctx._str += ">");
        var __$r__$166;
        var __$l10__$167 = $$mode;
        $$mode = "content";
        __$r__$166 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$167;
        var content__$165 = __$r__$166;
        if (content__$165 || content__$165 === 0) {
            isBEM__$123 = vBlock__$129 || $$elem;
            var __$r__$168;
            var __$l11__$169 = $$mode;
            $$mode = "";
            var __$l12__$170 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$171 = __$ctx.position;
            __$ctx.position = isBEM__$123 ? 1 : __$ctx.position;
            var __$l14__$172 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$123 ? 1 : __$ctx._listLength;
            var __$l15__$173 = __$ctx.ctx;
            __$ctx.ctx = content__$165;
            __$r__$168 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$169;
            __$ctx._notNewList = __$l12__$170;
            __$ctx.position = __$l13__$171;
            __$ctx._listLength = __$l14__$172;
            __$ctx.ctx = __$l15__$173;
        }
        tag__$124 && (__$ctx._str += "</" + tag__$124 + ">");
    }
    res__$125 = __$ctx._str;
    __$r__$127 = undefined;
    __$ctx._str = __$l0__$128;
    __$ctx._buf.push(res__$125);
    return;
}

function __$b16(__$ctx, __$ref) {
    var ctx__$57 = __$ctx.ctx, content__$58 = [ ctx__$57.icon ];
    "text" in ctx__$57 && content__$58.push({
        elem: "text",
        content: ctx__$57.text
    });
    return content__$58;
}

function __$b24(__$ctx, __$ref) {
    var ctx__$84 = __$ctx.ctx;
    return {
        name: ctx__$84.name,
        optionsMaxHeight: ctx__$84.optionsMaxHeight
    };
}

function __$b27(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx;
    return {
        mainOffset: ctx__$14.mainOffset,
        secondaryOffset: ctx__$14.secondaryOffset,
        viewportOffset: ctx__$14.viewportOffset,
        directions: ctx__$14.directions,
        zIndexGroupLevel: ctx__$14.zIndexGroupLevel
    };
}

function __$b34(__$ctx, __$ref) {
    var attrs__$28 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$28.tabindex = 0);
    return attrs__$28;
}

function __$b37(__$ctx, __$ref) {
    var ctx__$59 = __$ctx.ctx, attrs__$60 = {
        type: $$mods.type || "button",
        name: ctx__$59.name,
        value: ctx__$59.val
    };
    $$mods.disabled && (attrs__$60.disabled = "disabled");
    return __$ctx.extend(function __$lb__$61() {
        var __$r__$62;
        var __$l0__$63 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1024;
        __$r__$62 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$63;
        return __$r__$62;
    }(), attrs__$60);
}

function __$b38(__$ctx, __$ref) {
    var ctx__$64 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$64.tabIndex,
        id: ctx__$64.id,
        title: ctx__$64.title
    };
}

function __$b46(__$ctx, __$ref) {
    var mix__$102 = function __$lb__$103() {
        var __$r__$104;
        var __$l0__$105 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32768;
        __$r__$104 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$105;
        return __$r__$104;
    }(), uaMix__$106 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$102 ? uaMix__$106.concat(mix__$102) : uaMix__$106;
}

function __$b70(__$ctx, __$ref) {
    var __$r__$175;
    var __$l0__$176 = $$mode;
    $$mode = "";
    var __$l1__$177 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$179;
    var __$l2__$180 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$179 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$180;
    __$r__$175 = __$r__$179;
    $$mode = __$l0__$176;
    __$ctx.ctx = __$l1__$177;
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$181 = __$ctx.ctx;
    if (ctx__$181 && ctx__$181 !== true || ctx__$181 === 0) {
        __$ctx._str += ctx__$181 + "";
    }
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b73(__$ctx, __$ref) {
    var ctx__$182 = __$ctx.ctx, len__$183 = ctx__$182.length, i__$184 = 0, prevPos__$185 = __$ctx.position, prevNotNewList__$186 = __$ctx._notNewList;
    if (prevNotNewList__$186) {
        __$ctx._listLength += len__$183 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$183;
    }
    __$ctx._notNewList = true;
    while (i__$184 < len__$183) (function __$lb__$187() {
        var __$r__$188;
        var __$l0__$189 = __$ctx.ctx;
        __$ctx.ctx = ctx__$182[i__$184++];
        __$r__$188 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$189;
        return __$r__$188;
    })();
    prevNotNewList__$186 || (__$ctx.position = prevPos__$185);
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$190 = __$ctx.ctx.block, vElem__$191 = __$ctx.ctx.elem, block__$192 = __$ctx._currBlock || $$block;
    var __$r__$194;
    var __$l0__$195 = $$mode;
    $$mode = "default";
    var __$l1__$196 = $$block;
    $$block = vBlock__$190 || (vElem__$191 ? block__$192 : undefined);
    var __$l2__$197 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$190 || vElem__$191 ? undefined : block__$192;
    var __$l3__$198 = $$elem;
    $$elem = vElem__$191;
    var __$l4__$199 = $$mods;
    $$mods = vBlock__$190 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$200 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$194 = undefined;
    $$mode = __$l0__$195;
    $$block = __$l1__$196;
    __$ctx._currBlock = __$l2__$197;
    $$elem = __$l3__$198;
    $$mods = __$l4__$199;
    $$elemMods = __$l5__$200;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && __$ctx._firstItem && __$ctx._checkedItems && !__$ctx._checkedItems.length && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b3(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "menu") {
            if ((__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if ((__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$b5(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b6(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 2048) === 0) {
            var __$r = __$b7(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b8(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b9(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b10(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$ctx.extend(function __$lb__$21() {
                    var __$r__$22;
                    var __$l0__$23 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$22 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$23;
                    return __$r__$22;
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
                var __$r = __$ctx.extend(function __$lb__$81() {
                    var __$r__$82;
                    var __$l0__$83 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$82 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$83;
                    return __$r__$82;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b24(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$ctx.extend(function __$lb__$54() {
                    var __$r__$55;
                    var __$l0__$56 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$55 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$56;
                    return __$r__$55;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b27(__$ctx, __$ref);
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
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$18() {
                    var __$r__$19;
                    var __$l0__$20 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$19 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$20;
                    return __$r__$19;
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
            var __$r = __$b34(__$ctx, __$ref);
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
                var __$r = __$b37(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b38(__$ctx, __$ref);
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