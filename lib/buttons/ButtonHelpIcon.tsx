import React from "react";
import { InfoSVG } from "../svg/Info";

export type ButtonHelpIconProps = {
  onClick?: () => void;
};

/*
 * Help button used throughout dashboard apps.
 */
export const ButtonHelpIcon = ({ onClick }: ButtonHelpIconProps) => (
  <button
    className="btn-help"
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    <InfoSVG />
  </button>
);
