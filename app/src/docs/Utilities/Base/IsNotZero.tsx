/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const IsNotZero = () => {
  const code = `isNotZero(new BigNumber("10")) // true
isNotZero(new BigNumber("0")) // false
isNotZero(new BigNumber("-5")) // true
isNotZero(new BigNumber("999999999999999999999999999")) // true
isNotZero(new BigNumber("-999999999999999999999999999")) // true`;

  return <SimpleEditor code={code} standalone />;
};
