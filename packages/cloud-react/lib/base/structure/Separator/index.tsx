/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/structure/Separator/index.css";

/**
 * @name Separator
 * @summary A horizontal spacer with a bottom border. General spacer for separating content by
 * row.
 */
export const Separator = ({ children, style }: ComponentBase) => (
  <div className="core-separator" style={style}>
    {children}
  </div>
);
