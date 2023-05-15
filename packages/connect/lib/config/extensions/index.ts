/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as EnkryptSVG } from "./icons/enkrypt_icon.svg";
import { ReactComponent as NovaWalletSVG } from "./icons/nova_wallet.svg";
import { ReactComponent as PolkadotJSSVG } from "./icons/polkadot_js.svg";
import { ReactComponent as SubwalletSVG } from "./icons/subwallet_icon.svg";
import { ReactComponent as TalismanSVG } from "./icons/talisman_mask_icon.svg";

export interface ExtensionConfig {
  id: string;
  title: string;
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
}

export const EXTENSIONS: ExtensionConfig[] = [
  {
    id: "enkrypt",
    title: "Enkrypt",
    icon: EnkryptSVG,
  },
  {
    id: "polkadot-js",
    title: (window as any)?.walletExtension?.isNovaWallet
      ? "Nova Wallet"
      : "Polkadot JS",
    icon: (window as any)?.walletExtension?.isNovaWallet
      ? NovaWalletSVG
      : PolkadotJSSVG,
  },
  {
    id: "subwallet-js",
    title: "SubWallet",
    icon: SubwalletSVG,
  },
  {
    id: "talisman",
    title: "Talisman",
    icon: TalismanSVG,
  },
];
