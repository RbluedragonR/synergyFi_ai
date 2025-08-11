import { a1 as x, i as O, r as W, a as I, x as v } from "./index-B3oWiE09.js";
import { n as y, c as M } from "./if-defined-EXyKF6lo.js";
import "./index-CDkY6vAj.js";
import { Q as N } from "./browser-DL7x0OUv.js";
const A = 0.1,
  k = 2.5,
  $ = 7;
function E(c, r, h) {
  return c === r ? !1 : (c - r < 0 ? r - c : c - r) <= h + A;
}
function Q(c, r) {
  const h = Array.prototype.slice.call(
      N.create(c, { errorCorrectionLevel: r }).modules.data,
      0
    ),
    d = Math.sqrt(h.length);
  return h.reduce(
    (f, u, p) => (p % d === 0 ? f.push([u]) : f[f.length - 1].push(u)) && f,
    []
  );
}
const D = {
    generate({ uri: c, size: r, logoSize: h, dotColor: d = "#141414" }) {
      const f = "transparent",
        p = [],
        l = Q(c, "Q"),
        n = r / l.length,
        C = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      C.forEach(({ x: i, y: e }) => {
        const s = (l.length - $) * n * i,
          t = (l.length - $) * n * e,
          a = 0.45;
        for (let o = 0; o < C.length; o += 1) {
          const g = n * ($ - o * 2);
          p.push(x`
            <rect
              fill=${o === 2 ? d : f}
              width=${o === 0 ? g - 5 : g}
              rx= ${o === 0 ? (g - 5) * a : g * a}
              ry= ${o === 0 ? (g - 5) * a : g * a}
              stroke=${d}
              stroke-width=${o === 0 ? 5 : 0}
              height=${o === 0 ? g - 5 : g}
              x= ${o === 0 ? t + n * o + 5 / 2 : t + n * o}
              y= ${o === 0 ? s + n * o + 5 / 2 : s + n * o}
            />
          `);
        }
      });
      const R = Math.floor((h + 25) / n),
        z = l.length / 2 - R / 2,
        S = l.length / 2 + R / 2 - 1,
        _ = [];
      l.forEach((i, e) => {
        i.forEach((s, t) => {
          if (
            l[e][t] &&
            !(
              (e < $ && t < $) ||
              (e > l.length - ($ + 1) && t < $) ||
              (e < $ && t > l.length - ($ + 1))
            ) &&
            !(e > z && e < S && t > z && t < S)
          ) {
            const a = e * n + n / 2,
              o = t * n + n / 2;
            _.push([a, o]);
          }
        });
      });
      const b = {};
      return (
        _.forEach(([i, e]) => {
          var s;
          b[i] ? (s = b[i]) == null || s.push(e) : (b[i] = [e]);
        }),
        Object.entries(b)
          .map(([i, e]) => {
            const s = e.filter((t) => e.every((a) => !E(t, a, n)));
            return [Number(i), s];
          })
          .forEach(([i, e]) => {
            e.forEach((s) => {
              p.push(x`<circle cx=${i} cy=${s} fill=${d} r=${n / k} />`);
            });
          }),
        Object.entries(b)
          .filter(([i, e]) => e.length > 1)
          .map(([i, e]) => {
            const s = e.filter((t) => e.some((a) => E(t, a, n)));
            return [Number(i), s];
          })
          .map(([i, e]) => {
            e.sort((t, a) => (t < a ? -1 : 1));
            const s = [];
            for (const t of e) {
              const a = s.find((o) => o.some((g) => E(t, g, n)));
              a ? a.push(t) : s.push([t]);
            }
            return [i, s.map((t) => [t[0], t[t.length - 1]])];
          })
          .forEach(([i, e]) => {
            e.forEach(([s, t]) => {
              p.push(x`
              <line
                x1=${i}
                x2=${i}
                y1=${s}
                y2=${t}
                stroke=${d}
                stroke-width=${n / (k / 2)}
                stroke-linecap="round"
              />
            `);
            });
          }),
        p
      );
    },
  },
  T = O`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
var w = function (c, r, h, d) {
  var f = arguments.length,
    u =
      f < 3 ? r : d === null ? (d = Object.getOwnPropertyDescriptor(r, h)) : d,
    p;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    u = Reflect.decorate(c, r, h, d);
  else
    for (var l = c.length - 1; l >= 0; l--)
      (p = c[l]) && (u = (f < 3 ? p(u) : f > 3 ? p(r, h, u) : p(r, h)) || u);
  return f > 3 && u && Object.defineProperty(r, h, u), u;
};
const q = "#3396ff";
let m = class extends I {
  constructor() {
    super(...arguments),
      (this.uri = ""),
      (this.size = 0),
      (this.theme = "dark"),
      (this.imageSrc = void 0),
      (this.alt = void 0),
      (this.arenaClear = void 0),
      (this.farcaster = void 0);
  }
  render() {
    return (
      (this.dataset.theme = this.theme),
      (this.dataset.clear = String(this.arenaClear)),
      (this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? q}
    `),
      v`${this.templateVisual()} ${this.templateSvg()}`
    );
  }
  templateSvg() {
    const r = this.theme === "light" ? this.size : this.size - 32;
    return x`
      <svg height=${r} width=${r}>
        ${D.generate({
          uri: this.uri,
          size: r,
          logoSize: this.arenaClear ? 0 : r / 4,
          dotColor: this.color,
        })}
      </svg>
    `;
  }
  templateVisual() {
    return this.imageSrc
      ? v`<wui-image src=${this.imageSrc} alt=${
          this.alt ?? "logo"
        }></wui-image>`
      : this.farcaster
      ? v`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`
      : v`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
  }
};
m.styles = [W, T];
w([y()], m.prototype, "uri", void 0);
w([y({ type: Number })], m.prototype, "size", void 0);
w([y()], m.prototype, "theme", void 0);
w([y()], m.prototype, "imageSrc", void 0);
w([y()], m.prototype, "alt", void 0);
w([y()], m.prototype, "color", void 0);
w([y({ type: Boolean })], m.prototype, "arenaClear", void 0);
w([y({ type: Boolean })], m.prototype, "farcaster", void 0);
m = w([M("wui-qr-code")], m);
