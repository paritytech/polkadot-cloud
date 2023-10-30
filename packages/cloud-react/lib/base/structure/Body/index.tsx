/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-cloud/core/css/base/structure/Body/index.css";

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
