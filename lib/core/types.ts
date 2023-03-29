// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens
  open: boolean;
  // whether side menu is in minimised state
  minimised: boolean;
};
