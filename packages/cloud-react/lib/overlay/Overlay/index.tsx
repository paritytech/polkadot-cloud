// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { OverlayProps } from "../OverlayProvider/types";
import { Modal } from "./Modal";
import { Canvas } from "./Canvas";
import { Background } from "./Background";

export const Overlay = ({
  modals = {},
  canvas = {},
  fallback,
  externalOverlayStatus,
}: OverlayProps) => {
  return (
    <>
      <Background externalOverlayStatus={externalOverlayStatus} />
      <Modal
        fallback={fallback}
        modals={modals}
        externalOverlayStatus={externalOverlayStatus}
      />
      <Canvas
        fallback={fallback}
        canvas={canvas}
        externalOverlayStatus={externalOverlayStatus}
      />
    </>
  );
};
