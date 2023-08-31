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
  const codeA = `import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {
  noCopy: true,
  position: "right",
  gridSize: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis />
);`;

  const codeB = `import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconPropsLeft: IconProps = {
  // position defaults to "left"
  gridSize: 2,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis ellipsisAmount={2} />
)`;

  const codeC = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
// Extreme ellipsis amount is given thus it shows the maximum possible amount ((address.length/2) - 3);
return (
  <AccountCard title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis ellipsisAmount={500} />
)`;

  const codeD = `import { AccountCard, IconProps, ExtraComponentProps } from "@packages/cloud-react/lib/recipes/AccountCard";
...

// Note: space/size of main component is automatically calucated based on the given sizes from the icon and extra component; 

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
  <AccountCard icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={extraComponentProps} />
)`;

  const codeE = `import { AccountCard, IconProps, ExtraComponentProps } from "@polkadot-cloud/react/recipes/AccountCard";
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
  fontSize="medium"
  icon={iconProps}
  title={{
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  }}
/>`;

  const iconPropsLeft: IconProps = {
    position: "left",
    gridSize: 2,
    justify: "space-around",
  };

  const iconProps: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 2,
    justify: "space-around",
  };

  const iconProps2: IconProps = {
    size: 40,
    gridSize: 1,
    justify: "flex-start",
    dark: false,
    colors: ["blue", "green"],
    outerColor: "yellow",
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
    gridSize: 1,
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
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, position: "center" }}
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
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 2, position: "center" }}
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
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 500, position: "center" }}
            />
          </Grid>
        </Grid>
      </div>
      <SimpleEditor code={codeC} />
      <div className="demo">
        <AccountCard
          icon={iconPropsLeft}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps}
        />
      </div>
      <SimpleEditor code={codeD} />
      <div className="demo">
        <AccountCard
          icon={iconProps}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps2}
        />
      </div>
      <SimpleEditor code={codeE} />
      <h4>Without various random icon colors and shapes</h4>
      <div className="demo">
        <AccountCard
          fontSize="medium"
          icon={iconProps2}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
        />
      </div>
      <SimpleEditor code={codeF} />
    </>
  );
};
