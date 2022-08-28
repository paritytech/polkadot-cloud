// Copyright 2022 @rossbulat/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
