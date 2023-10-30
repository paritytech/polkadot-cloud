/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/modal/ModalHardwareItem/index.css";

/**
 * @name  ModalHardwareItem
 * @summary Inner wrapper for a hardware connect item.
 */
export const ModalHardwareItem = ({ children, style }: ComponentBase) => (
  <div className={"modal-hardware-item"} style={style}>
    {children}
  </div>
);
