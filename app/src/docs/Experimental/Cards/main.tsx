/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { CardMono } from "./CardMono";
import { CardInGrid } from "./CardInGrid";
import { CardWithGridSystem } from "./CardWithGridSystem";
import { CardWithGridSystemTwoRows } from "./CardWithGridSystemTwoRows";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Cards"
        subtitle="Simple card components."
        npm={npm}
        status="experimental"
      />
      <h3>Simple Card</h3>
      <CardMono />
      <h3>
        Card in Grid system - 1 row - 3 columns, with different animations
      </h3>
      <CardInGrid />
      <h3>Card with included Grid system - 1 row - 3 columns</h3>
      <CardWithGridSystem />
      <h3>Card with included Grid system - 2 row - 3 columns</h3>
      <CardWithGridSystemTwoRows />
    </>
  );
};
