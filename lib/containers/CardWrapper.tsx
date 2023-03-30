// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase } from "../types";
import { CardWrapperProps } from "./types";

export const CardWrapper = (
  props: ComponentBase &
    CardWrapperProps & {
      // whether to use secondary background
      backgroundSecondary?: boolean;
    }
) => {
  console.log("props", props);

  return <div className="container">{props.children}</div>;
};
