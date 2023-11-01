/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { ModalConnect } from "./ModalConnect";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Web/Hardware Wallets Connect component"
        subtitle="A light-weight and Connect recipe for connecting to web/hardware wallets."
        npm={npm}
        status="stable"
      />
      <ModalConnect />
    </>
  );
};
