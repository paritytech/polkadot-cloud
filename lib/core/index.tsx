// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";
import { RefObject, forwardRef } from "react";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry ${mode} ${network}`} style={style}>
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
