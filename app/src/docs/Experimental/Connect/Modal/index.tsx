/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Doc } from "./main";
import { ExtensionAccountsProvider } from "@packages/cloud-react/lib/connect/ExtensionAccountsProvider";
import { ExtensionsProvider } from "@packages/cloud-react/lib/connect/ExtensionsProvider";
import { NotificationsProvider } from "@packages/cloud-react/lib/recipes/Connect/NotificationsProvider";
import { VaultHardwareProvider } from "@packages/cloud-react/lib/recipes/Connect/Hardware/Vault";
import { LedgerHardwareProvider } from "@packages/cloud-react/lib/recipes/Connect/Hardware/Ledger";

import { useActiveAccounts } from "@packages/cloud-react/lib/recipes/Connect/ActiveAccountsProvider";
import { OtherAccountsProvider } from "@packages/cloud-react/lib/recipes/Connect/OtherAccountsProvider";
import { ImportedAccountsProvider } from "@packages/cloud-react/lib/recipes/Connect/ImportedAccountsProvider";
import { HelpProvider } from "@packages/cloud-react/lib/recipes/Connect/HelpProvider";
import { PromptProvider } from "@packages/cloud-react/lib/recipes/Connect/PromptProvider";

export const ModalConnect = () => {
  const { activeAccount, setActiveAccount } = useActiveAccounts();

  console.log("activeAccount", activeAccount);
  return (
    <NotificationsProvider>
      <VaultHardwareProvider>
        <LedgerHardwareProvider>
          <ExtensionsProvider>
            <ExtensionAccountsProvider
              dappName={"Something me"}
              network={"polkadot"}
              ss58={0}
              activeAccount={activeAccount}
              setActiveAccount={setActiveAccount}
            >
              <OtherAccountsProvider>
                <ImportedAccountsProvider>
                  <HelpProvider>
                    <PromptProvider>
                      <div className="doc">
                        <Doc
                          npm="@polkadot-cloud/react"
                          folder="Recipes/ModalConnect"
                        />
                      </div>
                    </PromptProvider>
                  </HelpProvider>
                </ImportedAccountsProvider>
              </OtherAccountsProvider>
            </ExtensionAccountsProvider>
          </ExtensionsProvider>
        </LedgerHardwareProvider>
      </VaultHardwareProvider>
    </NotificationsProvider>
  );
};
