/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonCommonProps, ComponentBaseWithClassName } from "../../types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onMouseHandlers, valEmpty } from "../../utils";
import "./index.scss";

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
