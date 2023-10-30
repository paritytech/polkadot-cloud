/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const AccountCardPageSimpleMoreProps = () => {
  const code = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {
  copy: true,
  position: "right",
  size: 3,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const iconProps: IconProps = {
    copy: true,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
