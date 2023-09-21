/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { SimpleEditor } from "../lib/SimpleEditor";
import { ValidatorCommunity } from "@packages/assets/lib/validators";

export const ValidatorOperator = () => {
  const code = `// Import validator community object.

import { ValidatorCommunity } from '@polkadot-cloud/assets/validators';
....

return (
  <>
  {ValidatorCommunity.map((v) => (
    <Grid row>
      <Grid column>{v.name}</Grid>
      <Grid column>{v.website}</Grid>
      <Grid column>{v.twitter}</Grid>
      <Grid column>{v.email}</Grid>
    </Grid>
  ))}
  </>
)
`;

  return (
    <>
      <Grid row key={"1_i"}>
        <Grid column key={"name_i"}>
          <h5>Name</h5>
        </Grid>
        <Grid column key={"website_i"}>
          <h5>Website</h5>
        </Grid>
        <Grid column key={"twitter_i"}>
          <h5>Twitter</h5>
        </Grid>
        <Grid column key={"twitter_i"}>
          <h5>Email</h5>
        </Grid>
      </Grid>
      {ValidatorCommunity.map((v, i) => {
        if (i < 4)
          return (
            <Grid row key={v.name + "_i"}>
              <Grid column key={v.name + "_i"}>
                <p style={{ margin: 0 }}>{v.name}</p>
              </Grid>
              <Grid column key={v.website + "_i"}>
                <p style={{ margin: 0 }}>{v.website || "-"}</p>
              </Grid>
              <Grid column key={v.twitter + "_i"}>
                <p style={{ margin: 0 }}>{v.twitter || "-"}</p>
              </Grid>
              <Grid column key={v.email + "_i"}>
                <p style={{ margin: 0 }}>{v.email || "-"}</p>
              </Grid>
            </Grid>
          );
      })}
      <div style={{ marginTop: "2.5rem" }}>
        <SimpleEditor code={code} standalone />
      </div>
    </>
  );
};
