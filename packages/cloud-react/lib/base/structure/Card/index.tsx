/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/structure/Card/index.css";
import { CardProps } from "../../types";

export const Card = ({ children, style, animations }: CardProps) => {
  return (
    <motion.div style={style} {...animations} className="core-card">
      {children}
    </motion.div>
  );
};