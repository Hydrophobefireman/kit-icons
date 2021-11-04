import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const PresentationChartBarIcon = forwardRef(
  function PresentationChartBarIcon($props: IconProps, ref) {
    const {size, color, children: _, ...rest} = $props;
    const _size = size ? _util.toPx(size) : "24px";
    const props = _util.extend(rest, {height: _size, width: _size});
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
        d: "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
      })
    );
  }
);
