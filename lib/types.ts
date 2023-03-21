// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface StyledComponentInterface {
  // passing react children.
  children?: React.ReactNode;
  // passing custom styling.
  style?: React.CSSProperties;
  // passing a className string.
  className?: string;
}

// Common button props, applied to all buttons
export interface CommonButtonInterface {
  // whether the button is disabled.
  disabled?: boolean;
  // onClick handler of button.
  onClick?: () => void;
  // include a left margin
  marginLeft?: boolean;
  // include a right margin.
  marginRight?: boolean;
  // include x margin around button.
  marginX?: boolean;
  // enable flex grow.
  grow?: boolean;
}

// Icon support for buttons
export interface ButtonIconsInferface {
  // include a left icon with the button.
  iconLeft?: IconProp | IconDefinition;
  // include a right icon with the button.
  iconRight?: IconProp | IconDefinition;
  // transform icon size.
  iconTransform?: string;
}
