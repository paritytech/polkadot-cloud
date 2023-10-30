/* @license Copyright 2023 @polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { CSSProperties, FC } from "react";

// The supported chains.
export type SupportedChains = "polkadot" | "kusama" | "westend";

// Structure for an extension configuration.
export interface ExtensionConfig {
  title: string;
  website: string;
}

// Structure for a validator entity.
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

// Icon record structure.
export type IconRecords = Record<
  string,
  FC<{
    style?: CSSProperties;
    className?: string;
  }>
>;

// Miscellaneous types.
declare global {
  interface Window {
    // Nova Wallet will have this window property.
    // eslint-disable-next-line
    walletExtension?: any;
  }
}
