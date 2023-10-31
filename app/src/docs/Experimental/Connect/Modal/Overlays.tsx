import { Connect } from "@packages/cloud-react/lib/recipes/Connect/Modal/Connect/";
import { Accounts } from "@packages/cloud-react/lib/recipes/Connect/Modal/Accounts/";
import { ImportLedger } from "@packages/cloud-react/lib/recipes/Connect/Modal/ImportLedger";
import { ImportVault } from "@packages/cloud-react/lib/recipes/Connect/Modal/ImportVault";
import { Overlay } from "@packages/cloud-react/lib/overlay/Overlay";
import { useHelp } from "@packages/cloud-react/lib/recipes/Connect/Providers/HelpProvider";

export const Overlays = () => {
  const { status } = useHelp();
  return (
    <Overlay
      fallback={() => <div>Fall back component</div>}
      modals={{
        Connect,
        Accounts,
        ImportLedger,
        ImportVault,
      }}
      externalOverlayStatus={status}
    />
  );
};
