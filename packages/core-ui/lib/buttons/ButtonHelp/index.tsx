/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { InfoSVG } from "../../svg/Info";
import { ComponentBaseWithClassName } from "../../types";
import { valEmpty, onMouseHandlers } from "../../utils";
import { ButtonCommonProps } from "../types";
import "./index.scss";

export type ButtonHelpProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // whether to use secondary background
    backgroundSecondary?: boolean;
  };

/**
 * @name ButtonHelp
 * @description Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({
  disabled,
  marginLeft,
  marginRight,
  marginX,
  backgroundSecondary,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonHelpProps) => (
  <button
    className={`btn-help${valEmpty(
      backgroundSecondary,
      "background-secondary"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}${className ? ` ${className}` : ""}`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    <InfoSVG />
  </button>
);
