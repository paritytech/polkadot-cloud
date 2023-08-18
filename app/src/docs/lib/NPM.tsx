/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  npmPackage: string;
}

export const NPM = ({ npmPackage }: Props) => {
  return (
    <h3>
      <FontAwesomeIcon icon={faNpm} />
      <a
        href={`https://www.npmjs.com/package/${npmPackage}`}
        target="_blank"
        rel="noreferrer"
      >
        {npmPackage}
      </a>
    </h3>
  );
};
