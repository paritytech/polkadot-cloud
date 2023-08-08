/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { Grid } from "packages/core-ui/lib/core/Grid";
import { CodeDrawer } from "../components/CodeDrawer";
import { Separator } from "packages/core-ui/lib/core/Separator";
import { Card } from "packages/core-ui/lib/core/Card";

export const CardPage = () => {
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
      <h4>Card by itself - plain</h4>
      <Card>Just a card</Card>
      <CodeDrawer>
        <code>
          <p>{`<Card>Just a card</Card>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>
        Card in Grid system - 1 row - 3 columns, with different animations
      </h4>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column sm={12} md={6}>
          <Card
            style={{ padding: "10px", textAlign: "center", height: "100%" }}
            animations={sampleAnimation1}
          >
            <h3>1/2</h3>
          </Card>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={3}>
          <Card
            style={{ padding: "10px", textAlign: "center", height: "100%" }}
            animations={sampleAnimation2}
          >
            <h3>1/4</h3>
          </Card>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={3}>
          <Card
            style={{ padding: "10px", textAlign: "center", height: "100%" }}
            animations={sampleAnimation1}
          >
            <h3>1/4</h3>
          </Card>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`const sampleAnimation1 = { whileHover: { scale: 1.02 }, transition: { duration: 0.5, type: "spring", bounce: 0.4 } };`}</p>
          <p>{`const sampleAnimation2 = { whileHover: { scale: 2.00 }, transition: { duration: 0.25, type: "linear", bounce: 0.4 }, };`}</p>
          <p>{`....`}</p>
          <p>{`<Grid column sm={12} md={6}>`}</p>
          <p>{`<Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation1}><h3>1/2</h3></Card>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`<Grid column sm={12} md={3}>`}</p>
          <p>{`<Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation2}><h3>1/4</h3></Card>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`<Grid column sm={12} md={3}>`}</p>
          <p>{`<Card style={{ padding: "10px", textAlign: "center", height: "100%" }} animations={sampleAnimation1}><h3>1/4</h3></Card>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>Card with included Grid system - 1 row - 3 columns</h4>
      <Card animations={sampleAnimation1}>
        <Grid column sm={12} md={4}>
          <h3>Left Grid</h3>
        </Grid>
        <Grid column sm={12} md={4}>
          <h3>Center Grid</h3>
        </Grid>
        <Grid column sm={12} md={4}>
          <h3>Right Grid</h3>
        </Grid>
      </Card>
      <CodeDrawer>
        <code>
          <p>{`<Card style={{ width: "100%" }} animations={sampleAnimation1}>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Left Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Center Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Right Grid</h3></Grid>`}</p>
          <p>{`</Card>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>Card with included Grid system - 2 row - 3 columns</h4>
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
      <CodeDrawer>
        <code>
          <p>{`<Card animations={sampleAnimation1}>`}</p>
          <p>{`<Grid row>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Top Left Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Top Center Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Top Right Grid</h3></Grid>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`<Grid row>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Bottom Left Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Bottom Center Grid</h3></Grid>`}</p>
          <p>{`<Grid column sm={12} md={4}><h3>Bottom Right Grid</h3></Grid>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`</Card>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
    </>
  );
};
