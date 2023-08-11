/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Pie } from "packages/core-ui/lib/statistics/Pie";
import { CodeDrawer } from "../components/CodeDrawer";
import { useState } from "react";

export const Statistics = () => {
  const [titlePos, setTitlePos] = useState<"top" | "right" | "bottom" | "left">(
    "top"
  );
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number | undefined>(42);
  return (
    <>
      <h4>Pie Chart - (Adjusting to wrapped component`s size)</h4>
      <div className="row" style={{ width: "100px" }}>
        <Pie perc={42} />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<div style={{ width: "100px" }}>`}</p>
          <p>{`<Pie perc={42} />`}</p>
          <p>{`</div>`}</p>
        </code>
      </CodeDrawer>

      <h4>Pie Chart - different size with surrounding blocks</h4>
      <div className="row">
        <div
          style={{
            width: "150px",
            display: "block",
            margin: "0 10rem",
            float: "left",
            border: "1px solid #000",
          }}
        ></div>
        <div style={{ width: "180px", display: "block", float: "left" }}>
          <Pie perc={92} />
        </div>
        <div style={{ width: "100px", display: "block", float: "left" }}>
          Something else
        </div>
      </div>
      <CodeDrawer>
        <code>
          <p>{`<div className="row">`}</p>
          <p>{`<div style={{ width: "150px", display: "block", margin: "0 10rem", float: "left", border: "1px solid #000", }}></div>`}</p>
          <p>{`<div style={{ width: "180px", display: "block", float: "left" }}>`}</p>
          <p>{`<Pie perc={92} /></div>`}</p>
          <p>{`<div style={{ width: "100px", display: "block", float: "left" }}>Something else</div>`}</p>
          <p>{`</div>`}</p>
        </code>
      </CodeDrawer>

      <h4>Pie Chart - interactive percentage</h4>
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
            <label style={{ color: "var(--network-color-primary)" }}>
              Chart percentage
            </label>
            <input
              style={{ width: "100px" }}
              max={100}
              min={0}
              checked={titlePos === "left"}
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
      <CodeDrawer>
        <code>
          <p>{`<Pie perc={${percentage}} />`}</p>
        </code>
      </CodeDrawer>
    </>
  );
};
