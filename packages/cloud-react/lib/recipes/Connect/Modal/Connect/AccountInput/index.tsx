// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../../buttons/Button";
import { Polkicon } from "../../../../../icons/Polkicon";
import { isValidAddress } from "@polkadot-cloud/utils";
import { FormEvent, useEffect, useState } from "react";
import { useOverlay } from "../../../../../overlay/OverlayProvider/useOverlay";
import { useImportedAccounts } from "../../../Providers/ImportedAccountsProvider";
import { formatAccountSs58 } from "../../../Utils";
import type { AccountInputProps } from "./types";
import { useConnectConfig } from "../../../Providers/ConnectConfigProvider";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/Connect/AccountInput/index.css";

export const AccountInput = ({
  successCallback,
  resetCallback,
  defaultLabel,
  resetOnSuccess = false,
  successLabel,
  locked = false,
  inactive = false,
  disallowAlreadyImported = true,
  initialValue = null,
  border = true,
}: AccountInputProps) => {
  const { ss58 } = useConnectConfig();
  const { accounts } = useImportedAccounts();
  const { setModalResize } = useOverlay().modal;

  // store current input value
  const [value, setValue] = useState(initialValue || "");

  // store whether current input value is valid
  const [valid, setValid] = useState<string | null>(null);

  // store whether address was formatted (displays confirm prompt)
  const [reformatted, setReformatted] = useState(false);

  // store whether the form is being submitted.
  const [submitting, setSubmitting] = useState<boolean>(false);

  // store whether account input is in success lock state.
  const [successLock, setSuccessLocked] = useState<boolean>(locked);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    // set value on key change
    setValue(newValue);

    // reset reformatted if true - value has changed
    if (reformatted) {
      setReformatted(false);
    }

    // reset valid if empty value
    if (newValue === "") {
      setValid(null);
      return;
    }
    // check address already imported
    const alreadyImported = accounts.find(
      (a) => a.address.toUpperCase() === newValue.toUpperCase()
    );
    if (alreadyImported !== undefined && disallowAlreadyImported) {
      setValid("already_imported");
      return;
    }
    // check if valid address
    setValid(isValidAddress(newValue) ? "valid" : "not_valid");
  };

  const handleImport = async () => {
    // reformat address if in wrong format
    const addressFormatted = formatAccountSs58(value, ss58);
    if (addressFormatted) {
      setValid("confirm_reformat");
      setValue(addressFormatted);
      setReformatted(true);
    } else {
      // handle successful import.
      setSubmitting(true);
      const result = await successCallback(value);
      setSubmitting(false);

      // reset state on successful import.
      if (result && resetOnSuccess) {
        resetInput();
      } else {
        // flag reset & lock state.
        setSuccessLocked(true);
      }
    }
  };

  // If initial value changes, update current input value.
  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  let label;
  let labelClass;
  const showSuccess = successLock && successLabel;

  switch (valid) {
    case "confirm_reformat":
      label = "Confirm Reformat";
      labelClass = "neutral";

      break;
    case "already_imported":
      label = "Already Imported";
      labelClass = "danger";
      break;
    case "not_valid":
      label = "Invalid";
      labelClass = "danger";
      break;
    case "valid":
      label = showSuccess ? successLabel : "Valid";
      labelClass = showSuccess ? "neutral" : "success";
      break;
    default:
      label = showSuccess ? successLabel : defaultLabel;
      labelClass = "neutral";
      break;
  }

  const handleConfirm = () => {
    setValid("valid");
    setReformatted(false);
    handleImport();
  };

  const resetInput = () => {
    setReformatted(false);
    setValue("");
    setValid(null);
    setModalResize();
    setSuccessLocked(false);
    if (resetCallback) {
      resetCallback();
    }
  };

  const className = [];
  if (inactive) className.push("inactive");
  if (border) className.push("border");

  return (
    <div
      className={
        className.length ? className.join(" ") + " some-div" : "some-div"
      }
    >
      {inactive && <div className="inactive-block" />}
      <h5 className={labelClass}>
        {successLock && (
          <>
            <FontAwesomeIcon icon={faCheck} />
            &nbsp;
          </>
        )}{" "}
        {label}
      </h5>
      <div className={`input${successLock ? ` disabled` : ``}`}>
        <section>
          <div>
            {isValidAddress(value) ? (
              <Polkicon address={value} size="2rem" />
            ) : (
              <div className="ph" />
            )}
          </div>
          <div>
            <input
              placeholder="Address"
              type="text"
              onChange={(e: FormEvent<HTMLInputElement>) => handleChange(e)}
              value={value}
              disabled={successLock}
            />
          </div>
        </section>
        <section>
          {successLock ? (
            <>
              <Button
                type="secondary"
                onClick={() => resetInput()}
                text="Reset"
              />
            </>
          ) : (
            <>
              {!reformatted ? (
                <Button
                  type="secondary"
                  onClick={() => handleImport()}
                  text={submitting ? "Importing" : "Import"}
                  disabled={valid !== "valid" || submitting}
                />
              ) : (
                <Button
                  type="secondary"
                  onClick={() => handleConfirm()}
                  text="Confirm"
                />
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};
