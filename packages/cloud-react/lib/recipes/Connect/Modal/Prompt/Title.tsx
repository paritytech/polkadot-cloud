// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../../buttons/Button";
import type { FunctionComponent } from "react";

import { usePrompt } from "../../Providers/PromptProvider";
import { Any } from "../../../../utils/types";

import "@polkadot-cloud/core/css/recipes/Connect/Modal/Prompt/index.css";

interface TitleProps {
  title: string;
  icon?: IconProp;
  Svg?: FunctionComponent<Any>;
  helpKey?: string;
  hideDone?: boolean;
  closeText?: string;
}

export const Title = ({
  title,
  icon,
  Svg,
  hideDone,
  closeText,
}: TitleProps) => {
  const { closePrompt } = usePrompt();

  const graphic = Svg ? (
    <Svg style={{ width: "1.5rem", height: "1.5rem" }} />
  ) : icon ? (
    <FontAwesomeIcon transform="grow-3" icon={icon} />
  ) : null;

  return (
    <div className="title-wrapper">
      <div>
        {graphic}
        <h2>{title}</h2>
      </div>
      {hideDone !== true ? (
        <div>
          <Button
            type="secondary"
            text={closeText || "Done"}
            onClick={() => closePrompt()}
          />
        </div>
      ) : null}
    </div>
  );
};
