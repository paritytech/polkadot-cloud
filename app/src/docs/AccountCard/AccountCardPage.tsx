/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/core/Grid";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPage = () => {
  const code = `<AccountCard
  address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
/>`;

  const iconProps: IconProps = {
    canCopy: true,
    position: "left",
    size: 2,
  };

  const extraComponentProps: ExtraComponentProps = {
    component: <Button type="mono" text="Button" marginRight />,
    size: 2,
    justify: "flex-end",
  };

  return (
    <>
      <div className="demo">
        <AccountCard
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
        />
      </div>
      <SimpleEditor code={code} />
      <div className="demo">
        <Grid row>
          <Grid column sm={4}>
            <AccountCard
              icon={iconProps}
              address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
              ellipsis
            />
          </Grid>
          <Grid column sm={8}>
            empty
          </Grid>
        </Grid>
      </div>
      <SimpleEditor code={code} />
      <div className="demo">
        <AccountCard
          icon={iconProps}
          address={"1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"}
          extraComponent={extraComponentProps}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
