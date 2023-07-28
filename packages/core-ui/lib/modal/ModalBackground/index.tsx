/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalBackground
 * @summary Modal background wrapper.
 */
export const ModalBackground = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-background" {...rest}>
    {children}
  </motion.div>
);
