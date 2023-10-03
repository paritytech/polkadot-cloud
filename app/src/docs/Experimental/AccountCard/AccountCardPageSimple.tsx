/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Switch } from "@packages/cloud-react/lib/base/inputs/Switch";
import { Demo } from "@docs/Demo";

export const AccountCardPageSimple = () => {
  const code = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={{ component: <Switch />, position: "right" }} />
);`;

  const iconProps: IconProps = {
    position: "left",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
          extraComponent={{
            component: <Switch />,
            position: "right",
          }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
