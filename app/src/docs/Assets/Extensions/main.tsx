import { Edit } from "@docs/Edit";
import { Note } from "@docs/Note";
import { Header } from "@docs/Header";
import { ExtensionsSvg } from "./ExtensionsSvg";
import { ExtensionsJsx } from "./ExtensionsJsx";
import { H3 } from "@docs/Headers";
import { DocProps } from "@docs/types";
import { ImportSimple } from "./ImportSimple";

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

      <H3 id="wallet-extensions">Wallet Extensions</H3>

      <p>
        Web3 wallet extension data can either be imported as key value pairs via
        the <code>Extensions</code> import, or as an array with{" "}
        <code>ExtensionsArray</code>:
      </p>

      <ImportSimple />

      <p>The following Web3 wallets are currently supported:</p>

      <ul>
        <li>
          <a href="https://enkrypt.com" target="_blank" rel="noreferrer">
            Enkrypt
          </a>
        </li>
        <li>
          <a href="https://fearlesswallet.io" target="_blank" rel="noreferrer">
            Fearless Wallet
          </a>
        </li>
        <li>
          <a href="https://talisman.xyz" target="_blank" rel="noreferrer">
            Talisman
          </a>
        </li>
        <li>
          <a href="https://subwallet.app" target="_blank" rel="noreferrer">
            Subwallet JS
          </a>
        </li>
        <li>
          <a href="https://polkagate.xyz" target="_blank" rel="noreferrer">
            PolkaGate
          </a>
        </li>
        <li>
          <a
            href="https://polkadot.js.org/extension"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Polkadot JS
          </a>
        </li>
        <li>
          <a href="https://novawallet.io" target="_blank" rel="noreferrer">
            Nova Wallet
          </a>{" "}
          (if <code>window.walletExtension.isNovaWallet</code> is present).
        </li>
      </ul>

      <Note>
        <p>
          See the{" "}
          <a
            href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/lib/extensions/index.tsx"
            target="_blank"
            rel="noreferrer"
          >
            source code
          </a>{" "}
          for all available extension metadata.
        </p>
      </Note>

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
        As some of the extension icons are not perfectly square, it is
        recommended to bound their width and heights with{" "}
        <code>max&#8209;width</code> and <code>max&#8209;height</code>{" "}
        properties. Where the icons contain colors that need to be themed,{" "}
        <code>currentColor</code> is used as its fill or stroke (see Subwallet
        and Talisman icons).
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
        support it.
      </p>

      <p>
        Import JSX assets from <code>/extensions/jsx/</code>:
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
