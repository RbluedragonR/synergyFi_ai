import { i as c, r as b, j as f, a as p, x as m } from "./index-B3oWiE09.js";
import { n as u, c as x, o as g } from "./if-defined-EXyKF6lo.js";
const h = c`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var l = function (n, e, r, i) {
  var s = arguments.length,
    t =
      s < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, r)) : i,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(n, e, r, i);
  else
    for (var d = n.length - 1; d >= 0; d--)
      (a = n[d]) && (t = (s < 3 ? a(t) : s > 3 ? a(e, r, t) : a(e, r)) || t);
  return s > 3 && t && Object.defineProperty(e, r, t), t;
};
let o = class extends p {
  constructor() {
    super(...arguments),
      (this.tabIdx = void 0),
      (this.disabled = !1),
      (this.color = "inherit");
  }
  render() {
    return m`
      <button ?disabled=${this.disabled} tabindex=${g(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
  }
};
o.styles = [b, f, h];
l([u()], o.prototype, "tabIdx", void 0);
l([u({ type: Boolean })], o.prototype, "disabled", void 0);
l([u()], o.prototype, "color", void 0);
o = l([x("wui-link")], o);
