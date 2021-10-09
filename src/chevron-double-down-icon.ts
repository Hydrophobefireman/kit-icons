import { forwardRef, h } from "@hydrophobefireman/ui-lib";

import { IconProps } from "./types";
import  * as _util from "./util";

export const ChevronDoubleDownIcon = forwardRef(function ChevronDoubleDownIcon(
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
      d: "M19 13l-7 7-7-7m14-8l-7 7-7-7",
    })
  );
});
