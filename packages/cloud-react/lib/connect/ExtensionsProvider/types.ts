// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { AnyJson } from "../../types";
import type { FunctionComponent, SVGProps } from "react";

// Top level required properties the extension must expose via their `injectedWeb3` entry.
export interface ExtensionInjected extends ExtensionConfig {
  id: string;
  enable: (n: string) => Promise<ExtensionInterface>;
}

// Required properties `enable` must provide after resolution.
export interface ExtensionInterface {
  accounts: {
    subscribe: {
      (a: { (b: ExtensionAccount[]): void }): void;
    };
  };
  provider: AnyJson;
  metadata: AnyJson;
  signer: AnyJson;
}

// Required properties returned after subscribing to accounts.
export interface ExtensionAccount extends ExtensionMetadata {
  address: string;
  meta?: AnyJson;
  name: string;
  signer?: AnyJson;
}

// Configuration item of an extension.
export interface ExtensionConfig {
  id: string;
  title: string;
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  url: string;
}

// Miscellaneous metadata added to an extension.
export interface ExtensionMetadata {
  addedBy?: string;
  source: string;
}

// Extensions context interface.
export interface ExtensionsContextInterface {
  checkingInjectedWeb3: boolean;
  extensions: ExtensionInjected[];
  extensionsStatus: ExtensionsStatus;
  setExtensionStatus: (id: string, status: ExtensionStatus) => void;
}

export type ExtensionsStatus = Record<string, ExtensionStatus>;

export type ExtensionStatus = "not_found" | "not_authenticated" | "connected";
