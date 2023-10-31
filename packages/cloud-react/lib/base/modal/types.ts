/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ReactNode, RefObject } from "react";
import { ComponentBase, ComponentBaseWithClassName } from "../../utils/types";
import { AnimationProps } from "framer-motion";

export type ActionItemProps = ComponentBase & {
  // the title.
  text: string;
  // the state of the item.
  toggled?: boolean;
  // whether the item is disabled.
  disabled?: boolean;
  // the switch action.
  onToggle?: (val: boolean) => void;
  // whether the item should be inactive.
  inactive?: boolean;
  // optional inline button.
  inlineButton?: ReactNode;
};

export type ModalPaddingProps = ComponentBase & {
  // whether there is only vertical padding.
  verticalOnly?: boolean;
  // whether there is only horizontal padding.
  horizontalOnly?: boolean;
};

export type ModalCardProps = ComponentBaseWithClassName;

export type ModalNotesProps = ComponentBase & {
  // whether there is padding vertically.
  withPadding?: boolean;
};

export type ModalWarningsProps = ComponentBase & {
  // whether there is margin on top.
  withMargin?: boolean;
};

export type ModalFixedTitleProps = ComponentBase & {
  // whether there is customized css.
  withStyle?: boolean;
};

export type ModalSectionProps = ComponentBase & {
  // the type of window (tab | carousel).
  type: "tab" | "carousel";
};

export type ModalScrollProps = ComponentBase & {
  // the maximum width.
  size: string;
  // container ref.
  ref: RefObject<HTMLDivElement>;
};

export type ModalAnimationProps = ComponentBase & AnimationProps;

export type ModalConnectItemProps = ComponentBase & {
  // whether the item can be connected to.
  canConnect?: boolean;
};

export type CanvasScrollProps = ModalAnimationProps & {
  // the maximum width of the canvas.
  size?: "lg" | "xl";
  // allow scrolling.
  scroll?: boolean;
};

export type ModalContentProps = ModalAnimationProps & {
  // include canvas styling.
  canvas?: boolean;
};
