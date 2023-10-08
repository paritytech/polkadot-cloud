// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { generateExportEntries } from "./index.mjs";

const main = async () => {
  // Generate `lib/index.tsx`.
  await generateExportEntries({
    ignore: ["styles", "svg", "utils", "hooks"],
  });
};

await main();
