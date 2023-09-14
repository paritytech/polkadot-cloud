/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Odometer } from "@packages/cloud-react/lib/complex/Odometer";
import { Demo } from "../lib/Demo";

export const OdometerDiv = () => {
  const code = `<div>
  <Odometer value={123.456} />
</div>`;

  const [val, setVal] = useState<number>(123.456);
  const updateValue = () => setVal(Number((val + 17491.39).toFixed(4)));

  return (
    <>
      <Demo showThemes={false} style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: 0 }}>
            <Odometer value={val} />
          </div>
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
