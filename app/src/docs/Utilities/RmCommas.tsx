/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";

export const RmCommas = () => {
  const code = `const inputValue = "1,000,000";
  const result = fn.rmCommas(inputValue); // 1000000`;

  return <SimpleEditor code={code} />;
};
