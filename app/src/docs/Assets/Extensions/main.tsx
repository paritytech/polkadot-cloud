/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Note } from "@docs/Note";
import { Header } from "@docs/Header";
import { ExtensionsSvg } from "./ExtensionsSvg";
import { ExtensionsJsx } from "./ExtensionsJsx";
import { H3, H4 } from "@docs/Headers";
import { DocProps } from "@docs/types";
import { ImportSimple } from "./ImportSimple";
import { External } from "@docs/External";

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

      <p>
        Web3 wallet extension data can be imported from{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/lib/extensions/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Extensions</code>
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/lib/extensions/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Hardware</code>
        </a>{" "}
        objects, hosting browser-based extensions and hardware wallet extensions
        respectively. If you prefer an array of items,{" "}
        <code>ExtensionsArray</code> and <code>Hardwarerray</code> exports are
        also available:
      </p>

      <ImportSimple />

      <H4 id="supported-browser-extensions">Supported Browser Extensions:</H4>

      <ul>
        <li>
          Enkrypt -{" "}
          <a href="https://enkrypt.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Fearless Wallet -{" "}
          <a href="https://fearlesswallet.io" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Talisman -{" "}
          <a href="https://talisman.xyz" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Subwallet JS -{" "}
          <a href="https://subwallet.app" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          PolkaGate -{" "}
          <a href="https://polkagate.xyz" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Polkadot JS -{" "}
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
          present) -{" "}
          <a href="https://novawallet.io" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
      </ul>

      <H4 id="supported-hardware-extensions">Supported Hardware Extensions:</H4>

      <ul>
        <li>
          Ledger -{" "}
          <a href="https://ledger.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Polkadot Vault -{" "}
          <a href="https://signer.parity.com" target="_blank" rel="noreferrer">
            Website <External />
          </a>
        </li>
        <li>
          Wallet Connect -{" "}
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
          being used.
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
    </>
  );
};
