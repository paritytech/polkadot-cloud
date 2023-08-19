/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
// import "prismjs/themes/prism-tomorrow.min.css";
// eslint-disable-next-line
import PrismJSX from "../../languages/jsx.min.mjs";
import PrismTSX from "../../languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import "./themes/coy.scss";
import "./themes/tomorrow.scss";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

interface SimpleEditorProps {
  code?: string;
}
export const SimpleEditor = ({ code }: SimpleEditorProps) => {
  const [value] = useState<string>(code || "");

  // NOTE: Temporary theme switching.
  // TODO: Move `mode` from `App.tsx` to a context & use that instead of this local theme.
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
      >
        Toggle Theme
      </button>

      <Editor
        value={value}
        onValueChange={() => {
          /* Editor currently disabled */
        }}
        highlight={(c) => highlight(c, languages.tsx, "tsx")}
        padding={"1.25rem"}
        className={`editor-language-${mode}`}
        style={{
          background: "var(--background-primary)",
          borderRadius: "0.25rem",
          fontFamily: '"Fira Mono", monospace',
          fontSize: "1.2rem",
          lineHeight: "1.8rem",
          fontWeight: "500",
        }}
      />
    </>
  );
};
