/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/modal/ModalFooter/index.css";

/**
 * @name ModalFooter
 * @summary Used for extrinsics forms.
 */
export const ModalFooter = ({ children, style }: ComponentBase) => (
  <div className="modal-footer" style={style}>
    {children}
  </div>
);
