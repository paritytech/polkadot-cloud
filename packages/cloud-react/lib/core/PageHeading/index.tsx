/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../types";
import "@polkadotcloud/cloud-core/css/core/PageHeading/index.css";

/**
 * @name PageHeading
 * @summary Positioned under titles for a Go Back button and other page header info.
 */
export const PageHeading = ({ children, style }: ComponentBase) => (
  <div className="core-page-heading" style={style}>
    {children}
  </div>
);
