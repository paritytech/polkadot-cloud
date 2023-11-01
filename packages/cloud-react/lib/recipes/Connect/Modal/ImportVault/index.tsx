// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useEffect } from "react";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../buttons/Button";
import { HardwareAddress } from "../../../../base/hardware/HardwareAddress";
import { HardwareStatusBar } from "../../../../base/hardware/HardwareStatusBar";
import { useVaultHardware } from "../../Providers/HardwareProviders/Vault";
import { usePrompt } from "../../Providers/PromptProvider";
import PolkadotVaultSVG from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";

import { Confirm } from "../ImportHardwareCommon/Confirm";
import { Heading } from "../ImportHardwareCommon/Heading";
import { NoAccounts } from "../ImportHardwareCommon/NoAccounts";
import { Remove } from "../ImportHardwareCommon/Remove";
import type { AnyJson } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useOtherAccounts } from "../../Providers/OtherAccountsProvider";
import { Reader } from "./Reader";
import { Polkicon } from "../../../../icons/Polkicon";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/ImportHardwareCommon/index.css";

export const ImportVault = () => {
  const { replaceModal } = useOverlay().modal;
  const { renameOtherAccount } = useOtherAccounts();
  const { openPromptWith, status: promptStatus } = usePrompt();

  const {
    vaultAccounts,
    vaultAccountExists,
    renameVaultAccount,
    addVaultAccount,
    removeVaultAccount,
    getVaultAccount,
  } = useVaultHardware();
  const { setModalResize } = useOverlay().modal;

  const renameHandler = (address: string, newName: string) => {
    renameVaultAccount(address, newName);
    renameOtherAccount(address, newName);
  };

  const openConfirmHandler = (address: string, index: number) => {
    openPromptWith(
      <Confirm address={address} index={index} addHandler={addVaultAccount} />,
      "small"
    );
  };

  const openRemoveHandler = (address: string) => {
    openPromptWith(
      <Remove
        address={address}
        removeHandler={removeVaultAccount}
        getHandler={getVaultAccount}
      />,
      "small"
    );
  };

  useEffect(() => {
    setModalResize();
  }, [vaultAccounts]);

  return (
    <>
      {vaultAccounts.length === 0 ? (
        <NoAccounts Icon={PolkadotVaultSVG} text="No Vault Accounts Imported">
          <div>
            <Button
              type="primary"
              lg
              iconLeft={faQrcode}
              text="Import Account"
              disabled={promptStatus !== 0}
              onClick={() => {
                openPromptWith(<Reader />, "small");
              }}
            />
          </div>
        </NoAccounts>
      ) : (
        <>
          <Heading title={vaultAccounts.length ? "Polkadot Vault" : ""} />
          <div className="addresses-wrapper">
            <div className="items">
              {vaultAccounts.map(({ address, name, index }: AnyJson, i) => (
                <HardwareAddress
                  key={i}
                  address={address}
                  index={index}
                  initial={name}
                  Identicon={<Polkicon address={address} size={40} />}
                  existsHandler={vaultAccountExists}
                  renameHandler={renameHandler}
                  openRemoveHandler={openRemoveHandler}
                  openConfirmHandler={openConfirmHandler}
                  t={{
                    tRemove: "Remove",
                    tImport: "Import",
                  }}
                />
              ))}
            </div>
            <div className="more">
              <Button
                type="text"
                iconLeft={faQrcode}
                text="Import Another Account"
                disabled={promptStatus !== 0}
                onClick={() => {
                  openPromptWith(<Reader />, "small");
                }}
              />
            </div>
          </div>
          <HardwareStatusBar
            show
            Icon={PolkadotVaultSVG}
            text="Vault Accounts"
            inProgress={false}
            handleDone={() =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
            t={{
              tDone: "Done",
              tCancel: "Cancel",
            }}
          />
        </>
      )}
    </>
  );
};
