/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@packages/cloud-react/lib/loaders/Loader";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const LoaderDots = () => {
  const code = `<Loader type="dots" />`;

  return (
    <>
      <Demo>
        <Loader type="dots" />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
