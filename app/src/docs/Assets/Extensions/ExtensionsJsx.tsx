/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { PolkadotVault } from "@packages/assets/lib/extensions/jsx/PolkadotVault";
import { Demo } from "@docs/Demo";

export const ExtensionsJsx = () => {
  const code = `import { PolkadotVault } from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";

const App = () => (
  <PolkadotVault />
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <PolkadotVault />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
