/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalContent
 * @summary Modal content wrapper for `ModalCanvas` content.
 */
export const ModalContent = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-content" {...rest}>
    {children}
  </motion.div>
);
