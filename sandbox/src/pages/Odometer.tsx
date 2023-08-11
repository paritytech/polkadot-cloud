/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactOdometer } from "../../../packages/react-odometer/lib";
import { useState } from "react";
import { Button } from "../../../packages/core-ui/lib/buttons/Button";
import { CodeDrawer } from "../components/CodeDrawer";

export const Odometer = () => {
  const [value, setValue] = useState<number>(1000000.123456);

  return (
    <>
      <h1 className="sb-title">Odometer</h1>
      <h4>React Odometer</h4>
      <div className="sb-row" style={{ alignItems: "center" }}>
        <Button
          type="primary"
          text="Click Me"
          onClick={() => setValue(Number(value) + 1000)}
          marginRight
        />
        <ReactOdometer duration={150} value={value} decimals={3} />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<ReactOdometer duration={150} value={value} />`}</p>
        </code>
      </CodeDrawer>
    </>
  );
};
