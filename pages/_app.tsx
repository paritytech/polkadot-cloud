import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.css";
import "cirque/themes/polkadot/tokens/style-dictionary/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
