// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Any } from "../../../../utils/types";

export interface ExtensionProps {
  meta: ExtensionMetaProps;
  installed?: Any;
  size?: string;
  message?: string;
  flag?: boolean;
  status?: string;
}

export interface ExtensionMetaProps {
  id: string;
  title: string;
  status?: string;
  website: string | [string, string];
}

export interface ListWithInputProps {
  setInputOpen: (k: boolean) => void;
  inputOpen: boolean;
}

export interface forwardRefProps {
  setSection?: Any;
  readOnlyOpen: boolean;
  setReadOnlyOpen: (e: boolean) => void;
}

export interface DappInfo {
  dappName: string;
  network: string;
  ss58: number;
  activeAccount: Any;
  setActiveAccount: Any;
}

export interface ConnectType {
  hardwareActive?: boolean;
  webActive?: boolean;
  devActive?: boolean;
}
