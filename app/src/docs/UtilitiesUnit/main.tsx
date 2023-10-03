import { Edit } from "../lib/Edit";
import { Header } from "../lib/Header";
import { PlanckToUnit } from "./PlanckToUnit";
import { TransformToBaseUnit } from "./TransformToBaseUnit";
import { UnitToPlanck } from "./UnitToPlanck";
import { DocProps } from "../lib/types";

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

      <h4 className="special_title">planckToUnit</h4>

      <hr />

      <h4>
        Converts an on chain balance value in BigNumber planck to a decimal
        value in token unit. (1 token = 10^units planck).
      </h4>

      <h4>@param (BigNumber): The Planck in BigNumber</h4>

      <h4>@param (number): the units</h4>

      <h4>@returns (BigNumber): the decimal value in token unit</h4>

      <PlanckToUnit />

      <h4 className="special_title">transformToBaseUnit</h4>

      <hr />

      <h4>
        The transformToBaseUnit function is used to transform a given estimated
        fee value from its current representation to its base unit
        representation, considering the provided chain decimals. The function is
        designed to handle cases where the chain decimals are either greater or
        less than the length of the estimated fee.
      </h4>

      <h4>
        @param (string)_ : The estimated fee value that needs to be transformed
        to its base unit representation.
      </h4>

      <h4>
        @param (number)_ : The number of decimal places used by the blockchain.
      </h4>

      <h4>@returns (string): the result of the functions</h4>

      <TransformToBaseUnit />

      <h4 className="special_title">unitToPlanck</h4>

      <hr />

      <h4>
        Converts a balance in token unit to an equivalent value in planck by
        applying the chain decimals ποιντ. (1 token = 10^units planck).
      </h4>

      <h4>@param (strnig): token balance</h4>

      <h4>@param (number): the units</h4>

      <h4>
        @returns (BigNumber): value in planck with applied the chain decimals
      </h4>

      <UnitToPlanck />
    </>
  );
};
