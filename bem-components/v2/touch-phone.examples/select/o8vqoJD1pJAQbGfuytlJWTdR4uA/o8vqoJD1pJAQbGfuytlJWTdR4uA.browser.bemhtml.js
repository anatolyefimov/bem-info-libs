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
                return [ function __$lb__$93() {
                    var __$r__$94;
                    var __$l0__$95 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                    __$r__$94 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$95;
                    return __$r__$94;
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
                return [ function __$lb__$96() {
                    var __$r__$97;
                    var __$l0__$98 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$97 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$98;
                    return __$r__$97;
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
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
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
    var ctx__$44 = __$ctx.ctx, content__$45 = [ ctx__$44.icon ];
    "text" in ctx__$44 && content__$45.push({
        elem: "text",
        content: ctx__$44.text
    });
    return content__$45;
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
    var mods__$58 = $$mods;
    var __$r__$60;
    var __$l0__$61 = $$mode;
    $$mode = "";
    var __$l1__$62 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$58.size,
            theme: mods__$58.theme,
            focused: mods__$58.focused,
            disabled: mods__$58.disabled,
            checked: mods__$58.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$63() {
            var __$r__$64;
            var __$l3__$65 = $$mode;
            $$mode = "content";
            __$r__$64 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$65;
            return __$r__$64;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$66;
    var __$l2__$67 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$66 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$67;
    __$r__$60 = __$r__$66;
    $$mode = __$l0__$61;
    __$ctx.ctx = __$l1__$62;
    return;
}

function __$b13(__$ctx, __$ref) {
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

function __$b14(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$73 = __$ctx.ctx.options, i__$74 = 0, j__$75, optionOrGroup__$76, option__$77, firstOption__$78, checkedOptions__$79 = [];
    while (optionOrGroup__$76 = options__$73[i__$74++]) {
        if (optionOrGroup__$76.group) {
            j__$75 = 0;
            while (option__$77 = optionOrGroup__$76.group[j__$75++]) {
                i__$74 === 1 && j__$75 === 1 && (firstOption__$78 = option__$77);
                option__$77.checked && checkedOptions__$79.push(option__$77);
            }
        } else {
            i__$74 === 1 && (firstOption__$78 = optionOrGroup__$76);
            optionOrGroup__$76.checked && checkedOptions__$79.push(optionOrGroup__$76);
        }
    }
    var __$r__$81;
    var __$l0__$82 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$83 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$79;
    var __$l2__$84 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$78;
    var __$r__$86;
    var __$l3__$87 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$86 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$87;
    __$r__$81 = __$r__$86;
    __$ctx._select = __$l0__$82;
    __$ctx._checkedOptions = __$l1__$83;
    __$ctx._firstOption = __$l2__$84;
    return;
}

function __$b15(__$ctx, __$ref) {
    var __$r__$53;
    var __$l0__$54 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$56;
    var __$l1__$57 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$56 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$57;
    __$r__$53 = __$r__$56;
    __$ctx._button = __$l0__$54;
    return;
}

function __$b16(__$ctx, __$ref) {
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

function __$b17(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$22;
    var __$l0__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$23;
    return;
}

function __$b18(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$99 = __$ctx.ctx;
    var __$r__$101;
    var __$l0__$102 = $$mode;
    $$mode = "";
    var __$l1__$103 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$99.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$99.title
            }, {
                block: "ua"
            }, ctx__$99.head, ctx__$99.styles, ctx__$99.favicon ? {
                elem: "favicon",
                url: ctx__$99.favicon
            } : "" ]
        }, ctx__$99 ]
    } ];
    var __$r__$105;
    var __$l2__$106 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$105 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$106;
    __$r__$101 = __$r__$105;
    $$mode = __$l0__$102;
    __$ctx.ctx = __$l1__$103;
    __$ctx._defPageApplied = false;
    return;
}

