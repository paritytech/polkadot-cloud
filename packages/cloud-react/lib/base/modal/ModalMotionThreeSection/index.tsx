/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { motion } from "framer-motion";
import { ModalAnimationProps } from "../types";
import "@polkadot-cloud/core/css/base/modal/ModalMotionThreeSection/index.css";

/**
 * @name ModalMotionThreeSection
 * @summary Three section wrapper with motion animation.
 */
export const ModalMotionThreeSection = ({
  children,
  ...rest
}: ModalAnimationProps) => (
  <motion.div className="modal-motion-three-sections" {...rest}>
    {children}
  </motion.div>
);
