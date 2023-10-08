/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../utils/types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onMouseHandlers, valEmpty } from "../../utils";
import "@polkadot-cloud/core/css/buttons/ButtonOption/index.css";
import { ButtonCommonProps } from "../types";

export type ButtonOptionProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // button content including icon and html styling.
    content?: boolean;
  };

/**
 * @name ButtonOption
 * @description Option button for different action.
 */
export const ButtonOption = ({
  children,
  className,
  style,
  disabled,
  content,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonOptionProps) => (
  <button
    className={`btn-option${valEmpty(content, "content")}${
      className ? ` ${className}` : ""
    }`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    {children}
    <div>
      <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} />
    </div>
  </button>
);
