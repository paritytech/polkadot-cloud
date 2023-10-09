/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { ProviderExample } from "./ProviderExample";
import { Note } from "@docs/Note";
import { Link } from "react-router-dom";
import { HookExample } from "./HookExample";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Extensions Provider"
        subtitle="Discover available web3 exensions and manage their status."
        npm={npm}
        status="stable"
      />

      <p>
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/connect/ExtensionsProvider/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>ExtensionsProvider</code>
        </a>{" "}
        allows your app to discover the currently installed web3 extensions, and
        provides a setter to update their status. Wrap your app with{" "}
        <code>ExtensionsProvider</code> to give your components access to the
        available web extensions:
      </p>
      <ProviderExample />

      <p>
        With the provider in place, extensions data can be accessed with the{" "}
        <code>useExtensions</code> hook:
      </p>
      <HookExample />

      <Note>
        <p>
          <code>ExtensionsProvider</code> supports all the web3 wallet
          extensions listed on the <Link to="/extensions">Web3 Extensions</Link>{" "}
          page.
        </p>
      </Note>

      <h3>Extension Syncing</h3>
      <p>
        Web3 extensions are injected into the <code>window.injectedWeb3</code>{" "}
        object, which is an asynchronous process that happens when the window
        loads. For this reason, <code>ExtensionsProvider</code> also provides a{" "}
        <code>checkingInjectedWeb3</code> boolean value, that signals whether
        the initial check for <code>injectedWeb3</code> is underway.
      </p>
      <p>
        {" "}
        <code>checkingInjectedWeb3</code> will initially be <code>true</code>,
        and updated to <code>false</code> once <code>window.injectedWeb3</code>{" "}
        is present, or if <code>injectedWeb3</code> is not found after a 5
        second timeout.
      </p>

      <h2>Values</h2>

      <h3 className="reference">extensions</h3>
      <p>
        A list of available extensions, or null.
        <ul>
          <li>
            If extensions are available, an array of extension records
            containing the <code>id</code> and <code>enable</code> function of
            each extension are returned.
          </li>
          <li>
            If no extensions are avalable, <code>null</code> is returned.
          </li>
        </ul>
      </p>

      <h3 className="reference">checkingInjectedWeb3</h3>
      <p>
        Returns a boolean reflecting whether <code>window.injectedWeb3</code> is
        being checked.
      </p>

      <h3 className="reference">extensionsStatus</h3>
      <p>
        A key value record of each extension and their status. Empty object by
        default until <code>setExtensionStatus</code> is called.
      </p>

      <h3 className="reference">setExtensionStatus(id, status)</h3>
      <p>
        A function that takes an extension id and status, and updates the{" "}
        <code>extensionsStatus</code> record. Accepts values of{" "}
        <code>not_found</code>, <code>not_authenticated</code> and{" "}
        <code>connected</code>.
      </p>
    </>
  );
};
