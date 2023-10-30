/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useEffect, useRef } from "react";
import { AnyFunction, AnyJson } from "../../../utils/types";

export const useEffectIgnoreInitial = (fn: AnyFunction, deps: AnyJson[]) => {
  const isInitial = useRef<boolean>(true);
  useEffect(
    () => {
      if (!isInitial.current) fn();
      isInitial.current = false;
    },
    deps ? [...deps] : undefined
  );
};
