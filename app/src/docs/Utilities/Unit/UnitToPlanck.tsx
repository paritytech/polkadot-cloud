/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const UnitToPlanck = () => {
  const code = `const inputValue = "10";
const units = 6;
fn.unitToPlanck(inputValue, units); // 10000000`;

  return <SimpleEditor code={code} standalone />;
};
