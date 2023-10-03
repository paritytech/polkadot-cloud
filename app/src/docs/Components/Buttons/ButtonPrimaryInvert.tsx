/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "@docs/Demo";

export const ButtonPrimaryInvert = () => {
  const code = `<Button type="primaryInvert" text="Button" marginRight />
<Button type="primaryInvert" text="Button" iconLeft={faUserReg} marginRight />
<Button type="primaryInvert" text="Button" iconRight={faUserReg} marginRight />
<Button type="primaryInvert" lg text="Button" disabled />`;

  return (
    <>
      <Demo>
        <Button type="primaryInvert" text="Button" marginRight />
        <Button
          type="primaryInvert"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button
          type="primaryInvert"
          text="Button"
          iconRight={faUser}
          marginRight
        />
        <Button type="primaryInvert" lg text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
