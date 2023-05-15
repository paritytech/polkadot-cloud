/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { FunctionComponent, SVGProps } from "react";

// eslint-disable-next-line
export type AnyJson = any;

// eslint-disable-next-line
export type AnyObject = any;

// eslint-disable-next-line
export type AnyFunction = any;

// eslint-disable-next-line
export type AnyApi = any;

// eslint-disable-next-line
export type Any = any;

export type MaybeAccount = string | null;

export enum NetworkName {
  Polkadot = "polkadot",
  Kusama = "kusama",
  Westend = "westend",
}

export interface Networks {
  [key: string]: Network;
}

export type Theme = "light" | "dark";

export interface ThemeContextInterface {
  toggleTheme: (str?: Theme) => void;
  mode: Theme;
}

type NetworkColor =
  | "primary"
  | "secondary"
  | "stroke"
  | "transparent"
  | "pending";

export interface Network {
  name: string;
  endpoints: {
    rpc: string;
    lightClient: Any;
  };
  colors: Record<NetworkColor, { [key in Theme]: string }>;
  subscanEndpoint: string;
  unit: string;
  units: number;
  ss58: number;
  brand: {
    icon: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    logo: {
      svg: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
      width: string;
    };
    inline: {
      svg: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
      size: string;
    };
  };
  api: {
    unit: string;
    priceTicker: string;
  };
  params: { [key: string]: number };
}
