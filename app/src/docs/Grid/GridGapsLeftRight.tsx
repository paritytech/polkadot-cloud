/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { Grid } from "@packages/cloud-react/lib/core/Grid";

export const GridGapsLeftRight = () => {
  const code = `<Grid row justify="center">
  <Grid column sm={12} md={6}>1/2 and centered</Grid>
</Grid>`;

  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };

  return (
    <>
      <div className="grid-demo">
        <Grid row style={separatorStyle} justify="center">
          <Grid style={separatorStyle} column sm={12} md={6}>
            <h5>1/2 and centered</h5>
          </Grid>
        </Grid>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
