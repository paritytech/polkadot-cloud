/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const MinDecimalPlaces = () => {
  const code = `const val = "10.5";
const minDecimals = 4;
fn.minDecimalPlaces(val, minDecimals);// 10.5000`;

  return <SimpleEditor code={code} standalone />;
};
