/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/ModalOverlay/index.css";

export type ModalOverlayProps = ModalAnimationProps & {
  // the amount of blur to apply to the backdrop.
  blur?: string;
};

/**
 * @name ModalOverlay
 * @summary Modal overlay wrapper, providing a transparent background to overlaying content.
 */
export const ModalOverlay = ({
  children,
  blur,
  ...rest
}: ModalOverlayProps) => (
  <motion.div
    style={blur ? { backdropFilter: `blur(${blur})` } : undefined}
    className="modal-overlay"
    {...rest}
  >
    {children}
  </motion.div>
);
