// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-empty-function, no-unused-vars, @typescript-eslint/no-unused-vars */

import type { UIContextInterface } from "./types";

export const defaultUIContext: UIContextInterface = {
  setSideMenu: (open) => {},
  sideMenuOpen: false,
};
