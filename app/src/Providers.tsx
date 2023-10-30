/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AnyJson, AnyObject } from "@packages/utils/lib/types";
import { ReactNode } from "react";
import { ThemesProvider } from "./contexts/Theme";
import { UIProvider } from "./contexts/UI";
import { Theme } from "./Theme";

/*
 * A hook that wraps multiple context providers to a component and makes each parent context accessible.
 */
const withProviders =
  (...providers: AnyObject[]) =>
  (WrappedComponent: AnyObject) =>
  (props: AnyJson) =>
    providers.reduceRight(
      (acc: ReactNode, prov) => {
        let Provider = prov;
        if (Array.isArray(prov)) {
          Provider = prov[0];
          return <Provider {...prov[1]}>{acc}</Provider>;
        }

        return <Provider>{acc}</Provider>;
      },
      <WrappedComponent {...props} />
    );

export const Providers = withProviders(ThemesProvider, UIProvider)(Theme);
