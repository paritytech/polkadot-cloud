/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { ModalConnectItemProps } from "../types";
import "@polkadot-cloud/core/css/base/modal/ModalConnectItem/index.css";

/**
 * @name  ModalConnectItem
 * @summary Wrapper for a modal connect item.
 */
export const ModalConnectItem = ({
  children,
  style,
  canConnect,
}: ModalConnectItemProps) => (
  <div
    className={`modal-connect-item${valEmpty(canConnect, "can-connect")}`}
    style={style}
  >
    {children}
  </div>
);
