/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { RefObject, forwardRef } from "react";
import { ModalPaddingProps } from "../types";
import { valEmpty } from "../../utils";
import "./index.scss";

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
