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
        var __$t = $$block;
        if (__$t === "icon") {
            if (!$$elem) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b2(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b4(__$ctx, __$ref);
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
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$4() {
                        var __$r__$5;
                        var __$l0__$6 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$5 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$6;
                        return __$r__$5;
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
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 8) === 0) {
                            var __$r = __$b52(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b53(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b54(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b55(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 128) === 0) {
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

function __$b1(__$ctx, __$ref) {
    var attrs__$0 = {
        "aria-hidden": "true"
    }, url__$1 = __$ctx.ctx.url;
    if (url__$1) attrs__$0.style = "background-image:url(" + url__$1 + ")";
    return attrs__$0;
}

function __$b2(__$ctx, __$ref) {
    var ctx__$9 = __$ctx.ctx, attrs__$10 = {
        type: $$mods.type || "button",
        name: ctx__$9.name,
        value: ctx__$9.val
    };
    $$mods.disabled && (attrs__$10.disabled = "disabled");
    return __$ctx.extend(function __$lb__$11() {
        var __$r__$12;
        var __$l0__$13 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$12 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$13;
        return __$r__$12;
    }(), attrs__$10);
}

function __$b3(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$14.tabIndex,
        id: ctx__$14.id,
        title: ctx__$14.title
    };
}

function __$b4(__$ctx, __$ref) {
    var attrs__$15 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$16 = __$ctx.ctx;
    attrs__$15.name = ctx__$16.name;
    attrs__$15.value = ctx__$16.val;
    ctx__$16.checked && (attrs__$15.checked = "checked");
    ctx__$16.disabled && (attrs__$15.disabled = "disabled");
    return attrs__$15;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx, content__$8 = [ ctx__$7.icon ];
    "text" in ctx__$7 && content__$8.push({
        elem: "text",
        content: ctx__$7.text
    });
    return content__$8;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$2 = __$ctx.ctx, mods__$3 = $$mods;
    return [ {
        block: "button",
        mods: {
            togglable: "check",
            checked: mods__$3.checked,
            disabled: mods__$3.disabled,
            theme: mods__$3.theme,
            size: mods__$3.size
        },
        title: ctx__$2.title,
        content: [ ctx__$2.icon, typeof ctx__$2.text !== "undefined" ? {
            elem: "text",
            content: ctx__$2.text
        } : "" ]
    }, {
        block: "checkbox",
        elem: "control",
        checked: mods__$3.checked,
        disabled: mods__$3.disabled,
        name: ctx__$2.name,
        val: ctx__$2.val
    } ];
}

function __$b29(__$ctx, __$ref) {
    var ctx__$17 = __$ctx.ctx, mods__$18 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$18.checked,
            disabled: mods__$18.disabled,
            name: ctx__$17.name,
            val: ctx__$17.val
        }
    }, ctx__$17.text ];
}

function __$b30(__$ctx, __$ref) {
    var mods__$19 = $$mods, ctx__$20 = __$ctx.ctx, val__$21 = ctx__$20.val, isValDef__$22 = typeof val__$21 !== "undefined";
    if (isValDef__$22 && !Array.isArray(val__$21)) throw Error("checkbox-group: val must be an array");
    return (ctx__$20.options || []).map(function(option, i) {
        return [ !!i && !mods__$19.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$19.type,
                theme: mods__$19.theme,
                size: mods__$19.size,
                checked: isValDef__$22 && val__$21.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$19.disabled
            },
            name: ctx__$20.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b52(__$ctx, __$ref) {
    var url__$26 = __$ctx.ctx.url;
    var __$r__$28;
    var __$l0__$29 = $$mode;
    $$mode = "";
    var __$l1__$30 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$26 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$32;
    var __$l2__$33 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$32 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$33;
    __$r__$28 = __$r__$32;
    $$mode = __$l0__$29;
    __$ctx.ctx = __$l1__$30;
    return;
}

function __$b53(__$ctx, __$ref) {
    var ie__$34 = __$ctx.ctx.ie, hideRule__$35 = !ie__$34 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$34 === "!IE" ? [ ie__$34, "<!-->", "<!--" ] : [ ie__$34, "", "" ];
    var __$r__$37;
    var __$l0__$38 = $$mode;
    $$mode = "";
    var __$l3__$39 = __$ctx.ctx;
    var __$l1__$40 = __$l3__$39._ieCommented;
    __$l3__$39._ieCommented = true;
    var __$l2__$41 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$35[0] + "]>" + hideRule__$35[1], __$ctx.ctx, hideRule__$35[2] + "<![endif]-->" ];
    __$r__$37 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$38;
    __$l3__$39._ieCommented = __$l1__$40;
    __$ctx.ctx = __$l2__$41;
    return;
}

function __$b54(__$ctx, __$ref) {
    var ctx__$48 = __$ctx.ctx;
    var __$r__$50;
    var __$l0__$51 = $$mode;
    $$mode = "";
    var __$l1__$52 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$48.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$48.title
            }, {
                block: "ua"
            }, ctx__$48.head, ctx__$48.styles, ctx__$48.favicon ? {
                elem: "favicon",
                url: ctx__$48.favicon
            } : "" ]
        }, ctx__$48 ]
    } ];
    var __$r__$54;
    var __$l2__$55 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$54 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$55;
    __$r__$50 = __$r__$54;
    $$mode = __$l0__$51;
    __$ctx.ctx = __$l1__$52;
    return;
}

