/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const ButtonHelp = () => {
  const code = `<Button type="help" marginRight />
<Button type="help" backgroundSecondary />`;

  return (
    <>
      <div className="demo">
        <Button type="help" marginRight />
        <Button type="help" backgroundSecondary />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
