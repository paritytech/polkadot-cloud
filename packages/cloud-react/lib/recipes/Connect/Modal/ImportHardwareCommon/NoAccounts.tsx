// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../buttons/Button";

import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";
import { Any } from "../../../../utils/types";

import "./index.scss";

export const NoAccounts = ({ children, text, Icon }: Any) => {
  // TODO: Fix translaton
  const t = (s: string) => s;
  const { replaceModal } = useOverlay().modal;

  return (
    <>
      <div style={{ display: "flex", padding: "1rem" }}>
        <h1>
          <Button
            type="secondary"
            text={t("back")}
            iconLeft={faChevronLeft}
            iconTransform="shrink-3"
            onClick={async () =>
              replaceModal({ key: "Connect", options: { disableScroll: true } })
            }
          />
        </h1>
      </div>
      <div className="no-accounts-wrapper">
        <div className="icon">
          <Icon />
        </div>
        <h3>{text}</h3>
        {children}
      </div>
    </>
  );
};
