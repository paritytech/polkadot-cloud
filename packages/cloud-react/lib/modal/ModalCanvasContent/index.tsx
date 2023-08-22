/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../types";
import "@polkadot-cloud/core/css/modal/ModalContent/index.css";

/**
 * @name ModalCanvasContent
 * @summary Modal canvas content wrapper.
 */
export const ModalCanvasContent = ({
  children,
  style,
  className,
}: ComponentBaseWithClassName) => (
  <div
    className={`modal-canvas-content${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);
