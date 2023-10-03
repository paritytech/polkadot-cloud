/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const PieSimple = () => {
  const code = `<Chart diameter={100}
  items={[
    { value: 60, color: "red" },
    { value: 200, color: "var(--background-default)" },
  ]}
/>
<Chart diameter={100}
  items={[
    { value: 200, color: "var(--accent-color-primary)" },
    { value: 0, color: "var(--background-default)" },
  ]}
/>
<Chart
  diameter={100}
  items={[
    { value: 0, color: "var(--accent-color-primary)" },
    { value: 200, color: "var(--background-default)" },
  ]}
/>
// "Dead Pie" example - when all values provided sums to 0;
<Chart
  diameter={100}
  items={[
    { value: 0, color: "var(--accent-color-primary)" },
    { value: 0, color: "var(--background-default)" },
  ]}
/>`;

  return (
    <>
      <Demo>
        <div className="row">
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="row">
          <Chart
            diameter={100}
            items={[
              { value: 200, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="row">
          <Chart
            diameter={100}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="row">
          <Chart
            diameter={100}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
