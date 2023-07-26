/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import {
  ButtonIconProps,
  ButtonCommonProps,
  ComponentBaseWithClassName,
} from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty, valOr } from "../../utils";
import "./index.scss";

export type ButtonPrimaryInvertProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // use secondary network color.
    colorSecondary?: boolean;
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/**
 * @name ButtonPrimaryInvert
 * @description Invert primary button style.
 */
export const ButtonPrimaryInvert = ({
  colorSecondary,
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  lg,
  marginLeft,
  marginRight,
  marginX,
  className,
  style,
  text,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonPrimaryInvertProps) => (
  <button
    className={`btn-primary-invert${valEmpty(
      colorSecondary,
      "secondary-color"
    )}${valEmpty(grow, "grow")}${valOr(lg, "lg", "sm")}${valEmpty(
      marginRight,
      "m-right"
    )}${valEmpty(marginLeft, "m-left")}${valEmpty(marginX, "m-x")}${
      className || ""
    }`}
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
    {iconLeft ? (
      <FontAwesomeIcon
        icon={iconLeft}
        className={valOr(text, "icon-left", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
    {text ? text : null}
    {iconRight ? (
      <FontAwesomeIcon
        icon={iconRight}
        className={valOr(text, "icon-right", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
  </button>
);
