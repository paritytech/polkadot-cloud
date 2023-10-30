/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const TransformToBaseUnit = () => {
  const code = `transformToBaseUnit("275002583", 9) // 0.275002583
transformToBaseUnit("275002583", 20) // 0.0000000000275002583
transformToBaseUnit("23", 9) // 0.00000023
transformToBaseUnit("23", 18) // 0.00000000000000023
transformToBaseUnit((20 * 10 ** 7).toString(), 18) // 0.000000002
transformToBaseUnit((235 * 10 ** 7).toString(), 9) // 2.35
transformToBaseUnit("0", 9) //  0
transformToBaseUnit("0.0000", 20) // 0`;

  return <SimpleEditor code={code} standalone />;
};
