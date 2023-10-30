/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const AccountCardPageAdvancedVariousIconChanges = () => {
  const codeF = `import { AccountCard, IconProps, ExtraComponentProps } from "@polkadot-cloud/react/recipes/AccountCard";
...

const iconProps: IconProps = {
  size: 40,
  gridSize: 1,
  justify: "flex-start",
  dark: false,
  colors: ["blue", "green"],
  outerColor: "yellow",
};

<AccountCard
  style={{ padding: "1rem" }}
  fontSize="medium"
  icon={iconProps}
  title={{
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  }}
/>`;

  const iconProps: IconProps = {
    size: 40,
    gridSize: 1,
    justify: "flex-start",
    dark: false,
    colors: ["blue", "green"],
    outerColor: "yellow",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          fontSize="medium"
          icon={iconProps}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
        />
      </Demo>
      <SimpleEditor code={codeF} />
    </>
  );
};
