/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { valEmpty } from "../../utils";
import { ModalNotesProps } from "../types";
import "./index.scss";

/**
 * @name ModalNotes
 * @summary Note styling.
 */
export const ModalNotes = ({
  children,
  style,
  withPadding,
}: ModalNotesProps) => (
  <div
    className={`modal-notes${valEmpty(withPadding, "with-padding")}`}
    style={style}
  >
    {children}
  </div>
);
