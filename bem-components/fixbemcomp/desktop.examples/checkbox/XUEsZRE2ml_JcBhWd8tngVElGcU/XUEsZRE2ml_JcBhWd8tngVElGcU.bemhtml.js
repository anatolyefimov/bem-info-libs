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
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 16) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$39() {
                    var __$r__$40;
                    var __$l0__$41 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$40 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$41;
                    return __$r__$40;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
                return [ function __$lb__$42() {
                    var __$r__$43;
                    var __$l0__$44 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$43 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$44;
                    return __$r__$43;
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
                    var __$r = __$b14(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b15(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b16(__$ctx, __$ref);
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
    } else if (__$t === "mix") {
        if ($$block === "button" && !$$elem) {
            return {
                elem: "control"
            };
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 8) === 0) {
                            var __$r = __$b39(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b40(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b42(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 128) === 0) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b56(__$ctx, __$ref);
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

function __$b14(__$ctx, __$ref) {
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

function __$b15(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$12.tabIndex,
        id: ctx__$12.id,
        title: ctx__$12.title
    };
}

function __$b16(__$ctx, __$ref) {
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

function __$b38(__$ctx, __$ref) {
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

function __$b39(__$ctx, __$ref) {
    var url__$23 = __$ctx.ctx.url;
    var __$r__$25;
    var __$l0__$26 = $$mode;
    $$mode = "";
    var __$l1__$27 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$23 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$29;
    var __$l2__$30 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$29 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$30;
    __$r__$25 = __$r__$29;
    $$mode = __$l0__$26;
    __$ctx.ctx = __$l1__$27;
    return;
}

function __$b40(__$ctx, __$ref) {
    var ie__$31 = __$ctx.ctx.ie, hideRule__$32 = !ie__$31 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$31 === "!IE" ? [ ie__$31, "<!-->", "<!--" ] : [ ie__$31, "", "" ];
    var __$r__$34;
    var __$l0__$35 = $$mode;
    $$mode = "";
    var __$l3__$36 = __$ctx.ctx;
    var __$l1__$37 = __$l3__$36._ieCommented;
    __$l3__$36._ieCommented = true;
    var __$l2__$38 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$32[0] + "]>" + hideRule__$32[1], __$ctx.ctx, hideRule__$32[2] + "<![endif]-->" ];
    __$r__$34 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$35;
    __$l3__$36._ieCommented = __$l1__$37;
    __$ctx.ctx = __$l2__$38;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$45 = __$ctx.ctx;
    var __$r__$47;
    var __$l0__$48 = $$mode;
    $$mode = "";
    var __$l1__$49 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$45.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$45.title
            }, {
                block: "ua"
            }, ctx__$45.head, ctx__$45.styles, ctx__$45.favicon ? {
                elem: "favicon",
                url: ctx__$45.favicon
            } : "" ]
        }, ctx__$45 ]
    } ];
    var __$r__$51;
    var __$l2__$52 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$51 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$52;
    __$r__$47 = __$r__$51;
    $$mode = __$l0__$48;
    __$ctx.ctx = __$l1__$49;
    __$ctx._defPageApplied = false;
    return;
}

function __$b42(__$ctx, __$ref) {
    var BEM_INTERNAL__$53 = __$ctx.BEM.INTERNAL, ctx__$54 = __$ctx.ctx, isBEM__$55, tag__$56, res__$57;
    var __$r__$59;
    var __$l0__$60 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$61 = $$block;
    var __$r__$63;
    var __$l1__$64 = $$mode;
    $$mode = "tag";
    __$r__$63 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$64;
    tag__$56 = __$r__$63;
    typeof tag__$56 !== "undefined" || (tag__$56 = ctx__$54.tag);
    typeof tag__$56 !== "undefined" || (tag__$56 = "div");
    if (tag__$56) {
        var jsParams__$65, js__$66;
        if (vBlock__$61 && ctx__$54.js !== false) {
            var __$r__$67;
            var __$l2__$68 = $$mode;
            $$mode = "js";
            __$r__$67 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$68;
            js__$66 = __$r__$67;
            js__$66 = js__$66 ? __$ctx.extend(ctx__$54.js, js__$66 === true ? {} : js__$66) : ctx__$54.js === true ? {} : ctx__$54.js;
            js__$66 && ((jsParams__$65 = {})[BEM_INTERNAL__$53.buildClass(vBlock__$61, ctx__$54.elem)] = js__$66);
        }
        __$ctx._str += "<" + tag__$56;
        var __$r__$69;
        var __$l3__$70 = $$mode;
        $$mode = "bem";
        __$r__$69 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$70;
        isBEM__$55 = __$r__$69;
        typeof isBEM__$55 !== "undefined" || (isBEM__$55 = typeof ctx__$54.bem !== "undefined" ? ctx__$54.bem : ctx__$54.block || ctx__$54.elem);
        var __$r__$72;
        var __$l4__$73 = $$mode;
        $$mode = "cls";
        __$r__$72 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$73;
        var cls__$71 = __$r__$72;
        cls__$71 || (cls__$71 = ctx__$54.cls);
        var addJSInitClass__$74 = ctx__$54.block && jsParams__$65 && !ctx__$54.elem;
        if (isBEM__$55 || cls__$71) {
            __$ctx._str += ' class="';
            if (isBEM__$55) {
                __$ctx._str += BEM_INTERNAL__$53.buildClasses(vBlock__$61, ctx__$54.elem, ctx__$54.elemMods || ctx__$54.mods);
                var __$r__$76;
                var __$l5__$77 = $$mode;
                $$mode = "mix";
                __$r__$76 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$77;
                var mix__$75 = __$r__$76;
                ctx__$54.mix && (mix__$75 = mix__$75 ? [].concat(mix__$75, ctx__$54.mix) : ctx__$54.mix);
                if (mix__$75) {
                    var visited__$78 = {}, visitedKey__$79 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$78[visitedKey__$79(vBlock__$61, $$elem)] = true;
                    __$ctx.isArray(mix__$75) || (mix__$75 = [ mix__$75 ]);
                    for (var i__$80 = 0; i__$80 < mix__$75.length; i__$80++) {
                        var mixItem__$81 = mix__$75[i__$80], hasItem__$82 = mixItem__$81.block || mixItem__$81.elem, mixBlock__$83 = mixItem__$81.block || mixItem__$81._block || $$block, mixElem__$84 = mixItem__$81.elem || mixItem__$81._elem || $$elem;
                        hasItem__$82 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$53[hasItem__$82 ? "buildClasses" : "buildModsClasses"](mixBlock__$83, mixItem__$81.elem || mixItem__$81._elem || (mixItem__$81.block ? undefined : $$elem), mixItem__$81.elemMods || mixItem__$81.mods);
                        if (mixItem__$81.js) {
                            (jsParams__$65 || (jsParams__$65 = {}))[BEM_INTERNAL__$53.buildClass(mixBlock__$83, mixItem__$81.elem)] = mixItem__$81.js === true ? {} : mixItem__$81.js;
                            addJSInitClass__$74 || (addJSInitClass__$74 = mixBlock__$83 && !mixItem__$81.elem);
                        }
                        if (hasItem__$82 && !visited__$78[visitedKey__$79(mixBlock__$83, mixElem__$84)]) {
                            visited__$78[visitedKey__$79(mixBlock__$83, mixElem__$84)] = true;
                            var __$r__$86;
                            var __$l6__$87 = $$mode;
                            $$mode = "mix";
                            var __$l7__$88 = $$block;
                            $$block = mixBlock__$83;
                            var __$l8__$89 = $$elem;
                            $$elem = mixElem__$84;
                            __$r__$86 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$87;
                            $$block = __$l7__$88;
                            $$elem = __$l8__$89;
                            var nestedMix__$85 = __$r__$86;
                            if (nestedMix__$85) {
                                for (var j__$90 = 0; j__$90 < nestedMix__$85.length; j__$90++) {
                                    var nestedItem__$91 = nestedMix__$85[j__$90];
                                    if (!nestedItem__$91.block && !nestedItem__$91.elem || !visited__$78[visitedKey__$79(nestedItem__$91.block, nestedItem__$91.elem)]) {
                                        nestedItem__$91._block = mixBlock__$83;
                                        nestedItem__$91._elem = mixElem__$84;
                                        mix__$75.splice(i__$80 + 1, 0, nestedItem__$91);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$71 && (__$ctx._str += isBEM__$55 ? " " + cls__$71 : cls__$71);
            __$ctx._str += addJSInitClass__$74 ? ' i-bem"' : '"';
        }
        if (isBEM__$55 && jsParams__$65) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$65)) + '"';
        }
        var __$r__$93;
        var __$l9__$94 = $$mode;
        $$mode = "attrs";
        __$r__$93 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$94;
        var attrs__$92 = __$r__$93;
        attrs__$92 = __$ctx.extend(attrs__$92, ctx__$54.attrs);
        if (attrs__$92) {
            var name__$95, attr__$96;
            for (name__$95 in attrs__$92) {
                attr__$96 = attrs__$92[name__$95];
                if (typeof attr__$96 === "undefined") continue;
                __$ctx._str += " " + name__$95 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$96) ? attr__$96 : __$ctx.reapply(attr__$96)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$56)) {
        __$ctx._str += "/>";
    } else {
        tag__$56 && (__$ctx._str += ">");
        var __$r__$98;
        var __$l10__$99 = $$mode;
        $$mode = "content";
        __$r__$98 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$99;
        var content__$97 = __$r__$98;
        if (content__$97 || content__$97 === 0) {
            isBEM__$55 = vBlock__$61 || $$elem;
            var __$r__$100;
            var __$l11__$101 = $$mode;
            $$mode = "";
            var __$l12__$102 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$103 = __$ctx.position;
            __$ctx.position = isBEM__$55 ? 1 : __$ctx.position;
            var __$l14__$104 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$55 ? 1 : __$ctx._listLength;
            var __$l15__$105 = __$ctx.ctx;
            __$ctx.ctx = content__$97;
            __$r__$100 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$101;
            __$ctx._notNewList = __$l12__$102;
            __$ctx.position = __$l13__$103;
            __$ctx._listLength = __$l14__$104;
            __$ctx.ctx = __$l15__$105;
        }
        tag__$56 && (__$ctx._str += "</" + tag__$56 + ">");
    }
    res__$57 = __$ctx._str;
    __$r__$59 = undefined;
    __$ctx._str = __$l0__$60;
    __$ctx._buf.push(res__$57);
    return;
}

function __$b52(__$ctx, __$ref) {
    var __$r__$107;
    var __$l0__$108 = $$mode;
    $$mode = "";
    var __$l1__$109 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$111;
    var __$l2__$112 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$111 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$112;
    __$r__$107 = __$r__$111;
    $$mode = __$l0__$108;
    __$ctx.ctx = __$l1__$109;
    return;
}

function __$b53(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$113 = __$ctx.ctx;
    if (ctx__$113 && ctx__$113 !== true || ctx__$113 === 0) {
        __$ctx._str += ctx__$113 + "";
    }
    return;
}

function __$b54(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b55(__$ctx, __$ref) {
    var ctx__$114 = __$ctx.ctx, len__$115 = ctx__$114.length, i__$116 = 0, prevPos__$117 = __$ctx.position, prevNotNewList__$118 = __$ctx._notNewList;
    if (prevNotNewList__$118) {
        __$ctx._listLength += len__$115 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$115;
    }
    __$ctx._notNewList = true;
    while (i__$116 < len__$115) (function __$lb__$119() {
        var __$r__$120;
        var __$l0__$121 = __$ctx.ctx;
        __$ctx.ctx = ctx__$114[i__$116++];
        __$r__$120 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$121;
        return __$r__$120;
    })();
    prevNotNewList__$118 || (__$ctx.position = prevPos__$117);
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$122 = __$ctx.ctx.block, vElem__$123 = __$ctx.ctx.elem, block__$124 = __$ctx._currBlock || $$block;
    var __$r__$126;
    var __$l0__$127 = $$mode;
    $$mode = "default";
    var __$l1__$128 = $$block;
    $$block = vBlock__$122 || (vElem__$123 ? block__$124 : undefined);
    var __$l2__$129 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$122 || vElem__$123 ? undefined : block__$124;
    var __$l3__$130 = $$elem;
    $$elem = vElem__$123;
    var __$l4__$131 = $$mods;
    $$mods = vBlock__$122 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$132 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$126 = undefined;
    $$mode = __$l0__$127;
    $$block = __$l1__$128;
    __$ctx._currBlock = __$l2__$129;
    $$elem = __$l3__$130;
    $$mods = __$l4__$131;
    $$elemMods = __$l5__$132;
    return;
}

function __$g0(__$ctx, __$ref) {
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