// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useContext } from "react";
import { OverlayContext } from ".";

export const useOverlay = () => useContext(OverlayContext);
