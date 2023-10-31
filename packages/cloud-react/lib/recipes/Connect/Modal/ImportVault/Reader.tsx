// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Any } from "../../../../utils/types";
import { Button } from "../../../../buttons/Button";
import { isValidAddress } from "@polkadot-cloud/utils";
import { useEffect, useState } from "react";
import { useVaultHardware } from "../../Providers/HardwareProviders/Vault";
import { usePrompt } from "../../Providers/PromptProvider";
import { formatAccountSs58 } from "../../Utils";
import { useOtherAccounts } from "../../Providers/OtherAccountsProvider";

import { QrScanSignature } from "../QRCode/ScanSignature";
import { useConnectConfig } from "../../Providers/ConnectConfigProvider";

export const Reader = () => {
  const { ss58 } = useConnectConfig();

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
        ? `Waiting For QRCode`
        : isValidAddress(qrData)
        ? formatAccountSs58(qrData, ss58)
          ? `"Different Network Address`
          : vaultAccountExists(qrData)
          ? `Account Already Imported`
          : `Address Received`
        : `Invalid Address`
    );
  }, [qrData]);

  return (
    <div className="qr-viewer-wrapper">
      <h3 className="title">Scan From PolkadotVault</h3>
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
            text="Cancel"
            onClick={() => setPromptStatus(0)}
          />
        </div>
      </div>
    </div>
  );
};
