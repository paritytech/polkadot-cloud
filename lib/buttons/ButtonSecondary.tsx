import React from "react";
import {
  StyledComponentInterface,
  CommonButtonInterface,
  ButtonIconsInferface,
} from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";

export type ButtonSecondaryProps = StyledComponentInterface &
  ButtonIconsInferface &
  CommonButtonInterface & {
    // button text.
    text: string;
  };

/*
 * Secondary button style used within the main interface of dashboards.
 */
export const ButtonSecondary = ({
  disabled,
  iconLeft,
  iconRight,
  iconTransform,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
}: ButtonSecondaryProps) => (
  <button
    className={
      "btn-layout " +
      "btn-common " +
      "btn-icons " +
      "btn-secondary" +
      valEmpty(marginRight, "m-right") +
      valEmpty(marginLeft, "m-left") +
      valEmpty(marginX, "m-x")
    }
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
