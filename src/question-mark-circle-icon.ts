import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import {IconProps} from "./types";
import * as _util from "./util";

export const QuestionMarkCircleIcon = forwardRef<IconProps>(
  function QuestionMarkCircleIcon($props: IconProps, ref) {
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
        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      })
    );
  }
);
