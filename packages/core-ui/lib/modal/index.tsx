/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
 * @name ActionItem
 * @summary A call to action item as a header.
 * @param {string} text - The text to display.
 */
export const ActionItem = ({ style, text }: ActionItemProps) => (
  <h3 className={`modal-action-item`} style={style}>
    <FontAwesomeIcon icon={faChevronRight} transform="shrink-7" />
    {text}
  </h3>
);
