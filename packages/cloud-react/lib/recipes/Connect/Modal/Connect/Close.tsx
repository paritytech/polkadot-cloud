// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { Button } from "../../../../buttons/Button";

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
      <Button
        type="text"
        text={"X"}
        onClick={() => setModalStatus("closing")}
      />
    </div>
  );
};
