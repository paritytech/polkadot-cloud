import { Edit } from "../../lib/Edit";
import { Note } from "../../lib/Note";
import { Header } from "../../lib/Header";
import { OdometerH1 } from "./OdometerH1";
import { H3 } from "../../lib/Headers";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Odometer"
        subtitle="An odometer effect used for numbers and balances."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/complex/Odometer/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Odeometer</code>
        </a>{" "}
        is a component that can be used to display numbers and balances. It has
        a smooth animation when the value changes, and adopts a 2-tone design
        for whole and decimal figures.
      </p>
      <p>Comma formatted numbers and decimals are supported.</p>
      <H3 id="example">Odometer Example</H3>
      <OdometerH1 />
      <p>
        Odometer is wrapped in a span element, but it is recommended to embed it
        within a header or paragraph tag so it inherits font size, line height
        and text styling.
      </p>
      <Note>
        <p>
          Odometer has been tested with header tags 1-5, paragraphs and divs.
        </p>
      </Note>
    </>
  );
};
