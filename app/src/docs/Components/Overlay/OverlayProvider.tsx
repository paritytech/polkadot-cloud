/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayProvider = () => {
  const code = `import { OverlayProvider } from '@polkadot-cloud/react';

const AppWithProvider = () => (
  <OverlayProvider>
    <App />
  </OverlayProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
