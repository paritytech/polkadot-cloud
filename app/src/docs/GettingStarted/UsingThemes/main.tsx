import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { ThemeExample } from "./ThemeExample";
import { Note } from "@docs/Note";
import { AccentColorExample } from "./AccentColorExample";
import { ThemeColorExample } from "./ThemeColorExample";

export const Doc = ({ folder }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Themes and CSS Variables"
        subtitle="Polkadot Cloud UI components use CSS variables for custom styling."
        npm={undefined}
      />
      <h2>Introduction</h2>
      <p>
        Polkadot Cloud UI components use CSS variables so apps can customise
        their look and feel without having to delve into the component source
        code.
      </p>
      <p>
        Polkadot Cloud uses a 2-dimensional theme setup, meaning there are 2
        separate files for defining CSS variables that comprise a theme:
      </p>
      <ul>
        <li>
          An <code>accent</code> file: Defining colors and styles around a brand
          or identity.
        </li>
        <li>
          A <code>theme</code> file: A general light and dark theme
          configuration.
        </li>
      </ul>
      <p>
        Accent files have been used to allow unique styling for Polkadot,
        Kusama, and a few other identities.
        <br />
        <a
          href="https://github.com/paritytech/polkadot-cloud/tree/main/packages/cloud-core/lib/accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the full accent list here
        </a>
        .
      </p>
      <p>
        Theme files use accent CSS variables to provide the correct accent
        colors in light or dark mode. Themes also provide their preferred fonts
        if developers wish to use them.
        <br />
        <a
          href="https://github.com/paritytech/polkadot-cloud/tree/main/packages/cloud-core/lib/theme"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the full themes list here
        </a>
        .
      </p>

      <h3>How accent variables are applied to themes</h3>

      <p>
        As an intuitive example, an <code>accent</code> file defines the
        following 2 CSS variables to define a primary accent color in both light
        and dark styles:
      </p>

      <AccentColorExample />

      <p>
        From here, the <code>theme</code> file will provide a single CSS
        variable of <code>&#8209;&#8209;accent&#8209;color&#8209;primary</code>,
        depending on whether <code>theme&#8209;light</code> or{" "}
        <code>theme&#8209;dark</code> is being applied.
      </p>

      <ThemeColorExample />

      <Note>
        <p>
          <code>accent</code> files also host CSS variables for button styling
          and other miscellaneous styles. They are designed to be expanded as
          more requirements become apparent.
        </p>
      </Note>

      <h2>Using Themes</h2>

      <p>
        To use an accent and theme combo from Polkadot Cloud, simply import them
        into your project and wrap your component hierarchy with their
        corresponding classes. Both classes can be applied to the same element.
      </p>
      <p>
        The following example imports the <code>kusama&#8209;relay</code>{" "}
        accent, with the <code>default</code> theme, and wraps the app hierarchy
        with their classes:
      </p>
      <ThemeExample />
      <Note>
        <p>
          If you don't see a accent or theme that suits your needs, you can
          create your own and{" "}
          <a
            href="https://github.com/paritytech/polkadot-cloud/pulls"
            target="_blank"
            rel="noreferrer"
          >
            Submit a Pull Request
          </a>
          . We'd love to see a large variety of themes for parachain projects!
        </p>
      </Note>
    </>
  );
};
