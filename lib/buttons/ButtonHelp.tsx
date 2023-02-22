import React from "react";
import { InfoSVG } from "../svg/Info";
import { valEmpty } from "../utils";
import { CommonButtonInterface } from "../types";

export type ButtonHelpProps = CommonButtonInterface & {
  light?: boolean;
  style?: React.CSSProperties;
};

/*
 * Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({
  onClick,
  light,
  style,
  disabled,
  marginLeft,
  marginRight,
  marginX,
  grow,
}: ButtonHelpProps) => (
  <button
    className={
      "btn-help" +
      valEmpty(light, "light") +
      valEmpty(grow, "grow") +
      valEmpty(marginRight, "m-right") +
      valEmpty(marginLeft, "m-left") +
      valEmpty(marginX, "m-x")
    }
    style={style}
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    <InfoSVG />
  </button>
);
