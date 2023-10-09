/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { PlanckToUnit } from "./PlanckToUnit";
import { TransformToBaseUnit } from "./TransformToBaseUnit";
import { UnitToPlanck } from "./UnitToPlanck";
import { DocProps } from "@docs/types";
import { UtilsComponent } from "@docs/UtilsComponent";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Unit Utilities"
        subtitle="A collection of reusable utilities for manipulating chain units."
        npm={npm}
        status="stable"
      />

      <UtilsComponent
        title="planckToUnit"
        description="Converts an on chain balance value in BigNumber planck to a decimal value in token unit. (1 token = 10^units planck)."
        params={[
          "@param (BigNumber): The Planck in BigNumber.",
          "@param (number): the units.",
          "@returns (BigNumber): the decimal value in token unit.",
        ]}
        component={<PlanckToUnit />}
      />

      <UtilsComponent
        title="transformToBaseUnit"
        description="The transformToBaseUnit function is used to transform a given estimated fee value from its current representation to its base unit representation, considering the provided chain decimals. The function is designed to handle cases where the chain decimals are either greater or less than the length of the estimated fee."
        params={[
          "@param (string): The estimated fee value that needs to be transformed to its base unit representation.",
          "@param (number): The number of decimal places used by the blockchain.",
          "@returns (string): the result of the functions.",
        ]}
        component={<TransformToBaseUnit />}
      />

      <UtilsComponent
        title="unitToPlanck"
        description="Converts a balance in token unit to an equivalent value in planck by applying the chain decimals ποιντ. (1 token = 10^units planck)."
        params={[
          "@param (string): token balance.",
          "@param (number): the units.",
          "@returns (BigNumber): value in planck with applied the chain decimals.",
        ]}
        component={<UnitToPlanck />}
      />
    </>
  );
};
