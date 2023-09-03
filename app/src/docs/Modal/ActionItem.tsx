/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ActionItem } from "@packages/cloud-react/lib/base/modal/ActionItem";
import { SimpleEditor } from "../lib/SimpleEditor";

export const ActionItemStatic = () => {
  const code = `<ActionItem text="Some Action" />`;

  return (
    <>
      <div className="demo">
        <ActionItem text="Some Action" />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
