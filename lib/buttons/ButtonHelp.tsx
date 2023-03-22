// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { InfoSVG } from "../svg/Info";
import { CommonButtonInterface, StyledComponentInterface } from "../types";
import { valEmpty } from "../utils";

export type ButtonHelpProps = StyledComponentInterface &
  CommonButtonInterface & {
    // whether to use secondary background
    backgroundSecondary?: boolean;
  };

/*
 * Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({
  disabled,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  backgroundSecondary,
  style,
}: ButtonHelpProps) => (
  <button
    className={`btn-help${valEmpty(
      backgroundSecondary,
      "background-secondary"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    <InfoSVG />
  </button>
);
