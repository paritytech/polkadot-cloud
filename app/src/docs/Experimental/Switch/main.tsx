/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { SwitchSimple } from "./SwitchSimple";
import { SwitchSize } from "./SwitchSize";
import { SwitchType } from "./SwitchType";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Switch"
        subtitle="Simple switch component."
        npm={npm}
        status="experimental"
      />
      <h3>The Switch</h3>
      <SwitchSimple />
      <h3>Switch types</h3>
      <SwitchType />
      <h3>Switch Sizes</h3>
      <SwitchSize />
    </>
  );
};
