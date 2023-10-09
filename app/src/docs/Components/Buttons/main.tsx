/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonPrimaryInvert } from "./ButtonPrimaryInvert";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonTertiary } from "./ButtonTertiary";
import { ButtonMono } from "./ButtonMono";
import { ButtonMonoInvert } from "./ButtonMonoInvert";
import { ButtonText } from "./ButtonText";
import { ButtonSubmit } from "./ButtonSubmit";
import { ButtonSubmitInvert } from "./ButtonSubmitInvert";
import { ButtonHelp } from "./ButtonHelp";
import { ButtonTab } from "./ButtonTab";
import { H3 } from "@docs/Headers";
import { DocProps } from "@docs/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Buttons"
        subtitle="A small collection of plug-and-play button components."
        npm={npm}
        status="stable"
      />

      <H3 id="button-primary">Button Primary</H3>

      <ButtonPrimary />

      <H3 id="button-primary-invert">Button Primary Invert</H3>

      <ButtonPrimaryInvert />

      <H3 id="button-secondary">Button Secondary</H3>

      <ButtonSecondary />

      <H3 id="button-tertiary">Button Tertiary</H3>

      <ButtonTertiary />

      <H3 id="button-mono">Button Mono</H3>

      <ButtonMono />

      <H3 id="button-mono-invert">Button Mono Invert</H3>

      <ButtonMonoInvert />

      <H3 id="button-text">Button Text</H3>

      <ButtonText />

      <H3 id="button-submit">Button Submit</H3>

      <ButtonSubmit />

      <H3 id="button-submit-invert">Button Submit Invert</H3>

      <ButtonSubmitInvert />

      <H3 id="button-help">Button Help</H3>

      <ButtonHelp />

      <H3 id="button-tab">Button Tab</H3>

      <ButtonTab />
    </>
  );
};
