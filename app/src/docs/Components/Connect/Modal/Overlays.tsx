import { Connect } from "@packages/cloud-react/lib/recipes/Connect/Modal/Connect/";
import { Overlay } from "@packages/cloud-react/lib/overlay/Overlay";
import { useHelp } from "@packages/cloud-react/lib/recipes/Connect/HelpProvider";

export const Overlays = () => {
  const { status } = useHelp();
  return (
    <Overlay
      fallback={() => <div>error</div>}
      modals={{
        Connect,
      }}
      externalOverlayStatus={status}
    />
  );
};
