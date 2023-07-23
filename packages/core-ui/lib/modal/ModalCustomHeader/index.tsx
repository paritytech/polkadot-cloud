/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

/**
 * @name ModalCustomHeader
 * @summary The header section along with the title.
 */
export const ModalCustomHeader = ({ children, style }: ComponentBase) => (
  <div className="modal-custom-header" style={style}>
    {children}
  </div>
);
