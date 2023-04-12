/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { valEmpty } from "../utils";
import {
  EntryProps,
  RowProps,
  SideProps,
  PageTitleProps,
  PageTitleTabProps,
} from "./types";
import { ButtonSecondary } from "../buttons/ButtonSecondary";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ButtonTab } from "../buttons/ButtonTab";

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
export const PageTitle = ({ title, button, tabs = [] }: PageTitleProps) => {
  const [sticky, setSticky] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setSticky(e.intersectionRatio < 1);
      },
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }
    // unmount
    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, [sticky]);

  return (
    <>
      <HideScrollable />
      <header
        ref={ref}
        className={`core-page-title page-padding${valEmpty(sticky, "sticky")}`}
      >
        <section className="title">
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            {button && (
              <ButtonSecondary
                text={button.title}
                onClick={() => button.onClick()}
                iconRight={faBars}
                iconTransform={"shrink-4"}
                lg
              />
            )}
          </div>
        </section>
        {tabs.length > 0 && <PageTitleTabs sticky={sticky} tabs={tabs} />}
      </header>
    </>
  );
};

PageTitle.displayName = "PageTitle";

/* PageTitleTabs
 *
 * The element in a page title. Inculding the ButtonTab.
 */
export const PageTitleTabs = ({ sticky, tabs = [] }: PageTitleProps) => (
  <section className={`core-page-title-tabs${valEmpty(sticky, "sticky")}`}>
    <div className="scroll">
      <div className="inner">
        {tabs.map(
          ({ active, onClick, title }: PageTitleTabProps, i: number) => (
            <ButtonTab
              active={!!active}
              key={`page_tab_${i}`}
              onClick={() => onClick()}
              title={title}
            />
          )
        )}
      </div>
    </div>
  </section>
);

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
export const PageRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-page-row page-padding${valEmpty(yMargin, "y-margin")}`}
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

/* PageHeading
 *
 * Positioned under titles for a Go Back button and other page header info.
 */
export const PageHeading = ({ children, style }: ComponentBase) => (
  <div className="core-page-top-bar" style={style}>
    {children}
  </div>
);

/* ButtonRow
 *
 * A flex container for a row of buttons
 */
export const ButtonRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-button-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);
