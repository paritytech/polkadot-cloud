/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "lib/utils";
import { ModalConnectItemProps } from "../types";
import "./index.scss";

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
