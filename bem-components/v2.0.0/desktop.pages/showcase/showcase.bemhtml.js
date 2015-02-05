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
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "modal") {
            if (!$$elem) {
                return {
                    block: "popup",
                    js: {
                        zIndexGroupLevel: __$ctx.ctx.zIndexGroupLevel || 20
                    },
                    mods: {
                        autoclosable: $$mods.autoclosable
                    }
                };
            }
        } else if (__$t === "link") {
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
        } else if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
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
    } else if (__$t === "js") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
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
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 268435456) === 0) {
            var __$r = __$b142(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b143(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b144(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b145(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b146(__$ctx, __$ref);
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
}, function() {
    (function(global, bem_) {
        if (bem_.I18N) {
            return;
        }
        global.BEM = bem_;
        var i18n = global.BEM.I18N = function(keyset, key) {
            return key;
        };
        i18n.keyset = function() {
            return i18n;
        };
        i18n.key = function(key) {
            return key;
        };
        i18n.lang = function() {
            return;
        };
    })(this, typeof BEM === "undefined" ? {} : BEM);
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_textarea"] = undefined;
        ctx["_attach"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
        ctx["_menuMods"] = undefined;
        ctx["_input"] = undefined;
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

function __$b3(__$ctx, __$ref) {
    var ctx__$159 = __$ctx.ctx, content__$160 = [ ctx__$159.icon ];
    "text" in ctx__$159 && content__$160.push({
        elem: "text",
        content: ctx__$159.text
    });
    return content__$160;
}

function __$b4(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx, mods__$1 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$1.checked,
            disabled: mods__$1.disabled,
            theme: mods__$1.theme,
            size: mods__$1.size
        },
        title: ctx__$0.title,
        content: [ ctx__$0.icon, typeof ctx__$0.text !== "undefined" ? {
            elem: "text",
            content: ctx__$0.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$1.checked,
        disabled: mods__$1.disabled,
        name: ctx__$0.name,
        val: ctx__$0.val
    } ];
}

function __$b5(__$ctx, __$ref) {
    var ctx__$150 = __$ctx.ctx, mods__$151 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$151.checked,
            disabled: mods__$151.disabled,
            name: ctx__$150.name,
            val: ctx__$150.val
        }
    }, ctx__$150.text ];
}

function __$b9(__$ctx, __$ref) {
    var ctx__$28 = __$ctx.ctx, button__$29 = ctx__$28.button;
    __$ctx.isSimple(button__$29) && (button__$29 = {
        block: "button",
        tag: "span",
        text: button__$29
    });
    var attachMods__$30 = $$mods, buttonMods__$31 = button__$29.mods || (button__$29.mods = {});
    [ "size", "theme", "disabled", "focused" ].forEach(function(mod) {
        buttonMods__$31[mod] || (buttonMods__$31[mod] = attachMods__$30[mod]);
    });
    return [ button__$29, {
        elem: "no-file",
        content: __$ctx.ctx.noFileText
    } ];
}

function __$b12(__$ctx, __$ref) {
    var res__$58 = __$ctx._checkedOptions.map(function(option) {
        return {
            elem: "control",
            val: option.val
        };
    });
    res__$58.push(function __$lb__$59() {
        var __$r__$60;
        var __$l0__$61 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 256;
        __$r__$60 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$61;
        return __$r__$60;
    }());
    return res__$58;
}

function __$b13(__$ctx, __$ref) {
    var checkedOptions__$62 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$62.length === 1 ? checkedOptions__$62[0].text : checkedOptions__$62.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b17(__$ctx, __$ref) {
    var ctx__$48 = __$ctx.ctx, mods__$49 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: mods__$49.mode === "radio-check" ? "check" : "radio",
            checked: mods__$49.checked,
            disabled: mods__$49.disabled,
            theme: mods__$49.theme,
            size: mods__$49.size
        },
        title: ctx__$48.title,
        content: [ ctx__$48.icon, typeof ctx__$48.text !== "undefined" ? {
            elem: "text",
            content: ctx__$48.text
        } : "" ]
    }, {
        block: "radio",
        elem: "control",
        checked: mods__$49.checked,
        disabled: mods__$49.disabled,
        name: ctx__$48.name,
        val: ctx__$48.val
    } ];
}

function __$b18(__$ctx, __$ref) {
    var ctx__$52 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$52.name,
            val: ctx__$52.val
        }
    }, ctx__$52.text ];
}

