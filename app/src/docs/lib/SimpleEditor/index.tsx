/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
import PrismJSX from "./languages/jsx.min.mjs";
import PrismTSX from "./languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import "./themes/dark.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
// If a light theme is preferable on light mode, the following theme can be uncommented, and `Editor`'s `className` prop can be set to `editor-language-light`.
// import "./themes/light.scss";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

interface SimpleEditorProps {
  code: string;
  language?: string;
}
export const SimpleEditor = ({ code, language = "tsx" }: SimpleEditorProps) => {
  const [value] = useState<string>(code);

  const editorStyle = {
    border: "1px solid var(--border-secondary-color)",
    background: "#111",
    borderBottomLeftRadius: "0.75rem",
    borderBottomRightRadius: "0.75rem",
    fontFamily: '"Source Code Pro", monospace',
    fontSize: "1.1rem",
    lineHeight: "1.6rem",
    fontWeight: "500",
    marginBottom: "2.5rem",
  };

  return (
    <div className="editor">
      <button
        className="copy"
        type="button"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <FontAwesomeIcon icon={faCopy} />
      </button>
      <Editor
        value={value}
        onValueChange={() => {
          /* Editor currently disabled */
        }}
        highlight={(c) => highlight(c, languages[language], language)}
        padding={"1.25rem"}
        className={`editor-${"dark"}`}
        style={editorStyle}
      />
    </div>
  );
};
