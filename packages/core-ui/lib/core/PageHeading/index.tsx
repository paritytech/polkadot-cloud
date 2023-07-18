/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

/**
 * @name PageHeading
 * @summary Positioned under titles for a Go Back button and other page header info.
 */
export const PageHeading = ({ children, style }: ComponentBase) => (
  <div className="core-page-heading" style={style}>
    {children}
  </div>
);
