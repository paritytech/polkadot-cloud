/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { valEmpty } from "../../../utils";
import { ModalSectionProps } from "../types";
import "@polkadot-cloud/core/css/base/modal/ModalSection/index.css";

/**
 * @name  ModalSection
 * @summary Section wrapper.
 */
export const ModalSection = ({ children, style, type }: ModalSectionProps) => (
  <div
    className={`${valEmpty(type === "carousel", "modal-carousel")}${valEmpty(
      type === "tab",
      "modal-tabs"
    )}`}
    style={style}
  >
    {children}
  </div>
);
