/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@packages/cloud-react/lib/base/structure/Card";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const CardMono = () => {
  const code = `<Card>
  <h5>Just a card</h5>
</Card>`;

  return (
    <>
      <Demo showThemes={false}>
        <Card>
          <h5>Just a card</h5>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
