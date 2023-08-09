/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import fs from "fs/promises";
import path from "path";

// rollup-plugin-remove-lines
//
// This plugin will take a number of strings as lines, and remove those lines from the bundle if
// they are found.
export default ({
  // The lines we wish to remove from the bundle
  lines = [],
  // The starting directory to recursively search through.
  entry = "./dist",
  // The file extensions we are interested in removing lines from.
  extensions = [".ts"],
}) => ({
  name: "remove-lines",
  version: "0.1.0",
  writeBundle: async () => {
    // Recursive utility function that iterates through the provided directory and returns all files
    // with the provided extensions.
    const getAllFiles = async (dir, files) => {
      files = files || [];
      for (let file of await fs.readdir(dir)) {
        if ((await fs.stat(dir + "/" + file)).isDirectory()) {
          files = await getAllFiles(dir + "/" + file, files);
        } else {
          const filePath = path.join(dir, "/", file);
          const ext = path.extname(filePath);
          if (extensions.includes(ext)) files.push(filePath);
        }
      }
      return files;
    };

    // Iterate through all files and remove the provided lines from each file.
    const allFiles = await getAllFiles(entry, []);
    for (let file of allFiles) {
      const newLines = (await fs.readFile(file, { encoding: "utf8" }))
        .split("\n")
        .filter((line) => !lines.includes(line));
      await fs.writeFile(file, newLines.join("\n"));
    }
  },
});
