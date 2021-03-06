"use strict";

var __wpo = { "assets": { "main": ["./img/markcook.c0632d9c.png", "./img/motto.c9a7b0a9.png", "./img/sphinx.42243d5e.png", "./img/vue-occupy.edaffcbe.png", "./js/0.3c715484.js", "./js/1.7a17345a.js", "./js/2.902101b3.js", "./js/3.f28cb2b1.js", "./js/4.c7e4ecc3.js", "./js/5.4c51a44c.js", "./js/6.5059e070.js", "./js/7.a6d5e317.js", "./js/8.03b29123.js", "./js/9.acbb0f32.js", "./js/10.a119cfd7.js", "./js/11.38632155.js", "./js/12.d2868696.js", "./js/13.4b156987.js", "./js/app.ee4cf4fe.js", "./js/vendor.7971fe06.js", "./js/manifest.a5316826.js", "./css/js/app.59600b12.css"], "additional": [], "optional": [] }, "externals": [], "hashesMap": { "e275f4353d60a44598049c916896566957488fe5": "./img/markcook.c0632d9c.png", "e054b9ea5064314a12daf4ccd5ac19e76a53f9f0": "./img/motto.c9a7b0a9.png", "5ab4655b4affd05fcc0ddf1f41df71c9aed0e37b": "./img/sphinx.42243d5e.png", "45db621506d56fd33c960eb0259e35f8aa21e047": "./img/vue-occupy.edaffcbe.png", "b2e847638d76f23741b9f57e3216249aae7c1579": "./js/0.3c715484.js", "dcf4eed779df84c90fbde5a8c6f1a7a72560ed08": "./js/1.7a17345a.js", "7a21db62d8b2311229c6caca64d71823787ea43f": "./js/2.902101b3.js", "a72b3109356a7848172cd663b4041c83584f1eec": "./js/3.f28cb2b1.js", "407ed5142464bd8ef011e61f5459be302cf8be52": "./js/4.c7e4ecc3.js", "25c69715d47323d2471034c9fe20a64355bd382d": "./js/5.4c51a44c.js", "eee019f25f5df02c7280a91c4b6ef1273023f8e0": "./js/6.5059e070.js", "ebe6de98f5b0b511501bee7ca4140531670a1e0a": "./js/7.a6d5e317.js", "c823a803d88e68f9db07617b23637250dbe62c7b": "./js/8.03b29123.js", "5d6eabed88f1c3ef47346bc0e2a1f4a68c352ac4": "./js/9.acbb0f32.js", "7deb7625aeae372e8e19a53a20051b3a46a9f990": "./js/10.a119cfd7.js", "d1dfae656fe6ef1820d01c8f71f41ac87c7b096c": "./js/11.38632155.js", "1efe7f676da072a1120c17e2fa925d7f9fe41f85": "./js/12.d2868696.js", "a892c3eab021970550144b81fa646d3dcdafacd2": "./js/13.4b156987.js", "b3cb657b8fc27eee2fd0a3e87bb762b400793d19": "./js/app.ee4cf4fe.js", "d2a1fe2fd7db40295033d93c43868db41a4c4344": "./js/vendor.7971fe06.js", "cc8523d75b226e95d1bef50a0a634daeb6bb1a01": "./js/manifest.a5316826.js", "27588c2f158de26a4529e4bf0c2797566ce13ea0": "./css/js/app.59600b12.css" }, "strategy": "changed", "responseStrategy": "cache-first", "version": "2018-3-31 16:49:55", "name": "webpack-offline", "pluginVersion": "4.8.5", "relativePaths": true };

