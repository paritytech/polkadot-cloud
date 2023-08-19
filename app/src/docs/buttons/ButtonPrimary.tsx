/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const ButtonPrimary = () => {
  const code = `<Button text="Button" iconLeft={faUser} marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight colorSecondary />
<Button type="primary" text="Button" iconLeft={faUser} iconRight={faUser} lg marginRight />
<Button type="primary" text="Button" lg disabled />`;

  return (
    <>
      <div className="demo">
        <Button text="Button" iconLeft={faUser} marginRight />
        <Button type="primary" text="Button" iconLeft={faUser} marginRight />
        <Button
          type="primary"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button
          type="primary"
          text="Button"
          iconLeft={faUser}
          iconRight={faUser}
          lg
          marginRight
        />
        <Button type="primary" text="Button" lg disabled />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
