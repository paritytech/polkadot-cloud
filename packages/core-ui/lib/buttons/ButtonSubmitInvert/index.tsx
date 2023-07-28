/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import {
  ButtonIconProps,
  ButtonCommonProps,
  ComponentBaseWithClassName,
} from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onMouseHandlers, valEmpty, valOr } from "../../utils";
import { motion } from "framer-motion";
import "./index.scss";

export type ButtonSubmitInvertProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // button text.
    text: string;
  };

/**
 * @name ButtonSubmitInvert
 * @description Invert submit button style used in modals.
 */
export const ButtonSubmitInvert = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
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
}: ButtonSubmitInvertProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-submit-invert${valEmpty(grow, "grow")}
    ${valEmpty(marginRight, "m-right")}${valEmpty(
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
