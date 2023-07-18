/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "lib/utils";
import { ModalWarningsProps } from "../types";
import "./index.scss";

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
