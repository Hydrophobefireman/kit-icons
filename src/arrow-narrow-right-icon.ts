import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const ArrowNarrowRightIcon = forwardRef<IconProps>(function ArrowNarrowRightIcon(
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
      d: "M17 8l4 4m0 0l-4 4m4-4H3",
    })
  );
});
