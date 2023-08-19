// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

export type Mode = "light" | "dark";

export interface ThemeContextInterface {
  toggleMode: (str?: Mode) => void;
  mode: Mode;
}
