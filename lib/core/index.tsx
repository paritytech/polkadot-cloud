// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, ComponentBaseWithClassName } from "../types";
import { valEmpty } from "../utils";
import { RefObject, forwardRef } from "react";

export const Entry = ({
  children,
  style,
  className,
}: ComponentBaseWithClassName) => (
  <div className={`core-entry${valEmpty(className, className)}`} style={style}>
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
