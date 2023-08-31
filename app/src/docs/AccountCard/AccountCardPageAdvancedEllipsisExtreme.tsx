/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AccountCard } from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageAdvancedEllipsisExtreme = () => {
  const code = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...

return (
  <AccountCard title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount:500, position: "center" }} />
)`;

  return (
    <>
      <h4>
        If an extreme ellipsis amount is provided, then the Recipe will reduce
        it, in order to show the maximum possible amount (calculating with:
        (address.length/2) - 3);
      </h4>
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
      <SimpleEditor code={code} />
    </>
  );
};
