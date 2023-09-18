/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { Enkrypt } from "@packages/community/lib/extensions/jsx/Enkrypt";
import { Demo } from "../lib/Demo";

export const ExtensionsJsx = () => {
  const code = `import { Enkrypt } from "@polkadot-cloud/community/extensions/jsx/Enkrypt";

const App = () => (
  <>
    <Enkrypt />
  </>
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box">
          <Enkrypt />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
