/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { CodeDrawer } from "../components/CodeDrawer";
import { ActionItem } from "@packages/cloud-react/lib/modal/ActionItem";

export const Modal = () => {
  const [parentToggle, setParentToggle] = useState<boolean>(false);

  return (
    <div className="doc">
      <h1>Modal Components</h1>
      <h4>Action Item</h4>
      <div className="sb-row">
        <ActionItem text="Some Action" />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<ActionItem text="Some Action" />`}</p>
        </code>
      </CodeDrawer>

      <h4>Action Item with Toggle</h4>
      <div className="sb-row">
        <ActionItem
          text="Some Action With Toggle"
          toggled={parentToggle}
          onToggle={(val: boolean) => {
            console.log(val);
            setParentToggle(val);
          }}
          inlineButton={<Button type="help" />}
        />
      </div>
      <div style={{ margin: "1rem 0" }}>
        {!parentToggle ? <>Hidden...</> : <>Some Content</>}
      </div>
      <CodeDrawer>
        <code>
          <p>{`<ActionItem
          text="Some Action"
          toggled={parentToggle}
          onToggle={(val: boolean) => 
            setParentToggle(val)
          }
        />`}</p>
        </code>
      </CodeDrawer>
    </div>
  );
};
