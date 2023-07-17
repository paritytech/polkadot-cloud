/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import fs from "fs";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
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
      file: "dist/index.tsx",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve(),
    postcss({
      config: {
        path: "postcss.config.js",
      },
      extensions: [".css", ".scss"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    typescript(),
    copy({
      targets: [
        {
          src: "lib/styles/fonts/**/*",
          dest: "dist/fonts",
        },
      ],
    }),
    cleanup({
      extensions: ["tsx", "ts"],
    }),
    {
      // inline plugin.
      //
      // This plugin will take a number of strings as lines, and remove those lines from the bundle
      // if they are found.
      writeBundle: async () => {
        // the starting directory to recursively search through.
        const entryDir = "./dist";
        // the file extensions we are interested in removing lines from/
        const exts = [".ts"];
        // the lines we wish to remove from the bundle
        const linesToRemove = [
          'import "./index.scss";',
          'import "./styles.scss";',
          'import "./styles/index.scss";',
        ];

        const getAllFiles = (dir, files) => {
          files = files || [];
          fs.readdirSync(dir).forEach((file) => {
            if (fs.statSync(dir + "/" + file).isDirectory()) {
              files = getAllFiles(dir + "/" + file, files);
            } else {
              const filePath = path.join(dir, "/", file);
              const ext = path.extname(filePath);
              if (exts.includes(ext)) files.push(filePath);
            }
          });
          return files;
        };

        for (let file of getAllFiles(entryDir, [])) {
          const newLines = fs
            .readFileSync(file, { encoding: "utf8" })
            .split("\n")
            .filter((line) => !linesToRemove.includes(line));

          fs.writeFileSync(file, newLines.join("\n"));
        }
      },
    },
  ],
  external: [
    "@fortawesome/react-fontawesome",
    "@polkadotcloud/utils",
    "framer-motion",
    "prop-types",
    "react",
    "react-dom",
  ],
};
