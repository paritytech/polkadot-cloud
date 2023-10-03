/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@packages/cloud-react/lib/loaders/Loader";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const LoaderCube = () => {
  const code = `<Loader type="cube" />`;

  return (
    <>
      <Demo>
        <div style={{ margin: "4rem 0 2rem 0" }}>
          <Loader type="cube" />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
