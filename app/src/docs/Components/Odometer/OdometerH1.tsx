/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Odometer } from "@packages/cloud-react/lib/complex/Odometer";
import BigNumber from "bignumber.js";
import { Demo } from "@docs/Demo";

export const OdometerH1 = () => {
  const code = `<h1>
  <Odometer value="1,2019,03.456789" />
</h1>`;

  const [val, setVal] = useState<number>(1201903.456789);
  const updateValue = () => setVal(Number((val + 17491.390013).toFixed(4)));

  return (
    <>
      <Demo showThemes={false} style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={{ margin: 0, display: "flex" }}>
            <Odometer value={new BigNumber(val).toFormat()} />
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => updateValue()}
            style={{ marginTop: "1rem" }}
          >
            Trigger Update
          </button>
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
