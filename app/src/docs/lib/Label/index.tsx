/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

interface Props {
  text: string;
  type?: string;
}
export const Label = ({ text, type }: Props) => {
  return (
    <div className="label">
      <span className={type ? type : undefined}>{text}</span>
    </div>
  );
};
