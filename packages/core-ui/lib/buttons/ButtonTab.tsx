// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, ButtonCommonProps } from "../types";
import { valEmpty } from "../utils";

export type ButtonTabProps = ComponentBase &
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
  onClick,
  style,
  active,
  title,
  badge,
}: ButtonTabProps) => (
  <button
    className={`btn-tab${valEmpty(active, "active")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    {title}
    {badge ? <span className="badge">{badge}</span> : null}
  </button>
);
