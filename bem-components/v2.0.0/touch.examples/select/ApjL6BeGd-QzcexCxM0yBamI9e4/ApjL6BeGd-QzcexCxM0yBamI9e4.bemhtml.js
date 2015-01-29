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
        var __$t = $$block;
        if (__$t === "select") {
            if (!$$elem && $$mods && $$mods["mode"] === "radio-check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 1) === 0) {
                return [ {
                    elem: "control",
                    val: __$ctx._checkedOptions[0].val
                }, function __$lb__$2() {
                    var __$r__$3;
                    var __$l0__$4 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$3 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$4;
                    return __$r__$3;
                }() ];
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
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$9() {
                    var __$r__$10;
                    var __$l0__$11 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$10 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$11;
                    return __$r__$10;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 8192) === 0) {
                    return [ function __$lb__$90() {
                        var __$r__$91;
                        var __$l0__$92 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                        __$r__$91 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$92;
                        return __$r__$91;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32768) === 0) {
                return [ function __$lb__$98() {
                    var __$r__$99;
                    var __$l0__$100 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                    __$r__$99 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$100;
                    return __$r__$99;
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
                return [ function __$lb__$101() {
                    var __$r__$102;
                    var __$l0__$103 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$102 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$103;
                    return __$r__$102;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
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
    var ctx__$53 = __$ctx.ctx, attrs__$54 = {
        type: $$mods.type || "button",
        name: ctx__$53.name,
        value: ctx__$53.val
    };
    $$mods.disabled && (attrs__$54.disabled = "disabled");
    return __$ctx.extend(function __$lb__$55() {
        var __$r__$56;
        var __$l0__$57 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$56 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$57;
        return __$r__$56;
    }(), attrs__$54);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$58 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$58.tabIndex,
        id: ctx__$58.id,
        title: ctx__$58.title
    };
}

function __$b8(__$ctx, __$ref) {
    var attrs__$22 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$22.tabindex = 0);
    return attrs__$22;
}

function __$b32(__$ctx, __$ref) {
    var ctx__$51 = __$ctx.ctx, content__$52 = [ ctx__$51.icon ];
    "text" in ctx__$51 && content__$52.push({
        elem: "text",
        content: ctx__$51.text
    });
    return content__$52;
}

function __$b41(__$ctx, __$ref) {
    var ctx__$72 = __$ctx.ctx;
    return {
        name: ctx__$72.name,
        optionsMaxHeight: ctx__$72.optionsMaxHeight
    };
}

function __$b44(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx;
    return {
        mainOffset: ctx__$8.mainOffset,
        secondaryOffset: ctx__$8.secondaryOffset,
        viewportOffset: ctx__$8.viewportOffset,
        directions: ctx__$8.directions,
        zIndexGroupLevel: ctx__$8.zIndexGroupLevel
    };
}

function __$b50(__$ctx, __$ref) {
    var mods__$59 = $$mods;
    var __$r__$61;
    var __$l0__$62 = $$mode;
    $$mode = "";
    var __$l1__$63 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$59.size,
            theme: mods__$59.theme,
            view: mods__$59.view,
            focused: mods__$59.focused,
            disabled: mods__$59.disabled,
            checked: mods__$59.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        tabIndex: __$ctx._select.tabIndex,
        content: [ function __$lb__$64() {
            var __$r__$65;
            var __$l3__$66 = $$mode;
            $$mode = "content";
            __$r__$65 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$66;
            return __$r__$65;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$67;
    var __$l2__$68 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$67 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$68;
    __$r__$61 = __$r__$67;
    $$mode = __$l0__$62;
    __$ctx.ctx = __$l1__$63;
    return;
}

function __$b51(__$ctx, __$ref) {
    var mods__$38 = $$mods, optionToMenuItem__$39 = function(option) {
        var res__$40 = {
            block: "menu-item",
            mods: {
                disabled: mods__$38.disabled || option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$40.js.text = option.text;
            res__$40.content = [ option.icon, res__$40.content ];
        }
        return res__$40;
    };
    var __$r__$42;
    var __$l0__$43 = $$mode;
    $$mode = "";
    var __$l1__$44 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$38.size,
            theme: mods__$38.theme,
            disabled: mods__$38.disabled,
            mode: mods__$38.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$39)
            } : optionToMenuItem__$39(optionOrGroup);
        })
    };
    var __$r__$46;
    var __$l2__$47 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$46 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$47;
    __$r__$42 = __$r__$46;
    $$mode = __$l0__$43;
    __$ctx.ctx = __$l1__$44;
    return;
}

function __$b52(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$73 = __$ctx.ctx, isValDef__$74 = typeof ctx__$73.val !== "undefined", isModeCheck__$75 = $$mods.mode === "check", firstOption__$76, checkedOptions__$77 = [], containsVal__$78 = function(val) {
        return isValDef__$74 && (isModeCheck__$75 ? ctx__$73.val.indexOf(val) > -1 : ctx__$73.val === val);
    }, iterateOptions__$79 = function(content) {
        var i__$80 = 0, option__$81;
        while (option__$81 = content[i__$80++]) {
            if (option__$81.group) {
                iterateOptions__$79(option__$81.group);
            } else {
                firstOption__$76 || (firstOption__$76 = option__$81);
                if (containsVal__$78(option__$81.val)) {
                    option__$81.checked = true;
                    checkedOptions__$77.push(option__$81);
                }
            }
        }
    };
    iterateOptions__$79(ctx__$73.options);
    var __$r__$83;
    var __$l0__$84 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$85 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$77;
    var __$l2__$86 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$76;
    var __$r__$88;
    var __$l3__$89 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$88 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$89;
    __$r__$83 = __$r__$88;
    __$ctx._select = __$l0__$84;
    __$ctx._checkedOptions = __$l1__$85;
    __$ctx._firstOption = __$l2__$86;
    return;
}

function __$b53(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx, mods__$24 = $$mods, firstItem__$25, checkedItems__$26 = [];
    if (ctx__$23.content) {
        var isValDef__$27 = typeof ctx__$23.val !== "undefined", containsVal__$28 = function(val) {
            return isValDef__$27 && (mods__$24.mode === "check" ? ctx__$23.val.indexOf(val) > -1 : ctx__$23.val === val);
        }, iterateItems__$29 = function(content) {
            var i__$30 = 0, itemOrGroup__$31;
            while (itemOrGroup__$31 = content[i__$30++]) {
                if (itemOrGroup__$31.block === "menu-item") {
                    firstItem__$25 || (firstItem__$25 = itemOrGroup__$31);
                    if (containsVal__$28(itemOrGroup__$31.val)) {
                        (itemOrGroup__$31.mods = itemOrGroup__$31.mods || {}).checked = true;
                        checkedItems__$26.push(itemOrGroup__$31);
                    }
                } else {
                    iterateItems__$29(itemOrGroup__$31.content);
                }
            }
        };
        iterateItems__$29(ctx__$23.content);
    }
    __$ctx._firstItem = firstItem__$25;
    __$ctx._checkedItems = checkedItems__$26;
    var __$r__$33;
    var __$l0__$34 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$24.theme,
        disabled: mods__$24.disabled
    };
    var __$r__$36;
    var __$l1__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$37;
    __$r__$33 = __$r__$36;
    __$ctx._menuMods = __$l0__$34;
    return;
}

function __$b54(__$ctx, __$ref) {
    var mods__$18 = $$mods;
    mods__$18.theme = mods__$18.theme || __$ctx._menuMods.theme;
    mods__$18.disabled = mods__$18.disabled || __$ctx._menuMods.disabled;
    var __$r__$20;
    var __$l0__$21 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$20 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$21;
    return;
}

function __$b55(__$ctx, __$ref) {
    var ctx__$104 = __$ctx.ctx;
    var __$r__$106;
    var __$l0__$107 = $$mode;
    $$mode = "";
    var __$l1__$108 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$104.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$104.title
            }, {
                block: "ua"
            }, ctx__$104.head, ctx__$104.styles, ctx__$104.favicon ? {
                elem: "favicon",
                url: ctx__$104.favicon
            } : "" ]
        }, ctx__$104 ]
    } ];
    var __$r__$110;
    var __$l2__$111 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$110 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$111;
    __$r__$106 = __$r__$110;
    $$mode = __$l0__$107;
    __$ctx.ctx = __$l1__$108;
    return;
}

