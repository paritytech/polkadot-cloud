// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft, faLinkSlash } from "@fortawesome/free-solid-svg-icons";
// import {
//   ActionItem,
//   ButtonPrimaryInvert,
//   ButtonText,
//   ModalCustomHeader,
//   ModalPadding,
// } from "@polkadot-cloud/react";
import { Fragment, useEffect, useState } from "react";

import { ActionItem } from "../../../../base/modal/ActionItem";

// TODO: No idea what to do
// import { useBalances } from "contexts/Balances";
// import { useBonded } from "contexts/Bonded";

import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useEffectIgnoreInitial } from "../../../../base/hooks/useEffectIgnoreInitial";
import { useExtensions } from "../../../../connect/ExtensionsProvider/useExtensions";

// import { usePoolMemberships } from "contexts/Pools/PoolMemberships";
import { useProxies } from "../../ProxiesProvider";
import { useActiveAccounts } from "../../ActiveAccountsProvider";
import { useImportedAccounts } from "../../ImportedAccountsProvider";
import { AccountButton } from "./Account";
import { Delegates } from "./Delegates";
import type {
  AccountInPool,
  AccountNominating,
  AccountNominatingAndInPool,
  AccountNotStaking,
} from "./types";
import { ModalPadding } from "../../../../base/modal/ModalPadding";
import { ModalCustomHeader } from "../../../../base/modal/ModalCustomHeader";
import { Button } from "../../../../buttons/Button";

import "./index.scss";

export const Accounts = () => {
  // TODO: Fix translation
  const t = (s: string) => s;
  // const { balances, ledgers, getLocks } = useBalances();
  // const { bondedAccounts } = useBonded();
  const { getDelegates } = useProxies();
  const { extensionsStatus } = useExtensions();
  // const { memberships } = usePoolMemberships();
  const {
    replaceModal,
    status: modalStatus,
    setModalResize,
  } = useOverlay().modal;
  const { accounts } = useImportedAccounts();
  const { activeAccount, setActiveAccount, setActiveProxy } =
    useActiveAccounts();

  // Store local copy of accounts.
  const [localAccounts, setLocalAccounts] = useState(accounts);

  const stashes: string[] = [];
  // accumulate imported stash accounts
  // for (const { address } of localAccounts) {
  //   const locks = getLocks(address);

  //   // account is a stash if they have an active `staking` lock
  //   if (locks.find(({ id }) => id === "staking")) {
  //     stashes.push(address);
  //   }
  // }

  // construct account groupings
  const nominating: AccountNominating[] = [];
  const inPool: AccountInPool[] = [];
  const nominatingAndPool: AccountNominatingAndInPool[] = [];
  const notStaking: AccountNotStaking[] = [];

  for (const { address } of localAccounts) {
    let isNominating = false;
    let isInPool = false;
    const isStash = stashes[stashes.indexOf(address)] ?? null;
    const delegates = getDelegates(address);

    const poolMember = null; // memberships.find((m) => m.address === address) ?? null;

    // Check if nominating.
    if (isStash && nominating.find((a) => a.address === address) === undefined)
      isNominating = true;

    // Check if in pool.
    if (poolMember)
      if (!inPool.find((n) => n.address === address)) isInPool = true;

    // If not doing anything, add address to `notStaking`.
    if (
      !isStash &&
      !poolMember &&
      !notStaking.find((n) => n.address === address)
    ) {
      notStaking.push({ address, delegates });
      continue;
    }

    // If both nominating and in pool, add to this list.
    if (
      isNominating &&
      isInPool &&
      poolMember &&
      !nominatingAndPool.find((n) => n.address === address)
    ) {
      nominatingAndPool.push({
        ...poolMember,
        address,
        stashImported: true,
        delegates,
      });
      continue;
    }

    // Nominating only.
    if (isNominating && !isInPool) {
      nominating.push({ address, stashImported: true, delegates });
      continue;
    }

    // In pool only.
    if (!isNominating && isInPool && poolMember)
      inPool.push({ ...poolMember, delegates });
  }

  // Refresh local accounts state when context accounts change.
  useEffect(() => setLocalAccounts(accounts), [accounts]);

  // Resize if modal open upon state changes.
  useEffectIgnoreInitial(() => {
    if (modalStatus === "open") setModalResize();
  }, [
    activeAccount,
    accounts,
    //bondedAccounts, balances, ledgers,
    extensionsStatus,
  ]);

  return (
    <ModalPadding>
      <ModalCustomHeader>
        <div className="first">
          <h1>{t("accounts")}</h1>
          <Button
            type="primaryInvert"
            text={t("goToConnect")}
            iconLeft={faChevronLeft}
            iconTransform="shrink-3"
            onClick={() =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
            marginLeft
          />
        </div>
        <div>
          {activeAccount && (
            <Button
              type="text"
              style={{
                color: "var(--accent-color-primary)",
              }}
              text={t("disconnect")}
              iconRight={faLinkSlash}
              onClick={() => {
                setActiveAccount(null);
                setActiveProxy(null);
              }}
            />
          )}
        </div>
      </ModalCustomHeader>
      {!activeAccount && !accounts.length && (
        <div className="account-wrapper" style={{ marginTop: "1.5rem" }}>
          <div>
            <div>
              <h4 style={{ padding: "0.75rem 1rem" }}>
                {t("noActiveAccount")}
              </h4>
            </div>
            <div />
          </div>
        </div>
      )}

      {nominatingAndPool.length ? (
        <>
          <div className=".account-separator" />
          <ActionItem text={t("nominatingAndInPool")} />
          {nominatingAndPool.map(({ address, delegates }, i) => (
            <Fragment key={`acc_nominating_and_pool_${i}`}>
              <AccountButton address={address} />
              {address && (
                <Delegates delegator={address} delegates={delegates} />
              )}
            </Fragment>
          ))}
        </>
      ) : null}

      {nominating.length ? (
        <>
          <div className=".account-separator" />
          <ActionItem text={t("nominating")} />
          {nominating.map(({ address, delegates }, i) => (
            <Fragment key={`acc_nominating_${i}`}>
              <AccountButton address={address} />
              {address && (
                <Delegates delegator={address} delegates={delegates} />
              )}
            </Fragment>
          ))}
        </>
      ) : null}

      {inPool.length ? (
        <>
          <div className=".account-separator" />
          <ActionItem text={t("inPool")} />
          {inPool.map(({ address, delegates }, i) => (
            <Fragment key={`acc_in_pool_${i}`}>
              <AccountButton address={address} />
              {address && (
                <Delegates delegator={address} delegates={delegates} />
              )}
            </Fragment>
          ))}
        </>
      ) : null}

      {notStaking.length ? (
        <>
          <div className=".account-separator" />
          <ActionItem text={t("notStaking")} />
          {notStaking.map(({ address, delegates }, i) => (
            <Fragment key={`acc_not_staking_${i}`}>
              <AccountButton address={address} />
              {address && (
                <Delegates delegator={address} delegates={delegates} />
              )}
            </Fragment>
          ))}
        </>
      ) : null}
    </ModalPadding>
  );
};
