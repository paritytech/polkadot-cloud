// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";
import { RefObject, forwardRef } from "react";
import { motion } from "framer-motion";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export type PageProps = ComponentBase & {
  key: string | undefined;
};

/* Entry
 * The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

/* Body
 * An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="body-interface" style={style}>
      {children}
    </div>
  );
};

/* Main
 * A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="main-interface" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

/* Page
 * A motion.div that wraps every page.
 * Transitions can be applied to this wrapper that will
 * affect the entire page.
 */
export const Page = ({ children, style, key }: PageProps) => {
  return (
    <motion.div
      className="page-interface"
      style={style}
      key={key}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
