import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";

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
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano(),
      ],
      extensions: [".css"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
};
