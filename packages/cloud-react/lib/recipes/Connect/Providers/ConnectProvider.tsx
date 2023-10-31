import { VaultHardwareProvider } from "./HardwareProviders/Vault";
import { LedgerHardwareProvider } from "./HardwareProviders/Ledger";
import { NotificationsProvider } from "./NotificationsProvider";
import { ExtensionsProvider } from "../../../connect/ExtensionsProvider";
import { ExtensionAccountsProvider } from "../../../connect/ExtensionAccountsProvider";
import { OtherAccountsProvider } from "./OtherAccountsProvider";
import { ImportedAccountsProvider } from "./ImportedAccountsProvider";
import { HelpProvider } from "./HelpProvider";
import { PromptProvider } from "./PromptProvider";
import { Any } from "../../../utils/types";

const provider = (prov, props = {}) => [prov, props];

export const ConnectProvider = ({ providers, children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};

export const connectInfo = (
  dappName: string,
  network: string,
  ss58: number,
  activeAccount: Any,
  setActiveAccount: Any,
  hardwareWallets: boolean
) => {
  const providers = [];
  providers.push(provider(NotificationsProvider));
  if (hardwareWallets) {
    providers.push(provider(LedgerHardwareProvider));
    providers.push(provider(VaultHardwareProvider));
  }
  providers.push(provider(ExtensionsProvider));
  providers.push(
    provider(ExtensionAccountsProvider, {
      dappName,
      network,
      ss58,
      activeAccount,
      setActiveAccount,
    })
  );
  providers.push(provider(OtherAccountsProvider));
  providers.push(provider(ImportedAccountsProvider));
  providers.push(provider(HelpProvider));
  providers.push(provider(PromptProvider));
  return providers;
};
