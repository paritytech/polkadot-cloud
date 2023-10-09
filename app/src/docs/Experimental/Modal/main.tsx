/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { ActionItemStatic } from "./ActionItem";
import { ActionItemWithToggle } from "./ActionItemWithToggle";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Modal Components"
        subtitle="UI components for modal overlays."
        npm={npm}
        status="experimental"
      />
      <h3>Action Item</h3>
      <ActionItemStatic />
      <h3>Action Item with Toggle</h3>
      <ActionItemWithToggle />
    </>
  );
};
