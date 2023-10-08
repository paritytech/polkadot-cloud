/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/modal/CanvasCard/index.css";

/**
 * @name CanvasCard
 * @summary Modal canvas card wrapper.
 */
export const CanvasCard = ({
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
