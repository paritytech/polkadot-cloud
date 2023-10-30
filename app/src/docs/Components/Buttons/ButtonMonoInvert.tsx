/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const ButtonMonoInvert = () => {
  const code = `<Button type="monoInvert" text="Button" marginRight />
<Button type="monoInvert" text="Button" iconLeft={faUser} marginRight />
<Button type="monoInvert" text="Button" iconRight={faUser} marginRight />
<Button type="monoInvert" lg text="Button" disabled />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="monoInvert" text="Button" marginRight />
        <Button type="monoInvert" text="Button" iconLeft={faUser} marginRight />
        <Button
          type="monoInvert"
          text="Button"
          iconRight={faUser}
          marginRight
        />
        <Button type="monoInvert" lg text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
