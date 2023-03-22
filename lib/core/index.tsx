// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StyledComponentInterface } from "../types";
import { valEmpty } from "../utils";

export const Entry = ({
  children,
  style,
  className,
}: StyledComponentInterface) => (
  <div className={"core-entry " + valEmpty(className, className)} style={style}>
    {children}
  </div>
);
