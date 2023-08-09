/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { generateLibIndex } from "./index.mjs";

const main = async () => {
  // Generate `lib/index.tsx`.
  await generateLibIndex({
    ignore: ["styles", "svg", "utils"],
    css: ["./styles/index.scss"],
  });
};

await main();
