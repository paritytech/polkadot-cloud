/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/ModalContent/index.css";
import { valEmpty } from "../../../utils";
import { ModalContentProps } from "../types";

/**
 * @name ModalContent
 * @summary Modal content wrapper for `ModalContainer` and `CanvasContainer`.
 */
export const ModalContent = ({
  children,
  canvas,
  ...rest
}: ModalContentProps) => (
  <motion.div
    className={`modal-content${valEmpty(canvas, "canvas")}`}
    {...rest}
  >
    {children}
  </motion.div>
);
