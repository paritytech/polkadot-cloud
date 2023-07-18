/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { motion } from "framer-motion";
import { ModalAnimationProps } from "../types";
import "./index.scss";

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
