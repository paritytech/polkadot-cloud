/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { CSSProperties, ReactNode } from "react";

export interface DemoProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  // whether the content is aligned to the center.
  centered?: boolean;
  // whether theme toggles are displayed.
  showThemes?: boolean;
  // standalone mode.
  standalone?: boolean;
}
