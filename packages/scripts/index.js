#!/usr/bin/env node

/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { fs } from "fs";
import { dirname } from "path";

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.log("Warning: Requires 2 arguments");
  console.log("node index.js [path/source.html] [targetfile]");
  process.exit();
}
const src = args[0];
const target = args[1];
const dirsrc = dirname(src);

if (!existsSync(src)) {
  console.log("Error: Source file doesn't exist. Given: ", src);
  process.exit();
}
