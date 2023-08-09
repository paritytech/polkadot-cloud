/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: false,
      banner: "#!/usr/bin/env node \n",
    },
  ],
  plugins: [del({ targets: "dist/*" }), peerDepsExternal(), resolve()],
};
