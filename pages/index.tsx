import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";
import { ButtonMono } from "../lib/buttons/ButtonMono";
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
        <main>
          <h3>
            Network:{" "}
            <button onClick={() => setNetwork("polkadot")}>Polkadot</button> |{" "}
            <button onClick={() => setNetwork("kusama")}>Kusama</button> |{" "}
            <button onClick={() => setNetwork("westend")}>Westend</button>.{" "}
            Theme: <button onClick={() => setTheme("light")}>Light</button> |{" "}
            <button onClick={() => setTheme("dark")}>Dark</button>
          </h3>
          <h1>Components</h1>
          <h2>Button Primary</h2>

          <div className="row">
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

          <h2>Button Secondary</h2>
          <div className="row">
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

          <h2>Button Mono</h2>
          <div className="row">
            <ButtonMono text="Button" marginRight />
            <ButtonMono text="Button" iconLeft={faUser} marginRight />
            <ButtonMono text="Button" iconRight={faUser} marginRight />
            <ButtonMono
              lg
              text="Button"
              iconLeft={faUser}
              iconRight={faUser}
              marginRight
            />
            <ButtonMono lg text="Button" disabled />
          </div>

          <h2>Button Invert</h2>
          <div className="row">
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

          <h2>Button Invert Rounded</h2>
          <div className="row">
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

          <h2>Button Submit</h2>
          <div className="row">
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
