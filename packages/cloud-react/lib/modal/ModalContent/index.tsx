/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadotcloud/core/css/modal/ModalContent/index.css";

/**
 * @name ModalContent
 * @summary Modal content wrapper for `ModalCanvas` content.
 */
export const ModalContent = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-content" {...rest}>
    {children}
  </motion.div>
);
