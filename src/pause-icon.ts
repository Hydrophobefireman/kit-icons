import { forwardRef, h } from "@hydrophobefireman/ui-lib";

import { IconProps } from "./types";
import  * as _util from "./util";

export const PauseIcon = forwardRef(function PauseIcon($props: IconProps, ref) {
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
      d: "M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z",
    })
  );
});
