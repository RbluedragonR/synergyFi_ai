import { a2 as h } from "./index-B3oWiE09.js";
import { a as d, f as o } from "./if-defined-EXyKF6lo.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const a = () => new c();
class c {}
const i = new WeakMap(),
  f = d(
    class extends o {
      render(t) {
        return h;
      }
      update(t, [e]) {
        var n;
        const s = e !== this.G;
        return (
          s && this.G !== void 0 && this.rt(void 0),
          (s || this.lt !== this.ct) &&
            ((this.G = e),
            (this.ht = (n = t.options) == null ? void 0 : n.host),
            this.rt((this.ct = t.element))),
          h
        );
      }
      rt(t) {
        if ((this.isConnected || (t = void 0), typeof this.G == "function")) {
          const e = this.ht ?? globalThis;
          let s = i.get(e);
          s === void 0 && ((s = new WeakMap()), i.set(e, s)),
            s.get(this.G) !== void 0 && this.G.call(this.ht, void 0),
            s.set(this.G, t),
            t !== void 0 && this.G.call(this.ht, t);
        } else this.G.value = t;
      }
      get lt() {
        var t, e;
        return typeof this.G == "function"
          ? (t = i.get(this.ht ?? globalThis)) == null
            ? void 0
            : t.get(this.G)
          : (e = this.G) == null
          ? void 0
          : e.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    }
  );
export { a as e, f as n };
