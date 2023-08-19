/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleUp,
  faUser as faUserReg,
} from "@fortawesome/free-regular-svg-icons";

import { CodeDrawer } from "../components/CodeDrawer";
import { Separator } from "@packages/cloud-react/lib/core/Separator";
import Doc from "../docs/buttons/index.mdx";

export const Buttons = () => (
  <div className="doc">
    <Doc npm="@polkadot-cloud/react" />

    <h4>Button Secondary</h4>
    <div className="sb-row">
      <Button type="secondary" text="Button" marginRight />
      <Button type="secondary" text="Button" iconLeft={faUser} marginRight />
      <Button type="secondary" text="Button" iconRight={faUser} marginRight />
      <Button
        type="secondary"
        lg
        text="Button"
        iconLeft={faUser}
        iconRight={faUser}
        marginRight
      />
      <Button type="secondary" lg text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="secondary" text="Button" marginRight />`}</p>
        <p>{`<Button type="secondary" text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<Button type="secondary" text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="secondary" lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="secondary" lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Button Tertiary</h4>
    <div className="sb-row">
      <Button type="tertiary" text="Button" marginRight />
      <Button type="tertiary" text="Button" iconLeft={faUser} marginRight />
      <Button type="tertiary" text="Button" iconRight={faUser} marginRight />
      <Button type="tertiary" text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="tertiary" text="Button" marginRight />`}</p>
        <p>{`<Button type="tertiary" text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<Button type="tertiary" text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="tertiary" lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Button Mono</h4>
    <div className="sb-row">
      <Button type="mono" text="Button" marginRight />
      <Button type="mono" text="Button" iconLeft={faUser} marginRight />
      <Button type="mono" text="Button" iconRight={faUser} marginRight />
      <Button
        type="mono"
        lg
        text="Button"
        iconLeft={faUser}
        iconRight={faUser}
        marginRight
      />
      <Button type="mono" lg text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="mono" text="Button" marginRight />`}</p>
        <p>{`<Button type="mono" text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<Button type="mono" text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="mono" lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="mono" lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Mono Invert</h4>
    <div className="sb-row">
      <Button type="monoInvert" text="Button" marginRight />
      <Button type="monoInvert" text="Button" iconLeft={faUser} marginRight />
      <Button type="monoInvert" text="Button" iconRight={faUser} marginRight />
      <Button
        type="monoInvert"
        lg
        text="Button"
        iconLeft={faUser}
        iconRight={faUser}
        marginRight
      />
      <Button type="monoInvert" lg text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="monoInvert" text="Button" marginRight />`}</p>
        <p>{`<Button type="monoInvert" text="Button" iconLeft={faUser} marginRight />`}</p>
        <p>{`<Button type="monoInvert" text="Button" iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="monoInvert" lg text="Button" iconLeft={faUser} iconRight={faUser} marginRight />`}</p>
        <p>{`<Button type="monoInvert" lg text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Text</h4>
    <div className="sb-row">
      <Button type="text" text="Button" marginRight />
      <Button type="text" text="Button" iconLeft={faUserReg} marginRight />
      <Button type="text" text="Button" iconRight={faUserReg} marginRight />
      <Button
        type="text"
        text="Button"
        iconLeft={faUserReg}
        iconRight={faUserReg}
        marginRight
      />
      <Button type="text" text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="text" text="Button" marginRight />`}</p>
        <p>{`<Button type="text" text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<Button type="text" text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<Button type="text"
                  text="Button"
                  iconLeft={faUserReg}
                  iconRight={faUserReg}
                  marginRight
                />`}</p>
        <p>{`<Button type="text" text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Submit</h4>
    <div className="sb-row">
      <Button type="submit" text="Button" marginRight />
      <Button
        type="submit"
        text="Button"
        iconLeft={faArrowAltCircleUp}
        marginRight
        colorSecondary
      />
      <Button
        type="submit"
        text="Button"
        iconRight={faArrowAltCircleUp}
        marginRight
      />
      <Button
        type="submit"
        text="Button"
        iconLeft={faArrowAltCircleUp}
        iconRight={faArrowAltCircleUp}
        marginRight
      />
      <Button type="submit" text="Button" pulse marginRight />
      <Button type="submit" text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="submit" text="Button" marginRight />`}</p>
        <p>{`<Button type="submit" text="Button" iconLeft={faArrowAltCircleUp} marginRight colorSecondary />`}</p>
        <p>{`<Button type="submit" text="Button" iconRight={faArrowAltCircleUp} marginRight />`}</p>
        <p>{`<Button type="submit" text="Button" iconLeft={faArrowAltCircleUp} iconRight={faArrowAltCircleUp} marginRight />`}</p>
        <p>{`<Button type="submit" text="Button" pulse marginRight />`}</p>
        <p>{`<Button type="submit" text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Submit Invert</h4>
    <div className="sb-row">
      <Button type="submitInvert" text="Button" marginRight />
      <Button
        type="submitInvert"
        text="Button"
        iconLeft={faUserReg}
        marginRight
      />
      <Button
        type="submitInvert"
        text="Button"
        iconRight={faUserReg}
        marginRight
      />
      <Button
        type="submitInvert"
        text="Button"
        iconLeft={faUserReg}
        iconRight={faUserReg}
        marginRight
      />
      <Button type="submitInvert" text="Button" disabled />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="submitInvert" text="Button" marginRight />`}</p>
        <p>{`<Button type="submitInvert" text="Button" iconLeft={faUserReg} marginRight />`}</p>
        <p>{`<Button type="submitInvert" text="Button" iconRight={faUserReg} marginRight />`}</p>
        <p>{`<Button type="submitInvert" text="Button" iconLeft={faUserReg} iconRight={faUserReg} marginRight />`}</p>
        <p>{`<Button type="submitInvert" text="Button" disabled />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Help</h4>
    <div className="sb-row">
      <Button type="help" marginRight />
      <Button type="help" backgroundSecondary />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="help" marginRight />`}</p>
        <p>{`<Button type="help" backgroundSecondary />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
    <h4>Button Tab</h4>
    <div className="sb-row">
      <Button type="tab" title={"Inactive"} />
      <Button type="tab" title={"Inactive"} badge={"123"} />
      <Button type="tab" active title={"Active"} />
      <Button type="tab" active title={"Active"} badge={"123"} />
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Button type="tab" title={"Inactive"} />`}</p>
        <p>{`<Button type="tab" title={"Inactive"} badge={"123"} />`}</p>
        <p>{`<Button type="tab" active title={"Active"} />`}</p>
        <p>{`<Button type="tab" active title={"Active"} badge={"123"} `}</p>
      </code>
    </CodeDrawer>
    <Separator />
  </div>
);
