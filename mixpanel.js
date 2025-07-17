const XMLHttpRequest = require('xhr2');
var sendString = ''
  var t,
    r = {
      DEBUG: false,
      LIB_VERSION: '2.45.0'
    };
  if ('undefined' == typeof window) {
    var n = {
      hostname: ''
    };
    t = {
      navigator: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0'
      },
      document: {
        location: n,
        referrer: ''
      },
      screen: {
        width: 0,
        height: 0
      },
      location: n
    };
  } else t = window;
  var i,
    o,
    s,
    a,
    c,
    u,
    l,
    p,
    f,
    h,
    d,
    v = Array.prototype,
    g = Function.prototype,
    y = Object.prototype,
    m = v.slice,
    _ = y.toString,
    b = y.hasOwnProperty,
    k = t.console,
    w = t.navigator,
    x = t.document,
    j = t.opera,
    S = t.screen,
    O = w.userAgent,
    E = g.bind,
    q = v.forEach,
    C = v.indexOf,
    I = v.map,
    P = Array.isArray,
    A = {},
    T = {
      trim: function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      }
    },
    L = {
      log: function () {
        if (r.DEBUG && !T.isUndefined(k) && k) try {
          k.log.apply(k, arguments);
        } catch (e) {
          T.each(arguments, function (e) {
            k.log(e);
          });
        }
      },
      warn: function () {
        if (r.DEBUG && !T.isUndefined(k) && k) {
          var e = ['Mixpanel warning:'].concat(T.toArray(arguments));
          try {
            k.warn.apply(k, e);
          } catch (t) {
            T.each(e, function (e) {
              k.warn(e);
            });
          }
        }
      },
      error: function () {
        if (r.DEBUG && !T.isUndefined(k) && k) {
          var e = ['Mixpanel error:'].concat(T.toArray(arguments));
          try {
            k.error.apply(k, e);
          } catch (t) {
            T.each(e, function (e) {
              k.error(e);
            });
          }
        }
      },
      critical: function () {
        if (!T.isUndefined(k) && k) {
          var e = ['Mixpanel error:'].concat(T.toArray(arguments));
          try {
            k.error.apply(k, e);
          } catch (t) {
            T.each(e, function (e) {
              k.error(e);
            });
          }
        }
      }
    },
    R = function (e, t) {
      return function () {
        arguments[0] = '[' + t + '] ' + arguments[0]
        return e.apply(L, arguments);
      };
    },
    z = function (e) {
      return {
        log: R(L.log, e),
        error: R(L.error, e),
        critical: R(L.critical, e)
      };
    };
  T.bind = function (e, t) {
    var r, n;
    if (E && e.bind === E) return E.apply(e, m.call(arguments, 1));
    if (!T.isFunction(e)) throw new TypeError();
    r = m.call(arguments, 2)
    n = function () {
      if (!(this instanceof n)) return e.apply(t, r.concat(m.call(arguments)));
      var i = {};
      i.prototype = e.prototype;
      var o = new i();
      i.prototype = null;
      var s = e.apply(o, r.concat(m.call(arguments)));
      return Object(s) === s ? s : o;
    }
    return n;
  }, T.each = function (e, t, r) {
    if (null != e) if (q && e.forEach === q) e.forEach(t, r);else if (e.length === +e.length) {
      for (var n = 0, i = e.length; n < i; n++) if (n in e && t.call(r, e[n], n, e) === A) return;
    } else for (var o in e) if (b.call(e, o) && t.call(r, e[o], o, e) === A) return;
  }, T.extend = function (e) {
    T.each(m.call(arguments, 1), function (t) {
      for (var r in t) undefined !== t[r] && (e[r] = t[r]);
    })
    return e;
  }, T.isArray = P || function (e) {
    return '[object Array]' === _.call(e);
  }, T.isFunction = function (e) {
    try {
      return /^\s*\bfunction\b/.test(e);
    } catch (e) {
      return false;
    }
  }, T.isArguments = function (e) {
    return !(!e || !b.call(e, 'callee'));
  }, T.toArray = function (e) {
    return e ? e.toArray ? e.toArray() : T.isArray(e) || T.isArguments(e) ? m.call(e) : T.values(e) : [];
  }, T.map = function (e, t, r) {
    if (I && e.map === I) return e.map(t, r);
    var n = [];
    T.each(e, function (e) {
      n.push(t.call(r, e));
    })
    return n;
  }, T.keys = function (e) {
    var t = [];
    null === e || T.each(e, function (e, r) {
      t[t.length] = r;
    })
    return t;
  }, T.values = function (e) {
    var t = [];
    null === e || T.each(e, function (e) {
      t[t.length] = e;
    })
    return t;
  }, T.include = function (e, t) {
    var r = false;
    return null === e ? r : C && e.indexOf === C ? -1 != e.indexOf(t) : (T.each(e, function (e) {
      if (r || (r = e === t)) return A;
    }), r);
  }, T.includes = function (e, t) {
    return -1 !== e.indexOf(t);
  }, T.inherit = function (e, t) {
    e.prototype = new t()
    e.prototype.constructor = e
    e.superclass = t.prototype
    return e;
  }, T.isObject = function (e) {
    return e === Object(e) && !T.isArray(e);
  }, T.isEmptyObject = function (e) {
    if (T.isObject(e)) {
      for (var t in e) if (b.call(e, t)) return false;
      return true;
    }
    return false;
  }, T.isUndefined = function (e) {
    return undefined === e;
  }, T.isString = function (e) {
    return '[object String]' == _.call(e);
  }, T.isDate = function (e) {
    return '[object Date]' == _.call(e);
  }, T.isNumber = function (e) {
    return '[object Number]' == _.call(e);
  }, T.isElement = function (e) {
    return !(!e || 1 !== e.nodeType);
  }, T.encodeDates = function (e) {
    T.each(e, function (t, r) {
      T.isDate(t) ? e[r] = T.formatDate(t) : T.isObject(t) && (e[r] = T.encodeDates(t));
    })
    return e;
  }, T.timestamp = function () {
    Date.now = Date.now || function () {
      return +new Date();
    }
    return Date.now();
  }, T.formatDate = function (e) {
    function t(e) {
      return e < 10 ? '0' + e : e;
    }
    return e.getUTCFullYear() + '-' + t(e.getUTCMonth() + 1) + '-' + t(e.getUTCDate()) + 'T' + t(e.getUTCHours()) + ':' + t(e.getUTCMinutes()) + ':' + t(e.getUTCSeconds());
  }, T.strip_empty_properties = function (e) {
    var t = {};
    T.each(e, function (e, r) {
      T.isString(e) && e.length > 0 && (t[r] = e);
    })
    return t;
  }, T.truncate = function (e, t) {
    var r;
    'string' == typeof e ? r = e.slice(0, t) : T.isArray(e) ? (r = [], T.each(e, function (e) {
      r.push(T.truncate(e, t));
    })) : T.isObject(e) ? (r = {}, T.each(e, function (e, n) {
      r[n] = T.truncate(e, t);
    })) : r = e
    return r;
  }, T.JSONEncode = function (e) {
    var t = function (e) {
        var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          r = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
          };
        t.lastIndex = 0
        return t.test(e) ? '"' + e.replace(t, function (e) {
          var t = r[e];
          return 'string' == typeof t ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + e + '"';
      },
      r = function (e, n) {
        var i = '',
          o = 0,
          s = '',
          a = '',
          c = 0,
          u = i,
          l = [],
          p = n[e];
        switch (p && 'object' == typeof p && 'function' == typeof p.toJSON && (p = p.toJSON(e)), typeof p) {
          case 'string':
            return t(p);
          case 'number':
            return isFinite(p) ? String(p) : 'null';
          case 'boolean':
          case 'null':
            return String(p);
          case 'object':
            if (!p) return 'null';
            if (i += '    ', l = [], '[object Array]' === _.apply(p)) {
              for (c = p.length, o = 0; o < c; o += 1) l[o] = r(o, p) || 'null';
              a = 0 === l.length ? '[]' : i ? '[\n' + i + l.join(',\n' + i) + '\n' + u + ']' : '[' + l.join(',') + ']'
              i = u
              return a;
            }
            for (s in p) b.call(p, s) && (a = r(s, p)) && l.push(t(s) + (i ? ': ' : ':') + a);
            a = 0 === l.length ? '{}' : i ? '{' + l.join(',') + u + '}' : '{' + l.join(',') + '}'
            i = u
            return a;
        }
      };
    return r('', {
      '': e
    });
  }, T.JSONDecode = (c = {
    '"': '"',
    '\\': '\\',
    '/': '/',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
  }, u = function (e) {
    var t = new SyntaxError(e);
    throw t.at = i, t.text = s, t;
  }, l = function (e) {
    e && e !== o && u("Expected '" + e + "' instead of '" + o + "'")
    o = s.charAt(i)
    i += 1
    return o;
  }, p = function () {
    var e,
      t = '';
    for ('-' === o && (t = '-', l('-')); o >= '0' && o <= '9';) t += o, l();
    if ('.' === o) for (t += '.'; l() && o >= '0' && o <= '9';) t += o;
    if ('e' === o || 'E' === o) for (t += o, l(), '-' !== o && '+' !== o || (t += o, l()); o >= '0' && o <= '9';) t += o, l();
    if (e = +t, isFinite(e)) return e;
    u('Bad number');
  }, f = function () {
    var e,
      t,
      r,
      n = '';
    if ('"' === o) for (; l();) {
      if ('"' === o) return n;
      if ('\\' === o) {
        if (l(), 'u' === o) {
          for (r = 0, t = 0; t < 4 && (e = parseInt(l(), 16), isFinite(e)); t += 1) r = 16 * r + e;
          n += String.fromCharCode(r);
        } else {
          if ('string' != typeof c[o]) break;
          n += c[o];
        }
      } else n += o;
    }
    u('Bad string');
  }, h = function () {
    for (; o && o <= ' ';) l();
  }, a = function () {
    switch (h(), o) {
      case '{':
        return function () {
          var e,
            t = {};
          if ('{' === o) {
            if (l('{'), h(), '}' === o) return t;
            for (; o;) {
              if (e = f(), h(), l(':'), Object.hasOwnProperty.call(t, e) && u('Duplicate key "' + e + '"'), t[e] = a(), h(), '}' === o) return t;
              l(','), h();
            }
          }
          u('Bad object');
        }();
      case '[':
        return function () {
          var e = [];
          if ('[' === o) {
            if (l('['), h(), ']' === o) return e;
            for (; o;) {
              if (e.push(a()), h(), ']' === o) return e;
              l(','), h();
            }
          }
          u('Bad array');
        }();
      case '"':
        return f();
      case '-':
        return p();
      default:
        return o >= '0' && o <= '9' ? p() : function () {
          switch (o) {
            case 't':
              l('t')
              l('r')
              l('u')
              l('e')
              return true;
            case 'f':
              l('f')
              l('a')
              l('l')
              l('s')
              l('e')
              return false;
            case 'n':
              l('n')
              l('u')
              l('l')
              l('l')
              return null;
          }
          u('Unexpected "' + o + '"');
        }();
    }
  }, function (e) {
    var t;
    s = e
    i = 0
    o = ' '
    t = a()
    h()
    o && u('Syntax error')
    return t;
  }), T.base64Encode = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      a = 0,
      c = 0,
      u = '',
      l = [];
    if (!e) return e;
    e = T.utf8Encode(e);
    do {
      ;
      t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = o >> 12 & 63, n = o >> 6 & 63, i = 63 & o, l[c++] = s.charAt(t) + s.charAt(r) + s.charAt(n) + s.charAt(i);
    } while (a < e.length);
    switch (u = l.join(''), e.length % 3) {
      case 1:
        u = u.slice(0, -2) + '==';
        break;
      case 2:
        u = u.slice(0, -1) + '=';
    }
    return u;
  }, T.utf8Encode = function (e) {
    var t,
      r,
      n,
      i,
      o = '';
    for (t = r = 0, n = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, i = 0; i < n; i++) {
      var s = e.charCodeAt(i),
        a = null;
      s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (o += e.substring(t, r)), o += a, t = r = i + 1);
    }
    r > t && (o += e.substring(t, e.length))
    return o;
  }, T.UUID = (d = function () {
    for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++;
    return e.toString(16) + t.toString(16);
  }, function () {
    var e = (S.height * S.width).toString(16);
    return d() + '-' + Math.random().toString(16).replace('.', '') + '-' + function () {
      var e,
        t,
        r = O,
        n = [],
        i = 0;
      function o(e, t) {
        var r,
          i = 0;
        for (r = 0; r < t.length; r++) i |= n[r] << 8 * r;
        return e ^ i;
      }
      for (e = 0; e < r.length; e++) t = r.charCodeAt(e), n.unshift(255 & t), n.length >= 4 && (i = o(i, n), n = []);
      n.length > 0 && (i = o(i, n))
      return i.toString(16);
    }() + '-' + e + '-' + d();
  });
  var D = ['ahrefsbot', 'baiduspider', 'bingbot', 'bingpreview', 'facebookexternal', 'petalbot', 'pinterest', 'screaming frog', 'yahoo! slurp', 'yandexbot', 'adsbot-google', 'apis-google', 'duplexweb-google', 'feedfetcher-google', 'google favicon', 'google web preview', 'google-read-aloud', 'googlebot', 'googleweblight', 'mediapartners-google', 'storebot-google'];
  T.isBlockedUA = function (e) {
    var t;
    for (e = e.toLowerCase(), t = 0; t < D.length; t++) if (-1 !== e.indexOf(D[t])) return true;
    return false;
  }, T.HTTPBuildQuery = function (e, t) {
    var r,
      n,
      i = [];
    T.isUndefined(t) && (t = '&')
    T.each(e, function (e, t) {
      ;
      r = encodeURIComponent(e.toString()), n = encodeURIComponent(t), i[i.length] = n + '=' + r;
    })
    return i.join(t);
  }, T.getQueryParam = function (e, t) {
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var r = new RegExp('[\\?&]' + t + '=([^&#]*)').exec(e);
    if (null === r || r && 'string' != typeof r[1] && r[1].length) return '';
    var n = r[1];
    try {
      n = decodeURIComponent(n);
    } catch (e) {
      L.error('Skipping decoding for malformed query param: ' + n);
    }
    return n.replace(/\+/g, ' ');
  }, T.cookie = {
    get: function (e) {
      for (var t = e + '=', r = x.cookie.split(';'), n = 0; n < r.length; n++) {
        for (var i = r[n]; ' ' == i.charAt(0);) i = i.substring(1, i.length);
        if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length));
      }
      return null;
    },
    parse: function (e) {
      var t;
      try {
        t = T.JSONDecode(T.cookie.get(e)) || {};
      } catch (e) {}
      return t;
    },
    set_seconds: function (e, t, r, n, i, o, s) {
      var a = '',
        c = '',
        u = '';
      if (s) a = '; domain=' + s;else if (n) {
        var l = G(x.location.hostname);
        a = l ? '; domain=.' + l : '';
      }
      if (r) {
        var p = new Date();
        p.setTime(p.getTime() + 1e3 * r), c = '; expires=' + p.toGMTString();
      }
      o && (i = true, u = '; SameSite=None'), i && (u += '; secure'), x.cookie = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + u;
    },
    set: function (e, t, r, n, i, o, s) {
      var a = '',
        c = '',
        u = '';
      if (s) a = '; domain=' + s;else if (n) {
        var l = G(x.location.hostname);
        a = l ? '; domain=.' + l : '';
      }
      if (r) {
        var p = new Date();
        p.setTime(p.getTime() + 24 * r * 60 * 60 * 1e3), c = '; expires=' + p.toGMTString();
      }
      o && (i = true, u = '; SameSite=None'), i && (u += '; secure');
      var f = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + u;
      x.cookie = f
      return f;
    },
    remove: function (e, t, r) {
      T.cookie.set(e, '', -1, t, false, false, r);
    }
  };
  var F = null,
    M = function (e, t) {
      if (null !== F && !t) return F;
      var r = true;
      try {
        e = e || window.localStorage;
        var n = '__mplss_' + B(8);
        e.setItem(n, 'xyz'), 'xyz' !== e.getItem(n) && (r = false), e.removeItem(n);
      } catch (e) {
        r = false;
      }
      F = r
      return r;
    };
  T.localStorage = {
    is_supported: function (e) {
      var t = M(null, e);
      t || L.error('localStorage unsupported; falling back to cookie store')
      return t;
    },
    error: function (e) {
      L.error('localStorage error: ' + e);
    },
    get: function (e) {
      try {
        return window.localStorage.getItem(e);
      } catch (e) {
        T.localStorage.error(e);
      }
      return null;
    },
    parse: function (e) {
      try {
        return T.JSONDecode(T.localStorage.get(e)) || {};
      } catch (e) {}
      return null;
    },
    set: function (e, t) {
      try {
        window.localStorage.setItem(e, t);
      } catch (e) {
        T.localStorage.error(e);
      }
    },
    remove: function (e) {
      try {
        window.localStorage.removeItem(e);
      } catch (e) {
        T.localStorage.error(e);
      }
    }
  }, T.register_event = function () {
    function e(t) {
      t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation)
      return t;
    }
    e.preventDefault = function () {
      this.returnValue = false;
    }
    e.stopPropagation = function () {
      this.cancelBubble = true;
    }
    return function (t, r, n, i, o) {
      if (t) {
        if (t.addEventListener && !i) t.addEventListener(r, n, !!o);else {
          var s = 'on' + r,
            a = t[s];
          t[s] = function (t, r, n) {
            return function (i) {
              if (i = i || e(window.event)) {
                var o,
                  s,
                  a = true;
                T.isFunction(n) && (o = n(i))
                s = r.call(t, i)
                false !== o && false !== s || (a = false)
                return a;
              }
            };
          }(t, n, a);
        }
      } else L.error('No valid element provided to register_event');
    };
  }();
  var N = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
  T.dom_query = function () {
    function e(e) {
      return e.all ? e.all : e.getElementsByTagName('*');
    }
    var t = /[\t\r\n]/g;
    function r(e, r) {
      var n = ' ' + r + ' ';
      return (' ' + e.className + ' ').replace(t, ' ').indexOf(n) >= 0;
    }
    function n(t) {
      if (!x.getElementsByTagName) return [];
      var n,
        i,
        o,
        s,
        a,
        c,
        u,
        l,
        p,
        f,
        h = t.split(' '),
        d = [x];
      for (c = 0; c < h.length; c++) if ((n = h[c].replace(/^\s+/, '').replace(/\s+$/, '')).indexOf('#') > -1) {
        o = (i = n.split('#'))[0];
        var v = i[1],
          g = x.getElementById(v);
        if (!g || o && g.nodeName.toLowerCase() != o) return [];
        d = [g];
      } else if (n.indexOf('.') > -1) {
        o = (i = n.split('.'))[0];
        var y = i[1];
        for (o || (o = '*'), s = [], a = 0, u = 0; u < d.length; u++) for (p = '*' == o ? e(d[u]) : d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
        for (d = [], f = 0, u = 0; u < s.length; u++) s[u].className && T.isString(s[u].className) && r(s[u], y) && (d[f++] = s[u]);
      } else {
        var m = n.match(N);
        if (m) {
          o = m[1];
          var _,
            b = m[2],
            k = m[3],
            w = m[4];
          for (o || (o = '*'), s = [], a = 0, u = 0; u < d.length; u++) for (p = '*' == o ? e(d[u]) : d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
          switch (d = [], f = 0, k) {
            case '=':
              _ = function (e) {
                return e.getAttribute(b) == w;
              };
              break;
            case '~':
              _ = function (e) {
                return e.getAttribute(b).match(new RegExp('\\b' + w + '\\b'));
              };
              break;
            case '|':
              _ = function (e) {
                return e.getAttribute(b).match(new RegExp('^' + w + '-?'));
              };
              break;
            case '^':
              _ = function (e) {
                return 0 === e.getAttribute(b).indexOf(w);
              };
              break;
            case '$':
              _ = function (e) {
                return e.getAttribute(b).lastIndexOf(w) == e.getAttribute(b).length - w.length;
              };
              break;
            case '*':
              _ = function (e) {
                return e.getAttribute(b).indexOf(w) > -1;
              };
              break;
            default:
              _ = function (e) {
                return e.getAttribute(b);
              };
          }
          for (d = [], f = 0, u = 0; u < s.length; u++) _(s[u]) && (d[f++] = s[u]);
        } else {
          for (o = n, s = [], a = 0, u = 0; u < d.length; u++) for (p = d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
          d = s;
        }
      }
      return d;
    }
    return function (e) {
      return T.isElement(e) ? [e] : T.isObject(e) && !T.isUndefined(e.length) ? e : n.call(this, e);
    };
  }(), T.info = {
    campaignParams: function () {
      var e = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
        t = '',
        r = {};
      T.each(e, function (e) {
        ;
        (t = T.getQueryParam(x.URL, e)).length && (r[e] = t);
      })
      return r;
    },
    searchEngine: function (e) {
      return 0 === e.search('https?://(.*)google.([^/?]*)') ? 'google' : 0 === e.search('https?://(.*)bing.com') ? 'bing' : 0 === e.search('https?://(.*)yahoo.com') ? 'yahoo' : 0 === e.search('https?://(.*)duckduckgo.com') ? 'duckduckgo' : null;
    },
    searchInfo: function (e) {
      var t = T.info.searchEngine(e),
        r = 'yahoo' != t ? 'q' : 'p',
        n = {};
      if (null !== t) {
        n.$search_engine = t;
        var i = T.getQueryParam(e, r);
        i.length && (n.mp_keyword = i);
      }
      return n;
    },
    browser: function (e, t, r) {
      t = t || ''
      return r || T.includes(e, ' OPR/') ? T.includes(e, 'Mini') ? 'Opera Mini' : 'Opera' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : T.includes(e, 'IEMobile') || T.includes(e, 'WPDesktop') ? 'Internet Explorer Mobile' : T.includes(e, 'SamsungBrowser/') ? 'Samsung Internet' : T.includes(e, 'Edge') || T.includes(e, 'Edg/') ? 'Microsoft Edge' : T.includes(e, 'FBIOS') ? 'Facebook Mobile' : T.includes(e, 'Chrome') ? 'Chrome' : T.includes(e, 'CriOS') ? 'Chrome iOS' : T.includes(e, 'UCWEB') || T.includes(e, 'UCBrowser') ? 'UC Browser' : T.includes(e, 'FxiOS') ? 'Firefox iOS' : T.includes(t, 'Apple') ? T.includes(e, 'Mobile') ? 'Mobile Safari' : 'Safari' : T.includes(e, 'Android') ? 'Android Mobile' : T.includes(e, 'Konqueror') ? 'Konqueror' : T.includes(e, 'Firefox') ? 'Firefox' : T.includes(e, 'MSIE') || T.includes(e, 'Trident/') ? 'Internet Explorer' : T.includes(e, 'Gecko') ? 'Mozilla' : '';
    },
    browserVersion: function (e, t, r) {
      var n = {
        'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
        'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
        Chrome: /Chrome\/(\d+(\.\d+)?)/,
        'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
        'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
        Safari: /Version\/(\d+(\.\d+)?)/,
        'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
        Firefox: /Firefox\/(\d+(\.\d+)?)/,
        'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
        'Android Mobile': /android\s(\d+(\.\d+)?)/,
        'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
        'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
        Mozilla: /rv:(\d+(\.\d+)?)/
      }[T.info.browser(e, t, r)];
      if (undefined === n) return null;
      var i = e.match(n);
      return i ? parseFloat(i[i.length - 2]) : null;
    },
    os: function () {
      var e = O;
      return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? 'Windows Phone' : 'Windows' : /(iPhone|iPad|iPod)/.test(e) ? 'iOS' : /Android/.test(e) ? 'Android' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : /Mac/i.test(e) ? 'Mac OS X' : /Linux/.test(e) ? 'Linux' : /CrOS/.test(e) ? 'Chrome OS' : '';
    },
    device: function (e) {
      return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? 'Windows Phone' : /iPad/.test(e) ? 'iPad' : /iPod/.test(e) ? 'iPod Touch' : /iPhone/.test(e) ? 'iPhone' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : /Android/.test(e) ? 'Android' : '';
    },
    referringDomain: function (e) {
      var t = e.split('/');
      return t.length >= 3 ? t[2] : '';
    },
    properties: function () {
      return T.extend(T.strip_empty_properties({
        $os: T.info.os(),
        $browser: T.info.browser(O, w.vendor, j),
        $referrer: x.referrer,
        $referring_domain: T.info.referringDomain(x.referrer),
        $device: T.info.device(O)
      }), {
        // $current_url: t.location.href,
        $current_url: 'https://www.iploong.com/',
        $browser_version: T.info.browserVersion(O, w.vendor, j),
        // $screen_height: S.height,
        // $screen_width: S.width,
        $screen_height: 1440,
        $screen_width: 2560,
        mp_lib: 'web',
        $lib_version: r.LIB_VERSION,
        $insert_id: B(),
        time: T.timestamp() / 1e3
      });
    },
    people_properties: function () {
      return T.extend(T.strip_empty_properties({
        $os: T.info.os(),
        $browser: T.info.browser(O, w.vendor, j)
      }), {
        $browser_version: T.info.browserVersion(O, w.vendor, j)
      });
    },
    pageviewInfo: function (e) {
      return T.strip_empty_properties({
        mp_page: e,
        mp_referrer: x.referrer,
        mp_browser: T.info.browser(O, w.vendor, j),
        mp_platform: T.info.os()
      });
    }
  };
  var B = function (e) {
      var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
      return e ? t.substring(0, e) : t;
    },
    U = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
    $ = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
    G = function (e) {
      var t = $,
        r = e.split('.'),
        n = r[r.length - 1];
      (n.length > 4 || 'com' === n || 'org' === n) && (t = U);
      var i = e.match(t);
      return i ? i[0] : '';
    },
    W = null,
    H = null;
  'undefined' != typeof JSON && (W = JSON.stringify, H = JSON.parse), W = W || T.JSONEncode, H = H || T.JSONDecode, T.toArray = T.toArray, T.isObject = T.isObject, T.JSONEncode = T.JSONEncode, T.JSONDecode = T.JSONDecode, T.isBlockedUA = T.isBlockedUA, T.isEmptyObject = T.isEmptyObject, T.info = T.info, T.info.device = T.info.device, T.info.browser = T.info.browser, T.info.browserVersion = T.info.browserVersion, T.info.properties = T.info.properties;
  var J = function () {};
  J.prototype.create_properties = function () {}, J.prototype.event_handler = function () {}, J.prototype.after_track_handler = function () {}, J.prototype.init = function (e) {
    this.mp = e
    return this;
  }, J.prototype.track = function (e, t, r, n) {
    console.log('track')
    var i = this,
      o = T.dom_query(e);
      // console.log('track', o)
    if (0 !== o.length) return true;
    L.error('The DOM query (' + e + ') returned 0 elements');
  }, J.prototype.track_callback = function (e, t, r, n) {
    n = n || false;
    var i = this;
    return function () {
      r.callback_fired || (r.callback_fired = true, e && false === e(n, t) || i.after_track_handler(t, r, n));
    };
  }, J.prototype.create_properties = function (e, t) {
    return 'function' == typeof e ? e(t) : T.extend({}, e);
  };
  var V = function () {
    this.override_event = 'click';
  };
  T.inherit(V, J), V.prototype.create_properties = function (e, t) {
    var r = V.superclass.create_properties.apply(this, arguments);
    t.href && (r.url = t.href)
    return r;
  }, V.prototype.event_handler = function (e, t, r) {
    ;
    r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || '_blank' === t.target, r.href = t.href, r.new_tab || e.preventDefault();
  }, V.prototype.after_track_handler = function (e, t) {
    t.new_tab || setTimeout(function () {
      window.location = t.href;
    }, 0);
  };
  var Q = function () {
    this.override_event = 'submit';
  };
  T.inherit(Q, J), Q.prototype.event_handler = function (e, t, r) {
    ;
    r.element = t, e.preventDefault();
  }, Q.prototype.after_track_handler = function (e, t) {
    setTimeout(function () {
      t.element.submit();
    }, 0);
  };
  var Y = z('lock'),
    X = function (e, t) {
      ;
      t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3;
    };
  X.prototype.withLock = function (e, t, r) {
    r || 'function' == typeof t || (r = t, t = null);
    var n = r || new Date().getTime() + '|' + Math.random(),
      i = new Date().getTime(),
      o = this.storageKey,
      s = this.pollIntervalMS,
      a = this.timeoutMS,
      c = this.storage,
      u = o + ':X',
      l = o + ':Y',
      p = o + ':Z',
      f = function (e) {
        t && t(e);
      },
      h = function (e) {
        if (new Date().getTime() - i > a) return void g();
        setTimeout(function () {
          try {
            e();
          } catch (e) {
            f(e);
          }
        }, s * (Math.random() + 0.1));
      },
      d = function (e, t) {
        e() ? t() : h(function () {
          d(e, t);
        });
      },
      v = function () {
        var e = c.getItem(l);
        if (e && e !== n) return false;
        if (c.setItem(l, n), c.getItem(l) === n) return true;
        if (!M(c, true)) throw new Error('localStorage support dropped while acquiring lock');
        return false;
      },
      g = function () {
        c.setItem(u, n), d(v, function () {
          c.getItem(u) !== n ? h(function () {
            c.getItem(l) === n ? d(function () {
              return !c.getItem(p);
            }, y) : g();
          }) : y();
        });
      },
      y = function () {
        c.setItem(p, '1');
        try {
          e();
        } finally {
          c.removeItem(p), c.getItem(l) === n && c.removeItem(l), c.getItem(u) === n && c.removeItem(u);
        }
      };
    try {
      if (!M(c, true)) throw new Error('localStorage support check failed');
      g();
    } catch (e) {
      f(e);
    }
  };
  var K = z('batch'),
    Z = function (e, t) {
      ;
      t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || T.bind(K.error, K), this.lock = new X(e, {
        storage: this.storage
      }), this.pid = t.pid || null, this.memQueue = [];
    };
  Z.prototype.enqueue = function (e, t, r) {
    var n = {
      id: B(),
      flushAfter: new Date().getTime() + 2 * t,
      payload: e
    };
    this.lock.withLock(T.bind(function () {
      var t;
      try {
        var i = this.readFromStorage();
        i.push(n), (t = this.saveToStorage(i)) && this.memQueue.push(n);
      } catch (r) {
        this.reportError('Error enqueueing item', e), t = false;
      }
      r && r(t);
    }, this), T.bind(function (e) {
      this.reportError('Error acquiring storage lock', e), r && r(false);
    }, this), this.pid);
  }, Z.prototype.fillBatch = function (e) {
    var t = this.memQueue.slice(0, e);
    if (t.length < e) {
      var r = this.readFromStorage();
      if (r.length) {
        var n = {};
        T.each(t, function (e) {
          n[e.id] = true;
        });
        for (var i = 0; i < r.length; i++) {
          var o = r[i];
          if (new Date().getTime() > o.flushAfter && !n[o.id] && (o.orphaned = true, t.push(o), t.length >= e)) break;
        }
      }
    }
    return t;
  };
  var ee = function (e, t) {
    var r = [];
    T.each(e, function (e) {
      e.id && !t[e.id] && r.push(e);
    })
    return r;
  };
  Z.prototype.removeItemsByID = function (e, t) {
    var r = {};
    T.each(e, function (e) {
      r[e] = true;
    }), this.memQueue = ee(this.memQueue, r);
    var n = T.bind(function () {
      var t;
      try {
        var n = this.readFromStorage();
        if (n = ee(n, r), t = this.saveToStorage(n)) {
          n = this.readFromStorage();
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (o.id && r[o.id]) return false;
          }
        }
      } catch (r) {
        this.reportError('Error removing items', e), t = false;
      }
      return t;
    }, this);
    this.lock.withLock(function () {
      var e = n();
      t && t(e);
    }, T.bind(function (e) {
      var r = false;
      if (this.reportError('Error acquiring storage lock', e), !M(this.storage, true) && !(r = n())) try {
        this.storage.removeItem(this.storageKey);
      } catch (e) {
        this.reportError('Error clearing queue', e);
      }
      t && t(r);
    }, this), this.pid);
  };
  var te = function (e, t) {
    var r = [];
    T.each(e, function (e) {
      var n = e.id;
      if (n in t) {
        var i = t[n];
        null !== i && (e.payload = i, r.push(e));
      } else r.push(e);
    })
    return r;
  };
  Z.prototype.updatePayloads = function (e, t) {
    ;
    this.memQueue = te(this.memQueue, e), this.lock.withLock(T.bind(function () {
      var r;
      try {
        var n = this.readFromStorage();
        n = te(n, e), r = this.saveToStorage(n);
      } catch (t) {
        this.reportError('Error updating items', e), r = false;
      }
      t && t(r);
    }, this), T.bind(function (e) {
      this.reportError('Error acquiring storage lock', e), t && t(false);
    }, this), this.pid);
  }, Z.prototype.readFromStorage = function () {
    var e;
    try {
      ;
      (e = this.storage.getItem(this.storageKey)) && (e = H(e), T.isArray(e) || (this.reportError('Invalid storage entry:', e), e = null));
    } catch (t) {
      this.reportError('Error retrieving queue', t), e = null;
    }
    return e || [];
  }, Z.prototype.saveToStorage = function (e) {
    try {
      this.storage.setItem(this.storageKey, W(e))
      return true;
    } catch (e) {
      this.reportError('Error saving queue', e)
      return false;
    }
  }, Z.prototype.clear = function () {
    ;
    this.memQueue = [], this.storage.removeItem(this.storageKey);
  };
  var re = z('batch'),
    ne = function (e, t) {
      ;
      this.errorReporter = t.errorReporter, this.queue = new Z(e, {
        errorReporter: T.bind(this.reportError, this),
        storage: t.storage
      }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0;
    };
  function ie(e, t) {
    ve(true, e, t);
  }
  function oe(e, t) {
    ve(false, e, t);
  }
  function se(e, t) {
    return '1' === de(e, t);
  }
  function ae(e, r) {
    if (function (e) {
      if (e && e.ignoreDnt) return false;
      var r = e && e.window || t,
        n = r.navigator || {},
        i = false;
      T.each([n.doNotTrack, n.msDoNotTrack, r.doNotTrack], function (e) {
        T.includes([true, 1, '1', 'yes'], e) && (i = true);
      })
      return i;
    }(r)) return true;
    var n = '0' === de(e, r);
    n && L.warn('You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.')
    return n;
  }
  function ce(e) {
    
    return ge(e, function (e) {
      console.log('ce', e)
      return this.get_config(e);
    });
  }
  function ue(e) {
    return ge(e, function (e) {
      return this._get_config(e);
    });
  }
  function le(e) {
    return ge(e, function (e) {
      return this._get_config(e);
    });
  }
  function pe(e, t) {
    fe(t = t || {}).remove(he(e, t), !!t.crossSubdomainCookie, t.cookieDomain);
  }
  function fe(e) {
    return 'localStorage' === (e = e || {}).persistenceType ? T.localStorage : T.cookie;
  }
  function he(e, t) {
    return ((t = t || {}).persistencePrefix || '__mp_opt_in_out_') + e;
  }
  function de(e, t) {
    return fe(t).get(he(e, t));
  }
  function ve(e, t, r) {
    T.isString(t) && t.length ? (fe(r = r || {}).set(he(t, r), e ? 1 : 0, T.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || '$opt_in', r.trackProperties, {
      send_immediately: true
    })) : L.error('gdpr.' + (e ? 'optIn' : 'optOut') + ' called with an invalid token');
  }
  function ge(e, t) {
    return function () {
      var r = false;
      try {
        var n = t.call(this, 'token'),
          i = t.call(this, 'ignore_dnt'),
          o = t.call(this, 'opt_out_tracking_persistence_type'),
          s = t.call(this, 'opt_out_tracking_cookie_prefix'),
          a = t.call(this, 'window');
        n && (r = ae(n, {
          ignoreDnt: i,
          persistenceType: o,
          persistencePrefix: s,
          window: a
        }));
      } catch (e) {
        L.error('Unexpected error when checking tracking opt-out status: ' + e);
      }
      if (!r) return e.apply(this, arguments);
      var c = arguments[arguments.length - 1];
      'function' == typeof c && c(0);
    };
  }
  ;
  ne.prototype.enqueue = function (e, t) {
    this.queue.enqueue(e, this.flushInterval, t);
  }, ne.prototype.start = function () {
    ;
    this.stopped = false, this.consecutiveRemovalFailures = 0, this.flush();
  }, ne.prototype.stop = function () {
    ;
    this.stopped = true, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null);
  }, ne.prototype.clear = function () {
    this.queue.clear();
  }, ne.prototype.resetBatchSize = function () {
    this.batchSize = this.libConfig.batch_size;
  }, ne.prototype.resetFlush = function () {
    this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
  }, ne.prototype.scheduleFlush = function (e) {
    ;
    this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(T.bind(this.flush, this), this.flushInterval));
  }, ne.prototype.flush = function (e) {
    try {
      if (this.requestInProgress) return void re.log('Flush: Request already in progress');
      e = e || {};
      var t = this.libConfig.batch_request_timeout_ms,
        r = new Date().getTime(),
        n = this.batchSize,
        i = this.queue.fillBatch(n),
        o = [],
        s = {};
      if (T.each(i, function (e) {
        var t = e.payload;
        this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t && o.push(t), s[e.id] = t;
      }, this), o.length < 1) return void this.resetFlush();
      this.requestInProgress = true;
      var a = T.bind(function (o) {
          this.requestInProgress = false;
          try {
            var a = false;
            if (e.unloading) this.queue.updatePayloads(s);else if (T.isObject(o) && 'timeout' === o.error && new Date().getTime() - r >= t) this.reportError('Network timeout; retrying'), this.flush();else if (T.isObject(o) && o.xhr_req && (o.xhr_req.status >= 500 || 429 === o.xhr_req.status || 'timeout' === o.error)) {
              var c = 2 * this.flushInterval,
                u = o.xhr_req.responseHeaders;
              if (u) {
                var l = u['Retry-After'];
                l && (c = 1e3 * parseInt(l, 10) || c);
              }
              ;
              c = Math.min(6e5, c), this.reportError('Error; retry in ' + c + ' ms'), this.scheduleFlush(c);
            } else if (T.isObject(o) && o.xhr_req && 413 === o.xhr_req.status) {
              if (i.length > 1) {
                var p = Math.max(1, Math.floor(n / 2));
                this.batchSize = Math.min(this.batchSize, p, i.length - 1), this.reportError('413 response; reducing batch size to ' + this.batchSize), this.resetFlush();
              } else this.reportError('Single-event request too large; dropping', i), this.resetBatchSize(), a = true;
            } else a = true;
            a && this.queue.removeItemsByID(T.map(i, function (e) {
              return e.id;
            }), T.bind(function (e) {
              e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError('Failed to remove items from queue'), ++this.consecutiveRemovalFailures > 5 ? (this.reportError('Too many queue failures; disabling batching system.'), this.stopAllBatching()) : this.resetFlush());
            }, this));
          } catch (e) {
            this.reportError('Error handling API response', e), this.resetFlush();
          }
        }, this),
        c = {
          method: 'POST',
          verbose: true,
          ignore_json_errors: true,
          timeout_ms: t
        };
      e.unloading && (c.transport = 'sendBeacon'), re.log('MIXPANEL REQUEST:', o), this.sendRequest(o, c, a);
    } catch (e) {
      this.reportError('Error flushing request queue', e), this.resetFlush();
    }
  }, ne.prototype.reportError = function (e, t) {
    if (re.error.apply(re.error, arguments), this.errorReporter) try {
      t instanceof Error || (t = new Error(e)), this.errorReporter(e, t);
    } catch (t) {
      re.error(t);
    }
  };
  var ye = '$set',
    me = '$set_once',
    _e = '$unset',
    be = '$add',
    ke = '$append',
    we = '$union',
    xe = '$remove',
    je = {
      set_action: function (e, t) {
        var r = {},
          n = {};
        T.isObject(e) ? T.each(e, function (e, t) {
          this._is_reserved_property(t) || (n[t] = e);
        }, this) : n[e] = t
        r.$set = n
        return r;
      },
      unset_action: function (e) {
        var t = {},
          r = [];
        T.isArray(e) || (e = [e])
        T.each(e, function (e) {
          this._is_reserved_property(e) || r.push(e);
        }, this)
        t.$unset = r
        return t;
      },
      set_once_action: function (e, t) {
        var r = {},
          n = {};
        T.isObject(e) ? T.each(e, function (e, t) {
          this._is_reserved_property(t) || (n[t] = e);
        }, this) : n[e] = t
        r.$set_once = n
        return r;
      },
      union_action: function (e, t) {
        var r = {},
          n = {};
        T.isObject(e) ? T.each(e, function (e, t) {
          this._is_reserved_property(t) || (n[t] = T.isArray(e) ? e : [e]);
        }, this) : n[e] = T.isArray(t) ? t : [t]
        r.$union = n
        return r;
      },
      append_action: function (e, t) {
        var r = {},
          n = {};
        T.isObject(e) ? T.each(e, function (e, t) {
          this._is_reserved_property(t) || (n[t] = e);
        }, this) : n[e] = t
        r.$append = n
        return r;
      },
      remove_action: function (e, t) {
        var r = {},
          n = {};
        T.isObject(e) ? T.each(e, function (e, t) {
          this._is_reserved_property(t) || (n[t] = e);
        }, this) : n[e] = t
        r.$remove = n
        return r;
      },
      delete_action: function () {
        return {
          $delete: ''
        };
      }
    },
    Se = function () {};
  T.extend(Se.prototype, je), Se.prototype._init = function (e, t, r) {
    ;
    this._mixpanel = e, this._group_key = t, this._group_id = r;
  }, Se.prototype.set = le(function (e, t, r) {
    var n = this.set_action(e, t);
    T.isObject(e) && (r = t)
    return this._send_request(n, r);
  }), Se.prototype.set_once = le(function (e, t, r) {
    var n = this.set_once_action(e, t);
    T.isObject(e) && (r = t)
    return this._send_request(n, r);
  }), Se.prototype.unset = le(function (e, t) {
    var r = this.unset_action(e);
    return this._send_request(r, t);
  }), Se.prototype.union = le(function (e, t, r) {
    T.isObject(e) && (r = t);
    var n = this.union_action(e, t);
    return this._send_request(n, r);
  }), Se.prototype.delete = le(function (e) {
    var t = this.delete_action();
    return this._send_request(t, e);
  }), Se.prototype.remove = le(function (e, t, r) {
    var n = this.remove_action(e, t);
    return this._send_request(n, r);
  }), Se.prototype._send_request = function (e, t) {
    ;
    e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config('token');
    var r = T.encodeDates(e);
    return this._mixpanel._track_or_batch({
      type: 'groups',
      data: r,
      endpoint: this._get_config('api_host') + '/groups/',
      batcher: this._mixpanel.request_batchers.groups
    }, t);
  }, Se.prototype._is_reserved_property = function (e) {
    return '$group_key' === e || '$group_id' === e;
  }, Se.prototype._get_config = function (e) {
    return this._mixpanel.get_config(e);
  }, Se.prototype.toString = function () {
    return this._mixpanel.toString() + '.group.' + this._group_key + '.' + this._group_id;
  }, Se.prototype.remove = Se.prototype.remove, Se.prototype.set = Se.prototype.set, Se.prototype.set_once = Se.prototype.set_once, Se.prototype.union = Se.prototype.union, Se.prototype.unset = Se.prototype.unset, Se.prototype.toString = Se.prototype.toString;
  var Oe = function () {};
  T.extend(Oe.prototype, je), Oe.prototype._init = function (e) {
    // console.log('e', e)
    this._mixpanel = e;
  }, Oe.prototype.set = ue(function (e, t, r) {
    var n = this.set_action(e, t);
    T.isObject(e) && (r = t)
    this._get_config('save_referrer') && this._mixpanel.persistence.update_referrer_info(document.referrer)
    n.$set = T.extend({}, T.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n.$set)
    return this._send_request(n, r);
  }), Oe.prototype.set_once = ue(function (e, t, r) {
    var n = this.set_once_action(e, t);
    T.isObject(e) && (r = t)
    return this._send_request(n, r);
  }), Oe.prototype.unset = ue(function (e, t) {
    var r = this.unset_action(e);
    return this._send_request(r, t);
  }), Oe.prototype.increment = ue(function (e, t, r) {
    var n = {},
      i = {};
    T.isObject(e) ? (T.each(e, function (e, t) {
      if (!this._is_reserved_property(t)) {
        if (isNaN(parseFloat(e))) return void L.error('Invalid increment value passed to mixpanel.people.increment - must be a number');
        i[t] = e;
      }
    }, this), r = t) : (T.isUndefined(t) && (t = 1), i[e] = t)
    n.$add = i
    return this._send_request(n, r);
  }), Oe.prototype.append = ue(function (e, t, r) {
    T.isObject(e) && (r = t);
    var n = this.append_action(e, t);
    return this._send_request(n, r);
  }), Oe.prototype.remove = ue(function (e, t, r) {
    T.isObject(e) && (r = t);
    var n = this.remove_action(e, t);
    return this._send_request(n, r);
  }), Oe.prototype.union = ue(function (e, t, r) {
    T.isObject(e) && (r = t);
    var n = this.union_action(e, t);
    return this._send_request(n, r);
  }), Oe.prototype.track_charge = ue(function (e, t, r) {
    if (T.isNumber(e) || (e = parseFloat(e), !isNaN(e))) return this.append('$transactions', T.extend({
      $amount: e
    }, t), r);
    L.error('Invalid value passed to mixpanel.people.track_charge - must be a number');
  }), Oe.prototype.clear_charges = function (e) {
    return this.set('$transactions', [], e);
  }, Oe.prototype.delete_user = function () {
    if (this._identify_called()) {
      var e = {
        $delete: this._mixpanel.get_distinct_id()
      };
      return this._send_request(e);
    }
    L.error('mixpanel.people.delete_user() requires you to call identify() first');
  }, Oe.prototype.toString = function () {
    return this._mixpanel.toString() + '.people';
  }, Oe.prototype._send_request = function (e, t) {
    ;
    console.log('_send_request')
    e.$token = this._get_config('token'), e.$distinct_id = this._mixpanel.get_distinct_id();
    var r = this._mixpanel.get_property('$device_id'),
      n = this._mixpanel.get_property('$user_id'),
      i = this._mixpanel.get_property('$had_persisted_distinct_id');
    r && (e.$device_id = r), n && (e.$user_id = n), i && (e.$had_persisted_distinct_id = i);
    var o = T.encodeDates(e);
    return this._identify_called() ? this._mixpanel._track_or_batch({
      type: 'people',
      data: o,
      endpoint: this._get_config('api_host') + '/engage/',
      batcher: this._mixpanel.request_batchers.people
    }, t) : (this._enqueue(e), T.isUndefined(t) || (this._get_config('verbose') ? t({
      status: -1,
      error: null
    }) : t(-1)), T.truncate(o, 255));
  }, Oe.prototype._get_config = function (e) {
    return this._mixpanel.get_config(e);
  }, Oe.prototype._identify_called = function () {
    return true === this._mixpanel._flags.identify_called;
  }, Oe.prototype._enqueue = function (e) {
    ye in e ? this._mixpanel.persistence._add_to_people_queue(ye, e) : me in e ? this._mixpanel.persistence._add_to_people_queue(me, e) : _e in e ? this._mixpanel.persistence._add_to_people_queue(_e, e) : be in e ? this._mixpanel.persistence._add_to_people_queue(be, e) : ke in e ? this._mixpanel.persistence._add_to_people_queue(ke, e) : xe in e ? this._mixpanel.persistence._add_to_people_queue(xe, e) : we in e ? this._mixpanel.persistence._add_to_people_queue(we, e) : L.error('Invalid call to _enqueue():', e);
  }, Oe.prototype._flush_one_queue = function (e, t, r, n) {
    var i = this,
      o = T.extend({}, this._mixpanel.persistence._get_queue(e)),
      s = o;
    T.isUndefined(o) || !T.isObject(o) || T.isEmptyObject(o) || (i._mixpanel.persistence._pop_from_people_queue(e, o), n && (s = n(o)), t.call(i, s, function (t, n) {
      0 === t && i._mixpanel.persistence._add_to_people_queue(e, o), T.isUndefined(r) || r(t, n);
    }));
  }, Oe.prototype._flush = function (e, t, r, n, i, o, s) {
    var a = this,
      c = this._mixpanel.persistence._get_queue(ke),
      u = this._mixpanel.persistence._get_queue(xe);
    if (this._flush_one_queue(ye, this.set, e), this._flush_one_queue(me, this.set_once, n), this._flush_one_queue(_e, this.unset, o, function (e) {
      return T.keys(e);
    }), this._flush_one_queue(be, this.increment, t), this._flush_one_queue(we, this.union, i), !T.isUndefined(c) && T.isArray(c) && c.length) {
      for (var l, p = function (e, t) {
          0 === e && a._mixpanel.persistence._add_to_people_queue(ke, l), T.isUndefined(r) || r(e, t);
        }, f = c.length - 1; f >= 0; f--) l = c.pop(), T.isEmptyObject(l) || a.append(l, p);
      a._mixpanel.persistence.save();
    }
    if (!T.isUndefined(u) && T.isArray(u) && u.length) {
      for (var h, d = function (e, t) {
          0 === e && a._mixpanel.persistence._add_to_people_queue(xe, h), T.isUndefined(s) || s(e, t);
        }, v = u.length - 1; v >= 0; v--) h = u.pop(), T.isEmptyObject(h) || a.remove(h, d);
      a._mixpanel.persistence.save();
    }
  }, Oe.prototype._is_reserved_property = function (e) {
    return '$distinct_id' === e || '$token' === e || '$device_id' === e || '$user_id' === e || '$had_persisted_distinct_id' === e;
  }, Oe.prototype.set = Oe.prototype.set, Oe.prototype.set_once = Oe.prototype.set_once, Oe.prototype.unset = Oe.prototype.unset, Oe.prototype.increment = Oe.prototype.increment, Oe.prototype.append = Oe.prototype.append, Oe.prototype.remove = Oe.prototype.remove, Oe.prototype.union = Oe.prototype.union, Oe.prototype.track_charge = Oe.prototype.track_charge, Oe.prototype.clear_charges = Oe.prototype.clear_charges, Oe.prototype.delete_user = Oe.prototype.delete_user, Oe.prototype.toString = Oe.prototype.toString;
  var Ee,
    qe,
    Ce = '__mps',
    Ie = '__mpso',
    Pe = '__mpus',
    Ae = '__mpa',
    Te = '__mpap',
    Le = '__mpr',
    Re = '__mpu',
    ze = '$people_distinct_id',
    De = '__alias',
    Fe = [Ce, Ie, Pe, Ae, Te, Le, Re, ze, De, '__timers'],
    Me = function (e) {
      ;
      this.props = {}, this.campaign_params_saved = false, e.persistence_name ? this.name = 'mp_' + e.persistence_name : this.name = 'mp_' + e.token + '_mixpanel';
      var t = e.persistence;
      'cookie' !== t && 'localStorage' !== t && (L.critical('Unknown persistence type ' + t + '; falling back to cookie'), t = e.persistence = 'cookie'), 'localStorage' === t && T.localStorage.is_supported() ? this.storage = T.localStorage : this.storage = T.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save();
    };
  Me.prototype.properties = function () {
    var e = {};
    T.each(this.props, function (t, r) {
      T.include(Fe, r) || (e[r] = t);
    })
    return e;
  }, Me.prototype.load = function () {
    if (!this.disabled) {
      var e = this.storage.parse(this.name);
      e && (this.props = T.extend({}, e));
    }
  }, Me.prototype.upgrade = function (e) {
    var t,
      r,
      n = e.upgrade;
    n && (t = 'mp_super_properties', 'string' == typeof n && (t = n), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, true), r && (this.props = T.extend(this.props, r.all, r.events))), e.cookie_name || 'mixpanel' === e.name || (t = 'mp_' + e.token + '_' + e.name, (r = this.storage.parse(t)) && (this.storage.remove(t), this.storage.remove(t, true), this.register_once(r))), this.storage === T.localStorage && (r = T.cookie.parse(this.name), T.cookie.remove(this.name), T.cookie.remove(this.name, true), r && this.register_once(r));
  }, Me.prototype.save = function () {
    this.disabled || this.storage.set(this.name, T.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain);
  }, Me.prototype.remove = function () {
    this.storage.remove(this.name, false, this.cookie_domain), this.storage.remove(this.name, true, this.cookie_domain);
  }, Me.prototype.clear = function () {
    this.remove(), this.props = {};
  }, Me.prototype.register_once = function (e, t, r) {
    return !!T.isObject(e) && (undefined === t && (t = 'None'), this.expire_days = undefined === r ? this.default_expiry : r, T.each(e, function (e, r) {
      ;
      this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e);
    }, this), this.save(), true);
  }, Me.prototype.register = function (e, t) {
    return !!T.isObject(e) && (this.expire_days = undefined === t ? this.default_expiry : t, T.extend(this.props, e), this.save(), true);
  }, Me.prototype.unregister = function (e) {
    e in this.props && (delete this.props[e], this.save());
  }, Me.prototype.update_campaign_params = function () {
    this.campaign_params_saved || (this.register_once(T.info.campaignParams()), this.campaign_params_saved = true);
  }, Me.prototype.update_search_keyword = function (e) {
    this.register(T.info.searchInfo(e));
  }, Me.prototype.update_referrer_info = function (e) {
    this.register_once({
      $initial_referrer: e || '$direct',
      $initial_referring_domain: T.info.referringDomain(e) || '$direct'
    }, '');
  }, Me.prototype.get_referrer_info = function () {
    return T.strip_empty_properties({
      $initial_referrer: this.props.$initial_referrer,
      $initial_referring_domain: this.props.$initial_referring_domain
    });
  }, Me.prototype.safe_merge = function (e) {
    T.each(this.props, function (t, r) {
      r in e || (e[r] = t);
    })
    return e;
  }, Me.prototype.update_config = function (e) {
    ;
    this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
  }, Me.prototype.set_disabled = function (e) {
    ;
    this.disabled = e, this.disabled ? this.remove() : this.save();
  }, Me.prototype.set_cookie_domain = function (e) {
    e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save());
  }, Me.prototype.set_cross_site = function (e) {
    e !== this.cross_site && (this.cross_site = e, this.remove(), this.save());
  }, Me.prototype.set_cross_subdomain = function (e) {
    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
  }, Me.prototype.get_cross_subdomain = function () {
    return this.cross_subdomain;
  }, Me.prototype.set_secure = function (e) {
    e !== this.secure && (this.secure = !!e, this.remove(), this.save());
  }, Me.prototype._add_to_people_queue = function (e, t) {
    var r = this._get_queue_key(e),
      n = t[e],
      i = this._get_or_create_queue(ye),
      o = this._get_or_create_queue(me),
      s = this._get_or_create_queue(_e),
      a = this._get_or_create_queue(be),
      c = this._get_or_create_queue(we),
      u = this._get_or_create_queue(xe, []),
      l = this._get_or_create_queue(ke, []);
    r === Ce ? (T.extend(i, n), this._pop_from_people_queue(be, n), this._pop_from_people_queue(we, n), this._pop_from_people_queue(_e, n)) : r === Ie ? (T.each(n, function (e, t) {
      t in o || (o[t] = e);
    }), this._pop_from_people_queue(_e, n)) : r === Pe ? T.each(n, function (e) {
      T.each([i, o, a, c], function (t) {
        e in t && delete t[e];
      }), T.each(l, function (t) {
        e in t && delete t[e];
      }), s[e] = true;
    }) : r === Ae ? (T.each(n, function (e, t) {
      t in i ? i[t] += e : (t in a || (a[t] = 0), a[t] += e);
    }, this), this._pop_from_people_queue(_e, n)) : r === Re ? (T.each(n, function (e, t) {
      T.isArray(e) && (t in c || (c[t] = []), c[t] = c[t].concat(e));
    }), this._pop_from_people_queue(_e, n)) : r === Le ? (u.push(n), this._pop_from_people_queue(ke, n)) : r === Te && (l.push(n), this._pop_from_people_queue(_e, n)), L.log('MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):'), L.log(t), this.save();
  }, Me.prototype._pop_from_people_queue = function (e, t) {
    var r = this._get_queue(e);
    T.isUndefined(r) || (T.each(t, function (t, n) {
      e === ke || e === xe ? T.each(r, function (e) {
        e[n] === t && delete e[n];
      }) : delete r[n];
    }, this), this.save());
  }, Me.prototype._get_queue_key = function (e) {
    return e === ye ? Ce : e === me ? Ie : e === _e ? Pe : e === be ? Ae : e === ke ? Te : e === xe ? Le : e === we ? Re : void L.error('Invalid queue:', e);
  }, Me.prototype._get_queue = function (e) {
    return this.props[this._get_queue_key(e)];
  }, Me.prototype._get_or_create_queue = function (e, t) {
    var r = this._get_queue_key(e);
    t = T.isUndefined(t) ? {} : t
    return this.props[r] || (this.props[r] = t);
  }, Me.prototype.set_event_timer = function (e, t) {
    var r = this.props.__timers || {};
    r[e] = t, this.props.__timers = r, this.save();
  }, Me.prototype.remove_event_timer = function (e) {
    var t = (this.props.__timers || {})[e];
    T.isUndefined(t) || (delete this.props.__timers[e], this.save())
    return t;
  };
  var Ne = function (e) {
      return e;
    },
    Be = function () {},
    Ue = 'mixpanel',
    $e = 'base64',
    // Ge = t.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
    Ge = true,
    We = !Ge && -1 === O.indexOf('MSIE') && -1 === O.indexOf('Mozilla'),
    He = null;
  w.sendBeacon && (He = function () {
    return w.sendBeacon.apply(w, arguments);
  });
  var Je = {
      api_host: 'https://api-js.mixpanel.com',
      api_method: 'POST',
      api_transport: 'XHR',
      api_payload_format: $e,
      app_host: 'https://mixpanel.com',
      cdn: 'https://cdn.mxpnl.com',
      cross_site_cookie: false,
      cross_subdomain_cookie: true,
      error_reporter: Be,
      persistence: 'cookie',
      persistence_name: '',
      cookie_domain: '',
      cookie_name: '',
      loaded: Be,
      store_google: true,
      save_referrer: true,
      test: false,
      verbose: false,
      img: false,
      debug: false,
      track_links_timeout: 300,
      cookie_expiration: 365,
      upgrade: false,
      disable_persistence: false,
      disable_cookie: false,
      secure_cookie: false,
      ip: true,
      opt_out_tracking_by_default: false,
      opt_out_persistence_by_default: false,
      opt_out_tracking_persistence_type: 'localStorage',
      opt_out_tracking_cookie_prefix: null,
      property_blacklist: [],
      xhr_headers: {},
      ignore_dnt: false,
      batch_requests: true,
      batch_size: 50,
      batch_flush_interval_ms: 5e3,
      batch_request_timeout_ms: 9e4,
      batch_autostart: true,
      hooks: {}
    },
    Ve = false,
    Qe = function () {},
    Ye = function (e, t, n) {
      var i,
        o = n === Ue ? qe : qe[n];
      if (o && 0 === Ee) i = o;else {
        if (o && !T.isArray(o)) return void L.error('You have already initialized ' + n);
        i = new Qe();
      }
      
      i._cached_groups = {}
      i._init(e, t, n)
      
      i.people = new Oe()
      i.people._init(i)
      r.DEBUG = r.DEBUG || i.get_config('debug')
      !T.isUndefined(o) && T.isArray(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o))
      return i;
    };
  Qe.prototype.init = function (e, t, r) {
    if (T.isUndefined(r)) this.report_error('You must name your new library: init(token, config, name)');else {
      if (r !== Ue) {
        var n = Ye(e, t, r);
        qe[r] = n
        n._loaded()
        return n;
      }
      this.report_error('You must initialize the main mixpanel object right after you include the Mixpanel js snippet');
    }
  }, Qe.prototype._init = function (e, r, n) {
    console.log('Qe_init', e, r, n)
    ;
    r = r || {}, this.__loaded = true, this.config = {};
    var i = {};
    if ('api_payload_format' in r || (r.api_host || Je.api_host).match(/\.mixpanel\.com$/) && (i.api_payload_format = 'json'), this.set_config(T.extend({}, Je, i, r, {
      name: n,
      token: e,
      callback_fn: (n === Ue ? n : 'mixpanel.' + n) + '._jsc'
    })), this._jsc = Be, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
      disable_all_events: false,
      identify_called: false
    }, this.request_batchers = {}, this._batch_requests = this.get_config('batch_requests'), this._batch_requests) if (T.localStorage.is_supported(true) && Ge) {
      if (this.init_batchers(), He && t.addEventListener) {
        var o = T.bind(function () {
          this.request_batchers.events.stopped || this.request_batchers.events.flush({
            unloading: true
          });
        }, this);
        t.addEventListener('pagehide', function (e) {
          e.persisted && o();
        }), t.addEventListener('visibilitychange', function () {
          'hidden' === x.visibilityState && o();
        });
      }
    } else this._batch_requests = false, L.log('Turning off Mixpanel request-queueing; needs XHR and localStorage support');
    this.persistence = this.cookie = new Me(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
    var s = T.UUID();
    this.get_distinct_id() || this.register_once({
      distinct_id: s,
      $device_id: s
    }, '');
  }, Qe.prototype._loaded = function () {
    this.get_config('loaded')(this), this._set_default_superprops();
  }, Qe.prototype._set_default_superprops = function () {
    this.persistence.update_search_keyword(x.referrer), this.get_config('store_google') && this.persistence.update_campaign_params(), this.get_config('save_referrer') && this.persistence.update_referrer_info(x.referrer);
  }, Qe.prototype._dom_loaded = function () {
    T.each(this.__dom_loaded_queue, function (e) {
      this._track_dom.apply(this, e);
    }, this), this.has_opted_out_tracking() || T.each(this.__request_queue, function (e) {
      this._send_request.apply(this, e);
    }, this), delete this.__dom_loaded_queue, delete this.__request_queue;
  }, Qe.prototype._track_dom = function (e, t) {
    // if (this.get_config('img')) return false;
    // if (!Ve) return false;
    var r = new e().init(this);
    // console.log('r', r)
    return r.track.apply(r, t);
  }, Qe.prototype._prepare_callback = function (e, t) {
    if (T.isUndefined(e)) return null;
    if (Ge) return function (r) {
      e(r, t);
    };
    var r = this._jsc,
      n = '' + Math.floor(1e8 * Math.random()),
      i = this.get_config('callback_fn') + '[' + n + ']';
    r[n] = function (i) {
      delete r[n], e(i, t);
    }
    return i;
  }, Qe.prototype._send_request = function (e, t, r, n) {
    // console.log('_send_request', e, t, r, n)
    var i = true;
    // console.log('We', We)
    if (We) return i;
    var o = {
        method: this.get_config('api_method'),
        transport: this.get_config('api_transport'),
        verbose: this.get_config('verbose')
      },
      s = null;
      // console.log(r.method)
    n || !T.isFunction(r) && 'string' != typeof r || (n = r, r = null), r = T.extend(o, r || {}), Ge || (r.method = 'GET');
    var a = 'POST' === r.method,
      c = He && a && 'sendbeacon' === r.transport.toLowerCase(),
      u = r.verbose;
    t.verbose && (u = true), this.get_config('test') && (t.test = 1), u && (t.verbose = 1), this.get_config('img') && (t.img = 1), Ge || (n ? t.callback = n : (u || this.get_config('test')) && (t.callback = '(function(){})')), t.ip = this.get_config('ip') ? 1 : 0, t._ = new Date().getTime().toString(), a && (s = 'data=' + encodeURIComponent(t.data), delete t.data), e += '?' + T.HTTPBuildQuery(t);
    var l = this;
    // console.log('t', t, Ge)
    // console.log('_send_request', t, Ge)
    if ('img' in t) {
      var p = x.createElement('img');
      p.src = e, x.body.appendChild(p);
    } else if (c) {
        console.log('11')
      try {
        i = He(e, s);
      } catch (e) {
        l.report_error(e), i = false;
      }
      try {
        n && n(i ? 1 : 0);
      } catch (e) {
        l.report_error(e);
      }
    } else if (Ge) try {
        // console.log('Ge', s)
      // console.log('s', s)
      // console.log(e)
      // console.log(this.get_config('xhr_headers'))
      // console.log(e)
      // console.log(h)
      return s
       console.log('XMLHttpRequest')
    //    sendString = sendstring + s
      var f = new XMLHttpRequest();
        
      f.open(r.method, e, true);
      var h = this.get_config('xhr_headers');
      if (a && (h['Content-Type'] = 'application/x-www-form-urlencoded'), T.each(h, function (e, t) {
        f.setRequestHeader(t, e);
      }), r.timeout_ms && undefined !== f.timeout) {
        f.timeout = r.timeout_ms;
        var d = new Date().getTime();
      }
      console.log('f', f.getResponseHeader())
    //   console.log('XMLHttpRequest')
      
    //   f.setRequestHeader('Origin', 'https://www.iploong.com'); 
    //   f.setRequestHeader('Referer', 'https://www.iploong.com/'); 
    //   ;
      
      f.withCredentials = true, f.onreadystatechange = function () {
        var e;
        if (4 === f.readyState) if (200 === f.status) {
                console.log('f.responseText', f.responseText)
          if (n) if (u) {
            var t;
            try {
              t = T.JSONDecode(f.responseText);
              
            } catch (e) {
              if (l.report_error(e), !r.ignore_json_errors) return;
              t = f.responseText;
            }
            n(t);
          } else n(Number(f.responseText));
        } else e = f.timeout && !f.status && new Date().getTime() - d >= f.timeout ? 'timeout' : 'Bad HTTP status: ' + f.status + ' ' + f.statusText, l.report_error(e), n && n(u ? {
          status: 0,
          error: e,
          xhr_req: f
        } : 0);
        // }
    
      }, f.send(s);
    } catch (e) {
        console.log('report_error')
      l.report_error(e), i = false;
    } else {
        console.log('111', e)
      var v = x.createElement('script');
      v.type = 'text/javascript', v.async = true, v.defer = true, v.src = e;
      var g = x.getElementsByTagName('script')[0];
      g.parentNode.insertBefore(v, g);
    }
    // console.log('s', s)
    return i;
  }, Qe.prototype._execute_array = function (e) {
    var t,
      r = [],
      n = [],
      i = [];
    T.each(e, function (e) {
      e && (t = e[0], T.isArray(t) ? i.push(e) : 'function' == typeof e ? e.call(this) : T.isArray(e) && 'alias' === t ? r.push(e) : T.isArray(e) && -1 !== t.indexOf('track') && 'function' == typeof this[t] ? i.push(e) : n.push(e));
    }, this);
    var o = function (e, t) {
      T.each(e, function (e) {
        if (T.isArray(e[0])) {
          var r = t;
          T.each(e, function (e) {
            r = r[e[0]].apply(r, e.slice(1));
          });
        } else this[e[0]].apply(this, e.slice(1));
      }, t);
    };
    o(r, this), o(n, this), o(i, this);
  }, Qe.prototype.are_batchers_initialized = function () {
    return !!this.request_batchers.events;
  }, Qe.prototype.init_batchers = function () {
    var e = this.get_config('token');
    if (!this.are_batchers_initialized()) {
      var t = T.bind(function (t) {
        return new ne('__mpq_' + e + t.queue_suffix, {
          libConfig: this.config,
          sendRequestFunc: T.bind(function (e, r, n) {
            this._send_request(this.get_config('api_host') + t.endpoint, this._encode_data_for_request(e), r, this._prepare_callback(n, e));
          }, this),
          beforeSendHook: T.bind(function (e) {
            return this._run_hook('before_send_' + t.type, e);
          }, this),
          errorReporter: this.get_config('error_reporter'),
          stopAllBatchingFunc: T.bind(this.stop_batch_senders, this)
        });
      }, this);
      this.request_batchers = {
        events: t({
          type: 'events',
          endpoint: '/track/',
          queue_suffix: '_ev'
        }),
        people: t({
          type: 'people',
          endpoint: '/engage/',
          queue_suffix: '_pp'
        }),
        groups: t({
          type: 'groups',
          endpoint: '/groups/',
          queue_suffix: '_gr'
        })
      };
    }
    this.get_config('batch_autostart') && this.start_batch_senders();
  }, Qe.prototype.start_batch_senders = function () {
    this.are_batchers_initialized() && (this._batch_requests = true, T.each(this.request_batchers, function (e) {
      e.start();
    }));
  }, Qe.prototype.stop_batch_senders = function () {
    ;
    this._batch_requests = false, T.each(this.request_batchers, function (e) {
      e.stop(), e.clear();
    });
  }, Qe.prototype.push = function (e) {
    this._execute_array([e]);
  }, Qe.prototype.disable = function (e) {
    undefined === e ? this._flags.disable_all_events = true : this.__disabled_events = this.__disabled_events.concat(e);
  }, Qe.prototype._encode_data_for_request = function (e) {
    var t = T.JSONEncode(e);
    this.get_config('api_payload_format') === $e && (t = T.base64Encode(t))
    return {
      data: t
    };
  }, Qe.prototype._track_or_batch = function (e, t) {
    // console.log('_track_or_batch')
    var r = T.truncate(e.data, 255),
      n = e.endpoint,
      i = e.batcher,
      o = e.should_send_immediately,
      s = e.send_request_options || {};
    t = t || Be;
    // debugger
    // console.log(e.type, r)
    var a = true,
      
      c = T.bind(function () {
        s.skip_hooks || (r = this._run_hook('before_send_' + e.type, r))
        return r ? (L.log('MIXPANEL REQUEST:'), L.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null;
      }, this);
    // console.log(this._batch_requests && !o)
    this._batch_requests && !o ? i.enqueue(r, function (e) {
      // console.log('e', t)
      e ? t(1, r) : c();
    }) : a = c()
    return a && r;
  }, Qe.prototype.track = (function (e, t, r, n) {
    
    // debugger
    n || 'function' != typeof r || (n = r, r = null);
    var i = (r = r || {}).transport;
    i && (r.transport = i);
    var o = r.send_immediately;
    
    if ('function' != typeof n && (n = Be), T.isUndefined(e)) this.report_error('No event name provided to mixpanel.track');else {
      if (!this._event_is_disabled(e)) {
        // console.log('_track_or_batch')
        ;
        
        (t = t || {}).token = this.get_config('token');
        var s = this.persistence.remove_event_timer(e);
        if (!T.isUndefined(s)) {
          var a = new Date().getTime() - s;
          t.$duration = parseFloat((a / 1e3).toFixed(3));
        }
        this._set_default_superprops(), t = T.extend({}, T.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
        var c = this.get_config('property_blacklist');
        T.isArray(c) ? T.each(c, function (e) {
          delete t[e];
        }) : this.report_error('Invalid value for property_blacklist config: ' + c);
        var u = {
          event: e,
          properties: t
        };
        // console.log(u)
        // console.log('_track_or_batch')
        // console.log(n)
        return this._track_or_batch({
          type: 'events',
          data: u,
          endpoint: this.get_config('api_host') + '/track/',
          batcher: this.request_batchers.events,
          should_send_immediately: o,
          send_request_options: r
        }, n);
      }
      n(0);
    }
  }), Qe.prototype.set_group = ce(function (e, t, r) {
    T.isArray(t) || (t = [t]);
    var n = {};
    n[e] = t
    this.register(n)
    return this.people.set(e, t, r);
  }), Qe.prototype.add_group = ce(function (e, t, r) {
    var n = this.get_property(e);
    if (undefined === n) {
      var i = {};
      i[e] = [t], this.register(i);
    } else -1 === n.indexOf(t) && (n.push(t), this.register(i));
    return this.people.union(e, t, r);
  }), Qe.prototype.remove_group = ce(function (e, t, r) {
    var n = this.get_property(e);
    if (undefined !== n) {
      var i = n.indexOf(t);
      i > -1 && (n.splice(i, 1), this.register({
        group_key: n
      })), 0 === n.length && this.unregister(e);
    }
    return this.people.remove(e, t, r);
  }), Qe.prototype.track_with_groups = ce(function (e, t, r, n) {
    var i = T.extend({}, t || {});
    T.each(r, function (e, t) {
      null != e && (i[t] = e);
    })
    return this.track(e, i, n);
  }), Qe.prototype._create_map_key = function (e, t) {
    return e + '_' + JSON.stringify(t);
  }, Qe.prototype._remove_group_from_cache = function (e, t) {
    delete this._cached_groups[this._create_map_key(e, t)];
  }, Qe.prototype.get_group = function (e, t) {
    var r = this._create_map_key(e, t),
      n = this._cached_groups[r];
    undefined !== n && n._group_key === e && n._group_id === t || ((n = new Se())._init(this, e, t), this._cached_groups[r] = n)
    return n;
  }, Qe.prototype.track_pageview = function (e) {
    // console.log('e', T.info.pageviewInfo(e))
    return this.track('mp_page_view', T.info.pageviewInfo(e))
    T.isUndefined(e) && (e = x.location.href), this.track('mp_page_view', T.info.pageviewInfo(e));
  }, Qe.prototype.track_links = function () {
    return this._track_dom.call(this, V, arguments);
  }, Qe.prototype.track_forms = function () {
    return this._track_dom.call(this, Q, arguments);
  }, Qe.prototype.time_event = function (e) {
    T.isUndefined(e) ? this.report_error('No event name provided to mixpanel.time_event') : this._event_is_disabled(e) || this.persistence.set_event_timer(e, new Date().getTime());
  };
  var Xe = {
      persistent: true
    },
    Ke = function (e) {
      var t;
      t = T.isObject(e) ? e : T.isUndefined(e) ? {} : {
        days: e
      }
      return T.extend({}, Xe, t);
    };
  Qe.prototype.register = function (e, t) {
    var r = Ke(t);
    r.persistent ? this.persistence.register(e, r.days) : T.extend(this.unpersisted_superprops, e);
  }, Qe.prototype.register_once = function (e, t, r) {
    var n = Ke(r);
    n.persistent ? this.persistence.register_once(e, t, n.days) : (undefined === t && (t = 'None'), T.each(e, function (e, r) {
      ;
      this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e);
    }, this));
  }, Qe.prototype.unregister = function (e, t) {
    ;
    (t = Ke(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e];
  }, Qe.prototype._register_single = function (e, t) {
    var r = {};
    r[e] = t, this.register(r);
  }, Qe.prototype.identify = function (e, t, r, n, i, o, s, a) {
    var c = this.get_distinct_id();
    if (this.register({
      $user_id: e
    }), !this.get_property('$device_id')) {
      var u = c;
      this.register_once({
        $had_persisted_distinct_id: true,
        $device_id: u
      }, '');
    }
    e !== c && e !== this.get_property(De) && (this.unregister(De), this.register({
      distinct_id: e
    })), this._flags.identify_called = true, this.people._flush(t, r, n, i, o, s, a), e !== c && this.track('$identify', {
      distinct_id: e,
      $anon_distinct_id: c
    }, {
      skip_hooks: true
    });
  }, Qe.prototype.reset = function () {
    this.persistence.clear(), this._flags.identify_called = false;
    var e = T.UUID();
    this.register_once({
      distinct_id: e,
      $device_id: e
    }, '');
  }, Qe.prototype.get_distinct_id = function () {

    return this.get_property('distinct_id');
  }, Qe.prototype.alias = function (e, t) {
    if (e === this.get_property(ze)) return -2;
    var r = this;
    T.isUndefined(t) && (t = this.get_distinct_id())
    return e !== t ? (this._register_single(De, e), this.track('$create_alias', {
      alias: e,
      distinct_id: t
    }, {
      skip_hooks: true
    }, function () {
      r.identify(e);
    })) : (this.report_error('alias matches current distinct_id - skipping api call.'), this.identify(e), -1);
  }, Qe.prototype.name_tag = function (e) {
    this._register_single('mp_name_tag', e);
  }, Qe.prototype.set_config = function (e) {
    T.isObject(e) && (T.extend(this.config, e), e.batch_size && T.each(this.request_batchers, function (e) {
      e.resetBatchSize();
    }), this.get_config('persistence_name') || (this.config.persistence_name = this.config.cookie_name), this.get_config('disable_persistence') || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), r.DEBUG = r.DEBUG || this.get_config('debug'));
  }, Qe.prototype.get_config = function (e) {
    return this.config[e];
  }, Qe.prototype._run_hook = function (e) {
    var t = (this.config.hooks[e] || Ne).apply(this, m.call(arguments, 1));
    undefined === t && (this.report_error(e + ' hook did not return a value'), t = null)
    return t;
  }, Qe.prototype.get_property = function (e) {
    // console.log('get_property', e, this.persistence)
    return this.persistence.props[e];
  }, Qe.prototype.toString = function () {
    var e = this.get_config('name');
    e !== Ue && (e = 'mixpanel.' + e)
    return e;
  }, Qe.prototype._event_is_disabled = function (e) {
    return T.isBlockedUA(O) || this._flags.disable_all_events || T.include(this.__disabled_events, e);
  }, Qe.prototype._gdpr_init = function () {
    
    'localStorage' === this.get_config('opt_out_tracking_persistence_type') && T.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
      persistence_type: 'cookie'
    }) && this.opt_in_tracking({
      enable_persistence: false
    }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
      persistence_type: 'cookie'
    }) && this.opt_out_tracking({
      clear_persistence: false
    }), this.clear_opt_in_out_tracking({
      persistence_type: 'cookie',
      enable_persistence: false
    })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
      clear_persistence: true
    }) : this.has_opted_in_tracking() || !this.get_config('opt_out_tracking_by_default') && !T.cookie.get('mp_optout') || (T.cookie.remove('mp_optout'), this.opt_out_tracking({
      clear_persistence: this.get_config('opt_out_persistence_by_default')
    }));
  }, Qe.prototype._gdpr_update_persistence = function (e) {
    var t;
    if (e && e.clear_persistence) t = true;else {
      if (!e || !e.enable_persistence) return;
      t = false;
    }
    this.get_config('disable_persistence') || this.persistence.disabled === t || this.persistence.set_disabled(t), t && T.each(this.request_batchers, function (e) {
      e.clear();
    });
  }, Qe.prototype._gdpr_call_func = function (e, t) {
    // console.log('e', e, t)
    t = T.extend({
      track: T.bind(this.track, this),
      persistence_type: this.get_config('opt_out_tracking_persistence_type'),
      cookie_prefix: this.get_config('opt_out_tracking_cookie_prefix'),
      cookie_expiration: this.get_config('cookie_expiration'),
      cross_site_cookie: this.get_config('cross_site_cookie'),
      cross_subdomain_cookie: this.get_config('cross_subdomain_cookie'),
      cookie_domain: this.get_config('cookie_domain'),
      secure_cookie: this.get_config('secure_cookie'),
      ignore_dnt: this.get_config('ignore_dnt')
    }, t)
    T.localStorage.is_supported() || (t.persistence_type = 'cookie')
    return e(this.get_config('token'), {
      track: t.track,
      trackEventName: t.track_event_name,
      trackProperties: t.track_properties,
      persistenceType: t.persistence_type,
      persistencePrefix: t.cookie_prefix,
      cookieDomain: t.cookie_domain,
      cookieExpiration: t.cookie_expiration,
      crossSiteCookie: t.cross_site_cookie,
      crossSubdomainCookie: t.cross_subdomain_cookie,
      secureCookie: t.secure_cookie,
      ignoreDnt: t.ignore_dnt
    });
  }, Qe.prototype.opt_in_tracking = function (e) {
    ;
    e = T.extend({
      enable_persistence: true
    }, e), this._gdpr_call_func(ie, e), this._gdpr_update_persistence(e);
  }, Qe.prototype.opt_out_tracking = function (e) {
    ;
    (e = T.extend({
      clear_persistence: true,
      delete_user: true
    }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(oe, e), this._gdpr_update_persistence(e);
  }, Qe.prototype.has_opted_in_tracking = function (e) {
    return this._gdpr_call_func(se, e);
  }, Qe.prototype.has_opted_out_tracking = function (e) {
    return this._gdpr_call_func(ae, e);
  }, Qe.prototype.clear_opt_in_out_tracking = function (e) {
    ;
    e = T.extend({
      enable_persistence: true
    }, e), this._gdpr_call_func(pe, e), this._gdpr_update_persistence(e);
  }, Qe.prototype.report_error = function (e, t) {
    L.error.apply(L.error, arguments);
    try {
      t || e instanceof Error || (e = new Error(e)), this.get_config('error_reporter')(e, t);
    } catch (t) {
      L.error(t);
    }
  }, Qe.prototype.init = Qe.prototype.init, Qe.prototype.reset = Qe.prototype.reset, Qe.prototype.disable = Qe.prototype.disable, Qe.prototype.time_event = Qe.prototype.time_event, Qe.prototype.track = Qe.prototype.track, Qe.prototype.track_links = Qe.prototype.track_links, Qe.prototype.track_forms = Qe.prototype.track_forms, Qe.prototype.track_pageview = Qe.prototype.track_pageview, Qe.prototype.register = Qe.prototype.register, Qe.prototype.register_once = Qe.prototype.register_once, Qe.prototype.unregister = Qe.prototype.unregister, Qe.prototype.identify = Qe.prototype.identify, Qe.prototype.alias = Qe.prototype.alias, Qe.prototype.name_tag = Qe.prototype.name_tag, Qe.prototype.set_config = Qe.prototype.set_config, Qe.prototype.get_config = Qe.prototype.get_config, Qe.prototype.get_property = Qe.prototype.get_property, Qe.prototype.get_distinct_id = Qe.prototype.get_distinct_id, Qe.prototype.toString = Qe.prototype.toString, Qe.prototype.opt_out_tracking = Qe.prototype.opt_out_tracking, Qe.prototype.opt_in_tracking = Qe.prototype.opt_in_tracking, Qe.prototype.has_opted_out_tracking = Qe.prototype.has_opted_out_tracking, Qe.prototype.has_opted_in_tracking = Qe.prototype.has_opted_in_tracking, Qe.prototype.clear_opt_in_out_tracking = Qe.prototype.clear_opt_in_out_tracking, Qe.prototype.get_group = Qe.prototype.get_group, Qe.prototype.set_group = Qe.prototype.set_group, Qe.prototype.add_group = Qe.prototype.add_group, Qe.prototype.remove_group = Qe.prototype.remove_group, Qe.prototype.track_with_groups = Qe.prototype.track_with_groups, Qe.prototype.start_batch_senders = Qe.prototype.start_batch_senders, Qe.prototype.stop_batch_senders = Qe.prototype.stop_batch_senders, Me.prototype.properties = Me.prototype.properties, Me.prototype.update_search_keyword = Me.prototype.update_search_keyword, Me.prototype.update_referrer_info = Me.prototype.update_referrer_info, Me.prototype.get_cross_subdomain = Me.prototype.get_cross_subdomain, Me.prototype.clear = Me.prototype.clear;
  var Ze = {},
    et = (Ee = 0, (qe = new Qe()).init = function (e, r, n) {
      // console.log('init', Ye(e, r, Ue), Ue)
      if (n) return qe[n];
      var i = qe;
      Ze.mixpanel ? i = Ze.mixpanel : e && ((i = Ye(e, r, Ue))._loaded(), Ze.mixpanel = i), qe = i, 1 === Ee && (t.mixpanel = qe), T.each(Ze, function (e, t) {
        t !== Ue && (qe[t] = e);
      }), qe._ = T;
    }, qe.init(), function () {
      function e() {
        e.done || (e.done = true, Ve = true, We = false, T.each(Ze, function (e) {
          e._dom_loaded();
        }));
      }
      if (x.addEventListener) 'complete' === x.readyState ? e() : x.addEventListener('DOMContentLoaded', e, false);else if (x.attachEvent) {
        x.attachEvent('onreadystatechange', e);
        var r = false;
        try {
          r = null === t.frameElement;
        } catch (e) {}
        x.documentElement.doScroll && r && function t() {
          try {
            x.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(t, 1);
          }
          e();
        }();
      }
      T.register_event(t, 'load', e, true);
    }(), qe);
  // e.exports = et;
// console.log(et, et.init)
et.init('7ccb86f5c2939026a4b5de83b5971ed9', undefined)

module.exports = {
  et
}
// const test = et.track('$identify', {
//   distinct_id: et.get_distinct_id(),
//   $anon_distinct_id: et.get_distinct_id()
// }, {
//   skip_hooks: true
// })
// et.track('$create_alias', {
//     alias: et.get_distinct_id(),
//     distinct_id: et.get_distinct_id()
//   }, {
//     skip_hooks: true
//   }, function () {
//     et.identify(et.get_distinct_id());
//   })
// console.log(test)

// console.log(et.track_pageview('https://www.iploong.com/'))
// et.track_pageview('https://www.iploong.com/')
// console.log('sendstring', sendString)
// et.track_links()
// et._gdpr_init()

