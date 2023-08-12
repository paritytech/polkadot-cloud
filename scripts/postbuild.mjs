// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { dirFilesExist } from "./index.mjs";

try {
  // Ensure that the package directory exists.
  fs.readdir("./packages", async (err, files) => {
    if (err) {
      console.error(`❌ Packages folder not found`);
      return;
    }

    // Check `dist` exist in each package.
    await dirFilesExist("./packages/", files, ["dist"]);

    console.log(`✅ Post-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}
