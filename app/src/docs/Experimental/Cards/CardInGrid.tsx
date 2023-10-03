/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@packages/cloud-react/lib/base/structure/Card";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const CardInGrid = () => {
  const code = `const sampleAnimation1 = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.5, type: "spring", bounce: 0.4 }
};

const sampleAnimation2 = {
  whileHover: { scale: 2.00 },
  transition: { duration: 0.25, type: "linear", bounce: 0.4 }
};

....

<Grid column sm={12} md={6}>
  <Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation1}><h5>1/2</h5></Card>
</Grid>
<Grid column sm={12} md={3}>
  <Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation2}><h5>1/4</h5></Card>
</Grid>
<Grid column sm={12} md={3}>
  <Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation1}><h5>1/4</h5></Card>
</Grid>`;

  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };

  const sampleAnimation1 = {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  };

  const sampleAnimation2 = {
    whileHover: { scale: 2.0 },
    transition: { duration: 0.25, type: "linear", bounce: 0.4 },
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row style={separatorStyle}>
          <Grid style={separatorStyle} column sm={12} md={6}>
            <Card
              style={{ padding: "10px", textAlign: "center", height: "100%" }}
              animations={sampleAnimation1}
            >
              <h5>1/2</h5>
            </Card>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <Card
              style={{ padding: "10px", textAlign: "center", height: "100%" }}
              animations={sampleAnimation2}
            >
              <h5>1/4</h5>
            </Card>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <Card
              style={{ padding: "10px", textAlign: "center", height: "100%" }}
              animations={sampleAnimation1}
            >
              <h5>1/4</h5>
            </Card>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
