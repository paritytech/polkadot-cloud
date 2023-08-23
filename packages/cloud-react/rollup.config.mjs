/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import cleanup from "rollup-plugin-cleanup";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.tsx",
  output: [
    {
      file: "dist/index.jsx",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve(),
    nodeResolve(),
    typescript(),
    copy({
      targets: [
        {
          src: ["LICENSE", "README.md"],
          dest: "dist",
        },
      ],
    }),
    cleanup({
      extensions: ["tsx", "ts"],
    }),
  ],
  external: [
    "@fortawesome/react-fontawesome",
    "framer-motion",
    "prop-types",
    "react",
    "react-dom",
  ],
};
