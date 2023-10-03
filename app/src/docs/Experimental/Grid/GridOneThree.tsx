/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Demo } from "@docs/Demo";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";

export const GridOneThree = () => {
  const code = `<Grid row>
  <Grid column sm={12} md={6}>1/2</Grid>
  <Grid column sm={12} md={3}>1/4</Grid>
  <Grid column sm={12} md={3}>1/4</Grid>
</Grid>`;

  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row style={separatorStyle}>
          <Grid style={separatorStyle} column sm={12} md={6}>
            <h5>1/2</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <h5>1/4</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <h5>1/4</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
