// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { dirFilesExist } from "./index.mjs";

const dirFoldersOnly = async (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}`, (err, stat) => {
      if (err) {
        console.error(`❌ Folder in packages directory not found`);
        return;
      }
      if (!stat.isDirectory()) {
        console.error(`❌ Packages directory must only contain folders.`);
      }
    });
  }
};

const matchScripts = (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}/package.json`, (err) => {
      if (err) {
        console.error(`❌ package.json file not found in ${dir}${file}`);
        return;
      }
      const json = JSON.parse(
        fs.readFileSync(`${dir}${file}/package.json`).toString()
      );

      const scripts = Object.keys(json?.scripts || {});
      if (
        [
          scripts.indexOf("build:mock"),
          scripts.indexOf("build"),
          scripts.indexOf("clear"),
        ].includes("-1")
      ) {
        console.error(
          `❌ All of the scripts field in package.json are required to have build:mock, build and clear properties`
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

    // Ensure packages directory only contains folders.
    await dirFoldersOnly("./packages/", files);

    // Check `LICENSE`, `README.md`, `README.npm.md`, `package.json`, `lib` exist in each package.
    await dirFilesExist("./packages/", files, [
      "README.md",
      "README.npm.md",
      "package.json",
      "lib",
    ]);
    matchScripts("./packages/", files);

    console.log(`✅ Pre-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}
