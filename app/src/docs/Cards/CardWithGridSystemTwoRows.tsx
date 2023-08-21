/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@packages/cloud-react/lib/core/Card";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/core/Grid";

export const CardWithGridSystemTwoRows = () => {
  const code = `const sampleAnimation1 = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.5, type: "spring", bounce: 0.4 }
};

...

<Card animations={sampleAnimation1}>
  <Grid row>
    <Grid column sm={12} md={4}><h3>Top Left Grid</h3></Grid>
    <Grid column sm={12} md={4}><h3>Top Center Grid</h3></Grid>
    <Grid column sm={12} md={4}><h3>Top Right Grid</h3></Grid>
  </Grid>
  <Grid row>
    <Grid column sm={12} md={4}><h3>Bottom Left Grid</h3></Grid>
    <Grid column sm={12} md={4}><h3>Bottom Center Grid</h3></Grid>
    <Grid column sm={12} md={4}><h3>Bottom Right Grid</h3></Grid>
  </Grid>
</Card>`;

  const sampleAnimation1 = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  };

  return (
    <>
      <div className="demo">
        <Card animations={sampleAnimation1}>
          <Grid row>
            <Grid column sm={12} md={4}>
              <h3>Top Left Grid</h3>
            </Grid>
            <Grid column sm={12} md={4}>
              <h3>Top Center Grid</h3>
            </Grid>
            <Grid column sm={12} md={4}>
              <h3>Top Right Grid</h3>
            </Grid>
          </Grid>
          <Grid row>
            <Grid column sm={12} md={4}>
              <h3>Bottom Left Grid</h3>
            </Grid>
            <Grid column sm={12} md={4}>
              <h3>Bottom Center Grid</h3>
            </Grid>
            <Grid column sm={12} md={4}>
              <h3>Bottom Right Grid</h3>
            </Grid>
          </Grid>
        </Card>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
