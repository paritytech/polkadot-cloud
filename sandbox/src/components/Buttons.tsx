// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonPrimary } from "core-ui/buttons/ButtonPrimary";
import { ButtonMono } from "core-ui/buttons/ButtonMono";
import { ButtonMonoInvert } from "core-ui/buttons/ButtonMonoInvert";
import { ButtonSecondary } from "core-ui/buttons/ButtonSecondary";
import { ButtonInvert } from "core-ui/buttons/ButtonInvert";
import { ButtonInvertRounded } from "core-ui/buttons/ButtonInvertRounded";
import { ButtonText } from "core-ui/buttons/ButtonText";
import { ButtonSubmit } from "core-ui/buttons/ButtonSubmit";
import { ButtonHelp } from "core-ui/buttons/ButtonHelp";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faUser as faUserReg,
} from "@fortawesome/free-regular-svg-icons";
import { CodeDrawer } from "./CodeDrawer";

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

    <h4>Button Invert</h4>
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
    <CodeDrawer>
      <code>
        <p>{`<ButtonInvert text="Button" marginRight />`}</p>
        <p>{`<ButtonInvert text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvert text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvert text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvert text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>

    <h4>Button Invert Rounded</h4>
    <div className="row">
      <ButtonInvertRounded text="Button" marginRight />
      <ButtonInvertRounded text="Button" iconLeft={faUserReg} marginRight />
      <ButtonInvertRounded text="Button" iconRight={faUserReg} marginRight />
      <ButtonInvertRounded
        lg
        text="Button"
        iconLeft={faUserReg}
        iconRight={faUserReg}
        marginRight
      />
      <ButtonInvertRounded lg text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<ButtonInvertRounded text="Button" marginRight />`}</p>
        <p>{`<ButtonInvertRounded text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvertRounded text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvertRounded lg text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
        <p>{`<ButtonInvertRounded lg text="Button" disabled />`}</p>
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
