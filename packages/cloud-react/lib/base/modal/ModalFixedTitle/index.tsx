/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { RefObject, forwardRef } from "react";
import { ModalFixedTitleProps } from "../types";
import { valEmpty } from "../../../utils";
import "@polkadot-cloud/core/css/base/modal/ModalFixedTitle/index.css";

/**
 * @name ModalFixedTitle
 * @summary Fixed the title.
 */
export const ModalFixedTitle = forwardRef(
  (
    { children, style, withStyle }: ModalFixedTitleProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-fixed-title${valEmpty(withStyle, "with-style")}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalFixedTitle.displayName = "ModalFixedTitle";
