// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase } from "../types";
import { RefObject, forwardRef } from "react";
import { motion } from "framer-motion";

import { valEmpty } from "../utils";
import {
  EntryProps,
  SideProps,
  PageTitleProps,
  PageRowProps,
  RowProps,
  ButtonRowProps,
} from "./types";

/* Entry
 *
 * The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

/* Body
 *
 * An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="core-body" style={style}>
      {children}
    </div>
  );
};

/* Main
 *
 * A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="core-main" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

/* Page
 *
 * A motion.div that wraps every page. Transitions can be applied to this wrapper that will affect
 * the entire page.
 */
export const Page = ({ children, style }: ComponentBase) => {
  return (
    <motion.div
      className="core-page"
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

/* Side
 *
 * An element that houses the side menu and transitions to a toggle-able fixed overlay on smaller
 * screens. Handles maximised and minimised transitions.
 */
export const Side = ({ children, style, open, minimised }: SideProps) => (
  <div
    className={`core-side${valEmpty(!open, "hidden")}${valEmpty(
      minimised,
      "minimised"
    )}`}
    style={style}
  >
    {children}
  </div>
);

/* PageTitle
 *
 * The element that wraps a page title. Determines the padding and position relative to top of screen when the element is stuck.
 */
export const PageTitle = forwardRef(
  (
    { children, style, sticky }: PageTitleProps,
    ref?: RefObject<HTMLElement>
  ) => (
    <header
      ref={ref}
      className={`core-page-title${valEmpty(sticky, "sticky")}`}
      style={style}
    >
      {children}
    </header>
  )
);
PageTitle.displayName = "PageTitle";

/* HideScrollable
 *
 * A fixed block that is used to hide scrollable content on smaller screens when a PageTitle is fixed.
 * Purely cosmetic. Applied in Pagetitle.
 */
export const HideScrollable = ({ children, style }: ComponentBase) => (
  <div className="core-hide-scrollable" style={style}>
    {children}
  </div>
);

/* PageRow
 *
 * Used to separate page content based on rows. Commonly used with RowPrimary and RowSecondary.
 */
export const PageRow = ({
  children,
  style,
  noVerticalMargin,
}: PageRowProps) => (
  <div
    className={`core-page-row${valEmpty(
      noVerticalMargin,
      "no-vertical-margin"
    )}`}
    style={style}
  >
    {children}
  </div>
);

/* RowPrimary
 *
 * The primary module in a PageRow.
 */
export const RowPrimary = ({
  children,
  style,
  order,
  paddingRightLeft,
}: RowProps) => (
  <div
    className={`core-row-primary${valEmpty(order, "order")}${valEmpty(
      paddingRightLeft,
      "padding-right-left"
    )}`}
    style={style}
  >
    {children}
  </div>
);

/* RowSecondary
 *
 * The secondary module in a PageRow.
 */
export const RowSecondary = ({
  children,
  style,
  order,
  paddingRightLeft,
}: RowProps) => (
  <div
    className={`core-row-secondary${valEmpty(order, "order")}${valEmpty(
      paddingRightLeft,
      "padding-right-left"
    )}`}
    style={style}
  >
    {children}
  </div>
);

/* Separator
 *
 * A horizontal spacer with a bottom border. General spacer for separating content by row.
 */
export const Separator = ({ children, style }: ComponentBase) => (
  <div className="core-separator" style={style}>
    {children}
  </div>
);

/* TopBar
 *
 * Positioned under titles for a Go Back button and other page header info.
 */
export const PageTopBar = ({ children, style }: ComponentBase) => (
  <div className="core-page-top-bar" style={style}>
    {children}
  </div>
);

/* ButtonRow
 *
 * A flex container for a row of buttons
 */
export const ButtonRow = ({
  children,
  style,
  verticalMargin,
}: ButtonRowProps) => (
  <div
    className={`core-button-row${valEmpty(verticalMargin, "vertical-margin")}`}
    style={style}
  >
    {children}
  </div>
);
