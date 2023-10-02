/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ExtensionsContext } from "./connect/ExtensionsProvider";
import { OverlayContext } from "./overlay/OverlayProvider";
import { AnyJson, AnyFunction } from "./types";
import { useContext, useEffect, useRef } from "react";

export const useOverlay = () => useContext(OverlayContext);

export const useExtensions = () => useContext(ExtensionsContext);

export const useEffectIgnoreInitial = (fn: AnyFunction, deps: AnyJson[]) => {
  const isInitial = useRef<boolean>(true);

  useEffect(
    () => {
      if (!isInitial.current) {
        fn();
      }
      isInitial.current = false;
    },
    deps ? [...deps] : undefined
  );
};
