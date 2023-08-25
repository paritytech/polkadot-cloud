/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/structure/Card/index.css";
import { CardProps } from "../../types";
import { valEmpty } from "../../../utils";

export const Card = ({ children, style, animations, className }: CardProps) => {
  return (
    <motion.div
      {...animations}
      style={style}
      className={"core-card" + valEmpty(className, className)}
    >
      {children}
    </motion.div>
  );
};
