/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { RefObject, forwardRef } from "react";
import { ModalPaddingProps } from "../types";
import { valEmpty } from "../../utils";
import "@polkadotcloud/core/css/modal/ModalPadding/index.css";

/**
 * @name ModalPadding
 * @summary Generic wrapper for modal padding.
 */
export const ModalPadding = forwardRef(
  (
    { children, style, verticalOnly, horizontalOnly }: ModalPaddingProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-padding${valEmpty(
        verticalOnly,
        "vertical-only"
      )}${valEmpty(horizontalOnly, "horizontal-only")}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalPadding.displayName = "ModalPadding";
