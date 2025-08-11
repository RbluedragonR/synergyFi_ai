import { i as p, r as f, a as d, x as s } from "./index-B3oWiE09.js";
import { n as g, c as m } from "./if-defined-EXyKF6lo.js";
const x = p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;
var c = function (o, e, r, n) {
  var i = arguments.length,
    t =
      i < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, r)) : n,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(o, e, r, n);
  else
    for (var u = o.length - 1; u >= 0; u--)
      (a = o[u]) && (t = (i < 3 ? a(t) : i > 3 ? a(e, r, t) : a(e, r)) || t);
  return i > 3 && t && Object.defineProperty(e, r, t), t;
};
let l = class extends d {
  constructor() {
    super(...arguments), (this.text = "");
  }
  render() {
    return s`${this.template()}`;
  }
  template() {
    return this.text
      ? s`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`
      : null;
  }
};
l.styles = [f, x];
c([g()], l.prototype, "text", void 0);
l = c([m("wui-separator")], l);
