/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

const fs = require("fs");
const { join } = require("path");
const prettier = require("prettier");

// Components locale directory.
const coreUilocaleDir = join(__dirname, "..", "packages/core-ui");
// TODO: will add this session when the formating is fixed
const utilslocaleDir = join(__dirname, "..", "packages/utils");

const hardcoded = {
  types: "index.d.ts",
  main: "index.tsx",
  module: "index.tsx",
  typescript: {
    definition: "index.d.ts",
  },
};

// Read the package.json and copy the necessary properties
const json = JSON.parse(
  fs.readFileSync(`${coreUilocaleDir}/package.json`).toString()
);

const keys = [
  "name",
  "license",
  "version",
  "author",
  "description",
  "peerDependencies",
];
const filted = Object.entries(json).filter((k) => keys.includes(k));

fs.writeFileSync(
  `${coreUilocaleDir}/package.json`,
  prettier.format(JSON.stringify(filted), { parser: "json" }),
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("File has been edited");
  }
);
