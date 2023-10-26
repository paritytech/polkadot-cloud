// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ReactElement } from "react";

import { faExternalLinkAlt, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";

import { Button } from "../../../../buttons/Button";
import { ModalConnectItem } from "../../../../base/modal/ModalConnectItem";
import { ModalHardwareItem } from "../../../../base/modal/ModalHardwareItem";

import { useHelp } from "../../HelpProvider/index";
// import PolkadotVaultSVG from "@polkadot-cloud/assets/extensions/svg/polkadotvault.svg?react";

export const Vault = (): ReactElement => {
  // const { t } = useTranslation("modals");
  // TODO: Fix translation
  const t = (s: string) => s;

  const { openHelp } = useHelp();
  const { replaceModal } = useOverlay().modal;
  const url = "signer.parity.io";

  return (
    <ModalConnectItem>
      <ModalHardwareItem>
        <div className="body">
          <div className="status">
            <Button onClick={() => openHelp("Polkadot Vault")} />
          </div>
          <div className="row">
            PolkadotSVG
            {/* TODO: <PolkadotVaultSVG className="logo vault" /> */}
          </div>
          <div className="row margin">
            <Button
              type="text"
              text="Polkadot Vault"
              disabled
              marginRight
              style={{
                opacity: 1,
                color: "var(--accent-color-primary)",
                fontFamily: "Unbounded",
              }}
            />
          </div>
          <div className="row margin">
            <Button
              type="primaryInvert"
              text={t("import")}
              onClick={() => {
                replaceModal({ key: "ImportVault" });
              }}
              iconLeft={faQrcode}
              iconTransform="shrink-1"
            />
          </div>
        </div>
        <div className="foot">
          <a
            className="link"
            href={`https://${url}`}
            target="_blank"
            rel="noreferrer"
          >
            {url}
            <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-6" />
          </a>
        </div>
      </ModalHardwareItem>
    </ModalConnectItem>
  );
};
