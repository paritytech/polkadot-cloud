/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { PolkadotIcon } from "@packages/cloud-react/lib/icons/PolkadotIcon";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PolkIconSizes = () => {
  const code = `<PolkadotIcon nocopy size={150} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon nocopy size={115} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon nocopy size={80} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon size={40} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<PolkadotIcon size={20} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />`;

  return (
    <>
      <Demo className="icon-demo">
        <div>
          <PolkadotIcon
            nocopy
            size={150}
            address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe"
          />
        </div>
        <div>
          <PolkadotIcon
            nocopy
            size={115}
            address="EkvDzBYPaageH576B7cwhZrTA9EL9CCM8p7U5eqsp8LJysn"
          />
        </div>
        <div>
          <PolkadotIcon
            nocopy
            size={80}
            address="234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7"
          />
        </div>
        <div>
          <PolkadotIcon address="EkvDzBYPaageH576B7cwhZrTA9EL9CCM8p7U5eqsp8LJysn" />
        </div>
        <div>
          <PolkadotIcon
            size={40}
            address="234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7"
          />
        </div>
        <div>
          <PolkadotIcon
            size={20}
            address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
