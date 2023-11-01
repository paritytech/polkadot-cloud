// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faExternalLinkAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { useExtensions } from "../../../../connect/ExtensionsProvider/useExtensions";
import { useExtensionAccounts } from "../../../../connect/ExtensionAccountsProvider/useExtensionAccounts";
import { useNotifications } from "../../Providers/NotificationsProvider/index";
import { ExtensionIcons } from "@polkadot-cloud/assets/extensions";
import type { ExtensionProps } from "./types";
import { ModalConnectItem } from "../../../../base/modal/ModalConnectItem";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/Connect/index.css";

export const Extension = ({ meta, size, flag }: ExtensionProps) => {
  const { addNotification } = useNotifications();
  const { connectExtensionAccounts } = useExtensionAccounts();
  const { extensionsStatus, extensionInstalled, extensionCanConnect } =
    useExtensions();
  const { title, website, id } = meta;
  const isInstalled = extensionInstalled(id);
  const canConnect = extensionCanConnect(id);

  // Force re-render on click.
  const [increment, setIncrement] = useState(0);

  // click to connect to extension
  const handleClick = async () => {
    if (canConnect) {
      const connected = await connectExtensionAccounts(id);
      // force re-render to display error messages
      setIncrement(increment + 1);

      if (connected)
        addNotification({
          title: "Extension Connected",
          // TODO: See this that was: subtitle: `${t("titleExtensionConnected", { title })}`,
          subtitle: "Extension Connected",
        });
    }
  };

  const Icon = ExtensionIcons[id || ""] || undefined;
  // determine message to be displayed based on extension status.
  let statusJsx;
  switch (extensionsStatus[id]) {
    case "connected":
      statusJsx = <p className="success">Connected</p>;
      break;
    case "not_authenticated":
      statusJsx = <p>Not Authenticated</p>;
      break;
    default:
      statusJsx = (
        <p className="active">
          <FontAwesomeIcon icon={faPlus} className="plus" />
          Connect
        </p>
      );
  }

  const shortUrl = Array.isArray(website) ? website[0] : website;
  const longUrl = Array.isArray(website) ? website[1] : website;
  const disabled = extensionsStatus[id] === "connected" || !isInstalled;

  return (
    <ModalConnectItem canConnect={canConnect}>
      <div className="extension-inner">
        <div>
          <div className="body">
            {!disabled ? (
              <button
                type="button"
                className="button"
                onClick={() => handleClick()}
              >
                &nbsp;
              </button>
            ) : null}

            <div className="row icon">
              <Icon style={{ width: size, height: size }} />
            </div>
            <div className="status">
              {flag && flag}
              {isInstalled ? statusJsx : <p>Not Installed</p>}
            </div>
            <div className="row">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="foot">
            <a
              className="link"
              href={`https://${longUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              {shortUrl}
              <FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-6" />
            </a>
          </div>
        </div>
      </div>
    </ModalConnectItem>
  );
};