function __$b56(__$ctx, __$ref) {
    var BEM_INTERNAL__$112 = __$ctx.BEM.INTERNAL, ctx__$113 = __$ctx.ctx, isBEM__$114, tag__$115, res__$116;
    var __$r__$118;
    var __$l0__$119 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$120 = $$block;
    var __$r__$122;
    var __$l1__$123 = $$mode;
    $$mode = "tag";
    __$r__$122 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$123;
    tag__$115 = __$r__$122;
    typeof tag__$115 !== "undefined" || (tag__$115 = ctx__$113.tag);
    typeof tag__$115 !== "undefined" || (tag__$115 = "div");
    if (tag__$115) {
        var jsParams__$124, js__$125;
        if (vBlock__$120 && ctx__$113.js !== false) {
            var __$r__$126;
            var __$l2__$127 = $$mode;
            $$mode = "js";
            __$r__$126 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$127;
            js__$125 = __$r__$126;
            js__$125 = js__$125 ? __$ctx.extend(ctx__$113.js, js__$125 === true ? {} : js__$125) : ctx__$113.js === true ? {} : ctx__$113.js;
            js__$125 && ((jsParams__$124 = {})[BEM_INTERNAL__$112.buildClass(vBlock__$120, ctx__$113.elem)] = js__$125);
        }
        __$ctx._str += "<" + tag__$115;
        var __$r__$128;
        var __$l3__$129 = $$mode;
        $$mode = "bem";
        __$r__$128 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$129;
        isBEM__$114 = __$r__$128;
        typeof isBEM__$114 !== "undefined" || (isBEM__$114 = typeof ctx__$113.bem !== "undefined" ? ctx__$113.bem : ctx__$113.block || ctx__$113.elem);
        var __$r__$131;
        var __$l4__$132 = $$mode;
        $$mode = "cls";
        __$r__$131 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$132;
        var cls__$130 = __$r__$131;
        cls__$130 || (cls__$130 = ctx__$113.cls);
        var addJSInitClass__$133 = ctx__$113.block && jsParams__$124 && !ctx__$113.elem;
        if (isBEM__$114 || cls__$130) {
            __$ctx._str += ' class="';
            if (isBEM__$114) {
                __$ctx._str += BEM_INTERNAL__$112.buildClasses(vBlock__$120, ctx__$113.elem, ctx__$113.elemMods || ctx__$113.mods);
                var __$r__$135;
                var __$l5__$136 = $$mode;
                $$mode = "mix";
                __$r__$135 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$136;
                var mix__$134 = __$r__$135;
                ctx__$113.mix && (mix__$134 = mix__$134 ? [].concat(mix__$134, ctx__$113.mix) : ctx__$113.mix);
                if (mix__$134) {
                    var visited__$137 = {}, visitedKey__$138 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$137[visitedKey__$138(vBlock__$120, $$elem)] = true;
                    __$ctx.isArray(mix__$134) || (mix__$134 = [ mix__$134 ]);
                    for (var i__$139 = 0; i__$139 < mix__$134.length; i__$139++) {
                        var mixItem__$140 = mix__$134[i__$139], hasItem__$141 = mixItem__$140.block || mixItem__$140.elem, mixBlock__$142 = mixItem__$140.block || mixItem__$140._block || $$block, mixElem__$143 = mixItem__$140.elem || mixItem__$140._elem || $$elem;
                        hasItem__$141 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$112[hasItem__$141 ? "buildClasses" : "buildModsClasses"](mixBlock__$142, mixItem__$140.elem || mixItem__$140._elem || (mixItem__$140.block ? undefined : $$elem), mixItem__$140.elemMods || mixItem__$140.mods);
                        if (mixItem__$140.js) {
                            (jsParams__$124 || (jsParams__$124 = {}))[BEM_INTERNAL__$112.buildClass(mixBlock__$142, mixItem__$140.elem)] = mixItem__$140.js === true ? {} : mixItem__$140.js;
                            addJSInitClass__$133 || (addJSInitClass__$133 = mixBlock__$142 && !mixItem__$140.elem);
                        }
                        if (hasItem__$141 && !visited__$137[visitedKey__$138(mixBlock__$142, mixElem__$143)]) {
                            visited__$137[visitedKey__$138(mixBlock__$142, mixElem__$143)] = true;
                            var __$r__$145;
                            var __$l6__$146 = $$mode;
                            $$mode = "mix";
                            var __$l7__$147 = $$block;
                            $$block = mixBlock__$142;
                            var __$l8__$148 = $$elem;
                            $$elem = mixElem__$143;
                            __$r__$145 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$146;
                            $$block = __$l7__$147;
                            $$elem = __$l8__$148;
                            var nestedMix__$144 = __$r__$145;
                            if (nestedMix__$144) {
                                for (var j__$149 = 0; j__$149 < nestedMix__$144.length; j__$149++) {
                                    var nestedItem__$150 = nestedMix__$144[j__$149];
                                    if (!nestedItem__$150.block && !nestedItem__$150.elem || !visited__$137[visitedKey__$138(nestedItem__$150.block, nestedItem__$150.elem)]) {
                                        nestedItem__$150._block = mixBlock__$142;
                                        nestedItem__$150._elem = mixElem__$143;
                                        mix__$134.splice(i__$139 + 1, 0, nestedItem__$150);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$130 && (__$ctx._str += isBEM__$114 ? " " + cls__$130 : cls__$130);
            __$ctx._str += addJSInitClass__$133 ? ' i-bem"' : '"';
        }
        if (isBEM__$114 && jsParams__$124) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$124)) + '"';
        }
        var __$r__$152;
        var __$l9__$153 = $$mode;
        $$mode = "attrs";
        __$r__$152 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$153;
        var attrs__$151 = __$r__$152;
        attrs__$151 = __$ctx.extend(attrs__$151, ctx__$113.attrs);
        if (attrs__$151) {
            var name__$154, attr__$155;
            for (name__$154 in attrs__$151) {
                attr__$155 = attrs__$151[name__$154];
                if (typeof attr__$155 === "undefined") continue;
                __$ctx._str += " " + name__$154 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$155) ? attr__$155 : __$ctx.reapply(attr__$155)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$115)) {
        __$ctx._str += "/>";
    } else {
        tag__$115 && (__$ctx._str += ">");
        var __$r__$157;
        var __$l10__$158 = $$mode;
        $$mode = "content";
        __$r__$157 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$158;
        var content__$156 = __$r__$157;
        if (content__$156 || content__$156 === 0) {
            isBEM__$114 = vBlock__$120 || $$elem;
            var __$r__$159;
            var __$l11__$160 = $$mode;
            $$mode = "";
            var __$l12__$161 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$162 = __$ctx.position;
            __$ctx.position = isBEM__$114 ? 1 : __$ctx.position;
            var __$l14__$163 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$114 ? 1 : __$ctx._listLength;
            var __$l15__$164 = __$ctx.ctx;
            __$ctx.ctx = content__$156;
            __$r__$159 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$160;
            __$ctx._notNewList = __$l12__$161;
            __$ctx.position = __$l13__$162;
            __$ctx._listLength = __$l14__$163;
            __$ctx.ctx = __$l15__$164;
        }
        tag__$115 && (__$ctx._str += "</" + tag__$115 + ">");
    }
    res__$116 = __$ctx._str;
    __$r__$118 = undefined;
    __$ctx._str = __$l0__$119;
    __$ctx._buf.push(res__$116);
    return;
}

function __$b59(__$ctx, __$ref) {
    var mix__$93 = function __$lb__$94() {
        var __$r__$95;
        var __$l0__$96 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
        __$r__$95 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$96;
        return __$r__$95;
    }(), uaMix__$97 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$93 ? uaMix__$97.concat(mix__$93) : uaMix__$97;
}

function __$b70(__$ctx, __$ref) {
    var __$r__$166;
    var __$l0__$167 = $$mode;
    $$mode = "";
    var __$l1__$168 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$170;
    var __$l2__$171 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$170 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$171;
    __$r__$166 = __$r__$170;
    $$mode = __$l0__$167;
    __$ctx.ctx = __$l1__$168;
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$172 = __$ctx.ctx;
    if (ctx__$172 && ctx__$172 !== true || ctx__$172 === 0) {
        __$ctx._str += ctx__$172 + "";
    }
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b73(__$ctx, __$ref) {
    var ctx__$173 = __$ctx.ctx, len__$174 = ctx__$173.length, i__$175 = 0, prevPos__$176 = __$ctx.position, prevNotNewList__$177 = __$ctx._notNewList;
    if (prevNotNewList__$177) {
        __$ctx._listLength += len__$174 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$174;
    }
    __$ctx._notNewList = true;
    while (i__$175 < len__$174) (function __$lb__$178() {
        var __$r__$179;
        var __$l0__$180 = __$ctx.ctx;
        __$ctx.ctx = ctx__$173[i__$175++];
        __$r__$179 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$180;
        return __$r__$179;
    })();
    prevNotNewList__$177 || (__$ctx.position = prevPos__$176);
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$181 = __$ctx.ctx.block, vElem__$182 = __$ctx.ctx.elem, block__$183 = __$ctx._currBlock || $$block;
    var __$r__$185;
    var __$l0__$186 = $$mode;
    $$mode = "default";
    var __$l1__$187 = $$block;
    $$block = vBlock__$181 || (vElem__$182 ? block__$183 : undefined);
    var __$l2__$188 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$181 || vElem__$182 ? undefined : block__$183;
    var __$l3__$189 = $$elem;
    $$elem = vElem__$182;
    var __$l4__$190 = $$mods;
    $$mods = vBlock__$181 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$191 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$185 = undefined;
    $$mode = __$l0__$186;
    $$block = __$l1__$187;
    __$ctx._currBlock = __$l2__$188;
    $$elem = __$l3__$189;
    $$mods = __$l4__$190;
    $$elemMods = __$l5__$191;
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
                var __$r = __$ctx.extend(function __$lb__$12() {
                    var __$r__$13;
                    var __$l0__$14 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$13 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$14;
                    return __$r__$13;
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
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                if ($$mods["mode"] === "radio-check" && (__$ctx.__$a0 & 2) === 0) {
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
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 2048) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$69() {
                        var __$r__$70;
                        var __$l0__$71 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                        __$r__$70 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$71;
                        return __$r__$70;
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
                var __$r = __$ctx.extend(function __$lb__$48() {
                    var __$r__$49;
                    var __$l0__$50 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$49 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$50;
                    return __$r__$49;
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
                var __$r = __$ctx.extend(function __$lb__$15() {
                    var __$r__$16;
                    var __$l0__$17 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$16 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$17;
                    return __$r__$16;
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

function __$g3(__$ctx, __$ref) {
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