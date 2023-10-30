// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-empty-function, no-unused-vars, @typescript-eslint/no-unused-vars */

import type { ThemeContextInterface } from "./types";

export const defaultThemeContext: ThemeContextInterface = {
  toggleMode: (mode) => {},
  mode: "light",
  setTheme: (theme) => {},
  theme: "polkadot-relay",
};
