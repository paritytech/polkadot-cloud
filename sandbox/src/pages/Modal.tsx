/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useState } from "react";
import { ActionItem, ButtonHelp } from "core-ui/index";
import { CodeDrawer } from "../components/CodeDrawer";

export const Modal = () => {
  const [parentToggle, setParentToggle] = useState<boolean>(false);

  return (
    <>
      <h4>Action Item</h4>
      <div className="row">
        <ActionItem text="Some Action" />
      </div>
      <CodeDrawer>
        <code>
          <p>{`<ActionItem text="Some Action" />`}</p>
        </code>
      </CodeDrawer>

      <h4>Action Item with Toggle</h4>
      <div className="row">
        <ActionItem
          text="Some Action With Toggle"
          toggled={parentToggle}
          onToggle={(val: boolean) => {
            console.log(val);
            setParentToggle(val);
          }}
          inlineButton={<ButtonHelp />}
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
    </>
  );
};
