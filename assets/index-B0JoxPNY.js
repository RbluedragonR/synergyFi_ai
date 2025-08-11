import { i as h, r as g, j as p, a as f, x as v } from "./index-B3oWiE09.js";
import { n as s, c as x } from "./if-defined-EXyKF6lo.js";
const y = h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
var e = function (d, i, n, l) {
  var a = arguments.length,
    r =
      a < 3 ? i : l === null ? (l = Object.getOwnPropertyDescriptor(i, n)) : l,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(d, i, n, l);
  else
    for (var t = d.length - 1; t >= 0; t--)
      (c = d[t]) && (r = (a < 3 ? c(r) : a > 3 ? c(i, n, r) : c(i, n)) || r);
  return a > 3 && r && Object.defineProperty(i, n, r), r;
};
let o = class extends f {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.backgroundColor = "accent-100"),
      (this.iconColor = "accent-100"),
      (this.background = "transparent"),
      (this.border = !1),
      (this.borderColor = "wui-color-bg-125"),
      (this.icon = "copy");
  }
  render() {
    const i = this.iconSize || this.size,
      n = this.size === "lg",
      l = this.size === "xl",
      a = n ? "12%" : "16%",
      r = n ? "xxs" : l ? "s" : "3xl",
      c = this.background === "gray",
      t = this.background === "opaque",
      b =
        (this.backgroundColor === "accent-100" && t) ||
        (this.backgroundColor === "success-100" && t) ||
        (this.backgroundColor === "error-100" && t) ||
        (this.backgroundColor === "inverse-100" && t);
    let u = `var(--wui-color-${this.backgroundColor})`;
    return (
      b
        ? (u = `var(--wui-icon-box-bg-${this.backgroundColor})`)
        : c && (u = `var(--wui-color-gray-${this.backgroundColor})`),
      (this.style.cssText = `
       --local-bg-value: ${u};
       --local-bg-mix: ${b || c ? "100%" : a};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${
         this.borderColor === "wui-color-bg-125" ? "2px" : "1px"
       } solid ${this.border ? `var(--${this.borderColor})` : "transparent"}
   `),
      v` <wui-icon color=${this.iconColor} size=${i} name=${this.icon}></wui-icon> `
    );
  }
};
o.styles = [g, p, y];
e([s()], o.prototype, "size", void 0);
e([s()], o.prototype, "backgroundColor", void 0);
e([s()], o.prototype, "iconColor", void 0);
e([s()], o.prototype, "iconSize", void 0);
e([s()], o.prototype, "background", void 0);
e([s({ type: Boolean })], o.prototype, "border", void 0);
e([s()], o.prototype, "borderColor", void 0);
e([s()], o.prototype, "icon", void 0);
o = e([x("wui-icon-box")], o);
