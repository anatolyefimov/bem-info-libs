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
        if (__$t === "menu") {
            var __$t = $$elem;
            if (__$t === "group-title") {
                return {
                    role: "presentation"
                };
            } else if (__$t === "group") {
                if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$3() {
                        var __$r__$4;
                        var __$l0__$5 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$4 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$5;
                        return __$r__$4;
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
                var __$r = __$b4(__$ctx, __$ref);
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 1) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$29() {
                        var __$r__$30;
                        var __$l0__$31 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$30 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$31;
                        return __$r__$30;
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
                }, function __$lb__$48() {
                    var __$r__$49;
                    var __$l0__$50 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$49 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$50;
                    return __$r__$49;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$51() {
                    var __$r__$52;
                    var __$l0__$53 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$52 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$53;
                    return __$r__$52;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "menu") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$6() {
                        var __$r__$7;
                        var __$l0__$8 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$7 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$8;
                        return __$r__$7;
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
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "menu") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b20(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b21(__$ctx, __$ref);
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
                            var __$r = __$b22(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b23(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b24(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b25(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        if ($$block === "menu" && !$$elem) {
            return [ {
                elem: "control"
            } ];
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "ua") {
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
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b48(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b50(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b51(__$ctx, __$ref);
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

function __$b4(__$ctx, __$ref) {
    var attrs__$13 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$13.tabindex = 0);
    return attrs__$13;
}

function __$b20(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx, mods__$15 = $$mods, firstItem__$16, checkedItems__$17 = [];
    if (ctx__$14.content) {
        var isValDef__$18 = typeof ctx__$14.val !== "undefined", containsVal__$19 = function(val) {
            return isValDef__$18 && (mods__$15.mode === "check" ? ctx__$14.val.indexOf(val) > -1 : ctx__$14.val === val);
        }, iterateItems__$20 = function(content) {
            var i__$21 = 0, itemOrGroup__$22;
            while (itemOrGroup__$22 = content[i__$21++]) {
                if (itemOrGroup__$22.block === "menu-item") {
                    firstItem__$16 || (firstItem__$16 = itemOrGroup__$22);
                    if (containsVal__$19(itemOrGroup__$22.val)) {
                        (itemOrGroup__$22.mods = itemOrGroup__$22.mods || {}).checked = true;
                        checkedItems__$17.push(itemOrGroup__$22);
                    }
                } else {
                    iterateItems__$20(itemOrGroup__$22.content);
                }
            }
        };
        iterateItems__$20(ctx__$14.content);
    }
    __$ctx._firstItem = firstItem__$16;
    __$ctx._checkedItems = checkedItems__$17;
    var __$r__$24;
    var __$l0__$25 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: mods__$15.theme,
        disabled: mods__$15.disabled
    };
    var __$r__$27;
    var __$l1__$28 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$27 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$28;
    __$r__$24 = __$r__$27;
    __$ctx._menuMods = __$l0__$25;
    return;
}

function __$b21(__$ctx, __$ref) {
    var mods__$9 = $$mods;
    mods__$9.theme = mods__$9.theme || __$ctx._menuMods.theme;
    mods__$9.disabled = mods__$9.disabled || __$ctx._menuMods.disabled;
    var __$r__$11;
    var __$l0__$12 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$12;
    return;
}

function __$b22(__$ctx, __$ref) {
    var url__$32 = __$ctx.ctx.url;
    var __$r__$34;
    var __$l0__$35 = $$mode;
    $$mode = "";
    var __$l1__$36 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$32 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$38;
    var __$l2__$39 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$38 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$39;
    __$r__$34 = __$r__$38;
    $$mode = __$l0__$35;
    __$ctx.ctx = __$l1__$36;
    return;
}

function __$b23(__$ctx, __$ref) {
    var ie__$40 = __$ctx.ctx.ie, hideRule__$41 = !ie__$40 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$40 === "!IE" ? [ ie__$40, "<!-->", "<!--" ] : [ ie__$40, "", "" ];
    var __$r__$43;
    var __$l0__$44 = $$mode;
    $$mode = "";
    var __$l3__$45 = __$ctx.ctx;
    var __$l1__$46 = __$l3__$45._ieCommented;
    __$l3__$45._ieCommented = true;
    var __$l2__$47 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$41[0] + "]>" + hideRule__$41[1], __$ctx.ctx, hideRule__$41[2] + "<![endif]-->" ];
    __$r__$43 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$44;
    __$l3__$45._ieCommented = __$l1__$46;
    __$ctx.ctx = __$l2__$47;
    return;
}

function __$b24(__$ctx, __$ref) {
    var ctx__$54 = __$ctx.ctx;
    var __$r__$56;
    var __$l0__$57 = $$mode;
    $$mode = "";
    var __$l1__$58 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$54.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$54.title
            }, {
                block: "ua"
            }, ctx__$54.head, ctx__$54.styles, ctx__$54.favicon ? {
                elem: "favicon",
                url: ctx__$54.favicon
            } : "" ]
        }, ctx__$54 ]
    } ];
    var __$r__$60;
    var __$l2__$61 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$60 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$61;
    __$r__$56 = __$r__$60;
    $$mode = __$l0__$57;
    __$ctx.ctx = __$l1__$58;
    return;
}

function __$b25(__$ctx, __$ref) {
    var BEM_INTERNAL__$62 = __$ctx.BEM.INTERNAL, ctx__$63 = __$ctx.ctx, isBEM__$64, tag__$65, res__$66;
    var __$r__$68;
    var __$l0__$69 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$70 = $$block;
    var __$r__$72;
    var __$l1__$73 = $$mode;
    $$mode = "tag";
    __$r__$72 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$73;
    tag__$65 = __$r__$72;
    typeof tag__$65 !== "undefined" || (tag__$65 = ctx__$63.tag);
    typeof tag__$65 !== "undefined" || (tag__$65 = "div");
    if (tag__$65) {
        var jsParams__$74, js__$75;
        if (vBlock__$70 && ctx__$63.js !== false) {
            var __$r__$76;
            var __$l2__$77 = $$mode;
            $$mode = "js";
            __$r__$76 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$77;
            js__$75 = __$r__$76;
            js__$75 = js__$75 ? __$ctx.extend(ctx__$63.js, js__$75 === true ? {} : js__$75) : ctx__$63.js === true ? {} : ctx__$63.js;
            js__$75 && ((jsParams__$74 = {})[BEM_INTERNAL__$62.buildClass(vBlock__$70, ctx__$63.elem)] = js__$75);
        }
        __$ctx._str += "<" + tag__$65;
        var __$r__$78;
        var __$l3__$79 = $$mode;
        $$mode = "bem";
        __$r__$78 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$79;
        isBEM__$64 = __$r__$78;
        typeof isBEM__$64 !== "undefined" || (isBEM__$64 = typeof ctx__$63.bem !== "undefined" ? ctx__$63.bem : ctx__$63.block || ctx__$63.elem);
        var __$r__$81;
        var __$l4__$82 = $$mode;
        $$mode = "cls";
        __$r__$81 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$82;
        var cls__$80 = __$r__$81;
        cls__$80 || (cls__$80 = ctx__$63.cls);
        var addJSInitClass__$83 = ctx__$63.block && jsParams__$74 && !ctx__$63.elem;
        if (isBEM__$64 || cls__$80) {
            __$ctx._str += ' class="';
            if (isBEM__$64) {
                __$ctx._str += BEM_INTERNAL__$62.buildClasses(vBlock__$70, ctx__$63.elem, ctx__$63.elemMods || ctx__$63.mods);
                var __$r__$85;
                var __$l5__$86 = $$mode;
                $$mode = "mix";
                __$r__$85 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$86;
                var mix__$84 = __$r__$85;
                ctx__$63.mix && (mix__$84 = mix__$84 ? [].concat(mix__$84, ctx__$63.mix) : ctx__$63.mix);
                if (mix__$84) {
                    var visited__$87 = {}, visitedKey__$88 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$87[visitedKey__$88(vBlock__$70, $$elem)] = true;
                    __$ctx.isArray(mix__$84) || (mix__$84 = [ mix__$84 ]);
                    for (var i__$89 = 0; i__$89 < mix__$84.length; i__$89++) {
                        var mixItem__$90 = mix__$84[i__$89], hasItem__$91 = mixItem__$90.block || mixItem__$90.elem, mixBlock__$92 = mixItem__$90.block || mixItem__$90._block || $$block, mixElem__$93 = mixItem__$90.elem || mixItem__$90._elem || $$elem;
                        hasItem__$91 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$62[hasItem__$91 ? "buildClasses" : "buildModsClasses"](mixBlock__$92, mixItem__$90.elem || mixItem__$90._elem || (mixItem__$90.block ? undefined : $$elem), mixItem__$90.elemMods || mixItem__$90.mods);
                        if (mixItem__$90.js) {
                            (jsParams__$74 || (jsParams__$74 = {}))[BEM_INTERNAL__$62.buildClass(mixBlock__$92, mixItem__$90.elem)] = mixItem__$90.js === true ? {} : mixItem__$90.js;
                            addJSInitClass__$83 || (addJSInitClass__$83 = mixBlock__$92 && !mixItem__$90.elem);
                        }
                        if (hasItem__$91 && !visited__$87[visitedKey__$88(mixBlock__$92, mixElem__$93)]) {
                            visited__$87[visitedKey__$88(mixBlock__$92, mixElem__$93)] = true;
                            var __$r__$95;
                            var __$l6__$96 = $$mode;
                            $$mode = "mix";
                            var __$l7__$97 = $$block;
                            $$block = mixBlock__$92;
                            var __$l8__$98 = $$elem;
                            $$elem = mixElem__$93;
                            __$r__$95 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$96;
                            $$block = __$l7__$97;
                            $$elem = __$l8__$98;
                            var nestedMix__$94 = __$r__$95;
                            if (nestedMix__$94) {
                                for (var j__$99 = 0; j__$99 < nestedMix__$94.length; j__$99++) {
                                    var nestedItem__$100 = nestedMix__$94[j__$99];
                                    if (!nestedItem__$100.block && !nestedItem__$100.elem || !visited__$87[visitedKey__$88(nestedItem__$100.block, nestedItem__$100.elem)]) {
                                        nestedItem__$100._block = mixBlock__$92;
                                        nestedItem__$100._elem = mixElem__$93;
                                        mix__$84.splice(i__$89 + 1, 0, nestedItem__$100);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$80 && (__$ctx._str += isBEM__$64 ? " " + cls__$80 : cls__$80);
            __$ctx._str += addJSInitClass__$83 ? ' i-bem"' : '"';
        }
        if (isBEM__$64 && jsParams__$74) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$74)) + '"';
        }
        var __$r__$102;
        var __$l9__$103 = $$mode;
        $$mode = "attrs";
        __$r__$102 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$103;
        var attrs__$101 = __$r__$102;
        attrs__$101 = __$ctx.extend(attrs__$101, ctx__$63.attrs);
        if (attrs__$101) {
            var name__$104, attr__$105;
            for (name__$104 in attrs__$101) {
                attr__$105 = attrs__$101[name__$104];
                if (typeof attr__$105 === "undefined") continue;
                __$ctx._str += " " + name__$104 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$105) ? attr__$105 : __$ctx.reapply(attr__$105)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$65)) {
        __$ctx._str += "/>";
    } else {
        tag__$65 && (__$ctx._str += ">");
        var __$r__$107;
        var __$l10__$108 = $$mode;
        $$mode = "content";
        __$r__$107 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$108;
        var content__$106 = __$r__$107;
        if (content__$106 || content__$106 === 0) {
            isBEM__$64 = vBlock__$70 || $$elem;
            var __$r__$109;
            var __$l11__$110 = $$mode;
            $$mode = "";
            var __$l12__$111 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$112 = __$ctx.position;
            __$ctx.position = isBEM__$64 ? 1 : __$ctx.position;
            var __$l14__$113 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$64 ? 1 : __$ctx._listLength;
            var __$l15__$114 = __$ctx.ctx;
            __$ctx.ctx = content__$106;
            __$r__$109 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$110;
            __$ctx._notNewList = __$l12__$111;
            __$ctx.position = __$l13__$112;
            __$ctx._listLength = __$l14__$113;
            __$ctx.ctx = __$l15__$114;
        }
        tag__$65 && (__$ctx._str += "</" + tag__$65 + ">");
    }
    res__$66 = __$ctx._str;
    __$r__$68 = undefined;
    __$ctx._str = __$l0__$69;
    __$ctx._buf.push(res__$66);
    return;
}

function __$b47(__$ctx, __$ref) {
    var __$r__$116;
    var __$l0__$117 = $$mode;
    $$mode = "";
    var __$l1__$118 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$120;
    var __$l2__$121 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$120 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$121;
    __$r__$116 = __$r__$120;
    $$mode = __$l0__$117;
    __$ctx.ctx = __$l1__$118;
    return;
}

function __$b48(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$122 = __$ctx.ctx;
    if (ctx__$122 && ctx__$122 !== true || ctx__$122 === 0) {
        __$ctx._str += ctx__$122 + "";
    }
    return;
}

function __$b49(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b50(__$ctx, __$ref) {
    var ctx__$123 = __$ctx.ctx, len__$124 = ctx__$123.length, i__$125 = 0, prevPos__$126 = __$ctx.position, prevNotNewList__$127 = __$ctx._notNewList;
    if (prevNotNewList__$127) {
        __$ctx._listLength += len__$124 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$124;
    }
    __$ctx._notNewList = true;
    while (i__$125 < len__$124) (function __$lb__$128() {
        var __$r__$129;
        var __$l0__$130 = __$ctx.ctx;
        __$ctx.ctx = ctx__$123[i__$125++];
        __$r__$129 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$130;
        return __$r__$129;
    })();
    prevNotNewList__$127 || (__$ctx.position = prevPos__$126);
    return;
}

function __$b51(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$131 = __$ctx.ctx.block, vElem__$132 = __$ctx.ctx.elem, block__$133 = __$ctx._currBlock || $$block;
    var __$r__$135;
    var __$l0__$136 = $$mode;
    $$mode = "default";
    var __$l1__$137 = $$block;
    $$block = vBlock__$131 || (vElem__$132 ? block__$133 : undefined);
    var __$l2__$138 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$131 || vElem__$132 ? undefined : block__$133;
    var __$l3__$139 = $$elem;
    $$elem = vElem__$132;
    var __$l4__$140 = $$mods;
    $$mods = vBlock__$131 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$141 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$135 = undefined;
    $$mode = __$l0__$136;
    $$block = __$l1__$137;
    __$ctx._currBlock = __$l2__$138;
    $$elem = __$l3__$139;
    $$mods = __$l4__$140;
    $$elemMods = __$l5__$141;
    return;
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