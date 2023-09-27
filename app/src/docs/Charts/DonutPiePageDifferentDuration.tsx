/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";
import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";

const colors = [
  { value: 60, color: "red" },
  { value: 200, color: "green" },
  { value: 300, color: "blue" },
  { value: 150, color: "purple" },
];

export const DonutPiePageDifferentDuration = () => {
  const code = `const colors = [
  { value: 60, color: "red" },
  { value: 200, color: "green" },
  { value: 300, color: "blue" },
  { value: 150, color: "purple" },
];

<Chart diameter={100} items={colors} duration={0.1} /> 
<Chart diameter={100} items={colors} innerRadius={20} duration={0.5} />
<Chart diameter={100} items={colors} innerRadius={30} duration={1} /> // Default one
<Chart diameter={100} items={colors} innerRadius={15} duration={3} />
<Chart diameter={100} items={colors} innerRadius={15} duration={10} />
<Chart diameter={100} items={colors} innerRadius={5} duration={100} />`;

  return (
    <>
      <Demo showThemes={false}>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={100} items={colors} duration={0.1} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={colors}
            innerRadius={20}
            duration={0.5}
          />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={100} items={colors} innerRadius={49} duration={1} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={100} items={colors} innerRadius={30} duration={3} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={100} items={colors} innerRadius={15} duration={10} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart
            diameter={100}
            items={colors}
            innerRadius={40}
            duration={100}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
