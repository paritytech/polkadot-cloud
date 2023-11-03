// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ActionItem } from "../../../../base/modal/ActionItem";
import { Button } from "../../../../buttons/Button";

import { ModalFixedTitle } from "../../../../base/modal/ModalFixedTitle";
import { ModalMotionThreeSection } from "../../../../base/modal/ModalMotionThreeSection";
import { ModalPadding } from "../../../../base/modal/ModalPadding";
import { ModalSection } from "../../../../base/modal/ModalSection";
import { ModalCustomHeader } from "../../../../base/modal/ModalCustomHeader";

import { ExtensionsArray } from "@polkadot-cloud/assets/extensions";
import { useEffect, useRef, useState } from "react";
import { useExtensions } from "../../../../connect/ExtensionsProvider/useExtensions";
import { useEffectIgnoreInitial } from "../../../../base/hooks/useEffectIgnoreInitial";
import { useOverlay } from "../../../../overlay/OverlayProvider/useOverlay";

import { SelectItems } from "./SelectItems";
import type { AnyFunction } from "../../../../utils/types";
import { Extension } from "./Extension";
import { Ledger } from "./Ledger";
import { Proxies } from "./Proxies";
import { ReadOnly } from "./ReadOnly";
import { Vault } from "./Vault";

import { Buffer } from "buffer";
window.Buffer = Buffer;

import { useConnectConfig } from "../../Providers/ConnectConfigProvider";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/Connect/index.css";

export const Connect = () => {
  const { wallets } = useConnectConfig();

  const hardwareActive = wallets?.hardwareActive;
  const webActive = wallets?.webActive;
  const devActive = wallets?.devActive;
  const readOnlyActive = wallets?.readOnlyActive;
  const proxiesActive = wallets?.proxiesActive;

  if (
    !hardwareActive &&
    !webActive &&
    !devActive &&
    !readOnlyActive &&
    !proxiesActive
  ) {
    throw new Error(
      "All possible wallet options (web, hardware and dev) are inactive!"
    );
  }

  const { extensionsStatus } = useExtensions();
  const { replaceModal, setModalHeight, modalMaxHeight, setModalStatus } =
    useOverlay().modal;

  const web = ExtensionsArray.filter((a) => a.id !== "polkadot-js");
  const pjs = ExtensionsArray.filter((a) => a.id === "polkadot-js");

  const installed = web.filter((a) =>
    Object.keys(extensionsStatus).find((key) => key === a.id)
  );
  const other = web.filter((a) => !installed.find((b) => b.id === a.id));

  // toggle read only management
  const [readOnlyOpen, setReadOnlyOpen] = useState(false);

  // toggle proxy delegate management
  const [newProxyOpen, setNewProxyOpen] = useState(false);

  // active modal section
  const [section, setSection] = useState<number>(0);

  // refs for wrappers
  const headerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const readOnlyRef = useRef<HTMLDivElement>(null);
  const proxiesRef = useRef<HTMLDivElement>(null);

  const refreshModalHeight = () => {
    // Preserve height by taking largest height from modals.
    let height = headerRef.current?.clientHeight || 0;
    height += Math.max(
      homeRef.current?.clientHeight || 0,
      readOnlyRef.current?.clientHeight || 0,
      proxiesRef.current?.clientHeight || 0
    );
    setModalHeight(height);
  };

  // Resize modal on state change.
  useEffectIgnoreInitial(() => {
    refreshModalHeight();
  }, [section, readOnlyOpen, newProxyOpen, extensionsStatus]);

  useEffect(() => {
    window.addEventListener("resize", refreshModalHeight);
    return () => {
      window.removeEventListener("resize", refreshModalHeight);
    };
  }, []);

  useEffect(() => {
    if (hardwareActive || webActive || devActive) {
      setSection(0);
    } else if (readOnlyActive) {
      setSection(1);
    } else {
      setSection(2);
    }
  }, [hardwareActive, webActive, devActive]);

  return (
    <>
      <ModalSection type="carousel">
        <div
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "1.5rem",
            zIndex: "2",
          }}
        >
          <Button
            type="text"
            text={"X"}
            onClick={() => setModalStatus("closing")}
          />
        </div>
        <ModalFixedTitle ref={headerRef} withStyle>
          <ModalCustomHeader>
            <div className="first">
              <h1>{"Connect"}</h1>
              <Button
                type="primaryInvert"
                text="Go To Accounts"
                iconRight={faChevronRight}
                iconTransform="shrink-3"
                onClick={() => replaceModal({ key: "Accounts" })}
                marginLeft
              />
            </div>
            <ModalSection type="tab">
              {hardwareActive || webActive || devActive ? (
                <Button
                  type="tab"
                  title={"Extensions"}
                  onClick={() => setSection(0)}
                  active={section === 0}
                />
              ) : null}
              {readOnlyActive ? (
                <Button
                  type="tab"
                  title="Read Only"
                  onClick={() => setSection(1)}
                  active={section === 1}
                />
              ) : null}
              {proxiesActive ? (
                <Button
                  type="tab"
                  title="Proxies"
                  onClick={() => setSection(2)}
                  active={section === 2}
                />
              ) : null}
            </ModalSection>
          </ModalCustomHeader>
        </ModalFixedTitle>

        <ModalMotionThreeSection
          style={{
            maxHeight: modalMaxHeight - (headerRef.current?.clientHeight || 0),
          }}
          animate={
            section === 0 ? "home" : section === 1 ? "readOnly" : "proxies"
          }
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.1,
          }}
          variants={{
            home: {
              left: 0,
            },
            readOnly: {
              left: "-100%",
            },
            proxies: {
              left: "-200%",
            },
          }}
        >
          <div className="section">
            <ModalPadding horizontalOnly ref={homeRef}>
              {hardwareActive || hardwareActive === undefined ? (
                <>
                  <ActionItem text="Hardware" />
                  <div className="extensions-wrapper">
                    <SelectItems layout="two-col">
                      {[Vault, Ledger].map((Item: AnyFunction, i: number) => (
                        <Item key={`hardware_item_${i}`} />
                      ))}
                    </SelectItems>
                  </div>
                </>
              ) : null}
              {webActive ? (
                <>
                  <ActionItem text="Web" />
                  <div className="extensions-wrapper">
                    <SelectItems layout="two-col">
                      {installed.concat(other).map((extension, i) => (
                        <Extension
                          key={`extension_item_${i}`}
                          meta={extension}
                        />
                      ))}
                    </SelectItems>
                  </div>
                </>
              ) : null}
              {devActive ? (
                <>
                  <ActionItem text="Developer Tools" />
                  <div className="extensions-wrapper">
                    <SelectItems layout="two-col">
                      {pjs.map((extension, i) => (
                        <Extension
                          key={`extension_item_${i}`}
                          meta={extension}
                        />
                      ))}
                    </SelectItems>
                  </div>
                </>
              ) : null}
            </ModalPadding>
          </div>
          <div className="section">
            <ModalPadding horizontalOnly ref={readOnlyRef}>
              <ReadOnly
                setInputOpen={setReadOnlyOpen}
                inputOpen={readOnlyOpen}
              />
            </ModalPadding>
          </div>
          <div className="section">
            <ModalPadding horizontalOnly ref={proxiesRef}>
              <Proxies
                setInputOpen={setNewProxyOpen}
                inputOpen={newProxyOpen}
              />
            </ModalPadding>
          </div>
        </ModalMotionThreeSection>
      </ModalSection>
    </>
  );
};
