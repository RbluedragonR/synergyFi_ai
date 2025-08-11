import {
  N as l,
  w as V,
  v as $,
  R as A,
  S as g,
  l as B,
  c as S,
  e as x,
  h,
  f as F,
  W as M,
  B as y,
  d as _,
  y as C,
  A as H,
  o as j,
  z as q,
  b as R,
  D as Q,
  C as K,
  F as Y,
  G as J,
  i as X,
  r as Z,
  j as ee,
  a as ne,
  x as L,
} from "./index-B3oWiE09.js";
import { n as z, c as oe } from "./if-defined-EXyKF6lo.js";
import "./index-CDkY6vAj.js";
import "./index-B0JoxPNY.js";
const P = {
    getGasPriceInEther(n, t) {
      const o = t * n;
      return Number(o) / 1e18;
    },
    getGasPriceInUSD(n, t, o) {
      const s = P.getGasPriceInEther(t, o);
      return l.bigNumber(n).times(s).toNumber();
    },
    getPriceImpact({
      sourceTokenAmount: n,
      sourceTokenPriceInUSD: t,
      toTokenPriceInUSD: o,
      toTokenAmount: s,
    }) {
      const i = l.bigNumber(n).times(t),
        r = l.bigNumber(s).times(o);
      return i.minus(r).div(i).times(100).toNumber();
    },
    getMaxSlippage(n, t) {
      const o = l.bigNumber(n).div(100);
      return l.multiply(t, o).toNumber();
    },
    getProviderFee(n, t = 0.0085) {
      return l.bigNumber(n).times(t).toString();
    },
    isInsufficientNetworkTokenForGas(n, t) {
      const o = t || "0";
      return l.bigNumber(n).eq(0) ? !0 : l.bigNumber(l.bigNumber(o)).gt(n);
    },
    isInsufficientSourceTokenForSwap(n, t, o) {
      var r, u;
      const s =
        (u =
          (r = o == null ? void 0 : o.find((c) => c.address === t)) == null
            ? void 0
            : r.quantity) == null
          ? void 0
          : u.numeric;
      return l.bigNumber(s || "0").lt(n);
    },
    getToTokenAmount({
      sourceToken: n,
      toToken: t,
      sourceTokenPrice: o,
      toTokenPrice: s,
      sourceTokenAmount: i,
    }) {
      if (i === "0" || !n || !t) return "0";
      const r = n.decimals,
        u = o,
        c = t.decimals,
        d = s;
      if (d <= 0) return "0";
      const T = l.bigNumber(i).times(0.0085),
        f = l.bigNumber(i).minus(T).times(l.bigNumber(10).pow(r)),
        w = l.bigNumber(u).div(d),
        b = r - c;
      return f
        .times(w)
        .div(l.bigNumber(10).pow(b))
        .div(l.bigNumber(10).pow(c))
        .toFixed(c)
        .toString();
    },
  },
  G = 15e4,
  te = 6,
  k = {
    initializing: !1,
    initialized: !1,
    loadingPrices: !1,
    loadingQuote: !1,
    loadingApprovalTransaction: !1,
    loadingBuildTransaction: !1,
    loadingTransaction: !1,
    fetchError: !1,
    approvalTransaction: void 0,
    swapTransaction: void 0,
    transactionError: void 0,
    sourceToken: void 0,
    sourceTokenAmount: "",
    sourceTokenPriceInUSD: 0,
    toToken: void 0,
    toTokenAmount: "",
    toTokenPriceInUSD: 0,
    networkPrice: "0",
    networkBalanceInUSD: "0",
    networkTokenSymbol: "",
    inputError: void 0,
    slippage: R.CONVERT_SLIPPAGE_TOLERANCE,
    tokens: void 0,
    popularTokens: void 0,
    suggestedTokens: void 0,
    foundTokens: void 0,
    myTokensWithBalance: void 0,
    tokensPriceMap: {},
    gasFee: "0",
    gasPriceInUSD: 0,
    priceImpact: void 0,
    maxSlippage: void 0,
    providerFee: void 0,
  },
  e = $(k),
  N = {
    state: e,
    subscribe(n) {
      return J(e, () => n(e));
    },
    subscribeKey(n, t) {
      return Y(e, n, t);
    },
    getParams() {
      var c, d, T, m, f, w, b, I;
      const n = h.state.activeCaipAddress,
        t = _.getPlainAddress(n),
        o = Q(),
        s = K.getConnectorId(h.state.activeChain);
      if (!t) throw new Error("No address found to swap the tokens from.");
      const i =
          !((c = e.toToken) != null && c.address) ||
          !((d = e.toToken) != null && d.decimals),
        r =
          !((T = e.sourceToken) != null && T.address) ||
          !((m = e.sourceToken) != null && m.decimals) ||
          !l.bigNumber(e.sourceTokenAmount).gt(0),
        u = !e.sourceTokenAmount;
      return {
        networkAddress: o,
        fromAddress: t,
        fromCaipAddress: n,
        sourceTokenAddress: (f = e.sourceToken) == null ? void 0 : f.address,
        toTokenAddress: (w = e.toToken) == null ? void 0 : w.address,
        toTokenAmount: e.toTokenAmount,
        toTokenDecimals: (b = e.toToken) == null ? void 0 : b.decimals,
        sourceTokenAmount: e.sourceTokenAmount,
        sourceTokenDecimals: (I = e.sourceToken) == null ? void 0 : I.decimals,
        invalidToToken: i,
        invalidSourceToken: r,
        invalidSourceTokenAmount: u,
        availableToSwap: n && !i && !r && !u,
        isAuthConnector: s === S.CONNECTOR_ID.AUTH,
      };
    },
    setSourceToken(n) {
      if (!n) {
        (e.sourceToken = n),
          (e.sourceTokenAmount = ""),
          (e.sourceTokenPriceInUSD = 0);
        return;
      }
      (e.sourceToken = n), a.setTokenPrice(n.address, "sourceToken");
    },
    setSourceTokenAmount(n) {
      e.sourceTokenAmount = n;
    },
    setToToken(n) {
      if (!n) {
        (e.toToken = n), (e.toTokenAmount = ""), (e.toTokenPriceInUSD = 0);
        return;
      }
      (e.toToken = n), a.setTokenPrice(n.address, "toToken");
    },
    setToTokenAmount(n) {
      e.toTokenAmount = n ? l.formatNumberToLocalString(n, te) : "";
    },
    async setTokenPrice(n, t) {
      let o = e.tokensPriceMap[n] || 0;
      o || ((e.loadingPrices = !0), (o = await a.getAddressPrice(n))),
        t === "sourceToken"
          ? (e.sourceTokenPriceInUSD = o)
          : t === "toToken" && (e.toTokenPriceInUSD = o),
        e.loadingPrices && (e.loadingPrices = !1),
        a.getParams().availableToSwap && a.swapTokens();
    },
    switchTokens() {
      if (e.initializing || !e.initialized) return;
      const n = e.toToken ? { ...e.toToken } : void 0,
        t = e.sourceToken ? { ...e.sourceToken } : void 0,
        o = n && e.toTokenAmount === "" ? "1" : e.toTokenAmount;
      a.setSourceToken(n),
        a.setToToken(t),
        a.setSourceTokenAmount(o),
        a.setToTokenAmount(""),
        a.swapTokens();
    },
    resetState() {
      (e.myTokensWithBalance = k.myTokensWithBalance),
        (e.tokensPriceMap = k.tokensPriceMap),
        (e.initialized = k.initialized),
        (e.sourceToken = k.sourceToken),
        (e.sourceTokenAmount = k.sourceTokenAmount),
        (e.sourceTokenPriceInUSD = k.sourceTokenPriceInUSD),
        (e.toToken = k.toToken),
        (e.toTokenAmount = k.toTokenAmount),
        (e.toTokenPriceInUSD = k.toTokenPriceInUSD),
        (e.networkPrice = k.networkPrice),
        (e.networkTokenSymbol = k.networkTokenSymbol),
        (e.networkBalanceInUSD = k.networkBalanceInUSD),
        (e.inputError = k.inputError),
        (e.myTokensWithBalance = k.myTokensWithBalance);
    },
    resetValues() {
      var o;
      const { networkAddress: n } = a.getParams(),
        t = (o = e.tokens) == null ? void 0 : o.find((s) => s.address === n);
      a.setSourceToken(t), a.setToToken(void 0);
    },
    getApprovalLoadingState() {
      return e.loadingApprovalTransaction;
    },
    clearError() {
      e.transactionError = void 0;
    },
    async initializeState() {
      if (!e.initializing) {
        if (((e.initializing = !0), !e.initialized))
          try {
            await a.fetchTokens(), (e.initialized = !0);
          } catch {
            (e.initialized = !1),
              g.showError("Failed to initialize swap"),
              A.goBack();
          }
        e.initializing = !1;
      }
    },
    async fetchTokens() {
      var o;
      const { networkAddress: n } = a.getParams();
      await a.getTokenList(),
        await a.getNetworkTokenPrice(),
        await a.getMyTokensWithBalance();
      const t =
        (o = e.tokens) == null ? void 0 : o.find((s) => s.address === n);
      t &&
        ((e.networkTokenSymbol = t.symbol),
        a.setSourceToken(t),
        a.setSourceTokenAmount("1"));
    },
    async getTokenList() {
      const n = await C.getTokenList();
      (e.tokens = n),
        (e.popularTokens = n.sort((t, o) =>
          t.symbol < o.symbol ? -1 : t.symbol > o.symbol ? 1 : 0
        )),
        (e.suggestedTokens = n.filter(
          (t) => !!R.SWAP_SUGGESTED_TOKENS.includes(t.symbol),
          {}
        ));
    },
    async getAddressPrice(n) {
      var d, T;
      const t = e.tokensPriceMap[n];
      if (t) return t;
      const o = await y.fetchTokenPrice({ addresses: [n] }),
        s = (o == null ? void 0 : o.fungibles) || [],
        i = [...(e.tokens || []), ...(e.myTokensWithBalance || [])],
        r =
          (d = i == null ? void 0 : i.find((m) => m.address === n)) == null
            ? void 0
            : d.symbol,
        u =
          ((T = s.find(
            (m) =>
              m.symbol.toLowerCase() === (r == null ? void 0 : r.toLowerCase())
          )) == null
            ? void 0
            : T.price) || 0,
        c = parseFloat(u.toString());
      return (e.tokensPriceMap[n] = c), c;
    },
    async getNetworkTokenPrice() {
      var i;
      const { networkAddress: n } = a.getParams(),
        o =
          (i = (
            await y
              .fetchTokenPrice({ addresses: [n] })
              .catch(
                () => (
                  g.showError("Failed to fetch network token price"),
                  { fungibles: [] }
                )
              )
          ).fungibles) == null
            ? void 0
            : i[0],
        s = (o == null ? void 0 : o.price.toString()) || "0";
      (e.tokensPriceMap[n] = parseFloat(s)),
        (e.networkTokenSymbol = (o == null ? void 0 : o.symbol) || ""),
        (e.networkPrice = s);
    },
    async getMyTokensWithBalance(n) {
      const t = await q.getMyTokensWithBalance(n),
        o = C.mapBalancesToSwapTokens(t);
      o && (await a.getInitialGasPrice(), a.setBalances(o));
    },
    setBalances(n) {
      const { networkAddress: t } = a.getParams(),
        o = h.state.activeCaipNetwork;
      if (!o) return;
      const s = n.find((i) => i.address === t);
      n.forEach((i) => {
        e.tokensPriceMap[i.address] = i.price || 0;
      }),
        (e.myTokensWithBalance = n.filter((i) =>
          i.address.startsWith(o.caipNetworkId)
        )),
        (e.networkBalanceInUSD = s
          ? l.multiply(s.quantity.numeric, s.price).toString()
          : "0");
    },
    async getInitialGasPrice() {
      var t, o;
      const n = await C.fetchGasPrice();
      if (!n) return { gasPrice: null, gasPriceInUSD: null };
      switch (
        (o = (t = h.state) == null ? void 0 : t.activeCaipNetwork) == null
          ? void 0
          : o.chainNamespace
      ) {
        case S.CHAIN.SOLANA:
          return (
            (e.gasFee = n.standard ?? "0"),
            (e.gasPriceInUSD = l
              .multiply(n.standard, e.networkPrice)
              .div(1e9)
              .toNumber()),
            {
              gasPrice: BigInt(e.gasFee),
              gasPriceInUSD: Number(e.gasPriceInUSD),
            }
          );
        case S.CHAIN.EVM:
        default:
          const s = n.standard ?? "0",
            i = BigInt(s),
            r = BigInt(G),
            u = P.getGasPriceInUSD(e.networkPrice, r, i);
          return (
            (e.gasFee = s),
            (e.gasPriceInUSD = u),
            { gasPrice: i, gasPriceInUSD: u }
          );
      }
    },
    async swapTokens() {
      var r, u;
      const n = H.state.address,
        t = e.sourceToken,
        o = e.toToken,
        s = l.bigNumber(e.sourceTokenAmount).gt(0);
      if ((s || a.setToTokenAmount(""), !o || !t || e.loadingPrices || !s))
        return;
      e.loadingQuote = !0;
      const i = l
        .bigNumber(e.sourceTokenAmount)
        .times(10 ** t.decimals)
        .round(0);
      try {
        const c = await y.fetchSwapQuote({
          userAddress: n,
          from: t.address,
          to: o.address,
          gasPrice: e.gasFee,
          amount: i.toString(),
        });
        e.loadingQuote = !1;
        const d =
          (u = (r = c == null ? void 0 : c.quotes) == null ? void 0 : r[0]) ==
          null
            ? void 0
            : u.toAmount;
        if (!d) {
          j.open(
            {
              shortMessage: "Incorrect amount",
              longMessage: "Please enter a valid amount",
            },
            "error"
          );
          return;
        }
        const T = l
          .bigNumber(d)
          .div(10 ** o.decimals)
          .toString();
        a.setToTokenAmount(T),
          a.hasInsufficientToken(e.sourceTokenAmount, t.address)
            ? (e.inputError = "Insufficient balance")
            : ((e.inputError = void 0), a.setTransactionDetails());
      } catch {
        (e.loadingQuote = !1), (e.inputError = "Insufficient balance");
      }
    },
    async getTransaction() {
      const { fromCaipAddress: n, availableToSwap: t } = a.getParams(),
        o = e.sourceToken,
        s = e.toToken;
      if (!(!n || !t || !o || !s || e.loadingQuote))
        try {
          e.loadingBuildTransaction = !0;
          const i = await C.fetchSwapAllowance({
            userAddress: n,
            tokenAddress: o.address,
            sourceTokenAmount: e.sourceTokenAmount,
            sourceTokenDecimals: o.decimals,
          });
          let r;
          return (
            i
              ? (r = await a.createSwapTransaction())
              : (r = await a.createAllowanceTransaction()),
            (e.loadingBuildTransaction = !1),
            (e.fetchError = !1),
            r
          );
        } catch {
          A.goBack(),
            g.showError("Failed to check allowance"),
            (e.loadingBuildTransaction = !1),
            (e.approvalTransaction = void 0),
            (e.swapTransaction = void 0),
            (e.fetchError = !0);
          return;
        }
    },
    async createAllowanceTransaction() {
      const {
        fromCaipAddress: n,
        sourceTokenAddress: t,
        toTokenAddress: o,
      } = a.getParams();
      if (!(!n || !o)) {
        if (!t)
          throw new Error(
            "createAllowanceTransaction - No source token address found."
          );
        try {
          const s = await y.generateApproveCalldata({
              from: t,
              to: o,
              userAddress: n,
            }),
            i = _.getPlainAddress(s.tx.from);
          if (!i)
            throw new Error(
              "SwapController:createAllowanceTransaction - address is required"
            );
          const r = {
            data: s.tx.data,
            to: i,
            gasPrice: BigInt(s.tx.eip155.gasPrice),
            value: BigInt(s.tx.value),
            toAmount: e.toTokenAmount,
          };
          return (
            (e.swapTransaction = void 0),
            (e.approvalTransaction = {
              data: r.data,
              to: r.to,
              gasPrice: r.gasPrice,
              value: r.value,
              toAmount: r.toAmount,
            }),
            {
              data: r.data,
              to: r.to,
              gasPrice: r.gasPrice,
              value: r.value,
              toAmount: r.toAmount,
            }
          );
        } catch {
          A.goBack(),
            g.showError("Failed to create approval transaction"),
            (e.approvalTransaction = void 0),
            (e.swapTransaction = void 0),
            (e.fetchError = !0);
          return;
        }
      }
    },
    async createSwapTransaction() {
      var u;
      const {
          networkAddress: n,
          fromCaipAddress: t,
          sourceTokenAmount: o,
        } = a.getParams(),
        s = e.sourceToken,
        i = e.toToken;
      if (!t || !o || !s || !i) return;
      const r =
        (u = B.parseUnits(o, s.decimals)) == null ? void 0 : u.toString();
      try {
        const c = await y.generateSwapCalldata({
            userAddress: t,
            from: s.address,
            to: i.address,
            amount: r,
            disableEstimate: !0,
          }),
          d = s.address === n,
          T = BigInt(c.tx.eip155.gas),
          m = BigInt(c.tx.eip155.gasPrice),
          f = _.getPlainAddress(c.tx.to);
        if (!f)
          throw new Error(
            "SwapController:createSwapTransaction - address is required"
          );
        const w = {
          data: c.tx.data,
          to: f,
          gas: T,
          gasPrice: m,
          value: BigInt(d ? r ?? "0" : "0"),
          toAmount: e.toTokenAmount,
        };
        return (
          (e.gasPriceInUSD = P.getGasPriceInUSD(e.networkPrice, T, m)),
          (e.approvalTransaction = void 0),
          (e.swapTransaction = w),
          w
        );
      } catch {
        A.goBack(),
          g.showError("Failed to create transaction"),
          (e.approvalTransaction = void 0),
          (e.swapTransaction = void 0),
          (e.fetchError = !0);
        return;
      }
    },
    async sendTransactionForApproval(n) {
      var i, r, u;
      const { fromAddress: t, isAuthConnector: o } = a.getParams();
      e.loadingApprovalTransaction = !0;
      const s = "Approve limit increase in your wallet";
      o
        ? A.pushTransactionStack({
            onSuccess() {
              g.showLoading(s);
            },
          })
        : g.showLoading(s);
      try {
        await B.sendTransaction({
          address: t,
          to: n.to,
          data: n.data,
          value: n.value,
          chainNamespace: S.CHAIN.EVM,
        }),
          await a.swapTokens(),
          await a.getTransaction(),
          (e.approvalTransaction = void 0),
          (e.loadingApprovalTransaction = !1);
      } catch (c) {
        const d = c;
        (e.transactionError = d == null ? void 0 : d.shortMessage),
          (e.loadingApprovalTransaction = !1),
          g.showError(
            (d == null ? void 0 : d.shortMessage) || "Transaction error"
          ),
          x.sendEvent({
            type: "track",
            event: "SWAP_APPROVAL_ERROR",
            properties: {
              message:
                (d == null ? void 0 : d.shortMessage) ||
                (d == null ? void 0 : d.message) ||
                "Unknown",
              network:
                ((i = h.state.activeCaipNetwork) == null
                  ? void 0
                  : i.caipNetworkId) || "",
              swapFromToken:
                ((r = a.state.sourceToken) == null ? void 0 : r.symbol) || "",
              swapToToken:
                ((u = a.state.toToken) == null ? void 0 : u.symbol) || "",
              swapFromAmount: a.state.sourceTokenAmount || "",
              swapToAmount: a.state.toTokenAmount || "",
              isSmartAccount: F(S.CHAIN.EVM) === M.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          });
      }
    },
    async sendTransactionForSwap(n) {
      var u, c, d, T, m, f, w, b, I, E, U, O;
      if (!n) return;
      const {
        fromAddress: t,
        toTokenAmount: o,
        isAuthConnector: s,
      } = a.getParams();
      e.loadingTransaction = !0;
      const i = `Swapping ${
          (u = e.sourceToken) == null ? void 0 : u.symbol
        } to ${l.formatNumberToLocalString(o, 3)} ${
          (c = e.toToken) == null ? void 0 : c.symbol
        }`,
        r = `Swapped ${
          (d = e.sourceToken) == null ? void 0 : d.symbol
        } to ${l.formatNumberToLocalString(o, 3)} ${
          (T = e.toToken) == null ? void 0 : T.symbol
        }`;
      s
        ? A.pushTransactionStack({
            onSuccess() {
              A.replace("Account"), g.showLoading(i), N.resetState();
            },
          })
        : g.showLoading("Confirm transaction in your wallet");
      try {
        const D = [
            (m = e.sourceToken) == null ? void 0 : m.address,
            (f = e.toToken) == null ? void 0 : f.address,
          ].join(","),
          p = await B.sendTransaction({
            address: t,
            to: n.to,
            data: n.data,
            value: n.value,
            chainNamespace: S.CHAIN.EVM,
          });
        return (
          (e.loadingTransaction = !1),
          g.showSuccess(r),
          x.sendEvent({
            type: "track",
            event: "SWAP_SUCCESS",
            properties: {
              network:
                ((w = h.state.activeCaipNetwork) == null
                  ? void 0
                  : w.caipNetworkId) || "",
              swapFromToken:
                ((b = a.state.sourceToken) == null ? void 0 : b.symbol) || "",
              swapToToken:
                ((I = a.state.toToken) == null ? void 0 : I.symbol) || "",
              swapFromAmount: a.state.sourceTokenAmount || "",
              swapToAmount: a.state.toTokenAmount || "",
              isSmartAccount: F(S.CHAIN.EVM) === M.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
          N.resetState(),
          s || A.replace("Account"),
          N.getMyTokensWithBalance(D),
          p
        );
      } catch (D) {
        const p = D;
        (e.transactionError = p == null ? void 0 : p.shortMessage),
          (e.loadingTransaction = !1),
          g.showError(
            (p == null ? void 0 : p.shortMessage) || "Transaction error"
          ),
          x.sendEvent({
            type: "track",
            event: "SWAP_ERROR",
            properties: {
              message:
                (p == null ? void 0 : p.shortMessage) ||
                (p == null ? void 0 : p.message) ||
                "Unknown",
              network:
                ((E = h.state.activeCaipNetwork) == null
                  ? void 0
                  : E.caipNetworkId) || "",
              swapFromToken:
                ((U = a.state.sourceToken) == null ? void 0 : U.symbol) || "",
              swapToToken:
                ((O = a.state.toToken) == null ? void 0 : O.symbol) || "",
              swapFromAmount: a.state.sourceTokenAmount || "",
              swapToAmount: a.state.toTokenAmount || "",
              isSmartAccount: F(S.CHAIN.EVM) === M.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          });
        return;
      }
    },
    hasInsufficientToken(n, t) {
      return P.isInsufficientSourceTokenForSwap(n, t, e.myTokensWithBalance);
    },
    setTransactionDetails() {
      const { toTokenAddress: n, toTokenDecimals: t } = a.getParams();
      !n ||
        !t ||
        ((e.gasPriceInUSD = P.getGasPriceInUSD(
          e.networkPrice,
          BigInt(e.gasFee),
          BigInt(G)
        )),
        (e.priceImpact = P.getPriceImpact({
          sourceTokenAmount: e.sourceTokenAmount,
          sourceTokenPriceInUSD: e.sourceTokenPriceInUSD,
          toTokenPriceInUSD: e.toTokenPriceInUSD,
          toTokenAmount: e.toTokenAmount,
        })),
        (e.maxSlippage = P.getMaxSlippage(e.slippage, e.toTokenAmount)),
        (e.providerFee = P.getProviderFee(e.sourceTokenAmount)));
    },
  },
  a = V(N),
  se = X`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;
var W = function (n, t, o, s) {
  var i = arguments.length,
    r =
      i < 3 ? t : s === null ? (s = Object.getOwnPropertyDescriptor(t, o)) : s,
    u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(n, t, o, s);
  else
    for (var c = n.length - 1; c >= 0; c--)
      (u = n[c]) && (r = (i < 3 ? u(r) : i > 3 ? u(t, o, r) : u(t, o)) || r);
  return i > 3 && r && Object.defineProperty(t, o, r), r;
};
let v = class extends ne {
  constructor() {
    super(...arguments), (this.text = "");
  }
  render() {
    return L`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `;
  }
  tokenTemplate() {
    return this.imageSrc
      ? L`<wui-image src=${this.imageSrc}></wui-image>`
      : L`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `;
  }
};
v.styles = [Z, ee, se];
W([z()], v.prototype, "imageSrc", void 0);
W([z()], v.prototype, "text", void 0);
v = W([oe("wui-token-button")], v);
export { a as S };
