/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const EllipsisFn = () => {
  const code = `const address = "234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7";

// How many characters to show after Ellipsis (placed at the start)
ellipsisFn(address, 4, "start") // ...ZmY7
// How many characters to show before Ellipsis (placed on the end)
ellipsisFn(address, 4, "end") // 234C...

// How many characters to show after Ellipsis (placed at the start)
ellipsisFn("Some random value", 8, "start");// ...dom value
// How many characters to show before Ellipsis (placed on the end)
ellipsisFn("Some random value", 8, "end") // Some ran...

// position defaults to "center"
ellipsisFn(address, 4) // 234C...ZmY7
ellipsisFn(address, 10) // 234CHvWmTu...oFaetEZmY7

// amount defaults to 6
ellipsisFn(address) // 234CHv...tEZmY7

// (fallbacks to minimum, of 4)
ellipsisFn(address, 2) // 234C...ZmY7

// (fallbacks to maximum acceptable when too large: string.length / 2 - 3)
ellipsisFn(address, 100) // 234C...ZmY7`;

  return <SimpleEditor code={code} standalone />;
};
