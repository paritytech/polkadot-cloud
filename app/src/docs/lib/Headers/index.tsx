/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactNode } from "react";
import AnchorSVG from "../../../svg/anchor.svg?react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const H1 = ({ children, className, id }: Props) => {
  return (
    <>
      <h1 className={className}>
        {id ? <a href={`#${id}`}>{children}</a> : children}
        <Anchor id={id} />
      </h1>
    </>
  );
};

export const H2 = ({ children, className, id }: Props) => {
  return (
    <>
      <h2 className={className}>
        {id ? <a href={`#${id}`}>{children}</a> : children}
        <Anchor id={id} />
      </h2>
    </>
  );
};

export const H3 = ({ children, className, id }: Props) => {
  return (
    <>
      <h3 className={className}>
        {id ? <a href={`#${id}`}>{children}</a> : children}
        <Anchor id={id} />
      </h3>
    </>
  );
};

export const H4 = ({ children, className, id }: Props) => {
  return (
    <>
      <h4 className={className}>
        {id ? <a href={`#${id}`}>{children}</a> : children}
        <Anchor id={id} />
      </h4>
    </>
  );
};

export const H5 = ({ children, className, id }: Props) => {
  return (
    <>
      <h5 className={className}>
        {id ? <a href={`#${id}`}>{children}</a> : children}
        <Anchor id={id} />
      </h5>
    </>
  );
};

const Anchor = ({ id }: { id: string }) => (
  <>
    <span className="anchor" id={id} />
    {id && (
      <a href={`#${id}`} className="anc">
        <AnchorSVG />
      </a>
    )}
  </>
);
