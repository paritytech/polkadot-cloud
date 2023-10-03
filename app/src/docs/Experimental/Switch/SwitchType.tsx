/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Switch } from "@packages/cloud-react/lib/base/inputs/Switch";
import { SimpleEditor } from "@docs/SimpleEditor";

export const SwitchType = () => {
  const code_primary = `<Switch isOn={true} /> {/* same as 'type="primary"' */}
<Switch type="primary" isOn={false} />
<Switch type="primary" isOn={true} disabled />
<Switch type="primary" isOn={false} disabled />`;

  const code_secondary = `<Switch type="secondary" isOn={true} />
<Switch type="secondary" isOn={false} />
<Switch type="secondary" isOn={true} disabled />
<Switch type="secondary" isOn={false} disabled />`;

  const code_mono = `<Switch type="mono" isOn={true} />
<Switch type="mono" isOn={false} />
<Switch type="mono" isOn={true} disabled />
<Switch type="mono" isOn={false} disabled />`;

  const code_mono_invert = `<Switch type="monoInvert" isOn={true} />
<Switch type="monoInvert" isOn={false} />
<Switch type="monoInvert" isOn={true} disabled />
<Switch type="monoInvert" isOn={false} disabled />`;

  return (
    <>
      <h4>type: Primary</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="primary" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="primary" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="primary" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_primary} />
      <h4>type: secondary</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch type="secondary" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="secondary" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="secondary" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="secondary" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_secondary} />
      <h4>type: mono</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch type="mono" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="mono" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="mono" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="mono" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_mono} />
      <h4>type: monoInvert</h4>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch type="monoInvert" isOn={true} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="monoInvert" isOn={false} />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="monoInvert" isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch type="monoInvert" isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code_mono_invert} />
    </>
  );
};
