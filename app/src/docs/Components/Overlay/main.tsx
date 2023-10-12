/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Note } from "@docs/Note";
import { Header } from "@docs/Header";
import { OverlayProvider } from "./OverlayProvider";
import { OverlayBasic } from "./OverlayBasic";
import { OpenOverlay } from "./OpenOverlay";
import { H2, H3, H4 } from "@docs/Headers";
import { DocProps } from "@docs/types";
import { OverlayConfig } from "./OverlayConfig";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Overlay"
        subtitle="Overlay Provider and UI component for modals and overlaying content."
        npm={npm}
        status="stable"
      />
      <p>
        An{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/overlay/OverlayProvider/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>OverlayProvider</code>
        </a>{" "}
        context and{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/overlay/Overlay/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Overlay</code>
        </a>{" "}
        UI component are provided for apps to manage the state of modals and
        overlaying content out of the box.
      </p>
      <Note>
        <p>
          <code>OverlayProvider</code> is a headless component, and usage of{" "}
          <code>Overlay</code> is not compulsary. Apps can host thier own custom
          UI for modals and overlaying content, and use the provided{" "}
          <code>OverlayProvider</code> and <code>useOverlay</code> hook to make
          the UI functional.
        </p>
      </Note>
      <Note>
        <p>
          <a
            href="https://staking.polkadot.network"
            target="_blank"
            rel="noreferrer"
          >
            Polkadot Staking Dashboard
          </a>{" "}
          has integrated modals using the components in this doc. Perform
          actions like opening your account list, or opening the wallet
          connection options, to observe the modal behavior.
        </p>
      </Note>

      <hr className="md" />

      <H2 id="basic-modal">Basic Modal Integration</H2>
      <p>
        Integrating modal functionality into React apps is as simple as wrapping
        your component tree with the <code>OverlayProvider</code> component, and
        injecting your provided modal UI into the <code>Overlay</code>{" "}
        component.
      </p>
      <H3 id="basic-overlay-provider">1. Wrap your app with OverlayProvider</H3>
      <p>
        Import and add the <code>OverlayProvider</code> component to the root of
        your app, or above any components that require the overlay API.{" "}
      </p>
      <OverlayProvider />
      <H3 id="basic-overlay-component">
        2. Nest the Overlay component and provide modals
      </H3>
      <p>
        Import and nest <code>Overlay</code> inside <code>OverlayProvider</code>
        . Use the <code>modals</code> prop to import an array of components you
        wish to be opened as a modal.
      </p>
      <p>
        The following example provides 2 modals to the <code>Overlay</code>{" "}
        component, as well as a fallback modal, that is rendered when an error
        occurs.{" "}
      </p>
      <OverlayBasic />
      <Note>
        <p>
          The fallback modal is just implementing{" "}
          <a
            href="https://www.npmjs.com/package/react-error-boundary"
            target="_blank"
            rel="noreferrer"
          >
            React Error Boundary
          </a>{" "}
          to catch any errors that occur in the modals.
        </p>
      </Note>
      <H3 id="basic-use-overlay">3. Open modals with the useOverlay hook</H3>
      <p>
        Import the <code>useOverlay</code> hook and use it to open and close
        modals. The modal component name itself acts as the key of the modal to
        open.
      </p>
      <p>The following example shows how modals can be opened:</p>
      <OpenOverlay />
      <H4 id="size-and-options">Modal size and options</H4>
      <p>
        Modal size can be set using the <code>size</code> property.
      </p>
      <p>
        Custom data can be made available to your app with the{" "}
        <code>options</code> property. This data can be accessed inside modal
        components with <code>useOverlay</code>:
      </p>

      <OverlayConfig />

      <hr className="md" />

      <H2 id="css-variables-used">CSS Variables Used</H2>
      <ul>
        <li>
          <code>--modal-background-color</code>: Overlay color of screen when
          modal is open.
        </li>
        <li>
          <code>--text-color-primary</code>: Default color of modal.
        </li>
        <li>
          <code>--background-modal</code>: Modal card background.
        </li>
        <li>
          <code>--transition-duration</code>: Duration of modal transitions.
        </li>
        <li>
          <code>--accent-color-primary</code>: Default text color of modal links
          and butons.
        </li>
      </ul>
    </>
  );
};
