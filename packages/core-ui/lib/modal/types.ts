/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";

export type ActionItemProps = ComponentBase & {
  text: string;
  toggled?: boolean;
  disabled?: boolean;
  onToggle?: (val: boolean) => void;
};
