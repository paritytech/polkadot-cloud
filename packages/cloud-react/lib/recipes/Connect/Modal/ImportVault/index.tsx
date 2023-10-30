// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useEffect } from "react";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../buttons/Button";
import { HardwareAddress } from "../../../../base/hardware/HardwareAddress";
import { HardwareStatusBar } from "../../../../base/hardware/HardwareStatusBar";
import { useVaultHardware } from "../../Hardware/Vault";
import { usePrompt } from "../../PromptProvider";
import PolkadotVaultSVG from "@polkadot-cloud/assets/extensions/jsx/PolkadotVault";

import { Confirm } from "../ImportHardwareCommon/Confirm";
import { Heading } from "../ImportHardwareCommon/Heading";
import { NoAccounts } from "../ImportHardwareCommon/NoAccounts";
import { Remove } from "../ImportHardwareCommon/Remove";
import type { AnyJson } from "../../../../utils/types";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { useOtherAccounts } from "../../OtherAccountsProvider";
import { Reader } from "./Reader";
import { Polkicon } from "../../../../icons/Polkicon";

import "../ImportHardwareCommon/index.scss";

export const ImportVault = () => {
  // const { t } = useTranslation();
  // TODO: Fix translations
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const t = (s: string, _p: AnyJson) => s;
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
        <NoAccounts
          Icon={PolkadotVaultSVG}
          text={t("noVaultAccountsImported", { ns: "modals" })}
        >
          <div>
            <Button
              type="primary"
              lg
              iconLeft={faQrcode}
              text={t("importAccount", { ns: "modals" })}
              disabled={promptStatus !== 0}
              onClick={() => {
                console.log("123123");
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
                    tRemove: t("remove", { ns: "modals" }),
                    tImport: t("import", { ns: "modals" }),
                  }}
                />
              ))}
            </div>
            <div className="more">
              <Button
                type="text"
                iconLeft={faQrcode}
                text={t("importAnotherAccount", { ns: "modals" })}
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
            text={t("vaultAccounts", {
              ns: "modals",
              count: vaultAccounts.length,
            })}
            inProgress={false}
            handleDone={() =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
            t={{
              tDone: t("done", { ns: "library" }),
              tCancel: t("cancel", { ns: "library" }),
            }}
          />
        </>
      )}
    </>
  );
};
