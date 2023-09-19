/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { PolkadotIcon } from "@packages/cloud-react/lib/icons/PolkadotIcon";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PolkIconThemes = () => {
  const code = `<PolkadotIcon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
<PolkadotIcon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" outerColor="transparent" />
<PolkadotIcon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" outerColor="#E6007A" />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box sm">
          <PolkadotIcon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box sm">
          <PolkadotIcon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="transparent"
          />
        </div>
        <div className="svg-box sm">
          <PolkadotIcon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="#E6007A"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