function __$b55(__$ctx, __$ref) {
    var BEM_INTERNAL__$56 = __$ctx.BEM.INTERNAL, ctx__$57 = __$ctx.ctx, isBEM__$58, tag__$59, res__$60;
    var __$r__$62;
    var __$l0__$63 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$64 = $$block;
    var __$r__$66;
    var __$l1__$67 = $$mode;
    $$mode = "tag";
    __$r__$66 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$67;
    tag__$59 = __$r__$66;
    typeof tag__$59 !== "undefined" || (tag__$59 = ctx__$57.tag);
    typeof tag__$59 !== "undefined" || (tag__$59 = "div");
    if (tag__$59) {
        var jsParams__$68, js__$69;
        if (vBlock__$64 && ctx__$57.js !== false) {
            var __$r__$70;
            var __$l2__$71 = $$mode;
            $$mode = "js";
            __$r__$70 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$71;
            js__$69 = __$r__$70;
            js__$69 = js__$69 ? __$ctx.extend(ctx__$57.js, js__$69 === true ? {} : js__$69) : ctx__$57.js === true ? {} : ctx__$57.js;
            js__$69 && ((jsParams__$68 = {})[BEM_INTERNAL__$56.buildClass(vBlock__$64, ctx__$57.elem)] = js__$69);
        }
        __$ctx._str += "<" + tag__$59;
        var __$r__$72;
        var __$l3__$73 = $$mode;
        $$mode = "bem";
        __$r__$72 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$73;
        isBEM__$58 = __$r__$72;
        typeof isBEM__$58 !== "undefined" || (isBEM__$58 = typeof ctx__$57.bem !== "undefined" ? ctx__$57.bem : ctx__$57.block || ctx__$57.elem);
        var __$r__$75;
        var __$l4__$76 = $$mode;
        $$mode = "cls";
        __$r__$75 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$76;
        var cls__$74 = __$r__$75;
        cls__$74 || (cls__$74 = ctx__$57.cls);
        var addJSInitClass__$77 = ctx__$57.block && jsParams__$68 && !ctx__$57.elem;
        if (isBEM__$58 || cls__$74) {
            __$ctx._str += ' class="';
            if (isBEM__$58) {
                __$ctx._str += BEM_INTERNAL__$56.buildClasses(vBlock__$64, ctx__$57.elem, ctx__$57.elemMods || ctx__$57.mods);
                var __$r__$79;
                var __$l5__$80 = $$mode;
                $$mode = "mix";
                __$r__$79 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$80;
                var mix__$78 = __$r__$79;
                ctx__$57.mix && (mix__$78 = mix__$78 ? [].concat(mix__$78, ctx__$57.mix) : ctx__$57.mix);
                if (mix__$78) {
                    var visited__$81 = {}, visitedKey__$82 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$81[visitedKey__$82(vBlock__$64, $$elem)] = true;
                    __$ctx.isArray(mix__$78) || (mix__$78 = [ mix__$78 ]);
                    for (var i__$83 = 0; i__$83 < mix__$78.length; i__$83++) {
                        var mixItem__$84 = mix__$78[i__$83], hasItem__$85 = mixItem__$84.block || mixItem__$84.elem, mixBlock__$86 = mixItem__$84.block || mixItem__$84._block || $$block, mixElem__$87 = mixItem__$84.elem || mixItem__$84._elem || $$elem;
                        hasItem__$85 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$56[hasItem__$85 ? "buildClasses" : "buildModsClasses"](mixBlock__$86, mixItem__$84.elem || mixItem__$84._elem || (mixItem__$84.block ? undefined : $$elem), mixItem__$84.elemMods || mixItem__$84.mods);
                        if (mixItem__$84.js) {
                            (jsParams__$68 || (jsParams__$68 = {}))[BEM_INTERNAL__$56.buildClass(mixBlock__$86, mixItem__$84.elem)] = mixItem__$84.js === true ? {} : mixItem__$84.js;
                            addJSInitClass__$77 || (addJSInitClass__$77 = mixBlock__$86 && !mixItem__$84.elem);
                        }
                        if (hasItem__$85 && !visited__$81[visitedKey__$82(mixBlock__$86, mixElem__$87)]) {
                            visited__$81[visitedKey__$82(mixBlock__$86, mixElem__$87)] = true;
                            var __$r__$89;
                            var __$l6__$90 = $$mode;
                            $$mode = "mix";
                            var __$l7__$91 = $$block;
                            $$block = mixBlock__$86;
                            var __$l8__$92 = $$elem;
                            $$elem = mixElem__$87;
                            __$r__$89 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$90;
                            $$block = __$l7__$91;
                            $$elem = __$l8__$92;
                            var nestedMix__$88 = __$r__$89;
                            if (nestedMix__$88) {
                                for (var j__$93 = 0; j__$93 < nestedMix__$88.length; j__$93++) {
                                    var nestedItem__$94 = nestedMix__$88[j__$93];
                                    if (!nestedItem__$94.block && !nestedItem__$94.elem || !visited__$81[visitedKey__$82(nestedItem__$94.block, nestedItem__$94.elem)]) {
                                        nestedItem__$94._block = mixBlock__$86;
                                        nestedItem__$94._elem = mixElem__$87;
                                        mix__$78.splice(i__$83 + 1, 0, nestedItem__$94);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$74 && (__$ctx._str += isBEM__$58 ? " " + cls__$74 : cls__$74);
            __$ctx._str += addJSInitClass__$77 ? ' i-bem"' : '"';
        }
        if (isBEM__$58 && jsParams__$68) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$68)) + '"';
        }
        var __$r__$96;
        var __$l9__$97 = $$mode;
        $$mode = "attrs";
        __$r__$96 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$97;
        var attrs__$95 = __$r__$96;
        attrs__$95 = __$ctx.extend(attrs__$95, ctx__$57.attrs);
        if (attrs__$95) {
            var name__$98, attr__$99;
            for (name__$98 in attrs__$95) {
                attr__$99 = attrs__$95[name__$98];
                if (typeof attr__$99 === "undefined") continue;
                __$ctx._str += " " + name__$98 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$99) ? attr__$99 : __$ctx.reapply(attr__$99)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$59)) {
        __$ctx._str += "/>";
    } else {
        tag__$59 && (__$ctx._str += ">");
        var __$r__$101;
        var __$l10__$102 = $$mode;
        $$mode = "content";
        __$r__$101 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$102;
        var content__$100 = __$r__$101;
        if (content__$100 || content__$100 === 0) {
            isBEM__$58 = vBlock__$64 || $$elem;
            var __$r__$103;
            var __$l11__$104 = $$mode;
            $$mode = "";
            var __$l12__$105 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$106 = __$ctx.position;
            __$ctx.position = isBEM__$58 ? 1 : __$ctx.position;
            var __$l14__$107 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$58 ? 1 : __$ctx._listLength;
            var __$l15__$108 = __$ctx.ctx;
            __$ctx.ctx = content__$100;
            __$r__$103 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$104;
            __$ctx._notNewList = __$l12__$105;
            __$ctx.position = __$l13__$106;
            __$ctx._listLength = __$l14__$107;
            __$ctx.ctx = __$l15__$108;
        }
        tag__$59 && (__$ctx._str += "</" + tag__$59 + ">");
    }
    res__$60 = __$ctx._str;
    __$r__$62 = undefined;
    __$ctx._str = __$l0__$63;
    __$ctx._buf.push(res__$60);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$110;
    var __$l0__$111 = $$mode;
    $$mode = "";
    var __$l1__$112 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$114;
    var __$l2__$115 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$114 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$115;
    __$r__$110 = __$r__$114;
    $$mode = __$l0__$111;
    __$ctx.ctx = __$l1__$112;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$116 = __$ctx.ctx;
    if (ctx__$116 && ctx__$116 !== true || ctx__$116 === 0) {
        __$ctx._str += ctx__$116 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$117 = __$ctx.ctx, len__$118 = ctx__$117.length, i__$119 = 0, prevPos__$120 = __$ctx.position, prevNotNewList__$121 = __$ctx._notNewList;
    if (prevNotNewList__$121) {
        __$ctx._listLength += len__$118 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$118;
    }
    __$ctx._notNewList = true;
    while (i__$119 < len__$118) (function __$lb__$122() {
        var __$r__$123;
        var __$l0__$124 = __$ctx.ctx;
        __$ctx.ctx = ctx__$117[i__$119++];
        __$r__$123 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$124;
        return __$r__$123;
    })();
    prevNotNewList__$121 || (__$ctx.position = prevPos__$120);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$125 = __$ctx.ctx.block, vElem__$126 = __$ctx.ctx.elem, block__$127 = __$ctx._currBlock || $$block;
    var __$r__$129;
    var __$l0__$130 = $$mode;
    $$mode = "default";
    var __$l1__$131 = $$block;
    $$block = vBlock__$125 || (vElem__$126 ? block__$127 : undefined);
    var __$l2__$132 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$125 || vElem__$126 ? undefined : block__$127;
    var __$l3__$133 = $$elem;
    $$elem = vElem__$126;
    var __$l4__$134 = $$mods;
    $$mods = vBlock__$125 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$135 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$129 = undefined;
    $$mode = __$l0__$130;
    $$block = __$l1__$131;
    __$ctx._currBlock = __$l2__$132;
    $$elem = __$l3__$133;
    $$mods = __$l4__$134;
    $$elemMods = __$l5__$135;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "button") {
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
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b27(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["type"] === "button") {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b29(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$23() {
                    var __$r__$24;
                    var __$l0__$25 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$24 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$25;
                    return __$r__$24;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 16) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$42() {
                var __$r__$43;
                var __$l0__$44 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 16;
                __$r__$43 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$44;
                return __$r__$43;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            return [ function __$lb__$45() {
                var __$r__$46;
                var __$l0__$47 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$46 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$47;
                return __$r__$46;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
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