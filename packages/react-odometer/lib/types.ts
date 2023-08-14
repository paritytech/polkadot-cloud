/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { type HTMLProps } from "react";

export interface ReactOdometerProps extends HTMLProps<HTMLDivElement> {
  /**
   * Change how long the javascript expects the CSS animation to take.
   * @default 2000
   */
  duration?: number;
  // Current odometer value.
  value: number;
  // The number of decimal places to display.
  decimals?: number;
}