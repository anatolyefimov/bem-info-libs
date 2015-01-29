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
        } else if (__$t === "ua") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b33(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b35(__$ctx, __$ref);
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
        } else if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b42(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
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
        if ($$block === "page" && !$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b52(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b53(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 128) === 0) {
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
    var ctx__$15 = __$ctx.ctx, mods__$16 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$16.checked,
            disabled: mods__$16.disabled,
            name: ctx__$15.name,
            val: ctx__$15.val
        }
    }, ctx__$15.text ];
}

function __$b5(__$ctx, __$ref) {
    var mods__$17 = $$mods, ctx__$18 = __$ctx.ctx, val__$19 = ctx__$18.val, isValDef__$20 = typeof val__$19 !== "undefined";
    if (isValDef__$20 && !Array.isArray(val__$19)) throw Error("checkbox-group: val must be an array");
    return (ctx__$18.options || []).map(function(option, i) {
        return [ !!i && !mods__$17.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$17.type,
                theme: mods__$17.theme,
                size: mods__$17.size,
                checked: isValDef__$20 && val__$19.indexOf(option.val) > -1,
                disabled: option.disabled || mods__$17.disabled
            },
            name: ctx__$18.name,
            val: option.val,
            text: option.text,
            title: option.title,
            icon: option.icon
        } ];
    });
}

function __$b33(__$ctx, __$ref) {
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

function __$b34(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$12.tabIndex,
        id: ctx__$12.id,
        title: ctx__$12.title
    };
}

function __$b35(__$ctx, __$ref) {
    var attrs__$13 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$14 = __$ctx.ctx;
    attrs__$13.name = ctx__$14.name;
    attrs__$13.value = ctx__$14.val;
    ctx__$14.checked && (attrs__$13.checked = "checked");
    ctx__$14.disabled && (attrs__$13.disabled = "disabled");
    return attrs__$13;
}

function __$b42(__$ctx, __$ref) {
    var mix__$24 = function __$lb__$25() {
        var __$r__$26;
        var __$l0__$27 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$26 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$27;
        return __$r__$26;
    }(), uaMix__$28 = [ {
        block: "ua",
        js: true
    } ];
    return mix__$24 ? uaMix__$28.concat(mix__$24) : uaMix__$28;
}

function __$b52(__$ctx, __$ref) {
    var ctx__$35 = __$ctx.ctx;
    var __$r__$37;
    var __$l0__$38 = $$mode;
    $$mode = "";
    var __$l1__$39 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$35.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$35.title
            }, {
                block: "ua"
            }, ctx__$35.head, ctx__$35.styles, ctx__$35.favicon ? {
                elem: "favicon",
                url: ctx__$35.favicon
            } : "" ]
        }, ctx__$35 ]
    } ];
    var __$r__$41;
    var __$l2__$42 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$41 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$42;
    __$r__$37 = __$r__$41;
    $$mode = __$l0__$38;
    __$ctx.ctx = __$l1__$39;
    return;
}

