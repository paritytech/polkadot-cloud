/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionItemProps,
  ModalPaddingProps,
  ModalNotesProps,
  ModalWarningsProps,
  ModalFixedTitleProps,
  ModalSectionProps,
  ModalMotionSectionProps,
} from "./types";
import { ComponentBase } from "../types";
import { RefObject, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { valEmpty } from "lib/utils";

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

/**
 * @name ModalSeparator
 * @summary
 */
export const ModalSeparator = () => <div className="modal-separator" />;

/**
 * @name ModalNotes
 * @summary
 */
export const ModalNotes = ({
  children,
  style,
  withPadding,
}: ModalNotesProps) => (
  <div
    className={`modal-notes${valEmpty(withPadding, "with-padding")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalWarnings = ({
  children,
  style,
  withMargin,
}: ModalWarningsProps) => (
  <div
    className={`modal-warnings${valEmpty(withMargin, "with-margin")}`}
    style={style}
  >
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

/**
 * @name
 * @summary
 */
export const ModalSection = ({
  children,
  style,
  multiSections,
  threeSections,
  tabs,
}: ModalSectionProps) => (
  <div
    className={`${valEmpty(multiSections, "modal-multi-section")}${valEmpty(
      threeSections,
      "modal-three-section"
    )}${valEmpty(tabs, "modal-tabs")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name
 * @summary
 */
export const ModalMotionSection = ({
  children,
  style,
  twoSections,
  threeSections,
}: ModalMotionSectionProps) => (
  <motion.div
    className={`${valEmpty(twoSections, "modal-motion-two-sections")}${valEmpty(
      threeSections,
      "modal-motion-three-sections"
    )}`}
    style={style}
  >
    {children}
  </motion.div>
);
