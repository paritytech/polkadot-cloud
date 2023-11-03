// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../buttons/Button";
import { Polkicon } from "../../../../icons/Polkicon";
import { AccountInput } from "./AccountInput";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useImportedAccounts } from "../../Providers/ImportedAccountsProvider";
import { useOtherAccounts } from "../../Providers/OtherAccountsProvider";
import type { ExternalAccount } from "../../../../connect/types";
import type { ListWithInputProps } from "./types";

export const ReadOnly = ({ setInputOpen, inputOpen }: ListWithInputProps) => {
  const { accounts } = useImportedAccounts();
  const { setModalResize } = useOverlay().modal;
  const { forgetExternalAccounts, addExternalAccount, forgetOtherAccounts } =
    useOtherAccounts();

  // get all external accounts
  const externalAccountsOnly = accounts.filter(
    ({ source }) => source === "external"
  ) as ExternalAccount[];

  // get external accounts added by user
  const externalAccounts = externalAccountsOnly.filter(
    ({ addedBy }) => addedBy === "user"
  );

  // forget account
  const forgetAccount = (account: ExternalAccount) => {
    forgetExternalAccounts([account]);
    forgetOtherAccounts([account]);
    setModalResize();
  };
  return (
    <>
      <div className="action-with-button">
        <div>
          <FontAwesomeIcon icon={faChevronRight} transform="shrink-4" />
          <h3>Read Only Accounts</h3>
        </div>
        <div>
          <Button
            type="monoInvert"
            iconLeft={inputOpen ? faMinus : faPlus}
            text={!inputOpen ? "Add" : "Hide"}
            onClick={() => {
              setInputOpen(!inputOpen);
            }}
          />
        </div>
      </div>
      <div className="manual-accounts-wrapper">
        <div className="content">
          {inputOpen && (
            <AccountInput
              resetOnSuccess
              defaultLabel="Input Address"
              successCallback={async (value: string) => {
                addExternalAccount(value, "user");
                return true;
              }}
            />
          )}
          {externalAccounts.length ? (
            <div className="accounts">
              {externalAccounts.map((a, i) => (
                <div
                  className="manual-account"
                  key={`user_external_account_${i}`}
                >
                  <div>
                    <span>
                      <Polkicon address={a.address} size={26} />
                    </span>
                    <div className="text">
                      <h4>{a.address}</h4>
                    </div>
                  </div>
                  <Button
                    type="secondary"
                    text="Forget"
                    onClick={() => {
                      forgetAccount(a);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "0.5rem" }}>
              <h4>No Read Only Added</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
