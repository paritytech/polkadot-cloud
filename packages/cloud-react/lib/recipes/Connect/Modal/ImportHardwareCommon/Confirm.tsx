/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "../../../../buttons/Button";
import { Polkicon } from "../../../..//icons/Polkicon";
import { useOtherAccounts } from "../../../Connect/OtherAccountsProvider";
import type { ConfirmProps } from "./types";

import { usePrompt } from "../../PromptProvider";

import "./index.scss";

export const Confirm = ({ address, index, addHandler }: ConfirmProps) => {
  // TODO: fix translation
  const t = (s: string) => s;
  const { setStatus } = usePrompt();
  const { addOtherAccounts } = useOtherAccounts();

  return (
    <div className="confirm-wrapper">
      <Polkicon address={address} size="3rem" />
      <h3>{t("importAccount")}</h3>
      <h5>{address}</h5>
      <div className="footer">
        <Button
          type="monoInvert"
          text={t("cancel")}
          onClick={() => setStatus(0)}
        />
        <Button
          type="mono"
          text={t("importAccount")}
          onClick={() => {
            const account = addHandler(address, index);
            if (account) {
              addOtherAccounts([account]);
            }
            setStatus(0);
          }}
        />
      </div>
    </div>
  );
};
