/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

/**
 * @name StatBoxRow
 * @summary Used to house a row of `StatBox` items.
 */
export const StatBoxRow = ({ children, style }: ComponentBase) => (
  <div className="core-stat-box-row" style={style}>
    {children}
  </div>
);
