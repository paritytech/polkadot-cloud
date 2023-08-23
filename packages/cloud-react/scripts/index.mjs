// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { existsSync } from "fs";
import fs from "fs/promises";
import { format } from "prettier";

// Generates `lib/index.tsx` based on the contents of the `lib` folder.
export const generateLibIndex = async ({ ignore }) => {
  // Utility function that iterates through a provided directory and returns all
  // folders.
  const getDirFolders = async (dir) => {
    const folders = [];
    // if directory contains index.tsx file, stop.
    if (dir !== "./lib" && existsSync(`${dir}/index.tsx`)) {
      folders.push(dir);
    } else {
      // for each folder in this directory, loop again.
      for (let file of await fs.readdir(dir)) {
        if ((await fs.stat(dir + "/" + file)).isDirectory()) {
          if (!ignore.includes(file)) {
            folders.push(...(await getDirFolders(dir + "/" + file)));
          }
        }
      }
    }

    return folders;
  };

  // Iterate through all files and remove the provided lines from each file.
  const components = [];
  for (let component of await getDirFolders("./lib")) {
    components.push({
      export: component.split("/").pop(),
      from: component,
    });
  }

  const lines = [];
  for (let component of components) {
    lines.push(
      `export { ${component.export} } from "./${component.from
        .split("/")
        .slice(2)
        .join("/")}";`
    );
  }

  await fs.writeFile(
    "./lib/index.tsx",
    await format(lines.join("\n"), {
      parser: "typescript",
    })
  );
};
