var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
function __$wrapThis(ctx) {
ctx._mode = $$mode;
ctx.block = $$block;
ctx.elem = $$elem;
ctx.elemMods = $$elemMods;
ctx.mods = $$mods;
return ctx;
};
function __$wrapApply(applyc, ctx) {
var __t$_mode = $$mode;
$$mode = ctx._mode;
var __t$block = $$block;
$$block = ctx.block;
var __t$elem = $$elem;
$$elem = ctx.elem;
var __t$elemMods = $$elemMods;
$$elemMods = ctx.elemMods;
var __t$mods = $$mods;
$$mods = ctx.mods;
var r = applyc(ctx);
$$mode = __t$_mode;
$$block = __t$block;
$$elem = __t$elem;
$$elemMods = __t$elemMods;
$$mods = __t$mods;
return r;
};
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'tag') {
            return $2(__$ctx);
        } else if (__t === 'attrs') {
            return $85(__$ctx);
        } else if (__t === 'js') {
            return $119(__$ctx);
        } else if (__t === 'mix') {
            return $130(__$ctx);
        } else if (__t === 'content') {
            return $58(__$ctx);
        } else if (__t === 'bem') {
            return $184(__$ctx);
        } else if (__t === 'cls') {
            return $207(__$ctx);
        } else if (__t === 'xUACompatible') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $218(__$ctx);
                } else {
                    return $233(__$ctx);
                }
            } else {
                return $233(__$ctx);
            }
        } else if (__t === 'doctype') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $226(__$ctx);
                } else {
                    return $233(__$ctx);
                }
            } else {
                return $233(__$ctx);
            }
        } else if (__t === 'jsAttr') {
            return $232(__$ctx);
        } else if (__t === 'default') {
            return $143(__$ctx);
        } else {
            return $233(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'b-link') {
            if ($$elem === 'inner') {
                return 'span';
                return;
            } else {
                if (!($$mods && $$mods.pseudo) === false) {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $12(__$ctx);
                    }
                } else {
                    return $12(__$ctx);
                }
            }
        } else if (__t === 'b-menu-vert') {
            var __t = $$elem;
            if (__t === 'title') {
                return 'h3';
                return;
            } else if (__t === 'submenu') {
                return 'ul';
                return;
            } else if (__t === 'item-selector') {
                return 'span';
                return;
            } else if (__t === 'layout-unit') {
                return 'li';
                return;
            } else if (__t === 'layout') {
                return 'ul';
                return;
            } else {
                return $57(__$ctx);
            }
        } else if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js') {
                return 'script';
                return;
            } else if (__t === 'css') {
                if (!__$ctx.ctx.url === false) {
                    return 'link';
                    return;
                } else {
                    return 'style';
                    return;
                }
            } else if (__t === 'favicon') {
                return 'link';
                return;
            } else if (__t === 'meta') {
                return 'meta';
                return;
            } else if (__t === 'head') {
                return 'head';
                return;
            } else if (__t === 'root') {
                return 'html';
                return;
            } else {
                if (!!$$elem === false) {
                    return 'body';
                    return;
                } else {
                    return $57(__$ctx);
                }
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return 'script';
                return;
            } else {
                return $57(__$ctx);
            }
        } else {
            return $57(__$ctx);
        }
    }
    function $12(__$ctx) {
        if (!!$$elem === false) {
            return 'a';
            return;
        } else {
            return $57(__$ctx);
        }
    }
    function $57(__$ctx) {
        return undefined;
        return;
    }
    function $58(__$ctx) {
        var __t = $$block;
        if (__t === 'b-link') {
            if (!($$mods && $$mods.pseudo) === false) {
                if (!!__$ctx.ctx._wrap === false) {
                    if (!!$$elem === false) {
                        if (!!$$mods.inner === false) {
                            {
                                '';
                                var __r0 = $$mode;
                                $$mode = '';
                                var __r1 = __$ctx.ctx;
                                __$ctx.ctx = {
                                    elem: 'inner',
                                    content: __$ctx.ctx.content,
                                    _wrap: true
                                };
                                $233(__$ctx);
                                $$mode = __r0;
                                __$ctx.ctx = __r1;
                                '';
                            }
                            undefined;
                            return;
                        } else {
                            return $84(__$ctx);
                        }
                    } else {
                        return $84(__$ctx);
                    }
                } else {
                    return $84(__$ctx);
                }
            } else {
                return $84(__$ctx);
            }
        } else if (__t === 'b-menu-vert') {
            if (!!$$elem === false) {
                return [
                    __$ctx.ctx.title,
                    {
                        elem: 'layout',
                        content: __$ctx.ctx.content
                    }
                ];
                return;
            } else {
                return $84(__$ctx);
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return [
                    ';(function(d,e,c,r){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                    'if(d.compatMode!="CSS1Compat")',
                    'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                    '})(document);'
                ].join('');
                return;
            } else {
                return $84(__$ctx);
            }
        } else {
            return $84(__$ctx);
        }
    }
    function $84(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $85(__$ctx) {
        var __t = $$block;
        if (__t === 'b-link') {
            if (!($$mods && $$mods.pseudo) === false) {
                if (!!$$elem === false) {
                    if (!!__$ctx.ctx.url === false) {
                        return {};
                        return;
                    } else {
                        return $95(__$ctx);
                    }
                } else {
                    return $95(__$ctx);
                }
            } else {
                return $95(__$ctx);
            }
        } else if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js') {
                if (!__$ctx.ctx.url === false) {
                    return { src: __$ctx.ctx.url };
                    return;
                } else {
                    return $118(__$ctx);
                }
            } else if (__t === 'css') {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: 'stylesheet',
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $118(__$ctx);
                }
            } else if (__t === 'favicon') {
                return {
                    rel: 'shortcut icon',
                    href: __$ctx.ctx.url
                };
                return;
            } else if (__t === 'meta') {
                return __$ctx.ctx.attrs;
                return;
            } else {
                return $118(__$ctx);
            }
        } else {
            return $118(__$ctx);
        }
    }
    function $95(__$ctx) {
        if (!!$$elem === false) {
            return $97(__$ctx);
        } else {
            return $118(__$ctx);
        }
    }
    function $97(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$1hctx = __$ctx.ctx, _$1hprops = [
                'title',
                'target'
            ], _$1hp = typeof _$1hctx.url, _$1ha = { href: _$1hp === 'undefined' || _$1hp === 'string' ? _$1hctx.url : (_$1hp = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$1hp, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$1hctx.url, __r3 = $233(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$1hp.join('')) };
        while (_$1hp = _$1hprops.pop()) {
            _$1hctx[_$1hp] && (_$1ha[_$1hp] = _$1hctx[_$1hp]);
        }
        return _$1ha;
        return;
    }
    function $118(__$ctx) {
        return undefined;
        return;
    }
    function $119(__$ctx) {
        if ($$block === 'b-link') {
            if (!($$mods && $$mods.pseudo) === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $129(__$ctx);
                }
            } else {
                return $129(__$ctx);
            }
        } else {
            return $129(__$ctx);
        }
    }
    function $129(__$ctx) {
        return undefined;
        return;
    }
    function $130(__$ctx) {
        var __t = $$block;
        if (__t === 'b-menu-vert') {
            if ($$elem === 'layout-unit') {
                var _$1cmix = [];
                __$ctx.isFirst() && _$1cmix.push({ elemMods: { position: 'first' } });
                __$ctx.isLast() && _$1cmix.push({ elemMods: { position: 'last' } });
                return _$1cmix;
                return;
            } else {
                return $142(__$ctx);
            }
        } else if (__t === 'b-page') {
            if (!!$$elem === false) {
                return [{ elem: 'body' }];
                return;
            } else {
                return $142(__$ctx);
            }
        } else {
            return $142(__$ctx);
        }
    }
    function $142(__$ctx) {
        return undefined;
        return;
    }
    function $143(__$ctx) {
        var __t = $$block;
        if (__t === 'b-menu-vert') {
            if ($$elem === 'item') {
                if (!(__$ctx['__$anflg3'] !== true) === false) {
                    return $147(__$ctx);
                } else {
                    return $233(__$ctx);
                }
            } else {
                return $233(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$elem === 'css') {
                if (!__$ctx.ctx.hasOwnProperty('ie') === false) {
                    if (!!__$ctx.ctx._ieCommented === false) {
                        return $156(__$ctx);
                    } else {
                        return $161(__$ctx);
                    }
                } else {
                    return $161(__$ctx);
                }
            } else {
                return $161(__$ctx);
            }
        } else if (__t === 'i-jquery') {
            if ($$elem === 'core') {
                if (!(__$ctx['__$anflg1'] !== true) === false) {
                    return $172(__$ctx);
                } else {
                    return $233(__$ctx);
                }
            } else {
                return $233(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$elem === 'i18n') {
                return $179(__$ctx);
            } else {
                return $233(__$ctx);
            }
        } else {
            return $233(__$ctx);
        }
    }
    function $147(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg3'];
            __$ctx['__$anflg3'] = true;
            {
                '';
                var __r1 = $$mode;
                $$mode = '';
                var __r2 = __$ctx.position;
                __$ctx.position = __$ctx.position - 1;
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'layout-unit',
                    content: [
                        __$ctx.ctx,
                        __$ctx.ctx['item-content']
                    ]
                };
                $233(__$ctx);
                $$mode = __r1;
                __$ctx.position = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            __$ctx['__$anflg3'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $156(__$ctx) {
        var _$12ie = __$ctx.ctx.ie;
        if (_$12ie === true) {
            {
                '';
                var __r2 = $$mode;
                $$mode = '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = [
                    6,
                    7,
                    8,
                    9
                ].map(function (v) {
                    return {
                        elem: 'css',
                        url: this.ctx.url + '.ie' + v + '.css',
                        ie: 'IE ' + v
                    };
                }, __$wrapThis(__$ctx));
                $233(__$ctx);
                $$mode = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            undefined;
        } else {
            var _$12hideRule = !_$12ie ? [
                    'gt IE 9',
                    '<!-->',
                    '<!--'
                ] : _$12ie === '!IE' ? [
                    _$12ie,
                    '<!-->',
                    '<!--'
                ] : [
                    _$12ie,
                    '',
                    ''
                ];
            {
                '';
                var __r4 = $$mode;
                $$mode = '';
                var __r5 = __$ctx.ctx, __r6 = __r5._ieCommented;
                __r5._ieCommented = true;
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = [
                    '<!--[if ' + _$12hideRule[0] + ']>',
                    _$12hideRule[1],
                    __$ctx.ctx,
                    _$12hideRule[2],
                    '<![endif]-->'
                ];
                $233(__$ctx);
                $$mode = __r4;
                __r5._ieCommented = __r6;
                __$ctx.ctx = __r7;
                '';
            }
            undefined;
        }
        return;
    }
    function $161(__$ctx) {
        if (!(__$ctx['__$anflg2'] !== true) === false) {
            if (!!$$elem === false) {
                return $164(__$ctx);
            } else {
                return $233(__$ctx);
            }
        } else {
            return $233(__$ctx);
        }
    }
    function $164(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$mctx = __$ctx.ctx, _$mdtype = ('', __r0 = $$mode, $$mode = 'doctype', __r1 = $226(__$ctx), $$mode = __r0, '', __r1), _$mxUA = ('', __r2 = $$mode, $$mode = 'xUACompatible', __r3 = $218(__$ctx), $$mode = __r2, '', __r3), _$mbuf = [
                _$mdtype,
                {
                    elem: 'root',
                    content: [
                        {
                            elem: 'head',
                            content: [
                                {
                                    tag: 'meta',
                                    attrs: { charset: 'utf-8' }
                                },
                                _$mxUA,
                                {
                                    tag: 'title',
                                    content: _$mctx.title
                                },
                                _$mctx.favicon ? {
                                    elem: 'favicon',
                                    url: _$mctx.favicon
                                } : '',
                                _$mctx.meta,
                                { block: 'i-ua' },
                                _$mctx.head
                            ]
                        },
                        _$mctx
                    ]
                }
            ];
        {
            '';
            var __r4 = __$ctx['__$anflg2'];
            __$ctx['__$anflg2'] = true;
            {
                '';
                var __r5 = __$ctx.ctx;
                __$ctx.ctx = _$mbuf;
                var __r6 = $$mode;
                $$mode = '';
                $233(__$ctx);
                __$ctx.ctx = __r5;
                $$mode = __r6;
                '';
            }
            __$ctx['__$anflg2'] = __r4;
            '';
        }
        undefined;
        return;
    }
    function $172(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $233(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
        return;
    }
    function $179(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$fctx = __$ctx.ctx, _$fkeyset = _$fctx.keyset, _$fkey = _$fctx.key, _$fparams = _$fctx.params || {};
        if (!(_$fkeyset || _$fkey)) {
            return '';
        } else {
            undefined;
        }
        if (_$fctx.content) {
            var _$fcnt;
            _$fparams.content = (_$fcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$fcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$fctx.content, __r3 = $233(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$fcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$fkeyset, _$fkey, _$fparams));
        return;
    }
    function $184(__$ctx) {
        var __t = $$block;
        if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js' || __t === 'css' || __t === 'favicon' || __t === 'meta' || __t === 'head' || __t === 'root') {
                return false;
                return;
            } else {
                return $206(__$ctx);
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return false;
                return;
            } else {
                return $206(__$ctx);
            }
        } else {
            return $206(__$ctx);
        }
    }
    function $206(__$ctx) {
        return undefined;
        return;
    }
    function $207(__$ctx) {
        if ($$block === 'b-page') {
            if ($$elem === 'root') {
                return 'i-ua_js_no i-ua_css_standard';
                return;
            } else {
                return $214(__$ctx);
            }
        } else {
            return $214(__$ctx);
        }
    }
    function $214(__$ctx) {
        return undefined;
        return;
    }
    function $218(__$ctx) {
        return __$ctx.ctx['x-ua-compatible'] === false ? false : {
            tag: 'meta',
            attrs: {
                'http-equiv': 'X-UA-Compatible',
                content: __$ctx.ctx['x-ua-compatible'] || 'IE=edge'
            }
        };
        return;
    }
    function $226(__$ctx) {
        return __$ctx.ctx.doctype || '<!DOCTYPE html>';
        return;
    }
    function $232(__$ctx) {
        return undefined;
        return;
    }
    function $233(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $237(__$ctx);
                } else {
                    return $242(__$ctx);
                }
            } else {
                return $242(__$ctx);
            }
        } else {
            return $242(__$ctx);
        }
    }
    function $237(__$ctx) {
        function _$6follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = __$wrapApply(applyc, this), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$wrapThis(__$ctx));
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$wrapThis(__$ctx));
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $242(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $246(__$ctx);
                } else {
                    return $251(__$ctx);
                }
            } else {
                return $251(__$ctx);
            }
        } else {
            return $251(__$ctx);
        }
    }
    function $246(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === 'string') {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$wrapThis(__$ctx)).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$5log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$5reverseLog.forEach(function (entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$wrapThis(__$ctx));
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
                } else {
                    undefined;
                }
            }
            __r5.cache = __r6;
            __$ctx._cachePos = __r7;
            __$ctx._cacheLog = __r8;
            __$ctx._localLog = __r9;
            '';
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $251(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $253(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $262(__$ctx);
                    } else {
                        if (!true === false) {
                            return $265(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $253(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $2(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $119(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $184(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $207(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams && !_$4v.elem;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $130(__$ctx), $$mode = __r10, '', __r11);
                    _$4v.mix && (_$4mix = _$4mix ? [].concat(_$4mix, _$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4visited[_$4visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [_$4mix];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i];
                            if (!_$4mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || $$block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || $$elem, _$4mods = _$4mixItem.mods || $$mods, _$4elemMods = _$4mixItem.elemMods || {};
                            _$4hasItem && _$4buf.push(' ');
                            _$4BEM_.INTERNAL[_$4hasItem ? 'buildClasses' : 'buildModsClasses'](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : $$elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $130(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$4cls && _$4buf.push(_$4isBEM ? ' ' : '', _$4cls);
                _$4addJSInitClass && _$4buf.push(' i-bem');
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $232(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $85(__$ctx), $$mode = __r22, '', __r23);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(' ', _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push('/>');
        } else {
            _$4tag && _$4buf.push('>');
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $58(__$ctx), $$mode = __r24, '', __r25);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $233(__$ctx);
                    __$ctx._notNewList = __r26;
                    __$ctx.position = __r27;
                    __$ctx._listLength = __r28;
                    __$ctx.ctx = __r29;
                    $$mode = __r30;
                    '';
                }
                undefined;
            } else {
                undefined;
            }
            _$4tag && _$4buf.push('</', _$4tag, '>');
        }
        return;
    }
    function $262(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx == null ? '' : _$1newCtx;
                $233(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $265(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = _$0vBlock ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $143(__$ctx);
                undefined;
            }
            $$mode = __r0;
            __$ctx._links = __r1;
            $$block = __r2;
            __$ctx._currBlock = __r3;
            $$elem = __r4;
            $$mods = __r5;
            $$elemMods = __r6;
            '';
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        (function (global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function (keyset, key) {
                    return key;
                };
            i18n.keyset = function () {
                return i18n;
            };
            i18n.key = function (key) {
                return key;
            };
            i18n.lang = function () {
                return undefined;
            };
        }(this, typeof BEM === 'undefined' ? {} : BEM));
    }();
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
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
        (function (BEM, undefined) {
            var MOD_DELIM = '_', ELEM_DELIM = '__', NAME_PATTERN = '[a-zA-Z0-9-]+';
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function (modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildClass: function (block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == 'string') {
                        if (typeof modVal != 'string') {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != 'undefined') {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != 'string') {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildModsClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + '';
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(' ');
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join('');
                },
                buildClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join('');
                }
            };
        }(BEM_));
        var buildEscape = function () {
                var ts = {
                        '"': '&quot;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;'
                    }, f = function (t) {
                        return ts[t] || t;
                    };
                return function (r) {
                    r = new RegExp(r, 'g');
                    return function (s) {
                        return ('' + s).replace(r, f);
                    };
                };
            }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? '' : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === '[object Array]';
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === 'string' || t === 'number' || t === 'boolean';
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function () {
            var cnt = 0, id = BEM_['__id'] = +new Date(), expando = '__' + id, get = function () {
                    return 'uniq' + id + ++cnt;
                };
            return function (obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
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
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join('');
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
}(typeof exports === 'undefined' ? {} : exports));;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) {
        context = undefined;
$$mode = ''
$$block = ''
$$elem = ''
$$elemMods = ''
$$mods = ''
      } else {
$$mode = '';
$$block = '';
$$elem = '';
$$elemMods = '';
$$mods = '';
      }
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);