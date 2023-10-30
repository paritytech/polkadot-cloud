/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import cleanup from "rollup-plugin-cleanup";
import copy from "rollup-plugin-copy";

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
    del({ targets: "dist/utils/*" }),
    peerDepsExternal(),
    resolve(),
    typescript(),
    copy({
      targets: [
        {
          src: ["LICENSE", "README.npm.md"],
          dest: "dist",
        },
      ],
    }),
    cleanup({
      extensions: ["ts"],
    }),
  ],
  external: ["@polkadot/keyring", "@polkadot/util", "bignumber.js"],
};
