/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AnyJson, AnyFunction } from "../types";
import { useEffect, useRef } from "react";

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
