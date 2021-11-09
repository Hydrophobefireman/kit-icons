import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const UserRemoveIcon = forwardRef<IconProps>(function UserRemoveIcon(
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
      d: "M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6",
    })
  );
});
