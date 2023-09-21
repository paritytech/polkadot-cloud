/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Polkicon } from "@packages/cloud-react/lib/icons/Polkicon";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PolkIconCustomColors = () => {
  const code = `<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow", "black", "pink", "brown"]} />
<Polkicon dark size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow"]} />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow", "black", "pink", "brown"]}
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow"]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
