// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";

export const Close = () => {
  const { setModalStatus } = useOverlay().modal;

  // TODO: Move the css to the right place
  return (
    <div
      style={{
        position: "absolute",
        right: "1.5rem",
        top: "1.5rem",
        zIndex: "2",
      }}
    >
      <button type="button" onClick={() => setModalStatus("closing")}>
        X
        {/* TODO: Fix tha X Close 
        <CrossSVG style={{ width: "1.25rem", height: "1.25rem" }} />
        */}
      </button>
    </div>
  );
};
