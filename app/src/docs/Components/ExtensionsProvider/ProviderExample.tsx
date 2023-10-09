/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ProviderExample = () => {
  const code = `import { ExtensionsProvider } from '@polkadot-cloud/react/providers';

const AppWithProvider = () => (
  <ExtensionsProvider>
    <App />
  </ExtensionsProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
