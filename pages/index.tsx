import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";
import { ButtonSecondary } from "../lib/buttons/ButtonSecondary";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
          <ButtonPrimary text="Small" icon={faUser} />
          <ButtonPrimary text="Disabled" marginX disabled icon={faUser} />
          <ButtonPrimary text="Large" lg icon={faUser} />
        </div>
        <div className="theme-polkadot theme-light">
          <ButtonSecondary text="Seconary " marginRight icon={faUser} />
          <ButtonSecondary text="Secondary" />
          <ButtonSecondary text="Secondary" disabled />
        </div>
      </main>
    </div>
  );
};

export default Home;
