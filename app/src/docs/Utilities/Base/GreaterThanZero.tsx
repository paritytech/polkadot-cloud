/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const GreaterThanZero = () => {
  const code = `greaterThanZero(new BigNumber("10")) // true
greaterThanZero(new BigNumber("0")) // false
greaterThanZero(new BigNumber("-5")) // false
greaterThanZero(new BigNumber("999999999999999999999999999")) // true
greaterThanZero(new BigNumber("-999999999999999999999999999")) // false`;

  return <SimpleEditor code={code} standalone />;
};
