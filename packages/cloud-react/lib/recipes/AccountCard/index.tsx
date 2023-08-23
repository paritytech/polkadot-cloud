/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Grid } from "../../core/Grid";
import { Card } from "../../core/Card";

interface AccountCardProps {
  address?: string;
}

export const AccountCard = ({ address }: AccountCardProps) => {
  return (
    <Grid row>
      <Grid column sm={3}>
        Icon: {address}
      </Grid>
      <Grid column sm={9}>
        <span>{address}</span>
      </Grid>
    </Grid>
  );
};
