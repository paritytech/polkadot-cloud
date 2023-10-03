/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ActionItem } from "@packages/cloud-react/lib/base/modal/ActionItem";
import { SimpleEditor } from "@docs/SimpleEditor";
import { useState } from "react";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { Demo } from "@docs/Demo";

export const ActionItemWithToggle = () => {
  const [parentToggle, setParentToggle] = useState<boolean>(false);

  const code = `<ActionItem
  text="Some Action With Toggle"
  toggled={parentToggle}
  onToggle={(val: boolean) => {
    setParentToggle(val);
  }}
  inlineButton={<Button type="help" />}
/>`;

  return (
    <>
      <Demo showThemes={false}>
        <ActionItem
          text="Some Action With Toggle"
          toggled={parentToggle}
          onToggle={(val: boolean) => setParentToggle(val)}
          inlineButton={<Button type="help" />}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
