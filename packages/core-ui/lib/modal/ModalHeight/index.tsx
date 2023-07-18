/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "lib/utils";
import { ModalHeightProps } from "../types";
import "./index.scss";

/**
 * @name ModalHeight
 * @summary Used for modal window height.
 */
export const ModalHeight = ({ size, children, style }: ModalHeightProps) => (
  <div
    className={`modal-height${valEmpty(size === "xl", "xl")}${valEmpty(
      size === "large",
      "large"
    )}`}
    style={style}
  >
    {children}
  </div>
);
