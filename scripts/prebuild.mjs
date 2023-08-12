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

const matchNameNScripts = async (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}/package.json`, (err, stat) => {
      if (err) {
        console.error(`❌ package.json directory not found`);
        return;
      }
      const json = JSON.parse(
        fs.readFileSync(`${dir}${file}/package.json`).toString()
      );
      const name = Object.entries(json).filter((p) => {
        return "name".includes(p[0]);
      });
      const scripts = Object.entries(json).filter((p) => {
        return "scripts".includes(p[0]);
      });
      // TODO :
      // if ("build:mock".includes(name)){
      //   console.log("build:mock".includes(scripts));
      // }
      // console.log("build:mock".includes(Object.keys(scripts)));
      // console.log(Object.values(scripts[0]));
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

    // Check `LICENSE`, `README.md`, `package.json`, `lib` exist in each package.
    await dirFilesExist("./packages/", files, [
      "LICENSE",
      "README.md",
      "package.json",
      "lib",
    ]);
    await matchNameNScripts("./packages/", files);

    console.log(`✅ Pre-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}
