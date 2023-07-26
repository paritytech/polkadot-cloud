/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { InfoSVG } from "../../svg/Info";
import { ButtonCommonProps, ComponentBaseWithClassName } from "../../types";
import { valEmpty } from "../../utils";
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
    )}${valEmpty(marginX, "m-x")}${className || ""}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={typeof onClick == "function" ? (e) => onClick(e) : undefined}
    onMouseOver={
      typeof onClick == "function" ? (e) => onMouseOver(e) : undefined
    }
    onMouseMove={
      typeof onClick == "function" ? (e) => onMouseMove(e) : undefined
    }
    onMouseOut={typeof onClick == "function" ? (e) => onMouseOut(e) : undefined}
  >
    <InfoSVG />
  </button>
);