function __$b53(__$ctx, __$ref) {
    var BEM_INTERNAL__$43 = __$ctx.BEM.INTERNAL, ctx__$44 = __$ctx.ctx, isBEM__$45, tag__$46, res__$47;
    var __$r__$49;
    var __$l0__$50 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$51 = $$block;
    var __$r__$53;
    var __$l1__$54 = $$mode;
    $$mode = "tag";
    __$r__$53 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$54;
    tag__$46 = __$r__$53;
    typeof tag__$46 !== "undefined" || (tag__$46 = ctx__$44.tag);
    typeof tag__$46 !== "undefined" || (tag__$46 = "div");
    if (tag__$46) {
        var jsParams__$55, js__$56;
        if (vBlock__$51 && ctx__$44.js !== false) {
            var __$r__$57;
            var __$l2__$58 = $$mode;
            $$mode = "js";
            __$r__$57 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$58;
            js__$56 = __$r__$57;
            js__$56 = js__$56 ? __$ctx.extend(ctx__$44.js, js__$56 === true ? {} : js__$56) : ctx__$44.js === true ? {} : ctx__$44.js;
            js__$56 && ((jsParams__$55 = {})[BEM_INTERNAL__$43.buildClass(vBlock__$51, ctx__$44.elem)] = js__$56);
        }
        __$ctx._str += "<" + tag__$46;
        var __$r__$59;
        var __$l3__$60 = $$mode;
        $$mode = "bem";
        __$r__$59 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$60;
        isBEM__$45 = __$r__$59;
        typeof isBEM__$45 !== "undefined" || (isBEM__$45 = typeof ctx__$44.bem !== "undefined" ? ctx__$44.bem : ctx__$44.block || ctx__$44.elem);
        var __$r__$62;
        var __$l4__$63 = $$mode;
        $$mode = "cls";
        __$r__$62 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$63;
        var cls__$61 = __$r__$62;
        cls__$61 || (cls__$61 = ctx__$44.cls);
        var addJSInitClass__$64 = ctx__$44.block && jsParams__$55 && !ctx__$44.elem;
        if (isBEM__$45 || cls__$61) {
            __$ctx._str += ' class="';
            if (isBEM__$45) {
                __$ctx._str += BEM_INTERNAL__$43.buildClasses(vBlock__$51, ctx__$44.elem, ctx__$44.elemMods || ctx__$44.mods);
                var __$r__$66;
                var __$l5__$67 = $$mode;
                $$mode = "mix";
                __$r__$66 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$67;
                var mix__$65 = __$r__$66;
                ctx__$44.mix && (mix__$65 = mix__$65 ? [].concat(mix__$65, ctx__$44.mix) : ctx__$44.mix);
                if (mix__$65) {
                    var visited__$68 = {}, visitedKey__$69 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$68[visitedKey__$69(vBlock__$51, $$elem)] = true;
                    __$ctx.isArray(mix__$65) || (mix__$65 = [ mix__$65 ]);
                    for (var i__$70 = 0; i__$70 < mix__$65.length; i__$70++) {
                        var mixItem__$71 = mix__$65[i__$70], hasItem__$72 = mixItem__$71.block || mixItem__$71.elem, mixBlock__$73 = mixItem__$71.block || mixItem__$71._block || $$block, mixElem__$74 = mixItem__$71.elem || mixItem__$71._elem || $$elem;
                        hasItem__$72 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$43[hasItem__$72 ? "buildClasses" : "buildModsClasses"](mixBlock__$73, mixItem__$71.elem || mixItem__$71._elem || (mixItem__$71.block ? undefined : $$elem), mixItem__$71.elemMods || mixItem__$71.mods);
                        if (mixItem__$71.js) {
                            (jsParams__$55 || (jsParams__$55 = {}))[BEM_INTERNAL__$43.buildClass(mixBlock__$73, mixItem__$71.elem)] = mixItem__$71.js === true ? {} : mixItem__$71.js;
                            addJSInitClass__$64 || (addJSInitClass__$64 = mixBlock__$73 && !mixItem__$71.elem);
                        }
                        if (hasItem__$72 && !visited__$68[visitedKey__$69(mixBlock__$73, mixElem__$74)]) {
                            visited__$68[visitedKey__$69(mixBlock__$73, mixElem__$74)] = true;
                            var __$r__$76;
                            var __$l6__$77 = $$mode;
                            $$mode = "mix";
                            var __$l7__$78 = $$block;
                            $$block = mixBlock__$73;
                            var __$l8__$79 = $$elem;
                            $$elem = mixElem__$74;
                            __$r__$76 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$77;
                            $$block = __$l7__$78;
                            $$elem = __$l8__$79;
                            var nestedMix__$75 = __$r__$76;
                            if (nestedMix__$75) {
                                for (var j__$80 = 0; j__$80 < nestedMix__$75.length; j__$80++) {
                                    var nestedItem__$81 = nestedMix__$75[j__$80];
                                    if (!nestedItem__$81.block && !nestedItem__$81.elem || !visited__$68[visitedKey__$69(nestedItem__$81.block, nestedItem__$81.elem)]) {
                                        nestedItem__$81._block = mixBlock__$73;
                                        nestedItem__$81._elem = mixElem__$74;
                                        mix__$65.splice(i__$70 + 1, 0, nestedItem__$81);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$61 && (__$ctx._str += isBEM__$45 ? " " + cls__$61 : cls__$61);
            __$ctx._str += addJSInitClass__$64 ? ' i-bem"' : '"';
        }
        if (isBEM__$45 && jsParams__$55) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$55)) + '"';
        }
        var __$r__$83;
        var __$l9__$84 = $$mode;
        $$mode = "attrs";
        __$r__$83 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$84;
        var attrs__$82 = __$r__$83;
        attrs__$82 = __$ctx.extend(attrs__$82, ctx__$44.attrs);
        if (attrs__$82) {
            var name__$85, attr__$86;
            for (name__$85 in attrs__$82) {
                attr__$86 = attrs__$82[name__$85];
                if (typeof attr__$86 === "undefined") continue;
                __$ctx._str += " " + name__$85 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$86) ? attr__$86 : __$ctx.reapply(attr__$86)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$46)) {
        __$ctx._str += "/>";
    } else {
        tag__$46 && (__$ctx._str += ">");
        var __$r__$88;
        var __$l10__$89 = $$mode;
        $$mode = "content";
        __$r__$88 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$89;
        var content__$87 = __$r__$88;
        if (content__$87 || content__$87 === 0) {
            isBEM__$45 = vBlock__$51 || $$elem;
            var __$r__$90;
            var __$l11__$91 = $$mode;
            $$mode = "";
            var __$l12__$92 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$93 = __$ctx.position;
            __$ctx.position = isBEM__$45 ? 1 : __$ctx.position;
            var __$l14__$94 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$45 ? 1 : __$ctx._listLength;
            var __$l15__$95 = __$ctx.ctx;
            __$ctx.ctx = content__$87;
            __$r__$90 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$91;
            __$ctx._notNewList = __$l12__$92;
            __$ctx.position = __$l13__$93;
            __$ctx._listLength = __$l14__$94;
            __$ctx.ctx = __$l15__$95;
        }
        tag__$46 && (__$ctx._str += "</" + tag__$46 + ">");
    }
    res__$47 = __$ctx._str;
    __$r__$49 = undefined;
    __$ctx._str = __$l0__$50;
    __$ctx._buf.push(res__$47);
    return;
}

function __$b55(__$ctx, __$ref) {
    var __$r__$97;
    var __$l0__$98 = $$mode;
    $$mode = "";
    var __$l1__$99 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$101;
    var __$l2__$102 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$101 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$102;
    __$r__$97 = __$r__$101;
    $$mode = __$l0__$98;
    __$ctx.ctx = __$l1__$99;
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$103 = __$ctx.ctx;
    if (ctx__$103 && ctx__$103 !== true || ctx__$103 === 0) {
        __$ctx._str += ctx__$103 + "";
    }
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b58(__$ctx, __$ref) {
    var ctx__$104 = __$ctx.ctx, len__$105 = ctx__$104.length, i__$106 = 0, prevPos__$107 = __$ctx.position, prevNotNewList__$108 = __$ctx._notNewList;
    if (prevNotNewList__$108) {
        __$ctx._listLength += len__$105 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$105;
    }
    __$ctx._notNewList = true;
    while (i__$106 < len__$105) (function __$lb__$109() {
        var __$r__$110;
        var __$l0__$111 = __$ctx.ctx;
        __$ctx.ctx = ctx__$104[i__$106++];
        __$r__$110 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$111;
        return __$r__$110;
    })();
    prevNotNewList__$108 || (__$ctx.position = prevPos__$107);
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$112 = __$ctx.ctx.block, vElem__$113 = __$ctx.ctx.elem, block__$114 = __$ctx._currBlock || $$block;
    var __$r__$116;
    var __$l0__$117 = $$mode;
    $$mode = "default";
    var __$l1__$118 = $$block;
    $$block = vBlock__$112 || (vElem__$113 ? block__$114 : undefined);
    var __$l2__$119 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$112 || vElem__$113 ? undefined : block__$114;
    var __$l3__$120 = $$elem;
    $$elem = vElem__$113;
    var __$l4__$121 = $$mods;
    $$mods = vBlock__$112 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$122 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$116 = undefined;
    $$mode = __$l0__$117;
    $$block = __$l1__$118;
    __$ctx._currBlock = __$l2__$119;
    $$elem = __$l3__$120;
    $$mods = __$l4__$121;
    $$elemMods = __$l5__$122;
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
            if ((__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$21() {
                    var __$r__$22;
                    var __$l0__$23 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$22 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$23;
                    return __$r__$22;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 16) === 0) {
            return [ function __$lb__$29() {
                var __$r__$30;
                var __$l0__$31 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 16;
                __$r__$30 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$31;
                return __$r__$30;
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
        if (!$$elem && (__$ctx.__$a0 & 32) === 0) {
            return [ function __$lb__$32() {
                var __$r__$33;
                var __$l0__$34 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 32;
                __$r__$33 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$34;
                return __$r__$33;
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