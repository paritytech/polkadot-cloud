// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StyledComponentInterface } from "../types";

export const Entry = ({ children, style }: StyledComponentInterface) => (
  <div className="core-entry" style={style}>
    {children}
  </div>
);
