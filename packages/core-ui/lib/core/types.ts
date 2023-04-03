// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Network, ThemeMode } from "../types";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: ThemeMode;
  // the active network
  network: Network;
};

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens
  open: boolean;
  // whether side menu is in minimised state
  minimised: boolean;
};

export type PageTitleProps = ComponentBase & {
  // whether the title stick on the same position
  sticky?: boolean;
};
