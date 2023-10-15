/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/CanvasScroll/index.css";
import { CanvasScrollProps } from "../types";
import { valEmpty } from "../../../utils";

/**
 * @name CanvasScroll
 * @summary Canvas scrollable container.
 */
export const CanvasScroll = ({
  children,
  size,
  scroll = true,
  ...rest
}: CanvasScrollProps) => (
  <motion.div
    className={`canvas-scroll${valEmpty(size === "xl", "xl")}${valEmpty(
      scroll,
      "scroll"
    )}`}
    {...rest}
  >
    {children}
  </motion.div>
);
