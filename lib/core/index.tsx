// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { StyledComponentInterface } from "../types";
import { valEmpty } from "../utils";
import { RefObject, forwardRef } from "react";

export const Entry = ({
  children,
  style,
  className,
}: StyledComponentInterface) => (
  <div className={`core-entry${valEmpty(className, className)}`} style={style}>
    {children}
  </div>
);

export const Body = ({ children }: StyledComponentInterface) => {
  return <div className="body-interface">{children}</div>;
};

export const Main = forwardRef(
  ({ children }: StyledComponentInterface, ref: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="main-interface">
      {children}
    </div>
  )
);
Main.displayName = "Main";
