/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@packages/cloud-react/lib/loaders/Loader";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const LoaderLine = () => {
  const code = `<Loader type="line" text="loading..." />
{/* or (line is the default loader setting) */}
<Loader text="loading..." />`;

  const codeOptional = `{/* Optional text field */}
<Loader type="line" />`;
  return (
    <>
      <Demo>
        <Loader type="line" text="loading..." />
      </Demo>
      <SimpleEditor code={code} />
      <Demo>
        <Loader type="line" />
      </Demo>
      <SimpleEditor code={codeOptional} />
    </>
  );
};
