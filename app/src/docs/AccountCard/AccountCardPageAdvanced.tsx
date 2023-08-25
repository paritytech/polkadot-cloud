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

export const AccountCardPageAdvanced = () => {
  const codeA = `
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
  <AccountCard icon={iconProps} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} ellipsis />
);`;

  const codeB = `
import { AccountCard, IconProps, } from "@packages/cloud-react/lib/recipes/AccountCard";
...
const iconPropsLeft: IconProps = {
  // canCopy is disabled thus icon is not clickable anymore
  // position defaults to "left"
  size: 2,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconPropsLeft} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} ellipsis ellipsisAmount={2} />
)`;

  const codeC = `
import { AccountCard, IconProps, } from "@packages/cloud-react/lib/recipes/AccountCard";
...
// Extreme ellipsis amount is given thus it shows the maximum possible amount ((address.length/2) - 3);
return (
  <AccountCard address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} ellipsis ellipsisAmount={500} />
)`;

  const codeD = `
import { AccountCard, IconProps, ExtraComponentProps } from "@packages/cloud-react/lib/recipes/AccountCard";
...

// Note: space/size of main component is automatically calucated based on the given sizes from the icon and extra component; 

const iconPropsLeft: IconProps = {
  // canCopy is disabled thus icon is not clickable anymore
  // position defaults to "left"
  size: 2,
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
  size: 2,
  justify: "flex-end",
};
...
return (
  <AccountCard icon={iconPropsLeft} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} extraComponent={extraComponentProps} />
)`;

  const codeE = `
import { AccountCard, IconProps, ExtraComponentProps } from "@packages/cloud-react/lib/recipes/AccountCard";
...

const iconProps: IconProps = {
  canCopy: true,
  position: "right",
  size: 2,
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
  size: 1,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"} extraComponent={extraComponentProps} />
)`;

  const iconPropsLeft: IconProps = {
    position: "left",
    size: 2,
    justify: "space-around",
  };

  const iconProps: IconProps = {
    canCopy: true,
    position: "right",
    size: 2,
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
    size: 2,
    justify: "flex-end",
  };

  const extraComponentProps2: ExtraComponentProps = {
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
    size: 1,
    justify: "space-around",
  };

  return (
    <>
      <div className="demo">
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              icon={iconProps}
              address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
              ellipsis
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </div>
      <SimpleEditor code={codeA} />
      <div className="demo">
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              icon={iconPropsLeft}
              address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
              ellipsis
              ellipsisAmount={2}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </div>
      <SimpleEditor code={codeB} />
      <div className="demo">
        <Grid row>
          <Grid column>
            <AccountCard
              address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
              ellipsis
              ellipsisAmount={500}
            />
          </Grid>
        </Grid>
      </div>
      <SimpleEditor code={codeC} />
      <div className="demo">
        <AccountCard
          icon={iconPropsLeft}
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
          extraComponent={extraComponentProps}
        />
      </div>
      <SimpleEditor code={codeD} />
      <div className="demo">
        <AccountCard
          icon={iconProps}
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
          extraComponent={extraComponentProps2}
        />
      </div>
      <SimpleEditor code={codeE} />
    </>
  );
};
