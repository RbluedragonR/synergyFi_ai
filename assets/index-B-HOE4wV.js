import { i as h, r as b, j as w, a as g, x as r } from "./index-B3oWiE09.js";
import { n as o, c as f, o as p } from "./if-defined-EXyKF6lo.js";
import "./index-CDkY6vAj.js";
import "./index-DeVP0by4.js";
import "./index-B0JoxPNY.js";
const v = h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
var t = function (s, e, n, u) {
  var d = arguments.length,
    a =
      d < 3 ? e : u === null ? (u = Object.getOwnPropertyDescriptor(e, n)) : u,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(s, e, n, u);
  else
    for (var c = s.length - 1; c >= 0; c--)
      (l = s[c]) && (a = (d < 3 ? l(a) : d > 3 ? l(e, n, a) : l(e, n)) || a);
  return d > 3 && a && Object.defineProperty(e, n, a), a;
};
let i = class extends g {
  constructor() {
    super(...arguments),
      (this.tabIdx = void 0),
      (this.variant = "icon"),
      (this.disabled = !1),
      (this.imageSrc = void 0),
      (this.alt = void 0),
      (this.chevron = !1),
      (this.loading = !1);
  }
  render() {
    return r`
      <button
        ?disabled=${this.loading ? !0 : !!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${p(this.iconVariant)}
        tabindex=${p(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
  }
  visualTemplate() {
    if (this.variant === "image" && this.imageSrc)
      return r`<wui-image src=${this.imageSrc} alt=${
        this.alt ?? "list item"
      }></wui-image>`;
    if (this.iconVariant === "square" && this.icon && this.variant === "icon")
      return r`<wui-icon name=${this.icon}></wui-icon>`;
    if (this.variant === "icon" && this.icon && this.iconVariant) {
      const e = ["blue", "square-blue"].includes(this.iconVariant)
          ? "accent-100"
          : "fg-200",
        n = this.iconVariant === "square-blue" ? "mdl" : "md",
        u = this.iconSize ? this.iconSize : n;
      return r`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${u}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  loadingTemplate() {
    return this.loading
      ? r`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`
      : r``;
  }
  chevronTemplate() {
    return this.chevron
      ? r`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`
      : null;
  }
};
i.styles = [b, w, v];
t([o()], i.prototype, "icon", void 0);
t([o()], i.prototype, "iconSize", void 0);
t([o()], i.prototype, "tabIdx", void 0);
t([o()], i.prototype, "variant", void 0);
t([o()], i.prototype, "iconVariant", void 0);
t([o({ type: Boolean })], i.prototype, "disabled", void 0);
t([o()], i.prototype, "imageSrc", void 0);
t([o()], i.prototype, "alt", void 0);
t([o({ type: Boolean })], i.prototype, "chevron", void 0);
t([o({ type: Boolean })], i.prototype, "loading", void 0);
i = t([f("wui-list-item")], i);
