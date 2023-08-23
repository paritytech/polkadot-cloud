// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { join, dirname } from "path";
import { format } from "prettier";
import { exit } from "process";
import minimist from "minimist";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packagesDir = join(__dirname, "..", "packages");

// Scope of packages to be published.
const scope = "polkadot-cloud";

const argv = minimist(process.argv.slice(2));

const { p: packageName, m: main } = argv;

if (!packageName) {
  console.error("❌ Please provide package name with the -p flag");
  exit();
}
// Hardcoded properties that will be included in resulting `package.json`.
// Ignored if no `main` entry is provided.
const hardcoded = main
  ? {
      types: "index.d.ts",
      main,
      module: main,
      typescript: {
        definition: "index.d.ts",
      },
    }
  : {};

// Loop packages to generate `package.json`.
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
    "keywords",
    "bugs",
    "homepage",
    "contributors",
    "description",
    "dependencies",
    "peerDependencies",
  ];

  // Get properties of interest.
  const filtered = Object.entries(json).filter((k) => {
    return keys.includes(k[0]);
  });

  // If the package folder name starts with `cloud-` remove this from the npm published package
  // name.
  let publishName = json.name.split(`${scope}-`)[1];
  if (publishName.startsWith("cloud-")) {
    // remove "cloud-"" from the start of `publishName`.
    publishName = publishName.slice("cloud-".length);
  }

  // Replace `name` with scope and package name.
  filtered[0] = ["name", `@${scope}/${publishName}`];

  // Merge properties with `hardcoded`.
  const merged = Object.assign({}, Object.fromEntries(filtered), hardcoded);

  // Format merged JSON
  format(JSON.stringify(merged), { parser: "json" }).then((data) => {
    // Create `dist` directory if it doesn't exist.
    if (!fs.existsSync(`${pathtoPackage}/dist`)) {
      fs.mkdirSync(`${pathtoPackage}/dist`);
    }

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
