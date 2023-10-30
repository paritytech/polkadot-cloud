// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../buttons/Button";
import { Polkicon } from "../../../../icons/Polkicon";
import { useHelp } from "../../HelpProvider";
import { AccountInput } from "./AccountInput";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useImportedAccounts } from "../../ImportedAccountsProvider";
import { useOtherAccounts } from "../../OtherAccountsProvider";
import type { ExternalAccount } from "../../../../connect/types";
// import {
//   ActionWithButton,
//   ManualAccount,
//   ManualAccountsWrapper,
// } from "./Wrappers";
import type { ListWithInputProps } from "./types";

export const ReadOnly = ({ setInputOpen, inputOpen }: ListWithInputProps) => {
  // TODO Fix this: const { t } = useTranslation("modals");
  const t = (s: string) => s;
  const { openHelp } = useHelp();
  const { accounts } = useImportedAccounts();
  const { setModalResize } = useOverlay().modal;
  const { forgetExternalAccounts, addExternalAccount } = useOtherAccounts();

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
    setModalResize();
  };
  return (
    <>
      <div className="actionWithButton">
        <div>
          <FontAwesomeIcon icon={faChevronRight} transform="shrink-4" />
          <h3>{t("readOnlyAccounts")}</h3>
          <Button
            type="help"
            marginLeft
            onClick={() => openHelp("Read Only Accounts")}
          />
        </div>
        <div>
          <Button
            type="monoInvert"
            iconLeft={inputOpen ? faMinus : faPlus}
            text={!inputOpen ? t("add") : t("hide")}
            onClick={() => {
              setInputOpen(!inputOpen);
            }}
          />
        </div>
      </div>
      <div className="manualAccountsWrapper">
        <div className="content">
          {inputOpen && (
            <AccountInput
              resetOnSuccess
              defaultLabel={t("inputAddress")}
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
                  className="manualAccount"
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
                    text={t("forget")}
                    onClick={() => {
                      forgetAccount(a);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "0.5rem" }}>
              <h4>{t("noReadOnlyAdded")}</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
