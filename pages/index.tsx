import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";

/*
 * A sandbox page to test components.
 */
const Home: NextPage = () => {
  return (
    <div className="theme-kusama theme-light">
      <Head>
        <title>Polkadot Dashboard UI</title>
        <meta name="description" content="Polkadot Dashboard UI" />
      </Head>
      <main className="p-4 flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Components</h1>
        <div>
          <ButtonPrimary title="Button Small" sm />
        </div>
        <div>
          <ButtonPrimary title="Button Large" />
        </div>
      </main>
    </div>
  );
};

export default Home;
