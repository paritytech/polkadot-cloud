// Copyright 2023 @polkadot-cloud authors & contributors
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

// Assets
import CrossSVG from "../../assets/cross.svg?react";

export const Connect = () => {
  const { extensions } = useExtensions();
  const { replaceModal, setModalHeight, modalMaxHeight, setModalStatus } =
    useOverlay().modal;

  const installed = ExtensionsArray.filter((a) =>
    extensions.find((b) => b.id === a.id)
  );

  const other = ExtensionsArray.filter(
    (a) => !installed.find((b) => b.id === a.id)
  );

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
  }, [section, readOnlyOpen, newProxyOpen, extensions]);

  useEffect(() => {
    window.addEventListener("resize", refreshModalHeight);
    return () => {
      window.removeEventListener("resize", refreshModalHeight);
    };
  }, []);

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
          <button type="button" onClick={() => setModalStatus("closing")}>
            <CrossSVG style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>
        </div>
        <ModalFixedTitle ref={headerRef} withStyle>
          <ModalCustomHeader>
            <div className="first">
              <h1>{"Connect"}</h1>
              <Button
                type="primaryInvert"
                text={"goToAccounts"}
                iconRight={faChevronRight}
                iconTransform="shrink-3"
                onClick={() => replaceModal({ key: "Accounts" })}
                marginLeft
              />
            </div>
            <ModalSection type="tab">
              <Button
                type="tab"
                title={"Extensions"}
                onClick={() => setSection(0)}
                active={section === 0}
              />
              <Button
                type="tab"
                title={"readOnly"}
                onClick={() => setSection(1)}
                active={section === 1}
              />
              <Button
                type="tab"
                title={"proxies"}
                onClick={() => setSection(2)}
                active={section === 2}
              />
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
              <ActionItem text={"hardware"} />
              <div className="extensions-wrapper">
                <SelectItems layout="two-col">
                  {[Vault, Ledger].map((Item: AnyFunction, i: number) => (
                    <Item key={`hardware_item_${i}`} />
                  ))}
                </SelectItems>
              </div>

              <ActionItem text={"web"} />
              <div className="extensions-wrapper">
                <SelectItems layout="two-col">
                  {installed.concat(other).map((extension, i) => (
                    <Extension
                      key={`extension_item_${i}`}
                      meta={extension}
                      size={"1rem"}
                    />
                  ))}
                </SelectItems>
              </div>
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
