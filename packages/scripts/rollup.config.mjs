/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
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
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve(),
    typescript(),
  ],
};
