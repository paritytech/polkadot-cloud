import React from "react";
import {
  StyledComponentInterface,
  CommonButtonInterface,
  ButtonIconsInferface,
} from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";
import { motion } from "framer-motion";

export type ButtonSubmitProps = StyledComponentInterface &
  ButtonIconsInferface &
  CommonButtonInterface & {
    // button text.
    text: string;
  };

/*
 * Submit button style used within modals to submit transactions.
 */
export const ButtonSubmit = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
}: ButtonSubmitProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={
      "btn-layout " +
      "btn-common " +
      "btn-icons " +
      "btn-submit" +
      valEmpty(grow, "grow") +
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
    {iconLeft ? (
      <FontAwesomeIcon
        icon={iconLeft}
        className={valOr(text, "icon-left", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
    {text ? text : null}
    {iconRight ? (
      <FontAwesomeIcon
        icon={iconRight}
        className={valOr(text, "icon-right", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
  </motion.button>
);
