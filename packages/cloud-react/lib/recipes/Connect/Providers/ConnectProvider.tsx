import { VaultHardwareProvider } from "./HardwareProviders/Vault";
import { LedgerHardwareProvider } from "./HardwareProviders/Ledger";
import { NotificationsProvider } from "./NotificationsProvider";
import { ExtensionsProvider } from "../../../connect/ExtensionsProvider";
import { ExtensionAccountsProvider } from "../../../connect/ExtensionAccountsProvider";
import { OtherAccountsProvider } from "./OtherAccountsProvider";
import { ImportedAccountsProvider } from "./ImportedAccountsProvider";
import { HelpProvider } from "./HelpProvider";
import { PromptProvider } from "./PromptProvider";
import { ConnectType, DappInfo } from "../Modal/Connect/types";
import { OverlayProvider } from "../../../overlay/OverlayProvider";

const provider = (prov, props = {}) => [prov, props];

export const ConnectProvider = ({ providers, children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i];
    children = <Provider {...props}>{children}</Provider>;
  }
  return children;
};

export const connectInfo = (appInfo: DappInfo, connInfo: ConnectType) => {
  const providers = [];
  providers.push(provider(NotificationsProvider));
  if (connInfo.hardwareActive) {
    providers.push(provider(LedgerHardwareProvider));
    providers.push(provider(VaultHardwareProvider));
  }
  providers.push(provider(ExtensionsProvider));
  providers.push(provider(ExtensionAccountsProvider, appInfo));
  providers.push(provider(OtherAccountsProvider));
  providers.push(provider(ImportedAccountsProvider));
  providers.push(provider(HelpProvider));
  providers.push(provider(PromptProvider));
  providers.push(provider(OverlayProvider));
  return providers;
};
