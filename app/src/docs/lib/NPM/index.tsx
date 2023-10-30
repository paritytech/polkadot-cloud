/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  npm: string;
}

export const NPM = ({ npm }: Props) => {
  return (
    <h3 className="npm">
      <FontAwesomeIcon icon={faNpm} />
      <a
        href={`https://www.npmjs.com/package/${npm}`}
        target="_blank"
        rel="noreferrer"
      >
        {npm}
      </a>
    </h3>
  );
};
