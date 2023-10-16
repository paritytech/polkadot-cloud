/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const ButtonHelp = () => {
  const code = `<Button type="help" marginRight />
<Button type="help" background="secondary" marginRight />
<Button type="help" background="none" outline />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="help" marginRight />
        <Button type="help" background="secondary" marginRight />
        <Button type="help" background="none" outline />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
