var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'attrs') {
            return $2(__$ctx);
        } else if (__t === 'bem') {
            return $51(__$ctx);
        } else if (__t === 'default') {
            return $74(__$ctx);
        } else if (__t === 'cls') {
            return $107(__$ctx);
        } else if (__t === 'tag') {
            return $22(__$ctx);
        } else if (__t === 'xUACompatible') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $126(__$ctx);
                } else {
                    return $151(__$ctx);
                }
            } else {
                return $151(__$ctx);
            }
        } else if (__t === 'doctype') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $134(__$ctx);
                } else {
                    return $151(__$ctx);
                }
            } else {
                return $151(__$ctx);
            }
        } else if (__t === 'content') {
            return $139(__$ctx);
        } else if (__t === 'jsAttr') {
            return $148(__$ctx);
        } else if (__t === 'js') {
            return $150(__$ctx);
        } else if (__t === 'mix') {
            return $115(__$ctx);
        } else {
            return $151(__$ctx);
        }
    }
    function $2(__$ctx) {
        if ($$block === 'b-page') {
            var __t = $$elem;
            if (__t === 'js') {
                if (!__$ctx.ctx.url === false) {
                    return { src: __$ctx.ctx.url };
                    return;
                } else {
                    return $21(__$ctx);
                }
            } else if (__t === 'css') {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: 'stylesheet',
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $21(__$ctx);
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
                return $21(__$ctx);
            }
        } else {
            return $21(__$ctx);
        }
    }
    function $21(__$ctx) {
        return undefined;
        return;
    }
    function $22(__$ctx) {
        var __t = $$block;
        if (__t === 'b-page') {
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
                    return $50(__$ctx);
                }
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return 'script';
                return;
            } else {
                return $50(__$ctx);
            }
        } else {
            return $50(__$ctx);
        }
    }
    function $50(__$ctx) {
        return undefined;
        return;
    }
    function $51(__$ctx) {
        var __t = $$block;
        if (__t === 'b-page') {
            var __t = $$elem;
            if (__t === 'js' || __t === 'css' || __t === 'favicon' || __t === 'meta' || __t === 'head' || __t === 'root') {
                return false;
                return;
            } else {
                return $73(__$ctx);
            }
        } else if (__t === 'i-ua') {
            if (!!$$elem === false) {
                return false;
                return;
            } else {
                return $73(__$ctx);
            }
        } else {
            return $73(__$ctx);
        }
    }
    function $73(__$ctx) {
        return undefined;
        return;
    }
    function $74(__$ctx) {
        var __t = $$block;
        if (__t === 'b-page') {
            if ($$elem === 'css') {
                if (!__$ctx.ctx.hasOwnProperty('ie') === false) {
                    if (!!__$ctx.ctx._ieCommented === false) {
                        return $79(__$ctx);
                    } else {
                        return $84(__$ctx);
                    }
                } else {
                    return $84(__$ctx);
                }
            } else {
                return $84(__$ctx);
            }
        } else if (__t === 'i-jquery') {
            if ($$elem === 'core') {
                if (!(__$ctx['__$anflg1'] !== true) === false) {
                    return $95(__$ctx);
                } else {
                    return $151(__$ctx);
                }
            } else {
                return $151(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$elem === 'i18n') {
                return $102(__$ctx);
            } else {
                return $151(__$ctx);
            }
        } else {
            return $151(__$ctx);
        }
    }
    function $79(__$ctx) {
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
                }, __$ctx);
                $151(__$ctx);
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
                $151(__$ctx);
                $$mode = __r4;
                __r5._ieCommented = __r6;
                __$ctx.ctx = __r7;
                '';
            }
            undefined;
        }
        return;
    }
    function $84(__$ctx) {
        if (!(__$ctx['__$anflg2'] !== true) === false) {
            if (!!$$elem === false) {
                return $87(__$ctx);
            } else {
                return $151(__$ctx);
            }
        } else {
            return $151(__$ctx);
        }
    }
    function $87(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$mctx = __$ctx.ctx, _$mdtype = ('', __r0 = $$mode, $$mode = 'doctype', __r1 = $134(__$ctx), $$mode = __r0, '', __r1), _$mxUA = ('', __r2 = $$mode, $$mode = 'xUACompatible', __r3 = $126(__$ctx), $$mode = __r2, '', __r3), _$mbuf = [
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
                $151(__$ctx);
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
    function $95(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $151(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
        return;
    }
    function $102(__$ctx) {
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
            _$fparams.content = (_$fcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$fcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$fctx.content, __r3 = $151(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$fcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$fkeyset, _$fkey, _$fparams));
        return;
    }
    function $107(__$ctx) {
        if ($$block === 'b-page') {
            if ($$elem === 'root') {
                return 'i-ua_js_no i-ua_css_standard';
                return;
            } else {
                return $114(__$ctx);
            }
        } else {
            return $114(__$ctx);
        }
    }
    function $114(__$ctx) {
        return undefined;
        return;
    }
    function $115(__$ctx) {
        if ($$block === 'b-page') {
            if (!!$$elem === false) {
                return [{ elem: 'body' }];
                return;
            } else {
                return $122(__$ctx);
            }
        } else {
            return $122(__$ctx);
        }
    }
    function $122(__$ctx) {
        return undefined;
        return;
    }
    function $126(__$ctx) {
        return __$ctx.ctx['x-ua-compatible'] === false ? false : {
            tag: 'meta',
            attrs: {
                'http-equiv': 'X-UA-Compatible',
                content: __$ctx.ctx['x-ua-compatible'] || 'IE=edge'
            }
        };
        return;
    }
    function $134(__$ctx) {
        return __$ctx.ctx.doctype || '<!DOCTYPE html>';
        return;
    }
    function $139(__$ctx) {
        if ($$block === 'i-ua') {
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
                return $146(__$ctx);
            }
        } else {
            return $146(__$ctx);
        }
    }
    function $146(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $148(__$ctx) {
        return undefined;
        return;
    }
    function $150(__$ctx) {
        return undefined;
        return;
    }
    function $151(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $155(__$ctx);
                } else {
                    return $160(__$ctx);
                }
            } else {
                return $160(__$ctx);
            }
        } else {
            return $160(__$ctx);
        }
    }
    function $155(__$ctx) {
        var __r0, __r1;
        function _$6follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $160(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $164(__$ctx);
                } else {
                    return $169(__$ctx);
                }
            } else {
                return $169(__$ctx);
            }
        } else {
            return $169(__$ctx);
        }
    }
    function $164(__$ctx) {
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
                }, __$ctx).reverse();
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
                }, __$ctx);
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
    function $169(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $171(__$ctx);
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
                        return $180(__$ctx);
                    } else {
                        if (!true === false) {
                            return $183(__$ctx);
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
    function $171(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $22(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $150(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $51(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $107(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $115(__$ctx), $$mode = __r10, '', __r11);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
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
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $115(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
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
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $148(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $2(__$ctx), $$mode = __r22, '', __r23);
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
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $139(__$ctx), $$mode = __r24, '', __r25);
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
                    $151(__$ctx);
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
    function $180(__$ctx) {
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
                $151(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $183(__$ctx) {
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
            $$mods = (_$0vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $74(__$ctx);
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
/* begin: ../../../blocks-common/i-jquery/__inherit/i-jquery__inherit.js */
/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.5
 */

(function($) {

var hasIntrospection = (function(){'_';}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function override(base, result, add) {

    var hasSpecProps = false;
    if(needCheckProps) {
        var addList = [];
        $.each(specProps, function() {
            add.hasOwnProperty(this) && (hasSpecProps = true) && addList.push({
                name : this,
                val  : add[this]
            });
        });
        if(hasSpecProps) {
            $.each(add, function(name) {
                addList.push({
                    name : name,
                    val  : this
                });
            });
            add = addList;
        }
    }

    $.each(add, function(name, prop) {
        if(hasSpecProps) {
            name = prop.name;
            prop = prop.val;
        }
        if($.isFunction(prop) &&
           (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {

            var baseMethod = base[name] || function() {};
            result[name] = function() {
                var baseSaved = this.__base;
                this.__base = baseMethod;
                var result = prop.apply(this, arguments);
                this.__base = baseSaved;
                return result;
            };

        }
        else {
            result[name] = prop;
        }

    });

}

$.inherit = function() {

    var args = arguments,
        hasBase = $.isFunction(args[0]),
        base = hasBase? args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        result = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } : function() {};

    if(!hasBase) {
        result.prototype = props;
        result.prototype.__self = result.prototype.constructor = result;
        return $.extend(result, staticProps);
    }

    $.extend(result, base);

    var basePtp = base.prototype,
        resultPtp = result.prototype = objCreate(basePtp);

    resultPtp.__self = resultPtp.constructor = result;

    override(basePtp, resultPtp, props);
    staticProps && override(base, result, staticProps);

    return result;

};

$.inheritSelf = function(base, props, staticProps) {

    var basePtp = base.prototype;

    override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;

};

})(jQuery);

/* end: ../../../blocks-common/i-jquery/__inherit/i-jquery__inherit.js */
/* begin: ../../../blocks-common/i-jquery/__identify/i-jquery__identify.js */
/**
 * Identify plugin
 *
 * @version 1.0.0
 */

(function($) {

var counter = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++counter;
    };

/**
 * Makes unique ID
 * @param {Object} [obj] Object that needs to be identified
 * @param {Boolean} [onlyGet=false] Return a unique value only if it had already been assigned before
 * @returns {String} ID
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // Use when possible. native uniqueID for elements in IE

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);
/* end: ../../../blocks-common/i-jquery/__identify/i-jquery__identify.js */
/* begin: ../../../blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js */
(function($) {

$.isEmptyObject || ($.isEmptyObject = function(obj) {
        for(var i in obj) return false;
        return true;
    });

})(jQuery);

/* end: ../../../blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js */
/* begin: ../../../blocks-common/i-jquery/__debounce/i-jquery__debounce.js */
/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;

        return function() {

            var args = arguments;
            ctx = ctx || this;

            invokeAsap && !timer && fn.apply(ctx, args);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);

        };

    },

    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
/* end: ../../../blocks-common/i-jquery/__debounce/i-jquery__debounce.js */
/* begin: ../../../blocks-common/i-jquery/__observable/i-jquery__observable.js */
/**
 * Observable plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 * @requires $.identify
 * @requires $.inherit
 */

(function($) {

var storageExpando = '__' + (+new Date) + 'storage',
    getFnId = function(fn, ctx) {
        return $.identify(fn) + (ctx? $.identify(ctx) : '');
    },
    Observable = /** @lends $.observable.prototype */{

        /**
         * Builds full event name
         * @protected
         * @param {String} e Event type
         * @returns {String}
         */
        buildEventName : function(e) {

            return e;

        },

        /**
         * Adding event handler
         * @param {String} e Event type
         * @param {Object} [data] Additional data that the handler gets as e.data
         * @param {Function} fn Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        on : function(e, data, fn, ctx, _special) {

            if(typeof e == 'string') {
                if($.isFunction(data)) {
                    ctx = fn;
                    fn = data;
                    data = undefined;
                }

                var id = getFnId(fn, ctx),
                    storage = this[storageExpando] || (this[storageExpando] = {}),
                    eList = e.split(' '),
                    i = 0,
                    eStorage;

                while(e = eList[i++]) {
                    e = this.buildEventName(e);
                    eStorage = storage[e] || (storage[e] = { ids : {}, list : {} });

                    if(!(id in eStorage.ids)) {
                        var list = eStorage.list,
                            item = { fn : fn, data : data, ctx : ctx, special : _special };
                        if(list.last) {
                            list.last.next = item;
                            item.prev = list.last;
                        } else {
                            list.first = item;
                        }

                        eStorage.ids[id] = list.last = item;
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.on(e, fn, data, _special);
                });
            }

            return this;

        },

        onFirst : function(e, data, fn, ctx) {

            return this.on(e, data, fn, ctx, { one : true });

        },

        /**
         * Removing event handler(s)
         * @param {String} [e] Event type
         * @param {Function} [fn] Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        un : function(e, fn, ctx) {

            if(typeof e == 'string' || typeof e == 'undefined') {
                var storage = this[storageExpando];
                if(storage) {
                    if(e) { // if event type was passed
                        var eList = e.split(' '),
                            i = 0,
                            eStorage;
                        while(e = eList[i++]) {
                            e = this.buildEventName(e);
                            if(eStorage = storage[e]) {
                                if(fn) {  // if specific handler was passed
                                    var id = getFnId(fn, ctx),
                                        ids = eStorage.ids;
                                    if(id in ids) {
                                        var list = eStorage.list,
                                            item = ids[id],
                                            prev = item.prev,
                                            next = item.next;

                                        if(prev) {
                                            prev.next = next;
                                        }
                                        else if(item === list.first) {
                                            list.first = next;
                                        }

                                        if(next) {
                                            next.prev = prev;
                                        }
                                        else if(item === list.last) {
                                            list.last = prev;
                                        }

                                        delete ids[id];
                                    }
                                } else {
                                    delete this[storageExpando][e];
                                }
                            }
                        }
                    } else {
                        delete this[storageExpando];
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.un(e, fn, ctx);
                });
            }

            return this;

        },

        /**
         * Fires event handlers
         * @param {String|$.Event} e Event
         * @param {Object} [data] Additional data
         * @returns {$.observable}
         */
        trigger : function(e, data) {

            var _this = this,
                storage = _this[storageExpando],
                rawType;

            typeof e === 'string'?
                e = $.Event(_this.buildEventName(rawType = e)) :
                e.type = _this.buildEventName(rawType = e.type);

            e.target || (e.target = _this);

            if(storage && (storage = storage[e.type])) {
                var item = storage.list.first,
                    ret;
                while(item) {
                    e.data = item.data;
                    ret = item.fn.call(item.ctx || _this, e, data);
                    if(typeof ret !== 'undefined') {
                        e.result = ret;
                        if(ret === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }

                    item.special && item.special.one &&
                        _this.un(rawType, item.fn, item.ctx);
                    item = item.next;
                }
            }

            return this;

        }

    };

$.observable = $.inherit(Observable, Observable);

})(jQuery);
/* end: ../../../blocks-common/i-jquery/__observable/i-jquery__observable.js */
/* begin: ../../../blocks-common/i-bem/i-bem.js */
/** @requires jquery.inherit */
/** @requires jquery.isEmptyObject */
/** @requires jquery.identify */
/** @requires jquery.observable */

(function($, undefined) {

/**
 * Storage for deferred functions
 * @private
 * @type Array
 */
var afterCurrentEventFns = [],

/**
 * Storage for block declarations (hash by block name)
 * @private
 * @type Object
 */
    blocks = {},

/**
 * Communication channels
 * @static
 * @private
 * @type Object
 */
    channels = {};

/**
 * Builds the name of the handler method for setting a modifier
 * @static
 * @private
 * @param {String} elemName Element name
 * @param {String} modName Modifier name
 * @param {String} modVal Modifier value
 * @returns {String}
 */
function buildModFnName(elemName, modName, modVal) {

    return (elemName? '__elem_' + elemName : '') +
           '__mod' +
           (modName? '_' + modName : '') +
           (modVal? '_' + modVal : '');

}

/**
 * Transforms a hash of modifier handlers to methods
 * @static
 * @private
 * @param {Object} modFns
 * @param {Object} props
 * @param {String} [elemName]
 */
function modFnsToProps(modFns, props, elemName) {

    $.isFunction(modFns)?
        (props[buildModFnName(elemName, '*', '*')] = modFns) :
        $.each(modFns, function(modName, modFn) {
            $.isFunction(modFn)?
                (props[buildModFnName(elemName, modName, '*')] = modFn) :
                $.each(modFn, function(modVal, modFn) {
                    props[buildModFnName(elemName, modName, modVal)] = modFn;
                });
        });

}

function buildCheckMod(modName, modVal) {

    return modVal?
        Array.isArray(modVal)?
            function(block) {
                var i = 0, len = modVal.length;
                while(i < len)
                    if(block.hasMod(modName, modVal[i++]))
                        return true;
                return false;
            } :
            function(block) {
                return block.hasMod(modName, modVal);
            } :
        function(block) {
            return block.hasMod(modName);
        };

}

/** @namespace */
this.BEM = $.inherit($.observable, /** @lends BEM.prototype */ {

    /**
     * @class Base block for creating BEM blocks
     * @constructs
     * @private
     * @param {Object} mods Block modifiers
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(mods, params, initImmediately) {

        var _this = this;

        /**
         * Cache of block modifiers
         * @private
         * @type Object
         */
        _this._modCache = mods || {};

        /**
         * Current modifiers in the stack
         * @private
         * @type Object
         */
        _this._processingMods = {};

        /**
         * The block's parameters, taking into account the defaults
         * @protected
         * @type Object
         */
        _this._params = params; // это нужно для правильной сборки параметров у блока из нескольких нод
        _this.params = null;

        initImmediately !== false?
            _this._init() :
            _this.afterCurrentEvent(function() {
                _this._init();
            });

    },

    /**
     * Initializes the block
     * @private
     */
    _init : function() {

        if(!this._initing && !this.hasMod('js', 'inited')) {
            this._initing = true;

            if(!this.params) {
                this.params = $.extend(this.getDefaultParams(), this._params);
                delete this._params;
            }

            this.setMod('js', 'inited');
            delete this._initing;
            this.hasMod('js', 'inited') && this.trigger('init');
        }

        return this;

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx=this] Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Executes the function in the context of the block, after the "current event"
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx] Context
     */
    afterCurrentEvent : function(fn, ctx) {

        this.__self.afterCurrentEvent(this.changeThis(fn, ctx));

    },

    /**
     * Executes the block's event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .__self.trigger(e, data);

        return this;

    },

    buildEvent : function(e) {

        typeof e == 'string' && (e = $.Event(e));
        e.block = this;

        return e;

    },

    /**
     * Checks whether a block or nested element has a modifier
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {Boolean}
     */
    hasMod : function(elem, modName, modVal) {

        var len = arguments.length,
            invert = false;

        if(len == 1) {
            modVal = '';
            modName = elem;
            elem = undefined;
            invert = true;
        }
        else if(len == 2) {
            if(typeof elem == 'string') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            else {
                modVal = '';
                invert = true;
            }
        }

        var res = this.getMod(elem, modName) === modVal;
        return invert? !res : res;

    },

    /**
     * Returns the value of the modifier of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {String} Modifier value
     */
    getMod : function(elem, modName) {

        var type = typeof elem;
        if(type === 'string' || type === 'undefined') { // elem either omitted or undefined
            modName = elem || modName;
            var modCache = this._modCache;
            return modName in modCache?
                modCache[modName] :
                modCache[modName] = this._extractModVal(modName);
        }

        return this._getElemMod(modName, elem);

    },

    /**
     * Returns the value of the modifier of the nested element
     * @private
     * @param {String} modName Modifier name
     * @param {Object} elem Nested element
     * @param {Object} [elem] Nested element name
     * @returns {String} Modifier value
     */
    _getElemMod : function(modName, elem, elemName) {

        return this._extractModVal(modName, elem, elemName);

    },

    /**
     * Returns values of modifiers of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} [modName1, ..., modNameN] Modifier names
     * @returns {Object} Hash of modifier values
     */
    getMods : function(elem) {

        var hasElem = elem && typeof elem != 'string',
            _this = this,
            modNames = [].slice.call(arguments, hasElem? 1 : 0),
            res = _this._extractMods(modNames, hasElem? elem : undefined);

        if(!hasElem) { // caching
            modNames.length?
                modNames.forEach(function(name) {
                    _this._modCache[name] = res[name];
                }):
                _this._modCache = res;
        }

        return res;

    },

    /**
     * Sets the modifier for a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(typeof modVal == 'undefined') {
            modVal = modName;
            modName = elem;
            elem = undefined;
        }

        var _this = this;

        if(!elem || elem[0]) {

            var modId = (elem && elem[0]? $.identify(elem[0]) : '') + '_' + modName;

            if(this._processingMods[modId]) return _this;

            var elemName,
                curModVal = elem?
                    _this._getElemMod(modName, elem, elemName = _this.__self._extractElemNameFrom(elem)) :
                    _this.getMod(modName);

            if(curModVal === modVal) return _this;

            this._processingMods[modId] = true;

            var needSetMod = true,
                modFnParams = [modName, modVal, curModVal];

            elem && modFnParams.unshift(elem);

            [['*', '*'], [modName, '*'], [modName, modVal]].forEach(function(mod) {
                needSetMod = _this._callModFn(elemName, mod[0], mod[1], modFnParams) !== false && needSetMod;
            });

            !elem && needSetMod && (_this._modCache[modName] = modVal);

            needSetMod && _this._afterSetMod(modName, modVal, curModVal, elem, elemName);

            delete this._processingMods[modId];
        }

        return _this;

    },

    /**
     * Function after successfully changing the modifier of the block/nested element
     * @protected
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {Object} [elem] Nested element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {},

    /**
     * Sets a modifier for a block/nested element, depending on conditions.
     * If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
     * If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal1 First modifier value
     * @param {String} [modVal2] Second modifier value
     * @param {Boolean} [condition] Condition
     * @returns {BEM}
     */
    toggleMod : function(elem, modName, modVal1, modVal2, condition) {

        if(typeof elem == 'string') { // if this is a block
            condition = modVal2;
            modVal2 = modVal1;
            modVal1 = modName;
            modName = elem;
            elem = undefined;
        }
        if(typeof modVal2 == 'undefined') {
            modVal2 = '';
        } else if(typeof modVal2 == 'boolean') {
            condition = modVal2;
            modVal2 = '';
        }

        var modVal = this.getMod(elem, modName);
        (modVal == modVal1 || modVal == modVal2) &&
            this.setMod(
                elem,
                modName,
                typeof condition === 'boolean'?
                    (condition? modVal1 : modVal2) :
                    this.hasMod(elem, modName, modVal1)? modVal2 : modVal1);

        return this;

    },

    /**
     * Removes a modifier from a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {BEM}
     */
    delMod : function(elem, modName) {

        if(!modName) {
            modName = elem;
            elem = undefined;
        }

        return this.setMod(elem, modName, '');

    },

    /**
     * Executes handlers for setting modifiers
     * @private
     * @param {String} elemName Element name
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {Array} modFnParams Handler parameters
     */
    _callModFn : function(elemName, modName, modVal, modFnParams) {

        var modFnName = buildModFnName(elemName, modName, modVal);
        return this[modFnName]?
           this[modFnName].apply(this, modFnParams) :
           undefined;

    },

    /**
     * Retrieves the value of the modifier
     * @private
     * @param {String} modName Modifier name
     * @param {Object} [elem] Element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem) {

        return '';

    },

    /**
     * Retrieves name/value for a list of modifiers
     * @private
     * @param {Array} modNames Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by name
     */
    _extractMods : function(modNames, elem) {

        return {};

    },

    /**
     * Returns a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        return this.__self.channel(id, drop);

    },

    /**
     * Returns a block's default parameters
     * @returns {Object}
     */
    getDefaultParams : function() {

        return {};

    },

    /**
     * Helper for cleaning up block properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var args = [].slice.call(arguments);
        typeof obj == 'string' && args.unshift(this);
        this.__self.del.apply(this.__self, args);
        return this;

	},

    /**
     * Deletes a block
     */
    destruct : function() {}

}, {

    _name : 'i-bem',

    /**
     * Storage for block declarations (hash by block name)
     * @static
     * @protected
     * @type Object
     */
    blocks : blocks,

    /**
     * Declares blocks and creates a block class
     * @static
     * @protected
     * @param {String|Object} decl Block name (simple syntax) or description
     * @param {String} decl.block|decl.name Block name
     * @param {String} [decl.baseBlock] Name of the parent block
     * @param {String} [decl.modName] Modifier name
     * @param {String} [decl.modVal] Modifier value
     * @param {Object} [props] Methods
     * @param {Object} [staticProps] Static methods
     */
    decl : function(decl, props, staticProps) {

        if(typeof decl == 'string')
            decl = { block : decl };
        else if(decl.name) {
            decl.block = decl.name;
        }

        if(decl.baseBlock && !blocks[decl.baseBlock])
            throw('baseBlock "' + decl.baseBlock + '" for "' + decl.block + '" is undefined');

        props || (props = {});

        if(props.onSetMod) {
            modFnsToProps(props.onSetMod, props);
            delete props.onSetMod;
        }

        if(props.onElemSetMod) {
            $.each(props.onElemSetMod, function(elemName, modFns) {
                modFnsToProps(modFns, props, elemName);
            });
            delete props.onElemSetMod;
        }

        var baseBlock = blocks[decl.baseBlock || decl.block] || this;

        if(decl.modName) {
            var checkMod = buildCheckMod(decl.modName, decl.modVal);
            $.each(props, function(name, prop) {
                $.isFunction(prop) &&
                    (props[name] = function() {
                        var method;
                        if(checkMod(this)) {
                            method = prop;
                        } else {
                            var baseMethod = baseBlock.prototype[name];
                            baseMethod && baseMethod !== props[name] &&
                                (method = this.__base);
                        }
                        return method?
                            method.apply(this, arguments) :
                            undefined;
                    });
            });
        }

        if(staticProps && typeof staticProps.live === 'boolean') {
            var live = staticProps.live;
            staticProps.live = function() {
                return live;
            };
        }

        var block;
        decl.block == baseBlock._name?
            // makes a new "live" if the old one was already executed
            (block = $.inheritSelf(baseBlock, props, staticProps))._processLive(true) :
            (block = blocks[decl.block] = $.inherit(baseBlock, props, staticProps))._name = decl.block;

        return block;

    },

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        return false;

    },

    /**
     * Factory method for creating an instance of the block named
     * @static
     * @param {String|Object} block Block name or description
     * @param {Object} [params] Block parameters
     * @returns {BEM}
     */
    create : function(block, params) {

        typeof block == 'string' && (block = { block : block });

        return new blocks[block.block](block.mods, params);

    },

    /**
     * Returns the name of the current block
     * @static
     * @protected
     * @returns {String}
     */
    getName : function() {

        return this._name;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {Object} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {},

    /**
     * Adds a function to the queue for executing after the "current event"
     * @static
     * @protected
     * @param {Function} fn
     * @param {Object} ctx
     */
    afterCurrentEvent : function(fn, ctx) {

        afterCurrentEventFns.push({ fn : fn, ctx : ctx }) == 1 &&
            setTimeout(this._runAfterCurrentEventFns, 0);

    },

    /**
     * Executes the queue
     * @private
     */
    _runAfterCurrentEventFns : function() {

        var fnsLen = afterCurrentEventFns.length;
        if(fnsLen) {
            var fnObj,
                fnsCopy = afterCurrentEventFns.splice(0, fnsLen);

            while(fnObj = fnsCopy.shift()) fnObj.fn.call(fnObj.ctx || this);
        }

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} ctx Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Helper for cleaning out properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var delInThis = typeof obj == 'string',
            i = delInThis? 0 : 1,
            len = arguments.length;
        delInThis && (obj = this);

        while(i < len) delete obj[arguments[i++]];

        return this;

	},

    /**
     * Returns/destroys a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        if(typeof id == 'boolean') {
            drop = id;
            id = undefined;
        }

        id || (id = 'default');

        if(drop) {
            if(channels[id]) {
                channels[id].un();
                delete channels[id];
            }
            return;
        }

        return channels[id] || (channels[id] = new $.observable());

    }

});

})(jQuery);

/* end: ../../../blocks-common/i-bem/i-bem.js */
/* begin: ../../../blocks-common/i-ecma/__object/i-ecma__object.js */
/**
 * Block i-ecma. Shim for some ES5 methods
 *
 * @block i-ecma
 */
(function() {

/**
 * Возвращает массив свойств объекта
 *
 * @param {Object} obj объект
 * @returns {Array}
 */
Object.keys || (Object.keys = function(obj) {
    var res = [];

    for(var i in obj) obj.hasOwnProperty(i) &&
        res.push(i);

    return res;
});

})();

/* end: ../../../blocks-common/i-ecma/__object/i-ecma__object.js */
/* begin: ../../../blocks-common/i-ecma/__array/i-ecma__array.js */
(function() {

var ptp = Array.prototype,
    toStr = Object.prototype.toString,
    methods = {

        /**
         * Finds the index of an element in an array
         *
         * @param {Object} item
         * @param {Number} [fromIdx] Starting from index (length - 1 - fromIdx, if fromIdx < 0)
         * @returns {Number} Element index or -1, if not found
         */
        indexOf : function(item, fromIdx) {

            fromIdx = +(fromIdx || 0);

            var t = this, len = t.length;

            if(len > 0 && fromIdx < len) {
                fromIdx = fromIdx < 0? Math.ceil(fromIdx) : Math.floor(fromIdx);
                fromIdx < -len && (fromIdx = 0);
                fromIdx < 0 && (fromIdx = fromIdx + len);

                while(fromIdx < len) {
                    if(fromIdx in t && t[fromIdx] === item)
                        return fromIdx;
                    ++fromIdx;
                }
            }

            return -1;

        },

        /**
         * Calls the callback for each element
         *
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         */
        forEach : function(callback, ctx) {

            var i = -1, t = this, len = t.length;
            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

        },

        /**
         * Creates array B from array A so that B[i] = callback(A[i])
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         * @returns {Array}
         */
        map : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = new Array(len);

            while(++i < len) i in t &&
                (res[i] = ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

            return res;

        },

        /**
         * Creates an array containing only the elements from the source array that the callback returns true for. 
         * @param {Function} callback Called for each element
         * @param {Object} [ctx] Callback context
         * @returns {Array}
         */
        filter : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = [];

            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)) && res.push(t[i]);

            return res;

        },

        /**
         * Wraps the array using an accumulator
         * @param {Function} callback Called for each element
         * @param {Object} [initialVal] Initial value of the accumulator
         * @returns {Object} Accumulator
         */
        reduce : function(callback, initialVal) {

            var i = -1, t = this, len = t.length,
                res;

            if(arguments.length < 2) {
                while(++i < len) {
                    if(i in t) {
                        res = t[i];
                        break;
                    }
                }
            }
            else {
                res = initialVal;
            }

            while(++i < len) i in t &&
                (res = callback(res, t[i], i, t));

            return res;

        },

        /**
         * Checks whether at least one element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Callback context
         * @returns {Boolean}
         */
        some : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && (ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return true;

            return false;

        },

        /**
         * Checks whether every element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Context of the callback call
         * @returns {Boolean}
         */
        every : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && !(ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return false;

            return true;

        }

    };

for(var name in methods)
    ptp[name] || (ptp[name] = methods[name]);

Array.isArray || (Array.isArray = function(obj) {
    return toStr.call(obj) === '[object Array]';
});

})();

/* end: ../../../blocks-common/i-ecma/__array/i-ecma__array.js */
/* begin: ../../../blocks-common/i-ecma/__function/i-ecma__function.js */
(function() {

var slice = Array.prototype.slice;

Function.prototype.bind || (Function.prototype.bind = function(ctx) {

    var fn = this,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(ctx, args.concat(slice.call(arguments)));
    }

});

})();
/* end: ../../../blocks-common/i-ecma/__function/i-ecma__function.js */
/* begin: ../../../blocks-common/i-bem/__internal/i-bem__internal.js */
/** @fileOverview Module for internal BEM helpers */
/** @requires BEM */

(function(BEM, $, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between names of a block and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable element and modifier names
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

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

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : function(modName, modVal, buffer) {

        var res = buffer || [];
        buildModPostfix(modName, modVal, res);
        return buffer? res : res.join('');

    },

    /**
     * Builds the class of a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClass : function(block, elem, modName, modVal, buffer) {

        var typeOf = typeof modName;
        if(typeOf == 'string') {
            if(typeof modVal != 'string' && typeof modVal != 'number') {
                buffer = modVal;
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOf != 'undefined') {
            buffer = modName;
            modName = undefined;
        } else if(elem && typeof elem != 'string') {
            buffer = elem;
            elem = undefined;
        }

        if(!(elem || modName || buffer)) { // оптимизация для самого простого случая
            return block;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, modName, modVal, res) :
            buildBlockClass(block, modName, modVal, res);

        return buffer? res : res.join('');

    },

    /**
     * Builds full classes for a buffer or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifiers
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClasses : function(block, elem, mods, buffer) {

        if(elem && typeof elem != 'string') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, undefined, undefined, res) :
            buildBlockClass(block, undefined, undefined, res);

        mods && $.each(mods, function(modName, modVal) {
            if(modVal) {
                res.push(' ');
                elem?
                    buildElemClass(block, elem, modName, modVal, res) :
                    buildBlockClass(block, modName, modVal, res);
            }
        });

        return buffer? res : res.join('');

        /*var typeOf = typeof elem;
        if(typeOf != 'string' && typeOf != 'undefined') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }
        if($.isArray(mods)) {
            buffer = mods;
            mods = undefined;
        }

        var res = buffer || [];
        buildClasses(block, elem, mods, res);
        return buffer? res : res.join('');*/

    }

}

})(BEM, jQuery);
/* end: ../../../blocks-common/i-bem/__internal/i-bem__internal.js */