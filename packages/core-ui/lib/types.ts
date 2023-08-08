/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

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
