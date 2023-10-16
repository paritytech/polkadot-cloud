/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { InfoSVG } from "../../svg/Info";
import { ComponentBaseWithClassName, DisplayFor } from "../../utils/types";
import { valEmpty, onMouseHandlers } from "../../utils";
import { ButtonCommonProps } from "../types";
import "@polkadot-cloud/core/css/buttons/ButtonHelp/index.css";

export type ButtonHelpProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // display for.
    displayFor?: DisplayFor;
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
  displayFor,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonHelpProps) => (
  <button
    className={`btn-help${valEmpty(
      displayFor === "modal",
      "background-secondary"
    )}${valEmpty(displayFor === "canvas", "background-tertiary")}${valEmpty(
      marginRight,
      "m-right"
    )}${valEmpty(marginLeft, "m-left")}${valEmpty(marginX, "m-x")}${
      className ? ` ${className}` : ""
    }`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    <InfoSVG />
  </button>
);
