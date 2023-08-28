/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Odometer as OdometerComponent } from "../../components/Odometer";

export const Odometer = () => (
  <div className="doc">
    <h1>Odometer</h1>

    <div style={{ margin: "2rem 0" }}>
      <h1>
        <OdometerComponent value={123.456} />
      </h1>
    </div>
  </div>
);
