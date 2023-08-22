/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Card } from "@packages/cloud-react/lib/core/Card";
import { SimpleEditor } from "../lib/SimpleEditor";

export const CardMono = () => {
  const code = `<Card>
  <h5>Just a card</h5>
</Card>`;

  return (
    <>
      <div className="demo">
        <Card>
          <h5>Just a card</h5>
        </Card>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
