import { Edit } from "../lib/Edit";
import { Header } from "../lib/Header";
import { Note } from "../lib/Note";
import { PolkiconSize } from "./PolkiconSize";
import { PolkiconTheme } from "./PolkiconTheme";
import { PolkiconColors } from "./PolkiconColors";
import { H3 } from "../lib/Headers";
import { DocProps } from "../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Polkicon"
        subtitle="A light-weight and customisable Polkadot Icon."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/icons/Polkicon/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          `Polkicon`
        </a>{" "}
        is a light-weight component that renders the Polkadot icon, with various
        display options built in. By default, the `address` prop dictates which
        color palette the Polkicon will display.
      </p>
      <Note>
        <p>
          Polkicon currently supports the patterns of Polkadot, Kusama and
          Westend networks, with SS58 prefixes 0, 2, and 42 respectively.
          Patterns are dictated by the SS58 prefix of the address provided to
          the `Polkicon` component. To add support to other networks,
          contributors are welcome to{" "}
          <a
            href="https://github.com/paritytech/polkadot-cloud/pulls"
            target="_blank"
            rel="noreferrer"
          >
            Submit a Pull Request
          </a>
          .
        </p>
      </Note>
      <H3 id="size">Size</H3>
      <p>
        Sizes can be provided as a `string` (in rem) or a `number` (in pixels).
        The default size is `2rem`.
      </p>
      <PolkiconSize />
      <H3 id="outer-color">Outer Color</H3>
      <p>
        The background color of `Polkicon` can be set with the `outerColor`
        prop. This is the color of the outermost circle of the icon. The default
        `outerColor` value is the `--background-default` variable, used
        throughout the Polkadot Cloud library of UI components.{" "}
      </p>
      <p>
        The default value can be overridden with a custom color, or be set to
        `transparent`.
      </p>
      <PolkiconTheme />
      <H3 id="custom-colors">Custom Colors</H3>
      <p>
        If a specific pattern or color combination is desired, the `colors` prop
        can be used to override the default color palette. The `colors` prop
        accepts an array of colors, which will be applied to the icon in the
        order they were provided.
      </p>
      <PolkiconColors />
    </>
  );
};
