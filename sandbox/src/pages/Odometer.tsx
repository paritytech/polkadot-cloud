/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ReactOdometer } from "packages/react-odometer/lib";
import { useState } from "react";
import { ButtonPrimary } from "core-ui/index";
import { CodeDrawer } from "../components/CodeDrawer";

export const Odometer = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <h4>React Odometer</h4>
      <div className="row" style={{ alignItems: "center" }}>
        <ButtonPrimary
          text="Click Me"
          onClick={() => setValue(value + 1000)}
          marginRight
        />
        <ReactOdometer duration={150} value={value} />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<ReactOdometer duration={150} value={value} />`}</p>
        </code>
      </CodeDrawer>
    </>
  );
};
