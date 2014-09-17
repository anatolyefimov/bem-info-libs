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
                }, function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
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
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$7() {
                    var __$r__$8;
                    var __$l0__$9 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$8 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$9;
                    return __$r__$8;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 16384) === 0) {
                    return [ function __$lb__$84() {
                        var __$r__$85;
                        var __$l0__$86 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
                        __$r__$85 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$86;
                        return __$r__$85;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 65536) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$103() {
                    var __$r__$104;
                    var __$l0__$105 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$104 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$105;
                    return __$r__$104;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 131072) === 0) {
                return [ function __$lb__$106() {
                    var __$r__$107;
                    var __$l0__$108 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                    __$r__$107 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$108;
                    return __$r__$107;
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 524288) === 0) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b73(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b74(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b75(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b76(__$ctx, __$ref);
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

function __$b2(__$ctx, __$ref) {
    var val__$64 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$64) ? val__$64 : JSON.stringify(val__$64),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b4(__$ctx, __$ref) {
    var ctx__$42 = __$ctx.ctx, attrs__$43 = {
        type: $$mods.type || "button",
        name: ctx__$42.name,
        value: ctx__$42.val
    };
    $$mods.disabled && (attrs__$43.disabled = "disabled");
    return __$ctx.extend(function __$lb__$44() {
        var __$r__$45;
        var __$l0__$46 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$45 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$46;
        return __$r__$45;
    }(), attrs__$43);
}

function __$b5(__$ctx, __$ref) {
    var ctx__$47 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$47.tabIndex,
        id: ctx__$47.id,
        title: ctx__$47.title
    };
}

function __$b9(__$ctx, __$ref) {
    var attrs__$20 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$20.tabindex = 0);
    return attrs__$20;
}

function __$b33(__$ctx, __$ref) {
    var ctx__$40 = __$ctx.ctx, content__$41 = [ ctx__$40.icon ];
    "text" in ctx__$40 && content__$41.push({
        elem: "text",
        content: ctx__$40.text
    });
    return content__$41;
}

function __$b42(__$ctx, __$ref) {
    var ctx__$68 = __$ctx.ctx;
    return {
        name: ctx__$68.name,
        optionsMaxHeight: ctx__$68.optionsMaxHeight
    };
}

function __$b45(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    return {
        mainOffset: ctx__$6.mainOffset,
        secondaryOffset: ctx__$6.secondaryOffset,
        viewportOffset: ctx__$6.viewportOffset,
        directions: ctx__$6.directions,
        zIndexGroupLevel: ctx__$6.zIndexGroupLevel
    };
}

function __$b50(__$ctx, __$ref) {
    var mods__$54 = $$mods;
    var __$r__$56;
    var __$l0__$57 = $$mode;
    $$mode = "";
    var __$l1__$58 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$54.size,
            theme: mods__$54.theme,
            focused: mods__$54.focused,
            disabled: mods__$54.disabled,
            checked: mods__$54.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$59() {
            var __$r__$60;
            var __$l3__$61 = $$mode;
            $$mode = "content";
            __$r__$60 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$61;
            return __$r__$60;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$62;
    var __$l2__$63 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$62 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$63;
    __$r__$56 = __$r__$62;
    $$mode = __$l0__$57;
    __$ctx.ctx = __$l1__$58;
    return;
}

function __$b51(__$ctx, __$ref) {
    var mods__$27 = $$mods, optionToMenuItem__$28 = function(option) {
        var res__$29 = {
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
            res__$29.js.text = option.text;
            res__$29.content = [ option.icon, res__$29.content ];
        }
        return res__$29;
    };
    var __$r__$31;
    var __$l0__$32 = $$mode;
    $$mode = "";
    var __$l1__$33 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$27.size,
            theme: mods__$27.theme,
            disabled: mods__$27.disabled,
            mode: mods__$27.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$28)
            } : optionToMenuItem__$28(optionOrGroup);
        })
    };
    var __$r__$35;
    var __$l2__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$36;
    __$r__$31 = __$r__$35;
    $$mode = __$l0__$32;
    __$ctx.ctx = __$l1__$33;
    return;
}

function __$b52(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$69 = __$ctx.ctx.options, i__$70 = 0, j__$71, optionOrGroup__$72, option__$73, firstOption__$74, checkedOptions__$75 = [];
    while (optionOrGroup__$72 = options__$69[i__$70++]) {
        if (optionOrGroup__$72.group) {
            j__$71 = 0;
            while (option__$73 = optionOrGroup__$72.group[j__$71++]) {
                i__$70 === 1 && j__$71 === 1 && (firstOption__$74 = option__$73);
                option__$73.checked && checkedOptions__$75.push(option__$73);
            }
        } else {
            i__$70 === 1 && (firstOption__$74 = optionOrGroup__$72);
            optionOrGroup__$72.checked && checkedOptions__$75.push(optionOrGroup__$72);
        }
    }
    var __$r__$77;
    var __$l0__$78 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$79 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$75;
    var __$l2__$80 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$74;
    var __$r__$82;
    var __$l3__$83 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$82 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$83;
    __$r__$77 = __$r__$82;
    __$ctx._select = __$l0__$78;
    __$ctx._checkedOptions = __$l1__$79;
    __$ctx._firstOption = __$l2__$80;
    return;
}

