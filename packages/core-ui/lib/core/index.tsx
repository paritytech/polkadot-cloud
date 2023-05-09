/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { RefObject, forwardRef, useEffect, useRef, useState } from "react";
import { valEmpty, valOr } from "../utils";
import {
  EntryProps,
  RowProps,
  SideProps,
  PageTitleProps,
  PageTitleTabProps,
  RowSectionProps,
  TxProps,
} from "./types";
import { ButtonSecondary } from "../buttons/ButtonSecondary";
import {
  faPenToSquare,
  faBars,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonTab } from "../buttons/ButtonTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="core-body" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Main
 * @summary A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="core-main" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

/**
 * @name Page
 * @summary
 * A motion.div that wraps every page. Transitions can be applied to this wrapper that will affect
 * the entire page.
 */
export const Page = ({ children, style }: ComponentBase) => {
  return (
    <div className="core-page" style={style}>
      {children}
    </div>
  );
};

/**
 * @name Side
 * @summary An element that houses the side menu and transitions to a toggle-able fixed overlay
 * on smaller screens.
 * @summary Handles maximised and minimised transitions.
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

/**
 * @name PageTitle
 * @summary
 * The element that wraps a page title. Determines the padding and position relative to top of
 * screen when the element is stuck.
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
    // unmount.
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
          <div className="right">
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

/**
 * @name PageTitleTabs
 * @summary The element in a page title. Inculding the ButtonTab.
 */
export const PageTitleTabs = ({ sticky, tabs = [] }: PageTitleProps) => (
  <section className={`core-page-title-tabs${valEmpty(sticky, "sticky")}`}>
    <div className="scroll">
      <div className="inner">
        {tabs.map(
          ({ active, onClick, title, badge }: PageTitleTabProps, i: number) => (
            <ButtonTab
              active={!!active}
              key={`page_tab_${i}`}
              onClick={() => onClick()}
              title={title}
              badge={badge}
            />
          )
        )}
      </div>
    </div>
  </section>
);

/**
 * @name HideScrollable
 * @summary
 * A fixed block that is used to hide scrollable content on smaller screens when a PageTitle is
 * fixed. Purely cosmetic. Applied in PageTitle.
 */
export const HideScrollable = ({ children, style }: ComponentBase) => (
  <div className="core-hide-scrollable" style={style}>
    {children}
  </div>
);

/**
 * @name PageRow
 * @summary Used to separate page content based on rows. Commonly used with RowPrimary and
 * RowSecondary.
 */
export const PageRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-page-row page-padding${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name Separator
 * @summary A horizontal spacer with a bottom border. General spacer for separating content by
 * row.
 */
export const Separator = ({ children, style }: ComponentBase) => (
  <div className="core-separator" style={style}>
    {children}
  </div>
);

/**
 * @name PageHeading
 * @summary Positioned under titles for a Go Back button and other page header info.
 */
export const PageHeading = ({ children, style }: ComponentBase) => (
  <div className="core-page-heading" style={style}>
    {children}
  </div>
);

/**
 * @name ButtonRow
 * @summary A flex container for a row of buttons.
 */
export const ButtonRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-button-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name RowSection
 * @summary The primary/secondary module in a PageRow.
 */
export const RowSection = ({
  children,
  style,
  vLast,
  hLast,
  secondary,
}: RowSectionProps) => (
  <div
    className={`${valOr(
      secondary,
      "core-row-secondary",
      "core-row-primary"
    )}${valEmpty(vLast, "v-last")}${valOr(hLast, "first", "last")}`}
    style={style}
  >
    {children}
  </div>
);

/**
 * @name Tx
 * @summary A wrapper to handle transaction submission.
 */
export const Tx = ({
  margin,
  label,
  name,
  notEnoughFunds,
  dangerMessage,
  SignerComponent,
}: TxProps) => (
  <div className={`tx${valEmpty(margin, "margin")}`}>
    <div className="inner">
      <p className="sign">
        <span className="badge">
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
          {label}
        </span>
        {name}
        {notEnoughFunds && (
          <span className="not-enough">
            / &nbsp;
            <FontAwesomeIcon
              icon={faWarning}
              className="danger"
              transform="shrink-1"
            />{" "}
            <span className="danger">{dangerMessage}</span>
          </span>
        )}
      </p>
      <section>{SignerComponent}</section>
    </div>
  </div>
);
