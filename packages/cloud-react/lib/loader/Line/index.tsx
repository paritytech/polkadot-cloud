/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { LoaderProps } from "../../core/types";
import "@polkadotcloud/cloud-core/css/loader/Line/index.css";

export const Line = ({ text }: LoaderProps) => {
  return (
    <div className="line-loading">
      <p>{text}</p>
      <span></span>
    </div>
  );
};
