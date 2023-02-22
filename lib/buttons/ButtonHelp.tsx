import React from "react";
import { InfoSVG } from "../svg/Info";
import { StyledComponentInterface, CommonButtonInterface } from "../types";
import { valEmpty } from "../utils";

export type ButtonHelpProps = StyledComponentInterface &
  CommonButtonInterface & {
    // whether to use secondary background
    backgroundSecondary?: boolean;
  };

/*
 * Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({
  disabled,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  backgroundSecondary,
  style,
}: ButtonHelpProps) => (
  <button
    className={
      "btn-help" +
      valEmpty(backgroundSecondary, "background-secondary") +
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
    <InfoSVG />
  </button>
);
