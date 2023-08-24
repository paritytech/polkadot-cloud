/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty, valOr } from "../../../utils";
import { RowSectionProps } from "../../types";
import "@polkadot-cloud/core/css/base/structure/RowSection/index.css";

/**
 * @name RowSection
 * @summary The primary/secondary module in a PageRow.
 */
export const RowSection = ({
  children,
  style,
  vLast,
  hLast,
  secondary,
}: RowSectionProps) => (
  <div
    className={`${valOr(
      secondary,
      "core-row-secondary",
      "core-row-primary"
    )}${valEmpty(vLast, "v-last")}${valOr(hLast, "first", "last")}`}
    style={style}
  >
    {children}
  </div>
);
