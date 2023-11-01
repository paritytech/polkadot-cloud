/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const ProviderExample = () => {
  const code = `import {
    ExtensionsProvider,
    ExtensionAccountsProvider,
  } from '@polkadot-cloud/react/providers';

const AppWithProviders = () => {

  // Dapp identifier.
  const dappName = "My Dapp Name";
  // Active network, in lower case.
  const network = "polkadot";
  // SS58 prefix of the current network.
  const ss58 = 0;
  // Active account, if any.
  const activeAccount = null;
  // Setter for Dapp active account.
  const setActiveAccount = (a: string | null) => {
    setState({ ...state, activeAccount: a });
  };

  return (
    <ExtensionsProvider>
      <ExtensionAccountsProvider
        dappName={dappName}
        network={network}
        ss58={ss58}
        activeAccount={activeAccount}
        setActiveAccount={setActiveAccount}
      >
      <App />
    </ExtensionAccountsProvider>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
