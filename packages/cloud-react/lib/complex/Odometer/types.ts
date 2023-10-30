/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

export interface Props {
  value: number | string;
  wholeColor?: string;
  decimalColor?: string;
  spaceBefore?: string | number;
  spaceAfter?: string | number;
  zeroDecimals?: number;
}

export type Status = "new" | "transition" | "inactive";

export type Direction = "down" | "none";
