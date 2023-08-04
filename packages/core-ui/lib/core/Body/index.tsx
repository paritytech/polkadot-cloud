/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../../types";
import "./index.scss";

/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="core-body" style={style}>
      {children}
    </div>
  );
};
