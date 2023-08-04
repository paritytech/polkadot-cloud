/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalCanvas
 * @summary Modal background wrapper with a thick blurred backround, suitable for text content to
 * overlay it.
 */
export const ModalCanvas = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-canvas" {...rest}>
    {children}
  </motion.div>
);
