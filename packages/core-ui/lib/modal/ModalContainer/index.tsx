/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export const ModalContainer = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-container" {...rest}>
    {children}
  </motion.div>
);
