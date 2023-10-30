/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";
import { ComponentBaseWithClassName } from "../utils/types";

// Common button props, applied to all buttons
export interface ButtonCommonProps {
  // whether the button is disabled.
  disabled?: boolean;
  // include a left margin
  marginLeft?: boolean;
  // include a right margin.
  marginRight?: boolean;
  // include x margin around button.
  marginX?: boolean;
  // enable flex grow.
  grow?: boolean;
  // onClick handler of button.
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  // onMouseOver handler of button.
  onMouseOver?: (e?: MouseEvent<HTMLButtonElement>) => void;
  // onMouseMove handler of button.
  onMouseMove?: (e?: MouseEvent<HTMLButtonElement>) => void;
  // onMouseOut handler of button.
  onMouseOut?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

// Icon support for buttons
export interface ButtonIconProps {
  // include a left icon with the button.
  iconLeft?: IconProp | IconDefinition;
  // include a right icon with the button.
  iconRight?: IconProp | IconDefinition;
  // transform icon size.
  iconTransform?: string;
}

export type ButtonType =
  | "help"
  | "mono"
  | "monoInvert"
  | "option"
  | "primary"
  | "primaryInvert"
  | "secondary"
  | "submit"
  | "submitInvert"
  | "tab"
  | "tertiary"
  | "text";

export type ButtonProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // the type of the button that need to be imported.
    type?: ButtonType;
  } & (
    | {
        // use secondary network color.
        colorSecondary?: boolean;
        // large button, small otherwise.
        lg?: boolean;
        // pulsing effect.
        pulse?: boolean;
        // button content including icon and html styling.
        content?: boolean;
        // button text.
        text: string;
      }
    | {
        // background style.
        background?: "primary" | "secondary" | "none";
        // optional border
        outline?: boolean;
      }
    | {
        // whether the button is clicked
        active?: boolean;
        // the title of the button
        title: string;
        // a badge value can represent the main content of the tab page
        badge?: string | number;
      }
  );
