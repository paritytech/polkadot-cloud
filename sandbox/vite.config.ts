/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 5174,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    eslint(),
    svgr(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
});
