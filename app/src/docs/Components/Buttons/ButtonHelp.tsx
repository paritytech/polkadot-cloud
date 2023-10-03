/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const ButtonHelp = () => {
  const code = `<Button type="help" marginRight />
<Button type="help" backgroundSecondary />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="help" marginRight />
        <Button type="help" backgroundSecondary />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
