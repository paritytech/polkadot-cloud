/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

// The supported chains.
// TODO: provide instructions on how to add your own chain.
export type SupportedChains = "polkadot" | "kusama" | "westend";

// Structure for an extension configuration.
// TODO: provide url to add your own extension config.
export interface ExtensionConfig {
  id: string;
  title: string;
  icon: string;
  website: string;
}

// Structure for a validator entity.
// TODO: provide url to add your own validator config.
export interface ValidatorConfig {
  name: string;
  thumbnail: string;
  bio: string;
  // Optional fields.
  email?: string;
  twitter?: string;
  website?: string;
  // Must have at least one active validator on at least one network.
  validators: Partial<{
    [K in SupportedChains]: string[];
  }>;
}

// Miscellaneous types.
declare global {
  interface Window {
    // Nova Wallet will have this window property.
    // eslint-disable-next-line
    walletExtension?: any;
  }
}
