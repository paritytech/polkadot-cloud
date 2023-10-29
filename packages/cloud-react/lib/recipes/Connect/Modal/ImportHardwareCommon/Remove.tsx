/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Button } from "../../../../buttons/Button";
import { Polkicon } from "../../../../icons/Polkicon";
import { usePrompt } from "../../PromptProvider";
import { useOtherAccounts } from "../../OtherAccountsProvider";
import type { RemoveProps } from "./types";

import "./index.scss";

export const Remove = ({ address, getHandler, removeHandler }: RemoveProps) => {
  // TODO: fix translation
  const t = (s: string) => s;
  const { setStatus } = usePrompt();
  const { forgetOtherAccounts } = useOtherAccounts();

  return (
    <div className="confirm-wrapper">
      <Polkicon address={address} size="3rem" />
      <h3>{t("removeAccount")}</h3>
      <h5>{address}</h5>
      <div className="footer">
        <Button
          type="monoInvert"
          text={t("cancel")}
          onClick={() => setStatus(0)}
        />
        <Button
          type="mono"
          text={t("removeAccount")}
          onClick={() => {
            const account = getHandler(address);
            if (account) {
              removeHandler(address);
              forgetOtherAccounts([account]);
              setStatus(0);
            }
          }}
        />
      </div>
    </div>
  );
};
