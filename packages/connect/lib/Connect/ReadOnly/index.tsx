// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonMonoInvert } from "@polkadotcloud/core-ui";
import { useConnect } from "../../contexts/Connect";
import { ExternalAccount, ImportedAccount } from "../../contexts/Connect/types";
import { ReadOnlyInput } from "../ReadOnlyInput";
import { ReadOnlyProps } from "../types";
import "../../../styles/index.scss";

export const ReadOnly = ({ setReadOnlyOpen, readOnlyOpen }: ReadOnlyProps) => {
  const { accounts, forgetAccounts } = useConnect();

  // get all external accounts
  const externalAccountsOnly = accounts.filter((a: ImportedAccount) => {
    return a.source === "external";
  }) as Array<ExternalAccount>;

  // get external accounts added by user
  const externalAccountsByUser = externalAccountsOnly.filter(
    (a: ExternalAccount) => a.addedBy === "user"
  );

  // forget account
  const forgetAccount = (account: ExternalAccount) => {
    forgetAccounts([account]);
  };
  return (
    <div className="readOnly">
      <h3>
        <ButtonMonoInvert
          iconLeft={readOnlyOpen ? faMinus : faPlus}
          text={!readOnlyOpen ? "add" : "hide"}
          onClick={() => {
            setReadOnlyOpen(!readOnlyOpen);
          }}
        />
      </h3>
      <div className="content">
        {readOnlyOpen && (
          <>
            <ReadOnlyInput />
            {externalAccountsByUser.length > 0 && (
              <h5>readOnlyAccount {externalAccountsByUser.length}</h5>
            )}
          </>
        )}
        {externalAccountsByUser.length ? (
          <div className="accounts">
            {externalAccountsByUser.map((a: ExternalAccount, i: number) => (
              <div key={`user_external_account_${i}`} className="account">
                <div>{a.address}</div>
                <ButtonMonoInvert
                  text="forget"
                  onClick={() => {
                    forgetAccount(a);
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
