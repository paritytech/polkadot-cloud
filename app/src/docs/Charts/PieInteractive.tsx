/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Pie } from "@packages/cloud-react/lib/base/structure/Pie";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";
import { useState } from "react";

const code = `<Pie perc={42} />`;

export const PieInteractive = () => {
  const [percentage, setPercentage] = useState<number | undefined>(69);
  return (
    <>
      <Demo>
        <div className="row" style={{ alignItems: "center" }}>
          <div style={{ width: "50%", float: "left" }}>
            <Pie perc={percentage} />
          </div>
          {/* ShowCase properties React-style */}
          <div
            style={{
              width: "25%",
              float: "left",
              marginLeft: "10rem",
              padding: "1rem",
              border: "1px solid var(--border-primary-color)",
              backgroundColor: "var(--background-primary)",
            }}
          >
            <div>
              <label
                style={{ color: "var(--accent-color-primary-color-primary)" }}
              >
                Chart percentage
              </label>
              <input
                style={{ width: "100px" }}
                max={100}
                min={0}
                defaultValue={percentage}
                value={`${percentage}%`}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (isNaN(val)) {
                    setPercentage(0);
                  } else {
                    setPercentage(val);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
