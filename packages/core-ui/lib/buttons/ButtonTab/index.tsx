// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonCommonProps, ComponentBaseWithClassName } from "../../types";
import { onMouseHandlers, valEmpty } from "../../utils";
import "./index.scss";

export type ButtonTabProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // whether the button is clicked
    active?: boolean;
    // the title of the button
    title: string;
    // a badge value can represent the main content of the tab page
    badge?: string | number;
  };

/**
 * @name ButtonTab
 * @description Tab button used throughout dashboard apps.
 */
export const ButtonTab = ({
  disabled,
  className,
  style,
  active,
  title,
  badge,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonTabProps) => (
  <button
    className={`btn-tab${valEmpty(active, "active")}${
      className ? ` ${className}` : ""
    }`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    {title}
    {badge ? <span className="badge">{badge}</span> : null}
  </button>
);
