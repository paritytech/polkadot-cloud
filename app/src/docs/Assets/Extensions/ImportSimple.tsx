/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ImportSimple = () => {
  const code = `// Import extensions as object.
import { Extensions } from "@polkadot-cloud/assets/extensions";

// Or import extensions as array.
import { ExtensionsArray } from "@polkadot-cloud/assets/extensions";`;

  return <SimpleEditor code={code} language="javascript" standalone />;
};
