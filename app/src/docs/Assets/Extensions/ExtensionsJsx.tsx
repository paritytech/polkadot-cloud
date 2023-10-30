/* @license Copyright 2023 @polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Enkrypt } from "@packages/assets/lib/extensions/jsx/Enkrypt";
import { Demo } from "@docs/Demo";

export const ExtensionsJsx = () => {
  const code = `import { Enkrypt } from "@polkadot-cloud/assets/extensions/jsx/Enkrypt";

const App = () => (
  <Enkrypt />
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <Enkrypt />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
