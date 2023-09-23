/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";
import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";

export const DonutPiePageDifferentStyles = () => {
  const code = `const themeColors = [
  { value: 60, color: "var(--background-default)" },
  { value: 50, color: "var(--background-invert)" },
  { value: 150, color: "var(--accent-color-primary)" },
  { value: 200, color: "var(--accent-color-secondary)" },
  { value: 30, color: "var(--button-secondary-background)" }
];

<Chart diameter={100} items={themeColors} />
<Chart diameter={100} items={themeColors} innerRadius={20} />
<Chart diameter={100} items={themeColors} innerRadius={30} />
<Chart diameter={100} items={themeColors} innerRadius={40} />
<Chart diameter={100} items={themeColors} innerRadius={48} />
// Or some other colors
<Chart diameter={100}
  items={[
    { value: 60, color: "yellow" },
    { value: 200, color: "green" },
    { value: 300, color: "blue" }
  ]} />
`;

  return (
    <>
      <Demo>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={20}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={30}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={40}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
            ]}
            innerRadius={48}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "yellow" },
              { value: 200, color: "green" },
              { value: 300, color: "blue" },
            ]}
            innerRadius={0}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