function __$b19(__$ctx, __$ref) {
    var BEM_INTERNAL__$107 = __$ctx.BEM.INTERNAL, ctx__$108 = __$ctx.ctx, isBEM__$109, tag__$110, res__$111;
    var __$r__$113;
    var __$l0__$114 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$115 = $$block;
    var __$r__$117;
    var __$l1__$118 = $$mode;
    $$mode = "tag";
    __$r__$117 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$118;
    tag__$110 = __$r__$117;
    typeof tag__$110 !== "undefined" || (tag__$110 = ctx__$108.tag);
    typeof tag__$110 !== "undefined" || (tag__$110 = "div");
    if (tag__$110) {
        var jsParams__$119, js__$120;
        if (vBlock__$115 && ctx__$108.js !== false) {
            var __$r__$121;
            var __$l2__$122 = $$mode;
            $$mode = "js";
            __$r__$121 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$122;
            js__$120 = __$r__$121;
            js__$120 = js__$120 ? __$ctx.extend(ctx__$108.js, js__$120 === true ? {} : js__$120) : ctx__$108.js === true ? {} : ctx__$108.js;
            js__$120 && ((jsParams__$119 = {})[BEM_INTERNAL__$107.buildClass(vBlock__$115, ctx__$108.elem)] = js__$120);
        }
        __$ctx._str += "<" + tag__$110;
        var __$r__$123;
        var __$l3__$124 = $$mode;
        $$mode = "bem";
        __$r__$123 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$124;
        isBEM__$109 = __$r__$123;
        typeof isBEM__$109 !== "undefined" || (isBEM__$109 = typeof ctx__$108.bem !== "undefined" ? ctx__$108.bem : ctx__$108.block || ctx__$108.elem);
        var __$r__$126;
        var __$l4__$127 = $$mode;
        $$mode = "cls";
        __$r__$126 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$127;
        var cls__$125 = __$r__$126;
        cls__$125 || (cls__$125 = ctx__$108.cls);
        var addJSInitClass__$128 = ctx__$108.block && jsParams__$119;
        if (isBEM__$109 || cls__$125) {
            __$ctx._str += ' class="';
            if (isBEM__$109) {
                __$ctx._str += BEM_INTERNAL__$107.buildClasses(vBlock__$115, ctx__$108.elem, ctx__$108.elemMods || ctx__$108.mods);
                var __$r__$130;
                var __$l5__$131 = $$mode;
                $$mode = "mix";
                __$r__$130 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$131;
                var mix__$129 = __$r__$130;
                ctx__$108.mix && (mix__$129 = mix__$129 ? [].concat(mix__$129, ctx__$108.mix) : ctx__$108.mix);
                if (mix__$129) {
                    var visited__$132 = {}, visitedKey__$133 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$132[visitedKey__$133(vBlock__$115, $$elem)] = true;
                    __$ctx.isArray(mix__$129) || (mix__$129 = [ mix__$129 ]);
                    for (var i__$134 = 0; i__$134 < mix__$129.length; i__$134++) {
                        var mixItem__$135 = mix__$129[i__$134], hasItem__$136 = mixItem__$135.block || mixItem__$135.elem, mixBlock__$137 = mixItem__$135.block || mixItem__$135._block || $$block, mixElem__$138 = mixItem__$135.elem || mixItem__$135._elem || $$elem;
                        hasItem__$136 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$107[hasItem__$136 ? "buildClasses" : "buildModsClasses"](mixBlock__$137, mixItem__$135.elem || mixItem__$135._elem || (mixItem__$135.block ? undefined : $$elem), mixItem__$135.elemMods || mixItem__$135.mods);
                        if (mixItem__$135.js) {
                            (jsParams__$119 || (jsParams__$119 = {}))[BEM_INTERNAL__$107.buildClass(mixBlock__$137, mixItem__$135.elem)] = mixItem__$135.js === true ? {} : mixItem__$135.js;
                            addJSInitClass__$128 || (addJSInitClass__$128 = mixBlock__$137 && !mixItem__$135.elem);
                        }
                        if (hasItem__$136 && !visited__$132[visitedKey__$133(mixBlock__$137, mixElem__$138)]) {
                            visited__$132[visitedKey__$133(mixBlock__$137, mixElem__$138)] = true;
                            var __$r__$140;
                            var __$l6__$141 = $$mode;
                            $$mode = "mix";
                            var __$l7__$142 = $$block;
                            $$block = mixBlock__$137;
                            var __$l8__$143 = $$elem;
                            $$elem = mixElem__$138;
                            __$r__$140 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$141;
                            $$block = __$l7__$142;
                            $$elem = __$l8__$143;
                            var nestedMix__$139 = __$r__$140;
                            if (nestedMix__$139) {
                                for (var j__$144 = 0; j__$144 < nestedMix__$139.length; j__$144++) {
                                    var nestedItem__$145 = nestedMix__$139[j__$144];
                                    if (!nestedItem__$145.block && !nestedItem__$145.elem || !visited__$132[visitedKey__$133(nestedItem__$145.block, nestedItem__$145.elem)]) {
                                        nestedItem__$145._block = mixBlock__$137;
                                        nestedItem__$145._elem = mixElem__$138;
                                        mix__$129.splice(i__$134 + 1, 0, nestedItem__$145);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$125 && (__$ctx._str += isBEM__$109 ? " " + cls__$125 : cls__$125);
            __$ctx._str += addJSInitClass__$128 ? ' i-bem"' : '"';
        }
        if (isBEM__$109 && jsParams__$119) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$119)) + '"';
        }
        var __$r__$147;
        var __$l9__$148 = $$mode;
        $$mode = "attrs";
        __$r__$147 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$148;
        var attrs__$146 = __$r__$147;
        attrs__$146 = __$ctx.extend(attrs__$146, ctx__$108.attrs);
        if (attrs__$146) {
            var name__$149, attr__$150;
            for (name__$149 in attrs__$146) {
                attr__$150 = attrs__$146[name__$149];
                if (typeof attr__$150 === "undefined") continue;
                __$ctx._str += " " + name__$149 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$150) ? attr__$150 : __$ctx.reapply(attr__$150)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$110)) {
        __$ctx._str += "/>";
    } else {
        tag__$110 && (__$ctx._str += ">");
        var __$r__$152;
        var __$l10__$153 = $$mode;
        $$mode = "content";
        __$r__$152 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$153;
        var content__$151 = __$r__$152;
        if (content__$151 || content__$151 === 0) {
            isBEM__$109 = vBlock__$115 || $$elem;
            var __$r__$154;
            var __$l11__$155 = $$mode;
            $$mode = "";
            var __$l12__$156 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$157 = __$ctx.position;
            __$ctx.position = isBEM__$109 ? 1 : __$ctx.position;
            var __$l14__$158 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$109 ? 1 : __$ctx._listLength;
            var __$l15__$159 = __$ctx.ctx;
            __$ctx.ctx = content__$151;
            __$r__$154 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$155;
            __$ctx._notNewList = __$l12__$156;
            __$ctx.position = __$l13__$157;
            __$ctx._listLength = __$l14__$158;
            __$ctx.ctx = __$l15__$159;
        }
        tag__$110 && (__$ctx._str += "</" + tag__$110 + ">");
    }
    res__$111 = __$ctx._str;
    __$r__$113 = undefined;
    __$ctx._str = __$l0__$114;
    __$ctx._buf.push(res__$111);
    return;
}

function __$b21(__$ctx, __$ref) {
    var ctx__$72 = __$ctx.ctx;
    return {
        name: ctx__$72.name,
        optionsMaxHeight: ctx__$72.optionsMaxHeight
    };
}

function __$b24(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx;
    return {
        mainOffset: ctx__$11.mainOffset,
        secondaryOffset: ctx__$11.secondaryOffset,
        viewportOffset: ctx__$11.viewportOffset,
        directions: ctx__$11.directions,
        zIndexGroupLevel: ctx__$11.zIndexGroupLevel
    };
}

function __$b30(__$ctx, __$ref) {
    var val__$68 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$68) ? val__$68 : JSON.stringify(val__$68),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b32(__$ctx, __$ref) {
    var ctx__$46 = __$ctx.ctx, attrs__$47 = {
        type: $$mods.type || "button",
        name: ctx__$46.name,
        value: ctx__$46.val
    };
    $$mods.disabled && (attrs__$47.disabled = "disabled");
    return __$ctx.extend(function __$lb__$48() {
        var __$r__$49;
        var __$l0__$50 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 512;
        __$r__$49 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$50;
        return __$r__$49;
    }(), attrs__$47);
}

function __$b33(__$ctx, __$ref) {
    var ctx__$51 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$51.tabIndex,
        id: ctx__$51.id,
        title: ctx__$51.title
    };
}

function __$b37(__$ctx, __$ref) {
    var attrs__$24 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$24.tabindex = 0);
    return attrs__$24;
}

function __$b45(__$ctx, __$ref) {
    var mix__$88 = function __$lb__$89() {
        var __$r__$90;
        var __$l0__$91 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 16384;
        __$r__$90 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$91;
        return __$r__$90;
    }(), uaMix__$92 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$88 ? uaMix__$92.concat(mix__$88) : uaMix__$92;
}

function __$b69(__$ctx, __$ref) {
    var __$r__$161;
    var __$l0__$162 = $$mode;
    $$mode = "";
    var __$l1__$163 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$165;
    var __$l2__$166 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$165 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$166;
    __$r__$161 = __$r__$165;
    $$mode = __$l0__$162;
    __$ctx.ctx = __$l1__$163;
    return;
}

function __$b70(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$167 = __$ctx.ctx;
    if (ctx__$167 && ctx__$167 !== true || ctx__$167 === 0) {
        __$ctx._str += ctx__$167 + "";
    }
    return;
}

function __$b71(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b72(__$ctx, __$ref) {
    var ctx__$168 = __$ctx.ctx, len__$169 = ctx__$168.length, i__$170 = 0, prevPos__$171 = __$ctx.position, prevNotNewList__$172 = __$ctx._notNewList;
    if (prevNotNewList__$172) {
        __$ctx._listLength += len__$169 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$169;
    }
    __$ctx._notNewList = true;
    while (i__$170 < len__$169) (function __$lb__$173() {
        var __$r__$174;
        var __$l0__$175 = __$ctx.ctx;
        __$ctx.ctx = ctx__$168[i__$170++];
        __$r__$174 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$175;
        return __$r__$174;
    })();
    prevNotNewList__$172 || (__$ctx.position = prevPos__$171);
    return;
}

function __$b73(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$176 = __$ctx.ctx.block, vElem__$177 = __$ctx.ctx.elem, block__$178 = __$ctx._currBlock || $$block;
    var __$r__$180;
    var __$l0__$181 = $$mode;
    $$mode = "default";
    var __$l1__$182 = $$block;
    $$block = vBlock__$176 || (vElem__$177 ? block__$178 : undefined);
    var __$l2__$183 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$176 || vElem__$177 ? undefined : block__$178;
    var __$l3__$184 = $$elem;
    $$elem = vElem__$177;
    var __$l4__$185 = $$mods;
    $$mods = vBlock__$176 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$186 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$180 = undefined;
    $$mode = __$l0__$181;
    $$block = __$l1__$182;
    __$ctx._currBlock = __$l2__$183;
    $$elem = __$l3__$184;
    $$mods = __$l4__$185;
    $$elemMods = __$l5__$186;
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
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b18(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b19(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend(function __$lb__$69() {
                    var __$r__$70;
                    var __$l0__$71 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$70 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$71;
                    return __$r__$70;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b21(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$41() {
                    var __$r__$42;
                    var __$l0__$43 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$42 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$43;
                    return __$r__$42;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b24(__$ctx, __$ref);
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
    if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b30(__$ctx, __$ref);
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
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b33(__$ctx, __$ref);
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
            var __$r = __$b37(__$ctx, __$ref);
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