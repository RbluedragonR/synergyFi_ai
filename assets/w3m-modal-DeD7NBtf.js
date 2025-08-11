import {
  M as p,
  a0 as R,
  R as l,
  i as v,
  r as U,
  a as C,
  x as c,
  o as _,
  j as le,
  Y as ce,
  h,
  u as L,
  K as de,
  p as K,
  e as q,
  O as T,
  C as z,
  A as F,
  S as E,
  H as P,
  T as ue,
  a3 as pe,
  d as J,
  P as he,
  c as we,
} from "./index-B3oWiE09.js";
import {
  c as f,
  n as u,
  r as d,
  o as M,
  U as me,
} from "./if-defined-EXyKF6lo.js";
import "./index-BBH-gMlk.js";
import "./index-CDkY6vAj.js";
import "./index-B0JoxPNY.js";
import "./index-Djr8O8Yy.js";
import "./index-DeVP0by4.js";
import "./index-BFrCxwdF.js";
import "./index-DzZ7pn50.js";
import "./index-Djehc54V.js";
const te = {
    isUnsupportedChainView() {
      return (
        l.state.view === "UnsupportedChain" ||
        (l.state.view === "SwitchNetwork" &&
          l.state.history.includes("UnsupportedChain"))
      );
    },
    async safeClose() {
      if (this.isUnsupportedChainView()) {
        p.shake();
        return;
      }
      if (await R.isSIWXCloseDisabled()) {
        p.shake();
        return;
      }
      p.close();
    },
  },
  fe = v`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;
var ge = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
let V = class extends C {
  render() {
    return c`<slot></slot>`;
  }
};
V.styles = [U, fe];
V = ge([f("wui-card")], V);
const be = v`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;
var I = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
let W = class extends C {
  constructor() {
    super(...arguments),
      (this.message = ""),
      (this.backgroundColor = "accent-100"),
      (this.iconColor = "accent-100"),
      (this.icon = "info");
  }
  render() {
    return (
      (this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `),
      c`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `
    );
  }
  onClose() {
    _.close();
  }
};
W.styles = [U, be];
I([u()], W.prototype, "message", void 0);
I([u()], W.prototype, "backgroundColor", void 0);
I([u()], W.prototype, "iconColor", void 0);
I([u()], W.prototype, "icon", void 0);
W = I([f("wui-alertbar")], W);
const ye = v`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;
var ie = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
const ve = {
  info: { backgroundColor: "fg-350", iconColor: "fg-325", icon: "info" },
  success: {
    backgroundColor: "success-glass-reown-020",
    iconColor: "success-125",
    icon: "checkmark",
  },
  warning: {
    backgroundColor: "warning-glass-reown-020",
    iconColor: "warning-100",
    icon: "warningCircle",
  },
  error: {
    backgroundColor: "error-glass-reown-020",
    iconColor: "error-125",
    icon: "exclamationTriangle",
  },
};
let B = class extends C {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.open = _.state.open),
      this.onOpen(!0),
      this.unsubscribe.push(
        _.subscribeKey("open", (e) => {
          (this.open = e), this.onOpen(!1);
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { message: e, variant: t } = _.state,
      o = ve[t];
    return c`
      <wui-alertbar
        message=${e}
        backgroundColor=${o == null ? void 0 : o.backgroundColor}
        iconColor=${o == null ? void 0 : o.iconColor}
        icon=${o == null ? void 0 : o.icon}
      ></wui-alertbar>
    `;
  }
  onOpen(e) {
    this.open
      ? (this.animate(
          [
            { opacity: 0, transform: "scale(0.85)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          { duration: 150, fill: "forwards", easing: "ease" }
        ),
        (this.style.cssText = "pointer-events: auto"))
      : e ||
        (this.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(0.85)" },
          ],
          { duration: 150, fill: "forwards", easing: "ease" }
        ),
        (this.style.cssText = "pointer-events: none"));
  }
};
B.styles = ye;
ie([d()], B.prototype, "open", void 0);
B = ie([f("w3m-alertbar")], B);
const Ce = v`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
var oe = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
let j = class extends C {
  constructor() {
    super(...arguments), (this.imageSrc = "");
  }
  render() {
    return c`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
  }
  imageTemplate() {
    return this.imageSrc
      ? c`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`
      : c`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
  }
};
j.styles = [U, le, ce, Ce];
oe([u()], j.prototype, "imageSrc", void 0);
j = oe([f("wui-select")], j);
const xe = v`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
var g = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
const ke = ["SmartSessionList"];
function H() {
  var a, r, k, y, $, S, O;
  const s =
      (r = (a = l.state.data) == null ? void 0 : a.connector) == null
        ? void 0
        : r.name,
    e =
      (y = (k = l.state.data) == null ? void 0 : k.wallet) == null
        ? void 0
        : y.name,
    t =
      (S = ($ = l.state.data) == null ? void 0 : $.network) == null
        ? void 0
        : S.name,
    o = e ?? s,
    n = z.getConnectors();
  return {
    Connect: `Connect ${
      n.length === 1 && ((O = n[0]) == null ? void 0 : O.id) === "w3m-email"
        ? "Email"
        : ""
    } Wallet`,
    Create: "Create Wallet",
    ChooseAccountName: void 0,
    Account: void 0,
    AccountSettings: void 0,
    AllWallets: "All Wallets",
    ApproveTransaction: "Approve Transaction",
    BuyInProgress: "Buy",
    ConnectingExternal: o ?? "Connect Wallet",
    ConnectingWalletConnect: o ?? "WalletConnect",
    ConnectingWalletConnectBasic: "WalletConnect",
    ConnectingSiwe: "Sign In",
    Convert: "Convert",
    ConvertSelectToken: "Select token",
    ConvertPreview: "Preview convert",
    Downloads: o ? `Get ${o}` : "Downloads",
    EmailLogin: "Email Login",
    EmailVerifyOtp: "Confirm Email",
    EmailVerifyDevice: "Register Device",
    GetWallet: "Get a wallet",
    Networks: "Choose Network",
    OnRampProviders: "Choose Provider",
    OnRampActivity: "Activity",
    OnRampTokenSelect: "Select Token",
    OnRampFiatSelect: "Select Currency",
    Pay: "How you pay",
    ProfileWallets: "Wallets",
    SwitchNetwork: t ?? "Switch Network",
    Transactions: "Activity",
    UnsupportedChain: "Switch Network",
    UpgradeEmailWallet: "Upgrade your Wallet",
    UpdateEmailWallet: "Edit Email",
    UpdateEmailPrimaryOtp: "Confirm Current Email",
    UpdateEmailSecondaryOtp: "Confirm New Email",
    WhatIsABuy: "What is Buy?",
    RegisterAccountName: "Choose name",
    RegisterAccountNameSuccess: "",
    WalletReceive: "Receive",
    WalletCompatibleNetworks: "Compatible Networks",
    Swap: "Swap",
    SwapSelectToken: "Select token",
    SwapPreview: "Preview swap",
    WalletSend: "Send",
    WalletSendPreview: "Review send",
    WalletSendSelectToken: "Select Token",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    ConnectWallets: "Connect wallet",
    ConnectSocials: "All socials",
    ConnectingSocial: F.state.socialProvider
      ? F.state.socialProvider
      : "Connect Social",
    ConnectingMultiChain: "Select chain",
    ConnectingFarcaster: "Farcaster",
    SwitchActiveChain: "Switch chain",
    SmartSessionCreated: void 0,
    SmartSessionList: "Smart Sessions",
    SIWXSignMessage: "Sign In",
    PayLoading: "Payment in progress",
  };
}
let w = class extends C {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.heading = H()[l.state.view]),
      (this.network = h.state.activeCaipNetwork),
      (this.networkImage = L.getNetworkImage(this.network)),
      (this.showBack = !1),
      (this.prevHistoryLength = 1),
      (this.view = l.state.view),
      (this.viewDirection = ""),
      (this.headerText = H()[l.state.view]),
      this.unsubscribe.push(
        de.subscribeNetworkImages(() => {
          this.networkImage = L.getNetworkImage(this.network);
        }),
        l.subscribeKey("view", (e) => {
          setTimeout(() => {
            (this.view = e), (this.headerText = H()[e]);
          }, K.ANIMATION_DURATIONS.HeaderText),
            this.onViewChange(),
            this.onHistoryChange();
        }),
        h.subscribeKey("activeCaipNetwork", (e) => {
          (this.network = e),
            (this.networkImage = L.getNetworkImage(this.network));
        })
      );
  }
  disconnectCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    return c`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
  }
  onWalletHelp() {
    q.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" }),
      l.push("WhatIsAWallet");
  }
  async onClose() {
    await te.safeClose();
  }
  rightHeaderTemplate() {
    var t, o, n;
    const e =
      (n =
        (o = (t = T) == null ? void 0 : t.state) == null
          ? void 0
          : o.features) == null
        ? void 0
        : n.smartSessions;
    return l.state.view !== "Account" || !e
      ? this.closeButtonTemplate()
      : c`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
  }
  closeButtonTemplate() {
    return c`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
  }
  titleTemplate() {
    const e = ke.includes(this.view);
    return c`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e ? c`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
  }
  leftHeaderTemplate() {
    var y;
    const { view: e } = l.state,
      t = e === "Connect",
      o = T.state.enableEmbedded,
      n = e === "ApproveTransaction",
      i = e === "ConnectingSiwe",
      a = e === "Account",
      r = T.state.enableNetworkSwitch,
      k = n || i || (t && o);
    return a && r
      ? c`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${M((y = this.network) == null ? void 0 : y.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${M(this.networkImage)}
      ></wui-select>`
      : this.showBack && !k
      ? c`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`
      : c`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  onNetworks() {
    this.isAllowedNetworkSwitch() &&
      (q.sendEvent({ type: "track", event: "CLICK_NETWORKS" }),
      l.push("Networks"));
  }
  isAllowedNetworkSwitch() {
    const e = h.getAllRequestedCaipNetworks(),
      t = e ? e.length > 1 : !1,
      o =
        e == null
          ? void 0
          : e.find(({ id: n }) => {
              var i;
              return n === ((i = this.network) == null ? void 0 : i.id);
            });
    return t || !o;
  }
  getPadding() {
    return this.heading ? ["l", "2l", "l", "2l"] : ["0", "2l", "0", "2l"];
  }
  onViewChange() {
    const { history: e } = l.state;
    let t = K.VIEW_DIRECTION.Next;
    e.length < this.prevHistoryLength && (t = K.VIEW_DIRECTION.Prev),
      (this.prevHistoryLength = e.length),
      (this.viewDirection = t);
  }
  async onHistoryChange() {
    var o;
    const { history: e } = l.state,
      t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("#dynamic");
    e.length > 1 && !this.showBack && t
      ? (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: "forwards",
          easing: "ease",
        }).finished,
        (this.showBack = !0),
        t.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: "forwards",
          easing: "ease",
        }))
      : e.length <= 1 &&
        this.showBack &&
        t &&
        (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 200,
          fill: "forwards",
          easing: "ease",
        }).finished,
        (this.showBack = !1),
        t.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          fill: "forwards",
          easing: "ease",
        }));
  }
  onGoBack() {
    l.goBack();
  }
};
w.styles = xe;
g([d()], w.prototype, "heading", void 0);
g([d()], w.prototype, "network", void 0);
g([d()], w.prototype, "networkImage", void 0);
g([d()], w.prototype, "showBack", void 0);
g([d()], w.prototype, "prevHistoryLength", void 0);
g([d()], w.prototype, "view", void 0);
g([d()], w.prototype, "viewDirection", void 0);
g([d()], w.prototype, "headerText", void 0);
w = g([f("w3m-header")], w);
const Se = v`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;
var A = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
let m = class extends C {
  constructor() {
    super(...arguments),
      (this.backgroundColor = "accent-100"),
      (this.iconColor = "accent-100"),
      (this.icon = "checkmark"),
      (this.message = ""),
      (this.loading = !1),
      (this.iconType = "default");
  }
  render() {
    return c`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
  }
  templateIcon() {
    return this.loading
      ? c`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`
      : this.iconType === "default"
      ? c`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`
      : c`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
  }
};
m.styles = [U, Se];
A([u()], m.prototype, "backgroundColor", void 0);
A([u()], m.prototype, "iconColor", void 0);
A([u()], m.prototype, "icon", void 0);
A([u()], m.prototype, "message", void 0);
A([u()], m.prototype, "loading", void 0);
A([u()], m.prototype, "iconType", void 0);
m = A([f("wui-snackbar")], m);
const We = v`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
var ne = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
const Ae = {
  loading: void 0,
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark",
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close",
  },
};
let D = class extends C {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.timeout = void 0),
      (this.open = E.state.open),
      this.unsubscribe.push(
        E.subscribeKey("open", (e) => {
          (this.open = e), this.onOpen();
        })
      );
  }
  disconnectedCallback() {
    clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { message: e, variant: t, svg: o } = E.state,
      n = Ae[t],
      { icon: i, iconColor: a } = o ?? n ?? {};
    return c`
      <wui-snackbar
        message=${e}
        backgroundColor=${n == null ? void 0 : n.backgroundColor}
        iconColor=${a}
        icon=${i}
        .loading=${t === "loading"}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout),
      this.open
        ? (this.animate(
            [
              { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
              { opacity: 1, transform: "translateX(-50%) scale(1)" },
            ],
            { duration: 150, fill: "forwards", easing: "ease" }
          ),
          this.timeout && clearTimeout(this.timeout),
          E.state.autoClose &&
            (this.timeout = setTimeout(() => E.hide(), 2500)))
        : this.animate(
            [
              { opacity: 1, transform: "translateX(-50%) scale(1)" },
              { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
            ],
            { duration: 150, fill: "forwards", easing: "ease" }
          );
  }
};
D.styles = We;
ne([d()], D.prototype, "open", void 0);
D = ne([f("w3m-snackbar")], D);
const $e = v`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;
var x = function (s, e, t, o) {
  var n = arguments.length,
    i =
      n < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, t)) : o,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(s, e, t, o);
  else
    for (var r = s.length - 1; r >= 0; r--)
      (a = s[r]) && (i = (n < 3 ? a(i) : n > 3 ? a(e, t, i) : a(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
};
const Q = "scroll-lock";
class b extends C {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.abortController = void 0),
      (this.hasPrefetched = !1),
      (this.enableEmbedded = T.state.enableEmbedded),
      (this.open = p.state.open),
      (this.caipAddress = h.state.activeCaipAddress),
      (this.caipNetwork = h.state.activeCaipNetwork),
      (this.shake = p.state.shake),
      (this.filterByNamespace = z.state.filterByNamespace),
      this.initializeTheming(),
      P.prefetchAnalyticsConfig(),
      this.unsubscribe.push(
        p.subscribeKey("open", (e) => (e ? this.onOpen() : this.onClose())),
        p.subscribeKey("shake", (e) => (this.shake = e)),
        h.subscribeKey("activeCaipNetwork", (e) => this.onNewNetwork(e)),
        h.subscribeKey("activeCaipAddress", (e) => this.onNewAddress(e)),
        T.subscribeKey("enableEmbedded", (e) => (this.enableEmbedded = e)),
        z.subscribeKey("filterByNamespace", (e) => {
          var t;
          this.filterByNamespace !== e &&
            !((t = h.getAccountData(e)) != null && t.caipAddress) &&
            (P.fetchRecommendedWallets(), (this.filterByNamespace = e));
        })
      );
  }
  firstUpdated() {
    if (this.caipAddress) {
      if (this.enableEmbedded) {
        p.close(), this.prefetch();
        return;
      }
      this.onNewAddress(this.caipAddress);
    }
    this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
  }
  render() {
    return (
      (this.style.cssText = `
      --local-border-bottom-mobile-radius: ${
        this.enableEmbedded
          ? "clamp(0px, var(--wui-border-radius-l), 44px)"
          : "0px"
      };
    `),
      this.enableEmbedded
        ? c`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
        : this.open
        ? c`
          <wui-flex @click=${this.onOverlayClick.bind(
            this
          )} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
        : null
    );
  }
  contentTemplate() {
    return c` <wui-card
      shake="${this.shake}"
      data-embedded="${M(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
  }
  async onOverlayClick(e) {
    e.target === e.currentTarget && (await this.handleClose());
  }
  async handleClose() {
    await te.safeClose();
  }
  initializeTheming() {
    const { themeVariables: e, themeMode: t } = ue.state,
      o = me.getColorTheme(t);
    pe(e, o);
  }
  onClose() {
    (this.open = !1),
      this.classList.remove("open"),
      this.onScrollUnlock(),
      E.hide(),
      this.onRemoveKeyboardListener();
  }
  onOpen() {
    (this.open = !0),
      this.classList.add("open"),
      this.onScrollLock(),
      this.onAddKeyboardListener();
  }
  onScrollLock() {
    const e = document.createElement("style");
    (e.dataset.w3m = Q),
      (e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `),
      document.head.appendChild(e);
  }
  onScrollUnlock() {
    const e = document.head.querySelector(`style[data-w3m="${Q}"]`);
    e && e.remove();
  }
  onAddKeyboardListener() {
    var t;
    this.abortController = new AbortController();
    const e =
      (t = this.shadowRoot) == null ? void 0 : t.querySelector("wui-card");
    e == null || e.focus(),
      window.addEventListener(
        "keydown",
        (o) => {
          if (o.key === "Escape") this.handleClose();
          else if (o.key === "Tab") {
            const { tagName: n } = o.target;
            n &&
              !n.includes("W3M-") &&
              !n.includes("WUI-") &&
              (e == null || e.focus());
          }
        },
        this.abortController
      );
  }
  onRemoveKeyboardListener() {
    var e;
    (e = this.abortController) == null || e.abort(),
      (this.abortController = void 0);
  }
  async onNewAddress(e) {
    const t = h.state.isSwitchingNamespace,
      o = !J.getPlainAddress(this.caipAddress),
      n = J.getPlainAddress(e),
      i = await R.getAllSessions(),
      a =
        e && R.getSIWX()
          ? i.some(($) => {
              var S;
              return (
                $.data.accountAddress ===
                ((S = he.parseCaipAddress(e)) == null ? void 0 : S.address)
              );
            })
          : !0,
      r = !n && !t,
      k = t && n && a;
    l.state.view === "ProfileWallets" ||
      (r && !this.enableEmbedded
        ? p.close()
        : k && !this.enableEmbedded
        ? l.goBack()
        : this.enableEmbedded && o && n && p.close()),
      await R.initializeIfEnabled(),
      (this.caipAddress = e),
      h.setIsSwitchingNamespace(!1);
  }
  onNewNetwork(e) {
    var Y, X, G;
    const t = this.caipNetwork,
      o =
        (Y = t == null ? void 0 : t.caipNetworkId) == null
          ? void 0
          : Y.toString(),
      n = t == null ? void 0 : t.chainNamespace,
      i =
        (X = e == null ? void 0 : e.caipNetworkId) == null
          ? void 0
          : X.toString(),
      a = e == null ? void 0 : e.chainNamespace,
      r = o !== i,
      y = r && !(n !== a),
      $ = (t == null ? void 0 : t.name) === we.UNSUPPORTED_NETWORK_NAME,
      S = l.state.view === "ConnectingExternal",
      O = l.state.view === "ProfileWallets",
      ae = !(
        (G = h.getAccountData(e == null ? void 0 : e.chainNamespace)) != null &&
        G.caipAddress
      ),
      se = l.state.view === "UnsupportedChain",
      re = p.state.open;
    let N = !1;
    this.enableEmbedded && l.state.view === "SwitchNetwork" && (N = !0),
      re && !S && !O && (ae ? r && (N = !0) : (se || (y && !$)) && (N = !0)),
      N && l.state.view !== "SIWXSignMessage" && l.goBack(),
      (this.caipNetwork = e);
  }
  prefetch() {
    this.hasPrefetched ||
      (P.prefetch(),
      P.fetchWalletsByPage({ page: 1 }),
      (this.hasPrefetched = !0));
  }
}
b.styles = $e;
x([u({ type: Boolean })], b.prototype, "enableEmbedded", void 0);
x([d()], b.prototype, "open", void 0);
x([d()], b.prototype, "caipAddress", void 0);
x([d()], b.prototype, "caipNetwork", void 0);
x([d()], b.prototype, "shake", void 0);
x([d()], b.prototype, "filterByNamespace", void 0);
let Z = class extends b {};
Z = x([f("w3m-modal")], Z);
let ee = class extends b {};
ee = x([f("appkit-modal")], ee);
export { ee as AppKitModal, Z as W3mModal, b as W3mModalBase };
