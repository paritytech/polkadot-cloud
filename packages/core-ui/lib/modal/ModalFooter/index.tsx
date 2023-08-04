/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

/**
 * @name ModalFooter
 * @summary Used for extrinsics forms.
 */
export const ModalFooter = ({ children, style }: ComponentBase) => (
  <div className="modal-footer" style={style}>
    {children}
  </div>
);
