/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Odometer as OdometerComponent } from "../../components/Odometer";

export const Odometer = () => {
  const [val, setVal] = useState<number>(123.456);

  const updateValue = () => setVal(Number((val + 17491.39).toFixed(4)));

  console.log(val);

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
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ margin: "1rem 0" }}>
          <h1>
            <OdometerComponent value={val} />
          </h1>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h2 style={{ margin: 0 }}>
            <OdometerComponent value={val} />
          </h2>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h3 style={{ margin: 0 }}>
            <OdometerComponent value={val} />
          </h3>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h4 style={{ margin: 0 }}>
            <OdometerComponent value={val} />
          </h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h5 style={{ margin: 0 }}>
            <OdometerComponent value={val} />
          </h5>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <p style={{ margin: 0 }}>
            <OdometerComponent value={val} />
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <OdometerComponent value={val} />
          </div>
        </div>
      </div>
    </div>
  );
};
