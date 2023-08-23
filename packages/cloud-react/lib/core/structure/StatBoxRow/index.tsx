/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../types";
import "@polkadot-cloud/core/css/core/StatBoxRow/index.css";

/**
 * @name StatBoxRow
 * @summary Used to house a row of `StatBox` items.
 */
export const StatBoxRow = ({ children, style }: ComponentBase) => (
  <div className="core-stat-box-row" style={style}>
    {children}
  </div>
);
