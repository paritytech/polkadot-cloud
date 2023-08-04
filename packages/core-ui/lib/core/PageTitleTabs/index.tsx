/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonTab } from "../../buttons/ButtonTab";
import { PageTitleProps, PageTitleTabProps } from "../types";
import { valEmpty } from "../../utils";
import "./index.scss";

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
