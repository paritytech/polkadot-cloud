/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import { RefObject, forwardRef } from "react";
import "./index.scss";

/**
 * @name Main
 * @summary A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="core-main" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";
