// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, no-unused-vars */

import { unimplemented } from "@polkadot-cloud/utils";
import type {
  CanvasConfig,
  ModalConfig,
  OverlayContextInterface,
} from "./types";

export const defaultModalConfig: ModalConfig = {
  key: "",
  options: {},
  size: "large",
};

export const defaultCanvasConfig: CanvasConfig = {
  key: "",
  options: {},
};

export const defaultOverlayContext: OverlayContextInterface = {
  openOverlayInstances: 0,
  setOpenOverlayInstances: (direction, instanceType) => unimplemented,
  activeOverlayInstance: null,
  setActiveOverlayInstance: (instance) => unimplemented,
  canvas: {
    status: "closed",
    config: defaultCanvasConfig,
    openCanvas: (config) => unimplemented,
    closeCanvas: () => unimplemented,
    setCanvasStatus: (s) => unimplemented,
  },
  modal: {
    status: "closed",
    config: defaultModalConfig,
    modalHeight: 0,
    modalResizeCounter: 0,
    modalMaxHeight: 0,
    setModalResize: () => unimplemented,
    setModalHeight: () => unimplemented,
    setModalRef: (ref) => unimplemented,
    setModalHeightRef: (height) => unimplemented,
    setModalStatus: (status) => unimplemented,
    replaceModal: (config) => unimplemented,
    openModal: (config) => unimplemented,
  },
};
