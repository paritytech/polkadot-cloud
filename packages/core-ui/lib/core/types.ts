/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase, Network, ThemeMode } from "../types";
import React from "react";

export type EntryProps = ComponentBase & {
  // the theme mode.
  mode: ThemeMode;
  // the active network.
  network: Network;
};

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens.
  open: boolean;
  // whether side menu is in minimised state.
  minimised: boolean;
};

export type PageTitleProps = PageTitleTabsProps & {
  // title of the page.
  title?: string;
  // a button right next to the page title.
  button?: {
    // title of the button.
    title: string;
    // function of the button when it is clicked.
    onClick: () => void;
  };
};

export type PageTitleTabsProps = {
  // whether the title stick on the same position.
  sticky?: boolean;
  // an array of tab pages.
  tabs?: Array<PageTitleTabProps>;
};

export type PageTitleTabProps = {
  // whether the title stick on the same position.
  sticky?: boolean;
  // title of the tab button.
  title: string;
  // whether it is clicked.
  active: boolean;
  // it leads to the corresponding tab page.
  onClick: () => void;
  // a badge that can have a glance at before visting the tab page.
  badge?: string | number;
};

export type RowProps = ComponentBase & {
  // whether there is margin space vertically.
  yMargin?: boolean;
};

export type RowSectionProps = ComponentBase & {
  // the css order of the component for vertical layouts.
  vLast?: boolean;
  // true means padding on the left and false means padding on the right.
  hLast?: boolean;
  // true means the secondary element and  false means the primary one.
  secondary?: boolean;
};

export type TxProps = {
  // whether there is margin on top.
  margin?: boolean;
  // account type for the transaction signing.
  label: string;
  // account id
  name: string;
  // whether there is enough funds for the transaction.
  notEnoughFunds: boolean;
  // warning messgae.
  dangerMessage: string;
  // whether it needs manual sign like ledger.
  requiresManualSign: boolean;
  // ledger signing process.
  manualSign: React.ReactElement;
  // default signing process.
  defaultSign: React.ReactElement;
};
