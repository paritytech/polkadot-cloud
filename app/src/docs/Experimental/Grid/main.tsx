/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { GridOneTwelve } from "./GridOneTwelve";
import { GridOneThree } from "./GridOneThree";
import { GridMoreRowsDiffSizes } from "./GridMoreRowsDiffSizes";
import { GridGapsLeftRight } from "./GridGapsLeftRight";
import { GridAlignTop } from "./GridAlignTop";
import { GridAlignBottomEnd } from "./GridAlignBottomEnd";

import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Grid"
        subtitle="A light-weight grid system for responsive layouts."
        npm={npm}
        status="experimental"
      />
      <h2>
        All examples have different screen size parameters set (resize screen
        for results)
      </h2>
      <h3>1 row - 12 columns</h3>
      <GridOneTwelve />
      <h3>1 row - 3 columns</h3>
      <GridOneThree />
      <h3>More rows - different sized columns</h3>
      <GridMoreRowsDiffSizes />
      <h3>1/2 size and centered (creating gaps left and right)</h3>
      <GridGapsLeftRight />
      <h3>Align items top</h3>
      <GridAlignTop />
      <h3>Align items bottom-end</h3>
      <GridAlignBottomEnd />
    </>
  );
};
