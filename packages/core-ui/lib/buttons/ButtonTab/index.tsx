// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonCommonProps, ComponentBaseWithClassName } from "../../types";
import { valEmpty } from "../../utils";
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
    className={`btn-tab${valEmpty(active, "active")}${className || ""}`}
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
    {title}
    {badge ? <span className="badge">{badge}</span> : null}
  </button>
);
