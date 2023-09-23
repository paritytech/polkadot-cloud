/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Label } from "../Label";
import { NPM } from "../NPM";

export interface Props {
  title: string;
  subtitle: string;
  npm: string;
  status: "stable" | "experimental";
}
export const Header = ({ npm, status, subtitle, title }: Props) => {
  return (
    <>
      <Label
        text={status}
        type={
          status === "experimental"
            ? undefined
            : status === "stable"
            ? "secondary"
            : "primary"
        }
      />
      <h1 className="header">{title}</h1>
      <h3 className="header">{subtitle}</h3>
      <NPM npm={npm} />
    </>
  );
};
