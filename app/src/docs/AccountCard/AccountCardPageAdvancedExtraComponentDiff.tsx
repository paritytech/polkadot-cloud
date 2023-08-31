/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageAdvancedExtraComponentDiff = () => {
  const code = `import { AccountCard, IconProps, ExtraComponentProps } from "@polkadot-cloud/react/recipes/AccountCard";
...

const iconProps: IconProps = {
  noCopy: true,
  position: "right",
  gridSize: 2,
  justify: "space-around",
};

const extraComponentProps: ExtraComponentProps = {
  component: (
    <Button
      type="monoInvert"
      text="log"
      marginRight
      onClick={() =>
        console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
      }
    />
  ),
  gridSize: 1,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={extraComponentProps} />
)`;

  const iconProps: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 2,
    justify: "space-around",
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <Button
        type="monoInvert"
        text="log"
        marginRight
        onClick={() =>
          console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
        }
      />
    ),
    gridSize: 1,
    justify: "space-around",
  };

  return (
    <>
      <h4>
        Mplah Mplah Mplah Mplah Extra component can be added; Its default
        position is left; If icon position is also left, then the extra
        component always goes on the further side (same for right); Position,
        defaults to "left"; (Recipe will automatically calculate the rest of the
        size of the main area based on: "MainAreaGridSize = 12 - IconGridSize -
        ExtraComponentGridSize" )
      </h4>
      <div className="demo">
        <AccountCard
          icon={iconProps}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
