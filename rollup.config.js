import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";
import packageJson from "./package.json";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "components/lib.tsx",
  output: [
    {
      file: packageJson.main,
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
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
      extract: true,
    }),
  ],
};
