import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { PlanckToUnit } from "./PlanckToUnit";
import { TransformToBaseUnit } from "./TransformToBaseUnit";
import { UnitToPlanck } from "./UnitToPlanck";
import { DocProps } from "@docs/types";

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

      <h3>planckToUnit</h3>
      <p>
        Converts an on chain balance value in BigNumber planck to a decimal
        value in token unit. (1 token = 10^units planck).
      </p>

      <div className="params">
        <p>
          <span>@param (BigNumber)</span>: The Planck in BigNumber
        </p>
        <p>
          <span>@param (number)</span>: the units
        </p>
        <p>
          <span>@returns (BigNumber)</span>: the decimal value in token unit
        </p>
      </div>

      <PlanckToUnit />

      <h3>transformToBaseUnit</h3>
      <p>
        The transformToBaseUnit function is used to transform a given estimated
        fee value from its current representation to its base unit
        representation, considering the provided chain decimals. The function is
        designed to handle cases where the chain decimals are either greater or
        less than the length of the estimated fee.
      </p>
      <div className="params">
        <p>
          <span>@param (string)_</span>: The estimated fee value that needs to
          be transformed to its base unit representation.
        </p>
        <p>
          <span>@param (number)_</span>: The number of decimal places used by
          the blockchain.
        </p>
        <p>
          <span>@returns (string)</span>: the result of the functions
        </p>
      </div>

      <TransformToBaseUnit />

      <h3>unitToPlanck</h3>
      <p>
        Converts a balance in token unit to an equivalent value in planck by
        applying the chain decimals ποιντ. (1 token = 10^units planck).
      </p>
      <div className="params">
        <p>
          <span>@param (strnig)</span>: token balance
        </p>
        <p>
          <span>@param (number)</span>: the units
        </p>
        <p>
          <span>@returns (BigNumber)</span>: value in planck with applied the
          chain decimals
        </p>
      </div>
      <UnitToPlanck />
    </>
  );
};
