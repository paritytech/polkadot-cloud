import { Link } from "react-router-dom";
import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { CSSThemes } from "./CSSThemes";
import { InstallReact } from "./InstallReact";
import { InstallReactCore } from "./InstallReactCore";
import { InstallBasic } from "./InstallBasic";
import { Note } from "@docs/Note";

export const Doc = ({ folder }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Installation"
        subtitle="Install Polkadot Cloud packages and super charge your Polkadot app."
        npm={undefined}
      />
      <h2>Basic Installation</h2>
      <p>
        If your project requires Polkadot Cloud CSS variables, assets, or
        utilities, install the following dependencies:
      </p>
      <InstallBasic />
      <p>These packages provide static (non-functional) assets and data:</p>
      <ul>
        <li>
          The <code>core</code> package will give your project theme templates
          that comprise of CSS variables.
        </li>
        <li>
          The <code>assets</code> package will give your project access to the
          library of <Link to="/extensions">data and assets</Link>.
        </li>
        <li>
          The <code>utils</code> package will install commonly used{" "}
          <Link to="/base_utilities">utility functions</Link>.
        </li>
      </ul>

      <h2>Installation for React</h2>

      <p>
        Many of the UI components of <code>@polkadot&#8209;cloud/react</code>{" "}
        use CSS variables from <code>@polkadot&#8209;cloud/core</code>. If you
        are only using headless components from <code>react</code>, then{" "}
        <code>core</code> is not required and <code>react</code> can be
        installed on its own:
      </p>

      <InstallReact />

      <p>
        If however you wish to use fully fledged UI components out of the box,
        read on.
      </p>
      <h3>With CSS Variables</h3>
      <p>
        Firstly, install <code>core</code> and <code>react</code> packages
        together:
      </p>
      <InstallReactCore />
      <p>
        Next, import the <code>default</code> template and{" "}
        <code>polkadot-relay</code> theme at the top of your component
        hierarchy, and wrap your components with the corresponding classes.
        Every component under these classes will have access to the imported CSS
        variables.
      </p>

      <CSSThemes />

      <p>
        That's it! You're now ready to start using Polkadot Cloud UI components.
      </p>

      <Note>
        <p>
          Importing theme files can quickly bootstrap your project, but you can
          also simply define the CSS variables you require in your own CSS
          files.
        </p>
        <p>
          To see which CSS variables are required for each component, refer to
          their documentation.
        </p>
      </Note>

      <Note>
        <p>
          If you don't see a theme or template that suits your needs, you can
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
