/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@packages/cloud-react/lib/loader/Loader";
import { SimpleEditor } from "../lib/SimpleEditor";

export const LoaderDots = () => {
  const code = `<Loader type="dots" />`;

  return (
    <>
      <div className="demo">
        <Loader type="dots" />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
