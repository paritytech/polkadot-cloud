/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/ModalContainer/index.css";

/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export const ModalContainer = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-container" {...rest}>
    {children}
  </motion.div>
);
