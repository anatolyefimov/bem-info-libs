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
    if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "input") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b30(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                return {
                    elem: "box",
                    content: {
                        elem: "control"
                    }
                };
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$28() {
                        var __$r__$29;
                        var __$l0__$30 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$29 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$30;
                        return __$r__$29;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$47() {
                    var __$r__$48;
                    var __$l0__$49 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$48 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$49;
                    return __$r__$48;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$50() {
                    var __$r__$51;
                    var __$l0__$52 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$51 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$52;
                    return __$r__$51;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
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
                var __$r = __$b40(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "input") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 64) === 0) {
                            var __$r = __$b42(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b43(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b45(__$ctx, __$ref);
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
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b59(__$ctx, __$ref);
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
        ctx["_input"] = undefined;
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

function __$b6(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, attrs__$6 = {
        type: $$mods.type || "button",
        name: ctx__$5.name,
        value: ctx__$5.val
    };
    $$mods.disabled && (attrs__$6.disabled = "disabled");
    return __$ctx.extend(function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), attrs__$6);
}

function __$b7(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b9(__$ctx, __$ref) {
    var input__$20 = __$ctx._input, attrs__$21 = {
        id: input__$20.id,
        name: input__$20.name,
        value: input__$20.val,
        maxlength: input__$20.maxLength,
        tabindex: input__$20.tabIndex,
        placeholder: input__$20.placeholder
    };
    input__$20.autocomplete === false && (attrs__$21.autocomplete = "off");
    $$mods.disabled && (attrs__$21.disabled = "disabled");
    return attrs__$21;
}

function __$b30(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b40(__$ctx, __$ref) {
    var __$r__$12;
    var __$l0__$13 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$15;
    var __$l1__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$16;
    __$r__$12 = __$r__$15;
    __$ctx._button = __$l0__$13;
    return;
}

function __$b41(__$ctx, __$ref) {
    var __$r__$23;
    var __$l0__$24 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$26;
    var __$l1__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$27;
    __$r__$23 = __$r__$26;
    __$ctx._input = __$l0__$24;
    return;
}

function __$b42(__$ctx, __$ref) {
    var url__$31 = __$ctx.ctx.url;
    var __$r__$33;
    var __$l0__$34 = $$mode;
    $$mode = "";
    var __$l1__$35 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$31 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$37;
    var __$l2__$38 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$37 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$38;
    __$r__$33 = __$r__$37;
    $$mode = __$l0__$34;
    __$ctx.ctx = __$l1__$35;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ie__$39 = __$ctx.ctx.ie, hideRule__$40 = !ie__$39 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$39 === "!IE" ? [ ie__$39, "<!-->", "<!--" ] : [ ie__$39, "", "" ];
    var __$r__$42;
    var __$l0__$43 = $$mode;
    $$mode = "";
    var __$l3__$44 = __$ctx.ctx;
    var __$l1__$45 = __$l3__$44._ieCommented;
    __$l3__$44._ieCommented = true;
    var __$l2__$46 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$40[0] + "]>" + hideRule__$40[1], __$ctx.ctx, hideRule__$40[2] + "<![endif]-->" ];
    __$r__$42 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$43;
    __$l3__$44._ieCommented = __$l1__$45;
    __$ctx.ctx = __$l2__$46;
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$53 = __$ctx.ctx;
    var __$r__$55;
    var __$l0__$56 = $$mode;
    $$mode = "";
    var __$l1__$57 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$53.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$53.title
            }, {
                block: "ua"
            }, ctx__$53.head, ctx__$53.styles, ctx__$53.favicon ? {
                elem: "favicon",
                url: ctx__$53.favicon
            } : "" ]
        }, ctx__$53 ]
    } ];
    var __$r__$59;
    var __$l2__$60 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$59 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$60;
    __$r__$55 = __$r__$59;
    $$mode = __$l0__$56;
    __$ctx.ctx = __$l1__$57;
    __$ctx._defPageApplied = false;
    return;
}

