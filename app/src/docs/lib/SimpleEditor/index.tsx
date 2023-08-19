/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
import PrismJSX from "../../languages/jsx.min.mjs";
import PrismTSX from "../../languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import "./themes/coy.scss";
import "./themes/tomorrow.scss";
import { useTheme } from "app/src/contexts/Theme";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

interface SimpleEditorProps {
  code?: string;
}
export const SimpleEditor = ({ code }: SimpleEditorProps) => {
  const { mode } = useTheme();
  const [value] = useState<string>(code || "");

  return (
    <Editor
      value={value}
      onValueChange={() => {
        /* Editor currently disabled */
      }}
      highlight={(c) => highlight(c, languages.tsx, "tsx")}
      padding={"1rem"}
      className={`editor-language-${mode}`}
      style={{
        background: "var(--background-primary)",
        borderRadius: "0.35rem",
        fontFamily: '"Fira Mono", monospace',
        fontSize: "1.1rem",
        lineHeight: "1.8rem",
        fontWeight: "500",
      }}
    />
  );
};
