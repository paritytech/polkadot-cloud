/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../utils";
import { ModalNotesProps } from "../types";
import "@polkadotcloud/cloud-core/css/modal/ModalNotes/index.css";

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
