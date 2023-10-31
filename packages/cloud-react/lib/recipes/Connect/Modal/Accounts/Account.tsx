// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ellipsisFn } from "@polkadot-cloud/utils";

import { ExtensionIcons } from "@polkadot-cloud/assets/extensions";
// import LedgerSVG from "@polkadot-cloud/assets/extensions/svg/ledger.svg?react";
// import PolkadotVaultSVG from "@polkadot-cloud/assets/extensions/svg/polkadotvault.svg?react";
// import { useTransferOptions } from "contexts/TransferOptions";

import { PolkadotVault } from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";
import { Ledger } from "@polkadot-cloud/assets/extensions/jsx/Ledger";

import { Polkicon } from "../../../../icons/Polkicon";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useImportedAccounts } from "../../Providers/ImportedAccountsProvider";

import type { AccountItemProps } from "./types";
import { useActiveAccounts } from "../../Providers/ActiveAccountsProvider";

export const AccountButton = ({
  label,
  address,
  delegator,
  proxyType,
  noBorder = false,
}: AccountItemProps) => {
  const { getAccount } = useImportedAccounts();
  const {
    activeProxy,
    activeAccount,
    setActiveAccount,
    setActiveProxy,
    activeProxyType,
  } = useActiveAccounts();
  const { setModalStatus } = useOverlay().modal;

  // TODO: FIX A LOT OF THINGS
  // const { units, unit } = useNetwork().networkData;

  // TODO: FIX A LOT OF THINGS
  // const { getTransferOptions } = useTransferOptions();
  // const { freeBalance } = getTransferOptions(address || "");

  // Accumulate account data.
  const meta = getAccount(address || "");

  const imported = !!meta;
  const connectTo = delegator || address || "";
  const connectProxy = delegator ? address || null : "";

  // Determine account source icon.
  const Icon =
    meta?.source === "ledger"
      ? Ledger
      : meta?.source === "vault"
      ? PolkadotVault
      : ExtensionIcons[meta?.source || ""] || undefined;

  // Determine if this account is active (active account or proxy).
  const isActive =
    (connectTo === activeAccount &&
      address === activeAccount &&
      !activeProxy) ||
    (connectProxy === activeProxy &&
      proxyType === activeProxyType &&
      activeProxy);

  // Handle account click. Handles both active account and active proxy.
  const handleClick = () => {
    if (!imported) return;
    setActiveAccount(getAccount(connectTo)?.address || null);
    setActiveProxy(proxyType ? { address: connectProxy, proxyType } : null);
    setModalStatus("closing");
  };

  return (
    <div className={`${isActive ? "active" : undefined} account-wrapper`}>
      <div className={noBorder ? "no-border" : undefined}>
        <section className="head">
          <button
            type="button"
            onClick={() => handleClick()}
            disabled={!imported}
          >
            {delegator && (
              <div className="delegator">
                <Polkicon address={delegator} size={23} />
              </div>
            )}
            <div className="identicon">
              <Polkicon address={address ?? ""} size={23} />
            </div>
            <span className="name">
              {delegator && (
                <>
                  <span>{proxyType} Proxy</span>
                </>
              )}
              {meta?.name ?? ellipsisFn(address ?? "")}
            </span>
            {meta?.source === "external" && (
              <div
                className="label warning"
                style={{ color: "#a17703", paddingLeft: "0.5rem" }}
              >
                Read Only
              </div>
            )}
            <div className={label === undefined ? `` : label[0]}>
              {label !== undefined ? <h5>{label[1]}</h5> : null}
              {Icon !== undefined ? (
                <span className="icon">
                  <Icon />
                </span>
              ) : null}

              {meta?.source === "external" && (
                <FontAwesomeIcon
                  icon={faGlasses}
                  className="icon"
                  style={{ opacity: 0.7 }}
                />
              )}
            </div>
          </button>
        </section>
        <section className="foot">
          {/* <span className="balance">
            {`Free: ${planckToUnit(freeBalance, units)
              .decimalPlaces(3)
              .toFormat()} ${unit}`}
          </span> */}
        </section>
      </div>
    </div>
  );
};
