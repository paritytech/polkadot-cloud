import { StyledComponentInterface } from "../types";
import React from "react";

export type HelpIconProps = StyledComponentInterface & {
  helpKey: string;
  onClick: () => void;
  icon: any;
};

export const HelpIcon = ({ helpKey, style, onClick, icon }: HelpIconProps) => (
  <button
    className="btn-help"
    style={style}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    {icon}
  </button>
);
