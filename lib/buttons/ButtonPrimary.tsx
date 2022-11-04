import React from "react";
import { StyledComponentInterface } from "../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from 'framer-motion'; TODO: enable

export type Props = StyledComponentInterface & {
  disabled?: boolean;
  icon?: IconProp;
  iconTransform?: string;
  onClick?: () => void;
  size: "sm" | "lg";
  title: string;
};

/**
 * Primary button style used within the main interface of dashboards.
 */
export const ButtonPrimary = ({
  disabled,
  icon,
  iconTransform,
  onClick,
  size,
  style,
  title,
}: Props) => {
  // If icon transform is not provided, default to shink-1
  iconTransform = iconTransform ?? "shrink-1";

  return (
    <button
      className={`btn-primary ${size}`}
      style={style}
      type="button"
      disabled={disabled}
      onClick={() => {
        if (typeof onClick == "function") {
          onClick();
        }
      }}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={title ? "space" : undefined}
          transform={iconTransform}
        />
      )}
      {title && title}
    </button>
  );
};
