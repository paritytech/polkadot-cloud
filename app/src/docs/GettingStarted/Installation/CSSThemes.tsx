/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const CSSThemes = () => {
  const code = `// Top of app hierarchy. E.g. index.tsx, main.tsx.

import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/theme/cloud/index.css";

...

const App = () => (
  <div className='theme-polkadot-relay theme-light'>
     ...
  </div>
)`;

  return <SimpleEditor code={code} standalone />;
};
