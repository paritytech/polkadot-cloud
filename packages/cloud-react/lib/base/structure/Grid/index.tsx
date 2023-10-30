/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { GridProps } from "../../types";
import "@polkadot-cloud/core/css/base/structure/Grid/index.css";

export const Grid = ({
  alignItems,
  children,
  column,
  expanded,
  justify,
  lg,
  md,
  row,
  sm,
  style,
}: GridProps) => {
  const isRow: boolean = row || !column;

  const classes: string =
    // Clarify if its a column or a row
    (!isRow ? "column" : "row") +
    // In case of a row then style it
    valEmpty(isRow && expanded, "expanded") +
    valEmpty(justify, justify) +
    valEmpty(alignItems, "align-" + alignItems) +
    // In case of a column then style it
    valEmpty(!isRow && !!sm, "sm-" + sm) +
    valEmpty(!isRow && !!md, "md-" + md) +
    valEmpty(!isRow && !!lg, "lg-" + lg);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};
