/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { useState } from "react";
import { valEmpty } from "../utils";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionItemProps,
  ModalHeightProps,
  ModalContainerProps,
} from "./types";
import { motion } from "framer-motion";

/**
 * @name ModalBackground
 * @summary Modal background wrapper.
 */
export const ModalBackground = ({ children, ...rest }: ModalContainerProps) => (
  <motion.div className="modal-background" {...rest}>
    {children}
  </motion.div>
);

/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export const ModalContainer = ({ children, ...rest }: ModalContainerProps) => (
  <motion.div className="modal-container" {...rest}>
    {children}
  </motion.div>
);

/**
 * @name ModalHeight
 * @summary Used for modal window height.
 */
export const ModalHeight = ({ size, children, style }: ModalHeightProps) => (
  <div
    className={`modal-height${valEmpty(size === "xl", "xl")}${valEmpty(
      size === "large",
      "large"
    )}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name Footer
 * @summary Used for extrinsics forms.
 */
export const ModalFooter = ({ children, style }: ComponentBase) => (
  <div className="modal-footer" style={style}>
    {children}
  </div>
);

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
