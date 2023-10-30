/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/modal/ModalContent/index.css";

/**
 * @name CanvasContent
 * @summary Modal canvas content wrapper.
 */
export const CanvasContent = ({
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
