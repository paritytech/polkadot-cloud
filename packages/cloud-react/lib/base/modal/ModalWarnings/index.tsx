/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { ModalWarningsProps } from "../types";
import "@polkadot-cloud/core/css/base/modal/ModalWarnings/index.css";

/**
 * @name ModalWarnings
 * @summary Warnings styling.
 */
export const ModalWarnings = ({
  children,
  style,
  withMargin,
}: ModalWarningsProps) => (
  <div
    className={`modal-warnings${valEmpty(withMargin, "with-margin")}`}
    style={style}
  >
    {children}
  </div>
);
