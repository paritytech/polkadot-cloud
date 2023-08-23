/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AccountCard } from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPage = () => {
  const code = ``;
  return (
    <>
      <div className="demo">
        <AccountCard
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
