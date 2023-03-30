// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from "react";
import { CodeDrawer } from "./CodeDrawer";

import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";
import { ButtonMono } from "../lib/buttons/ButtonMono";
import { ButtonMonoInvert } from "../lib/buttons/ButtonMonoInvert";
import { ButtonSecondary } from "../lib/buttons/ButtonSecondary";
import { ButtonInvert } from "../lib/buttons/ButtonInvert";
import { ButtonInvertRounded } from "../lib/buttons/ButtonInvertRounded";
import { ButtonText } from "../lib/buttons/ButtonText";
import { ButtonSubmit } from "../lib/buttons/ButtonSubmit";
import { ButtonHelp } from "../lib/buttons/ButtonHelp";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faUser as faUserReg,
} from "@fortawesome/free-regular-svg-icons";

/*
 * Sandbox page for component tests and class inclusion.
 */
const Home = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  return (
    <>
      <main className={`theme-${network} theme-${theme}`}>
        <div className="sidenav">
          <h5>
            <button onClick={() => setNetwork("polkadot")}>Polkadot</button> |{" "}
            <button onClick={() => setNetwork("kusama")}>Kusama</button> |{" "}
            <button onClick={() => setNetwork("westend")}>Westend</button>.{" "}
            Theme: <button onClick={() => setTheme("light")}>Light</button> |{" "}
            <button onClick={() => setTheme("dark")}>Dark</button>
          </h5>
        </div>
        <div className="body">
          <h3>Button Primary</h3>

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
          <CodeDrawer label="Show Code" finalHeight={130}>
            <div className="content">
              <code>
                <p>{`<ButtonPrimary text="Button" iconLeft={faUser} marginRight />`}</p>
                <p>{`<ButtonPrimary text="Button" iconLeft={faUser} marginRight colorSecondary />`}</p>
                <p>{`<ButtonPrimary text="Button" iconLeft={faUser} iconRight={faUser} lg marginRight />`}</p>
                <p>{`<ButtonPrimary text="Button" lg disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Secondary</h3>
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

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonSecondary text="Button" marginRight />`}</p>
                <p>{`<ButtonSecondary text="Button" iconLeft={faUser} marginRight />`}</p>
                <p>{`<ButtonSecondary text="Button" iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonSecondary lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonSecondary lg text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Mono</h3>
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

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonMono text="Button" marginRight />`}</p>
                <p>{`<ButtonMono text="Button" iconLeft={faUser} marginRight />`}</p>
                <p>{`<ButtonMono text="Button" iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonMono lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonMono lg text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Mono Invert</h3>
          <div className="row">
            <ButtonMonoInvert text="Button" marginRight />
            <ButtonMonoInvert text="Button" iconLeft={faUser} marginRight />
            <ButtonMonoInvert text="Button" iconRight={faUser} marginRight />
            <ButtonMonoInvert
              lg
              text="Button"
              iconLeft={faUser}
              iconRight={faUser}
              marginRight
            />
            <ButtonMonoInvert lg text="Button" disabled />
          </div>

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonMonoInvert text="Button" marginRight />`}</p>
                <p>{`<ButtonMonoInvert text="Button" iconLeft={faUser} marginRight />`}</p>
                <p>{`<ButtonMonoInvert text="Button" iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonMonoInvert lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
                <p>{`<ButtonMonoInvert lg text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Invert</h3>
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

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonInvert text="Button" marginRight />`}</p>
                <p>{`<ButtonInvert text="Button" iconLeft={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvert text="Button" iconRight={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvert text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvert text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Invert Rounded</h3>
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

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonInvertRounded text="Button" marginRight />`}</p>
                <p>{`<ButtonInvertRounded text="Button" iconLeft={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvertRounded text="Button" iconRight={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvertRounded lg text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
                <p>{`<ButtonInvertRounded lg text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Text</h3>
          <div className="row">
            <ButtonText text="Button" marginRight />
            <ButtonText text="Button" iconLeft={faUserReg} marginRight />
            <ButtonText text="Button" iconRight={faUserReg} marginRight />
            <ButtonText
              text="Button"
              iconLeft={faUserReg}
              iconRight={faUserReg}
              marginRight
            />
            <ButtonText text="Button" disabled />
          </div>

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonText text="Button" marginRight />`}</p>
                <p>{`<ButtonText text="Button" iconLeft={faUserReg} marginRight />`}</p>
                <p>{`<ButtonText text="Button" iconRight={faUserReg} marginRight />`}</p>
                <p>{`<ButtonText
                  text="Button"
                  iconLeft={faUserReg}
                  iconRight={faUserReg}
                  marginRight
                />`}</p>
                <p>{`<ButtonText text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h3>Button Submit</h3>
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

          <CodeDrawer label="Show Code" finalHeight={150}>
            <div className="content">
              <code>
                <p>{`<ButtonSubmit text="Button" marginRight />`}</p>
                <p>{`<ButtonSubmit text="Button" iconLeft={faArrowAltCircleUp} marginRight colorSecondary />`}</p>
                <p>{`<ButtonSubmit text="Button" iconRight={faArrowAltCircleUp} marginRight />`}</p>
                <p>{`<ButtonSubmit text="Button" iconLeft={faArrowAltCircleUp} iconRight={faArrowAltCircleUp} marginRight />`}</p>
                <p>{`<ButtonSubmit text="Button" disabled />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />

          <h4>Button Help</h4>
          <div className="row">
            <ButtonHelp marginRight />
            <ButtonHelp backgroundSecondary />
          </div>

          <CodeDrawer label="Show Code" finalHeight={80}>
            <div className="content">
              <code>
                <p>{`<ButtonHelp marginRight />`}</p>
                <p>{`<ButtonHelp backgroundSecondary />`}</p>
              </code>
            </div>
          </CodeDrawer>
          <div className="rowDivider" />
        </div>
      </main>
    </>
  );
};

export default Home;
