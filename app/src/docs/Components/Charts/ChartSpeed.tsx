/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";

const colors = [
  { value: 60, color: "red" },
  { value: 200, color: "green" },
  { value: 300, color: "blue" },
  { value: 150, color: "purple" },
];

export const ChartSpeed = () => {
  const code = `const colors = [
  { value: 60, color: "red" },
  { value: 200, color: "green" },
  { value: 300, color: "blue" },
  { value: 150, color: "purple" },
];

<Chart diameter={75} items={colors} innerRadius={20} />
<Chart diameter={75} items={colors} speed={0.1} /> 
<Chart diameter={75} items={colors} innerRadius={15} speed={3} />
<Chart diameter={75} items={colors} innerRadius={15} speed={10} />
<Chart diameter={75} items={colors} innerRadius={5} speed={100} />`;

  return (
    <>
      <Demo showThemes={false}>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={75} items={colors} innerRadius={20} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={75} items={colors} speed={0.1} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={75} items={colors} innerRadius={30} speed={3} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={75} items={colors} innerRadius={15} speed={10} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={75} items={colors} innerRadius={40} speed={100} />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
