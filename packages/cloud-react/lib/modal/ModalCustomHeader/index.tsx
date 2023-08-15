/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../types";
import "@polkadotcloud/cloud-core/css/modal/ModalCustomHeader/index.css";

/**
 * @name ModalCustomHeader
 * @summary The header section along with the title.
 */
export const ModalCustomHeader = ({ children, style }: ComponentBase) => (
  <div className="modal-custom-header" style={style}>
    {children}
  </div>
);
