import { Overlays } from "./Overlays";
import { useActiveAccounts } from "./Providers/ActiveAccountsProvider";
import { ConnectConfigProvider } from "./Providers/ConnectConfigProvider";
import { connectInfo, ConnectProvider } from "./Providers/ConnectProvider";
import type { ConnectType, DappInfo } from "./Modal/Connect/types";

export {
  ConnectConfigProvider,
  connectInfo,
  ConnectProvider,
  Overlays,
  useActiveAccounts,
};
export type { ConnectType, DappInfo };
