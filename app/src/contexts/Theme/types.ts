// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

export type Mode = "light" | "dark";

export interface ThemeContextInterface {
  toggleMode: (mode: Mode) => void;
  setTheme: (theme: string) => void;
  mode: Mode;
  theme: string;
}
