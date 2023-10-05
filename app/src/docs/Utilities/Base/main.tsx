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

      <h3>camelize</h3>
      <p>Converts a string of text to camelCase.</p>
      <div className="params">
        <p>
          <span>@param (string)</span>: string to become camelCase.
        </p>
        <p>
          <span>@returns (string)</span>: the input string, but camelCased.
        </p>
      </div>
      <Camelize />

      <h3>ellipsisFn</h3>
      <p>
        Receives an address and creates ellipsis on the given string, based on
        parameters.
      </p>
      <div className="params">
        <p>
          <span>@param (string)_</span>: The string to apply the ellipsis. on
        </p>
        <p>
          <span>@param (number)_</span>: The amount of characters that the
          ellipsis will be.
        </p>
        <p>
          <span>@param ("start" | "center" | "end")_</span>: where the ellipsis
          will apply; if "center" the amount of character is the same for
          beginning and end; if "start" or "end" then its only once the amount;
          defaults to "start".
        </p>
        <p>
          <span>@returns (string)</span>: the ellipsis-fied string.
        </p>
      </div>

      <EllipsisFn />

      <h3>greaterThanZero</h3>
      <p>Returns whether a BigNumber is greater than zero.</p>
      <div className="params">
        <p>
          <span>@param (BigNumber)</span>: the input to check against.
        </p>
        <p>
          <span>@returns (boolean)</span>: the result of the fn.
        </p>
      </div>

      <GreaterThanZero />

      <h3>isNotZero</h3>
      <p>Returns whether a BigNumber is zero.</p>

      <div className="params">
        <p>
          <span>@param (BigNumber)</span>: the input to check against.
        </p>
        <p>
          <span>@returns (boolean)</span>: the result of the fn.
        </p>
      </div>
      <IsNotZero />

      <h3>minDecimalPlaces</h3>
      <p>Forces a number to have at least the provided decimal places.</p>
      <div className="params">
        <p>
          <span>@param (string)</span>: string that we want to update the
          decimal places.
        </p>
        <p>
          <span>@param (number)</span>: number of decimals to be adjusted.
        </p>
      </div>

      <MinDecimalPlaces />

      <h3>pageFromUri</h3>
      <p>
        Use url variables to load the default components upon the first page
        visit.
      </p>
      <div className="params">
        <p>
          <span>@param (string)</span>: the url that we want to get the page
          from.
        </p>
        <p>
          <span>@param (string)</span>: fallback string in case the url is wrong
          or empty.
        </p>
        <p>
          <span>@returns (string)</span>: the value of the trimmed url.
        </p>
      </div>

      <PageFromUri />

      <h3>rmCommas</h3>
      <p>Removes the commas from a string.</p>
      <div className="params">
        <p>
          <span>@param (string)</span>: the url that we want to get the page
          from.
        </p>
        <p>
          <span>@returns (string)</span>: the result of the fn.
        </p>
      </div>
      <RmCommas />

      <h3>shuffle</h3>
      <p>Shuffle a set of objects.</p>
      <div className="params">
        <p>
          <span>@param (array[object])</span>: an array of objects.
        </p>
        <p>
          <span>@returns (array[object])</span>: the input array of objects but
          shuffled.
        </p>
      </div>
      <Shuffle />
    </>
  );
};
