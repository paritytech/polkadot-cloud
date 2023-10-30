/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Demo } from "@docs/Demo";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";

export const GridMoreRowsDiffSizes = () => {
  const code = `<Grid row>
  <Grid  column md={4}>4/12</Grid>
  <Grid  column md={4}>4/12</Grid>
  <Grid  column md={4}>4/12</Grid>
</Grid>
<Grid row>
  <Grid  column md={3}>3/12</Grid>
  <Grid  column md={6}>6/12</Grid>
  <Grid  column md={3}>3/12</Grid>
</Grid>
<Grid row>
  <Grid  column md={5}>5/12</Grid>
  <Grid  column md={2}>2/12</Grid>
  <Grid  column md={4}>4/12</Grid>
  <Grid  column md={1}>1/12</Grid>
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
          <Grid style={separatorStyle} column md={4}>
            <h5>4/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={4}>
            <h5>4/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={4}>
            <h5>4/12</h5>
          </Grid>
        </Grid>
        <Grid row style={separatorStyle}>
          <Grid style={separatorStyle} column md={3}>
            <h5>3/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={6}>
            <h5>6/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={3}>
            <h5>3/12</h5>
          </Grid>
        </Grid>
        <Grid row style={separatorStyle}>
          <Grid style={separatorStyle} column md={5}>
            <h5>5/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={2}>
            <h5>2/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={4}>
            <h5>4/12</h5>
          </Grid>
          <Grid style={separatorStyle} column md={1}>
            <h5>1/12</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
