// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useConnectConfig } from "../../Providers/ConnectConfigProvider";
import { useLedgerHardware } from "../../Providers/HardwareProviders/Ledger";
import { getLedgerApp } from "../../Providers/HardwareProviders/Utils";
import { useTxMeta } from "../../Providers/TxMetaProvider";
import type { LederLoopProps } from "./types";

export const useLedgerLoop = ({ tasks, options, mounted }: LederLoopProps) => {
  const { network } = useConnectConfig();
  const { setIsPaired, getIsExecuting, getStatusCodes, executeLedgerLoop } =
    useLedgerHardware();
  const { getTxPayload, getPayloadUid } = useTxMeta();
  const { appName } = getLedgerApp(network);

  // Connect to Ledger device and perform necessary tasks.
  //
  // The tasks sent to the device depend on the current state of the import process.
  const handleLedgerLoop = async () => {
    // If the import modal is no longer open, cancel execution.
    if (!mounted()) {
      return;
    }
    // If the app is not open on-device, or device is not connected, cancel execution.
    // If we are to explore auto looping via an interval, this may wish to use `determineStatusFromCode` instead.
    if (["DeviceNotConnected"].includes(getStatusCodes()[0]?.statusCode)) {
      setIsPaired("unpaired");
    } else {
      // Get task options and execute the loop.
      const uid = getPayloadUid();
      const accountIndex = options?.accountIndex ? options.accountIndex() : 0;
      const payload = await getTxPayload();
      if (getIsExecuting()) {
        await executeLedgerLoop(appName, tasks, {
          uid,
          accountIndex,
          payload,
        });
      }
    }
  };

  return { handleLedgerLoop };
};
