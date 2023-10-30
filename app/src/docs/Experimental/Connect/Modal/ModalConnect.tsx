/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import { useOverlay } from "@packages/cloud-react/lib/overlay/OverlayProvider/useOverlay";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { Prompt } from "@packages/cloud-react/lib/recipes/Connect/Modal/Prompt";
import { Overlays } from "./Overlays";

export const ModalConnect = () => {
  const code = ``;

  const { openModal } = useOverlay().modal;

  return (
    <>
      <Prompt />
      <Overlays />
      <Demo showThemes={false} centered>
        <div className="svg-box">
          <Button
            type="primary"
            text={"Connect"}
            iconTransform="grow-1"
            onClick={() => {
              openModal({ key: "Connect" });
            }}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
