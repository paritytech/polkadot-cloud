// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Any } from "lib/types";
import { FunctionComponent, SVGProps } from "react";

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
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  status?: string;
  url: string;
}

export interface ReadOnlyProps {
  setReadOnlyOpen: (k: boolean) => void;
  readOnlyOpen: boolean;
}

export interface forwardRefProps {
  setSection?: Any;
  readOnlyOpen: boolean;
  setReadOnlyOpen: (e: boolean) => void;
}
