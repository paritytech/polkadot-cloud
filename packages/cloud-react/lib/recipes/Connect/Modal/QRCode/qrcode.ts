// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import _qrcode from "qrcode-generator";
import { Any } from "../../../../utils/types";

// A small hurdle to jump through, just to get the default/default correct (as generated)
const qrcode: typeof _qrcode = _qrcode;

// HACK The default function take string -> number[], the Uint8array is compatible
// with that signature and the use thereof
(qrcode as Any).stringToBytes = (data: Uint8Array): Uint8Array => data;

export { qrcode };
