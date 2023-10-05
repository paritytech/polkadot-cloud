/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactNode } from "react";

export const Code = ({
  text,
  children,
}: {
  text?: boolean;
  children: ReactNode;
}) => {
  return <code className={text ? "text" : undefined}>{children}</code>;
};
