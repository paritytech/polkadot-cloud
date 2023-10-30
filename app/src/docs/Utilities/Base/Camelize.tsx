/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const Camelize = () => {
  const code = `camelize("hello_world") // helloWorld
camelize("hello world") // helloWorld
camelize("  leadingWhitespace") // leadingWhitespace
camelize("   multiple   spaces   ") // multipleSpaces

// But:
camelize(HeLLo WoRLD) // heLLoWoRld 
// This is due to the fact that Capital letters identify as "beginning of a word")`;

  return <SimpleEditor code={code} standalone />;
};
