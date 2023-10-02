import { Edit } from "../lib/Edit";
import { Header } from "../lib/Header";
import { Camelize } from "./Camelize";
import { EllipsisFn } from "./EllipsisFn";
import { GreaterThanZero } from "./GreaterThanZero";
import { IsNotZero } from "./IsNotZero";
import { MinDecimalPlaces } from "./ΜinDecimalPlaces";
import { PageFromUri } from "./PageFromUri";
import { RmCommas } from "./RmCommas";
import { Shuffle } from "./Shuffle";
import { DocProps } from "../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Base Utilities"
        subtitle="A collection of reusable utilities for manipulating string/number/arrays etc."
        npm={npm}
        status="stable"
      />

      <h4 className="special_title">camelize</h4>

      <hr />

      <h4>Converts a string of text to camelCase.</h4>
      <h4>@param (string): string to become camelCase</h4>
      <h4>@returns (string): the input string, but camelCased</h4>

      <Camelize />

      <h4 className="special_title">ellipsisFn</h4>

      <hr />

      <h4>
        Receives an address and creates ellipsis on the given string, based on
        parameters.
      </h4>

      <h4>@param (string)_ : The string to apply the ellipsis on</h4>
      <h4>
        @param (number)_ : The amount of characters that the ellipsis will be
      </h4>
      <h4>
        @param ("start" | "center" | "end")_ : where the ellipsis will apply; if
        "center" the amount of character is the same for beginning and end; if
        "start" or "end" then its only once the amount; defaults to "start"
      </h4>
      <h4>@returns (string): the ellipsis-fied string</h4>

      <EllipsisFn />

      <h4 className="special_title">greaterThanZero</h4>

      <hr />

      <h4>Returns whether a BigNumber is greater than zero.</h4>
      <h4>@param (BigNumber): the input to check against</h4>
      <h4>@returns (boolean): the result of the fn</h4>

      <GreaterThanZero />

      <h4 className="special_title">isNotZero</h4>

      <hr />

      <h4>Returns whether a BigNumber is zero.</h4>
      <h4>@param (BigNumber): the input to check against</h4>
      <h4>@returns (boolean): the result of the fn</h4>
      <IsNotZero />

      <h4 className="special_title">minDecimalPlaces</h4>

      <hr />

      <h4>Forces a number to have at least the provided decimal places.</h4>
      <h4>@param (string): string that we want to update the decimal places</h4>
      <h4>@param (number): number of decimals to be adjusted</h4>

      <MinDecimalPlaces />

      <h4 className="special_title">pageFromUri</h4>

      <hr />

      <h4>
        Use url variables to load the default components upon the first page
        visit.
      </h4>
      <h4>@param (string): the url that we want to get the page from</h4>
      <h4>
        @param (string): fallback string in case the url is wrong or empty
      </h4>
      <h4>@returns (string): the value of the trimmed url</h4>

      <PageFromUri />

      <h4 className="special_title">rmCommas</h4>

      <hr />

      <h4>Removes the commas from a string</h4>
      <h4>@param (string): the url that we want to get the page from</h4>
      <h4>@returns (string): the result of the fn</h4>

      <RmCommas />

      <h4 className="special_title">shuffle</h4>

      <hr />

      <h4>Shuffle a set of objects</h4>
      <h4>@param (array[object]): an array of objects</h4>
      <h4>@returns (array[object]): the input array of objects but shuffled</h4>

      <Shuffle />
    </>
  );
};
