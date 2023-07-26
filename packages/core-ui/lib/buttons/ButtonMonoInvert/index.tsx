/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty, valOr } from "../../utils";
import { motion } from "framer-motion";
import "./index.scss";

export type ButtonMonoProps = ComponentBase &
  ButtonIconProps &
  ButtonCommonProps & {
    // large button, small otherwise.
    lg?: boolean;
    // button text.
    text: string;
  };

/**
 * @name ButtonMonoInvert
 * @description Inverted monotone button style used within the main interface of dashboards.
 */
export const ButtonMonoInvert = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  lg,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonMonoProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-mono-invert${valOr(lg, "lg", "sm")}${valEmpty(
      grow,
      "grow"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={typeof onClick == "function" ? (e) => onClick(e) : undefined}
    onMouseOver={
      typeof onClick == "function" ? (e) => onMouseOver(e) : undefined
    }
    onMouseMove={
      typeof onClick == "function" ? (e) => onMouseMove(e) : undefined
    }
    onMouseOut={typeof onClick == "function" ? (e) => onMouseOut(e) : undefined}
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
