/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBaseWithClassName } from "../../types";
import { RefObject, forwardRef } from "react";
import "./index.scss";

/**
 * @name ModalCard
 * @summary Modal card wrapper.
 */
export const ModalCard = forwardRef(
  (
    { children, style, className }: ComponentBaseWithClassName,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-card${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalCard.displayName = "ModalCard";
