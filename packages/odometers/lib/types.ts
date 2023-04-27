/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { type HTMLProps } from "react";

export interface ReactOdometerProps extends HTMLProps<HTMLDivElement> {
  /**
   * Change how long the javascript expects the CSS animation to take.
   * @default 2000
   */
  duration?: number;
  /**
   * Current value. Change it to run animation.
   */
  value: number;
}
