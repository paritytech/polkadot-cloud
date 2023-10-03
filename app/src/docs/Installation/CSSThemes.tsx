/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";

export const CSSThemes = () => {
  const code = `// Top of app hierarchy. E.g. index.tsx, main.tsx.

import "@polkadot-cloud/core/template/cloud/index.css";
import "@polkadot-cloud/core/theme/polkadot-relay/index.css";

...`;

  return <SimpleEditor code={code} standalone />;
};
