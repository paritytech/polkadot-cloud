// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonPrimaryInvert,
  ActionItem,
  Separator,
} from "@polkadotcloud/core-ui";
import { EXTENSIONS } from "../config/extensions";
import { useExtensions } from "../contexts/Extensions";
import { ExtensionConfig } from "../contexts/Extensions/types";
import { SelectItems } from "./SelectItems";
import { useState } from "react";
import { Extension } from "./Extension";
import { ReadOnly } from "./ReadOnly";

import "../../styles/index.scss";

export const Connect = () => {
  const { extensions } = useExtensions();

  const installed = EXTENSIONS.filter((a: ExtensionConfig) =>
    extensions.find((b: ExtensionConfig) => b.id === a.id)
  );

  const other = EXTENSIONS.filter(
    (a: ExtensionConfig) =>
      !installed.find((b: ExtensionConfig) => b.id === a.id)
  );

  // toggle read only management
  const [readOnlyOpen, setReadOnlyOpen] = useState(false);

  return (
    <div className="paddingWrapper">
      <div className="customHeaderWrapper">
        <h1>
          Connect
          <ButtonPrimaryInvert
            text="Go To Accounts"
            iconRight={faChevronRight}
            iconTransform="shrink-3"
            onClick={() => console.log("TODO: Some log")}
            // onClick={() =>  replaceModalWith("Accounts", {}, "large")}
          />
        </h1>
      </div>

      <ActionItem text="Extensions" />
      <div className="extensionWrapper">
        <SelectItems>
          {installed
            .concat(other)
            .map((extension: ExtensionConfig, i: number) => {
              return (
                <Extension key={`active_extension_${i}`} meta={extension} />
              );
            })}
        </SelectItems>
      </div>
      <Separator />
      <ActionItem text="Read Only Accounts" />
      <ReadOnly setReadOnlyOpen={setReadOnlyOpen} readOnlyOpen={readOnlyOpen} />
    </div>
  );
};
