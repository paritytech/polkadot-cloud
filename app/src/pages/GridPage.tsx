/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Grid } from "@packages/cloud-react/lib/core/Grid";
import { CodeDrawer } from "../components/CodeDrawer";
import { Separator } from "@packages/cloud-react/lib/core/Separator";

export const GridPage = () => {
  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };
  return (
    <div className="doc">
      <h1>Grid System</h1>
      <h4>
        1 row - 12 columns with all screen size parameters sets (resize screen
        for results)
      </h4>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={2} lg={1}>
          <h3>1/12</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>2/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>3/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>4/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>5/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>6/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`<Grid column sm={12} md={2} lg={1}>1/12</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>1 row - 3 columns</h4>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column sm={12} md={6}>
          <h3>1/2</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={3}>
          <h3>1/4</h3>
        </Grid>
        <Grid style={separatorStyle} column sm={12} md={3}>
          <h3>1/4</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row>`}</p>
          <p>{`<Grid column sm={12} md={6}>1/2</Grid>`}</p>
          <p>{`<Grid column sm={12} md={3}>1/4</Grid>`}</p>
          <p>{`<Grid column sm={12} md={3}>1/4</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>More rows - different sized columns</h4>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column md={4}>
          <h3>4/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={4}>
          <h3>4/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={4}>
          <h3>4/12</h3>
        </Grid>
      </Grid>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column md={3}>
          <h3>3/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={6}>
          <h3>6/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={3}>
          <h3>3/12</h3>
        </Grid>
      </Grid>
      <Grid row style={separatorStyle}>
        <Grid style={separatorStyle} column md={5}>
          <h3>5/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={2}>
          <h3>2/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={4}>
          <h3>4/12</h3>
        </Grid>
        <Grid style={separatorStyle} column md={1}>
          <h3>1/12</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row>`}</p>
          <p>{`<Grid  column md={4}>4/12</Grid>`}</p>
          <p>{`<Grid  column md={4}>4/12</Grid>`}</p>
          <p>{`<Grid  column md={4}>4/12</Grid>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`<Grid row >`}</p>
          <p>{`<Grid  column md={3}>3/12</Grid>`}</p>
          <p>{`<Grid  column md={6}>6/12</Grid>`}</p>
          <p>{`<Grid  column md={3}>3/12</Grid>`}</p>
          <p>{`</Grid>`}</p>
          <p>{`<Grid row >`}</p>
          <p>{`<Grid  column md={5}>5/12</Grid>`}</p>
          <p>{`<Grid  column md={2}>2/12</Grid>`}</p>
          <p>{`<Grid  column md={4}>4/12</Grid>`}</p>
          <p>{`<Grid  column md={1}>1/12</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />

      <h4>Gaps left and right</h4>
      <Grid row style={separatorStyle} justify="center">
        <Grid style={separatorStyle} column sm={12} md={6}>
          <h3>1/2 and centered</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row justify="center">`}</p>
          <p>{`<Grid column sm={12} md={6}>1/2 and centered</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>Align items top</h4>
      <Grid
        row
        style={Object.assign({}, separatorStyle, { height: "10rem" })}
        alignItems="flex-start"
      >
        <Grid
          style={Object.assign({}, separatorStyle, {
            height: "4rem",
            flex: 1,
          })}
          column
          sm={12}
          md={2}
        >
          <h3>1/6 and top</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row alignItems="flex-start">`}</p>
          <p>{`<Grid style={{ height: "fit-content" }} column sm={12} md={2}>1/6 and top</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>Align items bottom</h4>
      <Grid
        row
        style={Object.assign({}, separatorStyle, { height: "10rem" })}
        alignItems="flex-end"
      >
        <Grid
          style={Object.assign({}, separatorStyle, {
            height: "4rem",
          })}
          column
          sm={12}
          md={2}
        >
          <h3>1/6 and bottom</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row alignItems="flex-end">`}</p>
          <p>{`<Grid style={{ height: "fit-content" }} column sm={12} md={2}>1/6 and bottom</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <h4>Align items bottom and end</h4>
      <Grid
        row
        style={Object.assign({}, separatorStyle, { height: "10rem" })}
        alignItems="flex-end"
        justify="flex-end"
      >
        <Grid
          style={Object.assign({}, separatorStyle, {
            height: "4rem",
          })}
          column
          sm={12}
          md={2}
        >
          <h3>1/6 and bottom</h3>
        </Grid>
      </Grid>
      <CodeDrawer>
        <code>
          <p>{`<Grid row alignItems="flex-end">`}</p>
          <p>{`<Grid style={{ height: "fit-content" }} column sm={12} md={2}>1/6 and bottom</Grid>`}</p>
          <p>{`</Grid>`}</p>
        </code>
      </CodeDrawer>
      <Separator />
    </div>
  );
};
