/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonCommonProps, ComponentBase } from "../../types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty } from "../../utils";
import "./index.scss";

export type ButtonOptionProps = ComponentBase &
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
  style,
  disabled,
  content,
  onClick,
  onMouseOver,
  onMouseOut,
}: ButtonOptionProps) => (
  <button
    className={`btn-option${valEmpty(content, "content")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={typeof onClick == "function" ? (e) => onClick(e) : undefined}
    onMouseOver={
      typeof onClick == "function" ? (e) => onMouseOver(e) : undefined
    }
    onMouseOut={typeof onClick == "function" ? (e) => onMouseOut(e) : undefined}
  >
    {children}
    <div>
      <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} />
    </div>
  </button>
);
