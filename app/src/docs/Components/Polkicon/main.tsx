/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { Note } from "@docs/Note";
import { PolkiconSize } from "./PolkiconSize";
import { PolkiconTheme } from "./PolkiconTheme";
import { PolkiconColors } from "./PolkiconColors";
import { PolkiconCopy } from "./PolkiconCopy";
import { H2, H3 } from "@docs/Headers";
import { DocProps } from "@docs/types";

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
          <code>Polkicon</code>
        </a>{" "}
        is a light-weight component that renders the Polkadot icon, with various
        display options built in. By default, the <code>address</code> prop
        dictates which color palette the Polkicon will display.
      </p>
      <Note>
        <p>
          Polkicon currently supports the patterns of Polkadot, Kusama and
          Westend networks, with SS58 prefixes 0, 2, and 42 respectively.
          Patterns are dictated by the SS58 prefix of the address provided to
          the <code>Polkicon</code> component. To add support to other networks,
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
        Sizes can be provided as a <code>string</code> (in px or rem) (e.g.
        "32px", "2.4rem") or a <code>number</code> (e.g. 64). The default size
        is <code>2rem</code>.
      </p>
      <PolkiconSize />
      <H3 id="outer-color">Outer Color</H3>
      <p>
        The background color of <code>Polkicon</code> can be set with the{" "}
        <code>outerColor</code> prop. This is the color of the outermost circle
        of the icon. The default <code>outerColor</code> value is the{" "}
        <code>--background-default</code> variable, used throughout the Polkadot
        Cloud library of UI components.{" "}
      </p>
      <p>
        The default value can be overridden with a custom color, or be set to{" "}
        <code>transparent</code>.
      </p>
      <PolkiconTheme />
      <H3 id="custom-colors">Custom Colors</H3>
      <p>
        If a specific pattern or color combination is desired, the{" "}
        <code>colors</code> prop can be used to override the default color
        palette. The <code>colors</code> prop accepts an array of colors, which
        will be applied to the icon in the order they were provided.
      </p>
      <p>
        If the address provided to the polkadot icon is not a valid one (using
        the <code>isValidAddress</code> from <code>@polkadot-cloud/utils</code>
        ), then a generic "deactive" Polkicon wll appear;
      </p>
      <PolkiconColors />

      <H3 id="size">Copy functionality</H3>
      <p>
        Polkicon comes with a copy functionality which allows the user to copy
        the Icon's address. In order to use it the prop/flag <code>copy</code>{" "}
        should be active at the <code>Polkicon</code> tag (see examples below).
        When <code>copy</code> is active an optional parameter of{" "}
        <code>copyTimeout (in ms)</code> can be set in order to give specific
        transition time to the animation. The default timeout is{" "}
        <code>1000 ms - 1 sec</code>. Based on size provided
      </p>

      <PolkiconCopy />
      <hr className="md" />

      <H2 id="css-variables-used">CSS Variables Used</H2>

      <ul>
        <li>
          <code>--background-default</code>: Default Polkicon background color
          when <code>outerColor</code> is not defined.
        </li>
      </ul>
    </>
  );
};
