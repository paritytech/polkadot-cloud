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
  onClick,
  children,
  style,
  disabled,
  content,
}: ButtonOptionProps) => (
  <button
    className={`btn-option${valEmpty(content, "content")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    {children}
    <div>
      <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} />
    </div>
  </button>
);
