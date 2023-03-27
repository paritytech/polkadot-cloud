// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";
import { RefObject, forwardRef } from "react";
import { valOr } from "../utils";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export type SideProps = ComponentBase & {
  open: number;
  minimised: number;
};

export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="body-interface" style={style}>
      {children}
    </div>
  );
};

export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="main-interface" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

export const Side = ({ children, style, open, minimised }: SideProps) => (
  <div
    className={`side-interface${valOr(open === 1, "zero", "minus")}${valOr(
      minimised === 1,
      "min",
      "max"
    )}`}
    style={style}
  >
    {children}
  </div>
);
