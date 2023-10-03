/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";

export const CSSThemes = () => {
  const code = `// Top of app hierarchy. E.g. index.tsx, main.tsx.

import "@packages/cloud-core/dist/template/cloud/index.css";
import "@packages/cloud-core/dist/theme/polkadot-relay/index.css";

...
`;

  return <SimpleEditor code={code} standalone />;
};
