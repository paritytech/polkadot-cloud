/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactNode, CSSProperties } from "react";

// A generic type to handle React components. We assume the component may have
// children and styling applied to it.
export interface ComponentBase {
  // passing react children.
  children?: ReactNode;
  // passing custom styling.
  style?: CSSProperties;
}

export type ComponentBaseWithClassName = ComponentBase & {
  // passing a className string.
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyJson = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = any;

export type HPosition = HPositionLR & "center";

export type HPositionLR = "left" | "right";
