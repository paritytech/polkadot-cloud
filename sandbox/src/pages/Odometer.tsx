/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ReactOdometer } from "packages/react-odometer/lib";
import { useState } from "react";
import { ButtonPrimary } from "core-ui/index";
import { CodeDrawer } from "../components/CodeDrawer";
import { Identicon } from "packages/react-identicon/lib";

export const Odometer = () => {
  const [value, setValue] = useState<number>(1000000.123456);
  const address = "5Cm4fpyMR3gitN1oczgiutdUimmaTvVXWvKzPSWMZh3Qm33B";

  return (
    <>
      <Identicon value={address} size={32} />
      <h4>React Odometer</h4>
      <div className="row" style={{ alignItems: "center" }}>
        <ButtonPrimary
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
