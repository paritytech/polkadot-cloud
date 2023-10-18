// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { CanvasScroll } from "../../base/modal/CanvasScroll";
import { ModalContent } from "../../base/modal/ModalContent";
import { CanvasContainer } from "../../base/modal/CanvasContainer";
import { CanvasContent } from "../../base/modal/CanvasContent";
import { useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { useOverlay } from "../OverlayProvider/useOverlay";
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
      config: { key, size, scroll },
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

    if (externalOverlayStatus === "closing")
      if (activeOverlayInstance === "canvas") {
        setCanvasStatus("open");
        onIn();
      }
  }, [externalOverlayStatus]);

  // Control fade in and out on opening and closing states.
  useEffect(() => {
    if (status === "open") onIn();
    if (status === "closing") onOut(true);
  }, [status]);

  const ActiveCanvas: FC | null = canvas?.[key] || null;

  return (
    <>
      {status === "closed" ? null : (
        <CanvasContainer
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
          <CanvasScroll size={size} scroll={scroll || false}>
            <ModalContent canvas>
              <CanvasContent>
                <ErrorBoundary FallbackComponent={Fallback}>
                  {ActiveCanvas && <ActiveCanvas />}
                </ErrorBoundary>
              </CanvasContent>
            </ModalContent>
          </CanvasScroll>
        </CanvasContainer>
      )}
    </>
  );
};