function __$b53(__$ctx, __$ref) {
    var __$r__$49;
    var __$l0__$50 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$52;
    var __$l1__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$53;
    __$r__$49 = __$r__$52;
    __$ctx._button = __$l0__$50;
    return;
}

function __$b54(__$ctx, __$ref) {
    var __$r__$22;
    var __$l0__$23 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$25;
    var __$l1__$26 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$25 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$26;
    __$r__$22 = __$r__$25;
    __$ctx._menuMods = __$l0__$23;
    delete __$ctx._menuTheme;
    return;
}

function __$b55(__$ctx, __$ref) {
    var mods__$16 = $$mods;
    mods__$16.theme = mods__$16.theme || __$ctx._menuMods.theme;
    mods__$16.disabled = mods__$16.disabled || __$ctx._menuMods.disabled;
    var __$r__$18;
    var __$l0__$19 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$18 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$19;
    return;
}

function __$b56(__$ctx, __$ref) {
    var url__$87 = __$ctx.ctx.url;
    var __$r__$89;
    var __$l0__$90 = $$mode;
    $$mode = "";
    var __$l1__$91 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$87 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$93;
    var __$l2__$94 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$93 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$94;
    __$r__$89 = __$r__$93;
    $$mode = __$l0__$90;
    __$ctx.ctx = __$l1__$91;
    return;
}

function __$b57(__$ctx, __$ref) {
    var ie__$95 = __$ctx.ctx.ie, hideRule__$96 = !ie__$95 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$95 === "!IE" ? [ ie__$95, "<!-->", "<!--" ] : [ ie__$95, "", "" ];
    var __$r__$98;
    var __$l0__$99 = $$mode;
    $$mode = "";
    var __$l3__$100 = __$ctx.ctx;
    var __$l1__$101 = __$l3__$100._ieCommented;
    __$l3__$100._ieCommented = true;
    var __$l2__$102 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$96[0] + "]>" + hideRule__$96[1], __$ctx.ctx, hideRule__$96[2] + "<![endif]-->" ];
    __$r__$98 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$99;
    __$l3__$100._ieCommented = __$l1__$101;
    __$ctx.ctx = __$l2__$102;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$109 = __$ctx.ctx;
    var __$r__$111;
    var __$l0__$112 = $$mode;
    $$mode = "";
    var __$l1__$113 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$109.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$109.title
            }, {
                block: "ua"
            }, ctx__$109.head, ctx__$109.styles, ctx__$109.favicon ? {
                elem: "favicon",
                url: ctx__$109.favicon
            } : "" ]
        }, ctx__$109 ]
    } ];
    var __$r__$115;
    var __$l2__$116 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$115 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$116;
    __$r__$111 = __$r__$115;
    $$mode = __$l0__$112;
    __$ctx.ctx = __$l1__$113;
    __$ctx._defPageApplied = false;
    return;
}

