/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { TextfieldSimple } from "./TextfieldSimple";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Textfield"
        subtitle="Simple textfield component."
        npm={npm}
        status="experimental"
      />

      <h3>The Textfield</h3>

      <TextfieldSimple />
    </>
  );
};
