/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { RowProps } from "../../types";
import "@polkadot-cloud/core/css/base/structure/PageRow/index.css";

/**
 * @name PageRow
 * @summary Used to separate page content based on rows. Commonly used with RowPrimary and
 * RowSecondary.
 */
export const PageRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-page-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);
