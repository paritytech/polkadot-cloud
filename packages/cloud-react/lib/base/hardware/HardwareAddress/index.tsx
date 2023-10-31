/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "../../../buttons/Button";
import { ComponentBase } from "../../../utils/types";
import {
  faCheck,
  faPlus,
  faTimes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, ReactNode, useState } from "react";
import { ellipsisFn, unescape } from "@polkadot-cloud/utils";
import "@polkadot-cloud/core/css/base/hardware/HardwareAddress/index.css";

export type HardwareAddressProps = ComponentBase & {
  // the address to import.
  address: string;
  // the index of the address.
  index: number;
  // initial value of address.
  initial: string;
  // whether to disable editing if address is imported.
  disableEditIfImported?: boolean;
  // identicon of address.
  Identicon: ReactNode;
  // handle rename
  renameHandler: (address: string, newName: string) => void;
  // handle whether address already exists.
  existsHandler: (address: string) => boolean;
  // handle remove UI.
  openRemoveHandler: (address: string) => void;
  // handle confirm import UI.
  openConfirmHandler: (address: string, index: number) => void;
  // required component translations.
  t: {
    tImport: string;
    tRemove: string;
  };
};

/**
 * @name HardwareAddress
 * @description An editable and importable address UI for hardware wallets.
 */
export const HardwareAddress = ({
  address,
  index,
  initial,
  disableEditIfImported = false,
  Identicon,
  existsHandler,
  renameHandler,
  openConfirmHandler,
  openRemoveHandler,
  t: { tImport, tRemove },
}: HardwareAddressProps) => {
  // store whether this address is being edited.
  const [editing, setEditing] = useState<boolean>(false);

  // store the currently saved name.
  const [name, setName] = useState<string>(initial);

  // store the currently edited name.
  const [editName, setEditName] = useState<string>(initial);

  const cancelEditing = () => {
    setEditName(name);
    setEditing(false);
  };

  const commitEdit = () => {
    let newName = editName;
    if (editName === "") {
      newName = ellipsisFn(address, 6);
    }
    if (newName !== name) {
      setName(newName);
      setEditName(newName);
      renameHandler(address, newName);
    }
    setEditing(false);
  };
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    let val = e.currentTarget.value || "";
    val = unescape(val);
    setEditName(val);
  };

  const isImported = existsHandler(address);
  return (
    <div className="hardware-address">
      <div className="content">
        <div className="inner">
          <div className="identicon">
            {Identicon}
            <div className="index-icon ">{index + 1}</div>
          </div>
          <div>
            <section className="row">
              <input
                disabled={isImported && disableEditIfImported}
                type="text"
                value={editing ? editName : name}
                onChange={(e) => handleChange(e)}
                onFocus={() => setEditing(true)}
                onBlur={() => commitEdit()}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    commitEdit();
                    e.currentTarget.blur();
                  }
                }}
              />

              {editing && (
                <div style={{ display: "flex" }}>
                  &nbsp;
                  <button
                    type="button"
                    className="edit"
                    onClick={() => commitEdit()}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      transform="grow-1"
                      className="icon"
                    />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="edit"
                    onClick={() => cancelEditing()}
                  >
                    <FontAwesomeIcon icon={faXmark} transform="grow-1" />
                  </button>
                </div>
              )}
            </section>
            <h5 className="full">
              <span>{address}</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="action">
        {isImported ? (
          <>
            <Button
              type="text"
              iconLeft={faTimes}
              text={tRemove}
              onClick={() => openRemoveHandler(address)}
            />
          </>
        ) : (
          <Button
            type="text"
            iconLeft={faPlus}
            text={tImport}
            onClick={() => openConfirmHandler(address, index)}
          />
        )}
      </div>
    </div>
  );
};
