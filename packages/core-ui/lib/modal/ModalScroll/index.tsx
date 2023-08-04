/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "./index.scss";

/**
 * @name ModalScroll
 * @summary Modal scrollable container. Limits max width of container to an opinionated 800px;
 */
export const ModalScroll = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-scroll" {...rest}>
    {children}
  </motion.div>
);
