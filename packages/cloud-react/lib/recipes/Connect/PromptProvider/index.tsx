// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useState, ReactNode, createContext, useContext } from "react";
import { defaultPromptContext } from "./defaults";
import type { PromptContextInterface } from "./types";
import { Any } from "../../../utils/types";

export const PromptProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<Any>({
    size: "large",
    status: 0,
    Prompt: null,
  });

  const setPrompt = (Prompt: Any) => {
    setState({
      ...state,
      Prompt,
    });
  };

  const setStatus = (status: number) => {
    setState({
      ...state,
      status,
      dismissOpen: status !== 0,
    });
  };

  const openPromptWith = (Prompt: Any, size = "small") => {
    setState({
      ...state,
      size,
      Prompt,
      status: 1,
    });
  };

  const closePrompt = () => {
    setState({
      ...state,
      status: 0,
      Prompt: null,
    });
  };

  return (
    <PromptContext.Provider
      value={{
        openPromptWith,
        closePrompt,
        setStatus,
        setPrompt,
        size: state.size,
        status: state.status,
        Prompt: state.Prompt,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export const PromptContext =
  createContext<PromptContextInterface>(defaultPromptContext);

export const usePrompt = () => useContext(PromptContext);