function __$b19(__$ctx, __$ref) {
    var mods__$53 = $$mods, ctx__$54 = __$ctx.ctx, isValDef__$55 = typeof ctx__$54.val !== "undefined";
    return (ctx__$54.options || []).map(function(option, i) {
        return [ !!i && !mods__$53.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$53.type,
                mode: mods__$53.mode,
                theme: mods__$53.theme,
                size: mods__$53.size,
                checked: isValDef__$55 && ctx__$54.val === option.val,
                disabled: option.disabled || mods__$53.disabled
            },
            name: ctx__$54.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b23(__$ctx, __$ref) {
    var mods__$152 = $$mods, ctx__$153 = __$ctx.ctx, val__$154 = ctx__$153.val, isValDef__$155 = typeof val__$154 !== "undefined";
    if (isValDef__$155 && !Array.isArray(val__$154)) throw Error("checkbox-group: val must be an array");
    return (ctx__$153.options || []).map(function(option, i) {
        return [ !!i && !mods__$152.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$152.type,
                theme: mods__$152.theme,
                size: mods__$152.size,
                checked: isValDef__$155 && val__$154.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$152.disabled
            },
            name: ctx__$153.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b47(__$ctx, __$ref) {
    var ctx__$90 = __$ctx.ctx;
    return {
        name: ctx__$90.name,
        optionsMaxHeight: ctx__$90.optionsMaxHeight
    };
}

function __$b51(__$ctx, __$ref) {
    var ctx__$66 = __$ctx.ctx;
    return {
        mainOffset: ctx__$66.mainOffset,
        secondaryOffset: ctx__$66.secondaryOffset,
        viewportOffset: ctx__$66.viewportOffset,
        directions: ctx__$66.directions,
        zIndexGroupLevel: ctx__$66.zIndexGroupLevel
    };
}

function __$b99(__$ctx, __$ref) {
    var ctx__$161 = __$ctx.ctx, attrs__$162 = {
        type: $$mods.type || "button",
        name: ctx__$161.name,
        value: ctx__$161.val
    };
    $$mods.disabled && (attrs__$162.disabled = "disabled");
    return __$ctx.extend(function __$lb__$163() {
        var __$r__$164;
        var __$l0__$165 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
        __$r__$164 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$165;
        return __$r__$164;
    }(), attrs__$162);
}

function __$b100(__$ctx, __$ref) {
    var ctx__$166 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$166.tabIndex,
        id: ctx__$166.id,
        title: ctx__$166.title
    };
}

function __$b101(__$ctx, __$ref) {
    var attrs__$148 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$149 = __$ctx.ctx;
    attrs__$148.name = ctx__$149.name;
    attrs__$148.value = ctx__$149.val;
    ctx__$149.checked && (attrs__$148.checked = "checked");
    ctx__$149.disabled && (attrs__$148.disabled = "disabled");
    return attrs__$148;
}

function __$b102(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx, attrs__$9 = {}, tabIndex__$10;
    if (!$$mods.disabled) {
        if (ctx__$8.url) {
            attrs__$9.href = ctx__$8.url;
            tabIndex__$10 = ctx__$8.tabIndex;
        } else {
            tabIndex__$10 = ctx__$8.tabIndex || 0;
        }
    }
    typeof tabIndex__$10 === "undefined" || (attrs__$9.tabindex = tabIndex__$10);
    ctx__$8.title && (attrs__$9.title = ctx__$8.title);
    ctx__$8.target && (attrs__$9.target = ctx__$8.target);
    return attrs__$9;
}

function __$b103(__$ctx, __$ref) {
    var textarea__$15 = __$ctx._textarea, attrs__$16 = {
        id: textarea__$15.id,
        name: textarea__$15.name,
        tabindex: textarea__$15.tabIndex,
        placeholder: textarea__$15.placeholder
    };
    textarea__$15.autocomplete === false && (attrs__$16.autocomplete = "off");
    $$mods.disabled && (attrs__$16.disabled = "disabled");
    return attrs__$16;
}

function __$b104(__$ctx, __$ref) {
    var attrs__$23 = {
        type: "file"
    }, attach__$24 = __$ctx._attach;
    if (attach__$24) {
        attrs__$23.name = attach__$24.name;
        attach__$24.mods && attach__$24.mods.disabled && (attrs__$23.disabled = "disabled");
        attach__$24.tabIndex && (attrs__$23.tabindex = attach__$24.tabIndex);
    }
    return attrs__$23;
}

function __$b106(__$ctx, __$ref) {
    var ctx__$50 = __$ctx.ctx, attrs__$51 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$50.name,
        value: ctx__$50.val
    };
    ctx__$50.checked && (attrs__$51.checked = "checked");
    ctx__$50.disabled && (attrs__$51.disabled = "disabled");
    return attrs__$51;
}

function __$b107(__$ctx, __$ref) {
    var attrs__$56 = {
        "aria-hidden": "true"
    }, url__$57 = __$ctx.ctx.url;
    if (url__$57) attrs__$56.style = "background-image:url(" + url__$57 + ")";
    return attrs__$56;
}

function __$b111(__$ctx, __$ref) {
    var attrs__$124 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$124.tabindex = 0);
    return attrs__$124;
}

function __$b113(__$ctx, __$ref) {
    var input__$140 = __$ctx._input, attrs__$141 = {
        id: input__$140.id,
        name: input__$140.name,
        value: input__$140.val,
        maxlength: input__$140.maxLength,
        tabindex: input__$140.tabIndex,
        placeholder: input__$140.placeholder
    };
    input__$140.autocomplete === false && (attrs__$141.autocomplete = "off");
    $$mods.disabled && (attrs__$141.disabled = "disabled");
    return attrs__$141;
}

function __$b118(__$ctx, __$ref) {
    var ctx__$11 = __$ctx.ctx;
    typeof ctx__$11.url === "object" && (ctx__$11.url = __$ctx.reapply(ctx__$11.url));
    var __$r__$13;
    var __$l0__$14 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$13 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$14;
    return;
}

function __$b119(__$ctx, __$ref) {
    var __$r__$18;
    var __$l0__$19 = __$ctx._textarea;
    __$ctx._textarea = __$ctx.ctx;
    var __$r__$21;
    var __$l1__$22 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$21 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$22;
    __$r__$18 = __$r__$21;
    __$ctx._textarea = __$l0__$19;
    return;
}

function __$b120(__$ctx, __$ref) {
    var __$r__$33;
    var __$l0__$34 = __$ctx._attach;
    __$ctx._attach = __$ctx.ctx;
    var __$r__$36;
    var __$l1__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$37;
    __$r__$33 = __$r__$36;
    __$ctx._attach = __$l0__$34;
    return;
}

function __$b121(__$ctx, __$ref) {
    if (!__$ctx.ctx) return "";
    var ctx__$38 = __$ctx.ctx, keyset__$39 = ctx__$38.keyset, key__$40 = ctx__$38.key, params__$41 = ctx__$38.params || {};
    if (!(keyset__$39 || key__$40)) return "";
    if (typeof ctx__$38.content === "undefined" || ctx__$38.content !== null) {
        params__$41.content = exports.apply(ctx__$38.content);
    }
    __$ctx._buf.push(BEM.I18N(keyset__$39, key__$40, params__$41));
    return;
}

function __$b122(__$ctx, __$ref) {
    var mods__$77 = $$mods;
    var __$r__$79;
    var __$l0__$80 = $$mode;
    $$mode = "";
    var __$l1__$81 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$77.size,
            theme: mods__$77.theme,
            view: mods__$77.view,
            focused: mods__$77.focused,
            disabled: mods__$77.disabled,
            checked: mods__$77.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        tabIndex: __$ctx._select.tabIndex,
        content: [ function __$lb__$82() {
            var __$r__$83;
            var __$l3__$84 = $$mode;
            $$mode = "content";
            __$r__$83 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$84;
            return __$r__$83;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$85;
    var __$l2__$86 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$85 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$86;
    __$r__$79 = __$r__$85;
    $$mode = __$l0__$80;
    __$ctx.ctx = __$l1__$81;
    return;
}

function __$b123(__$ctx, __$ref) {
    var mods__$67 = $$mods, optionToMenuItem__$68 = function(option) {
        var res__$69 = {
            block: "menu-item",
            mods: {
                disabled: mods__$67.disabled || option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$69.js.text = option.text;
            res__$69.content = [ option.icon, res__$69.content ];
        }
        return res__$69;
    };
    var __$r__$71;
    var __$l0__$72 = $$mode;
    $$mode = "";
    var __$l1__$73 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$67.size,
            theme: mods__$67.theme,
            disabled: mods__$67.disabled,
            mode: mods__$67.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$68)
            } : optionToMenuItem__$68(optionOrGroup);
        })
    };
    var __$r__$75;
    var __$l2__$76 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$75 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$76;
    __$r__$71 = __$r__$75;
    $$mode = __$l0__$72;
    __$ctx.ctx = __$l1__$73;
    return;
}

function __$b124(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var ctx__$91 = __$ctx.ctx, isValDef__$92 = typeof ctx__$91.val !== "undefined", isModeCheck__$93 = $$mods.mode === "check", firstOption__$94, checkedOptions__$95 = [], containsVal__$96 = function(val) {
        return isValDef__$92 && (isModeCheck__$93 ? ctx__$91.val.indexOf(val) > -1 : ctx__$91.val === val);
    }, iterateOptions__$97 = function(content) {
        var i__$98 = 0, option__$99;
        while (option__$99 = content[i__$98++]) {
            if (option__$99.group) {
                iterateOptions__$97(option__$99.group);
            } else {
                firstOption__$94 || (firstOption__$94 = option__$99);
                if (containsVal__$96(option__$99.val)) {
                    option__$99.checked = true;
                    checkedOptions__$95.push(option__$99);
                }
            }
        }
    };
    iterateOptions__$97(ctx__$91.options);
    var __$r__$101;
    var __$l0__$102 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$103 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$95;
    var __$l2__$104 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$94;
    var __$r__$106;
    var __$l3__$107 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$106 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$107;
    __$r__$101 = __$r__$106;
    __$ctx._select = __$l0__$102;
    __$ctx._checkedOptions = __$l1__$103;
    __$ctx._firstOption = __$l2__$104;
    return;
}

function __$b125(__$ctx, __$ref) {
    (__$ctx._firstItem.mods = __$ctx._firstItem.mods || {}).checked = true;
    var __$r__$109;
    var __$l0__$110 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$109 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$110;
    return;
}

function __$b126(__$ctx, __$ref) {
    var ctx__$125 = __$ctx.ctx, mods__$126 = $$mods, firstItem__$127, checkedItems__$128 = [];
    if (ctx__$125.content) {
        var isValDef__$129 = typeof ctx__$125.val !== "undefined", containsVal__$130 = function(val) {
            return isValDef__$129 && (mods__$126.mode === "check" ? ctx__$125.val.indexOf(val) > -1 : ctx__$125.val === val);
        }, iterateItems__$131 = function(content) {
            var i__$132 = 0, itemOrGroup__$133;
            while (itemOrGroup__$133 = content[i__$132++]) {
                if (itemOrGroup__$133.block === "menu-item") {
                    firstItem__$127 || (firstItem__$127 = itemOrGroup__$133);
                    if (containsVal__$130(itemOrGroup__$133.val)) {
                        (itemOrGroup__$133.mods = itemOrGroup__$133.mods || {}).checked = true;
                        checkedItems__$128.push(itemOrGroup__$133);
                    }
                } else {
                    iterateItems__$131(itemOrGroup__$133.content);
                }
            }
        };
        iterateItems__$131(ctx__$125.content);
    }
    __$ctx._firstItem = firstItem__$127;
    __$ctx._checkedItems = checkedItems__$128;
    var __$r__$135;
    var __$l0__$136 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$126.theme,
        disabled: mods__$126.disabled
    };
    var __$r__$138;
    var __$l1__$139 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$138 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$139;
    __$r__$135 = __$r__$138;
    __$ctx._menuMods = __$l0__$136;
    return;
}

