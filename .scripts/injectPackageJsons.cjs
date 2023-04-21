// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

const fs = require('fs');
const { join } = require("path");
const prettier = require("prettier");
const packagesDir = join(__dirname, '..', 'packages');

// Hardcoded properties that will be included in resulting `package.json`.
const hardcoded = {
  types: "index.d.ts",
  main: "index.tsx",
  module: "index.tsx",
  typescript: {
    definition: "index.d.ts",
  },
};

// Loop packages to inject `package.json` into bundles.
fs.readdir(packagesDir, (_, files) => {
  files.forEach((file) => {
    const pathToFile = path.join(packagesDir, file);

    // Read `package.json` of the package.
    const json = JSON.parse(
      fs.readFileSync(pathToFile).toString()
    );

    // Keys to copy from the file.
    const keys = [
      "name",
      "license",
      "version",
      "author",
      "description",
      "peerDependencies",
    ];

    // Get properties of interest.
    const filtered = Object.entries(json).filter((k) => keys.includes(k));

    // Merge properties with `hardcoded`.
    const merged = Object.assign({}, Object.fromEntries(filtered), hardcoded);

    // Write `package.json` to the bundle.
    fs.writeFileSync(
      `${packagesDir}/dist/package.json`,
      prettier.format(JSON.stringify(merged), { parser: "json" }),
      (err) => {
        if (err) {
          console.log(err.message);
        }
        console.log("File has been injected into the package bundle.");
      }
    );
  });
});