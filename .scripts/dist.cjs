/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

const fs = require("fs");
const { join } = require("path");

// Components locale directory.
const coreUilocaleDir = join(__dirname, "..", "packages/core-ui");
// TODO: will add this session when the formating is fixed
const utilslocaleDir = join(__dirname, "..", "packages/utils");

const hardcoded = {
  types: "index.d.ts",
  main: "index.tsx",
  module: "index.tsx",
  keywords: ["Polkadot", "UI"],
  typescript: {
    definition: "index.d.ts",
  },
  bugs: {
    url: "https://github.com/paritytech/polkadot-dashboard-ui/issues",
  },
  homepage: "https://github.com/paritytech/polkadot-dashboard-ui#readme",
};

// Create a new dist.package.json
fs.appendFile(
  `${coreUilocaleDir}/distt.package.json`,
  JSON.stringify(hardcoded),
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log(`${coreUilocaleDir}/distt.package.json Is Built`);
  }
);

// Read the package.json and copy the necessary properties
const json = JSON.parse(
  fs.readFileSync(`${coreUilocaleDir}/package.json`).toString()
);

const filted = Object.entries(json).filter(
  (k) =>
    (k[0] === "name") |
    (k[0] === "license") |
    (k[0] === "version") |
    (k[0] === "author") |
    (k[0] === "description") |
    (k[0] === "peerDependencies")
);

// Edit the dist.package.json
// TODO: fix the format
fs.appendFile(
  `${coreUilocaleDir}/distt.package.json`,
  JSON.stringify(filted),
  (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("File has been edited");
  }
);
