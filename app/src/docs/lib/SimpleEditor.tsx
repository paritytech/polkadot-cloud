/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
import "prismjs/themes/prism.css";
// eslint-disable-next-line
import PrismJSX from "../languages/jsx.min.mjs";
import PrismTSX from "../languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

interface SimpleEditorProps {
  code?: string;
}
export const SimpleEditor = ({ code }: SimpleEditorProps) => {
  const [value, setValue] = useState<string>(code || "");

  return (
    <Editor
      value={value}
      onValueChange={(c) => setValue(c)}
      highlight={(c) => highlight(c, languages.jsx, "jsx")}
      padding={"1.25rem"}
      style={{
        background: "var(--background-primary)",
        borderRadius: "0.25rem",
        fontFamily: '"Fira Mono", monospace',
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
        fontWeight: "600",
      }}
    />
  );
};
