import { css } from "catom";

import { buttonStyle, innerButtonStyle } from "@/style";
import { contains } from "@/util";
import { useEffect, useState } from "@hydrophobefireman/ui-lib";
import { Button } from "@kit/button";
import { Container } from "@kit/container";
import * as $iconModule from "@kit/icons";
import { Input } from "@kit/input";
import { Text } from "@kit/text";

const icons = { ...$iconModule };
const ic = Object.entries(icons);
export default function Landing() {
  const [value, setValue] = useState<string | number>("");
  const [filtered, setFiltered] = useState(ic);
  useEffect(() => {
    if (!value) return setFiltered(ic);
    setFiltered(ic.filter((x) => contains(x[0], value)));
  }, [value]);
  const [color, setColor] = useState("--kit-success");
  return (
    <div
      class={css({ marginTop: "2rem", textAlign: "center" })}
      style={{
        "--kit-theme-fg": color[0] === "-" ? `var(${color})` : color,
      }}
    >
      <Container horizontal="center">
        <Input.Search
          // wrapperClass={css({
          //   pseudo: { ".kit-flex": { display: "inline-block" } },
          // })}
          value={value}
          setValue={setValue}
          variant="material"
          label="Search"
        />
      </Container>
      <Container horizontal="center">
        <input
          type="color"
          value={color[0] === "-" ? `#0000ff` : color}
          onInput={(x) => setColor(x.currentTarget.value)}
        />
      </Container>
      <Container row class={css({ flexWrap: "wrap", padding: ".5rem" })}>
        {filtered.map(([name, SvgIcon]) => {
          return (
            <Button
              label={name}
              mode="secondary"
              variant="shadow"
              href={`/viewer/-/${name}`}
              innerContentClass={innerButtonStyle}
              class={[
                buttonStyle,
                css({
                  width: "175px",
                  height: "175px",
                  borderWidth: "1px",
                }),
              ]}
            >
              <SvgIcon size="2rem" />
              <Text.span size=".8rem">{name}</Text.span>
            </Button>
          );
        })}
      </Container>
    </div>
  );
}
