// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import type { HelpContextInterface } from "./types";

export const defaultHelpContext: HelpContextInterface = {
  openHelp: (key) => {},
  closeHelp: () => {},
  setStatus: (status) => {},
  setDefinition: (definition) => {},
  status: "closed",
  definition: null,
};
