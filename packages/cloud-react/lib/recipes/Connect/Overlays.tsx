import { Overlay } from "../../overlay/Overlay";
import { Accounts } from "./Modal/Accounts";
import { Connect } from "./Modal/Connect";
import { ImportLedger } from "./Modal/ImportLedger";
import { ImportVault } from "./Modal/ImportVault";
import { Prompt } from "./Modal/Prompt";
import { useConnectConfig } from "./Providers/ConnectConfigProvider";
import { useHelp } from "./Providers/HelpProvider";

export const Overlays = () => {
  const { status } = useHelp();
  const {
    wallets: { hardwareActive },
  } = useConnectConfig();

  const defaultModals = {
    Connect,
    Accounts,
  };
  const inputModals =
    hardwareActive || hardwareActive === undefined
      ? Object.assign({}, defaultModals, {
          ImportLedger,
          ImportVault,
        })
      : defaultModals;
  return (
    <>
      <Prompt />
      <Overlay
        fallback={() => (
          <div style={{ padding: "5rem" }}>
            <p>Fall back component</p>
          </div>
        )}
        modals={inputModals}
        externalOverlayStatus={status}
      />
    </>
  );
};
