import { Edit } from "../lib/Edit";
import { Note } from "../lib/Note";
import { Header } from "../lib/Header";
import { OverlayProvider } from "./OverlayProvider";
import { OverlayBasic } from "./OverlayBasic";
import { OpenOverlay } from "./OpenOverlay";
import { H2, H3, H4 } from "../lib/Headers";
import { DocProps } from "../lib/types";
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
          `OverlayProvider`
        </a>{" "}
        context and{" "}
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/overlay/Overlay/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          `Overlay`
        </a>{" "}
        UI component are provided for apps to manage the state of modals and
        overlaying content out of the box.
      </p>
      <Note>
        <p>
          `OverlayProvider` is a headless component, and usage of `Overlay` is
          not compulsary. Apps can host thier own custom UI for modals and
          overlaying content, and use the provided `OverlayProvider` and
          `useOverlay` hook to make the UI functional.
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
      <H2 id="basic-modal">Basic Modal Integration</H2>
      <p>
        Integrating modal functionality into React apps is as simple as wrapping
        your component tree with the `OverlayProvider` component, and injecting
        your provided modal UI into the `Overlay` component.
      </p>
      <H3 id="basic-overlay-provider">1. Wrap your app with OverlayProvider</H3>
      <p>
        Import and add the `OverlayProvider` component to the root of your app,
        or above any components that require the overlay API.{" "}
      </p>
      <OverlayProvider />
      <H3 id="basic-overlay-component">
        2. Nest the Overlay component and provide modals
      </H3>
      <p>
        Import and nest `Overlay` inside `OverlayProvider`. Use the `modals`
        prop to import an array of components you wish to be opened as a modal.
      </p>
      <p>
        The following example provides 2 modals to the `Overlay` component, as
        well as a fallback modal, that is rendered when an error occurs.{" "}
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
        Import the `useOverlay` hook and use it to open and close modals. The
        modal component name itself acts as the key of the modal to open.
      </p>
      <p>The following example shows how modals can be opened:</p>
      <OpenOverlay />
      <H4 id="size-and-options">Modal size and options</H4>
      <p>Modal size can be set using the `size` property.</p>
      <p>
        Custom data can be made available to your app with the `options`
        property. This data can be accessed inside modal components with
        `useOverlay`:
      </p>
      <OverlayConfig />
    </>
  );
};
