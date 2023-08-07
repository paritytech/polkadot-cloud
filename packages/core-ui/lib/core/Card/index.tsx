/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { motion } from "framer-motion";
import "./index.scss";
import { CardProps } from "../types";

export const Card = ({ children, style, animations }: CardProps) => {
  return (
    <motion.div style={style} {...animations} className="core-card">
      {children}
    </motion.div>
  );
};
