/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const ButtonTab = () => {
  const code = `<Button type="tab" title={"Inactive"} />
<Button type="tab" title={"Inactive"} badge={"123"} />
<Button type="tab" active title={"Active"} />
<Button type="tab" active title={"Active"} badge={"123"} />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="tab" title={"Inactive"} />
        <Button type="tab" title={"Inactive"} badge={"123"} />
        <Button type="tab" active title={"Active"} />
        <Button type="tab" active title={"Active"} badge={"123"} />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
