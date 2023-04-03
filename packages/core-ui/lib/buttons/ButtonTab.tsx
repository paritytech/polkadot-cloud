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
  };

/*
 * Tab button used throughout dashboard apps.
 */
export const ButtonTab = ({
  disabled,
  onClick,
  style,
  active,
  title,
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
  </button>
);
