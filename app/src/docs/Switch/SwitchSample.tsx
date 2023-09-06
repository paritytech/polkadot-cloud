/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Switch } from "@packages/cloud-react/lib/base/inputs/Switch";
import { SimpleEditor } from "../lib/SimpleEditor";

export const SwitchSample = () => {
  const code = `<Switch />`;

  return (
    <>
      <div className="demo">
        <Switch />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
