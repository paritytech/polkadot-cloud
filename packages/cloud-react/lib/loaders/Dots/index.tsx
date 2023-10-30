/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import "@polkadot-cloud/core/css/loaders/Dots/index.css";

export const Dots = () => {
  return (
    <div className="dots-loading">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};
