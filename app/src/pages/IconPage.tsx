/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Polkicon } from "@packages/cloud-react/lib/icons/Polkicon";

import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { CodeDrawer } from "../components/CodeDrawer";
import { Separator } from "@packages/cloud-react/lib/core/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconPage = () => (
  <>
    <div className="sb-head">
      <h1>Icons</h1>
      <h2>A small collection of plug-and-play icons.</h2>
      <h3>
        <FontAwesomeIcon icon={faNpm} />
        <a
          href="https://www.npmjs.com/package/@polkadot-cloud/react"
          target="_blank"
          rel="noreferrer"
        >
          @polkadot-cloud/react
        </a>
      </h3>
    </div>

    <div className="sb-row">
      <div style={{ display: "flex" }}>
        <div style={{ height: "100px" }}>asdasdasd</div>
        <div style={{ width: "100px" }}>
          <Polkicon
            type="space"
            account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8"
          />
        </div>
        <div style={{ width: "100px" }}>something</div>
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Polkicon width={300} height={300} />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <div className="sb-row">
      <div style={{ display: "flex" }}>
        <div style={{ height: "100px" }}>asdasdasd</div>
        <div style={{ width: "100px" }}>
          <Polkicon account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8" />
        </div>
        <div style={{ width: "100px" }}>something</div>
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Polkicon width={300} height={300} />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <div className="sb-row">
      <div style={{ display: "flex" }}>
        <div style={{ height: "100px" }}>asdasdasd</div>
        <div style={{ width: "100px" }}>
          <Polkicon
            type="hexagon"
            account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8"
          />
        </div>
        <div style={{ width: "100px" }}>something</div>
      </div>
      {/* <Polkicon
        copy={false}
        type="hexagon"
        account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8"
        side={50}
      />
      <Polkicon
        copy={false}
        type="hexagon"
        account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8"
        side={30}
      />
      <Polkicon
        copy={false}
        type="hexagon"
        account="1ufCEiMzQTudMBHUFpePpnhGvG783Tpz5d7XZ86cQhDNqy8"
        side={10}
      />*/}
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Polkicon width={300} height={300} />`}</p>
      </code>
    </CodeDrawer>
    <Separator />
  </>
);
