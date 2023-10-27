import { Connect } from "@packages/cloud-react/lib/recipes/Connect/Modal/Connect/";
import { Accounts } from "@packages/cloud-react/lib/recipes/Connect/Modal/Accounts/";
import { Overlay } from "@packages/cloud-react/lib/overlay/Overlay";
import { useHelp } from "@packages/cloud-react/lib/recipes/Connect/HelpProvider";

export const Overlays = () => {
  const { status } = useHelp();
  return (
    <Overlay
      fallback={() => <div>error</div>}
      modals={{
        Connect,
        Accounts,
      }}
      externalOverlayStatus={status}
    />
  );
};
