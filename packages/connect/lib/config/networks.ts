// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as Sc from "@substrate/connect";
import { ReactComponent as KusamaIconSVG } from "./assets/img/kusama_icon.svg";
import { ReactComponent as KusamaInlineSVG } from "./assets/img/kusama_inline.svg";
import { ReactComponent as KusamaLogoSVG } from "./assets/img/kusama_logo.svg";
import { ReactComponent as PolkadotIconSVG } from "./assets/img/polkadot_icon.svg";
import { ReactComponent as PolkadotInlineSVG } from "./assets/img/polkadot_inline.svg";
import { ReactComponent as PolkadotLogoSVG } from "./assets/img/polkadot_logo.svg";
import { ReactComponent as WestendIconSVG } from "./assets/img/westend_icon.svg";
import { ReactComponent as WestendInlineSVG } from "./assets/img/westend_inline.svg";
import { ReactComponent as WestendLogoSVG } from "./assets/img/westend_logo.svg";
import { Networks } from "../types";
import { DefaultParams } from "./consts";

/*
 * Network Configuration
 */
export const NetworkList: Networks = {
  polkadot: {
    name: "polkadot",
    endpoints: {
      rpc: "wss://apps-rpc.polkadot.io",
      lightClient: Sc.WellKnownChain.polkadot,
    },
    colors: {
      primary: {
        light: "rgb(211, 48, 121)",
        dark: "rgb(211, 48, 121)",
      },
      secondary: {
        light: "#552bbf",
        dark: "#6d39ee",
      },
      stroke: {
        light: "rgb(211, 48, 121)",
        dark: "rgb(211, 48, 121)",
      },
      transparent: {
        light: "rgb(211, 48, 121, 0.05)",
        dark: "rgb(211, 48, 121, 0.05)",
      },
      pending: {
        light: "rgb(211, 48, 121, 0.33)",
        dark: "rgb(211, 48, 121, 0.33)",
      },
    },
    subscanEndpoint: "https://polkadot.api.subscan.io",
    unit: "DOT",
    units: 10,
    ss58: 0,
    brand: {
      icon: PolkadotIconSVG,
      logo: {
        svg: PolkadotLogoSVG,
        width: "7.2em",
      },
      inline: {
        svg: PolkadotInlineSVG,
        size: "1.05em",
      },
    },
    api: {
      unit: "DOT",
      priceTicker: "DOTUSDT",
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.75,
    },
  },
  kusama: {
    name: "kusama",
    endpoints: {
      rpc: "wss://kusama-rpc.polkadot.io",
      lightClient: Sc.WellKnownChain.ksmcc3,
    },
    colors: {
      primary: {
        light: "rgb(31, 41, 55)",
        dark: "rgb(126, 131, 141)",
      },
      secondary: {
        light: "rgb(31, 41, 55)",
        dark: "rgb(141, 144, 150)",
      },
      stroke: {
        light: "#4c4b63",
        dark: "#d1d1db",
      },
      transparent: {
        light: "rgb(51,51,51,0.05)",
        dark: "rgb(102,102,102, 0.05)",
      },
      pending: {
        light: "rgb(51,51,51,0.33)",
        dark: "rgb(102,102,102, 0.33)",
      },
    },
    subscanEndpoint: "https://kusama.api.subscan.io",
    unit: "KSM",
    units: 12,
    ss58: 2,
    brand: {
      icon: KusamaIconSVG,
      logo: {
        svg: KusamaLogoSVG,
        width: "7.2em",
      },
      inline: {
        svg: KusamaInlineSVG,
        size: "1.35em",
      },
    },
    api: {
      unit: "KSM",
      priceTicker: "KSMUSDT",
    },
    params: {
      ...DefaultParams,
      auctionAdjust: 0.3 / 60,
      auctionMax: 60,
      stakeTarget: 0.75,
    },
  },
  westend: {
    name: "westend",
    endpoints: {
      rpc: "wss://westend-rpc.polkadot.io",
      lightClient: Sc.WellKnownChain.westend2,
    },
    colors: {
      primary: {
        light: "#da4e71",
        dark: "#da4e71",
      },
      secondary: {
        light: "#de6a50",
        dark: "#d7674e",
      },
      stroke: {
        light: "#da4e71",
        dark: "#da4e71",
      },
      transparent: {
        light: "rgb(218, 78, 113, 0.05)",
        dark: "rgb(218, 78, 113, 0.05)",
      },
      pending: {
        light: "rgb(218, 78, 113, 0.33)",
        dark: "rgb(218, 78, 113, 0.33)",
      },
    },
    subscanEndpoint: "https://westend.api.subscan.io",
    unit: "WND",
    units: 12,
    ss58: 42,
    brand: {
      icon: WestendIconSVG,
      logo: {
        svg: WestendLogoSVG,
        width: "7.1em",
      },
      inline: {
        svg: WestendInlineSVG,
        size: "0.96em",
      },
    },
    api: {
      unit: "DOT",
      priceTicker: "DOTUSDT",
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.75,
    },
  },
};
