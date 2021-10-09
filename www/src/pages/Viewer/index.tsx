import { css } from "catom";

import { useRef, useState } from "@hydrophobefireman/ui-lib";
import { Button } from "@kit/button";
import { Container } from "@kit/container";
import { useMedia, useMount } from "@kit/hooks";
import * as icons from "@kit/icons";
import { ClipboardCopyIcon } from "@kit/icons";

export default function Viewer({
  params: { name },
}: {
  params: { name: string };
}) {
  if (!name) return;
  const SvgIcon = icons[name];
  const ref = useRef<SVGElement>();
  const [html, setHTML] = useState("");
  useMount(() => {
    setHTML(ref.current && ref.current.outerHTML);
  });
  const isWide = useMedia("(min-width:800px)");
  return (
    <Container
      class={css({ padding: ".5rem", textAlign: "center" })}
      style={isWide && { "--kit-align-items": "stretch" }}
      row={isWide}
      horizontal={"center"}
    >
      {SvgIcon ? (
        <Container
          horizontal="center"
          class={[
            css({
              width: "400px",
              height: "400px",
              textAlign: "center",
              boxShadow: "var(--kit-shadow)",
            }),
          ]}
        >
          <SvgIcon dom={ref} size="8rem" />
          <code>
            import {`{${name}} from "@hydrophobefireman/kit/icons"`}{" "}
          </code>{" "}
        </Container>
      ) : (
        "Not Found"
      )}
      <Container
        style={isWide ? null : { margin: "auto" }}
        class={css({
          background: "var(--kit-foreground)",
          color: "var(--kit-background)",
          padding: "1rem",
          marginLeft: "2rem",
          maxWidth: "400px",
          position: "relative",
        })}
        flex={0.5}
      >
        {html}

        <Container
          class={css({ margin: ".5rem", width: "100%" })}
          horizontal="right"
        >
          <Button
            onClick={() => navigator.clipboard.writeText(html)}
            mode="secondary"
            variant="shadow"
            label="Copy Text"
          >
            <ClipboardCopyIcon />
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
