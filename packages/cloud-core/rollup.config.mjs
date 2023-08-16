/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import cleanup from "rollup-plugin-cleanup";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/utils/index.ts",
  output: [
    {
      file: "dist/utils/index.js",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/utils/*" }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    cleanup({
      extensions: ["ts"],
    }),
  ],
  external: ["@polkadot/keyring", "@polkadot/util", "bignumber.js"],
};
