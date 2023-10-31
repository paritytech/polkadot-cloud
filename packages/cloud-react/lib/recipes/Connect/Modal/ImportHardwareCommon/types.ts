/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import type { FunctionComponent, SVGProps } from "react";
import type { AnyFunction } from "../../../../utils/types";

export interface HeadingProps {
  connectTo?: string;
  disabled?: boolean;
  handleReset?: () => void;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
}

export interface AddressProps {
  address: string;
  index: number;
  initial: string;
  disableEditIfImported?: boolean;
  renameHandler: AnyFunction;
  existsHandler: AnyFunction;
  openRemoveHandler: AnyFunction;
  openConfirmHandler: AnyFunction;
  t: {
    tImport: string;
    tRemove: string;
  };
}

export interface ConfirmProps {
  address: string;
  index: number;
  addHandler: AnyFunction;
}

export interface RemoveProps {
  address: string;
  getHandler: AnyFunction;
  removeHandler: AnyFunction;
}
