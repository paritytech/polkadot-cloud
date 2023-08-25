/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageSimple = () => {
  const codeA = `
import { AccountCard, IconProps, } from "@packages/cloud-react/lib/recipes/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard icon={iconProps} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} />
);`;

  const codeB = `
import { AccountCard } from "@packages/cloud-react/lib/recipes/AccountCard";
...
return (
  <AccountCard address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} />
);`;

  const codeC = `
import { AccountCard, IconProps, } from "@packages/cloud-react/lib/recipes/AccountCard";
...
const iconProps: IconProps = {
  canCopy: true,
  position: "right",
  size: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconPropsC} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} />
);`;

  const iconPropsA: IconProps = {
    position: "left",
  };

  const iconPropsC: IconProps = {
    canCopy: true,
    position: "right",
    size: 3,
    justify: "space-around",
  };

  return (
    <>
      <div className="demo">
        <AccountCard
          icon={iconPropsA}
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
        />
      </div>
      <SimpleEditor code={codeA} />
      <div className="demo">
        <AccountCard
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
        />
      </div>
      <SimpleEditor code={codeB} />
      <div className="demo">
        <AccountCard
          icon={iconPropsC}
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
        />
      </div>
      <SimpleEditor code={codeC} />
    </>
  );
};
