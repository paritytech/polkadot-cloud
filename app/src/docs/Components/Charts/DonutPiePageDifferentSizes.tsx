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

export const DonutPiePageDifferentSizes = () => {
  const code = `const colors = [
  { value: 60, color: "red" },
  { value: 200, color: "green" },
  { value: 300, color: "blue" },
  { value: 150, color: "purple" },
];

<Chart diameter={200} items={colors} />
<Chart diameter={150} items={colors} innerRadius={20} />
<Chart diameter={100} items={colors} innerRadius={30} />
<Chart diameter={50} items={colors} innerRadius={15} />
<Chart diameter={20} items={colors} innerRadius={5} />`;

  return (
    <>
      <Demo showThemes={false}>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={200} items={colors} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={150} items={colors} innerRadius={20} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={100} items={colors} innerRadius={30} />
        </div>
        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={50} items={colors} innerRadius={15} />
        </div>

        <div style={{ margin: "0 1rem" }}>
          <Chart diameter={20} items={colors} innerRadius={5} />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
