/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
import PrismJSX from "./languages/jsx.min.mjs";
import PrismTSX from "./languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../../contexts/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./themes/dark.scss";
import "./themes/light.scss";
import { SimpleEditorProps } from "./types";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

export const SimpleEditor = ({
  code,
  language = "tsx",
  standalone = false,
}: SimpleEditorProps) => {
  const [value] = useState<string>(code);
  const { mode } = useTheme();

  const editorStyle = {
    border: "1px solid var(--border-secondary-color)",
    background: "var(--background-primary)",
    borderRadius: standalone ? "0.5rem" : "0 0 0.5rem 0.5rem",
    fontFamily: '"Source Code Pro", monospace',
    fontSize: "1.1rem",
    lineHeight: "1.6rem",
    fontWeight: "500",
    marginBottom: "2rem",
    maxWidth: "100%",
    overflow: "auto",
    textWrapping: "wrap",
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
        className={`editor-${mode}`}
        textareaClassName="editor-textarea"
        style={editorStyle}
        padding="1.25rem"
        disabled
      />
    </div>
  );
};
