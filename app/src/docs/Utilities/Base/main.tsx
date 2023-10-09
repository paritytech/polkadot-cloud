/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { Camelize } from "./Camelize";
import { EllipsisFn } from "./EllipsisFn";
import { GreaterThanZero } from "./GreaterThanZero";
import { IsNotZero } from "./IsNotZero";
import { MinDecimalPlaces } from "./ΜinDecimalPlaces";
import { PageFromUri } from "./PageFromUri";
import { RmCommas } from "./RmCommas";
import { Shuffle } from "./Shuffle";
import { DocProps } from "@docs/types";
import { UtilsComponent } from "@docs/UtilsComponent";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Base Utilities"
        subtitle="A collection of reusable utilities for manipulating string / number / arrays etc."
        npm={npm}
        status="stable"
      />

      <UtilsComponent
        title="camelize"
        description="Converts a string of text to camelCase."
        params={[
          "@param (string): string to become camelCase.",
          "@returns (string): the input string, but camelCased.",
        ]}
        component={<Camelize />}
      />

      <UtilsComponent
        title="ellipsisFn"
        description="Receives an address and creates ellipsis on the given string, based on
        parameters."
        params={[
          "@param (string): The string to apply the ellipsis on.",
          "@param (number): The amount of characters that the ellipsis will be.",
        ]}
        component={<EllipsisFn />}
      />

      <UtilsComponent
        title="greaterThanZero"
        description="Returns whether a BigNumber is greater than zero."
        params={[
          "@param (BigNumber): the input to check against.",
          "@returns (boolean): the result of the fn.",
        ]}
        component={<GreaterThanZero />}
      />

      <UtilsComponent
        title="isNotZero"
        description="Returns whether a BigNumber is zero."
        params={[
          "@param (BigNumber): the input to check against.",
          "@returns (boolean): the result of the fn.",
        ]}
        component={<IsNotZero />}
      />

      <UtilsComponent
        title="minDecimalPlaces"
        description="Forces a number to have at least the provided decimal places."
        params={[
          "@param (string): string that we want to update the decimal places.",
          "@param (number): number of decimals to be adjusted.",
        ]}
        component={<MinDecimalPlaces />}
      />

      <UtilsComponent
        title="pageFromUri"
        description="Use url variables to load the default components upon the first page visit."
        params={[
          "@param (string): the url that we want to get the page from.",
          "@param (string): fallback string in case the url is wrong or empty.",
          "@returns (string): the value of the trimmed url.",
        ]}
        component={<PageFromUri />}
      />

      <UtilsComponent
        title="rmCommas"
        description="Removes the commas from a string."
        params={[
          "@param (string): the url that we want to get the page from.",
          "@returns (string): the result of the fn.",
        ]}
        component={<RmCommas />}
      />

      <UtilsComponent
        title="shuffle"
        description="Shuffle a set of objects."
        params={[
          "@param (array[object]): an array of objects.",
          "@returns (array[object]): the input array of objects but shuffled.",
        ]}
        component={<Shuffle />}
      />
    </>
  );
};
