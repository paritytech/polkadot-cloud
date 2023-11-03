/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { CSSProperties, FC } from "react";

// Structure for an extension configuration.
export interface ExtensionConfig {
  title: string;
  website: string | [string, string];
  features: "*" | ExtensionFeature[];
}

// Supported extension features.
export type ExtensionFeature = "getAccounts" | "subscribeAccounts" | "signer";

// Structure for a hardware wallet configuration.
export interface HardwareConfig {
  title: string;
  website: string | [string, string];
}

// The supported chains for validators.
export type ValidatorSupportedChains = "polkadot" | "kusama" | "westend";

// Structure for a validator entity.
export interface ValidatorConfig {
  name: string;
  thumbnail: string;
  bio: string;
  email?: string;
  twitter?: string;
  website?: string;
  // Must have at least one active validator on at least one network.
  validators: Partial<{
    [K in ValidatorSupportedChains]: string[];
  }>;
}

// Icon record structure.
export type ExtensionIconRecords = Record<string, ExtensionIcon>;

export type ExtensionIcon = FC<{
  style?: CSSProperties;
  className?: string;
}>;

// Miscellaneous types.
declare global {
  interface Window {
    // Nova Wallet will have this window property.
    // eslint-disable-next-line
    walletExtension?: any;
  }
}
