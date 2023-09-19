/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/CanvasContainer/index.css";

/**
 * @name CanvasContainer
 * @summary Modal background wrapper with a thick blurred backround, suitable for text content to
 * overlay it.
 */
export const CanvasContainer = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-canvas" {...rest}>
    {children}
  </motion.div>
);
