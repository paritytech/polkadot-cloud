/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { RefObject, forwardRef } from "react";
import { valEmpty } from "../../utils";
import { ModalHeightProps } from "../types";
import "@polkadot-cloud/core/css/modal/ModalHeight/index.css";

/**
 * @name ModalHeight
 * @summary Used for modal window height.
 */
export const ModalHeight = forwardRef(
  (
    { size, children, style }: ModalHeightProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-height${valEmpty(size === "xl", "xl")}${valEmpty(
        size === "large",
        "large"
      )}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalHeight.displayName = "ModalHeight";
