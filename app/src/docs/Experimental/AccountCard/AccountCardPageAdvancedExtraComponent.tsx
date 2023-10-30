/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const AccountCardPageAdvancedExtraComponent = () => {
  const code = `import { AccountCard, IconProps, ExtraComponentProps } from "@packages/cloud-react/lib/recipes/AccountCard";
...

// Note: space/size of main component is automatically calculated based on the given sizes from the icon and extra component; 

const iconPropsLeft: IconProps = {
  // position defaults to "left"
  gridSize: 2,
  justify: "space-around",
};

const extraComponentProps: ExtraComponentProps = {
  component: (
    <Button
      type="mono"
      text="log"
      marginRight
      onClick={() =>
        console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
      }
    />
  ),
  gridSize: 2,
  justify: "flex-end",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={extraComponentProps} />
)`;

  const iconPropsLeft: IconProps = {
    position: "left",
    gridSize: 2,
    justify: "space-around",
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <Button
        type="mono"
        text="log"
        marginRight
        onClick={() =>
          console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
        }
      />
    ),
    gridSize: 2,
    justify: "flex-end",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconPropsLeft}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
