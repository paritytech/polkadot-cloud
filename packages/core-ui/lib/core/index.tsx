/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { valEmpty } from "../utils";
import {
  EntryProps,
  PageRowProps,
  SideProps,
  PageTitleProps,
  PageTitleTabProps,
} from "./types";
import { ButtonSecondary } from "lib/buttons/ButtonSecondary";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ButtonTab } from "lib/buttons/ButtonTab";

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
        className={`core-page-title${valEmpty(sticky, "sticky")}`}
      >
        <div className="page-padding">
          <section className="title">
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              {button && (
                <ButtonSecondary
                  text={button.title}
                  onClick={() => button.onClick()}
                  iconLeft={faBars}
                  iconTransform={"shrink-4"}
                />
              )}
            </div>
          </section>
          {tabs.length > 0 && <PageTitleTabs sticky={sticky} tabs={tabs} />}
        </div>
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
        {tabs.map((tab: PageTitleTabProps, i: number) => (
          <ButtonTab
            active={!!tab.active}
            key={`page_tab_${i}`}
            onClick={() => tab.onClick()}
            title={tab.title}
          />
        ))}
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
export const PageRow = ({
  children,
  style,
  noVerticalMargin,
}: PageRowProps) => (
  <div
    className={`core-page-row page-padding${valEmpty(
      noVerticalMargin,
      "no-vertical-margin"
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
