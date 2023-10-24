/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "@docs/Demo";

export const ButtonSubmitInvert = () => {
  const code = `<Button type="submitInvert" text="Button" marginRight />
<Button type="submitInvert" text="Button" marginRight lg />
<Button
  type="submitInvert"
  text="Button"
  iconLeft={faUserReg}
  marginRight
/>
<Button
  type="submitInvert"
  text="Button"
  iconRight={faUserReg}
  marginRight
/>
<Button type="submitInvert" text="Button" disabled />`;

  return (
    <>
      <Demo>
        <Button type="submitInvert" text="Button" marginRight />
        <Button type="submitInvert" text="Button" marginRight lg />
        <Button
          type="submitInvert"
          text="Button"
          iconLeft={faUser}
          marginRight
        />
        <Button
          type="submitInvert"
          text="Button"
          iconRight={faUser}
          marginRight
        />
        <Button type="submitInvert" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
