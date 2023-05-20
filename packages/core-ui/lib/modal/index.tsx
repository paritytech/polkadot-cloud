/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef, useState } from "react";
import { valOr } from "../utils";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionItemProps } from "./types";

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

/**
 * @name ActionItem
 * @summary A call to action item as a header.
 * @param {string} text - The text to display.
 */
export const ActionItem = ({
  style,
  text,
  toggled,
  disabled,
  onToggle,
}: ActionItemProps) => {
  const [toggle, setToggle] = useState<boolean>(toggled);
  return (
    <h3 className={`modal-action-item`} style={style}>
      {toggled === undefined ? (
        <FontAwesomeIcon icon={faChevronRight} transform="shrink-6" />
      ) : (
        <button
          type="button"
          className="toggle"
          disabled={disabled}
          onClick={() => {
            if (typeof onToggle === "function") {
              onToggle(!toggle);
            }
            setToggle(!toggle);
          }}
        >
          {toggle && <FontAwesomeIcon icon={faCheck} transform="shrink-3" />}
        </button>
      )}
      {text}
    </h3>
  );
};
