// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from "@polkadot/api";
import { ScProvider } from "@polkadot/rpc-provider/substrate-connect";
import * as Sc from "@substrate/connect";
import BigNumber from "bignumber.js";
import { NetworkList } from "../../config/networks";
import {
  FallbackBondingDuration,
  FallbackEpochDuration,
  FallbackExpectedBlockTime,
  FallbackMaxElectingVoters,
  FallbackMaxNominations,
  FallbackNominatorRewardedPerValidator,
  FallbackSessionsPerEra,
} from "../../config/consts";
import {
  APIConstants,
  APIContextInterface,
  ApiStatus,
  NetworkState,
} from "./types";
import React, { useEffect, useState } from "react";
import { Network, NetworkName } from "../../types";
import { extractUrlValue, rmCommas, varToUrlHash } from "@polkadotcloud/utils";
import * as defaults from "./defaults";

export const APIContext = React.createContext<APIContextInterface>(
  defaults.defaultApiContext
);

export const useApi = () => React.useContext(APIContext);

export const APIProvider = ({ children }: { children: React.ReactNode }) => {
  // Get the initial network and prepare meta tags if necessary.
  const getInitialNetwork = () => {
    const urlNetworkRaw = extractUrlValue("n");

    const urlNetworkValid = !!Object.values(NetworkList).find(
      (n: Network) => n.name === urlNetworkRaw
    );

    // use network from url if valid.
    if (urlNetworkValid) {
      const urlNetwork = urlNetworkRaw as NetworkName;

      if (urlNetworkValid) {
        return urlNetwork;
      }
    }
    // fallback to localStorage network if there.
    const localNetwork: NetworkName = localStorage.getItem(
      "network"
    ) as NetworkName;
    const localNetworkValid = !!Object.values(NetworkList).find(
      (n: Network) => n.name === localNetwork
    );
    return localNetworkValid ? localNetwork : NetworkName.Polkadot;
  };

  // handle network switching
  const switchNetwork = async (name: NetworkName, lightClient: boolean) => {
    if (lightClient) {
      localStorage.setItem("light_client", lightClient ? "true" : "");
    } else {
      localStorage.removeItem("light_client");
    }
    setIsLightClient(lightClient);

    // update url `n` if needed.
    varToUrlHash("n", name, false);

    // disconnect api if not null
    if (api) {
      await api.disconnect();
    }
    setApi(null);
    setApiStatus("connecting");
    connect(name, lightClient);
  };

  // Store povider instance.
  const [provider, setProvider] = useState<WsProvider | ScProvider | null>(
    null
  );

  // Store whether in light client mode.
  const [isLightClient, setIsLightClient] = useState<boolean>(
    !!localStorage.getItem("light_client")
  );

  // API instance state.
  const [api, setApi] = useState<ApiPromise | null>(null);

  // Store the initial active network.
  const initialNetwork = getInitialNetwork();
  const [network, setNetwork] = useState<NetworkState>({
    name: initialNetwork,
    meta: NetworkList[initialNetwork],
  });

  // Store network constants.
  const [consts, setConsts] = useState<APIConstants>(defaults.consts);

  // Store API connection status.
  const [apiStatus, setApiStatus] = useState<ApiStatus>("disconnected");

  // Handle the initial connection
  useEffect(() => {
    if (!provider) {
      connect(getInitialNetwork(), isLightClient);
    }
  });

  // Provider event handlers
  useEffect(() => {
    if (provider) {
      provider.on("connected", () => {
        setApiStatus("connected");
      });
      provider.on("error", () => {
        setApiStatus("disconnected");
      });
      connectedCallback(provider);
    }
  }, [provider]);

  // connection callback.
  const connectedCallback = async (_provider: WsProvider | ScProvider) => {
    // initiate new api and set connected.
    const newApi = await ApiPromise.create({ provider: _provider });
    setApiStatus("connected");

    // store active network in localStorage.
    localStorage.setItem("network", String(network.name));

    // fetch constants.
    const result = await Promise.all([
      newApi.consts.staking.bondingDuration,
      newApi.consts.staking.maxNominations,
      newApi.consts.staking.sessionsPerEra,
      newApi.consts.staking.maxNominatorRewardedPerValidator,
      newApi.consts.electionProviderMultiPhase.maxElectingVoters,
      newApi.consts.babe.expectedBlockTime,
      newApi.consts.babe.epochDuration,
      newApi.consts.balances.existentialDeposit,
      newApi.consts.staking.historyDepth,
      newApi.consts.fastUnstake.deposit,
      newApi.consts.nominationPools.palletId,
    ]);

    // format constants.
    const bondDuration = result[0]
      ? new BigNumber(rmCommas(result[0].toString()))
      : FallbackBondingDuration;

    const maxNominations = result[1]
      ? new BigNumber(rmCommas(result[1].toString()))
      : FallbackMaxNominations;

    const sessionsPerEra = result[2]
      ? new BigNumber(rmCommas(result[2].toString()))
      : FallbackSessionsPerEra;

    const maxNominatorRewardedPerValidator = result[3]
      ? new BigNumber(rmCommas(result[3].toString()))
      : FallbackNominatorRewardedPerValidator;

    const maxElectingVoters = result[4]
      ? new BigNumber(rmCommas(result[4].toString()))
      : FallbackMaxElectingVoters;

    const expectedBlockTime = result[5]
      ? new BigNumber(rmCommas(result[5].toString()))
      : FallbackExpectedBlockTime;

    const epochDuration = result[6]
      ? new BigNumber(rmCommas(result[6].toString()))
      : FallbackEpochDuration;

    const existentialDeposit = result[7]
      ? new BigNumber(rmCommas(result[7].toString()))
      : new BigNumber(0);

    const historyDepth = result[8]
      ? new BigNumber(rmCommas(result[8].toString()))
      : new BigNumber(0);

    const fastUnstakeDeposit = result[9]
      ? new BigNumber(rmCommas(result[9].toString()))
      : new BigNumber(0);

    const poolsPalletId = result[10] ? result[10].toU8a() : new Uint8Array(0);

    setApi(newApi);
    setConsts({
      bondDuration,
      maxNominations,
      sessionsPerEra,
      maxNominatorRewardedPerValidator,
      historyDepth,
      maxElectingVoters,
      epochDuration,
      expectedBlockTime,
      poolsPalletId,
      existentialDeposit,
      fastUnstakeDeposit,
    });
  };

  // connect function sets provider and updates active network.
  const connect = async (name: NetworkName, lc?: boolean) => {
    const { endpoints } = NetworkList[name];

    let newProvider;
    switch (lc) {
      case true:
        newProvider = new ScProvider(Sc, endpoints.lightClient);
        await newProvider.connect({ forceEmbeddedNode: true });
        break;
      default:
        newProvider = new WsProvider(endpoints.rpc);
    }

    setProvider(newProvider);
    setNetwork({
      name,
      meta: NetworkList[name],
    });
  };

  return (
    <APIContext.Provider
      value={{
        connect,
        switchNetwork,
        api,
        consts,
        isReady: apiStatus === "connected" && api !== null,
        network: network.meta,
        apiStatus,
        isLightClient,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
