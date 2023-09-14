/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { PolkadotIcon } from "@packages/cloud-react/lib/icons/PolkadotIcon";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PolkIconCustomColors = () => {
  const code = `<PolkadotIcon size={150} address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow", "black", "pink", "brown"]} />
<PolkadotIcon dark size={150} address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow"]} />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div>
          <PolkadotIcon
            size={150}
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow", "black", "pink", "brown"]}
          />
        </div>
        <div>
          <PolkadotIcon
            dark
            size={150}
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow"]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
