/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactNode } from "react";

export const Note = ({ children }: { children: ReactNode }) => {
  return <div className="note">{children}</div>;
};
