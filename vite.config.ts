// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./sandbox",
  server: {
    port: 5174,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@lib", replacement: path.resolve(__dirname, "lib") },
      { find: "@types", replacement: path.resolve(__dirname, "types") },
      { find: "@utils", replacement: path.resolve(__dirname, "utils") },
      { find: "@styles", replacement: path.resolve(__dirname, "styles") },
    ],
  },
});
