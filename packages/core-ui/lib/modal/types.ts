/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";

export type ActionItemProps = ComponentBase & {
  text: string;
  toggled?: boolean;
  disabled?: boolean;
  onToggle?: (val: boolean) => void;
};

export type ModalPaddingProps = ComponentBase & {
  verticalOnly?: boolean;
  horizontalOnly?: boolean;
};

export type ModalNotesProps = ComponentBase & {
  withPadding?: boolean;
};

export type ModalWarningsProps = ComponentBase & {
  withMargin?: boolean;
};

export type ModalFixedTitleProps = ComponentBase & {
  withStyle?: boolean;
};

export type ModalSectionProps = ComponentBase & {
  multiSections?: boolean;
  threeSections?: boolean;
  tabs?: boolean;
};

export type ModalMotionSectionProps = ComponentBase & {
  twoSections?: boolean;
  threeSections?: boolean;
};
