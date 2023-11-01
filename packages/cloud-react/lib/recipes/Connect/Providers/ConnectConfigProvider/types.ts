// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Any } from "../../../../utils/types";
import { Dispatch, SetStateAction } from "react";

export interface ConnectConfigContextInterface {
  dappName: string;
  network: string;
  ss58: number;
  setNetwork: Dispatch<SetStateAction<string>>;
  activeAccount: Any;
  setActiveAccount: Any;
  wallets: {
    hardwareActive: boolean;
    webActive: boolean;
    devActive: boolean;
    readOnlyActive: boolean;
    proxiesActive: boolean;
  };
}

export interface DappInfo {
  dappName: string;
  network: string;
  ss58: number;
  activeAccount?: Any;
  setActiveAccount?: Any;
}

export interface ConnectType {
  hardwareActive?: boolean;
  webActive?: boolean;
  devActive?: boolean;
  proxiesActive?: boolean;
  readOnlyActive?: boolean;
}
