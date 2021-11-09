import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const ReplyIcon = forwardRef<IconProps>(function ReplyIcon($props: IconProps, ref) {
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
      d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6",
    })
  );
});
