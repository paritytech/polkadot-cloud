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
  // Rmmove stale folders.
  if (existsSync(`./lib/types.ts`)) await fs.rm("./lib/types.ts");
  if (existsSync(`./lib/providers`))
    await fs.rm("./lib/providers", { recursive: true });

  if (existsSync(`./lib/hooks`))
    await fs.rm("./lib/hooks", { recursive: true });

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
  const indexLines = [];
  const providersLines = [];
  const hooksLines = [];

  for (let component of components)
    indexLines.push(
      `export { ${component.export} } from "./${component.from
        .split("/")
        .slice(2)
        .join("/")}";`
    );

  for (let provider of providers)
    providersLines.push(
      `export { ${provider.export} } from "../${provider.from
        .split("/")
        .slice(2)
        .join("/")}";`
    );

  for (let hook of hooks)
    hooksLines.push(
      `export { ${hook.export} } from "../${hook.from
        .split("/")
        .slice(2)
        .join("/")}";`
    );

  // Write files
  await fs.writeFile(
    "./lib/index.tsx",
    await format(indexLines.join("\n"), {
      parser: "typescript",
    })
  );

  await fs.mkdir("./lib/providers");
  await fs.writeFile(
    "./lib/providers/index.tsx",
    await format(providersLines.join("\n"), {
      parser: "typescript",
    })
  );

  await fs.mkdir("./lib/hooks");
  await fs.writeFile(
    "./lib/hooks/index.tsx",
    await format(hooksLines.join("\n"), {
      parser: "typescript",
    })
  );
};
