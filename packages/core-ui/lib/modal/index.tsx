/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ActionItemProps,
  ModalPaddingProps,
  ModalNotesProps,
  ModalWarningsProps,
  ModalFixedTitleProps,
  ModalSectionProps,
  ModalAnimationProps,
  ModalHeightProps,
} from "./types";
import { RefObject, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { valEmpty } from "lib/utils";

/**
 * @name ModalBackground
 * @summary Modal background wrapper.
 */
export const ModalBackground = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-background" {...rest}>
    {children}
  </motion.div>
);

/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export const ModalContainer = ({ children, ...rest }: ModalAnimationProps) => (
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
 * @name ModalFooter
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

/**
 * @name ModalPadding
 * @summary Generic wrapper for modal padding.
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

/**
 * @name ModalSeparator
 * @summary A line to separate the content.
 */
export const ModalSeparator = () => <div className="modal-separator" />;

/**
 * @name ModalNotes
 * @summary Note styling.
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
 * @name ModalWarnings
 * @summary Warnings styling.
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
 * @name ModalCustomHeader
 * @summary The header section along with the title.
 */
export const ModalCustomHeader = ({ children, style }: ComponentBase) => (
  <div className="modal-custom-header" style={style}>
    {children}
  </div>
);

/**
 * @name  ModalSection
 * @summary Section wrapper.
 */
export const ModalSection = ({ children, style, type }: ModalSectionProps) => (
  <div
    className={`${valEmpty(
      type === "multiSections",
      "modal-multi-section"
    )}${valEmpty(type === "tab", "modal-tabs")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name ModalMotionTwoSection
 * @summary Two section wrapper with motion animation.
 */
export const ModalMotionTwoSection = ({
  children,
  ...rest
}: ModalAnimationProps) => (
  <motion.div className="modal-motion-two-sections" {...rest}>
    {children}
  </motion.div>
);

/**
 * @name ModalMotionThreeSection
 * @summary Three section wrapper with motion animation.
 */
export const ModalMotionThreeSection = ({
  children,
  ...rest
}: ModalAnimationProps) => (
  <motion.div className="modal-motion-three-sections" {...rest}>
    {children}
  </motion.div>
);
