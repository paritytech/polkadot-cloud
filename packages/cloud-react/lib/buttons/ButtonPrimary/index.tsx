/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBaseWithClassName } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onMouseHandlers, valEmpty, valOr } from "../../utils";
import { motion } from "framer-motion";
import "@polkadotcloud/cloud-core/css/buttons/ButtonPrimary/index.css";
import { ButtonCommonProps, ButtonIconProps } from "../types";

export type ButtonPrimaryProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // use secondary network color.
    colorSecondary?: boolean;
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/**
 * @name ButtonPrimary
 * @description Primary button style used within the main interface of dashboards.
 */
export const ButtonPrimary = ({
  colorSecondary,
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  lg,
  marginLeft,
  marginRight,
  marginX,
  className,
  style,
  text,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonPrimaryProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-primary${valOr(lg, "lg", "sm")}${valEmpty(
      colorSecondary,
      "secondary-color"
    )}${valEmpty(grow, "grow")}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}${className ? ` ${className}` : ""}`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
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
