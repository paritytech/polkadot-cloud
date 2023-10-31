// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useState, createContext, useContext } from "react";
import type { MaybeString } from "../../../../utils/types";
import { useEffectIgnoreInitial } from "../../../../base/hooks/useEffectIgnoreInitial";
import * as defaults from "./defaults";
import type {
  HelpContextInterface,
  HelpContextProps,
  HelpContextState,
  HelpStatus,
} from "./types";

export const HelpProvider = ({ children }: HelpContextProps) => {
  // help module state
  const [state, setState] = useState<HelpContextState>({
    status: "closed",
    definition: null,
  });

  // when fade out completes, reset active definiton
  useEffectIgnoreInitial(() => {
    if (state.status === "closed") {
      setState({
        ...state,
        definition: null,
      });
    }
  }, [state.status]);

  const setDefinition = (definition: MaybeString) => {
    setState({
      ...state,
      definition,
    });
  };

  const setStatus = (newStatus: HelpStatus) => {
    setState({
      ...state,
      status: newStatus,
    });
  };

  const openHelp = (definition: MaybeString) => {
    setState({
      ...state,
      definition,
      status: "open",
    });
  };

  const closeHelp = () => {
    setState({
      ...state,
      status: "closing",
    });
  };

  return (
    <HelpContext.Provider
      value={{
        openHelp,
        closeHelp,
        setStatus,
        setDefinition,
        status: state.status,
        definition: state.definition,
      }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export const HelpContext = createContext<HelpContextInterface>(
  defaults.defaultHelpContext
);

export const useHelp = () => useContext(HelpContext);
