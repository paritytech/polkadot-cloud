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
    for (let file of await fs.readdir(dir)) {
      if ((await fs.stat(dir + "/" + file)).isDirectory()) {
        if (!ignore.includes(file)) folders.push(file);
      }
    }
    return folders;
  };

  // Iterate through all files and remove the provided lines from each file.
  const components = [];
  for (let folder of await getDirFolders("./lib")) {
    const dir = `./lib/${folder}`;
    for (let component of await fs.readdir(dir))
      if ((await fs.stat(`${dir}/${component}`)).isDirectory())
        if (existsSync(`${dir}/${component}/index.tsx`))
          components.push({
            export: component,
            from: `./${folder}/${component}`,
          });
  }

  const lines = [];
  for (let component of components)
    lines.push(`export { ${component.export} } from "${component.from}";`);

  await fs.writeFile(
    "./lib/index.tsx",
    await format(lines.join("\n"), {
      parser: "typescript",
    })
  );
};
