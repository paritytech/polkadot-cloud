/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { NPM } from "../NPM";

export interface Props {
  title: string;
  subtitle: string;
  npm: string;
}
export const Header = ({ title, subtitle, npm }: Props) => {
  return (
    <>
      <h1 className="header">{title}</h1>
      <h3 className="header">{subtitle}</h3>
      <NPM npm={npm} />
    </>
  );
};
