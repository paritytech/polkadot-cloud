// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { generateExportEntries } from "./generateExportEntries.mjs";
import { generateTypeExports } from "./generateTypeExports.mjs";

const main = async () => {
  // Generate type exports.
  const folderPath = "./lib";
  const outputFilePath = "./lib/types.d.ts";
  generateTypeExports(folderPath, outputFilePath);

  // Generate entry files.
  await generateExportEntries({
    ignore: ["styles", "svg", "utils", "hooks"],
  });
};

await main();
