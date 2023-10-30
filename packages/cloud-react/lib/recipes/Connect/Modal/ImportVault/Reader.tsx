// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Any } from "../../../../utils/types";
import { Button } from "../../../../buttons/Button";
import { isValidAddress } from "@polkadot-cloud/utils";
import { useEffect, useState } from "react";
import { useVaultHardware } from "../../Hardware/Vault";
import { usePrompt } from "../../PromptProvider";
import { formatAccountSs58 } from "../../Utils";
import { useOtherAccounts } from "../../OtherAccountsProvider";

import { QrScanSignature } from "../QRCode/ScanSignature";

export const Reader = () => {
  // TODO: Fix Translation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const t = (s: string) => s;

  // TODO: Fix the networks
  // const {
  //   networkData: { ss58 },
  // } = useNetwork();
  const ss58 = 0;

  const { addOtherAccounts } = useOtherAccounts();
  const { setStatus: setPromptStatus } = usePrompt();
  const { addVaultAccount, vaultAccountExists, vaultAccounts } =
    useVaultHardware();

  // Store data from QR Code scanner.
  const [qrData, setQrData] = useState<Any>(undefined);

  // Store QR data feedback.
  const [feedback, setFeedback] = useState<string>("");

  const handleQrData = (signature: string) => {
    setQrData(signature.split(":")?.[1] || "");
  };

  const valid =
    isValidAddress(qrData) &&
    !vaultAccountExists(qrData) &&
    !formatAccountSs58(qrData, ss58);

  // Reset QR data on open.
  useEffect(() => {
    setQrData(undefined);
  }, []);

  useEffect(() => {
    // Add account and close overlay if valid.
    if (valid) {
      const account = addVaultAccount(qrData, vaultAccounts.length);
      if (account) {
        addOtherAccounts([account]);
      }
      setPromptStatus(0);
    }

    // Display feedback.
    setFeedback(
      qrData === undefined
        ? `${t("waitingForQRCode")}`
        : isValidAddress(qrData)
        ? formatAccountSs58(qrData, ss58)
          ? `${t("differentNetworkAddress")}`
          : vaultAccountExists(qrData)
          ? `${t("accountAlreadyImported")}`
          : `${t("addressReceived")}`
        : `${t("invalidAddress")}`
    );
  }, [qrData]);

  return (
    <div className="qr-viewer-wrapper">
      <h3 className="title">{t("scanFromPolkadotVault")}</h3>
      <div className="viewer">
        <QrScanSignature
          size={279}
          onScan={({ signature }) => {
            handleQrData(signature);
          }}
        />
      </div>
      <div className="foot">
        <h3>{feedback}</h3>
        <div>
          <Button
            type="secondary"
            lg
            text={t("cancel")}
            onClick={() => setPromptStatus(0)}
          />
        </div>
      </div>
    </div>
  );
};
