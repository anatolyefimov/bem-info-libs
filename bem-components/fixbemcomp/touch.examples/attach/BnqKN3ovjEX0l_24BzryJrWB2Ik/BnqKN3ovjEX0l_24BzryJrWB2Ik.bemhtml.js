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
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "attach") {
            if (!$$elem) {
                var __$r = __$b30(__$ctx, __$ref);
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
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$38() {
                        var __$r__$39;
                        var __$l0__$40 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$39 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$40;
                        return __$r__$39;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ function __$lb__$46() {
                    var __$r__$47;
                    var __$l0__$48 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$47 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$48;
                    return __$r__$47;
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
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$49() {
                    var __$r__$50;
                    var __$l0__$51 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$50 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$51;
                    return __$r__$50;
                }(), __$ctx.ctx.scripts ];
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
                    var __$r = __$ctx.extend(function __$lb__$7() {
                        var __$r__$8;
                        var __$l0__$9 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$8 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$9;
                        return __$r__$8;
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
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
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
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b51(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
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
    var ctx__$12 = __$ctx.ctx, attrs__$13 = {
        type: $$mods.type || "button",
        name: ctx__$12.name,
        value: ctx__$12.val
    };
    $$mods.disabled && (attrs__$13.disabled = "disabled");
    return __$ctx.extend(function __$lb__$14() {
        var __$r__$15;
        var __$l0__$16 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$15 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$16;
        return __$r__$15;
    }(), attrs__$13);
}

function __$b24(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$17.tabIndex,
        id: ctx__$17.id,
        title: ctx__$17.title
    };
}

function __$b25(__$ctx, __$ref) {
    var attrs__$5 = {
        "aria-hidden": "true"
    }, url__$6 = __$ctx.ctx.url;
    if (url__$6) attrs__$5.style = "background-image:url(" + url__$6 + ")";
    return attrs__$5;
}

function __$b30(__$ctx, __$ref) {
    var ctx__$24 = __$ctx.ctx, button__$25 = ctx__$24.button;
    __$ctx.isSimple(button__$25) && (button__$25 = {
        block: "button",
        tag: "span",
        text: button__$25
    });
    var attachMods__$26 = $$mods, buttonMods__$27 = button__$25.mods || (button__$25.mods = {});
    [ "size", "theme", "disabled", "focused" ].forEach(function(mod) {
        buttonMods__$27[mod] || (buttonMods__$27[mod] = attachMods__$26[mod]);
    });
    return [ button__$25, {
        elem: "no-file",
        content: __$ctx.ctx.noFileText
    } ];
}

function __$b33(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx, content__$11 = [ ctx__$10.icon ];
    "text" in ctx__$10 && content__$11.push({
        elem: "text",
        content: ctx__$10.text
    });
    return content__$11;
}

function __$b45(__$ctx, __$ref) {
    var mix__$41 = function __$lb__$42() {
        var __$r__$43;
        var __$l0__$44 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 64;
        __$r__$43 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$44;
        return __$r__$43;
    }(), uaMix__$45 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$41 ? uaMix__$45.concat(mix__$41) : uaMix__$45;
}

function __$b47(__$ctx, __$ref) {
    var __$r__$29;
    var __$l0__$30 = __$ctx._attach;
    __$ctx._attach = __$ctx.ctx;
    var __$r__$32;
    var __$l1__$33 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$32 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$33;
    __$r__$29 = __$r__$32;
    __$ctx._attach = __$l0__$30;
    return;
}

function __$b48(__$ctx, __$ref) {
    var __$r__$19;
    var __$l0__$20 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$22;
    var __$l1__$23 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$22 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$23;
    __$r__$19 = __$r__$22;
    __$ctx._button = __$l0__$20;
    return;
}

function __$b49(__$ctx, __$ref) {
    if (!__$ctx.ctx) return "";
    var ctx__$34 = __$ctx.ctx, keyset__$35 = ctx__$34.keyset, key__$36 = ctx__$34.key, params__$37 = ctx__$34.params || {};
    if (!(keyset__$35 || key__$36)) return "";
    if (typeof ctx__$34.content === "undefined" || ctx__$34.content !== null) {
        params__$37.content = exports.apply(ctx__$34.content);
    }
    __$ctx._buf.push(BEM.I18N(keyset__$35, key__$36, params__$37));
    return;
}

function __$b50(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$52 = __$ctx.ctx;
    var __$r__$54;
    var __$l0__$55 = $$mode;
    $$mode = "";
    var __$l1__$56 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$52.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$52.title
            }, {
                block: "ua"
            }, ctx__$52.head, ctx__$52.styles, ctx__$52.favicon ? {
                elem: "favicon",
                url: ctx__$52.favicon
            } : "" ]
        }, ctx__$52 ]
    } ];
    var __$r__$58;
    var __$l2__$59 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$58 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$59;
    __$r__$54 = __$r__$58;
    $$mode = __$l0__$55;
    __$ctx.ctx = __$l1__$56;
    __$ctx._defPageApplied = false;
    return;
}

