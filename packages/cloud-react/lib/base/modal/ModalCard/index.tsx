/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { RefObject, forwardRef } from "react";
import "@polkadot-cloud/core/css/base/modal/ModalCard/index.css";
import { ModalCardProps } from "../types";

/**
 * @name ModalCard
 * @summary Modal card wrapper.
 */
export const ModalCard = forwardRef(
  (
    { children, style, className }: ModalCardProps,
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
