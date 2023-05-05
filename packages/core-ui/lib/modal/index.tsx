/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef } from "react";

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
 * @description
 */
export const Blur = ({ children, style }: ComponentBase) => {
  return (
    <div className="modal-blur" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Wrapper
 * @description
 */
export const Wrapper = ({ children, style }: ComponentBase) => {
  return (
    <div className="modal-wrapper" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Height
 * @description
 */
export const Height = ({ children, style }: ComponentBase) => {
  return (
    <div className="modal-height" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Footer
 * @description
 */
export const Footer = ({ children, style }: ComponentBase) => {
  return (
    <div className="modal-footer" style={style}>
      {children}
    </div>
  );
};
