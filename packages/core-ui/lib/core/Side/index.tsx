/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "../../utils";
import "./index.scss";
import { SideProps } from "../types";
/**
 * @name Side
 * @summary An element that houses the side menu and transitions to a toggle-able fixed overlay
 * on smaller screens.
 * @summary Handles maximised and minimised transitions.
 */
export const Side = ({ children, style, open, minimised }: SideProps) => (
  <div
    className={`core-side${valEmpty(!open, "hidden")}${valEmpty(
      minimised,
      "minimised"
    )}`}
    style={style}
  >
    {children}
  </div>
);
