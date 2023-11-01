// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { usePrompt } from "../../Providers/PromptProvider";
import "@polkadot-cloud/core/css/recipes/Connect/Modal/Prompt/index.css";

export const Prompt = () => {
  const { closePrompt, size, status, Prompt: PromptInner } = usePrompt();

  if (status === 0) {
    return <></>;
  }

  return (
    <div className="prompt-wrapper">
      <div>
        <div
          className="height-wrapper"
          style={
            size === "small" ? { maxWidth: "500px" } : { maxWidth: "700px" }
          }
        >
          <div className="content-wrapper">{PromptInner}</div>
        </div>
        <button type="button" className="close" onClick={() => closePrompt()}>
          &nbsp;
        </button>
      </div>
    </div>
  );
};
