/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Loader } from "../../../packages/core-ui/lib/loader/Loader";
import { CodeDrawer } from "../components/CodeDrawer";
import { Separator } from "../../../packages/core-ui/lib/core/Separator";

export const LoadersPage = () => {
  return (
    <>
      <div style={{ height: "17rem", padding: "7rem" }}>
        <Loader type="line" text="loading..." />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<Loader type="line" text="loading..." />`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <div style={{ height: "17rem", padding: "7rem" }}>
        <Loader type="dots" />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<Loader type="dots" />`}</p>
        </code>
      </CodeDrawer>
      <Separator />
      <div style={{ height: "25rem", padding: "12rem" }}>
        <Loader type="cube" />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<Loader type="cube" />`}</p>
        </code>
      </CodeDrawer>
      <Separator />
    </>
  );
};
