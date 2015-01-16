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
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 2) === 0) {
                    return [ function __$lb__$8() {
                        var __$r__$9;
                        var __$l0__$10 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$9 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$10;
                        return __$r__$9;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 8) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$27() {
                    var __$r__$28;
                    var __$l0__$29 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$28 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$29;
                    return __$r__$28;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                return [ function __$lb__$30() {
                    var __$r__$31;
                    var __$l0__$32 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$31 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$32;
                    return __$r__$31;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if ($$elem === "control") {
                var __$r = __$b8(__$ctx, __$ref);
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
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "textarea") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b24(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 4) === 0) {
                            var __$r = __$b25(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b26(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b28(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        if ($$block === "textarea" && !$$elem) {
            return true;
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
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b43(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b44(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b45(__$ctx, __$ref);
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

function __$b8(__$ctx, __$ref) {
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

function __$b24(__$ctx, __$ref) {
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

function __$b25(__$ctx, __$ref) {
    var url__$11 = __$ctx.ctx.url;
    var __$r__$13;
    var __$l0__$14 = $$mode;
    $$mode = "";
    var __$l1__$15 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$11 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$17;
    var __$l2__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$18;
    __$r__$13 = __$r__$17;
    $$mode = __$l0__$14;
    __$ctx.ctx = __$l1__$15;
    return;
}

function __$b26(__$ctx, __$ref) {
    var ie__$19 = __$ctx.ctx.ie, hideRule__$20 = !ie__$19 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$19 === "!IE" ? [ ie__$19, "<!-->", "<!--" ] : [ ie__$19, "", "" ];
    var __$r__$22;
    var __$l0__$23 = $$mode;
    $$mode = "";
    var __$l3__$24 = __$ctx.ctx;
    var __$l1__$25 = __$l3__$24._ieCommented;
    __$l3__$24._ieCommented = true;
    var __$l2__$26 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$20[0] + "]>" + hideRule__$20[1], __$ctx.ctx, hideRule__$20[2] + "<![endif]-->" ];
    __$r__$22 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$23;
    __$l3__$24._ieCommented = __$l1__$25;
    __$ctx.ctx = __$l2__$26;
    return;
}

function __$b27(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$33 = __$ctx.ctx;
    var __$r__$35;
    var __$l0__$36 = $$mode;
    $$mode = "";
    var __$l1__$37 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$33.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$33.title
            }, {
                block: "ua"
            }, ctx__$33.head, ctx__$33.styles, ctx__$33.favicon ? {
                elem: "favicon",
                url: ctx__$33.favicon
            } : "" ]
        }, ctx__$33 ]
    } ];
    var __$r__$39;
    var __$l2__$40 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$39 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$40;
    __$r__$35 = __$r__$39;
    $$mode = __$l0__$36;
    __$ctx.ctx = __$l1__$37;
    __$ctx._defPageApplied = false;
    return;
}

function __$b28(__$ctx, __$ref) {
    var BEM_INTERNAL__$41 = __$ctx.BEM.INTERNAL, ctx__$42 = __$ctx.ctx, isBEM__$43, tag__$44, res__$45;
    var __$r__$47;
    var __$l0__$48 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$49 = $$block;
    var __$r__$51;
    var __$l1__$52 = $$mode;
    $$mode = "tag";
    __$r__$51 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$52;
    tag__$44 = __$r__$51;
    typeof tag__$44 !== "undefined" || (tag__$44 = ctx__$42.tag);
    typeof tag__$44 !== "undefined" || (tag__$44 = "div");
    if (tag__$44) {
        var jsParams__$53, js__$54;
        if (vBlock__$49 && ctx__$42.js !== false) {
            var __$r__$55;
            var __$l2__$56 = $$mode;
            $$mode = "js";
            __$r__$55 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$56;
            js__$54 = __$r__$55;
            js__$54 = js__$54 ? __$ctx.extend(ctx__$42.js, js__$54 === true ? {} : js__$54) : ctx__$42.js === true ? {} : ctx__$42.js;
            js__$54 && ((jsParams__$53 = {})[BEM_INTERNAL__$41.buildClass(vBlock__$49, ctx__$42.elem)] = js__$54);
        }
        __$ctx._str += "<" + tag__$44;
        var __$r__$57;
        var __$l3__$58 = $$mode;
        $$mode = "bem";
        __$r__$57 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$58;
        isBEM__$43 = __$r__$57;
        typeof isBEM__$43 !== "undefined" || (isBEM__$43 = typeof ctx__$42.bem !== "undefined" ? ctx__$42.bem : ctx__$42.block || ctx__$42.elem);
        var __$r__$60;
        var __$l4__$61 = $$mode;
        $$mode = "cls";
        __$r__$60 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$61;
        var cls__$59 = __$r__$60;
        cls__$59 || (cls__$59 = ctx__$42.cls);
        var addJSInitClass__$62 = ctx__$42.block && jsParams__$53 && !ctx__$42.elem;
        if (isBEM__$43 || cls__$59) {
            __$ctx._str += ' class="';
            if (isBEM__$43) {
                __$ctx._str += BEM_INTERNAL__$41.buildClasses(vBlock__$49, ctx__$42.elem, ctx__$42.elemMods || ctx__$42.mods);
                var __$r__$64;
                var __$l5__$65 = $$mode;
                $$mode = "mix";
                __$r__$64 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$65;
                var mix__$63 = __$r__$64;
                ctx__$42.mix && (mix__$63 = mix__$63 ? [].concat(mix__$63, ctx__$42.mix) : ctx__$42.mix);
                if (mix__$63) {
                    var visited__$66 = {}, visitedKey__$67 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$66[visitedKey__$67(vBlock__$49, $$elem)] = true;
                    __$ctx.isArray(mix__$63) || (mix__$63 = [ mix__$63 ]);
                    for (var i__$68 = 0; i__$68 < mix__$63.length; i__$68++) {
                        var mixItem__$69 = mix__$63[i__$68], hasItem__$70 = mixItem__$69.block || mixItem__$69.elem, mixBlock__$71 = mixItem__$69.block || mixItem__$69._block || $$block, mixElem__$72 = mixItem__$69.elem || mixItem__$69._elem || $$elem;
                        hasItem__$70 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$41[hasItem__$70 ? "buildClasses" : "buildModsClasses"](mixBlock__$71, mixItem__$69.elem || mixItem__$69._elem || (mixItem__$69.block ? undefined : $$elem), mixItem__$69.elemMods || mixItem__$69.mods);
                        if (mixItem__$69.js) {
                            (jsParams__$53 || (jsParams__$53 = {}))[BEM_INTERNAL__$41.buildClass(mixBlock__$71, mixItem__$69.elem)] = mixItem__$69.js === true ? {} : mixItem__$69.js;
                            addJSInitClass__$62 || (addJSInitClass__$62 = mixBlock__$71 && !mixItem__$69.elem);
                        }
                        if (hasItem__$70 && !visited__$66[visitedKey__$67(mixBlock__$71, mixElem__$72)]) {
                            visited__$66[visitedKey__$67(mixBlock__$71, mixElem__$72)] = true;
                            var __$r__$74;
                            var __$l6__$75 = $$mode;
                            $$mode = "mix";
                            var __$l7__$76 = $$block;
                            $$block = mixBlock__$71;
                            var __$l8__$77 = $$elem;
                            $$elem = mixElem__$72;
                            __$r__$74 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$75;
                            $$block = __$l7__$76;
                            $$elem = __$l8__$77;
                            var nestedMix__$73 = __$r__$74;
                            if (nestedMix__$73) {
                                for (var j__$78 = 0; j__$78 < nestedMix__$73.length; j__$78++) {
                                    var nestedItem__$79 = nestedMix__$73[j__$78];
                                    if (!nestedItem__$79.block && !nestedItem__$79.elem || !visited__$66[visitedKey__$67(nestedItem__$79.block, nestedItem__$79.elem)]) {
                                        nestedItem__$79._block = mixBlock__$71;
                                        nestedItem__$79._elem = mixElem__$72;
                                        mix__$63.splice(i__$68 + 1, 0, nestedItem__$79);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$59 && (__$ctx._str += isBEM__$43 ? " " + cls__$59 : cls__$59);
            __$ctx._str += addJSInitClass__$62 ? ' i-bem"' : '"';
        }
        if (isBEM__$43 && jsParams__$53) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$53)) + '"';
        }
        var __$r__$81;
        var __$l9__$82 = $$mode;
        $$mode = "attrs";
        __$r__$81 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$82;
        var attrs__$80 = __$r__$81;
        attrs__$80 = __$ctx.extend(attrs__$80, ctx__$42.attrs);
        if (attrs__$80) {
            var name__$83, attr__$84;
            for (name__$83 in attrs__$80) {
                attr__$84 = attrs__$80[name__$83];
                if (typeof attr__$84 === "undefined") continue;
                __$ctx._str += " " + name__$83 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$84) ? attr__$84 : __$ctx.reapply(attr__$84)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$44)) {
        __$ctx._str += "/>";
    } else {
        tag__$44 && (__$ctx._str += ">");
        var __$r__$86;
        var __$l10__$87 = $$mode;
        $$mode = "content";
        __$r__$86 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$87;
        var content__$85 = __$r__$86;
        if (content__$85 || content__$85 === 0) {
            isBEM__$43 = vBlock__$49 || $$elem;
            var __$r__$88;
            var __$l11__$89 = $$mode;
            $$mode = "";
            var __$l12__$90 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$91 = __$ctx.position;
            __$ctx.position = isBEM__$43 ? 1 : __$ctx.position;
            var __$l14__$92 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$43 ? 1 : __$ctx._listLength;
            var __$l15__$93 = __$ctx.ctx;
            __$ctx.ctx = content__$85;
            __$r__$88 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$89;
            __$ctx._notNewList = __$l12__$90;
            __$ctx.position = __$l13__$91;
            __$ctx._listLength = __$l14__$92;
            __$ctx.ctx = __$l15__$93;
        }
        tag__$44 && (__$ctx._str += "</" + tag__$44 + ">");
    }
    res__$45 = __$ctx._str;
    __$r__$47 = undefined;
    __$ctx._str = __$l0__$48;
    __$ctx._buf.push(res__$45);
    return;
}

function __$b41(__$ctx, __$ref) {
    var __$r__$95;
    var __$l0__$96 = $$mode;
    $$mode = "";
    var __$l1__$97 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$99;
    var __$l2__$100 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$99 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$100;
    __$r__$95 = __$r__$99;
    $$mode = __$l0__$96;
    __$ctx.ctx = __$l1__$97;
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$101 = __$ctx.ctx;
    if (ctx__$101 && ctx__$101 !== true || ctx__$101 === 0) {
        __$ctx._str += ctx__$101 + "";
    }
    return;
}

function __$b43(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b44(__$ctx, __$ref) {
    var ctx__$102 = __$ctx.ctx, len__$103 = ctx__$102.length, i__$104 = 0, prevPos__$105 = __$ctx.position, prevNotNewList__$106 = __$ctx._notNewList;
    if (prevNotNewList__$106) {
        __$ctx._listLength += len__$103 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$103;
    }
    __$ctx._notNewList = true;
    while (i__$104 < len__$103) (function __$lb__$107() {
        var __$r__$108;
        var __$l0__$109 = __$ctx.ctx;
        __$ctx.ctx = ctx__$102[i__$104++];
        __$r__$108 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$109;
        return __$r__$108;
    })();
    prevNotNewList__$106 || (__$ctx.position = prevPos__$105);
    return;
}

function __$b45(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$110 = __$ctx.ctx.block, vElem__$111 = __$ctx.ctx.elem, block__$112 = __$ctx._currBlock || $$block;
    var __$r__$114;
    var __$l0__$115 = $$mode;
    $$mode = "default";
    var __$l1__$116 = $$block;
    $$block = vBlock__$110 || (vElem__$111 ? block__$112 : undefined);
    var __$l2__$117 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$110 || vElem__$111 ? undefined : block__$112;
    var __$l3__$118 = $$elem;
    $$elem = vElem__$111;
    var __$l4__$119 = $$mods;
    $$mods = vBlock__$110 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$120 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$114 = undefined;
    $$mode = __$l0__$115;
    $$block = __$l1__$116;
    __$ctx._currBlock = __$l2__$117;
    $$elem = __$l3__$118;
    $$mods = __$l4__$119;
    $$elemMods = __$l5__$120;
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