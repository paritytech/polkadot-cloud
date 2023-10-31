// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../buttons/Button";
import { useEffect } from "react";
import { useLedgerHardware } from "../../Providers/HardwareProviders/Ledger";
import { useHelp } from "../../Providers/HelpProvider";
import { Ledger as LogoSVG } from "@polkadot-cloud/assets/extensions/jsx/Ledger";
import type { AnyFunction } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";

export const Splash = ({ handleLedgerLoop }: AnyFunction) => {
  // TODO: Fix Translation
  const t = (s: string) => s;
  const {
    getStatusCodes,
    isPaired,
    getIsExecuting,
    setIsExecuting,
    pairDevice,
    getFeedback,
  } = useLedgerHardware();
  const { openHelp } = useHelp();
  const { replaceModal, setModalResize } = useOverlay().modal;

  const statusCodes = getStatusCodes();

  const initFetchAddress = async () => {
    const paired = await pairDevice();
    if (paired) {
      setIsExecuting(true);
      handleLedgerLoop();
    }
  };

  const fallbackMessage = t("checking");
  const feedback = getFeedback();
  const helpKey = feedback?.helpKey;

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
            text={t("back")}
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
          <h2>
            {feedback?.message || fallbackMessage}
            {helpKey ? (
              <Button
                type="help"
                marginLeft
                onClick={() => openHelp(helpKey)}
                background="secondary"
              />
            ) : null}
          </h2>

          {!getIsExecuting() ? (
            <>
              <h5>{t("ensureLedgerIsConnected")}</h5>
              <div className="button">
                <Button
                  type="secondary"
                  text={
                    statusCodes[0]?.statusCode === "DeviceNotConnected"
                      ? t("continue")
                      : t("tryAgain")
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
