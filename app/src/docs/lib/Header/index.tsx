/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { Label } from "../Label";
import { NPM } from "../NPM";
import { H1 } from "../Headers";

export interface Props {
  title: string;
  subtitle: string;
  npm?: string;
  status?: "stable" | "experimental";
}
export const Header = ({ npm, status, subtitle, title }: Props) => {
  return (
    <>
      <H1 className="header">
        {title}{" "}
        {status && status !== "stable" && (
          <Label
            text={status}
            type={status === "experimental" ? "secondary" : undefined}
            icon={status === "experimental" ? faCompassDrafting : undefined}
          />
        )}
      </H1>
      <h3 className="header">{subtitle}</h3>
      {npm && <NPM npm={npm} />}
    </>
  );
};
