/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { RefObject, forwardRef } from "react";
import { ModalFixedTitleProps } from "../types";
import { valEmpty } from "../../utils";
import "./index.scss";

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
