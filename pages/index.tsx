import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";
import { ButtonSecondary } from "../lib/buttons/ButtonSecondary";
import { ButtonInvert } from "../lib/buttons/ButtonInvert";
import { ButtonInvertRounded } from "../lib/buttons/ButtonInvertRounded";
import { ButtonSubmit } from "../lib/buttons/ButtonSubmit";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faUser as faUserReg,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";

/*
 * Sandbox page for component tests and class inclusion.
 */
const Home: NextPage = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  return (
    <>
      {/* dump all themes here as to not be purged at build */}
      <div className="theme-polkadot theme-kusama theme-westend theme-light theme-dark"></div>
      <div
        className={`theme-${network} theme-${theme}`}
        style={{
          background: theme === "light" ? "white" : "black",
          minHeight: "100vh",
        }}
      >
        <Head>
          <title>Polkadot Dashboard UI</title>
          <meta name="description" content="Polkadot Dashboard UI" />
        </Head>
        <main className="p-4 flex flex-col gap-8 text-color-text-primary">
          <h3>
            Network:{" "}
            <button onClick={() => setNetwork("polkadot")}>Polkadot</button> |{" "}
            <button onClick={() => setNetwork("kusama")}>Kusama</button> |{" "}
            <button onClick={() => setNetwork("westend")}>Westend</button>.{" "}
            Theme: <button onClick={() => setTheme("light")}>Light</button> |{" "}
            <button onClick={() => setTheme("dark")}>Dark</button>
          </h3>
          <h1 className="text-3xl">Components</h1>
          <h2 className="text-xl">Button Primary</h2>

          <div>
            <ButtonPrimary text="Button" iconLeft={faUser} marginRight />
            <ButtonPrimary
              text="Button"
              iconLeft={faUser}
              marginRight
              colorSecondary
            />
            <ButtonPrimary
              text="Button"
              iconLeft={faUser}
              iconRight={faUser}
              lg
              marginRight
            />
            <ButtonPrimary text="Button" lg disabled />
          </div>

          <h2 className="text-xl">Button Secondary</h2>
          <div>
            <ButtonSecondary text="Button" marginRight />
            <ButtonSecondary text="Button" iconLeft={faUser} marginRight />
            <ButtonSecondary text="Button" iconRight={faUser} marginRight />
            <ButtonSecondary
              lg
              text="Button"
              iconLeft={faUser}
              iconRight={faUser}
              marginRight
            />
            <ButtonSecondary lg text="Button" disabled />
          </div>

          <h2 className="text-xl">Button Invert</h2>
          <div>
            <ButtonInvert text="Button" marginRight />
            <ButtonInvert text="Button" iconLeft={faUserReg} marginRight />
            <ButtonInvert text="Button" iconRight={faUserReg} marginRight />
            <ButtonInvert
              text="Button"
              iconLeft={faUserReg}
              iconRight={faUserReg}
              marginRight
            />
            <ButtonInvert text="Button" disabled />
          </div>

          <h2 className="text-xl">Button Invert Rounded</h2>
          <div>
            <ButtonInvertRounded text="Button" marginRight />
            <ButtonInvertRounded
              text="Button"
              iconLeft={faUserReg}
              marginRight
            />
            <ButtonInvertRounded
              text="Button"
              iconRight={faUserReg}
              marginRight
            />
            <ButtonInvertRounded
              lg
              text="Button"
              iconLeft={faUserReg}
              iconRight={faUserReg}
              marginRight
            />
            <ButtonInvertRounded lg text="Button" disabled />
          </div>

          <h2 className="text-xl">Button Submit</h2>
          <div>
            <ButtonSubmit text="Button" marginRight />
            <ButtonSubmit
              text="Button"
              iconLeft={faArrowAltCircleUp}
              marginRight
              colorSecondary
            />
            <ButtonSubmit
              text="Button"
              iconRight={faArrowAltCircleUp}
              marginRight
            />
            <ButtonSubmit
              text="Button"
              iconLeft={faArrowAltCircleUp}
              iconRight={faArrowAltCircleUp}
              marginRight
            />
            <ButtonSubmit text="Button" disabled />
          </div>
          <div>
            <input
              type="text"
              defaultValue="Input"
              onChange={() => {
                /* empty */
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
