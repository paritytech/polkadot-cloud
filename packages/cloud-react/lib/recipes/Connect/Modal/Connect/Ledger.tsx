// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChrome, faUsb } from "@fortawesome/free-brands-svg-icons";
import {
  faExclamationTriangle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalConnectItem } from "../../../../base/modal/ModalConnectItem";
import { ModalHardwareItem } from "../../../../base/modal/ModalHardwareItem";
import { Button } from "../../../../buttons/Button";
import { inChrome } from "@polkadot-cloud/utils";
import { useHelp } from "../../HelpProvider/index";
// TODO: Fix svg: import LedgerLogoSVG from "img/ledgerLogo.svg?react";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { ReactElement } from "react";

interface LedgerProps {
  network?: string;
}

export const Ledger = ({ network = "polkadot" }: LedgerProps): ReactElement => {
  const { openHelp } = useHelp();
  const { replaceModal } = useOverlay().modal;
  const url = "ledger.com";

  // Only render on Polkadot and Kusama networks.
  if (!["polkadot", "kusama"].includes(network)) {
    return <></>;
  }

  return (
    <ModalConnectItem>
      <ModalHardwareItem>
        <div className="body">
          <div className="status">
            <Button
              type="help"
              onClick={() => openHelp("Ledger Hardware Wallets")}
            />
          </div>
          <div className="row">
            LedgerLogo
            {/* <LedgerLogoSVG className="logo mono" /> */}
          </div>
          <div className="row margin">
            <Button
              type="text"
              text={network === "polkadot" ? "BETA" : "EXPERIMENTAL"}
              disabled
              marginRight
              iconLeft={
                network === "polkadot" ? undefined : faExclamationTriangle
              }
              style={{ opacity: 0.5 }}
            />
            <Button
              type="text"
              text="Chrome / Brave"
              disabled
              iconLeft={faChrome}
              style={{ opacity: 0.5 }}
            />
          </div>
          <div className="row margin">
            <Button
              type="primaryInvert"
              text="USB"
              onClick={() => replaceModal({ key: "ImportLedger" })}
              iconLeft={faUsb}
              iconTransform="shrink-1"
              disabled={!inChrome()}
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
