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
        } else if (__$t === "dropdown") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$21() {
                        var __$r__$22;
                        var __$l0__$23 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$22 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$23;
                        return __$r__$22;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "popup") {
            if (!$$elem) {
                var __$r = __$b6(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
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
                    var __$r = __$b9(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b10(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b11(__$ctx, __$ref);
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
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
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
        } else if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 32) === 0) {
                            var __$r = __$b45(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b46(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b47(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b48(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
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
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b62(__$ctx, __$ref);
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

function __$b6(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    return {
        mainOffset: ctx__$35.mainOffset,
        secondaryOffset: ctx__$35.secondaryOffset,
        viewportOffset: ctx__$35.viewportOffset,
        directions: ctx__$35.directions,
        zIndexGroupLevel: ctx__$35.zIndexGroupLevel
    };
}

function __$b9(__$ctx, __$ref) {
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

function __$b10(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b11(__$ctx, __$ref) {
    var ctx__$24 = __$ctx.ctx, attrs__$25 = {}, tabIndex__$26;
    if (!$$mods.disabled) {
        if (ctx__$24.url) {
            attrs__$25.href = ctx__$24.url;
            tabIndex__$26 = ctx__$24.tabIndex;
        } else {
            tabIndex__$26 = ctx__$24.tabIndex || 0;
        }
    }
    typeof tabIndex__$26 === "undefined" || (attrs__$25.tabindex = tabIndex__$26);
    ctx__$24.title && (attrs__$25.title = ctx__$24.title);
    ctx__$24.target && (attrs__$25.target = ctx__$24.target);
    return attrs__$25;
}

function __$b32(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b33(__$ctx, __$ref) {
    var content__$17 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$17)) return content__$17;
    var res__$18 = __$ctx.isSimple(content__$17) ? {
        block: "button",
        text: content__$17
    } : content__$17;
    if (res__$18.block === "button") {
        var resMods__$19 = res__$18.mods || (res__$18.mods = {}), dropdownMods__$20 = $$mods;
        resMods__$19.size || (resMods__$19.size = dropdownMods__$20.size);
        resMods__$19.theme || (resMods__$19.theme = dropdownMods__$20.theme);
        resMods__$19.disabled = dropdownMods__$20.disabled;
    }
    return res__$18;
}

function __$b34(__$ctx, __$ref) {
    var content__$31 = __$ctx.ctx.content;
    if (__$ctx.isArray(content__$31)) return content__$31;
    var res__$32 = __$ctx.isSimple(content__$31) ? {
        block: "link",
        mods: {
            pseudo: true
        },
        content: content__$31
    } : content__$31;
    if (res__$32.block === "link") {
        var resMods__$33 = res__$32.mods || (res__$32.mods = {}), dropdownMods__$34 = $$mods;
        resMods__$33.theme || (resMods__$33.theme = dropdownMods__$34.theme);
        resMods__$33.disabled = dropdownMods__$34.disabled;
    }
    return res__$32;
}

function __$b35(__$ctx, __$ref) {
    var popup__$36 = __$ctx.ctx.popup;
    if (__$ctx.isSimple(popup__$36) || popup__$36.block !== "popup") {
        popup__$36 = {
            block: "popup",
            content: popup__$36
        };
    }
    var popupMods__$37 = popup__$36.mods || (popup__$36.mods = {});
    popupMods__$37.theme || (popupMods__$37.theme = $$mods.theme);
    popupMods__$37.hasOwnProperty("autoclosable") || (popupMods__$37.autoclosable = true);
    return [ {
        elem: "switcher",
        content: __$ctx.ctx.switcher
    }, popup__$36 ];
}

function __$b43(__$ctx, __$ref) {
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

function __$b44(__$ctx, __$ref) {
    var ctx__$27 = __$ctx.ctx;
    typeof ctx__$27.url === "object" && (ctx__$27.url = __$ctx.reapply(ctx__$27.url));
    var __$r__$29;
    var __$l0__$30 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$29 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$30;
    return;
}

function __$b45(__$ctx, __$ref) {
    var url__$38 = __$ctx.ctx.url;
    var __$r__$40;
    var __$l0__$41 = $$mode;
    $$mode = "";
    var __$l1__$42 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$38 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$44;
    var __$l2__$45 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$44 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$45;
    __$r__$40 = __$r__$44;
    $$mode = __$l0__$41;
    __$ctx.ctx = __$l1__$42;
    return;
}

function __$b46(__$ctx, __$ref) {
    var ie__$46 = __$ctx.ctx.ie, hideRule__$47 = !ie__$46 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$46 === "!IE" ? [ ie__$46, "<!-->", "<!--" ] : [ ie__$46, "", "" ];
    var __$r__$49;
    var __$l0__$50 = $$mode;
    $$mode = "";
    var __$l3__$51 = __$ctx.ctx;
    var __$l1__$52 = __$l3__$51._ieCommented;
    __$l3__$51._ieCommented = true;
    var __$l2__$53 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$47[0] + "]>" + hideRule__$47[1], __$ctx.ctx, hideRule__$47[2] + "<![endif]-->" ];
    __$r__$49 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$50;
    __$l3__$51._ieCommented = __$l1__$52;
    __$ctx.ctx = __$l2__$53;
    return;
}

function __$b47(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$60 = __$ctx.ctx;
    var __$r__$62;
    var __$l0__$63 = $$mode;
    $$mode = "";
    var __$l1__$64 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$60.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$60.title
            }, {
                block: "ua"
            }, ctx__$60.head, ctx__$60.styles, ctx__$60.favicon ? {
                elem: "favicon",
                url: ctx__$60.favicon
            } : "" ]
        }, ctx__$60 ]
    } ];
    var __$r__$66;
    var __$l2__$67 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$66 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$67;
    __$r__$62 = __$r__$66;
    $$mode = __$l0__$63;
    __$ctx.ctx = __$l1__$64;
    __$ctx._defPageApplied = false;
    return;
}

function __$b48(__$ctx, __$ref) {
    var BEM_INTERNAL__$68 = __$ctx.BEM.INTERNAL, ctx__$69 = __$ctx.ctx, isBEM__$70, tag__$71, res__$72;
    var __$r__$74;
    var __$l0__$75 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$76 = $$block;
    var __$r__$78;
    var __$l1__$79 = $$mode;
    $$mode = "tag";
    __$r__$78 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$79;
    tag__$71 = __$r__$78;
    typeof tag__$71 !== "undefined" || (tag__$71 = ctx__$69.tag);
    typeof tag__$71 !== "undefined" || (tag__$71 = "div");
    if (tag__$71) {
        var jsParams__$80, js__$81;
        if (vBlock__$76 && ctx__$69.js !== false) {
            var __$r__$82;
            var __$l2__$83 = $$mode;
            $$mode = "js";
            __$r__$82 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$83;
            js__$81 = __$r__$82;
            js__$81 = js__$81 ? __$ctx.extend(ctx__$69.js, js__$81 === true ? {} : js__$81) : ctx__$69.js === true ? {} : ctx__$69.js;
            js__$81 && ((jsParams__$80 = {})[BEM_INTERNAL__$68.buildClass(vBlock__$76, ctx__$69.elem)] = js__$81);
        }
        __$ctx._str += "<" + tag__$71;
        var __$r__$84;
        var __$l3__$85 = $$mode;
        $$mode = "bem";
        __$r__$84 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$85;
        isBEM__$70 = __$r__$84;
        typeof isBEM__$70 !== "undefined" || (isBEM__$70 = typeof ctx__$69.bem !== "undefined" ? ctx__$69.bem : ctx__$69.block || ctx__$69.elem);
        var __$r__$87;
        var __$l4__$88 = $$mode;
        $$mode = "cls";
        __$r__$87 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$88;
        var cls__$86 = __$r__$87;
        cls__$86 || (cls__$86 = ctx__$69.cls);
        var addJSInitClass__$89 = ctx__$69.block && jsParams__$80;
        if (isBEM__$70 || cls__$86) {
            __$ctx._str += ' class="';
            if (isBEM__$70) {
                __$ctx._str += BEM_INTERNAL__$68.buildClasses(vBlock__$76, ctx__$69.elem, ctx__$69.elemMods || ctx__$69.mods);
                var __$r__$91;
                var __$l5__$92 = $$mode;
                $$mode = "mix";
                __$r__$91 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$92;
                var mix__$90 = __$r__$91;
                ctx__$69.mix && (mix__$90 = mix__$90 ? [].concat(mix__$90, ctx__$69.mix) : ctx__$69.mix);
                if (mix__$90) {
                    var visited__$93 = {}, visitedKey__$94 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$93[visitedKey__$94(vBlock__$76, $$elem)] = true;
                    __$ctx.isArray(mix__$90) || (mix__$90 = [ mix__$90 ]);
                    for (var i__$95 = 0; i__$95 < mix__$90.length; i__$95++) {
                        var mixItem__$96 = mix__$90[i__$95], hasItem__$97 = mixItem__$96.block || mixItem__$96.elem, mixBlock__$98 = mixItem__$96.block || mixItem__$96._block || $$block, mixElem__$99 = mixItem__$96.elem || mixItem__$96._elem || $$elem;
                        hasItem__$97 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$68[hasItem__$97 ? "buildClasses" : "buildModsClasses"](mixBlock__$98, mixItem__$96.elem || mixItem__$96._elem || (mixItem__$96.block ? undefined : $$elem), mixItem__$96.elemMods || mixItem__$96.mods);
                        if (mixItem__$96.js) {
                            (jsParams__$80 || (jsParams__$80 = {}))[BEM_INTERNAL__$68.buildClass(mixBlock__$98, mixItem__$96.elem)] = mixItem__$96.js === true ? {} : mixItem__$96.js;
                            addJSInitClass__$89 || (addJSInitClass__$89 = mixBlock__$98 && !mixItem__$96.elem);
                        }
                        if (hasItem__$97 && !visited__$93[visitedKey__$94(mixBlock__$98, mixElem__$99)]) {
                            visited__$93[visitedKey__$94(mixBlock__$98, mixElem__$99)] = true;
                            var __$r__$101;
                            var __$l6__$102 = $$mode;
                            $$mode = "mix";
                            var __$l7__$103 = $$block;
                            $$block = mixBlock__$98;
                            var __$l8__$104 = $$elem;
                            $$elem = mixElem__$99;
                            __$r__$101 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$102;
                            $$block = __$l7__$103;
                            $$elem = __$l8__$104;
                            var nestedMix__$100 = __$r__$101;
                            if (nestedMix__$100) {
                                for (var j__$105 = 0; j__$105 < nestedMix__$100.length; j__$105++) {
                                    var nestedItem__$106 = nestedMix__$100[j__$105];
                                    if (!nestedItem__$106.block && !nestedItem__$106.elem || !visited__$93[visitedKey__$94(nestedItem__$106.block, nestedItem__$106.elem)]) {
                                        nestedItem__$106._block = mixBlock__$98;
                                        nestedItem__$106._elem = mixElem__$99;
                                        mix__$90.splice(i__$95 + 1, 0, nestedItem__$106);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$86 && (__$ctx._str += isBEM__$70 ? " " + cls__$86 : cls__$86);
            __$ctx._str += addJSInitClass__$89 ? ' i-bem"' : '"';
        }
        if (isBEM__$70 && jsParams__$80) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$80)) + '"';
        }
        var __$r__$108;
        var __$l9__$109 = $$mode;
        $$mode = "attrs";
        __$r__$108 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$109;
        var attrs__$107 = __$r__$108;
        attrs__$107 = __$ctx.extend(attrs__$107, ctx__$69.attrs);
        if (attrs__$107) {
            var name__$110, attr__$111;
            for (name__$110 in attrs__$107) {
                attr__$111 = attrs__$107[name__$110];
                if (typeof attr__$111 === "undefined") continue;
                __$ctx._str += " " + name__$110 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$111) ? attr__$111 : __$ctx.reapply(attr__$111)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$71)) {
        __$ctx._str += "/>";
    } else {
        tag__$71 && (__$ctx._str += ">");
        var __$r__$113;
        var __$l10__$114 = $$mode;
        $$mode = "content";
        __$r__$113 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$114;
        var content__$112 = __$r__$113;
        if (content__$112 || content__$112 === 0) {
            isBEM__$70 = vBlock__$76 || $$elem;
            var __$r__$115;
            var __$l11__$116 = $$mode;
            $$mode = "";
            var __$l12__$117 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$118 = __$ctx.position;
            __$ctx.position = isBEM__$70 ? 1 : __$ctx.position;
            var __$l14__$119 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$70 ? 1 : __$ctx._listLength;
            var __$l15__$120 = __$ctx.ctx;
            __$ctx.ctx = content__$112;
            __$r__$115 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$116;
            __$ctx._notNewList = __$l12__$117;
            __$ctx.position = __$l13__$118;
            __$ctx._listLength = __$l14__$119;
            __$ctx.ctx = __$l15__$120;
        }
        tag__$71 && (__$ctx._str += "</" + tag__$71 + ">");
    }
    res__$72 = __$ctx._str;
    __$r__$74 = undefined;
    __$ctx._str = __$l0__$75;
    __$ctx._buf.push(res__$72);
    return;
}

function __$b58(__$ctx, __$ref) {
    var __$r__$122;
    var __$l0__$123 = $$mode;
    $$mode = "";
    var __$l1__$124 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$126;
    var __$l2__$127 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$126 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$127;
    __$r__$122 = __$r__$126;
    $$mode = __$l0__$123;
    __$ctx.ctx = __$l1__$124;
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$128 = __$ctx.ctx;
    if (ctx__$128 && ctx__$128 !== true || ctx__$128 === 0) {
        __$ctx._str += ctx__$128 + "";
    }
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b61(__$ctx, __$ref) {
    var ctx__$129 = __$ctx.ctx, len__$130 = ctx__$129.length, i__$131 = 0, prevPos__$132 = __$ctx.position, prevNotNewList__$133 = __$ctx._notNewList;
    if (prevNotNewList__$133) {
        __$ctx._listLength += len__$130 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$130;
    }
    __$ctx._notNewList = true;
    while (i__$131 < len__$130) (function __$lb__$134() {
        var __$r__$135;
        var __$l0__$136 = __$ctx.ctx;
        __$ctx.ctx = ctx__$129[i__$131++];
        __$r__$135 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$136;
        return __$r__$135;
    })();
    prevNotNewList__$133 || (__$ctx.position = prevPos__$132);
    return;
}

function __$b62(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$137 = __$ctx.ctx.block, vElem__$138 = __$ctx.ctx.elem, block__$139 = __$ctx._currBlock || $$block;
    var __$r__$141;
    var __$l0__$142 = $$mode;
    $$mode = "default";
    var __$l1__$143 = $$block;
    $$block = vBlock__$137 || (vElem__$138 ? block__$139 : undefined);
    var __$l2__$144 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$137 || vElem__$138 ? undefined : block__$139;
    var __$l3__$145 = $$elem;
    $$elem = vElem__$138;
    var __$l4__$146 = $$mods;
    $$mods = vBlock__$137 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$147 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$141 = undefined;
    $$mode = __$l0__$142;
    $$block = __$l1__$143;
    __$ctx._currBlock = __$l2__$144;
    $$elem = __$l3__$145;
    $$mods = __$l4__$146;
    $$elemMods = __$l5__$147;
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
    } else if (__$t === "dropdown") {
        if ($$elem === "switcher") {
            return false;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["pseudo"] === true && !__$ctx.ctx.url) {
                return "span";
            }
            return "a";
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
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
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
            var __$r = __$b32(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "dropdown") {
        var __$t = $$elem;
        if (__$t === "switcher") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["switcher"];
                if (__$t === "button") {
                    var __$r = __$b33(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "link") {
                    var __$r = __$b34(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$54() {
                var __$r__$55;
                var __$l0__$56 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$55 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$56;
                return __$r__$55;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
            return [ function __$lb__$57() {
                var __$r__$58;
                var __$l0__$59 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 128;
                __$r__$58 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$59;
                return __$r__$58;
            }(), __$ctx.ctx.scripts ];
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
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