// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { dirFilesExist } from "./index.mjs";

const matchName = async (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}/dist/package.json`, (err) => {
      if (err) {
        console.error(`❌ dist/package.json directory not found`);
        return;
      }
      const json = JSON.parse(
        fs.readFileSync(`${dir}${file}/dist/package.json`).toString()
      );

      const name = Object.entries(json).filter((p) => {
        return "name".includes(p[0]);
      });

      if (name[0][1] != `@polkadotcloud/${json.name.split(/\/(.*)/s)[1]}`) {
        console.error(
          `❌ ${name[0][1]} dist/package name doesn't meet the naming requirement`
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

    await matchName("./packages/", files);

    console.log(`✅ Post-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}
