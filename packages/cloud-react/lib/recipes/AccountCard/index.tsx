/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { JSX, useEffect, useState } from "react";

import { Grid } from "../../core/Grid";
import { Card } from "../../core/Card";
import { GridJustify, GridSizes } from "../../core/types";
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
  return str.slice(0, amount) + "..." + str.slice(-amount);
};

export interface IconProps extends CompParams {
  canCopy?: boolean;
  position?: "left" | "right";
}

export interface ExtraComponentProps extends CompParams {
  component?: JSX.Element;
}

export interface CompParams {
  size?: GridSizes;
  justify?: GridJustify;
}

export const AccountCard = ({
  name,
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
      mSize = (12 - ((iSize || 0) + (xSize || 0))) as GridSizes;
      console.log("iconSize", iSize);
      console.log("extraComponentSize", xSize);
      console.log("mSize", mSize);
    }
    if (icon && extraComponent) {
      setIcSize(2);
      setXtraSize(2);
      setMainSize(8);
    } else if (!icon && extraComponent) {
      setXtraSize(2);
      setMainSize(10);
    } else if (icon && !extraComponent) {
      setIcSize(2);
      setMainSize(10);
    }
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
    if (icon?.position === "left") {
      structure.unshift(IconComponent);
    } else {
      structure.push(IconComponent);
    }
  }

  if (extraComponent) {
    if (icon?.position === "left") {
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
    } else {
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
    }
  }

  return (
    <Grid row alignItems="center">
      <Card>{structure}</Card>
    </Grid>
  );
};
