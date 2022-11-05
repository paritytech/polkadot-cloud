import React from "react";
import { StyledComponentInterface } from "../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";
import { motion } from "framer-motion";

export type ButtonPrimaryProps = StyledComponentInterface & {
  // whether the button is disabled.
  disabled?: boolean;
  // include an icon with the button.
  icon?: IconProp;
  // transform icon size.
  iconTransform?: string;
  // include x spacing around button.
  inline?: boolean;
  // onClick handler of button.
  onClick?: () => void;
  // small button, large otherwise.
  sm?: boolean;
  // button text.
  title: string;
  // include a right margin.
  space?: boolean;
};

/*
 * Primary button style used within the main interface of dashboards.
 */
export const ButtonPrimary = ({
  disabled,
  icon,
  iconTransform,
  inline,
  onClick,
  sm,
  space,
  style,
  title,
}: ButtonPrimaryProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={
      "btn-primary" +
      valOr(sm, "sm", "lg") +
      valEmpty(space, "space") +
      valEmpty(inline, "inline")
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
        className={valOr(title, "space", undefined)}
        transform={valOr(iconTransform, iconTransform, "shrink-1")}
      />
    ) : null}
    {title ? title : null}
  </motion.button>
);