function __$b127(__$ctx, __$ref) {
    var mods__$120 = $$mods;
    mods__$120.theme = mods__$120.theme || __$ctx._menuMods.theme;
    mods__$120.disabled = mods__$120.disabled || __$ctx._menuMods.disabled;
    var __$r__$122;
    var __$l0__$123 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
    __$r__$122 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$123;
    return;
}

function __$b128(__$ctx, __$ref) {
    var __$r__$143;
    var __$l0__$144 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$146;
    var __$l1__$147 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
    __$r__$146 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$147;
    __$r__$143 = __$r__$146;
    __$ctx._input = __$l0__$144;
    return;
}

function __$b129(__$ctx, __$ref) {
    var url__$170 = __$ctx.ctx.url;
    var __$r__$172;
    var __$l0__$173 = $$mode;
    $$mode = "";
    var __$l1__$174 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$170 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$176;
    var __$l2__$177 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16777216;
    __$r__$176 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$177;
    __$r__$172 = __$r__$176;
    $$mode = __$l0__$173;
    __$ctx.ctx = __$l1__$174;
    return;
}

function __$b130(__$ctx, __$ref) {
    var ie__$178 = __$ctx.ctx.ie, hideRule__$179 = !ie__$178 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$178 === "!IE" ? [ ie__$178, "<!-->", "<!--" ] : [ ie__$178, "", "" ];
    var __$r__$181;
    var __$l0__$182 = $$mode;
    $$mode = "";
    var __$l3__$183 = __$ctx.ctx;
    var __$l1__$184 = __$l3__$183._ieCommented;
    __$l3__$183._ieCommented = true;
    var __$l2__$185 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$179[0] + "]>" + hideRule__$179[1], __$ctx.ctx, hideRule__$179[2] + "<![endif]-->" ];
    __$r__$181 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$182;
    __$l3__$183._ieCommented = __$l1__$184;
    __$ctx.ctx = __$l2__$185;
    return;
}

