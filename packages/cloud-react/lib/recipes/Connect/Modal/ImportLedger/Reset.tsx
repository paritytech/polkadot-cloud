/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "../../../../buttons/Button";
import { useLedgerHardware } from "../../Hardware/Ledger";
import { getLocalLedgerAddresses } from "../../Hardware/Utils";
import type { LedgerAddress } from "../../Hardware/types";
import { usePrompt } from "../../PromptProvider";

import type { AnyJson } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useOtherAccounts } from "../../OtherAccountsProvider";
import type { LedgerAccount } from "../../../../connect/types";

import "./index.scss";

export const Reset = ({ removeLedgerAddress }: AnyJson) => {
  // TODO: Fix translation
  const t = (s: string) => s;
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
      <h3>{t("resetLedgerAccounts")}</h3>
      <p>{t("ledgerWillBeReset")}</p>
      <div className="footer">
        <Button
          type="monoInvert"
          text={t("cancel")}
          onClick={() => setStatus(0)}
        />
        <Button
          type="mono"
          text={t("confirmReset")}
          onClick={() => {
            removeAccounts();
            setStatus(0);
          }}
        />
      </div>
    </div>
  );
};
