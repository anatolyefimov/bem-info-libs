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
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        url: __$ctx.ctx.url
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
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$13() {
                        var __$r__$14;
                        var __$l0__$15 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
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
        } else if (__$t === "menu") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 128) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$36() {
                        var __$r__$37;
                        var __$l0__$38 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 128;
                        __$r__$37 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$38;
                        return __$r__$37;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "button") {
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
    } else if (__$t === "default") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b52(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 32) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$30() {
                    var __$r__$31;
                    var __$l0__$32 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$31 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$32;
                    return __$r__$31;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 1024) === 0) {
                    return [ function __$lb__$50() {
                        var __$r__$51;
                        var __$l0__$52 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                        __$r__$51 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$52;
                        return __$r__$51;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 4096) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$69() {
                    var __$r__$70;
                    var __$l0__$71 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$70 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$71;
                    return __$r__$70;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
                return [ function __$lb__$72() {
                    var __$r__$73;
                    var __$l0__$74 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$73 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$74;
                    return __$r__$73;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32768) === 0) {
            var __$r = __$b68(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b69(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b70(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b72(__$ctx, __$ref);
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
        ctx["_menuItemDisabled"] = undefined;
        ctx["_button"] = undefined;
        ctx["_menuMods"] = undefined;
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
    var ctx__$3 = __$ctx.ctx, attrs__$4 = {}, tabIndex__$5;
    if (!$$mods.disabled) {
        if (ctx__$3.url) {
            attrs__$4.href = ctx__$3.url;
            tabIndex__$5 = ctx__$3.tabIndex;
        } else {
            tabIndex__$5 = ctx__$3.tabIndex || 0;
        }
    }
    typeof tabIndex__$5 === "undefined" || (attrs__$4.tabindex = tabIndex__$5);
    ctx__$3.title && (attrs__$4.title = ctx__$3.title);
    ctx__$3.target && (attrs__$4.target = ctx__$3.target);
    return attrs__$4;
}

function __$b5(__$ctx, __$ref) {
    var ctx__$18 = __$ctx.ctx, attrs__$19 = {
        type: $$mods.type || "button",
        name: ctx__$18.name,
        value: ctx__$18.val
    };
    $$mods.disabled && (attrs__$19.disabled = "disabled");
    return __$ctx.extend(function __$lb__$20() {
        var __$r__$21;
        var __$l0__$22 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$21 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$22;
        return __$r__$21;
    }(), attrs__$19);
}

function __$b6(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$23.tabIndex,
        id: ctx__$23.id,
        title: ctx__$23.title
    };
}

function __$b10(__$ctx, __$ref) {
    var attrs__$43 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$43.tabindex = 0);
    return attrs__$43;
}

function __$b41(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b42(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    applyc(__$ctx, __$ref);
    return;
}

function __$b43(__$ctx, __$ref) {
    var __$r__$11;
    var __$l0__$12 = __$ctx._menuItemDisabled;
    __$ctx._menuItemDisabled = true;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx._menuItemDisabled = __$l0__$12;
    return;
}

function __$b44(__$ctx, __$ref) {
    var mods__$39 = $$mods;
    mods__$39.theme = mods__$39.theme || __$ctx._menuMods.theme;
    mods__$39.disabled = mods__$39.disabled || __$ctx._menuMods.disabled;
    var __$r__$41;
    var __$l0__$42 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$41 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$42;
    return;
}

function __$b45(__$ctx, __$ref) {
    var __$r__$25;
    var __$l0__$26 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$28;
    var __$l1__$29 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$28 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$29;
    __$r__$25 = __$r__$28;
    __$ctx._button = __$l0__$26;
    return;
}

function __$b46(__$ctx, __$ref) {
    var __$r__$45;
    var __$l0__$46 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$48;
    var __$l1__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$49;
    __$r__$45 = __$r__$48;
    __$ctx._menuMods = __$l0__$46;
    delete __$ctx._menuTheme;
    return;
}

function __$b47(__$ctx, __$ref) {
    var url__$53 = __$ctx.ctx.url;
    var __$r__$55;
    var __$l0__$56 = $$mode;
    $$mode = "";
    var __$l1__$57 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$53 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$59;
    var __$l2__$60 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$59 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$60;
    __$r__$55 = __$r__$59;
    $$mode = __$l0__$56;
    __$ctx.ctx = __$l1__$57;
    return;
}

function __$b48(__$ctx, __$ref) {
    var ie__$61 = __$ctx.ctx.ie, hideRule__$62 = !ie__$61 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$61 === "!IE" ? [ ie__$61, "<!-->", "<!--" ] : [ ie__$61, "", "" ];
    var __$r__$64;
    var __$l0__$65 = $$mode;
    $$mode = "";
    var __$l3__$66 = __$ctx.ctx;
    var __$l1__$67 = __$l3__$66._ieCommented;
    __$l3__$66._ieCommented = true;
    var __$l2__$68 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$62[0] + "]>" + hideRule__$62[1], __$ctx.ctx, hideRule__$62[2] + "<![endif]-->" ];
    __$r__$64 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$65;
    __$l3__$66._ieCommented = __$l1__$67;
    __$ctx.ctx = __$l2__$68;
    return;
}

function __$b49(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$75 = __$ctx.ctx;
    var __$r__$77;
    var __$l0__$78 = $$mode;
    $$mode = "";
    var __$l1__$79 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$75.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$75.title
            }, {
                block: "ua"
            }, ctx__$75.head, ctx__$75.styles, ctx__$75.favicon ? {
                elem: "favicon",
                url: ctx__$75.favicon
            } : "" ]
        }, ctx__$75 ]
    } ];
    var __$r__$81;
    var __$l2__$82 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$81 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$82;
    __$r__$77 = __$r__$81;
    $$mode = __$l0__$78;
    __$ctx.ctx = __$l1__$79;
    __$ctx._defPageApplied = false;
    return;
}