!function (e) {
  function n(r) {
    if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }var t = {};n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, n.p = "", n(n.s = 0);
}([function (e, n, t) {
  "use strict";
  function r(e, n) {
    return caches.match(e, { cacheName: n }).then(function (t) {
      return a() ? t : c(t).then(function (t) {
        return caches.open(n).then(function (n) {
          return n.put(e, t);
        }).then(function () {
          return t;
        });
      });
    }).catch(function () {});
  }function o(e, n) {
    return e + (-1 !== e.indexOf("?") ? "&" : "?") + "__uncache=" + encodeURIComponent(n);
  }function i(e) {
    return "navigate" === e.mode || e.headers.get("Upgrade-Insecure-Requests") || -1 !== (e.headers.get("Accept") || "").indexOf("text/html");
  }function a(e) {
    return !e || !e.redirected || !e.ok || "opaqueredirect" === e.type;
  }function c(e) {
    return a(e) ? Promise.resolve(e) : ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (n) {
      return new Response(n, { headers: e.headers, status: e.status });
    });
  }function s(e) {
    return Object.keys(e).reduce(function (n, t) {
      return n[t] = e[t], n;
    }, {});
  }function u(e, n) {
    console.groupCollapsed("[SW]:", e), n.forEach(function (e) {
      console.log("Asset:", e);
    }), console.groupEnd();
  }if (function () {
    var e = ExtendableEvent.prototype.waitUntil,
        n = FetchEvent.prototype.respondWith,
        t = new WeakMap();ExtendableEvent.prototype.waitUntil = function (n) {
      var r = this,
          o = t.get(r);return o ? void o.push(Promise.resolve(n)) : (o = [Promise.resolve(n)], t.set(r, o), e.call(r, Promise.resolve().then(function e() {
        var n = o.length;return Promise.all(o.map(function (e) {
          return e.catch(function () {});
        })).then(function () {
          return o.length != n ? e() : (t.delete(r), Promise.all(o));
        });
      })));
    }, FetchEvent.prototype.respondWith = function (e) {
      return this.waitUntil(e), n.call(this, e);
    };
  }(), void 0 === f) var f = !1;!function (e, n) {
    function t() {
      if (!R.additional.length) return Promise.resolve();f && console.log("[SW]:", "Caching additional");var e = void 0;return e = "changed" === b ? l("additional") : a("additional"), e.catch(function (e) {
        console.error("[SW]:", "Cache section `additional` failed to load");
      });
    }function a(n) {
      var t = R[n];return caches.open(E).then(function (n) {
        return w(n, t, { bust: e.version, request: e.prefetchRequest });
      }).then(function () {
        u("Cached assets: " + n, t);
      }).catch(function (e) {
        throw console.error(e), e;
      });
    }function l(n) {
      return d().then(function (t) {
        if (!t) return a(n);var r = t[0],
            o = t[1],
            i = t[2],
            c = i.hashmap,
            s = i.version;if (!i.hashmap || s === e.version) return a(n);var f = Object.keys(c).map(function (e) {
          return c[e];
        }),
            l = o.map(function (e) {
          var n = new URL(e.url);return n.search = "", n.hash = "", n.toString();
        }),
            h = R[n],
            d = [],
            p = h.filter(function (e) {
          return -1 === l.indexOf(e) || -1 === f.indexOf(e);
        });Object.keys(W).forEach(function (e) {
          var n = W[e];if (-1 !== h.indexOf(n) && -1 === p.indexOf(n) && -1 === d.indexOf(n)) {
            var t = c[e];t && -1 !== l.indexOf(t) ? d.push([t, n]) : p.push(n);
          }
        }), u("Changed assets: " + n, p), u("Moved assets: " + n, d);var v = Promise.all(d.map(function (e) {
          return r.match(e[0]).then(function (n) {
            return [e[1], n];
          });
        }));return caches.open(E).then(function (n) {
          var t = v.then(function (e) {
            return Promise.all(e.map(function (e) {
              return n.put(e[0], e[1]);
            }));
          });return Promise.all([t, w(n, p, { bust: e.version, request: e.prefetchRequest })]);
        });
      });
    }function h() {
      return caches.keys().then(function (e) {
        var n = e.map(function (e) {
          if (0 === e.indexOf(P) && 0 !== e.indexOf(E)) return console.log("[SW]:", "Delete cache:", e), caches.delete(e);
        });return Promise.all(n);
      });
    }function d() {
      return caches.keys().then(function (e) {
        for (var n = e.length, t = void 0; n-- && (t = e[n], 0 !== t.indexOf(P));) {}if (t) {
          var r = void 0;return caches.open(t).then(function (e) {
            return r = e, e.match(new URL(j, location).toString());
          }).then(function (e) {
            if (e) return Promise.all([r, r.keys(), e.json()]);
          });
        }
      });
    }function p() {
      return caches.open(E).then(function (n) {
        var t = new Response(JSON.stringify({ version: e.version, hashmap: W }));return n.put(new URL(j, location).toString(), t);
      });
    }function v(e, n, t) {
      return r(t, E).then(function (r) {
        return r ? (f && console.log("[SW]:", "URL [" + t + "](" + n + ") from cache"), r) : fetch(e.request).then(function (r) {
          return r.ok ? (f && console.log("[SW]:", "URL [" + n + "] from network"), t === n && function () {
            var t = r.clone(),
                o = caches.open(E).then(function (e) {
              return e.put(n, t);
            }).then(function () {
              console.log("[SW]:", "Cache asset: " + n);
            });e.waitUntil(o);
          }(), r) : (f && console.log("[SW]:", "URL [" + n + "] wrong response: [" + r.status + "] " + r.type), r);
        });
      });
    }function g(e, n, t) {
      return fetch(e.request).then(function (e) {
        if (e.ok) return f && console.log("[SW]:", "URL [" + n + "] from network"), e;throw new Error("Response is not ok");
      }).catch(function () {
        return f && console.log("[SW]:", "URL [" + n + "] from cache if possible"), r(t, E);
      });
    }function m(e) {
      return e.catch(function () {}).then(function (e) {
        var n = e && e.ok,
            t = e && "opaqueredirect" === e.type;return n || t && !F ? e : (f && console.log("[SW]:", "Loading navigation fallback [" + C + "] from cache"), r(C, E));
      });
    }function w(e, n, t) {
      var r = !1 !== t.allowLoaders,
          i = t && t.bust,
          a = t.request || { credentials: "omit", mode: "cors" };return Promise.all(n.map(function (e) {
        return i && (e = o(e, i)), fetch(e, a).then(c);
      })).then(function (o) {
        if (o.some(function (e) {
          return !e.ok;
        })) return Promise.reject(new Error("Wrong response status"));var i = [],
            a = o.map(function (t, o) {
          return r && i.push(y(n[o], t)), e.put(n[o], t);
        });return i.length ? function () {
          var r = s(t);r.allowLoaders = !1;var o = a;a = Promise.all(i).then(function (t) {
            var i = [].concat.apply([], t);return n.length && (o = o.concat(w(e, i, r))), Promise.all(o);
          });
        }() : a = Promise.all(a), a;
      });
    }function y(e, n) {
      var t = Object.keys(U).map(function (t) {
        if (-1 !== U[t].indexOf(e) && O[t]) return O[t](n.clone());
      }).filter(function (e) {
        return !!e;
      });return Promise.all(t).then(function (e) {
        return [].concat.apply([], e);
      });
    }function x(e) {
      var n = e.url,
          t = new URL(n),
          r = void 0;r = "navigate" === e.mode ? "navigate" : t.origin === location.origin ? "same-origin" : "cross-origin";for (var o = 0; o < k.length; o++) {
        var i = k[o];if (i && (!i.requestTypes || -1 !== i.requestTypes.indexOf(r))) {
          var a = void 0;if ((a = "function" == typeof i.match ? i.match(t, e) : n.replace(i.match, i.to)) && a !== n) return a;
        }
      }
    }var O = n.loaders,
        k = n.cacheMaps,
        b = e.strategy,
        S = e.responseStrategy,
        R = e.assets,
        U = e.loaders || {},
        W = e.hashesMap,
        L = e.externals,
        P = e.name,
        q = e.version,
        E = P + ":" + q,
        j = "__offline_webpack__data";!function () {
      Object.keys(R).forEach(function (e) {
        R[e] = R[e].map(function (e) {
          var n = new URL(e, location);return n.hash = "", -1 === L.indexOf(e) && (n.search = ""), n.toString();
        });
      }), Object.keys(U).forEach(function (e) {
        U[e] = U[e].map(function (e) {
          var n = new URL(e, location);return n.hash = "", -1 === L.indexOf(e) && (n.search = ""), n.toString();
        });
      }), W = Object.keys(W).reduce(function (e, n) {
        var t = new URL(W[n], location);return t.search = "", t.hash = "", e[n] = t.toString(), e;
      }, {}), L = L.map(function (e) {
        var n = new URL(e, location);return n.hash = "", n.toString();
      });
    }();var _ = [].concat(R.main, R.additional, R.optional),
        C = e.navigateFallbackURL,
        F = e.navigateFallbackForRedirects;self.addEventListener("install", function (e) {
      console.log("[SW]:", "Install event");var n = void 0;n = "changed" === b ? l("main") : a("main"), e.waitUntil(n);
    }), self.addEventListener("activate", function (e) {
      console.log("[SW]:", "Activate event");var n = t();n = n.then(p), n = n.then(h), n = n.then(function () {
        if (self.clients && self.clients.claim) return self.clients.claim();
      }), e.waitUntil(n);
    }), self.addEventListener("fetch", function (e) {
      var n = new URL(e.request.url);n.hash = "";var t = n.toString();-1 === L.indexOf(t) && (n.search = "", t = n.toString());var r = "GET" === e.request.method,
          o = -1 !== _.indexOf(t),
          a = t;if (!o) {
        var c = x(e.request);c && (a = c, o = !0);
      }if (!o && r && C && i(e.request)) return void e.respondWith(m(fetch(e.request)));if (!o || !r) return void (n.origin !== location.origin && -1 !== navigator.userAgent.indexOf("Firefox/44.") && e.respondWith(fetch(e.request)));var s = void 0;s = "network-first" === S ? g(e, t, a) : v(e, t, a), C && i(e.request) && (s = m(s)), e.respondWith(s);
    }), self.addEventListener("message", function (e) {
      var n = e.data;if (n) switch (n.action) {case "skipWaiting":
          self.skipWaiting && self.skipWaiting();}
    });
  }(__wpo, { loaders: {}, cacheMaps: [] }), e.exports = t(1);
}, function (e, n) {}]);
//# sourceMappingURL=sw.js.map