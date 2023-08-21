/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "@packages/cloud-react/lib/loader/Loader";
import { SimpleEditor } from "../lib/SimpleEditor";

export const LoaderCube = () => {
  const code = `<Loader type="cube" />`;

  return (
    <>
      <div className="demo">
        <Loader type="cube" />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
