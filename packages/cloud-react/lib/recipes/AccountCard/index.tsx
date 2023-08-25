/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { JSX, useEffect, useState } from "react";

import { Grid } from "../../base/structure/Grid";
import { Card } from "../../base/structure/Card";
import { GridJustify, GridSizes } from "../../base/types";
import { PolkadotIcon } from "../../icons/PolkadotIcon";
import { valEmpty } from "../../utils";

import "@polkadot-cloud/core/css/recipes/AccountCard/index.css";

interface AccountCardProps {
  name?: string;
  address?: string;
  fontClass?: string;
  ellipsis?: boolean;
  ellipsisAmount?: number;
  icon?: IconProps;
  extraComponent?: ExtraComponentProps;
}

const cut = (str: string, amount = 4) => {
  // having an amount less than 4 is a bit extreme so we default there
  if (amount <= 4) {
    return str.slice(0, 4) + "..." + str.slice(-4);
  }
  // if the amount requested is in a "logical" amount - meaning that it can display the address
  // without repeating the same information twice - then go for it;
  if (amount <= str.length / 2 - 3) {
    return str.slice(0, amount) + "..." + str.slice(-amount);
  }
  // else, the user has been mistaskenly extreme, so just show the maximum possible amount
  return (
    str.slice(0, str.length / 2 - 3) + "..." + str.slice(-(str.length / 2 - 3))
  );
};

export interface IconProps extends CompParams {
  canCopy?: boolean;
  position?: "left" | "right";
}

export interface ExtraComponentProps extends CompParams {
  component?: JSX.Element;
  position?: "left" | "right";
}

export interface CompParams {
  size?: GridSizes;
  justify?: GridJustify;
}

export const AccountCard = ({
  address,
  fontClass,
  ellipsis = false,
  ellipsisAmount = 7,
  icon,
  extraComponent,
}: AccountCardProps) => {
  const fontClasses: string[] = [
    "font-classes",
    valEmpty(fontClass, fontClass),
    valEmpty(ellipsis, "ellipsis"),
    "main-text",
  ];

  const structure = [];

  const [icSize, setIcSize] = useState<GridSizes | undefined>(icon?.size);
  const [mainSize, setMainSize] = useState<GridSizes>(12);
  const [xtraSize, setXtraSize] = useState<GridSizes | undefined>(
    extraComponent?.size
  );

  // Adjust the columns
  useEffect(() => {
    let iSize: GridSizes = 2;
    let xSize: GridSizes = 2;
    let mSize: GridSizes = 8;

    if (icon?.size || extraComponent?.size) {
      iSize = icon?.size || 2;
      xSize = extraComponent?.size || 2;
      mSize = (12 -
        ((icon ? iSize : 0) + (extraComponent ? xSize : 0))) as GridSizes;
      console.log("iconSize", iSize);
      console.log("extraComponentSize", xSize);
      console.log("mSize", mSize);
    }
    setIcSize(iSize);
    setXtraSize(xSize);
    setMainSize(mSize);
  }, [icon, extraComponent]);

  const IconComponent = (
    <Grid column sm={icSize} justify={icon?.justify}>
      <PolkadotIcon address={address} size={30} nocopy={!icon?.canCopy} />
    </Grid>
  );

  const MainTextComponent = (
    <Grid column sm={mainSize} justify={icon?.justify} alignItems="center">
      <div className={fontClasses?.join(" ")}>
        {ellipsis ? cut(address, ellipsisAmount) : address}
      </div>
    </Grid>
  );

  structure.push(MainTextComponent);

  if (icon) {
    if (icon?.position === "right") {
      structure.push(IconComponent);
    } else {
      structure.unshift(IconComponent);
    }
  }

  if (extraComponent) {
    if (!icon?.position) {
      if (extraComponent?.position === "right") {
        structure.unshift(
          <Grid
            column
            sm={xtraSize}
            justify={extraComponent?.justify}
            alignItems="center"
          >
            {extraComponent.component}
          </Grid>
        );
      } else {
        structure.push(
          <Grid
            column
            sm={xtraSize}
            justify={extraComponent?.justify}
            alignItems="center"
          >
            {extraComponent.component}
          </Grid>
        );
      }
    } else {
      if (icon?.position === "right") {
        structure.unshift(
          <Grid
            column
            sm={xtraSize}
            justify={extraComponent?.justify}
            alignItems="center"
          >
            {extraComponent.component}
          </Grid>
        );
      } else {
        structure.push(
          <Grid
            column
            sm={xtraSize}
            justify={extraComponent?.justify}
            alignItems="center"
          >
            {extraComponent.component}
          </Grid>
        );
      }
    }
  }

  return (
    <Grid row alignItems="center">
      <Card className="theme-border">{structure}</Card>
    </Grid>
  );
};
