/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import cleanup from "rollup-plugin-cleanup";
import { uglify } from "rollup-plugin-uglify";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.ts",
  output: [
    {
      file: "dist/index.ts",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    cleanup({
      extensions: ["ts"],
    }),
    uglify(),
  ],
  external: ["@polkadot/keyring", "@polkadot/util", "bignumber.js"],
};