function __$b59(__$ctx, __$ref) {
    var BEM_INTERNAL__$117 = __$ctx.BEM.INTERNAL, ctx__$118 = __$ctx.ctx, isBEM__$119, tag__$120, res__$121;
    var __$r__$123;
    var __$l0__$124 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$125 = $$block;
    var __$r__$127;
    var __$l1__$128 = $$mode;
    $$mode = "tag";
    __$r__$127 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$128;
    tag__$120 = __$r__$127;
    typeof tag__$120 !== "undefined" || (tag__$120 = ctx__$118.tag);
    typeof tag__$120 !== "undefined" || (tag__$120 = "div");
    if (tag__$120) {
        var jsParams__$129, js__$130;
        if (vBlock__$125 && ctx__$118.js !== false) {
            var __$r__$131;
            var __$l2__$132 = $$mode;
            $$mode = "js";
            __$r__$131 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$132;
            js__$130 = __$r__$131;
            js__$130 = js__$130 ? __$ctx.extend(ctx__$118.js, js__$130 === true ? {} : js__$130) : ctx__$118.js === true ? {} : ctx__$118.js;
            js__$130 && ((jsParams__$129 = {})[BEM_INTERNAL__$117.buildClass(vBlock__$125, ctx__$118.elem)] = js__$130);
        }
        __$ctx._str += "<" + tag__$120;
        var __$r__$133;
        var __$l3__$134 = $$mode;
        $$mode = "bem";
        __$r__$133 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$134;
        isBEM__$119 = __$r__$133;
        typeof isBEM__$119 !== "undefined" || (isBEM__$119 = typeof ctx__$118.bem !== "undefined" ? ctx__$118.bem : ctx__$118.block || ctx__$118.elem);
        var __$r__$136;
        var __$l4__$137 = $$mode;
        $$mode = "cls";
        __$r__$136 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$137;
        var cls__$135 = __$r__$136;
        cls__$135 || (cls__$135 = ctx__$118.cls);
        var addJSInitClass__$138 = ctx__$118.block && jsParams__$129;
        if (isBEM__$119 || cls__$135) {
            __$ctx._str += ' class="';
            if (isBEM__$119) {
                __$ctx._str += BEM_INTERNAL__$117.buildClasses(vBlock__$125, ctx__$118.elem, ctx__$118.elemMods || ctx__$118.mods);
                var __$r__$140;
                var __$l5__$141 = $$mode;
                $$mode = "mix";
                __$r__$140 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$141;
                var mix__$139 = __$r__$140;
                ctx__$118.mix && (mix__$139 = mix__$139 ? [].concat(mix__$139, ctx__$118.mix) : ctx__$118.mix);
                if (mix__$139) {
                    var visited__$142 = {}, visitedKey__$143 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$142[visitedKey__$143(vBlock__$125, $$elem)] = true;
                    __$ctx.isArray(mix__$139) || (mix__$139 = [ mix__$139 ]);
                    for (var i__$144 = 0; i__$144 < mix__$139.length; i__$144++) {
                        var mixItem__$145 = mix__$139[i__$144], hasItem__$146 = mixItem__$145.block || mixItem__$145.elem, mixBlock__$147 = mixItem__$145.block || mixItem__$145._block || $$block, mixElem__$148 = mixItem__$145.elem || mixItem__$145._elem || $$elem;
                        hasItem__$146 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$117[hasItem__$146 ? "buildClasses" : "buildModsClasses"](mixBlock__$147, mixItem__$145.elem || mixItem__$145._elem || (mixItem__$145.block ? undefined : $$elem), mixItem__$145.elemMods || mixItem__$145.mods);
                        if (mixItem__$145.js) {
                            (jsParams__$129 || (jsParams__$129 = {}))[BEM_INTERNAL__$117.buildClass(mixBlock__$147, mixItem__$145.elem)] = mixItem__$145.js === true ? {} : mixItem__$145.js;
                            addJSInitClass__$138 || (addJSInitClass__$138 = mixBlock__$147 && !mixItem__$145.elem);
                        }
                        if (hasItem__$146 && !visited__$142[visitedKey__$143(mixBlock__$147, mixElem__$148)]) {
                            visited__$142[visitedKey__$143(mixBlock__$147, mixElem__$148)] = true;
                            var __$r__$150;
                            var __$l6__$151 = $$mode;
                            $$mode = "mix";
                            var __$l7__$152 = $$block;
                            $$block = mixBlock__$147;
                            var __$l8__$153 = $$elem;
                            $$elem = mixElem__$148;
                            __$r__$150 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$151;
                            $$block = __$l7__$152;
                            $$elem = __$l8__$153;
                            var nestedMix__$149 = __$r__$150;
                            if (nestedMix__$149) {
                                for (var j__$154 = 0; j__$154 < nestedMix__$149.length; j__$154++) {
                                    var nestedItem__$155 = nestedMix__$149[j__$154];
                                    if (!nestedItem__$155.block && !nestedItem__$155.elem || !visited__$142[visitedKey__$143(nestedItem__$155.block, nestedItem__$155.elem)]) {
                                        nestedItem__$155._block = mixBlock__$147;
                                        nestedItem__$155._elem = mixElem__$148;
                                        mix__$139.splice(i__$144 + 1, 0, nestedItem__$155);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$135 && (__$ctx._str += isBEM__$119 ? " " + cls__$135 : cls__$135);
            __$ctx._str += addJSInitClass__$138 ? ' i-bem"' : '"';
        }
        if (isBEM__$119 && jsParams__$129) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$129)) + '"';
        }
        var __$r__$157;
        var __$l9__$158 = $$mode;
        $$mode = "attrs";
        __$r__$157 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$158;
        var attrs__$156 = __$r__$157;
        attrs__$156 = __$ctx.extend(attrs__$156, ctx__$118.attrs);
        if (attrs__$156) {
            var name__$159, attr__$160;
            for (name__$159 in attrs__$156) {
                attr__$160 = attrs__$156[name__$159];
                if (typeof attr__$160 === "undefined") continue;
                __$ctx._str += " " + name__$159 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$160) ? attr__$160 : __$ctx.reapply(attr__$160)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$120)) {
        __$ctx._str += "/>";
    } else {
        tag__$120 && (__$ctx._str += ">");
        var __$r__$162;
        var __$l10__$163 = $$mode;
        $$mode = "content";
        __$r__$162 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$163;
        var content__$161 = __$r__$162;
        if (content__$161 || content__$161 === 0) {
            isBEM__$119 = vBlock__$125 || $$elem;
            var __$r__$164;
            var __$l11__$165 = $$mode;
            $$mode = "";
            var __$l12__$166 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$167 = __$ctx.position;
            __$ctx.position = isBEM__$119 ? 1 : __$ctx.position;
            var __$l14__$168 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$119 ? 1 : __$ctx._listLength;
            var __$l15__$169 = __$ctx.ctx;
            __$ctx.ctx = content__$161;
            __$r__$164 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$165;
            __$ctx._notNewList = __$l12__$166;
            __$ctx.position = __$l13__$167;
            __$ctx._listLength = __$l14__$168;
            __$ctx.ctx = __$l15__$169;
        }
        tag__$120 && (__$ctx._str += "</" + tag__$120 + ">");
    }
    res__$121 = __$ctx._str;
    __$r__$123 = undefined;
    __$ctx._str = __$l0__$124;
    __$ctx._buf.push(res__$121);
    return;
}

function __$b72(__$ctx, __$ref) {
    var __$r__$171;
    var __$l0__$172 = $$mode;
    $$mode = "";
    var __$l1__$173 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$175;
    var __$l2__$176 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$175 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$176;
    __$r__$171 = __$r__$175;
    $$mode = __$l0__$172;
    __$ctx.ctx = __$l1__$173;
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$177 = __$ctx.ctx;
    if (ctx__$177 && ctx__$177 !== true || ctx__$177 === 0) {
        __$ctx._str += ctx__$177 + "";
    }
    return;
}

function __$b74(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b75(__$ctx, __$ref) {
    var ctx__$178 = __$ctx.ctx, len__$179 = ctx__$178.length, i__$180 = 0, prevPos__$181 = __$ctx.position, prevNotNewList__$182 = __$ctx._notNewList;
    if (prevNotNewList__$182) {
        __$ctx._listLength += len__$179 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$179;
    }
    __$ctx._notNewList = true;
    while (i__$180 < len__$179) (function __$lb__$183() {
        var __$r__$184;
        var __$l0__$185 = __$ctx.ctx;
        __$ctx.ctx = ctx__$178[i__$180++];
        __$r__$184 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$185;
        return __$r__$184;
    })();
    prevNotNewList__$182 || (__$ctx.position = prevPos__$181);
    return;
}

function __$b76(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$186 = __$ctx.ctx.block, vElem__$187 = __$ctx.ctx.elem, block__$188 = __$ctx._currBlock || $$block;
    var __$r__$190;
    var __$l0__$191 = $$mode;
    $$mode = "default";
    var __$l1__$192 = $$block;
    $$block = vBlock__$186 || (vElem__$187 ? block__$188 : undefined);
    var __$l2__$193 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$186 || vElem__$187 ? undefined : block__$188;
    var __$l3__$194 = $$elem;
    $$elem = vElem__$187;
    var __$l4__$195 = $$mods;
    $$mods = vBlock__$186 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$196 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$190 = undefined;
    $$mode = __$l0__$191;
    $$block = __$l1__$192;
    __$ctx._currBlock = __$l2__$193;
    $$elem = __$l3__$194;
    $$mods = __$l4__$195;
    $$elemMods = __$l5__$196;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b2(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b5(__$ctx, __$ref);
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
                var __$r = __$ctx.extend(function __$lb__$10() {
                    var __$r__$11;
                    var __$l0__$12 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$11 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$12;
                    return __$r__$11;
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
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                if ($$mods["mode"] === "radio-check" && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$3() {
                        var __$r__$4;
                        var __$l0__$5 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$4 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$5;
                        return __$r__$4;
                    }(), {
                        text: __$ctx.ctx.text
                    });
                    if (__$r !== __$ref) return __$r;
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$65() {
                        var __$r__$66;
                        var __$l0__$67 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                        __$r__$66 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$67;
                        return __$r__$66;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$37() {
                    var __$r__$38;
                    var __$l0__$39 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$38 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$39;
                    return __$r__$38;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b45(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$13() {
                    var __$r__$14;
                    var __$l0__$15 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$14 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$15;
                    return __$r__$14;
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

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b51(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 32768) === 0) {
                        var __$r = __$b56(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b57(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b59(__$ctx, __$ref);
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