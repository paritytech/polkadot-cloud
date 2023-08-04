/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { MouseEvent } from "react";

// A list of supported theme modes
export type ThemeMode = "light" | "dark";

// A list of supported networks
export type Network = "polkadot" | "kusama" | "westend";

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface ComponentBase {
  // passing react children.
  children?: React.ReactNode;
  // passing custom styling.
  style?: React.CSSProperties;
}

export type ComponentBaseWithClassName = ComponentBase & {
  // passing a className string.
  className?: string;
};

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
