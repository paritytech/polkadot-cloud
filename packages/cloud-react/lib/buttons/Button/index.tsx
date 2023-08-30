/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ButtonPrimary, ButtonPrimaryProps } from "../ButtonPrimary";
import {
  ButtonPrimaryInvert,
  ButtonPrimaryInvertProps,
} from "../ButtonPrimaryInvert";
import { ButtonSecondary, ButtonSecondaryProps } from "../ButtonSecondary";
import { ButtonTertiary, ButtonTertiaryProps } from "../ButtonTertiary";
import { ButtonMono, ButtonMonoProps } from "../ButtonMono";
import { ButtonMonoInvert } from "../ButtonMonoInvert";
import {
  ButtonSubmitInvert,
  ButtonSubmitInvertProps,
} from "../ButtonSubmitInvert";
import { ButtonText } from "../ButtonText";
import { ButtonSubmit, ButtonSubmitProps } from "../ButtonSubmit";
import { ButtonHelp, ButtonHelpProps } from "../ButtonHelp";
import { ButtonTab, ButtonTabProps } from "../ButtonTab";
import { ButtonOption, ButtonOptionProps } from "../ButtonOption";
import { ButtonProps } from "../types";

export const Button = (props: ButtonProps) => {
  const { type } = props;

  switch (type) {
    case "help": {
      const p = props as ButtonHelpProps;
      return <ButtonHelp {...p} />;
    }
    case "mono": {
      const p = props as ButtonMonoProps;
      return <ButtonMono {...p} />;
    }
    case "monoInvert": {
      const p = props as ButtonMonoProps;
      return <ButtonMonoInvert {...p} />;
    }
    case "option": {
      const p = props as ButtonOptionProps;
      return <ButtonOption {...p} />;
    }
    case "primaryInvert": {
      const p = props as ButtonPrimaryInvertProps;
      return <ButtonPrimaryInvert {...p} />;
    }
    case "secondary": {
      const p = props as ButtonSecondaryProps;
      return <ButtonSecondary {...p} />;
    }
    case "submit": {
      const p = props as ButtonSubmitProps;
      return <ButtonSubmit {...p} />;
    }
    case "submitInvert": {
      const p = props as ButtonSubmitInvertProps;
      return <ButtonSubmitInvert {...p} />;
    }
    case "tab": {
      const p = props as ButtonTabProps;
      return <ButtonTab {...p} />;
    }
    case "tertiary": {
      const p = props as ButtonTertiaryProps;
      return <ButtonTertiary {...p} />;
    }
    case "text": {
      const p = props as ButtonMonoProps;
      return <ButtonText {...p} />;
    }
    case "primary":
    default: {
      const p = props as ButtonPrimaryProps;
      return <ButtonPrimary {...p} />;
    }
  }
};
