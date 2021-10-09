import { forwardRef, h } from "@hydrophobefireman/ui-lib";

import { IconProps } from "./types";
import  * as _util from "./util";

export const CurrencyBangladeshiIcon = forwardRef(
  function CurrencyBangladeshiIcon($props: IconProps, ref) {
    const { size, color, ...rest } = $props;
    const _size = size ? _util.toPx(size) : "24px";
    const props = _util.extend(rest, { height: _size, width: _size });
    return h(
      "svg",
      _util.extend(
        {
          fill: "none",
          ref: ref as any,
          viewBox: "0 0 24 24",
   
          stroke: color || "var(--kit-theme-fg)",
        },
        props
      ),
      h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": 2,
        d: "M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z",
      })
    );
  }
);
