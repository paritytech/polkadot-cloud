/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */
import { H3 } from "@docs/Headers";
import { Props } from "./types";

export const UtilsComponent = ({
  title,
  description,
  params,
  component,
}: Props) => {
  return (
    <>
      <H3 id="title">{title}</H3>
      <p>{description}</p>
      <div className="params">
        {params.map((prm) => {
          const param = prm.split(":");
          return (
            <p key={param[0]}>
              <span>{param[0]}</span>
              {param[1]}
            </p>
          );
        })}
      </div>
      {component}
    </>
  );
};
