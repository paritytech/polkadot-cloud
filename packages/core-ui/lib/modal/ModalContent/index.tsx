/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import { RefObject, forwardRef } from "react";
import "./index.scss";

/**
 * @name ModalContent
 * @summary Modal content wrapper.
 */
export const ModalContent = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="modal-content" style={style}>
      {children}
    </div>
  )
);
ModalContent.displayName = "ModalContent";
