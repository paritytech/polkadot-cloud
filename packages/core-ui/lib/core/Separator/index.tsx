/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

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
