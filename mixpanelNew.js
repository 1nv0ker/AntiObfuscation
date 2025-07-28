const XMLHttpRequest = require('xhr2');
var t,
          r = {
            DEBUG: false,
            LIB_VERSION: "2.45.0"
          };
        if ("undefined" == typeof window) {
          var n = {
            hostname: "https://www.iploong.com/"
          };
          t = {
            navigator: {
              userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0"
            },
            document: {
              location: n,
              referrer: ""
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
          a,
          s,
          u,
          c,
          l,
          p,
          f,
          h,
          d,
          m,
          g,
          _,
          v,
          y,
          b = Array.prototype,
          k = Function.prototype,
          S = Object.prototype,
          w = b.slice,
          x = S.toString,
          O = S.hasOwnProperty,
          E = t.console,
          C = t.navigator,
          P = t.document,
          T = t.opera,
          A = t.screen,
          I = C.userAgent,
          M = k.bind,
          R = b.forEach,
          F = b.indexOf,
          L = b.map,
          D = Array.isArray,
          j = {},
          N = {
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            }
          },
          B = {
            log: function () {
              if (r.DEBUG && !N.isUndefined(E) && E) try {
                E.log.apply(E, arguments);
              } catch (e) {
                N.each(arguments, function (e) {
                  E.log(e);
                });
              }
            },
            warn: function () {
              if (r.DEBUG && !N.isUndefined(E) && E) {
                var e = ["Mixpanel warning:"].concat(N.toArray(arguments));
                try {
                  E.warn.apply(E, e);
                } catch (t) {
                  N.each(e, function (e) {
                    E.warn(e);
                  });
                }
              }
            },
            error: function () {
              if (r.DEBUG && !N.isUndefined(E) && E) {
                var e = ["Mixpanel error:"].concat(N.toArray(arguments));
                try {
                  E.error.apply(E, e);
                } catch (t) {
                  N.each(e, function (e) {
                    E.error(e);
                  });
                }
              }
            },
            critical: function () {
              if (!N.isUndefined(E) && E) {
                var e = ["Mixpanel error:"].concat(N.toArray(arguments));
                try {
                  E.error.apply(E, e);
                } catch (t) {
                  N.each(e, function (e) {
                    E.error(e);
                  });
                }
              }
            }
          },
          q = function (e, t) {
            return function () {
              arguments[0] = "[" + t + "] " + arguments[0]
              return e.apply(B, arguments);
            };
          },
          U = function (e) {
            return {
              log: q(B.log, e),
              error: q(B.error, e),
              critical: q(B.critical, e)
            };
          };
        N.bind = function (e, t) {
          var r, n;
          if (M && e.bind === M) return M.apply(e, w.call(arguments, 1));
          if (!N.isFunction(e)) throw new TypeError();
          r = w.call(arguments, 2)
          n = function () {
            if (!(this instanceof n)) return e.apply(t, r.concat(w.call(arguments)));
            var i = {};
            i.prototype = e.prototype;
            var o = new i();
            i.prototype = null;
            var a = e.apply(o, r.concat(w.call(arguments)));
            return Object(a) === a ? a : o;
          }
          return n;
        }, N.each = function (e, t, r) {
          if (null != e) if (R && e.forEach === R) e.forEach(t, r);else if (e.length === +e.length) {
            for (var n = 0, i = e.length; n < i; n++) if (n in e && t.call(r, e[n], n, e) === j) return;
          } else for (var o in e) if (O.call(e, o) && t.call(r, e[o], o, e) === j) return;
        }, N.extend = function (e) {
          N.each(w.call(arguments, 1), function (t) {
            for (var r in t) undefined !== t[r] && (e[r] = t[r]);
          })
          return e;
        }, N.isArray = D || function (e) {
          return "[object Array]" === x.call(e);
        }, N.isFunction = function (e) {
          try {
            return /^\s*\bfunction\b/.test(e);
          } catch (e) {
            return false;
          }
        }, N.isArguments = function (e) {
          return !(!e || !O.call(e, "callee"));
        }, N.toArray = function (e) {
          return e ? e.toArray ? e.toArray() : N.isArray(e) || N.isArguments(e) ? w.call(e) : N.values(e) : [];
        }, N.map = function (e, t, r) {
          if (L && e.map === L) return e.map(t, r);
          var n = [];
          N.each(e, function (e) {
            n.push(t.call(r, e));
          })
          return n;
        }, N.keys = function (e) {
          var t = [];
          null === e || N.each(e, function (e, r) {
            t[t.length] = r;
          })
          return t;
        }, N.values = function (e) {
          var t = [];
          null === e || N.each(e, function (e) {
            t[t.length] = e;
          })
          return t;
        }, N.include = function (e, t) {
          var r = false;
          return null === e ? r : F && e.indexOf === F ? -1 != e.indexOf(t) : (N.each(e, function (e) {
            if (r || (r = e === t)) return j;
          }), r);
        }, N.includes = function (e, t) {
          return -1 !== e.indexOf(t);
        }, N.inherit = function (e, t) {
          e.prototype = new t()
          e.prototype.constructor = e
          e.superclass = t.prototype
          return e;
        }, N.isObject = function (e) {
          return e === Object(e) && !N.isArray(e);
        }, N.isEmptyObject = function (e) {
          if (N.isObject(e)) {
            for (var t in e) if (O.call(e, t)) return false;
            return true;
          }
          return false;
        }, N.isUndefined = function (e) {
          return undefined === e;
        }, N.isString = function (e) {
          return "[object String]" == x.call(e);
        }, N.isDate = function (e) {
          return "[object Date]" == x.call(e);
        }, N.isNumber = function (e) {
          return "[object Number]" == x.call(e);
        }, N.isElement = function (e) {
          return !(!e || 1 !== e.nodeType);
        }, N.encodeDates = function (e) {
          N.each(e, function (t, r) {
            N.isDate(t) ? e[r] = N.formatDate(t) : N.isObject(t) && (e[r] = N.encodeDates(t));
          })
          return e;
        }, N.timestamp = function () {
          Date.now = Date.now || function () {
            return +new Date();
          }
          return Date.now();
        }, N.formatDate = function (e) {
          function t(e) {
            return e < 10 ? "0" + e : e;
          }
          return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds());
        }, N.strip_empty_properties = function (e) {
          var t = {};
          N.each(e, function (e, r) {
            N.isString(e) && e.length > 0 && (t[r] = e);
          })
          return t;
        }, N.truncate = function (e, t) {
          var r;
          "string" == typeof e ? r = e.slice(0, t) : N.isArray(e) ? (r = [], N.each(e, function (e) {
            r.push(N.truncate(e, t));
          })) : N.isObject(e) ? (r = {}, N.each(e, function (e, n) {
            r[n] = N.truncate(e, t);
          })) : r = e
          return r;
        }, N.JSONEncode = function (e) {
          var t = e,
            r = function (e) {
              var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r = {
                  "\b": "\\b",
                  "\t": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\"
                };
              t.lastIndex = 0
              return t.test(e) ? '"' + e.replace(t, function (e) {
                var t = r[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) + '"' : '"' + e + '"';
            },
            n = function (e, t) {
              var i = "",
                o = "    ",
                a = 0,
                s = "",
                u = "",
                c = 0,
                l = i,
                p = [],
                f = t[e];
              switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), typeof f) {
                case "string":
                  return r(f);
                case "number":
                  return isFinite(f) ? String(f) : "null";
                case "boolean":
                case "null":
                  return String(f);
                case "object":
                  if (!f) return "null";
                  if (i += o, p = [], "[object Array]" === x.apply(f)) {
                    for (c = f.length, a = 0; a < c; a += 1) p[a] = n(a, f) || "null";
                    u = 0 === p.length ? "[]" : i ? "[\n" + i + p.join(",\n" + i) + "\n" + l + "]" : "[" + p.join(",") + "]"
                    i = l
                    return u;
                  }
                  for (s in f) O.call(f, s) && (u = n(s, f), u && p.push(r(s) + (i ? ": " : ":") + u));
                  u = 0 === p.length ? "{}" : i ? "{" + p.join(",") + l + "}" : "{" + p.join(",") + "}"
                  i = l
                  return u;
              }
            };
          return n("", {
            "": t
          });
        }, N.JSONDecode = (u = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "\t"
        }, c = function (e) {
          var t = new SyntaxError(e);
          throw t.at = i, t.text = a, t;
        }, l = function (e) {
          e && e !== o && c("Expected '" + e + "' instead of '" + o + "'")
          o = a.charAt(i)
          i += 1
          return o;
        }, p = function () {
          var e,
            t = "";
          for ("-" === o && (t = "-", l("-")); o >= "0" && o <= "9";) t += o, l();
          if ("." === o) for (t += "."; l() && o >= "0" && o <= "9";) t += o;
          if ("e" === o || "E" === o) for (t += o, l(), "-" !== o && "+" !== o || (t += o, l()); o >= "0" && o <= "9";) t += o, l();
          if (e = +t, isFinite(e)) return e;
          c("Bad number");
        }, f = function () {
          var e,
            t,
            r,
            n = "";
          if ('"' === o) for (; l();) {
            if ('"' === o) return n;
            if ("\\" === o) {
              if (l(), "u" === o) {
                for (r = 0, t = 0; t < 4 && (e = parseInt(l(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                n += String.fromCharCode(r);
              } else {
                if ("string" != typeof u[o]) break;
                n += u[o];
              }
            } else n += o;
          }
          c("Bad string");
        }, h = function () {
          for (; o && o <= " ";) l();
        }, d = function () {
          switch (o) {
            case "t":
              l("t")
              l("r")
              l("u")
              l("e")
              return true;
            case "f":
              l("f")
              l("a")
              l("l")
              l("s")
              l("e")
              return false;
            case "n":
              l("n")
              l("u")
              l("l")
              l("l")
              return null;
          }
          c('Unexpected "' + o + '"');
        }, m = function () {
          var e = [];
          if ("[" === o) {
            if (l("["), h(), "]" === o) return e;
            for (; o;) {
              if (e.push(s()), h(), "]" === o) return e;
              l(","), h();
            }
          }
          c("Bad array");
        }, g = function () {
          var e,
            t = {};
          if ("{" === o) {
            if (l("{"), h(), "}" === o) return t;
            for (; o;) {
              if (e = f(), h(), l(":"), Object.hasOwnProperty.call(t, e) && c('Duplicate key "' + e + '"'), t[e] = s(), h(), "}" === o) return t;
              l(","), h();
            }
          }
          c("Bad object");
        }, s = function () {
          switch (h(), o) {
            case "{":
              return g();
            case "[":
              return m();
            case '"':
              return f();
            case "-":
              return p();
            default:
              return o >= "0" && o <= "9" ? p() : d();
          }
        }, function (e) {
          var t;
          a = e
          i = 0
          o = " "
          t = s()
          h()
          o && c("Syntax error")
          return t;
        }), N.base64Encode = function (e) {
          var t,
            r,
            n,
            i,
            o,
            a,
            s,
            u,
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            l = 0,
            p = 0,
            f = "",
            h = [];
          if (!e) return e;
          e = N.utf8Encode(e);
          do {
            t = e.charCodeAt(l++), r = e.charCodeAt(l++), n = e.charCodeAt(l++), u = t << 16 | r << 8 | n, i = u >> 18 & 63, o = u >> 12 & 63, a = u >> 6 & 63, s = 63 & u, h[p++] = c.charAt(i) + c.charAt(o) + c.charAt(a) + c.charAt(s);
          } while (l < e.length);
          switch (f = h.join(""), e.length % 3) {
            case 1:
              f = f.slice(0, -2) + "==";
              break;
            case 2:
              f = f.slice(0, -1) + "=";
          }
          return f;
        }, N.utf8Encode = function (e) {
          e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
          var t,
            r,
            n,
            i = "",
            o = 0;
          for (t = r = 0, o = e.length, n = 0; n < o; n++) {
            var a = e.charCodeAt(n),
              s = null;
            a < 128 ? r++ : s = a > 127 && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), null !== s && (r > t && (i += e.substring(t, r)), i += s, t = r = n + 1);
          }
          r > t && (i += e.substring(t, e.length))
          return i;
        }, N.UUID = (_ = function () {
          for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++;
          return e.toString(16) + t.toString(16);
        }, v = function () {
          return Math.random().toString(16).replace(".", "");
        }, y = function () {
          var e,
            t,
            r = I,
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
        }, function () {
          var e = (1920 * 1080).toString(16);
          return _() + "-" + v() + "-" + y() + "-" + e + "-" + _();
        });
        var G = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
        N.isBlockedUA = function (e) {
          var t;
          for (e = e.toLowerCase(), t = 0; t < G.length; t++) if (-1 !== e.indexOf(G[t])) return true;
          return false;
        }, N.HTTPBuildQuery = function (e, t) {
          var r,
            n,
            i = [];
          N.isUndefined(t) && (t = "&")
          N.each(e, function (e, t) {
            r = encodeURIComponent(e.toString()), n = encodeURIComponent(t), i[i.length] = n + "=" + r;
          })
          return i.join(t);
        }, N.getQueryParam = function (e, t) {
          t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
          var r = "[\\?&]" + t + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(e);
          if (null === i || i && "string" != typeof i[1] && i[1].length) return "";
          var o = i[1];
          try {
            o = decodeURIComponent(o);
          } catch (e) {
            B.error("Skipping decoding for malformed query param: " + o);
          }
          return o.replace(/\+/g, " ");
        }, N.cookie = {
          get: function (e) {
            for (var t = e + "=", r = P.cookie.split(";"), n = 0; n < r.length; n++) {
              for (var i = r[n]; " " == i.charAt(0);) i = i.substring(1, i.length);
              if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length));
            }
            return null;
          },
          parse: function (e) {
            var t;
            try {
              t = N.JSONDecode(N.cookie.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set_seconds: function (e, t, r, n, i, o, a) {
            var s = "",
              u = "",
              c = "";
            if (a) s = "; domain=" + a;else if (n) {
              var l = J(P.location.hostname);
              s = l ? "; domain=." + l : "";
            }
            if (r) {
              var p = new Date();
              p.setTime(p.getTime() + 1e3 * r), u = "; expires=" + p.toGMTString();
            }
            o && (i = true, c = "; SameSite=None"), i && (c += "; secure"), P.cookie = e + "=" + encodeURIComponent(t) + u + "; path=/" + s + c;
          },
          set: function (e, t, r, n, i, o, a) {
            var s = "",
              u = "",
              c = "";
            if (a) s = "; domain=" + a;else if (n) {
              var l = J(P.location.hostname);
              s = l ? "; domain=." + l : "";
            }
            if (r) {
              var p = new Date();
              p.setTime(p.getTime() + 24 * r * 60 * 60 * 1e3), u = "; expires=" + p.toGMTString();
            }
            o && (i = true, c = "; SameSite=None"), i && (c += "; secure");
            var f = e + "=" + encodeURIComponent(t) + u + "; path=/" + s + c;
            P.cookie = f
            return f;
          },
          remove: function (e, t, r) {
            N.cookie.set(e, "", -1, t, false, false, r);
          }
        };
        var z = null,
          $ = function (e, t) {
            if (null !== z && !t) return z;
            var r = true;
            try {
              e = e || window.localStorage;
              var n = "__mplss_" + H(8),
                i = "xyz";
              e.setItem(n, i), e.getItem(n) !== i && (r = false), e.removeItem(n);
            } catch (e) {
              r = false;
            }
            z = r
            return r;
          };
        N.localStorage = {
          is_supported: function (e) {
            var t = $(null, e);
            t || B.error("localStorage unsupported; falling back to cookie store")
            return t;
          },
          error: function (e) {
            B.error("localStorage error: " + e);
          },
          get: function (e) {
            try {
              return window.localStorage.getItem(e);
            } catch (e) {
              N.localStorage.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return N.JSONDecode(N.localStorage.get(e)) || {};
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              window.localStorage.setItem(e, t);
            } catch (e) {
              N.localStorage.error(e);
            }
          },
          remove: function (e) {
            try {
              window.localStorage.removeItem(e);
            } catch (e) {
              N.localStorage.error(e);
            }
          }
        }, N.register_event = function () {
          var e = function (e, r, n, i, o) {
            if (e) {
              if (e.addEventListener && !i) e.addEventListener(r, n, !!o);else {
                var a = "on" + r,
                  s = e[a];
                e[a] = t(e, n, s);
              }
            } else B.error("No valid element provided to register_event");
          };
          function t(e, t, n) {
            var i = function (i) {
              if (i = i || r(window.event), i) {
                var o,
                  a,
                  s = true;
                N.isFunction(n) && (o = n(i))
                a = t.call(e, i)
                false !== o && false !== a || (s = false)
                return s;
              }
            };
            return i;
          }
          function r(e) {
            e && (e.preventDefault = r.preventDefault, e.stopPropagation = r.stopPropagation)
            return e;
          }
          r.preventDefault = function () {
            this.returnValue = false;
          }
          r.stopPropagation = function () {
            this.cancelBubble = true;
          }
          return e;
        }();
        var W = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
        N.dom_query = function () {
          function e(e) {
            return e.all ? e.all : e.getElementsByTagName("*");
          }
          var t = /[\t\r\n]/g;
          function r(e, r) {
            var n = " " + r + " ";
            return (" " + e.className + " ").replace(t, " ").indexOf(n) >= 0;
          }
          function n(t) {
            if (!P.getElementsByTagName) return [];
            var n,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              p,
              f,
              h = t.split(" "),
              d = [P];
            for (u = 0; u < h.length; u++) if (n = h[u].replace(/^\s+/, "").replace(/\s+$/, ""), n.indexOf("#") > -1) {
              i = n.split("#"), o = i[0];
              var m = i[1],
                g = P.getElementById(m);
              if (!g || o && g.nodeName.toLowerCase() != o) return [];
              d = [g];
            } else if (n.indexOf(".") > -1) {
              i = n.split("."), o = i[0];
              var _ = i[1];
              for (o || (o = "*"), a = [], s = 0, c = 0; c < d.length; c++) for (p = "*" == o ? e(d[c]) : d[c].getElementsByTagName(o), l = 0; l < p.length; l++) a[s++] = p[l];
              for (d = [], f = 0, c = 0; c < a.length; c++) a[c].className && N.isString(a[c].className) && r(a[c], _) && (d[f++] = a[c]);
            } else {
              var v = n.match(W);
              if (v) {
                o = v[1];
                var y,
                  b = v[2],
                  k = v[3],
                  S = v[4];
                for (o || (o = "*"), a = [], s = 0, c = 0; c < d.length; c++) for (p = "*" == o ? e(d[c]) : d[c].getElementsByTagName(o), l = 0; l < p.length; l++) a[s++] = p[l];
                switch (d = [], f = 0, k) {
                  case "=":
                    y = function (e) {
                      return e.getAttribute(b) == S;
                    };
                    break;
                  case "~":
                    y = function (e) {
                      return e.getAttribute(b).match(new RegExp("\\b" + S + "\\b"));
                    };
                    break;
                  case "|":
                    y = function (e) {
                      return e.getAttribute(b).match(new RegExp("^" + S + "-?"));
                    };
                    break;
                  case "^":
                    y = function (e) {
                      return 0 === e.getAttribute(b).indexOf(S);
                    };
                    break;
                  case "$":
                    y = function (e) {
                      return e.getAttribute(b).lastIndexOf(S) == e.getAttribute(b).length - S.length;
                    };
                    break;
                  case "*":
                    y = function (e) {
                      return e.getAttribute(b).indexOf(S) > -1;
                    };
                    break;
                  default:
                    y = function (e) {
                      return e.getAttribute(b);
                    };
                }
                for (d = [], f = 0, c = 0; c < a.length; c++) y(a[c]) && (d[f++] = a[c]);
              } else {
                for (o = n, a = [], s = 0, c = 0; c < d.length; c++) for (p = d[c].getElementsByTagName(o), l = 0; l < p.length; l++) a[s++] = p[l];
                d = a;
              }
            }
            return d;
          }
          return function (e) {
            return N.isElement(e) ? [e] : N.isObject(e) && !N.isUndefined(e.length) ? e : n.call(this, e);
          };
        }(), N.info = {
          campaignParams: function () {
            var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
              t = "",
              r = {};
            N.each(e, function (e) {
              t = N.getQueryParam(P.URL, e), t.length && (r[e] = t);
            })
            return r;
          },
          searchEngine: function (e) {
            return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null;
          },
          searchInfo: function (e) {
            var t = N.info.searchEngine(e),
              r = "yahoo" != t ? "q" : "p",
              n = {};
            if (null !== t) {
              n.$search_engine = t;
              var i = N.getQueryParam(e, r);
              i.length && (n.mp_keyword = i);
            }
            return n;
          },
          browser: function (e, t, r) {
            t = t || ""
            return r || N.includes(e, " OPR/") ? N.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : N.includes(e, "IEMobile") || N.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : N.includes(e, "SamsungBrowser/") ? "Samsung Internet" : N.includes(e, "Edge") || N.includes(e, "Edg/") ? "Microsoft Edge" : N.includes(e, "FBIOS") ? "Facebook Mobile" : N.includes(e, "Chrome") ? "Chrome" : N.includes(e, "CriOS") ? "Chrome iOS" : N.includes(e, "UCWEB") || N.includes(e, "UCBrowser") ? "UC Browser" : N.includes(e, "FxiOS") ? "Firefox iOS" : N.includes(t, "Apple") ? N.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : N.includes(e, "Android") ? "Android Mobile" : N.includes(e, "Konqueror") ? "Konqueror" : N.includes(e, "Firefox") ? "Firefox" : N.includes(e, "MSIE") || N.includes(e, "Trident/") ? "Internet Explorer" : N.includes(e, "Gecko") ? "Mozilla" : "";
          },
          browserVersion: function (e, t, r) {
            var n = N.info.browser(e, t, r),
              i = {
                "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                "Android Mobile": /android\s(\d+(\.\d+)?)/,
                "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/
              },
              o = i[n];
            if (undefined === o) return null;
            var a = e.match(o);
            return a ? parseFloat(a[a.length - 2]) : null;
          },
          os: function () {
            var e = I;
            return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : "";
          },
          device: function (e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : "";
          },
          referringDomain: function (e) {
            var t = e.split("/");
            return t.length >= 3 ? t[2] : "";
          },
          properties: function () {
            return N.extend(N.strip_empty_properties({
              $os: N.info.os(),
              $browser: N.info.browser(I, C.vendor, T),
              $referrer: P.referrer,
              $referring_domain: N.info.referringDomain(P.referrer),
              $device: N.info.device(I)
            }), {
              $current_url: "https://www.iploong.com/",
              $browser_version: N.info.browserVersion(I, C.vendor, T),
              $screen_height: 1080,
              $screen_width: 1920,
              mp_lib: "web",
              $lib_version: r.LIB_VERSION,
              $insert_id: H(),
              time: N.timestamp() / 1e3
            });
          },
          people_properties: function () {
            return N.extend(N.strip_empty_properties({
              $os: N.info.os(),
              $browser: N.info.browser(I, C.vendor, T)
            }), {
              $browser_version: N.info.browserVersion(I, C.vendor, T)
            });
          },
          pageviewInfo: function (e) {
            return N.strip_empty_properties({
              mp_page: e,
              mp_referrer: P.referrer,
              mp_browser: N.info.browser(I, C.vendor, T),
              mp_platform: N.info.os()
            });
          }
        };
        var H = function (e) {
            var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return e ? t.substring(0, e) : t;
          },
          V = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
          K = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
          J = function (e) {
            var t = K,
              r = e.split("."),
              n = r[r.length - 1];
            (n.length > 4 || "com" === n || "org" === n) && (t = V);
            var i = e.match(t);
            return i ? i[0] : "";
          },
          Y = null,
          X = null;
        "undefined" != typeof JSON && (Y = JSON.stringify, X = JSON.parse), Y = Y || N.JSONEncode, X = X || N.JSONDecode, N.toArray = N.toArray, N.isObject = N.isObject, N.JSONEncode = N.JSONEncode, N.JSONDecode = N.JSONDecode, N.isBlockedUA = N.isBlockedUA, N.isEmptyObject = N.isEmptyObject, N.info = N.info, N.info.device = N.info.device, N.info.browser = N.info.browser, N.info.browserVersion = N.info.browserVersion, N.info.properties = N.info.properties;
        var Q = function () {};
        Q.prototype.create_properties = function () {}, Q.prototype.event_handler = function () {}, Q.prototype.after_track_handler = function () {}, Q.prototype.init = function (e) {
          this.mp = e
          return this;
        }, Q.prototype.track = function (e, t, r, n) {
          var i = this,
            o = N.dom_query(e);
          if (0 !== o.length) return true;
          B.error("The DOM query (" + e + ") returned 0 elements");
        }, Q.prototype.track_callback = function (e, t, r, n) {
          n = n || false;
          var i = this;
          return function () {
            r.callback_fired || (r.callback_fired = true, e && false === e(n, t) || i.after_track_handler(t, r, n));
          };
        }, Q.prototype.create_properties = function (e, t) {
          var r;
          r = "function" == typeof e ? e(t) : N.extend({}, e)
          return r;
        };
        var Z = function () {
          this.override_event = "click";
        };
        N.inherit(Z, Q), Z.prototype.create_properties = function (e, t) {
          var r = Z.superclass.create_properties.apply(this, arguments);
          t.href && (r.url = t.href)
          return r;
        }, Z.prototype.event_handler = function (e, t, r) {
          r.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target, r.href = t.href, r.new_tab || e.preventDefault();
        }, Z.prototype.after_track_handler = function (e, t) {
          t.new_tab || setTimeout(function () {
            window.location = t.href;
          }, 0);
        };
        var ee = function () {
          this.override_event = "submit";
        };
        N.inherit(ee, Q), ee.prototype.event_handler = function (e, t, r) {
          r.element = t, e.preventDefault();
        }, ee.prototype.after_track_handler = function (e, t) {
          setTimeout(function () {
            t.element.submit();
          }, 0);
        };
        var te = U("lock"),
          re = function (e, t) {
            t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3;
          };
        re.prototype.withLock = function (e, t, r) {
          r || "function" == typeof t || (r = t, t = null);
          var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            o = this.storageKey,
            a = this.pollIntervalMS,
            s = this.timeoutMS,
            u = this.storage,
            c = o + ":X",
            l = o + ":Y",
            p = o + ":Z",
            f = function (e) {
              t && t(e);
            },
            h = function (e) {
              if (new Date().getTime() - i > s) return void g();
              setTimeout(function () {
                try {
                  e();
                } catch (e) {
                  f(e);
                }
              }, a * (Math.random() + .1));
            },
            d = function (e, t) {
              e() ? t() : h(function () {
                d(e, t);
              });
            },
            m = function () {
              var e = u.getItem(l);
              if (e && e !== n) return false;
              if (u.setItem(l, n), u.getItem(l) === n) return true;
              if (!$(u, true)) throw new Error("localStorage support dropped while acquiring lock");
              return false;
            },
            g = function () {
              u.setItem(c, n), d(m, function () {
                u.getItem(c) !== n ? h(function () {
                  u.getItem(l) === n ? d(function () {
                    return !u.getItem(p);
                  }, _) : g();
                }) : _();
              });
            },
            _ = function () {
              u.setItem(p, "1");
              try {
                e();
              } finally {
                u.removeItem(p), u.getItem(l) === n && u.removeItem(l), u.getItem(c) === n && u.removeItem(c);
              }
            };
          try {
            if (!$(u, true)) throw new Error("localStorage support check failed");
            g();
          } catch (e) {
            f(e);
          }
        };
        var ne = U("batch"),
          ie = function (e, t) {
            t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || N.bind(ne.error, ne), this.lock = new re(e, {
              storage: this.storage
            }), this.pid = t.pid || null, this.memQueue = [];
          };
        ie.prototype.enqueue = function (e, t, r) {
          var n = {
            id: H(),
            flushAfter: new Date().getTime() + 2 * t,
            payload: e
          };
          this.lock.withLock(N.bind(function () {
            var t;
            try {
              var i = this.readFromStorage();
              i.push(n), t = this.saveToStorage(i), t && this.memQueue.push(n);
            } catch (r) {
              this.reportError("Error enqueueing item", e), t = false;
            }
            r && r(t);
          }, this), N.bind(function (e) {
            this.reportError("Error acquiring storage lock", e), r && r(false);
          }, this), this.pid);
        }, ie.prototype.fillBatch = function (e) {
          var t = this.memQueue.slice(0, e);
          if (t.length < e) {
            var r = this.readFromStorage();
            if (r.length) {
              var n = {};
              N.each(t, function (e) {
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
        var oe = function (e, t) {
          var r = [];
          N.each(e, function (e) {
            e.id && !t[e.id] && r.push(e);
          })
          return r;
        };
        ie.prototype.removeItemsByID = function (e, t) {
          var r = {};
          N.each(e, function (e) {
            r[e] = true;
          }), this.memQueue = oe(this.memQueue, r);
          var n = N.bind(function () {
            var t;
            try {
              var n = this.readFromStorage();
              if (n = oe(n, r), t = this.saveToStorage(n), t) {
                n = this.readFromStorage();
                for (var i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (o.id && r[o.id]) return false;
                }
              }
            } catch (r) {
              this.reportError("Error removing items", e), t = false;
            }
            return t;
          }, this);
          this.lock.withLock(function () {
            var e = n();
            t && t(e);
          }, N.bind(function (e) {
            var r = false;
            if (this.reportError("Error acquiring storage lock", e), !$(this.storage, true) && (r = n(), !r)) try {
              this.storage.removeItem(this.storageKey);
            } catch (e) {
              this.reportError("Error clearing queue", e);
            }
            t && t(r);
          }, this), this.pid);
        };
        var ae = function (e, t) {
          var r = [];
          N.each(e, function (e) {
            var n = e.id;
            if (n in t) {
              var i = t[n];
              null !== i && (e.payload = i, r.push(e));
            } else r.push(e);
          })
          return r;
        };
        ie.prototype.updatePayloads = function (e, t) {
          this.memQueue = ae(this.memQueue, e), this.lock.withLock(N.bind(function () {
            var r;
            try {
              var n = this.readFromStorage();
              n = ae(n, e), r = this.saveToStorage(n);
            } catch (t) {
              this.reportError("Error updating items", e), r = false;
            }
            t && t(r);
          }, this), N.bind(function (e) {
            this.reportError("Error acquiring storage lock", e), t && t(false);
          }, this), this.pid);
        }, ie.prototype.readFromStorage = function () {
          var e;
          try {
            e = this.storage.getItem(this.storageKey), e && (e = X(e), N.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null));
          } catch (t) {
            this.reportError("Error retrieving queue", t), e = null;
          }
          return e || [];
        }, ie.prototype.saveToStorage = function (e) {
          try {
            this.storage.setItem(this.storageKey, Y(e))
            return true;
          } catch (e) {
            this.reportError("Error saving queue", e)
            return false;
          }
        }, ie.prototype.clear = function () {
          this.memQueue = [], this.storage.removeItem(this.storageKey);
        };
        var se = 6e5,
          ue = U("batch"),
          ce = function (e, t) {
            this.errorReporter = t.errorReporter, this.queue = new ie(e, {
              errorReporter: N.bind(this.reportError, this),
              storage: t.storage
            }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0;
          };
        ce.prototype.enqueue = function (e, t) {
          this.queue.enqueue(e, this.flushInterval, t);
        }, ce.prototype.start = function () {
          this.stopped = false, this.consecutiveRemovalFailures = 0, this.flush();
        }, ce.prototype.stop = function () {
          this.stopped = true, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null);
        }, ce.prototype.clear = function () {
          this.queue.clear();
        }, ce.prototype.resetBatchSize = function () {
          this.batchSize = this.libConfig.batch_size;
        }, ce.prototype.resetFlush = function () {
          this.scheduleFlush(this.libConfig.batch_flush_interval_ms);
        }, ce.prototype.scheduleFlush = function (e) {
          this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(N.bind(this.flush, this), this.flushInterval));
        }, ce.prototype.flush = function (e) {
          try {
            if (this.requestInProgress) return void ue.log("Flush: Request already in progress");
            e = e || {};
            var t = this.libConfig.batch_request_timeout_ms,
              r = new Date().getTime(),
              n = this.batchSize,
              i = this.queue.fillBatch(n),
              o = [],
              a = {};
            if (N.each(i, function (e) {
              var t = e.payload;
              this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t && o.push(t), a[e.id] = t;
            }, this), o.length < 1) return void this.resetFlush();
            this.requestInProgress = true;
            var s = N.bind(function (o) {
                this.requestInProgress = false;
                try {
                  var s = false;
                  if (e.unloading) this.queue.updatePayloads(a);else if (N.isObject(o) && "timeout" === o.error && new Date().getTime() - r >= t) this.reportError("Network timeout; retrying"), this.flush();else if (N.isObject(o) && o.xhr_req && (o.xhr_req.status >= 500 || 429 === o.xhr_req.status || "timeout" === o.error)) {
                    var u = 2 * this.flushInterval,
                      c = o.xhr_req.responseHeaders;
                    if (c) {
                      var l = c["Retry-After"];
                      l && (u = 1e3 * parseInt(l, 10) || u);
                    }
                    u = Math.min(se, u), this.reportError("Error; retry in " + u + " ms"), this.scheduleFlush(u);
                  } else if (N.isObject(o) && o.xhr_req && 413 === o.xhr_req.status) {
                    if (i.length > 1) {
                      var p = Math.max(1, Math.floor(n / 2));
                      this.batchSize = Math.min(this.batchSize, p, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush();
                    } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), s = true;
                  } else s = true;
                  s && this.queue.removeItemsByID(N.map(i, function (e) {
                    return e.id;
                  }), N.bind(function (e) {
                    e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush());
                  }, this));
                } catch (e) {
                  this.reportError("Error handling API response", e), this.resetFlush();
                }
              }, this),
              u = {
                method: "POST",
                verbose: true,
                ignore_json_errors: true,
                timeout_ms: t
              };
            e.unloading && (u.transport = "sendBeacon"), ue.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, s);
          } catch (e) {
            this.reportError("Error flushing request queue", e), this.resetFlush();
          }
        }, ce.prototype.reportError = function (e, t) {
          if (ue.error.apply(ue.error, arguments), this.errorReporter) try {
            t instanceof Error || (t = new Error(e)), this.errorReporter(e, t);
          } catch (t) {
            ue.error(t);
          }
        };
        var le = "__mp_opt_in_out_";
        function pe(e, t) {
          we(true, e, t);
        }
        function fe(e, t) {
          we(false, e, t);
        }
        function he(e, t) {
          return "1" === ke(e, t);
        }
        function de(e, t) {
          if (Se(t)) return true;
          var r = "0" === ke(e, t);
          r && B.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.")
          return r;
        }
        function me(e) {
          return xe(e, function (e) {
            return this.get_config(e);
          });
        }
        function ge(e) {
          return xe(e, function (e) {
            return this._get_config(e);
          });
        }
        function _e(e) {
          return xe(e, function (e) {
            return this._get_config(e);
          });
        }
        function ve(e, t) {
          t = t || {}, ye(t).remove(be(e, t), !!t.crossSubdomainCookie, t.cookieDomain);
        }
        function ye(e) {
          e = e || {}
          return "localStorage" === e.persistenceType ? N.localStorage : N.cookie;
        }
        function be(e, t) {
          t = t || {}
          return (t.persistencePrefix || le) + e;
        }
        function ke(e, t) {
          return ye(t).get(be(e, t));
        }
        function Se(e) {
          if (e && e.ignoreDnt) return false;
          var r = e && e.window || t,
            n = r.navigator || {},
            i = false;
          N.each([n.doNotTrack, n.msDoNotTrack, r.doNotTrack], function (e) {
            N.includes([true, 1, "1", "yes"], e) && (i = true);
          })
          return i;
        }
        function we(e, t, r) {
          N.isString(t) && t.length ? (r = r || {}, ye(r).set(be(t, r), e ? 1 : 0, N.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: true
          })) : B.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
        }
        function xe(e, t) {
          return function () {
            var r = false;
            try {
              var n = t.call(this, "token"),
                i = t.call(this, "ignore_dnt"),
                o = t.call(this, "opt_out_tracking_persistence_type"),
                a = t.call(this, "opt_out_tracking_cookie_prefix"),
                s = t.call(this, "window");
              n && (r = de(n, {
                ignoreDnt: i,
                persistenceType: o,
                persistencePrefix: a,
                window: s
              }));
            } catch (e) {
              B.error("Unexpected error when checking tracking opt-out status: " + e);
            }
            if (!r) return e.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            "function" == typeof u && u(0);
          };
        }
        var Oe = "$set",
          Ee = "$set_once",
          Ce = "$unset",
          Pe = "$add",
          Te = "$append",
          Ae = "$union",
          Ie = "$remove",
          Me = "$delete",
          Re = {
            set_action: function (e, t) {
              var r = {},
                n = {};
              N.isObject(e) ? N.each(e, function (e, t) {
                this._is_reserved_property(t) || (n[t] = e);
              }, this) : n[e] = t
              r[Oe] = n
              return r;
            },
            unset_action: function (e) {
              var t = {},
                r = [];
              N.isArray(e) || (e = [e])
              N.each(e, function (e) {
                this._is_reserved_property(e) || r.push(e);
              }, this)
              t[Ce] = r
              return t;
            },
            set_once_action: function (e, t) {
              var r = {},
                n = {};
              N.isObject(e) ? N.each(e, function (e, t) {
                this._is_reserved_property(t) || (n[t] = e);
              }, this) : n[e] = t
              r[Ee] = n
              return r;
            },
            union_action: function (e, t) {
              var r = {},
                n = {};
              N.isObject(e) ? N.each(e, function (e, t) {
                this._is_reserved_property(t) || (n[t] = N.isArray(e) ? e : [e]);
              }, this) : n[e] = N.isArray(t) ? t : [t]
              r[Ae] = n
              return r;
            },
            append_action: function (e, t) {
              var r = {},
                n = {};
              N.isObject(e) ? N.each(e, function (e, t) {
                this._is_reserved_property(t) || (n[t] = e);
              }, this) : n[e] = t
              r[Te] = n
              return r;
            },
            remove_action: function (e, t) {
              var r = {},
                n = {};
              N.isObject(e) ? N.each(e, function (e, t) {
                this._is_reserved_property(t) || (n[t] = e);
              }, this) : n[e] = t
              r[Ie] = n
              return r;
            },
            delete_action: function () {
              var e = {};
              e[Me] = ""
              return e;
            }
          },
          Fe = function () {};
        N.extend(Fe.prototype, Re), Fe.prototype._init = function (e, t, r) {
          this._mixpanel = e, this._group_key = t, this._group_id = r;
        }, Fe.prototype.set = _e(function (e, t, r) {
          var n = this.set_action(e, t);
          N.isObject(e) && (r = t)
          return this._send_request(n, r);
        }), Fe.prototype.set_once = _e(function (e, t, r) {
          var n = this.set_once_action(e, t);
          N.isObject(e) && (r = t)
          return this._send_request(n, r);
        }), Fe.prototype.unset = _e(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        }), Fe.prototype.union = _e(function (e, t, r) {
          N.isObject(e) && (r = t);
          var n = this.union_action(e, t);
          return this._send_request(n, r);
        }), Fe.prototype.delete = _e(function (e) {
          var t = this.delete_action();
          return this._send_request(t, e);
        }), Fe.prototype.remove = _e(function (e, t, r) {
          var n = this.remove_action(e, t);
          return this._send_request(n, r);
        }), Fe.prototype._send_request = function (e, t) {
          e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
          var r = N.encodeDates(e);
          return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
            batcher: this._mixpanel.request_batchers.groups
          }, t);
        }, Fe.prototype._is_reserved_property = function (e) {
          return "$group_key" === e || "$group_id" === e;
        }, Fe.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }, Fe.prototype.toString = function () {
          return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
        }, Fe.prototype.remove = Fe.prototype.remove, Fe.prototype.set = Fe.prototype.set, Fe.prototype.set_once = Fe.prototype.set_once, Fe.prototype.union = Fe.prototype.union, Fe.prototype.unset = Fe.prototype.unset, Fe.prototype.toString = Fe.prototype.toString;
        var Le = function () {};
        N.extend(Le.prototype, Re), Le.prototype._init = function (e) {
          this._mixpanel = e;
        }, Le.prototype.set = ge(function (e, t, r) {
          var n = this.set_action(e, t);
          N.isObject(e) && (r = t)
          this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer)
          n[Oe] = N.extend({}, N.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[Oe])
          return this._send_request(n, r);
        }), Le.prototype.set_once = ge(function (e, t, r) {
          var n = this.set_once_action(e, t);
          N.isObject(e) && (r = t)
          return this._send_request(n, r);
        }), Le.prototype.unset = ge(function (e, t) {
          var r = this.unset_action(e);
          return this._send_request(r, t);
        }), Le.prototype.increment = ge(function (e, t, r) {
          var n = {},
            i = {};
          N.isObject(e) ? (N.each(e, function (e, t) {
            if (!this._is_reserved_property(t)) {
              if (isNaN(parseFloat(e))) return void B.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
              i[t] = e;
            }
          }, this), r = t) : (N.isUndefined(t) && (t = 1), i[e] = t)
          n[Pe] = i
          return this._send_request(n, r);
        }), Le.prototype.append = ge(function (e, t, r) {
          N.isObject(e) && (r = t);
          var n = this.append_action(e, t);
          return this._send_request(n, r);
        }), Le.prototype.remove = ge(function (e, t, r) {
          N.isObject(e) && (r = t);
          var n = this.remove_action(e, t);
          return this._send_request(n, r);
        }), Le.prototype.union = ge(function (e, t, r) {
          N.isObject(e) && (r = t);
          var n = this.union_action(e, t);
          return this._send_request(n, r);
        }), Le.prototype.track_charge = ge(function (e, t, r) {
          if (N.isNumber(e) || (e = parseFloat(e), !isNaN(e))) return this.append("$transactions", N.extend({
            $amount: e
          }, t), r);
          B.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
        }), Le.prototype.clear_charges = function (e) {
          return this.set("$transactions", [], e);
        }, Le.prototype.delete_user = function () {
          if (this._identify_called()) {
            var e = {
              $delete: this._mixpanel.get_distinct_id()
            };
            return this._send_request(e);
          }
          B.error("mixpanel.people.delete_user() requires you to call identify() first");
        }, Le.prototype.toString = function () {
          return this._mixpanel.toString() + ".people";
        }, Le.prototype._send_request = function (e, t) {
          e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
          var r = this._mixpanel.get_property("$device_id"),
            n = this._mixpanel.get_property("$user_id"),
            i = this._mixpanel.get_property("$had_persisted_distinct_id");
          r && (e.$device_id = r), n && (e.$user_id = n), i && (e.$had_persisted_distinct_id = i);
          var o = N.encodeDates(e);
          return this._identify_called() ? this._mixpanel._track_or_batch({
            type: "people",
            data: o,
            endpoint: this._get_config("api_host") + "/engage/",
            batcher: this._mixpanel.request_batchers.people
          }, t) : (this._enqueue(e), N.isUndefined(t) || (this._get_config("verbose") ? t({
            status: -1,
            error: null
          }) : t(-1)), N.truncate(o, 255));
        }, Le.prototype._get_config = function (e) {
          return this._mixpanel.get_config(e);
        }, Le.prototype._identify_called = function () {
          return true === this._mixpanel._flags.identify_called;
        }, Le.prototype._enqueue = function (e) {
          Oe in e ? this._mixpanel.persistence._add_to_people_queue(Oe, e) : Ee in e ? this._mixpanel.persistence._add_to_people_queue(Ee, e) : Ce in e ? this._mixpanel.persistence._add_to_people_queue(Ce, e) : Pe in e ? this._mixpanel.persistence._add_to_people_queue(Pe, e) : Te in e ? this._mixpanel.persistence._add_to_people_queue(Te, e) : Ie in e ? this._mixpanel.persistence._add_to_people_queue(Ie, e) : Ae in e ? this._mixpanel.persistence._add_to_people_queue(Ae, e) : B.error("Invalid call to _enqueue():", e);
        }, Le.prototype._flush_one_queue = function (e, t, r, n) {
          var i = this,
            o = N.extend({}, this._mixpanel.persistence._get_queue(e)),
            a = o;
          N.isUndefined(o) || !N.isObject(o) || N.isEmptyObject(o) || (i._mixpanel.persistence._pop_from_people_queue(e, o), n && (a = n(o)), t.call(i, a, function (t, n) {
            0 === t && i._mixpanel.persistence._add_to_people_queue(e, o), N.isUndefined(r) || r(t, n);
          }));
        }, Le.prototype._flush = function (e, t, r, n, i, o, a) {
          var s = this,
            u = this._mixpanel.persistence._get_queue(Te),
            c = this._mixpanel.persistence._get_queue(Ie);
          if (this._flush_one_queue(Oe, this.set, e), this._flush_one_queue(Ee, this.set_once, n), this._flush_one_queue(Ce, this.unset, o, function (e) {
            return N.keys(e);
          }), this._flush_one_queue(Pe, this.increment, t), this._flush_one_queue(Ae, this.union, i), !N.isUndefined(u) && N.isArray(u) && u.length) {
            for (var l, p = function (e, t) {
                0 === e && s._mixpanel.persistence._add_to_people_queue(Te, l), N.isUndefined(r) || r(e, t);
              }, f = u.length - 1; f >= 0; f--) l = u.pop(), N.isEmptyObject(l) || s.append(l, p);
            s._mixpanel.persistence.save();
          }
          if (!N.isUndefined(c) && N.isArray(c) && c.length) {
            for (var h, d = function (e, t) {
                0 === e && s._mixpanel.persistence._add_to_people_queue(Ie, h), N.isUndefined(a) || a(e, t);
              }, m = c.length - 1; m >= 0; m--) h = c.pop(), N.isEmptyObject(h) || s.remove(h, d);
            s._mixpanel.persistence.save();
          }
        }, Le.prototype._is_reserved_property = function (e) {
          return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e;
        }, Le.prototype.set = Le.prototype.set, Le.prototype.set_once = Le.prototype.set_once, Le.prototype.unset = Le.prototype.unset, Le.prototype.increment = Le.prototype.increment, Le.prototype.append = Le.prototype.append, Le.prototype.remove = Le.prototype.remove, Le.prototype.union = Le.prototype.union, Le.prototype.track_charge = Le.prototype.track_charge, Le.prototype.clear_charges = Le.prototype.clear_charges, Le.prototype.delete_user = Le.prototype.delete_user, Le.prototype.toString = Le.prototype.toString;
        var De,
          je,
          Ne = "__mps",
          Be = "__mpso",
          qe = "__mpus",
          Ue = "__mpa",
          Ge = "__mpap",
          ze = "__mpr",
          $e = "__mpu",
          We = "$people_distinct_id",
          He = "__alias",
          Ve = "__timers",
          Ke = [Ne, Be, qe, Ue, Ge, ze, $e, We, He, Ve],
          Je = function (e) {
            this.props = {}, this.campaign_params_saved = false, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
            var t = e.persistence;
            "cookie" !== t && "localStorage" !== t && (B.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), "localStorage" === t && N.localStorage.is_supported() ? this.storage = N.localStorage : this.storage = N.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save();
          };
        Je.prototype.properties = function () {
          var e = {};
          N.each(this.props, function (t, r) {
            N.include(Ke, r) || (e[r] = t);
          })
          return e;
        }, Je.prototype.load = function () {
          if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = N.extend({}, e));
          }
        }, Je.prototype.upgrade = function (e) {
          var t,
            r,
            n = e.upgrade;
          n && (t = "mp_super_properties", "string" == typeof n && (t = n), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, true), r && (this.props = N.extend(this.props, r.all, r.events))), e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name, r = this.storage.parse(t), r && (this.storage.remove(t), this.storage.remove(t, true), this.register_once(r))), this.storage === N.localStorage && (r = N.cookie.parse(this.name), N.cookie.remove(this.name), N.cookie.remove(this.name, true), r && this.register_once(r));
        }, Je.prototype.save = function () {
          this.disabled || this.storage.set(this.name, N.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain);
        }, Je.prototype.remove = function () {
          this.storage.remove(this.name, false, this.cookie_domain), this.storage.remove(this.name, true, this.cookie_domain);
        }, Je.prototype.clear = function () {
          this.remove(), this.props = {};
        }, Je.prototype.register_once = function (e, t, r) {
          return !!N.isObject(e) && (undefined === t && (t = "None"), this.expire_days = undefined === r ? this.default_expiry : r, N.each(e, function (e, r) {
            this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e);
          }, this), this.save(), true);
        }, Je.prototype.register = function (e, t) {
          return !!N.isObject(e) && (this.expire_days = undefined === t ? this.default_expiry : t, N.extend(this.props, e), this.save(), true);
        }, Je.prototype.unregister = function (e) {
          e in this.props && (delete this.props[e], this.save());
        }, Je.prototype.update_campaign_params = function () {
          this.campaign_params_saved || (this.register_once(N.info.campaignParams()), this.campaign_params_saved = true);
        }, Je.prototype.update_search_keyword = function (e) {
          this.register(N.info.searchInfo(e));
        }, Je.prototype.update_referrer_info = function (e) {
          this.register_once({
            $initial_referrer: e || "$direct",
            $initial_referring_domain: N.info.referringDomain(e) || "$direct"
          }, "");
        }, Je.prototype.get_referrer_info = function () {
          return N.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
          });
        }, Je.prototype.safe_merge = function (e) {
          N.each(this.props, function (t, r) {
            r in e || (e[r] = t);
          })
          return e;
        }, Je.prototype.update_config = function (e) {
          this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
        }, Je.prototype.set_disabled = function (e) {
          this.disabled = e, this.disabled ? this.remove() : this.save();
        }, Je.prototype.set_cookie_domain = function (e) {
          e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save());
        }, Je.prototype.set_cross_site = function (e) {
          e !== this.cross_site && (this.cross_site = e, this.remove(), this.save());
        }, Je.prototype.set_cross_subdomain = function (e) {
          e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
        }, Je.prototype.get_cross_subdomain = function () {
          return this.cross_subdomain;
        }, Je.prototype.set_secure = function (e) {
          e !== this.secure && (this.secure = !!e, this.remove(), this.save());
        }, Je.prototype._add_to_people_queue = function (e, t) {
          var r = this._get_queue_key(e),
            n = t[e],
            i = this._get_or_create_queue(Oe),
            o = this._get_or_create_queue(Ee),
            a = this._get_or_create_queue(Ce),
            s = this._get_or_create_queue(Pe),
            u = this._get_or_create_queue(Ae),
            c = this._get_or_create_queue(Ie, []),
            l = this._get_or_create_queue(Te, []);
          r === Ne ? (N.extend(i, n), this._pop_from_people_queue(Pe, n), this._pop_from_people_queue(Ae, n), this._pop_from_people_queue(Ce, n)) : r === Be ? (N.each(n, function (e, t) {
            t in o || (o[t] = e);
          }), this._pop_from_people_queue(Ce, n)) : r === qe ? N.each(n, function (e) {
            N.each([i, o, s, u], function (t) {
              e in t && delete t[e];
            }), N.each(l, function (t) {
              e in t && delete t[e];
            }), a[e] = true;
          }) : r === Ue ? (N.each(n, function (e, t) {
            t in i ? i[t] += e : (t in s || (s[t] = 0), s[t] += e);
          }, this), this._pop_from_people_queue(Ce, n)) : r === $e ? (N.each(n, function (e, t) {
            N.isArray(e) && (t in u || (u[t] = []), u[t] = u[t].concat(e));
          }), this._pop_from_people_queue(Ce, n)) : r === ze ? (c.push(n), this._pop_from_people_queue(Te, n)) : r === Ge && (l.push(n), this._pop_from_people_queue(Ce, n)), B.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), B.log(t), this.save();
        }, Je.prototype._pop_from_people_queue = function (e, t) {
          var r = this._get_queue(e);
          N.isUndefined(r) || (N.each(t, function (t, n) {
            e === Te || e === Ie ? N.each(r, function (e) {
              e[n] === t && delete e[n];
            }) : delete r[n];
          }, this), this.save());
        }, Je.prototype._get_queue_key = function (e) {
          return e === Oe ? Ne : e === Ee ? Be : e === Ce ? qe : e === Pe ? Ue : e === Te ? Ge : e === Ie ? ze : e === Ae ? $e : void B.error("Invalid queue:", e);
        }, Je.prototype._get_queue = function (e) {
          return this.props[this._get_queue_key(e)];
        }, Je.prototype._get_or_create_queue = function (e, t) {
          var r = this._get_queue_key(e);
          t = N.isUndefined(t) ? {} : t
          return this.props[r] || (this.props[r] = t);
        }, Je.prototype.set_event_timer = function (e, t) {
          var r = this.props[Ve] || {};
          r[e] = t, this.props[Ve] = r, this.save();
        }, Je.prototype.remove_event_timer = function (e) {
          var t = this.props[Ve] || {},
            r = t[e];
          N.isUndefined(r) || (delete this.props[Ve][e], this.save())
          return r;
        };
        var Ye = 0,
          Xe = 1,
          Qe = function (e) {
            return e;
          },
          Ze = function () {},
          et = "mixpanel",
          tt = "base64",
          rt = "json",
          nt = t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
          it = !nt && -1 === I.indexOf("MSIE") && -1 === I.indexOf("Mozilla"),
          ot = null;
        C.sendBeacon && (ot = function () {
          return C.sendBeacon.apply(C, arguments);
        });
        var at = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: tt,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: false,
            cross_subdomain_cookie: true,
            error_reporter: Ze,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: Ze,
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
            opt_out_tracking_persistence_type: "localStorage",
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
          st = false,
          ut = function () {},
          ct = function (e, t, n) {
            var i,
              o = n === et ? je : je[n];
            if (o && De === Ye) i = o;else {
              if (o && !N.isArray(o)) return void B.error("You have already initialized " + n);
              i = new ut();
            }
            i._cached_groups = {}
            i._init(e, t, n)
            i.people = new Le()
            i.people._init(i)
            r.DEBUG = r.DEBUG || i.get_config("debug")
            !N.isUndefined(o) && N.isArray(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o))
            return i;
          };
        ut.prototype.init = function (e, t, r) {
          if (N.isUndefined(r)) this.report_error("You must name your new library: init(token, config, name)");else {
            if (r !== et) {
              var n = ct(e, t, r);
              je[r] = n
              n._loaded()
              return n;
            }
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
          }
        }, ut.prototype._init = function (e, r, n) {
          r = r || {}, this.__loaded = true, this.config = {};
          var i = {};
          if (!("api_payload_format" in r)) {
            var o = r.api_host || at.api_host;
            o.match(/\.mixpanel\.com$/) && (i.api_payload_format = rt);
          }
          if (this.set_config(N.extend({}, at, i, r, {
            name: n,
            token: e,
            callback_fn: (n === et ? n : et + "." + n) + "._jsc"
          })), this._jsc = Ze, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
            disable_all_events: false,
            identify_called: false
          }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) if (N.localStorage.is_supported(true) && nt) {
            if (this.init_batchers(), ot && t.addEventListener) {
              var a = N.bind(function () {
                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                  unloading: true
                });
              }, this);
              t.addEventListener("pagehide", function (e) {
                e.persisted && a();
              }), t.addEventListener("visibilitychange", function () {
                "hidden" === P.visibilityState && a();
              });
            }
          } else this._batch_requests = false, B.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
          this.persistence = this.cookie = new Je(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
          var s = N.UUID();
          this.get_distinct_id() || this.register_once({
            distinct_id: s,
            $device_id: s
          }, "");
        }, ut.prototype._loaded = function () {
          this.get_config("loaded")(this), this._set_default_superprops();
        }, ut.prototype._set_default_superprops = function () {
          this.persistence.update_search_keyword(P.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(P.referrer);
        }, ut.prototype._dom_loaded = function () {
          N.each(this.__dom_loaded_queue, function (e) {
            this._track_dom.apply(this, e);
          }, this), this.has_opted_out_tracking() || N.each(this.__request_queue, function (e) {
            this._send_request.apply(this, e);
          }, this), delete this.__dom_loaded_queue, delete this.__request_queue;
        }, ut.prototype._track_dom = function (e, t) {
          if (this.get_config("img")) return false;
          if (!st) return false;
          var r = new e().init(this);
          return r.track.apply(r, t);
        }, ut.prototype._prepare_callback = function (e, t) {
          if (N.isUndefined(e)) return null;
          if (nt) {
            var r = function (r) {
              e(r, t);
            };
            return r;
          }
          var n = this._jsc,
            i = "" + Math.floor(1e8 * Math.random()),
            o = this.get_config("callback_fn") + "[" + i + "]";
          n[i] = function (r) {
            delete n[i], e(r, t);
          }
          return o;
        }, ut.prototype._send_request = function (e, t, r, n) {
          var i = true;
          if (it) return i;
          var o = {
              method: this.get_config("api_method"),
              transport: this.get_config("api_transport"),
              verbose: this.get_config("verbose")
            },
            a = null;
          n || !N.isFunction(r) && "string" != typeof r || (n = r, r = null), r = N.extend(o, r || {}), nt || (r.method = "GET");
          var s = "POST" === r.method,
            u = ot && s && "sendbeacon" === r.transport.toLowerCase(),
            c = r.verbose;
          t.verbose && (c = true), this.get_config("test") && (t.test = 1), c && (t.verbose = 1), this.get_config("img") && (t.img = 1), nt || (n ? t.callback = n : (c || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = new Date().getTime().toString(), s && (a = "data=" + encodeURIComponent(t.data), delete t.data), e += "?" + N.HTTPBuildQuery(t);
          var l = this;
          if ("img" in t) {
            var p = P.createElement("img");
            p.src = e, P.body.appendChild(p);
          } else if (u) {
            try {
              i = ot(e, a);
            } catch (e) {
              l.report_error(e), i = false;
            }
            try {
              n && n(i ? 1 : 0);
            } catch (e) {
              l.report_error(e);
            }
          } else if (nt) try {
            var f = new XMLHttpRequest();
            f.open(r.method, e, true);
            var h = this.get_config("xhr_headers");
            if (s && (h["Content-Type"] = "application/x-www-form-urlencoded"), N.each(h, function (e, t) {
              f.setRequestHeader(t, e);
            }), r.timeout_ms && undefined !== f.timeout) {
              f.timeout = r.timeout_ms;
              var d = new Date().getTime();
            }
            f.withCredentials = true, f.onreadystatechange = function () {
              var e;
              if (4 === f.readyState) if (200 === f.status) {
                if (n) if (c) {
                  var t;
                  try {
                    t = N.JSONDecode(f.responseText);
                  } catch (e) {
                    if (l.report_error(e), !r.ignore_json_errors) return;
                    t = f.responseText;
                  }
                  n(t);
                } else n(Number(f.responseText));
              } else e = f.timeout && !f.status && new Date().getTime() - d >= f.timeout ? "timeout" : "Bad HTTP status: " + f.status + " " + f.statusText, l.report_error(e), n && n(c ? {
                status: 0,
                error: e,
                xhr_req: f
              } : 0);
            }, f.send(a);
          } catch (e) {
            l.report_error(e), i = false;
          } else {
            // var m = P.createElement("script");
            // m.type = "text/javascript", m.async = true, m.defer = true, m.src = e;
            // var g = P.getElementsByTagName("script")[0];
            // g.parentNode.insertBefore(m, g);
          }
          return i;
        }, ut.prototype._execute_array = function (e) {
          var t,
            r = [],
            n = [],
            i = [];
          N.each(e, function (e) {
            e && (t = e[0], N.isArray(t) ? i.push(e) : "function" == typeof e ? e.call(this) : N.isArray(e) && "alias" === t ? r.push(e) : N.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? i.push(e) : n.push(e));
          }, this);
          var o = function (e, t) {
            N.each(e, function (e) {
              if (N.isArray(e[0])) {
                var r = t;
                N.each(e, function (e) {
                  r = r[e[0]].apply(r, e.slice(1));
                });
              } else this[e[0]].apply(this, e.slice(1));
            }, t);
          };
          o(r, this), o(n, this), o(i, this);
        }, ut.prototype.are_batchers_initialized = function () {
          return !!this.request_batchers.events;
        }, ut.prototype.init_batchers = function () {
          var e = this.get_config("token");
          if (!this.are_batchers_initialized()) {
            var t = N.bind(function (t) {
              return new ce("__mpq_" + e + t.queue_suffix, {
                libConfig: this.config,
                sendRequestFunc: N.bind(function (e, r, n) {
                  this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(e), r, this._prepare_callback(n, e));
                }, this),
                beforeSendHook: N.bind(function (e) {
                  return this._run_hook("before_send_" + t.type, e);
                }, this),
                errorReporter: this.get_config("error_reporter"),
                stopAllBatchingFunc: N.bind(this.stop_batch_senders, this)
              });
            }, this);
            this.request_batchers = {
              events: t({
                type: "events",
                endpoint: "/track/",
                queue_suffix: "_ev"
              }),
              people: t({
                type: "people",
                endpoint: "/engage/",
                queue_suffix: "_pp"
              }),
              groups: t({
                type: "groups",
                endpoint: "/groups/",
                queue_suffix: "_gr"
              })
            };
          }
          this.get_config("batch_autostart") && this.start_batch_senders();
        }, ut.prototype.start_batch_senders = function () {
          this.are_batchers_initialized() && (this._batch_requests = true, N.each(this.request_batchers, function (e) {
            e.start();
          }));
        }, ut.prototype.stop_batch_senders = function () {
          this._batch_requests = false, N.each(this.request_batchers, function (e) {
            e.stop(), e.clear();
          });
        }, ut.prototype.push = function (e) {
          this._execute_array([e]);
        }, ut.prototype.disable = function (e) {
          undefined === e ? this._flags.disable_all_events = true : this.__disabled_events = this.__disabled_events.concat(e);
        }, ut.prototype._encode_data_for_request = function (e) {
          var t = N.JSONEncode(e);
          this.get_config("api_payload_format") === tt && (t = N.base64Encode(t))
          return {
            data: t
          };
        }, ut.prototype._track_or_batch = function (e, t) {
          var r = N.truncate(e.data, 255),
            n = e.endpoint,
            i = e.batcher,
            o = e.should_send_immediately,
            a = e.send_request_options || {};
          t = t || Ze;
          var s = true,
            u = N.bind(function () {
              a.skip_hooks || (r = this._run_hook("before_send_" + e.type, r))
              return r ? (B.log("MIXPANEL REQUEST:"), B.log(r), this._send_request(n, this._encode_data_for_request(r), a, this._prepare_callback(t, r))) : null;
            }, this);
          this._batch_requests && !o ? i.enqueue(r, function (e) {
            e ? t(1, r) : u();
          }) : s = u()
          return s && r;
        }, ut.prototype.track = me(function (e, t, r, n) {
          n || "function" != typeof r || (n = r, r = null), r = r || {};
          var i = r.transport;
          i && (r.transport = i);
          var o = r.send_immediately;
          if ("function" != typeof n && (n = Ze), N.isUndefined(e)) this.report_error("No event name provided to mixpanel.track");else {
            if (!this._event_is_disabled(e)) {
              t = t || {}, t.token = this.get_config("token");
              var a = this.persistence.remove_event_timer(e);
              if (!N.isUndefined(a)) {
                var s = new Date().getTime() - a;
                t.$duration = parseFloat((s / 1e3).toFixed(3));
              }
              this._set_default_superprops(), t = N.extend({}, N.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
              var u = this.get_config("property_blacklist");
              N.isArray(u) ? N.each(u, function (e) {
                delete t[e];
              }) : this.report_error("Invalid value for property_blacklist config: " + u);
              var c = {
                  event: e,
                  properties: t
                },
                l = this._track_or_batch({
                  type: "events",
                  data: c,
                  endpoint: this.get_config("api_host") + "/track/",
                  batcher: this.request_batchers.events,
                  should_send_immediately: o,
                  send_request_options: r
                }, n);
              return l;
            }
            n(0);
          }
        }), ut.prototype.set_group = me(function (e, t, r) {
          N.isArray(t) || (t = [t]);
          var n = {};
          n[e] = t
          this.register(n)
          return this.people.set(e, t, r);
        }), ut.prototype.add_group = me(function (e, t, r) {
          var n = this.get_property(e);
          if (undefined === n) {
            var i = {};
            i[e] = [t], this.register(i);
          } else -1 === n.indexOf(t) && (n.push(t), this.register(i));
          return this.people.union(e, t, r);
        }), ut.prototype.remove_group = me(function (e, t, r) {
          var n = this.get_property(e);
          if (undefined !== n) {
            var i = n.indexOf(t);
            i > -1 && (n.splice(i, 1), this.register({
              group_key: n
            })), 0 === n.length && this.unregister(e);
          }
          return this.people.remove(e, t, r);
        }), ut.prototype.track_with_groups = me(function (e, t, r, n) {
          var i = N.extend({}, t || {});
          N.each(r, function (e, t) {
            null != e && (i[t] = e);
          })
          return this.track(e, i, n);
        }), ut.prototype._create_map_key = function (e, t) {
          return e + "_" + JSON.stringify(t);
        }, ut.prototype._remove_group_from_cache = function (e, t) {
          delete this._cached_groups[this._create_map_key(e, t)];
        }, ut.prototype.get_group = function (e, t) {
          var r = this._create_map_key(e, t),
            n = this._cached_groups[r];
          undefined !== n && n._group_key === e && n._group_id === t || (n = new Fe(), n._init(this, e, t), this._cached_groups[r] = n)
          return n;
        }, ut.prototype.track_pageview = function (e) {
          N.isUndefined(e) && (e = P.location.href), this.track("mp_page_view", N.info.pageviewInfo(e));
        }, ut.prototype.track_links = function () {
          return this._track_dom.call(this, Z, arguments);
        }, ut.prototype.track_forms = function () {
          return this._track_dom.call(this, ee, arguments);
        }, ut.prototype.time_event = function (e) {
          N.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, new Date().getTime());
        };
        var lt = {
            persistent: true
          },
          pt = function (e) {
            var t;
            t = N.isObject(e) ? e : N.isUndefined(e) ? {} : {
              days: e
            }
            return N.extend({}, lt, t);
          };
        ut.prototype.register = function (e, t) {
          var r = pt(t);
          r.persistent ? this.persistence.register(e, r.days) : N.extend(this.unpersisted_superprops, e);
        }, ut.prototype.register_once = function (e, t, r) {
          var n = pt(r);
          n.persistent ? this.persistence.register_once(e, t, n.days) : (undefined === t && (t = "None"), N.each(e, function (e, r) {
            this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e);
          }, this));
        }, ut.prototype.unregister = function (e, t) {
          t = pt(t), t.persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e];
        }, ut.prototype._register_single = function (e, t) {
          var r = {};
          r[e] = t, this.register(r);
        }, ut.prototype.identify = function (e, t, r, n, i, o, a, s) {
          var u = this.get_distinct_id();
          if (this.register({
            $user_id: e
          }), !this.get_property("$device_id")) {
            var c = u;
            this.register_once({
              $had_persisted_distinct_id: true,
              $device_id: c
            }, "");
          }
          e !== u && e !== this.get_property(He) && (this.unregister(He), this.register({
            distinct_id: e
          })), this._flags.identify_called = true, this.people._flush(t, r, n, i, o, a, s), e !== u && this.track("$identify", {
            distinct_id: e,
            $anon_distinct_id: u
          }, {
            skip_hooks: true
          });
        }, ut.prototype.reset = function () {
          this.persistence.clear(), this._flags.identify_called = false;
          var e = N.UUID();
          this.register_once({
            distinct_id: e,
            $device_id: e
          }, "");
        }, ut.prototype.get_distinct_id = function () {
          return this.get_property("distinct_id");
        }, ut.prototype.alias = function (e, t) {
          if (e === this.get_property(We)) return -2;
          var r = this;
          N.isUndefined(t) && (t = this.get_distinct_id())
          return e !== t ? (this._register_single(He, e), this.track("$create_alias", {
            alias: e,
            distinct_id: t
          }, {
            skip_hooks: true
          }, function () {
            r.identify(e);
          })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1);
        }, ut.prototype.name_tag = function (e) {
          this._register_single("mp_name_tag", e);
        }, ut.prototype.set_config = function (e) {
          if (N.isObject(e)) {
            N.extend(this.config, e);
            var t = e.batch_size;
            t && N.each(this.request_batchers, function (e) {
              e.resetBatchSize();
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), r.DEBUG = r.DEBUG || this.get_config("debug");
          }
        }, ut.prototype.get_config = function (e) {
          return this.config[e];
        }, ut.prototype._run_hook = function (e) {
          var t = (this.config.hooks[e] || Qe).apply(this, w.call(arguments, 1));
          undefined === t && (this.report_error(e + " hook did not return a value"), t = null)
          return t;
        }, ut.prototype.get_property = function (e) {
          return this.persistence.props[e];
        }, ut.prototype.toString = function () {
          var e = this.get_config("name");
          e !== et && (e = et + "." + e)
          return e;
        }, ut.prototype._event_is_disabled = function (e) {
          return N.isBlockedUA(I) || this._flags.disable_all_events || N.include(this.__disabled_events, e);
        }, ut.prototype._gdpr_init = function () {
          var e = "localStorage" === this.get_config("opt_out_tracking_persistence_type");
          e && N.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
            persistence_type: "cookie"
          }) && this.opt_in_tracking({
            enable_persistence: false
          }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
            persistence_type: "cookie"
          }) && this.opt_out_tracking({
            clear_persistence: false
          }), this.clear_opt_in_out_tracking({
            persistence_type: "cookie",
            enable_persistence: false
          })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
            clear_persistence: true
          }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !N.cookie.get("mp_optout") || (N.cookie.remove("mp_optout"), this.opt_out_tracking({
            clear_persistence: this.get_config("opt_out_persistence_by_default")
          }));
        }, ut.prototype._gdpr_update_persistence = function (e) {
          var t;
          if (e && e.clear_persistence) t = true;else {
            if (!e || !e.enable_persistence) return;
            t = false;
          }
          this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), t && N.each(this.request_batchers, function (e) {
            e.clear();
          });
        }, ut.prototype._gdpr_call_func = function (e, t) {
          t = N.extend({
            track: N.bind(this.track, this),
            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt")
          }, t)
          N.localStorage.is_supported() || (t.persistence_type = "cookie")
          return e(this.get_config("token"), {
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
        }, ut.prototype.opt_in_tracking = function (e) {
          e = N.extend({
            enable_persistence: true
          }, e), this._gdpr_call_func(pe, e), this._gdpr_update_persistence(e);
        }, ut.prototype.opt_out_tracking = function (e) {
          e = N.extend({
            clear_persistence: true,
            delete_user: true
          }, e), e.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(fe, e), this._gdpr_update_persistence(e);
        }, ut.prototype.has_opted_in_tracking = function (e) {
          return this._gdpr_call_func(he, e);
        }, ut.prototype.has_opted_out_tracking = function (e) {
          return this._gdpr_call_func(de, e);
        }, ut.prototype.clear_opt_in_out_tracking = function (e) {
          e = N.extend({
            enable_persistence: true
          }, e), this._gdpr_call_func(ve, e), this._gdpr_update_persistence(e);
        }, ut.prototype.report_error = function (e, t) {
          B.error.apply(B.error, arguments);
          try {
            t || e instanceof Error || (e = new Error(e)), this.get_config("error_reporter")(e, t);
          } catch (t) {
            B.error(t);
          }
        }, ut.prototype.init = ut.prototype.init, ut.prototype.reset = ut.prototype.reset, ut.prototype.disable = ut.prototype.disable, ut.prototype.time_event = ut.prototype.time_event, ut.prototype.track = ut.prototype.track, ut.prototype.track_links = ut.prototype.track_links, ut.prototype.track_forms = ut.prototype.track_forms, ut.prototype.track_pageview = ut.prototype.track_pageview, ut.prototype.register = ut.prototype.register, ut.prototype.register_once = ut.prototype.register_once, ut.prototype.unregister = ut.prototype.unregister, ut.prototype.identify = ut.prototype.identify, ut.prototype.alias = ut.prototype.alias, ut.prototype.name_tag = ut.prototype.name_tag, ut.prototype.set_config = ut.prototype.set_config, ut.prototype.get_config = ut.prototype.get_config, ut.prototype.get_property = ut.prototype.get_property, ut.prototype.get_distinct_id = ut.prototype.get_distinct_id, ut.prototype.toString = ut.prototype.toString, ut.prototype.opt_out_tracking = ut.prototype.opt_out_tracking, ut.prototype.opt_in_tracking = ut.prototype.opt_in_tracking, ut.prototype.has_opted_out_tracking = ut.prototype.has_opted_out_tracking, ut.prototype.has_opted_in_tracking = ut.prototype.has_opted_in_tracking, ut.prototype.clear_opt_in_out_tracking = ut.prototype.clear_opt_in_out_tracking, ut.prototype.get_group = ut.prototype.get_group, ut.prototype.set_group = ut.prototype.set_group, ut.prototype.add_group = ut.prototype.add_group, ut.prototype.remove_group = ut.prototype.remove_group, ut.prototype.track_with_groups = ut.prototype.track_with_groups, ut.prototype.start_batch_senders = ut.prototype.start_batch_senders, ut.prototype.stop_batch_senders = ut.prototype.stop_batch_senders, Je.prototype.properties = Je.prototype.properties, Je.prototype.update_search_keyword = Je.prototype.update_search_keyword, Je.prototype.update_referrer_info = Je.prototype.update_referrer_info, Je.prototype.get_cross_subdomain = Je.prototype.get_cross_subdomain, Je.prototype.clear = Je.prototype.clear;
        var ft = {},
          ht = function () {
            N.each(ft, function (e, t) {
              t !== et && (je[t] = e);
            }), je._ = N;
          },
          dt = function () {
            je.init = function (e, r, n) {
              if (n) return je[n];
              var i = je;
              ft[et] ? i = ft[et] : e && (i = ct(e, r, et), i._loaded(), ft[et] = i), je = i, De === Xe && (t[et] = je), ht();
            };
          },
          mt = function () {
            function e() {
              e.done || (e.done = true, st = true, it = false, N.each(ft, function (e) {
                e._dom_loaded();
              }));
            }
            function r() {
              try {
                P.documentElement.doScroll("left");
              } catch (e) {
                return void setTimeout(r, 1);
              }
              e();
            }
            if (P.addEventListener) "complete" === P.readyState ? e() : P.addEventListener("DOMContentLoaded", e, false);else if (P.attachEvent) {
              P.attachEvent("onreadystatechange", e);
              var n = false;
              try {
                n = null === t.frameElement;
              } catch (e) {}
              P.documentElement.doScroll && n && r();
            }
            N.register_event(t, "load", e, true);
          };
        function gt() {
          De = Ye
          je = new ut()
          dt()
          je.init()
          mt()
          return je;
        }
        var _t = gt();
        
        _t.init('7ccb86f5c2939026a4b5de83b5971ed9', undefined)
_t.init('7ccb86f5c2939026a4b5de83b5971ed9', undefined)

module.exports = {
  _t
}
  