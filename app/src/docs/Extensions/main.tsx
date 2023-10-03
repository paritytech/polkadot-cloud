import { Edit } from "../lib/Edit";
import { Note } from "../lib/Note";
import { Header } from "../lib/Header";
import { ExtensionsSvg } from "./ExtensionsSvg";
import { ExtensionsJsx } from "./ExtensionsJsx";
import { H2, H3 } from "../lib/Headers";
import { DocProps } from "../lib/types";

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

      <Note>
        <p>
          <code>@polkadot-cloud/assets</code> is used with other Cloud
          components, such as the upcoming Connect component.
        </p>
      </Note>

      <H2 id="wallet-extensions">Wallet Extensions</H2>

      <p>
        All extension data is stored in an{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/assets/lib/extensions/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Extensions</code>
        </a>{" "}
        object. The following Web3 wallets are currently supported:
      </p>

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
          (if <code>window.walletExtension.isNovaWallet</code> is present)
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
