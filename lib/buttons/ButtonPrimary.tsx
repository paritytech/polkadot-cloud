// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {
  StyledComponentInterface,
  CommonButtonInterface,
  ButtonIconsInferface,
} from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valOr, valEmpty } from "../utils";
import { motion } from "framer-motion";

export type ButtonPrimaryProps = StyledComponentInterface &
  ButtonIconsInferface &
  CommonButtonInterface & {
    // use secondary network color.
    colorSecondary?: boolean;
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/*
 * Primary button style used within the main interface of dashboards.
 */
export const ButtonPrimary = ({
  colorSecondary,
  disabled,
  grow,
  iconLeft,
  iconRight,
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
      valEmpty(colorSecondary, "secondary-color") +
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
