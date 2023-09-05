/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageAdvanced = () => {
  const code = `import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {
  noCopy: true,
  position: "right",
  gridSize: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount: 10, position: "center" }} />
);`;

  const iconProps: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  return (
    <>
      <h4>
        Amount of ellipsis can be set; When position, is `center``, then that
        amount corresponds to the left and to the right part of the text; If it
        is set to `left` or `right`, then it corresponds to the other side
        accordingly. (Defaults to `center`)
      </h4>
      <div className="demo">
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              icon={iconProps}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 10, position: "center" }}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
