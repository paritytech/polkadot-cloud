// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonPrimary } from "core-ui/buttons/ButtonPrimary";
import { ButtonPrimaryInvert } from "core-ui/buttons/ButtonPrimaryInvert";
import { ButtonMono } from "core-ui/buttons/ButtonMono";
import { ButtonMonoInvert } from "core-ui/buttons/ButtonMonoInvert";
import { ButtonSecondary } from "core-ui/buttons/ButtonSecondary";
import { ButtonSubmitInvert } from "core-ui/buttons/ButtonSubmitInvert";
import { ButtonText } from "core-ui/buttons/ButtonText";
import { ButtonSubmit } from "core-ui/buttons/ButtonSubmit";
import { ButtonHelp } from "core-ui/buttons/ButtonHelp";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faUser as faUserReg,
} from "@fortawesome/free-regular-svg-icons";
import { CodeDrawer } from "../components/CodeDrawer";

export const Buttons = () => (
  <>
    <h4>Button Primary</h4>

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
    <CodeDrawer>
      <code>
        <p>{`<ButtonPrimary text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<ButtonPrimary text="Button" iconLeft={faUser} marginRight colorSecondary />`}</p>
        <p>{`<ButtonPrimary text="Button" iconLeft={faUser} iconRight={faUser} lg marginRight />`}</p>
        <p>{`<ButtonPrimary text="Button" lg disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Primary Invert</h4>
    <div className="row">
      <ButtonPrimaryInvert text="Button" marginRight />
      <ButtonPrimaryInvert text="Button" iconLeft={faUserReg} marginRight />
      <ButtonPrimaryInvert text="Button" iconRight={faUserReg} marginRight />
      <ButtonPrimaryInvert
        lg
        text="Button"
        iconLeft={faUserReg}
        iconRight={faUserReg}
        marginRight
      />
      <ButtonPrimaryInvert lg text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<ButtonPrimaryInvert text="Button" marginRight />`}</p>
        <p>{`<ButtonPrimaryInvert text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<ButtonPrimaryInvert text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonPrimaryInvert lg text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonPrimaryInvert lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Secondary</h4>
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
    <CodeDrawer>
      <code>
        <p>{`<ButtonSecondary text="Button" marginRight />`}</p>
        <p>{`<ButtonSecondary text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<ButtonSecondary text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonSecondary lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonSecondary lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Mono</h4>
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
    <CodeDrawer>
      <code>
        <p>{`<ButtonMono text="Button" marginRight />`}</p>
        <p>{`<ButtonMono text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<ButtonMono text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonMono lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonMono lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Mono Invert</h4>
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
    <CodeDrawer>
      <code>
        <p>{`<ButtonMonoInvert text="Button" marginRight />`}</p>
        <p>{`<ButtonMonoInvert text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<ButtonMonoInvert text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonMonoInvert lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<ButtonMonoInvert lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Text</h4>
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
    <CodeDrawer>
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
    </CodeDrawer>

    <h4>Button Submit</h4>
    <div className="row">
      <ButtonSubmit text="Button" marginRight />
      <ButtonSubmit
        text="Button"
        iconLeft={faArrowAltCircleUp}
        marginRight
        colorSecondary
      />
      <ButtonSubmit text="Button" iconRight={faArrowAltCircleUp} marginRight />
      <ButtonSubmit
        text="Button"
        iconLeft={faArrowAltCircleUp}
        iconRight={faArrowAltCircleUp}
        marginRight
      />
      <ButtonSubmit text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<ButtonSubmit text="Button" marginRight />`}</p>
        <p>{`<ButtonSubmit text="Button" iconLeft={faArrowAltCircleUp} marginRight colorSecondary />`}</p>
        <p>{`<ButtonSubmit text="Button" iconRight={faArrowAltCircleUp} marginRight />`}</p>
        <p>{`<ButtonSubmit text="Button" iconLeft={faArrowAltCircleUp} iconRight={faArrowAltCircleUp} marginRight />`}</p>
        <p>{`<ButtonSubmit text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Submit Invert</h4>
    <div className="row">
      <ButtonSubmitInvert text="Button" marginRight />
      <ButtonSubmitInvert text="Button" iconLeft={faUserReg} marginRight />
      <ButtonSubmitInvert text="Button" iconRight={faUserReg} marginRight />
      <ButtonSubmitInvert
        text="Button"
        iconLeft={faUserReg}
        iconRight={faUserReg}
        marginRight
      />
      <ButtonSubmitInvert text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<ButtonSubmitInvert text="Button" marginRight />`}</p>
        <p>{`<ButtonSubmitInvert text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<ButtonSubmitInvert text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonSubmitInvert text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonSubmitInvert text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Help</h4>
    <div className="row">
      <ButtonHelp marginRight />
      <ButtonHelp backgroundSecondary />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<ButtonHelp marginRight />`}</p>
        <p>{`<ButtonHelp backgroundSecondary />`}</p>
      </code>
    </CodeDrawer>
  </>
);
