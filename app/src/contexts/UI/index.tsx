// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useState, ReactNode, useContext, createContext } from "react";
import * as defaults from "./defaults";
import type { UIContextInterface } from "./types";

export const UIProvider = ({ children }: { children: ReactNode }) => {
  // side menu control
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const setSideMenu = (v: boolean) => {
    setSideMenuOpen(v);
  };

  return (
    <UIContext.Provider
      value={{
        setSideMenu,
        sideMenuOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const UIContext = createContext<UIContextInterface>(
  defaults.defaultUIContext
);

export const useUi = () => useContext(UIContext);
