import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const ArrowCircleLeftIcon = forwardRef<IconProps>(function ArrowCircleLeftIcon(
  $props: IconProps,
  ref
) {
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
      d: "M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
    })
  );
});
