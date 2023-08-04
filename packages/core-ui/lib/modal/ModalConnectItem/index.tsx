/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "../../utils";
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
