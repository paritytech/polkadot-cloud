/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Providers />
    </BrowserRouter>
  );
};
