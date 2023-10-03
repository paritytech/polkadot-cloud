/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Switch } from "@packages/cloud-react/lib/base/inputs/Switch";
import { SimpleEditor } from "@docs/SimpleEditor";

export const SwitchSimple = () => {
  const code = `<Switch isOn={true} handleToggle={() => console.log("Switch clicked")} />
<Switch isOn={false} handleToggle={() => console.log("Switch clicked")} />
<Switch isOn={true} disabled />
<Switch isOn={false} disabled />`;

  return (
    <>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch
            isOn={true}
            handleToggle={() => console.log("Switch clicked")}
          />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch
            isOn={false}
            handleToggle={() => console.log("Switch clicked")}
          />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
