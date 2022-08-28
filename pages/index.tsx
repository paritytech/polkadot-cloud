import React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import { Button } from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Polkadot Dashboard UI</title>
        <meta name="description" content="Polkadot Dashboard UI" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="p-4 flex flex-col gap-8">
        {/* <h1 className="text-2xl font-bold">
          <Link href="/page">Link</Link>
        </h1> */}
        <div>
          <Button />
        </div>
      </main>
    </>
  );
};

export default Home;
