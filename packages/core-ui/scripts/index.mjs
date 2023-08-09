/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import fs from "fs/promises";
import prettier from "prettier";

export const generateLibIndex = async (ignore = [], css = []) => {
  // Utility function that iterates through a provided directory and returns all
  // folders.
  const getDirFolders = async (dir) => {
    const folders = [];
    for (let file of await fs.readdir(dir)) {
      if ((await fs.stat(dir + "/" + file)).isDirectory()) {
        if (!ignore.includes(file)) folders.push(file);
      }
    }
    return folders;
  };

  // Iterate through all files and remove the provided lines from each file.
  const libFolders = await getDirFolders("./lib");

  const components = [];
  for (let folder of libFolders) {
    const dir = `./lib/${folder}`;
    for (let component of await fs.readdir(dir)) {
      if ((await fs.stat(dir + "/" + component)).isDirectory()) {
        components.push({
          export: component,
          from: `./${folder}/${component}`,
        });
      }
    }
  }

  const lines = [];
  // Add CSS imports
  for (let cssImport of css) {
    lines.push(`import "${cssImport}";`);
  }
  // Add component exports
  for (let component of components) {
    lines.push(`export { ${component.export} } from "${component.from}";`);
  }

  const formatted = await prettier.format(lines.join("\n"), {
    parser: "typescript",
  });

  await fs.writeFile("./lib/index.tsx", formatted);
};
