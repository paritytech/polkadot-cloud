/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { EntryProps } from "../../types";
import "@polkadot-cloud/core/css/base/structure/Entry/index.css";

/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, theme }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${theme}`} style={style}>
    {children}
  </div>
);
