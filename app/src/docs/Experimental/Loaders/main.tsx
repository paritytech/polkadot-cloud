/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { LoaderCube } from "./LoaderCube";
import { LoaderLine } from "./LoaderLine";
import { LoaderDots } from "./LoaderDots";

import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Loaders"
        subtitle="Pure CSS animated loaders."
        npm={npm}
        status="experimental"
      />
      <h3>Line Loader</h3>
      <LoaderLine />
      <h3>Dots Loader</h3>
      <LoaderDots />
      <h3>Cube Loader</h3>
      <LoaderCube />
    </>
  );
};
