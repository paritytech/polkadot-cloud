/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { Pie } from "core-ui/statistics/Pie";
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
      <h4>Pie Chart - Default</h4>
      <div className="row">
        <Pie title="Example" size={10} perc={42} />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<Pie title="Example" size={10} perc={42} />`}</p>
        </code>
      </CodeDrawer>

      <h4>Pie Chart - Fixed Title</h4>
      <div className="row">
        <Pie title="Example" size={10} perc={42} fixedTitle />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<Pie title="Example" size={10} perc={42} />`}</p>
        </code>
      </CodeDrawer>

      <h4>Pie Chart - Title position (top, right, bottom, left)</h4>
      <div className="row" style={{ alignItems: "center" }}>
        <Pie
          title="Example"
          size={10}
          perc={percentage}
          fixedTitle={showTitle ? true : false}
          titlePosition={titlePos}
        />
        {/* ShowCase properties React-style */}
        <div
          style={{
            marginLeft: "10rem",
            padding: "1rem",
            border: "1px solid var(--border-primary-color)",
            backgroundColor: "var(--background-primary)",
          }}
        >
          <div style={{ margin: "1rem 0" }}>
            <input
              type="radio"
              checked={showTitle}
              onChange={() => setShowTitle(true)}
            />
            <label style={{ color: "var(--network-color-primary)" }}>
              Always-On Title
            </label>
            <input
              type="radio"
              checked={!showTitle}
              onChange={() => setShowTitle(false)}
            />
            <label style={{ color: "var(--network-color-primary)" }}>
              Auto-Hiding Title
            </label>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <input
              type="radio"
              checked={titlePos === "top"}
              onChange={() => setTitlePos("top")}
            />
            <label style={{ color: "var(--network-color-primary)" }}>Top</label>
            <input
              type="radio"
              checked={titlePos === "right"}
              onChange={() => setTitlePos("right")}
            />
            <label style={{ color: "var(--network-color-primary)" }}>
              Right
            </label>
            <input
              type="radio"
              checked={titlePos === "bottom"}
              onChange={() => setTitlePos("bottom")}
            />
            <label style={{ color: "var(--network-color-primary)" }}>
              Bottom
            </label>
            <input
              type="radio"
              checked={titlePos === "left"}
              onChange={() => setTitlePos("left")}
            />
            <label style={{ color: "var(--network-color-primary)" }}>
              Left
            </label>
          </div>
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
              value={percentage}
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
          <p>{`<Pie title="Example" size={10} perc={${percentage}} ${
            showTitle ? "fixedTitle " : ""
          }
          titlePosition="${titlePos}"
          />`}</p>
        </code>
      </CodeDrawer>
    </>
  );
};
