/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";

export const InstallReact = () => {
  const code = `yarn add @polkadot-cloud/react`;

  return <SimpleEditor code={code} standalone />;
};
