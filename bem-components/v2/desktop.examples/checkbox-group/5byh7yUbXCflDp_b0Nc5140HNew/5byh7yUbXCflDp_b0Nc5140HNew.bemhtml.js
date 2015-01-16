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
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$2() {
                        var __$r__$3;
                        var __$l0__$4 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$3 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$4;
                        return __$r__$3;
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
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b17(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b18(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b19(__$ctx, __$ref);
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
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b43(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16) === 0) {
                            var __$r = __$b44(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b45(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b46(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b47(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b61(__$ctx, __$ref);
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
        ctx["_button"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
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
    var ctx__$5 = __$ctx.ctx, content__$6 = [ ctx__$5.icon ];
    "text" in ctx__$5 && content__$6.push({
        elem: "text",
        content: ctx__$5.text
    });
    return content__$6;
}

function __$b3(__$ctx, __$ref) {
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

function __$b4(__$ctx, __$ref) {
    var ctx__$21 = __$ctx.ctx, mods__$22 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$22.checked,
            disabled: mods__$22.disabled,
            name: ctx__$21.name,
            val: ctx__$21.val
        }
    }, ctx__$21.text ];
}

function __$b5(__$ctx, __$ref) {
    var mods__$23 = $$mods, ctx__$24 = __$ctx.ctx, val__$25 = ctx__$24.val, isValDef__$26 = typeof val__$25 !== "undefined";
    if (isValDef__$26 && !Array.isArray(val__$25)) throw Error("checkbox-group: val must be an array");
    return (ctx__$24.options || []).map(function(option, i) {
        return [ !!i && !mods__$23.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$23.type,
                theme: mods__$23.theme,
                size: mods__$23.size,
                checked: isValDef__$26 && val__$25.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$23.disabled
            },
            name: ctx__$24.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b17(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, attrs__$8 = {
        type: $$mods.type || "button",
        name: ctx__$7.name,
        value: ctx__$7.val
    };
    $$mods.disabled && (attrs__$8.disabled = "disabled");
    return __$ctx.extend(function __$lb__$9() {
        var __$r__$10;
        var __$l0__$11 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$10 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$11;
        return __$r__$10;
    }(), attrs__$8);
}

function __$b18(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$12.tabIndex,
        id: ctx__$12.id,
        title: ctx__$12.title
    };
}

function __$b19(__$ctx, __$ref) {
    var attrs__$19 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$20 = __$ctx.ctx;
    attrs__$19.name = ctx__$20.name;
    attrs__$19.value = ctx__$20.val;
    ctx__$20.checked && (attrs__$19.checked = "checked");
    ctx__$20.disabled && (attrs__$19.disabled = "disabled");
    return attrs__$19;
}

function __$b43(__$ctx, __$ref) {
    var __$r__$14;
    var __$l0__$15 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._button = __$l0__$15;
    return;
}

function __$b44(__$ctx, __$ref) {
    var url__$30 = __$ctx.ctx.url;
    var __$r__$32;
    var __$l0__$33 = $$mode;
    $$mode = "";
    var __$l1__$34 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$30 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$36;
    var __$l2__$37 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$36 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$37;
    __$r__$32 = __$r__$36;
    $$mode = __$l0__$33;
    __$ctx.ctx = __$l1__$34;
    return;
}

function __$b45(__$ctx, __$ref) {
    var ie__$38 = __$ctx.ctx.ie, hideRule__$39 = !ie__$38 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$38 === "!IE" ? [ ie__$38, "<!-->", "<!--" ] : [ ie__$38, "", "" ];
    var __$r__$41;
    var __$l0__$42 = $$mode;
    $$mode = "";
    var __$l3__$43 = __$ctx.ctx;
    var __$l1__$44 = __$l3__$43._ieCommented;
    __$l3__$43._ieCommented = true;
    var __$l2__$45 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$39[0] + "]>" + hideRule__$39[1], __$ctx.ctx, hideRule__$39[2] + "<![endif]-->" ];
    __$r__$41 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$42;
    __$l3__$43._ieCommented = __$l1__$44;
    __$ctx.ctx = __$l2__$45;
    return;
}

function __$b46(__$ctx, __$ref) {
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
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$58 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$59;
    __$r__$54 = __$r__$58;
    $$mode = __$l0__$55;
    __$ctx.ctx = __$l1__$56;
    __$ctx._defPageApplied = false;
    return;
}

function __$b47(__$ctx, __$ref) {
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

function __$b57(__$ctx, __$ref) {
    var __$r__$114;
    var __$l0__$115 = $$mode;
    $$mode = "";
    var __$l1__$116 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$118;
    var __$l2__$119 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$118 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$119;
    __$r__$114 = __$r__$118;
    $$mode = __$l0__$115;
    __$ctx.ctx = __$l1__$116;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$120 = __$ctx.ctx;
    if (ctx__$120 && ctx__$120 !== true || ctx__$120 === 0) {
        __$ctx._str += ctx__$120 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
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

function __$b61(__$ctx, __$ref) {
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
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$27() {
                    var __$r__$28;
                    var __$l0__$29 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$28 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$29;
                    return __$r__$28;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$46() {
                var __$r__$47;
                var __$l0__$48 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$47 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$48;
                return __$r__$47;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            return [ function __$lb__$49() {
                var __$r__$50;
                var __$l0__$51 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$50 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$51;
                return __$r__$50;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
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