function __$b50(__$ctx, __$ref) {
    var BEM_INTERNAL__$83 = __$ctx.BEM.INTERNAL, ctx__$84 = __$ctx.ctx, isBEM__$85, tag__$86, res__$87;
    var __$r__$89;
    var __$l0__$90 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$91 = $$block;
    var __$r__$93;
    var __$l1__$94 = $$mode;
    $$mode = "tag";
    __$r__$93 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$94;
    tag__$86 = __$r__$93;
    typeof tag__$86 !== "undefined" || (tag__$86 = ctx__$84.tag);
    typeof tag__$86 !== "undefined" || (tag__$86 = "div");
    if (tag__$86) {
        var jsParams__$95, js__$96;
        if (vBlock__$91 && ctx__$84.js !== false) {
            var __$r__$97;
            var __$l2__$98 = $$mode;
            $$mode = "js";
            __$r__$97 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$98;
            js__$96 = __$r__$97;
            js__$96 = js__$96 ? __$ctx.extend(ctx__$84.js, js__$96 === true ? {} : js__$96) : ctx__$84.js === true ? {} : ctx__$84.js;
            js__$96 && ((jsParams__$95 = {})[BEM_INTERNAL__$83.buildClass(vBlock__$91, ctx__$84.elem)] = js__$96);
        }
        __$ctx._str += "<" + tag__$86;
        var __$r__$99;
        var __$l3__$100 = $$mode;
        $$mode = "bem";
        __$r__$99 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$100;
        isBEM__$85 = __$r__$99;
        typeof isBEM__$85 !== "undefined" || (isBEM__$85 = typeof ctx__$84.bem !== "undefined" ? ctx__$84.bem : ctx__$84.block || ctx__$84.elem);
        var __$r__$102;
        var __$l4__$103 = $$mode;
        $$mode = "cls";
        __$r__$102 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$103;
        var cls__$101 = __$r__$102;
        cls__$101 || (cls__$101 = ctx__$84.cls);
        var addJSInitClass__$104 = ctx__$84.block && jsParams__$95;
        if (isBEM__$85 || cls__$101) {
            __$ctx._str += ' class="';
            if (isBEM__$85) {
                __$ctx._str += BEM_INTERNAL__$83.buildClasses(vBlock__$91, ctx__$84.elem, ctx__$84.elemMods || ctx__$84.mods);
                var __$r__$106;
                var __$l5__$107 = $$mode;
                $$mode = "mix";
                __$r__$106 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$107;
                var mix__$105 = __$r__$106;
                ctx__$84.mix && (mix__$105 = mix__$105 ? [].concat(mix__$105, ctx__$84.mix) : ctx__$84.mix);
                if (mix__$105) {
                    var visited__$108 = {}, visitedKey__$109 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$108[visitedKey__$109(vBlock__$91, $$elem)] = true;
                    __$ctx.isArray(mix__$105) || (mix__$105 = [ mix__$105 ]);
                    for (var i__$110 = 0; i__$110 < mix__$105.length; i__$110++) {
                        var mixItem__$111 = mix__$105[i__$110], hasItem__$112 = mixItem__$111.block || mixItem__$111.elem, mixBlock__$113 = mixItem__$111.block || mixItem__$111._block || $$block, mixElem__$114 = mixItem__$111.elem || mixItem__$111._elem || $$elem;
                        hasItem__$112 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$83[hasItem__$112 ? "buildClasses" : "buildModsClasses"](mixBlock__$113, mixItem__$111.elem || mixItem__$111._elem || (mixItem__$111.block ? undefined : $$elem), mixItem__$111.elemMods || mixItem__$111.mods);
                        if (mixItem__$111.js) {
                            (jsParams__$95 || (jsParams__$95 = {}))[BEM_INTERNAL__$83.buildClass(mixBlock__$113, mixItem__$111.elem)] = mixItem__$111.js === true ? {} : mixItem__$111.js;
                            addJSInitClass__$104 || (addJSInitClass__$104 = mixBlock__$113 && !mixItem__$111.elem);
                        }
                        if (hasItem__$112 && !visited__$108[visitedKey__$109(mixBlock__$113, mixElem__$114)]) {
                            visited__$108[visitedKey__$109(mixBlock__$113, mixElem__$114)] = true;
                            var __$r__$116;
                            var __$l6__$117 = $$mode;
                            $$mode = "mix";
                            var __$l7__$118 = $$block;
                            $$block = mixBlock__$113;
                            var __$l8__$119 = $$elem;
                            $$elem = mixElem__$114;
                            __$r__$116 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$117;
                            $$block = __$l7__$118;
                            $$elem = __$l8__$119;
                            var nestedMix__$115 = __$r__$116;
                            if (nestedMix__$115) {
                                for (var j__$120 = 0; j__$120 < nestedMix__$115.length; j__$120++) {
                                    var nestedItem__$121 = nestedMix__$115[j__$120];
                                    if (!nestedItem__$121.block && !nestedItem__$121.elem || !visited__$108[visitedKey__$109(nestedItem__$121.block, nestedItem__$121.elem)]) {
                                        nestedItem__$121._block = mixBlock__$113;
                                        nestedItem__$121._elem = mixElem__$114;
                                        mix__$105.splice(i__$110 + 1, 0, nestedItem__$121);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$101 && (__$ctx._str += isBEM__$85 ? " " + cls__$101 : cls__$101);
            __$ctx._str += addJSInitClass__$104 ? ' i-bem"' : '"';
        }
        if (isBEM__$85 && jsParams__$95) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$95)) + '"';
        }
        var __$r__$123;
        var __$l9__$124 = $$mode;
        $$mode = "attrs";
        __$r__$123 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$124;
        var attrs__$122 = __$r__$123;
        attrs__$122 = __$ctx.extend(attrs__$122, ctx__$84.attrs);
        if (attrs__$122) {
            var name__$125, attr__$126;
            for (name__$125 in attrs__$122) {
                attr__$126 = attrs__$122[name__$125];
                if (typeof attr__$126 === "undefined") continue;
                __$ctx._str += " " + name__$125 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$126) ? attr__$126 : __$ctx.reapply(attr__$126)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$86)) {
        __$ctx._str += "/>";
    } else {
        tag__$86 && (__$ctx._str += ">");
        var __$r__$128;
        var __$l10__$129 = $$mode;
        $$mode = "content";
        __$r__$128 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$129;
        var content__$127 = __$r__$128;
        if (content__$127 || content__$127 === 0) {
            isBEM__$85 = vBlock__$91 || $$elem;
            var __$r__$130;
            var __$l11__$131 = $$mode;
            $$mode = "";
            var __$l12__$132 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$133 = __$ctx.position;
            __$ctx.position = isBEM__$85 ? 1 : __$ctx.position;
            var __$l14__$134 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$85 ? 1 : __$ctx._listLength;
            var __$l15__$135 = __$ctx.ctx;
            __$ctx.ctx = content__$127;
            __$r__$130 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$131;
            __$ctx._notNewList = __$l12__$132;
            __$ctx.position = __$l13__$133;
            __$ctx._listLength = __$l14__$134;
            __$ctx.ctx = __$l15__$135;
        }
        tag__$86 && (__$ctx._str += "</" + tag__$86 + ">");
    }
    res__$87 = __$ctx._str;
    __$r__$89 = undefined;
    __$ctx._str = __$l0__$90;
    __$ctx._buf.push(res__$87);
    return;
}

function __$b52(__$ctx, __$ref) {
    var ctx__$16 = __$ctx.ctx, content__$17 = [ ctx__$16.icon ];
    "text" in ctx__$16 && content__$17.push({
        elem: "text",
        content: ctx__$16.text
    });
    return content__$17;
}

function __$b68(__$ctx, __$ref) {
    var __$r__$137;
    var __$l0__$138 = $$mode;
    $$mode = "";
    var __$l1__$139 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$141;
    var __$l2__$142 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$141 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$142;
    __$r__$137 = __$r__$141;
    $$mode = __$l0__$138;
    __$ctx.ctx = __$l1__$139;
    return;
}

function __$b69(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$143 = __$ctx.ctx;
    if (ctx__$143 && ctx__$143 !== true || ctx__$143 === 0) {
        __$ctx._str += ctx__$143 + "";
    }
    return;
}

function __$b70(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b71(__$ctx, __$ref) {
    var ctx__$144 = __$ctx.ctx, len__$145 = ctx__$144.length, i__$146 = 0, prevPos__$147 = __$ctx.position, prevNotNewList__$148 = __$ctx._notNewList;
    if (prevNotNewList__$148) {
        __$ctx._listLength += len__$145 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$145;
    }
    __$ctx._notNewList = true;
    while (i__$146 < len__$145) (function __$lb__$149() {
        var __$r__$150;
        var __$l0__$151 = __$ctx.ctx;
        __$ctx.ctx = ctx__$144[i__$146++];
        __$r__$150 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$151;
        return __$r__$150;
    })();
    prevNotNewList__$148 || (__$ctx.position = prevPos__$147);
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$152 = __$ctx.ctx.block, vElem__$153 = __$ctx.ctx.elem, block__$154 = __$ctx._currBlock || $$block;
    var __$r__$156;
    var __$l0__$157 = $$mode;
    $$mode = "default";
    var __$l1__$158 = $$block;
    $$block = vBlock__$152 || (vElem__$153 ? block__$154 : undefined);
    var __$l2__$159 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$152 || vElem__$153 ? undefined : block__$154;
    var __$l3__$160 = $$elem;
    $$elem = vElem__$153;
    var __$l4__$161 = $$mods;
    $$mods = vBlock__$152 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$162 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$156 = undefined;
    $$mode = __$l0__$157;
    $$block = __$l1__$158;
    __$ctx._currBlock = __$l2__$159;
    $$elem = __$l3__$160;
    $$mods = __$l4__$161;
    $$elemMods = __$l5__$162;
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
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "button") {
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b5(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b6(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$ctx.extend(function __$lb__$33() {
                    var __$r__$34;
                    var __$l0__$35 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$34 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$35;
                    return __$r__$34;
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
            var __$r = __$b10(__$ctx, __$ref);
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
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            return "a";
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
        if (__$t === "link") {
            return "link";
        } else if (__$t === "js") {
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
    if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuItemDisabled) {
                var __$r = __$b42(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && $$mods["type"] === "link") {
                var __$r = __$b43(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuMods && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b45(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 2048) === 0) {
                        var __$r = __$b47(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b48(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b50(__$ctx, __$ref);
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