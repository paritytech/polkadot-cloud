/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadotcloud/core/css/modal/ModalScroll/index.css";

/**
 * @name ModalScroll
 * @summary Modal scrollable container. Limits max width of container to an opinionated 800px;
 */
export const ModalScroll = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-scroll" {...rest}>
    {children}
  </motion.div>
);
