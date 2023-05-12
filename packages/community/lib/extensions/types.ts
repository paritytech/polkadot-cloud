/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import type { FunctionComponent, SVGProps } from "react";

// dashboard specific: configuration item of an extension.
// configured in src/config/extensions/index.tsx.
export interface ExtensionConfig {
  id: string;
  title: string;
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  url: string;
}
