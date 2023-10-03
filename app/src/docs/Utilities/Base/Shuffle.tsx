/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const Shuffle = () => {
  const code = `shuffle([1, 2, 3, 4, 5]) // [2, 5, 1, 3, 4] (or some other shuffled result)
shuffle([]) // []
shuffle([42]) // [42]`;

  return <SimpleEditor code={code} standalone />;
};
