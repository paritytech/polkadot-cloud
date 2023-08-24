/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useRef, useState } from "react";
import { PageTitleProps } from "../../types";
import { valEmpty } from "../../../utils";
import { ButtonSecondary } from "../../../buttons/ButtonSecondary";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { PageTitleTabs } from "../PageTitleTabs";
import "@polkadot-cloud/core/css/base/structure/PageTitle/index.css";

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
      <div className="core-page-title-hide-scrollable" />
      <header
        ref={ref}
        className={`core-page-title${valEmpty(sticky, "sticky")}`}
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
