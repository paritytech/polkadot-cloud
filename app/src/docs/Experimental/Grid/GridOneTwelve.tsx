/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Demo } from "@docs/Demo";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";

export const GridOneTwelve = () => {
  const code = `<Grid row>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>2/12</Grid>
  <Grid column sm={12} md={2} lg={1}>3/12</Grid>
  <Grid column sm={12} md={2} lg={1}>4/12</Grid>
  <Grid column sm={12} md={2} lg={1}>5/12</Grid>
  <Grid column sm={12} md={2} lg={1}>6/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
  <Grid column sm={12} md={2} lg={1}>1/12</Grid>
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
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
            <h5>1/12</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
