/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageSimple = () => {
  const code_A = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const code_B = `
import { AccountCard } from "@polkadot-cloud/react/recipes/AccountCard";
...
return (
  <AccountCard title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const code_C = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconPropsComponent: IconProps = {
  noCopy: true,
  position: "right",
  size: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps_C} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const iconProps_A: IconProps = {
    position: "left",
  };

  const iconProps_C: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  return (
    <>
      <div className="demo">
        <AccountCard
          icon={iconProps_A}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </div>
      <SimpleEditor code={code_A} />
      <div className="demo">
        <AccountCard
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </div>
      <SimpleEditor code={code_B} />
      <div className="demo">
        <AccountCard
          icon={iconProps_C}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </div>
      <SimpleEditor code={code_C} />
    </>
  );
};
