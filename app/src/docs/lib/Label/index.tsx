/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  text: string;
  type?: string;
  icon?: IconDefinition;
}
export const Label = ({ icon, text, type }: Props) => {
  return (
    <div className="label">
      <span className={type ? type : undefined}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
      </span>
    </div>
  );
};
