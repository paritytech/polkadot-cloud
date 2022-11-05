import React from "react";
import { StyledComponentInterface, CommonButtonInterface } from "../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";

export type ButtonSecondaryProps = StyledComponentInterface &
  CommonButtonInterface & {
    // include an icon with the button.
    icon?: IconProp;
    // transform icon size.
    iconTransform?: string;
    // onClick handler of button.
    onClick?: () => void;
    // button text.
    text: string;
  };

/*
 * Secondary button style used within the main interface of dashboards.
 */
export const ButtonSecondary = ({
  disabled,
  icon,
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
      "btn-common " +
      " btn-secondary" +
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
    {icon ? (
      <FontAwesomeIcon
        icon={icon}
        className={valOr(text, "icon", undefined)}
        transform={valOr(iconTransform, iconTransform, "shrink-1")}
      />
    ) : null}
    {text ? text : null}
  </button>
);
