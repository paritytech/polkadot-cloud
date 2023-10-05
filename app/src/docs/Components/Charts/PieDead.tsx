/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const PieDead = () => {
  const code = `// "Dead" Pie example - when all values provided sum to 0.
<Chart
  diameter={75}
  items={[
    { value: 0, color: "var(--accent-color-primary)" },
    { value: 0, color: "var(--background-default)" },
  ]}
/>`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box">
          <Chart
            diameter={75}
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
