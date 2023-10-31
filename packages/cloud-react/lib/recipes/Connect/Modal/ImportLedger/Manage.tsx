/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { HardwareStatusBar } from "../../../../base/hardware/HardwareStatusBar";
import { useLedgerHardware } from "../../Providers/HardwareProviders/Ledger";
import { getLedgerApp } from "../../Providers/HardwareProviders/Utils";
import { useHelp } from "../../Providers/HelpProvider";
import { usePrompt } from "../../Providers/PromptProvider";
import { Ledger } from "@polkadot-cloud/assets/extensions/jsx/Ledger";
import { Heading } from "../ImportHardwareCommon/Heading";
import type { AnyJson } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { Addresess } from "./Addresses";
import { Reset } from "./Reset";

export const Manage = ({
  addresses,
  handleLedgerLoop,
  removeLedgerAddress,
  network = "polkadot",
}: AnyJson) => {
  const { setIsExecuting, getIsExecuting, resetStatusCodes, getFeedback } =
    useLedgerHardware();
  const { openPromptWith } = usePrompt();
  const { replaceModal } = useOverlay().modal;
  const { openHelp } = useHelp();

  const { appName, Icon } = getLedgerApp(network);
  const isExecuting = getIsExecuting();

  const fallbackMessage = `LedgerAccounts`;
  const feedback = getFeedback();
  const helpKey = feedback?.helpKey;

  return (
    <>
      <Heading
        connectTo="Ledger"
        title={appName}
        Icon={Icon}
        disabled={!addresses.length}
        handleReset={() => {
          openPromptWith(
            <Reset removeLedgerAddress={removeLedgerAddress} />,
            "small"
          );
        }}
      />
      <Addresess
        addresses={addresses}
        handleLedgerLoop={handleLedgerLoop}
        removeLedgerAddress={removeLedgerAddress}
      />
      <HardwareStatusBar
        show
        Icon={Ledger}
        text={feedback?.message || fallbackMessage}
        help={
          helpKey
            ? {
                helpKey,
                handleHelp: openHelp,
              }
            : undefined
        }
        inProgress={isExecuting}
        handleCancel={() => {
          setIsExecuting(false);
          resetStatusCodes();
        }}
        handleDone={() =>
          replaceModal({ key: "Connect", options: { disableScroll: true } })
        }
        t={{
          tDone: "Done",
          tCancel: "Cancel",
        }}
      />
    </>
  );
};
