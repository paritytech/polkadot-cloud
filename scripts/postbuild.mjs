// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { dirFilesExist } from "./index.mjs";

const matchName = (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}/dist/package.json`, (err) => {
      if (err) {
        console.error(`❌ dist/package.json file not found in ${dir}${file}`);
        return;
      }
      const json = JSON.parse(
        fs.readFileSync(`${dir}${file}/dist/package.json`).toString()
      );

      if (json?.name !== `@polkadotcloud/${file}`) {
        console.error(
          `❌ package.json name field does not match the naming requirement`
        );
      }
    });
  }
};

try {
  // Ensure that the package directory exists.
  fs.readdir("./packages", async (err, files) => {
    if (err) {
      console.error(`❌ Packages folder not found`);
      return;
    }

    // Check `dist` exist in each package.
    await dirFilesExist("./packages/", files, ["dist"]);

    matchName("./packages/", files);

    console.log(`✅ Post-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}
