/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { RowProps } from "../../types";
import "@polkadot-cloud/core/css/base/structure/ButtonRow/index.css";

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
