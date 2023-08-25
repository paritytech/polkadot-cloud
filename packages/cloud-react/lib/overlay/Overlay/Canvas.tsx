// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ModalScroll } from "../../base/modal/ModalScroll";
import { ModalContent } from "../../base/modal/ModalContent";
import { ModalCanvas } from "../../base/modal/ModalCanvas";
import { ModalCanvasContent } from "../../base/modal/ModalCanvasContent";
import { useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useOverlay } from "../../hooks";
import type { CanvasProps } from "../OverlayProvider/types";
import { ErrorBoundary } from "react-error-boundary";

export const Canvas = ({
  canvas,
  externalOverlayStatus,
  fallback: Fallback,
}: CanvasProps) => {
  const controls = useAnimation();
  const {
    setOpenOverlayInstances,
    activeOverlayInstance,
    setActiveOverlayInstance,
    modal: { status: modalStatus },
    canvas: {
      status,
      setCanvasStatus,
      config: { key },
    },
  } = useOverlay();

  const onIn = async () => {
    await controls.start("visible");
  };

  const onOut = async (closing: boolean) => {
    if (closing) {
      setOpenOverlayInstances("dec", "canvas");
      setActiveOverlayInstance(modalStatus === "open" ? "modal" : null);
    }
    await controls.start("hidden");

    if (closing) setCanvasStatus("closed");
  };

  // Control dim help status change.
  useEffect(() => {
    if (externalOverlayStatus === "open" && status === "open") onOut(false);

    if (externalOverlayStatus === "closing") {
      if (activeOverlayInstance === "canvas") {
        setCanvasStatus("open");
        onIn();
      }
    }
  }, [externalOverlayStatus]);

  useEffect(() => {
    // canvas has been opened - fade in.
    if (status === "open") {
      onIn();
    }
    // canvas closure triggered - fade out.
    if (status === "closing") {
      onOut(true);
    }
  }, [status]);

  if (status === "closed") {
    return <></>;
  }

  const ActiveCanvas: FC | null = canvas?.[key] || null;

  return (
    <ModalCanvas
      initial={{
        opacity: 0,
      }}
      animate={controls}
      transition={{
        duration: 0.15,
      }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <ModalScroll>
        <ModalContent>
          <ModalCanvasContent>
            <ErrorBoundary FallbackComponent={Fallback}>
              {ActiveCanvas && <ActiveCanvas />}
            </ErrorBoundary>
          </ModalCanvasContent>
        </ModalContent>
      </ModalScroll>
    </ModalCanvas>
  );
};
