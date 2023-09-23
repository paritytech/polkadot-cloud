/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Pie } from "@packages/cloud-react/lib/base/structure/Pie";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PieSimple = () => {
  const code = `<Pie perc={42} />`;

  return (
    <>
      <Demo>
        <div className="row" style={{ width: "10rem" }}>
          <Pie perc={42} />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
