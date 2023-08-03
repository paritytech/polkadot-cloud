/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalOverlay
 * @summary Modal overlay wrapper, providing a transparent background to overlaying content.
 */
export const ModalOverlay = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-overlay" {...rest}>
    {children}
  </motion.div>
);
