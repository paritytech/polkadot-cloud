/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Odometer as OdometerComponent } from "../../components/Odometer";

export const Odometer = () => {
  const [val, setVal] = useState<number>(123.456);

  const updateValue = () => setVal(val + 17491);

  return (
    <div className="doc">
      <h1>Odometer</h1>

      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => updateValue()}
          style={{ marginTop: "5rem" }}
        >
          Update
        </button>

        <div style={{ margin: "2rem 0" }}>
          <h1>
            <OdometerComponent value={val} />
          </h1>
        </div>
      </div>
    </div>
  );
};
