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
        if (__$t === "textarea") {
            if ($$elem === "control") {
                return __$ctx._textarea.val;
            }
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$13() {
                    var __$r__$14;
                    var __$l0__$15 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$14 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$15;
                    return __$r__$14;
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
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$16() {
                    var __$r__$17;
                    var __$l0__$18 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$17 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$18;
                    return __$r__$17;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if ($$elem === "control") {
                var __$r = __$b7(__$ctx, __$ref);
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
        var __$t = $$block;
        if (__$t === "textarea") {
            if ($$elem === "control") {
                return "textarea";
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
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b23(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b24(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b25(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
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
    } else if (__$t === "mix") {
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b43(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b44(__$ctx, __$ref);
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
        ctx["_textarea"] = undefined;
        ctx["__$a0"] = 0;
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

function __$b7(__$ctx, __$ref) {
    var textarea__$0 = __$ctx._textarea, attrs__$1 = {
        id: textarea__$0.id,
        name: textarea__$0.name,
        tabindex: textarea__$0.tabIndex,
        placeholder: textarea__$0.placeholder
    };
    textarea__$0.autocomplete === false && (attrs__$1.autocomplete = "off");
    $$mods.disabled && (attrs__$1.disabled = "disabled");
    return attrs__$1;
}

function __$b23(__$ctx, __$ref) {
    var __$r__$3;
    var __$l0__$4 = __$ctx._textarea;
    __$ctx._textarea = __$ctx.ctx;
    var __$r__$6;
    var __$l1__$7 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$6 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$7;
    __$r__$3 = __$r__$6;
    __$ctx._textarea = __$l0__$4;
    return;
}

function __$b24(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$19 = __$ctx.ctx;
    var __$r__$21;
    var __$l0__$22 = $$mode;
    $$mode = "";
    var __$l1__$23 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$19.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$19.title
            }, {
                block: "ua"
            }, ctx__$19.head, ctx__$19.styles, ctx__$19.favicon ? {
                elem: "favicon",
                url: ctx__$19.favicon
            } : "" ]
        }, ctx__$19 ]
    } ];
    var __$r__$25;
    var __$l2__$26 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$25 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$26;
    __$r__$21 = __$r__$25;
    $$mode = __$l0__$22;
    __$ctx.ctx = __$l1__$23;
    __$ctx._defPageApplied = false;
    return;
}

function __$b25(__$ctx, __$ref) {
    var BEM_INTERNAL__$27 = __$ctx.BEM.INTERNAL, ctx__$28 = __$ctx.ctx, isBEM__$29, tag__$30, res__$31;
    var __$r__$33;
    var __$l0__$34 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$35 = $$block;
    var __$r__$37;
    var __$l1__$38 = $$mode;
    $$mode = "tag";
    __$r__$37 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$38;
    tag__$30 = __$r__$37;
    typeof tag__$30 !== "undefined" || (tag__$30 = ctx__$28.tag);
    typeof tag__$30 !== "undefined" || (tag__$30 = "div");
    if (tag__$30) {
        var jsParams__$39, js__$40;
        if (vBlock__$35 && ctx__$28.js !== false) {
            var __$r__$41;
            var __$l2__$42 = $$mode;
            $$mode = "js";
            __$r__$41 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$42;
            js__$40 = __$r__$41;
            js__$40 = js__$40 ? __$ctx.extend(ctx__$28.js, js__$40 === true ? {} : js__$40) : ctx__$28.js === true ? {} : ctx__$28.js;
            js__$40 && ((jsParams__$39 = {})[BEM_INTERNAL__$27.buildClass(vBlock__$35, ctx__$28.elem)] = js__$40);
        }
        __$ctx._str += "<" + tag__$30;
        var __$r__$43;
        var __$l3__$44 = $$mode;
        $$mode = "bem";
        __$r__$43 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$44;
        isBEM__$29 = __$r__$43;
        typeof isBEM__$29 !== "undefined" || (isBEM__$29 = typeof ctx__$28.bem !== "undefined" ? ctx__$28.bem : ctx__$28.block || ctx__$28.elem);
        var __$r__$46;
        var __$l4__$47 = $$mode;
        $$mode = "cls";
        __$r__$46 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$47;
        var cls__$45 = __$r__$46;
        cls__$45 || (cls__$45 = ctx__$28.cls);
        var addJSInitClass__$48 = ctx__$28.block && jsParams__$39 && !ctx__$28.elem;
        if (isBEM__$29 || cls__$45) {
            __$ctx._str += ' class="';
            if (isBEM__$29) {
                __$ctx._str += BEM_INTERNAL__$27.buildClasses(vBlock__$35, ctx__$28.elem, ctx__$28.elemMods || ctx__$28.mods);
                var __$r__$50;
                var __$l5__$51 = $$mode;
                $$mode = "mix";
                __$r__$50 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$51;
                var mix__$49 = __$r__$50;
                ctx__$28.mix && (mix__$49 = mix__$49 ? [].concat(mix__$49, ctx__$28.mix) : ctx__$28.mix);
                if (mix__$49) {
                    var visited__$52 = {}, visitedKey__$53 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$52[visitedKey__$53(vBlock__$35, $$elem)] = true;
                    __$ctx.isArray(mix__$49) || (mix__$49 = [ mix__$49 ]);
                    for (var i__$54 = 0; i__$54 < mix__$49.length; i__$54++) {
                        var mixItem__$55 = mix__$49[i__$54], hasItem__$56 = mixItem__$55.block || mixItem__$55.elem, mixBlock__$57 = mixItem__$55.block || mixItem__$55._block || $$block, mixElem__$58 = mixItem__$55.elem || mixItem__$55._elem || $$elem;
                        hasItem__$56 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$27[hasItem__$56 ? "buildClasses" : "buildModsClasses"](mixBlock__$57, mixItem__$55.elem || mixItem__$55._elem || (mixItem__$55.block ? undefined : $$elem), mixItem__$55.elemMods || mixItem__$55.mods);
                        if (mixItem__$55.js) {
                            (jsParams__$39 || (jsParams__$39 = {}))[BEM_INTERNAL__$27.buildClass(mixBlock__$57, mixItem__$55.elem)] = mixItem__$55.js === true ? {} : mixItem__$55.js;
                            addJSInitClass__$48 || (addJSInitClass__$48 = mixBlock__$57 && !mixItem__$55.elem);
                        }
                        if (hasItem__$56 && !visited__$52[visitedKey__$53(mixBlock__$57, mixElem__$58)]) {
                            visited__$52[visitedKey__$53(mixBlock__$57, mixElem__$58)] = true;
                            var __$r__$60;
                            var __$l6__$61 = $$mode;
                            $$mode = "mix";
                            var __$l7__$62 = $$block;
                            $$block = mixBlock__$57;
                            var __$l8__$63 = $$elem;
                            $$elem = mixElem__$58;
                            __$r__$60 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$61;
                            $$block = __$l7__$62;
                            $$elem = __$l8__$63;
                            var nestedMix__$59 = __$r__$60;
                            if (nestedMix__$59) {
                                for (var j__$64 = 0; j__$64 < nestedMix__$59.length; j__$64++) {
                                    var nestedItem__$65 = nestedMix__$59[j__$64];
                                    if (!nestedItem__$65.block && !nestedItem__$65.elem || !visited__$52[visitedKey__$53(nestedItem__$65.block, nestedItem__$65.elem)]) {
                                        nestedItem__$65._block = mixBlock__$57;
                                        nestedItem__$65._elem = mixElem__$58;
                                        mix__$49.splice(i__$54 + 1, 0, nestedItem__$65);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$45 && (__$ctx._str += isBEM__$29 ? " " + cls__$45 : cls__$45);
            __$ctx._str += addJSInitClass__$48 ? ' i-bem"' : '"';
        }
        if (isBEM__$29 && jsParams__$39) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$39)) + '"';
        }
        var __$r__$67;
        var __$l9__$68 = $$mode;
        $$mode = "attrs";
        __$r__$67 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$68;
        var attrs__$66 = __$r__$67;
        attrs__$66 = __$ctx.extend(attrs__$66, ctx__$28.attrs);
        if (attrs__$66) {
            var name__$69, attr__$70;
            for (name__$69 in attrs__$66) {
                attr__$70 = attrs__$66[name__$69];
                if (typeof attr__$70 === "undefined") continue;
                __$ctx._str += " " + name__$69 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$70) ? attr__$70 : __$ctx.reapply(attr__$70)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$30)) {
        __$ctx._str += "/>";
    } else {
        tag__$30 && (__$ctx._str += ">");
        var __$r__$72;
        var __$l10__$73 = $$mode;
        $$mode = "content";
        __$r__$72 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$73;
        var content__$71 = __$r__$72;
        if (content__$71 || content__$71 === 0) {
            isBEM__$29 = vBlock__$35 || $$elem;
            var __$r__$74;
            var __$l11__$75 = $$mode;
            $$mode = "";
            var __$l12__$76 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$77 = __$ctx.position;
            __$ctx.position = isBEM__$29 ? 1 : __$ctx.position;
            var __$l14__$78 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$29 ? 1 : __$ctx._listLength;
            var __$l15__$79 = __$ctx.ctx;
            __$ctx.ctx = content__$71;
            __$r__$74 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$75;
            __$ctx._notNewList = __$l12__$76;
            __$ctx.position = __$l13__$77;
            __$ctx._listLength = __$l14__$78;
            __$ctx.ctx = __$l15__$79;
        }
        tag__$30 && (__$ctx._str += "</" + tag__$30 + ">");
    }
    res__$31 = __$ctx._str;
    __$r__$33 = undefined;
    __$ctx._str = __$l0__$34;
    __$ctx._buf.push(res__$31);
    return;
}

function __$b37(__$ctx, __$ref) {
    var mix__$8 = function __$lb__$9() {
        var __$r__$10;
        var __$l0__$11 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$10 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$11;
        return __$r__$10;
    }(), uaMix__$12 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$8 ? uaMix__$12.concat(mix__$8) : uaMix__$12;
}

function __$b40(__$ctx, __$ref) {
    var __$r__$81;
    var __$l0__$82 = $$mode;
    $$mode = "";
    var __$l1__$83 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$85;
    var __$l2__$86 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$85 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$86;
    __$r__$81 = __$r__$85;
    $$mode = __$l0__$82;
    __$ctx.ctx = __$l1__$83;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$87 = __$ctx.ctx;
    if (ctx__$87 && ctx__$87 !== true || ctx__$87 === 0) {
        __$ctx._str += ctx__$87 + "";
    }
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ctx__$88 = __$ctx.ctx, len__$89 = ctx__$88.length, i__$90 = 0, prevPos__$91 = __$ctx.position, prevNotNewList__$92 = __$ctx._notNewList;
    if (prevNotNewList__$92) {
        __$ctx._listLength += len__$89 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$89;
    }
    __$ctx._notNewList = true;
    while (i__$90 < len__$89) (function __$lb__$93() {
        var __$r__$94;
        var __$l0__$95 = __$ctx.ctx;
        __$ctx.ctx = ctx__$88[i__$90++];
        __$r__$94 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$95;
        return __$r__$94;
    })();
    prevNotNewList__$92 || (__$ctx.position = prevPos__$91);
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$96 = __$ctx.ctx.block, vElem__$97 = __$ctx.ctx.elem, block__$98 = __$ctx._currBlock || $$block;
    var __$r__$100;
    var __$l0__$101 = $$mode;
    $$mode = "default";
    var __$l1__$102 = $$block;
    $$block = vBlock__$96 || (vElem__$97 ? block__$98 : undefined);
    var __$l2__$103 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$96 || vElem__$97 ? undefined : block__$98;
    var __$l3__$104 = $$elem;
    $$elem = vElem__$97;
    var __$l4__$105 = $$mods;
    $$mods = vBlock__$96 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$106 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$100 = undefined;
    $$mode = __$l0__$101;
    $$block = __$l1__$102;
    __$ctx._currBlock = __$l2__$103;
    $$elem = __$l3__$104;
    $$mods = __$l4__$105;
    $$elemMods = __$l5__$106;
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