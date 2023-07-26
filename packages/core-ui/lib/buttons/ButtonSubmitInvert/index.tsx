/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty, valOr } from "../../utils";
import { motion } from "framer-motion";
import "./index.scss";

export type ButtonSubmitInvertProps = ComponentBase &
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
  style,
  text,
  onClick,
  onMouseOver,
  onMouseOut,
}: ButtonSubmitInvertProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-submit-invert${valEmpty(grow, "grow")}
    ${valEmpty(marginRight, "m-right")}${valEmpty(
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
