/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AnyJson,
  ComponentBase,
  ComponentBaseWithClassName,
  DisplayFor,
} from "../utils/types";
import { ReactElement, ReactNode } from "react";

export type EntryProps = ComponentBase & {
  // the theme mode.
  mode: "light" | "dark";
  // the active theme.
  theme: string;
};

export type CardProps = ComponentBaseWithClassName & {
  children: ReactNode;
  animations?: AnyJson;
};

export type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

export type GridJustify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = ComponentBaseWithClassName & {
  column?: boolean;
  row?: boolean;
  alignItems?: GridItemsAlignment;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  sm?: GridSizes;
};

export type LoaderProps = {
  type?: "cube" | "line" | "dots";
  text?: string;
};

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens.
  open: boolean;
  // whether side menu is in minimised state.
  minimised: boolean;
  // optional width property to be applied to maximised side.
  width?: string | number;
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
  // signing component.
  SignerComponent: ReactElement;
  // display for.
  displayFor?: DisplayFor;
};
