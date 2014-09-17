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
        var __$t = $$block;
        if (__$t === "select") {
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
                var __$r = __$b5(__$ctx, __$ref);
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
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32768) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$105() {
                    var __$r__$106;
                    var __$l0__$107 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                    __$r__$106 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$107;
                    return __$r__$106;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 65536) === 0) {
                return [ function __$lb__$108() {
                    var __$r__$109;
                    var __$l0__$110 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$109 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$110;
                    return __$r__$109;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g2(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b69(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b70(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b72(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b73(__$ctx, __$ref);
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

function __$b5(__$ctx, __$ref) {
    var ctx__$45 = __$ctx.ctx, content__$46 = [ ctx__$45.icon ];
    "text" in ctx__$45 && content__$46.push({
        elem: "text",
        content: ctx__$45.text
    });
    return content__$46;
}

function __$b11(__$ctx, __$ref) {
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

function __$b12(__$ctx, __$ref) {
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
            focused: mods__$59.focused,
            disabled: mods__$59.disabled,
            checked: mods__$59.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
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
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$67 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$68;
    __$r__$61 = __$r__$67;
    $$mode = __$l0__$62;
    __$ctx.ctx = __$l1__$63;
    return;
}

function __$b13(__$ctx, __$ref) {
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

function __$b14(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$74 = __$ctx.ctx.options, i__$75 = 0, j__$76, optionOrGroup__$77, option__$78, firstOption__$79, checkedOptions__$80 = [];
    while (optionOrGroup__$77 = options__$74[i__$75++]) {
        if (optionOrGroup__$77.group) {
            j__$76 = 0;
            while (option__$78 = optionOrGroup__$77.group[j__$76++]) {
                i__$75 === 1 && j__$76 === 1 && (firstOption__$79 = option__$78);
                option__$78.checked && checkedOptions__$80.push(option__$78);
            }
        } else {
            i__$75 === 1 && (firstOption__$79 = optionOrGroup__$77);
            optionOrGroup__$77.checked && checkedOptions__$80.push(optionOrGroup__$77);
        }
    }
    var __$r__$82;
    var __$l0__$83 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$84 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$80;
    var __$l2__$85 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$79;
    var __$r__$87;
    var __$l3__$88 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$87 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$88;
    __$r__$82 = __$r__$87;
    __$ctx._select = __$l0__$83;
    __$ctx._checkedOptions = __$l1__$84;
    __$ctx._firstOption = __$l2__$85;
    return;
}

function __$b15(__$ctx, __$ref) {
    var __$r__$54;
    var __$l0__$55 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$57;
    var __$l1__$58 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$57 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$58;
    __$r__$54 = __$r__$57;
    __$ctx._button = __$l0__$55;
    return;
}

function __$b16(__$ctx, __$ref) {
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

function __$b17(__$ctx, __$ref) {
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

function __$b18(__$ctx, __$ref) {
    var url__$89 = __$ctx.ctx.url;
    var __$r__$91;
    var __$l0__$92 = $$mode;
    $$mode = "";
    var __$l1__$93 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$89 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$95;
    var __$l2__$96 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$95 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$96;
    __$r__$91 = __$r__$95;
    $$mode = __$l0__$92;
    __$ctx.ctx = __$l1__$93;
    return;
}

function __$b19(__$ctx, __$ref) {
    var ie__$97 = __$ctx.ctx.ie, hideRule__$98 = !ie__$97 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$97 === "!IE" ? [ ie__$97, "<!-->", "<!--" ] : [ ie__$97, "", "" ];
    var __$r__$100;
    var __$l0__$101 = $$mode;
    $$mode = "";
    var __$l3__$102 = __$ctx.ctx;
    var __$l1__$103 = __$l3__$102._ieCommented;
    __$l3__$102._ieCommented = true;
    var __$l2__$104 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$98[0] + "]>" + hideRule__$98[1], __$ctx.ctx, hideRule__$98[2] + "<![endif]-->" ];
    __$r__$100 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$101;
    __$l3__$102._ieCommented = __$l1__$103;
    __$ctx.ctx = __$l2__$104;
    return;
}

function __$b20(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$111 = __$ctx.ctx;
    var __$r__$113;
    var __$l0__$114 = $$mode;
    $$mode = "";
    var __$l1__$115 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$111.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$111.title
            }, {
                block: "ua"
            }, ctx__$111.head, ctx__$111.styles, ctx__$111.favicon ? {
                elem: "favicon",
                url: ctx__$111.favicon
            } : "" ]
        }, ctx__$111 ]
    } ];
    var __$r__$117;
    var __$l2__$118 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$117 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$118;
    __$r__$113 = __$r__$117;
    $$mode = __$l0__$114;
    __$ctx.ctx = __$l1__$115;
    __$ctx._defPageApplied = false;
    return;
}

function __$b21(__$ctx, __$ref) {
    var BEM_INTERNAL__$119 = __$ctx.BEM.INTERNAL, ctx__$120 = __$ctx.ctx, isBEM__$121, tag__$122, res__$123;
    var __$r__$125;
    var __$l0__$126 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$127 = $$block;
    var __$r__$129;
    var __$l1__$130 = $$mode;
    $$mode = "tag";
    __$r__$129 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$130;
    tag__$122 = __$r__$129;
    typeof tag__$122 !== "undefined" || (tag__$122 = ctx__$120.tag);
    typeof tag__$122 !== "undefined" || (tag__$122 = "div");
    if (tag__$122) {
        var jsParams__$131, js__$132;
        if (vBlock__$127 && ctx__$120.js !== false) {
            var __$r__$133;
            var __$l2__$134 = $$mode;
            $$mode = "js";
            __$r__$133 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$134;
            js__$132 = __$r__$133;
            js__$132 = js__$132 ? __$ctx.extend(ctx__$120.js, js__$132 === true ? {} : js__$132) : ctx__$120.js === true ? {} : ctx__$120.js;
            js__$132 && ((jsParams__$131 = {})[BEM_INTERNAL__$119.buildClass(vBlock__$127, ctx__$120.elem)] = js__$132);
        }
        __$ctx._str += "<" + tag__$122;
        var __$r__$135;
        var __$l3__$136 = $$mode;
        $$mode = "bem";
        __$r__$135 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$136;
        isBEM__$121 = __$r__$135;
        typeof isBEM__$121 !== "undefined" || (isBEM__$121 = typeof ctx__$120.bem !== "undefined" ? ctx__$120.bem : ctx__$120.block || ctx__$120.elem);
        var __$r__$138;
        var __$l4__$139 = $$mode;
        $$mode = "cls";
        __$r__$138 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$139;
        var cls__$137 = __$r__$138;
        cls__$137 || (cls__$137 = ctx__$120.cls);
        var addJSInitClass__$140 = ctx__$120.block && jsParams__$131;
        if (isBEM__$121 || cls__$137) {
            __$ctx._str += ' class="';
            if (isBEM__$121) {
                __$ctx._str += BEM_INTERNAL__$119.buildClasses(vBlock__$127, ctx__$120.elem, ctx__$120.elemMods || ctx__$120.mods);
                var __$r__$142;
                var __$l5__$143 = $$mode;
                $$mode = "mix";
                __$r__$142 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$143;
                var mix__$141 = __$r__$142;
                ctx__$120.mix && (mix__$141 = mix__$141 ? [].concat(mix__$141, ctx__$120.mix) : ctx__$120.mix);
                if (mix__$141) {
                    var visited__$144 = {}, visitedKey__$145 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$144[visitedKey__$145(vBlock__$127, $$elem)] = true;
                    __$ctx.isArray(mix__$141) || (mix__$141 = [ mix__$141 ]);
                    for (var i__$146 = 0; i__$146 < mix__$141.length; i__$146++) {
                        var mixItem__$147 = mix__$141[i__$146], hasItem__$148 = mixItem__$147.block || mixItem__$147.elem, mixBlock__$149 = mixItem__$147.block || mixItem__$147._block || $$block, mixElem__$150 = mixItem__$147.elem || mixItem__$147._elem || $$elem;
                        hasItem__$148 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$119[hasItem__$148 ? "buildClasses" : "buildModsClasses"](mixBlock__$149, mixItem__$147.elem || mixItem__$147._elem || (mixItem__$147.block ? undefined : $$elem), mixItem__$147.elemMods || mixItem__$147.mods);
                        if (mixItem__$147.js) {
                            (jsParams__$131 || (jsParams__$131 = {}))[BEM_INTERNAL__$119.buildClass(mixBlock__$149, mixItem__$147.elem)] = mixItem__$147.js === true ? {} : mixItem__$147.js;
                            addJSInitClass__$140 || (addJSInitClass__$140 = mixBlock__$149 && !mixItem__$147.elem);
                        }
                        if (hasItem__$148 && !visited__$144[visitedKey__$145(mixBlock__$149, mixElem__$150)]) {
                            visited__$144[visitedKey__$145(mixBlock__$149, mixElem__$150)] = true;
                            var __$r__$152;
                            var __$l6__$153 = $$mode;
                            $$mode = "mix";
                            var __$l7__$154 = $$block;
                            $$block = mixBlock__$149;
                            var __$l8__$155 = $$elem;
                            $$elem = mixElem__$150;
                            __$r__$152 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$153;
                            $$block = __$l7__$154;
                            $$elem = __$l8__$155;
                            var nestedMix__$151 = __$r__$152;
                            if (nestedMix__$151) {
                                for (var j__$156 = 0; j__$156 < nestedMix__$151.length; j__$156++) {
                                    var nestedItem__$157 = nestedMix__$151[j__$156];
                                    if (!nestedItem__$157.block && !nestedItem__$157.elem || !visited__$144[visitedKey__$145(nestedItem__$157.block, nestedItem__$157.elem)]) {
                                        nestedItem__$157._block = mixBlock__$149;
                                        nestedItem__$157._elem = mixElem__$150;
                                        mix__$141.splice(i__$146 + 1, 0, nestedItem__$157);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$137 && (__$ctx._str += isBEM__$121 ? " " + cls__$137 : cls__$137);
            __$ctx._str += addJSInitClass__$140 ? ' i-bem"' : '"';
        }
        if (isBEM__$121 && jsParams__$131) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$131)) + '"';
        }
        var __$r__$159;
        var __$l9__$160 = $$mode;
        $$mode = "attrs";
        __$r__$159 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$160;
        var attrs__$158 = __$r__$159;
        attrs__$158 = __$ctx.extend(attrs__$158, ctx__$120.attrs);
        if (attrs__$158) {
            var name__$161, attr__$162;
            for (name__$161 in attrs__$158) {
                attr__$162 = attrs__$158[name__$161];
                if (typeof attr__$162 === "undefined") continue;
                __$ctx._str += " " + name__$161 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$162) ? attr__$162 : __$ctx.reapply(attr__$162)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$122)) {
        __$ctx._str += "/>";
    } else {
        tag__$122 && (__$ctx._str += ">");
        var __$r__$164;
        var __$l10__$165 = $$mode;
        $$mode = "content";
        __$r__$164 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$165;
        var content__$163 = __$r__$164;
        if (content__$163 || content__$163 === 0) {
            isBEM__$121 = vBlock__$127 || $$elem;
            var __$r__$166;
            var __$l11__$167 = $$mode;
            $$mode = "";
            var __$l12__$168 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$169 = __$ctx.position;
            __$ctx.position = isBEM__$121 ? 1 : __$ctx.position;
            var __$l14__$170 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$121 ? 1 : __$ctx._listLength;
            var __$l15__$171 = __$ctx.ctx;
            __$ctx.ctx = content__$163;
            __$r__$166 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$167;
            __$ctx._notNewList = __$l12__$168;
            __$ctx.position = __$l13__$169;
            __$ctx._listLength = __$l14__$170;
            __$ctx.ctx = __$l15__$171;
        }
        tag__$122 && (__$ctx._str += "</" + tag__$122 + ">");
    }
    res__$123 = __$ctx._str;
    __$r__$125 = undefined;
    __$ctx._str = __$l0__$126;
    __$ctx._buf.push(res__$123);
    return;
}

function __$b23(__$ctx, __$ref) {
    var ctx__$73 = __$ctx.ctx;
    return {
        name: ctx__$73.name,
        optionsMaxHeight: ctx__$73.optionsMaxHeight
    };
}

function __$b26(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx;
    return {
        mainOffset: ctx__$11.mainOffset,
        secondaryOffset: ctx__$11.secondaryOffset,
        viewportOffset: ctx__$11.viewportOffset,
        directions: ctx__$11.directions,
        zIndexGroupLevel: ctx__$11.zIndexGroupLevel
    };
}

function __$b31(__$ctx, __$ref) {
    var val__$69 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$69) ? val__$69 : JSON.stringify(val__$69),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b33(__$ctx, __$ref) {
    var ctx__$47 = __$ctx.ctx, attrs__$48 = {
        type: $$mods.type || "button",
        name: ctx__$47.name,
        value: ctx__$47.val
    };
    $$mods.disabled && (attrs__$48.disabled = "disabled");
    return __$ctx.extend(function __$lb__$49() {
        var __$r__$50;
        var __$l0__$51 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$50 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$51;
        return __$r__$50;
    }(), attrs__$48);
}

function __$b34(__$ctx, __$ref) {
    var ctx__$52 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$52.tabIndex,
        id: ctx__$52.id,
        title: ctx__$52.title
    };
}

function __$b38(__$ctx, __$ref) {
    var attrs__$25 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$25.tabindex = 0);
    return attrs__$25;
}

function __$b69(__$ctx, __$ref) {
    var __$r__$173;
    var __$l0__$174 = $$mode;
    $$mode = "";
    var __$l1__$175 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$177;
    var __$l2__$178 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$177 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$178;
    __$r__$173 = __$r__$177;
    $$mode = __$l0__$174;
    __$ctx.ctx = __$l1__$175;
    return;
}

function __$b70(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$179 = __$ctx.ctx;
    if (ctx__$179 && ctx__$179 !== true || ctx__$179 === 0) {
        __$ctx._str += ctx__$179 + "";
    }
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b72(__$ctx, __$ref) {
    var ctx__$180 = __$ctx.ctx, len__$181 = ctx__$180.length, i__$182 = 0, prevPos__$183 = __$ctx.position, prevNotNewList__$184 = __$ctx._notNewList;
    if (prevNotNewList__$184) {
        __$ctx._listLength += len__$181 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$181;
    }
    __$ctx._notNewList = true;
    while (i__$182 < len__$181) (function __$lb__$185() {
        var __$r__$186;
        var __$l0__$187 = __$ctx.ctx;
        __$ctx.ctx = ctx__$180[i__$182++];
        __$r__$186 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$187;
        return __$r__$186;
    })();
    prevNotNewList__$184 || (__$ctx.position = prevPos__$183);
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$188 = __$ctx.ctx.block, vElem__$189 = __$ctx.ctx.elem, block__$190 = __$ctx._currBlock || $$block;
    var __$r__$192;
    var __$l0__$193 = $$mode;
    $$mode = "default";
    var __$l1__$194 = $$block;
    $$block = vBlock__$188 || (vElem__$189 ? block__$190 : undefined);
    var __$l2__$195 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$188 || vElem__$189 ? undefined : block__$190;
    var __$l3__$196 = $$elem;
    $$elem = vElem__$189;
    var __$l4__$197 = $$mods;
    $$mods = vBlock__$188 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$198 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$192 = undefined;
    $$mode = __$l0__$193;
    $$block = __$l1__$194;
    __$ctx._currBlock = __$l2__$195;
    $$elem = __$l3__$196;
    $$mods = __$l4__$197;
    $$elemMods = __$l5__$198;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b11(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b12(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b13(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b14(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b15(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b16(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b17(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16384) === 0) {
                        var __$r = __$b18(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b19(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b20(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b21(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend(function __$lb__$70() {
                    var __$r__$71;
                    var __$l0__$72 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$71 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$72;
                    return __$r__$71;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b23(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$42() {
                    var __$r__$43;
                    var __$l0__$44 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$43 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$44;
                    return __$r__$43;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b26(__$ctx, __$ref);
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
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b31(__$ctx, __$ref);
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
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b34(__$ctx, __$ref);
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