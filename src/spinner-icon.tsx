import {forwardRef, h} from "@hydrophobefireman/ui-lib";

import * as _util from "./util";

export const SpinnerIcon = forwardRef(function SpinnerIcon(
  {
    size,
    color,
  }: {
    size?: number | string;
    color?: string;
  },
  ref
) {
  size = size ? _util.toPx(size) : "32px";
  return h(
    "svg",
    {
      ref: ref as any,
      class: "kit-spinner-container",
      height: size,
      width: size,
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 100 100",
      fill: color || "var(--kit-shade-7)",
    },
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.91s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(30 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.83s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(60 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.75s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(90 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.66",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(120 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.58s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(150 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.5s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(180 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.4166666666666667s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(210 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.33s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(240 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.25s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(270 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.16s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(300 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "-0.08s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    ),
    h(
      "rect",
      {
        width: "6",
        height: "12",
        x: "47",
        y: "24",
        rx: "3",
        ry: "6",
        transform: "rotate(330 50 50)",
      },
      h("animate", {
        attributeName: "opacity",
        begin: "0s",
        dur: "1s",
        keyTimes: "0;1",
        repeatCount: "indefinite",
        values: "1;0",
      })
    )
  );
});
