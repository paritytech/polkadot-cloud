// @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import cleanup from "rollup-plugin-cleanup";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.tsx",
  output: [
    {
      file: "dist/index.tsx",
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
      extensions: ["tsx", "ts"],
    }),
  ],
  external: [
    "prop-types",
    "react",
    "react-dom",
    "@fortawesome/react-fontawesome",
    "framer-motion",
  ],
};
