import React from "react";
import { InfoSVG } from "../svg/Info";
import { valEmpty } from "../utils";

export type ButtonHelpProps = {
  onClick?: () => void;
  light?: boolean;
};

/*
 * Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({ onClick, light }: ButtonHelpProps) => (
  <button
    className={"btn-help" + valEmpty(light, "light")}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    <InfoSVG />
  </button>
);
