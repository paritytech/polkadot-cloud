/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "../../utils";
import { RowProps } from "../types";
import "./index.scss";

/**
 * @name ButtonRow
 * @summary A flex container for a row of buttons.
 */
export const ButtonRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-button-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);
