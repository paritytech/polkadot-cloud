/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { AnimationProps } from "framer-motion";

// eslint-disable-next-line
export type AnyObject = any;

export type ActionItemProps = ComponentBase & {
  // the title
  text: string;
  // the state of the item
  toggled?: boolean;
  // whether the item is disabled.
  disabled?: boolean;
  // the switch action
  onToggle?: (val: boolean) => void;
};

export type ModalHeightProps = ComponentBase & {
  // the maximum width
  size: string;
};

export type ModalContainerProps = ComponentBase &
  AnimationProps & {
  };
