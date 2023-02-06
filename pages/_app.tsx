import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.sass";
import "./styles.sass";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
