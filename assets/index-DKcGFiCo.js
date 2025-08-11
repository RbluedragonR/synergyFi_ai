import { i as d, a as g, x as h } from "./index-B3oWiE09.js";
import { n as u, c as b } from "./if-defined-EXyKF6lo.js";
const p = d`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
var t = function (a, o, e, n) {
  var c = arguments.length,
    r =
      c < 3 ? o : n === null ? (n = Object.getOwnPropertyDescriptor(o, e)) : n,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(a, o, e, n);
  else
    for (var l = a.length - 1; l >= 0; l--)
      (s = a[l]) && (r = (c < 3 ? s(r) : c > 3 ? s(o, e, r) : s(o, e)) || r);
  return c > 3 && r && Object.defineProperty(o, e, r), r;
};
let i = class extends g {
  constructor() {
    super(...arguments),
      (this.width = ""),
      (this.height = ""),
      (this.borderRadius = "m"),
      (this.variant = "default");
  }
  render() {
    return (
      (this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `),
      h`<slot></slot>`
    );
  }
};
i.styles = [p];
t([u()], i.prototype, "width", void 0);
t([u()], i.prototype, "height", void 0);
t([u()], i.prototype, "borderRadius", void 0);
t([u()], i.prototype, "variant", void 0);
i = t([b("wui-shimmer")], i);
