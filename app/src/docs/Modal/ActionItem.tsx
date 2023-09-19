/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ActionItem } from "@packages/cloud-react/lib/base/modal/ActionItem";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const ActionItemStatic = () => {
  const code = `<ActionItem text="Some Action" />`;

  return (
    <>
      <Demo showThemes={false}>
        <ActionItem text="Some Action" />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
