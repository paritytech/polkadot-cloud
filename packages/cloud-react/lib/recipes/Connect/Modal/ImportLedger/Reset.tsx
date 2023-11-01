/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "../../../../buttons/Button";
import { useLedgerHardware } from "../../Providers/HardwareProviders/Ledger";
import { getLocalLedgerAddresses } from "../../Providers/HardwareProviders/Utils";
import type { LedgerAddress } from "../../Providers/HardwareProviders/types";
import { usePrompt } from "../../Providers/PromptProvider";

import type { AnyJson } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useOtherAccounts } from "../../Providers/OtherAccountsProvider";
import type { LedgerAccount } from "../../../../connect/types";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/ImportLedger/index.css";

export const Reset = ({ removeLedgerAddress }: AnyJson) => {
  const { setStatus } = usePrompt();
  const { replaceModal } = useOverlay().modal;
  const { forgetOtherAccounts } = useOtherAccounts();
  const { ledgerAccounts, removeLedgerAccount } = useLedgerHardware();

  const removeAccounts = () => {
    // Remove imported Ledger accounts.
    ledgerAccounts.forEach((account: LedgerAccount) => {
      removeLedgerAccount(account.address);
    });
    forgetOtherAccounts(ledgerAccounts);

    // Remove local Ledger addresses.
    getLocalLedgerAddresses().forEach((address: LedgerAddress) => {
      removeLedgerAddress(address.address);
    });

    // Go back to Connect modal.
    replaceModal({ key: "Connect", options: { disableScroll: true } });
  };

  return (
    <div className="confirm-wrapper">
      <h3>Reset Ledger Accounts</h3>
      <p>Ledger Will Be Reset</p>
      <div className="footer">
        <Button type="monoInvert" text="Cancel" onClick={() => setStatus(0)} />
        <Button
          type="mono"
          text="Confirm Reset"
          onClick={() => {
            removeAccounts();
            setStatus(0);
          }}
        />
      </div>
    </div>
  );
};
