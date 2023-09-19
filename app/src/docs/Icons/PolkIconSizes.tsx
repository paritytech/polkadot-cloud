/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { PolkadotIcon } from "@packages/cloud-react/lib/icons/PolkadotIcon";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PolkIconSizes = () => {
  const code = `<PolkadotIcon size="10rem" address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon size="7rem" address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon size={60} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box">
          <PolkadotIcon
            size="10rem"
            address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe"
          />
        </div>
        <div className="svg-box">
          <PolkadotIcon
            size="7rem"
            address="EkvDzBYPaageH576B7cwhZrTA9EL9CCM8p7U5eqsp8LJysn"
          />
        </div>
        <div className="svg-box">
          <PolkadotIcon
            size={60}
            address="234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
