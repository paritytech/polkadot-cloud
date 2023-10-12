/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ImportSimple = () => {
  const code = `// Import browser extensions as object or array.
import { Extensions, ExtensionsArray } from "@polkadot-cloud/assets/extensions";

// Import hardware wallets as object or array.
import { Hardware, HardwareArray } from "@polkadot-cloud/assets/extensions";

// Get PolkaGate extension metadata.
console.log(Extensions['polkagate']);
>> {
  title: "PolkaGate",
  website: "polkagate.xyz",
}`;

  return <SimpleEditor code={code} language="javascript" standalone />;
};
