// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { ButtonPrimary } from "../../lib/buttons/ButtonPrimary";
import { ButtonMono } from "../../lib/buttons/ButtonMono";
import { ButtonMonoInvert } from "../../lib/buttons/ButtonMonoInvert";
import { ButtonSecondary } from "../../lib/buttons/ButtonSecondary";
import { ButtonInvert } from "../../lib/buttons/ButtonInvert";
import { ButtonInvertRounded } from "../../lib/buttons/ButtonInvertRounded";
import { ButtonText } from "../../lib/buttons/ButtonText";
import { ButtonSubmit } from "../../lib/buttons/ButtonSubmit";
import { ButtonHelp } from "../../lib/buttons/ButtonHelp";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faUser as faUserReg,
} from "@fortawesome/free-regular-svg-icons";

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
    <h4>Button Help</h4>
    <div className="row">
      <ButtonHelp marginRight />
      <ButtonHelp backgroundSecondary />
    </div>
  </>
);
