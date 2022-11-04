import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";

/*
 * Sandbox page for component tests and class inclusion.
 */
const Home: NextPage = () => {
  return (
    <div>
      {/* dump all themes here as to not be purged at build */}
      <div className="theme-polkadot theme-kusama theme-westend theme-light theme-dark"></div>
      <Head>
        <title>Polkadot Dashboard UI</title>
        <meta name="description" content="Polkadot Dashboard UI" />
      </Head>
      <main className="p-4 flex flex-col gap-8">
        <h1 className="text-2xl">Button Primary</h1>
        <div className="theme-polkadot theme-light">
          <ButtonPrimary title="Button Small" sm />
        </div>
        <div className="theme-polkadot theme-light">
          <ButtonPrimary title="Button Large" />
        </div>
      </main>
    </div>
  );
};

export default Home;
