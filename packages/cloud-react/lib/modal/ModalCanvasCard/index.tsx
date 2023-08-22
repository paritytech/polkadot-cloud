/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../types";
import "@polkadot-cloud/core/css/modal/ModalCanvasCard/index.css";

/**
 * @name ModalCanvasCard
 * @summary Modal canvas card wrapper.
 */
export const ModalCanvasCard = ({
  children,
  style,
  className,
}: ComponentBaseWithClassName) => (
  <div
    className={`modal-canvas-card${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);
