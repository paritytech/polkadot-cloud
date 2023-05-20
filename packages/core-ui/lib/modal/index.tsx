/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { useState } from "react";
import { valOr } from "../utils";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionItemProps, HeightProps } from "./types";
import { motion } from "framer-motion";

/**
 * @name ModalWrapper
 * @summary Modal wrapper.
 */
export const ModalWrapper = ({ children, style }: ComponentBase) => {
  return (
    <motion.div className="modal-wrapper" style={style}>
      {children}
    </motion.div>
  );
};

/**
 * @name Blur
 * @summary Blurred background wrapper.
 */
export const Blur = () => <motion.div className="modal-blur" />;

/**
 * @name Height
 * @summary Used for modal window height.
 */
export const Height = ({ size, children, style }: HeightProps) => {
  return (
    <div
      className={`modal-height ${valOr(size === "xl", "xl", "large")}`}
      style={style}
    >
      {children}
    </div>
  );
};

/**
 * @name Footer
 * @summary Used for extrinsics forms.
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
