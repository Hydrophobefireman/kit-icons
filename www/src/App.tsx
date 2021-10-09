import "@kit/styles";

// javascript is supported
import "./App.css";

import { Motion } from "@hydrophobefireman/ui-anim";
import { VNode, render } from "@hydrophobefireman/ui-lib";
import { Router, dynamic } from "@kit/router";

function App(): VNode {
  return (
    <Motion>
      <main>
        <Router
          paths={{
            "/": dynamic(() => import("@/pages/Landing")),
            "/viewer/-/:name": dynamic(() => import("@/pages/Viewer")),
          }}
        />
      </main>
    </Motion>
  );
}

render(<App />, document.getElementById("app-mount"));
