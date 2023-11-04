// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  faChevronRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../buttons/Button";
import { Fragment } from "react";
import { Polkicon } from "../../../../icons/Polkicon";
import { useProxies } from "../../Providers/ProxiesProvider";
import { AccountInput } from "./AccountInput";
import { useImportedAccounts } from "../../Providers/ImportedAccountsProvider";
import type { ListWithInputProps } from "./types";

export const Proxies = ({ setInputOpen, inputOpen }: ListWithInputProps) => {
  const { accounts } = useImportedAccounts();
  const { getAccount } = useImportedAccounts();
  const { delegates, handleDeclareDelegate } = useProxies();

  // Filter delegates to only show those who are imported in the dashboard.
  const importedDelegates = Object.fromEntries(
    Object.entries(delegates).filter(([delegate]) =>
      accounts.find((a) => a.address === delegate)
    )
  );
  return (
    <>
      <div className="action-with-button">
        <div>
          <FontAwesomeIcon icon={faChevronRight} transform="shrink-4" />
          <h3>Proxy Accounts</h3>
        </div>
        <div>
          <Button
            type="monoInvert"
            iconLeft={inputOpen ? faMinus : faPlus}
            text={!inputOpen ? "Declare" : "Hide"}
            onClick={() => {
              setInputOpen(!inputOpen);
            }}
          />
        </div>
      </div>
      <div className="manual-accounts-wrapper">
        <div className="content">
          {inputOpen && (
            <>
              <AccountInput
                resetOnSuccess
                defaultLabel="Input Delegator Address"
                successCallback={async (delegator) => {
                  const result = await handleDeclareDelegate(delegator);
                  return result;
                }}
              />
            </>
          )}
          {Object.entries(importedDelegates).length ? (
            <div className="accounts">
              {Object.entries(importedDelegates).map(
                ([delegate, delegators], i) => (
                  <Fragment key={`user_delegate_account_${i}}`}>
                    {delegators?.map(({ delegator, proxyType }, j) => (
                      <div
                        className="manual-account"
                        key={`user_delegate_${i}_delegator_${j}`}
                      >
                        <div>
                          <span>
                            <Polkicon address={delegate} size={26} />
                          </span>
                          <div className="text">
                            <h4 className="title">
                              <span>{proxyType} Proxy</span>
                              {getAccount(delegate)?.name || delegate}
                            </h4>
                            <h4 className="subtitle">
                              {delegator}
                              {/* {" "}For*/}
                            </h4>
                          </div>
                        </div>
                        <div />
                        <Button type="secondary" text="Declared" disabled />
                      </div>
                    ))}
                  </Fragment>
                )
              )}
            </div>
          ) : (
            <div style={{ padding: "0.5rem" }}>
              <h4>No Proxy Accounts Declared</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
