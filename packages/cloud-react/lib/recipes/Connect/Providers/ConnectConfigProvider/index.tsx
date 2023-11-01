// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ConnectConfigContextInterface, ConnectType, DappInfo } from "./types";
import * as defaults from "./defaults";
import { useActiveAccounts } from "../ActiveAccountsProvider";

export const ConnectConfigProvider = ({
  children,
  wallets,
  dappInfo,
}: {
  children: ReactNode;
  wallets: ConnectType;
  dappInfo: DappInfo;
}) => {
  const { activeAccount, setActiveAccount } = useActiveAccounts();

  const [dappName] = useState<string>(dappInfo.dappName);
  const [network, setNetwork] = useState<string>(
    dappInfo.network || "polkadot"
  );
  const [ss58, setSs58] = useState<number>(dappInfo.ss58 || 0);
  const [hardwareActive] = useState<boolean>(wallets.hardwareActive);
  const [webActive] = useState<boolean>(wallets.webActive);
  const [devActive] = useState<boolean>(wallets.devActive);

  useEffect(() => {
    setNetwork(dappInfo.network);
    setSs58(dappInfo.ss58);
  }, [dappInfo]);

  return (
    <ConnectConfigContext.Provider
      value={{
        dappName,
        network,
        ss58,
        setNetwork,
        activeAccount,
        setActiveAccount,
        wallets: { hardwareActive, webActive, devActive },
      }}
    >
      {children}
    </ConnectConfigContext.Provider>
  );
};

export const ConnectConfigContext =
  createContext<ConnectConfigContextInterface>(
    defaults.defaultConnectConfigContext
  );

export const useConnectConfig = () => useContext(ConnectConfigContext);
