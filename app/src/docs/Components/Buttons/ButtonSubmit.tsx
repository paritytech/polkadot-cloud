/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "@docs/SimpleEditor";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "@docs/Demo";

export const ButtonSubmit = () => {
  const code = `<Button type="submit" text="Button" marginRight />
<Button type="submit" text="Button" marginRight lg />
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
      <Demo>
        <Button type="submit" text="Button" marginRight />
        <Button type="submit" text="Button" marginRight lg />
        <Button
          type="submit"
          text="Button"
          iconLeft={faArrowAltCircleUp}
          marginRight
          colorSecondary
        />
        <Button type="submit" text="Button" pulse marginRight />
        <Button type="submit" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
