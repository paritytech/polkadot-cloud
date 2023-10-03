/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const OverlayConfig = () => {
  const code = `const { options } = useOverlay().modal.config;
const { myVal } = options;

console.log(myVal);
>> 'value'`;

  return <SimpleEditor code={code} standalone />;
};
