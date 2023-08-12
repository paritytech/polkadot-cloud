// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";

export const dirFilesExist = async (dir, files, test) => {
  files.forEach(async (pkg) => {
    test.forEach(async (file) => {
      fs.stat(`${dir}${pkg}/${file}`, (err) => {
        if (err) {
          console.error(`❌ ${file} not found in ${pkg}`);
        }
      });
    });
  });
};
