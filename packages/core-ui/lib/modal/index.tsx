/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef } from "react";
import { valOr } from "../utils";

/**
 * @name ModalContent
 * @description Modal content wrapper.
 */
export const ModalContent = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="modal-content" style={style}>
      {children}
    </div>
  )
);
ModalContent.displayName = "ModalContent";

/**
 * @name Blur
 * @description Blurred background wrapper.
 */
export const Blur = ({ blur, children, style }: ComponentBase) => {
  return (
    <div
      className={`${valOr(blur, "modal-blur", "modal-wrapper")}`}
      style={style}
    >
      {children}
    </div>
  );
};

/**
 * @name Height
 * @description Used for modal window height.
 */
export const Height = ({ size, children, style }: ComponentBase) => {
  return (
    <div className="modal-height" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Footer
 * @description Used for extrinsics forms.
 */
export const Footer = ({ children, style }: ComponentBase) => {
  return (
    <div className="modal-footer" style={style}>
      {children}
    </div>
  );
};
