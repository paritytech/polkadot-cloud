/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const AccountCardPageAdvancedEllipsis = () => {
  const codeB = `import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconPropsLeft: IconProps = {
  // position defaults to "left"
  gridSize: 2,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount:2, position: "center" }} />
)`;

  const iconPropsLeft: IconProps = {
    position: "left",
    gridSize: 2,
    justify: "space-around",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              style={{ padding: "1rem" }}
              icon={iconPropsLeft}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 2, position: "center" }}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={codeB} />
    </>
  );
};
