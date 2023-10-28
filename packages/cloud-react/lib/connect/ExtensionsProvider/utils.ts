// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { AnyJson } from "../../utils/types";

// Workaround for current `ethereum` snap types. See
// https://github.com/ChainSafe/metamask-snap-polkadot/blob/e0f3d4fc0be7366c62211e29d3a276e4fab5669e/packages/adapter/src/types.ts#L40
// for full type.
declare global {
  interface Window {
    injectedWeb3?: AnyJson;
  }
}
