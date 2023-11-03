/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Note } from "@docs/Note";
import { Header } from "@docs/Header";
import { ExtensionsSvg } from "./ExtensionsSvg";
import { ExtensionsJsx } from "./ExtensionsJsx";
import { H2, H3, H4 } from "@docs/Headers";
import { DocProps } from "@docs/types";
import { ImportSimple } from "./ImportSimple";
import { External } from "@docs/External";
import { Bar } from "@docs/Bar";
import { IconsOnly } from "./IconsOnly";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Web3 Extensions"
        subtitle="A list of popular Web3 wallet extensions with metadata and icons."
        npm={npm}
        status="stable"
      />

      <IconsOnly />

      <p>
        Web3 wallet extension data can be imported from{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/1f7bae05926db53650c25168afd2b7fca2e57bf1/packages/assets/lib/extensions/index.tsx#L19"
          target="_blank"
          rel="noreferrer"
        >
          <code>Extensions</code>
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/c8063cda7968bcc48e04878d445c9085f5927b63/packages/assets/lib/extensions/index.tsx#L52"
          target="_blank"
          rel="noreferrer"
        >
          <code>Hardware</code>
        </a>{" "}
        objects, hosting browser-based extensions and hardware wallet extensions
        respectively. If you prefer an array of items,{" "}
        <code>ExtensionsArray</code> and <code>Hardwarerray</code> exports are
        also available.
      </p>

      <p>Each extension record consists of:</p>
      <ul>
        <li>
          The object key, that is also the identifier of the extension (its key
          in <code>window.injectedWeb3</code>).
        </li>
        <li>
          <code>title</code>: A human-readable title for the extension.
        </li>
        <li>
          <code>website</code>: Official website URL of the extension.
        </li>
      </ul>

      <ImportSimple />

      <H4 id="supported-browser-extensions">Supported Browser Extensions:</H4>

      <ul>
        <li>
          Enkrypt <Bar /> <code>encrypt</code> <Bar />{" "}
          <a href="https://enkrypt.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Fearless Wallet <Bar /> <code>fearless-wallet</code> <Bar />{" "}
          <a href="https://fearlesswallet.io" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          MetaMask Polkadot Snap <Bar /> <code>metamask-polkadot-snap</code>{" "}
          <Bar />{" "}
          <a
            href="https://snaps.metamask.io/snap/npm/chainsafe/polkadot-snap"
            target="_blank"
            rel="noreferrer"
          >
            Website <External />
          </a>
        </li>
        <li>
          Talisman <Bar /> <code>talisman</code> <Bar />{" "}
          <a href="https://talisman.xyz" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Subwallet JS <Bar /> <code>subwallet-js</code> <Bar />{" "}
          <a href="https://subwallet.app" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          PolkaGate <Bar /> <code>polkagate</code> <Bar />{" "}
          <a href="https://polkagate.xyz" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Polkadot JS <Bar /> <code>polkadot-js</code> <Bar />{" "}
          <a
            href="https://polkadot.js.org/extension"
            target="_blank"
            rel="noreferrer"
          >
            Website <External />
          </a>
        </li>
        <li>
          Nova Wallet (if <code>window.walletExtension.isNovaWallet</code> is
          present) <Bar />{" "}
          <a href="https://novawallet.io" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
      </ul>

      <H4 id="supported-hardware-extensions">Supported Hardware Extensions:</H4>

      <ul>
        <li>
          Ledger <Bar /> <code>ledger</code> <Bar />{" "}
          <a href="https://ledger.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Polkadot Vault <Bar /> <code>polkadotvault</code> <Bar />{" "}
          <a href="https://signer.parity.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Wallet Connect <Bar /> <code>walletconnect</code> <Bar />{" "}
          <a href="https://walletconnect.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
      </ul>

      <Note>
        <p>
          To open a PR and add additional extensions to this list, refer to the
          instructions hosted in this package's{" "}
          <a
            href="https://github.com/paritytech/polkadot-cloud/tree/main/packages/assets#adding-web-extension-wallets"
            target="_blank"
            rel="noreferrer"
          >
            README file
          </a>
          .
        </p>
      </Note>

      <hr className="md" />

      <H3 id="svg-icons">SVG Icons</H3>
      <p>
        Raw SVG icons exist for each extension. They are set to{" "}
        <code>100%</code> width and height by default, and will resize depending
        on their container element. As some of the extension icons are not
        perfectly square, it is recommended to bound their width and heights
        with additional <code>max&#8209;width</code> and{" "}
        <code>max&#8209;height</code> properties.
      </p>

      <p>
        Where the icons contain colors that need to be themed,{" "}
        <code>currentColor</code> is used as its fill or stroke (see Subwallet,
        Talisman and Ledger icons).
      </p>

      <p>
        Import SVG assets from <code>/extensions/svg/</code>:
      </p>

      <ExtensionsSvg />

      <Note>
        <p>
          SVG import syntax may differ depending on the toolchain / framework
          being used. The above import syntax is for Vite.
        </p>
      </Note>

      <H3 id="jsx-icons">JSX Icons</H3>

      <p>
        Wallet icons are also available as JSX components for frameworks that
        support it. Import JSX assets from <code>/extensions/jsx/</code>:
      </p>

      <ExtensionsJsx />

      <Note>
        <p>
          Some frameworks require components to be locally available to lazily
          load them.
        </p>
      </Note>

      <hr className="lg" />

      <H2 id="values">Helpers</H2>
      <H3 id="checkingInjectedWeb3">getExtensionIcon</H3>
      <div className="params inline">
        <p>ExtensionIcon</p>
      </div>
      <p>
        Returns the SVG icon associated with an extension id, or{" "}
        <code>null</code> if one does not exist.
      </p>
      <p>
        If called within the Nova Wallet app and the <code>polkadot-js</code> id
        is provided, the Nova icon will be returned instead of the Polkadot JS
        icon.
      </p>
    </>
  );
};
