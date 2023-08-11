// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { exec } from "child_process";

const main = async () => {
  // Generate package.json and inject.
  exec(
    "node ../../.scripts/generatePackageJson.mjs -p core-ui -m index.tsx",
    (error, _, stderr) => {
      if (error) {
        console.log(`❌: ${error.message}`);
      }
      if (stderr) {
        console.log(`❌: ${stderr}`);
      }
    }
  );
  // Rmmove generated content.
  fs.unlinkSync(`./lib/index.tsx`);
};

await main();
