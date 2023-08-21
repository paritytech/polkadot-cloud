/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export const ButtonSubmit = () => {
  const code = `<Button type="submit" text="Button" marginRight />
<Button
  type="submit"
  text="Button"
  iconLeft={faArrowAltCircleUp}
  marginRight
  colorSecondary
/>
<Button type="submit" text="Button" pulse marginRight />
<Button type="submit" text="Button" disabled />`;

  return (
    <>
      <div className="demo">
        <Button type="submit" text="Button" marginRight />
        <Button
          type="submit"
          text="Button"
          iconLeft={faArrowAltCircleUp}
          marginRight
          colorSecondary
        />
        <Button type="submit" text="Button" pulse marginRight />
        <Button type="submit" text="Button" disabled />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
