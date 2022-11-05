import React from "react";
import { StyledComponentInterface, CommonButtonInterface } from "../types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";
import { motion } from "framer-motion";

export type ButtonPrimaryProps = StyledComponentInterface &
  CommonButtonInterface & {
    // include an icon with the button.
    icon?: IconProp;
    // transform icon size.
    iconTransform?: string;
    // onClick handler of button.
    onClick?: () => void;
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/*
 * Primary button style used within the main interface of dashboards.
 */
export const ButtonPrimary = ({
  disabled,
  icon,
  iconTransform,
  onClick,
  lg,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
}: ButtonPrimaryProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={
      "btn-primary" +
      valOr(lg, "lg", "sm") +
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
  </motion.button>
);
