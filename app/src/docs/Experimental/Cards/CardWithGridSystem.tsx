/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@packages/cloud-react/lib/base/structure/Card";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { Demo } from "@docs/Demo";

export const CardWithGridSystem = () => {
  const code = `const sampleAnimation1 = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.5, type: "spring", bounce: 0.4 }
};

...

<Card style={{ width: "100%" }} animations={sampleAnimation1}>
  <Grid column sm={12} md={4}><h5>Left Grid</h5></Grid>
  <Grid column sm={12} md={4}><h5>Center Grid</h5></Grid>
  <Grid column sm={12} md={4}><h5>Right Grid</h5></Grid>
</Card>`;

  const sampleAnimation1 = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  };

  return (
    <>
      <Demo showThemes={false}>
        <Card animations={sampleAnimation1}>
          <Grid column sm={12} md={4}>
            <h5>Left Grid</h5>
          </Grid>
          <Grid column sm={12} md={4}>
            <h5>Center Grid</h5>
          </Grid>
          <Grid column sm={12} md={4}>
            <h5>Right Grid</h5>
          </Grid>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
