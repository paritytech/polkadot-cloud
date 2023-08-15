/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../types";
import "../../../../cloud-core/dist/css/core/Page/index.css";

/**
 * @name Page
 * @summary
 * A motion.div that wraps every page. Transitions can be applied to this wrapper that will affect
 * the entire page.
 */
export const Page = ({ children, style }: ComponentBase) => {
  return (
    <div className="core-page" style={style}>
      {children}
    </div>
  );
};
