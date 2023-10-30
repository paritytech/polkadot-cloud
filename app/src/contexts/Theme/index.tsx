// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { setStateWithRef } from "@polkadot-cloud/utils";
import { useState, useRef, ReactNode, createContext, useContext } from "react";
import { defaultThemeContext } from "./defaults";
import type { Mode, ThemeContextInterface } from "./types";

export const ThemesProvider = ({ children }: { children: ReactNode }) => {
  // Gets the stored theme mode from local storage, or defaults to system theme otherwise.
  const initial = (() => {
    const local = localStorage.getItem("mode") || "";

    if (!["light", "dark"].includes(local)) {
      const system =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

      localStorage.setItem("mode", system);
      return system;
    } else {
      return local as Mode;
    }
  })();

  // Store the currently active mode.
  const [mode, setMode] = useState<Mode>(initial);
  const modeRef = useRef(mode);

  // Store the current network theme.
  const [theme, setTheme] = useState<string>("polkadot-relay");

  // Automatically change theme on system change.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newMode = event.matches ? "dark" : "light";
      localStorage.setItem("mode", newMode);
      setStateWithRef(newMode, setMode, modeRef);
    });

  // Toggle the active mode.
  const toggleMode = (maybeTheme: Mode): void => {
    const newMode =
      maybeTheme || (modeRef.current === "dark" ? "light" : "dark");

    localStorage.setItem("mode", newMode);
    setStateWithRef(newMode, setMode, modeRef);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleMode,
        mode: modeRef.current,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext =
  createContext<ThemeContextInterface>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);
