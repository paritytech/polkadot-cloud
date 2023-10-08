// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { existsSync } from "fs";
import fs from "fs/promises";
import { format } from "prettier";

// Generates bundle entry files based on the content of the lib/ folder.
//
// - `lib/index.tsx` is generated to house all component exports.
// - `lib/providers/index.tsx` is generated to house all provider exports.
// - `lib/hooks/index.tsx` is generated to house all hook exports.
// - `lib/types/index.tsx` is generated to house all types.
export const generateExportEntries = async ({ ignore }) => {
  // Rmmove stale folders if they exist.
  const pathsToRemove = [
    { path: "./lib/types.ts", options: {} },
    { path: "./lib/providers", options: { recursive: true } },
    { path: "./lib/hooks", options: { recursive: true } },
  ];
  await Promise.all(
    pathsToRemove.map(({ path, options }) =>
      existsSync(path) ? fs.rm(path, options) : Promise.resolve()
    )
  );

  // Iterates through a provided directory and returns all component paths.
  const getDirFolders = async (dir) => {
    const folders = [];

    // If directory contains index.tsx file, stop.
    if (dir !== "./lib" && existsSync(`${dir}/index.tsx`)) {
      folders.push(dir);
    } else {
      // for each folder in this directory, loop again.
      for (let file of await fs.readdir(dir))
        if ((await fs.stat(dir + "/" + file)).isDirectory())
          if (!ignore.includes(file))
            folders.push(...(await getDirFolders(dir + "/" + file)));
    }
    return folders;
  };

  // Iterate through all files and construct entries.
  const components = [];
  const providers = [];
  const hooks = [];
  for (let name of await getDirFolders("./lib")) {
    let isComponent = true;

    // If folder contains a `Provider`, add to providers.
    if (name.endsWith("Provider")) {
      const split = name.split("/");
      providers.push({
        export: split.pop(),
        from: name,
      });
      isComponent = false;
    }

    // Add hook if folder name starts with `use`.
    if (name.split("/").pop().startsWith("use")) {
      hooks.push({
        export: name.split("/").pop(),
        from: name,
      });
    }
    // Add hooks to `hooks` if present in the folder.
    for (let file of await fs.readdir(name)) {
      if (file.startsWith("use")) {
        const split = file.split("/");
        hooks.push({
          export: split[0].split(".")[0],
          from: name + "/" + file.split(".")[0],
        });
      }
    }
    // If not provider or hook, add `name`'s index.tsx to component exports.
    if (isComponent) {
      components.push({
        export: name.split("/").pop(),
        from: name,
      });
    }
  }

  // Construct entry files.
  await writeFormattedFile(
    "./lib/index.tsx",
    generateExportLines(components, "./")
  );

  await fs.mkdir("./lib/providers");
  await writeFormattedFile(
    "./lib/providers/index.tsx",
    generateExportLines(providers, "../")
  );

  await fs.mkdir("./lib/hooks");
  await writeFormattedFile(
    "./lib/hooks/index.tsx",
    generateExportLines(hooks, "../")
  );
};

// Generate export lines for an array of items.
const generateExportLines = (items, basePath) =>
  items
    .map(
      (item) =>
        `export { ${item.export} } from "${basePath}${item.from
          .split("/")
          .slice(2)
          .join("/")}";`
    )
    .join("\n");

// Write formatted TypeScript code to a file.
const writeFormattedFile = async (path, lines) => {
  const content = await format(lines, { parser: "typescript" });
  await fs.writeFile(path, content);
};
