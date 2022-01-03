var app = function () {
      "use strict";

      function t() {}

      function e(t) {
            return t()
      }

      function n() {
            return Object.create(null)
      }

      function s(t) {
            t.forEach(e)
      }

      function o(t) {
            return "function" == typeof t
      }

      function c(t, e) {
            return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
      }

      function i(t, e) {
            t.appendChild(e)
      }

      function r(t, e, n) {
            t.insertBefore(e, n || null)
      }

      function l(t) {
            t.parentNode.removeChild(t)
      }

      function a(t) {
            return document.createElement(t)
      }

      function u(t) {
            return document.createTextNode(t)
      }

      function d() {
            return u(" ")
      }

      function h(t, e, n, s) {
            return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s)
      }

      function p(t, e, n) {
            null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
      }

      function f(t) {
            return "" === t ? null : +t
      }

      function m(t, e) {
            e = "" + e, t.wholeText !== e && (t.data = e)
      }

      function v(t, e) {
            t.value = null == e ? "" : e
      }

      function b(t, e, n) {
            t.classList[n ? "add" : "remove"](e)
      }
      let g;

      function y(t) {
            g = t
      }

      function w() {
            if (!g) throw new Error("Function called outside component initialization");
            return g
      }
      const x = [],
            k = [],
            $ = [],
            E = [],
            _ = Promise.resolve();
      let C = !1;

      function j(t) {
            $.push(t)
      }
      const P = new Set;
      let T = 0;

      function S() {
            const t = g;
            do {
                  for (; T < x.length;) {
                        const t = x[T];
                        T++, y(t), L(t.$$)
                  }
                  for (y(null), x.length = 0, T = 0; k.length;) k.pop()();
                  for (let t = 0; t < $.length; t += 1) {
                        const e = $[t];
                        P.has(e) || (P.add(e), e())
                  }
                  $.length = 0
            } while (x.length);
            for (; E.length;) E.pop()();
            C = !1, P.clear(), y(t)
      }

      function L(t) {
            if (null !== t.fragment) {
                  t.update(), s(t.before_update);
                  const e = t.dirty;
                  t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(j)
            }
      }
      const A = new Set;
      let N;

      function O(t, e) {
            t && t.i && (A.delete(t), t.i(e))
      }

      function G(t, e) {
            const n = e.token = {};

            function o(t, o, c, i) {
                  if (e.token !== n) return;
                  e.resolved = i;
                  let r = e.ctx;
                  void 0 !== c && (r = r.slice(), r[c] = i);
                  const l = t && (e.current = t)(r);
                  let a = !1;
                  e.block && (e.blocks ? e.blocks.forEach(((t, n) => {
                        n !== o && t && (N = {
                              r: 0,
                              c: [],
                              p: N
                        }, function (t, e, n, s) {
                              if (t && t.o) {
                                    if (A.has(t)) return;
                                    A.add(t), N.c.push((() => {
                                          A.delete(t), s && (n && t.d(1), s())
                                    })), t.o(e)
                              }
                        }(t, 1, 1, (() => {
                              e.blocks[n] === t && (e.blocks[n] = null)
                        })), N.r || s(N.c), N = N.p)
                  })) : e.block.d(1), l.c(), O(l, 1), l.m(e.mount(), e.anchor), a = !0), e.block = l, e.blocks && (e.blocks[o] = l), a && S()
            }
            if ((c = t) && "object" == typeof c && "function" == typeof c.then) {
                  const n = w();
                  if (t.then((t => {
                              y(n), o(e.then, 1, e.value, t), y(null)
                        }), (t => {
                              if (y(n), o(e.catch, 2, e.error, t), y(null), !e.hasCatch) throw t
                        })), e.current !== e.pending) return o(e.pending, 0), !0
            } else {
                  if (e.current !== e.then) return o(e.then, 1, e.value, t), !0;
                  e.resolved = t
            }
            var c
      }

      function H(t, e) {
            -1 === t.$$.dirty[0] && (x.push(t), C || (C = !0, _.then(S)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
      }

      function M(c, i, r, a, u, d, h, p = [-1]) {
            const f = g;
            y(c);
            const m = c.$$ = {
                  fragment: null,
                  ctx: null,
                  props: d,
                  update: t,
                  not_equal: u,
                  bound: n(),
                  on_mount: [],
                  on_destroy: [],
                  on_disconnect: [],
                  before_update: [],
                  after_update: [],
                  context: new Map(i.context || (f ? f.$$.context : [])),
                  callbacks: n(),
                  dirty: p,
                  skip_bound: !1,
                  root: i.target || f.$$.root
            };
            h && h(m.root);
            let v = !1;
            if (m.ctx = r ? r(c, i.props || {}, ((t, e, ...n) => {
                        const s = n.length ? n[0] : e;
                        return m.ctx && u(m.ctx[t], m.ctx[t] = s) && (!m.skip_bound && m.bound[t] && m.bound[t](s), v && H(c, t)), e
                  })) : [], m.update(), v = !0, s(m.before_update), m.fragment = !!a && a(m.ctx), i.target) {
                  if (i.hydrate) {
                        const t = function (t) {
                              return Array.from(t.childNodes)
                        }(i.target);
                        m.fragment && m.fragment.l(t), t.forEach(l)
                  } else m.fragment && m.fragment.c();
                  i.intro && O(c.$$.fragment),
                        function (t, n, c, i) {
                              const {
                                    fragment: r,
                                    on_mount: l,
                                    on_destroy: a,
                                    after_update: u
                              } = t.$$;
                              r && r.m(n, c), i || j((() => {
                                    const n = l.map(e).filter(o);
                                    a ? a.push(...n) : s(n), t.$$.on_mount = []
                              })), u.forEach(j)
                        }(c, i.target, i.anchor, i.customElement), S()
            }
            y(f)
      }

      function F(t, e, n) {
            const s = t.slice();
            return s[23] = e[n], s[24] = e, s[25] = n, s
      }

      function U(t) {
            let e, n, s, o, c, h, f, v, b, g = t[26] + "",
                  y = t[26] + "",
                  w = t[26] + "";
            return {
                  c() {
                        e = a("tr"), n = a("td"), s = u(g), o = d(), c = a("td"), h = u(y), f = d(), v = a("td"), b = u(w), p(n, "id", "account"), p(c, "id", "username"), p(v, "id", "password"), p(e, "key", "")
                  },
                  m(t, l) {
                        r(t, e, l), i(e, n), i(n, s), i(e, o), i(e, c), i(c, h), i(e, f), i(e, v), i(v, b)
                  },
                  p(t, e) {
                        1 & e && g !== (g = t[26] + "") && m(s, g), 1 & e && y !== (y = t[26] + "") && m(h, y), 1 & e && w !== (w = t[26] + "") && m(b, w)
                  },
                  d(t) {
                        t && l(e)
                  }
            }
      }

      function K(t) {
            let e, n = t[22],
                  s = [];
            for (let e = 0; e < n.length; e += 1) s[e] = D(F(t, n, e));
            return {
                  c() {
                        for (let t = 0; t < s.length; t += 1) s[t].c();
                        e = u("")
                  },
                  m(t, n) {
                        for (let e = 0; e < s.length; e += 1) s[e].m(t, n);
                        r(t, e, n)
                  },
                  p(t, o) {
                        if (513 & o) {
                              let c;
                              for (n = t[22], c = 0; c < n.length; c += 1) {
                                    const i = F(t, n, c);
                                    s[c] ? s[c].p(i, o) : (s[c] = D(i), s[c].c(), s[c].m(e.parentNode, e))
                              }
                              for (; c < s.length; c += 1) s[c].d(1);
                              s.length = n.length
                        }
                  },
                  d(t) {
                        ! function (t, e) {
                              for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
                        }(s, t), t && l(e)
                  }
            }
      }

      function D(t) {
            let e, n, c, u, f, m, b, g, y, w, x, k, $, E, _, C, j, P, T, S;

            function L() {
                  t[21].call($, t[24], t[25])
            }
            return {
                  c() {
                        e = a("tr"), n = a("td"), c = a("input"), f = d(), m = a("td"), b = a("input"), y = d(), w = a("td"), x = a("div"), k = a("p"), $ = a("input"), E = d(), _ = a("p"), C = a("a"), C.textContent = "Del", j = d(), p(c, "type", "text"), c.value = u = t[23].Account, p(c, "class", "input"), p(n, "id", "account"), p(b, "type", "text"), b.value = g = t[23].Username, p(b, "class", "input"), p(m, "id", "username"), p($, "class", "input"), p($, "type", "text"), p($, "placeholder", "Password"), p(k, "class", "control is-expanded"), p(C, "class", "button"), p(C, "id", "del"), p(_, "class", "control"), p(x, "class", "field has-addons"), p(w, "id", "password"), p(e, "key", P = t[23].Key)
                  },
                  m(s, l) {
                        r(s, e, l), i(e, n), i(n, c), i(e, f), i(e, m), i(m, b), i(e, y), i(e, w), i(w, x), i(x, k), i(k, $), v($, t[23].Password), i(x, E), i(x, _), i(_, C), i(w, j), T || (S = [h($, "input", L), h(C, "click", (function () {
                              o(t[9](t[23].Key)) && t[9](t[23].Key).apply(this, arguments)
                        }))], T = !0)
                  },
                  p(n, s) {
                        t = n, 1 & s && u !== (u = t[23].Account) && c.value !== u && (c.value = u), 1 & s && g !== (g = t[23].Username) && b.value !== g && (b.value = g), 1 & s && $.value !== t[23].Password && v($, t[23].Password), 1 & s && P !== (P = t[23].Key) && p(e, "key", P)
                  },
                  d(t) {
                        t && l(e), T = !1, s(S)
                  }
            }
      }

      function J(e) {
            let n;
            return {
                  c() {
                        n = a("tr"), n.innerHTML = '<td id="account"></td> \n                    <td id="username"></td> \n                    <td id="password"></td>', p(n, "key", "testkey1")
                  },
                  m(t, e) {
                        r(t, n, e)
                  },
                  p: t,
                  d(t) {
                        t && l(n)
                  }
            }
      }

      function Y(e) {
            let n, o, c, u, m, g, y, w, x, k, $, E, _, C, j, P, T, S, L, A, N, O, H, M, F, D, Y, q, z, B, I, Q, R, V, W, X, Z, tt, et, nt, st, ot, ct, it, rt, lt, at, ut, dt, ht, pt, ft, mt, vt, bt, gt, yt, wt, xt, kt, $t, Et, _t, Ct, jt, Pt, Tt = {
                  ctx: e,
                  current: null,
                  token: null,
                  hasCatch: !0,
                  pending: J,
                  then: K,
                  catch: U,
                  value: 22,
                  error: 26
            };
            return G(Et = e[0], Tt), {
                  c() {
                        n = a("style"), n.textContent = "body {\r\n      margin: 0;\r\n\tpadding: 0;\r\n    }", o = d(), c = a("section"), u = a("div"), m = a("div"), g = a("div"), y = a("div"), y.innerHTML = '<section class="is-large"><div class="title">Password Generator</div> \n            <div class="subtitle">Generate a secure password from 4 to 64 characters with the options of your choice.</div></section>', w = d(), x = a("div"), k = a("section"), $ = a("div"), E = a("p"), _ = a("input"), C = d(), j = a("div"), P = a("p"), T = a("input"), S = d(), L = a("p"), A = a("a"), A.textContent = "Generate", N = d(), O = a("div"), O.innerHTML = '<h2 class="subtitle">Choose your options</h2>', H = d(), M = a("div"), F = a("div"), D = a("div"), D.textContent = "LowerCase", Y = d(), q = a("div"), q.textContent = "UpperCase", z = d(), B = a("div"), B.textContent = "Numbers", I = d(), Q = a("div"), Q.textContent = "Special Characters", R = d(), V = a("section"), W = a("div"), X = a("div"), Z = a("div"), tt = a("div"), tt.innerHTML = '<section class="is-large"><div class="title">Save Your New Password</div> \n            <div class="subtitle">Save the generated password for later use!</div></section>', et = d(), nt = a("div"), st = a("section"), ot = a("div"), ct = a("p"), it = a("input"), rt = d(), lt = a("div"), at = a("p"), ut = a("input"), dt = d(), ht = a("div"), pt = a("p"), ft = a("input"), mt = d(), vt = a("p"), bt = a("a"), bt.textContent = "Save", gt = d(), yt = a("div"), wt = a("div"), xt = a("section"), kt = a("table"), $t = a("tbody"), Tt.block.c(), _t = d(), Ct = a("footer"), Ct.innerHTML = '<div class="content has-text-centered"><p>|    <strong>nated.ca</strong> This is nate typing in a description about he password management app I am making.</p></div>', p(y, "class", "column is-two-fifths"), p(_, "class", "input"), p(_, "id", "password"), p(_, "type", "text"), p(_, "placeholder", "Your Password Here"), p(E, "class", "control is-expanded"), p($, "class", "field has-addons"), p(T, "class", "input"), p(T, "id", "length"), p(T, "type", "number"), p(T, "min", "4"), p(T, "max", "64"), p(T, "placeholder", "Password Length"), p(P, "class", "control is-expanded"), p(A, "class", "button"), p(A, "id", "submit"), p(L, "class", "control"), p(j, "class", "field has-addons"), p(O, "class", "field is-expanded is-full-width"), p(D, "class", "button"), p(D, "id", "lowercase"), b(D, "is-success", e[2]), p(q, "class", "button"), p(q, "id", "uppercase"), b(q, "is-success", e[3]), p(B, "class", "button"), p(B, "id", "number"), b(B, "is-success", e[4]), p(Q, "class", "button"), p(Q, "id", "special"), b(Q, "is-success", e[5]), p(F, "class", "buttons is-left"), p(M, "class", "field"), p(k, "class", "is-large"), p(x, "class", "column is-three-fifths"), p(g, "class", "columns"), p(m, "class", "container is-max-desktop"), p(u, "class", "hero-body"), p(c, "class", "hero is-info is-halfheight"), p(tt, "class", "column is-two-fifths"), p(it, "class", "input"), p(it, "type", "text"), p(it, "placeholder", "Account"), p(ct, "class", "control is-expanded"), p(ot, "class", "field"), p(ut, "class", "input"), p(ut, "type", "text"), p(ut, "placeholder", "Username"), p(at, "class", "control is-expanded"), p(lt, "class", "field"), p(ft, "class", "input"), p(ft, "type", "text"), p(ft, "placeholder", "Password"), p(pt, "class", "control is-expanded"), p(bt, "class", "button"), p(bt, "id", "save"), p(vt, "class", "control"), p(ht, "class", "field has-addons"), p(st, "class", "is-large"), p(nt, "class", "column is-three-fifths"), p(Z, "class", "columns"), p(kt, "class", "table is-fullwidth"), p(xt, "class", "is-large"), p(wt, "class", "column is-full-width"), p(yt, "class", "columns"), p(X, "class", "container is-max-desktop"), p(W, "class", "hero-body"), p(V, "class", "hero is-halfheight"), p(Ct, "class", "footer")
                  },
                  m(t, s) {
                        var l;
                        i(document.head, n), r(t, o, s), r(t, c, s), i(c, u), i(u, m), i(m, g), i(g, y), i(g, w), i(g, x), i(x, k), i(k, $), i($, E), i(E, _), v(_, e[8]), i(k, C), i(k, j), i(j, P), i(P, T), v(T, e[1]), i(j, S), i(j, L), i(L, A), i(k, N), i(k, O), i(k, H), i(k, M), i(M, F), i(F, D), i(F, Y), i(F, q), i(F, z), i(F, B), i(F, I), i(F, Q), r(t, R, s), r(t, V, s), i(V, W), i(W, X), i(X, Z), i(Z, tt), i(Z, et), i(Z, nt), i(nt, st), i(st, ot), i(ot, ct), i(ct, it), v(it, e[6]), i(st, rt), i(st, lt), i(lt, at), i(at, ut), v(ut, e[7]), i(st, dt), i(st, ht), i(ht, pt), i(pt, ft), v(ft, e[8]), i(ht, mt), i(ht, vt), i(vt, bt), i(X, gt), i(X, yt), i(yt, wt), i(wt, xt), i(xt, kt), i(kt, $t), Tt.block.m($t, Tt.anchor = null), Tt.mount = () => $t, Tt.anchor = null, r(t, _t, s), r(t, Ct, s), jt || (Pt = [h(_, "input", e[12]), h(T, "input", e[13]), h(A, "click", (l = e[10], function (t) {
                              return t.preventDefault(), l.call(this, t)
                        })), h(D, "click", e[14]), h(q, "click", e[15]), h(B, "click", e[16]), h(Q, "click", e[17]), h(it, "input", e[18]), h(ut, "input", e[19]), h(ft, "input", e[20]), h(bt, "click", e[11])], jt = !0)
                  },
                  p(t, [n]) {
                        e = t, 256 & n && _.value !== e[8] && v(_, e[8]), 2 & n && f(T.value) !== e[1] && v(T, e[1]), 4 & n && b(D, "is-success", e[2]), 8 & n && b(q, "is-success", e[3]), 16 & n && b(B, "is-success", e[4]), 32 & n && b(Q, "is-success", e[5]), 64 & n && it.value !== e[6] && v(it, e[6]), 128 & n && ut.value !== e[7] && v(ut, e[7]), 256 & n && ft.value !== e[8] && v(ft, e[8]), Tt.ctx = e, 1 & n && Et !== (Et = e[0]) && G(Et, Tt) || function (t, e, n) {
                              const s = e.slice(),
                                    {
                                          resolved: o
                                    } = t;
                              t.current === t.then && (s[t.value] = o), t.current === t.catch && (s[t.error] = o), t.block.p(s, n)
                        }(Tt, e, n)
                  },
                  i: t,
                  o: t,
                  d(t) {
                        l(n), t && l(o), t && l(c), t && l(R), t && l(V), Tt.block.d(), Tt.token = null, Tt = null, t && l(_t), t && l(Ct), jt = !1, s(Pt)
                  }
            }
      }

      function q(t, e, n) {
            let s = fetch("http://localhost:8080/db", {
                        method: "GET",
                        headers: {
                              "content-type": "application/json"
                        }
                  }).then((t => t.json())).then((t => {
                        if (200 != t.Status ) throw error;
                        return t.Fields
                  })).catch((t => {
                        throw t
                  })),
                  o = 8,
                  c = !0,
                  i = !1,
                  r = !1,
                  l = !1,
                  a = "",
                  u = "",
                  d = "";
            return [s, o, c, i, r, l, a, u, d, function (t) {
                  fetch("http://localhost:8080/db/" + t, {
                        method: "DELETE"
                  }).then((t => t.json())).then((t => {
                        if (200 != t.Status) throw error;
                        n(0, s = fetch("http://localhost:8080/db", {
                              method: "GET",
                              headers: {
                                    "content-type": "application/json"
                              }
                        }).then((t => t.json())).then((t => t.Fields)).catch((t => {
                              throw t
                        })))
                  })).catch((t => {
                        throw t
                  }))
            }, function () {
                  let t = {
                        length: o,
                        lower: c,
                        upper: i,
                        number: r,
                        special: l
                  };
                  fetch("http://localhost:8080/pw", {
                        method: "POST",
                        body: JSON.stringify(t),
                        headers: {
                              "content-type": "application/json"
                        }
                  }).then((t => t.json())).then((t => {
                        n(8, d = t.Password)
                  })).catch((t => {
                        throw t
                  }))
            }, function () {
                  if ("" != a || "" != u || "" != d) {
                        let t = {
                              Account: a,
                              Username: u,
                              Password: d
                        };
                        fetch("http://localhost:8080/db", {
                              method: "POST",
                              body: JSON.stringify(t),
                              headers: {
                                    "content-type": "application/json"
                              }
                        }).then((t => t.json())).then((t => {
                              if (200 != t.Status) throw error;
                              n(0, s = fetch("http://localhost:8080/db", {
                                    method: "GET",
                                    headers: {
                                          "content-type": "application/json"
                                    }
                              }).then((t => t.json())).then((t => t.Fields)).catch((t => {
                                    throw t
                              })))
                        }))
                  } else console.log("Fields must not be be blank.")
            }, function () {
                  d = this.value, n(8, d)
            }, function () {
                  o = f(this.value), n(1, o)
            }, () => n(2, c = !c), () => n(3, i = !i), () => n(4, r = !r), () => n(5, l = !l), function () {
                  a = this.value, n(6, a)
            }, function () {
                  u = this.value, n(7, u)
            }, function () {
                  d = this.value, n(8, d)
            }, function (t, e) {
                  t[e].Password = this.value, n(0, s)
            }]
      }
      return new class extends class {
            $destroy() {
                  ! function (t, e) {
                        const n = t.$$;
                        null !== n.fragment && (s(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
                  }(this, 1), this.$destroy = t
            }
            $on(t, e) {
                  const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                  return n.push(e), () => {
                        const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                  }
            }
            $set(t) {
                  var e;
                  this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
            }
      } {
            constructor(t) {
                  super(), M(this, t, q, Y, c, {})
            }
      }({
            target: document.body,
            props: {
                  name: "world"
            }
      })
}();
//# sourceMappingURL=bundle.js.map