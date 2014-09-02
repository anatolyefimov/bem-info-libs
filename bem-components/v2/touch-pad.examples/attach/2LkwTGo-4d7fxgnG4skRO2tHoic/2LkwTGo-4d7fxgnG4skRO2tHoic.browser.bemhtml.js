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
    if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "attach") {
            if ($$elem === "control") {
                var __$r = __$b21(__$ctx, __$ref);
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
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$b23(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b24(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "icon") {
            if (!$$elem && __$ctx.ctx.url) {
                return {
                    style: "background-image:url(" + __$ctx.ctx.url + ")"
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "attach") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (__$ctx._attach && (__$ctx.__$a0 & 1) === 0) {
                    return [ {
                        block: "attach",
                        elem: "control"
                    }, function __$lb__$2() {
                        var __$r__$3;
                        var __$l0__$4 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$3 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$4;
                        return __$r__$3;
                    }() ];
                }
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$41() {
                    var __$r__$42;
                    var __$l0__$43 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$42 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$43;
                    return __$r__$42;
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
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                return [ function __$lb__$44() {
                    var __$r__$45;
                    var __$l0__$46 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$45 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$46;
                    return __$r__$45;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "attach") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$5() {
                        var __$r__$6;
                        var __$l0__$7 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$6 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$7;
                        return __$r__$6;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b45(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "attach") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b47(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b48(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "i-bem") {
            if ($$elem === "i18n") {
                var __$r = __$b49(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b51(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b63(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b64(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b65(__$ctx, __$ref);
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
        ctx["_button"] = undefined;
        ctx["_attach"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
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

function __$b21(__$ctx, __$ref) {
    var attrs__$0 = {
        type: "file"
    }, attach__$1 = __$ctx._attach;
    if (attach__$1) {
        attrs__$0.name = attach__$1.name;
        attach__$1.mods && attach__$1.mods.disabled && (attrs__$0.disabled = "disabled");
        attach__$1.tabIndex && (attrs__$0.tabindex = attach__$1.tabIndex);
    }
    return attrs__$0;
}

function __$b23(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx, attrs__$11 = {
        type: $$mods.type || "button",
        name: ctx__$10.name,
        value: ctx__$10.val
    };
    $$mods.disabled && (attrs__$11.disabled = "disabled");
    return __$ctx.extend(function __$lb__$12() {
        var __$r__$13;
        var __$l0__$14 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$13 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$14;
        return __$r__$13;
    }(), attrs__$11);
}

function __$b24(__$ctx, __$ref) {
    var ctx__$15 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$15.tabIndex,
        id: ctx__$15.id,
        title: ctx__$15.title
    };
}

function __$b31(__$ctx, __$ref) {
    var ctx__$22 = __$ctx.ctx, button__$23 = ctx__$22.button;
    __$ctx.isSimple(button__$23) && (button__$23 = {
        block: "button",
        tag: "span",
        text: button__$23
    });
    var attachMods__$24 = $$mods, buttonMods__$25 = button__$23.mods || (button__$23.mods = {});
    buttonMods__$25["size"] || (buttonMods__$25["size"] = attachMods__$24["size"]);
    buttonMods__$25["theme"] || (buttonMods__$25["theme"] = attachMods__$24["theme"]);
    buttonMods__$25["disabled"] || (buttonMods__$25["disabled"] = attachMods__$24["disabled"]);
    return [ button__$23, {
        elem: "no-file",
        content: __$ctx.ctx.noFileText
    } ];
}

function __$b34(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx, content__$9 = [ ctx__$8.icon ];
    "text" in ctx__$8 && content__$9.push({
        elem: "text",
        content: ctx__$8.text
    });
    return content__$9;
}

function __$b45(__$ctx, __$ref) {
    var mix__$36 = function __$lb__$37() {
        var __$r__$38;
        var __$l0__$39 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 32;
        __$r__$38 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$39;
        return __$r__$38;
    }(), uaMix__$40 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$36 ? uaMix__$40.concat(mix__$36) : uaMix__$40;
}

function __$b47(__$ctx, __$ref) {
    var __$r__$27;
    var __$l0__$28 = __$ctx._attach;
    __$ctx._attach = __$ctx.ctx;
    var __$r__$30;
    var __$l1__$31 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$30 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$31;
    __$r__$27 = __$r__$30;
    __$ctx._attach = __$l0__$28;
    return;
}

function __$b48(__$ctx, __$ref) {
    var __$r__$17;
    var __$l0__$18 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$20;
    var __$l1__$21 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$20 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$21;
    __$r__$17 = __$r__$20;
    __$ctx._button = __$l0__$18;
    return;
}

function __$b49(__$ctx, __$ref) {
    if (!__$ctx.ctx) return "";
    var ctx__$32 = __$ctx.ctx, keyset__$33 = ctx__$32.keyset, key__$34 = ctx__$32.key, params__$35 = ctx__$32.params || {};
    if (!(keyset__$33 || key__$34)) return "";
    if (typeof ctx__$32.content === "undefined" || ctx__$32.content !== null) {
        params__$35.content = exports.apply(ctx__$32.content);
    }
    __$ctx._buf.push(BEM.I18N(keyset__$33, key__$34, params__$35));
    return;
}

function __$b50(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$47 = __$ctx.ctx;
    var __$r__$49;
    var __$l0__$50 = $$mode;
    $$mode = "";
    var __$l1__$51 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$47.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$47.title
            }, {
                block: "ua"
            }, ctx__$47.head, ctx__$47.styles, ctx__$47.favicon ? {
                elem: "favicon",
                url: ctx__$47.favicon
            } : "" ]
        }, ctx__$47 ]
    } ];
    var __$r__$53;
    var __$l2__$54 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$53 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$54;
    __$r__$49 = __$r__$53;
    $$mode = __$l0__$50;
    __$ctx.ctx = __$l1__$51;
    __$ctx._defPageApplied = false;
    return;
}

function __$b51(__$ctx, __$ref) {
    var BEM_INTERNAL__$55 = __$ctx.BEM.INTERNAL, ctx__$56 = __$ctx.ctx, isBEM__$57, tag__$58, res__$59;
    var __$r__$61;
    var __$l0__$62 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$63 = $$block;
    var __$r__$65;
    var __$l1__$66 = $$mode;
    $$mode = "tag";
    __$r__$65 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$66;
    tag__$58 = __$r__$65;
    typeof tag__$58 !== "undefined" || (tag__$58 = ctx__$56.tag);
    typeof tag__$58 !== "undefined" || (tag__$58 = "div");
    if (tag__$58) {
        var jsParams__$67, js__$68;
        if (vBlock__$63 && ctx__$56.js !== false) {
            var __$r__$69;
            var __$l2__$70 = $$mode;
            $$mode = "js";
            __$r__$69 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$70;
            js__$68 = __$r__$69;
            js__$68 = js__$68 ? __$ctx.extend(ctx__$56.js, js__$68 === true ? {} : js__$68) : ctx__$56.js === true ? {} : ctx__$56.js;
            js__$68 && ((jsParams__$67 = {})[BEM_INTERNAL__$55.buildClass(vBlock__$63, ctx__$56.elem)] = js__$68);
        }
        __$ctx._str += "<" + tag__$58;
        var __$r__$71;
        var __$l3__$72 = $$mode;
        $$mode = "bem";
        __$r__$71 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$72;
        isBEM__$57 = __$r__$71;
        typeof isBEM__$57 !== "undefined" || (isBEM__$57 = typeof ctx__$56.bem !== "undefined" ? ctx__$56.bem : ctx__$56.block || ctx__$56.elem);
        var __$r__$74;
        var __$l4__$75 = $$mode;
        $$mode = "cls";
        __$r__$74 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$75;
        var cls__$73 = __$r__$74;
        cls__$73 || (cls__$73 = ctx__$56.cls);
        var addJSInitClass__$76 = ctx__$56.block && jsParams__$67;
        if (isBEM__$57 || cls__$73) {
            __$ctx._str += ' class="';
            if (isBEM__$57) {
                __$ctx._str += BEM_INTERNAL__$55.buildClasses(vBlock__$63, ctx__$56.elem, ctx__$56.elemMods || ctx__$56.mods);
                var __$r__$78;
                var __$l5__$79 = $$mode;
                $$mode = "mix";
                __$r__$78 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$79;
                var mix__$77 = __$r__$78;
                ctx__$56.mix && (mix__$77 = mix__$77 ? [].concat(mix__$77, ctx__$56.mix) : ctx__$56.mix);
                if (mix__$77) {
                    var visited__$80 = {}, visitedKey__$81 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$80[visitedKey__$81(vBlock__$63, $$elem)] = true;
                    __$ctx.isArray(mix__$77) || (mix__$77 = [ mix__$77 ]);
                    for (var i__$82 = 0; i__$82 < mix__$77.length; i__$82++) {
                        var mixItem__$83 = mix__$77[i__$82], hasItem__$84 = mixItem__$83.block || mixItem__$83.elem, mixBlock__$85 = mixItem__$83.block || mixItem__$83._block || $$block, mixElem__$86 = mixItem__$83.elem || mixItem__$83._elem || $$elem;
                        hasItem__$84 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$55[hasItem__$84 ? "buildClasses" : "buildModsClasses"](mixBlock__$85, mixItem__$83.elem || mixItem__$83._elem || (mixItem__$83.block ? undefined : $$elem), mixItem__$83.elemMods || mixItem__$83.mods);
                        if (mixItem__$83.js) {
                            (jsParams__$67 || (jsParams__$67 = {}))[BEM_INTERNAL__$55.buildClass(mixBlock__$85, mixItem__$83.elem)] = mixItem__$83.js === true ? {} : mixItem__$83.js;
                            addJSInitClass__$76 || (addJSInitClass__$76 = mixBlock__$85 && !mixItem__$83.elem);
                        }
                        if (hasItem__$84 && !visited__$80[visitedKey__$81(mixBlock__$85, mixElem__$86)]) {
                            visited__$80[visitedKey__$81(mixBlock__$85, mixElem__$86)] = true;
                            var __$r__$88;
                            var __$l6__$89 = $$mode;
                            $$mode = "mix";
                            var __$l7__$90 = $$block;
                            $$block = mixBlock__$85;
                            var __$l8__$91 = $$elem;
                            $$elem = mixElem__$86;
                            __$r__$88 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$89;
                            $$block = __$l7__$90;
                            $$elem = __$l8__$91;
                            var nestedMix__$87 = __$r__$88;
                            if (nestedMix__$87) {
                                for (var j__$92 = 0; j__$92 < nestedMix__$87.length; j__$92++) {
                                    var nestedItem__$93 = nestedMix__$87[j__$92];
                                    if (!nestedItem__$93.block && !nestedItem__$93.elem || !visited__$80[visitedKey__$81(nestedItem__$93.block, nestedItem__$93.elem)]) {
                                        nestedItem__$93._block = mixBlock__$85;
                                        nestedItem__$93._elem = mixElem__$86;
                                        mix__$77.splice(i__$82 + 1, 0, nestedItem__$93);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$73 && (__$ctx._str += isBEM__$57 ? " " + cls__$73 : cls__$73);
            __$ctx._str += addJSInitClass__$76 ? ' i-bem"' : '"';
        }
        if (isBEM__$57 && jsParams__$67) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$67)) + '"';
        }
        var __$r__$95;
        var __$l9__$96 = $$mode;
        $$mode = "attrs";
        __$r__$95 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$96;
        var attrs__$94 = __$r__$95;
        attrs__$94 = __$ctx.extend(attrs__$94, ctx__$56.attrs);
        if (attrs__$94) {
            var name__$97, attr__$98;
            for (name__$97 in attrs__$94) {
                attr__$98 = attrs__$94[name__$97];
                if (typeof attr__$98 === "undefined") continue;
                __$ctx._str += " " + name__$97 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$98) ? attr__$98 : __$ctx.reapply(attr__$98)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$58)) {
        __$ctx._str += "/>";
    } else {
        tag__$58 && (__$ctx._str += ">");
        var __$r__$100;
        var __$l10__$101 = $$mode;
        $$mode = "content";
        __$r__$100 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$101;
        var content__$99 = __$r__$100;
        if (content__$99 || content__$99 === 0) {
            isBEM__$57 = vBlock__$63 || $$elem;
            var __$r__$102;
            var __$l11__$103 = $$mode;
            $$mode = "";
            var __$l12__$104 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$105 = __$ctx.position;
            __$ctx.position = isBEM__$57 ? 1 : __$ctx.position;
            var __$l14__$106 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$57 ? 1 : __$ctx._listLength;
            var __$l15__$107 = __$ctx.ctx;
            __$ctx.ctx = content__$99;
            __$r__$102 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$103;
            __$ctx._notNewList = __$l12__$104;
            __$ctx.position = __$l13__$105;
            __$ctx._listLength = __$l14__$106;
            __$ctx.ctx = __$l15__$107;
        }
        tag__$58 && (__$ctx._str += "</" + tag__$58 + ">");
    }
    res__$59 = __$ctx._str;
    __$r__$61 = undefined;
    __$ctx._str = __$l0__$62;
    __$ctx._buf.push(res__$59);
    return;
}

function __$b61(__$ctx, __$ref) {
    var __$r__$109;
    var __$l0__$110 = $$mode;
    $$mode = "";
    var __$l1__$111 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$113;
    var __$l2__$114 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$113 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$114;
    __$r__$109 = __$r__$113;
    $$mode = __$l0__$110;
    __$ctx.ctx = __$l1__$111;
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$115 = __$ctx.ctx;
    if (ctx__$115 && ctx__$115 !== true || ctx__$115 === 0) {
        __$ctx._str += ctx__$115 + "";
    }
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b64(__$ctx, __$ref) {
    var ctx__$116 = __$ctx.ctx, len__$117 = ctx__$116.length, i__$118 = 0, prevPos__$119 = __$ctx.position, prevNotNewList__$120 = __$ctx._notNewList;
    if (prevNotNewList__$120) {
        __$ctx._listLength += len__$117 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$117;
    }
    __$ctx._notNewList = true;
    while (i__$118 < len__$117) (function __$lb__$121() {
        var __$r__$122;
        var __$l0__$123 = __$ctx.ctx;
        __$ctx.ctx = ctx__$116[i__$118++];
        __$r__$122 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$123;
        return __$r__$122;
    })();
    prevNotNewList__$120 || (__$ctx.position = prevPos__$119);
    return;
}

function __$b65(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$124 = __$ctx.ctx.block, vElem__$125 = __$ctx.ctx.elem, block__$126 = __$ctx._currBlock || $$block;
    var __$r__$128;
    var __$l0__$129 = $$mode;
    $$mode = "default";
    var __$l1__$130 = $$block;
    $$block = vBlock__$124 || (vElem__$125 ? block__$126 : undefined);
    var __$l2__$131 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$124 || vElem__$125 ? undefined : block__$126;
    var __$l3__$132 = $$elem;
    $$elem = vElem__$125;
    var __$l4__$133 = $$mods;
    $$mods = vBlock__$124 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$134 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$128 = undefined;
    $$mode = __$l0__$129;
    $$block = __$l1__$130;
    __$ctx._currBlock = __$l2__$131;
    $$elem = __$l3__$132;
    $$mods = __$l4__$133;
    $$elemMods = __$l5__$134;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "attach") {
        var __$t = $$elem;
        if (__$t === "clear") {
            return "i";
        } else if (__$t === "text") {
            return "span";
        } else if (__$t === "file") {
            return "span";
        } else if (__$t === "no-file") {
            return "span";
        } else if (__$t === "control") {
            return "input";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "button") {
        if (!$$elem && __$ctx._attach) {
            return "span";
        }
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
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