function __$b51(__$ctx, __$ref) {
    var BEM_INTERNAL__$60 = __$ctx.BEM.INTERNAL, ctx__$61 = __$ctx.ctx, isBEM__$62, tag__$63, res__$64;
    var __$r__$66;
    var __$l0__$67 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$68 = $$block;
    var __$r__$70;
    var __$l1__$71 = $$mode;
    $$mode = "tag";
    __$r__$70 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$71;
    tag__$63 = __$r__$70;
    typeof tag__$63 !== "undefined" || (tag__$63 = ctx__$61.tag);
    typeof tag__$63 !== "undefined" || (tag__$63 = "div");
    if (tag__$63) {
        var jsParams__$72, js__$73;
        if (vBlock__$68 && ctx__$61.js !== false) {
            var __$r__$74;
            var __$l2__$75 = $$mode;
            $$mode = "js";
            __$r__$74 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$75;
            js__$73 = __$r__$74;
            js__$73 = js__$73 ? __$ctx.extend(ctx__$61.js, js__$73 === true ? {} : js__$73) : ctx__$61.js === true ? {} : ctx__$61.js;
            js__$73 && ((jsParams__$72 = {})[BEM_INTERNAL__$60.buildClass(vBlock__$68, ctx__$61.elem)] = js__$73);
        }
        __$ctx._str += "<" + tag__$63;
        var __$r__$76;
        var __$l3__$77 = $$mode;
        $$mode = "bem";
        __$r__$76 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$77;
        isBEM__$62 = __$r__$76;
        typeof isBEM__$62 !== "undefined" || (isBEM__$62 = typeof ctx__$61.bem !== "undefined" ? ctx__$61.bem : ctx__$61.block || ctx__$61.elem);
        var __$r__$79;
        var __$l4__$80 = $$mode;
        $$mode = "cls";
        __$r__$79 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$80;
        var cls__$78 = __$r__$79;
        cls__$78 || (cls__$78 = ctx__$61.cls);
        var addJSInitClass__$81 = ctx__$61.block && jsParams__$72 && !ctx__$61.elem;
        if (isBEM__$62 || cls__$78) {
            __$ctx._str += ' class="';
            if (isBEM__$62) {
                __$ctx._str += BEM_INTERNAL__$60.buildClasses(vBlock__$68, ctx__$61.elem, ctx__$61.elemMods || ctx__$61.mods);
                var __$r__$83;
                var __$l5__$84 = $$mode;
                $$mode = "mix";
                __$r__$83 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$84;
                var mix__$82 = __$r__$83;
                ctx__$61.mix && (mix__$82 = mix__$82 ? [].concat(mix__$82, ctx__$61.mix) : ctx__$61.mix);
                if (mix__$82) {
                    var visited__$85 = {}, visitedKey__$86 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$85[visitedKey__$86(vBlock__$68, $$elem)] = true;
                    __$ctx.isArray(mix__$82) || (mix__$82 = [ mix__$82 ]);
                    for (var i__$87 = 0; i__$87 < mix__$82.length; i__$87++) {
                        var mixItem__$88 = mix__$82[i__$87], hasItem__$89 = mixItem__$88.block || mixItem__$88.elem, mixBlock__$90 = mixItem__$88.block || mixItem__$88._block || $$block, mixElem__$91 = mixItem__$88.elem || mixItem__$88._elem || $$elem;
                        hasItem__$89 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$60[hasItem__$89 ? "buildClasses" : "buildModsClasses"](mixBlock__$90, mixItem__$88.elem || mixItem__$88._elem || (mixItem__$88.block ? undefined : $$elem), mixItem__$88.elemMods || mixItem__$88.mods);
                        if (mixItem__$88.js) {
                            (jsParams__$72 || (jsParams__$72 = {}))[BEM_INTERNAL__$60.buildClass(mixBlock__$90, mixItem__$88.elem)] = mixItem__$88.js === true ? {} : mixItem__$88.js;
                            addJSInitClass__$81 || (addJSInitClass__$81 = mixBlock__$90 && !mixItem__$88.elem);
                        }
                        if (hasItem__$89 && !visited__$85[visitedKey__$86(mixBlock__$90, mixElem__$91)]) {
                            visited__$85[visitedKey__$86(mixBlock__$90, mixElem__$91)] = true;
                            var __$r__$93;
                            var __$l6__$94 = $$mode;
                            $$mode = "mix";
                            var __$l7__$95 = $$block;
                            $$block = mixBlock__$90;
                            var __$l8__$96 = $$elem;
                            $$elem = mixElem__$91;
                            __$r__$93 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$94;
                            $$block = __$l7__$95;
                            $$elem = __$l8__$96;
                            var nestedMix__$92 = __$r__$93;
                            if (nestedMix__$92) {
                                for (var j__$97 = 0; j__$97 < nestedMix__$92.length; j__$97++) {
                                    var nestedItem__$98 = nestedMix__$92[j__$97];
                                    if (!nestedItem__$98.block && !nestedItem__$98.elem || !visited__$85[visitedKey__$86(nestedItem__$98.block, nestedItem__$98.elem)]) {
                                        nestedItem__$98._block = mixBlock__$90;
                                        nestedItem__$98._elem = mixElem__$91;
                                        mix__$82.splice(i__$87 + 1, 0, nestedItem__$98);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$78 && (__$ctx._str += isBEM__$62 ? " " + cls__$78 : cls__$78);
            __$ctx._str += addJSInitClass__$81 ? ' i-bem"' : '"';
        }
        if (isBEM__$62 && jsParams__$72) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$72)) + '"';
        }
        var __$r__$100;
        var __$l9__$101 = $$mode;
        $$mode = "attrs";
        __$r__$100 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$101;
        var attrs__$99 = __$r__$100;
        attrs__$99 = __$ctx.extend(attrs__$99, ctx__$61.attrs);
        if (attrs__$99) {
            var name__$102, attr__$103;
            for (name__$102 in attrs__$99) {
                attr__$103 = attrs__$99[name__$102];
                if (typeof attr__$103 === "undefined") continue;
                __$ctx._str += " " + name__$102 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$103) ? attr__$103 : __$ctx.reapply(attr__$103)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$63)) {
        __$ctx._str += "/>";
    } else {
        tag__$63 && (__$ctx._str += ">");
        var __$r__$105;
        var __$l10__$106 = $$mode;
        $$mode = "content";
        __$r__$105 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$106;
        var content__$104 = __$r__$105;
        if (content__$104 || content__$104 === 0) {
            isBEM__$62 = vBlock__$68 || $$elem;
            var __$r__$107;
            var __$l11__$108 = $$mode;
            $$mode = "";
            var __$l12__$109 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$110 = __$ctx.position;
            __$ctx.position = isBEM__$62 ? 1 : __$ctx.position;
            var __$l14__$111 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$62 ? 1 : __$ctx._listLength;
            var __$l15__$112 = __$ctx.ctx;
            __$ctx.ctx = content__$104;
            __$r__$107 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$108;
            __$ctx._notNewList = __$l12__$109;
            __$ctx.position = __$l13__$110;
            __$ctx._listLength = __$l14__$111;
            __$ctx.ctx = __$l15__$112;
        }
        tag__$63 && (__$ctx._str += "</" + tag__$63 + ">");
    }
    res__$64 = __$ctx._str;
    __$r__$66 = undefined;
    __$ctx._str = __$l0__$67;
    __$ctx._buf.push(res__$64);
    return;
}

function __$b61(__$ctx, __$ref) {
    var __$r__$114;
    var __$l0__$115 = $$mode;
    $$mode = "";
    var __$l1__$116 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$118;
    var __$l2__$119 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$118 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$119;
    __$r__$114 = __$r__$118;
    $$mode = __$l0__$115;
    __$ctx.ctx = __$l1__$116;
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$120 = __$ctx.ctx;
    if (ctx__$120 && ctx__$120 !== true || ctx__$120 === 0) {
        __$ctx._str += ctx__$120 + "";
    }
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b64(__$ctx, __$ref) {
    var ctx__$121 = __$ctx.ctx, len__$122 = ctx__$121.length, i__$123 = 0, prevPos__$124 = __$ctx.position, prevNotNewList__$125 = __$ctx._notNewList;
    if (prevNotNewList__$125) {
        __$ctx._listLength += len__$122 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$122;
    }
    __$ctx._notNewList = true;
    while (i__$123 < len__$122) (function __$lb__$126() {
        var __$r__$127;
        var __$l0__$128 = __$ctx.ctx;
        __$ctx.ctx = ctx__$121[i__$123++];
        __$r__$127 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$128;
        return __$r__$127;
    })();
    prevNotNewList__$125 || (__$ctx.position = prevPos__$124);
    return;
}

function __$b65(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$129 = __$ctx.ctx.block, vElem__$130 = __$ctx.ctx.elem, block__$131 = __$ctx._currBlock || $$block;
    var __$r__$133;
    var __$l0__$134 = $$mode;
    $$mode = "default";
    var __$l1__$135 = $$block;
    $$block = vBlock__$129 || (vElem__$130 ? block__$131 : undefined);
    var __$l2__$136 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$129 || vElem__$130 ? undefined : block__$131;
    var __$l3__$137 = $$elem;
    $$elem = vElem__$130;
    var __$l4__$138 = $$mods;
    $$mods = vBlock__$129 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$139 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$133 = undefined;
    $$mode = __$l0__$134;
    $$block = __$l1__$135;
    __$ctx._currBlock = __$l2__$136;
    $$elem = __$l3__$137;
    $$mods = __$l4__$138;
    $$elemMods = __$l5__$139;
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

function __$g1(__$ctx, __$ref) {
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
        if (!$$elem) {
            var __$r = __$b25(__$ctx, __$ref);
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