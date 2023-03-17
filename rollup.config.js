// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";

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
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css", ".scss"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    copy({
      targets: [{ src: "styles/fonts/**/*", dest: "dist/fonts" }],
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
