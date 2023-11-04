// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../buttons/Button";
import { useEffect } from "react";
import { useLedgerHardware } from "../../Providers/HardwareProviders/Ledger";
import { Ledger as LogoSVG } from "@polkadot-cloud/assets/extensions/jsx/Ledger";
import type { AnyFunction } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";

export const Splash = ({ handleLedgerLoop }: AnyFunction) => {
  const {
    getStatusCodes,
    isPaired,
    getIsExecuting,
    setIsExecuting,
    pairDevice,
    getFeedback,
  } = useLedgerHardware();
  const { replaceModal, setModalResize } = useOverlay().modal;

  const statusCodes = getStatusCodes();

  const initFetchAddress = async () => {
    const paired = await pairDevice();
    if (paired) {
      setIsExecuting(true);
      handleLedgerLoop();
    }
  };

  const fallbackMessage = "Checking";
  const feedback = getFeedback();

  // Initialise listeners for Ledger IO.
  useEffect(() => {
    if (isPaired !== "paired") {
      pairDevice();
    }
  }, []);

  // Once the device is paired, start `handleLedgerLoop`.
  useEffect(() => {
    initFetchAddress();
  }, [isPaired]);

  // Resize modal on new message
  useEffect(() => setModalResize(), [statusCodes, feedback]);

  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <h1>
          <Button
            type="secondary"
            text="Back"
            iconLeft={faChevronLeft}
            iconTransform="shrink-3"
            onClick={async () =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
          />
        </h1>
      </div>
      <div className="splash-wrapper">
        <div className="icon">
          <div
            style={{ width: "20rem", height: "6rem" }}
            // opacity={mode === "dark" ? 0.5 : 0.1}
          >
            <LogoSVG />
          </div>
        </div>

        <div className="content">
          <h2>{feedback?.message || fallbackMessage}</h2>

          {!getIsExecuting() ? (
            <>
              <h5>Ensure Ledger Is Connected</h5>
              <div className="button">
                <Button
                  type="secondary"
                  text={
                    statusCodes[0]?.statusCode === "DeviceNotConnected"
                      ? "Continue"
                      : "TryAgain"
                  }
                  onClick={async () => initFetchAddress()}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