function __$b45(__$ctx, __$ref) {
    var BEM_INTERNAL__$61 = __$ctx.BEM.INTERNAL, ctx__$62 = __$ctx.ctx, isBEM__$63, tag__$64, res__$65;
    var __$r__$67;
    var __$l0__$68 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$69 = $$block;
    var __$r__$71;
    var __$l1__$72 = $$mode;
    $$mode = "tag";
    __$r__$71 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$72;
    tag__$64 = __$r__$71;
    typeof tag__$64 !== "undefined" || (tag__$64 = ctx__$62.tag);
    typeof tag__$64 !== "undefined" || (tag__$64 = "div");
    if (tag__$64) {
        var jsParams__$73, js__$74;
        if (vBlock__$69 && ctx__$62.js !== false) {
            var __$r__$75;
            var __$l2__$76 = $$mode;
            $$mode = "js";
            __$r__$75 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$76;
            js__$74 = __$r__$75;
            js__$74 = js__$74 ? __$ctx.extend(ctx__$62.js, js__$74 === true ? {} : js__$74) : ctx__$62.js === true ? {} : ctx__$62.js;
            js__$74 && ((jsParams__$73 = {})[BEM_INTERNAL__$61.buildClass(vBlock__$69, ctx__$62.elem)] = js__$74);
        }
        __$ctx._str += "<" + tag__$64;
        var __$r__$77;
        var __$l3__$78 = $$mode;
        $$mode = "bem";
        __$r__$77 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$78;
        isBEM__$63 = __$r__$77;
        typeof isBEM__$63 !== "undefined" || (isBEM__$63 = typeof ctx__$62.bem !== "undefined" ? ctx__$62.bem : ctx__$62.block || ctx__$62.elem);
        var __$r__$80;
        var __$l4__$81 = $$mode;
        $$mode = "cls";
        __$r__$80 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$81;
        var cls__$79 = __$r__$80;
        cls__$79 || (cls__$79 = ctx__$62.cls);
        var addJSInitClass__$82 = ctx__$62.block && jsParams__$73;
        if (isBEM__$63 || cls__$79) {
            __$ctx._str += ' class="';
            if (isBEM__$63) {
                __$ctx._str += BEM_INTERNAL__$61.buildClasses(vBlock__$69, ctx__$62.elem, ctx__$62.elemMods || ctx__$62.mods);
                var __$r__$84;
                var __$l5__$85 = $$mode;
                $$mode = "mix";
                __$r__$84 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$85;
                var mix__$83 = __$r__$84;
                ctx__$62.mix && (mix__$83 = mix__$83 ? [].concat(mix__$83, ctx__$62.mix) : ctx__$62.mix);
                if (mix__$83) {
                    var visited__$86 = {}, visitedKey__$87 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$86[visitedKey__$87(vBlock__$69, $$elem)] = true;
                    __$ctx.isArray(mix__$83) || (mix__$83 = [ mix__$83 ]);
                    for (var i__$88 = 0; i__$88 < mix__$83.length; i__$88++) {
                        var mixItem__$89 = mix__$83[i__$88], hasItem__$90 = mixItem__$89.block || mixItem__$89.elem, mixBlock__$91 = mixItem__$89.block || mixItem__$89._block || $$block, mixElem__$92 = mixItem__$89.elem || mixItem__$89._elem || $$elem;
                        hasItem__$90 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$61[hasItem__$90 ? "buildClasses" : "buildModsClasses"](mixBlock__$91, mixItem__$89.elem || mixItem__$89._elem || (mixItem__$89.block ? undefined : $$elem), mixItem__$89.elemMods || mixItem__$89.mods);
                        if (mixItem__$89.js) {
                            (jsParams__$73 || (jsParams__$73 = {}))[BEM_INTERNAL__$61.buildClass(mixBlock__$91, mixItem__$89.elem)] = mixItem__$89.js === true ? {} : mixItem__$89.js;
                            addJSInitClass__$82 || (addJSInitClass__$82 = mixBlock__$91 && !mixItem__$89.elem);
                        }
                        if (hasItem__$90 && !visited__$86[visitedKey__$87(mixBlock__$91, mixElem__$92)]) {
                            visited__$86[visitedKey__$87(mixBlock__$91, mixElem__$92)] = true;
                            var __$r__$94;
                            var __$l6__$95 = $$mode;
                            $$mode = "mix";
                            var __$l7__$96 = $$block;
                            $$block = mixBlock__$91;
                            var __$l8__$97 = $$elem;
                            $$elem = mixElem__$92;
                            __$r__$94 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$95;
                            $$block = __$l7__$96;
                            $$elem = __$l8__$97;
                            var nestedMix__$93 = __$r__$94;
                            if (nestedMix__$93) {
                                for (var j__$98 = 0; j__$98 < nestedMix__$93.length; j__$98++) {
                                    var nestedItem__$99 = nestedMix__$93[j__$98];
                                    if (!nestedItem__$99.block && !nestedItem__$99.elem || !visited__$86[visitedKey__$87(nestedItem__$99.block, nestedItem__$99.elem)]) {
                                        nestedItem__$99._block = mixBlock__$91;
                                        nestedItem__$99._elem = mixElem__$92;
                                        mix__$83.splice(i__$88 + 1, 0, nestedItem__$99);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$79 && (__$ctx._str += isBEM__$63 ? " " + cls__$79 : cls__$79);
            __$ctx._str += addJSInitClass__$82 ? ' i-bem"' : '"';
        }
        if (isBEM__$63 && jsParams__$73) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$73)) + '"';
        }
        var __$r__$101;
        var __$l9__$102 = $$mode;
        $$mode = "attrs";
        __$r__$101 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$102;
        var attrs__$100 = __$r__$101;
        attrs__$100 = __$ctx.extend(attrs__$100, ctx__$62.attrs);
        if (attrs__$100) {
            var name__$103, attr__$104;
            for (name__$103 in attrs__$100) {
                attr__$104 = attrs__$100[name__$103];
                if (typeof attr__$104 === "undefined") continue;
                __$ctx._str += " " + name__$103 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$104) ? attr__$104 : __$ctx.reapply(attr__$104)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$64)) {
        __$ctx._str += "/>";
    } else {
        tag__$64 && (__$ctx._str += ">");
        var __$r__$106;
        var __$l10__$107 = $$mode;
        $$mode = "content";
        __$r__$106 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$107;
        var content__$105 = __$r__$106;
        if (content__$105 || content__$105 === 0) {
            isBEM__$63 = vBlock__$69 || $$elem;
            var __$r__$108;
            var __$l11__$109 = $$mode;
            $$mode = "";
            var __$l12__$110 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$111 = __$ctx.position;
            __$ctx.position = isBEM__$63 ? 1 : __$ctx.position;
            var __$l14__$112 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$63 ? 1 : __$ctx._listLength;
            var __$l15__$113 = __$ctx.ctx;
            __$ctx.ctx = content__$105;
            __$r__$108 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$109;
            __$ctx._notNewList = __$l12__$110;
            __$ctx.position = __$l13__$111;
            __$ctx._listLength = __$l14__$112;
            __$ctx.ctx = __$l15__$113;
        }
        tag__$64 && (__$ctx._str += "</" + tag__$64 + ">");
    }
    res__$65 = __$ctx._str;
    __$r__$67 = undefined;
    __$ctx._str = __$l0__$68;
    __$ctx._buf.push(res__$65);
    return;
}

function __$b55(__$ctx, __$ref) {
    var __$r__$115;
    var __$l0__$116 = $$mode;
    $$mode = "";
    var __$l1__$117 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$119;
    var __$l2__$120 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$119 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$120;
    __$r__$115 = __$r__$119;
    $$mode = __$l0__$116;
    __$ctx.ctx = __$l1__$117;
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$121 = __$ctx.ctx;
    if (ctx__$121 && ctx__$121 !== true || ctx__$121 === 0) {
        __$ctx._str += ctx__$121 + "";
    }
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b58(__$ctx, __$ref) {
    var ctx__$122 = __$ctx.ctx, len__$123 = ctx__$122.length, i__$124 = 0, prevPos__$125 = __$ctx.position, prevNotNewList__$126 = __$ctx._notNewList;
    if (prevNotNewList__$126) {
        __$ctx._listLength += len__$123 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$123;
    }
    __$ctx._notNewList = true;
    while (i__$124 < len__$123) (function __$lb__$127() {
        var __$r__$128;
        var __$l0__$129 = __$ctx.ctx;
        __$ctx.ctx = ctx__$122[i__$124++];
        __$r__$128 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$129;
        return __$r__$128;
    })();
    prevNotNewList__$126 || (__$ctx.position = prevPos__$125);
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$130 = __$ctx.ctx.block, vElem__$131 = __$ctx.ctx.elem, block__$132 = __$ctx._currBlock || $$block;
    var __$r__$134;
    var __$l0__$135 = $$mode;
    $$mode = "default";
    var __$l1__$136 = $$block;
    $$block = vBlock__$130 || (vElem__$131 ? block__$132 : undefined);
    var __$l2__$137 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$130 || vElem__$131 ? undefined : block__$132;
    var __$l3__$138 = $$elem;
    $$elem = vElem__$131;
    var __$l4__$139 = $$mods;
    $$mods = vBlock__$130 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$140 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$134 = undefined;
    $$mode = __$l0__$135;
    $$block = __$l1__$136;
    __$ctx._currBlock = __$l2__$137;
    $$elem = __$l3__$138;
    $$mods = __$l4__$139;
    $$elemMods = __$l5__$140;
    return;
}

function __$g0(__$ctx, __$ref) {
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
                var __$r = __$b6(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b7(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            if ($$mods && $$mods["type"] === "search" && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$ctx.extend(function __$lb__$17() {
                    var __$r__$18;
                    var __$l0__$19 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$18 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$19;
                    return __$r__$18;
                }(), {
                    type: "search"
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b9(__$ctx, __$ref);
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

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
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