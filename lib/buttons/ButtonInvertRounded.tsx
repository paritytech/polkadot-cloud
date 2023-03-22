// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {
  ButtonIconsInferface,
  CommonButtonInterface,
  StyledComponentInterface,
} from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty, valOr } from "../utils";

export type ButtonInvertRoundedProps = StyledComponentInterface &
  ButtonIconsInferface &
  CommonButtonInterface & {
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/*
 * Invert rounded button style used in modals.
 */
export const ButtonInvertRounded = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  lg,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
}: ButtonInvertRoundedProps) => (
  <button
    className={`btn-invert-rounded${valEmpty(grow, "grow")}${valOr(
      lg,
      "lg",
      "sm"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
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
