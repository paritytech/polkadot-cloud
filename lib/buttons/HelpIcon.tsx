import React, { ReactElement } from "react";

export type HelpIconProps = {
  onClick?: () => void;
  icon?: ReactElement;
};

export const HelpIcon = ({ onClick, icon }: HelpIconProps) => (
  <button
    className="btn-help"
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    {icon}
  </button>
);
