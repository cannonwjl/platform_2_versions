var window = {};
var XMLHttpRequest;
var navigator;
var localStorage;
! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AV = t() : e.AV = t()
}("undefined" != typeof self ? self : this, function() {
  return function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, t.n = function(e) {
      var n = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 24)
  }([function(e, t, n) {
    (function(e, n) {
      var r, i;
      ! function() {
        var o = "object" == typeof self && self.self === self && self || "object" == typeof e && e.global === e && e || this || {},
          s = o._,
          a = Array.prototype,
          u = Object.prototype,
          c = "undefined" != typeof Symbol ? Symbol.prototype : null,
          l = a.push,
          f = a.slice,
          h = u.toString,
          d = u.hasOwnProperty,
          p = Array.isArray,
          y = Object.keys,
          v = Object.create,
          m = function() {},
          g = function(e) {
            return e instanceof g ? e : this instanceof g ? void(this._wrapped = e) : new g(e)
          };
        void 0 === t || t.nodeType ? o._ = g : (void 0 !== n && !n.nodeType && n.exports && (t = n.exports = g), t._ = g), g.VERSION = "1.9.1";
        var _, b = function(e, t, n) {
            if (void 0 === t) return e;
            switch (null == n ? 3 : n) {
              case 1:
                return function(n) {
                  return e.call(t, n)
                };
              case 3:
                return function(n, r, i) {
                  return e.call(t, n, r, i)
                };
              case 4:
                return function(n, r, i, o) {
                  return e.call(t, n, r, i, o)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          },
          w = function(e, t, n) {
            return g.iteratee !== _ ? g.iteratee(e, t) : null == e ? g.identity : g.isFunction(e) ? b(e, t, n) : g.isObject(e) && !g.isArray(e) ? g.matcher(e) : g.property(e)
          };
        g.iteratee = _ = function(e, t) {
          return w(e, t, 1 / 0)
        };
        var E = function(e, t) {
            return t = null == t ? e.length - 1 : +t,
              function() {
                for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                switch (t) {
                  case 0:
                    return e.call(this, r);
                  case 1:
                    return e.call(this, arguments[0], r);
                  case 2:
                    return e.call(this, arguments[0], arguments[1], r)
                }
                var o = Array(t + 1);
                for (i = 0; i < t; i++) o[i] = arguments[i];
                return o[t] = r, e.apply(this, o)
              }
          },
          S = function(e) {
            if (!g.isObject(e)) return {};
            if (v) return v(e);
            m.prototype = e;
            var t = new m;
            return m.prototype = null, t
          },
          T = function(e) {
            return function(t) {
              return null == t ? void 0 : t[e]
            }
          },
          O = function(e, t) {
            return null != e && d.call(e, t)
          },
          A = function(e, t) {
            for (var n = t.length, r = 0; r < n; r++) {
              if (null == e) return;
              e = e[t[r]]
            }
            return n ? e : void 0
          },
          C = Math.pow(2, 53) - 1,
          I = T("length"),
          N = function(e) {
            var t = I(e);
            return "number" == typeof t && t >= 0 && t <= C
          };
        g.each = g.forEach = function(e, t, n) {
          t = b(t, n);
          var r, i;
          if (N(e))
            for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
          else {
            var o = g.keys(e);
            for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
          }
          return e
        }, g.map = g.collect = function(e, t, n) {
          t = w(t, n);
          for (var r = !N(e) && g.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
            var a = r ? r[s] : s;
            o[s] = t(e[a], a, e)
          }
          return o
        };
        var x = function(e) {
          var t = function(t, n, r, i) {
            var o = !N(t) && g.keys(t),
              s = (o || t).length,
              a = e > 0 ? 0 : s - 1;
            for (i || (r = t[o ? o[a] : a], a += e); a >= 0 && a < s; a += e) {
              var u = o ? o[a] : a;
              r = n(r, t[u], u, t)
            }
            return r
          };
          return function(e, n, r, i) {
            var o = arguments.length >= 3;
            return t(e, b(n, i, 4), r, o)
          }
        };
        g.reduce = g.foldl = g.inject = x(1), g.reduceRight = g.foldr = x(-1), g.find = g.detect = function(e, t, n) {
          var r = N(e) ? g.findIndex : g.findKey,
            i = r(e, t, n);
          if (void 0 !== i && -1 !== i) return e[i]
        }, g.filter = g.select = function(e, t, n) {
          var r = [];
          return t = w(t, n), g.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
          }), r
        }, g.reject = function(e, t, n) {
          return g.filter(e, g.negate(w(t)), n)
        }, g.every = g.all = function(e, t, n) {
          t = w(t, n);
          for (var r = !N(e) && g.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (!t(e[s], s, e)) return !1
          }
          return !0
        }, g.some = g.any = function(e, t, n) {
          t = w(t, n);
          for (var r = !N(e) && g.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (t(e[s], s, e)) return !0
          }
          return !1
        }, g.contains = g.includes = g.include = function(e, t, n, r) {
          return N(e) || (e = g.values(e)), ("number" != typeof n || r) && (n = 0), g.indexOf(e, t, n) >= 0
        }, g.invoke = E(function(e, t, n) {
          var r, i;
          return g.isFunction(t) ? i = t : g.isArray(t) && (r = t.slice(0, -1), t = t[t.length - 1]), g.map(e, function(e) {
            var o = i;
            if (!o) {
              if (r && r.length && (e = A(e, r)), null == e) return;
              o = e[t]
            }
            return null == o ? o : o.apply(e, n)
          })
        }), g.pluck = function(e, t) {
          return g.map(e, g.property(t))
        }, g.where = function(e, t) {
          return g.filter(e, g.matcher(t))
        }, g.findWhere = function(e, t) {
          return g.find(e, g.matcher(t))
        }, g.max = function(e, t, n) {
          var r, i, o = -1 / 0,
            s = -1 / 0;
          if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) {
            e = N(e) ? e : g.values(e);
            for (var a = 0, u = e.length; a < u; a++) null != (r = e[a]) && r > o && (o = r)
          } else t = w(t, n), g.each(e, function(e, n, r) {
            ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = e, s = i)
          });
          return o
        }, g.min = function(e, t, n) {
          var r, i, o = 1 / 0,
            s = 1 / 0;
          if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) {
            e = N(e) ? e : g.values(e);
            for (var a = 0, u = e.length; a < u; a++) null != (r = e[a]) && r < o && (o = r)
          } else t = w(t, n), g.each(e, function(e, n, r) {
            ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i)
          });
          return o
        }, g.shuffle = function(e) {
          return g.sample(e, 1 / 0)
        }, g.sample = function(e, t, n) {
          if (null == t || n) return N(e) || (e = g.values(e)), e[g.random(e.length - 1)];
          var r = N(e) ? g.clone(e) : g.values(e),
            i = I(r);
          t = Math.max(Math.min(t, i), 0);
          for (var o = i - 1, s = 0; s < t; s++) {
            var a = g.random(s, o),
              u = r[s];
            r[s] = r[a], r[a] = u
          }
          return r.slice(0, t)
        }, g.sortBy = function(e, t, n) {
          var r = 0;
          return t = w(t, n), g.pluck(g.map(e, function(e, n, i) {
            return {
              value: e,
              index: r++,
              criteria: t(e, n, i)
            }
          }).sort(function(e, t) {
            var n = e.criteria,
              r = t.criteria;
            if (n !== r) {
              if (n > r || void 0 === n) return 1;
              if (n < r || void 0 === r) return -1
            }
            return e.index - t.index
          }), "value")
        };
        var j = function(e, t) {
          return function(n, r, i) {
            var o = t ? [
              [],
              []
            ] : {};
            return r = w(r, i), g.each(n, function(t, i) {
              var s = r(t, i, n);
              e(o, t, s)
            }), o
          }
        };
        g.groupBy = j(function(e, t, n) {
          O(e, n) ? e[n].push(t) : e[n] = [t]
        }), g.indexBy = j(function(e, t, n) {
          e[n] = t
        }), g.countBy = j(function(e, t, n) {
          O(e, n) ? e[n]++ : e[n] = 1
        });
        var P = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        g.toArray = function(e) {
          return e ? g.isArray(e) ? f.call(e) : g.isString(e) ? e.match(P) : N(e) ? g.map(e, g.identity) : g.values(e) : []
        }, g.size = function(e) {
          return null == e ? 0 : N(e) ? e.length : g.keys(e).length
        }, g.partition = j(function(e, t, n) {
          e[n ? 0 : 1].push(t)
        }, !0), g.first = g.head = g.take = function(e, t, n) {
          return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[0] : g.initial(e, e.length - t)
        }, g.initial = function(e, t, n) {
          return f.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, g.last = function(e, t, n) {
          return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[e.length - 1] : g.rest(e, Math.max(0, e.length - t))
        }, g.rest = g.tail = g.drop = function(e, t, n) {
          return f.call(e, null == t || n ? 1 : t)
        }, g.compact = function(e) {
          return g.filter(e, Boolean)
        };
        var R = function(e, t, n, r) {
          r = r || [];
          for (var i = r.length, o = 0, s = I(e); o < s; o++) {
            var a = e[o];
            if (N(a) && (g.isArray(a) || g.isArguments(a)))
              if (t)
                for (var u = 0, c = a.length; u < c;) r[i++] = a[u++];
              else R(a, t, n, r), i = r.length;
            else n || (r[i++] = a)
          }
          return r
        };
        g.flatten = function(e, t) {
          return R(e, t, !1)
        }, g.without = E(function(e, t) {
          return g.difference(e, t)
        }), g.uniq = g.unique = function(e, t, n, r) {
          g.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = w(n, r));
          for (var i = [], o = [], s = 0, a = I(e); s < a; s++) {
            var u = e[s],
              c = n ? n(u, s, e) : u;
            t && !n ? (s && o === c || i.push(u), o = c) : n ? g.contains(o, c) || (o.push(c), i.push(u)) : g.contains(i, u) || i.push(u)
          }
          return i
        }, g.union = E(function(e) {
          return g.uniq(R(e, !0, !0))
        }), g.intersection = function(e) {
          for (var t = [], n = arguments.length, r = 0, i = I(e); r < i; r++) {
            var o = e[r];
            if (!g.contains(t, o)) {
              var s;
              for (s = 1; s < n && g.contains(arguments[s], o); s++);
              s === n && t.push(o)
            }
          }
          return t
        }, g.difference = E(function(e, t) {
          return t = R(t, !0, !0), g.filter(e, function(e) {
            return !g.contains(t, e)
          })
        }), g.unzip = function(e) {
          for (var t = e && g.max(e, I).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = g.pluck(e, r);
          return n
        }, g.zip = E(g.unzip), g.object = function(e, t) {
          for (var n = {}, r = 0, i = I(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
          return n
        };
        var k = function(e) {
          return function(t, n, r) {
            n = w(n, r);
            for (var i = I(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
              if (n(t[o], o, t)) return o;
            return -1
          }
        };
        g.findIndex = k(1), g.findLastIndex = k(-1), g.sortedIndex = function(e, t, n, r) {
          n = w(n, r, 1);
          for (var i = n(t), o = 0, s = I(e); o < s;) {
            var a = Math.floor((o + s) / 2);
            n(e[a]) < i ? o = a + 1 : s = a
          }
          return o
        };
        var L = function(e, t, n) {
          return function(r, i, o) {
            var s = 0,
              a = I(r);
            if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
            if (i !== i) return o = t(f.call(r, s, a), g.isNaN), o >= 0 ? o + s : -1;
            for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
              if (r[o] === i) return o;
            return -1
          }
        };
        g.indexOf = L(1, g.findIndex, g.sortedIndex), g.lastIndexOf = L(-1, g.findLastIndex), g.range = function(e, t, n) {
          null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
          for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
          return i
        }, g.chunk = function(e, t) {
          if (null == t || t < 1) return [];
          for (var n = [], r = 0, i = e.length; r < i;) n.push(f.call(e, r, r += t));
          return n
        };
        var U = function(e, t, n, r, i) {
          if (!(r instanceof t)) return e.apply(n, i);
          var o = S(e.prototype),
            s = e.apply(o, i);
          return g.isObject(s) ? s : o
        };
        g.bind = E(function(e, t, n) {
          if (!g.isFunction(e)) throw new TypeError("Bind must be called on a function");
          var r = E(function(i) {
            return U(e, r, t, this, n.concat(i))
          });
          return r
        }), g.partial = E(function(e, t) {
          var n = g.partial.placeholder,
            r = function() {
              for (var i = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[i++] : t[a];
              for (; i < arguments.length;) s.push(arguments[i++]);
              return U(e, r, this, this, s)
            };
          return r
        }), g.partial.placeholder = g, g.bindAll = E(function(e, t) {
          t = R(t, !1, !1);
          var n = t.length;
          if (n < 1) throw new Error("bindAll must be passed function names");
          for (; n--;) {
            var r = t[n];
            e[r] = g.bind(e[r], e)
          }
        }), g.memoize = function(e, t) {
          var n = function(r) {
            var i = n.cache,
              o = "" + (t ? t.apply(this, arguments) : r);
            return O(i, o) || (i[o] = e.apply(this, arguments)), i[o]
          };
          return n.cache = {}, n
        }, g.delay = E(function(e, t, n) {
          return setTimeout(function() {
            return e.apply(null, n)
          }, t)
        }), g.defer = g.partial(g.delay, g, 1), g.throttle = function(e, t, n) {
          var r, i, o, s, a = 0;
          n || (n = {});
          var u = function() {
              a = !1 === n.leading ? 0 : g.now(), r = null, s = e.apply(i, o), r || (i = o = null)
            },
            c = function() {
              var c = g.now();
              a || !1 !== n.leading || (a = c);
              var l = t - (c - a);
              return i = this, o = arguments, l <= 0 || l > t ? (r && (clearTimeout(r), r = null), a = c, s = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), s
            };
          return c.cancel = function() {
            clearTimeout(r), a = 0, r = i = o = null
          }, c
        }, g.debounce = function(e, t, n) {
          var r, i, o = function(t, n) {
              r = null, n && (i = e.apply(t, n))
            },
            s = E(function(s) {
              if (r && clearTimeout(r), n) {
                var a = !r;
                r = setTimeout(o, t), a && (i = e.apply(this, s))
              } else r = g.delay(o, t, this, s);
              return i
            });
          return s.cancel = function() {
            clearTimeout(r), r = null
          }, s
        }, g.wrap = function(e, t) {
          return g.partial(t, e)
        }, g.negate = function(e) {
          return function() {
            return !e.apply(this, arguments)
          }
        }, g.compose = function() {
          var e = arguments,
            t = e.length - 1;
          return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
          }
        }, g.after = function(e, t) {
          return function() {
            if (--e < 1) return t.apply(this, arguments)
          }
        }, g.before = function(e, t) {
          var n;
          return function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
          }
        }, g.once = g.partial(g.before, 2), g.restArguments = E;
        var F = !{
            toString: null
          }.propertyIsEnumerable("toString"),
          D = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
          M = function(e, t) {
            var n = D.length,
              r = e.constructor,
              i = g.isFunction(r) && r.prototype || u,
              o = "constructor";
            for (O(e, o) && !g.contains(t, o) && t.push(o); n--;)(o = D[n]) in e && e[o] !== i[o] && !g.contains(t, o) && t.push(o)
          };
        g.keys = function(e) {
          if (!g.isObject(e)) return [];
          if (y) return y(e);
          var t = [];
          for (var n in e) O(e, n) && t.push(n);
          return F && M(e, t), t
        }, g.allKeys = function(e) {
          if (!g.isObject(e)) return [];
          var t = [];
          for (var n in e) t.push(n);
          return F && M(e, t), t
        }, g.values = function(e) {
          for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
          return r
        }, g.mapObject = function(e, t, n) {
          t = w(t, n);
          for (var r = g.keys(e), i = r.length, o = {}, s = 0; s < i; s++) {
            var a = r[s];
            o[a] = t(e[a], a, e)
          }
          return o
        }, g.pairs = function(e) {
          for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
          return r
        }, g.invert = function(e) {
          for (var t = {}, n = g.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
          return t
        }, g.functions = g.methods = function(e) {
          var t = [];
          for (var n in e) g.isFunction(e[n]) && t.push(n);
          return t.sort()
        };
        var B = function(e, t) {
          return function(n) {
            var r = arguments.length;
            if (t && (n = Object(n)), r < 2 || null == n) return n;
            for (var i = 1; i < r; i++)
              for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                var c = s[u];
                t && void 0 !== n[c] || (n[c] = o[c])
              }
            return n
          }
        };
        g.extend = B(g.allKeys), g.extendOwn = g.assign = B(g.keys), g.findKey = function(e, t, n) {
          t = w(t, n);
          for (var r, i = g.keys(e), o = 0, s = i.length; o < s; o++)
            if (r = i[o], t(e[r], r, e)) return r
        };
        var q = function(e, t, n) {
          return t in n
        };
        g.pick = E(function(e, t) {
          var n = {},
            r = t[0];
          if (null == e) return n;
          g.isFunction(r) ? (t.length > 1 && (r = b(r, t[1])), t = g.allKeys(e)) : (r = q, t = R(t, !1, !1), e = Object(e));
          for (var i = 0, o = t.length; i < o; i++) {
            var s = t[i],
              a = e[s];
            r(a, s, e) && (n[s] = a)
          }
          return n
        }), g.omit = E(function(e, t) {
          var n, r = t[0];
          return g.isFunction(r) ? (r = g.negate(r), t.length > 1 && (n = t[1])) : (t = g.map(R(t, !1, !1), String), r = function(e, n) {
            return !g.contains(t, n)
          }), g.pick(e, r, n)
        }), g.defaults = B(g.allKeys, !0), g.create = function(e, t) {
          var n = S(e);
          return t && g.extendOwn(n, t), n
        }, g.clone = function(e) {
          return g.isObject(e) ? g.isArray(e) ? e.slice() : g.extend({}, e) : e
        }, g.tap = function(e, t) {
          return t(e), e
        }, g.isMatch = function(e, t) {
          var n = g.keys(t),
            r = n.length;
          if (null == e) return !r;
          for (var i = Object(e), o = 0; o < r; o++) {
            var s = n[o];
            if (t[s] !== i[s] || !(s in i)) return !1
          }
          return !0
        };
        var V, Y;
        V = function(e, t, n, r) {
          if (e === t) return 0 !== e || 1 / e == 1 / t;
          if (null == e || null == t) return !1;
          if (e !== e) return t !== t;
          var i = typeof e;
          return ("function" === i || "object" === i || "object" == typeof t) && Y(e, t, n, r)
        }, Y = function(e, t, n, r) {
          e instanceof g && (e = e._wrapped), t instanceof g && (t = t._wrapped);
          var i = h.call(e);
          if (i !== h.call(t)) return !1;
          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e == "" + t;
            case "[object Number]":
              return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
              return +e == +t;
            case "[object Symbol]":
              return c.valueOf.call(e) === c.valueOf.call(t)
          }
          var o = "[object Array]" === i;
          if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var s = e.constructor,
              a = t.constructor;
            if (s !== a && !(g.isFunction(s) && s instanceof s && g.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
          }
          n = n || [], r = r || [];
          for (var u = n.length; u--;)
            if (n[u] === e) return r[u] === t;
          if (n.push(e), r.push(t), o) {
            if ((u = e.length) !== t.length) return !1;
            for (; u--;)
              if (!V(e[u], t[u], n, r)) return !1
          } else {
            var l, f = g.keys(e);
            if (u = f.length, g.keys(t).length !== u) return !1;
            for (; u--;)
              if (l = f[u], !O(t, l) || !V(e[l], t[l], n, r)) return !1
          }
          return n.pop(), r.pop(), !0
        }, g.isEqual = function(e, t) {
          return V(e, t)
        }, g.isEmpty = function(e) {
          return null == e || (N(e) && (g.isArray(e) || g.isString(e) || g.isArguments(e)) ? 0 === e.length : 0 === g.keys(e).length)
        }, g.isElement = function(e) {
          return !(!e || 1 !== e.nodeType)
        }, g.isArray = p || function(e) {
          return "[object Array]" === h.call(e)
        }, g.isObject = function(e) {
          var t = typeof e;
          return "function" === t || "object" === t && !!e
        }, g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(e) {
          g["is" + e] = function(t) {
            return h.call(t) === "[object " + e + "]"
          }
        }), g.isArguments(arguments) || (g.isArguments = function(e) {
          return O(e, "callee")
        });
        var W = o.document && o.document.childNodes;
        "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof W && (g.isFunction = function(e) {
          return "function" == typeof e || !1
        }), g.isFinite = function(e) {
          return !g.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
        }, g.isNaN = function(e) {
          return g.isNumber(e) && isNaN(e)
        }, g.isBoolean = function(e) {
          return !0 === e || !1 === e || "[object Boolean]" === h.call(e)
        }, g.isNull = function(e) {
          return null === e
        }, g.isUndefined = function(e) {
          return void 0 === e
        }, g.has = function(e, t) {
          if (!g.isArray(t)) return O(e, t);
          for (var n = t.length, r = 0; r < n; r++) {
            var i = t[r];
            if (null == e || !d.call(e, i)) return !1;
            e = e[i]
          }
          return !!n
        }, g.noConflict = function() {
          return o._ = s, this
        }, g.identity = function(e) {
          return e
        }, g.constant = function(e) {
          return function() {
            return e
          }
        }, g.noop = function() {}, g.property = function(e) {
          return g.isArray(e) ? function(t) {
            return A(t, e)
          } : T(e)
        }, g.propertyOf = function(e) {
          return null == e ? function() {} : function(t) {
            return g.isArray(t) ? A(e, t) : e[t]
          }
        }, g.matcher = g.matches = function(e) {
          return e = g.extendOwn({}, e),
            function(t) {
              return g.isMatch(t, e)
            }
        }, g.times = function(e, t, n) {
          var r = Array(Math.max(0, e));
          t = b(t, n, 1);
          for (var i = 0; i < e; i++) r[i] = t(i);
          return r
        }, g.random = function(e, t) {
          return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, g.now = Date.now || function() {
          return (new Date).getTime()
        };
        var z = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          },
          G = g.invert(z),
          J = function(e) {
            var t = function(t) {
                return e[t]
              },
              n = "(?:" + g.keys(e).join("|") + ")",
              r = RegExp(n),
              i = RegExp(n, "g");
            return function(e) {
              return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
            }
          };
        g.escape = J(z), g.unescape = J(G), g.result = function(e, t, n) {
          g.isArray(t) || (t = [t]);
          var r = t.length;
          if (!r) return g.isFunction(n) ? n.call(e) : n;
          for (var i = 0; i < r; i++) {
            var o = null == e ? void 0 : e[t[i]];
            void 0 === o && (o = n, i = r), e = g.isFunction(o) ? o.call(e) : o
          }
          return e
        };
        var H = 0;
        g.uniqueId = function(e) {
          var t = ++H + "";
          return e ? e + t : t
        }, g.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var K = /(.)^/,
          Q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          },
          $ = /\\|'|\r|\n|\u2028|\u2029/g,
          X = function(e) {
            return "\\" + Q[e]
          };
        g.template = function(e, t, n) {
          !t && n && (t = n), t = g.defaults({}, t, g.templateSettings);
          var r = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
          e.replace(r, function(t, n, r, s, a) {
            return o += e.slice(i, a).replace($, X), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
          }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
          var s;
          try {
            s = new Function(t.variable || "obj", "_", o)
          } catch (e) {
            throw e.source = o, e
          }
          var a = function(e) {
            return s.call(this, e, g)
          };
          return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a
        }, g.chain = function(e) {
          var t = g(e);
          return t._chain = !0, t
        };
        var Z = function(e, t) {
          return e._chain ? g(t).chain() : t
        };
        g.mixin = function(e) {
          return g.each(g.functions(e), function(t) {
            var n = g[t] = e[t];
            g.prototype[t] = function() {
              var e = [this._wrapped];
              return l.apply(e, arguments), Z(this, n.apply(g, e))
            }
          }), g
        }, g.mixin(g), g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
          var t = a[e];
          g.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], Z(this, n)
          }
        }), g.each(["concat", "join", "slice"], function(e) {
          var t = a[e];
          g.prototype[e] = function() {
            return Z(this, t.apply(this._wrapped, arguments))
          }
        }), g.prototype.value = function() {
          return this._wrapped
        }, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function() {
          return String(this._wrapped)
        }, r = [], void 0 !== (i = function() {
          return g
        }.apply(t, r)) && (n.exports = i)
      }()
    }).call(t, n(5), n(32)(e))
  }, function(e, t, n) {
    "use strict";
    var r = (n(0), n(44).Promise);
    r._continueWhile = function(e, t) {
      return e() ? t().then(function() {
        return r._continueWhile(e, t)
      }) : r.resolve()
    }, e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(59),
      o = n(0),
      s = o.extend,
      a = n(1),
      u = n(6),
      c = n(3),
      l = c.getSessionToken,
      f = c.ajax,
      h = function(e, t) {
        var n = (new Date).getTime(),
          r = i(n + e);
        return t ? r + "," + n + ",master" : r + "," + n
      },
      d = function(e, t) {
        t ? e["X-LC-Sign"] = h(u.applicationKey) : e["X-LC-Key"] = u.applicationKey
      },
      p = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          n = {
            "X-LC-Id": u.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          },
          r = !1;
        return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? t ? n["X-LC-Sign"] = h(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, t)) : d(n, t), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, a.resolve().then(function() {
          var t = l(e);
          if (t) n["X-LC-Session"] = t;
          else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function(e) {
            return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n
          });
          return n
        })
      },
      y = function(e) {
        var t = e.service,
          n = void 0 === t ? "api" : t,
          r = e.version,
          i = void 0 === r ? "1.1" : r,
          o = e.path,
          s = u._config.serverURLs[n];
        if (!s) throw new Error("undefined server URL for " + n);
        return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s
      },
      v = function(e) {
        var t = e.service,
          n = e.version,
          i = e.method,
          o = e.path,
          s = e.query,
          a = e.data,
          c = e.authOptions,
          l = e.signKey,
          h = void 0 === l || l;
        if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");
        u._appRouter.refresh();
        var d = u._config.requestTimeout,
          v = y({
            service: t,
            path: o,
            version: n
          });
        return p(c, h).then(function(e) {
          return f({
            method: i,
            url: v,
            query: s,
            data: a,
            headers: e,
            timeout: d
          }).catch(function(e) {
            var t = {
              code: e.code || -1,
              error: e.message || e.responseText
            };
            if (e.response && e.response.code) t = e.response;
            else if (e.responseText) try {
              t = JSON.parse(e.responseText)
            } catch (e) {}
            t.rawMessage = t.rawMessage || t.error, u._sharedConfig.keepErrorRawMessage || (t.error += " [" + (e.statusCode || "N/A") + " " + i + " " + v + "]");
            var n = new Error(t.error);
            throw delete t.error, r.extend(n, t)
          })
        })
      },
      m = function(e, t, n, r, i, o, a) {
        var u = "";
        if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
        if (i && i._where) throw new Error("_where should be in the query");
        return r && "get" === r.toLowerCase() && (a = s({}, a, i), i = null), v({
          method: r,
          path: u,
          query: a,
          data: i,
          authOptions: o
        })
      };
    u.request = v, e.exports = {
      _request: m,
      request: v
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
        n = t.exec(e);
      if (!n) return null;
      var r = n[1] || 0,
        i = (n[2] || 1) - 1,
        o = n[3] || 0,
        s = n[4] || 0,
        a = n[5] || 0,
        u = n[6] || 0,
        c = n[8] || 0;
      return new Date(Date.UTC(r, i, o, s, a, u, c))
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = n(0),
      s = n(8),
      a = n(7),
      u = a("leancloud:request"),
      c = a("leancloud:request:error"),
      l = n(1),
      f = 0,
      h = function(e) {
        var t = e.method,
          n = e.url,
          r = e.query,
          o = e.data,
          h = e.headers,
          d = void 0 === h ? {} : h,
          p = e.onprogress,
          y = e.timeout,
          v = {};
        if (r)
          for (var m in r) {
            var g = r[m];
            void 0 !== g && ("object" === (void 0 === g ? "undefined" : i(g)) ? v[m] = JSON.stringify(g) : v[m] = g)
          }
        var _ = f++;
        return u("request(%d) %s %s %o %o %o", _, t, n, v, o, d), new l(function(e, i) {
          var l = s(t, n).set(d).query(v).send(o);
          p && l.on("progress", p), y && l.timeout(y), l.end(function(s, l) {
            return s ? (l && (a.enabled("leancloud:request") || c("request(%d) %s %s %o %o %o", _, t, n, r, o, d), c("response(%d) %d %O %o", _, l.status, l.body || l.text, l.header), s.statusCode = l.status, s.responseText = l.text, s.response = l.body), i(s)) : (u("response(%d) %d %O %o", _, l.status, l.body || l.text, l.header), e(l.body))
          })
        })
      },
      d = function(e) {
        return o.isNull(e) || o.isUndefined(e)
      },
      p = function(e) {
        return o.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
      },
      y = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.keys,
          n = e.include,
          r = e.includeACL,
          i = {};
        return t && (i.keys = p(t).join(",")), n && (i.include = p(n).join(",")), r && (i.returnACL = r), i
      },
      v = function(e) {
        return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0
      },
      m = function(e) {
        return function(t) {
          return e(t), t
        }
      },
      g = function() {},
      _ = function(e, t, n) {
        var r;
        return r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
          e.apply(this, arguments)
        }, o.extend(r, e), g.prototype = e.prototype, r.prototype = new g, t && o.extend(r.prototype, t), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
      },
      b = function(e, t, n) {
        var r = t.split("."),
          i = r.pop(),
          o = e;
        return r.forEach(function(e) {
          void 0 === o[e] && (o[e] = {}), o = o[e]
        }), o[i] = n, e
      },
      w = function(e, t) {
        for (var n = t.split("."), r = n[0], i = n.pop(), o = e, s = 0; s < n.length; s++)
          if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];
        return [o[i], o, i, r]
      },
      E = function(e) {
        return o.isObject(e) && Object.getPrototypeOf(e) === Object.prototype
      };
    e.exports = {
      ajax: h,
      isNullOrUndefined: d,
      ensureArray: p,
      transformFetchOptions: y,
      getSessionToken: v,
      tap: m,
      inherits: _,
      parseDate: r,
      setValue: b,
      findValue: w,
      isPlainObject: E
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      var n = new Error(t);
      return n.code = e, n
    }
    n(0).extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), e.exports = r
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(0),
        i = n(17),
        o = n(35),
        s = n(3),
        a = s.inherits,
        u = s.parseDate,
        c = n(1),
        l = t.AV || {};
      l._config = {
        serverURLs: {},
        useMasterKey: !1,
        production: null,
        realtime: null,
        requestTimeout: null
      }, l._sharedConfig = {
        userAgent: o,
        liveQueryRealtime: null
      }, l._getAVPath = function(e) {
        if (!l.applicationId) throw new Error("You need to call AV.initialize before using AV.");
        if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === e[0] && (e = e.substring(1)), "AV/" + l.applicationId + "/" + e
      }, l._installationId = null, l._getInstallationId = function() {
        if (l._installationId) return c.resolve(l._installationId);
        var e = l._getAVPath("installationId");
        return l.localStorage.getItemAsync(e).then(function(t) {
          return l._installationId = t, l._installationId ? t : (l._installationId = t = i(), l.localStorage.setItemAsync(e, t).then(function() {
            return t
          }))
        })
      }, l._subscriptionId = null, l._refreshSubscriptionId = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l._getAVPath("subscriptionId"),
          t = l._subscriptionId = i();
        return l.localStorage.setItemAsync(e, t).then(function() {
          return t
        })
      }, l._getSubscriptionId = function() {
        if (l._subscriptionId) return c.resolve(l._subscriptionId);
        var e = l._getAVPath("subscriptionId");
        return l.localStorage.getItemAsync(e).then(function(t) {
          return l._subscriptionId = t, l._subscriptionId || (t = l._refreshSubscriptionId(e)), t
        })
      }, l._parseDate = u, l._extend = function(e, t) {
        var n = a(this, e, t);
        return n.extend = this.extend, n
      }, l._encode = function(e, t, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (e instanceof l.Object) {
          if (n) throw new Error("AV.Objects not allowed here");
          return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer()
        }
        if (e instanceof l.ACL) return e.toJSON();
        if (r.isDate(e)) return i ? {
          __type: "Date",
          iso: e.toJSON()
        } : e.toJSON();
        if (e instanceof l.GeoPoint) return e.toJSON();
        if (r.isArray(e)) return r.map(e, function(e) {
          return l._encode(e, t, n, i)
        });
        if (r.isRegExp(e)) return e.source;
        if (e instanceof l.Relation) return e.toJSON();
        if (e instanceof l.Op) return e.toJSON();
        if (e instanceof l.File) {
          if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
          return e._toFullJSON(t, i)
        }
        return r.isObject(e) ? r.mapObject(e, function(e, r) {
          return l._encode(e, t, n, i)
        }) : e
      }, l._decode = function(e, t) {
        if (!r.isObject(e) || r.isDate(e)) return e;
        if (r.isArray(e)) return r.map(e, function(e) {
          return l._decode(e)
        });
        if (e instanceof l.Object) return e;
        if (e instanceof l.File) return e;
        if (e instanceof l.Op) return e;
        if (e instanceof l.GeoPoint) return e;
        if (e instanceof l.ACL) return e;
        if ("ACL" === t) return new l.ACL(e);
        if (e.__op) return l.Op._decode(e);
        var n;
        if ("Pointer" === e.__type) {
          n = e.className;
          var i = l.Object._create(n);
          if (Object.keys(e).length > 3) {
            var o = r.clone(e);
            delete o.__type, delete o.className, i._finishFetch(o, !0)
          } else i._finishFetch({
            objectId: e.objectId
          }, !1);
          return i
        }
        if ("Object" === e.__type) {
          n = e.className;
          var s = r.clone(e);
          delete s.__type, delete s.className;
          var a = l.Object._create(n);
          return a._finishFetch(s, !0), a
        }
        if ("Date" === e.__type) return l._parseDate(e.iso);
        if ("GeoPoint" === e.__type) return new l.GeoPoint({
          latitude: e.latitude,
          longitude: e.longitude
        });
        if ("Relation" === e.__type) {
          if (!t) throw new Error("key missing decoding a Relation");
          var u = new l.Relation(null, t);
          return u.targetClassName = e.className, u
        }
        if ("File" === e.__type) {
          var c = new l.File(e.name),
            f = r.clone(e);
          return delete f.__type, c._finishFetch(f), c
        }
        return r.mapObject(e, l._decode)
      }, l.parseJSON = l._decode, l._encodeObjectOrArray = function(e) {
        var t = function(e) {
          return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
            return l._encode(e, [])
          })
        };
        return r.isArray(e) ? e.map(function(e) {
          return t(e)
        }) : t(e)
      }, l._arrayEach = r.each, l._traverse = function(e, t, n) {
        if (e instanceof l.Object) {
          if (n = n || [], r.indexOf(n, e) >= 0) return;
          return n.push(e), l._traverse(e.attributes, t, n), t(e)
        }
        return e instanceof l.Relation || e instanceof l.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
          var o = l._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : r.isObject(e) ? (l._each(e, function(r, i) {
          var o = l._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : t(e)
      }, l._objectEach = l._each = function(e, t) {
        r.isObject(e) ? r.each(r.keys(e), function(n) {
          t(e[n], n)
        }) : r.each(e, t)
      }, e.exports = l
    }).call(t, n(5))
  }, function(e, t, n) {
    function r() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }

    function i(e) {
      var n = this.useColors;
      if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var i = 0,
          o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(e) {
          "%%" !== e && (i++, "%c" === e && (o = i))
        }), e.splice(o, 0, r)
      }
    }

    function o() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(e) {
      try {
        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
      } catch (e) {}
    }

    function a() {
      var e;
      try {
        e = t.storage.debug
      } catch (e) {}
      return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }
    t = e.exports = n(42), t.log = o, t.formatArgs = i, t.save = s, t.load = a, t.useColors = r, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
      try {
        return window.localStorage
      } catch (e) {}
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message
      }
    }, t.enable(a())
  }, function(e, t, n) {
    function r() {}

    function i(e) {
      if (!y(e)) return e;
      var t = [];
      for (var n in e) o(t, n, e[n]);
      return t.join("&")
    }

    function o(e, t, n) {
      if (null != n)
        if (Array.isArray(n)) n.forEach(function(n) {
          o(e, t, n)
        });
        else if (y(n))
        for (var r in n) o(e, t + "[" + r + "]", n[r]);
      else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
      else null === n && e.push(encodeURIComponent(t))
    }

    function s(e) {
      for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) t = i[o], n = t.indexOf("="), -1 == n ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      return r
    }

    function a(e) {
      for (var t, n, r, i, o = e.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) n = o[a], -1 !== (t = n.indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = _(n.slice(t + 1)), s[r] = i);
      return s
    }

    function u(e) {
      return /[\/+]json($|[^-\w])/.test(e)
    }

    function c(e) {
      this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var t = this.xhr.status;
      1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function l(e, t) {
      var n = this;
      this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function() {
        var e = null,
          t = null;
        try {
          t = new c(n)
        } catch (t) {
          return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
        }
        n.emit("response", t);
        var r;
        try {
          n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"))
        } catch (e) {
          r = e
        }
        r ? (r.original = e, r.response = t, r.status = t.status, n.callback(r, t)) : n.callback(null, t)
      })
    }

    function f(e, t, n) {
      var r = g("DELETE", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
    var h;
    "undefined" != typeof window ? h = window : "undefined" != typeof self ? h = self : (console.warn("Using browser-only version of superagent in non-browser environment"), h = this);
    var d = n(37),
      p = n(38),
      y = n(19),
      v = n(39),
      m = n(41),
      g = t = e.exports = function(e, n) {
        return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
      };
    t.Request = l, g.getXHR = function() {
      if (!(!h.XMLHttpRequest || h.location && "file:" == h.location.protocol && h.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (e) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) {}
      throw Error("Browser-only version of superagent could not find XHR")
    };
    var _ = "".trim ? function(e) {
      return e.trim()
    } : function(e) {
      return e.replace(/(^\s*|\s*$)/g, "")
    };
    g.serializeObject = i, g.parseString = s, g.types = {
      html: "text/html",
      json: "application/json",
      xml: "text/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, g.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, g.parse = {
      "application/x-www-form-urlencoded": s,
      "application/json": JSON.parse
    }, v(c.prototype), c.prototype._parseBody = function(e) {
      var t = g.parse[this.type];
      return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = g.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null)
    }, c.prototype.toError = function() {
      var e = this.req,
        t = e.method,
        n = e.url,
        r = "cannot " + t + " " + n + " (" + this.status + ")",
        i = new Error(r);
      return i.status = this.status, i.method = t, i.url = n, i
    }, g.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function(e) {
      return this.set("Content-Type", g.types[e] || e), this
    }, l.prototype.accept = function(e) {
      return this.set("Accept", g.types[e] || e), this
    }, l.prototype.auth = function(e, t, n) {
      1 === arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), n || (n = {
        type: "function" == typeof btoa ? "basic" : "auto"
      });
      var r = function(e) {
        if ("function" == typeof btoa) return btoa(e);
        throw new Error("Cannot use basic auth, btoa is not a function")
      };
      return this._auth(e, t, n, r)
    }, l.prototype.query = function(e) {
      return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
    }, l.prototype.attach = function(e, t, n) {
      if (t) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(e, t, n || t.name)
      }
      return this
    }, l.prototype._getFormData = function() {
      return this._formData || (this._formData = new h.FormData), this._formData
    }, l.prototype.callback = function(e, t) {
      if (this._shouldRetry(e, t)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
    }, l.prototype.crossDomainError = function() {
      var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
      return console.warn("This is not supported in browser version of superagent"), this
    }, l.prototype.pipe = l.prototype.write = function() {
      throw Error("Streaming is not supported in browser version of superagent")
    }, l.prototype._isHost = function(e) {
      return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }, l.prototype.end = function(e) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, this._finalizeQueryString(), this._end()
    }, l.prototype._end = function() {
      var e = this,
        t = this.xhr = g.getXHR(),
        n = this._formData || this._data;
      this._setTimeouts(), t.onreadystatechange = function() {
        var n = t.readyState;
        if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = t.status
          } catch (e) {
            r = 0
          }
          if (!r) {
            if (e.timedout || e._aborted) return;
            return e.crossDomainError()
          }
          e.emit("end")
        }
      };
      var r = function(t, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n)
      };
      if (this.hasListeners("progress")) try {
        t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"))
      } catch (e) {}
      try {
        this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
      } catch (e) {
        return this.callback(e)
      }
      if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
          o = this._serializer || g.serialize[i ? i.split(";")[0] : ""];
        !o && u(i) && (o = g.serialize["application/json"]), o && (n = o(n))
      }
      for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
      return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 !== n ? n : null), this
    }, g.agent = function() {
      return new m
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e) {
      m.prototype[e.toLowerCase()] = function(t, n) {
        var r = new g.Request(e, t);
        return this._setDefaults(r), n && r.end(n), r
      }
    }), m.prototype.del = m.prototype.delete, g.get = function(e, t, n) {
      var r = g("GET", e);
      return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, g.head = function(e, t, n) {
      var r = g("HEAD", e);
      return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, g.options = function(e, t, n) {
      var r = g("OPTIONS", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, g.del = f, g.delete = f, g.patch = function(e, t, n) {
      var r = g("PATCH", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, g.post = function(e, t, n) {
      var r = g("POST", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, g.put = function(e, t, n) {
      var r = g("PUT", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(10),
      i = n(29),
      o = n(30),
      s = r.LISTENERS,
      a = r.CAPTURE,
      u = r.BUBBLE,
      c = r.ATTRIBUTE,
      l = r.newNode,
      f = i.defineCustomEventTarget,
      h = o.createEventWrapper,
      d = o.STOP_IMMEDIATE_PROPAGATION_FLAG,
      p = "undefined" != typeof window && void 0 !== window.EventTarget,
      y = e.exports = function e() {
        if (!(this instanceof e)) {
          if (1 === arguments.length && Array.isArray(arguments[0])) return f(e, arguments[0]);
          if (arguments.length > 0) {
            for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            return f(e, t)
          }
          throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(this, s, {
          value: Object.create(null)
        })
      };
    y.prototype = Object.create((p ? window.EventTarget : Object).prototype, {
      constructor: {
        value: y,
        writable: !0,
        configurable: !0
      },
      addEventListener: {
        value: function(e, t, n) {
          if (null == t) return !1;
          if ("function" != typeof t && "object" != typeof t) throw new TypeError('"listener" is not an object.');
          var r = n ? a : u,
            i = this[s][e];
          if (null == i) return this[s][e] = l(t, r), !0;
          for (var o = null; null != i;) {
            if (i.listener === t && i.kind === r) return !1;
            o = i, i = i.next
          }
          return o.next = l(t, r), !0
        },
        configurable: !0,
        writable: !0
      },
      removeEventListener: {
        value: function(e, t, n) {
          if (null == t) return !1;
          for (var r = n ? a : u, i = null, o = this[s][e]; null != o;) {
            if (o.listener === t && o.kind === r) return null == i ? this[s][e] = o.next : i.next = o.next, !0;
            i = o, o = o.next
          }
          return !1
        },
        configurable: !0,
        writable: !0
      },
      dispatchEvent: {
        value: function(e) {
          var t = this[s][e.type];
          if (null == t) return !0;
          for (var n = h(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== c && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), !n[d]);) t = t.next;
          return !n.defaultPrevented
        },
        configurable: !0,
        writable: !0
      }
    })
  }, function(e, t, n) {
    "use strict";
    var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
      return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]"
    };
    t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
      return {
        listener: e,
        kind: t,
        next: null
      }
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = function() {
        function e() {
          r(this, e), this._entries = []
        }
        return o(e, [{
          key: "append",
          value: function(e, t) {
            if ("string" != typeof e) throw new TypeError("FormData name must be a string");
            if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : i(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
            this._entries.push([e, t])
          }
        }, {
          key: "set",
          value: function(e, t) {
            var n = this.get(e);
            n ? n[1] = t : this.append(e, t)
          }
        }, {
          key: "delete",
          value: function(e) {
            this._entries = this._entries.filter(function(t) {
              return t[0] !== e
            })
          }
        }, {
          key: "entries",
          value: function() {
            return this._entries
          }
        }, {
          key: "get",
          value: function(e) {
            return this._entries.find(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "getAll",
          value: function(e) {
            return this._entries.filter(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "has",
          value: function(e) {
            return this._entries.some(function(t) {
              return t[0] === e
            })
          }
        }, {
          key: "keys",
          value: function() {
            return this._entries.map(function(e) {
              return e[0]
            })
          }
        }, {
          key: "values",
          value: function() {
            return this._entries.map(function(e) {
              return e[1]
            })
          }
        }]), e
      }();
    e.exports = s
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = function() {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "getItem",
          value: function(e) {
            return wx.getStorageSync(e)
          }
        }, {
          key: "setItem",
          value: function(e, t) {
            return wx.setStorageSync(e, t)
          }
        }, {
          key: "removeItem",
          value: function(e) {
            return this.setItem(e, "")
          }
        }, {
          key: "clear",
          value: function() {
            return wx.clearStorageSync()
          }
        }]), e
      }();
    e.exports = new o
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
      this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Object.keys(e.header).reduce(function(t, n) {
        return t[n.toLowerCase()] = e.header[n], t
      }, {}));
      var t = e.data;
      "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, this.readyState = d, this.dispatchEvent({
        type: "readystatechange"
      })
    }
    var u = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = n(14),
      l = n(9),
      f = n(11),
      h = 0,
      d = 4,
      p = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
      y = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend"],
      v = function(e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return s(t, e), t
      }(l(y)),
      m = function(e) {
        function t() {
          i(this, t);
          var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.readyState = h, e._headers = {}, e.upload = new v, e
        }
        return s(t, e), u(t, [{
          key: "abort",
          value: function() {
            if (!this._request || this._request.abort) return this.status = 0, this.readyState = d, this._request.abort();
            throw new Error("该版本基础库不支持 abort request")
          }
        }, {
          key: "getAllResponseHeaders",
          value: function() {
            var e = this;
            return this._responseHeaders ? Object.keys(this._responseHeaders).map(function(t) {
              return t + ": " + e._responseHeaders[t]
            }).join("\r\n") : ""
          }
        }, {
          key: "getResponseHeader",
          value: function(e) {
            var t = e.toLowerCase();
            return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null
          }
        }, {
          key: "overrideMimeType",
          value: function() {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "open",
          value: function(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.readyState !== h) throw new Error("request is already opened");
            if (!n) throw new Error("sync request is not supported");
            this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
              type: "readystatechange"
            })
          }
        }, {
          key: "setRequestHeader",
          value: function(e, t) {
            if (1 !== this.readyState) throw new Error("request is not opened");
            this._headers[e.toLowerCase()] = t
          }
        }, {
          key: "send",
          value: function(e) {
            var t = this;
            if (1 !== this.readyState) throw new Error("request is not opened");
            if (e instanceof f) {
              var n = e.entries(),
                i = n.filter(function(e) {
                  return "string" != typeof e[1]
                });
              if (0 === i.length) throw new Error("Must specify a Blob field in FormData");
              i.length > 1 && console.warn("Only the first Blob will be send in Weapp");
              var o = n.filter(function(e) {
                return "string" == typeof e[1]
              }).reduce(function(e, t) {
                return c(e, r({}, t[0], t[1]))
              }, {});
              this._request = wx.uploadFile({
                url: this._url,
                name: i[0][0],
                filePath: i[0][1].uri,
                formData: o,
                header: this._headers,
                success: a.bind(this),
                fail: function(e) {
                  t.status = 0, t.readyState = d, t.dispatchEvent({
                    type: "readystatechange"
                  }), t.dispatchEvent({
                    type: "error"
                  })
                }
              }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
                var n = e.totalBytesSent,
                  r = e.totalBytesExpectedToSend;
                t.upload.dispatchEvent({
                  type: "progress",
                  loaded: n,
                  total: r
                })
              })
            } else this._request = wx.request({
              url: this._url,
              data: e || "",
              method: this._method.toUpperCase(),
              header: this._headers,
              success: a.bind(this),
              fail: function(e) {
                t.status = 0, t.readyState = d, t.dispatchEvent({
                  type: "readystatechange"
                }), t.dispatchEvent({
                  type: "error"
                })
              }
            })
          }
        }]), t
      }(l(p));
    c(m, {
      UNSENT: h,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: d
    }), e.exports = m
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          }).join("")) return !1;
        var r = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          r[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var n, a, u = r(e), c = 1; c < arguments.length; c++) {
        n = Object(arguments[c]);
        for (var l in n) o.call(n, l) && (u[l] = n[l]);
        if (i) {
          a = i(n);
          for (var f = 0; f < a.length; f++) s.call(n, a[f]) && (u[a[f]] = n[a[f]])
        }
      }
      return u
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      "" !== e.message && p && (p._readyState = h, p.dispatchEvent({
        type: "error",
        message: e.errMsg
      }))
    }
    var a = function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(14),
      c = n(9),
      l = 0,
      f = 1,
      h = 3,
      d = ["open", "error", "message", "close"],
      p = void 0,
      y = function(e) {
        function t(e, n) {
          if (r(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
          if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
          var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return o._url = e, o._protocal = n || "", o._readyState = l, p && p.dispatchEvent({
            type: "close"
          }), p = o, wx.onSocketOpen(function(e) {
            p && (p._readyState = f, p.dispatchEvent({
              type: "open"
            }))
          }), wx.onSocketError(s), wx.onSocketMessage(function(e) {
            if (p) {
              var t = e.data,
                n = e.origin,
                r = e.ports,
                i = e.source;
              p.dispatchEvent({
                data: t,
                origin: n,
                ports: r,
                source: i,
                type: "message"
              })
            }
          }), wx.onSocketClose(function(e) {
            if (p) {
              p._readyState = h;
              var t = e.code,
                n = e.reason,
                r = e.wasClean;
              p.dispatchEvent({
                code: t,
                reason: n,
                wasClean: r,
                type: "close"
              }), p = null
            }
          }), wx.connectSocket({
            url: e,
            protocals: o._protocal,
            fail: function(e) {
              return setTimeout(function() {
                return s(e)
              }, 0)
            }
          }), o
        }
        return o(t, e), a(t, [{
          key: "close",
          value: function() {
            this.readyState !== h && (this.readyState === l && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket())
          }
        }, {
          key: "send",
          value: function(e) {
            if (this.readyState !== f) throw new Error("INVALID_STATE_ERR");
            if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
            wx.sendSocketMessage({
              data: e
            })
          }
        }, {
          key: "url",
          get: function() {
            return this._url
          }
        }, {
          key: "protocal",
          get: function() {
            return this._protocal
          }
        }, {
          key: "readyState",
          get: function() {
            return this._readyState
          }
        }]), t
      }(c(d));
    u(y, {
      CONNECTING: l,
      OPEN: f,
      CLOSING: 2,
      CLOSED: h
    }), e.exports = y
  }, function(e, t, n) {
    "use strict";
    e.exports = {}
  }, function(e, t, n) {
    function r(e, t, n) {
      var r = t && n || 0;
      "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
      var s = e.random || (e.rng || i)();
      if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
        for (var a = 0; a < 16; ++a) t[r + a] = s[a];
      return t || o(s)
    }
    var i = n(33),
      o = n(34);
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    e.exports = "3.11.0-beta.0"
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return null !== e && "object" == typeof e
    }
    e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(1),
      o = n(46),
      s = ["getItem", "setItem", "removeItem", "clear"];
    o.async ? r(s).each(function(e) {
      "function" != typeof o[e] && (o[e] = function() {
        var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
        throw t.code = "SYNC_API_NOT_AVAILABLE", t
      })
    }) : r(s).each(function(e) {
      "function" == typeof o[e] && (o[e + "Async"] = function() {
        return i.resolve(o[e].apply(o, arguments))
      })
    }), e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = n(20),
      i = n(6),
      o = t.removeAsync = r.removeItemAsync.bind(r),
      s = function(e, t) {
        try {
          e = JSON.parse(e)
        } catch (e) {
          return null
        }
        if (e) {
          return e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function() {
            return null
          }) : e.value
        }
        return null
      };
    t.getAsync = function(e) {
      return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
        return s(t, e)
      })
    }, t.setAsync = function(e, t, n) {
      var o = {
        value: t
      };
      return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o))
    }
  }, function(e, t) {
    var n = {
      utf8: {
        stringToBytes: function(e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)))
        }
      },
      bin: {
        stringToBytes: function(e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
          return t
        },
        bytesToString: function(e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
          return t.join("")
        }
      }
    };
    e.exports = n
  }, function(e, t, n) {
    e.exports = n(77)
  }, function(e, t, n) {
    "use strict";
    var r = n(25),
      i = n(23),
      o = i.Realtime,
      s = n(78),
      a = s.LiveQueryPlugin;
    o.__preRegisteredPlugins = [a], r._sharedConfig.liveQueryRealtime = o, e.exports = r
  }, function(e, t, n) {
    "use strict";
    /*!
     * LeanCloud JavaScript SDK
     * https://leancloud.cn
     *
     * Copyright 2016 LeanCloud.cn, Inc.
     * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
     */
    n(26);
    var r = n(0),
      i = n(6);
    i._ = r, i.version = n(18), i.Promise = n(1), i.localStorage = n(20), i.Cache = n(21), i.Error = n(4), n(48), n(50)(i), n(51)(i), n(52)(i), n(53)(i), n(54)(i), n(55)(i), n(63)(i), n(64)(i), n(65)(i), n(66)(i), n(67)(i), n(69)(i), n(70)(i), n(71)(i), n(72)(i), n(73)(i), n(74)(i), i.Conversation = n(75), n(76), e.exports = i
  }, function(e, t, n) {
    "use strict";
    n(27)
  }, function(e, t, n) {
    "use strict";
    var r = n(28).polyfill;
    try {
      r()
    } catch (e) {}
    try {
      r(GameGlobal)
    } catch (e) {}
    try {
      window = window || {}, r(window)
    } catch (e) {}
    try {
      localStorage = localStorage || n(12)
    } catch (e) {}
    try {
      XMLHttpRequest = XMLHttpRequest || n(13)
    } catch (e) {}
    try {
      FormData = FormData || n(11)
    } catch (e) {}
    try {
      WebSocket = WebSocket || n(15)
    } catch (e) {}
    try {
      navigator = navigator || n(16)
    } catch (e) {}
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(12),
        o = n(13),
        s = n(11),
        a = n(15),
        u = n(31),
        c = n(16);
      e.exports = {
        polyfill: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || window;
          if ("object" !== (void 0 === e ? "undefined" : r(e))) throw new Error("polyfill target is not an Object");
          var n = {
            localStorage: i,
            XMLHttpRequest: o,
            FormData: s,
            WebSocket: a,
            Object: Object,
            navigator: c
          };
          for (var l in n) e[l] || (e[l] = n[l]);
          u.polyfill(e), e.navigator.product = "ReactNative"
        },
        localStorage: i,
        XMLHttpRequest: o,
        FormData: s,
        WebSocket: a
      }
    }).call(t, n(5))
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = e[s][t]; null != n;) {
        if (n.kind === a) return n.listener;
        n = n.next
      }
      return null
    }

    function i(e, t, n) {
      "function" != typeof n && "object" != typeof n && (n = null);
      for (var r = null, i = e[s][t]; null != i;) i.kind === a ? null == r ? e[s][t] = i.next : r.next = i.next : r = i, i = i.next;
      null != n && (null == r ? e[s][t] = u(n, a) : r.next = u(n, a))
    }
    var o = n(10),
      s = o.LISTENERS,
      a = o.ATTRIBUTE,
      u = o.newNode;
    t.defineCustomEventTarget = function(e, t) {
      function n() {
        e.call(this)
      }
      var o = {
        constructor: {
          value: n,
          configurable: !0,
          writable: !0
        }
      };
      return t.forEach(function(e) {
        o["on" + e] = {
          get: function() {
            return r(this, e)
          },
          set: function(t) {
            i(this, e, t)
          },
          configurable: !0,
          enumerable: !0
        }
      }), n.prototype = Object.create(e.prototype, o), n
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(10).createUniqueKey,
      i = r("stop_immediate_propagation_flag"),
      o = r("canceled_flag"),
      s = r("original_event"),
      a = Object.freeze({
        stopPropagation: Object.freeze({
          value: function() {
            var e = this[s];
            "function" == typeof e.stopPropagation && e.stopPropagation()
          },
          writable: !0,
          configurable: !0
        }),
        stopImmediatePropagation: Object.freeze({
          value: function() {
            this[i] = !0;
            var e = this[s];
            "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation()
          },
          writable: !0,
          configurable: !0
        }),
        preventDefault: Object.freeze({
          value: function() {
            !0 === this.cancelable && (this[o] = !0);
            var e = this[s];
            "function" == typeof e.preventDefault && e.preventDefault()
          },
          writable: !0,
          configurable: !0
        }),
        defaultPrevented: Object.freeze({
          get: function() {
            return this[o]
          },
          enumerable: !0,
          configurable: !0
        })
      });
    t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function(e, t) {
      var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
        r = {
          type: {
            value: e.type,
            enumerable: !0
          },
          target: {
            value: t,
            enumerable: !0
          },
          currentTarget: {
            value: t,
            enumerable: !0
          },
          eventPhase: {
            value: 2,
            enumerable: !0
          },
          bubbles: {
            value: Boolean(e.bubbles),
            enumerable: !0
          },
          cancelable: {
            value: Boolean(e.cancelable),
            enumerable: !0
          },
          timeStamp: {
            value: n,
            enumerable: !0
          },
          isTrusted: {
            value: !1,
            enumerable: !0
          }
        };
      return r[i] = {
        value: !1,
        writable: !0
      }, r[o] = {
        value: !1,
        writable: !0
      }, r[s] = {
        value: e
      }, void 0 !== e.detail && (r.detail = {
        value: e.detail,
        enumerable: !0
      }), Object.create(Object.create(e, a), r)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(9);
    t.polyfill = function(e) {
      if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
        e.__onlineOfflinePolyfilled = !0;
        var t = new r;
        e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function() {
          throw new Error("mocked")
        })), wx.getNetworkType({
          success: function(t) {
            var n = t.networkType;
            e.onLine = "none" !== n, wx.onNetworkStatusChange(function(t) {
              var n = t.isConnected;
              e.onLine !== n && (e.onLine = n, e.dispatchEvent({
                type: n ? "online" : "offline"
              }))
            })
          }
        })
      }
    }
  }, function(e, t) {
    e.exports = function(e) {
      return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function() {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function() {
          return e.i
        }
      }), e.webpackPolyfill = 1), e
    }
  }, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var r = new Uint8Array(16);
      e.exports = function() {
        return n(r), r
      }
    } else {
      var i = new Array(16);
      e.exports = function() {
        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
        return i
      }
    }
  }, function(e, t) {
    function n(e, t) {
      var n = t || 0,
        i = r;
      return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
    }
    for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);
    e.exports = n
  }, function(e, t, n) {
    "use strict";
    var r = n(18),
      i = ["Weapp"].concat(n(36));
    e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
  }, function(e, t, n) {
    "use strict";
    e.exports = []
  }, function(e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments)
      }
      return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if ((r = n[i]) === t || r.fn === t) {
          n.splice(i, 1);
          break
        }
      return this
    }, r.prototype.emit = function(e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
        n = this._callbacks["$" + e];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
      }
      return this
    }, r.prototype.listeners = function(e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
      return !!this.listeners(e).length
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(19);
    e.exports = r, r.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function(e) {
      return this._parser = e, this
    }, r.prototype.responseType = function(e) {
      return this._responseType = e, this
    }, r.prototype.serialize = function(e) {
      return this._serializer = e, this
    }, r.prototype.timeout = function(e) {
      if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
      for (var t in e) switch (t) {
        case "deadline":
          this._timeout = e.deadline;
          break;
        case "response":
          this._responseTimeout = e.response;
          break;
        default:
          console.warn("Unknown timeout option", t)
      }
      return this
    }, r.prototype.retry = function(e, t) {
      return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this
    };
    var s = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function(e, t) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        var n = this._retryCallback(e, t);
        if (!0 === n) return !0;
        if (!1 === n) return !1
      } catch (e) {
        console.error(e)
      }
      if (t && t.status && t.status >= 500 && 501 != t.status) return !0;
      if (e) {
        if (e.code && ~s.indexOf(e.code)) return !0;
        if (e.timeout && "ECONNABORTED" == e.code) return !0;
        if (e.crossDomain) return !0
      }
      return !1
    }, r.prototype._retry = function() {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function(e, t) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(e, t) {
          n.end(function(n, r) {
            n ? t(n) : e(r)
          })
        })
      }
      return this._fullfilledPromise.then(e, t)
    }, r.prototype.catch = function(e) {
      return this.then(void 0, e)
    }, r.prototype.use = function(e) {
      return e(this), this
    }, r.prototype.ok = function(e) {
      if ("function" != typeof e) throw Error("Callback required");
      return this._okCallback = e, this
    }, r.prototype._isResponseOK = function(e) {
      return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }, r.prototype.get = function(e) {
      return this._header[e.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(e, t) {
      if (o(e)) {
        for (var n in e) this.set(n, e[n]);
        return this
      }
      return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, r.prototype.unset = function(e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, r.prototype.field = function(e, t) {
      if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(e)) {
        for (var n in e) this.field(n, e[n]);
        return this
      }
      if (Array.isArray(t)) {
        for (var r in t) this.field(e, t[r]);
        return this
      }
      if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
    }, r.prototype.abort = function() {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype._auth = function(e, t, n, r) {
      switch (n.type) {
        case "basic":
          this.set("Authorization", "Basic " + r(e + ":" + t));
          break;
        case "auto":
          this.username = e, this.password = t;
          break;
        case "bearer":
          this.set("Authorization", "Bearer " + e)
      }
      return this
    }, r.prototype.withCredentials = function(e) {
      return void 0 == e && (e = !0), this._withCredentials = e, this
    }, r.prototype.redirects = function(e) {
      return this._maxRedirects = e, this
    }, r.prototype.maxResponseSize = function(e) {
      if ("number" != typeof e) throw TypeError("Invalid argument");
      return this._maxResponseSize = e, this
    }, r.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, r.prototype.send = function(e) {
      var t = o(e),
        n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
      else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (t && o(this._data))
        for (var r in e) this._data[r] = e[r];
      else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
      return !t || this._isHost(e) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function(e) {
      return this._sort = void 0 === e || e, this
    }, r.prototype._finalizeQueryString = function() {
      var e = this._query.join("&");
      if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, this._sort) {
        var t = this.url.indexOf("?");
        if (t >= 0) {
          var n = this.url.substring(t + 1).split("&");
          "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
        }
      }
    }, r.prototype._appendQueryString = function() {
      console.trace("Unsupported")
    }, r.prototype._timeoutError = function(e, t, n) {
      if (!this._aborted) {
        var r = new Error(e + t + "ms exceeded");
        r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function() {
      var e = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        e._timeoutError("Timeout of ", e._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
        e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(40);
    e.exports = r, r.prototype.get = function(e) {
      return this.header[e.toLowerCase()]
    }, r.prototype._setHeaderProperties = function(e) {
      var t = e["content-type"] || "";
      this.type = o.type(t);
      var n = o.params(t);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        e.link && (this.links = o.parseLinks(e.link))
      } catch (e) {}
    }, r.prototype._setStatusProperties = function(e) {
      var t = e / 100 | 0;
      this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e, this.unprocessableEntity = 422 == e
    }
  }, function(e, t, n) {
    "use strict";
    t.type = function(e) {
      return e.split(/ *; */).shift()
    }, t.params = function(e) {
      return e.split(/ *; */).reduce(function(e, t) {
        var n = t.split(/ *= */),
          r = n.shift(),
          i = n.shift();
        return r && i && (e[r] = i), e
      }, {})
    }, t.parseLinks = function(e) {
      return e.split(/ *, */).reduce(function(e, t) {
        var n = t.split(/ *; */),
          r = n[0].slice(1, -1);
        return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e
      }, {})
    }, t.cleanHeader = function(e, t) {
      return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e
    }
  }, function(e, t) {
    function n() {
      this._defaults = []
    }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) {
      n.prototype[e] = function() {
        return this._defaults.push({
          fn: e,
          arguments: arguments
        }), this
      }
    }), n.prototype._setDefaults = function(e) {
      this._defaults.forEach(function(t) {
        e[t.fn].apply(e, t.arguments)
      })
    }, e.exports = n
  }, function(e, t, n) {
    function r(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }

    function i(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            r = +new Date,
            o = r - (i || r);
          e.diff = o, e.prev = i, e.curr = r, i = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
            if ("%%" === n) return n;
            u++;
            var i = t.formatters[r];
            if ("function" == typeof i) {
              var o = s[u];
              n = i.call(e, o), s.splice(u, 1), u--
            }
            return n
          }), t.formatArgs.call(e, s);
          (n.log || t.log || console.log.bind(console)).apply(e, s)
        }
      }
      var i;
      return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), n
    }

    function o() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    function s(e) {
      t.save(e), t.names = [], t.skips = [];
      var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/),
        i = r.length;
      for (n = 0; n < i; n++) r[n] && (e = r[n].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      for (n = 0; n < t.instances.length; n++) {
        var o = t.instances[n];
        o.enabled = t.enabled(o.namespace)
      }
    }

    function a() {
      t.enable("")
    }

    function u(e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }

    function c(e) {
      return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = i.debug = i.default = i, t.coerce = c, t.disable = a, t.enable = s, t.enabled = u, t.humanize = n(43), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
  }, function(e, t) {
    function n(e) {
      if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
          var n = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * l;
            case "days":
            case "day":
            case "d":
              return n * c;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(e) {
      return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= a ? Math.round(e / a) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms"
    }

    function i(e) {
      return o(e, c, "day") || o(e, u, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms"
    }

    function o(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var s = 1e3,
      a = 60 * s,
      u = 60 * a,
      c = 24 * u,
      l = 365.25 * c;
    e.exports = function(e, t) {
      t = t || {};
      var o = typeof e;
      if ("string" === o && e.length > 0) return n(e);
      if ("number" === o && !1 === isNaN(e)) return t.long ? i(e) : r(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function(e, t, n) {
    (function(t) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.3+b33f4734
       */
      ! function(t, n) {
        e.exports = n()
      }(0, function() {
        "use strict";

        function e(e) {
          var t = typeof e;
          return null !== e && ("object" === t || "function" === t)
        }

        function r(e) {
          return "function" == typeof e
        }

        function i(e) {
          q = e
        }

        function o(e) {
          V = e
        }

        function s() {
          return void 0 !== B ? function() {
            B(u)
          } : a()
        }

        function a() {
          var e = setTimeout;
          return function() {
            return e(u, 1)
          }
        }

        function u() {
          for (var e = 0; e < M; e += 2) {
            (0, H[e])(H[e + 1]), H[e] = void 0, H[e + 1] = void 0
          }
          M = 0
        }

        function c(e, t) {
          var n = this,
            r = new this.constructor(f);
          void 0 === r[Q] && N(r);
          var i = n._state;
          if (i) {
            var o = arguments[i - 1];
            V(function() {
              return A(i, r, o, n._result)
            })
          } else S(n, r, e, t);
          return r
        }

        function l(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t) return e;
          var n = new t(f);
          return _(n, e), n
        }

        function f() {}

        function h() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function d() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function p(e) {
          try {
            return e.then
          } catch (e) {
            return ee.error = e, ee
          }
        }

        function y(e, t, n, r) {
          try {
            e.call(t, n, r)
          } catch (e) {
            return e
          }
        }

        function v(e, t, n) {
          V(function(e) {
            var r = !1,
              i = y(n, t, function(n) {
                r || (r = !0, t !== n ? _(e, n) : w(e, n))
              }, function(t) {
                r || (r = !0, E(e, t))
              }, "Settle: " + (e._label || " unknown promise"));
            !r && i && (r = !0, E(e, i))
          }, e)
        }

        function m(e, t) {
          t._state === X ? w(e, t._result) : t._state === Z ? E(e, t._result) : S(t, void 0, function(t) {
            return _(e, t)
          }, function(t) {
            return E(e, t)
          })
        }

        function g(e, t, n) {
          t.constructor === e.constructor && n === c && t.constructor.resolve === l ? m(e, t) : n === ee ? (E(e, ee.error), ee.error = null) : void 0 === n ? w(e, t) : r(n) ? v(e, t, n) : w(e, t)
        }

        function _(t, n) {
          t === n ? E(t, h()) : e(n) ? g(t, n, p(n)) : w(t, n)
        }

        function b(e) {
          e._onerror && e._onerror(e._result), T(e)
        }

        function w(e, t) {
          e._state === $ && (e._result = t, e._state = X, 0 !== e._subscribers.length && V(T, e))
        }

        function E(e, t) {
          e._state === $ && (e._state = Z, e._result = t, V(b, e))
        }

        function S(e, t, n, r) {
          var i = e._subscribers,
            o = i.length;
          e._onerror = null, i[o] = t, i[o + X] = n, i[o + Z] = r, 0 === o && e._state && V(T, e)
        }

        function T(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? A(n, r, i, o) : i(o);
            e._subscribers.length = 0
          }
        }

        function O(e, t) {
          try {
            return e(t)
          } catch (e) {
            return ee.error = e, ee
          }
        }

        function A(e, t, n, i) {
          var o = r(n),
            s = void 0,
            a = void 0,
            u = void 0,
            c = void 0;
          if (o) {
            if (s = O(n, i), s === ee ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void E(t, d())
          } else s = i, u = !0;
          t._state !== $ || (o && u ? _(t, s) : c ? E(t, a) : e === X ? w(t, s) : e === Z && E(t, s))
        }

        function C(e, t) {
          try {
            t(function(t) {
              _(e, t)
            }, function(t) {
              E(e, t)
            })
          } catch (t) {
            E(e, t)
          }
        }

        function I() {
          return te++
        }

        function N(e) {
          e[Q] = te++, e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function x() {
          return new Error("Array Methods must be provided an Array")
        }

        function j(e) {
          return new ne(this, e).promise
        }

        function P(e) {
          var t = this;
          return new t(D(e) ? function(n, r) {
            for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
          } : function(e, t) {
            return t(new TypeError("You must pass an array to race."))
          })
        }

        function R(e) {
          var t = this,
            n = new t(f);
          return E(n, e), n
        }

        function k() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function L() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function U() {
          var e = void 0;
          if (void 0 !== t) e = t;
          else if ("undefined" != typeof self) e = self;
          else try {
            e = Function("return this")()
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var n = e.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
          }
          e.Promise = re
        }
        var F = void 0;
        F = Array.isArray ? Array.isArray : function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        };
        var D = F,
          M = 0,
          B = void 0,
          q = void 0,
          V = function(e, t) {
            H[M] = e, H[M + 1] = t, 2 === (M += 2) && (q ? q(u) : K())
          },
          Y = "undefined" != typeof window ? window : void 0,
          W = Y || {},
          z = W.MutationObserver || W.WebKitMutationObserver,
          G = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          H = new Array(1e3),
          K = void 0;
        K = G ? function() {
          return function() {
            return process.nextTick(u)
          }
        }() : z ? function() {
          var e = 0,
            t = new z(u),
            n = document.createTextNode("");
          return t.observe(n, {
              characterData: !0
            }),
            function() {
              n.data = e = ++e % 2
            }
        }() : J ? function() {
          var e = new MessageChannel;
          return e.port1.onmessage = u,
            function() {
              return e.port2.postMessage(0)
            }
        }() : void 0 === Y ? function() {
          try {
            var e = n(45);
            return B = e.runOnLoop || e.runOnContext, s()
          } catch (e) {
            return a()
          }
        }() : a();
        var Q = Math.random().toString(36).substring(2),
          $ = void 0,
          X = 1,
          Z = 2,
          ee = {
            error: null
          },
          te = 0,
          ne = function() {
            function e(e, t) {
              this._instanceConstructor = e, this.promise = new e(f), this.promise[Q] || N(this.promise), D(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : E(this.promise, x())
            }
            return e.prototype._enumerate = function(e) {
              for (var t = 0; this._state === $ && t < e.length; t++) this._eachEntry(e[t], t)
            }, e.prototype._eachEntry = function(e, t) {
              var n = this._instanceConstructor,
                r = n.resolve;
              if (r === l) {
                var i = p(e);
                if (i === c && e._state !== $) this._settledAt(e._state, t, e._result);
                else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                else if (n === re) {
                  var o = new n(f);
                  g(o, e, i), this._willSettleAt(o, t)
                } else this._willSettleAt(new n(function(t) {
                  return t(e)
                }), t)
              } else this._willSettleAt(r(e), t)
            }, e.prototype._settledAt = function(e, t, n) {
              var r = this.promise;
              r._state === $ && (this._remaining--, e === Z ? E(r, n) : this._result[t] = n), 0 === this._remaining && w(r, this._result)
            }, e.prototype._willSettleAt = function(e, t) {
              var n = this;
              S(e, void 0, function(e) {
                return n._settledAt(X, t, e)
              }, function(e) {
                return n._settledAt(Z, t, e)
              })
            }, e
          }(),
          re = function() {
            function e(t) {
              this[Q] = I(), this._result = this._state = void 0, this._subscribers = [], f !== t && ("function" != typeof t && k(), this instanceof e ? C(this, t) : L())
            }
            return e.prototype.catch = function(e) {
              return this.then(null, e)
            }, e.prototype.finally = function(e) {
              var t = this,
                n = t.constructor;
              return t.then(function(t) {
                return n.resolve(e()).then(function() {
                  return t
                })
              }, function(t) {
                return n.resolve(e()).then(function() {
                  throw t
                })
              })
            }, e
          }();
        return re.prototype.then = c, re.all = j, re.race = P, re.resolve = l, re.reject = R, re._setScheduler = i, re._setAsap = o, re._asap = V, re.polyfill = U, re.Promise = re, re
      })
    }).call(t, n(5))
  }, function(e, t) {}, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(0),
        i = (n(1), {}),
        o = ["getItem", "setItem", "removeItem", "clear"],
        s = t.localStorage;
      try {
        var a = "__storejs__";
        if (s.setItem(a, a), s.getItem(a) != a) throw new Error;
        s.removeItem(a)
      } catch (e) {
        s = n(47)
      }
      r(o).each(function(e) {
        i[e] = function() {
          return s[e].apply(s, arguments)
        }
      }), i.async = !1, e.exports = i
    }).call(t, n(5))
  }, function(e, t, n) {
    ! function(t) {
      var n = {},
        r = {};
      n.length = 0, n.getItem = function(e) {
        return r[e] || null
      }, n.setItem = function(e, t) {
        void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t)
      }, n.removeItem = function(e) {
        r.hasOwnProperty(e) && (delete r[e], n.length--)
      }, n.key = function(e) {
        return Object.keys(r)[e] || null
      }, n.clear = function() {
        r = {}, n.length = 0
      }, e.exports = n
    }()
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = void 0,
        n = e.slice(0, 8).toLowerCase();
      switch (e.slice(-9)) {
        case "-9Nh9j0Va":
          t = "lncldapi.com";
          break;
        case "-MdYXbMMI":
          t = "lncldglobal.com";
          break;
        default:
          t = "lncld.net"
      }
      return {
        push: "https://" + n + ".push." + t,
        stats: "https://" + n + ".stats." + t,
        engine: "https://" + n + ".engine." + t,
        api: "https://" + n + ".api." + t
      }
    }
    var i = n(6),
      o = n(49),
      s = n(3),
      a = s.isNullOrUndefined,
      u = n(0),
      c = u.extend,
      l = u.isObject,
      f = function(e) {
        return {
          push: e,
          stats: e,
          engine: e,
          api: e
        }
      },
      h = !1;
    i.init = function(e) {
      if (!l(e)) return i.init({
        appId: e,
        appKey: arguments.length <= 1 ? void 0 : arguments[1],
        masterKey: arguments.length <= 2 ? void 0 : arguments[2]
      });
      var t = e.appId,
        n = e.appKey,
        s = e.masterKey,
        a = (e.hookKey, e.serverURLs),
        u = e.disableCurrentUser,
        d = e.production,
        p = e.realtime;
      if (i.applicationId) throw new Error("SDK is already initialized.");
      if (!t) throw new TypeError("appId must be a string");
      if (!n) throw new TypeError("appKey must be a string");
      s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, i._config.applicationKey = n, i._config.masterKey = s, void 0 !== d && (i._config.production = d), void 0 !== u && (i._config.disableCurrentUser = u), i._appRouter = new o(i);
      var y = h || void 0 !== a;
      i._setServerURLs(c({}, r(t), i._config.serverURLs, "string" == typeof a ? f(a) : a), y), p ? i._config.realtime = p : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
        appId: t,
        appKey: n
      }))
    }, i.setProduction = function(e) {
      a(e) ? i._config.production = null : i._config.production = e ? 1 : 0
    }, i._setServerURLs = function(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "string" != typeof e ? c(i._config.serverURLs, e) : i._config.serverURLs = f(e), t && (i._appRouter ? i._appRouter.disable() : h = !0)
    }, i.setServerURLs = function(e) {
      return i._setServerURLs(e)
    }, i.keepErrorRawMessage = function(e) {
      i._sharedConfig.keepErrorRawMessage = e
    }, i.setRequestTimeout = function(e) {
      i._config.requestTimeout = e
    }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function(e) {
      return Object.defineProperty(i, e, {
        get: function() {
          return i._config[e]
        },
        set: function(t) {
          i._config[e] = t
        }
      })
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = this;
      this.AV = e, this.lockedUntil = 0, s.getAsync("serverURLs").then(function(e) {
        if (!e) return t.lock(0);
        var n = e.serverURLs,
          r = e.lockedUntil;
        t.AV._setServerURLs(n, !1), t.lockedUntil = r
      }).catch(function() {
        return t.lock(0)
      })
    }
    var i = n(3),
      o = i.ajax,
      s = n(21);
    r.prototype.disable = function() {
      this.disabled = !0
    }, r.prototype.lock = function(e) {
      this.lockedUntil = Date.now() + e
    }, r.prototype.refresh = function() {
      var e = this;
      if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);
        return o({
          method: "get",
          url: "https://app-router.leancloud.cn/2/route",
          query: {
            appId: this.AV.applicationId
          }
        }).then(function(t) {
          if (!e.disabled) {
            var n = t.ttl;
            if (!n) throw new Error("missing ttl");
            n *= 1e3;
            var r = {
              push: "https://" + t.push_server,
              stats: "https://" + t.stats_server,
              engine: "https://" + t.engine_server,
              api: "https://" + t.api_server
            };
            return e.AV._setServerURLs(r, !1), e.lock(n), s.setAsync("serverURLs", {
              serverURLs: r,
              lockedUntil: e.lockedUntil
            }, n)
          }
        }).catch(function(t) {
          console.warn("refresh server URLs failed: " + t.message), e.lock(600)
        })
      }
    }, e.exports = r
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      var t = /\s+/,
        n = Array.prototype.slice;
      e.Events = {
        on: function(e, n, r) {
          var i, o, s, a, u;
          if (!n) return this;
          for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
            tail: a,
            next: u ? u.next : s
          }, o = e.shift();
          return this
        },
        off: function(e, n, i) {
          var o, s, a, u, c, l;
          if (s = this._callbacks) {
            if (!(e || n || i)) return delete this._callbacks, this;
            for (e = e ? e.split(t) : r.keys(s), o = e.shift(); o;)
              if (a = s[o], delete s[o], a && (n || i)) {
                for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;
                o = e.shift()
              }
            return this
          }
        },
        trigger: function(e) {
          var r, i, o, s, a, u, c;
          if (!(o = this._callbacks)) return this;
          for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
            if (i = o[r])
              for (s = i.tail;
                (i = i.next) !== s;) i.callback.apply(i.context || this, c);
            if (i = u)
              for (s = i.tail, a = [r].concat(c);
                (i = i.next) !== s;) i.callback.apply(i.context || this, a);
            r = e.shift()
          }
          return this
        }
      }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(1);
    e.exports = function(e) {
      e.GeoPoint = function(t, n) {
        r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
          return i._latitude
        }), this.__defineGetter__("longitude", function() {
          return i._longitude
        }), this.__defineSetter__("latitude", function(t) {
          e.GeoPoint._validate(t, i.longitude), i._latitude = t
        }), this.__defineSetter__("longitude", function(t) {
          e.GeoPoint._validate(i.latitude, t), i._longitude = t
        }))
      }, e.GeoPoint._validate = function(e, t) {
        if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
        if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
        if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
        if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.")
      }, e.GeoPoint.current = function() {
        return new i(function(t, n) {
          navigator.geolocation.getCurrentPosition(function(n) {
            t(new e.GeoPoint({
              latitude: n.coords.latitude,
              longitude: n.coords.longitude
            }))
          }, n)
        })
      }, r.extend(e.GeoPoint.prototype, {
        toJSON: function() {
          return e.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          }
        },
        radiansTo: function(e) {
          var t = Math.PI / 180,
            n = this.latitude * t,
            r = this.longitude * t,
            i = e.latitude * t,
            o = e.longitude * t,
            s = n - i,
            a = r - o,
            u = Math.sin(s / 2),
            c = Math.sin(a / 2),
            l = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
        },
        kilometersTo: function(e) {
          return 6371 * this.radiansTo(e)
        },
        milesTo: function(e) {
          return 3958.8 * this.radiansTo(e)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.ACL = function(t) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(t))
          if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
          else {
            if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
            e._objectEach(t, function(t, i) {
              if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
              n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                n.permissionsById[i][t] = e
              })
            })
          }
      }, e.ACL.prototype.toJSON = function() {
        return r.clone(this.permissionsById)
      }, e.ACL.prototype._setAccess = function(t, n, i) {
        if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
        if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
        var o = this.permissionsById[n];
        if (!o) {
          if (!i) return;
          o = {}, this.permissionsById[n] = o
        }
        i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n])
      }, e.ACL.prototype._getAccess = function(t, n) {
        n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[t]
      }, e.ACL.prototype.setReadAccess = function(e, t) {
        this._setAccess("read", e, t)
      }, e.ACL.prototype.getReadAccess = function(e) {
        return this._getAccess("read", e)
      }, e.ACL.prototype.setWriteAccess = function(e, t) {
        this._setAccess("write", e, t)
      }, e.ACL.prototype.getWriteAccess = function(e) {
        return this._getAccess("write", e)
      }, e.ACL.prototype.setPublicReadAccess = function(e) {
        this.setReadAccess("*", e)
      }, e.ACL.prototype.getPublicReadAccess = function() {
        return this.getReadAccess("*")
      }, e.ACL.prototype.setPublicWriteAccess = function(e) {
        this.setWriteAccess("*", e)
      }, e.ACL.prototype.getPublicWriteAccess = function() {
        return this.getWriteAccess("*")
      }, e.ACL.prototype.getRoleReadAccess = function(t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.getRoleWriteAccess = function(t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.Op = function() {
        this._initialize.apply(this, arguments)
      }, r.extend(e.Op.prototype, {
        _initialize: function() {}
      }), r.extend(e.Op, {
        _extend: e._extend,
        _opDecoderMap: {},
        _registerDecoder: function(t, n) {
          e.Op._opDecoderMap[t] = n
        },
        _decode: function(t) {
          var n = e.Op._opDecoderMap[t.__op];
          return n ? n(t) : void 0
        }
      }), e.Op._registerDecoder("Batch", function(t) {
        var n = null;
        return e._arrayEach(t.ops, function(t) {
          t = e.Op._decode(t), n = t._mergeWithPrevious(n)
        }), n
      }), e.Op.Set = e.Op._extend({
        _initialize: function(e) {
          this._value = e
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return e._encode(this.value())
        },
        _mergeWithPrevious: function(e) {
          return this
        },
        _estimate: function(e) {
          return this.value()
        }
      }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
        toJSON: function() {
          return {
            __op: "Delete"
          }
        },
        _mergeWithPrevious: function(e) {
          return this
        },
        _estimate: function(t) {
          return e.Op._UNSET
        }
      }), e.Op._registerDecoder("Delete", function(t) {
        return new e.Op.Unset
      }), e.Op.Increment = e.Op._extend({
        _initialize: function(e) {
          this._amount = e
        },
        amount: function() {
          return this._amount
        },
        toJSON: function() {
          return {
            __op: "Increment",
            amount: this._amount
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
            if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e ? e + this.amount() : this.amount()
        }
      }), e.Op._registerDecoder("Increment", function(t) {
        return new e.Op.Increment(t.amount)
      }), e.Op.BitAnd = e.Op._extend({
        _initialize: function(e) {
          this._value = e
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitAnd",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(0);
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() & this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e & this.value()
        }
      }), e.Op._registerDecoder("BitAnd", function(t) {
        return new e.Op.BitAnd(t.value)
      }), e.Op.BitOr = e.Op._extend({
        _initialize: function(e) {
          this._value = e
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitOr",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() | this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e | this.value()
        }
      }), e.Op._registerDecoder("BitOr", function(t) {
        return new e.Op.BitOr(t.value)
      }), e.Op.BitXor = e.Op._extend({
        _initialize: function(e) {
          this._value = e
        },
        value: function() {
          return this._value
        },
        toJSON: function() {
          return {
            __op: "BitXor",
            value: this.value()
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() ^ this.value());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e ^ this.value()
        }
      }), e.Op._registerDecoder("BitXor", function(t) {
        return new e.Op.BitXor(t.value)
      }), e.Op.Add = e.Op._extend({
        _initialize: function(e) {
          this._objects = e
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Add",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(e) {
          return e ? e.concat(this.objects()) : r.clone(this.objects())
        }
      }), e.Op._registerDecoder("Add", function(t) {
        return new e.Op.Add(e._decode(t.objects))
      }), e.Op.AddUnique = e.Op._extend({
        _initialize: function(e) {
          this._objects = r.uniq(e)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "AddUnique",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          if (t) {
            var n = r.clone(t);
            return e._arrayEach(this.objects(), function(t) {
              if (t instanceof e.Object && t.id) {
                var i = r.find(n, function(n) {
                  return n instanceof e.Object && n.id === t.id
                });
                if (i) {
                  var o = r.indexOf(n, i);
                  n[o] = t
                } else n.push(t)
              } else r.contains(n, t) || n.push(t)
            }), n
          }
          return r.clone(this.objects())
        }
      }), e.Op._registerDecoder("AddUnique", function(t) {
        return new e.Op.AddUnique(e._decode(t.objects))
      }), e.Op.Remove = e.Op._extend({
        _initialize: function(e) {
          this._objects = r.uniq(e)
        },
        objects: function() {
          return this._objects
        },
        toJSON: function() {
          return {
            __op: "Remove",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return t;
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t) {
          if (t) {
            var n = r.difference(t, this.objects());
            return e._arrayEach(this.objects(), function(t) {
              t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                return n instanceof e.Object && n.id === t.id
              }))
            }), n
          }
          return []
        }
      }), e.Op._registerDecoder("Remove", function(t) {
        return new e.Op.Remove(e._decode(t.objects))
      }), e.Op.Relation = e.Op._extend({
        _initialize: function(t, n) {
          this._targetClassName = null;
          var i = this,
            o = function(t) {
              if (t instanceof e.Object) {
                if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                return t.id
              }
              return t
            };
          this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o))
        },
        added: function() {
          var t = this;
          return r.map(this.relationsToAdd, function(n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        removed: function() {
          var t = this;
          return r.map(this.relationsToRemove, function(n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        toJSON: function() {
          var e = null,
            t = null,
            n = this,
            i = function(e) {
              return {
                __type: "Pointer",
                className: n._targetClassName,
                objectId: e
              }
            },
            o = null;
          return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
            __op: "AddRelation",
            objects: o
          }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), t = {
            __op: "RemoveRelation",
            objects: o
          }), e && t ? {
            __op: "Batch",
            ops: [e, t]
          } : e || t || {}
        },
        _mergeWithPrevious: function(t) {
          if (t) {
            if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
            if (t instanceof e.Op.Relation) {
              if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                o = new e.Op.Relation(n, i);
              return o._targetClassName = this._targetClassName, o
            }
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function(t, n, r) {
          if (t) {
            if (t instanceof e.Relation) {
              if (this._targetClassName)
                if (t.targetClassName) {
                  if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                } else t.targetClassName = this._targetClassName;
              return t
            }
            throw new Error("Op is invalid after previous op.")
          }
          new e.Relation(n, r).targetClassName = this._targetClassName
        }
      }), e.Op._registerDecoder("AddRelation", function(t) {
        return new e.Op.Relation(e._decode(t.objects), [])
      }), e.Op._registerDecoder("RemoveRelation", function(t) {
        return new e.Op.Relation([], e._decode(t.objects))
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function(e) {
      e.Relation = function(e, t) {
        if (!r.isString(t)) throw new TypeError("key must be a string");
        this.parent = e, this.key = t, this.targetClassName = null
      }, e.Relation.reverseQuery = function(t, n, r) {
        var i = new e.Query(t);
        return i.equalTo(n, r._toPointer()), i
      }, r.extend(e.Relation.prototype, {
        _ensureParentAndKey: function(e, t) {
          if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.")
        },
        add: function(t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation(t, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        remove: function(t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation([], t);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        toJSON: function() {
          return {
            __type: "Relation",
            className: this.targetClassName
          }
        },
        query: function() {
          var t, n;
          return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(56),
      o = n(57),
      s = n(58),
      a = n(4),
      u = n(2)._request,
      c = n(1),
      l = n(3),
      f = l.tap,
      h = l.transformFetchOptions,
      d = n(7)("leancloud:file"),
      p = n(62);
    e.exports = function(e) {
      var t = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        },
        n = function(e) {
          return r.isString(e) ? e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : ""
        },
        l = function(e) {
          if (e < 26) return String.fromCharCode(65 + e);
          if (e < 52) return String.fromCharCode(e - 26 + 97);
          if (e < 62) return String.fromCharCode(e - 52 + 48);
          if (62 === e) return "+";
          if (63 === e) return "/";
          throw new Error("Tried to encode large digit " + e + " in base64.")
        },
        y = function(e) {
          var t = [];
          return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
            var r = e[3 * n],
              i = e[3 * n + 1] || 0,
              o = e[3 * n + 2] || 0,
              s = 3 * n + 1 < e.length,
              a = 3 * n + 2 < e.length;
            t[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "="].join("")
          }), t.join("")
        };
      e.File = function(t, i, o) {
        if (this.attributes = {
            name: t,
            url: "",
            metaData: {},
            base64: ""
          }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
          base64: y(i)
        }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && (this._extName = n(i.blob.uri)), "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = n(i.name)));
        var s = void 0;
        if (i && i.owner) s = i.owner;
        else if (!e._config.disableCurrentUser) try {
          s = e.User.current()
        } catch (e) {
          if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e
        }
        this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", o)
      }, e.File.withURL = function(t, n, r, i) {
        if (!t || !n) throw new Error("Please provide file name and url");
        var o = new e.File(t, null, i);
        if (r)
          for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
        return o.attributes.url = n, o.attributes.metaData.__source = "external", o
      }, e.File.createWithoutData = function(t) {
        var n = new e.File;
        return n.id = t, n
      }, r.extend(e.File.prototype, {
        className: "_File",
        _toFullJSON: function(t) {
          var n = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = r.clone(this.attributes);
          return e._objectEach(o, function(n, r) {
            o[r] = e._encode(n, t, void 0, i)
          }), e._objectEach(this._operations, function(e, t) {
            o[t] = e
          }), r.has(this, "id") && (o.objectId = this.id), r(["createdAt", "updatedAt"]).each(function(e) {
            if (r.has(n, e)) {
              var t = n[e];
              o[e] = r.isDate(t) ? t.toJSON() : t
            }
          }), i && (o.__type = "File"), o
        },
        toFullJSON: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        toJSON: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
          return this._toFullJSON(n, !1)
        },
        _toPointer: function() {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        getACL: function() {
          return this._acl
        },
        setACL: function(t) {
          if (!(t instanceof e.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
          this._acl = t
        },
        name: function() {
          return this.get("name")
        },
        url: function() {
          return this.get("url")
        },
        get: function(e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "url":
            case "name":
            case "mime_type":
            case "metaData":
            case "createdAt":
            case "updatedAt":
              return this.attributes[e];
            default:
              return this.attributes.metaData[e]
          }
        },
        set: function() {
          for (var e = this, t = function(t, n) {
              switch (t) {
                case "name":
                case "url":
                case "mime_type":
                case "base64":
                case "metaData":
                  e.attributes[t] = n;
                  break;
                default:
                  e.attributes.metaData[t] = n
              }
            }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          switch (r.length) {
            case 1:
              for (var o in r[0]) t(o, r[0][o]);
              break;
            case 2:
              t(r[0], r[1])
          }
        },
        setUploadHeader: function(e, t) {
          return this._uploadHeaders[e] = t, this
        },
        metaData: function(e, t) {
          return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData
        },
        thumbnailURL: function(e, t, n, r, i) {
          var o = this.attributes.url;
          if (!o) throw new Error("Invalid url.");
          if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
          if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value.");
          return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i
        },
        size: function() {
          return this.metaData().size
        },
        ownerId: function() {
          return this.metaData().owner
        },
        destroy: function(e) {
          return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id does not eixst."))
        },
        _fileToken: function(e, r) {
          var i = this.attributes.name,
            o = n(i);
          !o && this._extName && (i += this._extName, o = this._extName);
          var s = t() + t() + t() + t() + t() + o,
            a = {
              key: s,
              name: i,
              ACL: this._acl,
              mime_type: e,
              metaData: this.attributes.metaData
            };
          return this._qiniu_key = s, u("fileTokens", null, null, "POST", a, r)
        },
        save: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave)
            if (this._data) {
              var n = this.get("mime_type");
              this._previousSave = this._fileToken(n, t).then(function(a) {
                return a.mime_type && (n = a.mime_type, e.set("mime_type", n)), e._token = a.token, c.resolve().then(function() {
                  var t = e._data;
                  if (t && t.base64) return p(t.base64, n);
                  if (t && t.blob) return !t.blob.type && n && (t.blob.type = n), t.blob.name || (t.blob.name = e.get("name")), t.blob;
                  if ("undefined" != typeof Blob && t instanceof Blob) return t;
                  throw new TypeError("malformed file data")
                }).then(function(n) {
                  var u = r.extend({}, t);
                  switch (t.onprogress && (u.onprogress = function(e) {
                    if ("download" !== e.direction) return t.onprogress(e)
                  }), a.provider) {
                    case "s3":
                      return s(a, n, e, u);
                    case "qcloud":
                      return i(a, n, e, u);
                    case "qiniu":
                    default:
                      return o(a, n, e, u)
                  }
                }).then(f(function() {
                  return e._callback(!0)
                }), function(t) {
                  throw e._callback(!1), t
                })
              })
            } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var a = {
              name: this.attributes.name,
              ACL: this._acl,
              metaData: this.attributes.metaData,
              mime_type: this.mimeType,
              url: this.attributes.url
            };
            this._previousSave = u("files", this.attributes.name, null, "post", a, t).then(function(t) {
              return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e
            })
          }
          return this._previousSave
        },
        _callback: function(e) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: e
          }).catch(d), delete this._token, delete this._data
        },
        fetch: function(e, t) {
          return u("files", null, this.id, "GET", h(e), t).then(this._finishFetch.bind(this))
        },
        _finishFetch: function(t) {
          var n = e.Object.prototype.parse(t);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      i = n(7)("cos"),
      o = n(1);
    e.exports = function(e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
      return new o(function(e, o) {
        var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", t, n.attributes.name).field("op", "upload");
        s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
          if (r && i(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), o(t);
          e(n)
        })
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      i = n(1),
      o = n(7)("qiniu");
    e.exports = function(e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.token,
        u = e.upload_url || "https://upload.qiniup.com";
      return new i(function(e, i) {
        var c = r("POST", u).set(n._uploadHeaders).attach("file", t, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        s.onprogress && c.on("progress", s.onprogress), c.end(function(t, r) {
          if (r && o(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), i(t);
          e(n)
        })
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      i = n(1),
      o = function(e, t) {
        return t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), e
      };
    e.exports = function(e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new i(function(i, a) {
        var u = r("PUT", e.upload_url).set(Object.assign({
          "Content-Type": n.get("mime_type"),
          "Cache-Control": "public, max-age=31536000"
        }, n._uploadHeaders));
        s.onprogress && u.on("progress", s.onprogress), u.on("response", function(e) {
          if (e.ok) return i(n);
          a(o(e.error, e))
        }), u.on("error", function(e, t) {
          return a(o(e, t))
        }), u.send(t).end()
      })
    }
  }, function(e, t, n) {
    ! function() {
      var t = n(60),
        r = n(22).utf8,
        i = n(61),
        o = n(22).bin,
        s = function(e, n) {
          e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
          for (var a = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
          a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
          for (var p = s._ff, y = s._gg, v = s._hh, m = s._ii, d = 0; d < a.length; d += 16) {
            var g = c,
              _ = l,
              b = f,
              w = h;
            c = p(c, l, f, h, a[d + 0], 7, -680876936), h = p(h, c, l, f, a[d + 1], 12, -389564586), f = p(f, h, c, l, a[d + 2], 17, 606105819), l = p(l, f, h, c, a[d + 3], 22, -1044525330), c = p(c, l, f, h, a[d + 4], 7, -176418897), h = p(h, c, l, f, a[d + 5], 12, 1200080426), f = p(f, h, c, l, a[d + 6], 17, -1473231341), l = p(l, f, h, c, a[d + 7], 22, -45705983), c = p(c, l, f, h, a[d + 8], 7, 1770035416), h = p(h, c, l, f, a[d + 9], 12, -1958414417), f = p(f, h, c, l, a[d + 10], 17, -42063), l = p(l, f, h, c, a[d + 11], 22, -1990404162), c = p(c, l, f, h, a[d + 12], 7, 1804603682), h = p(h, c, l, f, a[d + 13], 12, -40341101), f = p(f, h, c, l, a[d + 14], 17, -1502002290), l = p(l, f, h, c, a[d + 15], 22, 1236535329), c = y(c, l, f, h, a[d + 1], 5, -165796510), h = y(h, c, l, f, a[d + 6], 9, -1069501632), f = y(f, h, c, l, a[d + 11], 14, 643717713), l = y(l, f, h, c, a[d + 0], 20, -373897302), c = y(c, l, f, h, a[d + 5], 5, -701558691), h = y(h, c, l, f, a[d + 10], 9, 38016083), f = y(f, h, c, l, a[d + 15], 14, -660478335), l = y(l, f, h, c, a[d + 4], 20, -405537848), c = y(c, l, f, h, a[d + 9], 5, 568446438), h = y(h, c, l, f, a[d + 14], 9, -1019803690), f = y(f, h, c, l, a[d + 3], 14, -187363961), l = y(l, f, h, c, a[d + 8], 20, 1163531501), c = y(c, l, f, h, a[d + 13], 5, -1444681467), h = y(h, c, l, f, a[d + 2], 9, -51403784), f = y(f, h, c, l, a[d + 7], 14, 1735328473), l = y(l, f, h, c, a[d + 12], 20, -1926607734), c = v(c, l, f, h, a[d + 5], 4, -378558), h = v(h, c, l, f, a[d + 8], 11, -2022574463), f = v(f, h, c, l, a[d + 11], 16, 1839030562), l = v(l, f, h, c, a[d + 14], 23, -35309556), c = v(c, l, f, h, a[d + 1], 4, -1530992060), h = v(h, c, l, f, a[d + 4], 11, 1272893353), f = v(f, h, c, l, a[d + 7], 16, -155497632), l = v(l, f, h, c, a[d + 10], 23, -1094730640), c = v(c, l, f, h, a[d + 13], 4, 681279174), h = v(h, c, l, f, a[d + 0], 11, -358537222), f = v(f, h, c, l, a[d + 3], 16, -722521979), l = v(l, f, h, c, a[d + 6], 23, 76029189), c = v(c, l, f, h, a[d + 9], 4, -640364487), h = v(h, c, l, f, a[d + 12], 11, -421815835), f = v(f, h, c, l, a[d + 15], 16, 530742520), l = v(l, f, h, c, a[d + 2], 23, -995338651), c = m(c, l, f, h, a[d + 0], 6, -198630844), h = m(h, c, l, f, a[d + 7], 10, 1126891415), f = m(f, h, c, l, a[d + 14], 15, -1416354905), l = m(l, f, h, c, a[d + 5], 21, -57434055), c = m(c, l, f, h, a[d + 12], 6, 1700485571), h = m(h, c, l, f, a[d + 3], 10, -1894986606), f = m(f, h, c, l, a[d + 10], 15, -1051523), l = m(l, f, h, c, a[d + 1], 21, -2054922799), c = m(c, l, f, h, a[d + 8], 6, 1873313359), h = m(h, c, l, f, a[d + 15], 10, -30611744), f = m(f, h, c, l, a[d + 6], 15, -1560198380), l = m(l, f, h, c, a[d + 13], 21, 1309151649), c = m(c, l, f, h, a[d + 4], 6, -145523070), h = m(h, c, l, f, a[d + 11], 10, -1120210379), f = m(f, h, c, l, a[d + 2], 15, 718787259), l = m(l, f, h, c, a[d + 9], 21, -343485551), c = c + g >>> 0, l = l + _ >>> 0, f = f + b >>> 0, h = h + w >>> 0
          }
          return t.endian([c, l, f, h])
        };
      s._ff = function(e, t, n, r, i, o, s) {
        var a = e + (t & n | ~t & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._gg = function(e, t, n, r, i, o, s) {
        var a = e + (t & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._hh = function(e, t, n, r, i, o, s) {
        var a = e + (t ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._ii = function(e, t, n, r, i, o, s) {
        var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
        var r = t.wordsToBytes(s(e, n));
        return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
      }
    }()
  }, function(e, t) {
    ! function() {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = {
          rotl: function(e, t) {
            return e << t | e >>> 32 - t
          },
          rotr: function(e, t) {
            return e << 32 - t | e >>> t
          },
          endian: function(e) {
            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
            return e
          },
          randomBytes: function(e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
          },
          bytesToWords: function(e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
          },
          wordsToBytes: function(e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
          },
          bytesToHex: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("")
          },
          hexToBytes: function(e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t
          },
          bytesToBase64: function(e) {
            for (var n = [], r = 0; r < e.length; r += 3)
              for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
            return n.join("")
          },
          base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
            return n
          }
        };
      e.exports = n
    }()
  }, function(e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function r(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    /*!
     // * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
      return null != e && (n(e) || r(e) || !!e._isBuffer)
    }
  }, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
      var n;
      e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return new Blob([r], {
        type: t
      })
    };
    e.exports = r
  }, function(e, t, n) {
    "use strict";

    function r(e, t) {
      return e && e[t] ? o.isFunction(e[t]) ? e[t]() : e[t] : null
    }
    var i = function() {
        function e(e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
          } catch (e) {
            i = !0, o = e
          } finally {
            try {
              !r && a.return && a.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function(t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      o = n(0),
      s = n(4),
      a = n(1),
      u = n(2),
      c = u._request,
      l = n(3),
      f = l.isNullOrUndefined,
      h = l.ensureArray,
      d = l.transformFetchOptions,
      p = l.setValue,
      y = l.findValue,
      v = l.isPlainObject,
      m = function e(t) {
        return o.isArray(t) ? t.map(e) : v(t) ? o.mapObject(t, e) : o.isObject(t) && t._toPointer ? t._toPointer() : t
      },
      g = ["objectId", "createdAt", "updatedAt"],
      _ = function(e) {
        if (-1 !== g.indexOf(e)) throw new Error("key[" + e + "] is reserved")
      },
      b = function(e) {
        var t = o.find(e, function(e) {
          return e instanceof Error
        });
        if (!t) return e;
        var n = new s(t.code, t.message);
        throw n.results = e, n
      };
    e.exports = function(e) {
      e.Object = function(t, n) {
        if (o.isString(t)) return e.Object._create.apply(this, arguments);
        t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
        var i = r(this, "defaults");
        i && (t = o.extend({}, i, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
          silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments)
      }, e.Object.saveAll = function(t, n) {
        return e.Object._deepSaveAsync(t, null, n)
      }, e.Object.fetchAll = function(e, t) {
        return a.resolve().then(function() {
          return c("batch", null, null, "POST", {
            requests: o.map(e, function(e) {
              if (!e.className) throw new Error("object must have className to fetch");
              if (!e.id) throw new Error("object must have id to fetch");
              if (e.dirty()) throw new Error("object is modified but not saved");
              return {
                method: "GET",
                path: "/1.1/classes/" + e.className + "/" + e.id
              }
            })
          }, t)
        }).then(function(t) {
          var n = o.map(e, function(e, n) {
            if (t[n].success) {
              var r = e.parse(t[n].success);
              return e._cleanupUnsetKeys(r), e._finishFetch(r), e
            }
            return null === t[n].success ? new s(s.OBJECT_NOT_FOUND, "Object not found.") : new s(t[n].error.code, t[n].error.error)
          });
          return b(n)
        })
      }, o.extend(e.Object.prototype, e.Events, {
        _fetchWhenSave: !1,
        initialize: function() {},
        fetchWhenSave: function(e) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !o.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = e
        },
        getObjectId: function() {
          return this.id
        },
        getCreatedAt: function() {
          return this.createdAt || this.get("createdAt")
        },
        getUpdatedAt: function() {
          return this.updatedAt || this.get("updatedAt")
        },
        toJSON: function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return this._toFullJSON(n, !1)
        },
        toFullJSON: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        _toFullJSON: function(t) {
          var n = this,
            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = o.clone(this.attributes);
          if (o.isArray(t)) var s = t.concat(this);
          return e._objectEach(i, function(t, n) {
            i[n] = e._encode(t, s, void 0, r)
          }), e._objectEach(this._operations, function(e, t) {
            i[t] = e
          }), o.has(this, "id") && (i.objectId = this.id), o(["createdAt", "updatedAt"]).each(function(e) {
            if (o.has(n, e)) {
              var t = n[e];
              i[e] = o.isDate(t) ? t.toJSON() : t
            }
          }), r && (i.__type = "Object", o.isArray(t) && t.length && (i.__type = "Pointer"), i.className = this.className), i
        },
        _refreshCache: function() {
          var t = this;
          t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, r) {
            n instanceof e.Object ? n._refreshCache() : o.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
              silent: !0
            })
          }), delete t._refreshingCache)
        },
        dirty: function(e) {
          this._refreshCache();
          var t = o.last(this._opSetQueue);
          return e ? !!t[e] : !this.id || o.keys(t).length > 0
        },
        _toPointer: function() {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        get: function(e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "createdAt":
            case "updatedAt":
              return this[e];
            default:
              return this.attributes[e]
          }
        },
        relation: function(t) {
          var n = this.get(t);
          if (n) {
            if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
            return n._ensureParentAndKey(this, t), n
          }
          return new e.Relation(this, t)
        },
        escape: function(e) {
          var t = this._escapedAttributes[e];
          if (t) return t;
          var n, r = this.attributes[e];
          return n = f(r) ? "" : o.escape(r.toString()), this._escapedAttributes[e] = n, n
        },
        has: function(e) {
          return !f(this.attributes[e])
        },
        _mergeMagicFields: function(t) {
          var n = this,
            r = ["objectId", "createdAt", "updatedAt"];
          return e._arrayEach(r, function(r) {
            t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || o.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), delete t[r])
          }), t
        },
        _startSave: function() {
          this._opSetQueue.push({})
        },
        _cancelSave: function() {
          var t = o.first(this._opSetQueue);
          this._opSetQueue = o.rest(this._opSetQueue);
          var n = o.first(this._opSetQueue);
          e._objectEach(t, function(e, r) {
            var i = t[r],
              o = n[r];
            i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
          }), this._saving = this._saving - 1
        },
        _finishSave: function(t) {
          var n = {};
          e._traverse(this.attributes, function(t) {
            t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
          });
          var r = o.first(this._opSetQueue);
          this._opSetQueue = o.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);
          var i = this;
          e._objectEach(t, function(t, r) {
            i._serverData[r] = e._decode(t, r);
            var o = e._traverse(i._serverData[r], function(t) {
              if (t instanceof e.Object && n[t.id]) return n[t.id]
            });
            o && (i._serverData[r] = o)
          }), this._rebuildAllEstimatedData();
          var s = this._opSetQueue.map(o.clone);
          this._refreshCache(), this._opSetQueue = s, this._saving = this._saving - 1
        },
        _finishFetch: function(t, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(t);
          var r = this;
          e._objectEach(t, function(t, n) {
            r._serverData[n] = e._decode(t, n)
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
        },
        _applyOpSet: function(t, n) {
          var r = this;
          e._objectEach(t, function(t, o) {
            var s = y(n, o),
              a = i(s, 3),
              u = a[0],
              c = a[1],
              l = a[2];
            p(n, o, t._estimate(u, r, o)), c && c[l] === e.Op._UNSET && delete c[l]
          })
        },
        _resetCacheForKey: function(t) {
          var n = this.attributes[t];
          if (o.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
            var r = JSON.stringify(m(n));
            if (this._hashedJSON[t] !== r) {
              var i = !!this._hashedJSON[t];
              return this._hashedJSON[t] = r, i
            }
          }
          return !1
        },
        _rebuildEstimatedDataForKey: function(t) {
          var n = this;
          delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function(r) {
            var o = r[t];
            if (o) {
              var s = y(n.attributes, t),
                a = i(s, 4),
                u = a[0],
                c = a[1],
                l = a[2],
                f = a[3];
              p(n.attributes, t, o._estimate(u, n, t)), c && c[l] === e.Op._UNSET && delete c[l], n._resetCacheForKey(f)
            }
          })
        },
        _rebuildAllEstimatedData: function() {
          var t = this,
            n = o.clone(this.attributes);
          this.attributes = o.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
            t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
              t._resetCacheForKey(n)
            })
          }), e._objectEach(n, function(e, n) {
            t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {})
          }), e._objectEach(this.attributes, function(e, r) {
            o.has(n, r) || t.trigger("change:" + r, t, e, {})
          })
        },
        set: function(t, n, r) {
          var i;
          if (o.isObject(t) || f(t) ? (i = o.mapObject(t, function(t, n) {
              return _(n), e._decode(t, n)
            }), r = n) : (i = {}, _(t), i[t] = e._decode(n, t)), r = r || {}, !i) return this;
          i instanceof e.Object && (i = i.attributes), r.unset && e._objectEach(i, function(t, n) {
            i[n] = new e.Op.Unset
          });
          var s = o.clone(i),
            a = this;
          e._objectEach(s, function(t, n) {
            t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n])
          }), this._validate(i, r), r.changes = {};
          var u = this._escapedAttributes;
          this._previousAttributes;
          return e._arrayEach(o.keys(i), function(t) {
            var n = i[t];
            n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
            var s = !0;
            n instanceof e.Op.Set && o.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
            var c = o.last(a._opSetQueue);
            c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t])
          }), r.silent || this.change(r), this
        },
        unset: function(e, t) {
          return t = t || {}, t.unset = !0, this.set(e, null, t)
        },
        increment: function(t, n) {
          return (o.isUndefined(n) || o.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n))
        },
        add: function(t, n) {
          return this.set(t, new e.Op.Add(h(n)))
        },
        addUnique: function(t, n) {
          return this.set(t, new e.Op.AddUnique(h(n)))
        },
        remove: function(t, n) {
          return this.set(t, new e.Op.Remove(h(n)))
        },
        bitAnd: function(t, n) {
          return this.set(t, new e.Op.BitAnd(n))
        },
        bitOr: function(t, n) {
          return this.set(t, new e.Op.BitOr(n))
        },
        bitXor: function(t, n) {
          return this.set(t, new e.Op.BitXor(n))
        },
        op: function(e) {
          return o.last(this._opSetQueue)[e]
        },
        clear: function(e) {
          e = e || {}, e.unset = !0;
          var t = o.extend(this.attributes, this._operations);
          return this.set(t, e)
        },
        _getSaveJSON: function() {
          var t = o.clone(o.first(this._opSetQueue));
          return e._objectEach(t, function(e, n) {
            t[n] = e.toJSON()
          }), t
        },
        _canBeSerialized: function() {
          return e.Object._canBeSerializedAsValue(this.attributes)
        },
        fetch: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments[1],
            n = this;
          return c("classes", this.className, this.id, "GET", d(e), t).then(function(t) {
            var r = n.parse(t);
            return e.keys || n._cleanupUnsetKeys(r), n._finishFetch(r, !0), n
          })
        },
        _cleanupUnsetKeys: function(t) {
          var n = this;
          e._objectEach(this._serverData, function(e, r) {
            void 0 === t[r] && delete n._serverData[r]
          })
        },
        save: function(t, n, r) {
          var i, s, u;
          o.isObject(t) || f(t) ? (i = t, u = n) : (i = {}, i[t] = n, u = r), u = o.clone(u) || {}, u.wait && (s = o.clone(this.attributes));
          var l = o.clone(u) || {};
          l.wait && (l.silent = !0), i && this.set(i, l);
          var h = this,
            d = [],
            p = [];
          return e.Object._findUnsavedChildren(h, d, p), d.length + p.length > 1 ? e.Object._deepSaveAsync(this, h, u) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || a.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
            var e = h.id ? "PUT" : "POST",
              t = h._getSaveJSON(),
              n = {};
            if ((h._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u._failOnNotExist && (n.failOnNotExist = "true"), u.query) {
              var r;
              if ("function" == typeof u.query.toJSON && (r = u.query.toJSON()) && (n.where = r.where), !n.where) {
                throw new Error("options.query is not an AV.Query")
              }
            }
            o.extend(t, h._flags);
            var a = "classes",
              f = h.className;
            "_User" !== h.className || h.id || (a = "users", f = null);
            var d = u._makeRequest || c,
              p = d(a, f, h.id, e, t, u, n);
            return p = p.then(function(e) {
              var t = h.parse(e);
              return u.wait && (t = o.extend(i || {}, t)), h._finishSave(t), u.wait && h.set(s, l), h
            }, function(e) {
              throw h._cancelSave(), e
            })
          }), this._allPreviousSaves)
        },
        destroy: function(e) {
          e = e || {};
          var t = this,
            n = function() {
              t.trigger("destroy", t, t.collection, e)
            };
          return this.id ? (e.wait || n(), c("classes", this.className, this.id, "DELETE", this._flags, e).then(function() {
            return e.wait && n(), t
          })) : n()
        },
        parse: function(t) {
          var n = o.clone(t);
          return o(["createdAt", "updatedAt"]).each(function(t) {
            n[t] && (n[t] = e._parseDate(n[t]))
          }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n
        },
        clone: function() {
          return new this.constructor(this.attributes)
        },
        isNew: function() {
          return !this.id
        },
        change: function(t) {
          t = t || {};
          var n = this._changing;
          this._changing = !0;
          var r = this;
          e._objectEach(this._silent, function(e) {
            r._pending[e] = !0
          });
          var i = o.extend({}, t.changes, this._silent);
          if (this._silent = {}, e._objectEach(i, function(e, n) {
              r.trigger("change:" + n, r, r.get(n), t)
            }), n) return this;
          for (var s = function(e, t) {
              r._pending[t] || r._silent[t] || delete r.changed[t]
            }; !o.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, s), r._previousAttributes = o.clone(this.attributes);
          return this._changing = !1, this
        },
        hasChanged: function(e) {
          return arguments.length ? this.changed && o.has(this.changed, e) : !o.isEmpty(this.changed)
        },
        changedAttributes: function(t) {
          if (!t) return !!this.hasChanged() && o.clone(this.changed);
          var n = {},
            r = this._previousAttributes;
          return e._objectEach(t, function(e, t) {
            o.isEqual(r[t], e) || (n[t] = e)
          }), n
        },
        previous: function(e) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
          return o.clone(this._previousAttributes)
        },
        isValid: function() {
          try {
            this.validate(this.attributes)
          } catch (e) {
            return !1
          }
          return !0
        },
        validate: function(t) {
          if (o.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.")
        },
        _validate: function(e, t) {
          !t.silent && this.validate && (e = o.extend({}, this.attributes, e), this.validate(e))
        },
        getACL: function() {
          return this.get("ACL")
        },
        setACL: function(e, t) {
          return this.set("ACL", e, t)
        },
        disableBeforeHook: function() {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
        },
        disableAfterHook: function() {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
        },
        ignoreHook: function(t) {
          o.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t) || console.trace("Unsupported hookName: " + t), e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t)
        }
      }), e.Object.createWithoutData = function(t, n, r) {
        var i = new e.Object(t);
        return i.id = n, i._hasData = r, i
      }, e.Object.destroyAll = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e || 0 === e.length) return a.resolve();
        var n = o.groupBy(e, function(e) {
            return JSON.stringify({
              className: e.className,
              flags: e._flags
            })
          }),
          r = {
            requests: o.map(n, function(e) {
              var t = o.map(e, "id").join(",");
              return {
                method: "DELETE",
                path: "/1.1/classes/" + e[0].className + "/" + t,
                body: e[0]._flags
              }
            })
          };
        return c("batch", null, null, "POST", r, t).then(function(e) {
          var t = o.find(e, function(e) {
            return !e.success
          });
          if (t) throw new s(t.error.code, t.error.error)
        })
      }, e.Object._getSubclass = function(t) {
        if (!o.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = e.Object._classMap[t];
        return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n
      }, e.Object._create = function(t, n, r) {
        return new(e.Object._getSubclass(t))(n, r)
      }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
        return new e.Object(t, n)
      }, e.Object.extend = function(t, n, r) {
        if (!o.isString(t)) {
          if (t && o.has(t, "className")) return e.Object.extend(t.className, t, n);
          throw new Error("AV.Object.extend's first argument should be the className.")
        }
        "User" === t && (t = "_User");
        var i = null;
        if (o.has(e.Object._classMap, t)) {
          var s = e.Object._classMap[t];
          if (!n && !r) return s;
          i = s._extend(n, r)
        } else n = n || {}, n._className = t, i = this._extend(n, r);
        return i.extend = function(n) {
          if (o.isString(n) || n && o.has(n, "className")) return e.Object.extend.apply(i, arguments);
          var r = [t].concat(o.toArray(arguments));
          return e.Object.extend.apply(i, r)
        }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(e.Object, "query")), i.new = function(e, t) {
          return new i(e, t)
        }, e.Object._classMap[t] = i, i
      }, Object.defineProperty(e.Object.prototype, "className", {
        get: function() {
          var e = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === e ? "_User" : e
        }
      }), e.Object.register = function(t, n) {
        if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
        var r = n || t.name;
        if (!r.length) throw new Error("registered class must be named");
        n && (t._LCClassName = n), e.Object._classMap[r] = t
      }, Object.defineProperty(e.Object, "query", {
        get: function() {
          return new e.Query(this.prototype.className)
        }
      }), e.Object._findUnsavedChildren = function(t, n, r) {
        e._traverse(t, function(t) {
          return t instanceof e.Object ? void(t.dirty() && n.push(t)) : t instanceof e.File ? void(t.id || r.push(t)) : void 0
        })
      }, e.Object._canBeSerializedAsValue = function(t) {
        var n = !0;
        return t instanceof e.Object || t instanceof e.File ? n = !!t.id : o.isArray(t) ? e._arrayEach(t, function(t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }) : o.isObject(t) && e._objectEach(t, function(t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }), n
      }, e.Object._deepSaveAsync = function(t, n, r) {
        var i = [],
          u = [];
        e.Object._findUnsavedChildren(t, i, u);
        var l = a.resolve();
        o.each(u, function(e) {
          l = l.then(function() {
            return e.save()
          })
        });
        var f = o.uniq(i),
          h = o.uniq(f);
        return l.then(function() {
          return a._continueWhile(function() {
            return h.length > 0
          }, function() {
            var t = [],
              n = [];
            if (e._arrayEach(h, function(e) {
                if (t.length > 20) return void n.push(e);
                e._canBeSerialized() ? t.push(e) : n.push(e)
              }), h = n, 0 === t.length) return a.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var i = a.resolve(o.map(t, function(e) {
                return e._allPreviousSaves || a.resolve()
              })),
              u = i.then(function() {
                return c("batch", null, null, "POST", {
                  requests: o.map(t, function(e) {
                    var t = e.id ? "PUT" : "POST",
                      n = e._getSaveJSON();
                    o.extend(n, e._flags);
                    var r = e.className,
                      i = "/classes/" + r;
                    "_User" !== e.className || e.id || (i = "/users");
                    var i = "/1.1" + i;
                    return e.id && (i = i + "/" + e.id), e._startSave(), {
                      method: t,
                      path: i,
                      body: n
                    }
                  })
                }, r).then(function(e) {
                  var n = o.map(t, function(t, n) {
                    return e[n].success ? (t._finishSave(t.parse(e[n].success)), t) : (t._cancelSave(), new s(e[n].error.code, e[n].error.error))
                  });
                  return b(n)
                })
              });
            return e._arrayEach(t, function(e) {
              e._allPreviousSaves = u
            }), u
          })
        }).then(function() {
          return t
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4);
    e.exports = function(e) {
      e.Role = e.Object.extend("_Role", {
        constructor: function(t, n) {
          if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), n) {
            if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n)
          }
        },
        getName: function() {
          return this.get("name")
        },
        setName: function(e, t) {
          return this.set("name", e, t)
        },
        getUsers: function() {
          return this.relation("users")
        },
        getRoles: function() {
          return this.relation("roles")
        },
        validate: function(t, n) {
          if ("name" in t && t.name !== this.getName()) {
            var o = t.name;
            if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
          }
          return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }
    var i = n(0),
      o = n(17),
      s = n(4),
      a = n(2),
      u = a._request,
      c = a.request,
      l = n(1),
      f = function() {
        if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
        return new l(function(e, t) {
          wx.login({
            success: function(n) {
              var r = n.code,
                i = n.errMsg;
              r ? e(r) : t(new Error(i))
            },
            fail: function() {
              return t(new Error("wx.login 失败"))
            }
          })
        })
      },
      h = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.unionIdPlatform,
          o = void 0 === r ? "weixin" : r,
          a = n.asMainAccount,
          u = void 0 !== a && a;
        if ("string" != typeof t) throw new s(s.OTHER_CAUSE, "unionId is not a string");
        if ("string" != typeof o) throw new s(s.OTHER_CAUSE, "unionIdPlatform is not a string");
        return i.extend({}, e, {
          platform: o,
          unionid: t,
          main_account: Boolean(u)
        })
      };
    e.exports = function(e) {
      e.User = e.Object.extend("_User", {
        _isCurrentUser: !1,
        _mergeMagicFields: function(t) {
          return t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t)
        },
        _cleanupAuthData: function() {
          if (this.isCurrent()) {
            var t = this.get("authData");
            t && e._objectEach(this.get("authData"), function(e, n) {
              t[n] || delete t[n]
            })
          }
        },
        _synchronizeAllAuthData: function() {
          if (this.get("authData")) {
            var t = this;
            e._objectEach(this.get("authData"), function(e, n) {
              t._synchronizeAuthData(n)
            })
          }
        },
        _synchronizeAuthData: function(t) {
          if (this.isCurrent()) {
            var n;
            i.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
            var r = this.get("authData");
            if (r && t) {
              t.restoreAuthentication(r[n]) || this.dissociateAuthData(t)
            }
          }
        },
        _handleSaveResult: function(t) {
          return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? l.resolve() : l.resolve(e.User._saveCurrentUser(this))
        },
        _linkWith: function(t, n) {
          var o, s = this,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            u = a.failOnNotExist,
            c = void 0 !== u && u;
          return i.isString(t) ? (o = t, t = e.User._authProviders[t]) : o = t.getAuthType(), n ? this.save({
            authData: r({}, o, n)
          }, {
            fetchWhenSave: !!this.get("authData"),
            _failOnNotExist: c
          }).then(function(e) {
            return e._handleSaveResult(!0).then(function() {
              return e
            })
          }) : t.authenticate().then(function(e) {
            return s._linkWith(t, e)
          })
        },
        associateWithAuthData: function(e, t) {
          return this._linkWith(t, e)
        },
        associateWithAuthDataAndUnionId: function(e, t, n, r) {
          return this._linkWith(t, h(e, n, r))
        },
        linkWithWeapp: function() {
          var e = this;
          return f().then(function(t) {
            return e._linkWith("lc_weapp", {
              code: t
            })
          })
        },
        dissociateAuthData: function(e) {
          return this.unset("authData." + e), this.save().then(function(e) {
            return e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        _unlinkFrom: function(e) {
          return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(e)
        },
        _isLinked: function(e) {
          var t;
          return t = i.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t]
        },
        isAnonymous: function() {
          return this._isLinked("anonymous")
        },
        logOut: function() {
          this._logOutWithAll(), this._isCurrentUser = !1
        },
        _logOutWithAll: function() {
          if (this.get("authData")) {
            var t = this;
            e._objectEach(this.get("authData"), function(e, n) {
              t._logOutWith(n)
            })
          }
        },
        _logOutWith: function(t) {
          this.isCurrent() && (i.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate())
        },
        signUp: function(e, t) {
          var n = e && e.username || this.get("username");
          if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var r = e && e.password || this.get("password");
          if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(e, t).then(function(e) {
            return e.isAnonymous() && (e.unset("authData.anonymous"), e._opSetQueue = [{}]), e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        signUpOrlogInWithMobilePhone: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var r = e && e.smsCode || this.get("smsCode");
          if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return t._makeRequest = function(e, t, n, r, i) {
            return u("usersByMobilePhone", null, null, "POST", i)
          }, this.save(e, t).then(function(e) {
            return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        loginWithAuthData: function(e, t, n) {
          return this._linkWith(t, e, n)
        },
        loginWithAuthDataAndUnionId: function(e, t, n, r) {
          return this.loginWithAuthData(h(e, n, r), t, r)
        },
        loginWithWeapp: function(e) {
          var t = this;
          return f().then(function(n) {
            return t.loginWithAuthData({
              code: n
            }, "lc_weapp", e)
          })
        },
        logIn: function() {
          var e = this;
          return u("login", null, null, "POST", this.toJSON()).then(function(t) {
            var n = e.parse(t);
            return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
              return n.smsCode || delete e.attributes.smsCode, e
            })
          })
        },
        save: function(t, n, r) {
          var o, s;
          return i.isObject(t) || i.isNull(t) || i.isUndefined(t) ? (o = t, s = n) : (o = {}, o[t] = n, s = r), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function(e) {
            return e._handleSaveResult(!1).then(function() {
              return e
            })
          })
        },
        follow: function(t, n) {
          if (!this.id) throw new Error("Please signin.");
          var r = void 0,
            o = void 0;
          t.user ? (r = t.user, o = t.attributes) : r = t;
          var s = i.isString(r) ? r : r.id;
          if (!s) throw new Error("Invalid target user.");
          var a = "users/" + this.id + "/friendship/" + s;
          return u(a, null, null, "POST", e._encode(o), n)
        },
        unfollow: function(e, t) {
          if (!this.id) throw new Error("Please signin.");
          var n = void 0;
          n = e.user ? e.user : e;
          var r = i.isString(n) ? n : n.id;
          if (!r) throw new Error("Invalid target user.");
          var o = "users/" + this.id + "/friendship/" + r;
          return u(o, null, null, "DELETE", null, t)
        },
        followerQuery: function() {
          return e.User.followerQuery(this.id)
        },
        followeeQuery: function() {
          return e.User.followeeQuery(this.id)
        },
        fetch: function(t, n) {
          return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
            return e._handleSaveResult(!1).then(function() {
              return e
            })
          })
        },
        updatePassword: function(e, t, n) {
          var r = "users/" + this.id + "/updatePassword";
          return u(r, null, null, "PUT", {
            old_password: e,
            new_password: t
          }, n)
        },
        isCurrent: function() {
          return this._isCurrentUser
        },
        getUsername: function() {
          return this.get("username")
        },
        getMobilePhoneNumber: function() {
          return this.get("mobilePhoneNumber")
        },
        setMobilePhoneNumber: function(e, t) {
          return this.set("mobilePhoneNumber", e, t)
        },
        setUsername: function(e, t) {
          return this.set("username", e, t)
        },
        setPassword: function(e, t) {
          return this.set("password", e, t)
        },
        getEmail: function() {
          return this.get("email")
        },
        setEmail: function(e, t) {
          return this.set("email", e, t)
        },
        authenticated: function() {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id
        },
        isAuthenticated: function() {
          var t = this;
          return l.resolve().then(function() {
            return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
              return !0
            }, function(e) {
              if (211 === e.code) return !1;
              throw e
            })
          })
        },
        getSessionToken: function() {
          return this._sessionToken
        },
        refreshSessionToken: function(e) {
          var t = this;
          return u("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
            return t._finishFetch(e), t._handleSaveResult(!0).then(function() {
              return t
            })
          })
        },
        getRoles: function(t) {
          return e.Relation.reverseQuery("_Role", "users", this).find(t)
        }
      }, {
        _currentUser: null,
        _currentUserMatchesDisk: !1,
        _CURRENT_USER_KEY: "currentUser",
        _authProviders: {},
        signUp: function(t, n, r, i) {
          return r = r || {}, r.username = t, r.password = n, e.Object._create("_User").signUp(r, i)
        },
        logIn: function(t, n) {
          var r = e.Object._create("_User");
          return r._finishFetch({
            username: t,
            password: n
          }), r.logIn()
        },
        become: function(e) {
          return this._fetchUserBySessionToken(e).then(function(e) {
            return e._handleSaveResult(!0).then(function() {
              return e
            })
          })
        },
        _fetchUserBySessionToken: function(t) {
          var n = e.Object._create("_User");
          return c({
            method: "GET",
            path: "/users/me",
            authOptions: {
              sessionToken: t
            }
          }).then(function(e) {
            var t = n.parse(e);
            return n._finishFetch(t), n
          })
        },
        logInWithMobilePhoneSmsCode: function(t, n) {
          var r = e.Object._create("_User");
          return r._finishFetch({
            mobilePhoneNumber: t,
            smsCode: n
          }), r.logIn()
        },
        signUpOrlogInWithMobilePhone: function(t, n, r, i) {
          return r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
        },
        logInWithMobilePhone: function(t, n) {
          var r = e.Object._create("_User");
          return r._finishFetch({
            mobilePhoneNumber: t,
            password: n
          }), r.logIn()
        },
        loginWithAuthData: function(t, n, r) {
          return e.User._logInWith(n, t, r)
        },
        signUpOrlogInWithAuthData: function() {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments)
        },
        loginWithAuthDataAndUnionId: function(e, t, n, r) {
          return this.loginWithAuthData(h(e, n, r), t, r)
        },
        signUpOrlogInWithAuthDataAndUnionId: function() {
          return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments)
        },
        loginWithWeapp: function(e) {
          var t = this;
          return f().then(function(n) {
            return t.loginWithAuthData({
              code: n
            }, "lc_weapp", e)
          })
        },
        loginAnonymously: function() {
          return this.loginWithAuthData({
            id: o()
          }, "anonymous")
        },
        associateWithAuthData: function(e, t, n) {
          return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), e._linkWith(t, n)
        },
        logOut: function() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function() {
            return e._refreshSubscriptionId()
          }))
        },
        followerQuery: function(t) {
          if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
          var n = new e.FriendShipQuery("_Follower");
          return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
        },
        followeeQuery: function(t) {
          if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
          var n = new e.FriendShipQuery("_Followee");
          return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
        },
        requestPasswordReset: function(e) {
          return u("requestPasswordReset", null, null, "POST", {
            email: e
          })
        },
        requestEmailVerify: function(e) {
          return u("requestEmailVerify", null, null, "POST", {
            email: e
          })
        },
        requestMobilePhoneVerify: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), u("requestMobilePhoneVerify", null, null, "POST", n, t)
        },
        requestPasswordResetBySmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), u("requestPasswordResetBySmsCode", null, null, "POST", n, t)
        },
        resetPasswordBySmsCode: function(e, t) {
          return u("resetPasswordBySmsCode", null, e, "PUT", {
            password: t
          })
        },
        verifyMobilePhone: function(e) {
          return u("verifyMobilePhone", null, e, "POST", null)
        },
        requestLoginSmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
              mobilePhoneNumber: e
            };
          return t.validateToken && (n.validate_token = t.validateToken), u("requestLoginSmsCode", null, null, "POST", n, t)
        },
        currentAsync: function() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), l.resolve(null)) : e.User._currentUser ? l.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? l.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
            if (!t) return null;
            e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(t);
            return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
          })
        },
        current: function() {
          if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
          if (e.User._currentUser) return e.User._currentUser;
          if (e.User._currentUserMatchesDisk) return e.User._currentUser;
          e.User._currentUserMatchesDisk = !0;
          var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
          if (!t) return null;
          e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
          var n = JSON.parse(t);
          return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
        },
        _saveCurrentUser: function(t) {
          var n;
          return n = e.User._currentUser !== t ? e.User.logOut() : l.resolve(), n.then(function() {
            t._isCurrentUser = !0, e.User._currentUser = t;
            var n = t._toFullJSON();
            return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
              return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId()
            })
          })
        },
        _registerAuthenticationProvider: function(t) {
          e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType())
        },
        _logInWith: function(t, n, r) {
          return e.Object._create("_User")._linkWith(t, n, r)
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(7)("leancloud:query"),
      o = n(1),
      s = n(4),
      a = n(2),
      u = a._request,
      c = a.request,
      l = n(3),
      f = l.ensureArray,
      h = l.transformFetchOptions,
      d = function(e, t) {
        if (void 0 === e) throw new Error(t)
      };
    e.exports = function(e) {
      e.Query = function(t) {
        r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
      }, e.Query.or = function() {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function(e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._orQuery(t), i
      }, e.Query.and = function() {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function(e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._andQuery(t), i
      }, e.Query.doCloudQuery = function(t, n, i) {
        var o = {
          cql: t
        };
        return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function(t) {
          var n = new e.Query(t.className);
          return {
            results: r.map(t.results, function(e) {
              var r = n._newObject(t);
              return r._finishFetch && r._finishFetch(n._processResult(e), !0), r
            }),
            count: t.count,
            className: t.className
          }
        })
      }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
        _processResult: function(e) {
          return e
        },
        get: function(e, t) {
          if (!e) {
            throw new s(s.OBJECT_NOT_FOUND, "Object not found.")
          }
          var n = this._newObject();
          n.id = e;
          var i = this.toJSON(),
            o = {};
          return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), u("classes", this.className, e, "GET", h(o), t).then(function(e) {
            if (r.isEmpty(e)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
            return n._finishFetch(n.parse(e), !0), n
          })
        },
        toJSON: function() {
          var t = {
            where: this._where
          };
          return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function(e, n) {
            t[n] = e
          }), t
        },
        _newObject: function(t) {
          return t && t.className ? new e.Object(t.className) : new this.objectClass
        },
        _createRequest: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
            t = arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
          if (encodeURIComponent(JSON.stringify(e)).length > 2e3) {
            return c({
              path: "/batch",
              method: "POST",
              data: {
                requests: [{
                  method: "GET",
                  path: "/1.1" + n,
                  params: e
                }]
              },
              authOptions: t
            }).then(function(e) {
              var t = e[0];
              if (t.success) return t.success;
              var n = new Error(t.error.error || "Unknown batch error");
              throw n.code = t.error.code, n
            })
          }
          return c({
            method: "GET",
            path: n,
            query: e,
            authOptions: t
          })
        },
        _parseResponse: function(e) {
          var t = this;
          return r.map(e.results, function(n) {
            var r = t._newObject(e);
            return r._finishFetch && r._finishFetch(t._processResult(n), !0), r
          })
        },
        find: function(e) {
          return this._createRequest(void 0, e).then(this._parseResponse.bind(this))
        },
        scan: function() {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.orderedBy,
            s = t.batchSize,
            a = arguments[1],
            c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
          var l = o.resolve([]),
            f = void 0,
            h = !1;
          return {
            next: function() {
              return l = l.then(function(t) {
                return h ? [] : t.length > 1 ? t : f || 0 === t.length ? u("scan/classes", e.className, null, "GET", f ? r.extend({}, c, {
                  cursor: f
                }) : c, a).then(function(t) {
                  return f = t.cursor, e._parseResponse(t)
                }).then(function(e) {
                  return e.length || (h = !0), t.concat(e)
                }) : (h = !0, t)
              }), l.then(function(e) {
                return e.shift()
              }).then(function(e) {
                return {
                  value: e,
                  done: h
                }
              })
            }
          }
        },
        destroyAll: function(t) {
          return this.find(t).then(function(n) {
            return e.Object.destroyAll(n, t)
          })
        },
        count: function(e) {
          var t = this.toJSON();
          return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function(e) {
            return e.count
          })
        },
        first: function(e) {
          var t = this,
            n = this.toJSON();
          return n.limit = 1, this._createRequest(n, e).then(function(e) {
            return r.map(e.results, function(e) {
              var n = t._newObject();
              return n._finishFetch && n._finishFetch(t._processResult(e), !0), n
            })[0]
          })
        },
        skip: function(e) {
          return d(e, "undefined is not a valid skip value"), this._skip = e, this
        },
        limit: function(e) {
          return d(e, "undefined is not a valid limit value"), this._limit = e, this
        },
        equalTo: function(t, n) {
          return d(t, "undefined is not a valid key"), d(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this
        },
        _addCondition: function(t, n, r) {
          return d(t, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), d(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this
        },
        sizeEqualTo: function(e, t) {
          return this._addCondition(e, "$size", t), this
        },
        notEqualTo: function(e, t) {
          return this._addCondition(e, "$ne", t), this
        },
        lessThan: function(e, t) {
          return this._addCondition(e, "$lt", t), this
        },
        greaterThan: function(e, t) {
          return this._addCondition(e, "$gt", t), this
        },
        lessThanOrEqualTo: function(e, t) {
          return this._addCondition(e, "$lte", t), this
        },
        greaterThanOrEqualTo: function(e, t) {
          return this._addCondition(e, "$gte", t), this
        },
        containedIn: function(e, t) {
          return this._addCondition(e, "$in", t), this
        },
        notContainedIn: function(e, t) {
          return this._addCondition(e, "$nin", t), this
        },
        containsAll: function(e, t) {
          return this._addCondition(e, "$all", t), this
        },
        exists: function(e) {
          return this._addCondition(e, "$exists", !0), this
        },
        doesNotExist: function(e) {
          return this._addCondition(e, "$exists", !1), this
        },
        matches: function(e, t, n) {
          return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
        },
        matchesQuery: function(e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$inQuery", n), this
        },
        doesNotMatchQuery: function(e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
        },
        matchesKeyInQuery: function(e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$select", {
            key: t,
            query: r
          }), this
        },
        doesNotMatchKeyInQuery: function(e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$dontSelect", {
            key: t,
            query: r
          }), this
        },
        _orQuery: function(e) {
          var t = r.map(e, function(e) {
            return e.toJSON().where
          });
          return this._where.$or = t, this
        },
        _andQuery: function(e) {
          var t = r.map(e, function(e) {
            return e.toJSON().where
          });
          return this._where.$and = t, this
        },
        _quote: function(e) {
          return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
        },
        contains: function(e, t) {
          return this._addCondition(e, "$regex", this._quote(t)), this
        },
        startsWith: function(e, t) {
          return this._addCondition(e, "$regex", "^" + this._quote(t)), this
        },
        endsWith: function(e, t) {
          return this._addCondition(e, "$regex", this._quote(t) + "$"), this
        },
        ascending: function(e) {
          return d(e, "undefined is not a valid key"), this._order = e, this
        },
        addAscending: function(e) {
          return d(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this
        },
        descending: function(e) {
          return d(e, "undefined is not a valid key"), this._order = "-" + e, this
        },
        addDescending: function(e) {
          return d(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this
        },
        near: function(t, n) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this
        },
        withinRadians: function(e, t, n) {
          return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
        },
        withinMiles: function(e, t, n) {
          return this.withinRadians(e, t, n / 3958.8)
        },
        withinKilometers: function(e, t, n) {
          return this.withinRadians(e, t, n / 6371)
        },
        withinGeoBox: function(t, n, r) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", {
            $box: [n, r]
          }), this
        },
        include: function(e) {
          var t = this;
          return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
            t._include = t._include.concat(f(e))
          }), this
        },
        includeACL: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = e, this
        },
        select: function(e) {
          var t = this;
          return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
            t._select = t._select.concat(f(e))
          }), this
        },
        each: function(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return o.reject(i)
          }
          var s = new e.Query(this.objectClass);
          s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), s.ascending("objectId");
          var a = !1;
          return o._continueWhile(function() {
            return !a
          }, function() {
            return s.find(n).then(function(e) {
              var n = o.resolve();
              return r.each(e, function(e) {
                n = n.then(function() {
                  return t(e)
                })
              }), n.then(function() {
                e.length >= s._limit ? s.greaterThan("objectId", e[e.length - 1].id) : a = !0
              })
            })
          })
        },
        subscribe: function(t) {
          return e.LiveQuery.init(this, t)
        }
      }), e.FriendShipQuery = e.Query._extend({
        _objectClass: e.User,
        _newObject: function() {
          return new e.User
        },
        _processResult: function(e) {
          if (e && e[this._friendshipTag]) {
            var t = e[this._friendshipTag];
            return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t
          }
          return null
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(68),
      o = n(1),
      s = n(3),
      a = s.inherits,
      u = n(2),
      c = u.request,
      l = function(e, t) {
        return c({
          method: "POST",
          path: "/LiveQuery/subscribe",
          data: {
            query: e,
            id: t
          }
        })
      };
    e.exports = function(e) {
      var t = function() {
        if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query")
      };
      e.LiveQuery = a(i, {
        constructor: function(e, t, n, r) {
          var o = this;
          i.apply(this), this.id = e, this._client = t, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function() {
            l(o._queryJSON, o._subscriptionId).catch(function(e) {
              return console.error("LiveQuery resubscribe error: " + e.message)
            })
          }, t.on("message", this._onMessage), t.on("reconnect", this._onReconnect)
        },
        _dispatch: function(t) {
          var n = this;
          t.forEach(function(t) {
            var i = t.op,
              o = t.object,
              s = t.query_id,
              a = t.updatedKeys;
            if (s === n.id) {
              var u = e.parseJSON(r.extend({
                __type: "_File" === o.className ? "File" : "Object"
              }, o));
              a ? n.emit(i, u, a) : n.emit(i, u)
            }
          })
        },
        unsubscribe: function() {
          var e = this._client;
          return e.off("message", this._onMessage), e.off("reconnect", this._onReconnect), e.deregister(this), c({
            method: "POST",
            path: "/LiveQuery/unsubscribe",
            data: {
              id: e.id,
              query_id: this.id
            }
          })
        }
      }, {
        init: function(n) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.subscriptionId,
            s = void 0 === i ? e._getSubscriptionId() : i;
          if (t(), !(n instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");
          return o.resolve(s).then(function(t) {
            return e._config.realtime.createLiveQueryClient(t).then(function(r) {
              var i = n.toJSON(),
                o = i.where,
                s = i.keys,
                a = i.returnACL,
                u = {
                  where: o,
                  keys: s,
                  returnACL: a,
                  className: n.className
                },
                c = l(u, t).then(function(n) {
                  var i = n.query_id;
                  return new e.LiveQuery(i, r, u, t)
                }).finally(function() {
                  r.deregister(c)
                });
              return r.register(c), c
            })
          })
        },
        pause: function() {
          return t(), e._config.realtime.pause()
        },
        resume: function() {
          return t(), e._config.realtime.resume()
        }
      })
    }
  }, function(e, t, n) {
    "use strict";

    function r() {}

    function i(e, t, n) {
      this.fn = e, this.context = t, this.once = n || !1
    }

    function o() {
      this._events = new r, this._eventsCount = 0
    }
    var s = Object.prototype.hasOwnProperty,
      a = "~";
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function() {
      var e, t, n = [];
      if (0 === this._eventsCount) return n;
      for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
    }, o.prototype.listeners = function(e, t) {
      var n = a ? a + e : e,
        r = this._events[n];
      if (t) return !!r;
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
      return s
    }, o.prototype.emit = function(e, t, n, r, i, o) {
      var s = a ? a + e : e;
      if (!this._events[s]) return !1;
      var u, c, l = this._events[s],
        f = arguments.length;
      if (l.fn) {
        switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
          case 1:
            return l.fn.call(l.context), !0;
          case 2:
            return l.fn.call(l.context, t), !0;
          case 3:
            return l.fn.call(l.context, t, n), !0;
          case 4:
            return l.fn.call(l.context, t, n, r), !0;
          case 5:
            return l.fn.call(l.context, t, n, r, i), !0;
          case 6:
            return l.fn.call(l.context, t, n, r, i, o), !0
        }
        for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
        l.fn.apply(l.context, u)
      } else {
        var h, d = l.length;
        for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f) {
          case 1:
            l[c].fn.call(l[c].context);
            break;
          case 2:
            l[c].fn.call(l[c].context, t);
            break;
          case 3:
            l[c].fn.call(l[c].context, t, n);
            break;
          case 4:
            l[c].fn.call(l[c].context, t, n, r);
            break;
          default:
            if (!u)
              for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
            l[c].fn.apply(l[c].context, u)
        }
      }
      return !0
    }, o.prototype.on = function(e, t, n) {
      var r = new i(t, n || this),
        o = a ? a + e : e;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.once = function(e, t, n) {
      var r = new i(t, n || this, !0),
        o = a ? a + e : e;
      return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.removeListener = function(e, t, n, i) {
      var o = a ? a + e : e;
      if (!this._events[o]) return this;
      if (!t) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
      var s = this._events[o];
      if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]);
      else {
        for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
        c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
      }
      return this
    }, o.prototype.removeAllListeners = function(e) {
      var t;
      return e ? (t = a ? a + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r : delete this._events[t])) : (this._events = new r, this._eventsCount = 0), this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
      return this
    }, o.prefixed = a, o.EventEmitter = o, e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = i.tap;
    e.exports = function(e) {
      e.Captcha = function(e, t) {
        this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
      }, e.Captcha.prototype.refresh = function() {
        var t = this;
        return e.Cloud._requestCaptcha(this._options, this._authOptions).then(function(e) {
          var n = e.captchaToken,
            i = e.url;
          return r.extend(t, {
            captchaToken: n,
            url: i
          }), i
        })
      }, e.Captcha.prototype.verify = function(t) {
        var n = this;
        return e.Cloud.verifyCaptcha(t, this.captchaToken).then(o(function(e) {
          return n.validateToken = e
        }))
      }, e.Captcha.request = function(t, n) {
        var r = new e.Captcha(t, n);
        return r.refresh().then(function() {
          return r
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = i.request,
      a = n(1);
    e.exports = function(e) {
      e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
        run: function(t, n, r) {
          return s({
            service: "engine",
            method: "POST",
            path: "/functions/" + t,
            data: e._encode(n, null, !0),
            authOptions: r
          }).then(function(t) {
            return e._decode(t).result
          })
        },
        rpc: function(t, n, i) {
          return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
            service: "engine",
            method: "POST",
            path: "/call/" + t,
            data: e._encodeObjectOrArray(n),
            authOptions: i
          }).then(function(t) {
            return e._decode(t).result
          })
        },
        getServerDate: function() {
          return o("date", null, null, "GET").then(function(t) {
            return e._decode(t)
          })
        },
        requestSmsCode: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(e) && (e = {
              mobilePhoneNumber: e
            }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
          return t.validateToken && (e = r.extend({}, e, {
            validate_token: t.validateToken
          })), o("requestSmsCode", null, null, "POST", e, t)
        },
        verifySmsCode: function(e, t) {
          if (!e) throw new Error("Missing sms code.");
          var n = {};
          return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n)
        },
        _requestCaptcha: function(e, t) {
          return o("requestCaptcha", null, null, "GET", e, t).then(function(e) {
            var t = e.captcha_url;
            return {
              captchaToken: e.captcha_token,
              url: t
            }
          })
        },
        requestCaptcha: e.Captcha.request,
        verifyCaptcha: function(e, t) {
          return o("verifyCaptcha", null, null, "POST", {
            captcha_code: e,
            captcha_token: t
          }).then(function(e) {
            return e.validate_token
          })
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(2).request;
    e.exports = function(e) {
      e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
        if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
        if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
        return r({
          service: "push",
          method: "POST",
          path: "/push",
          data: e,
          authOptions: t
        })
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      i = n(0),
      o = n(1),
      s = n(2)._request,
      a = n(3),
      u = a.getSessionToken;
    e.exports = function(e) {
      var t = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return u(t) ? e.User._fetchUserBySessionToken(u(t)) : e.User.currentAsync()
        },
        n = function(n) {
          return t(n).then(function(t) {
            return e.Object.createWithoutData("_User", t.id)._toPointer()
          })
        };
      e.Status = function(e, t) {
        return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : r(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this
      }, i.extend(e.Status.prototype, {
        get: function(e) {
          return this.data[e]
        },
        set: function(e, t) {
          return this.data[e] = t, this
        },
        destroy: function(e) {
          return this.id ? s("statuses", null, this.id, "DELETE", e) : o.reject(new Error("The status id is not exists."))
        },
        toObject: function() {
          return this.id ? e.Object.createWithoutData("_Status", this.id) : null
        },
        _getDataJSON: function() {
          var t = i.clone(this.data);
          return e._encode(t)
        },
        send: function() {
          var t = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
          return this.query ? n(r).then(function(e) {
            var n = t.query.toJSON();
            n.className = t.query.className;
            var i = {};
            return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", i, r)
          }).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          }) : e.Status.sendStatusToFollowers(this, r)
        },
        _finishFetch: function(t) {
          this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t)
        }
      }), e.Status.sendStatusToFollowers = function(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
        return n(r).then(function(n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {
            user: n
          };
          var o = {};
          return o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), o.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", o, r).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.sendPrivateStatus = function(t, r) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!u(o) && !e.User.current()) throw new Error("Please signin an user.");
        if (!r) throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a) throw new Error("Invalid target user.");
        return n(o).then(function(n) {
          var r = {};
          r.className = "_User", r.where = {
            objectId: a
          };
          var i = {};
          return i.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, i.data = t._getDataJSON(), i.inboxType = "private", t.inboxType = "private", s("statuses", null, null, "POST", i, o).then(function(n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.countUnreadStatuses = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return o.resolve(n || t(a)).then(function(t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/count", null, null, "GET", n, a)
        })
      }, e.Status.resetUnreadCount = function(n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (a = r), !u(a) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return o.resolve(n || t(a)).then(function(t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, a)
        })
      }, e.Status.statusQuery = function(t) {
        var n = new e.Query("_Status");
        return t && n.equalTo("source", t), n
      }, e.InboxQuery = e.Query._extend({
        _objectClass: e.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function() {
          return new e.Status
        },
        _createRequest: function(t, n) {
          return e.InboxQuery.__super__._createRequest.call(this, t, n, "/subscribe/statuses")
        },
        sinceId: function(e) {
          return this._sinceId = e, this
        },
        maxId: function(e) {
          return this._maxId = e, this
        },
        owner: function(e) {
          return this._owner = e, this
        },
        inboxType: function(e) {
          return this._inboxType = e, this
        },
        toJSON: function() {
          var t = e.InboxQuery.__super__.toJSON.call(this);
          return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t
        }
      }), e.Status.inboxQuery = function(t, n) {
        var r = new e.InboxQuery(e.Status);
        return t && (r._owner = t), n && (r._inboxType = n), r
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2)._request;
    e.exports = function(e) {
      e.SearchSortBuilder = function() {
        this._sortFields = []
      }, r.extend(e.SearchSortBuilder.prototype, {
        _addField: function(e, t, n, r) {
          var i = {};
          return i[e] = {
            order: t || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this
        },
        ascending: function(e, t, n) {
          return this._addField(e, "asc", t, n)
        },
        descending: function(e, t, n) {
          return this._addField(e, "desc", t, n)
        },
        whereNear: function(e, t, n) {
          n = n || {};
          var r = {},
            i = {
              lat: t.latitude,
              lon: t.longitude
            },
            o = {
              order: n.order || "asc",
              mode: n.mode || "avg",
              unit: n.unit || "km"
            };
          return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this
        },
        build: function() {
          return JSON.stringify(e._encode(this._sortFields))
        }
      }), e.SearchQuery = e.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function(e, t) {
          return i("search/select", null, null, "GET", e || this.toJSON(), t)
        },
        sid: function(e) {
          return this._sid = e, this
        },
        queryString: function(e) {
          return this._queryString = e, this
        },
        highlights: function(e) {
          var t;
          return t = e && r.isString(e) ? arguments : e, this._highlights = t, this
        },
        sortBy: function(e) {
          return this._sortBuilder = e, this
        },
        hits: function() {
          return this._hits || (this._hits = 0), this._hits
        },
        _processResult: function(e) {
          return delete e.className, delete e._app_url, delete e._deeplink, e
        },
        hasMore: function() {
          return !this._hitEnd
        },
        reset: function() {
          this._hitEnd = !1, this._sid = null, this._hits = 0
        },
        find: function() {
          var e = this;
          return this._createRequest().then(function(t) {
            return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, r.map(t.results, function(n) {
              n.className && (t.className = n.className);
              var r = e._newObject(t);
              return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
            })
          })
        },
        toJSON: function() {
          var t = e.SearchQuery.__super__.toJSON.call(this);
          if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
          if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (t.sort = this._sortBuilder.build()), t
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = n(2),
      s = o.request,
      a = n(1);
    e.exports = function(e) {
      e.Insight = e.Insight || {}, r.extend(e.Insight, {
        startJob: function(t, n) {
          if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: t,
            appId: e.applicationId
          };
          return s({
            path: "/bigquery/jobs",
            method: "POST",
            data: e._encode(r, null, !0),
            authOptions: n,
            signKey: !1
          }).then(function(t) {
            return e._decode(t).id
          })
        },
        on: function(e, t) {}
      }), e.Insight.JobQuery = function(e, t) {
        if (!e) throw new Error("Please provide the job id.");
        this.id = e, this.className = t, this._skip = 0, this._limit = 100
      }, r.extend(e.Insight.JobQuery.prototype, {
        skip: function(e) {
          return this._skip = e, this
        },
        limit: function(e) {
          return this._limit = e, this
        },
        find: function(e) {
          var t = {
            skip: this._skip,
            limit: this._limit
          };
          return s({
            path: "/bigquery/jobs/" + this.id,
            method: "GET",
            query: t,
            authOptions: e,
            signKey: !1
          }).then(function(e) {
            return e.error ? a.reject(new i(e.code, e.error)) : a.resolve(e)
          })
        }
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = n(6),
      a = function(e) {
        return "string" == typeof e ? e : "function" == typeof e.getPayload ? JSON.stringify(e.getPayload()) : JSON.stringify(e)
      };
    e.exports = s.Object.extend("_Conversation", {
      constructor: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), void 0 !== t.isTransient && this.set("tr", !!t.isTransient)
      },
      getCreator: function() {
        return this.get("c")
      },
      getLastMessageAt: function() {
        return this.get("lm")
      },
      getMembers: function() {
        return this.get("m")
      },
      addMember: function(e) {
        return this.add("m", e)
      },
      getMutedMembers: function() {
        return this.get("mu")
      },
      getName: function() {
        return this.get("name")
      },
      isTransient: function() {
        return this.get("tr")
      },
      isSystem: function() {
        return this.get("sys")
      },
      send: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = {
            from_peer: e,
            conv_id: this.id,
            transient: !1,
            message: a(t)
          };
        return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), o("rtm", "messages", null, "POST", i, r)
      },
      broadcast: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = {
            from_peer: e,
            conv_id: this.id,
            message: a(t)
          };
        if (void 0 !== n.pushData && (s.push = n.pushData), void 0 !== n.validTill) {
          var u = n.validTill;
          r.isDate(u) && (u = u.getTime()), n.valid_till = u
        }
        return o("rtm", "broadcast", null, "POST", s, i)
      }
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      var t = e.name,
        n = e.value,
        r = e.version;
      this.name = t, this.value = n, this.version = r
    }
    var i = n(0),
      o = n(1),
      s = n(2),
      a = s.request,
      u = n(3),
      c = u.ensureArray,
      l = u.parseDate,
      f = n(6);
    f.LeaderboardVersionChangeInterval = {
      NEVER: "never",
      DAY: "day",
      WEEK: "week",
      MONTH: "month"
    }, f.LeaderboardOrder = {
      ASCENDING: "ascending",
      DESCENDING: "descending"
    }, f.LeaderboardUpdateStrategy = {
      BETTER: "better",
      LAST: "last",
      SUM: "sum"
    };
    var h = function(e) {
      var t = f._decode(e);
      return new r({
        name: t.statisticName,
        value: t.statisticValue,
        version: t.version
      })
    };
    f.Leaderboard = function(e) {
      this.statisticName = e, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0
    };
    var d = f.Leaderboard;
    f.Leaderboard.createWithoutData = function(e) {
      return new d(e)
    }, f.Leaderboard.createLeaderboard = function(e, t) {
      var n = e.statisticName,
        r = e.order,
        i = e.versionChangeInterval,
        o = e.updateStrategy;
      return a({
        method: "POST",
        path: "/leaderboard/leaderboards",
        data: {
          statisticName: n,
          order: r,
          versionChangeInterval: i,
          updateStrategy: o
        },
        authOptions: t
      }).then(function(e) {
        return new d(n)._finishFetch(e)
      })
    }, f.Leaderboard.getLeaderboard = function(e, t) {
      return d.createWithoutData(e).fetch(t)
    }, f.Leaderboard.getStatistics = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.statisticNames,
        r = arguments[2];
      return o.resolve().then(function() {
        if (!e || !e.id) throw new Error("user must be an AV.User");
        return a({
          method: "GET",
          path: "/leaderboard/users/" + e.id + "/statistics",
          query: {
            statistics: n ? c(n).join(",") : void 0
          },
          authOptions: r
        }).then(function(e) {
          return e.results.map(h)
        })
      })
    }, f.Leaderboard.updateStatistics = function(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return o.resolve().then(function() {
        if (!e || !e.id) throw new Error("user must be an AV.User");
        var r = i.map(t, function(e, t) {
            return {
              statisticName: t,
              statisticValue: e
            }
          }),
          o = n.overwrite;
        return a({
          method: "POST",
          path: "/leaderboard/users/" + e.id + "/statistics",
          query: {
            overwrite: o ? 1 : void 0
          },
          data: r,
          authOptions: n
        }).then(function(e) {
          return e.results.map(h)
        })
      })
    }, i.extend(d.prototype, {
      _finishFetch: function(e) {
        var t = this;
        return i.forEach(e, function(e, n) {
          "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (e = l(e)), e && "Date" === e.__type && (e = l(e.iso)), t[n] = e)
        }), this
      },
      fetch: function(e) {
        var t = this;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: e
        }).then(function(e) {
          return t._finishFetch(e)
        })
      },
      _getResults: function(e, t, n) {
        var r = e.skip,
          i = e.limit,
          o = e.selectUserKeys,
          s = e.includeStatistics,
          u = e.version;
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
          query: {
            skip: r,
            limit: i,
            includeUser: o ? c(o).join(",") : void 0,
            includeStatistics: s ? c(s).join(",") : void 0,
            version: u
          },
          authOptions: t
        }).then(function(e) {
          return e.results.map(function(e) {
            var t = f._decode(e),
              n = t.user,
              r = t.statisticValue,
              i = t.rank,
              o = t.statistics;
            return {
              user: n,
              value: r,
              rank: i,
              includedStatistics: (void 0 === o ? [] : o).map(h)
            }
          })
        })
      },
      getResults: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.skip,
          n = e.limit,
          r = e.selectUserKeys,
          i = e.includeStatistics,
          o = e.version,
          s = arguments[1];
        return this._getResults({
          skip: t,
          limit: n,
          selectUserKeys: r,
          includeStatistics: i,
          version: o
        }, s)
      },
      getResultsAroundUser: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments[2];
        if (e && "string" != typeof e.id) return this.getResultsAroundUser(void 0, e, t);
        var r = t.limit,
          i = t.selectUserKeys,
          o = t.includeStatistics,
          s = t.version;
        return this._getResults({
          limit: r,
          selectUserKeys: i,
          includeStatistics: o,
          version: s
        }, n, e ? e.id : "self")
      },
      _update: function(e, t) {
        var n = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          data: e,
          authOptions: t
        }).then(function(e) {
          return n._finishFetch(e)
        })
      },
      updateVersionChangeInterval: function(e, t) {
        return this._update({
          versionChangeInterval: e
        }, t)
      },
      updateUpdateStrategy: function(e, t) {
        return this._update({
          updateStrategy: e
        }, t)
      },
      reset: function(e) {
        var t = this;
        return a({
          method: "PUT",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
          authOptions: e
        }).then(function(e) {
          return t._finishFetch(e)
        })
      },
      destroy: function(e) {
        return f.request({
          method: "DELETE",
          path: "/leaderboard/leaderboards/" + this.statisticName,
          authOptions: e
        }).then(function() {})
      },
      getArchives: function() {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.skip,
          r = t.limit,
          i = arguments[1];
        return a({
          method: "GET",
          path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
          query: {
            skip: n,
            limit: r
          },
          authOptions: i
        }).then(function(t) {
          return t.results.map(function(t) {
            var n = t.version,
              r = t.status,
              i = t.url,
              o = t.activatedAt,
              s = t.deactivatedAt;
            return {
              statisticName: e.statisticName,
              version: n,
              status: r,
              url: i,
              activatedAt: l(o.iso),
              deactivatedAt: l(s.iso)
            }
          })
        })
      }
    })
  }, function(e, t, n) {
    (function(e) {
      ! function(e, n) {
        n(t)
      }(0, function(t) {
        "use strict";

        function n() {
          throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
        }

        function r(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }

        function i(e, t) {
          return t = {
            exports: {}
          }, e(t, t.exports), t.exports
        }

        function o(e) {
          var t, n;
          this.promise = new e(function(e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r
          }), this.resolve = xe(t), this.reject = xe(n)
        }

        function s(e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
        }

        function a(e, t) {
          for (var n = e[Qi][t]; null != n;) {
            if (n.kind === $i) return n.listener;
            n = n.next
          }
          return null
        }

        function u(e, t, n) {
          "function" != typeof n && "object" != typeof n && (n = null);
          for (var r = null, i = e[Qi][t]; null != i;) i.kind === $i ? null == r ? e[Qi][t] = i.next : r.next = i.next : r = i, i = i.next;
          null != n && (null == r ? e[Qi][t] = Xi(n, $i) : r.next = Xi(n, $i))
        }

        function c(e) {
          this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Wi(e.header).reduce(function(t, n) {
            return t[n.toLowerCase()] = e.header[n], t
          }, {}));
          var t = e.data;
          "string" != typeof t && (t = Bi(t)), this.responseText = this.response = t, this.readyState = po, this.dispatchEvent({
            type: "readystatechange"
          })
        }

        function l(e) {
          "" !== e.message && Ao && (Ao._readyState = To, Ao.dispatchEvent({
            type: "error",
            message: e.errMsg
          }))
        }

        function f(e) {
          if (e = String(e), !(e.length > 100)) {
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (t) {
              var n = parseFloat(t[1]);
              switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return n * aa;
                case "days":
                case "day":
                case "d":
                  return n * sa;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * oa;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * ia;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * ra;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return n;
                default:
                  return
              }
            }
          }
        }

        function h(e) {
          return e >= sa ? Math.round(e / sa) + "d" : e >= oa ? Math.round(e / oa) + "h" : e >= ia ? Math.round(e / ia) + "m" : e >= ra ? Math.round(e / ra) + "s" : e + "ms"
        }

        function d(e) {
          return p(e, sa, "day") || p(e, oa, "hour") || p(e, ia, "minute") || p(e, ra, "second") || e + " ms"
        }

        function p(e, t, n) {
          if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }

        function y(e) {
          return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function v(e) {
          return "function" == typeof e.readFloatLE && "function" == typeof e.slice && y(e.slice(0, 0))
        }

        function m(e) {
          return "[object Array]" === da.call(e)
        }

        function g(e) {
          return "[object ArrayBuffer]" === da.call(e)
        }

        function _(e) {
          return "undefined" != typeof FormData && e instanceof FormData
        }

        function b(e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function w(e) {
          return "string" == typeof e
        }

        function E(e) {
          return "number" == typeof e
        }

        function S(e) {
          return void 0 === e
        }

        function T(e) {
          return null !== e && "object" === (void 0 === e ? "undefined" : vi(e))
        }

        function O(e) {
          return "[object Date]" === da.call(e)
        }

        function A(e) {
          return "[object File]" === da.call(e)
        }

        function C(e) {
          return "[object Blob]" === da.call(e)
        }

        function I(e) {
          return "[object Function]" === da.call(e)
        }

        function N(e) {
          return T(e) && I(e.pipe)
        }

        function x(e) {
          return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function j(e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function P() {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function R(e, t) {
          if (null !== e && void 0 !== e)
            if ("object" !== (void 0 === e ? "undefined" : vi(e)) && (e = [e]), m(e))
              for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }

        function k() {
          function e(e, n) {
            "object" === vi(t[n]) && "object" === (void 0 === e ? "undefined" : vi(e)) ? t[n] = k(t[n], e) : t[n] = e
          }
          for (var t = {}, n = 0, r = arguments.length; n < r; n++) R(arguments[n], e);
          return t
        }

        function L(e, t, n) {
          return R(t, function(t, r) {
            e[r] = n && "function" == typeof t ? fa(t, n) : t
          }), e
        }

        function U(e) {
          return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function F() {
          this.message = "String contains an invalid character"
        }

        function D(e) {
          for (var t, n, r = String(e), i = "", o = 0, s = Sa; r.charAt(0 | o) || (s = "=", o % 1); i += s.charAt(63 & t >> 8 - o % 1 * 8)) {
            if ((n = r.charCodeAt(o += .75)) > 255) throw new F;
            t = t << 8 | n
          }
          return i
        }

        function M(e, t) {
          !pa.isUndefined(e) && pa.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        function B() {
          this.handlers = []
        }

        function q(e) {
          e.cancelToken && e.cancelToken.throwIfRequested()
        }

        function V(e) {
          this.defaults = e, this.interceptors = {
            request: new ja,
            response: new ja
          }
        }

        function Y(e) {
          this.message = e
        }

        function W(e) {
          if ("function" != typeof e) throw new TypeError("executor must be a function.");
          var t;
          this.promise = new cr(function(e) {
            t = e
          });
          var n = this;
          e(function(e) {
            n.reason || (n.reason = new Da(e), t(n.reason))
          })
        }

        function z(e) {
          var t = new Fa(e),
            n = fa(Fa.prototype.request, t);
          return pa.extend(n, Fa.prototype, t), pa.extend(n, t), n
        }

        function G(e, t) {
          var n = -1,
            r = e.length;
          for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
          return t
        }

        function J(e, t) {
          return e + Ga(Ja() * (t - e + 1))
        }

        function H(e, t) {
          var n = -1,
            r = e.length,
            i = r - 1;
          for (t = void 0 === t ? r : t; ++n < t;) {
            var o = Ha(n, i),
              s = e[o];
            e[o] = e[n], e[n] = s
          }
          return e.length = t, e
        }

        function K(e) {
          return Ka(za(e))
        }

        function Q(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
          return i
        }

        function $(e, t) {
          return $a(t, function(t) {
            return e[t]
          })
        }

        function X(e, t) {
          for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
          return r
        }

        function Z(e) {
          var t = uu.call(e, lu),
            n = e[lu];
          try {
            e[lu] = void 0
          } catch (e) {}
          var r = cu.call(e);
          return t ? e[lu] = n : delete e[lu], r
        }

        function ee(e) {
          return du.call(e)
        }

        function te(e) {
          return null == e ? void 0 === e ? vu : yu : mu && mu in Object(e) ? fu(e) : pu(e)
        }

        function ne(e) {
          return null != e && "object" == typeof e
        }

        function re(e) {
          return _u(e) && gu(e) == bu
        }

        function ie() {
          return !1
        }

        function oe(e, t) {
          var n = typeof e;
          return !!(t = null == t ? ju : t) && ("number" == n || "symbol" != n && Pu.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function se(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= ku
        }

        function ae(e) {
          return _u(e) && Lu(e.length) && !!Uu[gu(e)]
        }

        function ue(e) {
          return function(t) {
            return e(t)
          }
        }

        function ce(e, t) {
          var n = Iu(e),
            r = !n && Au(e),
            i = !n && !r && xu(e),
            o = !n && !r && !i && Vu(e),
            s = n || r || i || o,
            a = s ? Za(e.length, String) : [],
            u = a.length;
          for (var c in e) !t && !Wu.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Ru(c, u)) || a.push(c);
          return a
        }

        function le(e) {
          var t = e && e.constructor;
          return e === ("function" == typeof t && t.prototype || Gu)
        }

        function fe(e, t) {
          return function(n) {
            return e(t(n))
          }
        }

        function he(e) {
          if (!Ju(e)) return Qu(e);
          var t = [];
          for (var n in Object(e)) Xu.call(e, n) && "constructor" != n && t.push(n);
          return t
        }

        function de(e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t)
        }

        function pe(e) {
          if (!ec(e)) return !1;
          var t = gu(e);
          return t == nc || t == rc || t == tc || t == ic
        }

        function ye(e) {
          return null != e && Lu(e.length) && !oc(e)
        }

        function ve(e) {
          return sc(e) ? zu(e) : Zu(e)
        }

        function me(e) {
          return null == e ? [] : Xa(e, ac(e))
        }

        function ge(e) {
          return Ka(uc(e))
        }

        function _e(e) {
          return (Iu(e) ? Qa : cc)(e)
        }

        function be(e) {
          if (!_u(e) || gu(e) != Pc) return !1;
          var t = jc(e);
          if (null === t) return !0;
          var n = Uc.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n instanceof n && Lc.call(n) == Fc
        }

        function we(e, t, n, r, i) {
          var o = {};
          return Object.keys(r).forEach(function(e) {
            o[e] = r[e]
          }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) {
            return r(e, t, n) || n
          }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        var Ee = "undefined" != typeof window && window.process || {};
        Ee.env = Ee.env || {};
        var Se = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
          Te = Math.ceil,
          Oe = Math.floor,
          Ae = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Oe : Te)(e)
          },
          Ce = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
          },
          Ie = i(function(e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
          }),
          Ne = i(function(e) {
            var t = e.exports = {
              version: "2.5.7"
            };
            "number" == typeof __e && (__e = t)
          }),
          xe = (Ne.version, function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
          }),
          je = function(e, t, n) {
            if (xe(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                  return e.call(t, n)
                };
              case 2:
                return function(n, r) {
                  return e.call(t, n, r)
                };
              case 3:
                return function(n, r, i) {
                  return e.call(t, n, r, i)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          },
          Pe = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
          },
          Re = function(e) {
            if (!Pe(e)) throw TypeError(e + " is not an object!");
            return e
          },
          ke = function(e) {
            try {
              return !!e()
            } catch (e) {
              return !0
            }
          },
          Le = !ke(function() {
            return 7 != Object.defineProperty({}, "a", {
              get: function() {
                return 7
              }
            }).a
          }),
          Ue = Ie.document,
          Fe = Pe(Ue) && Pe(Ue.createElement),
          De = function(e) {
            return Fe ? Ue.createElement(e) : {}
          },
          Me = !Le && !ke(function() {
            return 7 != Object.defineProperty(De("div"), "a", {
              get: function() {
                return 7
              }
            }).a
          }),
          Be = function(e, t) {
            if (!Pe(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !Pe(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !Pe(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !Pe(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
          },
          qe = Object.defineProperty,
          Ve = Le ? Object.defineProperty : function(e, t, n) {
            if (Re(e), t = Be(t, !0), Re(n), Me) try {
              return qe(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
          },
          Ye = {
            f: Ve
          },
          We = function(e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            }
          },
          ze = Le ? function(e, t, n) {
            return Ye.f(e, t, We(1, n))
          } : function(e, t, n) {
            return e[t] = n, e
          },
          Ge = {}.hasOwnProperty,
          Je = function(e, t) {
            return Ge.call(e, t)
          },
          He = function(e, t, n) {
            var r, i, o, s = e & He.F,
              a = e & He.G,
              u = e & He.S,
              c = e & He.P,
              l = e & He.B,
              f = e & He.W,
              h = a ? Ne : Ne[t] || (Ne[t] = {}),
              d = h.prototype,
              p = a ? Ie : u ? Ie[t] : (Ie[t] || {}).prototype;
            a && (n = t);
            for (r in n)(i = !s && p && void 0 !== p[r]) && Je(h, r) || (o = i ? p[r] : n[r], h[r] = a && "function" != typeof p[r] ? n[r] : l && i ? je(o, Ie) : f && p[r] == o ? function(e) {
              var t = function(t, n, r) {
                if (this instanceof e) {
                  switch (arguments.length) {
                    case 0:
                      return new e;
                    case 1:
                      return new e(t);
                    case 2:
                      return new e(t, n)
                  }
                  return new e(t, n, r)
                }
                return e.apply(this, arguments)
              };
              return t.prototype = e.prototype, t
            }(o) : c && "function" == typeof o ? je(Function.call, o) : o, c && ((h.virtual || (h.virtual = {}))[r] = o, e & He.R && d && !d[r] && ze(d, r, o)))
          };
        He.F = 1, He.G = 2, He.S = 4, He.P = 8, He.B = 16, He.W = 32, He.U = 64, He.R = 128;
        var Ke = He,
          Qe = ze,
          $e = {},
          Xe = {}.toString,
          Ze = function(e) {
            return Xe.call(e).slice(8, -1)
          },
          et = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == Ze(e) ? e.split("") : Object(e)
          },
          tt = function(e) {
            return et(Ce(e))
          },
          nt = Math.min,
          rt = function(e) {
            return e > 0 ? nt(Ae(e), 9007199254740991) : 0
          },
          it = Math.max,
          ot = Math.min,
          st = function(e, t) {
            return e = Ae(e), e < 0 ? it(e + t, 0) : ot(e, t)
          },
          at = i(function(e) {
            var t = Ie["__core-js_shared__"] || (Ie["__core-js_shared__"] = {});
            (e.exports = function(e, n) {
              return t[e] || (t[e] = void 0 !== n ? n : {})
            })("versions", []).push({
              version: Ne.version,
              mode: "pure",
              copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            })
          }),
          ut = 0,
          ct = Math.random(),
          lt = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++ut + ct).toString(36))
          },
          ft = at("keys"),
          ht = function(e) {
            return ft[e] || (ft[e] = lt(e))
          },
          dt = function(e) {
            return function(t, n, r) {
              var i, o = tt(t),
                s = rt(o.length),
                a = st(r, s);
              if (e && n != n) {
                for (; s > a;)
                  if ((i = o[a++]) != i) return !0
              } else
                for (; s > a; a++)
                  if ((e || a in o) && o[a] === n) return e || a || 0;
              return !e && -1
            }
          }(!1),
          pt = ht("IE_PROTO"),
          yt = function(e, t) {
            var n, r = tt(e),
              i = 0,
              o = [];
            for (n in r) n != pt && Je(r, n) && o.push(n);
            for (; t.length > i;) Je(r, n = t[i++]) && (~dt(o, n) || o.push(n));
            return o
          },
          vt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
          mt = Object.keys || function(e) {
            return yt(e, vt)
          },
          gt = Le ? Object.defineProperties : function(e, t) {
            Re(e);
            for (var n, r = mt(t), i = r.length, o = 0; i > o;) Ye.f(e, n = r[o++], t[n]);
            return e
          },
          _t = Ie.document,
          bt = _t && _t.documentElement,
          wt = ht("IE_PROTO"),
          Et = function() {},
          St = function() {
            var e, t = De("iframe"),
              n = vt.length;
            for (t.style.display = "none", bt.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), St = e.F; n--;) delete St.prototype[vt[n]];
            return St()
          },
          Tt = Object.create || function(e, t) {
            var n;
            return null !== e ? (Et.prototype = Re(e), n = new Et, Et.prototype = null, n[wt] = e) : n = St(), void 0 === t ? n : gt(n, t)
          },
          Ot = i(function(e) {
            var t = at("wks"),
              n = Ie.Symbol,
              r = "function" == typeof n;
            (e.exports = function(e) {
              return t[e] || (t[e] = r && n[e] || (r ? n : lt)("Symbol." + e))
            }).store = t
          }),
          At = Ye.f,
          Ct = Ot("toStringTag"),
          It = function(e, t, n) {
            e && !Je(e = n ? e : e.prototype, Ct) && At(e, Ct, {
              configurable: !0,
              value: t
            })
          },
          Nt = {};
        ze(Nt, Ot("iterator"), function() {
          return this
        });
        var xt = function(e, t, n) {
            e.prototype = Tt(Nt, {
              next: We(1, n)
            }), It(e, t + " Iterator")
          },
          jt = function(e) {
            return Object(Ce(e))
          },
          Pt = ht("IE_PROTO"),
          Rt = Object.prototype,
          kt = Object.getPrototypeOf || function(e) {
            return e = jt(e), Je(e, Pt) ? e[Pt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Rt : null
          },
          Lt = Ot("iterator"),
          Ut = !([].keys && "next" in [].keys()),
          Ft = function() {
            return this
          },
          Dt = function(e, t, n, r, i, o, s) {
            xt(n, t, r);
            var a, u, c, l = function(e) {
                if (!Ut && e in p) return p[e];
                switch (e) {
                  case "keys":
                  case "values":
                    return function() {
                      return new n(this, e)
                    }
                }
                return function() {
                  return new n(this, e)
                }
              },
              f = t + " Iterator",
              h = "values" == i,
              d = !1,
              p = e.prototype,
              y = p[Lt] || p["@@iterator"] || i && p[i],
              v = y || l(i),
              m = i ? h ? l("entries") : v : void 0,
              g = "Array" == t ? p.entries || y : y;
            if (g && (c = kt(g.call(new e))) !== Object.prototype && c.next && It(c, f, !0), h && y && "values" !== y.name && (d = !0, v = function() {
                return y.call(this)
              }), s && (Ut || d || !p[Lt]) && ze(p, Lt, v), $e[t] = v, $e[f] = Ft, i)
              if (a = {
                  values: h ? v : l("values"),
                  keys: o ? v : l("keys"),
                  entries: m
                }, s)
                for (u in a) u in p || Qe(p, u, a[u]);
              else Ke(Ke.P + Ke.F * (Ut || d), t, a);
            return a
          },
          Mt = function(e) {
            return function(t, n) {
              var r, i, o = String(Ce(t)),
                s = Ae(n),
                a = o.length;
              return s < 0 || s >= a ? e ? "" : void 0 : (r = o.charCodeAt(s), r < 55296 || r > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? o.charAt(s) : r : e ? o.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536)
            }
          }(!0);
        Dt(String, "String", function(e) {
          this._t = String(e), this._i = 0
        }, function() {
          var e, t = this._t,
            n = this._i;
          return n >= t.length ? {
            value: void 0,
            done: !0
          } : (e = Mt(t, n), this._i += e.length, {
            value: e,
            done: !1
          })
        });
        var Bt = function(e, t) {
          return {
            value: t,
            done: !!e
          }
        };
        Dt(Array, "Array", function(e, t) {
          this._t = tt(e), this._i = 0, this._k = t
        }, function() {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length ? (this._t = void 0, Bt(1)) : "keys" == t ? Bt(0, n) : "values" == t ? Bt(0, e[n]) : Bt(0, [n, e[n]])
        }, "values");
        $e.Arguments = $e.Array;
        for (var qt = Ot("toStringTag"), Vt = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Yt = 0; Yt < Vt.length; Yt++) {
          var Wt = Vt[Yt],
            zt = Ie[Wt],
            Gt = zt && zt.prototype;
          Gt && !Gt[qt] && ze(Gt, qt, Wt), $e[Wt] = $e.Array
        }
        var Jt, Ht, Kt, Qt = Ot("toStringTag"),
          $t = "Arguments" == Ze(function() {
            return arguments
          }()),
          Xt = function(e, t) {
            try {
              return e[t]
            } catch (e) {}
          },
          Zt = function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = Xt(t = Object(e), Qt)) ? n : $t ? Ze(t) : "Object" == (r = Ze(t)) && "function" == typeof t.callee ? "Arguments" : r
          },
          en = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
          },
          tn = function(e, t, n, r) {
            try {
              return r ? t(Re(n)[0], n[1]) : t(n)
            } catch (t) {
              var i = e.return;
              throw void 0 !== i && Re(i.call(e)), t
            }
          },
          nn = Ot("iterator"),
          rn = Array.prototype,
          on = function(e) {
            return void 0 !== e && ($e.Array === e || rn[nn] === e)
          },
          sn = Ot("iterator"),
          an = Ne.getIteratorMethod = function(e) {
            if (void 0 != e) return e[sn] || e["@@iterator"] || $e[Zt(e)]
          },
          un = i(function(e) {
            var t = {},
              n = {},
              r = e.exports = function(e, r, i, o, s) {
                var a, u, c, l, f = s ? function() {
                    return e
                  } : an(e),
                  h = je(i, o, r ? 2 : 1),
                  d = 0;
                if ("function" != typeof f) throw TypeError(e + " is not iterable!");
                if (on(f)) {
                  for (a = rt(e.length); a > d; d++)
                    if ((l = r ? h(Re(u = e[d])[0], u[1]) : h(e[d])) === t || l === n) return l
                } else
                  for (c = f.call(e); !(u = c.next()).done;)
                    if ((l = tn(c, h, u.value, r)) === t || l === n) return l
              };
            r.BREAK = t, r.RETURN = n
          }),
          cn = Ot("species"),
          ln = function(e, t) {
            var n, r = Re(e).constructor;
            return void 0 === r || void 0 == (n = Re(r)[cn]) ? t : xe(n)
          },
          fn = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);
              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
          },
          hn = Ie.process,
          dn = Ie.setImmediate,
          pn = Ie.clearImmediate,
          yn = Ie.MessageChannel,
          vn = Ie.Dispatch,
          mn = 0,
          gn = {},
          _n = function() {
            var e = +this;
            if (gn.hasOwnProperty(e)) {
              var t = gn[e];
              delete gn[e], t()
            }
          },
          bn = function(e) {
            _n.call(e.data)
          };
        dn && pn || (dn = function(e) {
          for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
          return gn[++mn] = function() {
            fn("function" == typeof e ? e : Function(e), t)
          }, Jt(mn), mn
        }, pn = function(e) {
          delete gn[e]
        }, "process" == Ze(hn) ? Jt = function(e) {
          hn.nextTick(je(_n, e, 1))
        } : vn && vn.now ? Jt = function(e) {
          vn.now(je(_n, e, 1))
        } : yn ? (Ht = new yn, Kt = Ht.port2, Ht.port1.onmessage = bn, Jt = je(Kt.postMessage, Kt, 1)) : Ie.addEventListener && "function" == typeof postMessage && !Ie.importScripts ? (Jt = function(e) {
          Ie.postMessage(e + "", "*")
        }, Ie.addEventListener("message", bn, !1)) : Jt = "onreadystatechange" in De("script") ? function(e) {
          bt.appendChild(De("script")).onreadystatechange = function() {
            bt.removeChild(this), _n.call(e)
          }
        } : function(e) {
          setTimeout(je(_n, e, 1), 0)
        });
        var wn = {
            set: dn,
            clear: pn
          },
          En = wn.set,
          Sn = Ie.MutationObserver || Ie.WebKitMutationObserver,
          Tn = Ie.process,
          On = Ie.Promise,
          An = "process" == Ze(Tn),
          Cn = function(e) {
            return new o(e)
          },
          In = {
            f: Cn
          },
          Nn = function(e) {
            try {
              return {
                e: !1,
                v: e()
              }
            } catch (e) {
              return {
                e: !0,
                v: e
              }
            }
          },
          xn = Ie.navigator,
          jn = xn && xn.userAgent || "",
          Pn = function(e, t) {
            if (Re(e), Pe(t) && t.constructor === e) return t;
            var n = In.f(e);
            return (0, n.resolve)(t), n.promise
          },
          Rn = function(e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : ze(e, r, t[r]);
            return e
          },
          kn = Ot("species"),
          Ln = function(e) {
            var t = "function" == typeof Ne[e] ? Ne[e] : Ie[e];
            Le && t && !t[kn] && Ye.f(t, kn, {
              configurable: !0,
              get: function() {
                return this
              }
            })
          },
          Un = Ot("iterator"),
          Fn = !1;
        try {
          [7][Un]().return = function() {
            Fn = !0
          }
        } catch (e) {}
        var Dn, Mn, Bn, qn, Vn = function(e, t) {
            if (!t && !Fn) return !1;
            var n = !1;
            try {
              var r = [7],
                i = r[Un]();
              i.next = function() {
                return {
                  done: n = !0
                }
              }, r[Un] = function() {
                return i
              }, e(r)
            } catch (e) {}
            return n
          },
          Yn = wn.set,
          Wn = function() {
            var e, t, n, r = function() {
              var r, i;
              for (An && (r = Tn.domain) && r.exit(); e;) {
                i = e.fn, e = e.next;
                try {
                  i()
                } catch (r) {
                  throw e ? n() : t = void 0, r
                }
              }
              t = void 0, r && r.enter()
            };
            if (An) n = function() {
              Tn.nextTick(r)
            };
            else if (!Sn || Ie.navigator && Ie.navigator.standalone)
              if (On && On.resolve) {
                var i = On.resolve(void 0);
                n = function() {
                  i.then(r)
                }
              } else n = function() {
                En.call(Ie, r)
              };
            else {
              var o = !0,
                s = document.createTextNode("");
              new Sn(r).observe(s, {
                characterData: !0
              }), n = function() {
                s.data = o = !o
              }
            }
            return function(r) {
              var i = {
                fn: r,
                next: void 0
              };
              t && (t.next = i), e || (e = i, n()), t = i
            }
          }(),
          zn = Ie.TypeError,
          Gn = Ie.process,
          Jn = Gn && Gn.versions,
          Hn = Jn && Jn.v8 || "",
          Kn = Ie.Promise,
          Qn = "process" == Zt(Gn),
          $n = function() {},
          Xn = Mn = In.f,
          Zn = !! function() {
            try {
              var e = Kn.resolve(1),
                t = (e.constructor = {})[Ot("species")] = function(e) {
                  e($n, $n)
                };
              return (Qn || "function" == typeof PromiseRejectionEvent) && e.then($n) instanceof t && 0 !== Hn.indexOf("6.6") && -1 === jn.indexOf("Chrome/66")
            } catch (e) {}
          }(),
          er = function(e) {
            var t;
            return !(!Pe(e) || "function" != typeof(t = e.then)) && t
          },
          tr = function(e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              Wn(function() {
                for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) ! function(t) {
                  var n, o, s, a = i ? t.ok : t.fail,
                    u = t.resolve,
                    c = t.reject,
                    l = t.domain;
                  try {
                    a ? (i || (2 == e._h && ir(e), e._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === t.promise ? c(zn("Promise-chain cycle")) : (o = er(n)) ? o.call(n, u, c) : u(n)) : c(r)
                  } catch (e) {
                    l && !s && l.exit(), c(e)
                  }
                }(n[o++]);
                e._c = [], e._n = !1, t && !e._h && nr(e)
              })
            }
          },
          nr = function(e) {
            Yn.call(Ie, function() {
              var t, n, r, i = e._v,
                o = rr(e);
              if (o && (t = Nn(function() {
                  Qn ? Gn.emit("unhandledRejection", i, e) : (n = Ie.onunhandledrejection) ? n({
                    promise: e,
                    reason: i
                  }) : (r = Ie.console) && r.error && r.error("Unhandled promise rejection", i)
                }), e._h = Qn || rr(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
            })
          },
          rr = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
          },
          ir = function(e) {
            Yn.call(Ie, function() {
              var t;
              Qn ? Gn.emit("rejectionHandled", e) : (t = Ie.onrejectionhandled) && t({
                promise: e,
                reason: e._v
              })
            })
          },
          or = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), tr(t, !0))
          },
          sr = function(e) {
            var t, n = this;
            if (!n._d) {
              n._d = !0, n = n._w || n;
              try {
                if (n === e) throw zn("Promise can't be resolved itself");
                (t = er(e)) ? Wn(function() {
                  var r = {
                    _w: n,
                    _d: !1
                  };
                  try {
                    t.call(e, je(sr, r, 1), je(or, r, 1))
                  } catch (e) {
                    or.call(r, e)
                  }
                }): (n._v = e, n._s = 1, tr(n, !1))
              } catch (e) {
                or.call({
                  _w: n,
                  _d: !1
                }, e)
              }
            }
          };
        Zn || (Kn = function(e) {
          en(this, Kn, "Promise", "_h"), xe(e), Dn.call(this);
          try {
            e(je(sr, this, 1), je(or, this, 1))
          } catch (e) {
            or.call(this, e)
          }
        }, Dn = function(e) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, Dn.prototype = Rn(Kn.prototype, {
          then: function(e, t) {
            var n = Xn(ln(this, Kn));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Qn ? Gn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && tr(this, !1), n.promise
          },
          catch: function(e) {
            return this.then(void 0, e)
          }
        }), Bn = function() {
          var e = new Dn;
          this.promise = e, this.resolve = je(sr, e, 1), this.reject = je(or, e, 1)
        }, In.f = Xn = function(e) {
          return e === Kn || e === qn ? new Bn(e) : Mn(e)
        }), Ke(Ke.G + Ke.W + Ke.F * !Zn, {
          Promise: Kn
        }), It(Kn, "Promise"), Ln("Promise"), qn = Ne.Promise, Ke(Ke.S + Ke.F * !Zn, "Promise", {
          reject: function(e) {
            var t = Xn(this);
            return (0, t.reject)(e), t.promise
          }
        }), Ke(Ke.S + !0 * Ke.F, "Promise", {
          resolve: function(e) {
            return Pn(this === qn ? Kn : this, e)
          }
        }), Ke(Ke.S + Ke.F * !(Zn && Vn(function(e) {
          Kn.all(e).catch($n)
        })), "Promise", {
          all: function(e) {
            var t = this,
              n = Xn(t),
              r = n.resolve,
              i = n.reject,
              o = Nn(function() {
                var n = [],
                  o = 0,
                  s = 1;
                un(e, !1, function(e) {
                  var a = o++,
                    u = !1;
                  n.push(void 0), s++, t.resolve(e).then(function(e) {
                    u || (u = !0, n[a] = e, --s || r(n))
                  }, i)
                }), --s || r(n)
              });
            return o.e && i(o.v), n.promise
          },
          race: function(e) {
            var t = this,
              n = Xn(t),
              r = n.reject,
              i = Nn(function() {
                un(e, !1, function(e) {
                  t.resolve(e).then(n.resolve, r)
                })
              });
            return i.e && r(i.v), n.promise
          }
        }), Ke(Ke.P + Ke.R, "Promise", {
          finally: function(e) {
            var t = ln(this, Ne.Promise || Ie.Promise),
              n = "function" == typeof e;
            return this.then(n ? function(n) {
              return Pn(t, e()).then(function() {
                return n
              })
            } : e, n ? function(n) {
              return Pn(t, e()).then(function() {
                throw n
              })
            } : e)
          }
        }), Ke(Ke.S, "Promise", {
          try: function(e) {
            var t = In.f(this),
              n = Nn(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
          }
        });
        var ar = Ne.Promise,
          ur = i(function(e) {
            e.exports = {
              default: ar,
              __esModule: !0
            }
          }),
          cr = r(ur),
          lr = Ot,
          fr = {
            f: lr
          },
          hr = fr.f("iterator"),
          dr = i(function(e) {
            e.exports = {
              default: hr,
              __esModule: !0
            }
          });
        r(dr);
        var pr = i(function(e) {
            var t = lt("meta"),
              n = Ye.f,
              r = 0,
              i = Object.isExtensible || function() {
                return !0
              },
              o = !ke(function() {
                return i(Object.preventExtensions({}))
              }),
              s = function(e) {
                n(e, t, {
                  value: {
                    i: "O" + ++r,
                    w: {}
                  }
                })
              },
              a = function(e, n) {
                if (!Pe(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!Je(e, t)) {
                  if (!i(e)) return "F";
                  if (!n) return "E";
                  s(e)
                }
                return e[t].i
              },
              u = function(e, n) {
                if (!Je(e, t)) {
                  if (!i(e)) return !0;
                  if (!n) return !1;
                  s(e)
                }
                return e[t].w
              },
              c = function(e) {
                return o && l.NEED && i(e) && !Je(e, t) && s(e), e
              },
              l = e.exports = {
                KEY: t,
                NEED: !1,
                fastKey: a,
                getWeak: u,
                onFreeze: c
              }
          }),
          yr = (pr.KEY, pr.NEED, pr.fastKey, pr.getWeak, pr.onFreeze, Ye.f),
          vr = function(e) {
            var t = Ne.Symbol || (Ne.Symbol = {});
            "_" == e.charAt(0) || e in t || yr(t, e, {
              value: fr.f(e)
            })
          },
          mr = Object.getOwnPropertySymbols,
          gr = {
            f: mr
          },
          _r = {}.propertyIsEnumerable,
          br = {
            f: _r
          },
          wr = function(e) {
            var t = mt(e),
              n = gr.f;
            if (n)
              for (var r, i = n(e), o = br.f, s = 0; i.length > s;) o.call(e, r = i[s++]) && t.push(r);
            return t
          },
          Er = Array.isArray || function(e) {
            return "Array" == Ze(e)
          },
          Sr = vt.concat("length", "prototype"),
          Tr = Object.getOwnPropertyNames || function(e) {
            return yt(e, Sr)
          },
          Or = {
            f: Tr
          },
          Ar = Or.f,
          Cr = {}.toString,
          Ir = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          Nr = function(e) {
            try {
              return Ar(e)
            } catch (e) {
              return Ir.slice()
            }
          },
          xr = function(e) {
            return Ir && "[object Window]" == Cr.call(e) ? Nr(e) : Ar(tt(e))
          },
          jr = {
            f: xr
          },
          Pr = Object.getOwnPropertyDescriptor,
          Rr = Le ? Pr : function(e, t) {
            if (e = tt(e), t = Be(t, !0), Me) try {
              return Pr(e, t)
            } catch (e) {}
            if (Je(e, t)) return We(!br.f.call(e, t), e[t])
          },
          kr = {
            f: Rr
          },
          Lr = pr.KEY,
          Ur = kr.f,
          Fr = Ye.f,
          Dr = jr.f,
          Mr = Ie.Symbol,
          Br = Ie.JSON,
          qr = Br && Br.stringify,
          Vr = Ot("_hidden"),
          Yr = Ot("toPrimitive"),
          Wr = {}.propertyIsEnumerable,
          zr = at("symbol-registry"),
          Gr = at("symbols"),
          Jr = at("op-symbols"),
          Hr = Object.prototype,
          Kr = "function" == typeof Mr,
          Qr = Ie.QObject,
          $r = !Qr || !Qr.prototype || !Qr.prototype.findChild,
          Xr = Le && ke(function() {
            return 7 != Tt(Fr({}, "a", {
              get: function() {
                return Fr(this, "a", {
                  value: 7
                }).a
              }
            })).a
          }) ? function(e, t, n) {
            var r = Ur(Hr, t);
            r && delete Hr[t], Fr(e, t, n), r && e !== Hr && Fr(Hr, t, r)
          } : Fr,
          Zr = function(e) {
            var t = Gr[e] = Tt(Mr.prototype);
            return t._k = e, t
          },
          ei = Kr && "symbol" == typeof Mr.iterator ? function(e) {
            return "symbol" == typeof e
          } : function(e) {
            return e instanceof Mr
          },
          ti = function(e, t, n) {
            return e === Hr && ti(Jr, t, n), Re(e), t = Be(t, !0), Re(n), Je(Gr, t) ? (n.enumerable ? (Je(e, Vr) && e[Vr][t] && (e[Vr][t] = !1), n = Tt(n, {
              enumerable: We(0, !1)
            })) : (Je(e, Vr) || Fr(e, Vr, We(1, {})), e[Vr][t] = !0), Xr(e, t, n)) : Fr(e, t, n)
          },
          ni = function(e, t) {
            Re(e);
            for (var n, r = wr(t = tt(t)), i = 0, o = r.length; o > i;) ti(e, n = r[i++], t[n]);
            return e
          },
          ri = function(e, t) {
            return void 0 === t ? Tt(e) : ni(Tt(e), t)
          },
          ii = function(e) {
            var t = Wr.call(this, e = Be(e, !0));
            return !(this === Hr && Je(Gr, e) && !Je(Jr, e)) && (!(t || !Je(this, e) || !Je(Gr, e) || Je(this, Vr) && this[Vr][e]) || t)
          },
          oi = function(e, t) {
            if (e = tt(e), t = Be(t, !0), e !== Hr || !Je(Gr, t) || Je(Jr, t)) {
              var n = Ur(e, t);
              return !n || !Je(Gr, t) || Je(e, Vr) && e[Vr][t] || (n.enumerable = !0), n
            }
          },
          si = function(e) {
            for (var t, n = Dr(tt(e)), r = [], i = 0; n.length > i;) Je(Gr, t = n[i++]) || t == Vr || t == Lr || r.push(t);
            return r
          },
          ai = function(e) {
            for (var t, n = e === Hr, r = Dr(n ? Jr : tt(e)), i = [], o = 0; r.length > o;) !Je(Gr, t = r[o++]) || n && !Je(Hr, t) || i.push(Gr[t]);
            return i
          };
        Kr || (Mr = function() {
          if (this instanceof Mr) throw TypeError("Symbol is not a constructor!");
          var e = lt(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
              this === Hr && t.call(Jr, n), Je(this, Vr) && Je(this[Vr], e) && (this[Vr][e] = !1), Xr(this, e, We(1, n))
            };
          return Le && $r && Xr(Hr, e, {
            configurable: !0,
            set: t
          }), Zr(e)
        }, Qe(Mr.prototype, "toString", function() {
          return this._k
        }), kr.f = oi, Ye.f = ti, Or.f = jr.f = si, br.f = ii, gr.f = ai, fr.f = function(e) {
          return Zr(Ot(e))
        }), Ke(Ke.G + Ke.W + Ke.F * !Kr, {
          Symbol: Mr
        });
        for (var ui = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ci = 0; ui.length > ci;) Ot(ui[ci++]);
        for (var li = mt(Ot.store), fi = 0; li.length > fi;) vr(li[fi++]);
        Ke(Ke.S + Ke.F * !Kr, "Symbol", {
          for: function(e) {
            return Je(zr, e += "") ? zr[e] : zr[e] = Mr(e)
          },
          keyFor: function(e) {
            if (!ei(e)) throw TypeError(e + " is not a symbol!");
            for (var t in zr)
              if (zr[t] === e) return t
          },
          useSetter: function() {
            $r = !0
          },
          useSimple: function() {
            $r = !1
          }
        }), Ke(Ke.S + Ke.F * !Kr, "Object", {
          create: ri,
          defineProperty: ti,
          defineProperties: ni,
          getOwnPropertyDescriptor: oi,
          getOwnPropertyNames: si,
          getOwnPropertySymbols: ai
        }), Br && Ke(Ke.S + Ke.F * (!Kr || ke(function() {
          var e = Mr();
          return "[null]" != qr([e]) || "{}" != qr({
            a: e
          }) || "{}" != qr(Object(e))
        })), "JSON", {
          stringify: function(e) {
            for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = t = r[1], (Pe(t) || void 0 !== e) && !ei(e)) return Er(t) || (t = function(e, t) {
              if ("function" == typeof n && (t = n.call(this, e, t)), !ei(t)) return t
            }), r[1] = t, qr.apply(Br, r)
          }
        }), Mr.prototype[Yr] || ze(Mr.prototype, Yr, Mr.prototype.valueOf), It(Mr, "Symbol"), It(Math, "Math", !0), It(Ie.JSON, "JSON", !0), vr("asyncIterator"), vr("observable");
        var hi = Ne.Symbol,
          di = i(function(e) {
            e.exports = {
              default: hi,
              __esModule: !0
            }
          }),
          pi = r(di),
          yi = i(function(e, t) {
            function n(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }
            t.__esModule = !0;
            var r = n(dr),
              i = n(di),
              o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
                return typeof e
              } : function(e) {
                return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
              };
            t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
              return void 0 === e ? "undefined" : o(e)
            } : function(e) {
              return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
            }
          }),
          vi = r(yi),
          mi = i(function(e, t) {
            t.__esModule = !0, t.default = function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
          }),
          gi = r(mi),
          _i = function() {
            function e() {
              gi(this, e)
            }
            return e.prototype.getItem = function(e) {
              return wx.getStorageSync(e)
            }, e.prototype.setItem = function(e, t) {
              return wx.setStorageSync(e, t)
            }, e.prototype.removeItem = function(e) {
              return this.setItem(e, "")
            }, e.prototype.clear = function() {
              return wx.clearStorageSync()
            }, e
          }(),
          bi = new _i;
        Ke(Ke.S + Ke.F * !Le, "Object", {
          defineProperty: Ye.f
        });
        var wi = Ne.Object,
          Ei = function(e, t, n) {
            return wi.defineProperty(e, t, n)
          },
          Si = i(function(e) {
            e.exports = {
              default: Ei,
              __esModule: !0
            }
          });
        r(Si);
        var Ti = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Si);
            t.default = function(e, t, r) {
              return t in e ? (0, n.default)(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r, e
            }
          }),
          Oi = r(Ti),
          Ai = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(yi);
            t.default = function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
            }
          }),
          Ci = r(Ai),
          Ii = function(e, t) {
            if (Re(e), !Pe(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
          },
          Ni = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
              try {
                n = je(Function.call, kr.f(Object.prototype, "__proto__").set, 2), n(e, []), t = !(e instanceof Array)
              } catch (e) {
                t = !0
              }
              return function(e, r) {
                return Ii(e, r), t ? e.__proto__ = r : n(e, r), e
              }
            }({}, !1) : void 0),
            check: Ii
          };
        Ke(Ke.S, "Object", {
          setPrototypeOf: Ni.set
        });
        var xi = Ne.Object.setPrototypeOf,
          ji = i(function(e) {
            e.exports = {
              default: xi,
              __esModule: !0
            }
          });
        r(ji), Ke(Ke.S, "Object", {
          create: Tt
        });
        var Pi = Ne.Object,
          Ri = function(e, t) {
            return Pi.create(e, t)
          },
          ki = i(function(e) {
            e.exports = {
              default: Ri,
              __esModule: !0
            }
          });
        r(ki);
        var Li = i(function(e, t) {
            function n(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }
            t.__esModule = !0;
            var r = n(ji),
              i = n(ki),
              o = n(yi);
            t.default = function(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
              e.prototype = (0, i.default)(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
            }
          }),
          Ui = r(Li),
          Fi = Ne.JSON || (Ne.JSON = {
            stringify: JSON.stringify
          }),
          Di = function(e) {
            return Fi.stringify.apply(Fi, arguments)
          },
          Mi = i(function(e) {
            e.exports = {
              default: Di,
              __esModule: !0
            }
          }),
          Bi = r(Mi),
          qi = function(e, t) {
            var n = (Ne.Object || {})[e] || Object[e],
              r = {};
            r[e] = t(n), Ke(Ke.S + Ke.F * ke(function() {
              n(1)
            }), "Object", r)
          };
        qi("keys", function() {
          return function(e) {
            return mt(jt(e))
          }
        });
        var Vi = Ne.Object.keys,
          Yi = i(function(e) {
            e.exports = {
              default: Vi,
              __esModule: !0
            }
          }),
          Wi = r(Yi),
          zi = Object.getOwnPropertySymbols,
          Gi = Object.prototype.hasOwnProperty,
          Ji = Object.prototype.propertyIsEnumerable,
          Hi = function() {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
              for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
              if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                  return t[e]
                }).join("")) return !1;
              var r = {};
              return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
              }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
              return !1
            }
          }() ? Object.assign : function(e, t) {
            for (var n, r, i = s(e), o = 1; o < arguments.length; o++) {
              n = Object(arguments[o]);
              for (var a in n) Gi.call(n, a) && (i[a] = n[a]);
              if (zi) {
                r = zi(n);
                for (var u = 0; u < r.length; u++) Ji.call(n, r[u]) && (i[r[u]] = n[r[u]])
              }
            }
            return i
          },
          Ki = i(function(e, t) {
            var n = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
              return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]"
            };
            t.LISTENERS = n("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
              return {
                listener: e,
                kind: t,
                next: null
              }
            }
          }),
          Qi = (Ki.createUniqueKey, Ki.LISTENERS, Ki.CAPTURE, Ki.BUBBLE, Ki.ATTRIBUTE, Ki.newNode, Ki.LISTENERS),
          $i = Ki.ATTRIBUTE,
          Xi = Ki.newNode,
          Zi = function(e, t) {
            function n() {
              e.call(this)
            }
            var r = {
              constructor: {
                value: n,
                configurable: !0,
                writable: !0
              }
            };
            return t.forEach(function(e) {
              r["on" + e] = {
                get: function() {
                  return a(this, e)
                },
                set: function(t) {
                  u(this, e, t)
                },
                configurable: !0,
                enumerable: !0
              }
            }), n.prototype = Object.create(e.prototype, r), n
          },
          eo = {
            defineCustomEventTarget: Zi
          },
          to = Ki.createUniqueKey,
          no = to("stop_immediate_propagation_flag"),
          ro = to("canceled_flag"),
          io = to("original_event"),
          oo = Object.freeze({
            stopPropagation: Object.freeze({
              value: function() {
                var e = this[io];
                "function" == typeof e.stopPropagation && e.stopPropagation()
              },
              writable: !0,
              configurable: !0
            }),
            stopImmediatePropagation: Object.freeze({
              value: function() {
                this[no] = !0;
                var e = this[io];
                "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation()
              },
              writable: !0,
              configurable: !0
            }),
            preventDefault: Object.freeze({
              value: function() {
                !0 === this.cancelable && (this[ro] = !0);
                var e = this[io];
                "function" == typeof e.preventDefault && e.preventDefault()
              },
              writable: !0,
              configurable: !0
            }),
            defaultPrevented: Object.freeze({
              get: function() {
                return this[ro]
              },
              enumerable: !0,
              configurable: !0
            })
          }),
          so = no,
          ao = function(e, t) {
            var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
              r = {
                type: {
                  value: e.type,
                  enumerable: !0
                },
                target: {
                  value: t,
                  enumerable: !0
                },
                currentTarget: {
                  value: t,
                  enumerable: !0
                },
                eventPhase: {
                  value: 2,
                  enumerable: !0
                },
                bubbles: {
                  value: Boolean(e.bubbles),
                  enumerable: !0
                },
                cancelable: {
                  value: Boolean(e.cancelable),
                  enumerable: !0
                },
                timeStamp: {
                  value: n,
                  enumerable: !0
                },
                isTrusted: {
                  value: !1,
                  enumerable: !0
                }
              };
            return r[no] = {
              value: !1,
              writable: !0
            }, r[ro] = {
              value: !1,
              writable: !0
            }, r[io] = {
              value: e
            }, void 0 !== e.detail && (r.detail = {
              value: e.detail,
              enumerable: !0
            }), Object.create(Object.create(e, oo), r)
          },
          uo = {
            STOP_IMMEDIATE_PROPAGATION_FLAG: so,
            createEventWrapper: ao
          },
          co = i(function(e) {
            var t = Ki.LISTENERS,
              n = Ki.CAPTURE,
              r = Ki.BUBBLE,
              i = Ki.ATTRIBUTE,
              o = Ki.newNode,
              s = eo.defineCustomEventTarget,
              a = uo.createEventWrapper,
              u = uo.STOP_IMMEDIATE_PROPAGATION_FLAG,
              c = "undefined" != typeof window && void 0 !== window.EventTarget,
              l = e.exports = function e() {
                if (!(this instanceof e)) {
                  if (1 === arguments.length && Array.isArray(arguments[0])) return s(e, arguments[0]);
                  if (arguments.length > 0) {
                    for (var n = Array(arguments.length), r = 0; r < arguments.length; ++r) n[r] = arguments[r];
                    return s(e, n)
                  }
                  throw new TypeError("Cannot call a class as a function")
                }
                Object.defineProperty(this, t, {
                  value: Object.create(null)
                })
              };
            l.prototype = Object.create((c ? window.EventTarget : Object).prototype, {
              constructor: {
                value: l,
                writable: !0,
                configurable: !0
              },
              addEventListener: {
                value: function(e, i, s) {
                  if (null == i) return !1;
                  if ("function" != typeof i && "object" != typeof i) throw new TypeError('"listener" is not an object.');
                  var a = s ? n : r,
                    u = this[t][e];
                  if (null == u) return this[t][e] = o(i, a), !0;
                  for (var c = null; null != u;) {
                    if (u.listener === i && u.kind === a) return !1;
                    c = u, u = u.next
                  }
                  return c.next = o(i, a), !0
                },
                configurable: !0,
                writable: !0
              },
              removeEventListener: {
                value: function(e, i, o) {
                  if (null == i) return !1;
                  for (var s = o ? n : r, a = null, u = this[t][e]; null != u;) {
                    if (u.listener === i && u.kind === s) return null == a ? this[t][e] = u.next : a.next = u.next, !0;
                    a = u, u = u.next
                  }
                  return !1
                },
                configurable: !0,
                writable: !0
              },
              dispatchEvent: {
                value: function(e) {
                  var n = this[t][e.type];
                  if (null == n) return !0;
                  for (var r = a(e, this); null != n && ("function" == typeof n.listener ? n.listener.call(this, r) : n.kind !== i && "function" == typeof n.listener.handleEvent && n.listener.handleEvent(r), !r[u]);) n = n.next;
                  return !r.defaultPrevented
                },
                configurable: !0,
                writable: !0
              }
            })
          }),
          lo = function() {
            function e() {
              gi(this, e), this._entries = []
            }
            return e.prototype.append = function(e, t) {
              if ("string" != typeof e) throw new TypeError("FormData name must be a string");
              if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : vi(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
              this._entries.push([e, t])
            }, e.prototype.set = function(e, t) {
              var n = this.get(e);
              n ? n[1] = t : this.append(e, t)
            }, e.prototype.delete = function(e) {
              this._entries = this._entries.filter(function(t) {
                return t[0] !== e
              })
            }, e.prototype.entries = function() {
              return this._entries
            }, e.prototype.get = function(e) {
              return this._entries.find(function(t) {
                return t[0] === e
              })
            }, e.prototype.getAll = function(e) {
              return this._entries.filter(function(t) {
                return t[0] === e
              })
            }, e.prototype.has = function(e) {
              return this._entries.some(function(t) {
                return t[0] === e
              })
            }, e.prototype.keys = function() {
              return this._entries.map(function(e) {
                return e[0]
              })
            }, e.prototype.values = function() {
              return this._entries.map(function(e) {
                return e[1]
              })
            }, e
          }(),
          fo = lo,
          ho = 0,
          po = 4,
          yo = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
          vo = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend"],
          mo = function(e) {
            function t() {
              return gi(this, t), Ci(this, e.apply(this, arguments))
            }
            return Ui(t, e), t
          }(co(vo)),
          go = function(e) {
            function t() {
              gi(this, t);
              var n = Ci(this, e.call(this));
              return n.readyState = ho, n._headers = {}, n.upload = new mo, n
            }
            return Ui(t, e), t.prototype.abort = function() {
              if (!this._request || this._request.abort) return this.status = 0, this.readyState = po, this._request.abort();
              throw new Error("该版本基础库不支持 abort request")
            }, t.prototype.getAllResponseHeaders = function() {
              var e = this;
              return this._responseHeaders ? Wi(this._responseHeaders).map(function(t) {
                return t + ": " + e._responseHeaders[t]
              }).join("\r\n") : ""
            }, t.prototype.getResponseHeader = function(e) {
              var t = e.toLowerCase();
              return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null
            }, t.prototype.overrideMimeType = function() {
              throw new Error("not supported in weapp")
            }, t.prototype.open = function(e, t) {
              var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
              if (this.readyState !== ho) throw new Error("request is already opened");
              if (!n) throw new Error("sync request is not supported");
              this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                type: "readystatechange"
              })
            }, t.prototype.setRequestHeader = function(e, t) {
              if (1 !== this.readyState) throw new Error("request is not opened");
              this._headers[e.toLowerCase()] = t
            }, t.prototype.send = function(e) {
              var t = this;
              if (1 !== this.readyState) throw new Error("request is not opened");
              if (e instanceof fo) {
                var n = e.entries(),
                  r = n.filter(function(e) {
                    return "string" != typeof e[1]
                  });
                if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                var i = n.filter(function(e) {
                  return "string" == typeof e[1]
                }).reduce(function(e, t) {
                  return Hi(e, Oi({}, t[0], t[1]))
                }, {});
                this._request = wx.uploadFile({
                  url: this._url,
                  name: r[0][0],
                  filePath: r[0][1].uri,
                  formData: i,
                  header: this._headers,
                  success: c.bind(this),
                  fail: function(e) {
                    t.status = 0, t.readyState = po, t.dispatchEvent({
                      type: "readystatechange"
                    }), t.dispatchEvent({
                      type: "error"
                    })
                  }
                }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
                  var n = e.totalBytesSent,
                    r = e.totalBytesExpectedToSend;
                  t.upload.dispatchEvent({
                    type: "progress",
                    loaded: n,
                    total: r
                  })
                })
              } else this._request = wx.request({
                url: this._url,
                data: e || "",
                method: this._method.toUpperCase(),
                header: this._headers,
                success: c.bind(this),
                fail: function(e) {
                  t.status = 0, t.readyState = po, t.dispatchEvent({
                    type: "readystatechange"
                  }), t.dispatchEvent({
                    type: "error"
                  })
                }
              })
            }, t
          }(co(yo));
        Hi(go, {
          UNSENT: ho,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: po
        });
        var _o = go,
          bo = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Si);
            t.default = function() {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var i = t[r];
                  i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(e, i.key, i)
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
              }
            }()
          }),
          wo = r(bo),
          Eo = 0,
          So = 1,
          To = 3,
          Oo = ["open", "error", "message", "close"],
          Ao = void 0,
          Co = function(e) {
            function t(n, r) {
              if (gi(this, t), !n) throw new TypeError("Failed to construct 'WebSocket': url required");
              if (r && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
              var i = Ci(this, e.call(this));
              return i._url = n, i._protocal = r || "", i._readyState = Eo, Ao && Ao.dispatchEvent({
                type: "close"
              }), Ao = i, wx.onSocketOpen(function(e) {
                Ao && (Ao._readyState = So, Ao.dispatchEvent({
                  type: "open"
                }))
              }), wx.onSocketError(l), wx.onSocketMessage(function(e) {
                if (Ao) {
                  var t = e.data,
                    n = e.origin,
                    r = e.ports,
                    i = e.source;
                  Ao.dispatchEvent({
                    data: t,
                    origin: n,
                    ports: r,
                    source: i,
                    type: "message"
                  })
                }
              }), wx.onSocketClose(function(e) {
                if (Ao) {
                  Ao._readyState = To;
                  var t = e.code,
                    n = e.reason,
                    r = e.wasClean;
                  Ao.dispatchEvent({
                    code: t,
                    reason: n,
                    wasClean: r,
                    type: "close"
                  }), Ao = null
                }
              }), wx.connectSocket({
                url: n,
                protocals: i._protocal,
                fail: function(e) {
                  return setTimeout(function() {
                    return l(e)
                  }, 0)
                }
              }), i
            }
            return Ui(t, e), t.prototype.close = function() {
              this.readyState !== To && (this.readyState === Eo && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket())
            }, t.prototype.send = function(e) {
              if (this.readyState !== So) throw new Error("INVALID_STATE_ERR");
              if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
              wx.sendSocketMessage({
                data: e
              })
            }, wo(t, [{
              key: "url",
              get: function() {
                return this._url
              }
            }, {
              key: "protocal",
              get: function() {
                return this._protocal
              }
            }, {
              key: "readyState",
              get: function() {
                return this._readyState
              }
            }]), t
          }(co(Oo));
        Hi(Co, {
          CONNECTING: Eo,
          OPEN: So,
          CLOSING: 2,
          CLOSED: To
        });
        var Io = Co,
          No = function(e) {
            if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
              e.__onlineOfflinePolyfilled = !0;
              var t = new co;
              e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function() {
                throw new Error("mocked")
              })), wx.getNetworkType({
                success: function(t) {
                  var n = t.networkType;
                  e.onLine = "none" !== n, wx.onNetworkStatusChange(function(t) {
                    var n = t.isConnected;
                    e.onLine !== n && (e.onLine = n, e.dispatchEvent({
                      type: n ? "online" : "offline"
                    }))
                  })
                }
              })
            }
          },
          xo = {
            polyfill: No
          },
          jo = {},
          Po = {
            polyfill: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se || window;
              if ("object" !== (void 0 === e ? "undefined" : vi(e))) throw new Error("polyfill target is not an Object");
              var t = {
                localStorage: bi,
                XMLHttpRequest: _o,
                FormData: fo,
                WebSocket: Io,
                Object: Object,
                navigator: jo
              };
              for (var n in t) e[n] || (e[n] = t[n]);
              xo.polyfill(e), e.navigator.product = "ReactNative"
            },
            localStorage: bi,
            XMLHttpRequest: _o,
            FormData: fo,
            WebSocket: Io
          },
          Ro = Po.polyfill;
        try {
          Ro()
        } catch (e) {}
        try {
          Ro(GameGlobal)
        } catch (e) {}
        try {
          window = window || {}, Ro(window)
        } catch (e) {}
        try {
          localStorage = localStorage || bi
        } catch (e) {}
        try {
          XMLHttpRequest = XMLHttpRequest || _o
        } catch (e) {}
        try {
          FormData = FormData || fo
        } catch (e) {}
        try {
          WebSocket = WebSocket || Io
        } catch (e) {}
        try {
          navigator = navigator || jo
        } catch (e) {}
        var ko = i(function(e) {
            /**
             * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/long.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = r() : (t.dcodeIO = t.dcodeIO || {}).Long = r()
            }(Se, function() {
              function e(e, t, n) {
                this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
              }

              function t(e) {
                return !0 === (e && e.__isLong__)
              }

              function n(e, t) {
                var n, r, o;
                return t ? (e >>>= 0, (o = 0 <= e && e < 256) && (r = u[e]) ? r : (n = i(e, (0 | e) < 0 ? -1 : 0, !0), o && (u[e] = n), n)) : (e |= 0, (o = -128 <= e && e < 128) && (r = a[e]) ? r : (n = i(e, e < 0 ? -1 : 0, !1), o && (a[e] = n), n))
              }

              function r(e, t) {
                if (isNaN(e) || !isFinite(e)) return t ? y : p;
                if (t) {
                  if (e < 0) return y;
                  if (e >= f) return b
                } else {
                  if (e <= -h) return w;
                  if (e + 1 >= h) return _
                }
                return e < 0 ? r(-e, t).neg() : i(e % l | 0, e / l | 0, t)
              }

              function i(t, n, r) {
                return new e(t, n, r)
              }

              function o(e, t, n) {
                if (0 === e.length) throw Error("empty string");
                if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return p;
                if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
                var i;
                if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
                if (0 === i) return o(e.substring(1), t, n).neg();
                for (var s = r(c(n, 8)), a = p, u = 0; u < e.length; u += 8) {
                  var l = Math.min(8, e.length - u),
                    f = parseInt(e.substring(u, u + l), n);
                  if (l < 8) {
                    var h = r(c(n, l));
                    a = a.mul(h).add(r(f))
                  } else a = a.mul(s), a = a.add(r(f))
                }
                return a.unsigned = t, a
              }

              function s(t) {
                return t instanceof e ? t : "number" == typeof t ? r(t) : "string" == typeof t ? o(t) : i(t.low, t.high, t.unsigned)
              }
              Object.defineProperty(e.prototype, "__isLong__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              }), e.isLong = t;
              var a = {},
                u = {};
              e.fromInt = n, e.fromNumber = r, e.fromBits = i;
              var c = Math.pow;
              e.fromString = o, e.fromValue = s;
              var l = 4294967296,
                f = l * l,
                h = f / 2,
                d = n(1 << 24),
                p = n(0);
              e.ZERO = p;
              var y = n(0, !0);
              e.UZERO = y;
              var v = n(1);
              e.ONE = v;
              var m = n(1, !0);
              e.UONE = m;
              var g = n(-1);
              e.NEG_ONE = g;
              var _ = i(-1, 2147483647, !1);
              e.MAX_VALUE = _;
              var b = i(-1, -1, !0);
              e.MAX_UNSIGNED_VALUE = b;
              var w = i(0, -2147483648, !1);
              e.MIN_VALUE = w;
              var E = e.prototype;
              return E.toInt = function() {
                return this.unsigned ? this.low >>> 0 : this.low
              }, E.toNumber = function() {
                return this.unsigned ? (this.high >>> 0) * l + (this.low >>> 0) : this.high * l + (this.low >>> 0)
              }, E.toString = function(e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(w)) {
                    var t = r(e),
                      n = this.div(t),
                      i = n.mul(t).sub(this);
                    return n.toString(e) + i.toInt().toString(e)
                  }
                  return "-" + this.neg().toString(e)
                }
                for (var o = r(c(e, 6), this.unsigned), s = this, a = "";;) {
                  var u = s.div(o),
                    l = s.sub(u.mul(o)).toInt() >>> 0,
                    f = l.toString(e);
                  if (s = u, s.isZero()) return f + a;
                  for (; f.length < 6;) f = "0" + f;
                  a = "" + f + a
                }
              }, E.getHighBits = function() {
                return this.high
              }, E.getHighBitsUnsigned = function() {
                return this.high >>> 0
              }, E.getLowBits = function() {
                return this.low
              }, E.getLowBitsUnsigned = function() {
                return this.low >>> 0
              }, E.getNumBitsAbs = function() {
                if (this.isNegative()) return this.eq(w) ? 64 : this.neg().getNumBitsAbs();
                for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
                return 0 != this.high ? t + 33 : t + 1
              }, E.isZero = function() {
                return 0 === this.high && 0 === this.low
              }, E.isNegative = function() {
                return !this.unsigned && this.high < 0
              }, E.isPositive = function() {
                return this.unsigned || this.high >= 0
              }, E.isOdd = function() {
                return 1 == (1 & this.low)
              }, E.isEven = function() {
                return 0 == (1 & this.low)
              }, E.equals = function(e) {
                return t(e) || (e = s(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
              }, E.eq = E.equals, E.notEquals = function(e) {
                return !this.eq(e)
              }, E.neq = E.notEquals, E.lessThan = function(e) {
                return this.comp(e) < 0
              }, E.lt = E.lessThan, E.lessThanOrEqual = function(e) {
                return this.comp(e) <= 0
              }, E.lte = E.lessThanOrEqual, E.greaterThan = function(e) {
                return this.comp(e) > 0
              }, E.gt = E.greaterThan, E.greaterThanOrEqual = function(e) {
                return this.comp(e) >= 0
              }, E.gte = E.greaterThanOrEqual, E.compare = function(e) {
                if (t(e) || (e = s(e)), this.eq(e)) return 0;
                var n = this.isNegative(),
                  r = e.isNegative();
                return n && !r ? -1 : !n && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
              }, E.comp = E.compare, E.negate = function() {
                return !this.unsigned && this.eq(w) ? w : this.not().add(v)
              }, E.neg = E.negate, E.add = function(e) {
                t(e) || (e = s(e));
                var n = this.high >>> 16,
                  r = 65535 & this.high,
                  o = this.low >>> 16,
                  a = 65535 & this.low,
                  u = e.high >>> 16,
                  c = 65535 & e.high,
                  l = e.low >>> 16,
                  f = 65535 & e.low,
                  h = 0,
                  d = 0,
                  p = 0,
                  y = 0;
                return y += a + f, p += y >>> 16, y &= 65535, p += o + l, d += p >>> 16, p &= 65535, d += r + c, h += d >>> 16, d &= 65535, h += n + u, h &= 65535, i(p << 16 | y, h << 16 | d, this.unsigned)
              }, E.subtract = function(e) {
                return t(e) || (e = s(e)), this.add(e.neg())
              }, E.sub = E.subtract, E.multiply = function(e) {
                if (this.isZero()) return p;
                if (t(e) || (e = s(e)), e.isZero()) return p;
                if (this.eq(w)) return e.isOdd() ? w : p;
                if (e.eq(w)) return this.isOdd() ? w : p;
                if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(d) && e.lt(d)) return r(this.toNumber() * e.toNumber(), this.unsigned);
                var n = this.high >>> 16,
                  o = 65535 & this.high,
                  a = this.low >>> 16,
                  u = 65535 & this.low,
                  c = e.high >>> 16,
                  l = 65535 & e.high,
                  f = e.low >>> 16,
                  h = 65535 & e.low,
                  y = 0,
                  v = 0,
                  m = 0,
                  g = 0;
                return g += u * h, m += g >>> 16, g &= 65535, m += a * h, v += m >>> 16, m &= 65535, m += u * f, v += m >>> 16, m &= 65535, v += o * h, y += v >>> 16, v &= 65535, v += a * f, y += v >>> 16, v &= 65535, v += u * l, y += v >>> 16, v &= 65535, y += n * h + o * f + a * l + u * c, y &= 65535, i(m << 16 | g, y << 16 | v, this.unsigned)
              }, E.mul = E.multiply, E.divide = function(e) {
                if (t(e) || (e = s(e)), e.isZero()) throw Error("division by zero");
                if (this.isZero()) return this.unsigned ? y : p;
                var n, i, o;
                if (this.unsigned) {
                  if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return y;
                  if (e.gt(this.shru(1))) return m;
                  o = y
                } else {
                  if (this.eq(w)) {
                    if (e.eq(v) || e.eq(g)) return w;
                    if (e.eq(w)) return v;
                    return n = this.shr(1).div(e).shl(1), n.eq(p) ? e.isNegative() ? v : g : (i = this.sub(e.mul(n)), o = n.add(i.div(e)))
                  }
                  if (e.eq(w)) return this.unsigned ? y : p;
                  if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  o = p
                }
                for (i = this; i.gte(e);) {
                  n = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
                  for (var a = Math.ceil(Math.log(n) / Math.LN2), u = a <= 48 ? 1 : c(2, a - 48), l = r(n), f = l.mul(e); f.isNegative() || f.gt(i);) n -= u, l = r(n, this.unsigned), f = l.mul(e);
                  l.isZero() && (l = v), o = o.add(l), i = i.sub(f)
                }
                return o
              }, E.div = E.divide, E.modulo = function(e) {
                return t(e) || (e = s(e)), this.sub(this.div(e).mul(e))
              }, E.mod = E.modulo, E.not = function() {
                return i(~this.low, ~this.high, this.unsigned)
              }, E.and = function(e) {
                return t(e) || (e = s(e)), i(this.low & e.low, this.high & e.high, this.unsigned)
              }, E.or = function(e) {
                return t(e) || (e = s(e)), i(this.low | e.low, this.high | e.high, this.unsigned)
              }, E.xor = function(e) {
                return t(e) || (e = s(e)), i(this.low ^ e.low, this.high ^ e.high, this.unsigned)
              }, E.shiftLeft = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : i(0, this.low << e - 32, this.unsigned)
              }, E.shl = E.shiftLeft, E.shiftRight = function(e) {
                return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? i(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : i(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
              }, E.shr = E.shiftRight, E.shiftRightUnsigned = function(e) {
                if (t(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
                var n = this.high;
                if (e < 32) {
                  return i(this.low >>> e | n << 32 - e, n >>> e, this.unsigned)
                }
                return 32 === e ? i(n, 0, this.unsigned) : i(n >>> e - 32, 0, this.unsigned)
              }, E.shru = E.shiftRightUnsigned, E.toSigned = function() {
                return this.unsigned ? i(this.low, this.high, !1) : this
              }, E.toUnsigned = function() {
                return this.unsigned ? this : i(this.low, this.high, !0)
              }, E.toBytes = function(e) {
                return e ? this.toBytesLE() : this.toBytesBE()
              }, E.toBytesLE = function() {
                var e = this.high,
                  t = this.low;
                return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
              }, E.toBytesBE = function() {
                var e = this.high,
                  t = this.low;
                return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
              }, e
            })
          }),
          Lo = i(function(e) {
            /**
             * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
             * Backing buffer: ArrayBuffer, Accessor: Uint8Array
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/bytebuffer.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = function() {
                var e;
                try {
                  e = ko
                } catch (e) {}
                return r(e)
              }() : (t.dcodeIO = t.dcodeIO || {}).ByteBuffer = r(t.dcodeIO.Long)
            }(Se, function(e) {
              function t(e) {
                var t = 0;
                return function() {
                  return t < e.length ? e.charCodeAt(t++) : null
                }
              }

              function n() {
                var e = [],
                  t = [];
                return function() {
                  if (0 === arguments.length) return t.join("") + u.apply(String, e);
                  e.length + arguments.length > 1024 && (t.push(u.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments)
                }
              }

              function r(e, t, n, r, i) {
                var o, s, a = 8 * i - r - 1,
                  u = (1 << a) - 1,
                  c = u >> 1,
                  l = -7,
                  f = n ? i - 1 : 0,
                  h = n ? -1 : 1,
                  d = e[t + f];
                for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + e[t + f], f += h, l -= 8);
                for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + f], f += h, l -= 8);
                if (0 === o) o = 1 - c;
                else {
                  if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                  s += Math.pow(2, r), o -= c
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - r)
              }

              function i(e, t, n, r, i, o) {
                var s, a, u, c = 8 * o - i - 1,
                  l = (1 << c) - 1,
                  f = l >> 1,
                  h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  d = r ? 0 : o - 1,
                  p = r ? 1 : -1,
                  y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f), t * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + d] = 255 & a, d += p, a /= 256, i -= 8);
                for (s = s << i | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
                e[n + d - p] |= 128 * y
              }
              var o = function(e, t, n) {
                if (void 0 === e && (e = o.DEFAULT_CAPACITY), void 0 === t && (t = o.DEFAULT_ENDIAN), void 0 === n && (n = o.DEFAULT_NOASSERT), !n) {
                  if ((e |= 0) < 0) throw RangeError("Illegal capacity");
                  t = !!t, n = !!n
                }
                this.buffer = 0 === e ? a : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = t, this.noAssert = n
              };
              o.VERSION = "5.0.1", o.LITTLE_ENDIAN = !0, o.BIG_ENDIAN = !1, o.DEFAULT_CAPACITY = 16, o.DEFAULT_ENDIAN = o.BIG_ENDIAN, o.DEFAULT_NOASSERT = !1, o.Long = e || null;
              var s = o.prototype;
              Object.defineProperty(s, "__isByteBuffer__", {
                value: !0,
                enumerable: !1,
                configurable: !1
              });
              var a = new ArrayBuffer(0),
                u = String.fromCharCode;
              o.accessor = function() {
                return Uint8Array
              }, o.allocate = function(e, t, n) {
                return new o(e, t, n)
              }, o.concat = function(e, t, n, r) {
                "boolean" != typeof t && "string" == typeof t || (r = n, n = t, t = void 0);
                for (var i, s = 0, a = 0, u = e.length; a < u; ++a) o.isByteBuffer(e[a]) || (e[a] = o.wrap(e[a], t)), (i = e[a].limit - e[a].offset) > 0 && (s += i);
                if (0 === s) return new o(0, n, r);
                var c, l = new o(s, n, r);
                for (a = 0; a < u;) c = e[a++], (i = c.limit - c.offset) <= 0 || (l.view.set(c.view.subarray(c.offset, c.limit), l.offset), l.offset += i);
                return l.limit = l.offset, l.offset = 0, l
              }, o.isByteBuffer = function(e) {
                return !0 === (e && e.__isByteBuffer__)
              }, o.type = function() {
                return ArrayBuffer
              }, o.wrap = function(e, t, n, r) {
                if ("string" != typeof t && (r = n, n = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), t) {
                  case "base64":
                    return o.fromBase64(e, n);
                  case "hex":
                    return o.fromHex(e, n);
                  case "binary":
                    return o.fromBinary(e, n);
                  case "utf8":
                    return o.fromUTF8(e, n);
                  case "debug":
                    return o.fromDebug(e, n);
                  default:
                    throw Error("Unsupported encoding: " + t)
                }
                if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
                var i;
                if (o.isByteBuffer(e)) return i = s.clone.call(e), i.markedOffset = -1, i;
                if (e instanceof Uint8Array) i = new o(0, n, r), e.length > 0 && (i.buffer = e.buffer, i.offset = e.byteOffset, i.limit = e.byteOffset + e.byteLength, i.view = new Uint8Array(e.buffer));
                else if (e instanceof ArrayBuffer) i = new o(0, n, r), e.byteLength > 0 && (i.buffer = e, i.offset = 0, i.limit = e.byteLength, i.view = e.byteLength > 0 ? new Uint8Array(e) : null);
                else {
                  if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                  i = new o(e.length, n, r), i.limit = e.length;
                  for (var a = 0; a < e.length; ++a) i.view[a] = e[a]
                }
                return i
              }, s.writeBitSet = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r, i = t,
                  o = e.length,
                  s = o >> 3,
                  a = 0;
                for (t += this.writeVarint32(o, t); s--;) r = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(r, t++);
                if (a < o) {
                  var u = 0;
                  for (r = 0; a < o;) r |= (1 & !!e[a++]) << u++;
                  this.writeByte(r, t++)
                }
                return n ? (this.offset = t, this) : t - i
              }, s.readBitSet = function(e) {
                var t = void 0 === e;
                t && (e = this.offset);
                var n, r = this.readVarint32(e),
                  i = r.value,
                  o = i >> 3,
                  s = 0,
                  a = [];
                for (e += r.length; o--;) n = this.readByte(e++), a[s++] = !!(1 & n), a[s++] = !!(2 & n), a[s++] = !!(4 & n), a[s++] = !!(8 & n), a[s++] = !!(16 & n), a[s++] = !!(32 & n), a[s++] = !!(64 & n), a[s++] = !!(128 & n);
                if (s < i) {
                  var u = 0;
                  for (n = this.readByte(e++); s < i;) a[s++] = !!(n >> u++ & 1)
                }
                return t && (this.offset = e), a
              }, s.readBytes = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
                }
                var r = this.slice(t, t + e);
                return n && (this.offset += e), r
              }, s.writeBytes = s.append, s.writeInt8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
              }, s.writeByte = s.writeInt8, s.readInt8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = this.view[e];
                return 128 == (128 & n) && (n = -(255 - n + 1)), t && (this.offset += 1), n
              }, s.readByte = s.readInt8, s.writeUint8 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 1;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
              }, s.writeUInt8 = s.writeUint8, s.readUint8 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = this.view[e];
                return t && (this.offset += 1), n
              }, s.readUInt8 = s.readUint8, s.writeInt16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this
              }, s.writeShort = s.writeInt16, s.readInt16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), 32768 == (32768 & n) && (n = -(65535 - n + 1)), t && (this.offset += 2), n
              }, s.readShort = s.readInt16, s.writeUint16 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 2;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2), this
              }, s.writeUInt16 = s.writeUint16, s.readUint16 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e], n |= this.view[e + 1] << 8) : (n = this.view[e] << 8, n |= this.view[e + 1]), t && (this.offset += 2), n
              }, s.readUInt16 = s.readUint16, s.writeInt32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this
              }, s.writeInt = s.writeInt32, s.readInt32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), n |= 0, t && (this.offset += 4), n
              }, s.readInt = s.readInt32, s.writeUint32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), n && (this.offset += 4), this
              }, s.writeUInt32 = s.writeUint32, s.readUint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = 0;
                return this.littleEndian ? (n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0), t && (this.offset += 4), n
              }, s.readUInt32 = s.readUint32, e && (s.writeInt64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low,
                  s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this
              }, s.writeLong = s.writeInt64, s.readInt64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                  i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !1);
                return n && (this.offset += 8), o
              }, s.readLong = s.readInt64, s.writeUint64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), n += 8;
                var i = this.buffer.byteLength;
                n > i && this.resize((i *= 2) > n ? i : n), n -= 8;
                var o = t.low,
                  s = t.high;
                return this.littleEndian ? (this.view[n + 3] = o >>> 24 & 255, this.view[n + 2] = o >>> 16 & 255, this.view[n + 1] = o >>> 8 & 255, this.view[n] = 255 & o, n += 4, this.view[n + 3] = s >>> 24 & 255, this.view[n + 2] = s >>> 16 & 255, this.view[n + 1] = s >>> 8 & 255, this.view[n] = 255 & s) : (this.view[n] = s >>> 24 & 255, this.view[n + 1] = s >>> 16 & 255, this.view[n + 2] = s >>> 8 & 255, this.view[n + 3] = 255 & s, n += 4, this.view[n] = o >>> 24 & 255, this.view[n + 1] = o >>> 16 & 255, this.view[n + 2] = o >>> 8 & 255, this.view[n + 3] = 255 & o), r && (this.offset += 8), this
              }, s.writeUInt64 = s.writeUint64, s.readUint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this.buffer.byteLength)
                }
                var r = 0,
                  i = 0;
                this.littleEndian ? (r = this.view[t + 2] << 16, r |= this.view[t + 1] << 8, r |= this.view[t], r += this.view[t + 3] << 24 >>> 0, t += 4, i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>> 0) : (i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[t] << 24 >>> 0, t += 4, r = this.view[t + 1] << 16, r |= this.view[t + 2] << 8, r |= this.view[t + 3], r += this.view[t] << 24 >>> 0);
                var o = new e(r, i, !0);
                return n && (this.offset += 8), o
              }, s.readUInt64 = s.readUint64), s.writeFloat32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 4;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 4, i(this.view, e, t, this.littleEndian, 23, 4), n && (this.offset += 4), this
              }, s.writeFloat = s.writeFloat32, s.readFloat32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = r(this.view, e, this.littleEndian, 23, 4);
                return t && (this.offset += 4), n
              }, s.readFloat = s.readFloat32, s.writeFloat64 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                t += 8;
                var r = this.buffer.byteLength;
                return t > r && this.resize((r *= 2) > t ? r : t), t -= 8, i(this.view, e, t, this.littleEndian, 52, 8), n && (this.offset += 8), this
              }, s.writeDouble = s.writeFloat64, s.readFloat64 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                }
                var n = r(this.view, e, this.littleEndian, 52, 8);
                return t && (this.offset += 8), n
              }, s.readDouble = s.readFloat64, o.MAX_VARINT32_BYTES = 5, o.calculateVarint32 = function(e) {
                return e >>>= 0, e < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
              }, o.zigZagEncode32 = function(e) {
                return ((e |= 0) << 1 ^ e >> 31) >>> 0
              }, o.zigZagDecode32 = function(e) {
                return e >>> 1 ^ -(1 & e) | 0
              }, s.writeVarint32 = function(e, t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                }
                var r, i = o.calculateVarint32(e);
                t += i;
                var s = this.buffer.byteLength;
                for (t > s && this.resize((s *= 2) > t ? s : t), t -= i, e >>>= 0; e >= 128;) r = 127 & e | 128, this.view[t++] = r, e >>>= 7;
                return this.view[t++] = e, n ? (this.offset = t, this) : i
              }, s.writeVarint32ZigZag = function(e, t) {
                return this.writeVarint32(o.zigZagEncode32(e), t)
              }, s.readVarint32 = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n, r = 0,
                  i = 0;
                do {
                  if (!this.noAssert && e > this.limit) {
                    var o = Error("Truncated");
                    throw o.truncated = !0, o
                  }
                  n = this.view[e++], r < 5 && (i |= (127 & n) << 7 * r), ++r
                } while (0 != (128 & n));
                return i |= 0, t ? (this.offset = e, i) : {
                  value: i,
                  length: r
                }
              }, s.readVarint32ZigZag = function(e) {
                var t = this.readVarint32(e);
                return "object" == typeof t ? t.value = o.zigZagDecode32(t.value) : t = o.zigZagDecode32(t), t
              }, e && (o.MAX_VARINT64_BYTES = 10, o.calculateVarint64 = function(t) {
                "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
                var n = t.toInt() >>> 0,
                  r = t.shiftRightUnsigned(28).toInt() >>> 0,
                  i = t.shiftRightUnsigned(56).toInt() >>> 0;
                return 0 == i ? 0 == r ? n < 16384 ? n < 128 ? 1 : 2 : n < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : i < 128 ? 9 : 10
              }, o.zigZagEncode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
              }, o.zigZagDecode64 = function(t) {
                return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()), t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
              }, s.writeVarint64 = function(t, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" == typeof t) t = e.fromNumber(t);
                  else if ("string" == typeof t) t = e.fromString(t);
                  else if (!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned());
                var i = o.calculateVarint64(t),
                  s = t.toInt() >>> 0,
                  a = t.shiftRightUnsigned(28).toInt() >>> 0,
                  u = t.shiftRightUnsigned(56).toInt() >>> 0;
                n += i;
                var c = this.buffer.byteLength;
                switch (n > c && this.resize((c *= 2) > n ? c : n), n -= i, i) {
                  case 10:
                    this.view[n + 9] = u >>> 7 & 1;
                  case 9:
                    this.view[n + 8] = 9 !== i ? 128 | u : 127 & u;
                  case 8:
                    this.view[n + 7] = 8 !== i ? a >>> 21 | 128 : a >>> 21 & 127;
                  case 7:
                    this.view[n + 6] = 7 !== i ? a >>> 14 | 128 : a >>> 14 & 127;
                  case 6:
                    this.view[n + 5] = 6 !== i ? a >>> 7 | 128 : a >>> 7 & 127;
                  case 5:
                    this.view[n + 4] = 5 !== i ? 128 | a : 127 & a;
                  case 4:
                    this.view[n + 3] = 4 !== i ? s >>> 21 | 128 : s >>> 21 & 127;
                  case 3:
                    this.view[n + 2] = 3 !== i ? s >>> 14 | 128 : s >>> 14 & 127;
                  case 2:
                    this.view[n + 1] = 2 !== i ? s >>> 7 | 128 : s >>> 7 & 127;
                  case 1:
                    this.view[n] = 1 !== i ? 128 | s : 127 & s
                }
                return r ? (this.offset += i, this) : i
              }, s.writeVarint64ZigZag = function(e, t) {
                return this.writeVarint64(o.zigZagEncode64(e), t)
              }, s.readVarint64 = function(t) {
                var n = void 0 === t;
                if (n && (t = this.offset), !this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                  if ((t >>>= 0) < 0 || t + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
                }
                var r = t,
                  i = 0,
                  o = 0,
                  s = 0,
                  a = 0;
                if (a = this.view[t++], i = 127 & a, 128 & a && (a = this.view[t++], i |= (127 & a) << 7, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 14, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], i |= (127 & a) << 21, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o = 127 & a, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 7, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 14, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], o |= (127 & a) << 21, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s = 127 & a, (128 & a || this.noAssert && void 0 === a) && (a = this.view[t++], s |= (127 & a) << 7, 128 & a || this.noAssert && void 0 === a)))))))))) throw Error("Buffer overrun");
                var u = e.fromBits(i | o << 28, o >>> 4 | s << 24, !1);
                return n ? (this.offset = t, u) : {
                  value: u,
                  length: t - r
                }
              }, s.readVarint64ZigZag = function(t) {
                var n = this.readVarint64(t);
                return n && n.value instanceof e ? n.value = o.zigZagDecode64(n.value) : n = o.zigZagDecode64(n), n
              }), s.writeCString = function(e, n) {
                var r = void 0 === n;
                r && (n = this.offset);
                var i, o = e.length;
                if (!this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  for (i = 0; i < o; ++i)
                    if (0 === e.charCodeAt(i)) throw RangeError("Illegal str: Contains NULL-characters");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                o = l.calculateUTF16asUTF8(t(e))[1], n += o + 1;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= o + 1, l.encodeUTF16toUTF8(t(e), function(e) {
                  this.view[n++] = e
                }.bind(this)), this.view[n++] = 0, r ? (this.offset = n, this) : o
              }, s.readCString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var r, i = e,
                  o = -1;
                return l.decodeUTF8toUTF16(function() {
                  if (0 === o) return null;
                  if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                  return o = this.view[e++], 0 === o ? null : o
                }.bind(this), r = n(), !0), t ? (this.offset = e, r()) : {
                  string: r(),
                  length: e - i
                }
              }, s.writeIString = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, o = n;
                i = l.calculateUTF16asUTF8(t(e), this.noAssert)[1], n += 4 + i;
                var s = this.buffer.byteLength;
                if (n > s && this.resize((s *= 2) > n ? s : n), n -= 4 + i, this.littleEndian ? (this.view[n + 3] = i >>> 24 & 255, this.view[n + 2] = i >>> 16 & 255, this.view[n + 1] = i >>> 8 & 255, this.view[n] = 255 & i) : (this.view[n] = i >>> 24 & 255, this.view[n + 1] = i >>> 16 & 255, this.view[n + 2] = i >>> 8 & 255, this.view[n + 3] = 255 & i), n += 4, l.encodeUTF16toUTF8(t(e), function(e) {
                    this.view[n++] = e
                  }.bind(this)), n !== o + 4 + i) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + 4 + i));
                return r ? (this.offset = n, this) : n - o
              }, s.readIString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                }
                var n = e,
                  r = this.readUint32(e),
                  i = this.readUTF8String(r, o.METRICS_BYTES, e += 4);
                return e += i.length, t ? (this.offset = e, i.string) : {
                  string: i.string,
                  length: e - n
                }
              }, o.METRICS_CHARS = "c", o.METRICS_BYTES = "b", s.writeUTF8String = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, o = n;
                i = l.calculateUTF16asUTF8(t(e))[1], n += i;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= i, l.encodeUTF16toUTF8(t(e), function(e) {
                  this.view[n++] = e
                }.bind(this)), r ? (this.offset = n, this) : n - o
              }, s.writeString = s.writeUTF8String, o.calculateUTF8Chars = function(e) {
                return l.calculateUTF16asUTF8(t(e))[0]
              }, o.calculateUTF8Bytes = function(e) {
                return l.calculateUTF16asUTF8(t(e))[1]
              }, o.calculateString = o.calculateUTF8Bytes, s.readUTF8String = function(e, t, r) {
                "number" == typeof t && (r = t, t = void 0);
                var i = void 0 === r;
                if (i && (r = this.offset), void 0 === t && (t = o.METRICS_CHARS), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                  if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                }
                var s, a = 0,
                  u = r;
                if (t === o.METRICS_CHARS) {
                  if (s = n(), l.decodeUTF8(function() {
                      return a < e && r < this.limit ? this.view[r++] : null
                    }.bind(this), function(e) {
                      ++a, l.UTF8toUTF16(e, s)
                    }), a !== e) throw RangeError("Illegal range: Truncated data, " + a + " == " + e);
                  return i ? (this.offset = r, s()) : {
                    string: s(),
                    length: r - u
                  }
                }
                if (t === o.METRICS_BYTES) {
                  if (!this.noAssert) {
                    if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                    if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength)
                  }
                  var c = r + e;
                  if (l.decodeUTF8toUTF16(function() {
                      return r < c ? this.view[r++] : null
                    }.bind(this), s = n(), this.noAssert), r !== c) throw RangeError("Illegal range: Truncated data, " + r + " == " + c);
                  return i ? (this.offset = r, s()) : {
                    string: s(),
                    length: r - u
                  }
                }
                throw TypeError("Unsupported metrics: " + t)
              }, s.readString = s.readUTF8String, s.writeVString = function(e, n) {
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                var i, s, a = n;
                i = l.calculateUTF16asUTF8(t(e), this.noAssert)[1], s = o.calculateVarint32(i), n += s + i;
                var u = this.buffer.byteLength;
                if (n > u && this.resize((u *= 2) > n ? u : n), n -= s + i, n += this.writeVarint32(i, n), l.encodeUTF16toUTF8(t(e), function(e) {
                    this.view[n++] = e
                  }.bind(this)), n !== a + i + s) throw RangeError("Illegal range: Truncated data, " + n + " == " + (n + i + s));
                return r ? (this.offset = n, this) : n - a
              }, s.readVString = function(e) {
                var t = void 0 === e;
                if (t && (e = this.offset), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                }
                var n = e,
                  r = this.readVarint32(e),
                  i = this.readUTF8String(r.value, o.METRICS_BYTES, e += r.length);
                return e += i.length, t ? (this.offset = e, i.string) : {
                  string: i.string,
                  length: e - n
                }
              }, s.append = function(e, t, n) {
                "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof o || (e = o.wrap(e, t));
                var i = e.limit - e.offset;
                if (i <= 0) return this;
                n += i;
                var s = this.buffer.byteLength;
                return n > s && this.resize((s *= 2) > n ? s : n), n -= i, this.view.set(e.view.subarray(e.offset, e.limit), n), e.offset += i, r && (this.offset += i), this
              }, s.appendTo = function(e, t) {
                return e.append(this, t), this
              }, s.assert = function(e) {
                return this.noAssert = !e, this
              }, s.capacity = function() {
                return this.buffer.byteLength
              }, s.clear = function() {
                return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
              }, s.clone = function(e) {
                var t = new o(0, this.littleEndian, this.noAssert);
                return e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), t.view = new Uint8Array(t.buffer)) : (t.buffer = this.buffer, t.view = this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
              }, s.compact = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (0 === e && t === this.buffer.byteLength) return this;
                var n = t - e;
                if (0 === n) return this.buffer = a, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
                var r = new ArrayBuffer(n),
                  i = new Uint8Array(r);
                return i.set(this.view.subarray(e, t)), this.buffer = r, this.view = i, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = n, this
              }, s.copy = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                if (e === t) return new o(0, this.littleEndian, this.noAssert);
                var n = t - e,
                  r = new o(n, this.littleEndian, this.noAssert);
                return r.offset = 0, r.limit = n, r.markedOffset >= 0 && (r.markedOffset -= e), this.copyTo(r, 0, e, t), r
              }, s.copyTo = function(e, t, n, r) {
                var i, s;
                if (!this.noAssert && !o.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                if (t = (s = void 0 === t) ? e.offset : 0 | t, n = (i = void 0 === n) ? this.offset : 0 | n, r = void 0 === r ? this.limit : 0 | r, t < 0 || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                if (n < 0 || r > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + n + " <= " + this.buffer.byteLength);
                var a = r - n;
                return 0 === a ? e : (e.ensureCapacity(t + a), e.view.set(this.view.subarray(n, r), t), i && (this.offset += a), s && (e.offset += a), this)
              }, s.ensureCapacity = function(e) {
                var t = this.buffer.byteLength;
                return t < e ? this.resize((t *= 2) > e ? t : e) : this
              }, s.fill = function(e, t, n) {
                var r = void 0 === t;
                if (r && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === n && (n = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                  if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                }
                if (t >= n) return this;
                for (; t < n;) this.view[t++] = e;
                return r && (this.offset = t), this
              }, s.flip = function() {
                return this.limit = this.offset, this.offset = 0, this
              }, s.mark = function(e) {
                if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                  if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                }
                return this.markedOffset = e, this
              }, s.order = function(e) {
                if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                return this.littleEndian = !!e, this
              }, s.LE = function(e) {
                return this.littleEndian = void 0 === e || !!e, this
              }, s.BE = function(e) {
                return this.littleEndian = void 0 !== e && !e, this
              }, s.prepend = function(e, t, n) {
                "number" != typeof t && "string" == typeof t || (n = t, t = void 0);
                var r = void 0 === n;
                if (r && (n = this.offset), !this.noAssert) {
                  if ("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
                  if ((n >>>= 0) < 0 || n + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
                }
                e instanceof o || (e = o.wrap(e, t));
                var i = e.limit - e.offset;
                if (i <= 0) return this;
                var s = i - n;
                if (s > 0) {
                  var a = new ArrayBuffer(this.buffer.byteLength + s),
                    u = new Uint8Array(a);
                  u.set(this.view.subarray(n, this.buffer.byteLength), i), this.buffer = a, this.view = u, this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this.limit += s, n += s
                } else {
                  new Uint8Array(this.buffer)
                }
                return this.view.set(e.view.subarray(e.offset, e.limit), n - i), e.offset = e.limit, r && (this.offset -= i), this
              }, s.prependTo = function(e, t) {
                return e.prepend(this, t), this
              }, s.printDebug = function(e) {
                "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
              }, s.remaining = function() {
                return this.limit - this.offset
              }, s.reset = function() {
                return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
              }, s.resize = function(e) {
                if (!this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                  if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e)
                }
                if (this.buffer.byteLength < e) {
                  var t = new ArrayBuffer(e),
                    n = new Uint8Array(t);
                  n.set(this.view), this.buffer = t, this.view = n
                }
                return this
              }, s.reverse = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                return e === t ? this : (Array.prototype.reverse.call(this.view.subarray(e, t)), this)
              }, s.skip = function(e) {
                if (!this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                  e |= 0
                }
                var t = this.offset + e;
                if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                return this.offset = t, this
              }, s.slice = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var n = this.clone();
                return n.offset = e, n.limit = t, n
              }, s.toBuffer = function(e) {
                var t = this.offset,
                  n = this.limit;
                if (!this.noAssert) {
                  if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                  if (t >>>= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                  if (n >>>= 0, t < 0 || t > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + n + " <= " + this.buffer.byteLength)
                }
                if (!e && 0 === t && n === this.buffer.byteLength) return this.buffer;
                if (t === n) return a;
                var r = new ArrayBuffer(n - t);
                return new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(t, n), 0), r
              }, s.toArrayBuffer = s.toBuffer, s.toString = function(e, t, n) {
                if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                switch ("number" == typeof e && (e = "utf8", t = e, n = t), e) {
                  case "utf8":
                    return this.toUTF8(t, n);
                  case "base64":
                    return this.toBase64(t, n);
                  case "hex":
                    return this.toHex(t, n);
                  case "binary":
                    return this.toBinary(t, n);
                  case "debug":
                    return this.toDebug();
                  case "columns":
                    return this.toColumns();
                  default:
                    throw Error("Unsupported encoding: " + e)
                }
              };
              var c = function() {
                for (var e = {}, t = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], n = [], r = 0, i = t.length; r < i; ++r) n[t[r]] = r;
                return e.encode = function(e, n) {
                  for (var r, i; null !== (r = e());) n(t[r >> 2 & 63]), i = (3 & r) << 4, null !== (r = e()) ? (i |= r >> 4 & 15, n(t[63 & (i | r >> 4 & 15)]), i = (15 & r) << 2, null !== (r = e()) ? (n(t[63 & (i | r >> 6 & 3)]), n(t[63 & r])) : (n(t[63 & i]), n(61))) : (n(t[63 & i]), n(61), n(61))
                }, e.decode = function(e, t) {
                  function r(e) {
                    throw Error("Illegal character code: " + e)
                  }
                  for (var i, o, s; null !== (i = e());)
                    if (o = n[i], void 0 === o && r(i), null !== (i = e()) && (s = n[i], void 0 === s && r(i), t(o << 2 >>> 0 | (48 & s) >> 4), null !== (i = e()))) {
                      if (void 0 === (o = n[i])) {
                        if (61 === i) break;
                        r(i)
                      }
                      if (t((15 & s) << 4 >>> 0 | (60 & o) >> 2), null !== (i = e())) {
                        if (void 0 === (s = n[i])) {
                          if (61 === i) break;
                          r(i)
                        }
                        t((3 & o) << 6 >>> 0 | s)
                      }
                    }
                }, e.test = function(e) {
                  return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)
                }, e
              }();
              s.toBase64 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, t |= 0, e < 0 || t > this.capacity || e > t) throw RangeError("begin, end");
                var r;
                return c.encode(function() {
                  return e < t ? this.view[e++] : null
                }.bind(this), r = n()), r()
              }, o.fromBase64 = function(e, n) {
                if ("string" != typeof e) throw TypeError("str");
                var r = new o(e.length / 4 * 3, n),
                  i = 0;
                return c.decode(t(e), function(e) {
                  r.view[i++] = e
                }), r.limit = i, r
              }, o.btoa = function(e) {
                return o.fromBinary(e).toBase64()
              }, o.atob = function(e) {
                return o.fromBase64(e).toBinary()
              }, s.toBinary = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), e |= 0, t |= 0, e < 0 || t > this.capacity() || e > t) throw RangeError("begin, end");
                if (e === t) return "";
                for (var n = [], r = []; e < t;) n.push(this.view[e++]), n.length >= 1024 && (r.push(String.fromCharCode.apply(String, n)), n = []);
                return r.join("") + String.fromCharCode.apply(String, n)
              }, o.fromBinary = function(e, t) {
                if ("string" != typeof e) throw TypeError("str");
                for (var n, r = 0, i = e.length, s = new o(i, t); r < i;) {
                  if ((n = e.charCodeAt(r)) > 255) throw RangeError("illegal char code: " + n);
                  s.view[r++] = n
                }
                return s.limit = i, s
              }, s.toDebug = function(e) {
                for (var t, n = -1, r = this.buffer.byteLength, i = "", o = "", s = ""; n < r;) {
                  if (-1 !== n && (t = this.view[n], i += t < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (o += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++n, e && n > 0 && n % 16 == 0 && n !== r) {
                    for (; i.length < 51;) i += " ";
                    s += i + o + "\n", i = o = ""
                  }
                  n === this.offset && n === this.limit ? i += n === this.markedOffset ? "!" : "|" : n === this.offset ? i += n === this.markedOffset ? "[" : "<" : n === this.limit ? i += n === this.markedOffset ? "]" : ">" : i += n === this.markedOffset ? "'" : e || 0 !== n && n !== r ? " " : ""
                }
                if (e && " " !== i) {
                  for (; i.length < 51;) i += " ";
                  s += i + o + "\n"
                }
                return e ? s : i
              }, o.fromDebug = function(e, t, n) {
                for (var r, i, s = e.length, a = new o((s + 1) / 3 | 0, t, n), u = 0, c = 0, l = !1, f = !1, h = !1, d = !1, p = !1; u < s;) {
                  switch (r = e.charAt(u++)) {
                    case "!":
                      if (!n) {
                        if (f || h || d) {
                          p = !0;
                          break
                        }
                        f = h = d = !0
                      }
                      a.offset = a.markedOffset = a.limit = c, l = !1;
                      break;
                    case "|":
                      if (!n) {
                        if (f || d) {
                          p = !0;
                          break
                        }
                        f = d = !0
                      }
                      a.offset = a.limit = c, l = !1;
                      break;
                    case "[":
                      if (!n) {
                        if (f || h) {
                          p = !0;
                          break
                        }
                        f = h = !0
                      }
                      a.offset = a.markedOffset = c, l = !1;
                      break;
                    case "<":
                      if (!n) {
                        if (f) {
                          p = !0;
                          break
                        }
                        f = !0
                      }
                      a.offset = c, l = !1;
                      break;
                    case "]":
                      if (!n) {
                        if (d || h) {
                          p = !0;
                          break
                        }
                        d = h = !0
                      }
                      a.limit = a.markedOffset = c, l = !1;
                      break;
                    case ">":
                      if (!n) {
                        if (d) {
                          p = !0;
                          break
                        }
                        d = !0
                      }
                      a.limit = c, l = !1;
                      break;
                    case "'":
                      if (!n) {
                        if (h) {
                          p = !0;
                          break
                        }
                        h = !0
                      }
                      a.markedOffset = c, l = !1;
                      break;
                    case " ":
                      l = !1;
                      break;
                    default:
                      if (!n && l) {
                        p = !0;
                        break
                      }
                      if (i = parseInt(r + e.charAt(u++), 16), !n && (isNaN(i) || i < 0 || i > 255)) throw TypeError("Illegal str: Not a debug encoded string");
                      a.view[c++] = i, l = !0
                  }
                  if (p) throw TypeError("Illegal str: Invalid symbol at " + u)
                }
                if (!n) {
                  if (!f || !d) throw TypeError("Illegal str: Missing offset or limit");
                  if (c < a.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + c + " < " + s)
                }
                return a
              }, s.toHex = function(e, t) {
                if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                for (var n, r = new Array(t - e); e < t;) n = this.view[e++], n < 16 ? r.push("0", n.toString(16)) : r.push(n.toString(16));
                return r.join("")
              }, o.fromHex = function(e, t, n) {
                if (!n) {
                  if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                  if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
                }
                for (var r, i = e.length, s = new o(i / 2 | 0, t), a = 0, u = 0; a < i; a += 2) {
                  if (r = parseInt(e.substring(a, a + 2), 16), !n && (!isFinite(r) || r < 0 || r > 255)) throw TypeError("Illegal str: Contains non-hex characters");
                  s.view[u++] = r
                }
                return s.limit = u, s
              };
              var l = function() {
                var e = {};
                return e.MAX_CODEPOINT = 1114111, e.encodeUTF8 = function(e, t) {
                  var n = null;
                  for ("number" == typeof e && (n = e, e = function() {
                      return null
                    }); null !== n || null !== (n = e());) n < 128 ? t(127 & n) : n < 2048 ? (t(n >> 6 & 31 | 192), t(63 & n | 128)) : n < 65536 ? (t(n >> 12 & 15 | 224), t(n >> 6 & 63 | 128), t(63 & n | 128)) : (t(n >> 18 & 7 | 240), t(n >> 12 & 63 | 128), t(n >> 6 & 63 | 128), t(63 & n | 128)), n = null
                }, e.decodeUTF8 = function(e, t) {
                  for (var n, r, i, o, s = function(e) {
                      e = e.slice(0, e.indexOf(null));
                      var t = Error(e.toString());
                      throw t.name = "TruncatedError", t.bytes = e, t
                    }; null !== (n = e());)
                    if (0 == (128 & n)) t(n);
                    else if (192 == (224 & n)) null === (r = e()) && s([n, r]), t((31 & n) << 6 | 63 & r);
                  else if (224 == (240 & n))(null === (r = e()) || null === (i = e())) && s([n, r, i]), t((15 & n) << 12 | (63 & r) << 6 | 63 & i);
                  else {
                    if (240 != (248 & n)) throw RangeError("Illegal starting byte: " + n);
                    (null === (r = e()) || null === (i = e()) || null === (o = e())) && s([n, r, i, o]), t((7 & n) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & o)
                  }
                }, e.UTF16toUTF8 = function(e, t) {
                  for (var n, r = null;;) {
                    if (null === (n = null !== r ? r : e())) break;
                    n >= 55296 && n <= 57343 && null !== (r = e()) && r >= 56320 && r <= 57343 ? (t(1024 * (n - 55296) + r - 56320 + 65536), r = null) : t(n)
                  }
                  null !== r && t(r)
                }, e.UTF8toUTF16 = function(e, t) {
                  var n = null;
                  for ("number" == typeof e && (n = e, e = function() {
                      return null
                    }); null !== n || null !== (n = e());) n <= 65535 ? t(n) : (n -= 65536, t(55296 + (n >> 10)), t(n % 1024 + 56320)), n = null
                }, e.encodeUTF16toUTF8 = function(t, n) {
                  e.UTF16toUTF8(t, function(t) {
                    e.encodeUTF8(t, n)
                  })
                }, e.decodeUTF8toUTF16 = function(t, n) {
                  e.decodeUTF8(t, function(t) {
                    e.UTF8toUTF16(t, n)
                  })
                }, e.calculateCodePoint = function(e) {
                  return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                }, e.calculateUTF8 = function(e) {
                  for (var t, n = 0; null !== (t = e());) n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                  return n
                }, e.calculateUTF16asUTF8 = function(t) {
                  var n = 0,
                    r = 0;
                  return e.UTF16toUTF8(t, function(e) {
                    ++n, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                  }), [n, r]
                }, e
              }();
              return s.toUTF8 = function(e, t) {
                if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                  if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                  if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                  if (t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                }
                var r;
                try {
                  l.decodeUTF8toUTF16(function() {
                    return e < t ? this.view[e++] : null
                  }.bind(this), r = n())
                } catch (n) {
                  if (e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t)
                }
                return r()
              }, o.fromUTF8 = function(e, n, r) {
                if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                var i = new o(l.calculateUTF16asUTF8(t(e), !0)[1], n, r),
                  s = 0;
                return l.encodeUTF16toUTF8(t(e), function(e) {
                  i.view[s++] = e
                }), i.limit = s, i
              }, o
            })
          }),
          Uo = {},
          Fo = Object.freeze({
            default: Uo
          }),
          Do = Fo && Uo || Fo,
          Mo = i(function(e) {
            /**
             * @license protobuf.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
             * Released under the Apache License, Version 2.0
             * see: https://github.com/dcodeIO/protobuf.js for details
             */
            ! function(t, r) {
              "function" == typeof n && e && e.exports ? e.exports = r(Lo, !0) : (t.dcodeIO = t.dcodeIO || {}).ProtoBuf = r(t.dcodeIO.ByteBuffer)
            }(Se, function(e, t) {
              var n = {};
              return n.ByteBuffer = e, n.Long = e.Long || null, n.VERSION = "5.0.3", n.WIRE_TYPES = {}, n.WIRE_TYPES.VARINT = 0, n.WIRE_TYPES.BITS64 = 1, n.WIRE_TYPES.LDELIM = 2, n.WIRE_TYPES.STARTGROUP = 3, n.WIRE_TYPES.ENDGROUP = 4, n.WIRE_TYPES.BITS32 = 5, n.PACKABLE_WIRE_TYPES = [n.WIRE_TYPES.VARINT, n.WIRE_TYPES.BITS64, n.WIRE_TYPES.BITS32], n.TYPES = {
                int32: {
                  name: "int32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                uint32: {
                  name: "uint32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                sint32: {
                  name: "sint32",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                int64: {
                  name: "int64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                uint64: {
                  name: "uint64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.UZERO : void 0
                },
                sint64: {
                  name: "sint64",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                bool: {
                  name: "bool",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: !1
                },
                double: {
                  name: "double",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: 0
                },
                string: {
                  name: "string",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: ""
                },
                bytes: {
                  name: "bytes",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: null
                },
                fixed32: {
                  name: "fixed32",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                sfixed32: {
                  name: "sfixed32",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                fixed64: {
                  name: "fixed64",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: n.Long ? n.Long.UZERO : void 0
                },
                sfixed64: {
                  name: "sfixed64",
                  wireType: n.WIRE_TYPES.BITS64,
                  defaultValue: n.Long ? n.Long.ZERO : void 0
                },
                float: {
                  name: "float",
                  wireType: n.WIRE_TYPES.BITS32,
                  defaultValue: 0
                },
                enum: {
                  name: "enum",
                  wireType: n.WIRE_TYPES.VARINT,
                  defaultValue: 0
                },
                message: {
                  name: "message",
                  wireType: n.WIRE_TYPES.LDELIM,
                  defaultValue: null
                },
                group: {
                  name: "group",
                  wireType: n.WIRE_TYPES.STARTGROUP,
                  defaultValue: null
                }
              }, n.MAP_KEY_TYPES = [n.TYPES.int32, n.TYPES.sint32, n.TYPES.sfixed32, n.TYPES.uint32, n.TYPES.fixed32, n.TYPES.int64, n.TYPES.sint64, n.TYPES.sfixed64, n.TYPES.uint64, n.TYPES.fixed64, n.TYPES.bool, n.TYPES.string, n.TYPES.bytes], n.ID_MIN = 1, n.ID_MAX = 536870911, n.convertFieldsToCamelCase = !1, n.populateAccessors = !0, n.populateDefaults = !0, n.Util = function() {
                var e = {};
                return e.IS_NODE = !("object" != typeof Ee || Ee + "" != "[object process]" || Ee.browser), e.XHR = function() {
                  for (var e = [function() {
                      return new XMLHttpRequest
                    }, function() {
                      return new ActiveXObject("Msxml2.XMLHTTP")
                    }, function() {
                      return new ActiveXObject("Msxml3.XMLHTTP")
                    }, function() {
                      return new ActiveXObject("Microsoft.XMLHTTP")
                    }], t = null, n = 0; n < e.length; n++) {
                    try {
                      t = e[n]()
                    } catch (e) {
                      continue
                    }
                    break
                  }
                  if (!t) throw Error("XMLHttpRequest is not supported");
                  return t
                }, e.fetch = function(t, n) {
                  if (n && "function" != typeof n && (n = null), e.IS_NODE) {
                    var r = Do;
                    if (n) r.readFile(t, function(e, t) {
                      n(e ? null : "" + t)
                    });
                    else try {
                      return r.readFileSync(t)
                    } catch (e) {
                      return null
                    }
                  } else {
                    var i = e.XHR();
                    if (i.open("GET", t, !!n), i.setRequestHeader("Accept", "text/plain"), "function" == typeof i.overrideMimeType && i.overrideMimeType("text/plain"), !n) return i.send(null), 200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null;
                    if (i.onreadystatechange = function() {
                        4 == i.readyState && n(200 == i.status || 0 == i.status && "string" == typeof i.responseText ? i.responseText : null)
                      }, 4 == i.readyState) return;
                    i.send(null)
                  }
                }, e.toCamelCase = function(e) {
                  return e.replace(/_([a-zA-Z])/g, function(e, t) {
                    return t.toUpperCase()
                  })
                }, e
              }(), n.Lang = {
                DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
                RULE: /^(?:required|optional|repeated|map)$/,
                TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
                NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
                TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
                NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
                NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
                NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
                NUMBER_OCT: /^0[0-7]+$/,
                NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
                BOOL: /^(?:true|false)$/i,
                ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
                WHITESPACE: /\s/,
                STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
                STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
              }, n.Reflect = function(t) {
                function n(n) {
                  if ("string" == typeof n && (n = t.TYPES[n]), void 0 === n.defaultValue) throw Error("default value for type " + n.name + " is not supported");
                  return n == t.TYPES.bytes ? new e(0) : n.defaultValue
                }

                function r(e, n) {
                  if (e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low === e.low && e.high === e.high) return new t.Long(e.low, e.high, void 0 === n ? e.unsigned : n);
                  if ("string" == typeof e) return t.Long.fromString(e, n || !1, 10);
                  if ("number" == typeof e) return t.Long.fromNumber(e, n || !1);
                  throw Error("not convertible to Long")
                }

                function i(e, n) {
                  var r = n.readVarint32(),
                    o = 7 & r,
                    s = r >>> 3;
                  switch (o) {
                    case t.WIRE_TYPES.VARINT:
                      do {
                        r = n.readUint8()
                      } while (128 == (128 & r));
                      break;
                    case t.WIRE_TYPES.BITS64:
                      n.offset += 8;
                      break;
                    case t.WIRE_TYPES.LDELIM:
                      r = n.readVarint32(), n.offset += r;
                      break;
                    case t.WIRE_TYPES.STARTGROUP:
                      i(s, n);
                      break;
                    case t.WIRE_TYPES.ENDGROUP:
                      if (s === e) return !1;
                      throw Error("Illegal GROUPEND after unknown group: " + s + " (" + e + " expected)");
                    case t.WIRE_TYPES.BITS32:
                      n.offset += 4;
                      break;
                    default:
                      throw Error("Illegal wire type in unknown group " + e + ": " + o)
                  }
                  return !0
                }
                var o = {},
                  s = function(e, t, n) {
                    this.builder = e, this.parent = t, this.name = n, this.className
                  },
                  a = s.prototype;
                a.fqn = function() {
                  for (var e = this.name, t = this;;) {
                    if (null == (t = t.parent)) break;
                    e = t.name + "." + e
                  }
                  return e
                }, a.toString = function(e) {
                  return (e ? this.className + " " : "") + this.fqn()
                }, a.build = function() {
                  throw Error(this.toString(!0) + " cannot be built directly")
                }, o.T = s;
                var u = function(e, t, n, r, i) {
                    s.call(this, e, t, n), this.className = "Namespace", this.children = [], this.options = r || {}, this.syntax = i || "proto2"
                  },
                  c = u.prototype = Object.create(s.prototype);
                c.getChildren = function(e) {
                  if (null == (e = e || null)) return this.children.slice();
                  for (var t = [], n = 0, r = this.children.length; n < r; ++n) this.children[n] instanceof e && t.push(this.children[n]);
                  return t
                }, c.addChild = function(e) {
                  var t;
                  if (t = this.getChild(e.name))
                    if (t instanceof h.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;
                    else {
                      if (!(e instanceof h.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!0) + ": " + e.name);
                      e.name = e.originalName
                    }
                  this.children.push(e)
                }, c.getChild = function(e) {
                  for (var t = "number" == typeof e ? "id" : "name", n = 0, r = this.children.length; n < r; ++n)
                    if (this.children[n][t] === e) return this.children[n];
                  return null
                }, c.resolve = function(e, t) {
                  var n = "string" == typeof e ? e.split(".") : e,
                    r = this,
                    i = 0;
                  if ("" === n[i]) {
                    for (; null !== r.parent;) r = r.parent;
                    i++
                  }
                  var s;
                  do {
                    do {
                      if (!(r instanceof o.Namespace)) {
                        r = null;
                        break
                      }
                      if (!(s = r.getChild(n[i])) || !(s instanceof o.T) || t && !(s instanceof o.Namespace)) {
                        r = null;
                        break
                      }
                      r = s, i++
                    } while (i < n.length);
                    if (null != r) break;
                    if (null !== this.parent) return this.parent.resolve(e, t)
                  } while (null != r);
                  return r
                }, c.qn = function(e) {
                  var t = [],
                    n = e;
                  do {
                    t.unshift(n.name), n = n.parent
                  } while (null !== n);
                  for (var r = 1; r <= t.length; r++) {
                    var i = t.slice(t.length - r);
                    if (e === this.resolve(i, e instanceof o.Namespace)) return i.join(".")
                  }
                  return e.fqn()
                }, c.build = function() {
                  for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; ++r)(e = n[r]) instanceof u && (t[e.name] = e.build());
                  return Object.defineProperty && Object.defineProperty(t, "$options", {
                    value: this.buildOpt()
                  }), t
                }, c.buildOpt = function() {
                  for (var e = {}, t = Object.keys(this.options), n = 0, r = t.length; n < r; ++n) {
                    var i = t[n],
                      o = this.options[t[n]];
                    e[i] = o
                  }
                  return e
                }, c.getOption = function(e) {
                  return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null
                }, o.Namespace = u;
                var l = function(e, n, r, i, o) {
                    if (this.type = e, this.resolvedType = n, this.isMapKey = r, this.syntax = i, this.name = o, r && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name)
                  },
                  f = l.prototype;
                l.defaultFieldValue = n, f.toString = function() {
                  return (this.name || "") + (this.isMapKey ? "map" : "value") + " element"
                }, f.verifyValue = function(n) {
                  function i(e, t) {
                    throw Error("Illegal value for " + o.toString(!0) + " of type " + o.type.name + ": " + e + " (" + t + ")")
                  }
                  var o = this;
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                      return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), n > 4294967295 ? 0 | n : n;
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), n < 0 ? n >>> 0 : n;
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                      if (t.Long) try {
                        return r(n, !1)
                      } catch (e) {
                        i(typeof n, e.message)
                      } else i(typeof n, "requires Long.js");
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      if (t.Long) try {
                        return r(n, !0)
                      } catch (e) {
                        i(typeof n, e.message)
                      } else i(typeof n, "requires Long.js");
                    case t.TYPES.bool:
                      return "boolean" != typeof n && i(typeof n, "not a boolean"), n;
                    case t.TYPES.float:
                    case t.TYPES.double:
                      return "number" != typeof n && i(typeof n, "not a number"), n;
                    case t.TYPES.string:
                      return "string" == typeof n || n && n instanceof String || i(typeof n, "not a string"), "" + n;
                    case t.TYPES.bytes:
                      return e.isByteBuffer(n) ? n : e.wrap(n, "base64");
                    case t.TYPES.enum:
                      var s = this.resolvedType.getChildren(t.Reflect.Enum.Value);
                      for (u = 0; u < s.length; u++) {
                        if (s[u].name == n) return s[u].id;
                        if (s[u].id == n) return s[u].id
                      }
                      if ("proto3" === this.syntax) return ("number" != typeof n || n === n && n % 1 != 0) && i(typeof n, "not an integer"), (n > 4294967295 || n < 0) && i(typeof n, "not in range for uint32"), n;
                      i(n, "not a valid enum value");
                    case t.TYPES.group:
                    case t.TYPES.message:
                      if (n && "object" == typeof n || i(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;
                      if (n instanceof t.Builder.Message) {
                        var a = {};
                        for (var u in n) n.hasOwnProperty(u) && (a[u] = n[u]);
                        n = a
                      }
                      return new this.resolvedType.clazz(n)
                  }
                  throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")")
                }, f.calculateLength = function(n, r) {
                  if (null === r) return 0;
                  var i;
                  switch (this.type) {
                    case t.TYPES.int32:
                      return r < 0 ? e.calculateVarint64(r) : e.calculateVarint32(r);
                    case t.TYPES.uint32:
                      return e.calculateVarint32(r);
                    case t.TYPES.sint32:
                      return e.calculateVarint32(e.zigZagEncode32(r));
                    case t.TYPES.fixed32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.float:
                      return 4;
                    case t.TYPES.int64:
                    case t.TYPES.uint64:
                      return e.calculateVarint64(r);
                    case t.TYPES.sint64:
                      return e.calculateVarint64(e.zigZagEncode64(r));
                    case t.TYPES.fixed64:
                    case t.TYPES.sfixed64:
                      return 8;
                    case t.TYPES.bool:
                      return 1;
                    case t.TYPES.enum:
                      return e.calculateVarint32(r);
                    case t.TYPES.double:
                      return 8;
                    case t.TYPES.string:
                      return i = e.calculateUTF8Bytes(r), e.calculateVarint32(i) + i;
                    case t.TYPES.bytes:
                      if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                      return e.calculateVarint32(r.remaining()) + r.remaining();
                    case t.TYPES.message:
                      return i = this.resolvedType.calculate(r), e.calculateVarint32(i) + i;
                    case t.TYPES.group:
                      return (i = this.resolvedType.calculate(r)) + e.calculateVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP)
                  }
                  throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                }, f.encodeValue = function(n, r, i) {
                  if (null === r) return i;
                  switch (this.type) {
                    case t.TYPES.int32:
                      r < 0 ? i.writeVarint64(r) : i.writeVarint32(r);
                      break;
                    case t.TYPES.uint32:
                      i.writeVarint32(r);
                      break;
                    case t.TYPES.sint32:
                      i.writeVarint32ZigZag(r);
                      break;
                    case t.TYPES.fixed32:
                      i.writeUint32(r);
                      break;
                    case t.TYPES.sfixed32:
                      i.writeInt32(r);
                      break;
                    case t.TYPES.int64:
                    case t.TYPES.uint64:
                      i.writeVarint64(r);
                      break;
                    case t.TYPES.sint64:
                      i.writeVarint64ZigZag(r);
                      break;
                    case t.TYPES.fixed64:
                      i.writeUint64(r);
                      break;
                    case t.TYPES.sfixed64:
                      i.writeInt64(r);
                      break;
                    case t.TYPES.bool:
                      "string" == typeof r ? i.writeVarint32("false" === r.toLowerCase() ? 0 : !!r) : i.writeVarint32(r ? 1 : 0);
                      break;
                    case t.TYPES.enum:
                      i.writeVarint32(r);
                      break;
                    case t.TYPES.float:
                      i.writeFloat32(r);
                      break;
                    case t.TYPES.double:
                      i.writeFloat64(r);
                      break;
                    case t.TYPES.string:
                      i.writeVString(r);
                      break;
                    case t.TYPES.bytes:
                      if (r.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + r.remaining() + " bytes remaining");
                      var o = r.offset;
                      i.writeVarint32(r.remaining()), i.append(r), r.offset = o;
                      break;
                    case t.TYPES.message:
                      var s = (new e).LE();
                      this.resolvedType.encode(r, s), i.writeVarint32(s.offset), i.append(s.flip());
                      break;
                    case t.TYPES.group:
                      this.resolvedType.encode(r, i), i.writeVarint32(n << 3 | t.WIRE_TYPES.ENDGROUP);
                      break;
                    default:
                      throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + r + " (unknown type)")
                  }
                  return i
                }, f.decode = function(e, n, r) {
                  if (n != this.type.wireType) throw Error("Unexpected wire type for element");
                  var i, o;
                  switch (this.type) {
                    case t.TYPES.int32:
                      return 0 | e.readVarint32();
                    case t.TYPES.uint32:
                      return e.readVarint32() >>> 0;
                    case t.TYPES.sint32:
                      return 0 | e.readVarint32ZigZag();
                    case t.TYPES.fixed32:
                      return e.readUint32() >>> 0;
                    case t.TYPES.sfixed32:
                      return 0 | e.readInt32();
                    case t.TYPES.int64:
                      return e.readVarint64();
                    case t.TYPES.uint64:
                      return e.readVarint64().toUnsigned();
                    case t.TYPES.sint64:
                      return e.readVarint64ZigZag();
                    case t.TYPES.fixed64:
                      return e.readUint64();
                    case t.TYPES.sfixed64:
                      return e.readInt64();
                    case t.TYPES.bool:
                      return !!e.readVarint32();
                    case t.TYPES.enum:
                      return e.readVarint32();
                    case t.TYPES.float:
                      return e.readFloat();
                    case t.TYPES.double:
                      return e.readDouble();
                    case t.TYPES.string:
                      return e.readVString();
                    case t.TYPES.bytes:
                      if (o = e.readVarint32(), e.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + e.remaining());
                      return i = e.clone(), i.limit = i.offset + o, e.offset += o, i;
                    case t.TYPES.message:
                      return o = e.readVarint32(), this.resolvedType.decode(e, o);
                    case t.TYPES.group:
                      return this.resolvedType.decode(e, -1, r)
                  }
                  throw Error("[INTERNAL] Illegal decode type")
                }, f.valueFromString = function(n) {
                  if (!this.isMapKey) throw Error("valueFromString() called on non-map-key element");
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return this.verifyValue(parseInt(n));
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      return this.verifyValue(n);
                    case t.TYPES.bool:
                      return "true" === n;
                    case t.TYPES.string:
                      return this.verifyValue(n);
                    case t.TYPES.bytes:
                      return e.fromBinary(n)
                  }
                }, f.valueToString = function(e) {
                  if (!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                  return this.type === t.TYPES.bytes ? e.toString("binary") : e.toString()
                }, o.Element = l;
                var h = function(e, t, n, r, i, o) {
                    u.call(this, e, t, n, r, o), this.className = "Message", this.extensions = void 0, this.clazz = null, this.isGroup = !!i, this._fields = null, this._fieldsById = null, this._fieldsByName = null
                  },
                  d = h.prototype = Object.create(u.prototype);
                d.build = function(n) {
                  if (this.clazz && !n) return this.clazz;
                  var r = function(t, n) {
                    function r(n, i, o, s) {
                      if (null === n || "object" != typeof n) {
                        if (s && s instanceof t.Reflect.Enum) {
                          var a = t.Reflect.Enum.getName(s.object, n);
                          if (null !== a) return a
                        }
                        return n
                      }
                      if (e.isByteBuffer(n)) return i ? n.toBase64() : n.toBuffer();
                      if (t.Long.isLong(n)) return o ? n.toString() : t.Long.fromValue(n);
                      var u;
                      if (Array.isArray(n)) return u = [], n.forEach(function(e, t) {
                        u[t] = r(e, i, o, s)
                      }), u;
                      if (u = {}, n instanceof t.Map) {
                        for (var c = n.entries(), l = c.next(); !l.done; l = c.next()) u[n.keyElem.valueToString(l.value[0])] = r(l.value[1], i, o, n.valueElem.resolvedType);
                        return u
                      }
                      var f = n.$type,
                        h = void 0;
                      for (var d in n) n.hasOwnProperty(d) && (f && (h = f.getChild(d)) ? u[d] = r(n[d], i, o, h.resolvedType) : u[d] = r(n[d], i, o));
                      return u
                    }
                    var i = n.getChildren(t.Reflect.Message.Field),
                      o = n.getChildren(t.Reflect.Message.OneOf),
                      s = function(r, a) {
                        t.Builder.Message.call(this);
                        for (var u = 0, c = o.length; u < c; ++u) this[o[u].name] = null;
                        for (u = 0, c = i.length; u < c; ++u) {
                          var l = i[u];
                          this[l.name] = l.repeated ? [] : l.map ? new t.Map(l) : null, !l.required && "proto3" !== n.syntax || null === l.defaultValue || (this[l.name] = l.defaultValue)
                        }
                        if (arguments.length > 0) {
                          var f;
                          if (1 !== arguments.length || null === r || "object" != typeof r || !("function" != typeof r.encode || r instanceof s) || Array.isArray(r) || r instanceof t.Map || e.isByteBuffer(r) || r instanceof ArrayBuffer || t.Long && r instanceof t.Long)
                            for (u = 0, c = arguments.length; u < c; ++u) void 0 !== (f = arguments[u]) && this.$set(i[u].name, f);
                          else this.$set(r)
                        }
                      },
                      a = s.prototype = Object.create(t.Builder.Message.prototype);
                    a.add = function(e, r, i) {
                      var o = n._fieldsByName[e];
                      if (!i) {
                        if (!o) throw Error(this + "#" + e + " is undefined");
                        if (!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + o.toString(!0));
                        if (!o.repeated) throw Error(this + "#" + e + " is not a repeated field");
                        r = o.verifyValue(r, !0)
                      }
                      return null === this[e] && (this[e] = []), this[e].push(r), this
                    }, a.$add = a.add, a.set = function(e, r, i) {
                      if (e && "object" == typeof e) {
                        i = r;
                        for (var o in e) e.hasOwnProperty(o) && void 0 !== (r = e[o]) && void 0 === n._oneofsByName[o] && this.$set(o, r, i);
                        return this
                      }
                      var s = n._fieldsByName[e];
                      if (i) this[e] = r;
                      else {
                        if (!s) throw Error(this + "#" + e + " is not a field: undefined");
                        if (!(s instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                        this[s.name] = r = s.verifyValue(r)
                      }
                      if (s && s.oneof) {
                        var a = this[s.oneof.name];
                        null !== r ? (null !== a && a !== s.name && (this[a] = null), this[s.oneof.name] = s.name) : a === e && (this[s.oneof.name] = null)
                      }
                      return this
                    }, a.$set = a.set, a.get = function(e, r) {
                      if (r) return this[e];
                      var i = n._fieldsByName[e];
                      if (!(i && i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                      if (!(i instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: " + i.toString(!0));
                      return this[i.name]
                    }, a.$get = a.get;
                    for (var u = 0; u < i.length; u++) {
                      var c = i[u];
                      c instanceof t.Reflect.Message.ExtensionField || n.builder.options.populateAccessors && function(e) {
                        var t = e.originalName.replace(/(_[a-zA-Z])/g, function(e) {
                          return e.toUpperCase().replace("_", "")
                        });
                        t = t.substring(0, 1).toUpperCase() + t.substring(1);
                        var r = e.originalName.replace(/([A-Z])/g, function(e) {
                            return "_" + e
                          }),
                          i = function(t, n) {
                            return this[e.name] = n ? t : e.verifyValue(t), this
                          },
                          o = function() {
                            return this[e.name]
                          };
                        null === n.getChild("set" + t) && (a["set" + t] = i), null === n.getChild("set_" + r) && (a["set_" + r] = i), null === n.getChild("get" + t) && (a["get" + t] = o), null === n.getChild("get_" + r) && (a["get_" + r] = o)
                      }(c)
                    }
                    return a.encode = function(t, r) {
                      "boolean" == typeof t && (r = t, t = void 0);
                      var i = !1;
                      t || (t = new e, i = !0);
                      var o = t.littleEndian;
                      try {
                        return n.encode(this, t.LE(), r), (i ? t.flip() : t).LE(o)
                      } catch (e) {
                        throw t.LE(o), e
                      }
                    }, s.encode = function(e, t, n) {
                      return new s(e).encode(t, n)
                    }, a.calculate = function() {
                      return n.calculate(this)
                    }, a.encodeDelimited = function(t, r) {
                      var i = !1;
                      t || (t = new e, i = !0);
                      var o = (new e).LE();
                      return n.encode(this, o, r).flip(), t.writeVarint32(o.remaining()), t.append(o), i ? t.flip() : t
                    }, a.encodeAB = function() {
                      try {
                        return this.encode().toArrayBuffer()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e
                      }
                    }, a.toArrayBuffer = a.encodeAB, a.encodeNB = function() {
                      try {
                        return this.encode().toBuffer()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBuffer()), e
                      }
                    }, a.toBuffer = a.encodeNB, a.encode64 = function() {
                      try {
                        return this.encode().toBase64()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toBase64()), e
                      }
                    }, a.toBase64 = a.encode64, a.encodeHex = function() {
                      try {
                        return this.encode().toHex()
                      } catch (e) {
                        throw e.encoded && (e.encoded = e.encoded.toHex()), e
                      }
                    }, a.toHex = a.encodeHex, a.toRaw = function(e, t) {
                      return r(this, !!e, !!t, this.$type)
                    }, a.encodeJSON = function() {
                      return JSON.stringify(r(this, !0, !0, this.$type))
                    }, s.decode = function(t, r, i) {
                      "string" == typeof r && (i = r, r = -1), "string" == typeof t ? t = e.wrap(t, i || "base64") : e.isByteBuffer(t) || (t = e.wrap(t));
                      var o = t.littleEndian;
                      try {
                        var s = n.decode(t.LE(), r);
                        return t.LE(o), s
                      } catch (e) {
                        throw t.LE(o), e
                      }
                    }, s.decodeDelimited = function(t, r) {
                      if ("string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), t.remaining() < 1) return null;
                      var i = t.offset,
                        o = t.readVarint32();
                      if (t.remaining() < o) return t.offset = i, null;
                      try {
                        var s = n.decode(t.slice(t.offset, t.offset + o).LE());
                        return t.offset += o, s
                      } catch (e) {
                        throw t.offset += o, e
                      }
                    }, s.decode64 = function(e) {
                      return s.decode(e, "base64")
                    }, s.decodeHex = function(e) {
                      return s.decode(e, "hex")
                    }, s.decodeJSON = function(e) {
                      return new s(JSON.parse(e))
                    }, a.toString = function() {
                      return n.toString()
                    }, Object.defineProperty && (Object.defineProperty(s, "$options", {
                      value: n.buildOpt()
                    }), Object.defineProperty(a, "$options", {
                      value: s.$options
                    }), Object.defineProperty(s, "$type", {
                      value: n
                    }), Object.defineProperty(a, "$type", {
                      value: n
                    })), s
                  }(t, this);
                  this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {};
                  for (var i, o = 0, s = this.children.length; o < s; o++)
                    if ((i = this.children[o]) instanceof g || i instanceof h || i instanceof w) {
                      if (r.hasOwnProperty(i.name)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + i.toString(!0) + " cannot override static property '" + i.name + "'");
                      r[i.name] = i.build()
                    } else if (i instanceof h.Field) i.build(), this._fields.push(i), this._fieldsById[i.id] = i, this._fieldsByName[i.name] = i;
                  else if (i instanceof h.OneOf) this._oneofsByName[i.name] = i;
                  else if (!(i instanceof h.OneOf || i instanceof b)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[o].toString(!0));
                  return this.clazz = r
                }, d.encode = function(e, t, n) {
                  for (var r, i, o = null, s = 0, a = this._fields.length; s < a; ++s) r = this._fields[s], i = e[r.name], r.required && null === i ? null === o && (o = r) : r.encode(n ? i : r.verifyValue(i), t, e);
                  if (null !== o) {
                    var u = Error("Missing at least one required field for " + this.toString(!0) + ": " + o);
                    throw u.encoded = t, u
                  }
                  return t
                }, d.calculate = function(e) {
                  for (var t, n, r = 0, i = 0, o = this._fields.length; i < o; ++i) {
                    if (t = this._fields[i], n = e[t.name], t.required && null === n) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                    r += t.calculate(n, e)
                  }
                  return r
                }, d.decode = function(e, n, r) {
                  "number" != typeof n && (n = -1);
                  for (var o, s, a, u, c = e.offset, l = new this.clazz; e.offset < c + n || -1 === n && e.remaining() > 0;) {
                    if (o = e.readVarint32(), s = 7 & o, a = o >>> 3, s === t.WIRE_TYPES.ENDGROUP) {
                      if (a !== r) throw Error("Illegal group end indicator for " + this.toString(!0) + ": " + a + " (" + (r ? r + " expected" : "not a group") + ")");
                      break
                    }
                    if (u = this._fieldsById[a]) {
                      if (u.repeated && !u.options.packed) l[u.name].push(u.decode(s, e));
                      else if (u.map) {
                        var f = u.decode(s, e);
                        l[u.name].set(f[0], f[1])
                      } else if (l[u.name] = u.decode(s, e), u.oneof) {
                        var h = l[u.oneof.name];
                        null !== h && h !== u.name && (l[h] = null), l[u.oneof.name] = u.name
                      }
                    } else switch (s) {
                      case t.WIRE_TYPES.VARINT:
                        e.readVarint32();
                        break;
                      case t.WIRE_TYPES.BITS32:
                        e.offset += 4;
                        break;
                      case t.WIRE_TYPES.BITS64:
                        e.offset += 8;
                        break;
                      case t.WIRE_TYPES.LDELIM:
                        var d = e.readVarint32();
                        e.offset += d;
                        break;
                      case t.WIRE_TYPES.STARTGROUP:
                        for (; i(a, e););
                        break;
                      default:
                        throw Error("Illegal wire type for unknown field " + a + " in " + this.toString(!0) + "#decode: " + s)
                    }
                  }
                  for (var p = 0, y = this._fields.length; p < y; ++p)
                    if (u = this._fields[p], null === l[u.name])
                      if ("proto3" === this.syntax) l[u.name] = u.defaultValue;
                      else {
                        if (u.required) {
                          var v = Error("Missing at least one required field for " + this.toString(!0) + ": " + u.name);
                          throw v.decoded = l, v
                        }
                        t.populateDefaults && null !== u.defaultValue && (l[u.name] = u.defaultValue)
                      }
                  return l
                }, o.Message = h;
                var p = function(e, n, r, i, o, a, u, c, l, f) {
                    s.call(this, e, n, a), this.className = "Message.Field", this.required = "required" === r, this.repeated = "repeated" === r, this.map = "map" === r, this.keyType = i || null, this.type = o, this.resolvedType = null, this.id = u, this.options = c || {}, this.defaultValue = null, this.oneof = l || null, this.syntax = f || "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof h.ExtensionField || (this.name = t.Util.toCamelCase(this.name))
                  },
                  y = p.prototype = Object.create(s.prototype);
                y.build = function() {
                  this.element = new l(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new l(this.keyType, void 0, !0, this.syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options.default)) : this.defaultValue = l.defaultFieldValue(this.type)
                }, y.verifyValue = function(e, n) {
                  function r(e, t) {
                    throw Error("Illegal value for " + i.toString(!0) + " of type " + i.type.name + ": " + e + " (" + t + ")")
                  }
                  n = n || !1;
                  var i = this;
                  if (null === e) return this.required && r(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && r(typeof e, "proto3 field without field presence cannot be null"), null;
                  var o;
                  if (this.repeated && !n) {
                    Array.isArray(e) || (e = [e]);
                    var s = [];
                    for (o = 0; o < e.length; o++) s.push(this.element.verifyValue(e[o]));
                    return s
                  }
                  return this.map && !n ? e instanceof t.Map ? e : (e instanceof Object || r(typeof e, "expected ProtoBuf.Map or raw object for map field"), new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && r(typeof e, "no array expected"), this.element.verifyValue(e))
                }, y.hasWirePresence = function(e, n) {
                  if ("proto3" !== this.syntax) return null !== e;
                  if (this.oneof && n[this.oneof.name] === this.name) return !0;
                  switch (this.type) {
                    case t.TYPES.int32:
                    case t.TYPES.sint32:
                    case t.TYPES.sfixed32:
                    case t.TYPES.uint32:
                    case t.TYPES.fixed32:
                      return 0 !== e;
                    case t.TYPES.int64:
                    case t.TYPES.sint64:
                    case t.TYPES.sfixed64:
                    case t.TYPES.uint64:
                    case t.TYPES.fixed64:
                      return 0 !== e.low || 0 !== e.high;
                    case t.TYPES.bool:
                      return e;
                    case t.TYPES.float:
                    case t.TYPES.double:
                      return 0 !== e;
                    case t.TYPES.string:
                      return e.length > 0;
                    case t.TYPES.bytes:
                      return e.remaining() > 0;
                    case t.TYPES.enum:
                      return 0 !== e;
                    case t.TYPES.message:
                      return null !== e;
                    default:
                      return !0
                  }
                }, y.encode = function(n, r, i) {
                  if (null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                  if (null === n || this.repeated && 0 == n.length) return r;
                  try {
                    if (this.repeated) {
                      var o;
                      if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.ensureCapacity(r.offset += 1);
                        var s = r.offset;
                        for (o = 0; o < n.length; o++) this.element.encodeValue(this.id, n[o], r);
                        var a = r.offset - s,
                          u = e.calculateVarint32(a);
                        if (u > 1) {
                          var c = r.slice(s, r.offset);
                          s += u - 1, r.offset = s, r.append(c)
                        }
                        r.writeVarint32(a, s - u)
                      } else
                        for (o = 0; o < n.length; o++) r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n[o], r)
                    } else this.map ? n.forEach(function(n, i, o) {
                      var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, i) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                      r.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r.writeVarint32(s), r.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, i, r), r.writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, n, r)
                    }, this) : this.hasWirePresence(n, i) && (r.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, n, r))
                  } catch (e) {
                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")")
                  }
                  return r
                }, y.calculate = function(n, r) {
                  if (n = this.verifyValue(n), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                  if (null === n || this.repeated && 0 == n.length) return 0;
                  var i = 0;
                  try {
                    if (this.repeated) {
                      var o, s;
                      if (this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                        for (i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), s = 0, o = 0; o < n.length; o++) s += this.element.calculateLength(this.id, n[o]);
                        i += e.calculateVarint32(s), i += s
                      } else
                        for (o = 0; o < n.length; o++) i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n[o])
                    } else this.map ? n.forEach(function(n, r, o) {
                      var s = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(16 | this.type.wireType) + this.element.calculateLength(2, n);
                      i += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), i += e.calculateVarint32(s), i += s
                    }, this) : this.hasWirePresence(n, r) && (i += e.calculateVarint32(this.id << 3 | this.type.wireType), i += this.element.calculateLength(this.id, n))
                  } catch (e) {
                    throw Error("Illegal value for " + this.toString(!0) + ": " + n + " (" + e + ")")
                  }
                  return i
                }, y.decode = function(e, n, r) {
                  var i, o;
                  if (!(!this.map && e == this.type.wireType || !r && this.repeated && this.options.packed && e == t.WIRE_TYPES.LDELIM || this.map && e == t.WIRE_TYPES.LDELIM)) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType + " expected)");
                  if (e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !r) {
                    o = n.readVarint32(), o = n.offset + o;
                    for (var s = []; n.offset < o;) s.push(this.decode(this.type.wireType, n, !0));
                    return s
                  }
                  if (this.map) {
                    var a = l.defaultFieldValue(this.keyType);
                    if (i = l.defaultFieldValue(this.type), o = n.readVarint32(), n.remaining() < o) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + o + " required but got only " + n.remaining());
                    var u = n.clone();
                    for (u.limit = u.offset + o, n.offset += o; u.remaining() > 0;) {
                      var c = u.readVarint32();
                      e = 7 & c;
                      var f = c >>> 3;
                      if (1 === f) a = this.keyElement.decode(u, e, f);
                      else {
                        if (2 !== f) throw Error("Unexpected tag in map field key/value submessage");
                        i = this.element.decode(u, e, f)
                      }
                    }
                    return [a, i]
                  }
                  return this.element.decode(n, e, this.id)
                }, o.Message.Field = p;
                var v = function(e, t, n, r, i, o, s) {
                  p.call(this, e, t, n, null, r, i, o, s), this.extension
                };
                v.prototype = Object.create(p.prototype), o.Message.ExtensionField = v;
                var m = function(e, t, n) {
                  s.call(this, e, t, n), this.fields = []
                };
                o.Message.OneOf = m;
                var g = function(e, t, n, r, i) {
                  u.call(this, e, t, n, r, i), this.className = "Enum", this.object = null
                };
                g.getName = function(e, t) {
                  for (var n, r = Object.keys(e), i = 0; i < r.length; ++i)
                    if (e[n = r[i]] === t) return n;
                  return null
                }, (g.prototype = Object.create(u.prototype)).build = function(e) {
                  if (this.object && !e) return this.object;
                  for (var n = new t.Builder.Enum, r = this.getChildren(g.Value), i = 0, o = r.length; i < o; ++i) n[r[i].name] = r[i].id;
                  return Object.defineProperty && Object.defineProperty(n, "$options", {
                    value: this.buildOpt(),
                    enumerable: !1
                  }), this.object = n
                }, o.Enum = g;
                var _ = function(e, t, n, r) {
                  s.call(this, e, t, n), this.className = "Enum.Value", this.id = r
                };
                _.prototype = Object.create(s.prototype), o.Enum.Value = _;
                var b = function(e, t, n, r) {
                  s.call(this, e, t, n), this.field = r
                };
                b.prototype = Object.create(s.prototype), o.Extension = b;
                var w = function(e, t, n, r) {
                  u.call(this, e, t, n, r), this.className = "Service", this.clazz = null
                };
                (w.prototype = Object.create(u.prototype)).build = function(n) {
                  return this.clazz && !n ? this.clazz : this.clazz = function(t, n) {
                    for (var r = function(e) {
                        t.Builder.Service.call(this), this.rpcImpl = e || function(e, t, n) {
                          setTimeout(n.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                        }
                      }, i = r.prototype = Object.create(t.Builder.Service.prototype), o = n.getChildren(t.Reflect.Service.RPCMethod), s = 0; s < o.length; s++) ! function(t) {
                      i[t.name] = function(r, i) {
                        try {
                          try {
                            r = t.resolvedRequestType.clazz.decode(e.wrap(r))
                          } catch (e) {
                            if (!(e instanceof TypeError)) throw e
                          }
                          if (null === r || "object" != typeof r) throw Error("Illegal arguments");
                          r instanceof t.resolvedRequestType.clazz || (r = new t.resolvedRequestType.clazz(r)), this.rpcImpl(t.fqn(), r, function(e, r) {
                            if (e) return void i(e);
                            null === r && (r = "");
                            try {
                              r = t.resolvedResponseType.clazz.decode(r)
                            } catch (e) {}
                            if (!(r && r instanceof t.resolvedResponseType.clazz)) return void i(Error("Illegal response type received in service method " + n.name + "#" + t.name));
                            i(null, r)
                          })
                        } catch (e) {
                          setTimeout(i.bind(this, e), 0)
                        }
                      }, r[t.name] = function(e, n, i) {
                        new r(e)[t.name](n, i)
                      }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", {
                        value: t.buildOpt()
                      }), Object.defineProperty(i[t.name], "$options", {
                        value: r[t.name].$options
                      }))
                    }(o[s]);
                    return Object.defineProperty && (Object.defineProperty(r, "$options", {
                      value: n.buildOpt()
                    }), Object.defineProperty(i, "$options", {
                      value: r.$options
                    }), Object.defineProperty(r, "$type", {
                      value: n
                    }), Object.defineProperty(i, "$type", {
                      value: n
                    })), r
                  }(t, this)
                }, o.Service = w;
                var E = function(e, t, n, r) {
                  s.call(this, e, t, n), this.className = "Service.Method", this.options = r || {}
                };
                (E.prototype = Object.create(s.prototype)).buildOpt = c.buildOpt, o.Service.Method = E;
                var S = function(e, t, n, r, i, o, s, a) {
                  E.call(this, e, t, n, a), this.className = "Service.RPCMethod", this.requestName = r, this.responseName = i, this.requestStream = o, this.responseStream = s, this.resolvedRequestType = null, this.resolvedResponseType = null
                };
                return S.prototype = Object.create(E.prototype), o.Service.RPCMethod = S, o
              }(n), n.Builder = function(e, t, n) {
                function r(e) {
                  e.messages && e.messages.forEach(function(t) {
                    t.syntax = e.syntax, r(t)
                  }), e.enums && e.enums.forEach(function(t) {
                    t.syntax = e.syntax
                  })
                }
                var i = function(e) {
                    this.ns = new n.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this.options = e || {}
                  },
                  o = i.prototype;
                return i.isMessage = function(e) {
                  return "string" == typeof e.name && (void 0 === e.values && void 0 === e.rpc)
                }, i.isMessageField = function(e) {
                  return "string" == typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id
                }, i.isEnum = function(e) {
                  return "string" == typeof e.name && !(void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length)
                }, i.isService = function(e) {
                  return !("string" != typeof e.name || "object" != typeof e.rpc || !e.rpc)
                }, i.isExtend = function(e) {
                  return "string" == typeof e.ref
                }, o.reset = function() {
                  return this.ptr = this.ns, this
                }, o.define = function(e) {
                  if ("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                  return e.split(".").forEach(function(e) {
                    var t = this.ptr.getChild(e);
                    null === t && this.ptr.addChild(t = new n.Namespace(this, this.ptr, e)), this.ptr = t
                  }, this), this
                }, o.create = function(t) {
                  if (!t) return this;
                  if (Array.isArray(t)) {
                    if (0 === t.length) return this;
                    t = t.slice()
                  } else t = [t];
                  for (var r = [t]; r.length > 0;) {
                    if (t = r.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
                    for (; t.length > 0;) {
                      var o = t.shift();
                      if (i.isMessage(o)) {
                        var s = new n.Message(this, this.ptr, o.name, o.options, o.isGroup, o.syntax),
                          a = {};
                        o.oneofs && Object.keys(o.oneofs).forEach(function(e) {
                          s.addChild(a[e] = new n.Message.OneOf(this, s, e))
                        }, this), o.fields && o.fields.forEach(function(e) {
                          if (null !== s.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + s.name + ": " + e.id);
                          if (e.options && "object" != typeof e.options) throw Error("illegal field options in " + s.name + "#" + e.name);
                          var t = null;
                          if ("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + s.name + "#" + e.name + ": " + e.oneof);
                          e = new n.Message.Field(this, s, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, o.syntax), t && t.fields.push(e), s.addChild(e)
                        }, this);
                        var u = [];
                        if (o.enums && o.enums.forEach(function(e) {
                            u.push(e)
                          }), o.messages && o.messages.forEach(function(e) {
                            u.push(e)
                          }), o.services && o.services.forEach(function(e) {
                            u.push(e)
                          }), o.extensions && ("number" == typeof o.extensions[0] ? s.extensions = [o.extensions] : s.extensions = o.extensions), this.ptr.addChild(s), u.length > 0) {
                          r.push(t), t = u, u = null, this.ptr = s, s = null;
                          continue
                        }
                        u = null
                      } else if (i.isEnum(o)) s = new n.Enum(this, this.ptr, o.name, o.options, o.syntax), o.values.forEach(function(e) {
                        s.addChild(new n.Enum.Value(this, s, e.name, e.id))
                      }, this), this.ptr.addChild(s);
                      else if (i.isService(o)) s = new n.Service(this, this.ptr, o.name, o.options), Object.keys(o.rpc).forEach(function(e) {
                        var t = o.rpc[e];
                        s.addChild(new n.Service.RPCMethod(this, s, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options))
                      }, this), this.ptr.addChild(s);
                      else {
                        if (!i.isExtend(o)) throw Error("not a valid definition: " + JSON.stringify(o));
                        if (s = this.ptr.resolve(o.ref, !0)) o.fields.forEach(function(t) {
                          if (null !== s.getChild(0 | t.id)) throw Error("duplicate extended field id in " + s.name + ": " + t.id);
                          if (s.extensions) {
                            var r = !1;
                            if (s.extensions.forEach(function(e) {
                                t.id >= e[0] && t.id <= e[1] && (r = !0)
                              }), !r) throw Error("illegal extended field id in " + s.name + ": " + t.id + " (not within valid ranges)")
                          }
                          var i = t.name;
                          this.options.convertFieldsToCamelCase && (i = e.Util.toCamelCase(i));
                          var o = new n.Message.ExtensionField(this, s, t.rule, t.type, this.ptr.fqn() + "." + i, t.id, t.options),
                            a = new n.Extension(this, this.ptr, t.name, o);
                          o.extension = a, this.ptr.addChild(a), s.addChild(o)
                        }, this);
                        else if (!/\.?google\.protobuf\./.test(o.ref)) throw Error("extended message " + o.ref + " is not defined")
                      }
                      o = null, s = null
                    }
                    t = null, this.ptr = this.ptr.parent
                  }
                  return this.resolved = !1, this.result = null, this
                }, o.import = function(t, n) {
                  var i = "/";
                  if ("string" == typeof n) {
                    if (e.Util.IS_NODE && (n = Do.resolve(n)), !0 === this.files[n]) return this.reset();
                    this.files[n] = !0
                  } else if ("object" == typeof n) {
                    var o = n.root;
                    e.Util.IS_NODE && (o = Do.resolve(o)), (o.indexOf("\\") >= 0 || n.file.indexOf("\\") >= 0) && (i = "\\");
                    var s;
                    if (s = e.Util.IS_NODE ? Do.join(o, n.file) : o + i + n.file, !0 === this.files[s]) return this.reset();
                    this.files[s] = !0
                  }
                  if (t.imports && t.imports.length > 0) {
                    var a, u = !1;
                    "object" == typeof n ? (this.importRoot = n.root, u = !0, a = this.importRoot, n = n.file, (a.indexOf("\\") >= 0 || n.indexOf("\\") >= 0) && (i = "\\")) : "string" == typeof n ? this.importRoot ? a = this.importRoot : n.indexOf("/") >= 0 ? "" === (a = n.replace(/\/[^\/]*$/, "")) && (a = "/") : n.indexOf("\\") >= 0 ? (a = n.replace(/\\[^\\]*$/, ""), i = "\\") : a = "." : a = null;
                    for (var c = 0; c < t.imports.length; c++)
                      if ("string" == typeof t.imports[c]) {
                        if (!a) throw Error("cannot determine import root");
                        var l = t.imports[c];
                        if ("google/protobuf/descriptor.proto" === l) continue;
                        if (l = e.Util.IS_NODE ? Do.join(a, l) : a + i + l, !0 === this.files[l]) continue;
                        /\.proto$/i.test(l) && !e.DotProto && (l = l.replace(/\.proto$/, ".json"));
                        var f = e.Util.fetch(l);
                        if (null === f) throw Error("failed to import '" + l + "' in '" + n + "': file not found");
                        /\.json$/i.test(l) ? this.import(JSON.parse(f + ""), l) : this.import(e.DotProto.Parser.parse(f), l)
                      } else n ? /\.(\w+)$/.test(n) ? this.import(t.imports[c], n.replace(/^(.+)\.(\w+)$/, function(e, t, n) {
                        return t + "_import" + c + "." + n
                      })) : this.import(t.imports[c], n + "_import" + c) : this.import(t.imports[c]);
                    u && (this.importRoot = null)
                  }
                  t.package && this.define(t.package), t.syntax && r(t);
                  var h = this.ptr;
                  return t.options && Object.keys(t.options).forEach(function(e) {
                    h.options[e] = t.options[e]
                  }), t.messages && (this.create(t.messages), this.ptr = h), t.enums && (this.create(t.enums), this.ptr = h), t.services && (this.create(t.services), this.ptr = h), t.extends && this.create(t.extends), this.reset()
                }, o.resolveAll = function() {
                  var r;
                  if (null == this.ptr || "object" == typeof this.ptr.type) return this;
                  if (this.ptr instanceof n.Namespace) this.ptr.children.forEach(function(e) {
                    this.ptr = e, this.resolveAll()
                  }, this);
                  else if (this.ptr instanceof n.Message.Field) {
                    if (t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];
                    else {
                      if (!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                      if (!(r = (this.ptr instanceof n.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                      if (this.ptr.resolvedType = r, r instanceof n.Enum) {
                        if (this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== r.syntax) throw Error("proto3 message cannot reference proto2 enum")
                      } else {
                        if (!(r instanceof n.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                        this.ptr.type = r.isGroup ? e.TYPES.group : e.TYPES.message
                      }
                    }
                    if (this.ptr.map) {
                      if (!t.TYPE.test(this.ptr.keyType)) throw Error("illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                      this.ptr.keyType = e.TYPES[this.ptr.keyType]
                    }
                    "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0)
                  } else if (this.ptr instanceof e.Reflect.Service.Method) {
                    if (!(this.ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                    if (!((r = this.ptr.parent.resolve(this.ptr.requestName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                    if (this.ptr.resolvedRequestType = r, !((r = this.ptr.parent.resolve(this.ptr.responseName, !0)) && r instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                    this.ptr.resolvedResponseType = r
                  } else if (!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect.Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
                  return this.reset()
                }, o.build = function(e) {
                  if (this.reset(), this.resolved || (this.resolveAll(), this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;
                  for (var t = "string" == typeof e ? e.split(".") : e, n = this.result, r = 0; r < t.length; r++) {
                    if (!n[t[r]]) {
                      n = null;
                      break
                    }
                    n = n[t[r]]
                  }
                  return n
                }, o.lookup = function(e, t) {
                  return e ? this.ns.resolve(e, t) : this.ns
                }, o.toString = function() {
                  return "Builder"
                }, i.Message = function() {}, i.Enum = function() {}, i.Service = function() {}, i
              }(n, n.Lang, n.Reflect), n.Map = function(e, t) {
                function n(e) {
                  var t = 0;
                  return {
                    next: function() {
                      return t < e.length ? {
                        done: !1,
                        value: e[t++]
                      } : {
                        done: !0
                      }
                    }
                  }
                }
                var r = function(e, n) {
                    if (!e.map) throw Error("field is not a map");
                    if (this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), this.valueElem = new t.Element(e.type, e.resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
                        get: function() {
                          return Object.keys(this.map).length
                        }
                      }), n)
                      for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                        var o = this.keyElem.valueFromString(r[i]),
                          s = this.valueElem.verifyValue(n[r[i]]);
                        this.map[this.keyElem.valueToString(o)] = {
                          key: o,
                          value: s
                        }
                      }
                  },
                  i = r.prototype;
                return i.clear = function() {
                  this.map = {}
                }, i.delete = function(e) {
                  var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                    n = t in this.map;
                  return delete this.map[t], n
                }, i.entries = function() {
                  for (var e, t = [], r = Object.keys(this.map), i = 0; i < r.length; i++) t.push([(e = this.map[r[i]]).key, e.value]);
                  return n(t)
                }, i.keys = function() {
                  for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].key);
                  return n(e)
                }, i.values = function() {
                  for (var e = [], t = Object.keys(this.map), r = 0; r < t.length; r++) e.push(this.map[t[r]].value);
                  return n(e)
                }, i.forEach = function(e, t) {
                  for (var n, r = Object.keys(this.map), i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]]).value, n.key, this)
                }, i.set = function(e, t) {
                  var n = this.keyElem.verifyValue(e),
                    r = this.valueElem.verifyValue(t);
                  return this.map[this.keyElem.valueToString(n)] = {
                    key: n,
                    value: r
                  }, this
                }, i.get = function(e) {
                  var t = this.keyElem.valueToString(this.keyElem.verifyValue(e));
                  if (t in this.map) return this.map[t].value
                }, i.has = function(e) {
                  return this.keyElem.valueToString(this.keyElem.verifyValue(e)) in this.map
                }, r
              }(0, n.Reflect), n.newBuilder = function(e) {
                return e = e || {}, void 0 === e.convertFieldsToCamelCase && (e.convertFieldsToCamelCase = n.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = n.populateAccessors), new n.Builder(e)
              }, n.loadJson = function(e, t, r) {
                return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (r = t, t = null), t && "object" == typeof t || (t = n.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t.import(e, r), t.resolveAll(), t
              }, n.loadJsonFile = function(e, t, r) {
                if (t && "object" == typeof t ? (r = t, t = null) : t && "function" == typeof t || (t = null), t) return n.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file, function(i) {
                  if (null === i) return void t(Error("Failed to fetch file"));
                  try {
                    t(null, n.loadJson(JSON.parse(i), r, e))
                  } catch (e) {
                    t(e)
                  }
                });
                var i = n.Util.fetch("object" == typeof e ? e.root + "/" + e.file : e);
                return null === i ? null : n.loadJson(JSON.parse(i), r, e)
              }, n
            })
          }),
          Bo = Mo.newBuilder({}).import({
            package: "push_server.messages2",
            syntax: "proto2",
            options: {
              objc_class_prefix: "AVIM"
            },
            messages: [{
              name: "JsonObjectMessage",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "data",
                id: 1
              }]
            }, {
              name: "UnreadTuple",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "required",
                type: "int32",
                name: "unread",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "from",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 6
              }, {
                rule: "optional",
                type: "int64",
                name: "patchTimestamp",
                id: 7
              }, {
                rule: "optional",
                type: "bool",
                name: "mentioned",
                id: 8
              }, {
                rule: "optional",
                type: "bytes",
                name: "binaryMsg",
                id: 9
              }, {
                rule: "optional",
                type: "int32",
                name: "convType",
                id: 10
              }]
            }, {
              name: "LogItem",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "from",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "msgId",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "ackAt",
                id: 5
              }, {
                rule: "optional",
                type: "int64",
                name: "readAt",
                id: 6
              }, {
                rule: "optional",
                type: "int64",
                name: "patchTimestamp",
                id: 7
              }, {
                rule: "optional",
                type: "bool",
                name: "mentionAll",
                id: 8
              }, {
                rule: "repeated",
                type: "string",
                name: "mentionPids",
                id: 9
              }, {
                rule: "optional",
                type: "bool",
                name: "bin",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "convType",
                id: 11
              }]
            }, {
              name: "ConvMemberInfo",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "pid",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "role",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "infoId",
                id: 3
              }]
            }, {
              name: "DataCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "string",
                name: "ids",
                id: 1
              }, {
                rule: "repeated",
                type: "JsonObjectMessage",
                name: "msg",
                id: 2
              }, {
                rule: "optional",
                type: "bool",
                name: "offline",
                id: 3
              }]
            }, {
              name: "SessionCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "int64",
                name: "t",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "ua",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "r",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "tag",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "deviceId",
                id: 7
              }, {
                rule: "repeated",
                type: "string",
                name: "sessionPeerIds",
                id: 8
              }, {
                rule: "repeated",
                type: "string",
                name: "onlineSessionPeerIds",
                id: 9
              }, {
                rule: "optional",
                type: "string",
                name: "st",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "stTtl",
                id: 11
              }, {
                rule: "optional",
                type: "int32",
                name: "code",
                id: 12
              }, {
                rule: "optional",
                type: "string",
                name: "reason",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "deviceToken",
                id: 14
              }, {
                rule: "optional",
                type: "bool",
                name: "sp",
                id: 15
              }, {
                rule: "optional",
                type: "string",
                name: "detail",
                id: 16
              }, {
                rule: "optional",
                type: "int64",
                name: "lastUnreadNotifTime",
                id: 17
              }, {
                rule: "optional",
                type: "int64",
                name: "lastPatchTime",
                id: 18
              }, {
                rule: "optional",
                type: "int64",
                name: "configBitmap",
                id: 19
              }]
            }, {
              name: "ErrorCommand",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "int32",
                name: "code",
                id: 1
              }, {
                rule: "required",
                type: "string",
                name: "reason",
                id: 2
              }, {
                rule: "optional",
                type: "int32",
                name: "appCode",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "detail",
                id: 4
              }, {
                rule: "repeated",
                type: "string",
                name: "pids",
                id: 5
              }]
            }, {
              name: "DirectCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "msg",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "uid",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "fromPeerId",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "offline",
                id: 5
              }, {
                rule: "optional",
                type: "bool",
                name: "hasMore",
                id: 6
              }, {
                rule: "repeated",
                type: "string",
                name: "toPeerIds",
                id: 7
              }, {
                rule: "optional",
                type: "bool",
                name: "r",
                id: 10
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 11
              }, {
                rule: "optional",
                type: "string",
                name: "id",
                id: 12
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "dt",
                id: 14
              }, {
                rule: "optional",
                type: "string",
                name: "roomId",
                id: 15
              }, {
                rule: "optional",
                type: "string",
                name: "pushData",
                id: 16
              }, {
                rule: "optional",
                type: "bool",
                name: "will",
                id: 17
              }, {
                rule: "optional",
                type: "int64",
                name: "patchTimestamp",
                id: 18
              }, {
                rule: "optional",
                type: "bytes",
                name: "binaryMsg",
                id: 19
              }, {
                rule: "repeated",
                type: "string",
                name: "mentionPids",
                id: 20
              }, {
                rule: "optional",
                type: "bool",
                name: "mentionAll",
                id: 21
              }, {
                rule: "optional",
                type: "int32",
                name: "convType",
                id: 22
              }]
            }, {
              name: "AckCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "int32",
                name: "code",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "reason",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "uid",
                id: 6
              }, {
                rule: "optional",
                type: "int64",
                name: "fromts",
                id: 7
              }, {
                rule: "optional",
                type: "int64",
                name: "tots",
                id: 8
              }, {
                rule: "optional",
                type: "string",
                name: "type",
                id: 9
              }, {
                rule: "repeated",
                type: "string",
                name: "ids",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "appCode",
                id: 11
              }]
            }, {
              name: "UnreadCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "UnreadTuple",
                name: "convs",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "notifTime",
                id: 2
              }]
            }, {
              name: "ConvCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "string",
                name: "m",
                id: 1
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 2
              }, {
                rule: "optional",
                type: "bool",
                name: "unique",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "cdate",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "initBy",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "sort",
                id: 7
              }, {
                rule: "optional",
                type: "int32",
                name: "limit",
                id: 8
              }, {
                rule: "optional",
                type: "int32",
                name: "skip",
                id: 9
              }, {
                rule: "optional",
                type: "int32",
                name: "flag",
                id: 10
              }, {
                rule: "optional",
                type: "int32",
                name: "count",
                id: 11
              }, {
                rule: "optional",
                type: "string",
                name: "udate",
                id: 12
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 14
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 15
              }, {
                rule: "optional",
                type: "bool",
                name: "statusSub",
                id: 16
              }, {
                rule: "optional",
                type: "bool",
                name: "statusPub",
                id: 17
              }, {
                rule: "optional",
                type: "int32",
                name: "statusTTL",
                id: 18
              }, {
                rule: "optional",
                type: "string",
                name: "uniqueId",
                id: 19
              }, {
                rule: "optional",
                type: "string",
                name: "targetClientId",
                id: 20
              }, {
                rule: "optional",
                type: "int64",
                name: "maxReadTimestamp",
                id: 21
              }, {
                rule: "optional",
                type: "int64",
                name: "maxAckTimestamp",
                id: 22
              }, {
                rule: "optional",
                type: "bool",
                name: "queryAllMembers",
                id: 23
              }, {
                rule: "repeated",
                type: "MaxReadTuple",
                name: "maxReadTuples",
                id: 24
              }, {
                rule: "repeated",
                type: "string",
                name: "cids",
                id: 25
              }, {
                rule: "optional",
                type: "ConvMemberInfo",
                name: "info",
                id: 26
              }, {
                rule: "optional",
                type: "bool",
                name: "tempConv",
                id: 27
              }, {
                rule: "optional",
                type: "int32",
                name: "tempConvTTL",
                id: 28
              }, {
                rule: "repeated",
                type: "string",
                name: "tempConvIds",
                id: 29
              }, {
                rule: "repeated",
                type: "string",
                name: "allowedPids",
                id: 30
              }, {
                rule: "repeated",
                type: "ErrorCommand",
                name: "failedPids",
                id: 31
              }, {
                rule: "optional",
                type: "string",
                name: "next",
                id: 40
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "results",
                id: 100
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "where",
                id: 101
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "attr",
                id: 103
              }]
            }, {
              name: "RoomCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "roomId",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 4
              }, {
                rule: "optional",
                type: "bool",
                name: "transient",
                id: 5
              }, {
                rule: "repeated",
                type: "string",
                name: "roomPeerIds",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "byPeerId",
                id: 7
              }]
            }, {
              name: "LogsCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "int32",
                name: "l",
                id: 2
              }, {
                rule: "optional",
                type: "int32",
                name: "limit",
                id: 3
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 4
              }, {
                rule: "optional",
                type: "int64",
                name: "tt",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "tmid",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 7
              }, {
                rule: "optional",
                type: "string",
                name: "checksum",
                id: 8
              }, {
                rule: "optional",
                type: "bool",
                name: "stored",
                id: 9
              }, {
                rule: "optional",
                type: "QueryDirection",
                name: "direction",
                id: 10,
                options: {
                  default: "OLD"
                }
              }, {
                rule: "optional",
                type: "bool",
                name: "tIncluded",
                id: 11
              }, {
                rule: "optional",
                type: "bool",
                name: "ttIncluded",
                id: 12
              }, {
                rule: "optional",
                type: "int32",
                name: "lctype",
                id: 13
              }, {
                rule: "repeated",
                type: "LogItem",
                name: "logs",
                id: 105
              }],
              enums: [{
                name: "QueryDirection",
                syntax: "proto2",
                values: [{
                  name: "OLD",
                  id: 1
                }, {
                  name: "NEW",
                  id: 2
                }]
              }]
            }, {
              name: "RcpCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "id",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 3
              }, {
                rule: "optional",
                type: "bool",
                name: "read",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "from",
                id: 5
              }]
            }, {
              name: "ReadTuple",
              syntax: "proto2",
              fields: [{
                rule: "required",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 3
              }]
            }, {
              name: "MaxReadTuple",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "pid",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "maxAckTimestamp",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "maxReadTimestamp",
                id: 3
              }]
            }, {
              name: "ReadCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "cids",
                id: 2
              }, {
                rule: "repeated",
                type: "ReadTuple",
                name: "convs",
                id: 3
              }]
            }, {
              name: "PresenceCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "StatusType",
                name: "status",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "sessionPeerIds",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "cid",
                id: 3
              }]
            }, {
              name: "ReportCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "bool",
                name: "initiative",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "type",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 3
              }]
            }, {
              name: "PatchItem",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "optional",
                type: "string",
                name: "mid",
                id: 2
              }, {
                rule: "optional",
                type: "int64",
                name: "timestamp",
                id: 3
              }, {
                rule: "optional",
                type: "bool",
                name: "recall",
                id: 4
              }, {
                rule: "optional",
                type: "string",
                name: "data",
                id: 5
              }, {
                rule: "optional",
                type: "int64",
                name: "patchTimestamp",
                id: 6
              }, {
                rule: "optional",
                type: "string",
                name: "from",
                id: 7
              }, {
                rule: "optional",
                type: "bytes",
                name: "binaryMsg",
                id: 8
              }, {
                rule: "optional",
                type: "bool",
                name: "mentionAll",
                id: 9
              }, {
                rule: "repeated",
                type: "string",
                name: "mentionPids",
                id: 10
              }]
            }, {
              name: "PatchCommand",
              syntax: "proto2",
              fields: [{
                rule: "repeated",
                type: "PatchItem",
                name: "patches",
                id: 1
              }, {
                rule: "optional",
                type: "int64",
                name: "lastPatchTime",
                id: 2
              }]
            }, {
              name: "PubsubCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "cid",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "cids",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "topic",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "subtopic",
                id: 4
              }, {
                rule: "repeated",
                type: "string",
                name: "topics",
                id: 5
              }, {
                rule: "repeated",
                type: "string",
                name: "subtopics",
                id: 6
              }, {
                rule: "optional",
                type: "JsonObjectMessage",
                name: "results",
                id: 7
              }]
            }, {
              name: "BlacklistCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "string",
                name: "srcCid",
                id: 1
              }, {
                rule: "repeated",
                type: "string",
                name: "toPids",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "srcPid",
                id: 3
              }, {
                rule: "repeated",
                type: "string",
                name: "toCids",
                id: 4
              }, {
                rule: "optional",
                type: "int32",
                name: "limit",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "next",
                id: 6
              }, {
                rule: "repeated",
                type: "string",
                name: "blockedPids",
                id: 8
              }, {
                rule: "repeated",
                type: "string",
                name: "blockedCids",
                id: 9
              }, {
                rule: "repeated",
                type: "string",
                name: "allowedPids",
                id: 10
              }, {
                rule: "repeated",
                type: "ErrorCommand",
                name: "failedPids",
                id: 11
              }, {
                rule: "optional",
                type: "int64",
                name: "t",
                id: 12
              }, {
                rule: "optional",
                type: "string",
                name: "n",
                id: 13
              }, {
                rule: "optional",
                type: "string",
                name: "s",
                id: 14
              }]
            }, {
              name: "GenericCommand",
              syntax: "proto2",
              fields: [{
                rule: "optional",
                type: "CommandType",
                name: "cmd",
                id: 1
              }, {
                rule: "optional",
                type: "OpType",
                name: "op",
                id: 2
              }, {
                rule: "optional",
                type: "string",
                name: "appId",
                id: 3
              }, {
                rule: "optional",
                type: "string",
                name: "peerId",
                id: 4
              }, {
                rule: "optional",
                type: "int32",
                name: "i",
                id: 5
              }, {
                rule: "optional",
                type: "string",
                name: "installationId",
                id: 6
              }, {
                rule: "optional",
                type: "int32",
                name: "priority",
                id: 7
              }, {
                rule: "optional",
                type: "int32",
                name: "service",
                id: 8
              }, {
                rule: "optional",
                type: "int64",
                name: "serverTs",
                id: 9
              }, {
                rule: "optional",
                type: "DataCommand",
                name: "dataMessage",
                id: 101
              }, {
                rule: "optional",
                type: "SessionCommand",
                name: "sessionMessage",
                id: 102
              }, {
                rule: "optional",
                type: "ErrorCommand",
                name: "errorMessage",
                id: 103
              }, {
                rule: "optional",
                type: "DirectCommand",
                name: "directMessage",
                id: 104
              }, {
                rule: "optional",
                type: "AckCommand",
                name: "ackMessage",
                id: 105
              }, {
                rule: "optional",
                type: "UnreadCommand",
                name: "unreadMessage",
                id: 106
              }, {
                rule: "optional",
                type: "ReadCommand",
                name: "readMessage",
                id: 107
              }, {
                rule: "optional",
                type: "RcpCommand",
                name: "rcpMessage",
                id: 108
              }, {
                rule: "optional",
                type: "LogsCommand",
                name: "logsMessage",
                id: 109
              }, {
                rule: "optional",
                type: "ConvCommand",
                name: "convMessage",
                id: 110
              }, {
                rule: "optional",
                type: "RoomCommand",
                name: "roomMessage",
                id: 111
              }, {
                rule: "optional",
                type: "PresenceCommand",
                name: "presenceMessage",
                id: 112
              }, {
                rule: "optional",
                type: "ReportCommand",
                name: "reportMessage",
                id: 113
              }, {
                rule: "optional",
                type: "PatchCommand",
                name: "patchMessage",
                id: 114
              }, {
                rule: "optional",
                type: "PubsubCommand",
                name: "pubsubMessage",
                id: 115
              }, {
                rule: "optional",
                type: "BlacklistCommand",
                name: "blacklistMessage",
                id: 116
              }]
            }],
            enums: [{
              name: "CommandType",
              syntax: "proto2",
              values: [{
                name: "session",
                id: 0
              }, {
                name: "conv",
                id: 1
              }, {
                name: "direct",
                id: 2
              }, {
                name: "ack",
                id: 3
              }, {
                name: "rcp",
                id: 4
              }, {
                name: "unread",
                id: 5
              }, {
                name: "logs",
                id: 6
              }, {
                name: "error",
                id: 7
              }, {
                name: "login",
                id: 8
              }, {
                name: "data",
                id: 9
              }, {
                name: "room",
                id: 10
              }, {
                name: "read",
                id: 11
              }, {
                name: "presence",
                id: 12
              }, {
                name: "report",
                id: 13
              }, {
                name: "echo",
                id: 14
              }, {
                name: "loggedin",
                id: 15
              }, {
                name: "logout",
                id: 16
              }, {
                name: "loggedout",
                id: 17
              }, {
                name: "patch",
                id: 18
              }, {
                name: "pubsub",
                id: 19
              }, {
                name: "blacklist",
                id: 20
              }]
            }, {
              name: "OpType",
              syntax: "proto2",
              values: [{
                name: "open",
                id: 1
              }, {
                name: "add",
                id: 2
              }, {
                name: "remove",
                id: 3
              }, {
                name: "close",
                id: 4
              }, {
                name: "opened",
                id: 5
              }, {
                name: "closed",
                id: 6
              }, {
                name: "query",
                id: 7
              }, {
                name: "query_result",
                id: 8
              }, {
                name: "conflict",
                id: 9
              }, {
                name: "added",
                id: 10
              }, {
                name: "removed",
                id: 11
              }, {
                name: "refresh",
                id: 12
              }, {
                name: "refreshed",
                id: 13
              }, {
                name: "start",
                id: 30
              }, {
                name: "started",
                id: 31
              }, {
                name: "joined",
                id: 32
              }, {
                name: "members_joined",
                id: 33
              }, {
                name: "left",
                id: 39
              }, {
                name: "members_left",
                id: 40
              }, {
                name: "results",
                id: 42
              }, {
                name: "count",
                id: 43
              }, {
                name: "result",
                id: 44
              }, {
                name: "update",
                id: 45
              }, {
                name: "updated",
                id: 46
              }, {
                name: "mute",
                id: 47
              }, {
                name: "unmute",
                id: 48
              }, {
                name: "status",
                id: 49
              }, {
                name: "members",
                id: 50
              }, {
                name: "max_read",
                id: 51
              }, {
                name: "is_member",
                id: 52
              }, {
                name: "member_info_update",
                id: 53
              }, {
                name: "member_info_updated",
                id: 54
              }, {
                name: "member_info_changed",
                id: 55
              }, {
                name: "join",
                id: 80
              }, {
                name: "invite",
                id: 81
              }, {
                name: "leave",
                id: 82
              }, {
                name: "kick",
                id: 83
              }, {
                name: "reject",
                id: 84
              }, {
                name: "invited",
                id: 85
              }, {
                name: "kicked",
                id: 86
              }, {
                name: "upload",
                id: 100
              }, {
                name: "uploaded",
                id: 101
              }, {
                name: "subscribe",
                id: 120
              }, {
                name: "subscribed",
                id: 121
              }, {
                name: "unsubscribe",
                id: 122
              }, {
                name: "unsubscribed",
                id: 123
              }, {
                name: "is_subscribed",
                id: 124
              }, {
                name: "modify",
                id: 150
              }, {
                name: "modified",
                id: 151
              }, {
                name: "block",
                id: 170
              }, {
                name: "unblock",
                id: 171
              }, {
                name: "blocked",
                id: 172
              }, {
                name: "unblocked",
                id: 173
              }, {
                name: "members_blocked",
                id: 174
              }, {
                name: "members_unblocked",
                id: 175
              }, {
                name: "add_shutup",
                id: 180
              }, {
                name: "remove_shutup",
                id: 181
              }, {
                name: "query_shutup",
                id: 182
              }, {
                name: "shutup_added",
                id: 183
              }, {
                name: "shutup_removed",
                id: 184
              }, {
                name: "shutup_result",
                id: 185
              }, {
                name: "shutuped",
                id: 186
              }, {
                name: "unshutuped",
                id: 187
              }, {
                name: "members_shutuped",
                id: 188
              }, {
                name: "members_unshutuped",
                id: 189
              }]
            }, {
              name: "StatusType",
              syntax: "proto2",
              values: [{
                name: "on",
                id: 1
              }, {
                name: "off",
                id: 2
              }]
            }],
            isNamespace: !0
          }).build(),
          qo = Bo.push_server.messages2,
          Vo = qo.JsonObjectMessage,
          Yo = qo.UnreadTuple,
          Wo = qo.LogItem,
          zo = qo.DataCommand,
          Go = qo.SessionCommand,
          Jo = qo.ErrorCommand,
          Ho = qo.DirectCommand,
          Ko = qo.AckCommand,
          Qo = qo.UnreadCommand,
          $o = qo.ConvCommand,
          Xo = qo.RoomCommand,
          Zo = qo.LogsCommand,
          es = qo.RcpCommand,
          ts = qo.ReadTuple,
          ns = qo.MaxReadTuple,
          rs = qo.ReadCommand,
          is = qo.PresenceCommand,
          os = qo.ReportCommand,
          ss = qo.GenericCommand,
          as = qo.BlacklistCommand,
          us = qo.PatchCommand,
          cs = qo.PatchItem,
          ls = qo.ConvMemberInfo,
          fs = qo.CommandType,
          hs = qo.OpType,
          ds = qo.StatusType,
          ps = Object.freeze({
            JsonObjectMessage: Vo,
            UnreadTuple: Yo,
            LogItem: Wo,
            DataCommand: zo,
            SessionCommand: Go,
            ErrorCommand: Jo,
            DirectCommand: Ho,
            AckCommand: Ko,
            UnreadCommand: Qo,
            ConvCommand: $o,
            RoomCommand: Xo,
            LogsCommand: Zo,
            RcpCommand: es,
            ReadTuple: ts,
            MaxReadTuple: ns,
            ReadCommand: rs,
            PresenceCommand: is,
            ReportCommand: os,
            GenericCommand: ss,
            BlacklistCommand: as,
            PatchCommand: us,
            PatchItem: cs,
            ConvMemberInfo: ls,
            CommandType: fs,
            OpType: hs,
            StatusType: ds
          }),
          ys = i(function(e) {
            function t() {}

            function n(e, t, n) {
              this.fn = e, this.context = t, this.once = n || !1
            }

            function r(e, t, r, i, o) {
              if ("function" != typeof r) throw new TypeError("The listener must be a function");
              var s = new n(r, i || e, o),
                u = a ? a + t : t;
              return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e
            }

            function i(e, n) {
              0 == --e._eventsCount ? e._events = new t : delete e._events[n]
            }

            function o() {
              this._events = new t, this._eventsCount = 0
            }
            var s = Object.prototype.hasOwnProperty,
              a = "~";
            Object.create && (t.prototype = Object.create(null), (new t).__proto__ || (a = !1)), o.prototype.eventNames = function() {
              var e, t, n = [];
              if (0 === this._eventsCount) return n;
              for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
              return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, o.prototype.listeners = function(e) {
              var t = a ? a + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var r = 0, i = n.length, o = new Array(i); r < i; r++) o[r] = n[r].fn;
              return o
            }, o.prototype.listenerCount = function(e) {
              var t = a ? a + e : e,
                n = this._events[t];
              return n ? n.fn ? 1 : n.length : 0
            }, o.prototype.emit = function(e, t, n, r, i, o) {
              var s = a ? a + e : e;
              if (!this._events[s]) return !1;
              var u, c, l = this._events[s],
                f = arguments.length;
              if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), f) {
                  case 1:
                    return l.fn.call(l.context), !0;
                  case 2:
                    return l.fn.call(l.context, t), !0;
                  case 3:
                    return l.fn.call(l.context, t, n), !0;
                  case 4:
                    return l.fn.call(l.context, t, n, r), !0;
                  case 5:
                    return l.fn.call(l.context, t, n, r, i), !0;
                  case 6:
                    return l.fn.call(l.context, t, n, r, i, o), !0
                }
                for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u)
              } else {
                var h, d = l.length;
                for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), f) {
                  case 1:
                    l[c].fn.call(l[c].context);
                    break;
                  case 2:
                    l[c].fn.call(l[c].context, t);
                    break;
                  case 3:
                    l[c].fn.call(l[c].context, t, n);
                    break;
                  case 4:
                    l[c].fn.call(l[c].context, t, n, r);
                    break;
                  default:
                    if (!u)
                      for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                    l[c].fn.apply(l[c].context, u)
                }
              }
              return !0
            }, o.prototype.on = function(e, t, n) {
              return r(this, e, t, n, !1)
            }, o.prototype.once = function(e, t, n) {
              return r(this, e, t, n, !0)
            }, o.prototype.removeListener = function(e, t, n, r) {
              var o = a ? a + e : e;
              if (!this._events[o]) return this;
              if (!t) return i(this, o), this;
              var s = this._events[o];
              if (s.fn) s.fn !== t || r && !s.once || n && s.context !== n || i(this, o);
              else {
                for (var u = 0, c = [], l = s.length; u < l; u++)(s[u].fn !== t || r && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : i(this, o)
              }
              return this
            }, o.prototype.removeAllListeners = function(e) {
              var n;
              return e ? (n = a ? a + e : e, this._events[n] && i(this, n)) : (this._events = new t, this._eventsCount = 0), this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = a, o.EventEmitter = o, e.exports = o
          }),
          vs = i(function(e) {
            ! function(t) {
              function n(e, t, n, r) {
                var o = t && t.prototype instanceof i ? t : i,
                  s = Object.create(o.prototype),
                  a = new d(r || []);
                return s._invoke = c(e, n, a), s
              }

              function r(e, t, n) {
                try {
                  return {
                    type: "normal",
                    arg: e.call(t, n)
                  }
                } catch (e) {
                  return {
                    type: "throw",
                    arg: e
                  }
                }
              }

              function i() {}

              function o() {}

              function s() {}

              function a(e) {
                ["next", "throw", "return"].forEach(function(t) {
                  e[t] = function(e) {
                    return this._invoke(t, e)
                  }
                })
              }

              function u(e) {
                function t(n, i, o, s) {
                  var a = r(e[n], e, i);
                  if ("throw" !== a.type) {
                    var u = a.arg,
                      c = u.value;
                    return c && "object" == typeof c && g.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                      t("next", e, o, s)
                    }, function(e) {
                      t("throw", e, o, s)
                    }) : Promise.resolve(c).then(function(e) {
                      u.value = e, o(u)
                    }, s)
                  }
                  s(a.arg)
                }

                function n(e, n) {
                  function r() {
                    return new Promise(function(r, i) {
                      t(e, n, r, i)
                    })
                  }
                  return i = i ? i.then(r, r) : r()
                }
                var i;
                this._invoke = n
              }

              function c(e, t, n) {
                var i = T;
                return function(o, s) {
                  if (i === A) throw new Error("Generator is already running");
                  if (i === C) {
                    if ("throw" === o) throw s;
                    return y()
                  }
                  for (n.method = o, n.arg = s;;) {
                    var a = n.delegate;
                    if (a) {
                      var u = l(a, n);
                      if (u) {
                        if (u === I) continue;
                        return u
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (i === T) throw i = C, n.arg;
                      n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = A;
                    var c = r(e, t, n);
                    if ("normal" === c.type) {
                      if (i = n.done ? C : O, c.arg === I) continue;
                      return {
                        value: c.arg,
                        done: n.done
                      }
                    }
                    "throw" === c.type && (i = C, n.method = "throw", n.arg = c.arg)
                  }
                }
              }

              function l(e, t) {
                var n = e.iterator[t.method];
                if (n === v) {
                  if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = v, l(e, t), "throw" === t.method)) return I;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return I
                }
                var i = r(n, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, I;
                var o = i.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = v), t.delegate = null, I) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, I)
              }

              function f(e) {
                var t = {
                  tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
              }

              function h(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
              }

              function d(e) {
                this.tryEntries = [{
                  tryLoc: "root"
                }], e.forEach(f, this), this.reset(!0)
              }

              function p(e) {
                if (e) {
                  var t = e[b];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var n = -1,
                      r = function t() {
                        for (; ++n < e.length;)
                          if (g.call(e, n)) return t.value = e[n], t.done = !1, t;
                        return t.value = v, t.done = !0, t
                      };
                    return r.next = r
                  }
                }
                return {
                  next: y
                }
              }

              function y() {
                return {
                  value: v,
                  done: !0
                }
              }
              var v, m = Object.prototype,
                g = m.hasOwnProperty,
                _ = "function" == typeof Symbol ? Symbol : {},
                b = _.iterator || "@@iterator",
                w = _.asyncIterator || "@@asyncIterator",
                E = _.toStringTag || "@@toStringTag",
                S = t.regeneratorRuntime;
              if (S) return void(e.exports = S);
              S = t.regeneratorRuntime = e.exports, S.wrap = n;
              var T = "suspendedStart",
                O = "suspendedYield",
                A = "executing",
                C = "completed",
                I = {},
                N = {};
              N[b] = function() {
                return this
              };
              var x = Object.getPrototypeOf,
                j = x && x(x(p([])));
              j && j !== m && g.call(j, b) && (N = j);
              var P = s.prototype = i.prototype = Object.create(N);
              o.prototype = P.constructor = s, s.constructor = o, s[E] = o.displayName = "GeneratorFunction", S.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
              }, S.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, E in e || (e[E] = "GeneratorFunction")), e.prototype = Object.create(P), e
              }, S.awrap = function(e) {
                return {
                  __await: e
                }
              }, a(u.prototype), u.prototype[w] = function() {
                return this
              }, S.AsyncIterator = u, S.async = function(e, t, r, i) {
                var o = new u(n(e, t, r, i));
                return S.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                  return e.done ? e.value : o.next()
                })
              }, a(P), P[E] = "Generator", P[b] = function() {
                return this
              }, P.toString = function() {
                return "[object Generator]"
              }, S.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                  function n() {
                    for (; t.length;) {
                      var r = t.pop();
                      if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                  }
              }, S.values = p, d.prototype = {
                constructor: d,
                reset: function(e) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(h), !e)
                    for (var t in this) "t" === t.charAt(0) && g.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v)
                },
                stop: function() {
                  this.done = !0;
                  var e = this.tryEntries[0],
                    t = e.completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval
                },
                dispatchException: function(e) {
                  function t(t, r) {
                    return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = v), !!r
                  }
                  if (this.done) throw e;
                  for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r],
                      o = i.completion;
                    if ("root" === i.tryLoc) return t("end");
                    if (i.tryLoc <= this.prev) {
                      var s = g.call(i, "catchLoc"),
                        a = g.call(i, "finallyLoc");
                      if (s && a) {
                        if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                      } else if (s) {
                        if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                      } else {
                        if (!a) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                      }
                    }
                  }
                },
                abrupt: function(e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && g.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                      var i = r;
                      break
                    }
                  }
                  i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                  var o = i ? i.completion : {};
                  return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, I) : this.complete(o)
                },
                complete: function(e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), I
                },
                finish: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), h(n), I
                  }
                },
                catch: function(e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var i = r.arg;
                        h(n)
                      }
                      return i
                    }
                  }
                  throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                  return this.delegate = {
                    iterator: p(e),
                    resultName: t,
                    nextLoc: n
                  }, "next" === this.method && (this.arg = v), I
                }
              }
            }(function() {
              return this
            }() || Function("return this")())
          }),
          ms = function() {
            return this
          }() || Function("return this")(),
          gs = ms.regeneratorRuntime && Object.getOwnPropertyNames(ms).indexOf("regeneratorRuntime") >= 0,
          _s = gs && ms.regeneratorRuntime;
        ms.regeneratorRuntime = void 0;
        var bs = vs;
        if (gs) ms.regeneratorRuntime = _s;
        else try {
          delete ms.regeneratorRuntime
        } catch (e) {
          ms.regeneratorRuntime = void 0
        }
        var ws = bs,
          Es = Object.assign,
          Ss = !Es || ke(function() {
            var e = {},
              t = {},
              n = Symbol(),
              r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) {
              t[e] = e
            }), 7 != Es({}, e)[n] || Object.keys(Es({}, t)).join("") != r
          }) ? function(e, t) {
            for (var n = jt(e), r = arguments.length, i = 1, o = gr.f, s = br.f; r > i;)
              for (var a, u = et(arguments[i++]), c = o ? mt(u).concat(o(u)) : mt(u), l = c.length, f = 0; l > f;) s.call(u, a = c[f++]) && (n[a] = u[a]);
            return n
          } : Es;
        Ke(Ke.S + Ke.F, "Object", {
          assign: Ss
        });
        var Ts = Ne.Object.assign,
          Os = i(function(e) {
            e.exports = {
              default: Ts,
              __esModule: !0
            }
          }),
          As = r(Os),
          Cs = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Os);
            t.default = n.default || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }
          }),
          Is = r(Cs),
          Ns = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(ur);
            t.default = function(e) {
              return function() {
                var t = e.apply(this, arguments);
                return new n.default(function(e, r) {
                  function i(o, s) {
                    try {
                      var a = t[o](s),
                        u = a.value
                    } catch (e) {
                      return void r(e)
                    }
                    if (!a.done) return n.default.resolve(u).then(function(e) {
                      i("next", e)
                    }, function(e) {
                      i("throw", e)
                    });
                    e(u)
                  }
                  return i("next")
                })
              }
            }
          }),
          xs = r(Ns),
          js = function(e, t, n) {
            t in e ? Ye.f(e, t, We(0, n)) : e[t] = n
          };
        Ke(Ke.S + Ke.F * !Vn(function(e) {}), "Array", {
          from: function(e) {
            var t, n, r, i, o = jt(e),
              s = "function" == typeof this ? this : Array,
              a = arguments.length,
              u = a > 1 ? arguments[1] : void 0,
              c = void 0 !== u,
              l = 0,
              f = an(o);
            if (c && (u = je(u, a > 2 ? arguments[2] : void 0, 2)), void 0 == f || s == Array && on(f))
              for (t = rt(o.length), n = new s(t); t > l; l++) js(n, l, c ? u(o[l], l) : o[l]);
            else
              for (i = f.call(o), n = new s; !(r = i.next()).done; l++) js(n, l, c ? tn(i, u, [r.value, l], !0) : r.value);
            return n.length = l, n
          }
        });
        var Ps = Ne.Array.from,
          Rs = i(function(e) {
            e.exports = {
              default: Ps,
              __esModule: !0
            }
          });
        r(Rs);
        var ks = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Rs);
            t.default = function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
              }
              return (0, n.default)(e)
            }
          }),
          Ls = r(ks),
          Us = function(e, t) {
            if (!Pe(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
          },
          Fs = Ye.f,
          Ds = pr.fastKey,
          Ms = Le ? "_s" : "size",
          Bs = function(e, t) {
            var n, r = Ds(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n)
              if (n.k == t) return n
          },
          qs = {
            getConstructor: function(e, t, n, r) {
              var i = e(function(e, o) {
                en(e, i, t, "_i"), e._t = t, e._i = Tt(null), e._f = void 0, e._l = void 0, e[Ms] = 0, void 0 != o && un(o, n, e[r], e)
              });
              return Rn(i.prototype, {
                clear: function() {
                  for (var e = Us(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                  e._f = e._l = void 0, e[Ms] = 0
                },
                delete: function(e) {
                  var n = Us(this, t),
                    r = Bs(n, e);
                  if (r) {
                    var i = r.n,
                      o = r.p;
                    delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[Ms]--
                  }
                  return !!r
                },
                forEach: function(e) {
                  Us(this, t);
                  for (var n, r = je(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                    for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(e) {
                  return !!Bs(Us(this, t), e)
                }
              }), Le && Fs(i.prototype, "size", {
                get: function() {
                  return Us(this, t)[Ms]
                }
              }), i
            },
            def: function(e, t, n) {
              var r, i, o = Bs(e, t);
              return o ? o.v = n : (e._l = o = {
                i: i = Ds(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
              }, e._f || (e._f = o), r && (r.n = o), e[Ms]++, "F" !== i && (e._i[i] = o)), e
            },
            getEntry: Bs,
            setStrong: function(e, t, n) {
              Dt(e, t, function(e, n) {
                this._t = Us(e, t), this._k = n, this._l = void 0
              }, function() {
                for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? Bt(0, n.k) : "values" == t ? Bt(0, n.v) : Bt(0, [n.k, n.v]) : (e._t = void 0, Bt(1))
              }, n ? "entries" : "values", !n, !0), Ln(t)
            }
          },
          Vs = Ot("species"),
          Ys = function(e) {
            var t;
            return Er(e) && (t = e.constructor, "function" != typeof t || t !== Array && !Er(t.prototype) || (t = void 0), Pe(t) && null === (t = t[Vs]) && (t = void 0)), void 0 === t ? Array : t
          },
          Ws = function(e, t) {
            return new(Ys(e))(t)
          },
          zs = function(e, t) {
            var n = 1 == e,
              r = 2 == e,
              i = 3 == e,
              o = 4 == e,
              s = 6 == e,
              a = 5 == e || s,
              u = t || Ws;
            return function(t, c, l) {
              for (var f, h, d = jt(t), p = et(d), y = je(c, l, 3), v = rt(p.length), m = 0, g = n ? u(t, v) : r ? u(t, 0) : void 0; v > m; m++)
                if ((a || m in p) && (f = p[m], h = y(f, m, d), e))
                  if (n) g[m] = h;
                  else if (h) switch (e) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return m;
                case 2:
                  g.push(f)
              } else if (o) return !1;
              return s ? -1 : i || o ? o : g
            }
          },
          Gs = Ye.f,
          Js = zs(0),
          Hs = function(e, t, n, r, i, o) {
            var s = Ie[e],
              a = s,
              u = i ? "set" : "add",
              c = a && a.prototype,
              l = {};
            return Le && "function" == typeof a && (o || c.forEach && !ke(function() {
              (new a).entries().next()
            })) ? (a = t(function(t, n) {
              en(t, a, e, "_c"), t._c = new s, void 0 != n && un(n, i, t[u], t)
            }), Js("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
              var t = "add" == e || "set" == e;
              e in c && (!o || "clear" != e) && ze(a.prototype, e, function(n, r) {
                if (en(this, a, e), !t && o && !Pe(n)) return "get" == e && void 0;
                var i = this._c[e](0 === n ? 0 : n, r);
                return t ? this : i
              })
            }), o || Gs(a.prototype, "size", {
              get: function() {
                return this._c.size
              }
            })) : (a = r.getConstructor(t, e, i, u), Rn(a.prototype, n), pr.NEED = !0), It(a, e), l[e] = a, Ke(Ke.G + Ke.W + Ke.F, l), o || r.setStrong(a, e, i), a
          },
          Ks = (Hs("Set", function(e) {
            return function() {
              return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
          }, {
            add: function(e) {
              return qs.def(Us(this, "Set"), e = 0 === e ? 0 : e, e)
            }
          }, qs), function(e, t) {
            var n = [];
            return un(e, !1, n.push, n, t), n
          });
        Ke(Ke.P + Ke.R, "Set", {
          toJSON: function(e) {
            return function() {
              if (Zt(this) != e) throw TypeError(e + "#toJSON isn't generic");
              return Ks(this)
            }
          }("Set")
        });
        var Qs = function(e) {
          Ke(Ke.S, e, { of: function() {
              for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
              return new this(t)
            }
          })
        };
        Qs("Set");
        var $s = function(e) {
          Ke(Ke.S, e, {
            from: function(e) {
              var t, n, r, i, o = arguments[1];
              return xe(this), t = void 0 !== o, t && xe(o), void 0 == e ? new this : (n = [], t ? (r = 0, i = je(o, arguments[2], 2), un(e, !1, function(e) {
                n.push(i(e, r++))
              })) : un(e, !1, n.push, n), new this(n))
            }
          })
        };
        $s("Set");
        var Xs = Ne.Set,
          Zs = i(function(e) {
            e.exports = {
              default: Xs,
              __esModule: !0
            }
          }),
          ea = r(Zs),
          ta = i(function(e, t) {
            t.__esModule = !0, t.default = function(e, t) {
              var n = {};
              for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n
            }
          }),
          na = r(ta),
          ra = 1e3,
          ia = 60 * ra,
          oa = 60 * ia,
          sa = 24 * oa,
          aa = 365.25 * sa,
          ua = function(e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && e.length > 0) return f(e);
            if ("number" === n && !1 === isNaN(e)) return t.long ? d(e) : h(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
          },
          ca = i(function(e, t) {
            function n(e) {
              var n, r = 0;
              for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
              return t.colors[Math.abs(r) % t.colors.length]
            }

            function r(e) {
              function r() {
                if (r.enabled) {
                  var e = r,
                    n = +new Date,
                    i = n - (o || n);
                  e.diff = i, e.prev = o, e.curr = n, o = n;
                  for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                  s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                  var u = 0;
                  s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    u++;
                    var i = t.formatters[r];
                    if ("function" == typeof i) {
                      var o = s[u];
                      n = i.call(e, o), s.splice(u, 1), u--
                    }
                    return n
                  }), t.formatArgs.call(e, s);
                  (r.log || t.log || console.log.bind(console)).apply(e, s)
                }
              }
              var o;
              return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = n(e), r.destroy = i, "function" == typeof t.init && t.init(r), t.instances.push(r), r
            }

            function i() {
              var e = t.instances.indexOf(this);
              return -1 !== e && (t.instances.splice(e, 1), !0)
            }

            function o(e) {
              t.save(e), t.names = [], t.skips = [];
              var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                i = r.length;
              for (n = 0; n < i; n++) r[n] && (e = r[n].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
              for (n = 0; n < t.instances.length; n++) {
                var o = t.instances[n];
                o.enabled = t.enabled(o.namespace)
              }
            }

            function s() {
              t.enable("")
            }

            function a(e) {
              if ("*" === e[e.length - 1]) return !0;
              var n, r;
              for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
              for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
              return !1
            }

            function u(e) {
              return e instanceof Error ? e.stack || e.message : e
            }
            t = e.exports = r.debug = r.default = r, t.coerce = u, t.disable = s, t.enable = o, t.enabled = a, t.humanize = ua, t.instances = [], t.names = [], t.skips = [], t.formatters = {}
          }),
          la = (ca.coerce, ca.disable, ca.enable, ca.enabled, ca.humanize, ca.instances, ca.names, ca.skips, ca.formatters, i(function(e, t) {
            function n() {
              return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }

            function r(e) {
              var n = this.useColors;
              if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var i = 0,
                  o = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                  "%%" !== e && (i++, "%c" === e && (o = i))
                }), e.splice(o, 0, r)
              }
            }

            function i() {
              return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function o(e) {
              try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
              } catch (e) {}
            }

            function s() {
              var e;
              try {
                e = t.storage.debug
              } catch (e) {}
              return !e && void 0 !== Ee && "env" in Ee && (e = Ee.env.DEBUG), e
            }
            t = e.exports = ca, t.log = i, t.formatArgs = r, t.save = o, t.load = s, t.useColors = n, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
              try {
                return window.localStorage
              } catch (e) {}
            }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
              try {
                return JSON.stringify(e)
              } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
              }
            }, t.enable(s())
          })),
          fa = (la.log, la.formatArgs, la.save, la.load, la.useColors, la.storage, la.colors, function(e, t) {
            return function() {
              for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
              return e.apply(t, n)
            }
          }),
          ha = function(e) {
            return null != e && (y(e) || v(e) || !!e._isBuffer)
          },
          da = Object.prototype.toString,
          pa = {
            isArray: m,
            isArrayBuffer: g,
            isBuffer: ha,
            isFormData: _,
            isArrayBufferView: b,
            isString: w,
            isNumber: E,
            isObject: T,
            isUndefined: S,
            isDate: O,
            isFile: A,
            isBlob: C,
            isFunction: I,
            isStream: N,
            isURLSearchParams: x,
            isStandardBrowserEnv: P,
            forEach: R,
            merge: k,
            extend: L,
            trim: j
          },
          ya = function(e, t) {
            pa.forEach(e, function(n, r) {
              r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
          },
          va = function(e, t, n, r, i) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = i, e
          },
          ma = function(e, t, n, r, i) {
            var o = new Error(e);
            return va(o, t, n, r, i)
          },
          ga = function(e, t, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(ma("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
          },
          _a = function(e, t, n) {
            if (!t) return e;
            var r;
            if (n) r = n(t);
            else if (pa.isURLSearchParams(t)) r = t.toString();
            else {
              var i = [];
              pa.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (pa.isArray(e) ? t += "[]" : e = [e], pa.forEach(e, function(e) {
                  pa.isDate(e) ? e = e.toISOString() : pa.isObject(e) && (e = Bi(e)), i.push(U(t) + "=" + U(e))
                }))
              }), r = i.join("&")
            }
            return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
          },
          ba = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
          wa = function(e) {
            var t, n, r, i = {};
            return e ? (pa.forEach(e.split("\n"), function(e) {
              if (r = e.indexOf(":"), t = pa.trim(e.substr(0, r)).toLowerCase(), n = pa.trim(e.substr(r + 1)), t) {
                if (i[t] && ba.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
              }
            }), i) : i
          },
          Ea = pa.isStandardBrowserEnv() ? function() {
            function e(e) {
              var t = e;
              return n && (r.setAttribute("href", t), t = r.href), r.setAttribute("href", t), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
              }
            }
            var t, n = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            return t = e(window.location.href),
              function(n) {
                var r = pa.isString(n) ? e(n) : n;
                return r.protocol === t.protocol && r.host === t.host
              }
          }() : function() {
            return function() {
              return !0
            }
          }(),
          Sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        F.prototype = new Error, F.prototype.code = 5, F.prototype.name = "InvalidCharacterError";
        var Ta = D,
          Oa = pa.isStandardBrowserEnv() ? function() {
            return {
              write: function(e, t, n, r, i, o) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), pa.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), pa.isString(r) && s.push("path=" + r), pa.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
              },
              read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
              },
              remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
              }
            }
          }() : function() {
            return {
              write: function() {},
              read: function() {
                return null
              },
              remove: function() {}
            }
          }(),
          Aa = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || Ta,
          Ca = function(e) {
            return new cr(function(t, n) {
              var r = e.data,
                i = e.headers;
              pa.isFormData(r) && delete i["Content-Type"];
              var o = new XMLHttpRequest,
                s = "onreadystatechange",
                a = !1;
              if ("test" === Ee.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in o || Ea(e.url) || (o = new window.XDomainRequest, s = "onload", a = !0, o.onprogress = function() {}, o.ontimeout = function() {}), e.auth) {
                var u = e.auth.username || "",
                  c = e.auth.password || "";
                i.Authorization = "Basic " + Aa(u + ":" + c)
              }
              if (o.open(e.method.toUpperCase(), _a(e.url, e.params, e.paramsSerializer), !0), o.timeout = e.timeout, o[s] = function() {
                  if (o && (4 === o.readyState || a) && (0 !== o.status || o.responseURL && 0 === o.responseURL.indexOf("file:"))) {
                    var r = "getAllResponseHeaders" in o ? wa(o.getAllResponseHeaders()) : null,
                      i = e.responseType && "text" !== e.responseType ? o.response : o.responseText,
                      s = {
                        data: i,
                        status: 1223 === o.status ? 204 : o.status,
                        statusText: 1223 === o.status ? "No Content" : o.statusText,
                        headers: r,
                        config: e,
                        request: o
                      };
                    ga(t, n, s), o = null
                  }
                }, o.onerror = function() {
                  n(ma("Network Error", e, null, o)), o = null
                }, o.ontimeout = function() {
                  n(ma("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", o)), o = null
                }, pa.isStandardBrowserEnv()) {
                var l = Oa,
                  f = (e.withCredentials || Ea(e.url)) && e.xsrfCookieName ? l.read(e.xsrfCookieName) : void 0;
                f && (i[e.xsrfHeaderName] = f)
              }
              if ("setRequestHeader" in o && pa.forEach(i, function(e, t) {
                  void 0 === r && "content-type" === t.toLowerCase() ? delete i[t] : o.setRequestHeader(t, e)
                }), e.withCredentials && (o.withCredentials = !0), e.responseType) try {
                o.responseType = e.responseType
              } catch (t) {
                if ("json" !== e.responseType) throw t
              }
              "function" == typeof e.onDownloadProgress && o.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && o.upload && o.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                o && (o.abort(), n(e), o = null)
              }), void 0 === r && (r = null), o.send(r)
            })
          },
          Ia = {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          Na = {
            adapter: function() {
              var e;
              return "undefined" != typeof XMLHttpRequest ? e = Ca : void 0 !== Ee && (e = Ca), e
            }(),
            transformRequest: [function(e, t) {
              return ya(t, "Content-Type"), pa.isFormData(e) || pa.isArrayBuffer(e) || pa.isBuffer(e) || pa.isStream(e) || pa.isFile(e) || pa.isBlob(e) ? e : pa.isArrayBufferView(e) ? e.buffer : pa.isURLSearchParams(e) ? (M(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : pa.isObject(e) ? (M(t, "application/json;charset=utf-8"), Bi(e)) : e
            }],
            transformResponse: [function(e) {
              if ("string" == typeof e) try {
                e = JSON.parse(e)
              } catch (e) {}
              return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
              return e >= 200 && e < 300
            }
          };
        Na.headers = {
          common: {
            Accept: "application/json, text/plain, */*"
          }
        }, pa.forEach(["delete", "get", "head"], function(e) {
          Na.headers[e] = {}
        }), pa.forEach(["post", "put", "patch"], function(e) {
          Na.headers[e] = pa.merge(Ia)
        });
        var xa = Na;
        B.prototype.use = function(e, t) {
          return this.handlers.push({
            fulfilled: e,
            rejected: t
          }), this.handlers.length - 1
        }, B.prototype.eject = function(e) {
          this.handlers[e] && (this.handlers[e] = null)
        }, B.prototype.forEach = function(e) {
          pa.forEach(this.handlers, function(t) {
            null !== t && e(t)
          })
        };
        var ja = B,
          Pa = function(e, t, n) {
            return pa.forEach(n, function(n) {
              e = n(e, t)
            }), e
          },
          Ra = function(e) {
            return !(!e || !e.__CANCEL__)
          },
          ka = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
          },
          La = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
          },
          Ua = function(e) {
            return q(e), e.baseURL && !ka(e.url) && (e.url = La(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = Pa(e.data, e.headers, e.transformRequest), e.headers = pa.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), pa.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
              delete e.headers[t]
            }), (e.adapter || xa.adapter)(e).then(function(t) {
              return q(e), t.data = Pa(t.data, t.headers, e.transformResponse), t
            }, function(t) {
              return Ra(t) || (q(e), t && t.response && (t.response.data = Pa(t.response.data, t.response.headers, e.transformResponse))), cr.reject(t)
            })
          };
        V.prototype.request = function(e) {
          "string" == typeof e && (e = pa.merge({
            url: arguments[0]
          }, arguments[1])), e = pa.merge(xa, {
            method: "get"
          }, this.defaults, e), e.method = e.method.toLowerCase();
          var t = [Ua, void 0],
            n = cr.resolve(e);
          for (this.interceptors.request.forEach(function(e) {
              t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
              t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
          return n
        }, pa.forEach(["delete", "get", "head", "options"], function(e) {
          V.prototype[e] = function(t, n) {
            return this.request(pa.merge(n || {}, {
              method: e,
              url: t
            }))
          }
        }), pa.forEach(["post", "put", "patch"], function(e) {
          V.prototype[e] = function(t, n, r) {
            return this.request(pa.merge(r || {}, {
              method: e,
              url: t,
              data: n
            }))
          }
        });
        var Fa = V;
        Y.prototype.toString = function() {
          return "Cancel" + (this.message ? ": " + this.message : "")
        }, Y.prototype.__CANCEL__ = !0;
        var Da = Y;
        W.prototype.throwIfRequested = function() {
          if (this.reason) throw this.reason
        }, W.source = function() {
          var e;
          return {
            token: new W(function(t) {
              e = t
            }),
            cancel: e
          }
        };
        var Ma = W,
          Ba = function(e) {
            return function(t) {
              return e.apply(null, t)
            }
          },
          qa = z(xa);
        qa.Axios = Fa, qa.create = function(e) {
          return z(pa.merge(xa, e))
        }, qa.Cancel = Da, qa.CancelToken = Ma, qa.isCancel = Ra, qa.all = function(e) {
          return cr.all(e)
        }, qa.spread = Ba;
        var Va = qa,
          Ya = qa;
        Va.default = Ya;
        var Wa = Va,
          za = G,
          Ga = Math.floor,
          Ja = Math.random,
          Ha = J,
          Ka = H,
          Qa = K,
          $a = Q,
          Xa = $,
          Za = X,
          eu = "object" == typeof Se && Se && Se.Object === Object && Se,
          tu = eu,
          nu = "object" == typeof self && self && self.Object === Object && self,
          ru = tu || nu || Function("return this")(),
          iu = ru,
          ou = iu.Symbol,
          su = ou,
          au = Object.prototype,
          uu = au.hasOwnProperty,
          cu = au.toString,
          lu = su ? su.toStringTag : void 0,
          fu = Z,
          hu = Object.prototype,
          du = hu.toString,
          pu = ee,
          yu = "[object Null]",
          vu = "[object Undefined]",
          mu = su ? su.toStringTag : void 0,
          gu = te,
          _u = ne,
          bu = "[object Arguments]",
          wu = re,
          Eu = Object.prototype,
          Su = Eu.hasOwnProperty,
          Tu = Eu.propertyIsEnumerable,
          Ou = wu(function() {
            return arguments
          }()) ? wu : function(e) {
            return _u(e) && Su.call(e, "callee") && !Tu.call(e, "callee")
          },
          Au = Ou,
          Cu = Array.isArray,
          Iu = Cu,
          Nu = ie,
          xu = i(function(e, t) {
            var n = t && !t.nodeType && t,
              r = n && !0 && e && !e.nodeType && e,
              i = r && r.exports === n,
              o = i ? iu.Buffer : void 0,
              s = o ? o.isBuffer : void 0,
              a = s || Nu;
            e.exports = a
          }),
          ju = 9007199254740991,
          Pu = /^(?:0|[1-9]\d*)$/,
          Ru = oe,
          ku = 9007199254740991,
          Lu = se,
          Uu = {};
        Uu["[object Float32Array]"] = Uu["[object Float64Array]"] = Uu["[object Int8Array]"] = Uu["[object Int16Array]"] = Uu["[object Int32Array]"] = Uu["[object Uint8Array]"] = Uu["[object Uint8ClampedArray]"] = Uu["[object Uint16Array]"] = Uu["[object Uint32Array]"] = !0, Uu["[object Arguments]"] = Uu["[object Array]"] = Uu["[object ArrayBuffer]"] = Uu["[object Boolean]"] = Uu["[object DataView]"] = Uu["[object Date]"] = Uu["[object Error]"] = Uu["[object Function]"] = Uu["[object Map]"] = Uu["[object Number]"] = Uu["[object Object]"] = Uu["[object RegExp]"] = Uu["[object Set]"] = Uu["[object String]"] = Uu["[object WeakMap]"] = !1;
        var Fu = ae,
          Du = ue,
          Mu = i(function(e, t) {
            var n = t && !t.nodeType && t,
              r = n && !0 && e && !e.nodeType && e,
              i = r && r.exports === n,
              o = i && tu.process,
              s = function() {
                try {
                  var e = r && r.require && r.require("util").types;
                  return e || o && o.binding && o.binding("util")
                } catch (e) {}
              }();
            e.exports = s
          }),
          Bu = Mu && Mu.isTypedArray,
          qu = Bu ? Du(Bu) : Fu,
          Vu = qu,
          Yu = Object.prototype,
          Wu = Yu.hasOwnProperty,
          zu = ce,
          Gu = Object.prototype,
          Ju = le,
          Hu = fe,
          Ku = Hu(Object.keys, Object),
          Qu = Ku,
          $u = Object.prototype,
          Xu = $u.hasOwnProperty,
          Zu = he,
          ec = de,
          tc = "[object AsyncFunction]",
          nc = "[object Function]",
          rc = "[object GeneratorFunction]",
          ic = "[object Proxy]",
          oc = pe,
          sc = ye,
          ac = ve,
          uc = me,
          cc = ge,
          lc = _e,
          fc = kr.f;
        qi("getOwnPropertyDescriptor", function() {
          return function(e, t) {
            return fc(tt(e), t)
          }
        });
        var hc = Ne.Object,
          dc = function(e, t) {
            return hc.getOwnPropertyDescriptor(e, t)
          },
          pc = i(function(e) {
            e.exports = {
              default: dc,
              __esModule: !0
            }
          }),
          yc = r(pc),
          vc = i(function(e, t) {
            t.__esModule = !0;
            var n = function(e) {
              return e && e.__esModule ? e : {
                default: e
              }
            }(Rs);
            t.default = function(e) {
              return Array.isArray(e) ? e : (0, n.default)(e)
            }
          }),
          mc = r(vc),
          gc = i(function(e, t) {
            ! function() {
              var n = {
                VERSION: "2.4.0",
                Result: {
                  SUCCEEDED: 1,
                  NOTRANSITION: 2,
                  CANCELLED: 3,
                  PENDING: 4
                },
                Error: {
                  INVALID_TRANSITION: 100,
                  PENDING_TRANSITION: 200,
                  INVALID_CALLBACK: 300
                },
                WILDCARD: "*",
                ASYNC: "async",
                create: function(e, t) {
                  var r = "string" == typeof e.initial ? {
                      state: e.initial
                    } : e.initial,
                    i = e.terminal || e.final,
                    o = t || e.target || {},
                    s = e.events || [],
                    a = e.callbacks || {},
                    u = {},
                    c = {},
                    l = function(e) {
                      var t = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [n.WILDCARD];
                      u[e.name] = u[e.name] || {};
                      for (var r = 0; r < t.length; r++) c[t[r]] = c[t[r]] || [], c[t[r]].push(e.name), u[e.name][t[r]] = e.to || t[r];
                      e.to && (c[e.to] = c[e.to] || [])
                    };
                  r && (r.event = r.event || "startup", l({
                    name: r.event,
                    from: "none",
                    to: r.state
                  }));
                  for (var f = 0; f < s.length; f++) l(s[f]);
                  for (var h in u) u.hasOwnProperty(h) && (o[h] = n.buildEvent(h, u[h]));
                  for (var h in a) a.hasOwnProperty(h) && (o[h] = a[h]);
                  return o.current = "none", o.is = function(e) {
                    return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
                  }, o.can = function(e) {
                    return !this.transition && void 0 !== u[e] && (u[e].hasOwnProperty(this.current) || u[e].hasOwnProperty(n.WILDCARD))
                  }, o.cannot = function(e) {
                    return !this.can(e)
                  }, o.transitions = function() {
                    return (c[this.current] || []).concat(c[n.WILDCARD] || [])
                  }, o.isFinished = function() {
                    return this.is(i)
                  }, o.error = e.error || function(e, t, n, r, i, o, s) {
                    throw s || o
                  }, o.states = function() {
                    return Object.keys(c).sort()
                  }, r && !r.defer && o[r.event](), o
                },
                doCallback: function(e, t, r, i, o, s) {
                  if (t) try {
                    return t.apply(e, [r, i, o].concat(s))
                  } catch (t) {
                    return e.error(r, i, o, s, n.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", t)
                  }
                },
                beforeAnyEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onbeforeevent, t, r, i, o)
                },
                afterAnyEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onafterevent || e.onevent, t, r, i, o)
                },
                leaveAnyState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onleavestate, t, r, i, o)
                },
                enterAnyState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onenterstate || e.onstate, t, r, i, o)
                },
                changeState: function(e, t, r, i, o) {
                  return n.doCallback(e, e.onchangestate, t, r, i, o)
                },
                beforeThisEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onbefore" + t], t, r, i, o)
                },
                afterThisEvent: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onafter" + t] || e["on" + t], t, r, i, o)
                },
                leaveThisState: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onleave" + r], t, r, i, o)
                },
                enterThisState: function(e, t, r, i, o) {
                  return n.doCallback(e, e["onenter" + i] || e["on" + i], t, r, i, o)
                },
                beforeEvent: function(e, t, r, i, o) {
                  if (!1 === n.beforeThisEvent(e, t, r, i, o) || !1 === n.beforeAnyEvent(e, t, r, i, o)) return !1
                },
                afterEvent: function(e, t, r, i, o) {
                  n.afterThisEvent(e, t, r, i, o), n.afterAnyEvent(e, t, r, i, o)
                },
                leaveState: function(e, t, r, i, o) {
                  var s = n.leaveThisState(e, t, r, i, o),
                    a = n.leaveAnyState(e, t, r, i, o);
                  return !1 !== s && !1 !== a && (n.ASYNC === s || n.ASYNC === a ? n.ASYNC : void 0)
                },
                enterState: function(e, t, r, i, o) {
                  n.enterThisState(e, t, r, i, o), n.enterAnyState(e, t, r, i, o)
                },
                buildEvent: function(e, t) {
                  return function() {
                    var r = this.current,
                      i = t[r] || (t[n.WILDCARD] != n.WILDCARD ? t[n.WILDCARD] : r) || r,
                      o = Array.prototype.slice.call(arguments);
                    if (this.transition) return this.error(e, r, i, o, n.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                    if (this.cannot(e)) return this.error(e, r, i, o, n.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                    if (!1 === n.beforeEvent(this, e, r, i, o)) return n.Result.CANCELLED;
                    if (r === i) return n.afterEvent(this, e, r, i, o), n.Result.NOTRANSITION;
                    var s = this;
                    this.transition = function() {
                      return s.transition = null, s.current = i, n.enterState(s, e, r, i, o), n.changeState(s, e, r, i, o), n.afterEvent(s, e, r, i, o), n.Result.SUCCEEDED
                    }, this.transition.cancel = function() {
                      s.transition = null, n.afterEvent(s, e, r, i, o)
                    };
                    var a = n.leaveState(this, e, r, i, o);
                    return !1 === a ? (this.transition = null, n.Result.CANCELLED) : n.ASYNC === a ? n.Result.PENDING : this.transition ? this.transition() : void 0
                  }
                }
              };
              e.exports && (t = e.exports = n), t.StateMachine = n
            }()
          }),
          _c = (gc.StateMachine, pr.getWeak),
          bc = zs(5),
          wc = zs(6),
          Ec = 0,
          Sc = function(e) {
            return e._l || (e._l = new Tc)
          },
          Tc = function() {
            this.a = []
          },
          Oc = function(e, t) {
            return bc(e.a, function(e) {
              return e[0] === t
            })
          };
        Tc.prototype = {
          get: function(e) {
            var t = Oc(this, e);
            if (t) return t[1]
          },
          has: function(e) {
            return !!Oc(this, e)
          },
          set: function(e, t) {
            var n = Oc(this, e);
            n ? n[1] = t : this.a.push([e, t])
          },
          delete: function(e) {
            var t = wc(this.a, function(t) {
              return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
          }
        };
        var Ac = {
          getConstructor: function(e, t, n, r) {
            var i = e(function(e, o) {
              en(e, i, t, "_i"), e._t = t, e._i = Ec++, e._l = void 0, void 0 != o && un(o, n, e[r], e)
            });
            return Rn(i.prototype, {
              delete: function(e) {
                if (!Pe(e)) return !1;
                var n = _c(e);
                return !0 === n ? Sc(Us(this, t)).delete(e) : n && Je(n, this._i) && delete n[this._i]
              },
              has: function(e) {
                if (!Pe(e)) return !1;
                var n = _c(e);
                return !0 === n ? Sc(Us(this, t)).has(e) : n && Je(n, this._i)
              }
            }), i
          },
          def: function(e, t, n) {
            var r = _c(Re(t), !0);
            return !0 === r ? Sc(e).set(t, n) : r[e._i] = n, e
          },
          ufstore: Sc
        };
        i(function(e) {
          var t, n = zs(0),
            r = pr.getWeak,
            i = Object.isExtensible,
            o = Ac.ufstore,
            s = {},
            a = function(e) {
              return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
              }
            },
            u = {
              get: function(e) {
                if (Pe(e)) {
                  var t = r(e);
                  return !0 === t ? o(Us(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                }
              },
              set: function(e, t) {
                return Ac.def(Us(this, "WeakMap"), e, t)
              }
            },
            c = e.exports = Hs("WeakMap", a, u, Ac, !0, !0);
          ke(function() {
            return 7 != (new c).set((Object.freeze || Object)(s), 7).get(s)
          }) && (t = Ac.getConstructor(a, "WeakMap"), Ss(t.prototype, u), pr.NEED = !0, n(["delete", "has", "get", "set"], function(e) {
            var n = c.prototype,
              r = n[e];
            Qe(n, e, function(n, o) {
              if (Pe(n) && !i(n)) {
                this._f || (this._f = new t);
                var s = this._f[e](n, o);
                return "set" == e ? this : s
              }
              return r.call(this, n, o)
            })
          }))
        });
        Qs("WeakMap"), $s("WeakMap");
        var Cc = Ne.WeakMap,
          Ic = i(function(e) {
            e.exports = {
              default: Cc,
              __esModule: !0
            }
          }),
          Nc = r(Ic),
          xc = Hu(Object.getPrototypeOf, Object),
          jc = xc,
          Pc = "[object Object]",
          Rc = Function.prototype,
          kc = Object.prototype,
          Lc = Rc.toString,
          Uc = kc.hasOwnProperty,
          Fc = Lc.call(Object),
          Dc = be,
          Mc = void 0 !== e ? e : "undefined" != typeof window ? window : {},
          Bc = pi("expired"),
          qc = la("LC:Expirable"),
          Vc = function() {
            function e(t, n) {
              gi(this, e), this.originalValue = t, "number" == typeof n && (this.expiredAt = Date.now() + n)
            }
            return wo(e, [{
              key: "value",
              get: function() {
                var e = this.expiredAt && this.expiredAt <= Date.now();
                return e && qc("expired: " + this.originalValue), e ? Bc : this.originalValue
              }
            }]), e
          }();
        Vc.EXPIRED = Bc;
        var Yc, Wc = la("LC:Cache"),
          zc = function() {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "anonymous";
              gi(this, e), this.name = t, this._map = {}
            }
            return e.prototype.get = function(e) {
              var t = this._map[e];
              if (t) {
                var n = t.value;
                if (n !== Vc.EXPIRED) return Wc("[%s] hit: %s", this.name, e), n;
                delete this._map[e]
              }
              return Wc("[" + this.name + "] missed: " + e), null
            }, e.prototype.set = function(e, t, n) {
              Wc("[%s] set: %s %o %d", this.name, e, t, n), this._map[e] = new Vc(t, n)
            }, e
          }(),
          Gc = function e(t) {
            var n = new cr(t[0]);
            return 1 === t.length ? n : n.catch(function() {
              return e(t.slice(1))
            })
          },
          Jc = function(e) {
            return function(t) {
              return e(t), t
            }
          },
          Hc = (Mc.navigator && Mc.navigator.userAgent && Mc.navigator.userAgent.indexOf("MSIE 10."), new Nc),
          Kc = function(e) {
            return Hc.has(e) || Hc.set(e, {}), Hc.get(e)
          },
          Qc = function e(t, n) {
            if (!Dc(t)) return t;
            var r = As({}, t);
            for (var i in r)
              if ({}.hasOwnProperty.call(r, i)) {
                var o = r[i];
                o === n ? delete r[i] : r[i] = e(o, n)
              }
            return r
          },
          $c = function(e) {
            return Qc(e, null)
          },
          Xc = function(e) {
            return $c(JSON.parse(Bi(e)))
          },
          Zc = function(e) {
            return Array.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
          },
          el = "object" === ("undefined" == typeof wx ? "undefined" : vi(wx)) && "function" == typeof wx.connectSocket,
          tl = la("LC:WebSocketPlus"),
          nl = function(e) {
            return Math.min(1e3 * Math.pow(2, e), 3e5)
          },
          rl = function(e, t, n) {
            return As({}, n, {
              value: function() {
                var e;
                this.checkConnectionAvailability(t);
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return (e = n.value).call.apply(e, [this].concat(i))
              }
            })
          },
          il = (Yc = function(e) {
            function t(n, r) {
              if (gi(this, t), void 0 === Io) throw new Error("WebSocket is undefined. Polyfill is required in this runtime.");
              var i = Ci(this, e.call(this));
              return i.init(), i._protocol = r, cr.resolve("function" == typeof n ? n() : n).then(Zc).then(function(e) {
                return i._urls = e, i._open()
              }).then(function() {
                i.__postponeTimeoutTimer = i._postponeTimeoutTimer.bind(i), Mc.addEventListener && (i.__pause = function() {
                  i.can("pause") && i.pause()
                }, i.__resume = function() {
                  i.can("resume") && i.resume()
                }, Mc.addEventListener("offline", i.__pause), Mc.addEventListener("online", i.__resume)), i.open()
              }).catch(i.throw.bind(i)), i
            }
            return Ui(t, e), t.prototype._open = function() {
              var e = this;
              return this._createWs(this._urls, this._protocol).then(function(t) {
                var n = mc(e._urls),
                  r = n[0],
                  i = n.slice(1);
                return e._urls = [].concat(Ls(i), [r]), t
              })
            }, t.prototype._createWs = function(e, t) {
              var n = this;
              return Gc(e.map(function(e) {
                return function(r, i) {
                  tl("connect [" + e + "] " + t);
                  var o = t ? new Io(e, t) : new Io(e);
                  o.binaryType = n.binaryType || "arraybuffer", o.onopen = function() {
                    return r(o)
                  }, o.onclose = function(t) {
                    return i(t instanceof Error ? t : new Error("Failed to connect [" + e + "]"))
                  }, o.onerror = o.onclose
                }
              })).then(function(e) {
                return n._ws = e, n._ws.onclose = n._handleClose.bind(n), n._ws.onmessage = n._handleMessage.bind(n), e
              })
            }, t.prototype._destroyWs = function() {
              var e = this._ws;
              e && (e.onopen = null, e.onclose = null, e.onerror = null, e.onmessage = null, this._ws = null, e.close())
            }, t.prototype.onbeforeevent = function(e, t, n) {
              for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
              tl.apply(void 0, [e + ": " + t + " -> " + n].concat(i))
            }, t.prototype.onopen = function() {
              this.emit("open")
            }, t.prototype.onconnected = function() {
              this._startConnectionKeeper()
            }, t.prototype.onleaveconnected = function(e, t, n) {
              this._stopConnectionKeeper(), this._destroyWs(), "offline" !== n && "disconnected" !== n || this.emit("disconnect")
            }, t.prototype.onpause = function() {
              this.emit("offline")
            }, t.prototype.onbeforeresume = function() {
              this.emit("online")
            }, t.prototype.onreconnect = function() {
              this.emit("reconnect")
            }, t.prototype.ondisconnected = function(e, t, n) {
              var r = this,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = nl.call(null, i);
              tl("schedule attempt=" + i + " delay=" + o), this.emit("schedule", i, o), this.__scheduledRetry && clearTimeout(this.__scheduledRetry), this.__scheduledRetry = setTimeout(function() {
                r.is("disconnected") && r.retry(i)
              }, o)
            }, t.prototype.onretry = function(e, t, n) {
              var r = this,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
              this.emit("retry", i), this._open().then(function() {
                return r.can("reconnect") ? r.reconnect() : r._destroyWs()
              }, function() {
                return r.can("fail") && r.fail(i + 1)
              })
            }, t.prototype.onerror = function(e, t, n, r) {
              this.emit("error", r)
            }, t.prototype.onclose = function() {
              Mc.removeEventListener && (this.__pause && Mc.removeEventListener("offline", this.__pause), this.__resume && Mc.removeEventListener("online", this.__resume))
            }, t.prototype.checkConnectionAvailability = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "API";
              if (!this.is("connected")) {
                var t = this.current;
                throw console.warn(e + " should not be called when the connection is " + t), (this.is("disconnected") || this.is("reconnecting")) && console.warn("disconnect and reconnect event should be handled to avoid such calls."), new Error("Connection unavailable")
              }
            }, t.prototype._ping = function() {
              tl("ping");
              try {
                this.ping()
              } catch (e) {
                console.warn("websocket ping error: " + e.message)
              }
            }, t.prototype.ping = function() {
              this._ws.ping ? this._ws.ping() : console.warn("The WebSocket implement does not support sending ping frame.\n        Override ping method to use application defined ping/pong mechanism.")
            }, t.prototype._postponeTimeoutTimer = function() {
              var e = this;
              tl("_postponeTimeoutTimer"), this._clearTimeoutTimers(), this._timeoutTimer = setTimeout(function() {
                tl("timeout"), e.disconnect()
              }, 38e4)
            }, t.prototype._clearTimeoutTimers = function() {
              this._timeoutTimer && clearTimeout(this._timeoutTimer)
            }, t.prototype._startConnectionKeeper = function() {
              tl("start connection keeper"), this._heartbeatTimer = setInterval(this._ping.bind(this), 18e4);
              var e = this._ws.addListener || this._ws.addEventListener;
              e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), this._postponeTimeoutTimer()
            }, t.prototype._stopConnectionKeeper = function() {
              tl("stop connection keeper");
              var e = this._ws.removeListener || this._ws.removeEventListener;
              e.call(this._ws, "message", this.__postponeTimeoutTimer), e.call(this._ws, "pong", this.__postponeTimeoutTimer), this._clearTimeoutTimers(), this._heartbeatTimer && clearInterval(this._heartbeatTimer)
            }, t.prototype._handleClose = function(e) {
              tl("ws closed [" + e.code + "] " + e.reason), this.isFinished() || this.handleClose(e)
            }, t.prototype.handleClose = function() {
              this.disconnect()
            }, t.prototype.send = function(e) {
              tl("send", e), this._ws.send(e)
            }, t.prototype._handleMessage = function(e) {
              tl("message", e.data), this.handleMessage(e.data)
            }, t.prototype.handleMessage = function(e) {
              this.emit("message", e)
            }, t
          }(ys), we(Yc.prototype, "_ping", [rl], yc(Yc.prototype, "_ping"), Yc.prototype), we(Yc.prototype, "send", [rl], yc(Yc.prototype, "send"), Yc.prototype), Yc);
        gc.create({
          target: il.prototype,
          initial: {
            state: "initialized",
            event: "init",
            defer: !0
          },
          terminal: "closed",
          events: [{
            name: "open",
            from: "initialized",
            to: "connected"
          }, {
            name: "disconnect",
            from: "connected",
            to: "disconnected"
          }, {
            name: "retry",
            from: "disconnected",
            to: "reconnecting"
          }, {
            name: "fail",
            from: "reconnecting",
            to: "disconnected"
          }, {
            name: "reconnect",
            from: "reconnecting",
            to: "connected"
          }, {
            name: "pause",
            from: ["connected", "disconnected", "reconnecting"],
            to: "offline"
          }, {}, {
            name: "resume",
            from: "offline",
            to: "disconnected"
          }, {
            name: "close",
            from: ["connected", "disconnected", "reconnecting", "offline"],
            to: "closed"
          }, {
            name: "throw",
            from: "*",
            to: "error"
          }]
        });
        var ol = pr.onFreeze;
        qi("freeze", function(e) {
          return function(t) {
            return e && Pe(t) ? e(ol(t)) : t
          }
        });
        var sl = Ne.Object.freeze,
          al = i(function(e) {
            e.exports = {
              default: sl,
              __esModule: !0
            }
          }),
          ul = r(al),
          cl = ul({
            1e3: {
              name: "CLOSE_NORMAL"
            },
            1006: {
              name: "CLOSE_ABNORMAL"
            },
            4100: {
              name: "APP_NOT_AVAILABLE",
              message: "App not exists or realtime message service is disabled."
            },
            4102: {
              name: "SIGNATURE_FAILED",
              message: "Login signature mismatch."
            },
            4103: {
              name: "INVALID_LOGIN",
              message: "Malformed clientId."
            },
            4105: {
              name: "SESSION_REQUIRED",
              message: "Message sent before session opened."
            },
            4107: {
              name: "READ_TIMEOUT"
            },
            4108: {
              name: "LOGIN_TIMEOUT"
            },
            4109: {
              name: "FRAME_TOO_LONG"
            },
            4110: {
              name: "INVALID_ORIGIN",
              message: "Access denied by domain whitelist."
            },
            4111: {
              name: "SESSION_CONFLICT"
            },
            4112: {
              name: "SESSION_TOKEN_EXPIRED"
            },
            4113: {
              name: "APP_QUOTA_EXCEEDED",
              message: "The daily active users limit exceeded."
            },
            4116: {
              name: "MESSAGE_SENT_QUOTA_EXCEEDED",
              message: "Command sent too fast."
            },
            4200: {
              name: "INTERNAL_ERROR",
              message: "Internal error, please contact LeanCloud for support."
            },
            4301: {
              name: "CONVERSATION_API_FAILED",
              message: "Upstream Conversatoin API failed, see error.detail for details."
            },
            4302: {
              name: "CONVERSATION_SIGNATURE_FAILED",
              message: "Conversation action signature mismatch."
            },
            4303: {
              name: "CONVERSATION_NOT_FOUND"
            },
            4304: {
              name: "CONVERSATION_FULL"
            },
            4305: {
              name: "CONVERSATION_REJECTED_BY_APP",
              message: "Conversation action rejected by hook."
            },
            4306: {
              name: "CONVERSATION_UPDATE_FAILED"
            },
            4307: {
              name: "CONVERSATION_READ_ONLY"
            },
            4308: {
              name: "CONVERSATION_NOT_ALLOWED"
            },
            4309: {
              name: "CONVERSATION_UPDATE_REJECTED",
              message: "Conversation update rejected because the client is not a member."
            },
            4310: {
              name: "CONVERSATION_QUERY_FAILED",
              message: "Conversation query failed because it is too expansive."
            },
            4311: {
              name: "CONVERSATION_LOG_FAILED"
            },
            4312: {
              name: "CONVERSATION_LOG_REJECTED",
              message: "Message query rejected because the client is not a member of the conversation."
            },
            4313: {
              name: "SYSTEM_CONVERSATION_REQUIRED"
            },
            4314: {
              name: "NORMAL_CONVERSATION_REQUIRED"
            },
            4315: {
              name: "CONVERSATION_BLACKLISTED",
              message: "Blacklisted in the conversation."
            },
            4316: {
              name: "TRANSIENT_CONVERSATION_REQUIRED"
            },
            4317: {
              name: "CONVERSATION_MEMBERSHIP_REQUIRED"
            },
            4318: {
              name: "CONVERSATION_API_QUOTA_EXCEEDED",
              message: "LeanCloud API quota exceeded. You may upgrade your plan."
            },
            4323: {
              name: "TEMPORARY_CONVERSATION_EXPIRED",
              message: "Temporary conversation expired or does not exist."
            },
            4401: {
              name: "INVALID_MESSAGING_TARGET",
              message: "Conversation does not exist or client is not a member."
            },
            4402: {
              name: "MESSAGE_REJECTED_BY_APP",
              message: "Message rejected by hook."
            },
            4403: {
              name: "MESSAGE_OWNERSHIP_REQUIRED"
            },
            4404: {
              name: "MESSAGE_NOT_FOUND"
            },
            4405: {
              name: "MESSAGE_UPDATE_REJECTED_BY_APP",
              message: "Message update rejected by hook."
            },
            4406: {
              name: "MESSAGE_EDIT_DISABLED"
            },
            4407: {
              name: "MESSAGE_RECALL_DISABLED"
            },
            5130: {
              name: "OWNER_PROMOTION_NOT_ALLOWED",
              message: "Updating a member's role to owner is not allowed."
            }
          }),
          ll = ul(Wi(cl).reduce(function(e, t) {
            return As(e, Oi({}, cl[t].name, Number(t)))
          }, {})),
          fl = function(e) {
            var t = e.code,
              n = e.reason,
              r = e.appCode,
              i = e.detail,
              o = e.error,
              s = n || i || o,
              a = n;
            !s && cl[t] && (a = cl[t].name, s = cl[t].message || a), s || (s = "Unknow Error: " + t);
            var u = new Error(s);
            return As(u, {
              code: t,
              appCode: r,
              detail: i,
              name: a
            })
          },
          hl = la("LC:Connection"),
          dl = function(e) {
            function t(n, r) {
              var i = r.format,
                o = r.version;
              gi(this, t), hl("initializing Connection");
              var s = "lc." + i + "." + o;
              if (el) var a = Ci(this, e.call(this, n().then(function(e) {
                return e.map(function(e) {
                  return e + (-1 === e.indexOf("?") ? "?" : "&") + "subprotocol=" + encodeURIComponent(s)
                })
              })));
              else var a = Ci(this, e.call(this, n, s));
              return a._protocalFormat = i, a._commands = {}, a._serialId = 0, Ci(a)
            }
            return Ui(t, e), t.prototype.send = function() {
              function t(e) {
                return n.apply(this, arguments)
              }
              var n = xs(ws.mark(function t(n) {
                var r, i, o = this,
                  s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return ws.wrap(function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (r = void 0, s && (this._serialId += 1, r = this._serialId, n.i = r), hl.enabled && hl("↑ %O sent", Xc(n)), i = void 0, "proto2base64" === this._protocalFormat ? i = n.toBase64() : n.toArrayBuffer && (i = n.toArrayBuffer()), i) {
                        t.next = 7;
                        break
                      }
                      throw new TypeError(n + " is not a GenericCommand");
                    case 7:
                      if (e.prototype.send.call(this, i), s) {
                        t.next = 10;
                        break
                      }
                      return t.abrupt("return", void 0);
                    case 10:
                      return t.abrupt("return", new cr(function(e, t) {
                        o._commands[r] = {
                          resolve: e,
                          reject: t,
                          timeout: setTimeout(function() {
                            o._commands[r] && (hl.enabled && hl("✗ %O timeout", Xc(n)), t(fl({
                              error: "Command Timeout [cmd:" + n.cmd + " op:" + n.op + "]",
                              name: "COMMAND_TIMEOUT"
                            })), delete o._commands[r])
                          }, 2e4)
                        }
                      }));
                    case 11:
                    case "end":
                      return t.stop()
                  }
                }, t, this)
              }));
              return t
            }(), t.prototype.handleMessage = function(e) {
              var t = void 0;
              try {
                t = ss.decode(e), hl.enabled && hl("↓ %O received", Xc(t))
              } catch (t) {
                console.warn("Decode message failed", e)
              }
              var n = t.i;
              n ? this._commands[n] ? (clearTimeout(this._commands[n].timeout), t.cmd === fs.error ? this._commands[n].reject(fl(t.errorMessage)) : this._commands[n].resolve(t), delete this._commands[n]) : console.warn("Unexpected command received with serialId [" + n + "],\n         which have timed out or never been requested.") : t.cmd === fs.error ? this.emit("error", fl(t.errorMessage)) : this.emit("message", t)
            }, t.prototype.ping = function() {
              return this.send(new ss({
                cmd: fs.echo
              })).catch(function(e) {
                return hl("ping failed:", e)
              })
            }, t
          }(il),
          pl = function(e, t) {
            e && e.forEach(function(e) {
              try {
                e(t)
              } catch (t) {
                throw e._pluginName && (t.message += "[" + e._pluginName + "]"), t
              }
            })
          },
          yl = function(e, t) {
            return Zc(e).reduce(function(e, n) {
              return e.then(function(e) {
                return !1 !== e && n.apply(void 0, Ls(t))
              }).catch(function(e) {
                throw n._pluginName && (e.message += "[" + n._pluginName + "]"), e
              })
            }, cr.resolve(!0))
          },
          vl = "4.2.0",
          ml = la("LC:Realtime"),
          gl = la("LC:request"),
          _l = new zc("push-router"),
          bl = function(e) {
            function t(n) {
              var r = n.plugins,
                i = na(n, ["plugins"]);
              gi(this, t), ml("initializing Realtime %s %O", vl, i);
              var o = Ci(this, e.call(this));
              if ("string" != typeof i.appId) throw new TypeError("appId [" + i.appId + "] is not a string");
              if ("string" != typeof i.appKey) throw new TypeError("appKey [" + i.appKey + "] is not a string");
              i.region && console.warn("region option is not necessary anymore"), o._options = As({
                appId: void 0,
                appKey: void 0,
                pushOfflineMessages: !1,
                noBinary: !1,
                ssl: !0,
                RTMServerName: Ee.env.RTM_SERVER_NAME
              }, i), o._cache = new zc("endpoints");
              var s = Kc(o);
              s.clients = new ea, s.pendingClients = new ea;
              var a = [].concat(Ls(Zc(t.__preRegisteredPlugins)), Ls(Zc(r)));
              return ml("Using plugins %o", a.map(function(e) {
                return e.name
              })), o._plugins = a.reduce(function(e, t) {
                for (var n in t)({}).hasOwnProperty.call(t, n) && "name" !== n && (t.name && Zc(t[n]).forEach(function(e) {
                  e._pluginName = t.name
                }), e[n] = Zc(e[n]).concat(t[n]));
                return e
              }, {}), pl(o._plugins.onRealtimeCreate, o), o
            }
            return Ui(t, e), t.prototype._request = function() {
              function e(e) {
                return t.apply(this, arguments)
              }
              var t = xs(ws.mark(function e(t) {
                var n, r, i, o, s, a, u, c = t.method,
                  l = t.version,
                  f = void 0 === l ? "1.1" : l,
                  h = t.path,
                  d = t.query,
                  p = t.headers,
                  y = t.data,
                  v = void 0 === y ? {} : y;
                return ws.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return n = this._options, r = n.appId, i = n.server, e.next = 3, this.constructor._getServerUrls({
                        appId: r,
                        server: i
                      });
                    case 3:
                      return o = e.sent, s = o.api, a = "https://" + s + "/" + f + h, u = {
                        method: c,
                        params: d,
                        headers: Is({
                          "X-LC-Id": this._options.appId,
                          "X-LC-Key": this._options.appKey
                        }, p),
                        data: v
                      }, gl("Req: %O %O", a, u), e.abrupt("return", Wa(a, u).then(function(e) {
                        return gl("Res: %O %O %O", a, e.status, e.data), e.data
                      }, function(e) {
                        if (gl("Error: %O %O %O", a, e.response.status, e.response.data), e.response && e.response.data && e.response.data.code) throw fl(e.response.data);
                        throw e
                      }));
                    case 9:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }));
              return e
            }(), t.prototype._open = function() {
              var e = this;
              if (this._openPromise) return this._openPromise;
              var t = "protobuf2";
              this._options.noBinary && (t = "proto2base64");
              var n = 3;
              this._options.pushOfflineMessages && (n = 1);
              var r = {
                format: t,
                version: n
              };
              return this._openPromise = new cr(function(t, n) {
                ml("No connection established, create a new one.");
                var i = new dl(function() {
                  return e._getRTMServers(e._options)
                }, r);
                i.on("open", function() {
                  return t(i)
                }), i.on("error", n), i.on("message", e._dispatchCommand.bind(e)), ["disconnect", "reconnect", "retry", "schedule", "offline", "online"].forEach(function(t) {
                  return i.on(t, function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    ml(t + " event emitted. %o", r), e.emit.apply(e, [t].concat(r)), "reconnect" !== t && Kc(e).clients.forEach(function(e) {
                      e.emit.apply(e, [t].concat(r))
                    })
                  })
                }), i.handleClose = function(e) {
                  [ll.APP_NOT_AVAILABLE, ll.INVALID_LOGIN, ll.INVALID_ORIGIN].some(function(t) {
                    return t === e.code
                  }) ? this.throw(fl(e)) : this.disconnect()
                }, Kc(e).connection = i
              }), this._openPromise
            }, t.prototype._getRTMServers = function() {
              function e(e) {
                return t.apply(this, arguments)
              }
              var t = xs(ws.mark(function e(t) {
                var n, r;
                return ws.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!t.RTMServers) {
                        e.next = 2;
                        break
                      }
                      return e.abrupt("return", lc(Zc(t.RTMServers)));
                    case 2:
                      if (n = void 0, !(r = this._cache.get("endpoints"))) {
                        e.next = 10;
                        break
                      }
                      return e.next = 7, r;
                    case 7:
                      n = e.sent, e.next = 14;
                      break;
                    case 10:
                      return e.next = 12, this.constructor._fetchRTMServers(t);
                    case 12:
                      n = e.sent, this._cache.set("endpoints", n, 1e3 * n.ttl);
                    case 14:
                      return ml("endpoint info: %O", n), e.abrupt("return", [n.server, n.secondary]);
                    case 16:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }));
              return e
            }(), t._getServerUrls = function() {
              function e(e) {
                return t.apply(this, arguments)
              }
              var t = xs(ws.mark(function e(t) {
                var n, r = t.appId,
                  i = t.server;
                return ws.wrap(function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (ml("fetch server urls"), !i) {
                        e.next = 5;
                        break
                      }
                      if ("string" == typeof i) {
                        e.next = 4;
                        break
                      }
                      return e.abrupt("return", i);
                    case 4:
                      return e.abrupt("return", {
                        RTMRouter: i,
                        api: i
                      });
                    case 5:
                      if (!(n = _l.get(r))) {
                        e.next = 8;
                        break
                      }
                      return e.abrupt("return", n);
                    case 8:
                      return e.abrupt("return", Wa.get("https://app-router.leancloud.cn/2/route", {
                        params: {
                          appId: r
                        },
                        timeout: 2e4
                      }).then(function(e) {
                        return e.data
                      }).then(Jc(ml)).then(function(e) {
                        var t = e.rtm_router_server,
                          n = e.api_server,
                          i = e.ttl,
                          o = void 0 === i ? 3600 : i;
                        if (!t) throw new Error("rtm router not exists");
                        var s = {
                          RTMRouter: t,
                          api: n
                        };
                        return _l.set(r, s, 1e3 * o), s
                      }).catch(function() {
                        var e = r.slice(0, 8).toLowerCase();
                        return {
                          RTMRouter: e + ".rtm.lncld.net",
                          api: e + ".api.lncld.net"
                        }
                      }));
                    case 9:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }));
              return e
            }(), t._fetchRTMServers = function(e) {
              var t = e.appId,
                n = e.ssl,
                r = e.server,
                i = e.RTMServerName;
              return ml("fetch endpoint info"), this._getServerUrls({
                appId: t,
                server: r
              }).then(Jc(ml)).then(function(e) {
                var r = e.RTMRouter;
                return Wa.get("https://" + r + "/v1/route", {
                  params: {
                    appId: t,
                    secure: n,
                    features: el ? "wechat" : void 0,
                    server: i,
                    _t: Date.now()
                  },
                  timeout: 2e4
                }).then(function(e) {
                  return e.data
                }).then(Jc(ml))
              })
            }, t.prototype._close = function() {
              this._openPromise && this._openPromise.then(function(e) {
                return e.close()
              }), delete this._openPromise
            }, t.prototype.retry = function() {
              var e = Kc(this),
                t = e.connection;
              if (!t) throw new Error("no connection established");
              if (t.cannot("retry")) throw new Error("retrying not allowed when not disconnected. the connection is now " + t.current);
              return t.retry()
            }, t.prototype.pause = function() {
              var e = Kc(this),
                t = e.connection;
              t && t.can("pause") && t.pause()
            }, t.prototype.resume = function() {
              var e = Kc(this),
                t = e.connection;
              t && t.can("resume") && t.resume()
            }, t.prototype._registerPending = function(e) {
              Kc(this).pendingClients.add(e)
            }, t.prototype._deregisterPending = function(e) {
              Kc(this).pendingClients.delete(e)
            }, t.prototype._register = function(e) {
              Kc(this).clients.add(e)
            }, t.prototype._deregister = function(e) {
              var t = Kc(this);
              t.clients.delete(e), t.clients.size + t.pendingClients.size === 0 && this._close()
            }, t.prototype._dispatchCommand = function(e) {
              return yl(this._plugins.beforeCommandDispatch, [e, this]).then(function(t) {
                return !!t && ml("[WARN] Unexpected message received: %O", Xc(e))
              })
            }, t
          }(ys);
        t.Protocals = ps, t.Promise = cr, t.EventEmitter = ys, t.Realtime = bl, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      })
    }).call(t, n(5))
  }, function(e, t, n) {
    ! function(e, r) {
      r(t, n(23))
    }(0, function(e, t) {
      "use strict";

      function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
      }

      function r(e, t) {
        return t = {
          exports: {}
        }, e(t, t.exports), t.exports
      }
      if (!t.Protocals) throw new Error("LeanCloud Realtime SDK not installed");
      var i = r(function(e) {
          var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = t)
        }),
        o = r(function(e) {
          var t = e.exports = {
            version: "2.5.5"
          };
          "number" == typeof __e && (__e = t)
        }),
        s = (o.version, function(e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e
        }),
        a = function(e, t, n) {
          if (s(e), void 0 === t) return e;
          switch (n) {
            case 1:
              return function(n) {
                return e.call(t, n)
              };
            case 2:
              return function(n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function(n, r, i) {
                return e.call(t, n, r, i)
              }
          }
          return function() {
            return e.apply(t, arguments)
          }
        },
        u = function(e) {
          return "object" == typeof e ? null !== e : "function" == typeof e
        },
        c = function(e) {
          if (!u(e)) throw TypeError(e + " is not an object!");
          return e
        },
        l = function(e) {
          try {
            return !!e()
          } catch (e) {
            return !0
          }
        },
        f = !l(function() {
          return 7 != Object.defineProperty({}, "a", {
            get: function() {
              return 7
            }
          }).a
        }),
        h = i.document,
        d = u(h) && u(h.createElement),
        p = function(e) {
          return d ? h.createElement(e) : {}
        },
        y = !f && !l(function() {
          return 7 != Object.defineProperty(p("div"), "a", {
            get: function() {
              return 7
            }
          }).a
        }),
        v = function(e, t) {
          if (!u(e)) return e;
          var n, r;
          if (t && "function" == typeof(n = e.toString) && !u(r = n.call(e))) return r;
          if ("function" == typeof(n = e.valueOf) && !u(r = n.call(e))) return r;
          if (!t && "function" == typeof(n = e.toString) && !u(r = n.call(e))) return r;
          throw TypeError("Can't convert object to primitive value")
        },
        m = Object.defineProperty,
        g = f ? Object.defineProperty : function(e, t, n) {
          if (c(e), t = v(t, !0), c(n), y) try {
            return m(e, t, n)
          } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e
        },
        _ = {
          f: g
        },
        b = function(e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
          }
        },
        w = f ? function(e, t, n) {
          return _.f(e, t, b(1, n))
        } : function(e, t, n) {
          return e[t] = n, e
        },
        E = {}.hasOwnProperty,
        S = function(e, t) {
          return E.call(e, t)
        },
        T = function(e, t, n) {
          var r, s, u, c = e & T.F,
            l = e & T.G,
            f = e & T.S,
            h = e & T.P,
            d = e & T.B,
            p = e & T.W,
            y = l ? o : o[t] || (o[t] = {}),
            v = y.prototype,
            m = l ? i : f ? i[t] : (i[t] || {}).prototype;
          l && (n = t);
          for (r in n)(s = !c && m && void 0 !== m[r]) && S(y, r) || (u = s ? m[r] : n[r], y[r] = l && "function" != typeof m[r] ? n[r] : d && s ? a(u, i) : p && m[r] == u ? function(e) {
            var t = function(t, n, r) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t);
                  case 2:
                    return new e(t, n)
                }
                return new e(t, n, r)
              }
              return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
          }(u) : h && "function" == typeof u ? a(Function.call, u) : u, h && ((y.virtual || (y.virtual = {}))[r] = u, e & T.R && v && !v[r] && w(v, r, u)))
        };
      T.F = 1, T.G = 2, T.S = 4, T.P = 8, T.B = 16, T.W = 32, T.U = 64, T.R = 128;
      var O = T,
        A = {}.toString,
        C = function(e) {
          return A.call(e).slice(8, -1)
        },
        I = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
          return "String" == C(e) ? e.split("") : Object(e)
        },
        N = function(e) {
          if (void 0 == e) throw TypeError("Can't call method on  " + e);
          return e
        },
        x = function(e) {
          return I(N(e))
        },
        j = Math.ceil,
        P = Math.floor,
        R = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? P : j)(e)
        },
        k = Math.min,
        L = function(e) {
          return e > 0 ? k(R(e), 9007199254740991) : 0
        },
        U = Math.max,
        F = Math.min,
        D = function(e, t) {
          return e = R(e), e < 0 ? U(e + t, 0) : F(e, t)
        },
        M = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}),
        B = function(e) {
          return M[e] || (M[e] = {})
        },
        q = 0,
        V = Math.random(),
        Y = function(e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++q + V).toString(36))
        },
        W = B("keys"),
        z = function(e) {
          return W[e] || (W[e] = Y(e))
        },
        G = function(e) {
          return function(t, n, r) {
            var i, o = x(t),
              s = L(o.length),
              a = D(r, s);
            if (e && n != n) {
              for (; s > a;)
                if ((i = o[a++]) != i) return !0
            } else
              for (; s > a; a++)
                if ((e || a in o) && o[a] === n) return e || a || 0;
            return !e && -1
          }
        }(!1),
        J = z("IE_PROTO"),
        H = function(e, t) {
          var n, r = x(e),
            i = 0,
            o = [];
          for (n in r) n != J && S(r, n) && o.push(n);
          for (; t.length > i;) S(r, n = t[i++]) && (~G(o, n) || o.push(n));
          return o
        },
        K = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        Q = Object.keys || function(e) {
          return H(e, K)
        },
        $ = Object.getOwnPropertySymbols,
        X = {
          f: $
        },
        Z = {}.propertyIsEnumerable,
        ee = {
          f: Z
        },
        te = function(e) {
          return Object(N(e))
        },
        ne = Object.assign,
        re = !ne || l(function() {
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
          }), 7 != ne({}, e)[n] || Object.keys(ne({}, t)).join("") != r
        }) ? function(e, t) {
          for (var n = te(e), r = arguments.length, i = 1, o = X.f, s = ee.f; r > i;)
            for (var a, u = I(arguments[i++]), c = o ? Q(u).concat(o(u)) : Q(u), l = c.length, f = 0; l > f;) s.call(u, a = c[f++]) && (n[a] = u[a]);
          return n
        } : ne;
      O(O.S + O.F, "Object", {
        assign: re
      });
      var ie = o.Object.assign,
        oe = r(function(e) {
          e.exports = {
            default: ie,
            __esModule: !0
          }
        }),
        se = n(oe),
        ae = w,
        ue = {},
        ce = f ? Object.defineProperties : function(e, t) {
          c(e);
          for (var n, r = Q(t), i = r.length, o = 0; i > o;) _.f(e, n = r[o++], t[n]);
          return e
        },
        le = i.document,
        fe = le && le.documentElement,
        he = z("IE_PROTO"),
        de = function() {},
        pe = function() {
          var e, t = p("iframe"),
            n = K.length;
          for (t.style.display = "none", fe.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), pe = e.F; n--;) delete pe.prototype[K[n]];
          return pe()
        },
        ye = Object.create || function(e, t) {
          var n;
          return null !== e ? (de.prototype = c(e), n = new de, de.prototype = null, n[he] = e) : n = pe(), void 0 === t ? n : ce(n, t)
        },
        ve = r(function(e) {
          var t = B("wks"),
            n = i.Symbol,
            r = "function" == typeof n;
          (e.exports = function(e) {
            return t[e] || (t[e] = r && n[e] || (r ? n : Y)("Symbol." + e))
          }).store = t
        }),
        me = _.f,
        ge = ve("toStringTag"),
        _e = function(e, t, n) {
          e && !S(e = n ? e : e.prototype, ge) && me(e, ge, {
            configurable: !0,
            value: t
          })
        },
        be = {};
      w(be, ve("iterator"), function() {
        return this
      });
      var we = function(e, t, n) {
          e.prototype = ye(be, {
            next: b(1, n)
          }), _e(e, t + " Iterator")
        },
        Ee = z("IE_PROTO"),
        Se = Object.prototype,
        Te = Object.getPrototypeOf || function(e) {
          return e = te(e), S(e, Ee) ? e[Ee] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Se : null
        },
        Oe = ve("iterator"),
        Ae = !([].keys && "next" in [].keys()),
        Ce = function() {
          return this
        },
        Ie = function(e, t, n, r, i, o, s) {
          we(n, t, r);
          var a, u, c, l = function(e) {
              if (!Ae && e in p) return p[e];
              switch (e) {
                case "keys":
                case "values":
                  return function() {
                    return new n(this, e)
                  }
              }
              return function() {
                return new n(this, e)
              }
            },
            f = t + " Iterator",
            h = "values" == i,
            d = !1,
            p = e.prototype,
            y = p[Oe] || p["@@iterator"] || i && p[i],
            v = y || l(i),
            m = i ? h ? l("entries") : v : void 0,
            g = "Array" == t ? p.entries || y : y;
          if (g && (c = Te(g.call(new e))) !== Object.prototype && c.next && _e(c, f, !0), h && y && "values" !== y.name && (d = !0, v = function() {
              return y.call(this)
            }), s && (Ae || d || !p[Oe]) && w(p, Oe, v), ue[t] = v, ue[f] = Ce, i)
            if (a = {
                values: h ? v : l("values"),
                keys: o ? v : l("keys"),
                entries: m
              }, s)
              for (u in a) u in p || ae(p, u, a[u]);
            else O(O.P + O.F * (Ae || d), t, a);
          return a
        },
        Ne = function(e) {
          return function(t, n) {
            var r, i, o = String(N(t)),
              s = R(n),
              a = o.length;
            return s < 0 || s >= a ? e ? "" : void 0 : (r = o.charCodeAt(s), r < 55296 || r > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? o.charAt(s) : r : e ? o.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536)
          }
        }(!0);
      Ie(String, "String", function(e) {
        this._t = String(e), this._i = 0
      }, function() {
        var e, t = this._t,
          n = this._i;
        return n >= t.length ? {
          value: void 0,
          done: !0
        } : (e = Ne(t, n), this._i += e.length, {
          value: e,
          done: !1
        })
      });
      var xe = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      };
      Ie(Array, "Array", function(e, t) {
        this._t = x(e), this._i = 0, this._k = t
      }, function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, xe(1)) : "keys" == t ? xe(0, n) : "values" == t ? xe(0, e[n]) : xe(0, [n, e[n]])
      }, "values");
      ue.Arguments = ue.Array;
      for (var je = ve("toStringTag"), Pe = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Re = 0; Re < Pe.length; Re++) {
        var ke = Pe[Re],
          Le = i[ke],
          Ue = Le && Le.prototype;
        Ue && !Ue[je] && w(Ue, je, ke), ue[ke] = ue.Array
      }
      var Fe = function(e, t, n) {
          for (var r in t) n && e[r] ? e[r] = t[r] : w(e, r, t[r]);
          return e
        },
        De = function(e, t, n, r) {
          if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
          return e
        },
        Me = function(e, t, n, r) {
          try {
            return r ? t(c(n)[0], n[1]) : t(n)
          } catch (t) {
            var i = e.return;
            throw void 0 !== i && c(i.call(e)), t
          }
        },
        Be = ve("iterator"),
        qe = Array.prototype,
        Ve = function(e) {
          return void 0 !== e && (ue.Array === e || qe[Be] === e)
        },
        Ye = ve("toStringTag"),
        We = "Arguments" == C(function() {
          return arguments
        }()),
        ze = function(e, t) {
          try {
            return e[t]
          } catch (e) {}
        },
        Ge = function(e) {
          var t, n, r;
          return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = ze(t = Object(e), Ye)) ? n : We ? C(t) : "Object" == (r = C(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        Je = ve("iterator"),
        He = o.getIteratorMethod = function(e) {
          if (void 0 != e) return e[Je] || e["@@iterator"] || ue[Ge(e)]
        },
        Ke = r(function(e) {
          var t = {},
            n = {},
            r = e.exports = function(e, r, i, o, s) {
              var u, l, f, h, d = s ? function() {
                  return e
                } : He(e),
                p = a(i, o, r ? 2 : 1),
                y = 0;
              if ("function" != typeof d) throw TypeError(e + " is not iterable!");
              if (Ve(d)) {
                for (u = L(e.length); u > y; y++)
                  if ((h = r ? p(c(l = e[y])[0], l[1]) : p(e[y])) === t || h === n) return h
              } else
                for (f = d.call(e); !(l = f.next()).done;)
                  if ((h = Me(f, p, l.value, r)) === t || h === n) return h
            };
          r.BREAK = t, r.RETURN = n
        }),
        Qe = ve("species"),
        $e = function(e) {
          var t = "function" == typeof o[e] ? o[e] : i[e];
          f && t && !t[Qe] && _.f(t, Qe, {
            configurable: !0,
            get: function() {
              return this
            }
          })
        },
        Xe = r(function(e) {
          var t = Y("meta"),
            n = _.f,
            r = 0,
            i = Object.isExtensible || function() {
              return !0
            },
            o = !l(function() {
              return i(Object.preventExtensions({}))
            }),
            s = function(e) {
              n(e, t, {
                value: {
                  i: "O" + ++r,
                  w: {}
                }
              })
            },
            a = function(e, n) {
              if (!u(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
              if (!S(e, t)) {
                if (!i(e)) return "F";
                if (!n) return "E";
                s(e)
              }
              return e[t].i
            },
            c = function(e, n) {
              if (!S(e, t)) {
                if (!i(e)) return !0;
                if (!n) return !1;
                s(e)
              }
              return e[t].w
            },
            f = function(e) {
              return o && h.NEED && i(e) && !S(e, t) && s(e), e
            },
            h = e.exports = {
              KEY: t,
              NEED: !1,
              fastKey: a,
              getWeak: c,
              onFreeze: f
            }
        }),
        Ze = (Xe.KEY, Xe.NEED, Xe.fastKey, Xe.getWeak, Xe.onFreeze, function(e, t) {
          if (!u(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
          return e
        }),
        et = _.f,
        tt = Xe.fastKey,
        nt = f ? "_s" : "size",
        rt = function(e, t) {
          var n, r = tt(t);
          if ("F" !== r) return e._i[r];
          for (n = e._f; n; n = n.n)
            if (n.k == t) return n
        },
        it = {
          getConstructor: function(e, t, n, r) {
            var i = e(function(e, o) {
              De(e, i, t, "_i"), e._t = t, e._i = ye(null), e._f = void 0, e._l = void 0, e[nt] = 0, void 0 != o && Ke(o, n, e[r], e)
            });
            return Fe(i.prototype, {
              clear: function() {
                for (var e = Ze(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                e._f = e._l = void 0, e[nt] = 0
              },
              delete: function(e) {
                var n = Ze(this, t),
                  r = rt(n, e);
                if (r) {
                  var i = r.n,
                    o = r.p;
                  delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[nt]--
                }
                return !!r
              },
              forEach: function(e) {
                Ze(this, t);
                for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                  for (r(n.v, n.k, this); n && n.r;) n = n.p
              },
              has: function(e) {
                return !!rt(Ze(this, t), e)
              }
            }), f && et(i.prototype, "size", {
              get: function() {
                return Ze(this, t)[nt]
              }
            }), i
          },
          def: function(e, t, n) {
            var r, i, o = rt(e, t);
            return o ? o.v = n : (e._l = o = {
              i: i = tt(t, !0),
              k: t,
              v: n,
              p: r = e._l,
              n: void 0,
              r: !1
            }, e._f || (e._f = o), r && (r.n = o), e[nt]++, "F" !== i && (e._i[i] = o)), e
          },
          getEntry: rt,
          setStrong: function(e, t, n) {
            Ie(e, t, function(e, n) {
              this._t = Ze(e, t), this._k = n, this._l = void 0
            }, function() {
              for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
              return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? xe(0, n.k) : "values" == t ? xe(0, n.v) : xe(0, [n.k, n.v]) : (e._t = void 0, xe(1))
            }, n ? "entries" : "values", !n, !0), $e(t)
          }
        },
        ot = Array.isArray || function(e) {
          return "Array" == C(e)
        },
        st = ve("species"),
        at = function(e) {
          var t;
          return ot(e) && (t = e.constructor, "function" != typeof t || t !== Array && !ot(t.prototype) || (t = void 0), u(t) && null === (t = t[st]) && (t = void 0)), void 0 === t ? Array : t
        },
        ut = function(e, t) {
          return new(at(e))(t)
        },
        ct = _.f,
        lt = function(e, t) {
          var n = 1 == e,
            r = 2 == e,
            i = 3 == e,
            o = 4 == e,
            s = 6 == e,
            u = 5 == e || s,
            c = t || ut;
          return function(t, l, f) {
            for (var h, d, p = te(t), y = I(p), v = a(l, f, 3), m = L(y.length), g = 0, _ = n ? c(t, m) : r ? c(t, 0) : void 0; m > g; g++)
              if ((u || g in y) && (h = y[g], d = v(h, g, p), e))
                if (n) _[g] = d;
                else if (d) switch (e) {
              case 3:
                return !0;
              case 5:
                return h;
              case 6:
                return g;
              case 2:
                _.push(h)
            } else if (o) return !1;
            return s ? -1 : i || o ? o : _
          }
        }(0),
        ft = (function(e, t, n, r, o, s) {
          var a = i[e],
            c = a,
            h = o ? "set" : "add",
            d = c && c.prototype,
            p = {};
          f && "function" == typeof c && (s || d.forEach && !l(function() {
            (new c).entries().next()
          })) ? (c = t(function(t, n) {
            De(t, c, e, "_c"), t._c = new a, void 0 != n && Ke(n, o, t[h], t)
          }), lt("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in d && (!s || "clear" != e) && w(c.prototype, e, function(n, r) {
              if (De(this, c, e), !t && s && !u(n)) return "get" == e && void 0;
              var i = this._c[e](0 === n ? 0 : n, r);
              return t ? this : i
            })
          }), s || ct(c.prototype, "size", {
            get: function() {
              return this._c.size
            }
          })) : (c = r.getConstructor(t, e, o, h), Fe(c.prototype, n), Xe.NEED = !0), _e(c, e), p[e] = c, O(O.G + O.W + O.F, p), s || r.setStrong(c, e, o)
        }("Set", function(e) {
          return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        }, {
          add: function(e) {
            return it.def(Ze(this, "Set"), e = 0 === e ? 0 : e, e)
          }
        }, it), function(e, t) {
          var n = [];
          return Ke(e, !1, n.push, n, t), n
        });
      O(O.P + O.R, "Set", {
        toJSON: function(e) {
          return function() {
            if (Ge(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return ft(this)
          }
        }("Set")
      });
      ! function(e) {
        O(O.S, e, { of: function() {
            for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
            return new this(t)
          }
        })
      }("Set");
      ! function(e) {
        O(O.S, e, {
          from: function(e) {
            var t, n, r, i, o = arguments[1];
            return s(this), t = void 0 !== o, t && s(o), void 0 == e ? new this : (n = [], t ? (r = 0, i = a(o, arguments[2], 2), Ke(e, !1, function(e) {
              n.push(i(e, r++))
            })) : Ke(e, !1, n.push, n), new this(n))
          }
        })
      }("Set");
      var ht = o.Set,
        dt = r(function(e) {
          e.exports = {
            default: ht,
            __esModule: !0
          }
        }),
        pt = n(dt),
        yt = r(function(e, t) {
          t.__esModule = !0, t.default = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }
        }),
        vt = n(yt),
        mt = ve,
        gt = {
          f: mt
        },
        _t = gt.f("iterator"),
        bt = r(function(e) {
          e.exports = {
            default: _t,
            __esModule: !0
          }
        });
      n(bt);
      var wt = _.f,
        Et = function(e) {
          var t = o.Symbol || (o.Symbol = {});
          "_" == e.charAt(0) || e in t || wt(t, e, {
            value: gt.f(e)
          })
        },
        St = function(e) {
          var t = Q(e),
            n = X.f;
          if (n)
            for (var r, i = n(e), o = ee.f, s = 0; i.length > s;) o.call(e, r = i[s++]) && t.push(r);
          return t
        },
        Tt = K.concat("length", "prototype"),
        Ot = Object.getOwnPropertyNames || function(e) {
          return H(e, Tt)
        },
        At = {
          f: Ot
        },
        Ct = At.f,
        It = {}.toString,
        Nt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        xt = function(e) {
          try {
            return Ct(e)
          } catch (e) {
            return Nt.slice()
          }
        },
        jt = function(e) {
          return Nt && "[object Window]" == It.call(e) ? xt(e) : Ct(x(e))
        },
        Pt = {
          f: jt
        },
        Rt = Object.getOwnPropertyDescriptor,
        kt = f ? Rt : function(e, t) {
          if (e = x(e), t = v(t, !0), y) try {
            return Rt(e, t)
          } catch (e) {}
          if (S(e, t)) return b(!ee.f.call(e, t), e[t])
        },
        Lt = {
          f: kt
        },
        Ut = Xe.KEY,
        Ft = Lt.f,
        Dt = _.f,
        Mt = Pt.f,
        Bt = i.Symbol,
        qt = i.JSON,
        Vt = qt && qt.stringify,
        Yt = ve("_hidden"),
        Wt = ve("toPrimitive"),
        zt = {}.propertyIsEnumerable,
        Gt = B("symbol-registry"),
        Jt = B("symbols"),
        Ht = B("op-symbols"),
        Kt = Object.prototype,
        Qt = "function" == typeof Bt,
        $t = i.QObject,
        Xt = !$t || !$t.prototype || !$t.prototype.findChild,
        Zt = f && l(function() {
          return 7 != ye(Dt({}, "a", {
            get: function() {
              return Dt(this, "a", {
                value: 7
              }).a
            }
          })).a
        }) ? function(e, t, n) {
          var r = Ft(Kt, t);
          r && delete Kt[t], Dt(e, t, n), r && e !== Kt && Dt(Kt, t, r)
        } : Dt,
        en = function(e) {
          var t = Jt[e] = ye(Bt.prototype);
          return t._k = e, t
        },
        tn = Qt && "symbol" == typeof Bt.iterator ? function(e) {
          return "symbol" == typeof e
        } : function(e) {
          return e instanceof Bt
        },
        nn = function(e, t, n) {
          return e === Kt && nn(Ht, t, n), c(e), t = v(t, !0), c(n), S(Jt, t) ? (n.enumerable ? (S(e, Yt) && e[Yt][t] && (e[Yt][t] = !1), n = ye(n, {
            enumerable: b(0, !1)
          })) : (S(e, Yt) || Dt(e, Yt, b(1, {})), e[Yt][t] = !0), Zt(e, t, n)) : Dt(e, t, n)
        },
        rn = function(e, t) {
          c(e);
          for (var n, r = St(t = x(t)), i = 0, o = r.length; o > i;) nn(e, n = r[i++], t[n]);
          return e
        },
        on = function(e, t) {
          return void 0 === t ? ye(e) : rn(ye(e), t)
        },
        sn = function(e) {
          var t = zt.call(this, e = v(e, !0));
          return !(this === Kt && S(Jt, e) && !S(Ht, e)) && (!(t || !S(this, e) || !S(Jt, e) || S(this, Yt) && this[Yt][e]) || t)
        },
        an = function(e, t) {
          if (e = x(e), t = v(t, !0), e !== Kt || !S(Jt, t) || S(Ht, t)) {
            var n = Ft(e, t);
            return !n || !S(Jt, t) || S(e, Yt) && e[Yt][t] || (n.enumerable = !0), n
          }
        },
        un = function(e) {
          for (var t, n = Mt(x(e)), r = [], i = 0; n.length > i;) S(Jt, t = n[i++]) || t == Yt || t == Ut || r.push(t);
          return r
        },
        cn = function(e) {
          for (var t, n = e === Kt, r = Mt(n ? Ht : x(e)), i = [], o = 0; r.length > o;) !S(Jt, t = r[o++]) || n && !S(Kt, t) || i.push(Jt[t]);
          return i
        };
      Qt || (Bt = function() {
        if (this instanceof Bt) throw TypeError("Symbol is not a constructor!");
        var e = Y(arguments.length > 0 ? arguments[0] : void 0),
          t = function(n) {
            this === Kt && t.call(Ht, n), S(this, Yt) && S(this[Yt], e) && (this[Yt][e] = !1), Zt(this, e, b(1, n))
          };
        return f && Xt && Zt(Kt, e, {
          configurable: !0,
          set: t
        }), en(e)
      }, ae(Bt.prototype, "toString", function() {
        return this._k
      }), Lt.f = an, _.f = nn, At.f = Pt.f = un, ee.f = sn, X.f = cn, gt.f = function(e) {
        return en(ve(e))
      }), O(O.G + O.W + O.F * !Qt, {
        Symbol: Bt
      });
      for (var ln = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), fn = 0; ln.length > fn;) ve(ln[fn++]);
      for (var hn = Q(ve.store), dn = 0; hn.length > dn;) Et(hn[dn++]);
      O(O.S + O.F * !Qt, "Symbol", {
        for: function(e) {
          return S(Gt, e += "") ? Gt[e] : Gt[e] = Bt(e)
        },
        keyFor: function(e) {
          if (!tn(e)) throw TypeError(e + " is not a symbol!");
          for (var t in Gt)
            if (Gt[t] === e) return t
        },
        useSetter: function() {
          Xt = !0
        },
        useSimple: function() {
          Xt = !1
        }
      }), O(O.S + O.F * !Qt, "Object", {
        create: on,
        defineProperty: nn,
        defineProperties: rn,
        getOwnPropertyDescriptor: an,
        getOwnPropertyNames: un,
        getOwnPropertySymbols: cn
      }), qt && O(O.S + O.F * (!Qt || l(function() {
        var e = Bt();
        return "[null]" != Vt([e]) || "{}" != Vt({
          a: e
        }) || "{}" != Vt(Object(e))
      })), "JSON", {
        stringify: function(e) {
          for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
          if (n = t = r[1], (u(t) || void 0 !== e) && !tn(e)) return ot(t) || (t = function(e, t) {
            if ("function" == typeof n && (t = n.call(this, e, t)), !tn(t)) return t
          }), r[1] = t, Vt.apply(qt, r)
        }
      }), Bt.prototype[Wt] || w(Bt.prototype, Wt, Bt.prototype.valueOf), _e(Bt, "Symbol"), _e(Math, "Math", !0), _e(i.JSON, "JSON", !0), Et("asyncIterator"), Et("observable");
      var pn = o.Symbol,
        yn = r(function(e) {
          e.exports = {
            default: pn,
            __esModule: !0
          }
        });
      n(yn);
      var vn = r(function(e, t) {
        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        t.__esModule = !0;
        var r = n(bt),
          i = n(yn),
          o = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
          };
        t.default = "function" == typeof i.default && "symbol" === o(r.default) ? function(e) {
          return void 0 === e ? "undefined" : o(e)
        } : function(e) {
          return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
        }
      });
      n(vn);
      var mn = r(function(e, t) {
          t.__esModule = !0;
          var n = function(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }(vn);
          t.default = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
          }
        }),
        gn = n(mn),
        _n = function(e, t) {
          if (c(e), !u(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        },
        bn = {
          set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
            try {
              n = a(Function.call, Lt.f(Object.prototype, "__proto__").set, 2), n(e, []), t = !(e instanceof Array)
            } catch (e) {
              t = !0
            }
            return function(e, r) {
              return _n(e, r), t ? e.__proto__ = r : n(e, r), e
            }
          }({}, !1) : void 0),
          check: _n
        };
      O(O.S, "Object", {
        setPrototypeOf: bn.set
      });
      var wn = o.Object.setPrototypeOf,
        En = r(function(e) {
          e.exports = {
            default: wn,
            __esModule: !0
          }
        });
      n(En), O(O.S, "Object", {
        create: ye
      });
      var Sn = o.Object,
        Tn = function(e, t) {
          return Sn.create(e, t)
        },
        On = r(function(e) {
          e.exports = {
            default: Tn,
            __esModule: !0
          }
        });
      n(On);
      var An = r(function(e, t) {
          function n(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }
          t.__esModule = !0;
          var r = n(En),
            i = n(On),
            o = n(vn);
          t.default = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, o.default)(t)));
            e.prototype = (0, i.default)(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t)
          }
        }),
        Cn = n(An),
        In = t.Protocals.CommandType,
        Nn = t.Protocals.GenericCommand,
        xn = t.Protocals.AckCommand,
        jn = function(e) {
          return console.warn(e.message)
        },
        Pn = function(e) {
          function n(r, i, o) {
            vt(this, n);
            var s = gn(this, e.call(this));
            return s._appId = r, s.id = i, s._connection = o, s._eventemitter = new t.EventEmitter, s._querys = new pt, s
          }
          return Cn(n, e), n.prototype._send = function(e) {
            for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
            return (t = this._connection).send.apply(t, [se(e, {
              appId: this._appId,
              installationId: this.id,
              service: 1
            })].concat(r))
          }, n.prototype._open = function() {
            return this._send(new Nn({
              cmd: In.login
            }))
          }, n.prototype.close = function() {
            var e = this._eventemitter;
            return e.emit("beforeclose"), this._send(new Nn({
              cmd: In.logout
            })).then(function() {
              return e.emit("close")
            })
          }, n.prototype.register = function(e) {
            this._querys.add(e)
          }, n.prototype.deregister = function(e) {
            var t = this;
            this._querys.delete(e), setTimeout(function() {
              t._querys.size || t.close().catch(jn)
            }, 0)
          }, n.prototype._dispatchCommand = function(e) {
            return e.cmd !== In.data ? (this.emit("unhandledmessage", e), t.Promise.resolve()) : this._dispatchDataCommand(e)
          }, n.prototype._dispatchDataCommand = function(e) {
            var t = e.dataMessage,
              n = t.ids,
              r = t.msg;
            this.emit("message", r.map(function(e) {
              var t = e.data;
              return JSON.parse(t)
            }));
            var i = new Nn({
              cmd: In.ack,
              ackMessage: new xn({
                ids: n
              })
            });
            return this._send(i, !1).catch(jn)
          }, n
        }(t.EventEmitter),
        Rn = function(e) {
          e._liveQueryClients = {}, e.createLiveQueryClient = function(n) {
            if (void 0 !== e._liveQueryClients[n]) return t.Promise.resolve(e._liveQueryClients[n]);
            var r = e._open().then(function(t) {
              var r = new Pn(e._options.appId, n, t);
              return t.on("reconnect", function() {
                return r._open().then(function() {
                  return r.emit("reconnect")
                }, function(e) {
                  return r.emit("reconnecterror", e)
                })
              }), r._eventemitter.on("beforeclose", function() {
                delete e._liveQueryClients[r.id]
              }, e), r._eventemitter.on("close", function() {
                e._deregister(r)
              }, e), r._open().then(function() {
                return e._liveQueryClients[r.id] = r, e._register(r), r
              })
            }).finally(function() {
              e._deregisterPending && e._deregisterPending(r)
            });
            return e._liveQueryClients[n] = r, e._registerPending && e._registerPending(r), r
          }
        },
        kn = function(e, t) {
          if (!e.installationId || 1 !== e.service) return !0;
          var n = t._liveQueryClients[e.installationId];
          return n ? n._dispatchCommand(e).catch(function(e) {
            return console.warn(e)
          }) : console.warn("Unexpected message received without any live client match: %O", e), !1
        },
        Ln = {
          name: "leancloud-realtime-plugin-live-query",
          onRealtimeCreate: Rn,
          beforeCommandDispatch: kn
        };
      e.LiveQueryPlugin = Ln, Object.defineProperty(e, "__esModule", {
        value: !0
      })
    })
  }])
});
//# sourceMappingURL=av-live-query-weapp-min.js.map