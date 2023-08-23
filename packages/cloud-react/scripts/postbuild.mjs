// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { exec } from "child_process";
import { generateLibIndex } from "./index.mjs";

const main = async () => {
  // Generate `dist/index.js`.
  await generateLibIndex({
    ignore: ["styles", "svg", "utils"],
  });

  // Generate package.json and inject.
  exec(
    "node ../../scripts/generatePackageJson.mjs -p cloud-react -m index.tsx",
    (error, _, stderr) => {
      if (error) {
        console.log(`❌: ${error.message}`);
      }
      if (stderr) {
        console.log(`❌: ${stderr}`);
      }
    }
  );
};

await main();
