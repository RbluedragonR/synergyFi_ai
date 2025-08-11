import {
  i as u,
  r as p,
  j as b,
  Y as f,
  a as h,
  x as w,
} from "./index-B3oWiE09.js";
import { n as c, c as m } from "./if-defined-EXyKF6lo.js";
const g = u`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;
var n = function (s, e, i, r) {
  var a = arguments.length,
    o =
      a < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, i)) : r,
    d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(s, e, i, r);
  else
    for (var l = s.length - 1; l >= 0; l--)
      (d = s[l]) && (o = (a < 3 ? d(o) : a > 3 ? d(e, i, o) : d(e, i)) || o);
  return a > 3 && o && Object.defineProperty(e, i, o), o;
};
let t = class extends h {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.disabled = !1),
      (this.icon = "copy"),
      (this.iconColor = "inherit");
  }
  render() {
    this.dataset.size = this.size;
    let e = "",
      i = "";
    switch (this.size) {
      case "lg":
        (e = "--wui-border-radius-xs"), (i = "--wui-spacing-1xs");
        break;
      case "sm":
        (e = "--wui-border-radius-3xs"), (i = "--wui-spacing-xxs");
        break;
      default:
        (e = "--wui-border-radius-xxs"), (i = "--wui-spacing-2xs");
        break;
    }
    return (
      (this.style.cssText = `
    --local-border-radius: var(${e});
    --local-padding: var(${i});
    `),
      w`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `
    );
  }
};
t.styles = [p, b, f, g];
n([c()], t.prototype, "size", void 0);
n([c({ type: Boolean })], t.prototype, "disabled", void 0);
n([c()], t.prototype, "icon", void 0);
n([c()], t.prototype, "iconColor", void 0);
t = n([m("wui-icon-link")], t);
