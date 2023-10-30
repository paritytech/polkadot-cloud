// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */

import type { NotificationsContextInterface } from "./types";

export const defaultNotificationsContext: NotificationsContextInterface = {
  addNotification: (n) => {},
  removeNotification: (n) => {},
  notifications: [],
};