function __$b131(__$ctx, __$ref) {
    var ctx__$192 = __$ctx.ctx;
    var __$r__$194;
    var __$l0__$195 = $$mode;
    $$mode = "";
    var __$l1__$196 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$192.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$192.title
            }, {
                block: "ua"
            }, ctx__$192.head, ctx__$192.styles, ctx__$192.favicon ? {
                elem: "favicon",
                url: ctx__$192.favicon
            } : "" ]
        }, ctx__$192 ]
    } ];
    var __$r__$198;
    var __$l2__$199 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 134217728;
    __$r__$198 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$199;
    __$r__$194 = __$r__$198;
    $$mode = __$l0__$195;
    __$ctx.ctx = __$l1__$196;
    return;
}

function __$b132(__$ctx, __$ref) {
    var BEM_INTERNAL__$200 = __$ctx.BEM.INTERNAL, ctx__$201 = __$ctx.ctx, isBEM__$202, tag__$203, res__$204;
    var __$r__$206;
    var __$l0__$207 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$208 = $$block;
    var __$r__$210;
    var __$l1__$211 = $$mode;
    $$mode = "tag";
    __$r__$210 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$211;
    tag__$203 = __$r__$210;
    typeof tag__$203 !== "undefined" || (tag__$203 = ctx__$201.tag);
    typeof tag__$203 !== "undefined" || (tag__$203 = "div");
    if (tag__$203) {
        var jsParams__$212, js__$213;
        if (vBlock__$208 && ctx__$201.js !== false) {
            var __$r__$214;
            var __$l2__$215 = $$mode;
            $$mode = "js";
            __$r__$214 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$215;
            js__$213 = __$r__$214;
            js__$213 = js__$213 ? __$ctx.extend(ctx__$201.js, js__$213 === true ? {} : js__$213) : ctx__$201.js === true ? {} : ctx__$201.js;
            js__$213 && ((jsParams__$212 = {})[BEM_INTERNAL__$200.buildClass(vBlock__$208, ctx__$201.elem)] = js__$213);
        }
        __$ctx._str += "<" + tag__$203;
        var __$r__$216;
        var __$l3__$217 = $$mode;
        $$mode = "bem";
        __$r__$216 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$217;
        isBEM__$202 = __$r__$216;
        typeof isBEM__$202 !== "undefined" || (isBEM__$202 = typeof ctx__$201.bem !== "undefined" ? ctx__$201.bem : ctx__$201.block || ctx__$201.elem);
        var __$r__$219;
        var __$l4__$220 = $$mode;
        $$mode = "cls";
        __$r__$219 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$220;
        var cls__$218 = __$r__$219;
        cls__$218 || (cls__$218 = ctx__$201.cls);
        var addJSInitClass__$221 = ctx__$201.block && jsParams__$212 && !ctx__$201.elem;
        if (isBEM__$202 || cls__$218) {
            __$ctx._str += ' class="';
            if (isBEM__$202) {
                __$ctx._str += BEM_INTERNAL__$200.buildClasses(vBlock__$208, ctx__$201.elem, ctx__$201.elemMods || ctx__$201.mods);
                var __$r__$223;
                var __$l5__$224 = $$mode;
                $$mode = "mix";
                __$r__$223 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$224;
                var mix__$222 = __$r__$223;
                ctx__$201.mix && (mix__$222 = mix__$222 ? [].concat(mix__$222, ctx__$201.mix) : ctx__$201.mix);
                if (mix__$222) {
                    var visited__$225 = {}, visitedKey__$226 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$225[visitedKey__$226(vBlock__$208, $$elem)] = true;
                    __$ctx.isArray(mix__$222) || (mix__$222 = [ mix__$222 ]);
                    for (var i__$227 = 0; i__$227 < mix__$222.length; i__$227++) {
                        var mixItem__$228 = mix__$222[i__$227], hasItem__$229 = mixItem__$228.block || mixItem__$228.elem, mixBlock__$230 = mixItem__$228.block || mixItem__$228._block || $$block, mixElem__$231 = mixItem__$228.elem || mixItem__$228._elem || $$elem;
                        hasItem__$229 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$200[hasItem__$229 ? "buildClasses" : "buildModsClasses"](mixBlock__$230, mixItem__$228.elem || mixItem__$228._elem || (mixItem__$228.block ? undefined : $$elem), mixItem__$228.elemMods || mixItem__$228.mods);
                        if (mixItem__$228.js) {
                            (jsParams__$212 || (jsParams__$212 = {}))[BEM_INTERNAL__$200.buildClass(mixBlock__$230, mixItem__$228.elem)] = mixItem__$228.js === true ? {} : mixItem__$228.js;
                            addJSInitClass__$221 || (addJSInitClass__$221 = mixBlock__$230 && !mixItem__$228.elem);
                        }
                        if (hasItem__$229 && !visited__$225[visitedKey__$226(mixBlock__$230, mixElem__$231)]) {
                            visited__$225[visitedKey__$226(mixBlock__$230, mixElem__$231)] = true;
                            var __$r__$233;
                            var __$l6__$234 = $$mode;
                            $$mode = "mix";
                            var __$l7__$235 = $$block;
                            $$block = mixBlock__$230;
                            var __$l8__$236 = $$elem;
                            $$elem = mixElem__$231;
                            __$r__$233 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$234;
                            $$block = __$l7__$235;
                            $$elem = __$l8__$236;
                            var nestedMix__$232 = __$r__$233;
                            if (nestedMix__$232) {
                                for (var j__$237 = 0; j__$237 < nestedMix__$232.length; j__$237++) {
                                    var nestedItem__$238 = nestedMix__$232[j__$237];
                                    if (!nestedItem__$238.block && !nestedItem__$238.elem || !visited__$225[visitedKey__$226(nestedItem__$238.block, nestedItem__$238.elem)]) {
                                        nestedItem__$238._block = mixBlock__$230;
                                        nestedItem__$238._elem = mixElem__$231;
                                        mix__$222.splice(i__$227 + 1, 0, nestedItem__$238);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$218 && (__$ctx._str += isBEM__$202 ? " " + cls__$218 : cls__$218);
            __$ctx._str += addJSInitClass__$221 ? ' i-bem"' : '"';
        }
        if (isBEM__$202 && jsParams__$212) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$212)) + '"';
        }
        var __$r__$240;
        var __$l9__$241 = $$mode;
        $$mode = "attrs";
        __$r__$240 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$241;
        var attrs__$239 = __$r__$240;
        attrs__$239 = __$ctx.extend(attrs__$239, ctx__$201.attrs);
        if (attrs__$239) {
            var name__$242, attr__$243;
            for (name__$242 in attrs__$239) {
                attr__$243 = attrs__$239[name__$242];
                if (typeof attr__$243 === "undefined") continue;
                __$ctx._str += " " + name__$242 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$243) ? attr__$243 : __$ctx.reapply(attr__$243)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$203)) {
        __$ctx._str += "/>";
    } else {
        tag__$203 && (__$ctx._str += ">");
        var __$r__$245;
        var __$l10__$246 = $$mode;
        $$mode = "content";
        __$r__$245 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$246;
        var content__$244 = __$r__$245;
        if (content__$244 || content__$244 === 0) {
            isBEM__$202 = vBlock__$208 || $$elem;
            var __$r__$247;
            var __$l11__$248 = $$mode;
            $$mode = "";
            var __$l12__$249 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$250 = __$ctx.position;
            __$ctx.position = isBEM__$202 ? 1 : __$ctx.position;
            var __$l14__$251 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$202 ? 1 : __$ctx._listLength;
            var __$l15__$252 = __$ctx.ctx;
            __$ctx.ctx = content__$244;
            __$r__$247 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$248;
            __$ctx._notNewList = __$l12__$249;
            __$ctx.position = __$l13__$250;
            __$ctx._listLength = __$l14__$251;
            __$ctx.ctx = __$l15__$252;
        }
        tag__$203 && (__$ctx._str += "</" + tag__$203 + ">");
    }
    res__$204 = __$ctx._str;
    __$r__$206 = undefined;
    __$ctx._str = __$l0__$207;
    __$ctx._buf.push(res__$204);
    return;
}

function __$b142(__$ctx, __$ref) {
    var __$r__$254;
    var __$l0__$255 = $$mode;
    $$mode = "";
    var __$l1__$256 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$258;
    var __$l2__$259 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 268435456;
    __$r__$258 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$259;
    __$r__$254 = __$r__$258;
    $$mode = __$l0__$255;
    __$ctx.ctx = __$l1__$256;
    return;
}

function __$b143(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$260 = __$ctx.ctx;
    if (ctx__$260 && ctx__$260 !== true || ctx__$260 === 0) {
        __$ctx._str += ctx__$260 + "";
    }
    return;
}

function __$b144(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b145(__$ctx, __$ref) {
    var ctx__$261 = __$ctx.ctx, len__$262 = ctx__$261.length, i__$263 = 0, prevPos__$264 = __$ctx.position, prevNotNewList__$265 = __$ctx._notNewList;
    if (prevNotNewList__$265) {
        __$ctx._listLength += len__$262 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$262;
    }
    __$ctx._notNewList = true;
    while (i__$263 < len__$262) (function __$lb__$266() {
        var __$r__$267;
        var __$l0__$268 = __$ctx.ctx;
        __$ctx.ctx = ctx__$261[i__$263++];
        __$r__$267 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$268;
        return __$r__$267;
    })();
    prevNotNewList__$265 || (__$ctx.position = prevPos__$264);
    return;
}

function __$b146(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$269 = __$ctx.ctx.block, vElem__$270 = __$ctx.ctx.elem, block__$271 = __$ctx._currBlock || $$block;
    var __$r__$273;
    var __$l0__$274 = $$mode;
    $$mode = "default";
    var __$l1__$275 = $$block;
    $$block = vBlock__$269 || (vElem__$270 ? block__$271 : undefined);
    var __$l2__$276 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$269 || vElem__$270 ? undefined : block__$271;
    var __$l3__$277 = $$elem;
    $$elem = vElem__$270;
    var __$l4__$278 = $$mods;
    $$mods = vBlock__$269 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$279 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$273 = undefined;
    $$mode = __$l0__$274;
    $$block = __$l1__$275;
    __$ctx._currBlock = __$l2__$276;
    $$elem = __$l3__$277;
    $$mods = __$l4__$278;
    $$elemMods = __$l5__$279;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (__$ctx._attach && (__$ctx.__$a0 & 16) === 0) {
                return [ {
                    block: "attach",
                    elem: "control"
                }, function __$lb__$25() {
                    var __$r__$26;
                    var __$l0__$27 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$26 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$27;
                    return __$r__$26;
                }() ];
            }
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b3(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "modal") {
        if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
            return {
                elem: "table",
                content: {
                    elem: "cell",
                    content: {
                        elem: "content",
                        content: function __$lb__$2() {
                            var __$r__$3;
                            var __$l0__$4 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 1;
                            __$r__$3 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$4;
                            return __$r__$3;
                        }()
                    }
                }
            };
        }
    } else if (__$t === "textarea") {
        if ($$elem === "control") {
            return __$ctx._textarea.val;
        }
        if (!$$elem) {
            return {
                elem: "control"
            };
        }
    } else if (__$t === "attach") {
        if (!$$elem) {
            var __$r = __$b9(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio-check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 64) === 0) {
            return [ {
                elem: "control",
                val: __$ctx._checkedOptions[0].val
            }, function __$lb__$42() {
                var __$r__$43;
                var __$l0__$44 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$43 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$44;
                return __$r__$43;
            }() ];
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio-check") {
            return [ {
                elem: "text",
                content: (__$ctx._checkedOptions[0] || __$ctx._select).text
            } ];
        }
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b12(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "check") {
            var __$r = __$b13(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
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
    } else if (__$t === "progressbar") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            return {
                elem: "bar",
                attrs: {
                    style: "width:" + __$ctx.ctx.val + "%"
                }
            };
        }
    } else if (__$t === "radio") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b17(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b18(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            var __$r = __$b19(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 32768) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$111() {
                var __$r__$112;
                var __$l0__$113 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                __$r__$112 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$113;
                return __$r__$112;
            }() ];
        }
    } else if (__$t === "input") {
        if ($$elem === "box" && $$mods && $$mods["has-clear"] === true) {
            return [ __$ctx.ctx.content, {
                elem: "clear"
            } ];
        }
        if (!$$elem) {
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b23(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8388608) === 0) {
                return [ function __$lb__$167() {
                    var __$r__$168;
                    var __$l0__$169 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
                    __$r__$168 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$169;
                    return __$r__$168;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 33554432) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$186() {
                var __$r__$187;
                var __$l0__$188 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 33554432;
                __$r__$187 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$188;
                return __$r__$187;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 67108864) === 0) {
            return [ function __$lb__$189() {
                var __$r__$190;
                var __$l0__$191 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 67108864;
                __$r__$190 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$191;
                return __$r__$190;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 2097152) === 0) {
                var __$r = __$ctx.extend(function __$lb__$156() {
                    var __$r__$157;
                    var __$l0__$158 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                    __$r__$157 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$158;
                    return __$r__$157;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "checkbox") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "modal") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$ctx.extend(function __$lb__$5() {
                    var __$r__$6;
                    var __$l0__$7 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2;
                    __$r__$6 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$7;
                    return __$r__$6;
                }(), {
                    url: __$ctx.ctx.url
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "textarea") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "attach") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio-check") {
                    if ((__$ctx.__$a0 & 128) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$45() {
                            var __$r__$46;
                            var __$l0__$47 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 128;
                            __$r__$46 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$47;
                            return __$r__$46;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "check") {
                    if ((__$ctx.__$a0 & 512) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$63() {
                            var __$r__$64;
                            var __$l0__$65 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 512;
                            __$r__$64 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$65;
                            return __$r__$64;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$87() {
                        var __$r__$88;
                        var __$l0__$89 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                        __$r__$88 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$89;
                        return __$r__$88;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "progressbar") {
        if (!$$elem) {
            return {
                val: __$ctx.ctx.val
            };
        }
    } else if (__$t === "radio") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            var __$r = __$b51(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 131072) === 0) {
                var __$r = __$ctx.extend(function __$lb__$117() {
                    var __$r__$118;
                    var __$l0__$119 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
                    __$r__$118 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$119;
                    return __$r__$118;
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
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            return true;
        }
    }
    return undefined;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if (!$$elem && __$ctx._attach) {
            return "span";
        }
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
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
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["pseudo"] === true && !__$ctx.ctx.url) {
                return "span";
            }
            return "a";
        }
    } else if (__$t === "textarea") {
        if ($$elem === "control") {
            return "textarea";
        }
    } else if (__$t === "attach") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "clear") {
            return "i";
        } else if (__$t === "text") {
            return "span";
        } else if (__$t === "file") {
            return "span";
        } else if (__$t === "no-file") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            return "input";
        }
    } else if (__$t === "spin") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "clear") {
            return "i";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "table") {
        var __$t = $$elem;
        if (__$t === "cell") {
            return "td";
        } else if (__$t === "title") {
            return "th";
        } else if (__$t === "row") {
            return "tr";
        }
        if (!$$elem) {
            return "table";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
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

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 4194304) === 0) {
                var __$r = __$b99(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b100(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        if ($$elem === "control") {
            var __$r = __$b101(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b102(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "textarea") {
        if ($$elem === "control") {
            var __$r = __$b103(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "attach") {
        if ($$elem === "control") {
            var __$r = __$b104(__$ctx, __$ref);
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
    } else if (__$t === "radio") {
        if ($$elem === "control") {
            var __$r = __$b106(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            var __$r = __$b107(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 65536) === 0) {
                var __$r = __$ctx.extend(function __$lb__$114() {
                    var __$r__$115;
                    var __$l0__$116 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                    __$r__$115 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$116;
                    return __$r__$115;
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
            var __$r = __$b111(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "input") {
        if ($$elem === "control") {
            var __$r = __$b113(__$ctx, __$ref);
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
    if (__$t === "link") {
        if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b118(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "textarea") {
        if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b119(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "attach") {
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b120(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "i-bem") {
        if ($$elem === "i18n") {
            var __$r = __$b121(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b122(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 1024) === 0) {
                var __$r = __$b123(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b124(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && __$ctx._firstItem && __$ctx._checkedItems && !__$ctx._checkedItems.length && (__$ctx.__$a0 & 16384) === 0) {
                var __$r = __$b125(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if ((__$ctx.__$a0 & 524288) === 0) {
                var __$r = __$b126(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 262144) === 0) {
            var __$r = __$b127(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 1048576) === 0) {
            var __$r = __$b128(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16777216) === 0) {
                        var __$r = __$b129(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b130(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && (__$ctx.__$a0 & 134217728) === 0) {
            var __$r = __$b131(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b132(__$ctx, __$ref);
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