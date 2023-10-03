/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";

export const ButtonPrimary = () => {
  const code = `<Button text="Button" marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight colorSecondary />
<Button type="primary" text="Button" lg disabled />`;

  return (
    <>
      <Demo>
        <Button text="Button" marginRight />
        <Button type="primary" text="Button" iconLeft={faUser} marginRight />
        <Button
          type="primary"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button type="primary" text="Button" lg disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
