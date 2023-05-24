/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionItemProps } from "./types";
import { ComponentBase } from "../types";
import { RefObject, forwardRef, useState } from "react";
import { motion } from "framer-motion";

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

/**
 * @name ModalPadding
 * @summary Generic wrapper for modal padding
 */
export const ModalPadding = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="modal-padding" style={style}>
      {children}
    </div>
  )
);
ModalPadding.displayName = "ModalPadding";

/**
 * @name ModalSeparator
 * @summary
 */
export const ModalSeparator = ({ children, style }: ComponentBase) => (
  <div className="modal-separator" style={style}>
    {children}
  </div>
);

/**
 * @name ModalNotes
 * @summary
 */
export const ModalNotes = ({ children, style }: ComponentBase) => (
  <div className="modal-notes" style={style}>
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalWarnings = ({ children, style }: ComponentBase) => (
  <div className="modal-warnings" style={style}>
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalCustomHeader = ({ children, style }: ComponentBase) => (
  <div className="modal-custom-header" style={style}>
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalFixedTitle = ({ children, style }: ComponentBase) => (
  <div className="modal-fixed-title" style={style}>
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalSection = ({ children, style }: ComponentBase) => (
  <div className="modal-multi-section" style={style}>
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalMotionSection = ({ children, style }: ComponentBase) => (
  <motion.div className="modal-three-section" style={style}>
    {children}
  </motion.div>
);
