/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Switch } from "@packages/cloud-react/lib/base/inputs/Switch";
import { SimpleEditor } from "@docs/SimpleEditor";

export const SwitchSize = () => {
  const code = `<Switch isOn={true} />
<Switch isOn={false} />
<Switch isOn={true} disabled />
<Switch isOn={false} disabled />`;
  const code_sm = `<Switch isOn={true} size="sm" />
<Switch isOn={false} size="sm" />
<Switch isOn={true} disabled size="sm" />
<Switch isOn={false} disabled size="sm" />`;
  const code_lg = `<Switch isOn={true} size="lg" />
<Switch isOn={false} size="lg" />
<Switch isOn={true} disabled size="lg" />
<Switch isOn={false} disabled size="lg" />`;
  const code_xl = `<Switch isOn={true} size="xl" />
<Switch isOn={false} size="xl" />
<Switch isOn={true} disabled size="xl" />
<Switch isOn={false} disabled size="xl" />`;

  return (
    <>
      <h4>Default size</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code} />
      <h4>Small size (sm)</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch size="sm" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="sm" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="sm" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="sm" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_sm} />
      <h4>Large size (lg)</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch size="lg" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="lg" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="lg" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="lg" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_lg} />
      <h4>Extra Large size (xl)</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch size="xl" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="xl" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="xl" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch size="xl" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_xl} />
    </>
  );
};
