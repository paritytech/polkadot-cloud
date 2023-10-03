/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const PlanckToUnit = () => {
  const code = `const inputValue = new BigNumber("10000000");
const units = 6;
fn.planckToUnit(inputValue, units); // 10.000000`;

  return <SimpleEditor code={code} standalone />;
};
