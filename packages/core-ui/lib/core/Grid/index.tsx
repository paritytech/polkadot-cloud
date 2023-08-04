/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { GridProps } from "../types";
import "./index.scss";

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
    (isRow && expanded ? ` ${"expanded"}` : "") +
    (isRow && justify ? ` ${justify}` : "") +
    (isRow && alignItems ? ` ${"align-" + alignItems}` : "") +
    // In case of a column then style it
    (!isRow && sm ? ` ${"sm-" + sm}` : "") +
    (!isRow && md ? ` ${"md-" + md}` : "") +
    (!isRow && lg ? ` ${"lg-" + lg}` : "");

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};
