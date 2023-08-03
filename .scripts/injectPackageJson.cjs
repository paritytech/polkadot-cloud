// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: Apache-2.0

const fs = require("fs");
const { join } = require("path");
const prettier = require("prettier");
const { exit } = require("process");
const packagesDir = join(__dirname, "..", "packages");

// // Scope of packages to be published.
const scope = "@polkadotcloud";

const argv = require("minimist")(process.argv.slice(2));
const { p: packageName, m: main } = argv;

if (!packageName) {
  console.error("❌ Please provide package name with the -p flag");
  exit();
}

if (!main) {
  console.error("❌ Please provide a main file with the -m flag");
  exit();
}

// Hardcoded properties that will be included in resulting `package.json`.
const hardcoded = {
  types: "index.d.ts",
  main,
  module: main,
  typescript: {
    definition: "index.d.ts",
  },
};

// Loop packages to inject `package.json` into bundles.
const pathtoPackage = join(packagesDir, packageName);
const pathToFile = join(pathtoPackage, "package.json");

try {
  // Read `package.json` of the package.
  const json = JSON.parse(fs.readFileSync(pathToFile).toString());

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
  const filtered = Object.entries(json).filter((k) => {
    return keys.includes(k[0]);
  });

  // Replace `name` with scope and package name.
  filtered[0] = ["name", `${scope}/${json.name.split(/-(.*)/s)[1]}`];

  // Merge properties with `hardcoded`.
  const merged = Object.assign({}, Object.fromEntries(filtered), hardcoded);

  // Format merged JSON
  prettier.format(JSON.stringify(merged), { parser: "json" }).then((data) => {
    // Write `package.json` to the bundle.
    fs.writeFile(`${pathtoPackage}/dist/package.json`, data, (err) => {
      if (err) {
        console.error(`❌ ${err.message}`);
      }
      console.debug(
        `✅ package.json has been injected into ${packageName} bundle.`
      );
    });
  });
} catch (e) {
  console.error(
    `❌ Could not find package.json in the specified package directory: ${packageName}`
  );
}
