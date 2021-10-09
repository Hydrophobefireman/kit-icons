import { forwardRef, h } from "@hydrophobefireman/ui-lib";

import { IconProps } from "./types";
import  * as _util from "./util";

export const ChartPieIcon = forwardRef(function ChartPieIcon(
  $props: IconProps,
  ref
) {
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
      d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    }),
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": 2,
      d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
    })
  );
});
